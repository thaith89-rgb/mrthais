#!/usr/bin/env node
// Dựng toàn bộ video của 1 ngày: node scripts/build-day.mjs <thư-mục>
// Với mỗi <thư-mục>/kich-ban/video-*.json: tạo giọng đọc (msedge-tts) → render Remotion → <thư-mục>/video/video-N.mp4
import { bundle } from "@remotion/bundler";
import { ensureBrowser, renderMedia, selectComposition } from "@remotion/renderer";
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";
import { HttpsProxyAgent } from "https-proxy-agent";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const config = JSON.parse(fs.readFileSync(path.join(ROOT, "config.json"), "utf8"));
const FPS = config.fps;
const PAD = 0.35; // giây nghỉ sau lời đọc mỗi cảnh
const MIN = { hook: 2.5, cta: 4 };
const SEC_PER_WORD = 0.38;
const TTS_TRIES = 3;

const dayArg = process.argv[2];
if (!dayArg) {
  console.error("Cách dùng: node scripts/build-day.mjs <thư-mục>   (ví dụ: node scripts/build-day.mjs 19.10)");
  process.exit(1);
}
const DAY = path.resolve(ROOT, dayArg);
const SCRIPT_DIR = path.join(DAY, "kich-ban");
const AUDIO_DIR = path.join(DAY, ".audio");
const OUT_DIR = path.join(DAY, "video");
const LOG = path.join(DAY, "build-log.md");

const files = fs.existsSync(SCRIPT_DIR)
  ? fs
      .readdirSync(SCRIPT_DIR)
      .filter((f) => /^video-\d+\.json$/.test(f))
      .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]))
  : [];
if (!files.length) {
  console.error(`Không tìm thấy kịch bản nào trong ${SCRIPT_DIR}/video-*.json`);
  process.exit(1);
}
fs.mkdirSync(AUDIO_DIR, { recursive: true });
fs.mkdirSync(OUT_DIR, { recursive: true });

const logLines = [`# Build log – ${dayArg}`, "", `Thời điểm: ${new Date().toISOString()}`, ""];
const log = (s) => {
  console.log(s);
  logLines.push(s);
};
const warn = (s) => {
  console.warn(`\n⚠️  CẢNH BÁO: ${s}\n`);
  logLines.push(`- ⚠️ **CẢNH BÁO**: ${s}`);
};

// WebSocket của msedge-tts không tự dùng biến môi trường proxy → truyền agent nếu có HTTPS_PROXY.
const PROXY = process.env.HTTPS_PROXY || process.env.https_proxy;
const proxyAgent = PROXY ? new HttpsProxyAgent(PROXY) : undefined;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const norm = (s) => s.toLowerCase().normalize("NFC").replace(/[^\p{L}\p{N}]/gu, "");

/** Ghép mốc thời gian của TTS với từ trong lời đọc gốc để giữ dấu câu (phục vụ ngắt cụm phụ đề). */
function alignWords(voice, boundaries) {
  const tokens = voice.split(/\s+/).filter(Boolean);
  let ti = 0;
  return boundaries.map((b) => {
    for (let k = ti; k < Math.min(tokens.length, ti + 4); k++) {
      if (norm(tokens[k]) === norm(b.text)) {
        ti = k + 1;
        return { ...b, text: tokens[k] };
      }
    }
    return b;
  });
}

function estimateWords(voice) {
  return voice
    .split(/\s+/)
    .filter(Boolean)
    .map((t, i) => ({ text: t, start: +(i * SEC_PER_WORD).toFixed(3), end: +((i + 1) * SEC_PER_WORD).toFixed(3) }));
}

function audioDuration(file) {
  try {
    const out = execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", file]);
    const d = parseFloat(String(out));
    if (Number.isFinite(d) && d > 0) return d;
  } catch {}
  // MP3 48 kbps CBR → thời lượng = số byte * 8 / 48000
  return (fs.statSync(file).size * 8) / 48000;
}

async function ttsOnce(text, outFile) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "tts-"));
  const tts = new MsEdgeTTS({ agent: proxyAgent, connectionTimeoutMs: 15000, synthesisTimeoutMs: 60000 });
  try {
    await tts.setMetadata(config.voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3, { wordBoundaryEnabled: true });
    const { audioFilePath, metadataFilePath } = await tts.toFile(tmp, text, { rate: config.voiceRate });
    if (!fs.existsSync(audioFilePath) || fs.statSync(audioFilePath).size < 1000) throw new Error("File audio rỗng");
    fs.copyFileSync(audioFilePath, outFile);
    let words = [];
    if (metadataFilePath && fs.existsSync(metadataFilePath)) {
      const meta = JSON.parse(fs.readFileSync(metadataFilePath, "utf8")).Metadata ?? [];
      words = meta
        .filter((m) => m.Type === "WordBoundary")
        .map((m) => ({
          text: m.Data.text.Text,
          start: m.Data.Offset / 1e7,
          end: (m.Data.Offset + m.Data.Duration) / 1e7,
        }));
    }
    return words;
  } finally {
    tts.close();
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

let ttsDown = false; // dịch vụ giọng đọc không truy cập được → bỏ qua TTS cho các video sau

/** Trả về danh sách cảnh có thời lượng, đường audio và mốc thời gian từ; hoặc null nếu TTS lỗi. */
async function voiceVideo(name, scenes) {
  if (ttsDown) return null;
  const dir = path.join(AUDIO_DIR, name);
  fs.mkdirSync(dir, { recursive: true });
  const out = [];
  for (let i = 0; i < scenes.length; i++) {
    const sc = scenes[i];
    const file = path.join(dir, `scene-${i + 1}.mp3`);
    let words = null;
    let lastErr = null;
    for (let attempt = 1; attempt <= TTS_TRIES && !words; attempt++) {
      try {
        words = await ttsOnce(sc.voice, file);
      } catch (e) {
        lastErr = e;
        console.warn(`  TTS ${name} cảnh ${i + 1} lỗi (lần ${attempt}/${TTS_TRIES}): ${e?.message ?? e}`);
        if (attempt < TTS_TRIES) await sleep(2000 * attempt);
      }
    }
    if (!words) {
      ttsDown = true;
      warn(
        `Không tạo được giọng đọc cho ${name} (cảnh ${i + 1}) sau ${TTS_TRIES} lần: ${lastErr?.message ?? lastErr}. ` +
          `Video sẽ render KHÔNG CÓ TIẾNG, thời lượng ước lượng ${SEC_PER_WORD} giây/từ. ` +
          `Kiểm tra quyền truy cập speech.platform.bing.com và api.msedgeservices.com trong cài đặt Network của môi trường cloud.`
      );
      return null;
    }
    const dur = audioDuration(file);
    const aligned = words.length ? alignWords(sc.voice, words) : estimateWords(sc.voice).map((w) => {
      const k = dur / Math.max(1, sc.voice.split(/\s+/).filter(Boolean).length) / SEC_PER_WORD;
      return { ...w, start: w.start * k, end: w.end * k };
    });
    out.push({ dur, audio: `${name}/scene-${i + 1}.mp3`, words: aligned });
  }
  return out;
}

function sceneFrames(type, seconds) {
  return Math.ceil(Math.max(seconds + PAD, MIN[type] ?? 0) * FPS);
}

/** Chromium cài sẵn trong môi trường cloud (Playwright). */
function localChromium() {
  if (process.env.REMOTION_BROWSER) return process.env.REMOTION_BROWSER;
  const root = "/opt/pw-browsers";
  if (!fs.existsSync(root)) return null;
  return (
    fs
      .readdirSync(root)
      .filter((d) => d.startsWith("chromium_headless_shell-"))
      .sort()
      .reverse()
      .map((d) => path.join(root, d, "chrome-linux", "headless_shell"))
      .find((p) => fs.existsSync(p)) ?? null
  );
}

async function getBrowser() {
  // Ưu tiên Chromium có sẵn: môi trường cloud thường chặn tải Chrome của Remotion (remotion.media).
  const local = localChromium();
  if (local) {
    log(`- Trình duyệt render: ${local}`);
    return local;
  }
  await ensureBrowser();
  return undefined; // dùng Chrome Headless Shell của Remotion
}

const t0 = Date.now();
const results = [];
const props = [];

for (const f of files) {
  const name = f.replace(/\.json$/, "");
  const script = JSON.parse(fs.readFileSync(path.join(SCRIPT_DIR, f), "utf8"));
  console.log(`\n▶ ${name}: ${script.title} (${script.scenes.length} cảnh) – tạo giọng đọc…`);
  const voiced = await voiceVideo(name, script.scenes);
  const scenes = script.scenes.map((sc, i) => {
    if (voiced) {
      const v = voiced[i];
      return { ...sc, durationInFrames: sceneFrames(sc.type, v.dur), audio: v.audio, words: v.words };
    }
    const words = estimateWords(sc.voice);
    return { ...sc, durationInFrames: sceneFrames(sc.type, words.length * SEC_PER_WORD), audio: null, words };
  });
  const inputProps = { title: script.title, sources: script.sources ?? [], scenes };
  fs.writeFileSync(path.join(AUDIO_DIR, `${name}.props.json`), JSON.stringify(inputProps, null, 2));
  props.push({ name, inputProps, hasVoice: !!voiced });
}

console.log("\n▶ Bundle Remotion…");
const browserExecutable = await getBrowser();
const serveUrl = await bundle({ entryPoint: path.join(ROOT, "src", "index.ts"), publicDir: AUDIO_DIR });

for (const { name, inputProps, hasVoice } of props) {
  const out = path.join(OUT_DIR, `${name}.mp4`);
  const tr = Date.now();
  const composition = await selectComposition({ serveUrl, id: "NewsVideo", inputProps, browserExecutable });
  let last = -1;
  await renderMedia({
    composition,
    serveUrl,
    codec: "h264",
    crf: 20,
    audioCodec: "aac",
    imageFormat: "jpeg",
    jpegQuality: 90,
    outputLocation: out,
    inputProps,
    browserExecutable,
    onProgress: ({ progress }) => {
      const p = Math.floor(progress * 10);
      if (p !== last) {
        last = p;
        process.stdout.write(`  ${name}: ${p * 10}%\r`);
      }
    },
  });
  const seconds = composition.durationInFrames / composition.fps;
  const mb = fs.statSync(out).size / 1024 / 1024;
  results.push({ name, seconds, mb, hasVoice, renderSec: (Date.now() - tr) / 1000, title: inputProps.title });
  console.log(`  ${name}: xong → ${path.relative(ROOT, out)}`);
}

const total = (Date.now() - t0) / 1000;
const table = [
  "| Video | Tiêu đề | Thời lượng | Dung lượng | Giọng đọc | Render |",
  "|---|---|---|---|---|---|",
  ...results.map(
    (r) =>
      `| ${r.name}.mp4 | ${r.title} | ${r.seconds.toFixed(1)} s | ${r.mb.toFixed(2)} MB | ${r.hasVoice ? "Có" : "KHÔNG"} | ${r.renderSec.toFixed(0)} s |`
  ),
];
logLines.push("", "## Kết quả", "", ...table, "", `Tổng thời gian: ${total.toFixed(0)} s`);
fs.writeFileSync(LOG, logLines.join("\n") + "\n");
console.log("\n" + table.join("\n"));
console.log(`\nTổng thời gian: ${total.toFixed(0)} s. Log: ${path.relative(ROOT, LOG)}`);
if (results.some((r) => !r.hasVoice)) console.warn("\n⚠️  CẢNH BÁO: có video KHÔNG có giọng đọc – xem build-log.md");
console.log(
  `\nXem thử khung hình: npx remotion still src/index.ts NewsVideo out.png --props=${path.relative(ROOT, AUDIO_DIR)}/video-1.props.json --public-dir=${path.relative(ROOT, AUDIO_DIR)} --frame=30`
);

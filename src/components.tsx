import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C, CHANNEL, FONT, SAFE, TRANSITION } from "./theme";
import type { Source, Word } from "./types";

/** Nền động: gradient chuyển chậm + lưới mảnh trôi nhẹ để khung hình không bị tĩnh. */
export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const shift = (frame * 0.6) % 80;
  const glowX = 50 + Math.sin(frame / 90) * 25;
  const glowY = 35 + Math.cos(frame / 120) * 15;
  return (
    <AbsoluteFill style={{ backgroundColor: C.bg }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${C.accent}33 0%, transparent 45%),
            radial-gradient(circle at ${100 - glowX}% ${100 - glowY}%, #2B6CB055 0%, transparent 50%)`,
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${C.text}0D 2px, transparent 2px), linear-gradient(90deg, ${C.text}0D 2px, transparent 2px)`,
          backgroundSize: "80px 80px",
          backgroundPosition: `${shift}px ${shift}px`,
        }}
      />
      <AbsoluteFill style={{ background: `linear-gradient(180deg, transparent 60%, ${C.bg}CC 100%)` }} />
    </AbsoluteFill>
  );
};

export const ProgressBar: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const p = Math.min(1, (frame + 1) / durationInFrames);
  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 10, backgroundColor: `${C.text}26` }}>
      <div style={{ width: `${p * 100}%`, height: "100%", backgroundColor: C.accent }} />
    </div>
  );
};

export const ChannelTag: React.FC = () => (
  <div
    style={{
      position: "absolute",
      top: 50,
      left: SAFE.left,
      fontFamily: FONT,
      fontWeight: 600,
      fontSize: 38,
      color: C.text,
      opacity: 0.85,
      display: "flex",
      alignItems: "center",
      gap: 14,
    }}
  >
    <div style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: C.accent }} />
    {CHANNEL}
  </div>
);

export const SourceLine: React.FC<{ sources: Source[] }> = ({ sources }) => {
  const names = Array.from(new Set(sources.map((s) => s.name))).join(", ");
  if (!names) return null;
  return (
    <div
      style={{
        position: "absolute",
        bottom: SAFE.bottom + 20,
        left: SAFE.left,
        right: SAFE.right,
        fontFamily: FONT,
        fontWeight: 400,
        fontSize: 30,
        lineHeight: 1.3,
        color: C.text,
        opacity: 0.7,
      }}
    >
      Nguồn: {names}
    </div>
  );
};

/** Chia lời đọc thành cụm 3–6 từ, ưu tiên ngắt sau dấu câu. */
export const chunkWords = (words: Word[]): Word[][] => {
  const chunks: Word[][] = [];
  let cur: Word[] = [];
  words.forEach((w) => {
    cur.push(w);
    const punct = /[.,;:!?…]$/.test(w.text);
    if ((cur.length >= 3 && punct) || cur.length >= 6) {
      chunks.push(cur);
      cur = [];
    }
  });
  if (cur.length) {
    // Tránh cụm cuối quá ngắn: gộp vào cụm trước nếu được.
    const prev = chunks[chunks.length - 1];
    if (cur.length < 3 && prev && prev.length + cur.length <= 7) prev.push(...cur);
    else chunks.push(cur);
  }
  return chunks;
};

/** Phụ đề chạy theo lời đọc, từ đang đọc tô màu accent; đặt quanh 70% chiều cao. */
export const Subtitles: React.FC<{ words: Word[] }> = ({ words }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;
  if (!words.length) return null;
  const chunks = chunkWords(words);
  let idx = chunks.findIndex((c) => t < c[c.length - 1].end);
  if (idx === -1) idx = chunks.length - 1;
  const chunk = chunks[idx];
  if (t < chunk[0].start - 0.3 && idx === 0) return null;
  return (
    <div
      style={{
        position: "absolute",
        top: 1290,
        left: SAFE.left,
        right: SAFE.right,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#00000080",
          borderRadius: 24,
          padding: "16px 28px",
          fontFamily: FONT,
          fontWeight: 800,
          fontSize: 54,
          lineHeight: 1.25,
          textAlign: "center",
          color: C.text,
          maxWidth: "100%",
        }}
      >
        {chunk.map((w, i) => {
          const active = t >= w.start && t < w.end + 0.05;
          return (
            <span key={i} style={{ color: active ? C.accent : C.text }}>
              {w.text}
              {i < chunk.length - 1 ? " " : ""}
            </span>
          );
        })}
      </div>
    </div>
  );
};

/** Chuyển cảnh: mờ dần + trượt nhẹ ở đầu và cuối mỗi cảnh. */
export const Transition: React.FC<{ duration: number; children: React.ReactNode }> = ({ duration, children }) => {
  const frame = useCurrentFrame();
  const inP = interpolate(frame, [0, TRANSITION], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const outP = interpolate(frame, [duration - TRANSITION, duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = (1 - inP) * 60 - (1 - outP) * 60;
  return (
    <AbsoluteFill style={{ opacity: Math.min(inP, outP), transform: `translateY(${y}px)` }}>{children}</AbsoluteFill>
  );
};

/** Vùng nội dung chính: nằm giữa phần tiêu đề kênh và phụ đề, tránh lề phải 140px. */
export const ContentArea: React.FC<{ children: React.ReactNode; justify?: React.CSSProperties["justifyContent"] }> = ({
  children,
  justify = "center",
}) => (
  <div
    style={{
      position: "absolute",
      top: 170,
      bottom: 1920 - 1250,
      left: SAFE.left,
      right: SAFE.right,
      display: "flex",
      flexDirection: "column",
      justifyContent: justify,
      fontFamily: FONT,
      color: C.text,
    }}
  >
    {children}
  </div>
);

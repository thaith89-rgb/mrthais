import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ContentArea } from "../components";
import { C, FONT } from "../theme";
import type { Scene, Source } from "../types";

type Of<T extends Scene["type"]> = Extract<Scene, { type: T }>;

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

/** Cỡ chữ theo độ dài để không tràn khung. */
const fit = (text: string, sizes: [number, number][]) => {
  for (const [max, size] of sizes) if (text.length <= max) return size;
  return sizes[sizes.length - 1][1];
};

const Heading: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame, fps, config: { damping: 200 } });
  return (
    <div style={{ marginBottom: 56, opacity: s, transform: `translateX(${(1 - s) * -40}px)` }}>
      <div style={{ fontSize: fit(text, [[22, 76], [36, 64], [999, 54]]), fontWeight: 800, lineHeight: 1.2 }}>{text}</div>
      <div style={{ marginTop: 20, height: 8, width: 140 * s, backgroundColor: C.accent, borderRadius: 4 }} />
    </div>
  );
};

export const Hook: React.FC<{ scene: Of<"hook"> }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame, fps, config: { damping: 9, stiffness: 160, mass: 0.6 } });
  const scale = interpolate(pop, [0, 1], [0.4, 1]);
  const underline = spring({ frame: frame - 10, fps, config: { damping: 200 } });
  return (
    <ContentArea>
      <div
        style={{
          fontSize: fit(scene.text, [[20, 128], [36, 108], [56, 92], [999, 78]]),
          fontWeight: 800,
          lineHeight: 1.15,
          transform: `scale(${scale})`,
          transformOrigin: "left center",
          textShadow: "0 8px 30px #00000066",
        }}
      >
        {scene.text}
      </div>
      <div style={{ marginTop: 40, height: 14, width: `${underline * 60}%`, backgroundColor: C.accent, borderRadius: 7 }} />
    </ContentArea>
  );
};

/** "1.234,5" → 1234.5 (định dạng số kiểu Việt Nam). */
const parseVN = (s: string) => {
  const m = s.match(/-?[\d.,]+/);
  if (!m) return null;
  const n = Number(m[0].replace(/\./g, "").replace(",", "."));
  return Number.isFinite(n) ? n : null;
};

const formatVN = (n: number, decimals: number) => {
  const [int, dec] = Math.abs(n).toFixed(decimals).split(".");
  const intFmt = int.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return (n < 0 ? "-" : "") + intFmt + (dec ? "," + dec : "");
};

export const Stat: React.FC<{ scene: Of<"stat"> }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const target = parseVN(scene.value);
  const decimals = (scene.value.match(/,(\d+)/)?.[1].length ?? 0) as number;
  const p = interpolate(frame, [4, 4 + fps * 1.2], [0, 1], { ...clamp, easing: (t) => 1 - Math.pow(1 - t, 3) });
  const shown =
    target === null ? scene.value : scene.value.replace(/-?[\d.,]+/, formatVN(target * p, decimals));
  const change = scene.change?.trim();
  const down = !!change && /^[-−–]/.test(change);
  const color = down ? C.down : C.up;
  const enter = spring({ frame: frame - 6, fps, config: { damping: 14 } });
  return (
    <ContentArea>
      <div style={{ fontSize: fit(scene.label, [[24, 64], [40, 54], [999, 46]]), fontWeight: 600, opacity: 0.9 }}>
        {scene.label}
      </div>
      <div
        style={{
          fontSize: fit(scene.value, [[6, 220], [9, 170], [999, 130]]),
          fontWeight: 800,
          color: C.accent,
          lineHeight: 1.05,
          marginTop: 20,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {shown}
      </div>
      {scene.unit && <div style={{ fontSize: 50, fontWeight: 600, marginTop: 10 }}>{scene.unit}</div>}
      {change && (
        <div
          style={{
            marginTop: 50,
            display: "flex",
            alignItems: "center",
            gap: 20,
            opacity: enter,
            transform: `translateY(${(1 - enter) * 40}px)`,
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "34px solid transparent",
              borderRight: "34px solid transparent",
              [down ? "borderTop" : "borderBottom"]: `52px solid ${color}`,
            }}
          />
          <div style={{ fontSize: 76, fontWeight: 800, color }}>{change}</div>
        </div>
      )}
      {scene.note && <div style={{ marginTop: 40, fontSize: 36, opacity: 0.75, fontStyle: "italic" }}>{scene.note}</div>}
    </ContentArea>
  );
};

export const Points: React.FC<{ scene: Of<"points">; durationInFrames: number }> = ({ scene, durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  // Các ý hiện lần lượt, rải đều trong ~60% đầu cảnh.
  const step = Math.max(8, Math.floor((durationInFrames * 0.6) / Math.max(1, scene.items.length)));
  return (
    <ContentArea>
      <Heading text={scene.heading} />
      {scene.items.map((item, i) => {
        const s = spring({ frame: frame - 10 - i * step, fps, config: { damping: 16 } });
        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 28,
              marginBottom: 40,
              opacity: s,
              transform: `translateX(${(1 - s) * 80}px)`,
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: 64,
                height: 64,
                borderRadius: 32,
                backgroundColor: C.accent,
                color: C.bg,
                fontSize: 38,
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 2,
              }}
            >
              {i + 1}
            </div>
            <div style={{ fontSize: fit(item, [[30, 56], [55, 50], [999, 44]]), fontWeight: 600, lineHeight: 1.3 }}>
              {item}
            </div>
          </div>
        );
      })}
    </ContentArea>
  );
};

export const Chart: React.FC<{ scene: Of<"chart"> }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const max = Math.max(...scene.bars.map((b) => b.value), 0.0001);
  const maxH = 560;
  const n = scene.bars.length;
  const decimals = Math.max(0, ...scene.bars.map((b) => (String(b.value).split(".")[1] ?? "").length));
  return (
    <ContentArea justify="flex-start">
      <div style={{ marginTop: 40 }}>
        <Heading text={scene.heading} />
      </div>
      {scene.unit && <div style={{ fontSize: 36, opacity: 0.75, marginTop: -30, marginBottom: 20 }}>Đơn vị: {scene.unit}</div>}
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: n > 5 ? 18 : 30 }}>
        {scene.bars.map((b, i) => {
          const g = spring({ frame: frame - 8 - i * 6, fps, config: { damping: 18 } });
          const last = i === n - 1;
          return (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ fontSize: n > 5 ? 32 : 40, fontWeight: 800, marginBottom: 12, opacity: g, color: last ? C.accent : C.text }}>
                {formatVN(b.value * g, decimals)}
              </div>
              <div
                style={{
                  width: "100%",
                  height: Math.max(6, (b.value / max) * maxH * g),
                  borderRadius: "14px 14px 0 0",
                  background: last ? C.accent : `linear-gradient(180deg, ${C.text}CC, ${C.text}55)`,
                }}
              />
              <div style={{ fontSize: n > 5 ? 28 : 34, fontWeight: 600, marginTop: 14, opacity: 0.85 }}>{b.label}</div>
            </div>
          );
        })}
      </div>
    </ContentArea>
  );
};

export const Cta: React.FC<{ scene: Of<"cta">; sources: Source[] }> = ({ scene, sources }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame, fps, config: { damping: 10, stiffness: 140 } });
  const pulse = 1 + Math.sin(frame / 6) * 0.03;
  const list = spring({ frame: frame - 12, fps, config: { damping: 200 } });
  return (
    <ContentArea>
      <div
        style={{
          alignSelf: "flex-start",
          backgroundColor: C.accent,
          color: C.bg,
          borderRadius: 28,
          padding: "28px 40px",
          fontSize: fit(scene.text, [[28, 68], [44, 58], [999, 50]]),
          fontWeight: 800,
          lineHeight: 1.2,
          transform: `scale(${pop * pulse})`,
          transformOrigin: "left center",
        }}
      >
        {scene.text}
      </div>
      <div style={{ marginTop: 60, opacity: list, fontFamily: FONT }}>
        <div style={{ fontSize: 40, fontWeight: 800, marginBottom: 16 }}>Nguồn tham khảo:</div>
        {sources.slice(0, 4).map((s, i) => (
          <div key={i} style={{ fontSize: 34, lineHeight: 1.35, opacity: 0.9, marginBottom: 8 }}>
            • {s.name}
            {s.date ? ` (${s.date})` : ""}
          </div>
        ))}
        <div style={{ marginTop: 40, fontSize: 36, fontStyle: "italic", color: C.accent, lineHeight: 1.35 }}>
          Thông tin tham khảo, không phải lời khuyên đầu tư.
        </div>
      </div>
    </ContentArea>
  );
};

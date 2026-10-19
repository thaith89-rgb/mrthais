import React from "react";
import { Composition } from "remotion";
import { NewsVideo } from "./NewsVideo";
import { FPS, H, W } from "./theme";
import type { VideoProps } from "./types";

const est = (text: string) =>
  text.split(/\s+/).filter(Boolean).map((t, i) => ({ text: t, start: i * 0.38, end: (i + 1) * 0.38 }));

// Props mặc định để xem trong Studio; khi render thật, build-day.mjs truyền inputProps.
const defaultProps: VideoProps = {
  title: "Xem thử",
  sources: [{ name: "Dữ liệu minh hoạ – không phải tin thật" }],
  scenes: [
    { type: "hook", text: "VIDEO MẪU – Xem thử bố cục", voice: "Đây là video mẫu để xem thử bố cục.", durationInFrames: 90, audio: null, words: est("Đây là video mẫu để xem thử bố cục.") },
    { type: "cta", text: "Theo dõi để cập nhật 17h mỗi ngày", voice: "Theo dõi kênh để cập nhật mỗi ngày.", durationInFrames: 120, audio: null, words: est("Theo dõi kênh để cập nhật mỗi ngày.") },
  ],
};

export const RemotionRoot: React.FC = () => (
  <Composition
    id="NewsVideo"
    component={NewsVideo}
    width={W}
    height={H}
    fps={FPS}
    durationInFrames={FPS * 10}
    defaultProps={defaultProps}
    calculateMetadata={({ props }) => ({
      durationInFrames: Math.max(1, props.scenes.reduce((s, sc) => s + sc.durationInFrames, 0)),
    })}
  />
);

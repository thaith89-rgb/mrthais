export type Source = { name: string; title?: string; url?: string; date?: string };

export type Bar = { label: string; value: number };

export type Scene =
  | { type: "hook"; text: string; voice: string }
  | { type: "stat"; label: string; value: string; unit?: string; change?: string; note?: string; voice: string }
  | { type: "points"; heading: string; items: string[]; voice: string }
  | { type: "chart"; heading: string; bars: Bar[]; unit?: string; voice: string }
  | { type: "cta"; text: string; voice: string };

/** Mốc thời gian từng từ trong lời đọc, tính bằng giây từ đầu cảnh. */
export type Word = { text: string; start: number; end: number };

export type RenderScene = Scene & {
  durationInFrames: number;
  audio: string | null; // đường dẫn tương đối trong publicDir
  words: Word[];
};

export type VideoProps = {
  title: string;
  sources: Source[];
  scenes: RenderScene[];
};

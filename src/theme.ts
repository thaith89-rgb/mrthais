import { continueRender, delayRender } from "remotion";
import config from "../config.json";
import f400 from "./fonts/BeVietnamPro-400.ttf";
import f600 from "./fonts/BeVietnamPro-600.ttf";
import f800 from "./fonts/BeVietnamPro-800.ttf";

// Be Vietnam Pro (Google Fonts, giấy phép OFL) được đóng gói sẵn trong repo thay vì tải từ
// fonts.gstatic.com lúc render: Chromium trong môi trường cloud không tải được font qua proxy.
const FAMILY = "Be Vietnam Pro";
if (typeof document !== "undefined") {
  const handle = delayRender("Tải font Be Vietnam Pro");
  Promise.all(
    ([[f400, "400"], [f600, "600"], [f800, "800"]] as const).map(async ([url, weight]) => {
      const face = new FontFace(FAMILY, `url(${url})`, { weight });
      await face.load();
      document.fonts.add(face);
    })
  ).then(() => continueRender(handle));
}

export const FONT = `"${FAMILY}", sans-serif`;
export const C = config.colors;
export const CHANNEL = config.channelName;
export const FPS = config.fps;
export const W = config.width;
export const H = config.height;
// Vùng an toàn TikTok: không đặt chữ quan trọng ở 250px dưới cùng và 140px bên phải.
export const SAFE = { left: 80, right: 140, bottom: 250, top: 140 };
export const TRANSITION = 8;

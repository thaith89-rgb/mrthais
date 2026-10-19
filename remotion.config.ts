import { Config } from "@remotion/cli/config";
import { existsSync, readdirSync } from "node:fs";

Config.setVideoImageFormat("jpeg");

// Môi trường cloud có thể chặn tải Chrome của Remotion → dùng Chromium cài sẵn nếu có.
const findBrowser = (): string | null => {
  if (process.env.REMOTION_BROWSER) return process.env.REMOTION_BROWSER;
  const root = "/opt/pw-browsers";
  if (!existsSync(root)) return null;
  for (const d of readdirSync(root).filter((d) => d.startsWith("chromium_headless_shell-")).sort().reverse()) {
    const p = `${root}/${d}/chrome-linux/headless_shell`;
    if (existsSync(p)) return p;
  }
  return null;
};
const browser = findBrowser();
if (browser) Config.setBrowserExecutable(browser);

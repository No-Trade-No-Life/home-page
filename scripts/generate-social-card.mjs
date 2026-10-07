import { chromium } from "@playwright/test";
import { readFile } from "node:fs/promises";

const font = await readFile(
  new URL(
    "../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
    import.meta.url,
  ),
  "base64",
);
const paths = Array.from({ length: 65 }, (_, j) => {
  const v = (j / 65) * Math.PI * 2;
  const coordinates = Array.from({ length: 181 }, (_, i) => {
    const u = (i / 180) * Math.PI * 2;
    const twist = v + u * 3;
    const radius = 1.52 + (0.5 + 0.08 * Math.sin(u * 3)) * Math.cos(twist);
    const x = radius * Math.cos(u),
      y = radius * Math.sin(u),
      z = 0.53 * Math.sin(twist);
    const y1 = y * Math.cos(1.02) - z * Math.sin(1.02);
    const z1 = y * Math.sin(1.02) + z * Math.cos(1.02);
    const x1 = x * Math.cos(-0.42) - y1 * Math.sin(-0.42);
    const y2 = x * Math.sin(-0.42) + y1 * Math.cos(-0.42);
    const perspective = 5.6 / (5.6 - z1);
    return `${i === 0 ? "M" : "L"}${(290 + x1 * 122 * perspective).toFixed(2)},${(260 + y2 * 122 * perspective).toFixed(2)}`;
  }).join(" ");
  return `<path d="${coordinates}" fill="none" stroke="${j % 12 < 3 ? "#c4f780" : "#cbdad1"}" stroke-opacity="${j % 12 < 3 ? 0.5 : 0.32}" stroke-width="0.8"/>`;
}).join("");
const browser = await chromium.launch({ channel: "chrome", headless: true });
try {
  const context = await browser.newContext({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  await page.setContent(`<!doctype html><html lang="en"><head><style>
    @font-face{font-family:Manrope;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:200 800}
    *{box-sizing:border-box}body{margin:0;background:#080b09;color:#eef0e9;font-family:Manrope,sans-serif;width:1200px;height:630px;overflow:hidden}
    .grid{position:absolute;inset:0;background-image:linear-gradient(#cadcce06 1px,transparent 1px),linear-gradient(90deg,#cadcce06 1px,transparent 1px);background-size:60px 60px}
    .brand{position:absolute;top:44px;left:60px;display:flex;align-items:center;gap:12px;font-size:27px;font-weight:800;letter-spacing:-1px}
    .brand svg{color:#c4f780}.domain{position:absolute;right:60px;top:49px;font-size:14px;color:#93a48a;letter-spacing:2px}
    .eyebrow{position:absolute;left:60px;top:153px;color:#adbea4;font-size:14px;letter-spacing:2.8px}
    h1{position:absolute;left:54px;top:177px;font-size:90px;font-weight:800;letter-spacing:-6px;line-height:1.03;margin:0;z-index:2}h1 span{color:#c4f780}
    .description{position:absolute;left:60px;top:396px;font-size:18px;color:#9caa94;line-height:1.8}
    .ring{position:absolute;width:590px;height:520px;right:-5px;top:40px}
    .footer{position:absolute;bottom:47px;left:60px;right:60px;padding-top:22px;border-top:1px solid #c4f78022;display:flex;justify-content:space-between;font-size:14px;color:#a3b698}
  </style></head><body><div class="grid"></div><div class="brand"><svg width="32" height="32" viewBox="0 0 32 32"><path d="M4 26V6h5l14 20h5V6h-5v12L14 6H9v20z" fill="currentColor"/><path d="M4 26 28 6" stroke="#080b09" stroke-width="2.5"/></svg>NTNL</div><span class="domain">NTNL.IO</span><div class="eyebrow">INTELLIGENCE. CONNECTION. VALUE.</div><h1>NO TRADE.<br>NO <span>LIFE.</span></h1><div class="description">Seven independent products.<br>One evolving, open ecosystem.</div><svg class="ring" viewBox="0 0 590 520">${paths}</svg><div class="footer">${["□ Linkit", "△ Cybion", "○ NormAI", "× CTX", "Midas", "1Exchange", "HIT"].map((name) => `<span>${name}</span>`).join("")}</div></body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: new URL("../public/social-card.png", import.meta.url).pathname,
  });
  console.log("Created public/social-card.png (1200 × 630).");
} finally {
  await browser.close();
}

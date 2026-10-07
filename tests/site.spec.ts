import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const products = [
  "Linkit",
  "Cybion",
  "NormAI",
  "CTX",
  "Midas",
  "1Exchange",
  "HIT",
];
async function resizeForLayout(page: Page, width: number, height = 1000) {
  await page.setViewportSize({ width, height });
  // INVARIANT: viewport metrics can change before Chrome has recomputed media
  // queries and viewport-unit tokens. Measure only after the new CSS resolves.
  const gutter = Math.min(80, Math.max(24, Number((width * 0.045).toFixed(2))));
  await expect(page.locator("#ecosystem")).toHaveCSS(
    "padding-left",
    `${gutter}px`,
  );
  await expect(page.locator("body")).toHaveCSS(
    "font-size",
    width > 900 ? "20px" : "18px",
  );
  await expect(page.locator(".card-top").first()).toHaveCSS(
    "padding-left",
    `${width <= 650 ? 24 : width <= 1100 ? 32 : 40}px`,
  );
}

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
});
test("seven products, local assets, no browser errors", async ({ page }) => {
  const errors: string[] = [];
  const remote: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("request", (request) => {
    if (!request.url().startsWith("http://127.0.0.1:4174"))
      remote.push(request.url());
  });
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "NO TRADE.NO LIFE.",
  );
  await expect(page.locator(".product-card")).toHaveCount(7);
  for (const name of products)
    await expect(
      page
        .locator(".card-identity")
        .getByRole("heading", { name, exact: true }),
    ).toBeAttached();
  await expect(page.locator("canvas")).toHaveAttribute("aria-label", /旋转/);
  expect(errors).toEqual([]);
  expect(remote).toEqual([]);
});
test("product category filtering", async ({ page }) => {
  await page
    .locator(".filters")
    .getByRole("button", { name: /智能协作/ })
    .click();
  await expect(page.locator(".product-card")).toHaveCount(4);
  await expect(page.locator(".card-midas")).toHaveCount(0);
  await page
    .locator(".filters")
    .getByRole("button", { name: /价值流通/ })
    .click();
  await expect(page.locator(".product-card")).toHaveCount(3);
  await expect(page.locator(".card-cybion")).toHaveCount(0);
  await page
    .locator(".filters")
    .getByRole("button", { name: /全部产品/ })
    .click();
  await expect(page.locator(".product-card")).toHaveCount(7);
});
test("all seven detail dialogs, correct external links, Escape, and focus return", async ({
  page,
}) => {
  for (const name of products) {
    const trigger = page
      .locator(".product-grid")
      .getByRole("button", { name: `了解产品 ${name}`, exact: true });
    await trigger.click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(
      dialog.getByRole("heading", { name, exact: true }),
    ).toBeVisible();
    const link = dialog.getByRole("link", { name: `打开产品 ${name}` });
    await expect(link).toHaveAttribute(
      "href",
      /^https:\/\/(linkit|cybion|normai|ctx|midas|1ex|hit)\.ntnl\.io$/,
    );
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
    if (name === "HIT")
      await expect(dialog.locator(".risk-note")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
    await expect(trigger).toBeFocused();
  }
});
test("language menu, translated details, and persistent choice", async ({
  page,
}) => {
  await page.getByRole("button", { name: "选择语言" }).click();
  await page.getByRole("menuitemradio", { name: "English" }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator("#ecosystem-title")).toHaveText(
    "Powerful alone.Better together.",
  );
  await page
    .locator(".product-grid")
    .getByRole("button", { name: "Discover product NormAI" })
    .click();
  await expect(page.getByRole("dialog")).toContainText(
    "USD billing and Midas settlement",
  );
  await page.getByRole("button", { name: "Close", exact: true }).click();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.getByRole("button", { name: "Choose language" }).click();
  await page.getByRole("menuitemradio", { name: "简体中文" }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "zh-CN");
});
test("connected workflows and payment layer", async ({ page }) => {
  await expect(page.locator(".flow-map .flow-node")).toHaveCount(4);
  await page
    .locator(".flow-tabs")
    .getByRole("button", { name: "交易执行" })
    .click();
  await expect(page.locator(".flow-map")).toHaveAttribute("data-flow", "value");
  await expect(page.locator(".flow-map .flow-node")).toHaveCount(3);
  await page.locator(".settlement-node").click();
  await expect(
    page
      .getByRole("dialog")
      .getByRole("heading", { name: "Midas", exact: true }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await page
    .locator(".flow-tabs")
    .getByRole("button", { name: "智能协作" })
    .click();
  await expect(page.locator(".flow-map .flow-node")).toHaveCount(4);
  await expect(page.locator(".settlement-node")).toHaveCount(0);
});
test("motion control and reduced-motion preference", async ({ page }) => {
  await page.getByRole("button", { name: "暂停动态效果" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-paused", "true");
  await page.getByRole("button", { name: "播放动态效果" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-paused", "false");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-paused", "true");
});
test("anchor navigation including a direct deep link", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.getByRole("link", { name: "探索产品宇宙" }).click();
  await expect(page).toHaveURL(/#ecosystem$/);
  await expect(page.locator("#ecosystem-title")).toBeInViewport();
  await page.goto("/#philosophy");
  await expect(page.locator("#philosophy-title")).toBeInViewport();
});
test("no horizontal overflow in both languages", async ({ page }) => {
  for (const width of [320, 360, 390, 768, 1024, 1440, 1920]) {
    await resizeForLayout(page, width, 900);
    await page.evaluate(
      () =>
        new Promise<void>((resolve) =>
          requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
        ),
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  await page.getByRole("button", { name: "选择语言" }).click();
  await page.getByRole("menuitemradio", { name: "English" }).click();
  for (const width of [320, 360, 390, 768, 1024, 1440, 1920]) {
    await resizeForLayout(page, width, 900);
    await page.evaluate(
      () =>
        new Promise<void>((resolve) =>
          requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
        ),
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
});
test("responsive header navigation", async ({ page, isMobile }) => {
  if (!isMobile) {
    await page
      .locator(".desktop-nav")
      .getByRole("link", { name: "我们的理念" })
      .click();
    await expect(page).toHaveURL(/#philosophy$/);
    return;
  }
  await page.getByRole("button", { name: "打开导航", exact: true }).click();
  await page.getByRole("menuitem", { name: "我们的理念" }).click();
  await expect(page).toHaveURL(/#philosophy$/);
  await expect(page.getByRole("menu")).toHaveCount(0);
});
test("accessibility audit, including product dialog", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await page.evaluate(() => document.fonts.ready);
  const pageResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(pageResults.violations).toEqual([]);
  await page
    .locator(".product-grid")
    .getByRole("button", { name: "了解产品 HIT", exact: true })
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
  const dialogResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(dialogResults.violations).toEqual([]);
});

test("every rendered label is at least 14px, including artwork, menus, and dialogs", async ({
  page,
}) => {
  const auditType = async () => {
    const undersized = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("body *"))
        .filter(
          (element) =>
            !["SCRIPT", "STYLE", "NOSCRIPT"].includes(element.tagName) &&
            element.getClientRects().length > 0 &&
            getComputedStyle(element).visibility !== "hidden" &&
            Array.from(element.childNodes).some(
              (node) =>
                node.nodeType === Node.TEXT_NODE && node.textContent?.trim(),
            ),
        )
        .filter(
          (element) => parseFloat(getComputedStyle(element).fontSize) < 14,
        )
        .map((element) => ({
          text: element.textContent?.trim().slice(0, 80),
          size: getComputedStyle(element).fontSize,
          className: String(element.className),
        }));
    });
    expect(undersized).toEqual([]);
  };
  for (const locale of ["zh", "en"]) {
    if (locale === "en") {
      await page.getByRole("button", { name: "选择语言" }).click();
      await auditType();
      await page.getByRole("menuitemradio", { name: "English" }).click();
      await expect(page.getByRole("menu")).toHaveCount(0);
    }
    for (const width of [320, 360, 390, 768, 1024, 1440, 1920]) {
      await resizeForLayout(page, width);
      await auditType();
      const copySizes = await page
        .locator(".card-bottom p")
        .evaluateAll((elements) =>
          elements.map((element) =>
            parseFloat(getComputedStyle(element).fontSize),
          ),
        );
      expect(copySizes.every((size) => size >= (width > 900 ? 20 : 18))).toBe(
        true,
      );
    }
    await resizeForLayout(page, 390, 844);
    for (const name of products) {
      await page
        .locator(".product-grid")
        .getByRole("button", {
          name: `${locale === "zh" ? "了解产品" : "Discover product"} ${name}`,
          exact: true,
        })
        .click();
      await expect(page.getByRole("dialog")).toBeVisible();
      await auditType();
      await page.keyboard.press("Escape");
      await expect(page.getByRole("dialog")).not.toBeVisible();
    }
  }
});

test("large copy stays inside its card without clipping or illustration overlap", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const locale of ["zh", "en"]) {
    if (locale === "en") {
      await page.getByRole("button", { name: "选择语言" }).click();
      await page.getByRole("menuitemradio", { name: "English" }).click();
      await expect(page.getByRole("menu")).toHaveCount(0);
    }
    for (const width of [320, 390, 900, 1024, 1440, 1920]) {
      await resizeForLayout(page, width);
      const clipped = await page.locator(".product-card").evaluateAll((cards) =>
        cards.flatMap((card) => {
          const parent = card.getBoundingClientRect();
          const art = card
            .querySelector(".product-art")!
            .getBoundingClientRect();
          return Array.from(
            card.querySelectorAll(
              ".card-top, .card-bottom h4, .card-bottom p, .card-link",
            ),
          )
            .filter((element) => {
              const rect = element.getBoundingClientRect();
              const overlapsArt =
                rect.left < art.right &&
                rect.right > art.left &&
                rect.top < art.bottom &&
                rect.bottom > art.top;
              return (
                rect.left < parent.left ||
                rect.right > parent.right ||
                rect.bottom > parent.bottom ||
                element.scrollWidth > element.clientWidth + 1 ||
                overlapsArt
              );
            })
            .map((element) => ({
              card: card.className,
              element: element.className,
              width: element.clientWidth,
              scroll: element.scrollWidth,
            }));
        }),
      );
      expect(clipped).toEqual([]);
    }
  }
});

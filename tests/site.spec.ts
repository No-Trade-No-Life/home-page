import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const products = [
  "Linkit",
  "Cybion",
  "NormAI",
  "CTX",
  "Firma",
  "Midas",
  "1Exchange",
  "HIT",
];
async function resizeForLayout(page: Page, width: number, height = 1000) {
  await page.setViewportSize({ width, height });
  // INVARIANT: viewport metrics can change before Chrome has recomputed media
  // queries and viewport-unit tokens. Measure only after the new CSS resolves.
  const gutter = Math.min(80, Math.max(24, Number((width * 0.045).toFixed(3))));
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
test("eight products, same-origin app assets, no browser errors", async ({
  page,
  baseURL,
}) => {
  const origin = new URL(baseURL!).origin;
  const errors: string[] = [];
  const remote: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("request", (request) => {
    if (new URL(request.url()).origin !== origin) remote.push(request.url());
  });
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "NO TRADE.NO LIFE.",
  );
  await expect(page.locator(".product-card")).toHaveCount(8);
  for (const name of products)
    await expect(
      page
        .locator(".card-identity")
        .getByRole("heading", { name, exact: true }),
    ).toBeAttached();
  await expect(page.locator("canvas")).toHaveAttribute("aria-label", /旋转/);
  expect(errors).toEqual([]);
  // The existing production CDN may inject its own beacon; the checked app
  // build still allows no external asset requests on the local preview.
  const unexpected =
    origin === "https://www.ntnl.io"
      ? remote.filter(
          (url) =>
            !/^https:\/\/static\.cloudflareinsights\.com\/beacon\.min\.js(?:\/[^?]+)?(?:\?.*)?$/.test(
              url,
            ),
        )
      : remote;
  expect(unexpected).toEqual([]);
});
test("scenario filters overlap and retain the shared products", async ({
  page,
}) => {
  const cases = [
    {
      name: /智能协作/,
      products: ["Linkit", "Cybion", "NormAI", "CTX", "Midas"],
      count: "05",
    },
    {
      name: /基金投资/,
      products: ["Linkit", "Cybion", "Firma", "Midas", "1Exchange", "HIT"],
      count: "06",
    },
    { name: /跨场景能力/, products: ["Linkit", "Midas"], count: "02" },
    { name: /全部产品/, products, count: "08" },
  ];
  for (const item of cases) {
    const filter = page
      .locator(".filters")
      .getByRole("button", { name: item.name });
    await filter.click();
    await expect(filter).toHaveAttribute("aria-pressed", "true");
    await expect(filter.locator(".mono")).toHaveText(item.count);
    await expect(page.locator(".card-identity h3")).toHaveText(item.products);
  }
  await expect(page.locator(".product-view-note")).toContainText(
    "产品可以出现在多个视图中",
  );
});
test("Firma and HIT share one row in the two-column grid", async ({
  page,
  isMobile,
}) => {
  // INVARIANT: below 900px the grid is a single column, where a shared row
  // does not exist; on wider screens the pair must stay side by side.
  test.skip(isMobile, "single column below 900px");
  for (const name of [/全部产品/, /基金投资/]) {
    await page.locator(".filters").getByRole("button", { name }).click();
    const firma = await page.locator(".card-firma").boundingBox();
    const hit = await page.locator(".card-hit").boundingBox();
    expect(firma).not.toBeNull();
    expect(hit).not.toBeNull();
    expect(Math.abs(firma!.y - hit!.y)).toBeLessThanOrEqual(1);
    expect(firma!.x + firma!.width).toBeLessThanOrEqual(hit!.x + 1);
  }
});
test("all eight detail dialogs, correct external links, Escape, and focus return", async ({
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
      /^https:\/\/(linkit|cybion|normai|ctx|firma|midas|1ex|hit)\.ntnl\.io$/,
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
test("open combinations is the default, with all eight explorable products", async ({
  page,
}) => {
  await expect(page.locator(".scenario-view")).toHaveAttribute(
    "data-view",
    "open",
  );
  await expect(page.locator(".network-node")).toHaveCount(8);
  await expect(page.locator(".shared-services .scenario-product")).toHaveCount(
    2,
  );
  for (const name of products) {
    const trigger = page
      .locator(".network-grid")
      .getByRole("button", { name: `了解产品 ${name}`, exact: true });
    await trigger.click();
    await expect(
      page.getByRole("dialog").getByRole("heading", { name, exact: true }),
    ).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(trigger).toBeFocused();
  }
  await expect(page.locator(".scenario-panel-bottom")).toContainText(
    "不代表接口已全部打通",
  );
  await expect(page.locator(".more-combinations")).toContainText(
    "场景只是示例",
  );
});

test("fund investing follows the six user-specified product roles", async ({
  page,
}) => {
  await page.locator('[data-scenario="fund"]').click();
  await expect(page.locator(".scenario-view")).toHaveAttribute(
    "data-view",
    "fund",
  );
  expect(
    await page
      .locator(".fund-path > li")
      .evaluateAll((nodes) =>
        nodes.map((node) => node.getAttribute("data-stage")),
      ),
  ).toEqual(["midas", "firma", "cybion", "hit", "exchange", "linkit"]);
  await expect(page.locator(".fund-path .scenario-product-role")).toHaveText([
    "募资收款",
    "研究数据",
    "形成生产策略",
    "实盘交易落地",
    "创建与管理基金",
    "投资者沟通管理",
  ]);
  await expect(page.locator(".scenario-caution")).toContainText(
    "不是自动打通的投资服务",
  );
  await expect(page.locator(".shared-grid .scenario-product")).toHaveCount(2);
  for (const name of [
    "Midas",
    "Firma",
    "Cybion",
    "HIT",
    "1Exchange",
    "Linkit",
  ]) {
    const trigger = page
      .locator(".fund-path")
      .getByRole("button", { name: `了解产品 ${name}`, exact: true });
    await trigger.click();
    await expect(
      page.getByRole("dialog").getByRole("heading", { name, exact: true }),
    ).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(trigger).toBeFocused();
  }
});

test("intelligent collaboration branches at Cybion and settles NormAI through Midas", async ({
  page,
}) => {
  await page.locator('[data-scenario="ai"]').click();
  await expect(page.locator(".scenario-view")).toHaveAttribute(
    "data-view",
    "ai",
  );
  const productIds = (selector: string) =>
    page
      .locator(selector)
      .evaluateAll((nodes) =>
        nodes.map((node) => node.getAttribute("data-product")),
      );
  expect(await productIds(".ai-entry .scenario-product")).toEqual([
    "linkit",
    "cybion",
  ]);
  expect(await productIds(".ai-context .scenario-product")).toEqual(["ctx"]);
  expect(await productIds(".ai-model-billing .scenario-product")).toEqual([
    "normai",
    "midas",
  ]);
  await expect(page.locator(".ai-billing-label")).toHaveText(
    "NormAI 通过 Midas 支付结算",
  );
  await expect(
    page.locator(".shared-grid .scenario-product-heading strong"),
  ).toHaveText(["Linkit", "Midas"]);
  await expect(page.locator(".scenario-view")).toContainText("个人上下文");
  await expect(page.locator("body")).not.toContainText("智能社群");
  await expect(page.locator("body")).not.toContainText("智能写作");
  for (const name of ["Linkit", "Cybion", "CTX", "NormAI", "Midas"]) {
    await page
      .locator(".ai-scenario")
      .getByRole("button", { name: `了解产品 ${name}`, exact: true })
      .click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.keyboard.press("Escape");
  }
  await page.locator('[data-scenario="open"]').click();
  await expect(page.locator(".network-node")).toHaveCount(8);
});

test("Firma preserves publishing identity, honest availability, and a direct anchor", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/#product-firma");
  await expect(page.locator("#product-firma")).toBeInViewport();
  const trigger = page
    .locator("#product-firma")
    .getByRole("button", { name: "了解产品 Firma" });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toContainText("Single Truth Publisher");
  await expect(dialog).toContainText("生态认证内默认开放读取");
  await expect(dialog.locator(".risk-note")).toContainText(
    "外部发布接口仍在规划中",
  );
  await expect(
    dialog.getByRole("link", { name: "打开产品 Firma" }),
  ).toHaveAttribute("href", "https://firma.ntnl.io");
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
});

test("Firma uses the round dome SVG consistently across surfaces and the reusable asset", async ({
  page,
  request,
}) => {
  const response = await request.get("/marks/firma.svg");
  expect(response.ok()).toBeTruthy();
  expect(response.headers()["content-type"]).toContain("image/svg+xml");
  const asset = await page.evaluate(
    (source) => {
      const svg = new DOMParser().parseFromString(source, "image/svg+xml");
      return {
        path: svg.querySelector("path")!.getAttribute("d"),
        pathCount: svg.querySelectorAll("path").length,
        viewBox: svg.documentElement.getAttribute("viewBox"),
        fill: svg.documentElement.getAttribute("fill"),
        stroke: svg.documentElement.getAttribute("stroke"),
        strokeWidth: svg.documentElement.getAttribute("stroke-width"),
        linecap: svg.documentElement.getAttribute("stroke-linecap"),
        linejoin: svg.documentElement.getAttribute("stroke-linejoin"),
        title: svg.querySelector("title")!.textContent,
      };
    },
    await response.text(),
  );
  expect(asset.path).toBe(
    "M4 20a12 12 0 0 1 24 0M4 20a12 4 0 1 0 24 0 12 4 0 1 0-24 0M16 8v16",
  );
  expect(asset.pathCount).toBe(1);
  expect(asset.title).toBe("Firma");
  const mark = page.locator(".card-firma .product-mark");
  await expect(mark).toHaveAttribute("viewBox", asset.viewBox!);
  await expect(mark).toHaveAttribute("fill", asset.fill!);
  await expect(mark).toHaveAttribute("stroke", asset.stroke!);
  await expect(mark).toHaveAttribute("stroke-width", asset.strokeWidth!);
  await expect(mark).toHaveAttribute("stroke-linecap", asset.linecap!);
  await expect(mark).toHaveAttribute("stroke-linejoin", asset.linejoin!);
  await expect(mark.locator(":scope > *")).toHaveCount(1);
  await expect(mark.locator("path")).toHaveAttribute("d", asset.path!);
  const geometry = await mark.innerHTML();
  for (const selector of [
    ".node-firma .product-mark",
    '.product-strip button[aria-label="了解产品 Firma"] .product-mark',
    '.network-node[data-product="firma"] .product-mark',
  ]) {
    expect(await page.locator(selector).innerHTML()).toBe(geometry);
  }
  await page.locator(".node-firma").click();
  expect(
    await page.locator(".dialog-heading > .product-mark").innerHTML(),
  ).toBe(geometry);
  await page.keyboard.press("Escape");
  await page.locator('[data-scenario="fund"]').click();
  expect(
    await page
      .locator('.scenario-product[data-product="firma"] .product-mark')
      .innerHTML(),
  ).toBe(geometry);
  await expect(page.locator(".firmament-sculpture .firma-dome")).toHaveCount(1);
  await expect(page.locator(".firmament-sculpture circle")).toHaveCount(4);
  await expect(page.locator(".firmament-sculpture rect")).toHaveCount(3);
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
  for (const view of ["open", "ai", "fund"]) {
    await page.locator(`[data-scenario="${view}"]`).click();
    const pageResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(pageResults.violations).toEqual([]);
  }
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
  test.setTimeout(90000);
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
    for (const view of ["open", "ai", "fund"]) {
      await page.locator(`[data-scenario="${view}"]`).click();
      for (const width of [320, 360, 390, 768, 1024, 1440, 1920]) {
        await resizeForLayout(page, width);
        await auditType();
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
        ).toBe(true);
        const clipped = await page
          .locator(".scenario-product, .network-node")
          .evaluateAll((nodes) =>
            nodes
              .filter((node) => node.scrollWidth > node.clientWidth + 1)
              .map((node) => node.textContent),
          );
        expect(clipped).toEqual([]);
        const copySizes = await page
          .locator(".card-bottom p, .scenario-product-description")
          .evaluateAll((elements) =>
            elements.map((element) =>
              parseFloat(getComputedStyle(element).fontSize),
            ),
          );
        expect(copySizes.every((size) => size >= (width > 900 ? 20 : 18))).toBe(
          true,
        );
      }
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

test("eight hero nodes remain distinct and within the illustration at every breakpoint", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".orbit-node")).toHaveCount(8);
  for (const width of [
    320, 360, 390, 650, 768, 900, 1024, 1101, 1250, 1440, 1920,
  ]) {
    await resizeForLayout(page, width);
    const problems = await page
      .locator(".hero-visual")
      .evaluate((container) => {
        const parent = container.getBoundingClientRect();
        const nodes = Array.from(container.querySelectorAll(".orbit-node"));
        const errors: string[] = [];
        nodes.forEach((node, i) => {
          const rect = node.getBoundingClientRect();
          if (
            rect.left < parent.left - 1 ||
            rect.right > parent.right + 1 ||
            rect.top < parent.top ||
            rect.bottom > parent.bottom + 1
          )
            errors.push(`outside: ${node.textContent}`);
          nodes.slice(i + 1).forEach((other) => {
            const b = other.getBoundingClientRect();
            if (
              rect.left < b.right &&
              rect.right > b.left &&
              rect.top < b.bottom &&
              rect.bottom > b.top
            )
              errors.push(`${node.textContent} overlaps ${other.textContent}`);
          });
        });
        return errors;
      });
    expect(problems, `viewport ${width}`).toEqual([]);
  }
});

test("English scenario copy retains the same roles and shared capabilities", async ({
  page,
}) => {
  await page.getByRole("button", { name: "选择语言" }).click();
  await page.getByRole("menuitemradio", { name: "English" }).click();
  await expect(page.locator(".scenario-tabs button")).toHaveText([
    "Open combinations",
    "Intelligent collaboration",
    "Fund investing",
  ]);
  await page.locator('[data-scenario="fund"]').click();
  await expect(page.locator(".fund-path .scenario-product-role")).toHaveText([
    "COLLECT CAPITAL",
    "RESEARCH DATA",
    "PRODUCTION STRATEGY",
    "LIVE EXECUTION",
    "CREATE & MANAGE FUNDS",
    "INVESTOR COMMUNICATION",
  ]);
  await expect(page.locator(".scenario-intro")).toContainText(
    "Midas handles capital collection",
  );
  await page.locator('[data-scenario="ai"]').click();
  await expect(page.locator(".ai-billing-label")).toHaveText(
    "NormAI settles payments through Midas",
  );
  await expect(
    page.locator(".shared-grid .scenario-product-heading strong"),
  ).toHaveText(["Linkit", "Midas"]);
  await page
    .locator(".filters")
    .getByRole("button", { name: /Intelligent collaboration/ })
    .click();
  await expect(page.locator(".product-card")).toHaveCount(5);
});

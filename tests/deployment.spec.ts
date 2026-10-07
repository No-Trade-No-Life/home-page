import { test, expect } from "@playwright/test";

test("production metadata uses the www hostname", async ({ page, request }) => {
  await page.goto("/");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://www.ntnl.io/",
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    "https://www.ntnl.io/",
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    "https://www.ntnl.io/social-card.png",
  );
  expect((await (await request.get("/CNAME")).text()).trim()).toBe(
    "www.ntnl.io",
  );
  expect(await (await request.get("/robots.txt")).text()).toContain(
    "Sitemap: https://www.ntnl.io/sitemap.xml",
  );
  expect(await (await request.get("/sitemap.xml")).text()).toContain(
    "<loc>https://www.ntnl.io/</loc>",
  );
  const social = await request.get("/social-card.png");
  expect(social.ok()).toBe(true);
  expect(social.headers()["content-type"]).toContain("image/png");
});

test("archived English and Chinese documentation retains local assets without tracking", async ({
  page,
}) => {
  const errors: string[] = [];
  const missing: string[] = [];
  const trackers: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("response", (response) => {
    if (
      response.url().startsWith("http://127.0.0.1:4174") &&
      response.status() >= 400
    )
      missing.push(response.url());
  });
  page.on("request", (request) => {
    if (/googletagmanager|clarity\.ms|google-analytics/.test(request.url()))
      trackers.push(request.url());
  });
  // Archive math styles are historical external resources, not a CI dependency.
  await page.route("https://**", (route) => route.abort());
  for (const path of ["/docs/intro/", "/zh-Hans/docs/intro/"]) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator("main h1").first()).toBeVisible();
    await expect(page).toHaveTitle(/Yuan/);
    expect(
      await page.locator('script[src*="/assets/js/"]').count(),
    ).toBeGreaterThan(0);
  }
  expect(errors).toEqual([]);
  expect(missing).toEqual([]);
  expect(trackers).toEqual([]);
});

test("custom 404 offers a readable route back to the homepage", async ({
  page,
}) => {
  await page.goto("/404.html");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Page not found.",
  );
  const undersized = await page
    .locator("body *")
    .evaluateAll(
      (elements) =>
        elements.filter(
          (element) =>
            element.textContent?.trim() &&
            parseFloat(getComputedStyle(element).fontSize) < 14,
        ).length,
    );
  expect(undersized).toBe(0);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.getByRole("link", { name: "返回官网 / Back to NTNL" }).click();
  await expect(page.locator(".product-card")).toHaveCount(7);
});

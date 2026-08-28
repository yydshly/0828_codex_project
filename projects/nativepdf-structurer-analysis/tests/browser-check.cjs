const { mkdir } = require("node:fs/promises");
const { join } = require("node:path");
const { chromium } = require("playwright");

const baseUrl = process.env.PROJECT006_BASE_URL || "http://127.0.0.1:4173";
const projectUrl = `${baseUrl}/projects/nativepdf-structurer-analysis/`;
const evidenceRoot = join(__dirname, "..", "assets");

async function pageWidth(page) {
  return page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
  }));
}

async function run() {
  await mkdir(evidenceRoot, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const checks = [];
  const errors = [];
  const externalRuntimeAssets = new Set();
  const record = (label, passed, detail = "") => checks.push({ label, passed, detail });

  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
    const page = await context.newPage();
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(`console: ${message.text()}`);
    });
    page.on("pageerror", (error) => errors.push(`page: ${error.message}`));
    page.on("request", (request) => {
      const target = new URL(request.url());
      const base = new URL(baseUrl);
      if (target.origin !== base.origin && /\.(js|css|png|jpg|jpeg|webp|svg|woff2?)$/i.test(target.pathname)) {
        externalRuntimeAssets.add(target.href);
      }
    });

    const response = await page.goto(projectUrl, { waitUntil: "networkidle" });
    record("专题页返回成功", response && response.ok(), response ? String(response.status()) : "no response");
    record("页面标题正确", await page.title() === "NATIVE PDF, STRUCTURED · Project 006");
    record("首屏研究判断可见", await page.getByText("暂不列为通用 PDF 方向的核心研究。", { exact: true }).isVisible());
    record("没有外部运行素材", externalRuntimeAssets.size === 0, [...externalRuntimeAssets].join(", "));

    record("规则结构化为默认路线", await page.locator("#panel-structure").isVisible() && await page.locator("#panel-direct").isHidden());
    await page.getByRole("tab", { name: "直接提取", exact: true }).click();
    record("路线点击切换有效", await page.locator("#panel-direct").isVisible() && await page.getByText("简单单栏 PDF", { exact: true }).isVisible());
    await page.getByRole("tab", { name: "直接提取", exact: true }).focus();
    await page.keyboard.press("ArrowRight");
    record("路线键盘切换有效", await page.getByRole("tab", { name: "规则结构化", exact: true }).getAttribute("aria-selected") === "true" && await page.locator("#panel-structure").isVisible());

    await page.getByRole("button", { name: "复制最终判断", exact: true }).click();
    record("复制操作提供反馈", (await page.locator("#copyStatus").textContent()).trim().length > 0);
    record("同类产品完整", await page.getByRole("link", { name: /PyMuPDF4LLM/ }).count() === 1 && await page.getByRole("link", { name: /MinerU/ }).count() === 1);

    const desktop = await pageWidth(page);
    record("桌面无页面级横向溢出", !desktop.overflow, JSON.stringify(desktop));
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: join(evidenceRoot, "project-006-desktop.png"), fullPage: false });

    await page.setViewportSize({ width: 820, height: 1180 });
    await page.reload({ waitUntil: "networkidle" });
    const tablet = await pageWidth(page);
    record("平板无页面级横向溢出", !tablet.overflow, JSON.stringify(tablet));

    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload({ waitUntil: "networkidle" });
    const mobile = await pageWidth(page);
    record("390px 手机无页面级横向溢出", !mobile.overflow, JSON.stringify(mobile));
    record("手机首屏判断可见", await page.getByText("暂不列为通用 PDF 方向的核心研究。", { exact: true }).isVisible());
    await page.screenshot({ path: join(evidenceRoot, "project-006-mobile.png"), fullPage: false });
    await page.locator("#alternatives").scrollIntoViewIfNeeded();
    record("手机比较表可访问", await page.locator(".comparison-wrap").isVisible() && await page.getByText("最接近基线", { exact: true }).isVisible());

    const reducedContext = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: "reduce" });
    const reducedPage = await reducedContext.newPage();
    await reducedPage.goto(projectUrl, { waitUntil: "networkidle" });
    const scrollBehavior = await reducedPage.locator("html").evaluate((element) => getComputedStyle(element).scrollBehavior);
    record("reduced-motion 关闭平滑滚动", scrollBehavior === "auto", scrollBehavior);
    await reducedContext.close();

    record("控制台与页面错误为零", errors.length === 0, errors.join(" | "));
    await context.close();
  } finally {
    await browser.close();
  }

  let failures = 0;
  for (const check of checks) {
    console.log(`${check.passed ? "[PASS]" : "[FAIL]"} ${check.label}${check.detail ? ` · ${check.detail}` : ""}`);
    if (!check.passed) failures += 1;
  }

  if (failures > 0) {
    console.error(`Project 006 browser checks failed: ${failures}/${checks.length}`);
    process.exit(1);
  }

  console.log(`Project 006 browser checks passed: ${checks.length}/${checks.length}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

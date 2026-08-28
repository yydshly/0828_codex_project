const { mkdir } = require("node:fs/promises");
const { join } = require("node:path");
const { chromium } = require("playwright");

const baseUrl = process.env.PROJECT004_BASE_URL || "http://127.0.0.1:4173";
const projectUrl = `${baseUrl}/projects/daizhige-capability-atlas/`;
const evidenceRoot = join(__dirname, "..", "assets");

async function noOverflow(page) {
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
  const externalRequests = new Set();
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
      if (target.origin !== base.origin) externalRequests.add(target.origin);
    });

    const response = await page.goto(projectUrl, { waitUntil: "networkidle" });
    record("专题页返回成功", response && response.ok(), response ? String(response.status()) : "no response");
    record("标题与归档判断正确", await page.title() === "DAIZHIGE CAPABILITY ATLAS · Project 004" && (await page.locator("#judgment-title").textContent()).includes("归档备用"));
    record("按需启用角色可见", await page.getByText("ON DEMAND", { exact: true }).isVisible() && await page.getByText("NO MIRROR", { exact: true }).isVisible());
    record("审计规模可见", await page.getByText("15,694", { exact: true }).count() > 0 && await page.getByText("4.79 GiB", { exact: true }).count() > 0);
    record("没有外部运行资源", externalRequests.size === 0, [...externalRequests].join(", "));

    record("原生能力为默认层", await page.locator("#capability-native").isVisible() && await page.locator("#capability-maintained").isHidden());
    await page.getByRole("tab", { name: /维护版新增/ }).click();
    record("能力层点击切换", await page.locator("#capability-maintained").isVisible() && await page.getByText("Elasticsearch 工具", { exact: true }).isVisible());
    await page.getByRole("tab", { name: /维护版新增/ }).focus();
    await page.keyboard.press("ArrowRight");
    record("能力层支持键盘切换", await page.getByRole("tab", { name: /可扩展/ }).getAttribute("aria-selected") === "true" && await page.locator("#capability-extension").isVisible());

    await page.locator("#catalog").scrollIntoViewIfNeeded();
    record("全部代表书目为 61 个", await page.locator("#bookGrid .book-card").count() === 61 && await page.locator("#catalogResultCount").textContent() === "61 个代表文件");
    await page.getByRole("tab", { name: "史藏", exact: true }).click();
    record("史藏筛选返回 7 个样本", await page.locator("#bookGrid .book-card").count() === 7 && await page.locator("#catalogScope").textContent() === "史藏");
    record("史记实际路径可见", await page.getByRole("heading", { name: "史记", exact: true }).isVisible() && (await page.locator("#bookGrid").textContent()).includes("史藏 / 正史 / 史记.txt"));
    await page.screenshot({ path: join(evidenceRoot, "project-004-catalog.png"), fullPage: false });

    await page.getByRole("tab", { name: "史藏", exact: true }).focus();
    await page.keyboard.press("ArrowRight");
    record("门类筛选支持键盘切换", await page.getByRole("tab", { name: "子藏", exact: true }).getAttribute("aria-selected") === "true" && await page.locator("#bookGrid .book-card").count() === 6);

    await page.getByRole("tab", { name: /全部/ }).click();
    await page.locator("#catalogSearch").fill("本草纲目");
    record("关键词筛选命中书名", await page.locator("#bookGrid .book-card").count() === 1 && await page.getByRole("heading", { name: "本草纲目", exact: true }).isVisible());
    await page.locator("#catalogSearch").fill("不存在的书名");
    record("无结果状态明确", await page.locator("#catalogEmpty").isVisible() && await page.locator("#bookGrid").isHidden());
    await page.getByRole("button", { name: "清除筛选", exact: true }).click();
    record("清除筛选恢复全部", await page.locator("#bookGrid .book-card").count() === 61 && await page.getByRole("tab", { name: /全部/ }).getAttribute("aria-selected") === "true");
    await page.locator("#catalogSearch").fill("周易");
    await page.locator("#catalogSearch").press("Escape");
    record("Escape 清除关键词", await page.locator("#catalogSearch").inputValue() === "" && await page.locator("#bookGrid .book-card").count() === 61);

    const desktopLayout = await noOverflow(page);
    record("桌面无横向溢出", !desktopLayout.overflow, JSON.stringify(desktopLayout));
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: join(evidenceRoot, "project-004-desktop.png"), fullPage: false });

    await page.setViewportSize({ width: 820, height: 1180 });
    await page.reload({ waitUntil: "networkidle" });
    const tabletLayout = await noOverflow(page);
    record("平板无横向溢出", !tabletLayout.overflow, JSON.stringify(tabletLayout));

    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload({ waitUntil: "networkidle" });
    const mobileLayout = await noOverflow(page);
    record("390px 手机无横向溢出", !mobileLayout.overflow, JSON.stringify(mobileLayout));
    await page.screenshot({ path: join(evidenceRoot, "project-004-mobile.png"), fullPage: false });
    await page.locator("#catalog").scrollIntoViewIfNeeded();
    record("手机筛选器和搜索框可见", await page.locator(".catalog-filters").isVisible() && await page.locator("#catalogSearch").isVisible());
    await page.getByRole("tab", { name: "易藏", exact: true }).click();
    record("手机门类结果可操作", await page.locator("#bookGrid .book-card").count() === 6 && await page.getByRole("heading", { name: "周易注疏", exact: true }).isVisible());
    await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
    record("研究总库已登记 Project 004", await page.getByText("DAIZHIGE CAPABILITY ATLAS", { exact: true }).count() > 0);
    record("研究总库显示归档状态", await page.getByText("已归档 · 按需启用", { exact: true }).count() > 0 && await page.getByText("PROJECT 004 · ARCHIVED", { exact: true }).count() > 0);

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
    console.error(`Project 004 browser checks failed: ${failures}/${checks.length}`);
    process.exit(1);
  }

  console.log(`Project 004 browser checks passed: ${checks.length}/${checks.length}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

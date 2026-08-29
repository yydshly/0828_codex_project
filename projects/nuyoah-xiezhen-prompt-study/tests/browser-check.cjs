const { mkdir } = require("node:fs/promises");
const { join } = require("node:path");
const { chromium } = require("playwright");

const baseUrl = process.env.PROJECT005_BASE_URL || "http://127.0.0.1:4173";
const projectUrl = `${baseUrl}/projects/nuyoah-xiezhen-prompt-study/`;
const evidenceRoot = join(__dirname, "..", "assets");

async function layoutState(page) {
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
    const context = await browser.newContext({
      viewport: { width: 1440, height: 1000 },
      permissions: ["clipboard-read", "clipboard-write"]
    });
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
    record("标题正确", await page.title() === "PROMPT AS PRODUCTION SYSTEM · Project 005");
    record("首屏明确仍是提示词控制层", await page.getByText("STILL PROMPT", { exact: true }).isVisible() && await page.getByText("0 MODEL", { exact: true }).isVisible());
    record("没有外部运行资源", externalRequests.size === 0, [...externalRequests].join(", "));

    await page.locator("#samples").scrollIntoViewIfNeeded();
    record("真实样例库包含六张结果", await page.locator("[data-sample-card]").count() === 6);
    const sampleImages = page.locator(".sample-visual img");
    for (let index = 0; index < await sampleImages.count(); index += 1) {
      await sampleImages.nth(index).scrollIntoViewIfNeeded();
      await sampleImages.nth(index).waitFor({ state: "visible" });
      await page.waitForFunction((position) => {
        const image = document.querySelectorAll(".sample-visual img")[position];
        return image?.complete && image.naturalWidth === 1122 && image.naturalHeight === 1402;
      }, index);
    }
    record("六张本地图片全部加载", await sampleImages.evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth === 1122 && image.naturalHeight === 1402)));

    await page.getByRole("button", { name: "Y2K 直闪 / 2", exact: true }).click();
    record("Y2K 筛选只显示两张", await page.locator("[data-sample-card]:visible").count() === 2 && (await page.locator("#sampleVisibleCount").textContent()).includes("2 / 6"));
    const firstY2k = page.locator('[data-sample-card][data-sample-style="y2k"]:visible').first();
    await firstY2k.locator("summary").click();
    record("样例可展开完整 Prompt", (await firstY2k.locator("[data-sample-prompt]").textContent()).length > 700);
    await firstY2k.getByRole("button", { name: "复制 Prompt", exact: true }).click();
    await firstY2k.getByRole("button", { name: "已复制 Prompt", exact: true }).waitFor();
    record("样例 Prompt 可复制", await firstY2k.getByRole("button", { name: "已复制 Prompt", exact: true }).isVisible());
    await page.getByRole("button", { name: "全部 / 6", exact: true }).click();
    record("全部筛选恢复六张", await page.locator("[data-sample-card]:visible").count() === 6);
    await page.locator("#samples").scrollIntoViewIfNeeded();
    await page.screenshot({ path: join(evidenceRoot, "project-005-samples.png"), fullPage: false });

    await page.locator("#lab").scrollIntoViewIfNeeded();
    record("默认路由为详细提示词", await page.locator("#routeBadge").textContent() === "ROUTE / DETAILED");
    record("默认雨亭 Prompt 已编译", (await page.locator("#compiledPrompt").textContent()).includes("雨中的木亭") && (await page.locator("#compiledPrompt").textContent()).includes("不继承写真参考图中人物的脸"));
    record("默认质量门禁不伪造图片验收", await page.getByText("PENDING IMAGE", { exact: true }).count() === 3 && (await page.locator("#copyFeedback").textContent()).includes("尚未调用图片模型"));

    await page.getByRole("button", { name: "系列变体", exact: true }).click();
    record("系列变体路由可切换", await page.locator("#routeBadge").textContent() === "ROUTE / SERIES VARIANT");
    const variantPrompt = await page.locator("#compiledPrompt").textContent();
    record("变体输出固定词链与三条分镜", variantPrompt.includes("固定整体风格词链") && variantPrompt.includes("P01｜") && variantPrompt.includes("P03｜"));

    await page.locator("#referenceSelect").selectOption("cream");
    const creamPrompt = await page.locator("#compiledPrompt").textContent();
    record("摄影参考切换改变成像机制", creamPrompt.includes("Pro-Mist") && creamPrompt.includes("精致 editorial"));

    await page.locator("#identityToggle").check();
    record("身份图只承担人物身份", (await page.locator("#referenceRole").textContent()).includes("图片 1 是人物身份参考") && (await page.locator("#referenceRole").textContent()).includes("不负责妆造、表情"));

    await page.locator("#viewpointSelect").selectOption("overhead");
    const overheadPrompt = await page.locator("#compiledPrompt").textContent();
    record("俯拍触发世界空间拓扑预测", overheadPrompt.includes("相机升高并俯拍") && overheadPrompt.includes("主光和遮挡保持不变") && overheadPrompt.includes("地面或地台"));

    await page.getByRole("button", { name: "摄影方案复拍", exact: true }).focus();
    await page.keyboard.press("Enter");
    const reshootPrompt = await page.locator("#compiledPrompt").textContent();
    record("模式按钮支持键盘", await page.locator("#routeBadge").textContent() === "ROUTE / PRODUCTION RESHOOT");
    record("复拍输出五张分镜与重做合同", reshootPrompt.includes("五张新分镜") && reshootPrompt.includes("generated_image_inputs: none") && reshootPrompt.includes("P05"));

    await page.getByRole("button", { name: "复制结果", exact: true }).click();
    await page.waitForFunction(() => /Prompt 已复制|Prompt 已选中/.test(document.querySelector("#copyFeedback")?.textContent || ""));
    record("复制反馈明确仍未生图", /Prompt 已复制|Prompt 已选中/.test(await page.locator("#copyFeedback").textContent()));

    await page.screenshot({ path: join(evidenceRoot, "project-005-lab.png"), fullPage: false });
    const desktopLayout = await layoutState(page);
    record("桌面无横向溢出", !desktopLayout.overflow, JSON.stringify(desktopLayout));
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: join(evidenceRoot, "project-005-desktop.png"), fullPage: false });

    await page.setViewportSize({ width: 820, height: 1180 });
    await page.reload({ waitUntil: "networkidle" });
    const tabletLayout = await layoutState(page);
    record("平板无横向溢出", !tabletLayout.overflow, JSON.stringify(tabletLayout));

    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload({ waitUntil: "networkidle" });
    const mobileLayout = await layoutState(page);
    record("390px 手机无横向溢出", !mobileLayout.overflow, JSON.stringify(mobileLayout));
    await page.locator("#samples").scrollIntoViewIfNeeded();
    await page.getByRole("button", { name: "奶油棚拍 / 2", exact: true }).click();
    record("手机样例筛选可用", await page.locator("[data-sample-card]:visible").count() === 2 && await page.locator(".sample-grid").isVisible());
    const mobileSampleImage = page.locator('[data-sample-card]:visible .sample-visual img').first();
    await mobileSampleImage.evaluate((image) => image.decode());
    record("手机样例图片完成解码", await mobileSampleImage.evaluate((image) => image.complete && image.naturalWidth === 1122));
    await page.screenshot({ path: join(evidenceRoot, "project-005-samples-mobile.png"), fullPage: false });
    await page.locator("#lab").scrollIntoViewIfNeeded();
    record("手机工作台控件可见", await page.locator("#modeTabs").isVisible() && await page.locator("#referenceSelect").isVisible() && await page.locator("#compiledPrompt").isVisible());
    await page.getByRole("button", { name: "系列变体", exact: true }).click();
    record("手机模式切换可用", await page.locator("#routeBadge").textContent() === "ROUTE / SERIES VARIANT");
    await page.screenshot({ path: join(evidenceRoot, "project-005-mobile.png"), fullPage: false });

    await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
    record("研究总库已登记 Project 005", await page.getByText("PROMPT AS PRODUCTION SYSTEM", { exact: true }).count() > 0);
    const project005Card = page.locator(".project-card").filter({ hasText: "PROMPT AS PRODUCTION SYSTEM" });
    record("总库 Project 005 入口直达真实样例", await project005Card.getByRole("link", { name: "查看 6 张真实生成样例 →", exact: true }).isVisible()
      && (await project005Card.getByRole("link", { name: "查看 6 张真实生成样例 →", exact: true }).getAttribute("href"))?.endsWith("#samples"));

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
    console.error(`Project 005 browser checks failed: ${failures}/${checks.length}`);
    process.exit(1);
  }

  console.log(`Project 005 browser checks passed: ${checks.length}/${checks.length}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

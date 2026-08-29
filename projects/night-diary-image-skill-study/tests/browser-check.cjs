const { mkdir } = require("node:fs/promises");
const { join } = require("node:path");
const { chromium } = require("playwright");

const baseUrl = process.env.PROJECT007_BASE_URL || "http://127.0.0.1:4173";
const projectUrl = `${baseUrl}/projects/night-diary-image-skill-study/`;
const evidenceRoot = join(__dirname, "..", "assets");

async function layoutState(page) {
  return page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
  }));
}

async function headingState(page, selector) {
  return page.locator(selector).evaluate((heading) => {
    const styles = getComputedStyle(heading);
    const bounds = heading.getBoundingClientRect();
    const lineHeight = Number.parseFloat(styles.lineHeight);
    return {
      width: Number(bounds.width.toFixed(2)),
      height: Number(bounds.height.toFixed(2)),
      fontSize: Number.parseFloat(styles.fontSize),
      lineCount: Math.round(bounds.height / lineHeight),
      hasHardBreak: heading.querySelector("br") !== null
    };
  });
}

async function renderedLines(page, selector) {
  return page.locator(selector).evaluateAll((headings) => headings.map((heading) => {
    const lines = new Map();
    const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      for (let index = 0; index < node.textContent.length; index += 1) {
        const character = node.textContent[index];
        if (!character.trim()) continue;
        const range = document.createRange();
        range.setStart(node, index);
        range.setEnd(node, index + 1);
        const top = Math.round(range.getBoundingClientRect().top);
        lines.set(top, `${lines.get(top) || ""}${character}`);
      }
      node = walker.nextNode();
    }
    return [...lines.values()];
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
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, permissions: ["clipboard-read", "clipboard-write"] });
    const page = await context.newPage();
    page.on("console", (message) => { if (message.type() === "error") errors.push(`console: ${message.text()}`); });
    page.on("pageerror", (error) => errors.push(`page: ${error.message}`));
    page.on("request", (request) => {
      const target = new URL(request.url());
      const base = new URL(baseUrl);
      if (target.origin !== base.origin) externalRequests.add(target.origin);
    });

    const response = await page.goto(projectUrl, { waitUntil: "networkidle" });
    record("专题页返回成功", response && response.ok(), response ? String(response.status()) : "no response");
    record("标题正确", await page.title() === "NIGHT DIARY AS CONTROL LAYER · Project 007");
    record("首屏能力与边界同时可见", await page.getByText("5 PAIRS", { exact: true }).isVisible() && await page.getByText("5 TESTS", { exact: true }).isVisible() && await page.getByText("0 MODEL", { exact: true }).isVisible());
    record("没有外部运行资源", externalRequests.size === 0, [...externalRequests].join(", "));

    const projectImages = page.locator(".project-comparison img, .retry-proof img, .chinese-outcome img, .style-reference-card img");
    record("项目与风格参考图片数量正确", await projectImages.count() === 16);
    for (let index = 0; index < await projectImages.count(); index += 1) {
      await projectImages.nth(index).scrollIntoViewIfNeeded();
      await projectImages.nth(index).evaluate((image) => image.decode());
    }
    record("十六张直接图片全部加载", await projectImages.evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0)));

    const firstRange = page.locator("[data-pair-comparison] .comparison-range").first();
    await firstRange.focus();
    await page.keyboard.press("Home");
    await page.keyboard.press("ArrowRight");
    record("项目对照支持键盘滑动", await firstRange.inputValue() === "1" && (await firstRange.evaluate((input) => input.parentElement.style.getPropertyValue("--split"))) === "1%");
    await firstRange.fill("50");
    await firstRange.dispatchEvent("input");
    await page.locator("#experiments").scrollIntoViewIfNeeded();
    await page.screenshot({ path: join(evidenceRoot, "project-007-experiments.png"), fullPage: false });

    await page.locator("#chinese-tests").scrollIntoViewIfNeeded();
    record("中文实测展示三组不同样例", await page.locator("[data-cn-copy-status]").count() === 3);
    record("三组中文逐字证据可见", await page.getByText("雨落在窗外", { exact: true }).isVisible()
      && await page.getByText("树影慢慢合上", { exact: true }).isVisible()
      && await page.getByText("水巷收起余光", { exact: true }).isVisible());
    record("中文首轮与结构重试状态可见", await page.getByText("FIRST PASS EXACT", { exact: true }).count() === 2
      && await page.getByText("EXACT · RETRY 01", { exact: true }).isVisible());
    const chineseRange = page.locator("#chinese-tests .comparison-range").first();
    await chineseRange.fill("68");
    await chineseRange.dispatchEvent("input");
    record("中文样例支持拖动对照", await chineseRange.inputValue() === "68" && (await chineseRange.evaluate((input) => input.parentElement.style.getPropertyValue("--split"))) === "68%");
    await chineseRange.fill("18");
    await chineseRange.dispatchEvent("input");
    await page.screenshot({ path: join(evidenceRoot, "project-007-chinese-samples.png"), fullPage: false });

    await page.locator("#applications").scrollIntoViewIfNeeded();
    const applicationImages = page.locator("#applications img");
    record("场景落地使用九个本地图片节点", await applicationImages.count() === 9);
    await applicationImages.evaluateAll((images) => images.forEach((image) => { image.loading = "eager"; }));
    await page.waitForFunction(() => [...document.querySelectorAll("#applications img")].every((image) => image.complete && image.naturalWidth > 0), null, { timeout: 30000 });
    record("场景落地图片全部加载", await applicationImages.evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0)));
    record("同图情绪展示三个状态", await page.locator("[data-emotion-panel]").count() === 3
      && await page.getByRole("tab", { name: "孤独", exact: true }).getAttribute("aria-selected") === "true"
      && await page.locator('[data-emotion-panel="lonely"]:visible').count() === 1);
    await page.getByRole("tab", { name: "温暖", exact: true }).click();
    record("温暖状态可切换", await page.getByRole("tab", { name: "温暖", exact: true }).getAttribute("aria-selected") === "true"
      && (await page.locator('[data-emotion-panel="warm"] blockquote').textContent()).includes("灯一盏一盏亮起")
      && await page.locator('[data-emotion-panel="warm"]:visible').count() === 1);
    await page.getByRole("tab", { name: "温暖", exact: true }).focus();
    await page.keyboard.press("ArrowRight");
    record("情绪标签支持方向键", await page.getByRole("tab", { name: "释然", exact: true }).getAttribute("aria-selected") === "true"
      && (await page.locator('[data-emotion-panel="release"] blockquote').textContent()).includes("雨终究会停下")
      && await page.locator('[data-emotion-panel="release"]:visible').count() === 1);
    const figureRange = page.getByRole("slider", { name: "拖动比较普通人物与荧光人物分支", exact: true });
    await figureRange.fill("73");
    await figureRange.dispatchEvent("input");
    record("人物荧光分支可拖动对照", await figureRange.inputValue() === "73"
      && (await figureRange.evaluate((input) => input.parentElement.style.getPropertyValue("--split"))) === "73%");
    record("三种产品装配及来源边界可见", await page.locator(".product-mockup").count() === 3
      && await page.getByText("HTML / CSS ASSEMBLY", { exact: true }).count() === 3
      && await page.getByText("不是图片模型直接生成的界面", { exact: false }).isVisible());
    await page.locator("#applications").evaluate((section) => window.scrollTo(0, Math.max(0, section.offsetTop - 72)));
    await page.screenshot({ path: join(evidenceRoot, "project-007-applications.png"), fullPage: false });
    await page.locator(".product-demo-heading").evaluate((heading) => window.scrollTo(0, Math.max(0, heading.offsetTop - 92)));
    await page.screenshot({ path: join(evidenceRoot, "project-007-products.png"), fullPage: false });

    await page.locator("#structure-qa").scrollIntoViewIfNeeded();
    record("结构 QA 展示五组接受样本", await page.locator("[data-qa-pair]").count() === 5);
    record("结构 QA 真实量测值可见", await page.getByText("0.8862", { exact: true }).isVisible()
      && await page.getByText("0.6076", { exact: true }).isVisible()
      && await page.getByText("0.8712", { exact: true }).isVisible()
      && await page.getByText("0.8123", { exact: true }).isVisible()
      && await page.getByText("0.8817", { exact: true }).isVisible());
    record("结构 QA 边界可见", await page.getByText(/不等于像素锁，也不代表跨模型成功率/).isVisible());
    const qaReportResponse = await page.request.get(`${baseUrl}/assets/night-diary-image-skill-study/structure-qa-report-v2.json`);
    record("结构 QA JSON 报告可访问", qaReportResponse.ok(), String(qaReportResponse.status()));
    const qaReport = await qaReportResponse.json();
    record("页面指标与 QA 报告一致", qaReport.schemaVersion === "project-007-structure-qa/v2"
      && qaReport.pairs.length === 5
      && await page.getByText(qaReport.pairs[0].edges.f1.toFixed(4), { exact: true }).isVisible()
      && await page.getByText(qaReport.pairs[1].edges.f1.toFixed(4), { exact: true }).isVisible()
      && await page.getByText(qaReport.pairs[2].edges.f1.toFixed(4), { exact: true }).isVisible()
      && await page.getByText(qaReport.pairs[3].edges.f1.toFixed(4), { exact: true }).isVisible()
      && await page.getByText(qaReport.pairs[4].edges.f1.toFixed(4), { exact: true }).isVisible());
    await page.screenshot({ path: join(evidenceRoot, "project-007-structure-qa.png"), fullPage: false });

    await page.locator("#upstream").scrollIntoViewIfNeeded();
    record("上游对照共五组", await page.locator("[data-case-card]").count() === 5);
    const sourceUrls = [
      "/assets/night-diary-image-skill-study/upstream/rainy-city-before-after.png",
      "/assets/night-diary-image-skill-study/upstream/train-window-before-after.png",
      "/assets/night-diary-image-skill-study/upstream/sea-sky-before-after.png",
      "/assets/night-diary-image-skill-study/upstream/san-francisco-hill-before-after.png",
      "/assets/night-diary-image-skill-study/upstream/hong-kong-neon-figures-before-after.png"
    ];
    for (const url of sourceUrls) {
      const assetResponse = await page.request.get(`${baseUrl}${url}`);
      record(`上游资产可访问 ${url.split("/").pop()}`, assetResponse.ok(), String(assetResponse.status()));
    }
    record("CSS 无损裁切引用已生效", (await page.locator(".source-layer.is-before").first().evaluate((node) => getComputedStyle(node).backgroundImage)).includes("rainy-city-before-after.png"));
    await page.getByRole("button", { name: "人物荧光", exact: true }).click();
    record("人物荧光筛选只显示一组", await page.locator("[data-case-card]:visible").count() === 1 && (await page.locator("#caseCount").textContent()).includes("1 / 5"));
    await page.getByRole("button", { name: "全部 / 5", exact: true }).click();
    record("全部筛选恢复五组", await page.locator("[data-case-card]:visible").count() === 5);
    await page.locator("[data-source-comparison] .comparison-range").first().fill("72");
    await page.locator("[data-source-comparison] .comparison-range").first().dispatchEvent("input");
    await page.getByRole("button", { name: "全部复位 50%", exact: true }).click();
    record("对照复位为 50%", await page.locator("[data-source-comparison] .comparison-range").first().inputValue() === "50");
    await page.screenshot({ path: join(evidenceRoot, "project-007-upstream.png"), fullPage: false });

    await page.locator("#lab").scrollIntoViewIfNeeded();
    record("默认合同为城市自动文案", (await page.locator("#compiledContract").textContent()).includes("城市") === false && (await page.locator("#compiledContract").textContent()).includes("window") && (await page.locator("#compiledContract").textContent()).includes("12–28"));
    record("默认人物分支关闭", (await page.locator("#contractLayers").textContent()).includes("FIGURE BRANCH OFF") && !(await page.locator("#compiledContract").textContent()).includes("TARGETED PERSON TREATMENT"));
    await page.locator("#sceneSelect").selectOption("coast");
    record("海岸场景重编译", (await page.locator("#compiledContract").textContent()).includes("level horizon") && (await page.locator("#compiledContract").textContent()).includes("celestial bodies"));
    await page.getByLabel("逐字使用指定文案").check();
    await page.locator("#exactCopy").fill("the sea waits\n(a little longer)\nfor the last light.");
    record("逐字文案进入合同", (await page.locator("#compiledContract").textContent()).includes("the sea waits") && (await page.locator("#compiledContract").textContent()).includes("Render every word exactly"));
    await page.locator("#figureToggle").check();
    record("人物荧光显式分支进入合同", (await page.locator("#compiledContract").textContent()).includes("TARGETED PERSON TREATMENT") && (await page.locator("#contractLayers").textContent()).includes("FIGURE BRANCH ON"));
    record("质量门禁包含六项", await page.locator("#gateList li").count() === 6);
    await page.getByRole("button", { name: "复制合同", exact: true }).click();
    await page.waitForFunction(() => /合同已复制|合同已选中/.test(document.querySelector("#contractStatus")?.textContent || ""));
    record("合同复制反馈可见", /合同已复制|合同已选中/.test(await page.locator("#contractStatus").textContent()));
    await page.getByRole("button", { name: "重置", exact: true }).click();
    record("合同可重置", await page.locator("#sceneSelect").inputValue() === "city" && !(await page.locator("#figureToggle").isChecked()));
    await page.screenshot({ path: join(evidenceRoot, "project-007-lab.png"), fullPage: false });

    await page.locator("#scenarios").scrollIntoViewIfNeeded();
    record("五类主要使用场景完整", await page.locator(".use-case-map article").count() === 5
      && await page.locator(".use-case-map dt").count() === 20
      && await page.getByText("不承担心理诊断", { exact: false }).isVisible());
    const productHeadingLines = await renderedLines(page, ".product-demo-heading h3");
    const useCaseHeadingLines = await renderedLines(page, ".use-case-map h3");
    const productHeadingFontSize = await page.locator(".product-demo-heading h3 > span").first().evaluate((span) => Number.parseFloat(getComputedStyle(span).fontSize));
    record("桌面产品与场景卡标题无单字孤行", productHeadingLines.length === 1
      && productHeadingLines[0].length === 2
      && productHeadingLines[0].every((line) => line.length >= 4)
      && productHeadingFontSize >= 30
      && useCaseHeadingLines.length === 5
      && useCaseHeadingLines.every((lines) => lines.every((line) => line.length >= 2)),
    JSON.stringify({ product: productHeadingLines, productFontSize: productHeadingFontSize, useCases: useCaseHeadingLines }));
    await page.locator("#scenarios").evaluate((section) => window.scrollTo(0, Math.max(0, section.offsetTop - 72)));
    await page.screenshot({ path: join(evidenceRoot, "project-007-scenarios.png"), fullPage: false });

    const desktopLayout = await layoutState(page);
    record("桌面无横向溢出", !desktopLayout.overflow, JSON.stringify(desktopLayout));
    const desktopApplicationHeading = await headingState(page, "#applications-title");
    const desktopScenarioHeading = await headingState(page, "#scenarios-title");
    record("桌面中文章节标题保持两行以内且无硬换行", desktopApplicationHeading.lineCount <= 2
      && desktopScenarioHeading.lineCount <= 2
      && !desktopApplicationHeading.hasHardBreak
      && !desktopScenarioHeading.hasHardBreak,
    JSON.stringify({ application: desktopApplicationHeading, scenario: desktopScenarioHeading }));
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: join(evidenceRoot, "project-007-desktop.png"), fullPage: false });

    await page.setViewportSize({ width: 2470, height: 1179 });
    await page.reload({ waitUntil: "networkidle" });
    const ultrawideLayout = await layoutState(page);
    record("2470px 超宽电脑无横向溢出", !ultrawideLayout.overflow, JSON.stringify(ultrawideLayout));
    const ultrawideExperimentGrid = await page.locator(".experiment-grid").boundingBox();
    const ultrawideExperimentCard = await page.locator(".experiment-card.is-landscape").boundingBox();
    const ultrawideApplicationCard = await page.locator(".emotion-demo").boundingBox();
    record("超宽电脑中间内容保持正常宽度", ultrawideExperimentGrid?.width >= 1000
      && ultrawideExperimentCard?.width >= 1000
      && ultrawideApplicationCard?.width >= 1000,
    JSON.stringify({ grid: ultrawideExperimentGrid, experiment: ultrawideExperimentCard, application: ultrawideApplicationCard }));
    await page.locator(".experiment-card.is-landscape").scrollIntoViewIfNeeded();
    await page.screenshot({ path: join(evidenceRoot, "project-007-ultrawide.png"), fullPage: false });

    await page.setViewportSize({ width: 1024, height: 900 });
    await page.reload({ waitUntil: "networkidle" });
    const laptopLayout = await layoutState(page);
    record("1024px 小屏电脑无横向溢出", !laptopLayout.overflow, JSON.stringify(laptopLayout));
    const laptopApplicationHeading = await headingState(page, "#applications-title");
    const laptopScenarioHeading = await headingState(page, "#scenarios-title");
    record("1024px 中文章节标题保持两行以内", laptopApplicationHeading.lineCount <= 2
      && laptopScenarioHeading.lineCount <= 2,
    JSON.stringify({ application: laptopApplicationHeading, scenario: laptopScenarioHeading }));
    await page.locator("#applications").evaluate((section) => window.scrollTo(0, Math.max(0, section.offsetTop - 72)));
    await page.screenshot({ path: join(evidenceRoot, "project-007-applications-1024.png"), fullPage: false });

    await page.setViewportSize({ width: 820, height: 1180 });
    await page.reload({ waitUntil: "networkidle" });
    const tabletLayout = await layoutState(page);
    record("平板无横向溢出", !tabletLayout.overflow, JSON.stringify(tabletLayout));
    await page.locator("#applications").scrollIntoViewIfNeeded();
    record("平板场景演示与产品装配可见", await page.locator("[data-emotion-demo]").isVisible() && await page.locator(".product-mockup").first().isVisible());

    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload({ waitUntil: "networkidle" });
    const mobileLayout = await layoutState(page);
    record("390px 手机无横向溢出", !mobileLayout.overflow, JSON.stringify(mobileLayout));
    await page.locator("#chinese-tests").scrollIntoViewIfNeeded();
    record("手机中文卡、文字与滑杆可见", await page.locator("[data-cn-copy-status]").first().isVisible()
      && await page.getByText("雨落在窗外", { exact: true }).isVisible()
      && await page.locator("#chinese-tests .comparison-range").first().isVisible());
    await page.locator("#chinese-tests .project-comparison img").evaluateAll(async (images) => Promise.all(images.map((image) => image.decode())));
    await page.locator("[data-cn-copy-status]").first().scrollIntoViewIfNeeded();
    await page.screenshot({ path: join(evidenceRoot, "project-007-chinese-mobile.png"), fullPage: false });
    await page.locator("#applications").scrollIntoViewIfNeeded();
    record("手机情绪标签与人物分支可见", await page.getByRole("tab", { name: "孤独", exact: true }).isVisible()
      && await page.getByRole("slider", { name: "拖动比较普通人物与荧光人物分支", exact: true }).isVisible());
    record("手机产品装配顺序可读", await page.locator(".product-mockup").count() === 3
      && await page.locator(".product-mockup").first().isVisible());
    await page.locator(".emotion-demo__header").evaluate((header) => window.scrollTo(0, Math.max(0, header.offsetTop - 58)));
    await page.screenshot({ path: join(evidenceRoot, "project-007-applications-mobile.png"), fullPage: false });
    await page.locator(".product-demo-heading").evaluate((heading) => window.scrollTo(0, Math.max(0, heading.offsetTop - 58)));
    await page.screenshot({ path: join(evidenceRoot, "project-007-products-mobile.png"), fullPage: false });
    await page.locator("#structure-qa").scrollIntoViewIfNeeded();
    record("手机结构量测卡和报告入口可见", await page.locator("[data-qa-pair]").first().isVisible() && await page.getByRole("link", { name: /下载 JSON 报告/ }).isVisible());
    await page.screenshot({ path: join(evidenceRoot, "project-007-structure-qa-mobile.png"), fullPage: false });
    await page.locator("#upstream").scrollIntoViewIfNeeded();
    await page.getByRole("button", { name: "人物荧光", exact: true }).click();
    record("手机筛选和滑杆可见", await page.locator("[data-case-card]:visible").count() === 1 && await page.locator("[data-case-card]:visible .comparison-range").isVisible());
    await page.locator("#lab").scrollIntoViewIfNeeded();
    record("手机合同控件和输出可见", await page.locator("#sceneSelect").isVisible() && await page.locator("#compiledContract").isVisible());
    await page.screenshot({ path: join(evidenceRoot, "project-007-mobile.png"), fullPage: false });
    await page.locator("#scenarios").scrollIntoViewIfNeeded();
    record("手机五类场景顺序可读", await page.locator(".use-case-map article").count() === 5
      && await page.locator(".use-case-map article").first().isVisible());
    await page.locator("#scenarios").evaluate((section) => window.scrollTo(0, Math.max(0, section.offsetTop - 58)));
    await page.screenshot({ path: join(evidenceRoot, "project-007-scenarios-mobile.png"), fullPage: false });

    await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
    record("研究总库已登记 Project 007", await page.getByText("NIGHT DIARY AS CONTROL LAYER", { exact: true }).count() > 0);
    record("Project 007 能力实测入口可达", await page.locator('a[href="./projects/night-diary-image-skill-study/#experiments"]').count() > 0);

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
    console.error(`Project 007 browser checks failed: ${failures}/${checks.length}`);
    process.exit(1);
  }
  console.log(`Project 007 browser checks passed: ${checks.length}/${checks.length}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

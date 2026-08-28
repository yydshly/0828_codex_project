const { mkdir } = require("node:fs/promises");
const { join } = require("node:path");
const { chromium } = require("playwright");

const baseUrl = process.env.PROJECT003_BASE_URL || "http://127.0.0.1:4173";
const projectUrl = `${baseUrl}/projects/personal-ip-image-pack-study/`;
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
  const errors = [];
  const externalRequests = new Set();
  const checks = [];
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
    record("标题与实验台可见", await page.title() === "PERSONAL IP ASSET SYSTEM · Project 003" && await page.locator("#assetLab").isVisible());
    record("目标与价值可见", await page.getByText("目标：让个人形象成为可复用资产。", { exact: true }).isVisible() && await page.getByText("= 资产复利", { exact: true }).isVisible());
    record("没有外部运行资源", externalRequests.size === 0, [...externalRequests].join(", "));

    const sampleImages = page.locator("#real-demo .sample-grid img");
    for (let index = 0; index < await sampleImages.count(); index += 1) {
      await sampleImages.nth(index).scrollIntoViewIfNeeded();
    }
    await page.waitForFunction(() => [...document.querySelectorAll("#real-demo .sample-grid img")].every((image) => image.complete && image.naturalWidth > 0));
    const sampleFacts = await sampleImages.evaluateAll((images) => images.map((image) => ({
      src: image.getAttribute("src"),
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight
    })));
    record("六张真实样例成功加载", sampleFacts.length === 6 && sampleFacts.every((image) => image.naturalWidth > 0 && image.naturalHeight > 0), JSON.stringify(sampleFacts));
    record("完整生产演示初始状态正确", await page.locator("#productionPhaseState").textContent() === "READY" && await page.locator("#productionGenerated").textContent() === "0");

    await page.locator('[data-production-step="4"]').click();
    record("QA 阶段真实进入阻塞状态", await page.locator("#productionPhaseState").textContent() === "BLOCKED" && await page.locator("#productionBlocked").textContent() === "2");
    record("失败资产与 alpha 原因可追踪", await page.locator('[data-asset-id="r2"]').getAttribute("data-status") === "blocked" && (await page.locator("#traceQa").textContent()).includes("alpha 255"));
    await page.screenshot({ path: join(evidenceRoot, "project-003-production-qa.png"), fullPage: false });

    await page.locator('[data-production-step="4"]').focus();
    await page.keyboard.press("ArrowRight");
    record("阶段控制支持键盘推进", await page.locator('[data-production-step="5"]').getAttribute("aria-current") === "step" && await page.locator("#productionPhaseState").textContent() === "RELEASED");
    record("最终发布为 6/6 PASSED", await page.locator("#productionCoverage").textContent() === "6 / 6 PASSED" && await page.locator("#productionPassed").textContent() === "6");

    await page.locator('[data-asset-id="r4"]').click();
    record("任一资产可查看版本与 lineage", await page.locator("#traceRelease").textContent() === "v1 / r4" && (await page.locator("#traceAnchor").textContent()).includes("v1/r1") && (await page.locator("#traceLineage").textContent()).includes("manifest-r6"));
    await page.screenshot({ path: join(evidenceRoot, "project-003-production-release.png"), fullPage: false });

    const navigationDuration = await page.evaluate(() => performance.getEntriesByType("navigation")[0]?.duration || 0);
    record("高成本图片页面本地加载低于 5 秒", navigationDuration > 0 && navigationDuration < 5000, `${navigationDuration.toFixed(1)}ms`);
    record("使用场景与不适用边界可见", await page.locator("#use-cases").isVisible() && await page.getByText("这些情况不必上系统", { exact: true }).isVisible());
    await page.locator("#real-demo").scrollIntoViewIfNeeded();
    await page.screenshot({ path: join(evidenceRoot, "project-003-real-sample.png"), fullPage: false });

    await page.locator("#style-matrix").scrollIntoViewIfNeeded();
    record("真实风格矩阵初始路由正确", await page.locator("#matrixProfileCode").textContent() === "s1 · IP-04" && await page.locator('#matrixAssetGrid [data-capability="blocked"]').count() === 1);

    await page.locator('[data-matrix-style="IP-01"]').click();
    await page.waitForFunction(() => [...document.querySelectorAll("#matrixAssetGrid img")].every((image) => image.complete && image.naturalWidth > 0));
    const ip01Facts = await page.locator("#matrixAssetGrid img").evaluateAll((images) => images.map((image) => ({
      src: image.getAttribute("src"),
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight
    })));
    record("IP-01 两张真实资产与全身阻塞同步", ip01Facts.length === 2 && ip01Facts.every((image) => image.naturalWidth > 0) && await page.locator('#matrixAssetGrid [data-capability="blocked"]').count() === 1 && await page.locator("#matrixStyleVersion").textContent() === "style s4");

    await page.locator('[data-matrix-style="IP-02"]').click();
    await page.waitForFunction(() => [...document.querySelectorAll("#matrixAssetGrid img")].every((image) => image.complete && image.naturalWidth > 0));
    const ip02Facts = await page.locator("#matrixAssetGrid img").evaluateAll((images) => images.map((image) => ({
      src: image.getAttribute("src"),
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight
    })));
    record("IP-02 三张真实资产成功加载", ip02Facts.length === 3 && ip02Facts.every((image) => image.naturalWidth > 0 && image.naturalHeight > 0), JSON.stringify(ip02Facts));
    record("IP-02 条件能力与三轴版本同步", await page.locator('#matrixAssetGrid [data-capability="conditional"]').count() === 1 && await page.locator("#matrixStyleVersion").textContent() === "style s2" && await page.locator("#matrixReleaseVersion").textContent() === "release r3");

    await page.locator('[data-matrix-style="IP-02"]').focus();
    await page.keyboard.press("ArrowRight");
    record("风格矩阵支持键盘切换", await page.locator('[data-matrix-style="IP-03"]').getAttribute("aria-selected") === "true" && await page.locator("#matrixProfileCode").textContent() === "s5 · IP-03");

    await page.waitForFunction(() => [...document.querySelectorAll("#matrixAssetGrid img")].every((image) => image.complete && image.naturalWidth > 0));
    const ip03Facts = await page.locator("#matrixAssetGrid img").evaluateAll((images) => images.map((image) => ({
      src: image.getAttribute("src"),
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight
    })));
    record("IP-03 两张真实资产与换装阻塞同步", ip03Facts.length === 2 && ip03Facts.every((image) => image.naturalWidth > 0) && await page.locator('#matrixAssetGrid [data-capability="blocked"]').count() === 1 && await page.locator('#matrixAssetGrid [data-alpha="true"]').count() === 1);
    record("IP-03 alpha 注记可追踪", (await page.locator("#matrixTaskNote").textContent()).includes("半透明过渡") && (await page.locator("#matrixEvidenceNote").textContent()).includes("真实 alpha"));

    await page.locator('[data-matrix-style="IP-05"]').click();
    await page.waitForFunction(() => [...document.querySelectorAll("#matrixAssetGrid img")].every((image) => image.complete && image.naturalWidth > 0));
    const ip05Facts = await page.locator("#matrixAssetGrid img").evaluateAll((images) => images.map((image) => ({
      src: image.getAttribute("src"),
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight
    })));
    record("IP-05 三张真实资产成功加载", ip05Facts.length === 3 && ip05Facts.every((image) => image.naturalWidth > 0 && image.naturalHeight > 0), JSON.stringify(ip05Facts));
    record("两张透明贴纸与 QA 修复证据可见", await page.locator('#matrixAssetGrid [data-alpha="true"]').count() === 2 && (await page.locator("#matrixEvidenceNote").textContent()).includes("alpha"));
    record("身份、风格、任务三类 QA 分离", await page.locator("#matrixIdentityQa").textContent() === "PASS" && await page.locator("#matrixStyleQa").textContent() === "PASS" && await page.locator("#matrixTaskQa").textContent() === "3/3 PASS");

    await page.locator('[data-matrix-style="IP-06"]').click();
    await page.waitForFunction(() => [...document.querySelectorAll("#matrixAssetGrid img")].every((image) => image.complete && image.naturalWidth > 0));
    const ip06Facts = await page.locator("#matrixAssetGrid img").evaluateAll((images) => images.map((image) => ({
      src: image.getAttribute("src"),
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight
    })));
    record("IP-06 三张真实资产成功加载", ip06Facts.length === 3 && ip06Facts.every((image) => image.naturalWidth > 0 && image.naturalHeight > 0), JSON.stringify(ip06Facts));
    record("IP-06 头像、贴纸、封面均 READY", await page.locator('#matrixAssetGrid [data-capability="ready"]').count() === 3 && await page.locator('#matrixAssetGrid [data-alpha="true"]').count() === 1 && await page.locator("#matrixStyleVersion").textContent() === "style s6" && await page.locator("#matrixReleaseVersion").textContent() === "release r3");

    const newMatrixFacts = [...ip01Facts, ...ip02Facts, ...ip03Facts, ...ip05Facts, ...ip06Facts];
    record("十三张新增跨风格图片均已解码", newMatrixFacts.length === 13 && new Set(newMatrixFacts.map((image) => image.src)).size === 13 && newMatrixFacts.every((image) => image.naturalWidth > 0));

    await page.locator('[data-matrix-style="IP-06"]').focus();
    await page.keyboard.press("ArrowRight");
    record("六风格键盘导航支持循环", await page.locator('[data-matrix-style="IP-01"]').getAttribute("aria-selected") === "true" && await page.locator("#matrixProfileCode").textContent() === "s4 · IP-01");
    await page.locator('[data-matrix-style="IP-06"]').click();
    await page.screenshot({ path: join(evidenceRoot, "project-003-style-matrix.png"), fullPage: false });

    const desktopLayout = await noOverflow(page);
    record("桌面无横向溢出", !desktopLayout.overflow, JSON.stringify(desktopLayout));
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: join(evidenceRoot, "project-003-desktop.png"), fullPage: false });

    await page.getByRole("button", { name: /IP-01 · 简笔涂鸦头像/ }).click();
    record("不支持资产进入 BLOCKED", await page.locator("#deliveryStatus").textContent() === "BLOCKED");

    await page.locator("#assetForm").selectOption("avatar");
    record("切换支持资产恢复 READY", await page.locator("#deliveryStatus").textContent() === "READY");

    await page.getByRole("button", { name: "开心", exact: true }).click();
    await page.getByRole("button", { name: "相机", exact: true }).click();
    record("可变字段只升级发布号", await page.locator("#identityVersion").textContent() === "v2" && await page.locator("#releaseVersion").textContent() === "r4");

    await page.getByRole("button", { name: /改变发型/ }).click();
    record("身份锁变化创建新人物版本", await page.locator("#identityVersion").textContent() === "v3" && await page.locator("#releaseVersion").textContent() === "r1");

    await page.locator("#specTab").focus();
    await page.keyboard.press("ArrowRight");
    record("契约标签支持键盘切换", await page.locator("#manifestTab").getAttribute("aria-selected") === "true" && await page.locator("#manifestSpec").isVisible());

    await page.screenshot({ path: join(evidenceRoot, "project-003-lab.png"), fullPage: false });

    await page.setViewportSize({ width: 820, height: 1180 });
    await page.reload({ waitUntil: "networkidle" });
    const tabletLayout = await noOverflow(page);
    record("平板无横向溢出", !tabletLayout.overflow, JSON.stringify(tabletLayout));

    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload({ waitUntil: "networkidle" });
    const mobileLayout = await noOverflow(page);
    record("390px 手机无横向溢出", !mobileLayout.overflow, JSON.stringify(mobileLayout));
    record("手机主控件可见", await page.locator("#styleOptions").isVisible() && await page.locator("#assetForm").isVisible());
    record("手机完整流程控件可见", await page.locator(".production-stage-nav").isVisible() && await page.locator("#productionAssets").isVisible());
    record("手机风格矩阵控件可见", await page.locator(".matrix-style-tabs").isVisible() && await page.locator("#matrixAssetGrid").isVisible());
    await page.screenshot({ path: join(evidenceRoot, "project-003-mobile.png"), fullPage: false });
    await page.locator('[data-matrix-style="IP-06"]').click();
    await page.waitForFunction(() => [...document.querySelectorAll("#matrixAssetGrid img")].every((image) => image.complete && image.naturalWidth > 0));
    await page.locator("#styleMatrixPanel").evaluate((element) => element.scrollIntoView({ block: "start" }));
    await page.waitForTimeout(80);
    await page.screenshot({ path: join(evidenceRoot, "project-003-style-matrix-mobile.png"), fullPage: false });

    await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
    record("研究总库已登记 Project 003", await page.getByText("PERSONAL IP ASSET SYSTEM", { exact: true }).count() > 0);

    const reducedContext = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: "reduce" });
    const reducedPage = await reducedContext.newPage();
    await reducedPage.goto(projectUrl, { waitUntil: "networkidle" });
    const transitionDuration = await reducedPage.locator(".style-option").first().evaluate((element) => getComputedStyle(element).transitionDuration);
    record("reduced-motion 关闭非必要过渡", ["0.00001s", "1e-05s", "0s"].includes(transitionDuration), transitionDuration);
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
    console.error(`Project 003 browser checks failed: ${failures}/${checks.length}`);
    process.exit(1);
  }
  console.log(`Project 003 browser checks passed: ${checks.length}/${checks.length}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

const { mkdir } = require("node:fs/promises");
const { join } = require("node:path");
const { chromium } = require("playwright");

const baseUrl = process.env.PROJECT009_BASE_URL || "http://127.0.0.1:4173";
const projectUrl = `${baseUrl}/projects/sprite-maker-study/`;
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
    record("标题正确", await page.title() === "SPRITE PRODUCTION, LOCAL FIRST · Project 009");
    record("页面不是空白", (await page.locator("body").innerText()).trim().length > 4000);
    record("首屏明确不需要模型权重", await page.getByText("不需要下载模型权重", { exact: true }).isVisible());
    record("没有框架错误覆盖层", await page.locator("[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay").count() === 0);
    record("没有外部运行请求", externalRequests.size === 0, [...externalRequests].join(", "));

    const media = page.locator(".evidence-card img");
    record("五项上游能力媒体存在", await media.count() === 5);
    await page.waitForFunction(() => [...document.querySelectorAll(".evidence-card img")].every((image) => image.complete && image.naturalWidth > 0));
    record("上游媒体全部加载", await media.evaluateAll((items) => items.every((image) => image.naturalWidth > 0 && image.naturalHeight > 0)));
    record("上游证据标签可见", await page.getByText("UPSTREAM OFFICIAL MEDIA", { exact: true }).isVisible());

    const ownTest = page.locator("#own-test");
    const ownMedia = ownTest.locator("img");
    record("自有样例实测区可见", await ownTest.isVisible() && await page.getByText("不是看官方样片：我们自己的角色，真实跑了一遍。", { exact: true }).isVisible());
    record("自有样例六项媒体存在", await ownMedia.count() === 6);
    await page.waitForFunction(() => [...document.querySelectorAll("#own-test img")].every((image) => image.complete && image.naturalWidth > 0));
    record("自有样例媒体全部加载", await ownMedia.evaluateAll((items) => items.every((image) => image.naturalWidth > 0 && image.naturalHeight > 0)));
    record("自有样例结论有条件通过", await ownTest.getByText("CONDITIONAL", { exact: true }).count() >= 2 && (await ownTest.innerText()).includes("不批准 walk / run"));
    record("输入门禁区分三类样例", await ownTest.locator(".sample-gates article").count() === 3 && (await ownTest.innerText()).includes("REJECT"));
    record("三次门禁与复渲染可见", await ownTest.locator(".gate-sequence > li").count() === 4 && (await ownTest.innerText()).includes("imperceptible_rig_motion") && (await ownTest.innerText()).includes("deterministic"));
    await ownTest.scrollIntoViewIfNeeded();
    await page.screenshot({ path: join(evidenceRoot, "project-009-own-sample.png"), fullPage: false });

    const scenarioDemo = page.locator("#use-case-demo");
    record("合理使用场景演示可见", await scenarioDemo.isVisible() && await page.getByText("它的意义不是“图片会动”，而是一个角色资产开始被产品复用。", { exact: true }).isVisible());
    record("场景演示包含三个标签", await scenarioDemo.getByRole("tab").count() === 3);
    record("默认角色选择状态适用", await page.locator("#scenario-view-select").isVisible() && await page.locator("#scenario-view-dialogue").isHidden() && (await page.locator("#scenario-view-select").innerText()).includes("USE NOW"));
    await scenarioDemo.getByRole("tab", { name: /NPC 对话/ }).click();
    record("NPC 对话复用同一 idle", await page.locator("#scenario-view-dialogue").isVisible() && (await page.locator("#scenario-view-dialogue").innerText()).includes("同一 4-frame idle 被复用"));
    const dialogueTab = scenarioDemo.getByRole("tab", { name: /NPC 对话/ });
    await dialogueTab.focus();
    await page.keyboard.press("ArrowRight");
    record("场景标签支持方向键", await page.locator("#scenario-view-combat").isVisible() && await scenarioDemo.getByRole("tab", { name: /战斗移动/ }).evaluate((element) => document.activeElement === element));
    record("战斗移动被明确阻断", (await page.locator("#scenario-view-combat").innerText()).includes("DO NOT SHIP") && (await page.locator("#scenario-view-combat").innerText()).includes("motion-ready master"));
    await page.keyboard.press("Home");
    record("场景可返回首个状态", await page.locator("#scenario-view-select").isVisible() && await scenarioDemo.getByRole("tab", { name: /角色选择/ }).evaluate((element) => document.activeElement === element));
    await scenarioDemo.scrollIntoViewIfNeeded();
    await page.screenshot({ path: join(evidenceRoot, "project-009-use-case-demo.png"), fullPage: false });

    const gameDemo = page.locator("#game-demo");
    await gameDemo.scrollIntoViewIfNeeded();
    record("第六版多动作游戏章节可见", await gameDemo.isVisible() && await page.getByText("让角色从 idle 证据继续走进 run、cast 与协同战斗状态。", { exact: true }).isVisible() && (await gameDemo.innerText()).includes("PLAYABLE PROOF / REVISION 06"));
    record("游戏职责边界完整", (await gameDemo.innerText()).includes("SPRITE STUDIO") && (await gameDemo.innerText()).includes("GAME LAYER") && (await gameDemo.innerText()).includes("USABLE SCENE") && (await gameDemo.innerText()).includes("idle 4 · run 4 · cast 5"));
    const gameLink = gameDemo.getByRole("link", { name: /进入可玩场景/ });
    record("研究页提供可玩路由入口", await gameLink.getAttribute("href") === "../../demos/sprite-maker-scene/");
    record("游戏预览使用真实 run-v2 发布帧", await gameDemo.locator('img[src*="project-009-game/lin-jian-motion-run-v2_02.png"]').isVisible());
    record("研究入口覆盖 companion、pulse-cast 与三终端", (await gameDemo.innerText()).includes("部署动作投影") && (await gameDemo.innerText()).includes("跟随与施放") && (await gameDemo.innerText()).includes("Rig、QA、Export"));
    const snapshotLink = gameDemo.getByRole("link", { name: /Revision 5/ });
    record("研究页提供 Revision 5 冻结对比入口", await snapshotLink.getAttribute("href") === "../../demos/sprite-maker-scene-r5/?state=near");
    await page.screenshot({ path: join(evidenceRoot, "project-009-game-entry.png"), fullPage: false });

    const combatTrial = page.locator("#combat-trial");
    await combatTrial.scrollIntoViewIfNeeded();
    record("复杂战斗试运行章节可见", await combatTrial.isVisible() && await page.getByText("让多动作资产进入三波战斗、护盾破坏与双阶段 Boss。", { exact: true }).isVisible());
    record("复杂战斗预览使用真实 cast-v1 发布帧", await combatTrial.locator('img[src*="project-009-game/lin-jian-motion-cast-v1_03.png"]').isVisible() && await combatTrial.locator("img").evaluate((image) => image.complete && image.naturalWidth > 0));
    record("复杂战斗入口指向独立模块", await combatTrial.getByRole("link", { name: /进入复杂战斗试运行/ }).getAttribute("href") === "../../demos/sprite-maker-combat-trial/?state=briefing");
    record("研究页明确复杂模块资产与运行时边界", (await combatTrial.innerText()).includes("master · run-v2 · cast-v1") && (await combatTrial.innerText()).includes("3 encounters · 4 archetypes · 2 phases") && (await combatTrial.innerText()).includes("CONDITIONAL / SCENE-READY"));
    await combatTrial.locator(".combat-trial-hero").screenshot({ path: join(evidenceRoot, "project-009-combat-trial-entry.png") });

    const applicationLab = page.locator("#application-lab");
    await applicationLab.scrollIntoViewIfNeeded();
    record("五场景应用实验室章节可见", await applicationLab.isVisible() && await page.getByText("把同一组动作资产放进五种上层业务，而不把动画误说成业务。", { exact: true }).isVisible());
    record("应用实验室预览使用真实 master", await applicationLab.locator('img[src*="project-009-game/lin-jian-motion-master-v1.png"]').isVisible() && await applicationLab.locator("img").evaluate((image) => image.complete && image.naturalWidth > 0));
    record("应用实验室入口指向独立模块", await applicationLab.getByRole("link", { name: /进入五场景实验室/ }).getAttribute("href") === "../../demos/sprite-maker-application-lab/?scene=companion");
    const applicationText = await applicationLab.innerText();
    record("研究页列出五方向与职责边界", ["虚拟人 / 桌面伙伴", "互动故事 / 数字展厅", "教学演示", "营销动态人物", "低成本游戏原型", "REUSABLE / NOT A RUNTIME"].every((text) => applicationText.includes(text)));
    await applicationLab.locator(".application-lab-hero").screenshot({ path: join(evidenceRoot, "project-009-application-lab-entry.png") });

    await page.locator("#lab").scrollIntoViewIfNeeded();
    record("默认工作流为已有资产动画", await page.locator("#workflowCode").textContent() === "ANIMATE_EXISTING");
    record("默认 Rig-only 有五步", await page.locator("#pipelineList > li").count() === 5);
    record("默认说明不逐帧调用模型", (await page.locator("#labStatus").textContent()).includes("不需要逐帧调用图像模型"));

    await page.getByRole("tab", { name: /静态资产/ }).click();
    record("静态工作流切换成功", await page.locator("#workflowCode").textContent() === "CREATE_STATIC_SPRITE" && await page.locator("#pipelineList > li").count() === 4);
    record("非动画时隐藏完成模式", await page.locator("#finishModeFieldset").isHidden());

    const spriteTab = page.getByRole("tab", { name: /静态资产/ });
    await spriteTab.focus();
    await page.keyboard.press("ArrowRight");
    record("任务标签支持方向键", await page.locator("#workflowCode").textContent() === "ANIMATE_EXISTING" && await page.getByRole("tab", { name: /已有资产动画/ }).evaluate((element) => document.activeElement === element));

    await page.getByRole("tab", { name: /AI Polish/ }).click();
    record("AI Polish 增加图像润色阶段", await page.locator("#pipelineList > li").count() === 6 && (await page.locator("#pipelineList").innerText()).includes("逐帧局部润色粗帧"));
    record("AI Polish 边界正确", (await page.locator("#labStatus").textContent()).includes("Rig 负责动作权威"));

    const polishTab = page.getByRole("tab", { name: /AI Polish/ });
    await polishTab.focus();
    await page.keyboard.press("ArrowRight");
    record("模式标签支持方向键", (await page.locator("#pipelineList").innerText()).includes("逐帧完整重绘") && await page.getByRole("tab", { name: /Full Redraw/ }).evaluate((element) => document.activeElement === element));
    record("Full Redraw 风险明确", (await page.locator("#riskText").textContent()).includes("变脸"));

    await page.getByRole("tab", { name: /协调资产包/ }).click();
    record("Pack 工作流与五步存在", await page.locator("#workflowCode").textContent() === "COORDINATED_ASSET_PACK" && await page.locator("#pipelineList > li").count() === 5);
    await page.getByRole("tab", { name: /完整图集/ }).click();
    record("Terrain 工作流包含 Godot", await page.locator("#workflowCode").textContent() === "COMPLETE_TERRAIN_ATLAS" && (await page.locator("#pipelineList").innerText()).includes("Godot 4 TileSet"));

    await page.getByRole("tab", { name: /已有资产动画/ }).click();
    await page.getByRole("tab", { name: /Rig-only/ }).click();
    await page.getByRole("button", { name: "复制当前工作流", exact: true }).click();
    await page.waitForFunction(() => document.querySelector("#labStatus")?.textContent.includes("复制"), null, { timeout: 2000 }).catch(() => {});
    const copyStatus = (await page.locator("#labStatus").textContent()).trim();
    record("工作流可复制", copyStatus === "当前工作流已复制。", copyStatus);

    await page.screenshot({ path: join(evidenceRoot, "project-009-lab.png"), fullPage: false });
    const desktopLayout = await layoutState(page);
    record("桌面无横向溢出", !desktopLayout.overflow, JSON.stringify(desktopLayout));
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: join(evidenceRoot, "project-009-desktop.png"), fullPage: false });

    await page.setViewportSize({ width: 820, height: 1180 });
    await page.reload({ waitUntil: "networkidle" });
    const tabletLayout = await layoutState(page);
    record("平板无横向溢出", !tabletLayout.overflow, JSON.stringify(tabletLayout));
    record("平板实验台可见", await page.locator("#lab").isVisible() && await page.locator("#workflow-panel").isVisible());
    record("平板实测证据可见", await page.locator("#own-test .test-verdict").isVisible() && await page.locator("#own-test .gate-sequence").isVisible());
    record("平板场景演示可用", await page.locator("#use-case-demo .scenario-stage").isVisible() && await page.locator("#use-case-demo .scenario-tabs").isVisible());

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${projectUrl}#use-case-demo`, { waitUntil: "networkidle" });
    await page.getByRole("tab", { name: /NPC 对话/ }).click();
    record("手机场景演示可切换", await page.locator("#scenario-view-dialogue").isVisible() && (await page.locator("#scenario-view-dialogue").innerText()).includes("REUSE"));
    const scenarioMobileLayout = await layoutState(page);
    record("手机场景演示无横向溢出", !scenarioMobileLayout.overflow, JSON.stringify(scenarioMobileLayout));
    await page.screenshot({ path: join(evidenceRoot, "project-009-use-case-demo-mobile.png"), fullPage: false });
    await page.goto(`${projectUrl}#lab`, { waitUntil: "networkidle" });
    const mobileLayout = await layoutState(page);
    record("390px 手机无横向溢出", !mobileLayout.overflow, JSON.stringify(mobileLayout));
    record("手机任务控件可见", await page.getByRole("tab", { name: /静态资产/ }).isVisible() && await page.getByRole("tab", { name: /已有资产动画/ }).isVisible());
    await page.getByRole("tab", { name: /协调资产包/ }).click();
    record("手机主交互可完成", await page.locator("#workflowCode").textContent() === "COORDINATED_ASSET_PACK");
    await page.screenshot({ path: join(evidenceRoot, "project-009-mobile.png"), fullPage: false });

    await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
    record("研究总库已登记 Project 009", await page.getByText("SPRITE PRODUCTION, LOCAL FIRST", { exact: true }).count() > 0);

    const reducedContext = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: "reduce" });
    const reducedPage = await reducedContext.newPage();
    await reducedPage.goto(projectUrl, { waitUntil: "networkidle" });
    const scrollBehavior = await reducedPage.locator("html").evaluate((element) => getComputedStyle(element).scrollBehavior);
    record("reduced-motion 关闭平滑滚动", scrollBehavior === "auto", scrollBehavior);
    record("reduced-motion 提供 GIF 文字降级", await reducedPage.locator(".console-media .motion-fallback").isVisible() && await reducedPage.locator(".console-media img").isHidden());
    record("reduced-motion 自有动画保留静态证据", await reducedPage.locator("#own-test .is-result .motion-fallback").isVisible() && await reducedPage.locator("#own-test .is-result img").isHidden() && await reducedPage.locator("#own-test .is-sheet img").isVisible());
    record("reduced-motion 场景使用静态角色", await reducedPage.locator("#scenario-view-select .animated-avatar").isHidden() && await reducedPage.locator("#scenario-view-select .static-avatar").isVisible());
    await reducedContext.close();

    const noScriptContext = await browser.newContext({ viewport: { width: 1280, height: 900 }, javaScriptEnabled: false });
    const noScriptPage = await noScriptContext.newPage();
    await noScriptPage.goto(`${projectUrl}#use-case-demo`, { waitUntil: "networkidle" });
    record("无 JavaScript 仍可阅读三种场景", await noScriptPage.locator("#use-case-demo .scenario-view:visible").count() === 3);
    await noScriptContext.close();

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
    console.error(`Project 009 browser checks failed: ${failures}/${checks.length}`);
    process.exit(1);
  }

  console.log(`Project 009 browser checks passed: ${checks.length}/${checks.length}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

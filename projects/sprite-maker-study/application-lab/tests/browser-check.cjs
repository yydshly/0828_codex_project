const { mkdir } = require("node:fs/promises");
const { join } = require("node:path");
const { chromium } = require("playwright");

const baseUrl = process.env.PROJECT009_BASE_URL || "http://127.0.0.1:4173";
const labUrl = `${baseUrl}/demos/sprite-maker-application-lab/`;
const evidenceRoot = join(__dirname, "..", "..", "assets");

async function snapshot(page) {
  await page.waitForFunction(() => Boolean(window.__SPRITE_APPLICATION_LAB__?.snapshot));
  return page.evaluate(() => window.__SPRITE_APPLICATION_LAB__.snapshot());
}

async function layout(page) {
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
    page.on("console", (message) => { if (message.type() === "error") errors.push(`console: ${message.text()}`); });
    page.on("pageerror", (error) => errors.push(`page: ${error.message}`));
    page.on("request", (request) => {
      const target = new URL(request.url());
      if (target.origin !== new URL(baseUrl).origin) externalRequests.add(target.origin);
    });

    const startedAt = Date.now();
    const response = await page.goto(`${labUrl}?scene=companion`, { waitUntil: "networkidle" });
    record("应用实验室返回成功", response && response.ok(), response ? String(response.status()) : "no response");
    record("标题与五场景语义正确", await page.title() === "APPLICATION LAB · One Sprite, Five Products" && await page.getByRole("heading", { name: "同一角色动作，进入五种业务。", exact: true }).isVisible());
    record("五个场景标签可见", await page.getByRole("tab").count() === 5 && await page.getByRole("tab", { name: /桌面伙伴/ }).isVisible());
    await page.waitForFunction(() => window.__SPRITE_APPLICATION_LAB__?.snapshot?.().assetsReady === true);
    let state = await snapshot(page);
    record("十项动作资产在两秒内加载成功", state.assetsReady && state.assetErrors === 0 && Date.now() - startedAt < 2000, `${Date.now() - startedAt}ms / ${JSON.stringify(state)}`);
    record("默认桌面伙伴状态正确", state.scene === "companion" && state.sceneState === "default" && state.businessState === "READY" && await page.locator("#scene-panel-companion").isVisible(), JSON.stringify(state));
    record("职责检查器区分资产与业务", await page.locator("#inspector").isVisible() && (await page.locator("#inspector").innerText()).includes("SPRITE STUDIO OUTPUT") && (await page.locator("#inspector").innerText()).includes("UPPER-LAYER BUSINESS"));
    record("没有外部运行请求", externalRequests.size === 0, [...externalRequests].join(", "));
    await page.locator(".application-shell").scrollIntoViewIfNeeded();
    await page.screenshot({ path: join(evidenceRoot, "project-009-application-lab-desktop.png"), fullPage: false });

    await page.getByRole("button", { name: "开始专注", exact: true }).click();
    state = await snapshot(page);
    record("桌面伙伴进入专注状态并切换 run", state.scene === "companion" && state.step === 1 && state.businessState === "FOCUS ACTIVE" && state.actorMode === "run", JSON.stringify(state));
    await page.getByRole("button", { name: "完成专注", exact: true }).click();
    state = await snapshot(page);
    record("桌面伙伴完成并触发 cast 反馈", state.step === 2 && state.sceneState === "complete" && state.actorMode === "cast" && (await page.locator("#sceneFeedback").innerText()).includes("本轮专注完成"), JSON.stringify(state));

    const companionTab = page.getByRole("tab", { name: /桌面伙伴/ });
    await companionTab.focus();
    await page.keyboard.press("ArrowRight");
    state = await snapshot(page);
    record("键盘方向键切换到互动故事", state.scene === "story" && await page.getByRole("tab", { name: /互动故事/ }).evaluate((element) => document.activeElement === element), JSON.stringify(state));
    await page.getByRole("button", { name: "追随信号", exact: true }).click();
    state = await snapshot(page);
    record("互动故事进入信号分支并切换 run", state.scene === "story" && state.step === 1 && state.businessState === "SIGNAL BRANCH" && state.actorMode === "run" && (await page.locator("#storyBeacon").innerText()) === "A", JSON.stringify(state));
    await page.evaluate(() => window.__SPRITE_APPLICATION_LAB__.setScene("story", "default"));
    await page.getByRole("button", { name: "打开档案", exact: true }).click();
    state = await snapshot(page);
    record("互动故事进入档案分支并触发 cast", state.step === 2 && state.businessState === "ARCHIVE BRANCH" && state.actorMode === "cast" && (await page.locator("#storyBeacon").innerText()) === "B", JSON.stringify(state));
    await page.screenshot({ path: join(evidenceRoot, "project-009-application-lab-story.png"), fullPage: false });

    await page.evaluate(() => window.__SPRITE_APPLICATION_LAB__.setScene("teaching", "default"));
    await page.getByRole("button", { name: "下一步", exact: true }).click();
    state = await snapshot(page);
    record("教学演示进入问题步骤", state.scene === "teaching" && state.step === 1 && state.businessState === "STEP 2 / QUESTION", JSON.stringify(state));
    await page.getByRole("button", { name: "选择游戏代码", exact: true }).click();
    state = await snapshot(page);
    record("教学演示给出正确答案与完成反馈", state.step === 2 && state.businessState === "ANSWER CORRECT" && (await page.locator("#lessonResult").innerText()) === "RUNTIME OWNS IT", JSON.stringify(state));

    await page.goto(`${labUrl}?scene=marketing&state=default`, { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "查看动作系列", exact: true }).click();
    state = await snapshot(page);
    record("营销场景记录本地查看事件", state.scene === "marketing" && state.step === 1 && (await page.locator("#campaignMetric").innerText()) === "VIEW +1", JSON.stringify(state));
    await page.getByRole("button", { name: "预约体验", exact: true }).click();
    state = await snapshot(page);
    record("营销 CTA 完成且声明无外部提交", state.step === 2 && state.businessState === "CTA COMPLETE" && (await page.locator("#campaignMessage").innerText()).includes("没有上传"), JSON.stringify(state));
    await page.screenshot({ path: join(evidenceRoot, "project-009-application-lab-marketing.png"), fullPage: false });

    await page.goto(`${labUrl}?scene=prototype&state=default`, { waitUntil: "networkidle" });
    record("游戏原型默认禁用无效攻击", await page.getByRole("button", { name: "释放脉冲", exact: true }).isDisabled());
    await page.getByRole("button", { name: "开始遭遇", exact: true }).click();
    state = await snapshot(page);
    record("低成本原型开始最小遭遇", state.scene === "prototype" && state.step === 1 && state.prototypeHp === 2 && state.actorMode === "run", JSON.stringify(state));
    await page.getByRole("button", { name: "释放脉冲", exact: true }).click();
    state = await snapshot(page);
    record("第一次脉冲由运行时扣除一点目标完整度", state.step === 1 && state.prototypeHp === 1 && state.actorMode === "run", JSON.stringify(state));
    await page.getByRole("button", { name: "释放脉冲", exact: true }).click();
    state = await snapshot(page);
    record("第二次脉冲完成规则验证", state.step === 2 && state.prototypeHp === 0 && state.businessState === "RULE PROVEN" && state.actorMode === "cast", JSON.stringify(state));
    record("查询参数同步当前 fixture", new URL(page.url()).searchParams.get("scene") === "prototype" && new URL(page.url()).searchParams.get("state") === "complete");

    const desktopLayout = await layout(page);
    record("桌面无横向溢出", !desktopLayout.overflow, JSON.stringify(desktopLayout));
    record("桌面控制台与页面错误为零", errors.length === 0, errors.join(" | "));
    await context.close();

    const tabletContext = await browser.newContext({ viewport: { width: 820, height: 1180 } });
    const tabletPage = await tabletContext.newPage();
    await tabletPage.goto(`${labUrl}?scene=story&state=active`, { waitUntil: "networkidle" });
    const tabletState = await snapshot(tabletPage);
    const tabletLayout = await layout(tabletPage);
    record("820px 平板保持场景与横向标签轨", tabletState.scene === "story" && await tabletPage.locator(".scene-rail").isVisible() && !tabletLayout.overflow, JSON.stringify(tabletLayout));
    await tabletContext.close();

    const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto(`${labUrl}?scene=teaching&state=active`, { waitUntil: "networkidle" });
    let mobileState = await snapshot(mobilePage);
    record("手机深链接进入教学问题态", mobileState.scene === "teaching" && mobileState.step === 1 && await mobilePage.locator("#scene-panel-teaching").isVisible(), JSON.stringify(mobileState));
    const inspectorButton = mobilePage.getByRole("button", { name: "查看职责边界", exact: true });
    await inspectorButton.click();
    mobileState = await snapshot(mobilePage);
    record("手机打开职责底部抽屉并聚焦关闭", mobileState.inspectorOpen && await mobilePage.locator("#inspector").getAttribute("aria-hidden") === "false" && await mobilePage.locator("#inspectorClose").evaluate((element) => document.activeElement === element), JSON.stringify(mobileState));
    await mobilePage.waitForTimeout(280);
    const inspectorBox = await mobilePage.locator("#inspector").boundingBox();
    record("手机职责抽屉完成过渡并进入可视区域", inspectorBox && inspectorBox.height > 240 && inspectorBox.y < 600, JSON.stringify(inspectorBox));
    await mobilePage.screenshot({ path: join(evidenceRoot, "project-009-application-lab-mobile.png"), fullPage: false });
    await mobilePage.keyboard.press("Escape");
    mobileState = await snapshot(mobilePage);
    record("Escape 关闭抽屉并返回触发器焦点", !mobileState.inspectorOpen && await inspectorButton.evaluate((element) => document.activeElement === element), JSON.stringify(mobileState));
    const mobileLayout = await layout(mobilePage);
    record("390px 手机无横向溢出", !mobileLayout.overflow, JSON.stringify(mobileLayout));
    await mobileContext.close();

    const reducedContext = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: "reduce" });
    const reducedPage = await reducedContext.newPage();
    await reducedPage.goto(`${labUrl}?scene=marketing&state=complete`, { waitUntil: "networkidle" });
    const reducedState = await snapshot(reducedPage);
    const reducedSrc = await reducedPage.locator("#actorSprite").getAttribute("src");
    record("reduced-motion 冻结 master 但保留完成状态", reducedState.reducedMotion && reducedState.sceneState === "complete" && reducedState.actorMode === "idle" && reducedSrc.endsWith("lin-jian-motion-master-v1.png"), `${reducedSrc} / ${JSON.stringify(reducedState)}`);
    await reducedContext.close();

    const noScriptContext = await browser.newContext({ viewport: { width: 1280, height: 900 }, javaScriptEnabled: false });
    const noScriptPage = await noScriptContext.newPage();
    await noScriptPage.goto(labUrl, { waitUntil: "networkidle" });
    const noScriptText = await noScriptPage.locator("body").innerText();
    record("无 JavaScript 仍可阅读五个方向", ["桌面伙伴", "互动故事/数字展厅", "教学演示", "营销人物", "低成本游戏原型"].every((text) => noScriptText.includes(text)));
    record("无 JavaScript 仍说明资产业务边界", noScriptText.includes("Sprite Studio 只提供这里复用的") && noScriptText.includes("属于教学系统") && noScriptText.includes("属于游戏运行时"));
    await noScriptContext.close();
  } finally {
    await browser.close();
  }

  let failures = 0;
  for (const check of checks) {
    console.log(`${check.passed ? "[PASS]" : "[FAIL]"} ${check.label}${check.detail ? ` · ${check.detail}` : ""}`);
    if (!check.passed) failures += 1;
  }
  if (failures) {
    console.error(`Project 009 application lab browser checks failed: ${failures}/${checks.length}`);
    process.exit(1);
  }
  console.log(`Project 009 application lab browser checks passed: ${checks.length}/${checks.length}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

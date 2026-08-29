const { mkdir } = require("node:fs/promises");
const { join } = require("node:path");
const { chromium } = require("playwright");

const baseUrl = process.env.PROJECT009_BASE_URL || "http://127.0.0.1:4173";
const gameUrl = `${baseUrl}/demos/sprite-maker-scene/`;
const snapshotUrl = `${baseUrl}/demos/sprite-maker-scene-r5/`;
const evidenceRoot = join(__dirname, "..", "..", "assets");

async function layout(page) {
  return page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
  }));
}

async function snapshot(page) {
  await page.waitForFunction(() => Boolean(window.__SPRITE_GAME__?.getSnapshot));
  return page.evaluate(() => window.__SPRITE_GAME__?.getSnapshot?.());
}

async function run() {
  await mkdir(evidenceRoot, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const checks = [];
  const errors = [];
  const externalRequests = new Set();
  const record = (label, passed, detail = "") => checks.push({ label, passed, detail });

  try {
    const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const page = await context.newPage();
    page.on("console", (message) => { if (message.type() === "error") errors.push(`console: ${message.text()}`); });
    page.on("pageerror", (error) => errors.push(`page: ${error.message}`));
    page.on("request", (request) => {
      const target = new URL(request.url());
      if (target.origin !== new URL(baseUrl).origin) externalRequests.add(target.origin);
    });

    const response = await page.goto(gameUrl, { waitUntil: "networkidle" });
    record("横向能力关卡返回成功", response && response.ok(), response ? String(response.status()) : "no response");
    record("标题与主场景正确", await page.title() === "CAPABILITY RUN · Sprite Studio Game Demo" && await page.getByRole("heading", { name: "旧站能力试运行", exact: true }).isVisible());
    record("Canvas 与六键控制可见", await page.locator("#gameCanvas").isVisible() && await page.locator(".touch-controls > button").count() === 6);
    await page.waitForFunction(() => window.__SPRITE_GAME__?.getSnapshot?.().assetsReady === true);
    let state = await snapshot(page);
    record("十三帧多动作资产加载成功", state.assetsReady && state.motionAssetsReady && state.assetErrors === 0, JSON.stringify(state));
    record("世界、模块与故障体初始化正确", state.worldWidth === 2800 && state.moduleCount === 0 && state.enemiesAlive === 5, JSON.stringify(state));
    record("默认处于简报前且 companion 未部署", state.quest === "available" && state.player.health === 4 && state.nearTarget === null && !state.companion.deployed, JSON.stringify(state));
    record("没有外部运行请求", externalRequests.size === 0, [...externalRequests].join(", "));

    await page.keyboard.press("e");
    record("远距离交互被拒绝", (await snapshot(page)).quest === "available" && (await page.locator("#dialogueText").textContent()).includes("交互范围内没有"));

    await page.goto(`${gameUrl}?state=near`, { waitUntil: "networkidle" });
    state = await snapshot(page);
    record("near fixture 位于 NPC 范围", state.nearTarget === "npc" && await page.locator("#interactionPrompt").isVisible(), JSON.stringify(state));
    await page.keyboard.press("e");
    state = await snapshot(page);
    record("成功领取能力试运行", state.quest === "active" && (await page.locator("#questCode").textContent()) === "CAPABILITY RUN", JSON.stringify(state));

    await page.goto(`${gameUrl}?state=active`, { waitUntil: "networkidle" });
    const beforeMove = await snapshot(page);
    await page.keyboard.down("d");
    await page.waitForTimeout(420);
    await page.keyboard.up("d");
    const afterMove = await snapshot(page);
    record("键盘移动推动玩家和镜头", afterMove.player.x > beforeMove.player.x + 35 && afterMove.cameraX > beforeMove.cameraX, `${beforeMove.player.x}/${beforeMove.cameraX} → ${afterMove.player.x}/${afterMove.cameraX}`);

    const beforeJumpY = afterMove.player.y;
    await page.keyboard.press("w");
    await page.waitForTimeout(120);
    state = await snapshot(page);
    record("键盘跳跃改变垂直状态", state.player.y < beforeJumpY - 12 && !state.player.onGround, `${beforeJumpY} → ${state.player.y}`);

    await page.evaluate(() => {
      window.__SPRITE_GAME__.defeatAllEnemies();
      window.__SPRITE_GAME__.movePlayerTo(1100);
    });
    await page.keyboard.down("d");
    await page.waitForTimeout(360);
    await page.keyboard.up("d");
    const blockedState = await snapshot(page);
    record("地面障碍阻挡直接通过", blockedState.player.x <= 1147.5, String(blockedState.player.x));
    await page.keyboard.press("w");
    await page.keyboard.down("d");
    await page.waitForTimeout(720);
    await page.keyboard.up("d");
    const clearedState = await snapshot(page);
    record("跳跃可以越过障碍", clearedState.player.x > 1205, String(clearedState.player.x));

    await page.goto(`${gameUrl}?state=combat`, { waitUntil: "networkidle" });
    await page.keyboard.press("j");
    await page.waitForTimeout(300);
    await page.keyboard.press("j");
    await page.waitForTimeout(340);
    state = await snapshot(page);
    record("两次脉冲命中清除故障体", state.shotsFired >= 2 && state.hits >= 2 && state.defeated >= 1 && state.enemies[0].hp === 0, JSON.stringify(state));
    const healthBefore = state.player.health;
    await page.evaluate(() => window.__SPRITE_GAME__.damagePlayer(1));
    state = await snapshot(page);
    record("受伤更新完整度 HUD", state.player.health === healthBefore - 1 && (await page.locator("#healthPips").textContent()).includes("○"), JSON.stringify(state));
    await page.screenshot({ path: join(evidenceRoot, "project-009-game-desktop.png"), fullPage: false });

    await page.goto(`${gameUrl}?state=failed`, { waitUntil: "networkidle" });
    record("失败态显示检查点恢复", await page.locator("#failureCard").isVisible() && (await snapshot(page)).quest === "failed");
    await page.getByRole("button", { name: "从检查点恢复" }).click();
    state = await snapshot(page);
    record("检查点恢复保留模块、补满生命并召回 companion", state.quest === "active" && state.player.health === 4 && state.modules.rig && state.player.x === state.player.checkpointX && state.companion.mode === "idle" && Math.abs(state.player.x - state.companion.x - 74) < 0.01, JSON.stringify(state));

    await page.goto(`${gameUrl}?state=active`, { waitUntil: "networkidle" });
    await page.evaluate(() => window.__SPRITE_GAME__.movePlayerTo(1452));
    await page.keyboard.press("e");
    state = await snapshot(page);
    record("QA 终端在 Rig 前被顺序门禁", state.moduleCount === 0 && state.moduleOpen === null && (await page.locator("#dialogueText").textContent()).includes("请先恢复 RIG"), JSON.stringify(state));

    await page.evaluate(() => window.__SPRITE_GAME__.activateTerminal("rig"));
    await page.evaluate(() => window.__SPRITE_GAME__.closeModule());
    await page.evaluate(() => window.__SPRITE_GAME__.movePlayerTo(1452));
    await page.keyboard.press("e");
    state = await snapshot(page);
    record("QA 终端要求先清理区段故障体", state.moduleCount === 1 && state.moduleOpen === null && (await page.locator("#dialogueText").textContent()).includes("故障体干扰"), JSON.stringify(state));

    await page.goto(`${gameUrl}?state=terminal-1`, { waitUntil: "networkidle" });
    await page.keyboard.press("e");
    state = await snapshot(page);
    record("Rig 终端激活、部署 companion 并打开 modal", state.modules.rig && state.companion.deployed && state.companion.mode === "idle" && state.moduleOpen === "rig" && await page.locator("#modulePanel").isVisible(), JSON.stringify(state.companion));
    record("Rig modal 显示 master、run、cast 三状态证据", await page.locator('[data-module-view="rig"] .action-sequences img').count() === 3 && await page.locator('[data-module-view="rig"] .action-sequences img').evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0)));
    record("Rig modal 保留四张 Revision 5 idle 证据", await page.locator('[data-module-view="rig"] .legacy-idle img').count() === 4 && await page.locator('[data-module-view="rig"] .legacy-idle img').evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0)));
    record("modal 初始焦点位于关闭按钮", await page.locator("#moduleClose").evaluate((element) => document.activeElement === element));
    await page.screenshot({ path: join(evidenceRoot, "project-009-game-rig-module.png"), fullPage: false });
    await page.keyboard.press("Escape");
    record("Escape 关闭并返回 Canvas 焦点", await page.locator("#modulePanel").isHidden() && await page.locator("#gameCanvas").evaluate((element) => document.activeElement === element));

    const companionBeforeRun = await snapshot(page);
    await page.evaluate(() => window.__SPRITE_GAME__.movePlayerTo(920));
    await page.waitForTimeout(180);
    const companionRunning = await snapshot(page);
    record("companion 跟随玩家并进入 run-v2", companionRunning.companion.mode === "run" && companionRunning.companion.x > companionBeforeRun.companion.x + 20 && companionRunning.companion.frameIndex >= 0 && companionRunning.companion.frameIndex < 4, `${JSON.stringify(companionBeforeRun.companion)} → ${JSON.stringify(companionRunning.companion)}`);
    const shotsBeforeCompanionCast = companionRunning.shotsFired;
    const projectilesBeforeCompanionCast = companionRunning.projectiles;
    const hitsBeforeCompanionCast = companionRunning.hits;
    await page.evaluate(() => window.__SPRITE_GAME__.firePulse());
    await page.waitForTimeout(165);
    const companionCasting = await snapshot(page);
    record("玩家脉冲触发 companion cast-v1", companionCasting.companion.mode === "cast" && companionCasting.companion.frameIndex >= 1 && companionCasting.companion.frameIndex < 5, JSON.stringify(companionCasting.companion));
    const resolvedCompanionPulseCount = (companionCasting.projectiles - projectilesBeforeCompanionCast) + (companionCasting.hits - hitsBeforeCompanionCast);
    record("companion 施法不重复生成游戏投射物", companionCasting.shotsFired === shotsBeforeCompanionCast + 1 && resolvedCompanionPulseCount === 1, `${shotsBeforeCompanionCast}/${projectilesBeforeCompanionCast}/${hitsBeforeCompanionCast} → ${companionCasting.shotsFired}/${companionCasting.projectiles}/${companionCasting.hits}`);
    await page.screenshot({ path: join(evidenceRoot, "project-009-game-companion.png"), fullPage: false });
    await page.waitForTimeout(360);
    state = await snapshot(page);
    record("cast-v1 完成后 companion 恢复跟随状态", state.companion.castTimer === 0 && ["run", "idle"].includes(state.companion.mode), JSON.stringify(state.companion));

    await page.goto(`${gameUrl}?state=terminal-2`, { waitUntil: "networkidle" });
    await page.keyboard.press("e");
    state = await snapshot(page);
    record("QA 终端显示真实诊断", state.modules.qa && state.moduleOpen === "qa" && await page.getByText("94", { exact: true }).isVisible() && (await page.locator('[data-module-view="qa"]').innerText()).includes("95.12"));
    await page.getByRole("button", { name: "继续任务" }).click();

    await page.goto(`${gameUrl}?state=terminal-3`, { waitUntil: "networkidle" });
    await page.keyboard.press("e");
    state = await snapshot(page);
    record("Export 终端令三模块全部上线", state.quest === "ready" && state.moduleCount === 3 && state.moduleOpen === "export", JSON.stringify(state));
    record("Export modal 展示 Manifest 与版本化 provenance", (await page.locator('[data-module-view="export"]').innerText()).includes("ANIMATION MANIFEST") && (await page.locator('[data-module-view="export"]').innerText()).includes("master → rig revision → render → review"));
    await page.screenshot({ path: join(evidenceRoot, "project-009-game-module.png"), fullPage: false });
    await page.getByRole("button", { name: "继续任务" }).click();
    await page.evaluate(() => window.__SPRITE_GAME__.movePlayerTo(2600));
    await page.keyboard.press("e");
    state = await snapshot(page);
    record("最终信标完成能力链且故障清零", state.quest === "complete" && state.enemiesAlive === 0 && await page.locator("#completionCard").isVisible(), JSON.stringify(state));
    await page.screenshot({ path: join(evidenceRoot, "project-009-game-complete.png"), fullPage: false });
    await page.getByRole("button", { name: "重新运行" }).click();
    state = await snapshot(page);
    record("完成态可以完整重置", state.quest === "available" && state.moduleCount === 0 && state.enemiesAlive === 5 && state.player.health === 4, JSON.stringify(state));

    await page.goto(`${gameUrl}?state=active`, { waitUntil: "networkidle" });
    const delta = await page.evaluate(() => window.__SPRITE_GAME__.simulateFrameDelta(5000, "right"));
    record("五秒长帧被钳制为最多 100ms", delta > 0 && delta <= 31.1, String(delta));
    const beforeFrames = (await snapshot(page)).renderFrames;
    await page.waitForTimeout(350);
    const afterFrames = (await snapshot(page)).renderFrames;
    record("复杂 active 场景持续渲染", afterFrames - beforeFrames >= 8, `${beforeFrames} → ${afterFrames}`);
    await page.locator("#gameCanvas").click({ position: { x: 480, y: 260 } });
    record("Canvas 可获得键盘焦点", await page.locator("#gameCanvas").evaluate((element) => document.activeElement === element));
    const desktopLayout = await layout(page);
    record("桌面无横向溢出", !desktopLayout.overflow, JSON.stringify(desktopLayout));
    record("桌面控制台与页面错误为零", errors.length === 0, errors.join(" | "));

    const snapshotPage = await context.newPage();
    const snapshotResponse = await snapshotPage.goto(`${snapshotUrl}?state=near`, { waitUntil: "networkidle" });
    record("Revision 5 冻结路由可独立运行", snapshotResponse && snapshotResponse.ok() && await snapshotPage.getByText("PLAYABLE CAPABILITY PROOF / REVISION 05", { exact: true }).isVisible());
    await snapshotPage.close();
    await context.close();

    const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto(`${gameUrl}?state=active`, { waitUntil: "networkidle" });
    let mobileState = await snapshot(mobilePage);
    const beforeX = mobileState.player.x;
    const rightButton = mobilePage.getByRole("button", { name: "向右移动" });
    await rightButton.dispatchEvent("pointerdown", { pointerId: 1, pointerType: "touch", isPrimary: true });
    await mobilePage.waitForTimeout(190);
    await rightButton.dispatchEvent("pointerup", { pointerId: 1, pointerType: "touch", isPrimary: true });
    mobileState = await snapshot(mobilePage);
    record("手机按住方向按钮可移动", mobileState.player.x > beforeX + 10, `${beforeX} → ${mobileState.player.x}`);
    const mobileGroundY = mobileState.player.y;
    await mobilePage.getByRole("button", { name: "跳跃" }).click();
    await mobilePage.waitForTimeout(100);
    mobileState = await snapshot(mobilePage);
    record("手机跳跃按钮有效", mobileState.player.y < mobileGroundY - 8, `${mobileGroundY} → ${mobileState.player.y}`);
    const shotsBefore = mobileState.shotsFired;
    await mobilePage.getByRole("button", { name: "发射脉冲" }).click();
    mobileState = await snapshot(mobilePage);
    record("手机脉冲按钮有效", mobileState.shotsFired === shotsBefore + 1, JSON.stringify(mobileState));
    await mobilePage.goto(`${gameUrl}?state=terminal-1`, { waitUntil: "networkidle" });
    await mobilePage.getByRole("button", { name: "交互", exact: true }).click();
    record("手机可打开并关闭能力 modal", await mobilePage.locator("#modulePanel").isVisible() && await mobilePage.getByRole("button", { name: "关闭能力面板" }).isVisible());
    await mobilePage.getByRole("button", { name: "关闭能力面板" }).click();
    const mobileLayout = await layout(mobilePage);
    record("390px 竖屏无横向溢出", !mobileLayout.overflow, JSON.stringify(mobileLayout));
    await mobilePage.screenshot({ path: join(evidenceRoot, "project-009-game-mobile.png"), fullPage: false });
    await mobileContext.close();

    const landscapeContext = await browser.newContext({ viewport: { width: 844, height: 390 }, hasTouch: true, isMobile: true });
    const landscapePage = await landscapeContext.newPage();
    await landscapePage.goto(`${gameUrl}?state=terminal-2`, { waitUntil: "networkidle" });
    await landscapePage.getByRole("button", { name: "交互", exact: true }).click();
    const landscapeLayout = await layout(landscapePage);
    record("844×390 横屏无横向溢出", !landscapeLayout.overflow, JSON.stringify(landscapeLayout));
    record("横屏保留 Canvas、六键和 QA modal", await landscapePage.locator("#gameCanvas").isVisible() && await landscapePage.locator(".touch-controls").isVisible() && await landscapePage.locator('[data-module-view="qa"]').isVisible());
    await landscapeContext.close();

    const reducedContext = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: "reduce" });
    const reducedPage = await reducedContext.newPage();
    await reducedPage.goto(`${gameUrl}?state=terminal-2`, { waitUntil: "networkidle" });
    const reducedCompanionStart = await snapshot(reducedPage);
    await reducedPage.evaluate(() => window.__SPRITE_GAME__.movePlayerTo(1820));
    await reducedPage.waitForTimeout(350);
    const reducedState = await snapshot(reducedPage);
    record("reduced-motion 冻结 NPC、companion 并抑制粒子", reducedState.reducedMotion && reducedState.frameIndex === 0 && reducedState.companion.mode === "idle" && reducedState.companion.frameIndex === 0 && reducedState.companion.x !== reducedCompanionStart.companion.x && reducedState.particles === 0, JSON.stringify(reducedState));
    await reducedPage.keyboard.press("w");
    await reducedPage.waitForTimeout(80);
    record("reduced-motion 不阻断跳跃玩法", !(await snapshot(reducedPage)).player.onGround);
    await reducedContext.close();

    const fallbackContext = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    await fallbackContext.addInitScript(() => { HTMLCanvasElement.prototype.getContext = () => null; });
    const fallbackPage = await fallbackContext.newPage();
    await fallbackPage.goto(gameUrl, { waitUntil: "networkidle" });
    const fallbackText = await fallbackPage.locator("#canvasFallback").innerText();
    record("Canvas 不可用显示三能力说明", await fallbackPage.locator("#canvasFallback").isVisible() && ["RIG", "QA", "EXPORT"].every((label) => fallbackText.includes(label)));
    record("Canvas 不可用禁用六键操作", await fallbackPage.locator(".touch-controls button:disabled").count() === 6);
    await fallbackContext.close();

    const noScriptContext = await browser.newContext({ viewport: { width: 1280, height: 900 }, javaScriptEnabled: false });
    const noScriptPage = await noScriptContext.newPage();
    await noScriptPage.goto(gameUrl, { waitUntil: "networkidle" });
    const noScriptText = await noScriptPage.locator("body").innerText();
    record("无 JavaScript 仍能阅读三能力", ["RIG / MOTION", "QA / GATE", "EXPORT / RUNTIME"].every((label) => noScriptText.includes(label)));
    record("无 JavaScript 仍能阅读职责边界", noScriptText.includes("真实库产物") && noScriptText.includes("程序化游戏层"));
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
    console.error(`Project 009 game browser checks failed: ${failures}/${checks.length}`);
    process.exit(1);
  }
  console.log(`Project 009 game browser checks passed: ${checks.length}/${checks.length}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

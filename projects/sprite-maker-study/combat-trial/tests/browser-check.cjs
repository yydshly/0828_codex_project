const { mkdir } = require("node:fs/promises");
const { join } = require("node:path");
const { chromium } = require("playwright");

const baseUrl = process.env.PROJECT009_BASE_URL || "http://127.0.0.1:4173";
const trialUrl = `${baseUrl}/demos/sprite-maker-combat-trial/`;
const evidenceRoot = join(__dirname, "..", "..", "assets");

async function snapshot(page) {
  await page.waitForFunction(() => Boolean(window.__SPRITE_COMBAT_TRIAL__?.getSnapshot));
  return page.evaluate(() => window.__SPRITE_COMBAT_TRIAL__.getSnapshot());
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
    const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const page = await context.newPage();
    page.on("console", (message) => { if (message.type() === "error") errors.push(`console: ${message.text()}`); });
    page.on("pageerror", (error) => errors.push(`page: ${error.message}`));
    page.on("request", (request) => {
      const target = new URL(request.url());
      if (target.origin !== new URL(baseUrl).origin) externalRequests.add(target.origin);
    });

    const response = await page.goto(trialUrl, { waitUntil: "networkidle" });
    record("复杂战斗模块返回成功", response && response.ok(), response ? String(response.status()) : "no response");
    record("标题与模块语义正确", await page.title() === "COMBAT TRIAL · Sprite Studio Complex Scene" && await page.getByRole("heading", { name: "同步穹顶战斗试运行", exact: true }).isVisible());
    record("Canvas 与七键控制可见", await page.locator("#combatCanvas").isVisible() && await page.locator(".touch-controls > button").count() === 7);
    await page.waitForFunction(() => window.__SPRITE_COMBAT_TRIAL__?.getSnapshot?.().assetsReady === true);
    let state = await snapshot(page);
    record("十项多动作资产加载成功", state.assetsReady && state.motionAssetsReady && state.assetErrors === 0, JSON.stringify(state));
    record("默认处于 briefing 且没有敌人", state.stage === "briefing" && state.wave === 0 && state.enemiesAlive === 0 && await page.locator("#briefingCard").isVisible(), JSON.stringify(state));
    record("没有外部运行请求", externalRequests.size === 0, [...externalRequests].join(", "));
    record("动作合同可见", await page.getByText("80ms startup · projectile active · 220ms cooldown", { exact: true }).isVisible() && await page.getByText("180ms travel · 220ms invulnerable · 850ms cooldown", { exact: true }).isVisible());
    await page.locator(".trial-shell").scrollIntoViewIfNeeded();
    await page.screenshot({ path: join(evidenceRoot, "project-009-combat-trial-briefing.png"), fullPage: false });

    await page.keyboard.press("e");
    state = await snapshot(page);
    record("键盘开始进入第一压力段", state.stage === "wave" && state.wave === 1 && state.enemiesAlive === 2 && await page.locator("#briefingCard").isHidden(), JSON.stringify(state));
    record("第一压力段包含追击与远程敌人", state.enemies.some((enemy) => enemy.kind === "stalker") && state.enemies.some((enemy) => enemy.kind === "ranger"), JSON.stringify(state.enemies));

    const beforeMove = state.player.x;
    await page.keyboard.down("d");
    await page.waitForTimeout(260);
    await page.keyboard.up("d");
    state = await snapshot(page);
    record("键盘移动推动探索器", state.player.x > beforeMove + 24, `${beforeMove} → ${state.player.x}`);

    await page.goto(`${trialUrl}?state=wave-1`, { waitUntil: "networkidle" });
    const pulseStartup = await page.evaluate(() => {
      window.__SPRITE_COMBAT_TRIAL__.firePulse();
      return window.__SPRITE_COMBAT_TRIAL__.getSnapshot();
    });
    record("Pulse 先进入 80ms startup", pulseStartup.player.pulseStartup > 0 && pulseStartup.shotsFired === 0, JSON.stringify(pulseStartup.player));
    await page.waitForTimeout(320);
    state = await snapshot(page);
    record("Pulse 单枚投射物命中并积累同步", state.shotsFired === 1 && state.hits === 1 && state.sync === 25 && state.enemies[0].hp === 2, JSON.stringify(state));

    await page.goto(`${trialUrl}?state=wave-1`, { waitUntil: "networkidle" });
    const dodgeStart = await page.evaluate(() => {
      window.__SPRITE_COMBAT_TRIAL__.dodge();
      window.__SPRITE_COMBAT_TRIAL__.spawnEnemyProjectile();
      return window.__SPRITE_COMBAT_TRIAL__.getSnapshot();
    });
    record("Dodge 立即打开移动与无敌窗口", dodgeStart.player.dodgeTimer > 0 && dodgeStart.player.invulnerable > 0 && dodgeStart.player.dodgeCooldown > 0, JSON.stringify(dodgeStart.player));
    await page.waitForTimeout(150);
    state = await snapshot(page);
    record("Dodge 回避投射物并奖励同步", state.perfectDodges === 1 && state.player.health === 5 && state.sync === 10 && state.enemyProjectiles === 0, JSON.stringify(state));

    await page.goto(`${trialUrl}?state=sync-ready`, { waitUntil: "networkidle" });
    state = await snapshot(page);
    record("sync-ready fixture 提供四点护盾与满能量", state.wave === 2 && state.sync === 100 && state.enemies[0].kind === "bulwark" && state.enemies[0].shield === 4, JSON.stringify(state));
    await page.keyboard.press("l");
    const castStart = await snapshot(page);
    record("协同命令消耗能量并进入 cast-v1", castStart.sync === 0 && castStart.companion.mode === "cast" && castStart.syncCasts === 1 && !castStart.companion.contactResolved, JSON.stringify(castStart.companion));
    await page.waitForTimeout(230);
    state = await snapshot(page);
    record("cast-v1 在 167ms 后只结算一次四点护盾压力", state.enemies[0].shield === 0 && state.hits === 1 && state.companion.contactResolved, JSON.stringify(state));
    await page.waitForTimeout(260);
    state = await snapshot(page);
    record("cast 恢复后 companion 返回 run 或 idle", state.companion.castTimer === 0 && ["run", "idle"].includes(state.companion.mode), JSON.stringify(state.companion));

    await page.goto(`${trialUrl}?state=wave-1`, { waitUntil: "networkidle" });
    await page.evaluate(() => window.__SPRITE_COMBAT_TRIAL__.defeatWave());
    state = await snapshot(page);
    record("清波后显示显式过渡计时", state.transitionTimer > 0 && state.enemiesAlive === 0, JSON.stringify(state));
    await page.evaluate(() => window.__SPRITE_COMBAT_TRIAL__.simulate(1.3));
    state = await snapshot(page);
    record("第一压力段自动进入护盾单元", state.wave === 2 && state.stage === "wave" && state.enemies.some((enemy) => enemy.kind === "bulwark"), JSON.stringify(state));
    await page.evaluate(() => window.__SPRITE_COMBAT_TRIAL__.defeatWave());
    await page.evaluate(() => window.__SPRITE_COMBAT_TRIAL__.simulate(1.3));
    state = await snapshot(page);
    record("第二压力段自动进入 Boss", state.wave === 3 && state.stage === "boss" && state.enemies[0].kind === "boss", JSON.stringify(state));

    await page.goto(`${trialUrl}?state=boss-1`, { waitUntil: "networkidle" });
    await page.evaluate(() => window.__SPRITE_COMBAT_TRIAL__.damageEnemy("WARDEN", 7));
    state = await snapshot(page);
    record("Boss 半血权威切换 Phase 2", state.bossPhase === 2 && state.enemies[0].hp === 7 && state.events.some((event) => event.includes("PHASE 2")), JSON.stringify(state));

    await page.goto(`${trialUrl}?state=boss-2`, { waitUntil: "networkidle" });
    state = await snapshot(page);
    record("boss-2 fixture 保留低生命与满同步压力", state.stage === "boss" && state.bossPhase === 2 && state.player.health === 3 && state.sync === 100, JSON.stringify(state));
    const burstState = await page.evaluate(() => {
      window.__SPRITE_COMBAT_TRIAL__.setHealth(5);
      window.__SPRITE_COMBAT_TRIAL__.movePlayerTo(1190);
      return window.__SPRITE_COMBAT_TRIAL__.simulate(3.6);
    });
    record("Boss Phase 2 实际生成三重脉冲压力", burstState.events.some((event) => event.includes("WARDEN-2")) && burstState.player.health < 5, JSON.stringify(burstState));
    record("普通受伤无敌不会被误算为完美闪避", burstState.perfectDodges === 0 && burstState.sync === 100, JSON.stringify(burstState));

    await page.goto(`${trialUrl}?state=boss-2`, { waitUntil: "networkidle" });
    await page.keyboard.press("l");
    await page.waitForTimeout(210);
    state = await snapshot(page);
    record("Boss Phase 2 接受协同单次接触", state.syncCasts === 1 && state.hits === 1 && state.enemies[0].hp === 5, JSON.stringify(state));
    await page.locator(".trial-shell").scrollIntoViewIfNeeded();
    await page.screenshot({ path: join(evidenceRoot, "project-009-combat-trial-boss.png"), fullPage: false });

    await page.goto(`${trialUrl}?state=failed`, { waitUntil: "networkidle" });
    record("失败态显示当前压力段重试", await page.locator("#failureCard").isVisible() && (await snapshot(page)).stage === "failed");
    await page.getByRole("button", { name: "重试当前压力段" }).click();
    state = await snapshot(page);
    record("失败重试保持 Wave 2 并恢复完整度", state.stage === "wave" && state.wave === 2 && state.player.health === 5 && state.enemiesAlive === 2, JSON.stringify(state));

    await page.goto(`${trialUrl}?state=victory`, { waitUntil: "networkidle" });
    record("完成态显示资产链结论", await page.locator("#victoryCard").isVisible() && (await snapshot(page)).stage === "victory" && (await page.locator("#victoryCard").innerText()).includes("游戏运行时"));
    await page.screenshot({ path: join(evidenceRoot, "project-009-combat-trial-complete.png"), fullPage: false });
    await page.getByRole("button", { name: "重新试运行" }).click();
    state = await snapshot(page);
    record("完成态可以重置到 briefing", state.stage === "briefing" && state.wave === 0 && state.player.health === 5, JSON.stringify(state));

    await page.goto(`${trialUrl}?state=boss-2`, { waitUntil: "networkidle" });
    const framesBefore = (await snapshot(page)).renderFrames;
    await page.waitForTimeout(350);
    const framesAfter = (await snapshot(page)).renderFrames;
    record("Boss 复杂场景持续渲染", framesAfter - framesBefore >= 8, `${framesBefore} → ${framesAfter}`);
    const desktopLayout = await layout(page);
    record("桌面无横向溢出", !desktopLayout.overflow, JSON.stringify(desktopLayout));
    record("桌面控制台与页面错误为零", errors.length === 0, errors.join(" | "));
    await context.close();

    const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto(`${trialUrl}?state=briefing`, { waitUntil: "networkidle" });
    await mobilePage.getByRole("button", { name: "开始试运行" }).click();
    let mobileState = await snapshot(mobilePage);
    record("手机可以开始第一压力段", mobileState.stage === "wave" && mobileState.wave === 1, JSON.stringify(mobileState));
    const mobileX = mobileState.player.x;
    const right = mobilePage.getByRole("button", { name: "向右移动" });
    await right.dispatchEvent("pointerdown", { pointerId: 1, pointerType: "touch", isPrimary: true });
    await mobilePage.waitForTimeout(190);
    await right.dispatchEvent("pointerup", { pointerId: 1, pointerType: "touch", isPrimary: true });
    mobileState = await snapshot(mobilePage);
    record("手机按住方向键可移动", mobileState.player.x > mobileX + 10, `${mobileX} → ${mobileState.player.x}`);
    await mobilePage.getByRole("button", { name: "发射脉冲" }).click();
    await mobilePage.waitForTimeout(110);
    mobileState = await snapshot(mobilePage);
    record("手机脉冲按钮完成 startup 并发射", mobileState.shotsFired === 1, JSON.stringify(mobileState));
    await mobilePage.goto(`${trialUrl}?state=sync-ready`, { waitUntil: "networkidle" });
    await mobilePage.getByRole("button", { name: "协同施法" }).click();
    await mobilePage.waitForTimeout(210);
    mobileState = await snapshot(mobilePage);
    record("手机协同按钮可以击破护盾", mobileState.syncCasts === 1 && mobileState.enemies[0].shield === 0, JSON.stringify(mobileState));
    const mobileLayout = await layout(mobilePage);
    record("390px 竖屏无横向溢出", !mobileLayout.overflow, JSON.stringify(mobileLayout));
    await mobilePage.locator(".trial-shell").scrollIntoViewIfNeeded();
    await mobilePage.screenshot({ path: join(evidenceRoot, "project-009-combat-trial-mobile.png"), fullPage: false });
    await mobileContext.close();

    const landscapeContext = await browser.newContext({ viewport: { width: 844, height: 390 }, hasTouch: true, isMobile: true });
    const landscapePage = await landscapeContext.newPage();
    await landscapePage.goto(`${trialUrl}?state=boss-2`, { waitUntil: "networkidle" });
    const landscapeLayout = await layout(landscapePage);
    record("844×390 横屏无横向溢出", !landscapeLayout.overflow, JSON.stringify(landscapeLayout));
    record("横屏保留 Canvas、七键与 Boss 状态", await landscapePage.locator("#combatCanvas").isVisible() && await landscapePage.locator(".touch-controls").isVisible() && (await snapshot(landscapePage)).bossPhase === 2);
    await landscapeContext.close();

    const reducedContext = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: "reduce" });
    const reducedPage = await reducedContext.newPage();
    await reducedPage.goto(`${trialUrl}?state=sync-ready`, { waitUntil: "networkidle" });
    await reducedPage.keyboard.press("l");
    await reducedPage.waitForTimeout(220);
    const reducedState = await snapshot(reducedPage);
    record("reduced-motion 冻结 companion 帧并抑制粒子", reducedState.reducedMotion && reducedState.companion.frameIndex === 0 && reducedState.particles === 0, JSON.stringify(reducedState));
    record("reduced-motion 仍结算协同接触", reducedState.reducedMotion && reducedState.companion.frameIndex === 0 && reducedState.enemies[0].shield === 0 && reducedState.hits === 1, JSON.stringify(reducedState));
    await reducedContext.close();

    const fallbackContext = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    await fallbackContext.addInitScript(() => { HTMLCanvasElement.prototype.getContext = () => null; });
    const fallbackPage = await fallbackContext.newPage();
    await fallbackPage.goto(trialUrl, { waitUntil: "networkidle" });
    const fallbackText = await fallbackPage.locator("#canvasFallback").innerText();
    record("Canvas 不可用仍说明资产与游戏边界", await fallbackPage.locator("#canvasFallback").isVisible() && fallbackText.includes("master / run-v2 / cast-v1") && fallbackText.includes("敌人 AI"));
    record("Canvas 不可用禁用七键操作", await fallbackPage.locator(".touch-controls button:disabled").count() === 7);
    await fallbackContext.close();

    const noScriptContext = await browser.newContext({ viewport: { width: 1280, height: 900 }, javaScriptEnabled: false });
    const noScriptPage = await noScriptContext.newPage();
    await noScriptPage.goto(trialUrl, { waitUntil: "networkidle" });
    const noScriptText = await noScriptPage.locator("body").innerText();
    record("无 JavaScript 仍可阅读动作合同", noScriptText.includes("80ms startup") && noScriptText.includes("220ms invulnerable") && noScriptText.includes("single contact"));
    record("无 JavaScript 仍可阅读职责边界", noScriptText.includes("Sprite Studio 只提供") && noScriptText.includes("三波敌人、Boss、碰撞、伤害和同步能量来自游戏代码"));
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
    console.error(`Project 009 combat trial browser checks failed: ${failures}/${checks.length}`);
    process.exit(1);
  }
  console.log(`Project 009 combat trial browser checks passed: ${checks.length}/${checks.length}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

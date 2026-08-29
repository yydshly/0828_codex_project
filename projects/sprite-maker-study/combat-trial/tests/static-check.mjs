import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const testRoot = dirname(fileURLToPath(import.meta.url));
const projectRoot = dirname(dirname(testRoot));
const repositoryRoot = dirname(dirname(projectRoot));
const demoRoot = join(repositoryRoot, "docs", "demos", "sprite-maker-combat-trial");
const publishedRoot = join(repositoryRoot, "docs", "assets", "project-009-game");
const experimentRoot = join(projectRoot, "experiments", "multi-action-benchmark");

const [html, css, game, researchPage, projectReadme, contract, packageRaw, resultRaw] = await Promise.all([
  readFile(join(demoRoot, "index.html"), "utf8"),
  readFile(join(demoRoot, "styles.css"), "utf8"),
  readFile(join(demoRoot, "game.js"), "utf8"),
  readFile(join(repositoryRoot, "docs", "projects", "sprite-maker-study", "index.html"), "utf8"),
  readFile(join(projectRoot, "README.md"), "utf8"),
  readFile(join(projectRoot, "DESIGN-CONTRACT.md"), "utf8"),
  readFile(join(repositoryRoot, "package.json"), "utf8"),
  readFile(join(experimentRoot, "multi-action-result.json"), "utf8")
]);

const packageJson = JSON.parse(packageRaw);
const result = JSON.parse(resultRaw);

function digest(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

const motionFiles = [
  "lin-jian-motion-master-v1.png",
  ...Array.from({ length: 4 }, (_, index) => `lin-jian-motion-run-v2_0${index + 1}.png`),
  ...Array.from({ length: 5 }, (_, index) => `lin-jian-motion-cast-v1_0${index + 1}.png`)
];
const publishedMatches = await Promise.all(motionFiles.map(async (file) => {
  const source = await readFile(join(experimentRoot, "workspace", "assets", "characters", file));
  const published = await readFile(join(publishedRoot, file));
  return digest(source) === digest(published);
}));

const checks = [
  ["复杂战斗模块语义结构完整", html.includes('id="combatCanvas"') && html.includes('id="briefingCard"') && html.includes('id="eventLog"') && html.includes('id="actionState"')],
  ["十项真实动作资产与实验哈希一致", publishedMatches.length === 10 && publishedMatches.every(Boolean)],
  ["多动作实验仍为有条件采用", result.verdict === "CONDITIONAL" && result.actions["run-v2"].sha256.length === 4 && result.actions["pulse-cast-v1"].sha256.length === 5],
  ["运行时加载 master、run 与 cast", game.includes("masterPath") && game.includes("runPaths") && game.includes("castPaths") && game.includes("motionAssetsReady")],
  ["三段压力与四类敌人存在", html.includes("01 混合巡逻") && html.includes("02 护盾单元") && html.includes("03 双阶段守门者") && ["stalker", "ranger", "bulwark", "boss"].every((kind) => game.includes(kind))],
  ["Boss 半血进入第二阶段", game.includes("enemy.hp <= 7") && game.includes("enemy.bossPhase = 2") && game.includes("WARDEN PHASE 2") && game.includes("burst")],
  ["脉冲具备显式 startup 与 cooldown", game.includes("timer: 0.08") && game.includes("fireCooldown = 0.22") && game.includes("releasePulse")],
  ["闪避具备移动、无敌与冷却窗口", game.includes("dodgeTimer = 0.18") && game.includes("invulnerable, 0.22") && game.includes("dodgeCooldown = 0.85")],
  ["协同施法以单次权威接触结算", game.includes("castTimer = 5 / 12") && game.includes("castElapsed >= 2 / 12") && game.includes("contactResolved") && game.includes("resolveCompanionContact")],
  ["普通脉冲与协同施法有差异化护盾压力", game.includes("shieldDamage: 1") && game.includes("shieldDamage: 4") && html.includes("护盾造成 4 点压力")],
  ["稳定 action id 避免同一接触重复结算", game.includes("nextActionId") && game.includes("actionId") && game.includes("contactResolved = true")],
  ["敌人攻击覆盖预警、生效、接触与恢复", ["windup", "active", "recovery", "beginEnemyAttack", "resolveEnemyMelee"].every((token) => game.includes(token))],
  ["敌人投射物与闪避奖励只来自真实 Dodge 窗口", game.includes("enemyProjectiles") && game.includes("perfectDodges") && game.includes("state.player.invulnerable > 0 && state.player.dodgeTimer > 0") && game.includes("普通无敌时间吸收，不奖励 SYNC")],
  ["失败重试保持当前压力段", game.includes("retryWave") && game.includes("Math.max(1, state.wave)") && html.includes('id="failureCard"')],
  ["三波清除后自动完成", game.includes("updateEncounterTransition") && game.includes("state.wave < 3") && game.includes("state.stage = 'victory'")],
  ["八个确定性 fixture 可直接复核", ["briefing", "wave-1", "wave-2", "sync-ready", "boss-1", "boss-2", "victory", "failed"].every((fixture) => game.includes(`'${fixture}'`) || game.includes(`\"${fixture}\"`))],
  ["测试 API 覆盖战斗核心状态", game.includes("__SPRITE_COMBAT_TRIAL__") && ["getSnapshot", "setFixture", "commandCast", "damageEnemy", "defeatWave", "spawnEnemyProjectile"].every((token) => game.includes(token))],
  ["固定时间步与长帧钳制存在", game.includes("STEP = 1 / 60") && game.includes("MAX_FRAME_DELTA = 0.1") && game.includes("while (accumulator >= STEP)")],
  ["键盘覆盖移动、脉冲、闪避、协同与重置", ["'j'", "'k'", "'l'", "'e'", "'r'"].every((key) => game.includes(key)) && game.includes("arrowleft") && game.includes("arrowright")],
  ["七键触控与 Pointer Events 完整", html.includes('class="touch-controls"') && (html.match(/<button type="button" data-(?:hold|action)=/g) || []).length >= 7 && game.includes("pointerdown") && game.includes("pointercancel")],
  ["失焦与隐藏会清空连续输入", game.includes("window.addEventListener('blur', clearInput)") && game.includes("visibilitychange")],
  ["reduced-motion 冻结动作帧并抑制粒子", css.includes("prefers-reduced-motion") && game.includes("reducedMotion.matches ? 0") && game.includes("if (reducedMotion.matches) return")],
  ["无 Canvas 与无 JavaScript 仍解释职责边界", html.includes('id="canvasFallback"') && html.includes("JavaScript 已关闭") && html.includes("Sprite Studio 只提供")],
  ["响应式覆盖手机与横屏", css.includes("max-width: 440px") && css.includes("max-height: 520px") && css.includes("orientation: landscape")],
  ["页面不依赖外部运行资源", !/(src|href)=["']https?:\/\/[^"']+\.(?:js|css|png|jpg|jpeg|webp|svg|gif)/i.test(html)],
  ["研究页新增复杂战斗入口", researchPage.includes('id="combat-trial"') && researchPage.includes("同步穹顶战斗试运行") && researchPage.includes("sprite-maker-combat-trial")],
  ["项目档案记录复杂战斗模块", projectReadme.includes("复杂战斗试运行") && projectReadme.includes("sprite-maker-combat-trial")],
  ["设计契约保留第七版战斗试运行", contract.includes("Request revision: 8") && contract.includes("Revision 7 · Combat Trial contract") && contract.includes("双阶段 Boss")],
  ["独立测试命令已登记", packageJson.scripts["test:project-009-combat-trial"]?.includes("combat-trial/tests/static-check.mjs") && packageJson.scripts["test:project-009"]?.includes("test:project-009-combat-trial")],
  ["不存在模板占位符", !/[<［\[]待填写[>］\]]|TODO|Lorem ipsum/i.test(`${html}\n${css}\n${game}`)]
];

let failures = 0;
for (const [label, passed] of checks) {
  console.log(`${passed ? "[PASS]" : "[FAIL]"} ${label}`);
  if (!passed) failures += 1;
}

if (failures) {
  console.error(`Project 009 combat trial static checks failed: ${failures}/${checks.length}`);
  process.exit(1);
}

console.log(`Project 009 combat trial static checks passed: ${checks.length}/${checks.length}`);

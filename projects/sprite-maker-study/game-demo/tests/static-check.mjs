import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const testRoot = dirname(fileURLToPath(import.meta.url));
const gameDemoRoot = dirname(testRoot);
const projectRoot = dirname(gameDemoRoot);
const repositoryRoot = dirname(dirname(projectRoot));
const routeRoot = join(repositoryRoot, "docs", "demos", "sprite-maker-scene");
const publishedAssetRoot = join(repositoryRoot, "docs", "assets", "project-009-game");
const nativeAssetRoot = join(projectRoot, "experiments", "own-sample-benchmark", "native-workspace", "assets", "characters");
const motionExperimentRoot = join(projectRoot, "experiments", "multi-action-benchmark");
const motionAssetRoot = join(motionExperimentRoot, "workspace", "assets", "characters");
const snapshotRoot = join(repositoryRoot, "docs", "demos", "sprite-maker-scene-r5");

const [html, css, game, projectPage, projectReadme, gameReadme, projectsRaw, rootReadme, packageRaw, contract, motionResultRaw, motionReadme, snapshotReadme] = await Promise.all([
  readFile(join(routeRoot, "index.html"), "utf8"),
  readFile(join(routeRoot, "styles.css"), "utf8"),
  readFile(join(routeRoot, "game.js"), "utf8"),
  readFile(join(repositoryRoot, "docs", "projects", "sprite-maker-study", "index.html"), "utf8"),
  readFile(join(projectRoot, "README.md"), "utf8"),
  readFile(join(gameDemoRoot, "README.md"), "utf8"),
  readFile(join(repositoryRoot, "docs", "projects.json"), "utf8"),
  readFile(join(repositoryRoot, "README.md"), "utf8"),
  readFile(join(repositoryRoot, "package.json"), "utf8"),
  readFile(join(projectRoot, "DESIGN-CONTRACT.md"), "utf8"),
  readFile(join(motionExperimentRoot, "multi-action-result.json"), "utf8"),
  readFile(join(motionExperimentRoot, "README.md"), "utf8"),
  readFile(join(snapshotRoot, "SNAPSHOT.md"), "utf8")
]);

const packageJson = JSON.parse(packageRaw);
const project = JSON.parse(projectsRaw).find((item) => item.id === "sprite-maker-study");
const digest = (buffer) => createHash("sha256").update(buffer).digest("hex");
const motionResult = JSON.parse(motionResultRaw);
const frameMatches = await Promise.all([1, 2, 3, 4].map(async (index) => {
  const number = String(index).padStart(2, "0");
  const nativeFrame = await readFile(join(nativeAssetRoot, `project003-anchor-idle-revised3_${number}.png`));
  const publishedFrame = await readFile(join(publishedAssetRoot, `lin-jian-idle-${number}.png`));
  return digest(nativeFrame) === digest(publishedFrame);
}));
const motionNames = [
  "lin-jian-motion-master-v1.png",
  ...[1, 2, 3, 4].map((index) => `lin-jian-motion-run-v2_${String(index).padStart(2, "0")}.png`),
  ...[1, 2, 3, 4, 5].map((index) => `lin-jian-motion-cast-v1_${String(index).padStart(2, "0")}.png`)
];
const motionMatches = await Promise.all(motionNames.map(async (name) => {
  const experimentFrame = await readFile(join(motionAssetRoot, name));
  const publishedFrame = await readFile(join(publishedAssetRoot, name));
  return digest(experimentFrame) === digest(publishedFrame);
}));
const snapshotExpected = {
  "index.html": "FBDD37E983D741009783F63907331C70BCD01208B304C2C023FF377A5A091620",
  "styles.css": "0125C64130F6FA90F57EBAEC93D890A995BBA0B1919472EC0EAC99342B1AF9CC",
  "game.js": "34C67B2F5375FF422243E7E7FF1A7537D6C16DD334D63FE2DA4722957F8B5BA5"
};
const snapshotMatches = await Promise.all(Object.entries(snapshotExpected).map(async ([name, expected]) => digest(await readFile(join(snapshotRoot, name))).toUpperCase() === expected));

const checks = [
  ["横向能力关卡语义结构完整", html.includes('id="game-stage"') && html.includes('id="gameCanvas"') && html.includes("旧站能力试运行")],
  ["四帧发布资产与原生输出哈希一致", frameMatches.length === 4 && frameMatches.every(Boolean)],
  ["Revision 5 快照三文件哈希固定", snapshotMatches.every(Boolean) && snapshotReadme.includes("Revision 5 snapshot") && snapshotReadme.includes("sprite-maker-scene-r5")],
  ["多动作发布资产与实验输出哈希一致", motionMatches.length === 10 && motionMatches.every(Boolean)],
  ["多动作实验通过结构与人工边界", motionResult.verdict === "CONDITIONAL" && motionResult.checks.allFramesUniqueByFileHash && motionResult.checks.runLoopHasFourUniqueFrames && motionResult.checks.castHasFiveUniqueFrames && motionResult.checks.minimumExactSourceRgbaPercent === 93.962 && motionReadme.includes("run-v1") && motionReadme.includes("run-v2")],
  ["运行时加载 idle、run、cast 与 motion master", ["idleFramePaths", "runFramePaths", "castFramePaths", "motionMasterPath", "motionAssetsReady"].every((item) => game.includes(item))],
  ["世界与镜头规模明确", game.includes("const WORLD_WIDTH = 2800") && game.includes("updateCamera") && html.includes("2,800px 横向关卡")],
  ["移动跳跃物理完整", ["PLAYER_ACCELERATION", "JUMP_VELOCITY", "GRAVITY", "resolveObstacleCollision", "onGround"].every((item) => game.includes(item))],
  ["脉冲战斗与五个故障体存在", game.includes("firePulse") && game.includes("damagePlayer") && game.includes("updateEnemies") && (game.match(/id: 'fault-/g) || []).length === 5],
  ["战斗清理是终端与信标门禁", game.includes("combatGateFor") && game.includes("refreshQuestReady") && game.includes("故障体干扰") && game.includes("aliveEnemies().length === 0")],
  ["生命失败与检查点恢复完整", game.includes("state.quest = 'failed'") && game.includes("retryCheckpoint") && game.includes("checkpointX") && game.includes("x: state.player.x - 74") && html.includes('id="failureCard"')],
  ["三能力终端按顺序门禁", ["rig", "qa", "export"].every((id) => game.includes(`id: '${id}'`)) && game.includes("prerequisiteFor") && game.includes("RIG") && game.includes("QA")],
  ["Rig 终端展示三状态真实证据", html.includes('data-module-view="rig"') && (html.match(/project-009-game\/lin-jian-idle-/g) || []).length === 4 && html.includes("lin-jian-run-v2.gif") && html.includes("lin-jian-cast-v1.gif") && html.includes("CONDITIONAL / demo-ready")],
  ["QA 终端展示原生与多动作边界", html.includes("MOTION CONTINUITY") && html.includes("95.12") && html.includes("9 / 9 UNIQUE FRAMES") && html.includes("93.962%") && html.includes("不是审美模型")],
  ["Export 终端展示多状态 Manifest 与 provenance", html.includes("ANIMATION MANIFEST") && html.includes('"finish": "versioned-rig"') && html.includes('"run": [4, 10, true]') && html.includes("master → rig revision → render → review")],
  ["Rig 上线部署 companion 并切换 run/cast", game.includes("updateCompanion") && game.includes("drawCompanion") && game.includes("state.companion.castTimer = 5 / 12") && game.includes("state.companion.mode = reducedMotion.matches ? 'idle' : 'run'") && game.includes("state.companion.mode = 'cast'")],
  ["能力 modal 支持关闭 Escape 与焦点返回", html.includes('role="dialog"') && html.includes('aria-modal="true"') && game.includes("key === 'escape'") && game.includes("canvas.focus")],
  ["任务状态覆盖简报运行就绪完成失败", ["available", "active", "ready", "complete", "failed"].every((state) => game.includes(state))],
  ["最终信标受三模块门禁", game.includes("const BEACON_X") && game.includes("moduleTotal() === 3") && game.includes("启动最终信标")],
  ["确定性 fixtures 覆盖主状态", ["near", "active", "terminal-1", "terminal-2", "terminal-3", "combat", "ready", "complete", "failed"].every((item) => game.includes(`'${item}'`))],
  ["键盘覆盖移动跳跃攻击交互重置", ["arrowleft", "arrowright", "arrowup", "'w'", "'j'", "'f'", "'e'", "'r'"].every((key) => game.includes(key))],
  ["六键触控与 Pointer Events 完整", html.includes('class="touch-controls"') && (html.match(/<button type="button" data-(?:control|action)=/g) || []).length >= 6 && game.includes("pointerdown") && game.includes("setPointerCapture")],
  ["固定时间步与长帧钳制存在", game.includes("const STEP = 1 / 60") && game.includes("const MAX_FRAME_DELTA = 0.1") && game.includes("while (accumulator >= STEP)")],
  ["失焦清空连续输入", game.includes("window.addEventListener('blur', clearInput)") && game.includes("input.left = false")],
  ["测试 API 覆盖战斗终端与物理", ["getSnapshot", "setFixture", "firePulse", "damagePlayer", "activateTerminal", "simulateSteps", "simulateFrameDelta"].every((item) => game.includes(item))],
  ["reduced-motion 关闭雨粒子并冻结角色序列", css.includes("prefers-reduced-motion") && game.includes("reducedMotion.matches ? 0") && game.includes("companion.mode = reducedMotion.matches ? 'idle' : 'run'") && game.includes("if (reducedMotion.matches) return")],
  ["Canvas 不可用仍展示三能力证据", html.includes('id="canvasFallback"') && ["RIG", "QA", "EXPORT"].every((item) => html.includes(`<b>${item}</b>`)) && game.includes("canvas-unavailable")],
  ["响应式覆盖手机与横屏 modal", css.includes("@media (max-width: 760px)") && css.includes("@media (max-height: 520px) and (orientation: landscape)") && css.includes(".module-panel")],
  ["场景明确库产物与游戏层边界", html.includes("真实库产物") && html.includes("程序化游戏层") && html.includes("物理 · 战斗 · 敌人")],
  ["场景不依赖外部运行资源", !/(src|href)=["']https?:\/\//i.test(html) && !/https?:\/\//i.test(css) && !/https?:\/\//i.test(game)],
  ["研究页同步多动作 companion 与快照", projectPage.includes('id="game-demo"') && projectPage.includes("run-v2") && projectPage.includes("pulse-cast-v1") && projectPage.includes("Revision 5") && projectPage.includes("sprite-maker-scene-r5")],
  ["总库入口升级为应用实验室且研究页保留能力关卡", project?.demoUrl === "./demos/sprite-maker-application-lab/" && project?.status.includes("五类应用") && projectPage.includes('href="../../demos/sprite-maker-scene/"') && rootReadme.includes("原多动作能力关卡")],
  ["项目档案同步操作、fixtures 与边界", projectReadme.includes("## 可玩游戏场景：旧站能力试运行") && projectReadme.includes("terminal-3") && projectReadme.includes("multi-action-benchmark") && gameReadme.includes("## 验收矩阵") && gameReadme.includes("sprite-maker-scene-r5")],
  ["独立静态测试命令已登记", packageJson.scripts["test:project-009-game"]?.includes("game-demo/tests/static-check.mjs") && packageJson.scripts["test:project-009"]?.includes("test:project-009-game")],
  ["设计契约保留第六版版本化 companion", contract.includes("Request revision: 8") && contract.includes("Versioned companion contract") && contract.includes("motion-ready") && contract.includes("Revision 6 coverage")],
  ["没有模板占位符", !/[<［\[]待填写[>］\]]|TODO|Lorem ipsum/i.test(`${html}\n${css}\n${game}\n${gameReadme}`)]
];

let failures = 0;
for (const [label, passed] of checks) {
  console.log(`${passed ? "[PASS]" : "[FAIL]"} ${label}`);
  if (!passed) failures += 1;
}

if (failures) {
  console.error(`Project 009 game static checks failed: ${failures}/${checks.length}`);
  process.exit(1);
}

console.log(`Project 009 game static checks passed: ${checks.length}/${checks.length}`);

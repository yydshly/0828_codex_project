import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const repositoryRoot = dirname(dirname(projectRoot));
const pageRoot = join(repositoryRoot, "docs", "projects", "sprite-maker-study");
const sourceRoot = join(projectRoot, "source");
const benchmarkRoot = join(projectRoot, "experiments", "own-sample-benchmark");
const multiActionRoot = join(projectRoot, "experiments", "multi-action-benchmark");

const [
  html,
  css,
  js,
  projectsRaw,
  auditRaw,
  projectReadme,
  designContract,
  rootReadme,
  packageRaw,
  buildScript,
  workflow,
  gitmodules,
  upstreamPackageRaw,
  benchmarkRaw,
  benchmarkReadme,
  inputAuditRaw,
  multiActionRaw,
  multiActionReadme,
  motionMasterAuditRaw
] = await Promise.all([
  readFile(join(pageRoot, "index.html"), "utf8"),
  readFile(join(pageRoot, "styles.css"), "utf8"),
  readFile(join(pageRoot, "app.js"), "utf8"),
  readFile(join(repositoryRoot, "docs", "projects.json"), "utf8"),
  readFile(join(projectRoot, "experiments", "upstream-audit.json"), "utf8"),
  readFile(join(projectRoot, "README.md"), "utf8"),
  readFile(join(projectRoot, "DESIGN-CONTRACT.md"), "utf8"),
  readFile(join(repositoryRoot, "README.md"), "utf8"),
  readFile(join(repositoryRoot, "package.json"), "utf8"),
  readFile(join(repositoryRoot, "scripts", "build-pages.mjs"), "utf8"),
  readFile(join(repositoryRoot, ".github", "workflows", "pages.yml"), "utf8"),
  readFile(join(repositoryRoot, ".gitmodules"), "utf8"),
  readFile(join(sourceRoot, "package.json"), "utf8"),
  readFile(join(benchmarkRoot, "benchmark-result.json"), "utf8"),
  readFile(join(benchmarkRoot, "README.md"), "utf8"),
  readFile(join(benchmarkRoot, "input-audit.json"), "utf8"),
  readFile(join(multiActionRoot, "multi-action-result.json"), "utf8"),
  readFile(join(multiActionRoot, "README.md"), "utf8"),
  readFile(join(multiActionRoot, "motion-master-audit.json"), "utf8")
]);

const projects = JSON.parse(projectsRaw);
const audit = JSON.parse(auditRaw);
const packageJson = JSON.parse(packageRaw);
const upstreamPackage = JSON.parse(upstreamPackageRaw);
const benchmark = JSON.parse(benchmarkRaw);
const inputAudit = JSON.parse(inputAuditRaw);
const multiAction = JSON.parse(multiActionRaw);
const motionMasterAudit = JSON.parse(motionMasterAuditRaw);
const pageProject = projects.find((project) => project.id === "sprite-maker-study");
const expectedCommit = "336c7114f0fce7336ec17f6e9beb93980ed03b1d";
const safeSourceRoot = sourceRoot.replaceAll("\\", "/");
const gitReadArgs = ["-c", `safe.directory=${safeSourceRoot}`, "-C", sourceRoot];
const actualCommit = execFileSync("git", [...gitReadArgs, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
const actualTag = execFileSync("git", [...gitReadArgs, "describe", "--tags", "--exact-match"], { encoding: "utf8" }).trim();

function digest(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

const mediaChecks = await Promise.all(audit.officialMedia.map(async ({ file }) => {
  const sourceMedia = await readFile(join(sourceRoot, "docs", "media", file));
  const siteMedia = await readFile(join(repositoryRoot, "docs", "assets", "project-009-media", file));
  return digest(sourceMedia) === digest(siteMedia);
}));

const ownMediaChecks = await Promise.all([
  [join(benchmarkRoot, "workspace", "assets", "characters", "project003-anchor.png"), join(repositoryRoot, "docs", "assets", "project-009-own-sample", "project003-anchor.png")],
  [join(benchmarkRoot, "workspace", "assets", "characters", "project003-arms-crossed.png"), join(repositoryRoot, "docs", "assets", "project-009-own-sample", "project003-arms-crossed.png")],
  [join(benchmarkRoot, "workspace", "assets", "characters", "project001-scene.png"), join(repositoryRoot, "docs", "assets", "project-009-own-sample", "project001-scene.png")],
  [join(benchmarkRoot, "evidence", "project003-idle-contact-sheet.png"), join(repositoryRoot, "docs", "assets", "project-009-own-sample", "project003-idle-contact-sheet.png")],
  [join(benchmarkRoot, "evidence", "project003-idle.gif"), join(repositoryRoot, "docs", "assets", "project-009-own-sample", "project003-idle.gif")],
  [join(benchmarkRoot, "native-02-results.png"), join(repositoryRoot, "docs", "assets", "project-009-own-sample", "native-results.png")]
].map(async ([source, copy]) => digest(await readFile(source)) === digest(await readFile(copy))));

const multiActionMediaChecks = await Promise.all([
  "lin-jian-motion-master-v1.png",
  ...Array.from({ length: 4 }, (_, index) => `lin-jian-motion-run-v2_0${index + 1}.png`),
  ...Array.from({ length: 5 }, (_, index) => `lin-jian-motion-cast-v1_0${index + 1}.png`)
].map(async (file) => digest(await readFile(join(multiActionRoot, "workspace", "assets", "characters", file))) === digest(await readFile(join(repositoryRoot, "docs", "assets", "project-009-game", file)))));

const checks = [
  ["Project 009 已登记", pageProject?.number === "009" && pageProject?.name === "SPRITE PRODUCTION, LOCAL FIRST"],
  ["根 README 已登记 Project 009", rootReadme.includes("009 · SPRITE PRODUCTION, LOCAL FIRST")],
  ["上游 submodule 已登记", gitmodules.includes("projects/sprite-maker-study/source") && gitmodules.includes("JohnKinyanjui/sprite-maker.git")],
  ["上游提交与 tag 固定", audit.upstream.commit === expectedCommit && actualCommit === expectedCommit && actualTag === "v0.3.2"],
  ["上游包版本一致", upstreamPackage.version === "0.3.2" && audit.upstream.tag === "v0.3.2"],
  ["上游核心实现存在", (await readFile(join(sourceRoot, "src-tauri", "src", "rig.rs"), "utf8")).includes("solve_contact_ik") && (await readFile(join(sourceRoot, "src-tauri", "src", "quality.rs"), "utf8")).includes("compute_metrics")],
  ["六项官方媒体与上游哈希一致", mediaChecks.length === 6 && mediaChecks.every(Boolean)],
  ["媒体证据边界明确", html.includes("UPSTREAM OFFICIAL MEDIA") && html.includes("不是 Project 009 生成结果") && projectReadme.includes("没有把这些媒体声明为我们的生成结果")],
  ["自有样例实测区存在", html.includes('id="own-test"') && html.includes("不是看官方样片：我们自己的角色，真实跑了一遍")],
  ["六项自有样例媒体与实验哈希一致", ownMediaChecks.length === 6 && ownMediaChecks.every(Boolean)],
  ["输入门禁包含通过、条件与拒绝", ["HIGH FIT", "CONDITIONAL", "REJECT"].every((label) => html.includes(label)) && inputAudit.samples.length === 3],
  ["实测执行边界明确", benchmark.execution.imageGenerationCalls === 0 && benchmark.execution.provider === "Codex CLI" && html.includes("本次 ImageGen 调用为 0")],
  ["真实原生 command 已留档", ["import_asset", "validate_rig_spec", "render_rig_animation", "get_quality_report"].every((command) => benchmark.execution.nativeCommands.includes(command))],
  ["三次渲染门禁完整", benchmark.gateSequence.filter((item) => item.gate === "render_rig_animation").length === 3 && html.includes("imperceptible_rig_motion") && html.includes("missing_body_motion")],
  ["确定性复渲染已验证", benchmark.output.frameCount === 4 && benchmark.output.uniqueHashes === 4 && benchmark.output.deterministicRerender === true && new Set(benchmark.output.frameSha256).size === 4],
  ["原生 QA 与语义边界并存", benchmark.nativeQuality.overall === 94 && benchmark.nativeQuality.motionContinuity === 76 && benchmark.nativeQuality.boundary.includes("do not prove semantic identity") && html.includes("不是审美模型")],
  ["自有实验有独立复现档案", benchmarkReadme.includes("## 真实执行链") && benchmarkReadme.includes("## 复现") && projectReadme.includes("## 自有样例实测")],
  ["多动作实验有真实透明母版与版本化复现档案", motionMasterAudit.outputAlphaExtrema?.[0] === 0 && motionMasterAudit.outputAlphaExtrema?.[1] === 255 && multiActionReadme.includes("run-v1") && multiActionReadme.includes("run-v2") && multiActionReadme.includes("Windows")],
  ["多动作实验九帧唯一且保持边界有记录", multiAction.verdict === "CONDITIONAL" && multiAction.actions["run-v2"].sha256.length === 4 && multiAction.actions["pulse-cast-v1"].sha256.length === 5 && multiAction.checks.allFramesUniqueByFileHash && multiAction.checks.minimumExactSourceRgbaPercent === 93.962],
  ["十项多动作发布 PNG 与实验哈希一致", multiActionMediaChecks.length === 10 && multiActionMediaChecks.every(Boolean)],
  ["合理使用场景演示存在", html.includes('id="use-case-demo"') && html.includes("它的意义不是“图片会动”")],
  ["场景演示包含三种状态", (html.match(/data-scenario=/g) || []).length === 3 && ["select", "dialogue", "combat"].every((key) => html.includes(`data-scenario-view="${key}"`))],
  ["场景演示采用真实实测资产", (html.match(/project003-idle\.gif/g) || []).length >= 3 && html.includes("同一 4-frame idle 被复用")],
  ["场景判断包含使用与阻断", ["USE NOW", "REUSE", "DO NOT SHIP", "Idle 通过，不等于 Run 通过"].every((label) => html.includes(label))],
  ["场景意义覆盖复用控制交付", html.includes("01 · REUSE") && html.includes("02 · CONTROL") && html.includes("03 · DELIVERY")],
  ["场景标签键盘切换已实现", js.includes("scenarioTabs") && js.includes("activateScenario") && js.includes("moveTab(event, scenarioTabs")],
  ["场景 reduced-motion 有静态替代", css.includes(".scenario-character .animated-avatar") && css.includes(".scenario-character .static-avatar")],
  ["README 记录合理场景判断", projectReadme.includes("## 合理使用场景演示") && projectReadme.includes("角色选择 / 个人资料") && projectReadme.includes("战斗跑动")],
  ["首屏明确不是模型", html.includes("它不是模型，也不附带模型权重") && html.includes("不需要下载模型权重")],
  ["页面覆盖能力与真实边界", html.includes('id="evidence"') && html.includes('id="mechanism"') && html.includes("EXECUTION MAP")],
  ["实验台包含四类任务", (html.match(/data-workflow=/g) || []).length === 4 && ["sprite", "animate", "pack", "terrain"].every((key) => js.includes(`${key}: {`))],
  ["动画包含三种完成模式", (html.match(/data-mode=/g) || []).length === 3 && ["rig", "polish", "redraw"].every((key) => js.includes(`${key}: {`))],
  ["实验台明确不调用模型", html.includes("实验台不调用模型，也不生成图片")],
  ["AI、本地、文件三层均存在", ["AI / PROVIDER", "LOCAL ENGINE", "FILES / STATE"].every((label) => html.includes(label) && js.includes(label))],
  ["复制与剪贴板降级已实现", js.includes("navigator.clipboard.writeText") && js.includes("浏览器未授权剪贴板")],
  ["标签键盘交互已实现", js.includes("ArrowRight") && js.includes("ArrowLeft") && js.includes("Home") && js.includes("End")],
  ["页面覆盖使用场景", html.includes('id="scenarios"') && html.includes("HIGH FIT") && html.includes("LOW FIT")],
  ["页面覆盖我们的价值", html.includes('id="value"') && html.includes("PROJECT 001") && html.includes("PROJECT 003") && html.includes("Harness 编译层")],
  ["页面覆盖扩展与采用建议", html.includes('id="extensions"') && html.includes("HEADLESS DELIVERY") && html.includes("RECOMMENDED NEXT STEP")],
  ["README 独立回答用户问题", ["## 能力地图", "## 实现原理", "## 使用场景", "## 对我们的意义与价值", "## 可扩展方向", "## 建议采用路线"].every((heading) => projectReadme.includes(heading))],
  ["README 解释模型依赖", projectReadme.includes("## 需要安装模型吗") && projectReadme.includes("不需要下载 Stable Diffusion、Flux 等模型权重")],
  ["版本叙述差异有记录", html.includes("README 与当前代码存在叙述差异") && audit.codeFindings.some((item) => item.includes("README still contains"))],
  ["包含桌面、平板与手机规则", css.includes("@media (max-width: 1180px)") && css.includes("@media (max-width: 940px)") && css.includes("@media (max-width: 720px)") && css.includes("@media (max-width: 480px)")],
  ["包含 reduced-motion 与媒体降级", css.includes("prefers-reduced-motion") && css.includes("scroll-behavior: auto") && css.includes(".motion-fallback")],
  ["页面不依赖外部运行素材", !/(src|href)=["']https?:\/\/[^"']+\.(js|css|png|jpg|jpeg|webp|svg|gif)/i.test(html)],
  ["Pages checkout 初始化 submodule", workflow.includes("submodules: recursive")],
  ["审计与实测数据由构建复制", buildScript.includes("upstream-audit.json") && buildScript.includes("own-sample-benchmark.json") && buildScript.includes("sprite-maker-study")],
  ["Project 009 测试命令已登记", packageJson.scripts["test:project-009"]?.includes("static-check.mjs") && packageJson.scripts["test:all"]?.includes("test:project-009")],
  ["研究页进入第六版多动作 companion", html.includes('id="game-demo"') && html.includes("PLAYABLE PROOF / REVISION 06") && html.includes("lin-jian-motion-run-v2_02.png") && html.includes("pulse-cast-v1") && html.includes("sprite-maker-scene-r5")],
  ["研究页新增复杂战斗试运行模块", html.includes('id="combat-trial"') && html.includes("COMPLEX SCENE PROOF / MODULE 02") && html.includes("sprite-maker-combat-trial") && html.includes("4 archetypes")],
  ["研究页新增五场景应用实验室", html.includes('id="application-lab"') && html.includes("ONE ASSET / FIVE PRODUCTS") && html.includes("sprite-maker-application-lab") && html.includes("低成本游戏原型")],
  ["设计契约进入第八版并保留 Combat Trial", designContract.includes("Entry mode: Brief-led") && designContract.includes("Request revision: 8") && designContract.includes("Application Lab contract") && designContract.includes("Combat Trial contract") && designContract.includes("Observable completion criteria")],
  ["不存在模板占位符", !/[<［\[]待填写[>］\]]|TODO|Lorem ipsum/i.test(`${html}\n${projectReadme}\n${designContract}`)]
];

let failed = 0;
for (const [label, passed] of checks) {
  console.log(`${passed ? "[PASS]" : "[FAIL]"} ${label}`);
  if (!passed) failed += 1;
}

if (failed > 0) {
  console.error(`Project 009 static checks failed: ${failed}/${checks.length}`);
  process.exit(1);
}

console.log(`Project 009 static checks passed: ${checks.length}/${checks.length}`);

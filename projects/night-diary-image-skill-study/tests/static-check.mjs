import { readFile, readdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const repositoryRoot = dirname(dirname(projectRoot));
const pageRoot = join(repositoryRoot, "docs", "projects", "night-diary-image-skill-study");

const [html, css, js, projectsRaw, manifestRaw, projectReadme, designContract, rootReadme, upstreamSkill, structureQaRaw, structureQaScript, buildScript, chinesePrompts, applicationPrompts] = await Promise.all([
  readFile(join(pageRoot, "index.html"), "utf8"),
  readFile(join(pageRoot, "styles.css"), "utf8"),
  readFile(join(pageRoot, "app.js"), "utf8"),
  readFile(join(repositoryRoot, "docs", "projects.json"), "utf8"),
  readFile(join(projectRoot, "experiments", "evidence-manifest-v1.json"), "utf8"),
  readFile(join(projectRoot, "README.md"), "utf8"),
  readFile(join(projectRoot, "DESIGN-CONTRACT.md"), "utf8"),
  readFile(join(repositoryRoot, "README.md"), "utf8"),
  readFile(join(projectRoot, "source", "SKILL.md"), "utf8"),
  readFile(join(projectRoot, "experiments", "structure-qa-report-v2.json"), "utf8"),
  readFile(join(projectRoot, "experiments", "run_structure_qa.py"), "utf8"),
  readFile(join(repositoryRoot, "scripts", "build-pages.mjs"), "utf8"),
  readFile(join(projectRoot, "experiments", "chinese-sample-prompts.md"), "utf8"),
  readFile(join(projectRoot, "experiments", "application-demo-prompts.md"), "utf8")
]);

const projects = JSON.parse(projectsRaw);
const manifest = JSON.parse(manifestRaw);
const structureQa = JSON.parse(structureQaRaw);
const pageProject = projects.find((project) => project.id === "night-diary-image-skill-study");
const upstreamFiles = await readdir(join(projectRoot, "assets", "upstream-examples"));
const experimentFiles = await readdir(join(projectRoot, "assets", "project-experiments"));
const auditedCommit = execFileSync("git", ["-C", join(projectRoot, "source"), "rev-parse", "HEAD"], { encoding: "utf8" }).trim();

async function hashMatches(relativeFile, expected) {
  const bytes = await readFile(join(projectRoot, relativeFile));
  return createHash("sha256").update(bytes).digest("hex") === expected;
}

const upstreamHashChecks = await Promise.all(manifest.upstreamExamples.map((item) => hashMatches(item.file, item.sha256)));
const projectHashChecks = await Promise.all(manifest.projectExperiments.flatMap((experiment) => {
  const records = [experiment.before, experiment.firstPass, experiment.acceptedAfterOneRetry, experiment.accepted].filter(Boolean);
  return records.map((record) => hashMatches(record.file, record.sha256));
}));
const applicationHashChecks = await Promise.all([
  ...manifest.applicationDemos.sameSourceEmotion.outputs,
  manifest.applicationDemos.fluorescentFigure.output
].map((record) => hashMatches(record.file, record.sha256)));
const qaReportHashMatches = await hashMatches(manifest.structureQa.report, manifest.structureQa.reportSha256);

const qaInputHashesMatch = structureQa.pairs.every((pair) => {
  const experiment = manifest.projectExperiments.find((item) => item.id === pair.id);
  const accepted = experiment?.acceptedAfterOneRetry || experiment?.accepted;
  return experiment && accepted
    && pair.inputs.before.sha256 === experiment.before.sha256
    && pair.inputs.after.sha256 === accepted.sha256;
});

const qaMetricsMatchPage = structureQa.pairs.every((pair) => html.includes(pair.edges.f1.toFixed(4))
  && html.includes(`${pair.landmarks.ransacInliers} / ${pair.landmarks.mutualCandidateMatches}`)
  && html.includes(`${pair.alignment.meanCornerDriftPercent.toFixed(4)}%`));

const checks = [
  ["项目已登记为 007", pageProject?.number === "007"],
  ["根 README 已登记", rootReadme.includes("007 · NIGHT DIARY AS CONTROL LAYER")],
  ["上游提交已固定", auditedCommit === manifest.upstream.commit && auditedCommit === "4f9c189da2ddbb07f0fdb6b87e603c4ae91518f7"],
  ["上游 Skill 名称正确", upstreamSkill.includes("name: night-diary-image")],
  ["首屏明确不是新模型", html.includes("它不是新的图像模型") && html.includes("0 MODEL")],
  ["五组独立实测存在", (html.match(/data-pair-comparison/g) || []).length === 6 && manifest.projectExperiments.length === 5 && html.includes("5 TESTS")],
  ["三组中文样例覆盖三种画幅", (html.match(/data-cn-copy-status/g) || []).length === 3 && ["3:2", "2:3", "1:1"].every((ratio) => html.includes(ratio))],
  ["三组指定中文逐字记录", ["雨落在窗外", "城市还没有睡", "我把安静带回家", "树影慢慢合上", "风还记得路", "等一盏灯亮起来", "水巷收起余光", "屋里有人醒着", "夜色沿着桥走远"].every((copy) => html.includes(copy))],
  ["中文完整 Prompt 与 QA 已固化", chinesePrompts.includes("Rain-window Chinese Night Diary edit") && chinesePrompts.includes("Forest-stop single targeted retry") && chinesePrompts.includes("Canal Chinese Night Diary edit")],
  ["同图三种情绪演示存在", (html.match(/data-emotion-panel=/g) || []).length === 3 && manifest.applicationDemos.sameSourceEmotion.outputs.length === 3 && ["夜把人声收走", "只剩雨还醒着", "我在窗边等自己", "灯一盏一盏亮起", "有人为我留着", "回家的路不再远", "雨终究会停下", "风会带走旧事", "今晚就到这里吧"].every((copy) => html.includes(copy))],
  ["同图情绪交互支持键盘", js.includes("setEmotion") && js.includes("ArrowLeft") && js.includes("ArrowRight") && html.includes('role="tablist"')],
  ["场景扩展 Prompt 与 QA 已固化", applicationPrompts.includes("Same-source emotion 01 · loneliness") && applicationPrompts.includes("Same-source emotion 02 · warmth") && applicationPrompts.includes("Same-source emotion 03 · release") && applicationPrompts.includes("Explicit fluorescent-figure branch")],
  ["人物荧光独立分支已实测", html.includes("rain-window-figure-fluorescent.png") && html.includes("人物荧光不是默认风格") && manifest.applicationDemos.fluorescentFigure.qa.includes("one seated passenger")],
  ["三种产品装配边界明确", (html.match(/HTML \/ CSS ASSEMBLY/g) || []).length === 3 && manifest.applicationDemos.productAssemblies.length === 3 && projectReadme.includes("三个界面是 HTML/CSS 装配")],
  ["五类主要使用场景已总结", (html.match(/<article><span>0[1-5] · /g) || []).length === 5 && ["适用对象", "典型输入", "交付产物", "核心价值", "不承担心理诊断"].every((copy) => html.includes(copy))],
  ["森林结构失败与唯一重试如实记录", manifest.projectExperiments.find((item) => item.id === "forest-stop-chinese")?.firstPass?.copyQa.includes("5/30") && html.includes("12.4588%") && html.includes("0.1849%")],
  ["文字偏差与一次重试如实记录", html.includes("首轮把小写 some 自动大写") && manifest.projectExperiments[0].firstPass.qa.includes("capitalization drift")],
  ["五组上游对照存在", (html.match(/data-source-comparison/g) || []).length === 5 && manifest.upstreamExamples.filter((item) => item.role === "upstream-before-after").length === 5],
  ["六张上游图片完整", upstreamFiles.filter((file) => file.endsWith(".png")).length === 6],
  ["十六张项目实验图片完整", experimentFiles.filter((file) => file.endsWith(".png")).length === 16],
  ["全部上游哈希一致", upstreamHashChecks.length === 6 && upstreamHashChecks.every(Boolean)],
  ["全部实验哈希一致", projectHashChecks.length === 12 && applicationHashChecks.length === 4 && [...projectHashChecks, ...applicationHashChecks].every(Boolean)],
  ["结构 QA 脚本与版本化报告存在", manifest.structureQa.script === "experiments/run_structure_qa.py" && manifest.structureQa.report === "experiments/structure-qa-report-v2.json" && qaReportHashMatches && structureQa.schemaVersion === "project-007-structure-qa/v2"],
  ["结构 QA 输入与证据哈希一致", structureQa.pairs.length === 5 && qaInputHashesMatch],
  ["五组结构 QA 烟雾线通过", structureQa.pairs.every((pair) => Object.values(pair.acceptance).every(Boolean))],
  ["结构 QA 页面数值来自报告", qaMetricsMatchPage && (html.match(/data-qa-pair/g) || []).length === 5],
  ["结构 QA 方法零网络且边界明确", structureQaScript.includes("RANSAC_SEED = 7007") && !/requests|urllib|https?:\/\//i.test(structureQaScript) && projectReadme.includes("不能当作通用质量分数")],
  ["Pages 构建复制结构 QA 报告", buildScript.includes('"structure-qa-report-v2.json"') && html.includes("structure-qa-report-v2.json")],
  ["上游样例授权边界明确", manifest.upstream.licenseObserved === null && html.includes("仓库未提供 LICENSE") && projectReadme.includes("当前仓库未见 LICENSE")],
  ["Before After 滑杆已实现", js.includes("updateComparison") && js.includes("--split") && css.includes("clip-path")],
  ["上游筛选已实现", js.includes("setFilter") && html.includes('data-case-filter="figure"')],
  ["Prompt 合同模拟器存在", html.includes('id="lab"') && html.includes('id="contractForm"') && html.includes('id="compiledContract"')],
  ["三种场景适配存在", js.includes("城市与住宅窗户") && js.includes("海面、天空与日落") && js.includes("室内、车窗与雨景")],
  ["自动与逐字文案存在", html.includes('value="auto"') && html.includes('value="exact"') && js.includes("Render every word exactly")],
  ["人物荧光为显式分支", html.includes('id="figureToggle"') && js.includes("TARGETED PERSON TREATMENT") && js.includes("FIGURE BRANCH OFF")],
  ["质量门禁与一次重试存在", js.includes("gateList") && js.includes("只允许一次针对性重试")],
  ["覆盖能力原理应用场景扩展落地", ["capabilities", "mechanism", "applications", "scenarios", "extensions", "meaning", "boundaries"].every((id) => html.includes(`id="${id}"`))],
  ["覆盖 P0-P4", ["P0", "P1", "P2", "P3", "P4"].every((step) => html.includes(`>${step}<`))],
  ["落地三层明确", html.includes("Composition-Preserving Edit") && html.includes("Night Diary Recipe") && html.includes("OCR + Structure QA")],
  ["证据四分法明确", projectReadme.includes("四个彼此分开的证据层") && manifest.claimsBoundary.length >= 8],
  ["包含平板与手机规则", css.includes("@media (max-width: 820px)") && css.includes("@media (max-width: 580px)")],
  ["包含 reduced-motion", css.includes("prefers-reduced-motion") && css.includes("scroll-behavior: auto")],
  ["不依赖外部运行素材", !/(src|href)=["']https?:\/\/[^"']+\.(js|css|png|jpg|jpeg|webp|svg)/i.test(html)],
  ["设计契约包含第六版超宽电脑修复与可观察标准", designContract.includes("Entry mode: Repair-led") && designContract.includes("Request revision: 6") && designContract.includes("Revision 6 repair record") && designContract.includes("2470px") && designContract.includes("Coverage manifest")],
  ["超宽电脑章节内边距具有固定上限", css.includes("clamp(1.2rem, calc((100vw - 82rem) / 2), 4rem)")],
  ["电脑端中文标题使用语义分行而非硬换行", html.includes('id="applications-title"><span>同一张照片如何承载情绪，</span><span>再进入真实内容容器。</span>') && html.includes('id="scenarios-title"><span>主要价值是把已有照片，</span><span>变成可复用的情绪内容资产。</span>') && html.includes('<h3><span>同一能力，</span><span>进入三种实际内容产品。</span></h3>') && !html.includes('id="applications-title">同一张照片如何承载情绪，<br>') && !html.includes('id="scenarios-title">主要价值是把已有照片，<br>') && css.includes("text-wrap: balance")],
  ["不存在模板占位符", !/[<［\[]待填写[>］\]]|TODO|Lorem ipsum/i.test(`${html}\n${projectReadme}\n${designContract}`)]
];

let failed = 0;
for (const [label, passed] of checks) {
  console.log(`${passed ? "[PASS]" : "[FAIL]"} ${label}`);
  if (!passed) failed += 1;
}

if (failed > 0) {
  console.error(`Project 007 static checks failed: ${failed}/${checks.length}`);
  process.exit(1);
}

console.log(`Project 007 static checks passed: ${checks.length}/${checks.length}`);

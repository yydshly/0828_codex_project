import { readFile, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const repositoryRoot = dirname(dirname(projectRoot));
const pageRoot = join(repositoryRoot, "docs", "projects", "scenegen-capability-study");
const mediaRoot = join(repositoryRoot, "docs", "assets", "project-010-media");

const [html, css, js, readme, contract, audit, reuseManifestText, runbook, scorecard, mediaManifestText, buildScript, rootReadme, projectsJson, cover, modelStat] = await Promise.all([
  readFile(join(pageRoot, "index.html"), "utf8"),
  readFile(join(pageRoot, "styles.css"), "utf8"),
  readFile(join(pageRoot, "app.js"), "utf8"),
  readFile(join(projectRoot, "README.md"), "utf8"),
  readFile(join(projectRoot, "DESIGN-CONTRACT.md"), "utf8"),
  readFile(join(projectRoot, "experiments", "official-glb-audit.json"), "utf8"),
  readFile(join(projectRoot, "REUSE-MANIFEST.json"), "utf8"),
  readFile(join(projectRoot, "POC-RUNBOOK.md"), "utf8"),
  readFile(join(projectRoot, "experiments", "poc-scorecard-template.md"), "utf8"),
  readFile(join(mediaRoot, "manifest.json"), "utf8"),
  readFile(join(repositoryRoot, "scripts", "build-pages.mjs"), "utf8"),
  readFile(join(repositoryRoot, "README.md"), "utf8"),
  readFile(join(repositoryRoot, "docs", "projects.json"), "utf8"),
  readFile(join(repositoryRoot, "docs", "assets", "scenegen-capability-study-cover.svg"), "utf8"),
  stat(join(mediaRoot, "official-demo-output-0002101.glb"))
]);

const registry = JSON.parse(projectsJson);
const registryEntry = registry.find((project) => project.id === "scenegen-capability-study");
const auditedSamples = JSON.parse(audit).samples;
const reuseManifest = JSON.parse(reuseManifestText);
const mediaManifest = JSON.parse(mediaManifestText);
const mediaFilesMatchManifest = (await Promise.all(mediaManifest.files.map(async (file) => {
  const bytes = await readFile(join(mediaRoot, file.path));
  const sha256 = createHash("sha256").update(bytes).digest("hex");
  return bytes.length === file.bytes && sha256 === file.sha256;
}))).every(Boolean);

const checks = [
  ["Project 010 标识完整", html.includes("PROJECT 010") && readme.includes("项目编号 | 010")],
  ["首屏说明真实效果", html.includes("多个带纹理的静态 3D 物体") && html.includes("相对位置、旋转与尺度")],
  ["首屏给出采用判断", html.includes("值得研究，不值得无目标地安装整套依赖") && html.includes("WATCH / TRIGGER")],
  ["包含官方输入与匹配 GLB", html.includes("official-demo-input-0002101.png") && html.includes("official-demo-output-0002101.glb")],
  ["3D 查看器按需加载", js.includes("loadViewerButton?.addEventListener") && js.includes("loadScript('../../assets/project-010-media/three-r128.min.js')")],
  ["查看器具备完整状态", html.includes("viewerStatus") && js.includes("正在加载官方 GLB") && js.includes("官方 GLB 已加载") && js.includes("GLB 加载失败")],
  ["查看器具备线框与重置", js.includes("wireframeEnabled") && js.includes("initialCamera") && html.includes("toggleWireframe")],
  ["官方模型体积合理", modelStat.size > 9_000_000 && modelStat.size < 11_000_000],
  ["包含官方架构与定性对比", html.includes("official-architecture.png") && html.includes("official-quality-comparison.png")],
  ["包含五步机制", html.includes("Local Attention") && html.includes("Global Attention") && html.includes("Position Tokens") && html.includes("xatlas")],
  ["机制标签支持键盘", js.includes("ArrowRight") && js.includes("ArrowLeft") && js.includes("Home") && js.includes("End") && js.includes("activateStage")],
  ["无 JavaScript 仍可阅读机制", css.includes("html.js .pipeline-panel") && !html.includes("hidden data-stage-panel")],
  ["包含能力与不能力边界", html.includes("CAN DO") && html.includes("NOT YET") && html.includes("完整可玩关卡")],
  ["包含依赖现实成本", html.includes("≥ 16 GB NVIDIA GPU") && html.includes("SceneGen ≈ 4.71 GB") && html.includes("最多 7 个物体")],
  ["包含使用场景", html.includes("室内场景 Blockout") && html.includes("BIM / 数字孪生")],
  ["包含对我们的价值", html.includes("VALUE TO US") && html.includes("NOW") && html.includes("TRIGGER") && html.includes("FUTURE")],
  ["包含扩展路线", html.includes("RUNTIME READY") && html.includes("PHYSICAL PRIORS") && html.includes("SEMANTIC SCENE GRAPH")],
  ["采用规则明确", html.includes("四个条件未出现：保留观察，不安装")],
  ["包含后期复用入口", html.includes('id="reuse"') && html.includes("REUSE MANIFEST") && html.includes("POC RUNBOOK") && html.includes("POC SCORECARD")],
  ["复用清单固定版本与下一步", reuseManifest.researchSnapshot.upstreamCommit === "605d1a0b51d2dab950c8131d584d875862c8a17f" && reuseManifest.nextSessionFirstAction.includes("source-drift gate")],
  ["复用清单定义触发与延期边界", reuseManifest.activationGates.length === 4 && reuseManifest.deferredUntilTriggered.length >= 5],
  ["POC 手册先检查漂移再安装", runbook.includes("Run the source-drift gate") && runbook.indexOf("source-drift gate") < runbook.indexOf("Choose one inference path")],
  ["POC 手册包含最小实验与停止规则", runbook.includes("Run the smallest useful experiment") && runbook.includes("Stop rules") && runbook.includes("ADOPT FOR A BOUNDED PIPELINE")],
  ["Scorecard 覆盖生产证据", scorecard.includes("Hard gates") && scorecard.includes("Asset inspection") && scorecard.includes("Spatial and physical inspection") && scorecard.includes("Downstream production evidence") && scorecard.includes("rights record")],
  ["官方媒体清单含完整哈希", mediaManifest.files.length === 7 && mediaManifest.files.every((file) => file.bytes > 0 && /^[a-f0-9]{64}$/.test(file.sha256))],
  ["官方媒体字节数与哈希一致", mediaFilesMatchManifest],
  ["Pages 构建复制复用包", buildScript.includes("REUSE-MANIFEST.json") && buildScript.includes("POC-RUNBOOK.md") && buildScript.includes("poc-scorecard-template.md")],
  ["固定上游 commit", html.includes("605d1a0") && readme.includes("605d1a0b51d2dab950c8131d584d875862c8a17f")],
  ["GLB 审计含三个样本", auditedSamples.length === 3 && auditedSamples.every((sample) => sample.meshes > 0 && sample.animations === 0)],
  ["明确官方媒体边界", html.includes("Project 010 只负责本地展示与审计") && html.includes("精选演示只能证明")],
  ["包含平板和手机规则", css.includes("@media (max-width: 820px)") && css.includes("@media (max-width: 620px)")],
  ["包含 reduced-motion", css.includes("prefers-reduced-motion") && js.includes("prefers-reduced-motion: reduce")],
  ["不依赖外部运行素材", !/(src|href)=["']https?:\/\/[^"']+\.(js|css|png|jpg|jpeg|webp|svg|glb)/i.test(html)],
  ["设计契约定义证据与复用边界", contract.includes("Evidence coverage manifest") && contract.includes("Project 010 generated the official examples") && contract.includes("Revision 2 — Re-entry and reuse package")],
  ["根 README 登记 Project 010", rootReadme.includes("010 · SCENE, GENERATED") && rootReadme.includes("projects/scenegen-capability-study/README.md")],
  ["网站总入口登记 Project 010", registryEntry?.number === "010" && registryEntry?.url === "./projects/scenegen-capability-study/"],
  ["总入口封面完整", registryEntry?.image === "./assets/scenegen-capability-study-cover.svg" && cover.includes("SCENE, GENERATED.") && cover.includes('viewBox="0 0 1200 750"')],
  ["不存在模板占位符", !/TODO|Lorem ipsum|待填写|待执行。/i.test(`${html}\n${readme}`)]
];

let failed = 0;
for (const [label, passed] of checks) {
  console.log(`${passed ? "[PASS]" : "[FAIL]"} ${label}`);
  if (!passed) failed += 1;
}

if (failed > 0) {
  console.error(`Project 010 static checks failed: ${failed}/${checks.length}`);
  process.exit(1);
}

console.log(`Project 010 static checks passed: ${checks.length}/${checks.length}`);

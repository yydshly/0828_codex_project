import { readFile, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const repositoryRoot = dirname(dirname(projectRoot));
const pageRoot = join(repositoryRoot, "docs", "projects", "personal-ip-image-pack-study");
const experimentRoot = join(projectRoot, "experiments", "synthetic-demo");
const styleMatrixRoot = join(projectRoot, "experiments", "style-matrix");
const sampleAssetRoot = join(repositoryRoot, "docs", "assets", "project-003-sample");
const styleMatrixAssetRoot = join(repositoryRoot, "docs", "assets", "project-003-style-matrix");
const sampleAssetFiles = [
  "lin-jian-anchor-v1-r1.png",
  "lin-jian-happy-wave-v1-r2.png",
  "lin-jian-thinking-notebook-v1-r3.png",
  "lin-jian-explain-point-v1-r4.png",
  "lin-jian-celebrate-v1-r5.png",
  "lin-jian-avatar-v1-r6.png"
];
const styleMatrixAssetFiles = [
  "lin-jian-ip01-avatar-v1-s4-r1.png",
  "lin-jian-ip01-bust-sticker-v1-s4-r2.png",
  "lin-jian-ip02-avatar-v1-s2-r1.png",
  "lin-jian-ip02-cover-v1-s2-r3.png",
  "lin-jian-ip02-full-body-v1-s2-r2.png",
  "lin-jian-ip03-avatar-v1-s5-r1.png",
  "lin-jian-ip03-full-body-sticker-v1-s5-r2.png",
  "lin-jian-ip05-bust-sticker-v1-s3-r1.png",
  "lin-jian-ip05-full-body-sticker-v1-s3-r2.png",
  "lin-jian-ip05-scene-v1-s3-r3.png",
  "lin-jian-ip06-avatar-v1-s6-r1.png",
  "lin-jian-ip06-bust-sticker-v1-s6-r2.png",
  "lin-jian-ip06-cover-v1-s6-r3.png"
];

const [html, css, js, projectsRaw, readme, contract, caseStudy, manifestRaw, qa, lineageRaw, prompts, ...assetStats] = await Promise.all([
  readFile(join(pageRoot, "index.html"), "utf8"),
  readFile(join(pageRoot, "styles.css"), "utf8"),
  readFile(join(pageRoot, "app.js"), "utf8"),
  readFile(join(repositoryRoot, "docs", "projects.json"), "utf8"),
  readFile(join(projectRoot, "README.md"), "utf8"),
  readFile(join(projectRoot, "DESIGN-CONTRACT.md"), "utf8"),
  readFile(join(experimentRoot, "CASE-STUDY.md"), "utf8"),
  readFile(join(experimentRoot, "delivery-manifest-r6.json"), "utf8"),
  readFile(join(experimentRoot, "acceptance-qa-r6.md"), "utf8"),
  readFile(join(experimentRoot, "lineage-r6.json"), "utf8"),
  readFile(join(experimentRoot, "generation-prompts.md"), "utf8"),
  ...sampleAssetFiles.map((file) => stat(join(sampleAssetRoot, file)))
]);

const projects = JSON.parse(projectsRaw);
const manifest = JSON.parse(manifestRaw);
const lineage = JSON.parse(lineageRaw);
const [styleRegistry, styleManifestRaw, styleQa, stylePrompts, ...styleAssetStats] = await Promise.all([
  readFile(join(styleMatrixRoot, "style-registry-v2.yaml"), "utf8"),
  readFile(join(styleMatrixRoot, "style-matrix-manifest-r6.json"), "utf8"),
  readFile(join(styleMatrixRoot, "style-matrix-qa-r6.md"), "utf8"),
  readFile(join(styleMatrixRoot, "style-generation-prompts.md"), "utf8"),
  ...styleMatrixAssetFiles.map((file) => stat(join(styleMatrixAssetRoot, file)))
]);
const styleManifest = JSON.parse(styleManifestRaw);
const actualAssetHashes = await Promise.all(sampleAssetFiles.map(async (file) => {
  const buffer = await readFile(join(sampleAssetRoot, file));
  return createHash("sha256").update(buffer).digest("hex");
}));
const styleAssetHashes = await Promise.all(styleMatrixAssetFiles.map(async (file) => {
  const buffer = await readFile(join(styleMatrixAssetRoot, file));
  return createHash("sha256").update(buffer).digest("hex");
}));
const styleManifestAssets = styleManifest.styles
  .flatMap((style) => style.assets)
  .filter((asset) => asset.file?.startsWith("docs/assets/project-003-style-matrix/"))
  .sort((a, b) => a.file.localeCompare(b.file));
const checks = [
  ["项目已登记为 003", projects.some((project) => project.id === "personal-ip-image-pack-study" && project.number === "003")],
  ["目标与价值明确", html.includes("目标：让个人形象成为可复用资产") && html.includes("资产复利") && readme.includes("新增单张资产")],
  ["包含完整生产演示", html.includes('id="productionDemo"') && html.includes("从课程发布目标") && html.includes("六阶段流程可操作")],
  ["六阶段控制已实现", (html.match(/data-production-step=/g) || []).length === 6 && js.includes("const productionStages") && js.includes("setProductionStep")],
  ["包含六项真实生成样例", html.includes('id="real-demo"') && html.includes("六项实际生成资产")],
  ["六张实际 PNG 已落盘", assetStats.length === 6 && assetStats.every((entry) => entry.isFile() && entry.size > 100_000)],
  ["r6 manifest 可追溯", manifest.release === "r6" && manifest.assets?.length === 6 && manifest.assets.every((asset) => /^[a-f0-9]{64}$/.test(asset.sha256))],
  ["manifest 哈希与六个实际文件一致", manifest.assets.every((asset, index) => asset.sha256 === actualAssetHashes[index])],
  ["lineage 连接 brief、anchor 与六项发布", lineage.approved_anchor === "r1" && lineage.nodes?.some((node) => node.id === "manifest-r6") && lineage.next_extension?.release === "r7"],
  ["r1–r6 最终提示词已记录", prompts.includes("`v1/r1`") && prompts.includes("`v1/r6`") && prompts.includes("square social-profile avatar")],
  ["记录透明通道 QA 失败", caseStudy.includes("四角 alpha") && qa.includes("被 QA 阻塞的中间产物") && manifest.rejected_evidence?.length === 1],
  ["包含真实六风格矩阵", html.includes('id="styleMatrix"') && html.includes("同一个人，进入不同的视觉系统") && html.includes("06 TESTED") && js.includes("styleMatrixProfiles")],
  ["三轴版本已分离", html.includes("character v1") && html.includes("style s1") && readme.includes("character vN（画谁）") && styleRegistry.includes("version_axes:")],
  ["十三张新增跨风格 PNG 已落盘", styleAssetStats.length === 13 && styleAssetStats.every((entry) => entry.isFile() && entry.size > 100_000)],
  ["风格矩阵 manifest 可追溯", styleManifest.release === "r6" && styleManifest.styles?.length === 6 && styleManifest.summary?.actual_image_count === 15 && styleManifest.rejected_evidence?.length === 9 && styleManifestAssets.every((asset) => /^[a-f0-9]{64}$/.test(asset.sha256))],
  ["风格矩阵哈希与十三个文件一致", styleManifestAssets.every((asset, index) => asset.sha256 === styleAssetHashes[index])],
  ["READY、CONDITIONAL、BLOCKED 均有实现", html.includes("READY") && html.includes("BLOCKED") && js.includes('status: "conditional"') && js.includes('status: "blocked"')],
  ["三类风格 QA 已记录", styleQa.includes("身份一致性") && styleQa.includes("风格一致性") && styleQa.includes("任务完成度") && html.includes("3-WAY QA")],
  ["十三项风格提示词与返工已记录", stylePrompts.includes("`v1 / s2 / r1`") && stylePrompts.includes("`v1 / s3 / r3`") && stylePrompts.includes("`v1 / s4 / r1`") && stylePrompts.includes("`v1 / s6 / r3`") && stylePrompts.includes("Background extraction")],
  ["实现资产状态与追踪面板", js.includes("productionAssetRegistry") && js.includes("blockedQa") && html.includes('id="traceLineage"') && html.includes('id="traceHash"')],
  ["包含能力实验台", html.includes('id="assetLab"') && html.includes('id="characterStage"')],
  ["包含能力分析", html.includes('id="capabilities"') && html.includes("五层能力")],
  ["包含使用场景与不适用边界", html.includes('id="use-cases"') && html.includes("知识博主 / 个人品牌") && html.includes("NOT THE BEST FIT")],
  ["包含真实边界", html.includes('id="limits-title"') && html.includes("不是模型")],
  ["包含扩展路线", html.includes('id="roadmap"') && html.includes("P0") && html.includes("P2")],
  ["包含研究意义", html.includes('id="meaning"') && html.includes("长期资产状态")],
  ["锁定上游精确版本", html.includes("97b10c8654b46807af131fd47076e8ca9f648070") && readme.includes("97b10c8654b46807af131fd47076e8ca9f648070")],
  ["声明演示边界", html.includes("流程与状态机制演示") && readme.includes("不是新的生图模型")],
  ["实现六种风格路由", Object.keys(JSON.parse(JSON.stringify({
    "IP-01": 1, "IP-02": 1, "IP-03": 1, "IP-04": 1, "IP-05": 1, "IP-06": 1
  }))).every((id) => js.includes(`"${id}"`))],
  ["实现版本与阻塞状态", js.includes("bumpIdentity") && js.includes("bumpRelease") && js.includes('return "blocked"')],
  ["实现键盘标签页", js.includes("ArrowLeft") && js.includes("ArrowRight")],
  ["包含移动端规则", css.includes("@media (max-width: 680px)")],
  ["包含 reduced-motion", css.includes("prefers-reduced-motion")],
  ["无外部运行资源", !/<(?:script|link)[^>]+(?:src|href)=["']https?:/i.test(html) && !/url\(["']?https?:/i.test(css)],
  ["设计契约包含覆盖清单", contract.includes("Coverage manifest") && contract.includes("Observable completion criteria")],
  ["不存在模板占位符", !/[<［\[]待填写[>］\]]|TODO|Lorem ipsum/i.test(`${html}\n${readme}\n${contract}`)]
];

let failed = 0;
for (const [label, passed] of checks) {
  console.log(`${passed ? "[PASS]" : "[FAIL]"} ${label}`);
  if (!passed) failed += 1;
}

if (failed > 0) {
  console.error(`Project 003 static checks failed: ${failed}/${checks.length}`);
  process.exit(1);
}

console.log(`Project 003 static checks passed: ${checks.length}/${checks.length}`);

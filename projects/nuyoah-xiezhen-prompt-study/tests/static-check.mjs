import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const repositoryRoot = dirname(dirname(projectRoot));
const pageRoot = join(repositoryRoot, "docs", "projects", "nuyoah-xiezhen-prompt-study");

const [html, css, js, projectsRaw, auditRaw, sampleRaw, projectReadme, designContract, rootReadme] = await Promise.all([
  readFile(join(pageRoot, "index.html"), "utf8"),
  readFile(join(pageRoot, "styles.css"), "utf8"),
  readFile(join(pageRoot, "app.js"), "utf8"),
  readFile(join(repositoryRoot, "docs", "projects.json"), "utf8"),
  readFile(join(projectRoot, "experiments", "repository-audit.json"), "utf8"),
  readFile(join(projectRoot, "experiments", "sample-library", "sample-manifest-v1.json"), "utf8"),
  readFile(join(projectRoot, "README.md"), "utf8"),
  readFile(join(projectRoot, "DESIGN-CONTRACT.md"), "utf8"),
  readFile(join(repositoryRoot, "README.md"), "utf8")
]);

const projects = JSON.parse(projectsRaw);
const audit = JSON.parse(auditRaw);
const sampleManifest = JSON.parse(sampleRaw);
const pageProject = projects.find((project) => project.id === "nuyoah-xiezhen-prompt-study");
const sampleAssetChecks = await Promise.all(sampleManifest.samples.map(async (sample) => {
  const projectAsset = await readFile(join(projectRoot, sample.file));
  const siteAsset = await readFile(join(repositoryRoot, sample.site_file));
  const projectHash = createHash("sha256").update(projectAsset).digest("hex");
  const siteHash = createHash("sha256").update(siteAsset).digest("hex");
  return projectHash === sample.sha256 && siteHash === sample.sha256;
}));

const checks = [
  ["项目已登记为 005", pageProject?.number === "005"],
  ["根 README 已登记", rootReadme.includes("005 · PROMPT AS PRODUCTION SYSTEM")],
  ["首屏明确仍是提示词", html.includes("本质仍是提示词生成图片") && html.includes("Skill ≠ Image Model")],
  ["明确公开包不含模型", html.includes("0 MODEL") && projectReadme.includes("没有训练图像模型")],
  ["真实样例库存在", html.includes('id="samples"') && (html.match(/data-sample-card/g) || []).length === 6],
  ["三套摄影 DNA 各两张", ["rain", "cream", "y2k"].every((style) => sampleManifest.samples.filter((sample) => sample.style === style).length === 2)],
  ["六张样例资产与哈希一致", sampleAssetChecks.length === 6 && sampleAssetChecks.every(Boolean)],
  ["样例包含完整 Prompt 与 QA", sampleManifest.samples.every((sample) => sample.prompt.length > 700 && sample.qa.status === "pass" && sample.qa.observed && sample.qa.limitation)],
  ["样例证据边界明确", sampleManifest.generation.tool.includes("built-in imagegen") && sampleManifest.evidence_boundary.upstream_official_output === false && html.includes("不是上游官方样片")],
  ["样例筛选与复制已实现", js.includes("setSampleFilter") && js.includes("copySamplePrompt") && js.includes("[data-sample-filter]")],
  ["交互工作台存在", html.includes('id="lab"') && html.includes('id="compilerForm"') && html.includes('id="compiledPrompt"')],
  ["三种演示模式存在", html.includes('data-mode="detailed"') && html.includes('data-mode="variant"') && html.includes('data-mode="reshoot"')],
  ["三套参考 DNA 存在", js.includes("雨亭欠曝抓拍") && js.includes("奶油柔雾棚拍") && js.includes("Y2K CCD 直闪")],
  ["人物身份职责可切换", js.includes("identityContract") && js.includes("人物身份参考") && js.includes("不继承写真参考人物的脸")],
  ["机位拓扑可切换", js.includes("overhead") && js.includes("low") && js.includes("光源仍固定在原场景")],
  ["变体固定词链", js.includes("固定整体风格词链") && js.includes("固定成像机制词链")],
  ["复拍包含重做合同", js.includes("generated_image_inputs: none") && js.includes("上一轮生成图只用于诊断")],
  ["质量门禁明确待图片", js.includes("PENDING IMAGE") && html.includes("生成后才可验收")],
  ["覆盖六种上游能力", audit.capability_modes.length === 6 && html.includes("六条能力路线")],
  ["覆盖四层工作原理", html.includes("ROUTER") && html.includes("KNOWLEDGE") && html.includes("EXECUTION") && html.includes("REGRESSION")],
  ["覆盖使用场景", html.includes('id="scenarios"') && html.includes("HIGH FIT") && html.includes("NOT A FIT")],
  ["覆盖 P0-P4 扩展", html.includes('id="extensions"') && ["P0", "P1", "P2", "P3", "P4"].every((step) => html.includes(`>${step}<`))],
  ["覆盖对我们的意义", html.includes('id="meaning"') && html.includes("架构参考价值高") && html.includes("底层技术新增为零")],
  ["覆盖成熟度边界", html.includes('id="boundaries"') && html.includes("结构测试不等于真实生图回归")],
  ["审计版本固定", audit.public_version === "1.1.0" && audit.public_commit === "7482a14"],
  ["评测数量已记录", audit.evaluation_counts.production_reshoot_cases === 21 && audit.evaluation_counts.skin_reflection_cases === 3],
  ["概念演示边界已记录", audit.research_boundary.includes("deterministic") && html.includes("NO MODEL CALL")],
  ["复制与重置已实现", js.includes("copyPrompt") && js.includes("resetCompiler")],
  ["包含平板与手机规则", css.includes("@media (max-width: 820px)") && css.includes("@media (max-width: 680px)")],
  ["包含 reduced-motion", css.includes("prefers-reduced-motion") && css.includes("scroll-behavior: auto")],
  ["不依赖外部运行素材", !/(src|href)=["']https?:\/\/[^"']+\.(js|css|png|jpg|jpeg|webp|svg)/i.test(html)],
  ["设计契约已进入第二版", designContract.includes("Entry mode: Revision-led") && designContract.includes("Request revision: 2") && designContract.includes("Observable completion criteria")],
  ["不存在模板占位符", !/[<［\[]待填写[>］\]]|TODO|Lorem ipsum/i.test(`${html}\n${projectReadme}\n${designContract}`)]
];

let failed = 0;
for (const [label, passed] of checks) {
  console.log(`${passed ? "[PASS]" : "[FAIL]"} ${label}`);
  if (!passed) failed += 1;
}

if (failed > 0) {
  console.error(`Project 005 static checks failed: ${failed}/${checks.length}`);
  process.exit(1);
}

console.log(`Project 005 static checks passed: ${checks.length}/${checks.length}`);

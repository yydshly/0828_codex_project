import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const repositoryRoot = dirname(dirname(projectRoot));
const pageRoot = join(repositoryRoot, "docs", "projects", "stickman-video-director-study");
const sourceRoot = join(projectRoot, "source");

const [
  html,
  css,
  js,
  projectsRaw,
  auditRaw,
  casesRaw,
  adaptersRaw,
  abPlanRaw,
  userSampleRaw,
  styleGalleryRaw,
  siteStyleGalleryRaw,
  projectReadme,
  designContract,
  rootReadme,
  packageRaw,
  buildScript,
  workflow,
  gitmodules
] = await Promise.all([
  readFile(join(pageRoot, "index.html"), "utf8"),
  readFile(join(pageRoot, "styles.css"), "utf8"),
  readFile(join(pageRoot, "app.js"), "utf8"),
  readFile(join(repositoryRoot, "docs", "projects.json"), "utf8"),
  readFile(join(projectRoot, "experiments", "upstream-audit.json"), "utf8"),
  readFile(join(projectRoot, "experiments", "representative-cases.json"), "utf8"),
  readFile(join(projectRoot, "experiments", "style-adapter-blueprint.json"), "utf8"),
  readFile(join(projectRoot, "experiments", "ab-execution-plan.json"), "utf8"),
  readFile(join(projectRoot, "experiments", "user-generated-sample.json"), "utf8"),
  readFile(join(projectRoot, "experiments", "character-style-gallery.json"), "utf8"),
  readFile(join(pageRoot, "character-style-gallery.json"), "utf8"),
  readFile(join(projectRoot, "README.md"), "utf8"),
  readFile(join(projectRoot, "DESIGN-CONTRACT.md"), "utf8"),
  readFile(join(repositoryRoot, "README.md"), "utf8"),
  readFile(join(repositoryRoot, "package.json"), "utf8"),
  readFile(join(repositoryRoot, "scripts", "build-pages.mjs"), "utf8"),
  readFile(join(repositoryRoot, ".github", "workflows", "pages.yml"), "utf8"),
  readFile(join(repositoryRoot, ".gitmodules"), "utf8")
]);

const projects = JSON.parse(projectsRaw);
const audit = JSON.parse(auditRaw);
const cases = JSON.parse(casesRaw);
const adapters = JSON.parse(adaptersRaw);
const abPlan = JSON.parse(abPlanRaw);
const userSample = JSON.parse(userSampleRaw);
const styleGallery = JSON.parse(styleGalleryRaw);
const packageJson = JSON.parse(packageRaw);
const pageProject = projects.find((project) => project.id === "stickman-video-director-study");
const expectedCommit = "6d7f8c83a16c594c23bb73da832c8864ccd2aeb5";
const actualCommit = execFileSync("git", ["-C", sourceRoot, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();

function wordCount(value) {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

function digest(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

const mediaChecks = await Promise.all(audit.official_demo_assets.map(async (asset) => {
  const sourceMedia = await readFile(join(sourceRoot, asset.source));
  const siteMedia = await readFile(join(repositoryRoot, "docs", "assets", "project-008-media", `${asset.theme}-theme-demo.mp4`));
  return digest(sourceMedia) === asset.sha256 && digest(siteMedia) === asset.sha256;
}));
const userSampleMedia = await readFile(join(repositoryRoot, "docs", "assets", "project-008-media", "user-motivation-clips-01-02.mp4"));
const userSamplePoster = await readFile(join(repositoryRoot, "docs", "assets", "project-008-media", "user-motivation-clips-01-02-poster.jpg"));
const styleGalleryAssets = await Promise.all(styleGallery.styles.map((style) => readFile(join(
  repositoryRoot,
  "docs",
  "assets",
  "project-008-characters",
  style.file.split("/").at(-1)
))));

const caseContractPasses = cases.cases.every((item) => {
  const totalWords = wordCount(item.scenes.map((scene) => scene.vo).join(" "));
  return totalWords >= 130
    && totalWords <= 150
    && item.scenes.length === 6
    && item.scenes.every((scene) => scene.beats.length === 3
      && scene.first_frame.length > 12
      && scene.final_frame.length > 12
      && scene.audio.length > 12);
});

const expectedStyleIds = ["editorial-ice-blue", "dark-black-red", "oriental-blue-green"];
const requiredOverrideKeys = ["subject_language", "surface_and_background", "palette_semantics", "camera_and_motion", "vfx", "negative_constraints"];
const adapterContractPasses = adapters.locked_invariants.length === 5
  && adapters.style_profiles.length === 3
  && expectedStyleIds.every((id) => adapters.style_profiles.some((profile) => profile.id === id))
  && adapters.style_profiles.every((profile) => requiredOverrideKeys.every((key) => typeof profile.style_overrides[key] === "string")
    && profile.qa_gates.length >= 4
    && profile.model_adapter.required_capabilities.length >= 3);

const checks = [
  ["Project 008 已登记", pageProject?.number === "008" && pageProject?.name === "DIRECTOR AS COMPILER"],
  ["根 README 已登记 Project 008", rootReadme.includes("008 · DIRECTOR AS COMPILER")],
  ["上游 submodule 已登记", gitmodules.includes("projects/stickman-video-director-study/source") && gitmodules.includes("kaomei/stickman-video-director.git")],
  ["上游提交固定", audit.commit === expectedCommit && actualCommit === expectedCommit],
  ["上游核心 Skill 文件存在", (await readFile(join(sourceRoot, "skills", "directing-stickman-videos", "SKILL.md"), "utf8")).includes("# Directing Stickman Videos")],
  ["上游 README 合同通过记录存在", projectReadme.includes("README 合同") && projectReadme.includes("六份 README")],
  ["审计明确没有渲染器", audit.repository_shape.video_api_integration === false && audit.repository_shape.automatic_rendering === false && html.includes("0 RENDERER")],
  ["官方两条 MP4 与上游哈希一致", mediaChecks.length === 2 && mediaChecks.every(Boolean)],
  ["官方视频证据边界明确", html.includes("UPSTREAM OFFICIAL ASSET") && html.includes("不是 Project 008 生成结果")],
  ["用户实测 MP4 哈希与审计一致", digest(userSampleMedia) === userSample.media.sha256 && userSampleMedia.length === userSample.media.bytes],
  ["用户实测媒体元数据已固定", userSample.media.container_duration_seconds === 20.01 && userSample.media.video.width === 1280 && userSample.media.video.height === 720 && userSample.media.video.fps === 24 && userSample.media.video.frames === 480],
  ["用户实测对应前两幕并记录切点", userSample.content_mapping.covered_scenes.length === 2 && userSample.content_mapping.covered_scenes.map((scene) => scene.clip).join(",") === "1,2" && userSample.content_mapping.strong_visual_change_seconds === 8.58333],
  ["用户实测证据边界完整", userSample.evidence_limitations.length >= 4 && userSample.generation_backend === "not_recorded" && userSample.prompt_invocation === "not_recorded"],
  ["用户实测页面与 poster 已接入", userSamplePoster.length > 10000 && html.includes('id="user-sample"') && html.includes("USER-GENERATED EXTERNAL MODEL OUTPUT") && html.includes("user-motivation-clips-01-02.mp4")],
  ["必要理解归纳五项职责", (html.match(/class="necessary-understanding"/g) || []).length === 1 && (html.match(/<li><span>0[1-5]<\/span><strong>/g) || []).length >= 5 && projectReadme.includes("## 必要理解")],
  ["八种静态形象扩展已登记", styleGallery.generation_mode === "image_only" && styleGallery.styles.length === 8 && styleGallery.recommended_first_video_set.length === 4],
  ["八张形象图片已接入且非空", styleGalleryAssets.length === 8 && styleGalleryAssets.every((asset) => asset.length > 10000) && (html.match(/class="character-style-card(?: is-priority)?"/g) || []).length === 8],
  ["形象实验明确静态证据边界", html.includes('id="character-styles"') && html.includes("GENERATED IMAGE EXPLORATION") && html.includes("不能证明视频动作") && projectReadme.includes("本轮没有生成新视频")],
  ["形象清单在研究与站点保持一致", styleGalleryRaw.trim() === siteStyleGalleryRaw.trim() && html.includes('href="./character-style-gallery.json"')],
  ["外部 README 关联形象、实测与审计", rootReadme.includes("查看 8 种火柴人替代形象") && rootReadme.includes("character-style-gallery.json") && rootReadme.includes("user-generated-sample.json") && projectReadme.includes("#user-sample")],
  ["三类案例存在", cases.cases.length === 3 && ["motivational", "educational", "commercial"].every((pattern) => cases.cases.some((item) => item.pattern === pattern))],
  ["三个案例均满足旁白与六幕合同", caseContractPasses],
  ["模拟证据边界明确", cases.generated_by.includes("Project 008") && html.includes("DETERMINISTIC RESEARCH SIMULATION") && html.includes("不调用 LLM 或视频模型")],
  ["实验台包含三案例入口", (html.match(/data-case=/g) || []).length === 3 && html.includes('id="director') === false && html.includes('class="director-lab"')],
  ["画幅和主题可切换", html.includes('id="ratioSelect"') && (html.match(/name="theme"/g) || []).length === 2],
  ["批准门已实现", js.includes("resetApproval") && js.includes("approveCurrentProposal") && js.includes("state.approved")],
  ["全局变化重置批准", js.includes("空间调度已重构，旧批准失效") && js.includes("对比与背景合同已重构，旧批准失效")],
  ["六镜头选择已实现", js.includes("createSceneCard") && js.includes("renderSceneSelection")],
  ["Prompt 编译合同包含关键锁", js.includes("THEME AND CHARACTER LOCK") && js.includes("FIRST FRAME") && js.includes("FINAL FRAME") && js.includes("NEGATIVE CONSTRAINTS")],
  ["复制与剪贴板降级已实现", js.includes("copyText") && js.includes("document.execCommand('copy')")],
  ["案例数据由构建复制", buildScript.includes("representative-cases.json") && js.includes("fetch('./representative-cases.json')")],
  ["三套风格适配蓝图合同完整", adapterContractPasses && adapters.evidence_class === "deterministic_contract_simulation"],
  ["导演批准与视觉批准分层", adapters.approval_policy.director_approval.includes("source") && adapters.approval_policy.visual_approval.includes("Changing style") && js.includes("visualApproved") && js.includes("resetVisualApproval")],
  ["风格实验台包含三套可切换适配器", html.includes('id="adapters"') && (html.match(/data-style=/g) || []).length === 3 && html.includes("STAYS LOCKED") && html.includes("STYLE PACK OVERRIDES")],
  ["风格切换只重置视觉批准", js.includes("导演批准保持有效，视觉批准已失效") && js.includes("selectStyle") && js.includes("approveCurrentStyle")],
  ["风格合同可复制且包含模型与 QA 交接", js.includes("compileAdapterContract") && js.includes("MODEL ADAPTER") && js.includes("VISUAL QA GATES") && html.includes('id="copyAdapter"')],
  ["A/B 计划为九单元与六项主指标", abPlan.status === "ready_for_decision_not_executed" && abPlan.matrix.cells === 9 && abPlan.primary_metrics.length === 6 && abPlan.decision_required_before_execution.length === 4],
  ["页面展示 A/B 矩阵、指标和执行边界", (html.match(/READY 0[1-9]/g) || []).length === 9 && html.includes("预案采用率") && html.includes("执行前待定")],
  ["风格与 A/B 数据由 Pages 构建复制", ["style-adapter-blueprint.json", "ab-execution-plan.json"].every((file) => buildScript.includes(file)) && js.includes("fetch('./style-adapter-blueprint.json')")],
  ["用户实测审计由 Pages 构建复制", buildScript.includes("user-generated-sample.json") && html.includes('href="./user-generated-sample.json"')],
  ["页面覆盖能力与原理", html.includes('id="capabilities"') && html.includes('id="mechanism"') && html.includes("INTERMEDIATE REPRESENTATION")],
  ["页面覆盖使用场景", html.includes('id="scenarios"') && html.includes("HIGH FIT") && html.includes("NOT A FIT")],
  ["页面覆盖 P0-P5 扩展", html.includes('id="extensions"') && ["P0", "P1", "P2", "P3", "P4", "P5"].every((step) => html.includes(`>${step}<`))],
  ["页面覆盖参考与后期价值", html.includes('id="meaning"') && html.includes("架构参考价值高") && projectReadme.includes("对我们的后期使用价值")],
  ["页面覆盖证据边界", html.includes('id="boundaries"') && html.includes("上游测试不是视频回归")],
  ["包含平板与手机规则", css.includes("@media (max-width: 820px)") && css.includes("@media (max-width: 680px)")],
  ["包含 reduced-motion", css.includes("prefers-reduced-motion") && css.includes("scroll-behavior: auto")],
  ["页面不依赖外部运行素材", !/(src|href)=["']https?:\/\/[^"']+\.(js|css|png|jpg|jpeg|webp|svg|mp4)/i.test(html)],
  ["Pages checkout 初始化 submodule", workflow.includes("submodules: recursive")],
  ["Project 008 测试命令已登记", packageJson.scripts["test:project-008"]?.includes("static-check.mjs") && packageJson.scripts["test:all"]?.includes("test:project-008")],
  ["设计契约包含 Revision 4 形象扩展与部署边界", designContract.includes("Request revision: 4") && designContract.includes("Observable completion criteria") && designContract.includes("八种静态替代形象") && designContract.includes("远端部署")],
  ["不存在模板占位符", !/[<［\[]待填写[>］\]]|TODO|Lorem ipsum/i.test(`${html}\n${projectReadme}\n${designContract}`)]
];

let failed = 0;
for (const [label, passed] of checks) {
  console.log(`${passed ? "[PASS]" : "[FAIL]"} ${label}`);
  if (!passed) failed += 1;
}

if (failed > 0) {
  console.error(`Project 008 static checks failed: ${failed}/${checks.length}`);
  process.exit(1);
}

console.log(`Project 008 static checks passed: ${checks.length}/${checks.length}`);

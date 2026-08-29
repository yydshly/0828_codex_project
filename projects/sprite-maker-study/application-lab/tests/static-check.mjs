import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const testRoot = dirname(fileURLToPath(import.meta.url));
const projectRoot = dirname(dirname(testRoot));
const repositoryRoot = dirname(dirname(projectRoot));
const demoRoot = join(repositoryRoot, "docs", "demos", "sprite-maker-application-lab");
const publishedRoot = join(repositoryRoot, "docs", "assets", "project-009-game");
const experimentRoot = join(projectRoot, "experiments", "multi-action-benchmark");

const [html, css, app, researchPage, projectReadme, contract, packageRaw, resultRaw] = await Promise.all([
  readFile(join(demoRoot, "index.html"), "utf8"),
  readFile(join(demoRoot, "styles.css"), "utf8"),
  readFile(join(demoRoot, "app.js"), "utf8"),
  readFile(join(repositoryRoot, "docs", "projects", "sprite-maker-study", "index.html"), "utf8"),
  readFile(join(projectRoot, "README.md"), "utf8"),
  readFile(join(projectRoot, "DESIGN-CONTRACT.md"), "utf8"),
  readFile(join(repositoryRoot, "package.json"), "utf8"),
  readFile(join(experimentRoot, "multi-action-result.json"), "utf8")
]);

const packageJson = JSON.parse(packageRaw);
const result = JSON.parse(resultRaw);
const digest = (buffer) => createHash("sha256").update(buffer).digest("hex");

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

const sceneIds = ["companion", "story", "teaching", "marketing", "prototype"];
const checks = [
  ["应用实验室语义结构完整", html.includes('class="application-shell"') && html.includes('id="sceneStage"') && html.includes('id="inspector"')],
  ["五个场景标签与面板一一对应", sceneIds.every((id) => html.includes(`data-scene-tab="${id}"`) && html.includes(`data-scene-panel="${id}"`))],
  ["五个方向文案完整", ["桌面伙伴", "互动故事", "数字展厅", "教学演示", "营销人物", "低成本游戏原型"].every((text) => html.includes(text))],
  ["十项真实动作资产与实验哈希一致", publishedMatches.length === 10 && publishedMatches.every(Boolean)],
  ["多动作实验仍为有条件采用", result.verdict === "CONDITIONAL" && result.actions["run-v2"].sha256.length === 4 && result.actions["pulse-cast-v1"].sha256.length === 5],
  ["运行时加载 master、run 与 cast", app.includes("actorFrames") && app.includes("lin-jian-motion-master-v1.png") && app.includes("lin-jian-motion-run-v2") && app.includes("lin-jian-motion-cast-v1")],
  ["桌面伙伴具备专注与提醒状态", app.includes("FOCUS ACTIVE") && app.includes("BLOCK COMPLETE") && app.includes("提醒喝水")],
  ["故事与展厅具备双分支", app.includes("SIGNAL BRANCH") && app.includes("ARCHIVE BRANCH") && app.includes("分支 A") && app.includes("分支 B")],
  ["教学演示具备步骤与答案反馈", app.includes("STEP 1 / OBSERVE") && app.includes("STEP 2 / QUESTION") && app.includes("ANSWER CORRECT")],
  ["营销人物具备 CTA 本地模拟边界", app.includes("LANDING READY") && app.includes("CTA COMPLETE") && app.includes("没有向外部服务提交数据")],
  ["低成本游戏原型具备开始命中清除", app.includes("RULE READY") && app.includes("ENCOUNTER ACTIVE") && app.includes("RULE PROVEN") && app.includes("prototypeHp")],
  ["所有业务均显式区分资产与上层", html.includes("SPRITE STUDIO OUTPUT") && html.includes("UPPER-LAYER BUSINESS") && html.includes("复用的是动作资产，不是同一套业务")],
  ["深链接覆盖五场景与三状态", app.includes("searchParams.set('scene'") && app.includes("['default', 'active', 'complete']") && sceneIds.every((id) => app.includes(`${id}: {`))],
  ["测试 API 覆盖切换操作重置与抽屉", app.includes("__SPRITE_APPLICATION_LAB__") && ["snapshot", "setScene", "performAction", "resetScene", "openInspector", "closeInspector"].every((token) => app.includes(token))],
  ["场景标签支持方向键与首尾跳转", app.includes("ArrowRight") && app.includes("ArrowLeft") && app.includes("Home") && app.includes("End")],
  ["窄屏说明抽屉支持关闭与焦点返回", app.includes("setInspector(false, true)") && app.includes("inspectorToggle.focus()") && app.includes("event.key === 'Escape'")],
  ["reduced-motion 冻结角色帧", css.includes("prefers-reduced-motion") && app.includes("state.reducedMotion ? 'idle'")],
  ["无 JavaScript 仍列出五种职责", html.includes("JavaScript 已关闭：五个方向仍可阅读") && sceneIds.length === 5 && html.includes("Sprite Studio 只提供这里复用的")],
  ["响应式覆盖桌面平板与手机", css.includes("max-width: 1180px") && css.includes("max-width: 920px") && css.includes("max-width: 680px")],
  ["场景舞台不依赖 Canvas 或 WebGL", !html.includes("<canvas") && !app.includes("WebGLRenderingContext")],
  ["页面不依赖外部运行资源", !/(src|href)=["']https?:\/\/[^"']+\.(?:js|css|png|jpg|jpeg|webp|svg|gif)/i.test(html)],
  ["研究页新增应用实验室入口", researchPage.includes('id="application-lab"') && researchPage.includes("sprite-maker-application-lab") && researchPage.includes("ONE ASSET / FIVE PRODUCTS")],
  ["项目档案记录五类应用展示", projectReadme.includes("应用场景实验室") && projectReadme.includes("sprite-maker-application-lab") && projectReadme.includes("虚拟人 / 桌面伙伴")],
  ["设计契约进入第八版应用实验室", contract.includes("Request revision: 8") && contract.includes("Application Lab contract") && contract.includes("五个可切换场景")],
  ["独立测试命令已登记", packageJson.scripts["test:project-009-application-lab"]?.includes("application-lab/tests/static-check.mjs") && packageJson.scripts["test:project-009"]?.includes("test:project-009-application-lab")],
  ["不存在模板占位符", !/[<［\[]待填写[>］\]]|TODO|Lorem ipsum/i.test(`${html}\n${css}\n${app}`)]
];

let failures = 0;
for (const [label, passed] of checks) {
  console.log(`${passed ? "[PASS]" : "[FAIL]"} ${label}`);
  if (!passed) failures += 1;
}
if (failures) {
  console.error(`Project 009 application lab static checks failed: ${failures}/${checks.length}`);
  process.exit(1);
}
console.log(`Project 009 application lab static checks passed: ${checks.length}/${checks.length}`);

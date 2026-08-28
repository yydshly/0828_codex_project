import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const repositoryRoot = dirname(dirname(projectRoot));
const pageRoot = join(repositoryRoot, "docs", "projects", "daizhige-capability-atlas");

const [html, css, js, projectsRaw, auditRaw, rootReadme] = await Promise.all([
  readFile(join(pageRoot, "index.html"), "utf8"),
  readFile(join(pageRoot, "styles.css"), "utf8"),
  readFile(join(pageRoot, "app.js"), "utf8"),
  readFile(join(repositoryRoot, "docs", "projects.json"), "utf8"),
  readFile(join(projectRoot, "experiments", "repository-tree-audit.json"), "utf8"),
  readFile(join(repositoryRoot, "README.md"), "utf8")
]);

const projects = JSON.parse(projectsRaw);
const audit = JSON.parse(auditRaw);
const representativePaths = audit.collections.flatMap((collection) => collection.representative_paths);
const collectionCount = audit.collections.reduce((sum, collection) => sum + collection.count, 0);
const pathSet = new Set(representativePaths);

const checks = [
  ["项目已登记为 004", projects.some((project) => project.id === "daizhige-capability-atlas" && project.number === "004")],
  ["根 README 已登记", rootReadme.includes("004 · DAIZHIGE CAPABILITY ATLAS")],
  ["包含归档核心判断", html.includes("当前结论：归档备用") && html.includes("有相关产品再启用")],
  ["明确候选资料源角色", html.includes("REFERENCE SOURCE") && html.includes("资料备份源")],
  ["明确未保存正文镜像", html.includes("NO MIRROR") && html.includes("不保存上游 4.8 GiB 正文镜像")],
  ["包含能力分层", html.includes('id="capabilities"') && html.includes("原仓原生") && html.includes("维护版新增")],
  ["包含十大门类书目", html.includes('id="catalog"') && audit.collections.length === 10],
  ["包含原理", html.includes('id="mechanism"') && html.includes("文件系统即数据库")],
  ["包含使用场景", html.includes('id="scenarios"') && html.includes("数字人文分析")],
  ["包含条件价值", html.includes('id="meaning"') && html.includes("减少未来重查成本") && html.includes("避免无需求的建设")],
  ["包含按需启用路线", html.includes('id="roadmap"') && html.includes("当前不扩展") && html.includes("ACTIVATION RULE") && html.includes("P4 · WORKSPACE")],
  ["包含边界与来源", html.includes('id="boundaries"') && html.includes("LICENSE") && html.includes("https://daizhige.org/about")],
  ["审计 commit 固定", audit.commit === "4a6d6f2088825f132521d848c2ea86cf9c9a7620"],
  ["TXT 总量一致", audit.totals.txt_files === 15694 && collectionCount === 15694],
  ["审计代表路径为 61 个", representativePaths.length === 61 && pathSet.size === 61],
  ["页面脚本覆盖全部代表路径", representativePaths.every((path) => js.includes(path))],
  ["书目筛选可交互", js.includes("activateCollection") && js.includes("renderCatalog") && js.includes("catalogEmpty")],
  ["能力标签支持键盘", js.includes("handleTabKeys") && js.includes("ArrowRight") && js.includes("Home")],
  ["包含平板与手机规则", css.includes("@media (max-width: 820px)") && css.includes("@media (max-width: 680px)")],
  ["包含 reduced-motion", css.includes("prefers-reduced-motion") && css.includes("scroll-behavior: auto")],
  ["不依赖外部运行素材", !/(src|href)=["']https?:\/\/[^"']+\.(js|css|png|jpg|jpeg|webp|svg)/i.test(html)],
  ["项目索引显示已归档", projects.some((project) => project.id === "daizhige-capability-atlas" && project.status.includes("已归档"))],
  ["不存在模板占位符", !/[<［\[]待填写[>］\]]|TODO|Lorem ipsum/i.test(`${html}\n${rootReadme}`)]
];

let failed = 0;
for (const [label, passed] of checks) {
  console.log(`${passed ? "[PASS]" : "[FAIL]"} ${label}`);
  if (!passed) failed += 1;
}

if (failed > 0) {
  console.error(`Project 004 static checks failed: ${failed}/${checks.length}`);
  process.exit(1);
}

console.log(`Project 004 static checks passed: ${checks.length}/${checks.length}`);

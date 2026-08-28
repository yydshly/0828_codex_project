import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const repositoryRoot = dirname(dirname(projectRoot));
const pageRoot = join(repositoryRoot, "docs", "projects", "nativepdf-structurer-analysis");

const [html, css, js, readme, contract, rootReadme, projectIndexHtml, projectsJson, cover] = await Promise.all([
  readFile(join(pageRoot, "index.html"), "utf8"),
  readFile(join(pageRoot, "styles.css"), "utf8"),
  readFile(join(pageRoot, "app.js"), "utf8"),
  readFile(join(projectRoot, "README.md"), "utf8"),
  readFile(join(projectRoot, "DESIGN-CONTRACT.md"), "utf8"),
  readFile(join(repositoryRoot, "README.md"), "utf8"),
  readFile(join(repositoryRoot, "docs", "index.html"), "utf8"),
  readFile(join(repositoryRoot, "docs", "projects.json"), "utf8"),
  readFile(join(repositoryRoot, "docs", "assets", "nativepdf-structurer-analysis-cover.svg"), "utf8")
]);

const projectRegistry = JSON.parse(projectsJson);
const registryEntry = projectRegistry.find((project) => project.id === "nativepdf-structurer-analysis");

const checks = [
  ["Project 006 标识完整", html.includes("PROJECT 006") && readme.includes("项目编号 | 006")],
  ["包含最终研究判断", html.includes("暂不列为通用 PDF 方向的核心研究") && html.includes("WATCHLIST")],
  ["明确不是 OCR 和完整 RAG", html.includes("不是</span><strong>OCR / VLM") && html.includes("不是</span><strong>完整 RAG")],
  ["包含三层技术位置", html.includes("LAYER 01 · READ") && html.includes("LAYER 02 · STRUCTURE") && html.includes("LAYER 03 · RETRIEVE")],
  ["包含规则结构化路线", html.includes('id="route-lab"') && html.includes("规则结构化")],
  ["路线标签支持键盘", js.includes("ArrowRight") && js.includes("Home") && js.includes("End") && js.includes("activateRoute")],
  ["包含能力与不能力边界", html.includes("CAN DO") && html.includes("CANNOT DO") && html.includes("公开精度保证")],
  ["包含四类工程机制", html.includes("表格多路径兜底") && html.includes("Claim 冲突仲裁") && html.includes("双 bbox 设计") && html.includes("可审计输出")],
  ["包含使用场景", html.includes('id="scenarios"') && html.includes("设备与维修手册") && html.includes("扫描档案")],
  ["包含同类产品", html.includes("PyMuPDF4LLM") && html.includes("Docling") && html.includes("MinerU") && html.includes("Marker") && html.includes("Unstructured")],
  ["包含扩展路线", html.includes("HYBRID ROUTER") && html.includes("RAG CHUNKER") && html.includes("DOMAIN PROFILES")],
  ["固定上游 commit", html.includes("39efc40") && readme.includes("39efc40f3ce5334539968a7818c03e68cb437c5f")],
  ["包含许可证边界", readme.includes("AGPL / Artifex 商业双授权") && html.includes("artifex.com/licensing")],
  ["包含平板和手机规则", css.includes("@media (max-width: 820px)") && css.includes("@media (max-width: 620px)")],
  ["包含 reduced-motion", css.includes("prefers-reduced-motion") && css.includes("scroll-behavior: auto")],
  ["支持无 JavaScript 阅读", css.includes("html:not(.js) .route-panel")],
  ["不依赖外部运行素材", !/(src|href)=["']https?:\/\/[^"']+\.(js|css|png|jpg|jpeg|webp|svg)/i.test(html)],
  ["设计契约存在并定义边界", contract.includes("Design contract") && contract.includes("不提交当前工作区中属于其他项目的未提交改动")],
  ["根 README 登记 Project 006", rootReadme.includes("006 · NATIVE PDF, STRUCTURED") && rootReadme.includes("projects/nativepdf-structurer-analysis/README.md")],
  ["网站总入口登记 Project 006", projectIndexHtml.includes("PROJECT INDEX") && registryEntry?.number === "006" && registryEntry?.url === "./projects/nativepdf-structurer-analysis/"],
  ["总入口封面完整", registryEntry?.image === "./assets/nativepdf-structurer-analysis-cover.svg" && cover.includes("NATIVE PDF, STRUCTURED") && cover.includes('viewBox="0 0 1200 750"')],
  ["不存在模板占位符", !/TODO|Lorem ipsum|待填写|待执行。/i.test(`${html}\n${readme}`)]
];

let failed = 0;
for (const [label, passed] of checks) {
  console.log(`${passed ? "[PASS]" : "[FAIL]"} ${label}`);
  if (!passed) failed += 1;
}

if (failed > 0) {
  console.error(`Project 006 static checks failed: ${failed}/${checks.length}`);
  process.exit(1);
}

console.log(`Project 006 static checks passed: ${checks.length}/${checks.length}`);

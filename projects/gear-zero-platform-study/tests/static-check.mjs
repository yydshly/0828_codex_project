import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const repositoryRoot = dirname(dirname(projectRoot));
const pagePath = join(repositoryRoot, "docs", "projects", "gear-zero-platform-study", "index.html");
const stylePath = join(repositoryRoot, "docs", "projects", "gear-zero-platform-study", "styles.css");
const dataPath = join(repositoryRoot, "docs", "projects.json");

const [html, css, projectsRaw] = await Promise.all([
  readFile(pagePath, "utf8"),
  readFile(stylePath, "utf8"),
  readFile(dataPath, "utf8")
]);

const projects = JSON.parse(projectsRaw);
const checks = [
  ["项目已登记", projects.some((project) => project.id === "gear-zero-platform-study")],
  ["包含核心论点", html.includes("一个能力成为产品")],
  ["包含交互推导", html.includes('id="conversation"')],
  ["包含系统架构", html.includes('id="architecture"')],
  ["包含研究库价值", html.includes('id="library-value"')],
  ["包含后续建议", html.includes('id="recommendations"')],
  ["包含证据边界", html.includes('id="boundaries"')],
  ["包含官方来源", html.includes("https://alayalab.ai/") && html.includes("https://zero.alayalab.ai/"),],
  ["包含移动端规则", css.includes("@media (max-width: 680px)")],
  ["包含 reduced-motion", css.includes("prefers-reduced-motion")],
  ["不存在模板占位符", !/[<［\[]待填写[>］\]]|TODO|Lorem ipsum/i.test(html)]
];

let failed = 0;
for (const [label, passed] of checks) {
  console.log(`${passed ? "[PASS]" : "[FAIL]"} ${label}`);
  if (!passed) failed += 1;
}

if (failed > 0) {
  console.error(`Project 002 static checks failed: ${failed}/${checks.length}`);
  process.exit(1);
}

console.log(`Project 002 static checks passed: ${checks.length}/${checks.length}`);

import { cp, mkdir, rm, copyFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const outputRoot = join(repositoryRoot, ".pages-dist");
const docsRoot = join(repositoryRoot, "docs");
const projectRoot = join(repositoryRoot, "projects", "outrun-the-level");
const gameRoot = join(projectRoot, "game");
const demoRoot = join(outputRoot, "demos", "outrun-the-level");
const assetsRoot = join(outputRoot, "assets");

if (!outputRoot.startsWith(repositoryRoot)) {
  throw new Error("Refusing to build outside the repository.");
}

await rm(outputRoot, { recursive: true, force: true });
await cp(docsRoot, outputRoot, { recursive: true });
await mkdir(demoRoot, { recursive: true });
await mkdir(assetsRoot, { recursive: true });

for (const file of ["index.html", "style.css", "game.js"]) {
  await copyFile(join(gameRoot, file), join(demoRoot, file));
}

await copyFile(
  join(projectRoot, "assets", "menu-check.png"),
  join(assetsRoot, "outrun-the-level-cover.png")
);

console.log("Pages bundle ready:", outputRoot);

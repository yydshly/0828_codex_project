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
const directorStudyRoot = join(repositoryRoot, "projects", "stickman-video-director-study");
const directorStudyOutputRoot = join(outputRoot, "projects", "stickman-video-director-study");
const sceneGenStudyRoot = join(repositoryRoot, "projects", "scenegen-capability-study");
const sceneGenStudyOutputRoot = join(outputRoot, "projects", "scenegen-capability-study");

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

await copyFile(
  join(directorStudyRoot, "experiments", "representative-cases.json"),
  join(directorStudyOutputRoot, "representative-cases.json")
);

await copyFile(
  join(directorStudyRoot, "experiments", "style-adapter-blueprint.json"),
  join(directorStudyOutputRoot, "style-adapter-blueprint.json")
);

await copyFile(
  join(directorStudyRoot, "experiments", "ab-execution-plan.json"),
  join(directorStudyOutputRoot, "ab-execution-plan.json")
);

await copyFile(
  join(directorStudyRoot, "experiments", "user-generated-sample.json"),
  join(directorStudyOutputRoot, "user-generated-sample.json")
);

await copyFile(
  join(sceneGenStudyRoot, "REUSE-MANIFEST.json"),
  join(sceneGenStudyOutputRoot, "reuse-manifest.json")
);

await copyFile(
  join(sceneGenStudyRoot, "POC-RUNBOOK.md"),
  join(sceneGenStudyOutputRoot, "poc-runbook.md")
);

await copyFile(
  join(sceneGenStudyRoot, "experiments", "poc-scorecard-template.md"),
  join(sceneGenStudyOutputRoot, "poc-scorecard-template.md")
);

console.log("Pages bundle ready:", outputRoot);

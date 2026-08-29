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
const nightDiaryStudyRoot = join(repositoryRoot, "projects", "night-diary-image-skill-study");
const nightDiaryAssetsRoot = join(assetsRoot, "night-diary-image-skill-study");
const sceneGenStudyRoot = join(repositoryRoot, "projects", "scenegen-capability-study");
const sceneGenStudyOutputRoot = join(outputRoot, "projects", "scenegen-capability-study");
const spriteMakerStudyRoot = join(repositoryRoot, "projects", "sprite-maker-study");
const spriteMakerStudyOutputRoot = join(outputRoot, "projects", "sprite-maker-study");
const naturalDisastersStudyRoot = join(repositoryRoot, "projects", "natural-disasters-environment-study");
const naturalDisastersStudyOutputRoot = join(outputRoot, "projects", "natural-disasters-environment-study");

if (!outputRoot.startsWith(repositoryRoot)) {
  throw new Error("Refusing to build outside the repository.");
}

await rm(outputRoot, { recursive: true, force: true });
await cp(docsRoot, outputRoot, { recursive: true });
await mkdir(demoRoot, { recursive: true });
await mkdir(assetsRoot, { recursive: true });
await mkdir(nightDiaryAssetsRoot, { recursive: true });

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

await cp(
  join(nightDiaryStudyRoot, "assets", "upstream-examples"),
  join(nightDiaryAssetsRoot, "upstream"),
  { recursive: true }
);

await cp(
  join(nightDiaryStudyRoot, "assets", "project-experiments"),
  join(nightDiaryAssetsRoot, "experiments"),
  { recursive: true }
);

await copyFile(
  join(nightDiaryStudyRoot, "experiments", "structure-qa-report-v2.json"),
  join(nightDiaryAssetsRoot, "structure-qa-report-v2.json")
);

await copyFile(
  join(spriteMakerStudyRoot, "experiments", "upstream-audit.json"),
  join(spriteMakerStudyOutputRoot, "upstream-audit.json")
);

await copyFile(
  join(spriteMakerStudyRoot, "experiments", "own-sample-benchmark", "benchmark-result.json"),
  join(spriteMakerStudyOutputRoot, "own-sample-benchmark.json")
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

await copyFile(
  join(naturalDisastersStudyRoot, "experiments", "target-effect-reverse-engineering.md"),
  join(naturalDisastersStudyOutputRoot, "target-effect-reverse-engineering.md")
);

await copyFile(
  join(naturalDisastersStudyRoot, "RESEARCH-PLAN.md"),
  join(naturalDisastersStudyOutputRoot, "research-plan.md")
);

await copyFile(
  join(naturalDisastersStudyRoot, "REUSE-MANIFEST.json"),
  join(naturalDisastersStudyOutputRoot, "reuse-manifest.json")
);

await copyFile(
  join(naturalDisastersStudyRoot, "experiments", "upstream-source-audit.json"),
  join(naturalDisastersStudyOutputRoot, "upstream-source-audit.json")
);

await copyFile(
  join(naturalDisastersStudyRoot, "experiments", "upstream-runtime-observation.json"),
  join(naturalDisastersStudyOutputRoot, "upstream-runtime-observation.json")
);

await copyFile(
  join(naturalDisastersStudyRoot, "experiments", "runtime-correction.md"),
  join(naturalDisastersStudyOutputRoot, "runtime-correction.md")
);

await copyFile(
  join(naturalDisastersStudyRoot, "experiments", "web-workbench-validation.md"),
  join(naturalDisastersStudyOutputRoot, "web-workbench-validation.md")
);

await copyFile(
  join(naturalDisastersStudyRoot, "CAPABILITIES.md"),
  join(naturalDisastersStudyOutputRoot, "capabilities.md")
);

await copyFile(
  join(naturalDisastersStudyRoot, "README.md"),
  join(naturalDisastersStudyOutputRoot, "readme.md")
);

console.log("Pages bundle ready:", outputRoot);

import { access, readFile, readdir } from 'node:fs/promises';
import { constants } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const projectRoot = join(root, 'projects', 'natural-disasters-environment-study');
const publicRoot = join(root, 'docs', 'projects', 'natural-disasters-environment-study');
const demoRoot = join(root, 'docs', 'demos', 'natural-disasters-environment-poc');
const vendorRoot = join(projectRoot, 'vendor', 'natural-disasters');

const [
  readme,
  capabilities,
  plan,
  contract,
  manifest,
  runtime,
  correction,
  publicPage,
  publicApp,
  playbookPage,
  playbookStyles,
  playbookApp,
  demoPage,
  vendorPackage,
  vendorMain,
  vendorDirector,
  buildScript,
  packageJson
] = await Promise.all([
  readFile(join(projectRoot, 'README.md'), 'utf8'),
  readFile(join(projectRoot, 'CAPABILITIES.md'), 'utf8'),
  readFile(join(projectRoot, 'RESEARCH-PLAN.md'), 'utf8'),
  readFile(join(projectRoot, 'DESIGN-CONTRACT.md'), 'utf8'),
  readFile(join(projectRoot, 'REUSE-MANIFEST.json'), 'utf8').then(JSON.parse),
  readFile(join(projectRoot, 'experiments', 'upstream-runtime-observation.json'), 'utf8').then(JSON.parse),
  readFile(join(projectRoot, 'experiments', 'runtime-correction.md'), 'utf8'),
  readFile(join(publicRoot, 'index.html'), 'utf8'),
  readFile(join(publicRoot, 'app.js'), 'utf8'),
  readFile(join(publicRoot, 'unknown-to-product', 'index.html'), 'utf8'),
  readFile(join(publicRoot, 'unknown-to-product', 'styles.css'), 'utf8'),
  readFile(join(publicRoot, 'unknown-to-product', 'app.js'), 'utf8'),
  readFile(join(demoRoot, 'index.html'), 'utf8'),
  readFile(join(vendorRoot, 'package.json'), 'utf8').then(JSON.parse),
  readFile(join(vendorRoot, 'src', 'main.js'), 'utf8'),
  readFile(join(vendorRoot, 'src', 'weather', 'Director.js'), 'utf8'),
  readFile(join(root, 'scripts', 'build-pages.mjs'), 'utf8'),
  readFile(join(root, 'package.json'), 'utf8').then(JSON.parse)
]);

const exists = async (path) => access(path, constants.R_OK).then(() => true, () => false);
const assets = await readdir(join(demoRoot, 'assets'));
const checks = [
  ['fixed commit is consistent', [readme, plan, contract, JSON.stringify(manifest), JSON.stringify(runtime)].every((text) => text.includes('849ff7f4199c9322d8ecafb48d62fc63f8d5af1d'))],
  ['canonical demo identifies upstream ABYSSAL', demoPage.includes('ABYSSAL — Procedural Ocean') && demoPage.includes('Token-Gremlin')],
  ['canonical demo references upstream production chunks', /\.\/assets\/index-[A-Za-z0-9_-]+\.js/.test(demoPage) && assets.some((name) => name.startsWith('Director-')) && assets.some((name) => name.startsWith('Overlay-'))],
  ['independent renderer is removed from canonical route', !(await exists(join(demoRoot, 'app.js'))) && !(await exists(join(demoRoot, 'styles.css'))) && !demoPage.includes('__environmentPoc')],
  ['demo retains upstream MIT license', await exists(join(demoRoot, 'LICENSE.txt'))],
  ['vendored source is upstream package', vendorPackage.name === 'abyssal-ocean' && vendorPackage.version === '1.0.0' && vendorPackage.dependencies?.three],
  ['vendored runtime installs actual App and Director', vendorMain.includes('new App(') && vendorMain.includes('installDirector') && vendorMain.includes('window.__app')],
  ['vendored Director contains eleven-act effect chain', ['DEAD CALM', 'VIOLENT STORM', 'WATERSPOUT', 'ROGUE WAVE', 'HURRICANE EYE', 'TSUNAMI', 'AFTERMATH'].every((name) => vendorDirector.includes(`name: '${name}'`))],
  ['runtime observation records actual upstream execution', runtime.evidenceClass === 'UPSTREAM_RUNTIME' && runtime.validation.checks === '14/14' && runtime.initialState.appRunning && runtime.initialState.directorActCount === 11],
  ['runtime observation keeps software-GPU boundary', runtime.environment.renderer.includes('SwiftShader') && runtime.environment.importantBoundary.includes('not physical-GPU')],
  ['correction invalidates the independent approximation', correction.includes('did not execute') && correction.includes('Revision 3') && correction.includes('invalid')],
  ['research README names actual implementation boundary', readme.includes('不是 Project 011 自己重写') && readme.includes('直接执行上游')],
  ['research plan makes actual upstream runtime authoritative', plan.includes('独立写一个相似效果不能证明') && plan.includes('Phase 1 · 上游真实运行 — 完成')],
  ['design contract supersedes Revision 3 and records the playbook revision', contract.includes('Current authority: Revision 9') && contract.includes('Unknown Domain → Product Capability Playbook')],
  ['reuse manifest describes upstream build', manifest.implementation.kind === 'actual-upstream-production-build' && manifest.implementation.projectAuthoredRenderer === false],
  ['public page states the bounded product identity', publicPage.includes('它不是灾害大全') && publicPage.includes('海洋环境运行时') && !publicPage.includes('INDEPENDENT WEBGL2 · LIVE')],
  ['public page embeds only the actual upstream demo', publicPage.includes('<iframe') && publicPage.includes('../../demos/natural-disasters-environment-poc/') && publicPage.includes('ACTUAL UPSTREAM BUILD')],
  ['Web controller calls the upstream Director and Sandbox', publicApp.includes('app.director.gotoAct(index)') && publicApp.includes('app.sandbox.setActive(true)')],
  ['three extension demonstrations are exposed', (publicPage.match(/data-scenario="(port|tsunami|platform)"/g) || []).length === 3 && (publicPage.match(/data-scenario-overlay=/g) || []).length === 3],
  ['extension demonstrations call upstream runtime methods', publicApp.includes("applyCondition('storm', true)") && publicApp.includes('app.sandbox.hurricane()') && publicApp.includes('app.sandbox.tsunami()') && publicApp.includes("applyCondition('night', true)") && publicApp.includes('app.sandbox.lightning()')],
  ['extension overlays state the authored boundary', publicPage.includes('PROJECT 011 / BUSINESS LAYER') && publicPage.includes('不是淹没计算或预警信息') && publicPage.includes('不代表结构安全计算')],
  ['personal map connects game IP and assets', publicPage.includes('PERSONAL COMPOUNDING') && publicPage.includes('GAME') && publicPage.includes('PERSONAL IP') && publicPage.includes('ASSET LIBRARY')],
  ['personal map names concrete outputs and gaps', (publicPage.match(/可以产出/g) || []).length === 3 && (publicPage.match(/仍需补齐/g) || []).length === 3],
  ['personal map defines one four-step compounding route', publicPage.includes('一条主线，四次沉淀') && (publicPage.match(/personal-sequence[^]*?<li>/g) || []).length >= 1 && publicPage.includes('Environment Director Kit')],
  ['capability map separates runtime, extensions, personal routes and boundaries', capabilities.includes('六层能力栈') && capabilities.includes('已演示的扩展场景') && capabilities.includes('对个人的三条落地线') && capabilities.includes('不是 AI 模型')],
  ['public page separates capability, scenarios and extension cost', publicPage.includes('CAPABILITY STACK') && publicPage.includes('USE CASES') && publicPage.includes('EXTENSION LADDER')],
  ['public page links actual runtime and Web evidence', publicPage.includes('upstream-runtime-observation.json') && publicPage.includes('runtime-correction.md') && publicPage.includes('web-workbench-validation.md')],
  ['public page records GitHub Pages delivery routes', publicPage.includes('GITHUB DELIVERY') && publicPage.includes('yydshly.github.io/0828_codex_project') && publicPage.includes('actions/workflows/pages.yml')],
  ['canonical page links the unknown-to-product playbook', publicPage.includes('./unknown-to-product/') && publicPage.includes('陌生领域 → 产品能力')],
  ['playbook locks current and long-term goals', playbookPage.includes('NOW · CASE 001') && playbookPage.includes('LATER · SYSTEM') && playbookPage.includes('陌生领域能力孵化器')],
  ['playbook exposes the universal eight-step loop', ['目标锁定', '来源考古', '效果反推', '最小复现', '证据验收', '能力抽取', '真实用例', '方法回收'].every((label) => playbookPage.includes(label))],
  ['playbook separates six evidence classes', ['PRIMARY_SOURCE', 'UPSTREAM_SOURCE', 'TARGET_MEDIA', 'RUNTIME_EVIDENCE', 'OUR_METHOD', 'PLANNED'].every((label) => playbookPage.includes(label))],
  ['playbook links primary publications and fixed source', playbookPage.includes('Jonswap-Hasselmann1973.pdf') && playbookPage.includes('precomputed_atmospheric_scattering') && playbookPage.includes('cgf.14050') && playbookPage.includes('the-real-time-volumetric-cloudscapes-of-horizon-zero-dawn') && playbookPage.includes('849ff7f4199c9322d8ecafb48d62fc63f8d5af1d')],
  ['playbook maps six visible runtime layers', ['ATMOSPHERE', 'CLOUD VOLUME', 'OCEAN FIELD', 'WEATHER &amp; EVENTS', 'DIRECTOR', 'POST &amp; QUALITY'].every((label) => playbookPage.includes(label))],
  ['playbook defines twelve from-zero phases', (playbookPage.match(/class="roadmap__number"/g) || []).length === 12 && playbookPage.includes('EnvironmentAdapter')],
  ['playbook includes AI modes and planned ScenarioSpec', playbookPage.includes('MODE A · RESEARCH / BUILD') && playbookPage.includes('MODE B · PRODUCT / GENERATE') && playbookPage.includes('SCENARIO SPEC · PLANNED')],
  ['playbook distinguishes four planned product versions', ['v0.1', 'v0.2', 'v0.3', 'v1.0'].every((version) => playbookPage.includes(`>${version}<`))],
  ['playbook includes reusable templates and repair budget', (playbookPage.match(/data-copy-target=/g) || []).length >= 6 && playbookPage.includes('REPAIR BUDGET') && playbookPage.includes('最多 2–3 轮')],
  ['playbook has responsive and reduced-motion styles', playbookStyles.includes('@media (max-width: 760px)') && playbookStyles.includes('@media (prefers-reduced-motion: reduce)')],
  ['playbook controller provides progress section state and copy', playbookApp.includes('updateProgress') && playbookApp.includes('IntersectionObserver') && playbookApp.includes('navigator.clipboard')],
  ['playbook links its browser validation record', playbookPage.includes('playbook-validation.md') && playbookPage.includes('25/25 多端检查')],
  ['Pages build publishes corrected evidence', buildScript.includes('upstream-runtime-observation.json') && buildScript.includes('runtime-correction.md') && buildScript.includes('web-workbench-validation.md') && buildScript.includes('playbook-validation.md')],
  ['project test scripts target corrected checks', packageJson.scripts['test:project-011']?.includes('static-check.mjs') && packageJson.scripts['test:project-011:upstream-browser']?.includes('upstream-runtime-check.mjs') && packageJson.scripts['test:project-011:web-browser']?.includes('web-workbench-check.mjs') && packageJson.scripts['test:project-011:playbook-browser']?.includes('playbook-check.mjs')],
  ['runtime browser checks exist', await exists(join(projectRoot, 'tests', 'upstream-runtime-check.mjs')) && await exists(join(projectRoot, 'tests', 'web-workbench-check.mjs'))]
];

const failures = checks.filter(([, passed]) => !passed);
for (const [name, passed] of checks) console.log(`${passed ? 'PASS' : 'FAIL'} ${name}`);
console.log(`Project 011 static verification: ${checks.length - failures.length}/${checks.length}`);

if (failures.length) process.exitCode = 1;

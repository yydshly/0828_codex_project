# Project 010 — SceneGen Capability Study

## Contract record

- Entry mode: brief-led implementation inside the active research library
- Request revision: 2
- Target user: readers deciding whether SceneGen is worth adopting, monitoring, or postponing
- Desired impression: the image-to-editable-scene effect is tangible and impressive, while its current engineering cost and research-stage limits remain obvious
- Visual ambition: editorial research feature
- Experience architecture: long-form editorial flow with a progressive 3D evidence surface

## Visual constraints

- Use one dark theme with warm amber for generated geometry and cool cyan for spatial structure.
- Lead with the conclusion and an official input/output demonstration before technical detail.
- Official screenshots and sample files must be visibly labelled and attributed.
- Do not use external runtime assets, fonts, trackers, or CDNs.
- Keep the page readable and useful before JavaScript runs and before the optional GLB is loaded.
- Treat the live 3D viewer as supporting evidence, not as the whole page.

## Information constraints

The page must answer:

1. What effect does SceneGen produce?
2. What are the true inputs and outputs?
3. How does its local/global/pose architecture work?
4. What can and cannot currently be inferred from the official demos?
5. Which use cases fit the technology?
6. What value does it have for our current and future work?
7. Which extensions would turn a research result into a production pipeline?
8. When is the dependency and hardware cost justified?

The copy must distinguish:

- official upstream claims and media;
- inspection of bundled official GLB samples;
- our interpretation and recommendation;
- unverified production assumptions.

## Operation constraints

- The official GLB must load only after an explicit user action.
- Viewer states: idle, loading/progress, success, and recoverable error.
- Viewer controls: orbit/zoom, reset view, and wireframe toggle.
- The mechanism explorer must support click, Arrow Left/Right, Home, and End.
- All primary content remains visible without JavaScript; JavaScript may progressively enhance it.
- Focus states must be visible and semantic controls must use native buttons/links.

## State constraints

- One visual theme only.
- Navigation highlights the current section when enhancement is available.
- The mechanism explorer has one selected stage at a time after enhancement.
- Reduced-motion preference disables decorative movement and automatic 3D rotation.
- Failed WebGL or GLB loading preserves the official input image and explanatory copy.

## Environment constraints

- Static GitHub Pages-compatible output.
- Zero external network dependency at runtime.
- Target viewports: 1440 × 1000, 820 × 1180, and 390 × 844.
- No page-level horizontal overflow.
- The page must remain understandable on devices without WebGL.

## Primary journey

Conclusion → official input/live output → mechanism → capability boundary → scenarios → value to us → extension roadmap → activation checklist → sources.

## User-facing phases

1. Official effect summary
2. Mechanism and exported artifact
3. Boundaries and appropriate scenarios
4. Current/future value assessment
5. Extension and activation roadmap

## Required artifacts

- Project 010 research page
- responsive stylesheet and progressive-enhancement script
- official media manifest and local vendored viewer dependencies
- original project cover artwork
- project README and static acceptance test
- root catalogue and build/test integration
- browser evidence at the three target viewports

## Autonomy and user boundary

The user explicitly requested a webpage and research summary. This authorizes local implementation and validation. It does not authorize installing the SceneGen model stack, downloading checkpoints, running inference, using paid cloud GPUs, deploying publicly, committing, or modifying the upstream repository.

The page must not imply that:

- Project 010 generated the official examples;
- a curated official demo establishes success rate or robustness;
- SceneGen outputs a complete playable level;
- the exported scene has verified metric scale, physics, animation, navigation, or production optimization.

## Observable completion

- The first viewport states the effect, input/output, and present recommendation.
- The official source image and the matching official GLB are inspectable.
- Technical claims link to the repository, paper, model page, or project page.
- Recommendation separates current value from trigger-based future value.
- Desktop, tablet, and phone layouts pass overflow and interaction checks.
- Static checks, the repository test suite, and the pages build pass.

## Revision 2 — Re-entry and reuse package

The user asked what else should be preserved so the project can be understood and reused later. This is a revision-led documentation and information-architecture enhancement. It does not reopen the established visual direction, official GLB viewer, method analysis, or present adoption verdict.

### Preserved decisions

- Current recommendation remains `WATCH / TRIGGER`; no model environment is installed.
- Official media remains evidence, not Project 010 inference output.
- The 3D viewer stays optional and progressively loaded.
- The existing dark editorial system, primary journey, responsive boundaries, and source distinction remain unchanged.

### New required artifacts

- A machine-readable reuse manifest with upstream pin, official entry points, local evidence, activation triggers, and deferred work.
- A practical POC runbook that begins with source-drift review and ends with an evidence-backed adopt / watch / reject decision.
- A reusable scorecard template covering runtime, asset, spatial, manual-cleanup, cost, and rights evidence.
- Cryptographic hashes and provenance for every vendored official media file and viewer dependency.
- A webpage section that lets a future reader recover the re-entry sequence without first reading the entire repository.

### New acceptance criteria

- A future session can identify the pinned upstream state, canonical research page, official sources, preserved local samples, and current recommendation from one manifest.
- The runbook clearly separates environment setup from the smallest useful POC and does not present unverified commands as completed work.
- The scorecard has pass/fail/record fields for GLB loading, object separation, geometry, textures, spatial relations, collisions, metric scale, asset budget, cleanup time, runtime performance, rights, and provenance.
- The webpage explains what to check first after 30, 90, or 180 days and provides direct repository links to the reuse artifacts.
- Desktop, tablet, and 390px phone retain zero page-level horizontal overflow after the new section is added.

### Revision 2 coverage

| Surface | State / viewport | Required evidence | Status before implementation |
| --- | --- | --- | --- |
| Reuse manifest | repository artifact | parses as JSON and points to existing files | pass — static check and direct browser load |
| POC runbook | repository artifact | includes trigger gate, source-drift gate, minimum experiment, metrics, stop rules, decision record | pass — static check and direct browser load |
| Scorecard | repository artifact | copy-ready template with explicit evidence fields | pass — static check and direct browser load |
| Media provenance | repository artifact | SHA-256, byte size, upstream URL, role, license boundary | pass — all 7 files match byte size and SHA-256 |
| Re-entry section | readable DOM | visible sequence, time-based review cadence, artifact links | pass — 5 steps and 3 artifact cards observed at canonical URL |
| Responsive layout | 1440 / 820 / 390 | no clipping or horizontal overflow | pass — final browser overflow 0 at all target widths |
| Existing viewer | idle / loaded | official GLB remains progressive and operable | pass — post-build GLB load reached success and controls enabled |

### Revision 2 runnable evidence

- Canonical command: `PORT=48310 npm run preview:pages` after `npm run build:pages` (PowerShell uses `$env:PORT='48310'`).
- Canonical URL: `http://127.0.0.1:48310/projects/scenegen-capability-study/`.
- Theme: supported single dark theme.
- Viewports: 1440 × 1000, 820 × 1180, 390 × 844.
- Browser states: reuse section, all three artifact URLs, viewer loaded success, responsive code overflow recovery.
- Final Project 010 static result: 38 / 38.
- Browser errors: none reported after final build.

## Evidence coverage manifest

| User concern | Page evidence | Source / verification |
| --- | --- | --- |
| Main effect | Official source image paired with its official GLB | SceneGen project-page demo `0002101` |
| Architecture | Local attention, global attention, pose tokens, joint decoding | Paper and official architecture figure |
| Export quality | Mesh/triangle inspection and viewer wireframe | Three bundled official GLBs; Project 010 static audit |
| Hardware/dependencies | NVIDIA GPU and checkpoint footprint callout | Official README and Hugging Face repository |
| Scope limits | Indoor domain, masks, collisions, trained object count | Paper limitations and repository inference code |
| Value to us | Now / trigger / later decision matrix | Project 010 interpretation, clearly labelled |
| Extensibility | Productionization ladder | Project 010 synthesis from missing runtime capabilities |

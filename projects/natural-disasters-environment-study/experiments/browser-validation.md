# Project 011 — Target-Effect Page Browser Validation

> **Revision 3 results below are historical and invalid for upstream capability claims.** The canonical route now runs the fixed upstream build. Current runtime evidence is [`upstream-runtime-observation.json`](./upstream-runtime-observation.json).

- Date: 2026-08-29
- Built route: `http://127.0.0.1:4173/projects/natural-disasters-environment-study/`
- Build source: `.pages-dist` produced by `npm run build:pages`
- Browser: installed Google Chrome, controlled headlessly through the Codex Playwright runtime
- Scope: Revision 2 target-effect route, reverse-engineering matrix and research-library registration
- Result: **34 / 34 checks passed**

## Coverage

| Surface | Evidence | Result |
| --- | --- | --- |
| Desktop | 1440 × 1000, HTTP 200, target media precedes judgment and source map, no horizontal overflow | pass |
| Target media | three target cards and four image placements load at their natural dimensions | pass |
| Reverse map | five visible-result rows connect parameters, systems, algorithms and proof | pass |
| Tablet | 820 × 1180, target sequence stacks, no horizontal overflow | pass |
| Phone | 390 × 844, target and reverse-map journeys usable, `clientWidth = scrollWidth = 390` | pass |
| Keyboard | skip link is first focus; section link activates `#reverse` | pass |
| Progressive enhancement | without JavaScript target media, reverse map and all five artifacts remain readable | pass |
| Reduced motion | media query matches, smooth scroll becomes `auto`, progress transition becomes `0s` | pass |
| Artifacts | target-effect map, plan, reuse manifest, source audit and POC scorecard return HTTP 200 | pass |
| Registry | the index exposes `查看目标效果反推 →` | pass |
| Runtime health | zero console errors, page errors, failed requests or HTTP errors | pass |

## Visual inspection

The desktop target section, tablet hero, settled phone target section, first phone target cards and phone reverse-map section were inspected. The official media is cropped to its rendered scene rather than its black capture padding. Hierarchy, attribution, body text, navigation and reverse-map cards remain readable without clipped content.

Revision 2 preserves the Revision 1 mobile-grid repair. Its new multi-step target sequence, three media cards and four-column reverse map all collapse without root overflow. Phone evidence was captured again after reduced-motion scrolling settled, rather than during a smooth-scroll transition.

Screenshots are transient browser evidence and were intentionally kept outside the repository at:

`C:/Users/yun68/AppData/Local/Temp/project-011-browser-evidence-rev2-20260829/`

## Boundary

This validates the Project 011 research-plan interface. It does **not** validate the upstream ABYSSAL WebGL runtime, any GPU performance claim, or the proposed Environment Pack POC. Those remain Phase 1 and Phase 4 work.

---

## Revision 3 — independent POC runtime

- Date: 2026-08-29
- Canonical route: `http://127.0.0.1:4173/demos/natural-disasters-environment-poc/`
- Browser route: installed Google Chrome 151 controlled through the bundled Playwright runtime
- Requested ANGLE backend: SwiftShader
- Result: **48 / 48 checks passed**
- Browser-skill fallback: the `agent-browser` CLI required by the preferred verification skill was not installed, so the same load, screenshot, interaction, viewport, error and fallback checks were executed through Playwright.

### Runtime coverage

| Surface or state | Evidence | Result |
| --- | --- | --- |
| WebGL2 baseline | HTTP 200, compiled GLSL ES 3.00 program, non-empty render buffer, meaningful DOM | pass |
| Five beats | `DEAD CALM`, `CLOUD FIELD`, `VIOLENT STORM`, `TSUNAMI`, `AFTERMATH`; one active rail state each | pass |
| Director journey | direct beat selection, previous, next, timeline scrub, play/pause and replay | pass |
| Target event | tsunami state exposes a moving wall/crest and lower camera parameters | pass, bounded visual approximation |
| Desktop | 1440 × 1000, no horizontal overflow | pass |
| Tablet | 820 × 1180, five direct controls retained, no horizontal overflow | pass |
| Phone | 390 × 844, canvas and director remain visible, tsunami can be selected, no overflow | pass |
| Keyboard | focus leaves the body and matches `:focus-visible` | pass |
| Reduced motion | autoplay is disabled and playback remains paused after activation | pass |
| Renderer fallback | `?renderer=dom` shows attributed target media while beat navigation remains operable | pass |
| Runtime health | zero console errors, page errors and failed requests | pass |
| Research-page integration | desktop and phone POC section routes link to the demo without horizontal overflow | pass |
| Software-path performance | every beat produced frame samples; 26.82–33.79 derived FPS at the desktop evidence surface | pass as smoke evidence, not a hardware GPU claim |

The final six visual captures cover the five desktop beats and the phone tsunami state. They are transient evidence stored outside the product repository at:

`C:/Users/yun68/AppData/Local/Temp/project-011-poc-evidence-20260829/`

Structured performance and environment evidence is stored in `poc-runtime-observation.json`.

### Revision 3 boundary

This validates the independent Project 011 WebGL2 POC and its fallback. It still does **not** validate upstream ABYSSAL runtime parity, named hardware-GPU performance, FFT-ocean equivalence, volumetric-cloud equivalence, physical disaster accuracy or EnvironmentAdapter disposal. Those gaps keep the rendering decision at `WATCH`.

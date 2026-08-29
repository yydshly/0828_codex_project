# Project 011 — POC v0.1 Scorecard

> **INVALIDATED / historical only.** This scorecard describes a Project 011-authored approximation that did not run the researched library. It cannot be used as evidence for `natural-disasters`; see [`runtime-correction.md`](./runtime-correction.md) and [`upstream-runtime-observation.json`](./upstream-runtime-observation.json).

## Run identity

- Date: 2026-08-29
- Project revision: 3
- Evidence class: `PROJECT_011_POC`
- POC route: `/demos/natural-disasters-environment-poc/`
- Upstream code copied: no
- Root runtime dependencies added: none
- Decision: `WATCH`

## What passed

| Gate | Result | Evidence |
| --- | --- | --- |
| Independent route boots | pass | HTTP 200; WebGL2 render buffer exists |
| No blocking console or Shader error | pass | browser validation 48/48 |
| Five beats are directly addressable | pass | calm, cloud field, violent storm, tsunami, aftermath |
| Tsunami is an event rather than ordinary wave amplitude | pass, bounded | moving screen-scale wall/crest plus lower camera state |
| Aftermath removes rain and event state | pass | director state and final rendered frame |
| Director controls are complete for the film POC | pass | play, pause, replay, previous, next, direct beat and seek |
| Responsive spatial stage | pass | 1440px, 820px and 390px browser checks |
| Reduced-motion and renderer fallback | pass | autoplay suppression and forced DOM fallback |
| Real hardware GPU baseline | not run | current measurement uses Headless Chrome SwiftShader |
| Upstream target-frame parity | not passed | POC is a stylized approximation, not FFT/raymarch equivalence |
| EnvironmentAdapter lifecycle and multi-instance disposal | not implemented | later extraction gate |

## Target-effect evidence

| Beat | Observable result in POC v0.1 | Result |
| --- | --- | --- |
| calm | stable horizon, low-energy height field and sun reflection | pass |
| cloud field | cloud coverage and light occlusion increase while sea remains readable | pass, stylized |
| violent storm | dark cloud deck, rain, stronger height field, foam and bounded lens drift | pass |
| tsunami | large advancing event crest, dark wall and lower sea-level camera | pass, bounded |
| aftermath | event and rain clear; light and lower long-swell energy return | pass |

## Performance observation

The 1440 × 1000 browser surface rendered internally at 1094 × 760. Headless Chrome was launched with the SwiftShader ANGLE backend, so these figures are a repeatable software-path smoke baseline rather than a GPU product claim.

| Beat | Mean frame time | Derived FPS |
| --- | ---: | ---: |
| calm | 37.28 ms | 26.82 |
| cloud field | 30.27 ms | 33.04 |
| violent storm | 29.59 ms | 33.79 |
| tsunami | 29.82 ms | 33.53 |
| aftermath | 30.63 ms | 32.65 |

Structured evidence: [`poc-runtime-observation.json`](./poc-runtime-observation.json).

## Decision

`WATCH` is the honest result for the rendering pack. The independent POC proves that `EnvironmentBeat + ShotSpec + one director timeline` is useful and implementable. It does not yet justify adopting an ocean/cloud rendering kernel because target-frame parity, a named hardware GPU baseline, a reusable adapter and lifecycle disposal remain unproven.

The bounded product decision is therefore:

- adopt the effect-first beat and shot contract as a design pattern;
- keep the current Shader as a research POC, not a production simulation;
- compare Project 011 and the fixed upstream runtime on the same real GPU and evidence shots before extracting an Environment Pack.

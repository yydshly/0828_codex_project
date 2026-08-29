# Project 011 Environment Pack POC Scorecard

## Run identity

- Date:
- Project 011 revision:
- Upstream commit:
- POC commit:
- Decision owner:

## Environment

- OS:
- CPU:
- GPU / driver:
- Browser / version:
- Node:
- Viewport / DPR:
- URL parameters:

## Hard gates

| Gate | Pass / Fail | Evidence path | Notes |
| --- | --- | --- | --- |
| Fixed commit boots |  |  |  |
| No blocking console or Shader error |  |  |  |
| Calm, cloud field and violent storm are visually distinct without reading controls |  |  |  |
| Tsunami is legible from sea level and the chase follows the same height field |  |  |  |
| Aftermath removes the event and stale weather/camera state |  |  |  |
| Single quality entry updates every subsystem |  |  |  |
| Tsunami can trigger, reset and trigger again |  |  |  |
| Adapter can dispose and rebuild cleanly |  |  |  |
| Build and static checks pass |  |  |  |
| Evidence carries hardware and commit identity |  |  |  |

Any failed hard gate blocks `ADOPT BOUNDED`.

## Target-effect evidence

| Beat | Required observable result | Pass / Fail | Screenshot / state | Notes |
| --- | --- | --- | --- | --- |
| calm | stable horizon, multi-scale low-energy sea, coherent highlight, broken foam |  |  |  |
| cloud field | volumetric silhouettes, light/dark separation, depth, changed sea illumination |  |  |  |
| violent storm | larger relief, directional white water, low cloud deck, reduced visibility |  |  |  |
| tsunami | distant front, sea-level scale, camera/field agreement, passage |  |  |  |
| aftermath | event removed, energy reduced, no stale rain/foam/camera offset |  |  |  |

## Shot sequence evidence

| Shot | Purpose | Framing / motion | Subject remains readable | Evidence |
| --- | --- | --- | --- | --- |
| calm-low-horizon | establish scale and material | low static or slow skim |  |  |
| cloud-wide | establish atmospheric volume | wide hold / restrained orbit |  |  |
| storm-skim | embody danger | low fast skim with bounded shake |  |  |
| tsunami-sea-level | establish wall scale | low static hold |  |  |
| tsunami-chase | prove passage and camera-field agreement | follow / chase |  |  |
| aftermath-crane | release and prove reset | slow crane |  |  |

## Runtime measurements

| Beat | Shot | Preset | Adaptive | First usable ms | Median frame ms | P95 frame ms | Dynamic scale | Errors |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | --- |
| calm | low-horizon | medium | off |  |  |  |  |  |
| cloud-field | wide | medium | off |  |  |  |  |  |
| violent-storm | skim | medium | off |  |  |  |  |  |
| tsunami | sea-level | low | on |  |  |  |  |  |
| tsunami | chase | high | on |  |  |  |  |  |

## GPU pass evidence

| Pass | Clear ms | Storm ms | Interpretation |
| --- | ---: | ---: | --- |
| oceanFFT |  |  |  |
| clouds |  |  |  |
| envProbe |  |  |  |
| scene |  |  |  |
| post |  |  |  |

## Contract evidence

| Method | Observable result | Repeatable | Failure behavior | Evidence |
| --- | --- | --- | --- | --- |
| `init` |  |  |  |  |
| `applySpec` |  |  |  |  |
| `trigger` |  |  |  |  |
| `sampleHeight` |  |  |  |  |
| `reset` |  |  |  |  |
| `captureEvidence` |  |  |  |  |
| `dispose` |  |  |  |  |

## State and lifecycle audit

- Shared mutable state remaining:
- DOM listeners before / after rebuild:
- Render targets and textures before / after rebuild:
- Stale condition after preset changes:
- Stale event after reset:
- Multiple-instance result:

## Production evidence

- Entry JS raw / gzip:
- Largest JS chunk raw / gzip:
- Runtime-generated GPU allocation notes:
- Loading state:
- Error fallback:
- Reduced motion:
- Keyboard / pointer controls:
- Mobile decision:
- Recording / export decision:

## Scope pressure

List every requested capability that falls outside Environment Pack v0.1:

- 

## Decision

Choose one:

- [ ] `ADOPT BOUNDED` — contract, runtime, lifecycle and downstream value pass.
- [ ] `WATCH` — effect is valid but extraction cost or downstream demand is not yet justified.
- [ ] `REJECT` — a hard blocker makes this route unsuitable.

### Bounded conclusion



### What remains explicitly unsupported



### Next re-evaluation trigger


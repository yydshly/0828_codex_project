# SceneGen POC Scorecard Template

Copy this file into a future experiment folder. Fill evidence paths, not only opinions.

## Decision header

```text
Experiment ID:
Date:
Owner:
Upstream commit:
Model / checkpoint versions and hashes:
Input scene ID and rights record:
Inference path: interactive / pre-segmented
Target downstream consumer:
Comparison baseline:
Pre-registered time / asset / runtime budgets:
Final decision: ADOPT / WATCH / REJECT
```

## Hard gates

| Gate | Pass / fail | Evidence | Notes |
| --- | --- | --- | --- |
| Input and generated-output rights are recorded |  |  |  |
| Upstream source and checkpoint versions are pinned |  |  |  |
| Inference completes and produces a readable GLB |  |  |  |
| Every required target object is present and separately inspectable |  |  |  |
| Output opens in the named downstream consumer |  |  |  |
| Manual cleanup stays within the pre-registered ceiling |  |  |  |

Any failed hard gate prevents adoption for this use case.

## Runtime and dependency evidence

| Metric | Result | Budget / baseline | Evidence |
| --- | ---: | ---: | --- |
| Environment setup time |  |  |  |
| Cold launch time |  |  |  |
| Inference time |  |  |  |
| GLB export / postprocess time |  |  |  |
| Peak VRAM |  |  |  |
| Checkpoint bytes |  |  |  |
| Repeated-run success count |  |  |  |
| Blocking errors / retries |  |  |  |

## Asset inspection

| Check | Result | Acceptance rule | Evidence |
| --- | --- | --- | --- |
| GLB bytes |  |  |  |
| Node / Mesh count |  |  |  |
| Triangle count |  |  |  |
| Texture count and maximum dimensions |  |  |  |
| Object separation and naming |  |  |  |
| Geometry completeness |  |  |  |
| Normals / shading |  |  |  |
| UV and texture coherence |  |  |  |
| Material correctness |  |  |  |
| Pivot, up-axis, and ground contact |  |  |  |
| Real-world scale or scale-reference error |  |  |  |
| Missing hidden surfaces |  |  |  |

## Spatial and physical inspection

| Check | Result | Acceptance rule | Evidence |
| --- | --- | --- | --- |
| Relative position accuracy |  |  |  |
| Relative orientation accuracy |  |  |  |
| Relative scale plausibility |  |  |  |
| Object-object collision / overlap count |  |  |  |
| Object-ground penetration / floating |  |  |  |
| Support relations |  |  |  |
| Navigable / reachable space, if applicable |  |  |  |
| Collider generation effort |  |  |  |

## Downstream production evidence

| Check | Result | Budget / baseline | Evidence |
| --- | ---: | ---: | --- |
| Geometry cleanup time |  |  |  |
| Texture / material cleanup time |  |  |  |
| Scale / pivot / naming cleanup time |  |  |  |
| Collider / LOD / compression time |  |  |  |
| Cleaned GLB bytes |  |  |  |
| Target-device FPS and frame time |  |  |  |
| Visual fallback available |  |  |  |
| Total operator time |  |  |  |
| Compute / cloud cost |  |  |  |

## Qualitative review

```text
What SceneGen preserved well:
What it invented or lost:
Which failures came from masks:
Which failures came from geometry / appearance generation:
Which failures came from pose prediction:
Which failures came from GLB export:
What required subjective manual judgment:
What a manual or alternative pipeline would have cost:
```

## Decision record

```text
Decision: ADOPT / WATCH / REJECT
Evidence supporting the decision:
Known residual risks:
If WATCH, exact retest trigger:
If ADOPT, bounded supported domain:
If REJECT, rejected use case rather than universal claim:
Next review date:
```

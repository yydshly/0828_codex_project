# SceneGen POC Runbook

This runbook is the re-entry point for Project 010. Use it only when a real downstream task activates the project. It intentionally separates verified Project 010 evidence from upstream commands that have not been executed in this workspace.

## 0. Read the current decision first

Current state: `WATCH / TRIGGER`.

Do not begin with environment setup. Confirm all four gates:

- [ ] We have a legally usable indoor source image and a clear 3–5 object scope.
- [ ] The output has a named consumer: Blender, Three.js, Unity, VR/AR, or a spatial product.
- [ ] We have ≥16GB NVIDIA VRAM or a controlled cloud-GPU budget.
- [ ] We have time for geometry, texture, collision, scale, and runtime cleanup.

If any gate is false, stop. Update the decision date in the experiment record; do not install the model stack.

## 1. Run the source-drift gate

The research snapshot is pinned to:

```text
605d1a0b51d2dab950c8131d584d875862c8a17f
```

Check the current remote without cloning:

```powershell
git ls-remote https://github.com/Mengmouxu/SceneGen.git HEAD
```

Then review, in order:

1. upstream README and installation instructions;
2. releases / tags and changes since the pinned commit;
3. Hugging Face model files and model-card changes;
4. open issues mentioning installation, inference, VRAM, GLB, masks, collision, multi-view, Windows, or CUDA;
5. license and dataset-access changes.

Record the result:

```text
Review date:
Pinned commit:
Current upstream HEAD:
Relevant changes:
Decision: keep pin / test new commit / restart research
Reviewer:
```

Never silently replace the pinned commit. A new commit creates a new experiment revision.

## 2. Freeze the POC contract before installation

### Input contract

```text
Source image ID and rights:
Scene domain: indoor / other
Target objects: 3–5 named objects
Mask source: manual / SAM2 / existing
Object order across views:
Known occlusions or missing backsides:
Expected physical scale reference:
```

### Downstream contract

```text
Consumer: Blender / Three.js / Unity / other
Required axis and unit convention:
Maximum GLB bytes:
Maximum triangles:
Maximum texture dimensions:
Required object separation / names:
Required collider / LOD / semantic output:
Target device and frame budget:
Manual cleanup time ceiling:
```

Fill the numbers before inference. Do not choose success thresholds after seeing the result.

## 3. Choose one inference path

| Path | Use when | Upstream entry | Additional dependency |
| --- | --- | --- | --- |
| Interactive | Masks need to be created and reviewed visually | `python interactive_demo.py` | SAM2-Hiera-Large |
| Pre-segmented | Masks already exist and object order is controlled | `python inference.py --gradio` | Prepared masked-image folder |

The pinned upstream README documents Python ≥3.8, an NVIDIA GPU with at least 16GB VRAM, CUDA 12.1 as the tested CUDA version, and a `setup.sh` path that compiles several extensions. Treat the upstream setup command as a candidate procedure, not as Project 010 verified installation evidence.

Recommended isolation record:

```text
OS / container / WSL:
GPU and VRAM:
Driver:
CUDA toolkit:
Python:
PyTorch:
Upstream commit:
SceneGen checkpoint hashes:
VGGT checkpoint hash:
SAM2 checkpoint hash, if used:
Setup command and exit code:
First successful import / launch:
```

Keep the inference environment outside this research page's runtime. Do not add checkpoints, caches, generated datasets, or environment folders to Git.

## 4. Run the smallest useful experiment

Use exactly one scene first:

1. Freeze one image and 3–5 target objects.
2. Save the original image, masks, object order, and parameter values.
3. Generate one GLB with default or explicitly recorded parameters.
4. Preserve stdout/stderr, elapsed time, peak VRAM if available, and all failure messages.
5. Open the GLB in a neutral inspector before editing it.
6. Open it in the named downstream consumer and perform only the cleanup required by the contract.
7. Complete `experiments/poc-scorecard-template.md`.

Do not batch more scenes until the first GLB has been inspected end to end.

## 5. Required evidence package

Store a future run under a new folder such as:

```text
projects/scenegen-capability-study/experiments/poc-r1/
├── decision.md
├── environment.md
├── input/
│   ├── source.*
│   ├── masks/
│   └── object-order.json
├── output/
│   ├── raw.glb
│   └── cleaned.glb
├── scorecard.md
├── logs/
└── screenshots/
```

Do not store material without confirmed rights. Large checkpoints and caches remain outside Git; record their source, version, hash, and local storage policy instead.

## 6. Decision rule

Choose exactly one outcome:

- **ADOPT FOR A BOUNDED PIPELINE** — hard gates pass, cleanup fits the pre-registered ceiling, and the downstream consumer can use the asset within its runtime budget.
- **WATCH / RETEST** — the capability is relevant but one named upstream limitation, dependency issue, or quality defect has a credible retest trigger.
- **REJECT FOR THIS USE CASE** — the domain is mismatched, a hard gate fails, or manual cleanup is not better than the selected baseline.

Record the baseline used for comparison. “Looks impressive” is not an adoption decision.

## 7. Stop rules

Stop the POC and preserve evidence when any of these occurs:

- source or dataset rights are unclear;
- the test input is outside the project's indoor-furniture domain and no domain adaptation is planned;
- environment setup consumes the agreed POC time box without reaching the official demo entry;
- three runs repeat the same blocking failure without new evidence;
- required objects are missing or fused in a way that invalidates downstream use;
- scale, collision, topology, texture, or cleanup cost exceeds the pre-registered ceiling;
- the output has no named consumer or no one owns cleanup.

The correct result may be “do not adopt”. A stopped, well-recorded POC is more reusable than an unbounded environment experiment.

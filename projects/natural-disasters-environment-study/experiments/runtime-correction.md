# Runtime correction record

## What was wrong

Revision 3 replaced the researched library with a Project 011-authored raw WebGL2 approximation. Although that page rendered a five-beat sequence, it did not execute `Token-Gremlin/natural-disasters`, its Three.js scene, FFT ocean, volumetric clouds, weather systems, disaster events, Director or Sandbox.

Therefore its earlier 48/48 browser result proved only that the approximation worked. It could not prove the upstream library's visual effect, architecture, algorithms, controls or performance. For the user's goal—“use the researched library and show its effect”—that route was invalid.

## Corrective action

1. Fixed the upstream repository at commit `849ff7f4199c9322d8ecafb48d62fc63f8d5af1d`.
2. Installed its dependencies and ran its own tests.
3. Built its own Vite production bundle without source changes.
4. Started the actual upstream `App` in Chrome / WebGL2.
5. Verified the actual `Director` and `Sandbox` objects.
6. Called the actual `director.gotoAct()` for acts 0, 4, 8 and 10.
7. Replaced the canonical demo route with the upstream build output.
8. Removed the independent `app.js` and `styles.css` renderer from that route.
9. Vendored the exact upstream source and MIT license for reproducibility and attribution.

## Current evidence

- Upstream tests: pass.
- Upstream production build: pass.
- Browser runtime checks: 14/14.
- App running: yes.
- WebGL2 render buffer: 1280 × 720.
- Director acts: 11.
- Sandbox installed: yes.
- Boot errors: 0.
- Page exceptions: 0.
- Failed resource requests: 0.

The automated browser used SwiftShader. This is valid functional runtime evidence, not physical-GPU performance evidence.

## Rule going forward

The canonical demo may add only a thin version/build/evidence layer around the fixed upstream runtime. Any independent renderer, replacement Shader or screenshot-only fallback must be labeled separately and cannot be presented as the library's effect.

# Project 010 media notice

The files in this directory are vendored only so the static research page works without runtime CDN requests.

Exact byte sizes, SHA-256 hashes, upstream URLs, roles, and license boundaries are recorded in [`manifest.json`](./manifest.json). Verify that manifest before replacing any file.

| Local file | Upstream source | Role |
| --- | --- | --- |
| `official-demo-input-0002101.png` | SceneGen project page `assets/demos/0002101.png` | Official input-image evidence |
| `official-demo-output-0002101.glb` | SceneGen project page `assets/demos/0002101.glb` | Matching official GLB evidence |
| `official-architecture.png` | SceneGen project page `assets/images/Arch.png` | Official method diagram |
| `official-quality-comparison.png` | SceneGen project page `assets/images/Quality.png` | Official qualitative comparison |
| `three-r128.min.js` | Three.js r128 | Local progressive viewer runtime |
| `GLTFLoader-r128.js` | Three.js examples r128 | Local GLB loader |
| `OrbitControls-r128.js` | Three.js examples r128 | Local orbit controls |

SceneGen is published under the MIT License. Three.js is published under the MIT License. Project 010 did not generate the official examples and does not use them as evidence of an independent success-rate evaluation.

- SceneGen repository: <https://github.com/Mengmouxu/SceneGen>
- SceneGen project page: <https://mengmouxu.github.io/SceneGen/>
- Three.js: <https://github.com/mrdoob/three.js/tree/r128>

# Project 007 application-demo prompts

These four edits were created with the built-in `imagegen` tool on 2026-08-29 for the Revision 4 use-case demonstrations. They are Project 007 outputs, not upstream examples or a cross-model benchmark. The tool did not expose a model version.

All three emotion variants use the same edit target:

- `assets/project-experiments/rain-window-before.png`
- role: the only edit target
- invariant source size: 1536 × 1024 (3:2)

The fluorescent-figure variant uses the already accepted normal Night Diary result as its only edit target:

- `assets/project-experiments/rain-window-after.png`
- role: the only edit target
- invariant source size: 1536 × 1024 (3:2)

## Same-source emotion 01 · loneliness

Output: `assets/project-experiments/rain-window-emotion-lonely.png`

```text
Use case: style-transfer
Asset type: Project 007 same-source emotion demonstration — loneliness state
Input images: Image 1 is the only edit target.
Primary request: transform Image 1 into a quiet Night Diary image expressing restrained solitude. Preserve the exact 3:2 canvas, crop, camera, bus window bars, condensation and rain patterns, seat geometry, streetlight positions, reflections, and the single passenger at right. Do not move, resize, redesign, remove, or add any person or object.
Style/medium: photorealistic deep-night film photograph; near-black and indigo negative space; very sparse existing amber lights; fine grain, slight softness, restrained glow; no commercial poster finish.
Typography and placement: add only three lines of thick coarse off-white Chinese chalk/marker handwriting in the existing upper-left window negative space, away from the passenger and main lights. Uneven hand-drawn baseline, but every Chinese character must remain clearly legible.
Text (verbatim, exactly these three lines):
"夜把人声收走"
"（只剩雨还醒着）"
"我在窗边等自己"
Constraints: render every character and the full-width parentheses exactly once; no English, no signature, no extra punctuation, no extra text, no logo, no watermark. No new lights, moon, stars, buildings, vehicles, people, props, borders, or graphic panels.
```

Manual first-pass QA: all requested Chinese characters and full-width parentheses are visible exactly; no extra text, English, signature or watermark was observed. The source framing, window bars, seat layout, light positions and one-person count remain recognizable. This is an observation, not OCR or pixel-difference proof.

SHA-256: `d9b8b190ac202ff0310a0b763b487452d0d1fc6a952044e075534ac5e3bcee39`

## Same-source emotion 02 · warmth

Output: `assets/project-experiments/rain-window-emotion-warm.png`

```text
Use case: style-transfer
Asset type: Project 007 same-source emotion demonstration — warmth state
Input images: Image 1 is the only edit target.
Primary request: transform Image 1 into a quiet Night Diary image expressing restrained warmth and the feeling of being expected at home. Preserve the exact 3:2 canvas, crop, camera, bus window bars, condensation and rain patterns, seat geometry, streetlight positions, reflections, and the single passenger at right. Do not move, resize, redesign, remove, or add any person or object.
Style/medium: photorealistic deep-night film photograph; deep navy shadows with slightly warmer treatment of only the existing amber streetlights and reflections; fine grain, slight softness, restrained glow; intimate, never festive or commercial.
Typography and placement: add only three lines of thick coarse off-white Chinese chalk/marker handwriting in the existing upper-left window negative space, away from the passenger and main lights. Uneven hand-drawn baseline, but every Chinese character must remain clearly legible.
Text (verbatim, exactly these three lines):
"灯一盏一盏亮起"
"（有人为我留着）"
"回家的路不再远"
Constraints: render every character and the full-width parentheses exactly once; no English, no signature, no extra punctuation, no extra text, no logo, no watermark. No new lights, moon, stars, buildings, vehicles, people, props, borders, or graphic panels.
```

Manual first-pass QA: all requested Chinese characters and full-width parentheses are visible exactly; no extra text, English, signature or watermark was observed. The source framing, window bars, seat layout, light positions and one-person count remain recognizable. Existing amber lights are warmer without an observed new light source.

SHA-256: `fd314d25757f431b2ae124578483e3f01180e7da07169ef0dfe8882c193d34a6`

## Same-source emotion 03 · release

Output: `assets/project-experiments/rain-window-emotion-release.png`

```text
Use case: style-transfer
Asset type: Project 007 same-source emotion demonstration — release state
Input images: Image 1 is the only edit target.
Primary request: transform Image 1 into a quiet Night Diary image expressing release and a gentle emotional ending. Preserve the exact 3:2 canvas, crop, camera, bus window bars, condensation and rain patterns, seat geometry, streetlight positions, reflections, and the single passenger at right. Do not move, resize, redesign, remove, or add any person or object.
Style/medium: photorealistic deep-night film photograph; balanced indigo and muted amber from only the existing lights; fine grain, slight softness, restrained glow; calm and resolved, still unmistakably night.
Typography and placement: add only three lines of thick coarse off-white Chinese chalk/marker handwriting in the existing upper-left window negative space, away from the passenger and main lights. Uneven hand-drawn baseline, but every Chinese character must remain clearly legible.
Text (verbatim, exactly these three lines):
"雨终究会停下"
"（风会带走旧事）"
"今晚就到这里吧"
Constraints: render every character and the full-width parentheses exactly once; no English, no signature, no extra punctuation, no extra text, no logo, no watermark. No new lights, moon, stars, buildings, vehicles, people, props, borders, or graphic panels.
```

Manual first-pass QA: all requested Chinese characters and full-width parentheses are visible exactly; no extra text, English, signature or watermark was observed. The source framing, window bars, seat layout, light positions and one-person count remain recognizable. The result stays night rather than introducing a new dawn or sky object.

SHA-256: `8c41d68f71d566278792ced007fdac847d41b768f5cbf0169f94f34640c27e8c`

## Explicit fluorescent-figure branch

Output: `assets/project-experiments/rain-window-figure-fluorescent.png`

```text
Use case: precise-object-edit
Asset type: Project 007 explicit fluorescent-figure branch demonstration
Input images: Image 1 is the only edit target and the accepted normal Night Diary version.
Primary request: change only the existing single passenger at the right into the explicit fluorescent-figure treatment. Trace the passenger's existing outer silhouette and a few garment folds with narrow bright off-white fluorescent tube lines and restrained soft bloom. Keep the person in the identical position, scale, seated pose, facing direction, crop, and occlusion behind the seat.
Invariants: preserve the exact 3:2 canvas, crop, camera, window bars, condensation, raindrops, seats, streetlights, reflections, night palette, exposure, grain, and every other pixel-level visual intention as closely as the image editor permits.
Text (verbatim, preserve exactly and do not restyle):
"雨落在窗外"
"（城市还没有睡）"
"我把安静带回家"
Constraints: exactly one existing person; do not add or remove a person, limb, object, light, prop, text, border, logo, or watermark. No skeleton diagram, no stick figure, no facial features, no solid white body, no thick halo, no neon colors other than restrained off-white. Do not alter, translate, rewrite, move, duplicate, or add to the Chinese text.
```

Manual first-pass QA: one seated passenger remains at the right with the same facing direction and seat occlusion; the outer silhouette and a few garment folds receive off-white luminous lines without a skeleton or solid-white body. The three Chinese lines remain exact and no extra text was observed. The passenger boundary and nearby texture are generatively re-rendered, so this is not a pixel-local edit guarantee.

SHA-256: `ae1f1c96fc30bc37329a702ce36dead5949fb673e6b4dfb3f746df1ee582d9cc`

## Product-assembly boundary

The music cover, diary card and social-media post shown in the page are deterministic HTML/CSS assemblies that reuse local Project 007 result images. They are not additional ImageGen outputs. Their purpose is to demonstrate delivery formats while keeping product typography, layout and accessibility under code control.

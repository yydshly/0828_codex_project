# Project 007 Chinese sample prompts and QA

These are Project 007 built-in imagegen inputs, not upstream outputs. Three original text-free baselines were created, then edited with the public Night Diary contract. The built-in tool did not expose a model version.

## A. Rain-window baseline

```text
Use case: photorealistic-natural
Asset type: Project 007 neutral edit baseline
Primary request: create an original cinematic but natural photograph seen from inside a city bus on a rainy blue-hour evening.
Scene/backdrop: large fogged bus window with real raindrops and streaks; soft urban streetlights outside; quiet bus interior.
Subject: exactly one anonymous seated passenger in dark silhouette on the right, facing the window; visible seat backs and window frame.
Style/medium: photorealistic natural photography, not stylized artwork.
Composition/framing: 3:2 landscape, eye-level, window occupies most of the frame, generous empty fogged-glass negative space on the upper left.
Lighting/mood: restrained cool blue-gray ambient light with a few existing muted amber streetlight reflections.
Materials/textures: wet glass, condensation, worn seat fabric, realistic low-light grain.
Constraints: no text anywhere, no signs with readable lettering, no logos, no watermark, no stars or moon, no extra people, no surreal objects.
```

## B. Rain-window Chinese Night Diary edit

```text
Use case: style-transfer
Asset type: Project 007 Chinese Night Diary experiment
Input images: Image 1 is the only edit target.
Primary request: transform Image 1 into a quiet, restrained Night Diary nighttime photograph with deep navy negative space, localized amber light, analog film grain, sparse chalk-white contour accents, and exact Chinese handwritten diary text.

NON-NEGOTIABLE COMPOSITION LOCK:
- preserve the exact 3:2 canvas ratio, crop, orientation and camera;
- preserve the full bus window frame, every glass pane, raindrop pattern, condensation streaks, seat backs, exterior streetlights and reflections;
- preserve exactly one seated passenger on the right, including identity ambiguity, silhouette, pose, scale, direction and occlusion;
- do not add, remove, shift, enlarge, rotate or reconstruct any person, seat, window, light or outside object.

Lighting and palette: deepen the existing blue-gray evening into near-black and indigo; keep the existing streetlights as restrained amber sources; preserve readable shadow detail; no cyberpunk saturation.
Texture and graphic treatment: subtle analog film grain, slight softness, restrained bloom and worn texture; add only a few imperfect thick chalk-white contour accents along existing window or rain geometry; do not outline everything.

Text (verbatim), exactly these three lines and no other text:
“雨落在窗外”
“（城市还没有睡）”
“我把安静带回家”
Typography and placement: thick off-white handwritten Chinese made with a coarse paint marker or chalk, visibly rough, slightly slanted and uneven but clearly readable. Place all three lines in the empty fogged-glass negative space on the upper-left, away from the passenger and bright streetlights. Preserve every Chinese character and the full-width parentheses exactly. No English, no signature, no extra punctuation, no watermark.

Avoid: altered composition, extra people or objects, fluorescent-person treatment, new celestial bodies, cartoon rendering, polished digital fonts, thin calligraphy, borders, logos, watermarks or extra words.
```

QA: first pass accepted. Manual check found all requested Chinese characters plus the full-width parentheses rendered as requested, with no English or extra text. Structure QA v2: 43/69 RANSAC inliers, edge F1 0.8712, mean corner drift 0.0223%.

## C. Forest-stop baseline

```text
Use case: photorealistic-natural
Asset type: Project 007 neutral edit baseline
Primary request: create an original natural photograph of a remote forest bus stop at misty dusk.
Scene/backdrop: narrow rural road passing through dense trees; a simple shelter, one empty bench and one existing unlit lamp; low mist.
Subject: exactly one anonymous waiting person in a dark coat standing beneath the shelter, full body visible, calm neutral pose.
Style/medium: photorealistic natural photography, not fantasy art.
Composition/framing: 2:3 vertical, straight camera, shelter in the lower middle, dark tree canopy framing a large quiet opening of sky above.
Lighting/mood: cool gray-blue dusk, realistic soft haze, no dramatic effects.
Materials/textures: damp asphalt, weathered wood, wet leaves, subtle natural grain.
Constraints: no text anywhere, no readable bus-stop sign, no logos, no watermark, no vehicles, no animals, no stars or moon, no extra people.
```

## D. Forest-stop Chinese Night Diary edit · first pass

```text
Use case: style-transfer
Asset type: Project 007 Chinese Night Diary experiment
Input images: Image 1 is the only edit target.
Primary request: transform Image 1 into a quiet Night Diary forest-night photograph with deep indigo negative space, one localized warm lamp, analog film texture, sparse chalk-white contour accents, and exact Chinese handwritten diary text.

NON-NEGOTIABLE COMPOSITION LOCK:
- preserve the exact 2:3 canvas ratio, crop, orientation and straight camera;
- preserve the road path, shelter, bench, lamp post, wet ground, mist, tree canopy opening and every major tree silhouette;
- preserve exactly one standing person beneath the shelter, including location, pose, scale, direction and occlusion;
- do not add, remove, shift, enlarge, rotate or reconstruct any person, tree, road, shelter, bench or lamp.

Lighting and palette: deepen the cool dusk into near-black, navy and blue-violet; turn only the existing lamp and shelter spill into restrained amber warmth; retain shadow detail; no moon or stars.
Texture and graphic treatment: subtle film grain, slight softness and worn texture; add only a few rough chalk-white accents along existing shelter roof, lamp glow or selected branches; do not outline every leaf or object.

Text (verbatim), exactly these three lines and no other text:
“树影慢慢合上”
“（风还记得路）”
“等一盏灯亮起来”
Typography and placement: thick off-white handwritten Chinese with a coarse chalk or paint-marker stroke, dry-brush gaps, irregular spacing and a drifting baseline, rough but clearly readable. Place the three lines in the large empty sky opening above the shelter, avoiding branches, the lamp and the person. Preserve every Chinese character and the full-width parentheses exactly. No English, no signature, no extra punctuation, no watermark.

Avoid: altered composition, extra people, vehicles or animals, fluorescent-person treatment, new celestial bodies, fantasy effects, cartoon rendering, polished digital fonts, thin calligraphy, borders, logos, watermarks or extra words.
```

QA: Chinese text passed manually, but the first structure run found only 5/30 RANSAC inliers and 12.4588% mean corner drift. The output was retained as evidence and rejected for excessive scene re-rendering.

## E. Forest-stop single targeted retry

```text
Use case: style-transfer
Asset type: Project 007 Chinese Night Diary targeted retry
Input images: Image 1 is the only edit target and the geometry source. Image 2 is style reference only, showing the intended Night Diary palette, text treatment and lamp mood. Do not use Image 2 as the geometry source.

This is the single allowed targeted retry after structure QA found excessive scene re-rendering. Re-create the Night Diary edit from Image 1 while keeping Image 1's scene geometry much closer to the original pixels.

NON-NEGOTIABLE COMPOSITION LOCK:
- preserve Image 1's exact 2:3 canvas, crop, camera and perspective;
- preserve the road curve, road width and wet markings; the shelter's exact position, width, roof, posts, bench and planks; the lamp post's position and shape; the standing person's exact count, position, pose, scale and silhouette;
- preserve the original tree-canopy opening, branch and leaf silhouettes, mist boundaries and forest edges from Image 1;
- do not repaint, relocate, resize or redesign any road, tree, shelter, bench, lamp or person.

Change only:
- darken the existing cool dusk toward deep navy while retaining Image 1's visible tree and mist structure;
- warm only the existing lamp and its existing ground spill;
- add restrained analog film grain and very sparse rough white accents;
- add the exact three-line Chinese handwriting below.

Text (verbatim), exactly these three lines and no other text:
“树影慢慢合上”
“（风还记得路）”
“等一盏灯亮起来”
Keep the text in the original sky opening, in thick rough off-white chalk handwriting. Preserve every character and the full-width parentheses exactly. No English, no signature, no extra punctuation.

Do not add people, vehicles, animals, moon, stars, new lamps, text, logos or watermarks. Do not apply fluorescent-person treatment. Do not copy any geometric reconstruction from Image 2.
```

QA: retry accepted. Chinese text remained exact. Structure QA improved to 14/23 RANSAC inliers, edge F1 0.8123 and 0.1849% mean corner drift, passing the Project 007 smoke thresholds.

## F. Canal baseline

```text
Use case: photorealistic-natural
Asset type: Project 007 neutral edit baseline
Primary request: create an original natural photograph of a quiet Jiangnan canal lane at late dusk.
Scene/backdrop: narrow canal, one small arched stone bridge, white plaster houses with dark tiled roofs, a few closed windows, still water reflections.
Subject: no people; architecture and canal are the only subjects.
Style/medium: photorealistic travel photography, restrained and observational, not an illustration.
Composition/framing: 1:1 square, eye-level from the canal bank, bridge slightly below center, long negative space in the upper sky and dark water.
Lighting/mood: cool overcast late dusk with only two existing dim warm window lights.
Materials/textures: aged plaster, wet stone, dark roof tiles, calm water.
Constraints: no text anywhere, no shop signs, no banners, no logos, no watermark, no boats, no lantern rows, no stars or moon, no people or animals.
```

## G. Canal Chinese Night Diary edit

```text
Use case: style-transfer
Asset type: Project 007 Chinese Night Diary experiment
Input images: Image 1 is the only edit target.
Primary request: transform Image 1 into a restrained Night Diary canal-night photograph with deep navy and dark-brown negative space, localized warm windows, analog film grain, sparse chalk-white architectural accents, and exact Chinese handwritten diary text.

NON-NEGOTIABLE COMPOSITION LOCK:
- preserve the exact 1:1 square canvas, crop, orientation and eye-level camera;
- preserve the single arched stone bridge, canal banks, waterline, bridge reflection, all house silhouettes, roofs, windows, stairs and the central tree;
- preserve the empty scene with zero people, animals, boats or vehicles;
- do not add, remove, shift, enlarge, rotate or reconstruct any bridge, building, window, stair, tree or reflection.

Lighting and palette: deepen the blue dusk into near-black, indigo and dark brown; warm only the two existing lit windows and their existing reflections with restrained amber; keep shadow detail; no lantern rows.
Texture and graphic treatment: subtle analog film grain, slight softness, restrained bloom and worn paper texture; add only sparse imperfect chalk-white accents along selected existing roof, bridge or reflection edges; do not outline everything.

Text (verbatim), exactly these three lines and no other text:
“水巷收起余光”
“（屋里有人醒着）”
“夜色沿着桥走远”
Typography and placement: thick off-white handwritten Chinese using a coarse paint marker or chalk, slightly slanted, shaky and irregular but clearly readable. Place the three lines in the existing upper sky negative space, avoiding roofs, bridge and lit windows. Preserve every Chinese character and the full-width parentheses exactly. No English, no signature, no extra punctuation, no watermark.

Avoid: altered composition, new people or objects, boats, banners, signs, lantern rows, moon or stars, cartoon rendering, polished digital fonts, thin calligraphy, borders, logos, watermarks or extra words.
```

QA: first pass accepted. Manual check found all requested Chinese characters and parentheses rendered as requested, with no English or extra text. Structure QA v2: 42/56 RANSAC inliers, edge F1 0.8817, mean corner drift 0.0769%.

## Evidence boundary

- Text QA is a manual check of these three observed images, not OCR and not a general Chinese-text accuracy rate.
- Structure QA is a five-pair smoke baseline, not a cross-model benchmark.
- The forest first pass demonstrates why exact copy and composition quality must be checked separately.

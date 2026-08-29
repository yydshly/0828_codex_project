# Project 007 generation and edit prompts

These prompts record the original two independent experiments shown in the research page. The three later Chinese-text experiments and the forest structure retry are recorded in [`chinese-sample-prompts.md`](./chinese-sample-prompts.md). They are Project 007 inputs, not upstream-authored examples or cross-model benchmarks. The built-in image generation/editing tool did not expose a model version.

## 1. Courtyard baseline

```text
Create an original photorealistic vertical editorial photograph to serve as a neutral BEFORE image for a style-transfer study. Scene: an older East Asian residential apartment courtyard at blue hour, viewed straight-on from street level. Strong readable geometry: stacked windows, balconies, one narrow warm-lit doorway, overhead utility lines, and a broad area of plain dim sky/wall as negative space. Two small anonymous adult silhouettes stand near the doorway, naturally posed, faces not identifiable. Color is subdued natural blue-gray with only a few existing warm window lights. Preserve realistic architecture and perspective. No handwriting, no captions, no graphic outlines, no neon people, no logos, no watermark, no added moon or stars. This is the unstyled baseline image.
```

## 2. Courtyard Night Diary edit

```text
Use case: style-transfer
Asset type: vertical research demonstration artwork
Input image: the latest image is the only edit target.
Primary request: transform the edit target into a quiet poetic Night Diary image with deep night film texture, restrained warm light, and intimate white handwritten diary text.

NON-NEGOTIABLE COMPOSITION LOCK:
- preserve the exact canvas ratio, crop, portrait orientation, camera position and perspective;
- preserve the left apartment block, central apartment block, right foreground building, broad sky negative space, all existing windows, overhead utility wires, courtyard pavement, doorway, parked car, bicycle, and exactly the two small adult silhouettes by the doorway;
- preserve every subject's exact count, location, pose, scale, direction, silhouette and occlusion;
- do not add, remove, rotate, enlarge, shift or reconstruct scene elements.

Lighting and palette: near-black, deep navy, indigo and dark brown negative space; amber, warm cream, burnt orange and muted crimson only in existing lit windows and doorway; optional extremely sparse blue-violet accents; high contrast with readable shadow detail.
Texture and graphic treatment: subtle analog film grain, slight softness, restrained gentle bloom and worn texture; add only a few imperfect chalk-white contour accents following existing window geometry or wire intersections; do not outline every object.
Text (verbatim): “some windows stay awake” / “(long after the street goes quiet)” / “to keep a little warmth alive.”
Typography and placement: expressive lowercase off-white handwriting made with a thick paint marker or coarse chalk, with noticeably thick strokes, slightly slanted, connected, shaky and scratchy, irregular letter spacing and drifting baselines, dry-brush gaps and rough edges. Place the three lines across the broad existing sky negative space, away from architecture, people, wires and light sources. Render every word exactly and add no other words. A small hand-drawn asterisk may follow the final line using the same rough stroke.
Avoid: altered composition, new people or objects, glowing human outlines, cyberpunk saturation, cartoon rendering, polished digital fonts, thin elegant signature script, uniform baselines, borders, postage-stamp edges, logos, watermarks, moon, stars or extra words.
```

### One targeted retry

The first pass rendered `Some` instead of the requested lowercase `some`. The source Skill allows one targeted retry for text or composition errors.

```text
This is one targeted correction to the latest image. Preserve the entire image exactly: canvas, crop, architecture, wires, windows, lights, two people, pavement, palette, exposure, grain, handwriting placement, line breaks, stroke weight and all other words. Change only the first letter of the first handwritten line from uppercase “S” to lowercase “s”, so the first line reads exactly “some windows stay awake”. Keep the other two lines exactly “(long after the street goes quiet)” and “to keep a little warmth alive.” Do not add, remove, move or restyle anything else; no new words, objects, borders, logos or watermarks.
```

## 3. Coast baseline

```text
Create an original photorealistic horizontal editorial photograph to serve as a neutral BEFORE image for a style-transfer study. Scene: a quiet rocky coastline shortly before sunset, viewed from a low grassy bluff. Strong readable geometry: a level ocean horizon across the middle, a curved foreground grass slope, one small anonymous adult silhouette standing at the far right facing the sea, and one distant low boat left of center. The sky has broad soft cloud bands and ample negative space. Natural subdued daylight in blue-gray and pale peach, realistic optics and atmosphere. No handwriting, no captions, no graphic outlines, no neon, no logos, no watermark, no added moon or stars. This is the unstyled baseline image.
```

## 4. Coast Night Diary edit

```text
Use case: style-transfer
Asset type: horizontal research demonstration artwork
Input image: the latest image is the only edit target.
Primary request: transform the edit target into a restrained poetic Night Diary coastal image with deep indigo night, analog film texture, a narrow memory of warm horizon light, and intimate white handwritten diary text.

NON-NEGOTIABLE COMPOSITION LOCK:
- preserve the exact canvas ratio, crop, landscape orientation, camera position and perspective;
- preserve the perfectly level ocean horizon, broad cloud bands, curved grassy bluff, every visible rock and wave region, exactly one distant low boat left of center, and exactly one small adult silhouette at the far right facing the sea;
- preserve every subject's exact count, location, pose, scale, direction, silhouette and occlusion;
- do not add, remove, rotate, enlarge, shift or reconstruct scene elements.

Lighting and palette: transition daylight into deep navy, indigo and near-black nighttime tones; retain only a restrained muted amber-peach afterglow along the existing horizon, with readable sea and grass shadow detail; no new celestial light source.
Texture and graphic treatment: subtle analog film grain, slight softness, gentle bloom around the remaining horizon glow and worn texture; add only sparse imperfect chalk-white contour accents along a few existing wave crests or cloud edges; never outline the person or every object.
Text (verbatim): “the sea keeps the last light” / “(a little longer)” / “before night takes it home.”
Typography and placement: expressive lowercase off-white handwriting made with a thick coarse chalk or paint marker, clearly thick strokes, slightly slanted, connected, shaky and scratchy, irregular spacing and drifting baselines, dry-brush gaps and rough edges. Place the three text groups in existing upper-left and upper-center sky negative space, away from the horizon, boat and person. Render every word exactly and add no other words. A small rough hand-drawn asterisk may follow the final line.
Avoid: altered horizon, shifted person or boat, new people or objects, moon, stars, birds, buildings, glowing human outlines, cyberpunk saturation, cartoon rendering, polished digital fonts, thin signature script, borders, postage-stamp edges, logos, watermarks or extra words.
```

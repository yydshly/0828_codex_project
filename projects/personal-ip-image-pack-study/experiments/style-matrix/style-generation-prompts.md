# Style matrix generation prompts

All six published assets were generated with Codex built-in ImageGen. Image 1 was always the project-owned fictional-character anchor `docs/assets/project-003-sample/lin-jian-anchor-v1-r1.png`. No upstream style-library image was used.

## `v1 / s2 / r1` · IP-02 avatar

```text
Use case: identity-preserve
Asset type: IP-02 clean flat portrait, square avatar for the Project 003 real style matrix
Input images: Image 1 is the approved fictional character Lin Jian v1 and the only identity reference
Primary request: redraw the exact same fictional character as a polished clean flat portrait avatar
Scene/backdrop: a simple flat pale blue-green circular field on a warm off-white square canvas
Subject: one adult woman with the same round face, black shoulder-length softly curved hair with the same center part and outer silhouette, thin round dark glasses, coral-red collared blouse, calm approachable expression
Style/medium: clean flat editorial illustration, almost no outline; hair made from 5–8 large flowing coherent shapes; simple black oval eyes, tiny color-block nose, simple curved mouth; at most two flat tonal levels per region; crisp edges
Composition/framing: centered head-and-shoulders portrait, strong readable silhouette at small size
Color palette: coral, navy, pale blue-green, warm off-white
Constraints: preserve character identity, glasses, hairstyle silhouette, blouse color and palette; change only rendering style and crop; no gradients, no photorealistic skin, no detailed hair strands, no 3D, no text, no logo, no watermark, no signature, no second character
```

## `v1 / s2 / r2` · IP-02 conditional full body

```text
Use case: identity-preserve
Asset type: IP-02 conditional full-body illustration for the Project 003 real style matrix
Input images: Image 1 is the approved fictional character Lin Jian v1 and the only identity reference
Primary request: redraw the exact same fictional character as one clean flat full-body editorial figure
Scene/backdrop: edge-to-edge warm off-white flat background with one pale blue-green ground shape, no scene
Subject: one adult woman with the same round face, black shoulder-length softly curved hair and center part, thin round dark glasses, coral-red collared long-sleeve blouse, navy high-waisted wide-leg trousers, cream low-top sneakers; neutral confident standing pose
Style/medium: clean flat illustration, almost no outline; large coherent color shapes; simple black oval eyes and minimal facial features; no gradients; at most two flat tonal levels per region
Composition/framing: vertical 4:5, full body from hair to both shoes completely visible, generous safe margin
Color palette: coral, navy, pale blue-green, warm off-white
Constraints: preserve character identity, hairstyle silhouette, glasses, complete outfit, body proportions and palette; change only rendering style; no cropped feet, no extra props, no text, no logo, no watermark, no signature, no second character
```

## `v1 / s2 / r3` · IP-02 cover card

```text
Use case: ads-marketing
Asset type: IP-02 clean flat course cover card for the Project 003 real style matrix
Input images: Image 1 is the approved fictional character Lin Jian v1 and the only identity reference
Primary request: create a clean flat editorial cover card featuring the exact same fictional character confidently explaining a concept
Scene/backdrop: abstract flat navy, pale blue-green, coral and warm off-white geometric fields; no literal room
Subject: one waist-up adult woman with the same round face, black shoulder-length softly curved hair and center part, thin round dark glasses, coral-red collared blouse; one clear open-hand explanatory gesture
Style/medium: clean flat editorial illustration, almost no outline, coherent large hair shapes, simple black oval eyes, at most two flat tonal levels per region, crisp edges
Composition/framing: vertical 3:4 cover, character on one side with a generous empty copy-safe area on the other side; no text rendered
Color palette: coral, navy, pale blue-green, warm off-white
Constraints: preserve character identity, glasses, hairstyle silhouette, blouse and palette; change only composition, gesture and rendering style; no gradients, no words, no logo, no watermark, no signature, no extra objects, no second character
```

## `v1 / s3 / r1` · IP-05 bust sticker

```text
Use case: identity-preserve
Asset type: IP-05 healing journal bust sticker for the Project 003 real style matrix
Input images: Image 1 is the approved fictional character Lin Jian v1 and the only identity reference
Primary request: redraw the exact same fictional character as a gentle hand-drawn bust sticker, smiling softly and giving a small friendly wave
Scene/backdrop: genuinely transparent background, no checkerboard graphic, no paper rectangle, no scene
Subject: one adult woman with the same round face, black shoulder-length softly curved hair and center part, thin round dark glasses, coral-red collared blouse
Style/medium: healing journal doodle illustration with relaxed fine hand-drawn lines, minimal dot-like facial features, light blush, simple flat fills and subtle natural paper-pencil texture on the character only
Composition/framing: centered bust sticker with a clean cream sticker border and at least 12 percent transparent safe margin
Color palette: coral, navy, cream, one muted natural green accent only
Constraints: preserve identity, hairstyle silhouette, glasses, blouse and palette; change only rendering style, crop, expression and small wave; actual alpha transparency required outside the sticker border; no checkerboard pixels, no text, no logo, no watermark, no signature, no second character
```

The first result painted a checkerboard into opaque RGB and added decorative leaves. The published correction used:

```text
Use case: background-extraction
Asset type: corrected IP-05 bust sticker release asset
Input images: Image 1 is the edit target
Primary request: remove the entire painted checkerboard background and remove the decorative green leaves; make every pixel outside the cream sticker border genuinely transparent
Constraints: change only background transparency and delete the green leaves; preserve the woman's face, identity, glasses, hairstyle, hand wave, coral blouse, hand-drawn pencil texture, cream sticker border, crop, scale and colors exactly; output actual alpha transparency with corner alpha zero; no checkerboard graphic, no replacement background, no text, no logo, no watermark, no signature, no extra objects
```

## `v1 / s3 / r2` · IP-05 full-body sticker

```text
Use case: identity-preserve
Asset type: IP-05 healing journal full-body sticker for the Project 003 real style matrix
Input images: Image 1 is the approved fictional character Lin Jian v1 and the only identity reference
Primary request: redraw the exact same fictional character as a gentle hand-drawn full-body sticker, standing attentively while holding one plain closed cream notebook at her chest
Scene/backdrop: genuinely transparent background, no checkerboard graphic, no floor, no scene
Subject: one adult woman with the same round face, black shoulder-length softly curved hair and center part, thin round dark glasses, coral-red collared blouse, navy wide-leg trousers and cream sneakers
Style/medium: healing journal doodle illustration with relaxed fine hand-drawn lines, minimal dot-like facial features, light blush, simple flat fills and subtle natural pencil texture on the character only
Composition/framing: vertical 4:5, complete full body and both shoes visible, clean cream sticker border, at least 10 percent transparent safe margin
Color palette: coral, navy, cream, one muted natural green accent only
Constraints: preserve identity, hairstyle silhouette, glasses, complete outfit and palette; change only rendering style, pose and necessary blank notebook; actual alpha transparency required outside the sticker border; no checkerboard pixels, no writing, no logo, no watermark, no signature, no second character
```

The first result painted a checkerboard into opaque RGB. The published correction used:

```text
Use case: background-extraction
Asset type: corrected IP-05 full-body sticker release asset
Input images: Image 1 is the edit target
Primary request: remove the entire painted checkerboard background and make every pixel outside the cream sticker border genuinely transparent
Constraints: change only background transparency; preserve the woman's face, identity, glasses, hairstyle, complete coral blouse and navy trousers outfit, cream sneakers, closed blank notebook, hand-drawn pencil texture, cream sticker border, full-body framing, scale and colors exactly; output actual alpha transparency with corner alpha zero; no checkerboard graphic, no replacement background, no text, no logo, no watermark, no signature, no extra objects
```

## `v1 / s3 / r3` · IP-05 scene card

```text
Use case: illustration-story
Asset type: IP-05 healing journal micro-scene card for the Project 003 real style matrix
Input images: Image 1 is the approved fictional character Lin Jian v1 and the only identity reference
Primary request: create one quiet, readable micro-scene of the exact same fictional character preparing a lesson at one tiny desk
Scene/backdrop: warm off-white journal-paper field with generous empty space; the tiny desk is the single meaningful scene element
Subject: one small full-body adult woman with the same round face, black shoulder-length softly curved hair and center part, thin round dark glasses, coral-red collared blouse, navy wide-leg trousers and cream sneakers; she stands beside the desk and reviews one blank cream notebook
Style/medium: healing hand-journal illustration, relaxed fine hand-drawn lines, minimal dot-like facial features, light blush, simple flat fills, subtle paper and pencil texture
Composition/framing: vertical 4:5 scene card, character remains the clear anchor, desk and blank notebook form one compact narrative cluster, large quiet margins
Color palette: coral, navy, cream, muted natural green; only 2–4 main colors
Constraints: preserve identity, hairstyle silhouette, glasses, outfit and palette; only one meaningful scene element; no room depth, no clutter, no text, no logo, no watermark, no signature, no second character
```

## Revision 5 · IP-01 / IP-03 / IP-06

All seven new requests used `lin-jian-anchor-v1-r1.png` as the only referenced image. The following prompt bodies are the release prompts; the shared first sentence was: “Use the supplied image only as the identity reference for Lin Jian, a fictional adult woman.”

### `v1 / s4 / r1` · IP-01 avatar

```text
Preserve her round face, shoulder-length softly curved black hair, thin round dark glasses, coral collared blouse, navy trousers, and calm friendly personality. Asset type: IP-01 simple doodle square avatar. Visual language: thick soft black doodle lines with rounded endpoints, slight hand-drawn grain and a few natural irregular line breaks; mostly white and pale blush with one muted coral accent; flat shapes, no gradients, no photorealism. Composition: centered head-and-shoulders portrait, direct friendly expression, generous white breathing room, square crop, no text, no logo, no extra objects. Keep glasses, hair silhouette and coral collar. Clean warm off-white solid background; no border or watermark.
```

### `v1 / s4 / r2` · IP-01 bust sticker

```text
Preserve her round face, shoulder-length softly curved black hair, thin round dark glasses, coral collared blouse, and calm friendly personality. Asset type: IP-01 simple doodle bust sticker. Thick soft black doodle lines with rounded endpoints, subtle hand-drawn grain and irregular line breaks; mostly white and pale blush with one muted coral accent; flat shapes, no gradients. Centered bust, friendly small wave, clean cream sticker outline, at least 12 percent empty safe margin; no text, logo, props, decoration, shadow, panel, or scenery. Genuine transparent alpha outside the cream outline; do not draw a checkerboard, colored square, paper texture, or simulated transparency.
```

### `v1 / s5 / r1` · IP-03 avatar

```text
Preserve her round face, shoulder-length softly curved black hair, thin round dark glasses, coral collared blouse, navy wide-leg trousers, cream sneakers, and calm friendly personality. Asset type: IP-03 powder crayon square avatar. Vivid powder-pastel and oil-crayon color blocks; enlarged rounded head; eyes simplified into lively colored round shapes behind the glasses; thick connected crayon areas, visibly dry broken edges and grain; controlled high-saturation coral, cobalt, warm yellow, and black; no photorealism. Centered head-and-shoulders portrait with a cheerful confident expression; square crop; one simple cobalt field; no text, logo, props, or extra figures.
```

### `v1 / s5 / r2` · IP-03 full-body sticker

```text
Preserve her round face, shoulder-length softly curved black hair, thin round dark glasses, coral collared blouse, navy wide-leg trousers, cream sneakers, and calm friendly personality. Asset type: IP-03 powder crayon full-body sticker. Vivid powder-pastel and oil-crayon color blocks; large rounded head and compact full body; thick connected crayon areas and dry broken texture; controlled high-saturation coral, cobalt, warm yellow, and black. One standing figure holding a single coral marker, both shoes visible, cream sticker outline, at least 12 percent safe margin; no text, logo, extra objects, decoration, shadow, panel, or scenery. Genuine transparent alpha outside the cream outline; do not draw checkerboard squares or simulated transparency.
```

### `v1 / s6 / r1` · IP-06 avatar

```text
Preserve her round face, shoulder-length softly curved black hair, thin round dark glasses, coral collared blouse, and calm friendly personality. Asset type: IP-06 bold comic square avatar. Very thick uniform black contour; strong solid dark hair mass; graphic comic facial features and direct confident expression; high-saturation flat color; hard-edged shapes, no gradients or photorealism. Tight centered portrait, vivid electric yellow background with one cobalt offset shape; no text, logo, props, speech bubbles, or extra figures.
```

### `v1 / s6 / r2` · IP-06 bust sticker

```text
Preserve her round face, shoulder-length softly curved black hair, thin round dark glasses, coral collared blouse, and calm friendly personality. Asset type: IP-06 bold comic bust sticker. Very thick uniform black contour, solid black hair mass, energetic direct expression, high-saturation flat coral, cobalt, yellow, and black. Centered bust with one raised index finger, cream sticker outline, at least 12 percent safe margin; no text, logo, speech bubble, symbols, decoration, shadow, panel, or scenery. Genuine transparent alpha outside the cream outline; do not draw checkerboard squares or simulated transparency.
```

### `v1 / s6 / r3` · IP-06 cover

```text
Preserve her round face, shoulder-length softly curved black hair, thin round dark glasses, coral collared blouse, and calm friendly personality. Asset type: IP-06 bold comic vertical 3:4 marketing cover. Very thick uniform black contour, solid dark hair mass, high-saturation flat coral, cobalt, electric yellow, cream, and black; hard-edged offset shapes, no gradients. Lin Jian from waist up on the lower-right, pointing toward a large completely blank cream headline zone in the upper-left. No actual text, letters, numbers, logos, icons, speech bubbles, watermark, or extra figures.
```

### Background extraction and rejected cleanup

The first sticker candidates painted checkerboards into opaque RGB. The accepted first extraction requested genuine alpha outside the cream outline while preserving the artwork exactly. A second “one contiguous silhouette / remove every fleck, haze and halo” cleanup was attempted for all three; all three results re-baked the checkerboard and were rejected. A targeted IP-03 retry also remained `Format24bppRgb` and was rejected. Exact rejected files and reasons are recorded in `style-matrix-manifest-r6.json`.

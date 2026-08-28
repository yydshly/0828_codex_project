# Generation prompts

执行模式：Codex 内置 ImageGen。以下为进入最终发布目录的三次生成提示词；所有人物均为虚构原创。

## `v1/r1` · approved anchor

```text
Use case: stylized-concept
Asset type: approved personal-IP character anchor, full-body prototype
Primary request: create a completely fictional Chinese knowledge creator named Lin Jian; this is an original invented character and must not resemble a real public figure or private person
Scene/backdrop: genuinely transparent background with no floor, no frame, no decorative scene
Subject: one adult woman, friendly calm expression, round face, black shoulder-length softly curved hair, thin round dark glasses; coral-red long-sleeve blouse, high-waisted navy wide-leg trousers, cream low-top sneakers; neutral front-facing standing pose, arms relaxed, full body and both shoes fully visible
Style/medium: refined colored-pencil editorial character illustration on subtle paper texture; clean silhouette; 2.8-head fashion-doll proportions; restrained coral, navy, cream palette
Composition/framing: centered single character, portrait 4:5, generous transparent padding around the silhouette
Output intent: canonical approved anchor for a reusable personal-IP asset pack; later images will derive expressions and actions from this anchor
Constraints: original fictional character only; consistent anatomy; readable face and glasses; no text, no logo, no watermark, no signature, no extra objects, no second character; preserve genuine alpha transparency
```

## `v1/r2` · happy wave

```text
Use case: identity-preserve
Input images: Image 1 is the approved fictional-character anchor and the only identity/style reference
Primary request: create one independent full-body asset of the exact same fictional character, smiling warmly and waving with her right hand
Scene/backdrop: a flat warm cream paper backdrop (#F3EBDD), edge-to-edge, with only very subtle paper grain; no checkerboard, no scene, no floor line
Change only: facial expression becomes a warm smile; right arm and hand form a clear friendly wave; add the specified flat cream backdrop
Keep unchanged: exact face shape and facial identity, black shoulder-length softly curved hair, thin round dark glasses, coral-red blouse, high-waisted navy wide-leg trousers, cream low-top sneakers, body proportions, colored-pencil editorial rendering, paper texture, coral/navy/cream palette
Composition/framing: single centered full body, both shoes fully visible, portrait 4:5, generous padding
Output intent: independent full_body release asset derived from the approved anchor, not a sticker, collage, or contact sheet
Constraints: do not redesign the character; no accessories, no text, no logo, no watermark, no signature, no extra objects, no second character; background must be solid cream, never transparency-checkerboard graphics
```

## `v1/r3` · thinking notebook

```text
Use case: identity-preserve
Input images: Image 1 is the approved fictional-character anchor and the only identity/style reference
Primary request: create one independent full-body asset of the exact same fictional character, thinking while holding one plain cream notebook open at chest height with both hands
Scene/backdrop: a flat warm cream paper backdrop (#F3EBDD), edge-to-edge, with only very subtle paper grain; no checkerboard, no scene, no floor line
Change only: expression becomes thoughtful, eyes slightly lowered toward the notebook; arms and hands naturally hold one plain cream notebook; add the specified flat cream backdrop
Keep unchanged: exact face shape and facial identity, black shoulder-length softly curved hair, thin round dark glasses, coral-red blouse, high-waisted navy wide-leg trousers, cream low-top sneakers, body proportions, colored-pencil editorial rendering, paper texture, coral/navy/cream palette
Composition/framing: single centered full body, both shoes fully visible, portrait 4:5, generous padding
Output intent: independent full_body release asset derived from the approved anchor, not a sticker, collage, or contact sheet
Constraints: do not redesign the character; notebook has no writing or logo; no other accessories, no text, no logo, no watermark, no signature, no extra objects, no second character; background must be solid cream, never transparency-checkerboard graphics
```

## `v1/r4` · explain and point

```text
Use case: identity-preserve
Input images: Image 1 is the approved fictional-character anchor for Lin Jian v1 and the only identity/style reference
Asset type: full-body teaching and presentation illustration
Primary request: create one independent full-body asset of the exact same fictional character explaining a concept; she looks attentive and confident, with her left arm bent and left index finger pointing clearly toward empty space beside her while the other arm rests naturally
Scene/backdrop: flat warm cream paper backdrop (#F3EBDD), edge-to-edge, subtle paper grain only; no checkerboard, no room, no floor line
Change only: explanatory expression and the single pointing gesture; add the specified flat cream backdrop
Keep unchanged: exact round face and facial identity, black shoulder-length softly curved hair, thin round dark glasses, coral-red long-sleeve blouse, high-waisted navy wide-leg trousers, cream low-top sneakers, body proportions, colored-pencil editorial rendering, paper texture, coral/navy/cream palette
Composition/framing: one centered full-body character, both shoes fully visible, portrait composition, generous open space on the side she points toward
Output intent: v1/r4 independent presentation asset derived from the approved anchor
Constraints: do not redesign the character; no props, no diagrams, no words, no logo, no watermark, no signature, no extra objects, no second character; background must be solid cream, never a transparency-checkerboard graphic
```

## `v1/r5` · celebrate

```text
Use case: identity-preserve
Input images: Image 1 is the approved fictional-character anchor for Lin Jian v1 and the only identity/style reference
Asset type: full-body community celebration illustration
Primary request: create one independent full-body asset of the exact same fictional character celebrating a learner's success; she smiles brightly, gives one clear thumbs-up near shoulder height, and keeps her other hand relaxed
Scene/backdrop: flat warm cream paper backdrop (#F3EBDD), edge-to-edge, subtle paper grain only; no checkerboard, no room, no floor line
Change only: celebratory smile and one thumbs-up gesture; add the specified flat cream backdrop
Keep unchanged: exact round face and facial identity, black shoulder-length softly curved hair, thin round dark glasses, coral-red long-sleeve blouse, high-waisted navy wide-leg trousers, cream low-top sneakers, body proportions, colored-pencil editorial rendering, paper texture, coral/navy/cream palette
Composition/framing: one centered full-body character, both shoes fully visible, portrait composition, generous padding
Output intent: v1/r5 independent celebration asset derived from the approved anchor
Constraints: do not redesign the character; no confetti, props, speech bubbles, words, logo, watermark, signature, extra objects, or second character; background must be solid cream, never a transparency-checkerboard graphic
```

## `v1/r6` · social avatar

```text
Use case: identity-preserve
Input images: Image 1 is the approved fictional-character anchor for Lin Jian v1 and the only identity/style reference
Asset type: square social-profile avatar
Primary request: create one independent square bust avatar of the exact same fictional character with a calm, approachable closed-mouth smile, facing forward
Scene/backdrop: flat deep navy circular field on a warm cream square canvas, subtle paper grain only; no checkerboard, no scene, no floor
Change only: crop and composition from full-body to head-and-shoulders avatar; use the specified navy-and-cream graphic backdrop; keep expression calm and approachable
Keep unchanged: exact round face and facial identity, black shoulder-length softly curved hair, thin round dark glasses, coral-red blouse collar and upper torso, colored-pencil editorial rendering, paper texture, coral/navy/cream palette
Composition/framing: centered square 1:1 avatar, complete hair silhouette, head and shoulders visible, generous safe padding for circular profile cropping
Output intent: v1/r6 independent avatar asset derived from the approved anchor
Constraints: do not redesign the character; no props, words, initials, logo, watermark, signature, extra objects, or second character; no photorealism; no transparency-checkerboard graphic
```

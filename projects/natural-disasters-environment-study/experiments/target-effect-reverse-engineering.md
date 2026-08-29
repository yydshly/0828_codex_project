# Project 011 — Target Effect Reverse Engineering

## Research rule

Project 011 no longer starts from “which source modules exist?”. It starts from “what must the audience actually see and feel?”. The working chain is:

```text
target frame or shot
→ observable visual result
→ state, timing and camera requirements
→ rendering system
→ algorithmic principle
→ independent reproduction test
```

Source code confirms or rejects the reverse map. It does not define the target by itself.

## Target-media provenance

The three reference frames below are official media stored in upstream commit `849ff7f4199c9322d8ecafb48d62fc63f8d5af1d`. They are copied locally for stable research and remain attributed to `Token-Gremlin/natural-disasters` under its MIT license.

| State | Upstream path | Local public asset | SHA-256 |
| --- | --- | --- | --- |
| Calm / clear sky | `docs/media/clear-sky.png` | `docs/assets/natural-disasters-target-clear-sky.png` | `8cf40c4230ca139058b2911c5ddf86d9226f73e584c8bd37d513c313ce97a565` |
| Cloud field | `docs/media/cumulus-field.png` | `docs/assets/natural-disasters-target-cumulus-field.png` | `f0403fdad69252c1a44c45571dc6ce3635f52da88791f143091f4bdd01eb49b6` |
| Violent storm | `docs/media/violent-storm-sea.png` | `docs/assets/natural-disasters-target-violent-storm-sea.png` | `33f09944bcf0ac814190100b87c49fb1d04065c3e2feee20fb63cef42a4b4951` |

Evidence label: `TARGET_DEMO_MEDIA`. These frames support claims about visible composition, light, cloud shape, water scale and atmosphere. They do not prove our runtime, frame rate, temporal stability or exact fixed-commit browser output.

## The effect is an escalation, not three presets

The automatic Director confirms a longer visual story: `DEAD CALM → SUNRISE → FRESH GALE → SQUALL LINE → VIOLENT STORM → WATERSPOUT → ROGUE WAVE → HURRICANE EYE → TSUNAMI → NIGHT LIGHTNING → AFTERMATH`.

For our minimum reproduction, the essential audience journey is shorter:

1. **Orientation — calm:** establish horizon, water scale, sun direction and a readable baseline.
2. **Volume — cloud field:** prove that the sky has depth, changing density and a relationship to ocean lighting.
3. **Threat — violent storm:** make wave height, white water, low cloud, haze, rain and camera instability combine into danger.
4. **Hero event — tsunami:** introduce one readable exception to the base sea, seen from sea level and then followed as it passes.
5. **Release — aftermath:** remove the event, lower energy and prove the system can return to a clean state.

This sequence becomes the target specification. A control panel that exposes the same parameter names but does not produce this visual progression is not a successful POC.

## Frame-by-frame reverse map

### A. Calm / clear sky — establish scale and material

`TARGET_DEMO_MEDIA` observations:

- a stable, nearly level horizon gives the viewer an immediate world scale;
- the sky is a broad luminance gradient rather than a flat color;
- the water contains several wave scales and a coherent specular path;
- foam appears as broken surface structure, not a uniform white overlay;
- the camera is low enough for the surface to occupy the foreground.

Reverse-engineered requirements:

| Visible requirement | Controllable cause | Confirming source system | Algorithmic principle | Reproduction test |
| --- | --- | --- | --- | --- |
| horizon and sky gradient | sun elevation, turbidity, exposure | `Atmosphere`, `SkyRenderer`, `PostFX` | atmosphere LUT plus sky scattering and tone mapping | fixed shot keeps horizon readable across three sun elevations |
| multi-scale water | wind, significant wave height, swell period, choppiness | `OceanFFT`, `OceanMesh` | three JONSWAP FFT cascades sampled at different scales | foreground, middle distance and horizon each retain distinct frequency bands |
| coherent highlights | sun direction, roughness, normals, cloud transmittance | `OceanMesh`, atmosphere uniforms | physically motivated reflection/Fresnel and cloud-shadowed direct light | highlight direction follows the sun without turning the whole sea white |
| broken foam | crest/Jacobian signal, foam strength, procedural foam texture | `OceanFFT`, `OceanMesh`, `ProceduralTextures` | crest detection plus temporally eroded procedural foam | foam is concentrated around breaking structure and remains nonuniform |

### B. Cumulus field — establish atmospheric depth

`TARGET_DEMO_MEDIA` observations:

- cloud forms vary in footprint, height and distance;
- dark undersides and brighter tops make them read as volumes;
- cloud scale diminishes toward the horizon;
- gaps preserve blue sky and keep the field from becoming a ceiling;
- ocean lighting remains visually connected to the sky above it.

Reverse-engineered requirements:

| Visible requirement | Controllable cause | Confirming source system | Algorithmic principle | Reproduction test |
| --- | --- | --- | --- | --- |
| irregular cloud bodies | coverage, density, cloud type, weather map | `ProceduralTextures`, `Clouds` | Perlin-Worley 3D density plus a 2D weather map | silhouettes and gaps remain irregular from low and middle camera heights |
| top/underside separation | sun angle, light steps, ambient scatter | `Clouds`, `Atmosphere` | volumetric raymarch with secondary light samples | cloud tops brighten while bases retain readable density |
| depth across kilometres | cloud bottom/top, ray distance, camera FOV | `Clouds`, `CinematicCamera` | perspective plus depth-aware volumetric integration | nearby and horizon clouds stay distinct without flat billboard scaling |
| sky-to-sea consistency | cloud transmittance and environment texture | `Clouds`, `SkyRenderer`, `OceanMesh` | shared atmosphere/cloud textures and cloud shadow sampling | increasing coverage reduces and breaks direct highlights on the sea |

### C. Violent storm — combine systems into danger

`TARGET_DEMO_MEDIA` observations:

- foreground waves have much larger vertical relief and steeper faces;
- bright foam streaks expose direction and speed across dark water;
- the cloud base forms a low, heavy ceiling with only a narrow bright horizon;
- haze and streaking precipitation reduce long-range clarity;
- a low, wide camera makes the sea feel larger than the observer.

Reverse-engineered requirements:

| Visible requirement | Controllable cause | Confirming source system | Algorithmic principle | Reproduction test |
| --- | --- | --- | --- | --- |
| mountainous sea | wind speed, `swellHs`, period, amplitude, choppiness | `Weather`, `OceanFFT`, `OceanMesh` | spectrum reseeding/interpolation plus displaced ocean mesh | violent state produces clearly larger silhouette variation than calm from the same shot |
| directional white water | crest energy, foam strength, spray | `OceanMesh`, `Spray` | crest/foam mask, Langmuir-like streak modulation and GPU particles | white structure follows wave direction instead of screen-space noise |
| low storm ceiling | high coverage/density, low cloud bottom, anvil, fog | `Clouds`, `Atmosphere`, `Weather` | denser raymarched volume with reduced direct transmittance | bright horizon survives while the overhead sky darkens substantially |
| rain and loss of clarity | rain, spray, fog, exposure | `Precipitation`, `PostFX` | camera-relative particles, atmospheric extinction and filmic post | foreground remains readable while middle distance loses contrast |
| embodied danger | FOV, low height, speed, shake, roll | `Director`, `CinematicCamera` | motivated skim/orbit/crane shots with smoothed procedural shake | the same storm reads weaker in a high static shot, proving camera is part of the effect |

## Hero event: tsunami is a shot contract

`UPSTREAM_SOURCE` confirms that the target tsunami is not defined only by a wave formula:

- the solitary front travels toward the viewer;
- a sea-level static shot lets the wall fill the frame;
- the camera then follows/rides the analytic height field;
- the CPU event-height twin and GLSL displacement must agree so the lens does not hover or sink;
- reset must remove the event and restore the base weather without stale displacement.

Therefore the reproduction criterion is:

```text
storm baseline hold
→ distant wall becomes identifiable
→ wall dominates the sea-level frame
→ camera is lifted by the same field that deforms the ocean
→ chase/aftermath proves passage and reset
```

A large Gerstner crest viewed from above does not satisfy this target even if it uses the same numeric height.

## Minimum target-led POC

The POC should expose controls only after it can play this 45–60 second evidence sequence:

| Beat | Duration | Required visible proof |
| --- | ---: | --- |
| Calm orientation | 8–10 s | stable horizon, readable specular path, low-energy multi-scale sea |
| Cloud build | 10–12 s | separate cloud volumes, dark bases, changing sea illumination |
| Storm escalation | 12–15 s | larger relief, white-water direction, rain/haze, motivated camera response |
| Tsunami | 12–16 s | distant front, sea-level scale, camera/field agreement, passage |
| Reset / aftermath | 6–8 s | event disappears, energy drops, no stale rain, foam or camera offset |

Only after the sequence is visually accepted should we judge whether the systems deserve an `EnvironmentSpec` abstraction.

## Runtime observation result

- The isolated fixed-commit clone completed dependency installation, upstream tests and production build.
- Chrome / WebGL2 started the actual upstream `App`, `Director` and `Sandbox`.
- All 11 acts were read from the actual Director.
- DEAD CALM, VIOLENT STORM, TSUNAMI and AFTERMATH were entered through the upstream `gotoAct()` implementation.
- The functional browser suite passed 14/14 with no boot error, page exception or failed request.
- The automated renderer was SwiftShader, so physical-GPU performance remains a separate gate.

See [`upstream-runtime-observation.json`](./upstream-runtime-observation.json) for structured evidence.

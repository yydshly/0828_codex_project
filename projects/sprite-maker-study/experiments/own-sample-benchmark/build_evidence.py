from __future__ import annotations

import copy
import hashlib
import json
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / "workspace/assets/characters/project003-anchor.png"
FRAME_ROOT = ROOT / "native-workspace/assets/characters"
FRAME_PATHS = [
    FRAME_ROOT / f"project003-anchor-idle-revised3_{index:02d}.png"
    for index in range(1, 5)
]
EVIDENCE_ROOT = ROOT / "evidence"

DETERMINISM_HASHES = [
    "3b4ee38c3d5224622b8e5aa93313519518e10725e14c4911e7e6d454ac84d465",
    "4024d8883d0a5574430e18fe3ef43a662a7e3cf56f87cb46a2cc8b9b669975b3",
    "8824c795dd8b4d4285002abd149a96eb44d7b5d09d00928cda4313720e3efe6f",
    "2aa5bbe910448c45b95d827cb1bf91be9ac84735240e0ab56c60faa880c28606",
]


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def alpha_bounds(image: Image.Image) -> list[int] | None:
    bounds = image.convert("RGBA").getchannel("A").getbbox()
    return list(bounds) if bounds else None


def nonzero_pixel_count(image: Image.Image) -> int:
    return sum(value > 0 for value in image.convert("RGBA").getchannel("A").getdata())


def pixel_difference(first: Image.Image, second: Image.Image) -> float:
    normalize = lambda pixel: pixel if pixel[3] > 0 else (0, 0, 0, 0)
    left = [normalize(pixel) for pixel in first.convert("RGBA").getdata()]
    right = [normalize(pixel) for pixel in second.convert("RGBA").getdata()]
    changed = sum(a != b for a, b in zip(left, right))
    return round(changed / len(left) * 100, 6)


def source_palette_reuse(source: Image.Image, output: Image.Image) -> float:
    palette = {pixel for pixel in source.convert("RGBA").getdata() if pixel[3] > 0}
    visible = [pixel for pixel in output.convert("RGBA").getdata() if pixel[3] > 0]
    if not visible:
        return 0.0
    return round(sum(pixel in palette for pixel in visible) / len(visible) * 100, 6)


def checkerboard(size: tuple[int, int], cell: int = 12) -> Image.Image:
    image = Image.new("RGBA", size, "#101a17")
    draw = ImageDraw.Draw(image)
    for y in range(0, size[1], cell):
        for x in range(0, size[0], cell):
            if (x // cell + y // cell) % 2:
                draw.rectangle((x, y, x + cell - 1, y + cell - 1), fill="#18251f")
    return image


def build_visuals(source: Image.Image, frames: list[Image.Image]) -> None:
    EVIDENCE_ROOT.mkdir(parents=True, exist_ok=True)
    scale = 3
    label_height = 42
    cell_width = source.width * scale
    cell_height = source.height * scale + label_height
    sheet = Image.new("RGBA", (cell_width * 5, cell_height), "#07110d")
    labels = ["SOURCE", "FRAME 01", "FRAME 02", "FRAME 03", "FRAME 04"]
    for index, (label, frame) in enumerate(zip(labels, [source, *frames])):
        background = checkerboard((cell_width, source.height * scale))
        enlarged = frame.resize((cell_width, source.height * scale), Image.Resampling.NEAREST)
        background.alpha_composite(enlarged)
        x = index * cell_width
        sheet.alpha_composite(background, (x, label_height))
        draw = ImageDraw.Draw(sheet)
        draw.text((x + 14, 13), label, fill="#8ff0b5", font=ImageFont.load_default())
    sheet.save(EVIDENCE_ROOT / "project003-idle-contact-sheet.png", optimize=True)

    enlarged_frames = [
        frame.resize((frame.width * 4, frame.height * 4), Image.Resampling.NEAREST)
        for frame in frames
    ]
    enlarged_frames[0].save(
        EVIDENCE_ROOT / "project003-idle.gif",
        save_all=True,
        append_images=enlarged_frames[1:],
        duration=167,
        loop=0,
        disposal=2,
        optimize=False,
    )


def build_final_rig() -> dict[str, object]:
    provider = json.loads((ROOT / "provider-rig-suggestion.json").read_text(encoding="utf-8"))
    native = {
        "name": "project003-anchor-idle-revised3",
        "morphology": provider["morphology"],
        "fps": 6,
        "looping": True,
        "points": [
            {
                "id": f"ai-p{index}",
                "name": point["name"],
                "kind": point["kind"],
                "x": point["x"],
                "y": point["y"],
                "confidence": point["confidence"],
                "source": "ai",
                "note": point["note"],
            }
            for index, point in enumerate(provider["points"], 1)
        ],
        "bones": [
            {
                "id": f"ai-b{index}",
                "name": bone["name"],
                "startPoint": bone["start"],
                "endPoint": bone["end"],
                "radius": bone["radius"],
                "parent": bone["parent"],
                "z": bone["z"],
            }
            for index, bone in enumerate(provider["bones"], 1)
        ],
        "frames": copy.deepcopy(provider["frames"]),
    }
    upper_right = [-4, 4, 2, -2]
    upper_left = [4, -4, -2, 2]
    body = [-4, 4, 2, -2]
    for index, frame in enumerate(native["frames"]):
        transforms = {entry["bone"]: entry for entry in frame["transforms"]}
        transforms["upper_arm_r"]["rotate"] = upper_right[index]
        transforms["upper_arm_l"]["rotate"] = upper_left[index]
        transforms["upper_torso"]["rotate"] = body[index]
    return native


def main() -> None:
    missing = [path for path in [SOURCE, *FRAME_PATHS] if not path.exists()]
    if missing:
        raise FileNotFoundError(f"Run the native benchmark before building evidence: {missing}")
    source = Image.open(SOURCE).convert("RGBA")
    frames = [Image.open(path).convert("RGBA") for path in FRAME_PATHS]
    build_visuals(source, frames)
    final_rig = build_final_rig()
    (ROOT / "final-rig-input.json").write_text(
        json.dumps(final_rig, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    auto = json.loads((ROOT / "native-auto-suggestion.json").read_text(encoding="utf-8"))
    provider = json.loads((ROOT / "provider-rig-suggestion.json").read_text(encoding="utf-8"))
    quality = json.loads((ROOT / "native-quality-report.json").read_text(encoding="utf-8"))
    current_hashes = [sha256(path) for path in FRAME_PATHS]
    sequence = [source, *frames]
    frame_differences = [pixel_difference(frames[index], frames[(index + 1) % 4]) for index in range(4)]
    result = {
        "benchmark": "Project 009 own-sample native rig benchmark",
        "verdict": "CONDITIONAL",
        "input": {
            "sourceProject": "Project 003",
            "sourcePath": "docs/assets/project-003-sample/lin-jian-anchor-v1-r1.png",
            "normalizedCanvas": [160, 224],
            "generativeEdits": 0,
        },
        "execution": {
            "provider": "Codex CLI",
            "providerTask": "vision-only rig point, capsule bone, and four-frame idle suggestion",
            "imageGenerationCalls": 0,
            "nativeApp": "Sprite Studio v0.3.2 Tauri dev build",
            "nativeCommands": [
                "create_workspace",
                "import_asset",
                "suggest_rig_points",
                "validate_rig_spec",
                "save_rig",
                "render_rig_animation",
                "queue_quality_analysis",
                "get_quality_report",
            ],
        },
        "comparison": {
            "nativeAuto": {
                "points": len(auto["points"]),
                "bones": len(auto["bones"]),
                "minimumConfidence": min(point["confidence"] for point in auto["points"]),
                "shoulderSpanPx": 7,
                "handSpanPx": 17,
                "kneeConfidence": [0.97, 0.97],
            },
            "provider": {
                "points": len(provider["points"]),
                "bones": len(provider["bones"]),
                "minimumConfidence": min(point["confidence"] for point in provider["points"]),
                "shoulderSpanPx": 36,
                "handSpanPx": 57,
                "kneeConfidence": [0.25, 0.25],
            },
            "finding": "The local template snapped central body axes with uniformly high confidence; vision-based planning matched the visible arm span and honestly downgraded concealed knees.",
        },
        "gateSequence": [
            {"attempt": 1, "result": "PASS", "gate": "validate_rig_spec", "detail": "Provider points, bones, hierarchy, contacts, and coordinates were structurally valid."},
            {"attempt": 1, "result": "FAIL", "gate": "render_rig_animation", "code": "imperceptible_rig_motion", "detail": "0.1–0.3° conservative motion was below the 8° / 1.5 px / 5% native threshold."},
            {"attempt": 2, "result": "FAIL", "gate": "render_rig_animation", "code": "missing_body_motion", "detail": "Moving both arms was insufficient while the biped torso stayed below the meaningful-motion threshold."},
            {"attempt": 3, "result": "PASS", "gate": "render_rig_animation", "detail": "Opposing ±4° arms plus ±4° upper-torso counter-motion generated four frames."},
        ],
        "output": {
            "frameCount": len(frames),
            "fps": 6,
            "frameSha256": current_hashes,
            "uniqueHashes": len(set(current_hashes)),
            "deterministicRerender": current_hashes == DETERMINISM_HASHES,
            "alphaBounds": [alpha_bounds(frame) for frame in frames],
            "visiblePixelCount": [nonzero_pixel_count(frame) for frame in sequence],
            "sourcePaletteReusePercent": [source_palette_reuse(source, frame) for frame in frames],
            "exactRgbaChangedCanvasPercent": frame_differences,
            "exactRgbaMetricBoundary": "Exact per-pixel RGBA mismatch across the full canvas after normalizing fully transparent RGB; this is not the native-v1 duplicate-frame heuristic.",
        },
        "nativeQuality": {
            "overall": quality["overallScore"],
            "characterConsistency": quality["characterConsistencyScore"],
            "motionContinuity": quality["motionContinuityScore"],
            "frameAlignment": quality["frameAlignmentScore"],
            "loopQuality": quality["loopQualityScore"],
            "transparency": quality["transparencyScore"],
            "warnings": quality["checks"],
            "boundary": quality["boundary"],
        },
        "humanReview": {
            "identity": "PASS for a subtle idle; face, palette, clothing, and silhouette remain sourced from the same master pixels.",
            "motion": "CONDITIONAL; readable only as a small idle, while native QA flags frames 2→3 and 3→4 as near-duplicates.",
            "anatomy": "CONDITIONAL; wide trousers conceal knees, so walk/run is not approved from this source master.",
            "adoption": "Use the current asset for idle and UI presentation. Generate or author a motion-ready master with separated limbs before locomotion testing.",
        },
    }
    (ROOT / "benchmark-result.json").write_text(
        json.dumps(result, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(json.dumps(result, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()

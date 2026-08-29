from __future__ import annotations

import hashlib
import json
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parent
WORKSPACE = ROOT / "workspace"
ASSETS = WORKSPACE / "assets" / "characters"
EVIDENCE = ROOT / "evidence"
MASTER = ASSETS / "lin-jian-motion-master-v1.png"
RUN = [ASSETS / f"lin-jian-motion-run-v2_{index:02d}.png" for index in range(1, 5)]
CAST = [ASSETS / f"lin-jian-motion-cast-v1_{index:02d}.png" for index in range(1, 6)]


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def decoded_hash(image: Image.Image) -> str:
    return hashlib.sha256(image.convert("RGBA").tobytes()).hexdigest()


def visible_colors(image: Image.Image) -> set[tuple[int, int, int, int]]:
    return {pixel for pixel in image.convert("RGBA").getdata() if pixel[3] > 0}


def exact_source_color_percent(image: Image.Image, source_colors: set[tuple[int, int, int, int]]) -> float:
    visible = [pixel for pixel in image.convert("RGBA").getdata() if pixel[3] > 0]
    return round(sum(pixel in source_colors for pixel in visible) / len(visible) * 100, 3)


def difference_ratio(first: Image.Image, second: Image.Image) -> float:
    diff = ImageChops.difference(first.convert("RGBA"), second.convert("RGBA"))
    changed = sum(1 for pixel in diff.getdata() if pixel != (0, 0, 0, 0))
    return round(changed / (first.width * first.height) * 100, 3)


def composite_card(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    card = Image.new("RGBA", size, "#07110d")
    checker = ImageDraw.Draw(card)
    for y in range(0, size[1], 16):
        for x in range(0, size[0], 16):
            checker.rectangle(
                (x, y, x + 15, y + 15),
                fill="#10231c" if (x // 16 + y // 16) % 2 == 0 else "#0b1813",
            )
    source = image.convert("RGBA")
    scale = min((size[0] - 12) / source.width, (size[1] - 12) / source.height)
    preview = source.resize((round(source.width * scale), round(source.height * scale)), Image.Resampling.NEAREST)
    card.alpha_composite(preview, ((size[0] - preview.width) // 2, (size[1] - preview.height) // 2))
    return card


def save_gif(paths: list[Path], destination: Path, duration: int) -> None:
    frames = []
    for path in paths:
        card = composite_card(Image.open(path), (256, 384)).convert("RGB")
        frames.append(card)
    frames[0].save(destination, save_all=True, append_images=frames[1:], duration=duration, loop=0, optimize=False)


def main() -> None:
    EVIDENCE.mkdir(parents=True, exist_ok=True)
    master = Image.open(MASTER).convert("RGBA")
    run_images = [Image.open(path).convert("RGBA") for path in RUN]
    cast_images = [Image.open(path).convert("RGBA") for path in CAST]
    master_colors = visible_colors(master)

    cell = (192, 288)
    label_height = 44
    rows = [("MOTION-READY MASTER", [MASTER]), ("RUN V2 · 10 FPS", RUN), ("PULSE CAST V1 · 12 FPS", CAST)]
    width = 32 + max(len(paths) for _, paths in rows) * (cell[0] + 12)
    height = 24 + sum(label_height + cell[1] + 18 for _ in rows)
    sheet = Image.new("RGBA", (width, height), "#06100d")
    draw = ImageDraw.Draw(sheet)
    font = ImageFont.load_default()
    y = 20
    for label, paths in rows:
        draw.text((24, y), label, fill="#8ff0b5", font=font)
        y += label_height
        for index, path in enumerate(paths):
            card = composite_card(Image.open(path), cell)
            x = 24 + index * (cell[0] + 12)
            sheet.alpha_composite(card, (x, y))
            draw.text((x + 6, y + 6), f"FRAME {index + 1:02d}", fill="#e8a75b", font=font)
        y += cell[1] + 18
    sheet.save(EVIDENCE / "lin-jian-multi-action-contact-sheet.png")
    save_gif(RUN, EVIDENCE / "lin-jian-run-v2.gif", 100)
    save_gif(CAST, EVIDENCE / "lin-jian-cast-v1.gif", 84)

    all_frames = RUN + CAST
    exact_color_percentages = [exact_source_color_percent(Image.open(path), master_colors) for path in all_frames]
    result = {
        "schema": "project009-multi-action-result-v1",
        "verdict": "CONDITIONAL",
        "master": {
            "file": str(MASTER.relative_to(ROOT)),
            "sha256": sha256(MASTER),
            "size": list(master.size),
            "alphaExtrema": list(master.getchannel("A").getextrema()),
        },
        "actions": {
            "run-v2": {
                "fps": 10,
                "looping": True,
                "files": [str(path.relative_to(ROOT)) for path in RUN],
                "sha256": [sha256(path) for path in RUN],
                "decodedHashes": [decoded_hash(image) for image in run_images],
                "adjacentDifferencePercent": [difference_ratio(run_images[index], run_images[(index + 1) % len(run_images)]) for index in range(len(run_images))],
            },
            "pulse-cast-v1": {
                "fps": 12,
                "looping": False,
                "files": [str(path.relative_to(ROOT)) for path in CAST],
                "sha256": [sha256(path) for path in CAST],
                "decodedHashes": [decoded_hash(image) for image in cast_images],
                "adjacentDifferencePercent": [difference_ratio(cast_images[index], cast_images[index + 1]) for index in range(len(cast_images) - 1)],
            },
        },
        "checks": {
            "allFramesRGBA": all(Image.open(path).mode == "RGBA" for path in all_frames),
            "allFrames256x384": all(Image.open(path).size == (256, 384) for path in all_frames),
            "allFramesUniqueByFileHash": len({sha256(path) for path in all_frames}) == len(all_frames),
            "minimumExactSourceRgbaPercent": min(exact_color_percentages),
            "edgeResamplingIsBounded": min(exact_color_percentages) >= 93,
            "runLoopHasFourUniqueFrames": len({decoded_hash(image) for image in run_images}) == 4,
            "castHasFiveUniqueFrames": len({decoded_hash(image) for image in cast_images}) == 5,
        },
        "manualReview": {
            "approvedFor": ["small-scale companion preview", "in-game capability demonstration", "pulse-cast state switching"],
            "notApprovedFor": ["production locomotion", "anatomically correct knee articulation", "identity-critical close-up animation"],
            "reason": "The generated master separates limbs and removes the original occlusion blocker, but the repository helper is a rigVersion 1 region renderer; the run cycle still rotates broad trouser regions rather than a verified hip-knee-ankle chain. Rotated antialiased edges also introduce a bounded set of blended RGBA values, so this experiment does not claim 100% palette identity.",
        },
        "provenance": {
            "inputPreparation": "built-in image edit followed by deterministic alpha cleanup and contain resize",
            "frameRenderer": "Sprite Studio bundled sprite_rig.py, copied unchanged except two Windows read-only fsync guards in this experiment workspace",
            "gameRuntime": "Project 009 Canvas code loads the exported PNG sequences and selects states; it does not generate frame pixels",
        },
    }
    (ROOT / "multi-action-result.json").write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(result, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()

from __future__ import annotations

import hashlib
import json
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parent
INPUT = ROOT / "input" / "lin-jian-motion-master-generated-v2.png"
WORKSPACE = ROOT / "workspace"
OUTPUT = WORKSPACE / "assets" / "characters" / "lin-jian-motion-master-v1.png"
REPORT = ROOT / "motion-master-audit.json"
CANVAS = (256, 384)
PADDING = 12


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def main() -> None:
    source = Image.open(INPUT).convert("RGBA")
    alpha = source.getchannel("A")
    hard_alpha = alpha.point(lambda value: 0 if value < 32 else value)
    source.putalpha(hard_alpha)

    visible = hard_alpha.point(lambda value: 255 if value >= 128 else 0)
    bbox = visible.getbbox()
    if bbox is None:
        raise SystemExit("motion master has no visible subject")

    crop = source.crop(bbox)
    available = (CANVAS[0] - PADDING * 2, CANVAS[1] - PADDING * 2)
    scale = min(available[0] / crop.width, available[1] / crop.height)
    resized_size = (
        max(1, round(crop.width * scale)),
        max(1, round(crop.height * scale)),
    )
    resized = crop.resize(resized_size, Image.Resampling.LANCZOS)
    resized_alpha = resized.getchannel("A").point(lambda value: 0 if value < 8 else value)
    resized.putalpha(resized_alpha)

    canvas = Image.new("RGBA", CANVAS, (0, 0, 0, 0))
    offset = ((CANVAS[0] - resized.width) // 2, (CANVAS[1] - resized.height) // 2)
    canvas.alpha_composite(resized, offset)

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(OUTPUT, optimize=False)
    output_alpha = canvas.getchannel("A")
    report = {
        "schema": "project009-motion-master-audit-v1",
        "source": str(INPUT.relative_to(ROOT)),
        "sourceMode": "generated identity-preserving edit followed by background extraction",
        "sourceSha256": sha256(INPUT),
        "sourceSize": list(source.size),
        "sourceAlphaExtrema": list(alpha.getextrema()),
        "cropBoxAtAlpha128": list(bbox),
        "output": str(OUTPUT.relative_to(ROOT)),
        "outputSha256": sha256(OUTPUT),
        "outputSize": list(canvas.size),
        "outputVisibleBounds": list(output_alpha.getbbox() or ()),
        "outputAlphaExtrema": list(output_alpha.getextrema()),
        "preparation": [
            "reject generated-v1 because it was RGB checkerboard, not transparent",
            "accept generated-v2 because it contains a real RGBA channel",
            "remove only alpha values below 32 before crop",
            "crop at alpha >= 128",
            "Lanczos contain-resize into a 256x384 transparent canvas",
            "clear post-resize alpha values below 8",
        ],
        "boundary": "Image generation prepared the master. Sprite Studio is responsible only for deterministic rig transforms and rendered action frames that consume this master.",
    }
    REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()

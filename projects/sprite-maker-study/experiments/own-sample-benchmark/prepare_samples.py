from __future__ import annotations

import hashlib
import json
from pathlib import Path

from PIL import Image


BENCHMARK_ROOT = Path(__file__).resolve().parent
REPOSITORY_ROOT = Path(__file__).resolve().parents[4]
WORKSPACE_ROOT = BENCHMARK_ROOT / "workspace"
INPUT_ROOT = WORKSPACE_ROOT / "assets" / "characters"
CANVAS = (160, 224)

SAMPLES = [
    {
        "id": "project003-anchor",
        "source": REPOSITORY_ROOT
        / "docs/assets/project-003-sample/lin-jian-anchor-v1-r1.png",
        "expectedFit": "high",
        "manualObservation": "正面全身、透明背景、双臂与鞋可见；宽腿裤仍会降低膝部可辨性。",
    },
    {
        "id": "project003-arms-crossed",
        "source": REPOSITORY_ROOT
        / "docs/assets/project-003-style-matrix/lin-jian-ip05-full-body-sticker-v1-s3-r2.png",
        "expectedFit": "conditional",
        "manualObservation": "透明全身，但双臂交叉且被笔记本遮挡，腿部被宽裤合并；适合静态资产，不适合直接做完整人体 Rig。",
    },
    {
        "id": "project001-scene",
        "source": REPOSITORY_ROOT / "projects/outrun-the-level/assets/menu-check.png",
        "expectedFit": "reject",
        "manualObservation": "完整游戏截图而非独立透明角色；应在进入 Rig 前被输入门禁拒绝。",
    },
]


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def alpha_metrics(image: Image.Image) -> dict[str, object]:
    rgba = image.convert("RGBA")
    alpha = rgba.getchannel("A")
    histogram = alpha.histogram()
    pixel_count = image.width * image.height
    alpha_sum = sum(index * count for index, count in enumerate(histogram))
    return {
        "alphaMin": next(index for index, count in enumerate(histogram) if count),
        "alphaMax": next(index for index in range(255, -1, -1) if histogram[index]),
        "zeroAlphaFraction": round(histogram[0] / pixel_count, 6),
        "nonOpaqueFraction": round(sum(histogram[:255]) / pixel_count, 6),
        "meanAlpha": round(alpha_sum / pixel_count, 3),
        "opaqueBounds": alpha.getbbox(),
    }


def normalize(source: Path, destination: Path) -> dict[str, object]:
    with Image.open(source) as opened:
        original = opened.convert("RGBA")
        original_metrics = alpha_metrics(original)
        fitted = original.copy()
        fitted.thumbnail(CANVAS, Image.Resampling.LANCZOS)
        canvas = Image.new("RGBA", CANVAS, (0, 0, 0, 0))
        x = (CANVAS[0] - fitted.width) // 2
        y = CANVAS[1] - fitted.height
        canvas.alpha_composite(fitted, (x, y))
        destination.parent.mkdir(parents=True, exist_ok=True)
        canvas.save(destination, format="PNG", optimize=True)
        return {
            "originalSize": [original.width, original.height],
            "originalMode": opened.mode,
            "originalAlpha": original_metrics,
            "normalizedSize": list(CANVAS),
            "normalizedAlpha": alpha_metrics(canvas),
        }


def main() -> None:
    records = []
    for sample in SAMPLES:
        source = sample["source"]
        if not source.exists():
            raise FileNotFoundError(source)
        destination = INPUT_ROOT / f"{sample['id']}.png"
        metrics = normalize(source, destination)
        records.append(
            {
                "id": sample["id"],
                "expectedFit": sample["expectedFit"],
                "manualObservation": sample["manualObservation"],
                "source": str(source.relative_to(REPOSITORY_ROOT)).replace("\\", "/"),
                "sourceSha256": sha256(source),
                "normalized": str(destination.relative_to(BENCHMARK_ROOT)).replace("\\", "/"),
                "normalizedSha256": sha256(destination),
                **metrics,
            }
        )

    report = {
        "benchmark": "Project 009 own-sample input preflight",
        "canvas": list(CANVAS),
        "normalization": "contain on transparent canvas; one Lanczos resize; no generative edits",
        "samples": records,
    }
    report_path = BENCHMARK_ROOT / "input-audit.json"
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()

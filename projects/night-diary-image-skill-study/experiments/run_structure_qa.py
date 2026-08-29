"""Deterministic, dependency-light structure QA for Project 007.

The script measures the five accepted Project 007 before/after pairs. It uses
only NumPy and Pillow from the bundled workspace runtime; it does not call a
model, OCR service, or remote API.
"""

from __future__ import annotations

import hashlib
import json
from pathlib import Path

import numpy as np
from PIL import Image


PROJECT_ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PATH = PROJECT_ROOT / "experiments" / "structure-qa-report-v2.json"
ANALYSIS_MAX_DIMENSION = 640
RANSAC_SEED = 7007

PAIRS = (
    {
        "id": "courtyard-night-diary",
        "label": "城市旧住宅院落",
        "before": "assets/project-experiments/courtyard-before.png",
        "after": "assets/project-experiments/courtyard-after.png",
    },
    {
        "id": "coast-night-diary",
        "label": "海岸地平线",
        "before": "assets/project-experiments/coast-before.png",
        "after": "assets/project-experiments/coast-after.png",
    },
    {
        "id": "rain-window-chinese",
        "label": "雨夜车窗 · 中文",
        "before": "assets/project-experiments/rain-window-before.png",
        "after": "assets/project-experiments/rain-window-after.png",
    },
    {
        "id": "forest-stop-chinese",
        "label": "森林站台 · 中文",
        "before": "assets/project-experiments/forest-stop-before.png",
        "after": "assets/project-experiments/forest-stop-after-v2.png",
    },
    {
        "id": "canal-chinese",
        "label": "江南水巷 · 中文",
        "before": "assets/project-experiments/canal-before.png",
        "after": "assets/project-experiments/canal-after.png",
    },
)

THRESHOLDS = {
    "dimensionExact": True,
    "minLandmarkInliers": 12,
    "minLandmarkInlierRatio": 0.25,
    "minTolerantEdgeF1": 0.25,
    "maxMeanCornerDriftPercent": 2.5,
}


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def load_rgb(path: Path) -> tuple[np.ndarray, tuple[int, int]]:
    with Image.open(path) as image:
        image = image.convert("RGB")
        size = image.size
        return np.asarray(image, dtype=np.float32) / 255.0, size


def resize_for_analysis(rgb: np.ndarray) -> tuple[np.ndarray, float]:
    height, width = rgb.shape[:2]
    scale = min(1.0, ANALYSIS_MAX_DIMENSION / max(width, height))
    target = (max(1, round(width * scale)), max(1, round(height * scale)))
    image = Image.fromarray(np.uint8(np.clip(rgb * 255.0, 0, 255)))
    resized = image.resize(target, Image.Resampling.LANCZOS)
    return np.asarray(resized, dtype=np.float32) / 255.0, scale


def grayscale(rgb: np.ndarray) -> np.ndarray:
    return rgb[..., 0] * 0.2126 + rgb[..., 1] * 0.7152 + rgb[..., 2] * 0.0722


def gradients(gray: np.ndarray) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    padded = np.pad(gray, 1, mode="reflect")
    gx = (
        padded[:-2, 2:]
        + 2.0 * padded[1:-1, 2:]
        + padded[2:, 2:]
        - padded[:-2, :-2]
        - 2.0 * padded[1:-1, :-2]
        - padded[2:, :-2]
    )
    gy = (
        padded[2:, :-2]
        + 2.0 * padded[2:, 1:-1]
        + padded[2:, 2:]
        - padded[:-2, :-2]
        - 2.0 * padded[:-2, 1:-1]
        - padded[:-2, 2:]
    )
    magnitude = np.hypot(gx, gy)
    return gx, gy, magnitude


def box_mean(values: np.ndarray, radius: int) -> np.ndarray:
    padded = np.pad(values, radius, mode="reflect")
    total = np.zeros_like(values, dtype=np.float32)
    width = 2 * radius + 1
    for y_offset in range(width):
        for x_offset in range(width):
            total += padded[
                y_offset : y_offset + values.shape[0],
                x_offset : x_offset + values.shape[1],
            ]
    return total / float(width * width)


def detect_landmarks(gray: np.ndarray, limit: int = 260) -> tuple[np.ndarray, np.ndarray]:
    gx, gy, magnitude = gradients(gray)
    xx = box_mean(gx * gx, 2)
    yy = box_mean(gy * gy, 2)
    xy = box_mean(gx * gy, 2)
    response = xx * yy - xy * xy - 0.04 * (xx + yy) ** 2
    border = 13
    response[:border, :] = 0
    response[-border:, :] = 0
    response[:, :border] = 0
    response[:, -border:] = 0

    positive = response[response > 0]
    if positive.size == 0:
        return np.empty((0, 2), dtype=np.float32), np.empty((0, 225), dtype=np.float32)
    floor = float(np.percentile(positive, 82))
    order = np.argsort(response.ravel())[::-1]
    points: list[tuple[float, float]] = []
    min_distance_sq = 10 * 10
    for flat_index in order:
        score = float(response.ravel()[flat_index])
        if score < floor or len(points) >= limit:
            break
        y, x = np.unravel_index(flat_index, response.shape)
        if any((x - px) ** 2 + (y - py) ** 2 < min_distance_sq for px, py in points):
            continue
        points.append((float(x), float(y)))

    normalized_magnitude = magnitude / max(float(np.percentile(magnitude, 99)), 1e-6)
    normalized_magnitude = np.clip(normalized_magnitude, 0.0, 1.0)
    descriptor_source = 0.72 * normalized_magnitude + 0.28 * gray
    patch_radius = 7
    descriptors = []
    valid_points = []
    for x, y in points:
        xi, yi = int(round(x)), int(round(y))
        patch = descriptor_source[
            yi - patch_radius : yi + patch_radius + 1,
            xi - patch_radius : xi + patch_radius + 1,
        ].astype(np.float32)
        vector = patch.ravel()
        vector -= float(vector.mean())
        norm = float(np.linalg.norm(vector))
        if norm <= 1e-6:
            continue
        descriptors.append(vector / norm)
        valid_points.append((x, y))

    return np.asarray(valid_points, dtype=np.float32), np.asarray(descriptors, dtype=np.float32)


def match_landmarks(
    before_points: np.ndarray,
    before_descriptors: np.ndarray,
    after_points: np.ndarray,
    after_descriptors: np.ndarray,
) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    if not len(before_points) or not len(after_points):
        empty = np.empty((0, 2), dtype=np.float32)
        return empty, empty, np.empty((0,), dtype=np.float32)

    similarity = before_descriptors @ after_descriptors.T
    delta = before_points[:, None, :] - after_points[None, :, :]
    distance = np.linalg.norm(delta, axis=2)
    similarity = np.where(distance <= 42.0, similarity, -2.0)

    best_after = np.argmax(similarity, axis=1)
    best_before = np.argmax(similarity, axis=0)
    matches: list[tuple[int, int, float]] = []
    for before_index, after_index in enumerate(best_after):
        score = float(similarity[before_index, after_index])
        if score < 0.34 or best_before[after_index] != before_index:
            continue
        row = similarity[before_index]
        viable = row[row > -1.5]
        if viable.size > 1:
            top_two = np.partition(viable, -2)[-2:]
            best, second = float(top_two.max()), float(top_two.min())
            if (1.0 - best) >= 0.94 * max(1.0 - second, 1e-6):
                continue
        matches.append((before_index, int(after_index), score))

    if not matches:
        empty = np.empty((0, 2), dtype=np.float32)
        return empty, empty, np.empty((0,), dtype=np.float32)
    return (
        np.asarray([before_points[item[0]] for item in matches], dtype=np.float32),
        np.asarray([after_points[item[1]] for item in matches], dtype=np.float32),
        np.asarray([item[2] for item in matches], dtype=np.float32),
    )


def fit_affine(source: np.ndarray, target: np.ndarray) -> np.ndarray:
    design = np.column_stack([source, np.ones(len(source), dtype=np.float32)])
    coefficients, _, _, _ = np.linalg.lstsq(design, target, rcond=None)
    return coefficients.T


def affine_residuals(matrix: np.ndarray, source: np.ndarray, target: np.ndarray) -> np.ndarray:
    predicted = source @ matrix[:, :2].T + matrix[:, 2]
    return np.linalg.norm(predicted - target, axis=1)


def ransac_affine(source: np.ndarray, target: np.ndarray) -> tuple[np.ndarray | None, np.ndarray]:
    if len(source) < 3:
        return None, np.zeros(len(source), dtype=bool)
    rng = np.random.default_rng(RANSAC_SEED)
    best_mask = np.zeros(len(source), dtype=bool)
    best_median = float("inf")
    for _ in range(700):
        selection = rng.choice(len(source), 3, replace=False)
        sample = source[selection]
        first = sample[1] - sample[0]
        second = sample[2] - sample[0]
        area = abs(float(first[0] * second[1] - first[1] * second[0]))
        if area < 18.0:
            continue
        matrix = fit_affine(sample, target[selection])
        residuals = affine_residuals(matrix, source, target)
        mask = residuals <= 4.0
        median = float(np.median(residuals[mask])) if mask.any() else float("inf")
        if int(mask.sum()) > int(best_mask.sum()) or (
            int(mask.sum()) == int(best_mask.sum()) and median < best_median
        ):
            best_mask = mask
            best_median = median
    if int(best_mask.sum()) < 3:
        return None, best_mask
    matrix = fit_affine(source[best_mask], target[best_mask])
    residuals = affine_residuals(matrix, source, target)
    refined = residuals <= 4.0
    if int(refined.sum()) >= 3:
        matrix = fit_affine(source[refined], target[refined])
        best_mask = refined
    return matrix, best_mask


def warp_after_to_before(gray_after: np.ndarray, matrix: np.ndarray, size: tuple[int, int]) -> np.ndarray:
    coefficients = tuple(float(value) for value in matrix.ravel())
    image = Image.fromarray(np.uint8(np.clip(gray_after * 255.0, 0, 255)))
    aligned = image.transform(
        size,
        Image.Transform.AFFINE,
        coefficients,
        resample=Image.Resampling.BILINEAR,
        fillcolor=0,
    )
    return np.asarray(aligned, dtype=np.float32) / 255.0


def binary_dilate(mask: np.ndarray, radius: int) -> np.ndarray:
    padded = np.pad(mask, radius, mode="constant")
    result = np.zeros_like(mask, dtype=bool)
    width = 2 * radius + 1
    for y_offset in range(width):
        for x_offset in range(width):
            result |= padded[
                y_offset : y_offset + mask.shape[0],
                x_offset : x_offset + mask.shape[1],
            ]
    return result


def edge_mask(gray: np.ndarray) -> np.ndarray:
    _, _, magnitude = gradients(gray)
    threshold = float(np.percentile(magnitude, 82))
    mask = magnitude >= max(threshold, 1e-5)
    mask[:4, :] = False
    mask[-4:, :] = False
    mask[:, :4] = False
    mask[:, -4:] = False
    return mask


def edge_overlap(before: np.ndarray, aligned_after: np.ndarray) -> dict[str, float]:
    before_edges = edge_mask(before)
    after_edges = edge_mask(aligned_after)
    tolerance = 2
    before_tolerant = binary_dilate(before_edges, tolerance)
    after_tolerant = binary_dilate(after_edges, tolerance)
    precision = float((after_edges & before_tolerant).sum() / max(int(after_edges.sum()), 1))
    recall = float((before_edges & after_tolerant).sum() / max(int(before_edges.sum()), 1))
    f1 = 2.0 * precision * recall / max(precision + recall, 1e-9)
    return {"precision": precision, "recall": recall, "f1": f1}


def appearance_metrics(rgb: np.ndarray) -> tuple[float, float]:
    luminance = float(grayscale(rgb).mean())
    maximum = rgb.max(axis=2)
    minimum = rgb.min(axis=2)
    saturation = np.zeros_like(maximum)
    np.divide(maximum - minimum, maximum, out=saturation, where=maximum > 1e-6)
    return luminance, float(saturation.mean())


def rounded(value: float, digits: int = 4) -> float:
    return round(float(value), digits)


def analyze_pair(pair: dict[str, str]) -> dict[str, object]:
    before_path = PROJECT_ROOT / pair["before"]
    after_path = PROJECT_ROOT / pair["after"]
    before_rgb, before_size = load_rgb(before_path)
    after_rgb, after_size = load_rgb(after_path)
    before_small, scale = resize_for_analysis(before_rgb)
    after_small, after_scale = resize_for_analysis(after_rgb)
    if before_small.shape != after_small.shape or abs(scale - after_scale) > 1e-9:
        raise ValueError(f"Analysis canvases differ for {pair['id']}")

    before_gray = grayscale(before_small)
    after_gray = grayscale(after_small)
    before_points, before_descriptors = detect_landmarks(before_gray)
    after_points, after_descriptors = detect_landmarks(after_gray)
    source, target, similarities = match_landmarks(
        before_points,
        before_descriptors,
        after_points,
        after_descriptors,
    )
    affine, inlier_mask = ransac_affine(source, target)
    if affine is None:
        raise RuntimeError(f"Could not establish affine consensus for {pair['id']}")

    residuals = affine_residuals(affine, source, target)
    height, width = before_gray.shape
    aligned_after = warp_after_to_before(after_gray, affine, (width, height))
    edges = edge_overlap(before_gray, aligned_after)

    corners = np.asarray(
        [[0.0, 0.0], [width - 1.0, 0.0], [width - 1.0, height - 1.0], [0.0, height - 1.0]],
        dtype=np.float32,
    )
    transformed_corners = corners @ affine[:, :2].T + affine[:, 2]
    corner_offsets = np.linalg.norm(transformed_corners - corners, axis=1)
    diagonal = float(np.hypot(width, height))
    mean_corner_drift_percent = float(corner_offsets.mean() / diagonal * 100.0)

    before_luminance, before_saturation = appearance_metrics(before_rgb)
    after_luminance, after_saturation = appearance_metrics(after_rgb)
    inlier_count = int(inlier_mask.sum())
    match_count = int(len(source))
    inlier_ratio = inlier_count / max(match_count, 1)

    acceptance = {
        "dimensionLock": before_size == after_size,
        "landmarkConsensus": inlier_count >= THRESHOLDS["minLandmarkInliers"]
        and inlier_ratio >= THRESHOLDS["minLandmarkInlierRatio"],
        "edgeRetention": edges["f1"] >= THRESHOLDS["minTolerantEdgeF1"],
        "cornerDrift": mean_corner_drift_percent <= THRESHOLDS["maxMeanCornerDriftPercent"],
    }
    acceptance["baselinePass"] = all(acceptance.values())

    return {
        "id": pair["id"],
        "label": pair["label"],
        "inputs": {
            "before": {
                "file": pair["before"],
                "sha256": sha256(before_path),
                "width": before_size[0],
                "height": before_size[1],
            },
            "after": {
                "file": pair["after"],
                "sha256": sha256(after_path),
                "width": after_size[0],
                "height": after_size[1],
            },
        },
        "analysis": {
            "width": width,
            "height": height,
            "scaleFromOriginal": rounded(scale, 6),
        },
        "dimensions": {
            "exact": before_size == after_size,
            "aspectRatioBefore": rounded(before_size[0] / before_size[1], 6),
            "aspectRatioAfter": rounded(after_size[0] / after_size[1], 6),
        },
        "landmarks": {
            "detectedBefore": int(len(before_points)),
            "detectedAfter": int(len(after_points)),
            "mutualCandidateMatches": match_count,
            "ransacInliers": inlier_count,
            "inlierRatio": rounded(inlier_ratio),
            "medianInlierResidualAnalysisPx": rounded(float(np.median(residuals[inlier_mask]))),
            "meanInlierSimilarity": rounded(float(similarities[inlier_mask].mean())),
        },
        "alignment": {
            "affineBeforeToAfter": [[rounded(value, 6) for value in row] for row in affine],
            "meanCornerDriftPercent": rounded(mean_corner_drift_percent),
        },
        "edges": {
            "toleranceAnalysisPx": 2,
            "approxToleranceOriginalPx": rounded(2.0 / scale, 2),
            "precision": rounded(edges["precision"]),
            "recall": rounded(edges["recall"]),
            "f1": rounded(edges["f1"]),
        },
        "appearance": {
            "meanLuminanceBefore": rounded(before_luminance),
            "meanLuminanceAfter": rounded(after_luminance),
            "meanLuminanceDelta": rounded(after_luminance - before_luminance),
            "meanSaturationBefore": rounded(before_saturation),
            "meanSaturationAfter": rounded(after_saturation),
            "meanSaturationDelta": rounded(after_saturation - before_saturation),
        },
        "acceptance": acceptance,
    }


def main() -> None:
    report = {
        "schemaVersion": "project-007-structure-qa/v2",
        "generatedAt": "2026-08-29T00:00:00+08:00",
        "method": {
            "runtime": "Python + NumPy + Pillow; no OpenCV, OCR, model, or network call",
            "analysisMaxDimension": ANALYSIS_MAX_DIMENSION,
            "landmarks": "Harris-style corners with local gradient/luminance descriptors and mutual nearest matching",
            "alignment": "Deterministic affine RANSAC with a fixed seed and a 4 px analysis-space inlier radius",
            "edgeMetric": "Gradient edges after affine alignment; precision/recall/F1 with 2 px analysis-space dilation tolerance",
            "appearance": "Mean relative luminance and HSV-style saturation; descriptive only",
            "thresholds": THRESHOLDS,
        },
        "pairs": [analyze_pair(pair) for pair in PAIRS],
        "claimsBoundary": [
            "This is a five-pair Project 007 smoke baseline, not a cross-model benchmark or success rate.",
            "A passing affine/edge baseline does not prove pixel-level lock, identity preservation, or local-only editing.",
            "Appearance deltas describe visible style change and are not quality thresholds.",
            "Text accuracy and person counting remain outside this script; those require OCR or task-specific detectors.",
        ],
    }
    OUTPUT_PATH.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    for result in report["pairs"]:
        print(
            f"{result['id']}: inliers={result['landmarks']['ransacInliers']}/"
            f"{result['landmarks']['mutualCandidateMatches']} "
            f"edge_f1={result['edges']['f1']:.4f} "
            f"corner_drift={result['alignment']['meanCornerDriftPercent']:.4f}% "
            f"pass={result['acceptance']['baselinePass']}"
        )
    print(f"Wrote {OUTPUT_PATH.relative_to(PROJECT_ROOT)}")


if __name__ == "__main__":
    main()

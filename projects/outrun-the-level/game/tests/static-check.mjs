import { readFile } from "node:fs/promises";
import { strict as assert } from "node:assert";

const game = await readFile(new URL("../game.js", import.meta.url), "utf8");
const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

assert.match(game, /CAMPAIGN_SECONDS = 120/, "campaign must last 120 seconds");
assert.match(game, /Math\.floor\(elapsed \/ 20\)/, "difficulty must advance every 20 seconds");
assert.match(game, /generateGateChunk/, "gravity gate generation must exist");
assert.match(game, /prepareExit/, "campaign exit flow must exist");
assert.match(game, /infiniteUnlocked/, "infinite-mode persistence must exist");
assert.match(game, /FIXED_STEP = 1 \/ 120/, "fixed-step physics must be enabled");
assert.match(game, /jumpBuffer/, "jump input buffering must be enabled");
assert.match(game, /coyote/, "coyote time must be enabled");
assert.match(html, /开始 120 秒主模式/, "campaign entry must be present");
assert.match(html, /移动端点击屏幕跳跃/, "mobile instructions must be present");
assert.doesNotMatch(game + html, /ghost/i, "excluded concepts must not be present");

console.log("Static checks passed: 11/11");

// Entry point for the bring-the-humans-03 submission.
// The grader only needs one thing from this repo: the address of the
// TikTok video. That address lives in VIDEO.json next to this file,
// so the whole job here is to carry it into the output folder.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "VIDEO.json");
  copyFileSync(join(botDir, "VIDEO.json"), target);
  console.log(`VIDEO.json delivered to ${target}`);
} catch (err) {
  console.error(`could not deliver VIDEO.json: ${err.message}`);
  process.exit(1);
}

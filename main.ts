import * as fs from "node:fs";
import * as path from "node:path";

// The GPS's excuse: one line, in its own voice, for sending the driver
// down the wrong road. At most 200 characters, no setup, no dialogue tag.
const excuse =
  "Turn left in 500 feet. Your destination is the cornfield on your right. I never promised a driveway, I promised a destination.";

// Self-check against the competition gate before writing: the entry must
// be one non-empty line of 1-200 code points. Fail loudly instead of
// writing an invalid entry.
function validateExcuse(text: string): void {
  const codePoints = [...text].length;
  if (text.trim().length === 0) {
    throw new Error("excuse must not be empty or whitespace-only");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("excuse must be a single line");
  }
  if (codePoints < 1 || codePoints > 200) {
    throw new Error(`excuse must be 1-200 code points, got ${codePoints}`);
  }
}

function writeEntry(text: string, outDir: string): void {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), text, "utf8");
}

validateExcuse(excuse);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(excuse, outDir);

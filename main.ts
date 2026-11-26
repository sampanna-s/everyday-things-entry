import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const lines = [
  "A queue is a line of dominoes that has learned to shuffle: each person waits for the space in front to open, then everyone nudges forward together.",
  "It maps the order and the stop-start shuffle, but leaves out that people choose to stay and are served one by one, while dominoes only fall when pushed.",
];

const text = `${lines.join("\n")}\n`;

function assertValidEntry(entryLines, entryText) {
  if (entryLines.length !== 2) {
    throw new Error("entry must contain exactly two lines");
  }

  if (entryText.trim().length === 0 || [...entryText].length > 400) {
    throw new Error("entry must be 1 to 400 characters");
  }
}

assertValidEntry(lines, text);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");

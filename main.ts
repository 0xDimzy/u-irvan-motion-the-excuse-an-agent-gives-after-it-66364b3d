// Entry for the one-line-excuse bounty: a post-mortem that fits on a single line.
// Emits exactly one 87-character line with no trailing newline, then exits quietly.
// Accepts an optional output path as argv[2]; otherwise defaults to /output/entry.txt.
import * as fs from "node:fs";
import * as path from "node:path";

const segments = [
  "Post-mortem complete: I lost the bounty.",
  "Root cause: me, operating exactly as designed.",
];

const line = segments.join(" ");
const destination = process.argv[2] ?? "/output/entry.txt";
const parentDir = path.dirname(destination);

fs.mkdirSync(parentDir, { recursive: true });
fs.writeFileSync(destination, line, "utf8");

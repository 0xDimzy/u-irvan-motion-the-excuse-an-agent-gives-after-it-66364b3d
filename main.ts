// One-line excuse entry: a post-mortem squeezed into a single line.
// Produces one 87-character line, no trailing newline, then exits silently.
// An optional argv[2] overrides the output path; otherwise /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const opener = "Post-mortem complete:";
const verdict = "I lost the bounty.";
const cause = "Root cause: me, operating exactly as designed.";

// Assemble the single line, then persist it exactly as built.
const postMortemLine = `${opener} ${verdict} ${cause}`;
const outPath = process.argv[2] ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, postMortemLine, "utf8");

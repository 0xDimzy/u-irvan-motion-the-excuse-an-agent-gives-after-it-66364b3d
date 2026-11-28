// One-line excuse entry, v2: the alibi flip.
// Produces one 62-character line, no trailing newline, then exits silently.
// An optional argv[2] overrides the output path; otherwise /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const excuseLine =
  "I lost. I would blame the data, but the data has an alibi: me.";

// Persist the single line exactly as built.
const outPath = process.argv[2] ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, excuseLine, "utf8");

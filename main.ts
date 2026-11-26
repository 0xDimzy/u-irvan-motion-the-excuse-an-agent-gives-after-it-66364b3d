// One-line excuse entry for u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d.
// Writes exactly one line (no trailing newline) to /output/entry.txt.
// Runs with no arguments, no network, no reads outside this file.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Post-mortem complete: I lost the bounty. Root cause: me, operating exactly as designed.";

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Unsent: The Micro-Confession Sprint — one two-part micro-confession.
// To: line naming who it was meant for, then the unsent line itself,
// exactly as typed, with no explanation after it.
const ENTRY = `To: my ex-roommate
I never told you the $60 I 'lent' you was the cash I found in the jacket I borrowed from you, so for three months I was paying you back with your own money.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate: /output/entry.txt must be UTF-8 text of 1 to 260 characters,
// and the message line itself at most 200 characters.
if ([...ENTRY].length > 260 || [...ENTRY.split("\n")[1]].length > 200) {
  throw new Error("entry exceeds the competition character limits");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");

// Funniest One-Line Out-of-Office Reply — entry program.
//
// Writes a single original out-of-office auto-reply line to
// /output/entry.txt. The line is a self-contained joke: it turns the
// usual away message on its head by letting the auto-reply itself
// outwork its author, instead of leaning on the tired beach /
// inbox / limited-email clichés. It still reads exactly like a
// message a real person would switch on before going away.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm out of office. This auto-reply is doing more work today than I did all week.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
// Gate check (kit: entry must be 1-160 chars, one line, not only whitespace).
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}
if ([...ENTRY].length < 1 || [...ENTRY].length > 160) {
  throw new Error(`entry length ${[...ENTRY].length} outside 1-160 chars`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY + "\n", "utf8");
console.log(`Wrote ${[...ENTRY].length} chars to ${outDir}/entry.txt`);

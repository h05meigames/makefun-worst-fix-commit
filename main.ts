// Worst Fix Ever: Funniest Commit Message
// Entry: a single commit-message line for a bug fix that made everything worse.
// The program prints the line to stdout and also writes it to /output/entry.txt
// (the path the make.fun program/v1 harness reads), so both always agree.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: removed the load-bearing typo; the app now spells correctly and does nothing";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
} catch {
  // /output may not exist outside the grading sandbox; stdout is the fallback.
}

// process.stdout.write (not console.log) so stdout is byte-identical to entry.txt.
process.stdout.write(ENTRY + "\n");

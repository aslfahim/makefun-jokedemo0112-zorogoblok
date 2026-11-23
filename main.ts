// Entry for make.fun bounty the-joke-about-the-demo-20261123-0112.
// Writes one one-line joke about working beside AI coding agents.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My agent told the whole room the bug was impossible — while the crash played out on the projector behind it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

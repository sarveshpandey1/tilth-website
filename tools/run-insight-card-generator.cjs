#!/usr/bin/env node
/* ------------------------------------------------------------------
 * Tilth - launcher for the Insights cover generator.
 *
 * Its only job is to find a working Python 3 and hand over to
 * generate-insight-cards.py. No generation logic lives here; the Python
 * file remains the single authoritative generator.
 *
 * Why a launcher rather than putting "python generate-insight-cards.py"
 * straight in package.json: the interpreter is not called the same thing
 * everywhere. Linux and macOS usually expose python3 and often have no
 * python at all, while Windows installs expose python and py. An npm script
 * using shell fallback (`python3 ... || python ...`) is not portable either,
 * because npm runs scripts through cmd.exe on Windows, where that syntax and
 * these semantics differ.
 *
 * It also probes rather than trusting that the command merely resolves.
 * Windows ships a "python3" App Execution Alias that exists on PATH, prints a
 * Microsoft Store message and exits 49 without running anything. A launcher
 * that only checked whether the command was found would hand the build to
 * that stub and report a confusing failure, so each candidate must actually
 * execute and print its major version before it is accepted.
 * ------------------------------------------------------------------ */
"use strict";

const { spawnSync } = require("node:child_process");
const path = require("node:path");

const SCRIPT = path.join(__dirname, "generate-insight-cards.py");
// python3 first: on Linux/macOS it is the correct name, and on Windows the
// Store stub is rejected by the probe below rather than being used.
const CANDIDATES = process.env.PYTHON
  ? [process.env.PYTHON]
  : ["python3", "python", "py"];

function works(exe) {
  const probe = spawnSync(exe, ["-c", "import sys; print(sys.version_info[0])"], {
    encoding: "utf8",
    windowsHide: true,
  });
  return probe.status === 0 && String(probe.stdout).trim() === "3";
}

const found = CANDIDATES.find(works);

if (!found) {
  console.error(
    [
      "",
      "Could not find a working Python 3 interpreter.",
      "",
      "Tried: " + CANDIDATES.join(", "),
      "",
      "The Insights cover generator needs Python 3 plus the packages in",
      "tools/requirements-insight-cards.txt:",
      "",
      "    python3 -m pip install -r tools/requirements-insight-cards.txt",
      "",
      "If your interpreter is installed under another name or path, set PYTHON:",
      "",
      "    PYTHON=/path/to/python npm run generate",
      "",
      "Note: on Windows a `python3` that only prints a Microsoft Store message",
      "is an App Execution Alias, not an interpreter. This launcher rejects it",
      "on purpose; install Python properly or point PYTHON at the real exe.",
      "",
    ].join("\n")
  );
  process.exit(1);
}

const run = spawnSync(found, [SCRIPT, ...process.argv.slice(2)], {
  stdio: "inherit",
  windowsHide: true,
});

if (run.error) {
  console.error("Failed to run " + found + ": " + run.error.message);
  process.exit(1);
}
// Propagate a signal death as a conventional non-zero code.
process.exit(run.status === null ? 1 : run.status);

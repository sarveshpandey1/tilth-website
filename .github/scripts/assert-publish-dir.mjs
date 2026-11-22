#!/usr/bin/env node
/**
 * Gate for the GitHub Pages artifact.
 *
 * Production is published from an artifact rather than from the repository
 * root, so the assembly step in .github/workflows/pages.yml decides what the
 * public site contains. That step is an exclude-list: it copies the committed
 * tree and then deletes the paths that must not ship. An exclude-list can only
 * ever drop what it names -- but it still has to be right, and the site has
 * dependencies that no generic checker would notice:
 *
 *   - assets/fonts/*.woff2 are referenced only from url() inside fonts.css.
 *     Nothing in the HTML mentions them, so a check that follows only
 *     href/src attributes reports a fully working site with no typography.
 *   - tools/lib/{analytics,benchmarks,calc,format,registry}.js are loaded by
 *     the BROWSER, resolved at runtime from tools-worksheet.js / tools-hub.js.
 *     Dropping them breaks all eight calculators with no build error.
 *   - sitemap.xml, robots.txt, og-image.png and the manifest icons are
 *     referenced by nothing inside the site, or only by absolute URL.
 *   - /404.html, /thank-you/ and /ad-spend-calculator/ are live routes that do
 *     not appear in sitemap.xml.
 *
 * So this script checks both directions: everything required is present, and
 * nothing that must stay private has leaked in. It exits non-zero on any
 * failure, which fails the deploy before it reaches the public site.
 *
 * Usage: node .github/scripts/assert-publish-dir.mjs [publishDir]   (default _site)
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.argv[2] || "_site");

// Counts are asserted exactly, not as lower bounds: a page silently vanishing
// is the failure mode this exists to catch, and a page legitimately added
// should require updating this number in the same PR that adds it.
const EXPECTED_HTML = 75; // 72 indexable + 404.html + thank-you/ + ad-spend-calculator/
const EXPECTED_SITEMAP_URLS = 72;
const EXPECTED_WOFF2 = 14;
const EXPECTED_INSIGHT_CARDS = 26;

const SITE_ORIGIN = "https://wearetilth.com";

// Browser-loaded at runtime. Never exclude tools/lib wholesale.
const TOOLS_LIB_RUNTIME = [
  "tools/lib/analytics.js",
  "tools/lib/benchmarks.js",
  "tools/lib/calc.js",
  "tools/lib/format.js",
  "tools/lib/registry.js"
];

// Required but unreferenced, or referenced only by absolute URL / the manifest.
// A reference-following check alone would not notice these going missing.
const REQUIRED_FILES = [
  "index.html",
  "404.html",
  "thank-you/index.html",
  "ad-spend-calculator/index.html",
  "sitemap.xml",
  "robots.txt",
  ".nojekyll",
  "site.webmanifest",
  "og-image.png",
  "favicon.ico",
  "favicon.svg",
  "apple-touch-icon.png",
  "web-app-manifest-192x192.png",
  "web-app-manifest-512x512.png",
  "anuja.jpg",
  "styles.css",
  "assets/fonts/fonts.css",
  "nav.js",
  "analytics.js",
  "consent.js",
  "brand-v3.js",
  "tools-worksheet.js",
  "tools-hub.js"
];

// Must not reach the public site.
const FORBIDDEN_DIRS = ["src", ".github", ".git", "node_modules", "internal-docs", "content-drafts", "CONTENT_REFINEMENT"];
const FORBIDDEN_EXTS = [".mjs", ".md", ".py", ".cjs", ".lock"];
const FORBIDDEN_NAMES = ["package.json", "package-lock.json", "CNAME", "vercel.json", ".gitignore", ".gitattributes", "index.original.html"];
const FORBIDDEN_SUFFIXES = [".test.js"];

const failures = [];
const notes = [];
const fail = (msg) => failures.push(msg);
const ok = (msg) => notes.push(msg);

if (!fs.existsSync(ROOT) || !fs.statSync(ROOT).isDirectory()) {
  console.error(`FATAL: publish directory not found: ${ROOT}`);
  process.exit(1);
}

/* ------------------------------------------------------------------ walk */

const files = [];      // paths relative to ROOT, posix separators
const symlinks = [];
const multiLink = [];

(function walk(abs) {
  for (const entry of fs.readdirSync(abs, { withFileTypes: true })) {
    const full = path.join(abs, entry.name);
    const rel = path.relative(ROOT, full).split(path.sep).join("/");
    if (entry.isSymbolicLink()) { symlinks.push(rel); continue; }
    if (entry.isDirectory()) { walk(full); continue; }
    if (!entry.isFile()) continue;
    files.push(rel);
    // GitHub rejects Pages artifacts containing links. nlink > 1 on a regular
    // file means a hard link; not detectable on every filesystem, so this is
    // reported only when the stat actually shows it.
    try {
      const st = fs.lstatSync(full);
      if (st.nlink > 1) multiLink.push(`${rel} (nlink=${st.nlink})`);
    } catch { /* stat unavailable: nothing to assert */ }
  }
})(ROOT);

const fileSet = new Set(files);
const has = (rel) => fileSet.has(rel);

/** Resolve a site-root-relative URL path to a file in the artifact. */
function resolveSitePath(urlPath) {
  const clean = decodeURIComponent(urlPath.split("#")[0].split("?")[0]);
  if (!clean.startsWith("/")) return null;
  const rel = clean.slice(1);
  if (rel === "" || clean.endsWith("/")) {
    const idx = (rel === "" ? "" : rel) + "index.html";
    return has(idx) ? idx : null;
  }
  if (has(rel)) return rel;
  // A extensionless path may still be a directory route.
  const asDir = `${rel}/index.html`;
  return has(asDir) ? asDir : null;
}

/* -------------------------------------------------- 1. HTML file count */

const htmlFiles = files.filter((f) => f.endsWith(".html"));
if (htmlFiles.length === EXPECTED_HTML) ok(`HTML files: ${htmlFiles.length}`);
else fail(`HTML file count is ${htmlFiles.length}, expected ${EXPECTED_HTML}`);

/* ------------------------------------------ 2. sitemap URLs all resolve */

if (!has("sitemap.xml")) {
  fail("sitemap.xml is missing from the artifact");
} else {
  const xml = fs.readFileSync(path.join(ROOT, "sitemap.xml"), "utf8");
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  if (locs.length === EXPECTED_SITEMAP_URLS) ok(`sitemap URLs: ${locs.length}`);
  else fail(`sitemap.xml lists ${locs.length} URLs, expected ${EXPECTED_SITEMAP_URLS}`);

  const unresolved = [];
  for (const loc of locs) {
    if (!loc.startsWith(SITE_ORIGIN)) { unresolved.push(`${loc} (unexpected origin)`); continue; }
    const p = loc.slice(SITE_ORIGIN.length) || "/";
    if (!resolveSitePath(p)) unresolved.push(loc);
  }
  if (unresolved.length === 0) ok(`sitemap targets resolved: ${locs.length}/${locs.length}`);
  else fail(`sitemap URLs that do not resolve in the artifact (${unresolved.length}):\n    ${unresolved.join("\n    ")}`);
}

/* ------------------- 3. root-relative href / src across shipped HTML */

let hrefChecked = 0;
const brokenRefs = new Map(); // target -> set of pages

for (const page of htmlFiles) {
  const html = fs.readFileSync(path.join(ROOT, page), "utf8");
  for (const m of html.matchAll(/(?:href|src)\s*=\s*"(\/[^"]*)"/g)) {
    const target = m[1];
    if (target.startsWith("//")) continue; // protocol-relative, external
    hrefChecked++;
    if (!resolveSitePath(target)) {
      if (!brokenRefs.has(target)) brokenRefs.set(target, new Set());
      brokenRefs.get(target).add(page);
    }
  }
}
if (brokenRefs.size === 0) ok(`root-relative href/src: ${hrefChecked} checked, 0 broken`);
else {
  const lines = [...brokenRefs.entries()].map(([t, pages]) => `${t}  <- ${[...pages].slice(0, 3).join(", ")}${pages.size > 3 ? ` (+${pages.size - 3} more)` : ""}`);
  fail(`broken root-relative references (${brokenRefs.size} distinct, of ${hrefChecked} checked):\n    ${lines.join("\n    ")}`);
}

/* ------------------------------ 4. CSS url() in stylesheets AND in HTML */

// HTML is scanned as well as *.css. The pages carry large inline <style>
// blocks (CLAUDE.md 6b), so an asset reference can legitimately appear there;
// today none does, and this keeps that from becoming a blind spot later.
const cssSources = [...files.filter((f) => f.endsWith(".css")), ...htmlFiles];
let urlChecked = 0;
const brokenUrls = new Map();

for (const src of cssSources) {
  const text = fs.readFileSync(path.join(ROOT, src), "utf8");
  for (const m of text.matchAll(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g)) {
    const raw = m[2].trim();
    if (/^(data:|https?:|\/\/|#)/i.test(raw)) continue; // inline, external, fragment
    if (!raw.startsWith("/")) continue;                 // relative: out of scope here
    urlChecked++;
    if (!resolveSitePath(raw)) {
      if (!brokenUrls.has(raw)) brokenUrls.set(raw, new Set());
      brokenUrls.get(raw).add(src);
    }
  }
}
if (brokenUrls.size === 0) ok(`CSS url() references: ${urlChecked} checked, 0 broken`);
else {
  const lines = [...brokenUrls.entries()].map(([t, s]) => `${t}  <- ${[...s].slice(0, 3).join(", ")}`);
  fail(`broken CSS url() references (${brokenUrls.size} distinct, of ${urlChecked} checked):\n    ${lines.join("\n    ")}`);
}

/* ----------------------------------------------- 5-7, 18. required files */

const missingRequired = REQUIRED_FILES.filter((f) => !has(f));
if (missingRequired.length === 0) ok(`required production files present: ${REQUIRED_FILES.length}/${REQUIRED_FILES.length}`);
else fail(`required files missing from the artifact (${missingRequired.length}):\n    ${missingRequired.join("\n    ")}`);

/* ------------------------------------------------------ asset families */

const woff2 = files.filter((f) => f.startsWith("assets/fonts/") && f.endsWith(".woff2"));
if (woff2.length === EXPECTED_WOFF2) ok(`self-hosted fonts: ${woff2.length} woff2`);
else fail(`found ${woff2.length} woff2 files under assets/fonts/, expected ${EXPECTED_WOFF2}`);

const cards = files.filter((f) => f.startsWith("assets/insight-cards/"));
if (cards.length === EXPECTED_INSIGHT_CARDS) ok(`insight cards: ${cards.length}`);
else fail(`found ${cards.length} files under assets/insight-cards/, expected ${EXPECTED_INSIGHT_CARDS}`);

/* ------------------------------------ 8. tools/lib browser runtime modules */

const missingRuntime = TOOLS_LIB_RUNTIME.filter((f) => !has(f));
if (missingRuntime.length === 0) ok(`tools/lib browser runtime modules: ${TOOLS_LIB_RUNTIME.length}/${TOOLS_LIB_RUNTIME.length}`);
else fail(`tools/lib runtime modules missing -- the calculators would break silently (${missingRuntime.length}):\n    ${missingRuntime.join("\n    ")}`);

/* ------------------------------------------------- 9-15. leak assertions */

for (const dir of FORBIDDEN_DIRS) {
  const hit = files.filter((f) => f === dir || f.startsWith(`${dir}/`));
  if (hit.length) fail(`forbidden directory "${dir}/" is in the artifact (${hit.length} files, e.g. ${hit.slice(0, 3).join(", ")})`);
}
if (!FORBIDDEN_DIRS.some((d) => files.some((f) => f.startsWith(`${d}/`)))) ok(`forbidden directories absent: ${FORBIDDEN_DIRS.join(", ")}`);

for (const ext of FORBIDDEN_EXTS) {
  const hit = files.filter((f) => f.toLowerCase().endsWith(ext));
  if (hit.length) fail(`forbidden "*${ext}" files in the artifact (${hit.length}): ${hit.slice(0, 5).join(", ")}`);
  else ok(`no *${ext} files`);
}

for (const suffix of FORBIDDEN_SUFFIXES) {
  const hit = files.filter((f) => f.endsWith(suffix));
  if (hit.length) fail(`forbidden "*${suffix}" files in the artifact (${hit.length}): ${hit.slice(0, 5).join(", ")}`);
  else ok(`no *${suffix} files`);
}

for (const name of FORBIDDEN_NAMES) {
  const hit = files.filter((f) => f === name || f.endsWith(`/${name}`));
  if (hit.length) fail(`forbidden file "${name}" in the artifact (${hit.length}): ${hit.slice(0, 5).join(", ")}`);
}
if (!FORBIDDEN_NAMES.some((n) => files.some((f) => f === n || f.endsWith(`/${n}`)))) ok(`forbidden filenames absent: ${FORBIDDEN_NAMES.join(", ")}`);

/* ------------------------------------------------------- 16-17. links */

if (symlinks.length === 0) ok("no symbolic links");
else fail(`symbolic links in the artifact -- GitHub rejects these (${symlinks.length}): ${symlinks.slice(0, 5).join(", ")}`);

if (multiLink.length === 0) ok("no hard links detected");
else fail(`hard links in the artifact -- GitHub rejects these (${multiLink.length}): ${multiLink.slice(0, 5).join(", ")}`);

/* -------------------------------------------------------------- report */

console.log(`publish directory: ${ROOT}`);
console.log(`total files: ${files.length}\n`);
for (const n of notes) console.log(`  PASS  ${n}`);

if (failures.length) {
  console.error(`\n${"=".repeat(70)}`);
  for (const f of failures) console.error(`  FAIL  ${f}`);
  console.error(`${"=".repeat(70)}`);
  console.error(`\n${failures.length} assertion(s) failed -- not deploying.`);
  process.exit(1);
}

console.log(`\nAll ${notes.length} assertions passed. Artifact is safe to publish.`);

// Tilth static-site generator. Renders src/pages/*.mjs page defs to static HTML at the
// paths GitHub Pages serves. Dependency-free. Run: `npm run build`.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { renderPage } from "./src/render.mjs";

import websiteService from "./src/pages/website-service.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));

// Registry of generated pages. Add page defs here as they are built.
const PAGES = [
  websiteService
];

function outPathFor(routePath) {
  // "/services/website-design-development/" -> "services/website-design-development/index.html"
  const clean = routePath.replace(/^\/+/, "").replace(/\/+$/, "");
  return clean ? join(clean, "index.html") : "index.html";
}

let count = 0;
for (const page of PAGES) {
  const html = renderPage(page);
  const rel = outPathFor(page.path);
  const abs = join(ROOT, rel);
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, html, "utf8");
  console.log(`  ✓ ${page.path}  ->  ${rel}`);
  count++;
}
console.log(`\nGenerated ${count} page(s).`);

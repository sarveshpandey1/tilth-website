// Tilth static-site generator. Renders src/pages/*.mjs page defs to static HTML at the
// paths GitHub Pages serves. Dependency-free. Run: `npm run build`.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { renderPage } from "./src/render.mjs";

import websiteService from "./src/pages/website-service.mjs";
import servicesIndex from "./src/pages/services-index.mjs";
import industriesIndex from "./src/pages/industries-index.mjs";
import workIndex from "./src/pages/work-index.mjs";
import contact from "./src/pages/contact.mjs";
import thankYou from "./src/pages/thank-you.mjs";
import about from "./src/pages/about.mjs";
import home from "./src/pages/home.mjs";
import performanceMarketing from "./src/pages/performance-marketing.mjs";
import { allServicePages } from "./src/templates/servicePage.mjs";
import { allIndustryPages } from "./src/templates/industryPage.mjs";
import { allRegionHubs, allRegionChildPages } from "./src/templates/regionHub.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));

const PAGES = [
  home,
  servicesIndex,
  websiteService,
  performanceMarketing,
  ...allServicePages,
  industriesIndex,
  ...allIndustryPages,
  workIndex,
  contact,
  thankYou,
  about,
  ...allRegionHubs,
  ...allRegionChildPages
];

function outPathFor(routePath) {
  const clean = routePath.replace(/^\/+/, "").replace(/\/+$/, "");
  return clean ? join(clean, "index.html") : "index.html";
}

// guard against duplicate output paths
const seen = new Set();
let count = 0;
for (const page of PAGES) {
  if (seen.has(page.path)) throw new Error("Duplicate page path: " + page.path);
  seen.add(page.path);
  const html = renderPage(page);
  const rel = outPathFor(page.path);
  const abs = join(ROOT, rel);
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, html, "utf8");
  console.log(`  ✓ ${page.path}`);
  count++;
}
console.log(`\nGenerated ${count} page(s).`);

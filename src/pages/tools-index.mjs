// /tools/ — Brand v3, TOOLS family hub.
//
// Ported from the frozen Master Design Release design
// "TOOLS/Tilth Tools Hub.dc.html", per TOOLS_DESIGN_REPORT.md §4 and §5.
//
// Concept: an instrument index, not a card grid. The flagship analyser stands
// alone on an inverted band; the remaining five tools are a ledger grouped by
// the registry's own objectives, label and order.
//
// THE CRAWLABILITY FIX (report §5, the family's one known defect). Every tool
// link is rendered HERE, at build time, from registry.js — the flagship, all
// five grouped rows and the benchmarks link, seven distinct routes in static
// HTML. The previous build left #toolGrid and #featured empty and built the
// cards in the browser, so four tool routes had zero crawlable inbound links.
// tools-hub.js now only sets `hidden` on rows that already exist; it never
// creates one, so every tool stays visible and linked with JavaScript off.
//
// Progressive enhancement, both directions: the static jump list ships visible
// and the filter block ships `hidden`, so a no-JS visitor gets working
// navigation to every group. The script swaps them on mount.
//
// Group membership and counts are derived, never hand-written: OBJECTIVES
// supplies the labels and their order, and the flagship is excluded from the
// list because it sits above it. "Diagnose a problem" therefore holds no rows
// and is omitted — matching the frozen design and the live hub.
import { TOOLS, OBJECTIVES, MODELS } from "../../tools/lib/registry.js";
import { site } from "../data.mjs";
import { breadcrumbs, esc } from "../render.mjs";

const path = "/tools/";
const bc = breadcrumbs([{ name: "Home", path: "/" }, { name: "Free Tools", path }]);

const flagship = TOOLS.find(t => t.flagship);
const listed = TOOLS.filter(t => !t.flagship);

// objective groups, in registry order, empty ones dropped
const groups = OBJECTIVES
  .map(o => ({ ...o, tools: listed.filter(t => t.objective === o.id) }))
  .filter(g => g.tools.length);

const pad2 = n => String(n).padStart(2, "0");

const row = t => `
          <li data-tool-row="${esc(t.id)}"><a data-trow data-tool="${esc(t.id)}" href="${esc(t.route)}">
            <h3 data-tname>${esc(t.name)}</h3>
            <p data-tout>${esc(t.outcome)}</p>
            <p data-tneeds><span>${esc(t.audience)} &middot; ${esc(t.time)}</span><span>Needs: ${esc(t.inputs)}</span></p>
            <span data-go>Open tool <span aria-hidden="true">&rarr;</span></span>
          </a></li>`;

const group = g => `
      <section data-group id="${esc(g.id)}" aria-labelledby="g-${esc(g.id)}">
        <h2 id="g-${esc(g.id)}" data-ghead><span data-gcount aria-hidden="true">${pad2(g.tools.length)}</span>${esc(g.label)}</h2>
        <ul data-trows>${g.tools.map(row).join("")}
        </ul>
      </section>`;

const objPill = (id, label, on) =>
  `<button data-pill type="button" data-obj="${esc(id)}" aria-pressed="${on ? "true" : "false"}">${esc(label)}</button>`;
const modelPill = (id, label, on) =>
  `<button data-pill type="button" data-model="${esc(id)}" aria-pressed="${on ? "true" : "false"}">${esc(label)}</button>`;

// The ItemList must describe the same live tool set the hub links (report §0a
// decision 4): the previous build named five tools and omitted the analyser.
// Derived from the registry so the two can no longer drift.
const itemList = {
  "@type": "ItemList",
  name: "Free marketing tools",
  itemListElement: TOOLS.map((t, i) => ({
    "@type": "ListItem", position: i + 1, name: t.name, url: site.base + t.route
  }))
};

const main = `
<section id="hero" data-hero data-depth-label="SURFACE">
  <nav data-crumb aria-label="Breadcrumb"><a href="/">Home</a> <span data-sep aria-hidden="true">/</span> <span aria-current="page">Free Tools</span></nav>
  <div data-eyebrow>Free tools</div>
  <h1 data-h1>Marketing tools that don't <span data-acc>flatter</span> your numbers.</h1>
  <p data-lede>Free, no-sign-up calculators for founders and marketers — built the way we think about marketing: measure honestly first, then decide. Everything runs in your browser; your raw input values stay on your device.</p>
</section>

<section data-flagship-sec data-inv data-depth-label="SHALLOW" aria-labelledby="flag-h">
  <div id="featured">
    <a data-flagship data-tool="${esc(flagship.id)}" href="${esc(flagship.route)}">
      <span data-flag-tag>Flagship &middot; ${esc(flagship.category)}</span>
      <h2 id="flag-h" data-flag-name>${esc(flagship.name)}</h2>
      <p data-flag-out>${esc(flagship.outcome)}</p>
      <span data-flag-meta>${esc(flagship.audience)} &middot; ${esc(flagship.time)} &middot; <span data-bmtag>includes sourced benchmarks</span></span>
      <span data-go>Open the analyser <span aria-hidden="true">&rarr;</span></span>
    </a>
  </div>
</section>

<section data-sec data-index data-depth-label="MID" aria-label="All tools">
  <nav data-jump id="hubJump" aria-label="Tool groups">${groups.map(g => `<a href="#${esc(g.id)}">${esc(g.label)}</a>`).join("")}</nav>
  <div data-filters id="hubFilters" hidden>
    <div data-frow>
      <span data-flabel2 id="obj-l">What are you trying to solve?</span>
      <div data-pills id="objPills" role="group" aria-labelledby="obj-l">${objPill("", "All", true)}${OBJECTIVES.map(o => objPill(o.id, o.label, false)).join("")}</div>
    </div>
    <div data-frow data-frow2>
      <div data-frow-in><span data-flabel2 id="mod-l">For:</span>
      <div data-pills id="modelPills" role="group" aria-labelledby="mod-l">${modelPill("", "Any", true)}${MODELS.map(m => modelPill(m.id, m.label, false)).join("")}</div></div>
      <input type="search" id="hubSearch" data-search placeholder="Search tools…" aria-label="Search tools">
    </div>
  </div>
  <div id="toolGrid" data-groups>${groups.map(group).join("")}
  </div>
  <p data-hub-empty id="hubEmpty" role="status" hidden>No tools match those filters — clear one to see more.</p>
</section>

<section data-sec data-evidence data-depth-label="DEEP" aria-label="Benchmarks and privacy">
  <p data-ev-p>Some tools compare your numbers against industry benchmarks — see exactly <a data-ev-link href="/tools/benchmarks/">where those come from and how we source them <span aria-hidden="true">&rarr;</span></a></p>
  <p data-ev-p>Everything runs in your browser: <strong>your raw input values stay on your device.</strong> Anonymous, banded usage data may be recorded to understand how the tools are used.</p>
</section>

<section data-tcta data-depth-label="FOUNDATION" aria-labelledby="cta-h" id="ctaCard">
  <div data-eyebrow><span data-step aria-hidden="true">04</span>Next step</div>
  <div data-tcta-grid>
    <h2 id="cta-h" data-tcta-h>Numbers are only as honest as the tracking behind them</h2>
    <div>
      <p>These tools assume your inputs are real. If your CAC, ROAS or conversions are mismeasured, the outputs will be too. A Foundation Audit checks the tracking underneath — so the numbers you plug in actually mean something.</p>
      <a data-btn data-cta-btn href="/contact/"><span>Discuss your growth project</span> <span aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</section>

<section data-related aria-labelledby="rel-h">
  <h2 id="rel-h">From the field notes</h2>
  <ul>
    <li><a href="/insights/audit-your-ad-spend/">How to tell if your ad spend is actually profitable</a></li>
    <li><a href="/insights/marketing-attribution-explained-simply/">Marketing attribution for small businesses, explained simply</a></li>
    <li><a href="/insights/startup-marketing-budget-india/">Marketing budget for an early-stage startup in India</a></li>
  </ul>
</section>
`;

export default {
  path,
  shell: "v3",
  shellClass: "v3-core v3-tkit v3-tools",
  headExtra: `<link rel="stylesheet" href="/assets/core-company.css">
<link rel="stylesheet" href="/assets/tools.css">
<script type="module" src="/tools-hub.js"></script>`,
  title: "Free Marketing Tools & Calculators | Tilth",
  description: "Free marketing calculators for founders and marketers — ad spend profitability, LTV:CAC, conversion funnel, A/B significance, UTM builder, and a benchmark analyser. No sign-up.",
  ogTitle: "Free marketing tools that don't flatter your numbers",
  ogDescription: "Honest calculators for ad spend, LTV:CAC, funnels, A/B tests and campaign tracking.",
  schema: [bc.schema, itemList],
  main
};

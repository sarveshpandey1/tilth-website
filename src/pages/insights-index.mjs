// /insights/ — Brand v3, INSIGHTS family hub.
//
// Ported from the frozen Master Design Release design
// "INSIGHTS/Tilth Insights.dc.html", per INSIGHTS_DESIGN_REPORT.md §4.
//
// Concept: a field-notes index, not a card grid. One ruled list, newest first
// (source order). Each entry is a single link carrying the four pieces of the
// published hub card — the category label and "n min read · date" in mono, the
// hub card title, the hub excerpt, and "Read the article →" — plus the
// decorative 2:1 card plate from 768.
//
// CRAWLABILITY: all 18 entries are rendered here, at build time, from
// src/insights-content.mjs. No JavaScript is involved in creating a link, so
// every article stays reachable and crawlable with JS off. insights-hub.js only
// sets `hidden` on entries that already exist.
//
// FILTERS: progressive enhancement, exactly as the source behaves. The filter
// rail ships `hidden`; the script reveals it. Without JS the list takes the
// full width (the :has() rule in insights.css drops the rail column) and every
// entry still shows its category label. The 6 buckets and their published
// counts (18/4/4/4/4/2) are the source's own, hard-coded there and preserved.
//
// ACCESSIBILITY (report §4): the live markup used role="tab" with no tab
// panels. The frozen design replaces that with aria-pressed toggle buttons in a
// group labelled by the live aria-label text. Semantics only; no copy change.
//
// TAXONOMY: the hub keeps its own 6-bucket vocabulary and each article keeps
// its own articleSection. Neither is normalised or renamed — DEFERRED, LATER IA.
//
// CARD IMAGES (report §0b production requirement): the approved existing assets
// at /assets/insight-cards/<slug>.webp, with the decorative semantics the source
// defines — alt="", width="1000" height="500", loading="lazy". The frozen
// design's neutral plate was for design review only and is not shipped. These
// are NOT used as og/social images; the published og:image is kept.
//
// DISCLOSED OMISSION: the published hub ends with an "insights-note" paragraph
// ("More field notes are being prepared… Tell us at contact") carrying one
// /contact/ link. The frozen design does not include it and the design report
// does not mention it. The frozen release outranks the production source in the
// agreed precedence, so the frozen composition is followed here and the
// omission is reported rather than quietly applied.
//
// Prototype-only code is not ported: the .dc runtime and the review controls.
import { insightHub } from "../insights-content.mjs";
import { breadcrumbs } from "../render.mjs";

const path = "/insights/";
const bc = breadcrumbs([{ name: "Home", path: "/" }, { name: "Insights", path }]);

const h = insightHub;

const catBtn = (c, i) =>
  `<button type="button" data-cat-btn data-cat="${c.id}" aria-pressed="${i === 0 ? "true" : "false"}">${c.label}<span data-count>${c.count}</span></button>`;

const entry = c => `
        <li data-cat="${c.cat}"><a data-entry href="${c.href}">
          <span data-emeta data-meta><span data-ecat>${c.catLabel}</span><span>${c.meta}</span></span>
          <h2 data-etitle>${c.title}</h2>
          <p data-eex>${c.excerpt}</p>
          <span data-ego>Read the article <span aria-hidden="true">&rarr;</span></span>
          <span data-thumb aria-hidden="true">${c.img}</span>
        </a></li>`;

const main = `
<section data-hero data-ins-hero data-depth-label="SURFACE">
  <nav data-crumb aria-label="Breadcrumb"><a href="/">Home</a> <span data-sep aria-hidden="true">/</span> <span aria-current="page">Insights</span></nav>
  <div data-eyebrow>${h.label}</div>
  <h1 data-h1>${h.h1}</h1>
  <p data-lede>${h.standfirst}</p>
</section>

<section data-hubwrap data-depth-label="SHALLOW" aria-label="All field notes">
  <div data-hubgrid>
    <div data-filters id="hubFilters" hidden>
      <span data-flabel id="cat-l">Filter articles by category</span>
      <div data-cats role="group" aria-labelledby="cat-l">${h.cats.map(catBtn).join("")}</div>
    </div>
    <div>
      <ul data-ilist id="insightList">${h.cards.map(entry).join("")}
      </ul>
      <p data-hub-empty id="hubEmpty" role="status" hidden>${h.emptyText}</p>
    </div>
  </div>
</section>
`;

export default {
  path,
  shell: "v3",
  shellClass: "v3-core v3-ins v3-insights",
  headExtra: `<link rel="stylesheet" href="/assets/core-company.css">
<link rel="stylesheet" href="/assets/insights.css">
<script type="module" src="/insights-hub.js"></script>`,
  title: h.meta.title,
  description: h.meta.description,
  ogTitle: h.meta.ogTitle,
  ogDescription: h.meta.ogDescription,
  schema: [bc.schema, ...h.schema.flatMap(g => (g["@graph"] || [g]).filter(n => n["@type"] !== "BreadcrumbList"))],
  main
};

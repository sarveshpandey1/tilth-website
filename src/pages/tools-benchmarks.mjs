// /tools/benchmarks/ — Brand v3, TOOLS family: the benchmark reference.
//
// Ported from the frozen Master Design Release design
// "TOOLS/Tilth Tool Template - Benchmark Analyser.dc.html" (its `benchmarks`
// route template), per TOOLS_DESIGN_REPORT.md §2 and §5.
//
// No form. The methodology ledger, then the citation set: every record with its
// range, direction, confidence, source and date.
//
// THE CRAWLABILITY FIX (report §5). All 23 records are rendered HERE, at build
// time, from tools/lib/benchmarks.js — the same BENCHMARKS array the analyser
// and every tool read. The previous build shipped an empty #bm-body and built
// the rows in the browser, so the cited evidence was invisible to a crawler and
// to anyone without JavaScript. No client-side renderer is involved now, which
// also makes the page's own sentence — "Rendered live from the same data our
// tools use" — literally true of the build.
//
// §16/§17: one authoritative registry. This page and the analyser both read
// BENCHMARKS directly; no second dataset is introduced and none is copied.
// The /tools/benchmarks/ registry-membership question stays an architecture
// item (report §20 #4) — nothing is refactored here.
//
// Record values, notes, sources, urls, dates and confidence ratings are printed
// exactly as the data holds them. Nothing is invented, reworded or rounded.
import { BENCHMARKS } from "../../tools/lib/benchmarks.js";
import { breadcrumbs, esc } from "../render.mjs";

const path = "/tools/benchmarks/";
const bc = breadcrumbs([
  { name: "Home", path: "/" },
  { name: "Free Tools", path: "/tools/" },
  { name: "Benchmark sources", path }
]);

// Confidence pips. benchmarks.js keeps the authoritative ordering in its own
// CONF_RANK table (high 4, med-high 3.5, medium 3, low-medium 2, low 1,
// reference 0.5) but does not export it, and the engine is not edited to add an
// export. floor() of those ranks reproduces the frozen design's pip counts for
// every tier present — 4 / 3 / 3 / 2 / 1 / 0 — so the mapping is mirrored here
// rather than invented.
const PIPS = { high: 4, "med-high": 3, medium: 3, "low-medium": 2, low: 1, reference: 0 };
const pips = conf => {
  const on = PIPS[conf] != null ? PIPS[conf] : 0;
  return Array.from({ length: 4 }, (_, i) => (i < on ? "<i data-on></i>" : "<i></i>")).join("");
};

const v = (n, unit) => `${n}${unit}`;

const record = b => {
  const heur = b.verificationStatus === "heuristic";
  // five records carry sampleSize; the frozen design prints it under the source
  const sample = b.sampleSize ? `<span data-bsample>Sample: ${esc(b.sampleSize)}</span>` : "";
  const src = (b.url
    ? `<a href="${esc(b.url)}" target="_blank" rel="noopener">${esc(b.source)}</a>${b.date ? ` <span data-bdate>(${esc(b.date)})</span>` : ""}`
    : esc(b.source)) + sample;
  return `
          <tr role="row" data-brow${heur ? " data-heuristic" : ""}>
            <th role="rowheader" scope="row" data-bmetric><span data-blabel>${esc(b.label)}${heur ? ` <span data-heur>heuristic</span>` : ""}</span>${b.note ? `<span data-bnote>${esc(b.note)}</span>` : ""}</th>
            <td role="cell" data-th="Segment">${esc(b.segment)}</td>
            <td role="cell" data-th="Geography">${esc(b.geography)}</td>
            <td role="cell" data-th="Range (low &middot; median &middot; high)" data-brange>${esc(v(b.low, b.unit))} <span data-dot aria-hidden="true">&middot;</span> <b>${esc(v(b.median, b.unit))}</b> <span data-dot aria-hidden="true">&middot;</span> ${esc(v(b.high, b.unit))}<span data-bdir>(${b.direction === "lower" ? "lower" : "higher"} is better)</span></td>
            <td role="cell" data-th="Confidence"><span data-conf="${esc(b.confidence)}"><span data-pips aria-hidden="true">${pips(b.confidence)}</span>${esc(b.confidence)}</span></td>
            <td role="cell" data-th="Source" data-bsrc>${src}</td>
          </tr>`;
};

const COUNT = BENCHMARKS.length;

const rules = [
  [`Rate metrics only.`, `We benchmark percentages and ratios (conversion, churn, click, funnel steps) — not rupee figures like CPC or CAC. A foreign-currency benchmark misleads more than it helps; we'll only add absolute-money benchmarks when we have India-sourced data.`],
  [`Ranges, never false precision.`, `Sources disagree — ecommerce "average" conversion alone ranges from 1.6% to 2.9% depending on who's counting. We show the low–median–high and cite who said it.`],
  [`Geography is flagged.`, `Most public data is Global or US-weighted; India-specific benchmarks are genuinely scarce. We label it rather than pretend a US number is an Indian one.`],
  [`Heuristics are kept separate from sourced data.`, `"3:1 LTV:CAC" is a rule of thumb, not a measured benchmark — it's tagged as such below.`],
  [`Nothing is invented.`, `If we don't have a verified source for a metric in your context, the tools say so and exclude it — they never fill the gap with a made-up figure.`]
];

const main = `
<section id="hero" data-thero data-depth-label="SURFACE">
  <nav data-crumb aria-label="Breadcrumb"><a href="/">Home</a> <span data-sep aria-hidden="true">/</span> <a href="/tools/">Free Tools</a> <span data-sep aria-hidden="true">/</span> <span aria-current="page">Benchmark sources</span></nav>
  <div data-eyebrow>Free tools</div>
  <h1 data-h1 data-th1>Where our benchmarks <span data-acc>come from</span>.</h1>
  <div data-thero-row>
    <p data-lede>A benchmark you can't trace is just a number someone made up. Every figure our tools compare against is listed here with its source, date, and an honest confidence rating — and we tell you plainly where good data doesn't exist yet.</p>
  </div>
</section>

<section data-sec data-bench-rules data-depth-label="SHALLOW" aria-labelledby="rules-h">
  <div data-ledger>
    <div data-lhead>
      <h2 id="rules-h" data-h2>Our rules, kept deliberately strict:</h2>
    </div>
    <ol data-rows>${rules.map(([h, p], i) => `
      <li><span data-n aria-hidden="true">${String(i + 1).padStart(2, "0")}</span><p><strong>${esc(h)}</strong> ${esc(p)}</p></li>`).join("")}
    </ol>
  </div>
</section>

<section data-sec data-bench-set data-depth-label="DEEP" aria-labelledby="set-h">
  <h2 id="set-h" data-h2>The current benchmark set</h2>
  <p data-body>Rendered live from the same data our tools use — so this page can never fall out of sync. <span id="bm-count">${COUNT} records.</span></p>
  <div data-bm-wrap>
    <table data-bm role="table">
      <caption data-sr>The current benchmark set — ${COUNT} records</caption>
      <thead role="rowgroup"><tr role="row"><th role="columnheader" scope="col">Metric</th><th role="columnheader" scope="col">Segment</th><th role="columnheader" scope="col">Geography</th><th role="columnheader" scope="col">Range (low &middot; median &middot; high)</th><th role="columnheader" scope="col">Confidence</th><th role="columnheader" scope="col">Source</th></tr></thead>
      <tbody role="rowgroup" id="bm-body">${BENCHMARKS.map(record).join("")}
      </tbody>
    </table>
  </div>
  <p data-body data-bench-foot>Confidence reflects source rigour and agreement — e.g. email <em>open</em> rates are marked low because Apple Mail Privacy Protection inflates them. We review and expand this set over time; the goal is depth we can stand behind, not a sprawling half-sourced table.</p>
</section>

<section data-tcta data-depth-label="FOUNDATION" aria-labelledby="cta-h" id="ctaCard">
  <div data-eyebrow><span data-step aria-hidden="true">04</span>Next step</div>
  <div data-tcta-grid>
    <h2 id="cta-h" data-tcta-h>Want benchmarks that actually fit your business?</h2>
    <div>
      <p>Public benchmarks are a starting point, not the truth about your account. A Foundation Audit builds you a measurement baseline from your own data — the only benchmark that really counts.</p>
      <a data-btn data-cta-btn href="/contact/"><span>Discuss your growth project</span> <span aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</section>

<section data-related aria-labelledby="rel-h">
  <h2 id="rel-h">Related</h2>
  <ul>
    <li><a href="/tools/">Back to all free tools</a></li>
    <li><a href="/tools/ad-spend-profitability-calculator/">Ad Spend Profitability Calculator</a></li>
    <li><a href="/tools/ltv-cac-calculator/">LTV : CAC Calculator</a></li>
  </ul>
</section>
`;

export default {
  path,
  shell: "v3",
  shellClass: "v3-core v3-tkit v3-bench",
  headExtra: `<link rel="stylesheet" href="/assets/core-company.css">
<link rel="stylesheet" href="/assets/tools.css">`,
  title: "Where Our Marketing Benchmarks Come From | Tilth",
  description: `Every benchmark our free tools compare against, with its source, date, geography and an honest confidence rating — ${COUNT} records, ranges not false precision, heuristics kept separate.`,
  ogTitle: "Where our benchmarks come from",
  ogDescription: "Sourced, dated and confidence-rated marketing benchmarks — and where good data doesn't exist yet.",
  schema: [bc.schema],
  main
};

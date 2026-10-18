// /work/ — Brand v3, CORE COMPANY family.
//
// Ported from the frozen Master Design Release design
// "CORE_COMPANY/Tilth Work.dc.html", per CORE_COMPANY_DESIGN_REPORT.md.
//
// Primary component: EVIDENCE PLATES — the shared proof component at lead
// scale. Each approval-gated anonymous record becomes a full-width plate:
// attribution and summary in one column, the recorded figures as large
// editorial statements in the other. The figures are printed exactly as
// recorded in data.mjs; only their scale changes.
//
// The page shows the confidentiality position ONCE, in the hero lede and the
// snapshot standfirst — never repeated inside each plate.
//
// Both evidence sections are approval-gated and omitted ENTIRELY when their gate
// fails — never left as a heading over an empty grid, and never backfilled with
// placeholder copy (report: proof-empty omits #case-studies, markers-empty omits
// #clients, both-empty leaves hero -> CTA).
//
// Prototype-only code is not ported: the .dc runtime, the review controls and
// the display-fit safeguard (the ladder in core-company.css is authored to fit
// and measured at all 12 widths, as in the Industries family).
import { caseStudies, brandExperience, brandExperienceLabel, homeV3 } from "../data.mjs";
import { breadcrumbs, esc } from "../render.mjs";

const path = "/work/";
const bc = breadcrumbs([{ name: "Home", path: "/" }, { name: "Work", path }]);

const num = i => String(i + 1).padStart(2, "0");

// Approved anonymous records only. The tilde takes the shared [data-approx]
// treatment so "~0%" reads as an approximation in Chivo rather than as Syne's
// decorative tilde (Phase 0, Register G-5).
const approx = m => esc(m).replace(/~/g, '<span data-approx>~</span>');

const records = caseStudies.filter(c => c.publishApproved);
const plates = records.map((c, i) => `
      <article data-plate data-proof class="v3-reveal">
        <div data-phead>
          <span data-plate-n aria-hidden="true">${num(i)}</span>
          <div data-plabel>${esc(c.anonLabel)}</div>
          <div data-pmeta>${esc(c.industry.toUpperCase())} &middot; ${esc(c.market.toUpperCase())}</div>
        </div>
        <ul>${c.metrics.map(m => `
          <li>${approx(m)}</li>`).join("")}
        </ul>
        <p data-psum>${esc(c.summary)}</p>
        ${(c.servicesInvolved || []).length ? `<p data-pservices style="margin:16px 0 0;font-family:'IBM Plex Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.12em;line-height:1.6;color:var(--stone)"><em>Services involved: ${c.servicesInvolved.map(esc).join(" · ")}</em></p>` : ""}
      </article>`).join("");

// Text-only markers, one name per ruled line — never logos, and never an
// inline "A · B" run, whose separator strands at the start of a line.
// Source is the canonical founder brand-experience list (content pack §3), so
// these are explicitly brands our founder has worked with, not Tilth clients.
const markers = brandExperience.map(b => `<li>${esc(b.name)}</li>`).join("");

// The shared proof strip, the same component the homepage carries (§8). Work is
// the deepest proof page, so it leads with the credibility strip before the
// brands and the outcome records.
const statCell = st => `<div class="v3-stat">
        <div class="v3-stat__v${st.tone ? ` is-${st.tone}` : ""}" data-num>${esc(st.v)}${st.unit ? `<span class="unit">${esc(st.unit)}</span>` : ""}</div>
        <div class="v3-stat__l">${esc(st.label)}</div>
      </div>`;

const main = `
<section id="hero" data-hero data-depth-label="SURFACE">
  <nav data-crumb aria-label="Breadcrumb"><a href="/">HOME</a> <span data-sep aria-hidden="true">/</span> <span aria-current="page">WORK</span></nav>
  <div data-eyebrow>Work</div>
  <h1 data-h1>Proof, not <em>promises</em>.</h1>
  <p data-lede>Outcomes first, and the experience behind them. Results are anonymised to respect client confidentiality, unless a brand has agreed to be named.</p>
  <div data-actions>
    <a data-btn href="/contact/">Discuss your growth project <span aria-hidden="true">&rarr;</span></a>
    <a data-textlink href="/services/"><span>Explore services &rarr;</span></a>
  </div>
</section>

<section id="proof-strip" data-sec data-depth-label="SHALLOW" aria-label="Founder and core-team experience">
  <div class="v3-stats v3-reveal">
      ${homeV3.stats.map(statCell).join("\n      ")}
  </div>
  <p class="v3-evnote">${esc(homeV3.statsCaption)}</p>
</section>

${markers.length ? `
<section id="clients" data-sec data-inv data-depth-label="SHALLOW" aria-labelledby="clients-h">
  <div data-xp class="v3-reveal">
    <div>
      <div data-eyebrow>Brands</div>
      <h2 id="clients-h" data-h2>Selected brands our founder has worked with.</h2>
    </div>
    <ul data-markers aria-label="Selected brands our founder has worked with">${markers}</ul>
  </div>
</section>` : ""}
${records.length ? `
<section id="case-studies" data-sec data-depth-label="DEEP" aria-labelledby="cs-h">
  <div data-cs-head class="v3-reveal">
    <div>
      <div data-eyebrow>Result snapshots</div>
      <h2 id="cs-h" data-h2>Outcomes from real engagements.</h2>
    </div>
    <p data-body>Selected experience from our founder and core team. Figures as achieved; anonymised unless named with permission.</p>
  </div>
  <div data-plates>${plates}
  </div>
</section>` : ""}

<section id="cta" data-moss data-depth-label="FOUNDATION" aria-labelledby="cta-h">
  <div data-eyebrow>Next step</div>
  <div data-cta-grid>
    <h2 id="cta-h" data-cta-h>Want results like these?</h2>
    <div>
      <p data-cta-p>Start with a conversation. We'll look at where growth is getting stuck and whether there's a clear next step.</p>
      <div data-cta-actions>
        <a data-btn href="/contact/">Discuss your growth project <span aria-hidden="true">&rarr;</span></a>
        <a data-textlink href="/contact/"><span>Explore services &rarr;</span></a>
      </div>
    </div>
  </div>
</section>
`;

export default {
  path,
  shell: "v3",
  shellClass: "v3-core v3-work",
  headExtra: `<link rel="stylesheet" href="/assets/core-company.css">`,
  title: "Our Work — Growth Marketing Results | Tilth",
  description: "Selected growth marketing engagements and anonymous result snapshots — outcomes over vanity metrics. Named case studies added as clients approve.",
  ogTitle: "Our work — proof, not promises",
  ogDescription: "Anonymous result snapshots and selected experience across ambitious brands.",
  schema: [bc.schema],
  main
};

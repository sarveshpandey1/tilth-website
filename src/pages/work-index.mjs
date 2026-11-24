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
import { caseStudies, brandExperiencePublic, brandExperienceLabel, homeV3, services } from "../data.mjs";
import { breadcrumbs, esc } from "../render.mjs";

const path = "/work/";
const bc = breadcrumbs([{ name: "Home", path: "/" }, { name: "Work", path }]);

const num = i => String(i + 1).padStart(2, "0");

// Underline treatment for a link inside body copy.
//
// --line2, NOT --ichip. Other templates underline with --ichip, but every one
// of those links sits inside a [data-inv] section, where --ichip is the dark
// ink intended for a light surface. Both links here are on non-inverted
// (dark) sections, where --ichip resolves to rgba(16,19,16,.22) and is
// invisible -- verified in the browser. --line2 is the token the page's own
// [data-textlink] underline uses, and it flips correctly with the theme.
const LINK = `style="border-bottom:1px solid var(--line2);padding-bottom:1px"`;

// servicesInvolved[] stores service NAMES; services[] is the source of truth
// for name -> route. Built from that array rather than from slug guessing, so
// a renamed service cannot silently produce a dead link: a name with no exact
// match simply renders as text, exactly as it does today.
const SERVICE_HREF = new Map(services.filter(s => s.slug && s.name).map(s => [s.name, `/services/${s.slug}/`]));
const serviceLink = name => {
  const href = SERVICE_HREF.get(name);
  return href ? `<a href="${href}" ${LINK}>${esc(name)}</a>` : esc(name);
};

// Related reading, keyed on the record slug. An explicit reviewed map, never
// inferred from industry or keyword overlap: each article was checked against
// what that engagement actually involved, and a record with no genuinely
// relevant article would simply carry none. Anchor text is each article's own
// H1, shortened -- nothing here characterises the engagement beyond what the
// approved record already states.
const RELATED_READING = {
  // Tracking and conversion events rebuilt, then scaled against verified return.
  "edtech-paid-media": [
    ["/insights/ga4-conversion-tracking/", "GA4 conversion tracking: the setup checklist before you scale ads"],
    ["/insights/break-even-roas/", "Break-even ROAS: the ROAS your ads actually need"]
  ],
  // Partner validation, commercial model and tracking, built ground up.
  "crypto-affiliate": [
    ["/insights/affiliate-program-not-converting/", "Why your affiliate program isn't driving revenue"],
    ["/insights/marketing-attribution-explained-simply/", "Marketing attribution, explained simply"]
  ],
  // Paid acquisition across Google Ads and Meta for a US product.
  "demi-ai": [
    ["/insights/google-ads-vs-meta-ads-startup/", "Google Ads vs Meta Ads: which should a startup start with?"],
    ["/insights/first-90-days-new-ad-account/", "What to do in the first 90 days of a new ad account"]
  ]
};

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
        ${(c.servicesInvolved || []).length ? `<p data-pservices style="margin:16px 0 0;font-family:'IBM Plex Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.12em;line-height:1.6;color:var(--stone)"><em>Services involved: ${c.servicesInvolved.map(serviceLink).join(" · ")}</em></p>` : ""}
        ${(RELATED_READING[c.slug] || []).length ? `<p data-pread style="margin:10px 0 0;font-size:14px;line-height:1.65;color:var(--stone)">Related reading: ${RELATED_READING[c.slug].map(([href, label]) => `<a href="${href}" ${LINK}>${esc(label)}</a>`).join(" · ")}</p>` : ""}
      </article>`).join("");

// Text-only markers, one name per ruled line — never logos, and never an
// inline "A · B" run, whose separator strands at the start of a line.
// Source is the canonical founder brand-experience list (content pack §3), so
// these are explicitly brands our founder has worked with, not Tilth clients.
const markers = brandExperiencePublic.map(b => `<li>${esc(b.name)}</li>`).join("");

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
  <p data-lede>Outcomes first, and the experience behind them — <a href="/services/performance-marketing/" ${LINK}>paid acquisition</a>, <a href="/services/growth-strategy-measurement/" ${LINK}>measurement</a> and <a href="/services/affiliate-partnerships/" ${LINK}>partner programs</a>, across India and the US. Results are anonymised to respect client confidentiality, unless a brand has agreed to be named.</p>
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
    <p data-body>Selected experience from our founder and core team. Figures as achieved; anonymised unless named with permission. The method behind them is set out in <a href="/approach/" ${LINK}>our approach</a>.</p>
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
        <a data-textlink href="/services/"><span>Explore services &rarr;</span></a>
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
  // "Named case studies added as clients approve" was written before any named
  // record existed; the Demi.ai record is published and named, so that sentence
  // is now inaccurate. Replaced with the confidentiality position the page
  // itself states. Intent and length are unchanged; the title is untouched.
  description: "Selected growth marketing engagements and result snapshots — outcomes over vanity metrics. Anonymised unless a brand has agreed to be named.",
  ogTitle: "Our work — proof, not promises",
  ogDescription: "Anonymous result snapshots and selected experience across ambitious brands.",
  schema: [bc.schema],
  main
};

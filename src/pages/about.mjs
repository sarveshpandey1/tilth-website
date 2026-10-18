// /about/ — Brand v3, CORE COMPANY family.
//
// Ported from the frozen Master Design Release design
// "CORE_COMPANY/Tilth About.dc.html", per CORE_COMPANY_DESIGN_REPORT.md §8.
//
// Primary component: the FOUNDER PANEL — greyscale 4:5 portrait, a Syne quote
// carrying the Clay accent, the bio and one quiet link to the work. It is
// approval-gated on team[] and the whole section is omitted cleanly when the
// gate fails, so the page still reads as a complete composition.
//
// Approval gates honoured: the founder panel and #outcomes are each omitted
// entirely when their gate fails, only team records with approved:true render
// (the second record is approved:false and must not appear), and nothing is
// asserted that the source does not record — no LinkedIn, team size, office
// locations, awards or client counts.
//
// The founder copy now follows the approved content pack (§9): "10+ years,
// 10+ industries" replaces the earlier "ten years, five industries" wording,
// and the representative sectors come from the owner-supplied list.
//
// Prototype-only code is not ported: the .dc runtime, the review approval
// switches and the display-fit safeguard.
import { site, team, proofFor } from "../data.mjs";
import { breadcrumbs, esc } from "../render.mjs";

const path = "/about/";
const bc = breadcrumbs([{ name: "Home", path: "/" }, { name: "About", path }]);
const founder = team.find(t => t.approved && t.title && /founder/i.test(t.title));

// team[0].bio is a standalone sentence, so it carries a closing full stop. The
// design (and report §8, which cites the bio without it) sets the same words as
// a clause before an em dash; interpolating the raw value printed a stray
// "D2C. — running paid media". Trim the terminal stop for mid-sentence use —
// no words change.
const bioClause = founder ? founder.bio.replace(/\.\s*$/, "") : "";

const num = i => String(i + 1).padStart(2, "0");
const approx = m => esc(m).replace(/~/g, '<span data-approx>~</span>');

// How we work — four capability tiles, 1 -> 2x2 -> 4 (never 3+1).
const pillars = [
  ["Founder-led direction", "Senior strategy on every engagement — you're not handed to a junior team after the pitch."],
  ["Built for distributed teams", "Remote-first collaboration with overlap that keeps work moving, wherever your team sits."],
  ["Foundation-first", "We diagnose before we prescribe, and only scale once the growth system can carry it."],
  ["One accountable partner", "Strategy, execution and measurement coordinated through Tilth — not scattered across vendors."]
];

// The same proof component as /work/, at standard scale. Approval-gated: with no
// publishable record #outcomes is omitted entirely, not left as a heading over an
// empty grid (report: proof-empty omits #outcomes).
// §2 placement matrix: /about/ carries Edtech and Affiliate, not Demi.ai.
const records = proofFor("/about/");
const proof = records.map(c => `
    <article data-proof class="v3-reveal">
      <div data-plabel>${esc(c.anonLabel)}</div>
      <div data-pmeta>${esc(c.industry.toUpperCase())} &middot; ${esc(c.market.toUpperCase())}</div>
      <ul>${c.metrics.map(m => `
        <li>${approx(m)}</li>`).join("")}
      </ul>
      <p data-psum>${esc(c.summary)}</p>
    </article>`).join("");

const personSchema = founder ? {
  "@type": "Person", "@id": `${site.base}/#anuja`, name: founder.name, jobTitle: "Founder",
  worksFor: { "@id": `${site.base}/#org` }, url: site.base + path, image: site.base + founder.photo,
  knowsAbout: ["Performance marketing", "Growth strategy", "SEO", "Affiliate marketing", "Marketing measurement"]
} : null;

const main = `
<section id="hero" data-hero data-depth-label="SURFACE">
  <nav data-crumb aria-label="Breadcrumb"><a href="/">HOME</a> <span data-sep aria-hidden="true">/</span> <span aria-current="page">ABOUT</span></nav>
  <div data-eyebrow>About</div>
  <h1 data-h1>Built by someone who's <em>done the work</em>.</h1>
  <p data-lede>Tilth is a performance-led growth marketing agency. Founder-led, with 10+ years of hands-on growth experience — India-rooted, with performance experience across India and the US — and built on one belief: growth is a consequence of strong foundations, not more spend.</p>
</section>

<section id="problem" data-sec data-depth-label="SHALLOW" aria-labelledby="problem-h">
  <div data-ledger>
    <div data-lhead class="v3-reveal">
      <div data-eyebrow>Why Tilth exists</div>
      <h2 id="problem-h" data-h2>The same mistake, repeated across every industry.</h2>
    </div>
    <p data-lead-p class="v3-reveal">Across more than ten industries, in India and the US, one pattern kept repeating: teams scaling spend on foundations that couldn't support it — broken tracking, unclear positioning, sites that didn't convert. Tilth exists to fix that first, so growth compounds instead of leaking.</p>
  </div>
</section>

<section id="team" data-sec data-inv data-depth-label="MID" aria-labelledby="team-h">
  <div class="v3-reveal">
    <div data-eyebrow>How we work</div>
    <h2 id="team-h" data-h2 data-gap>Senior, accountable, remote-first.</h2>
  </div>
  <div data-tiles data-four>${pillars.map(([h, p], i) => `
    <div data-tile class="v3-reveal"><span data-n aria-hidden="true">${num(i)}</span><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join("")}
  </div>
</section>
${founder ? `
<section id="founder" data-sec data-depth-label="DEEP" aria-labelledby="founder-h">
  <h2 id="founder-h" data-founder-h>Founder</h2>
  <div data-founder class="v3-reveal">
    <figure data-portrait>
      <img src="${founder.photo}" alt="${esc(founder.name)}, ${esc(founder.title)}" width="560" height="700" loading="lazy" decoding="async">
      <figcaption>${esc(founder.name)} &mdash; ${esc(founder.title)}</figcaption>
    </figure>
    <div data-fcopy>
      <blockquote data-quote>Ten-plus years. Ten-plus industries. Patterns repeat; <span data-accent>foundations matter</span>.</blockquote>
      <p data-body>${esc(founder.name)} has ${esc(bioClause)} — running paid media, building affiliate programs and rebuilding the measurement underneath growth, for brands in India and the US. Tilth is the result: a foundation-first partner for brands that want growth to last.</p>
      <a data-textlink href="/work/"><span>See the work &rarr;</span></a>
    </div>
  </div>
</section>` : ""}
${records.length ? `
<section id="outcomes" data-sec data-inv data-depth-label="DEEP" aria-labelledby="outcomes-h">
  <div class="v3-reveal">
    <div data-eyebrow>Evidence</div>
    <h2 id="outcomes-h" data-h2 data-gap>Outcomes over vanity metrics.</h2>
  </div>
  <div data-proof-grid>${proof}
  </div>
  <p style="margin:26px 0 0;font-family:'IBM Plex Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.12em;line-height:1.6;color:var(--stone)">Selected experience from our founder and core team.</p>
</section>` : ""}

<section id="cta" data-moss data-depth-label="FOUNDATION" aria-labelledby="cta-h">
  <div data-eyebrow>Next step</div>
  <div data-cta-grid>
    <h2 id="cta-h" data-cta-h>Let's talk about your growth.</h2>
    <div>
      <p data-cta-p>Start with a conversation — the first one is free. We'll look at where growth is getting stuck and whether there's a clear next step.</p>
      <div data-cta-actions>
        <a data-btn href="/contact/">Discuss your growth project <span aria-hidden="true">&rarr;</span></a>
        <a data-textlink href="/contact/"><span>See the work &rarr;</span></a>
      </div>
    </div>
  </div>
</section>
`;

export default {
  path,
  shell: "v3",
  shellClass: "v3-core v3-about",
  headExtra: `<link rel="stylesheet" href="/assets/core-company.css">`,
  title: "About Tilth — Founder-Led Performance Marketing Agency",
  description: "Meet Tilth, a founder-led performance marketing agency with 10+ years of hands-on growth experience across India and the US.",
  ogTitle: "About Tilth — built by someone who's done the work",
  ogDescription: "Founder-led, foundation-first performance marketing for brands across India and the US.",
  ogType: "profile",
  schema: [bc.schema, personSchema].filter(Boolean),
  main
};

import { site, services } from "../data.mjs";
import { ctaBlock, caseStudySnapshots, orgSchema, esc } from "../render.mjs";

const path = "/";

// Featured services power both the hero rotator (intent segmentation + internal links)
// and the services grid below. Order is deliberate.
const featuredSlugs = [
  "growth-strategy-measurement",
  "performance-marketing",
  "seo-ai-search",
  "affiliate-partnerships",
  "website-design-development"
];
const featured = featuredSlugs.map(s => services.find(x => x.slug === s)).filter(Boolean);

// Rotator phrases: real DOM text, each linking to a service page (SEO: internal links + keyword anchors)
const rotator = [
  { label: "Affiliate Growth", href: "/services/affiliate-partnerships/" },
  { label: "Paid Media that scales", href: "/services/paid-media/" },
  { label: "Performance Marketing", href: "/services/performance-marketing/" },
  { label: "SEO & AI Search", href: "/services/seo-ai-search/" },
  { label: "a site that converts", href: "/services/website-design-development/" },
  { label: "Growth Strategy & Measurement", href: "/services/growth-strategy-measurement/" }
];

const step = (n, title, body) => `<div class="cap"><span class="cap__n">${n}</span><h3>${esc(title)}</h3><p>${esc(body)}</p></div>`;
const svcCard = (s, i) => `<a class="gcard gcard--featured" href="/services/${s.slug}/">
    <span class="gcard__n">${String(i + 1).padStart(2, "0")}</span>
    <span class="gcard__name">${esc(s.name)}</span>
    <span class="gcard__desc">${esc(s.summary)}</span>
    <span class="gcard__more">Explore →</span>
  </a>`;

const headExtra = `<style>
  /* Hero intent rotator — links live in the DOM (SEO), JS only cycles visibility */
  .hero-rotator{font-family:'Fraunces',serif;font-size:clamp(19px,2.6vw,28px);line-height:1.2;margin:2px 0 22px;color:var(--text)}
  .hero-rotator .rot{position:relative;display:inline-block;min-width:14ch}
  .hero-rotator .rot__item{position:absolute;left:0;top:0;white-space:nowrap;opacity:0;pointer-events:none;transform:translateY(.28em);transition:opacity .45s ease,transform .45s ease;color:var(--terra);font-style:italic;text-decoration:none;border-bottom:1.5px solid currentColor;padding-bottom:1px}
  .hero-rotator .rot__item.is-active{position:relative;opacity:1;pointer-events:auto;transform:none}
  .cap__n{display:block;font-family:'Fraunces',serif;color:var(--terra);font-size:14px;margin-bottom:6px}
  .pills{display:grid;gap:16px;margin-top:28px}
  @media(min-width:820px){.pills{grid-template-columns:1fr 1fr 1fr;gap:24px}}
  .pill{border-left:2px solid var(--terra);padding-left:16px;font-size:15px;line-height:1.5;color:var(--text)}
  .pill b{display:block;font-family:'Fraunces',serif;font-weight:500;font-size:18px;color:var(--ink);margin-bottom:4px}
  .whychips{display:flex;flex-wrap:wrap;gap:10px;margin-top:32px}
  .whychips span{font-size:12.5px;letter-spacing:.3px;color:var(--ink);border:1px solid var(--rule);border-radius:999px;padding:9px 15px}
  @media (prefers-reduced-motion: reduce){.hero-rotator .rot__item{transition:none}}
</style>`;

const main = `
<section class="ghero">
  <div class="wrap">
    <span class="label">Global Growth Marketing Agency</span>
    <h1>A growth marketing agency built on <em>stronger foundations</em>.</h1>
    <p class="hero-rotator">Looking for <span class="rot">${rotator.map((r, i) =>
      `<a class="rot__item${i === 0 ? " is-active" : ""}" href="${r.href}">${esc(r.label)}</a>`).join("")}</span>?</p>
    <p class="lede">We strengthen the systems beneath your growth, then scale performance against verified return.</p>
    <div class="actions">
      <a class="btn" href="/contact/"><span>Discuss Your Growth Project</span> <span class="arrow">→</span></a>
    </div>
    <div class="trust__markers" style="margin-top:28px">
      <span class="trust__marker">Founder-led</span><span class="trust__dot" aria-hidden="true">·</span>
      <span class="trust__marker">Foundation-first</span><span class="trust__dot" aria-hidden="true">·</span>
      <span class="trust__marker">10+ years across fitness, edtech, fintech, SaaS &amp; D2C</span>
    </div>
  </div>
</section>

<section class="gsec gsec--light">
  <div class="wrap">
    <span class="label">How we work</span>
    <h2>Diagnose before you prescribe. Scale only what the system can <em>carry</em>.</h2>
    <p class="intro">Most growth stalls on a foundation that can't carry the spend — broken tracking, unclear positioning, sites that don't convert. We fix that first, so budget compounds instead of leaking.</p>
    <div class="cap-grid">
      ${step("01", "Diagnose", "We map the growth system end to end — tracking, funnel, creative, channels — and find what's actually capping return. No new spend until we know where it leaks.")}
      ${step("02", "Build the foundation", "Clean measurement, defined funnel stages, positioning that converts, and a creative testing loop — the layer everything compounds on.")}
      ${step("03", "Scale against proof", "Only once the foundation holds do we push budget — against verified return, with every rupee attributable to a stage.")}
    </div>
  </div>
</section>

<section class="gsec">
  <div class="wrap">
    <span class="label">What we do</span>
    <h2>One accountable partner for the whole growth system.</h2>
    <div class="card-grid">
      ${featured.map((s, i) => svcCard(s, i)).join("\n      ")}
    </div>
    <div class="actions" style="margin-top:28px"><a class="text-cta" href="/services/">Explore all services →</a></div>
  </div>
</section>

<section class="gsec gsec--light">
  <div class="wrap">
    <span class="label">Evidence</span>
    <h2>Outcomes over vanity metrics.</h2>
    <p class="intro">From anonymised engagements — the numbers, never the names.</p>
    <div class="proof-row">${caseStudySnapshots()}</div>
  </div>
</section>

<section class="gsec">
  <div class="wrap">
    <span class="label">How we're built</span>
    <h2>Global-first. US-aware. India-rooted.</h2>
    <div class="pills">
      <span class="pill"><b>Global-first</b>We work with ambitious brands wherever growth is happening — the method isn't tied to a geography.</span>
      <span class="pill"><b>US-aware</b>Fluent in how demanding markets like the US research, convert and churn — measurement built to match.</span>
      <span class="pill"><b>India-rooted</b>Built and based in India, registered in Bengaluru — senior work kept close, fast and accountable.</span>
    </div>
    <div class="whychips">
      <span>Founder-led direction</span>
      <span>Foundation-first</span>
      <span>One accountable partner</span>
      <span>Proof, not promises</span>
    </div>
  </div>
</section>

${ctaBlock({
  eyebrow: "Next step",
  heading: `Let's talk about your growth.`,
  body: "Tell us what you're trying to grow. We'll review the foundations before recommending the work.",
  primary: { label: "Discuss Your Growth Project", href: "/contact/" }
})}

<script>
(function(){
  var items = [].slice.call(document.querySelectorAll('.hero-rotator .rot__item'));
  if (items.length < 2) return;
  try { if (matchMedia('(prefers-reduced-motion: reduce)').matches) return; } catch(e){}
  var i = 0;
  setInterval(function(){
    items[i].classList.remove('is-active');
    i = (i + 1) % items.length;
    items[i].classList.add('is-active');
  }, 2200);
})();
</script>
`;

const websiteSchema = {
  "@type": "WebSite", "@id": `${site.base}/#website`,
  url: `${site.base}/`, name: site.brand, publisher: { "@id": `${site.base}/#org` }
};

export default {
  path,
  title: "Global Growth Marketing Agency | Tilth",
  description: "Tilth is a global, founder-led growth marketing agency. We strengthen strategy, measurement, creative and customer acquisition before scaling paid media.",
  ogTitle: "A growth marketing agency built on stronger foundations",
  ogDescription: "Global, founder-led, foundation-first growth marketing — strategy, measurement, creative and acquisition, then scale against verified return.",
  headExtra,
  schema: [orgSchema(), websiteSchema],
  main
};

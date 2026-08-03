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
const why = (title, body) => `<div class="cap"><h3>${esc(title)}</h3><p>${esc(body)}</p></div>`;
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
  .hero-rotator .rot__item{position:absolute;left:0;top:0;white-space:nowrap;opacity:0;transform:translateY(.28em);transition:opacity .45s ease,transform .45s ease;color:var(--terra);font-style:italic;text-decoration:none;border-bottom:1.5px solid currentColor;padding-bottom:1px}
  .hero-rotator .rot__item.is-active{position:relative;opacity:1;transform:none}
  .hero-rotator .rot__item:hover{opacity:1}
  .cap__n{display:block;font-family:'Fraunces',serif;color:var(--terra);font-size:14px;margin-bottom:6px}
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
    <span class="label">The pattern we kept seeing</span>
    <h2>Most growth doesn't stall from too little spend. It stalls on a <em>foundation that can't carry it</em>.</h2>
    <p class="intro">Teams push more budget through broken tracking, unclear positioning and sites that don't convert. Spend climbs, efficiency drops, and no one can say which part actually worked. More budget just makes the leak more expensive.</p>
  </div>
</section>

<section class="gsec">
  <div class="wrap">
    <span class="label">How we work</span>
    <h2>Diagnose before you prescribe. Scale only what the system can <em>carry</em>.</h2>
    <div class="cap-grid">
      ${step("01", "Diagnose", "We map the growth system end to end — tracking, funnel, creative, channels — and find what's actually capping return. No new spend until we know where it leaks.")}
      ${step("02", "Build the foundation", "Clean measurement, defined funnel stages, positioning that converts, and a creative testing loop — the layer everything compounds on.")}
      ${step("03", "Scale against proof", "Only once the foundation holds do we push budget — against verified return, with every rupee attributable to a stage.")}
    </div>
  </div>
</section>

<section class="gsec gsec--light">
  <div class="wrap">
    <span class="label">What we do</span>
    <h2>One accountable partner for the whole growth system.</h2>
    <div class="card-grid">
      ${featured.map((s, i) => svcCard(s, i)).join("\n      ")}
    </div>
    <div class="actions" style="margin-top:28px"><a class="text-cta" href="/services/">Explore all services →</a></div>
  </div>
</section>

<section class="gsec">
  <div class="wrap">
    <span class="label">Evidence</span>
    <h2>Outcomes over vanity metrics.</h2>
    <p class="intro">From anonymised engagements — the numbers, never the names.</p>
    <div class="proof-row">${caseStudySnapshots()}</div>
  </div>
</section>

<section class="gsec gsec--light">
  <div class="wrap">
    <span class="label">How we're built</span>
    <h2>Global-first. US-aware. India-rooted.</h2>
    <p class="intro">We work with ambitious brands wherever growth is happening — the method isn't tied to a geography, it's tied to whether the foundation can carry the spend. We're fluent in how demanding markets like the US research, convert and churn, and we build measurement that stands up to that scrutiny. And we're built and based in India, registered in Bengaluru — which keeps senior work close, fast and accountable, at a value global teams notice.</p>
  </div>
</section>

<section class="gsec">
  <div class="wrap">
    <span class="label">Why Tilth</span>
    <h2>Senior, accountable, foundation-first.</h2>
    <div class="cap-grid">
      ${why("Founder-led direction", "Senior strategy on every engagement; you're not handed to a junior team after the pitch.")}
      ${why("Foundation-first", "We fix what growth sits on before we scale it, so results compound instead of leak.")}
      ${why("One accountable partner", "Strategy, execution and measurement coordinated through Tilth, not scattered across vendors.")}
      ${why("Proof, not promises", "Every recommendation is tied to what the numbers actually show.")}
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

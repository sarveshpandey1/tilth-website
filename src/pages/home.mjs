import { site, services } from "../data.mjs";
import { ctaBlock, orgSchema, esc } from "../render.mjs";

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

// Industry marquee (credibility strip). Rendered twice for a seamless -50% loop.
const INDUSTRIES = ["Fitness", "Edtech", "Fintech", "SaaS", "D2C", "Startups"];
const marqueeSet = (hidden) => INDUSTRIES.map(x => `<span${hidden ? ' aria-hidden="true"' : ""}>${esc(x)}</span>`).join("");

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
const svcCard = (s, i) => `<a class="gcard gcard--featured${i === 0 ? " gcard--wide" : ""}" href="/services/${s.slug}/">
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
  /* Phase 3 — industry marquee */
  .marquee{overflow:hidden;border-top:1px solid var(--rule);border-bottom:1px solid var(--rule);padding:16px 0;-webkit-mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent);mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent)}
  .marquee__track{display:flex;width:max-content;animation:tilth-marquee 34s linear infinite}
  .marquee:hover .marquee__track,.marquee:focus-within .marquee__track{animation-play-state:paused}
  .marquee__track span{font-family:'Fraunces',serif;font-size:clamp(16px,2vw,20px);color:var(--text);padding:0 30px;white-space:nowrap}
  .marquee__track span::after{content:"·";margin-left:30px;color:var(--terra)}
  @keyframes tilth-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
  /* Phase 3 — evidence stat band */
  .statband{display:grid;grid-template-columns:1fr;gap:26px;margin-top:36px}
  @media(min-width:720px){.statband{grid-template-columns:repeat(3,1fr);gap:32px}}
  .stat-v{display:block;font-family:'Fraunces',serif;font-weight:500;font-size:clamp(34px,5vw,52px);line-height:1;letter-spacing:-1px;font-variant-numeric:tabular-nums;color:var(--ink)}
  .stat-l{display:block;margin-top:10px;font-size:13.5px;color:var(--text);letter-spacing:.3px}
  .stat--media .stat-v{color:var(--glow)} .stat--rev .stat-v{color:var(--terra)}
  .statnote{margin-top:24px;font-size:13.5px;color:var(--olive);max-width:60ch}
  /* Phase 3 — services bento (homepage only): feature first card wide */
  @media(min-width:1000px){.card-grid .gcard--wide{grid-column:span 2}}
  /* Phase 4 — scroll reveal (JS-gated via html.jsr; reduced-motion never sets it) */
  html.jsr .reveal{opacity:0;transform:translateY(18px);transition:opacity .6s var(--ease),transform .6s var(--ease)}
  html.jsr .reveal.in{opacity:1;transform:none}
  /* Phase 4 — mobile sticky CTA */
  .sticky-cta{display:none}
  @media(max-width:760px){
    .sticky-cta{position:fixed;left:14px;right:14px;bottom:calc(14px + env(safe-area-inset-bottom));z-index:60;display:flex;justify-content:center;align-items:center;gap:8px;background:var(--glow);color:var(--bg);font-weight:600;font-size:15px;padding:15px 20px;border-radius:40px;box-shadow:0 12px 30px rgba(0,0,0,.45);opacity:0;transform:translateY(24px);pointer-events:none;transition:opacity .3s var(--ease),transform .3s var(--ease)}
    .sticky-cta.show{opacity:1;transform:none;pointer-events:auto}
  }
  @media (prefers-reduced-motion: reduce){.sticky-cta{transition:none}}
  @media (prefers-reduced-motion: reduce){.hero-rotator .rot__item{transition:none}.marquee__track{animation:none}}
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

<div class="marquee" role="group" aria-label="Industries we work across">
  <div class="marquee__track">${marqueeSet(false)}${marqueeSet(true)}</div>
</div>

<section class="gsec gsec--light reveal">
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

<section class="gsec reveal">
  <div class="wrap">
    <span class="label">What we do</span>
    <h2>One accountable partner for the whole growth system.</h2>
    <div class="card-grid">
      ${featured.map((s, i) => svcCard(s, i)).join("\n      ")}
    </div>
    <div class="actions" style="margin-top:28px"><a class="text-cta" href="/services/">Explore all services →</a></div>
  </div>
</section>

<section class="gsec gsec--light reveal">
  <div class="wrap">
    <span class="label">Evidence</span>
    <h2>Outcomes over vanity metrics.</h2>
    <p class="intro">From anonymised engagements — the numbers, never the names.</p>
    <div class="statband">
      <div class="stat stat--media"><span class="stat-v">₹5L → ₹30L</span><span class="stat-l">Monthly media investment, scaled</span></div>
      <div class="stat stat--rev"><span class="stat-v" data-count="1.5" data-decimals="1" data-prefix="₹" data-suffix="Cr">₹1.5Cr</span><span class="stat-l">Monthly revenue reached</span></div>
      <div class="stat stat--ret"><span class="stat-v" data-count="5" data-suffix="×">5×</span><span class="stat-l">Return on ad spend</span></div>
    </div>
    <p class="statnote">Separately, a rebuilt affiliate program grew from ~0 to ~5–6% of total trading volume within a year.</p>
  </div>
</section>

<section class="gsec reveal">
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

<a class="sticky-cta" id="stickyCta" href="/contact/" aria-hidden="true" tabindex="-1"><span>Discuss Your Growth Project</span> <span aria-hidden="true">→</span></a>

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
/* Phase 3 — Evidence stat count-up when scrolled into view */
(function(){
  var els = [].slice.call(document.querySelectorAll('.stat-v[data-count]'));
  if (!els.length) return;
  var rm = false; try { rm = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch(e){}
  function fmt(el, v){ var d=+(el.getAttribute('data-decimals')||0); return (el.getAttribute('data-prefix')||'') + v.toFixed(d) + (el.getAttribute('data-suffix')||''); }
  function run(el){
    var to = parseFloat(el.getAttribute('data-count'));
    if (rm){ el.textContent = fmt(el, to); return; }
    var t0=null, D=1100;
    requestAnimationFrame(function step(now){
      if(t0==null)t0=now; var k=Math.min(1,(now-t0)/D), e=1-Math.pow(1-k,3);
      el.textContent = fmt(el, to*e);
      if(k<1) requestAnimationFrame(step); else el.textContent = fmt(el, to);
    });
  }
  if (!('IntersectionObserver' in window)){ els.forEach(function(el){ el.textContent = fmt(el, parseFloat(el.getAttribute('data-count'))); }); return; }
  var io = new IntersectionObserver(function(ens){ ens.forEach(function(en){ if(en.isIntersecting){ run(en.target); io.unobserve(en.target); } }); }, { threshold:.5 });
  els.forEach(function(el){ io.observe(el); });
})();
/* Phase 4 — scroll reveal (JS-gated; skipped under reduced-motion so content stays visible) */
(function(){
  var root=document.documentElement, rm=false;
  try{ rm=matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){}
  var els=[].slice.call(document.querySelectorAll('.reveal'));
  if(!els.length || rm || !('IntersectionObserver' in window)) return;
  root.classList.add('jsr');
  var io=new IntersectionObserver(function(ens){ens.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});},{threshold:.12});
  els.forEach(function(el){ io.observe(el); });
})();
/* Phase 4 — mobile sticky CTA (shows past the hero, hides at the main CTA) */
(function(){
  var el=document.getElementById('stickyCta'); if(!el || !('IntersectionObserver' in window)) return;
  var mq; try{ mq=matchMedia('(max-width:760px)'); }catch(e){ return; }
  var hero=document.querySelector('.ghero'), cta=document.querySelector('.cta-band');
  if(!hero || !cta) return;
  var heroV=true, ctaV=false;
  function upd(){ var show=mq.matches && !heroV && !ctaV; el.classList.toggle('show',show); el.setAttribute('aria-hidden',show?'false':'true'); el.tabIndex=show?0:-1; }
  new IntersectionObserver(function(e){ heroV=e[0].isIntersecting; upd(); },{threshold:0}).observe(hero);
  new IntersectionObserver(function(e){ ctaV=e[0].isIntersecting; upd(); },{threshold:0}).observe(cta);
  if(mq.addEventListener) mq.addEventListener('change',upd);
  upd();
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

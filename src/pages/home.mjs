import {
  site, heroServiceChips, brandExperience, homeIndustries,
  homeServices, homeApproach, whyTilth, homeFaqs
} from "../data.mjs";
import { latestInsights } from "../insights.mjs";
import { ctaBlock, orgSchema, websiteSchema, esc } from "../render.mjs";

const path = "/";

// Hero intent rotator. Kept at the owner's request (workbook T-002 had specified
// removing it). Static prefix "Looking for" + one rotating natural phrase + "?".
//
// Accessibility contract: exactly ONE phrase is in the accessible tree at a time —
// the inactive ones carry aria-hidden + tabindex="-1", which JS swaps as it cycles.
// Without that, a screen reader reads the whole set as one run-on sentence. There is
// deliberately no aria-live region, so the rotation is never announced as it changes.
// Service coverage does not depend on this element: the crawlable chips below the hero
// are the canonical list, so the phrases stay natural rather than keyword-stuffed.
// "Performance Marketing" is intentionally absent — it overlaps with Paid Media.
const rotator = [
  { label: "paid media that scales", href: "/services/paid-media/" },
  { label: "SEO that compounds", href: "/services/seo-ai-search/" },
  { label: "an affiliate channel that performs", href: "/services/affiliate-partnerships/" },
  { label: "a website that converts", href: "/services/website-design-development/" },
  { label: "a growth strategy built on evidence", href: "/services/growth-strategy-measurement/" }
];
// index 0 is server-rendered as the active, meaningful default (no JS required)
const rotItem = (r, i) => `<a class="rot__item${i === 0 ? " is-active" : ""}" href="${r.href}"${i === 0 ? "" : ' aria-hidden="true" tabindex="-1"'}>${esc(r.label)}</a>`;

// --- Section components (workbook Page Structure order) -----------------------

// Compact strips: fixed terracotta label pinned left, content on the right. Brands
// scroll; industries are static and individually clickable. Both use one semantic <ul>;
// the brand strip's second <ul> is a purely visual clone for the seamless -50% loop and
// is hidden from assistive tech, so six names are announced rather than twelve.
// Text wordmarks by owner directive — official logo designs are not recreated. When an
// approved image exists on a record it swaps in without changing the layout.
const brandItem = b => b.logo
  ? `<li class="strip__item"><img src="${b.logo}" alt="${esc(b.name)}" height="24" loading="lazy" decoding="async"></li>`
  : `<li class="strip__item">${esc(b.name)}</li>`;
const brandSet = hidden => `<ul class="strip__set"${hidden ? ' aria-hidden="true"' : ""}>${brandExperience.map(brandItem).join("")}</ul>`;
const industryItem = i => `<li class="strip__item"><a href="${i.href}">${esc(i.label)}</a></li>`;

const svcCard = s => `<article class="gcard gcard--featured">
      <span class="gcard__n">${esc(s.n)}</span>
      <h3 class="gcard__name"><a href="${s.href}">${esc(s.name)}</a></h3>
      <p class="gcard__desc">${esc(s.desc)}</p>
      <span class="gcard__more" aria-hidden="true">Explore →</span>
    </article>`;

const stepCard = s => `<div class="cap"><span class="cap__n">${esc(s.n)}</span><h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p></div>`;

const whyCard = w => `<div class="whycard"><h3>${esc(w.name)}</h3><p>${esc(w.desc)}</p></div>`;

const niceDate = d => new Date(d + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
const insightCard = a => `<article class="icard">
      <time class="icard__date" datetime="${esc(a.date)}">${esc(niceDate(a.date))}</time>
      <h3 class="icard__title"><a href="${a.href}">${esc(a.title)}</a></h3>
      <p class="icard__ex">${esc(a.excerpt)}</p>
    </article>`;

// FAQ: native <details>/<summary> — keyboard operable, state exposed by the browser,
// and answers stay in the DOM for crawlers even when collapsed (T-012).
// Copy Deck specifies "h3/button" for faq_01..05. <summary> already carries the button
// semantics; the <h3> puts each question in the document outline so screen-reader users
// can navigate the FAQ by heading.
const faqItem = f => `<details class="faq__item"><summary><h3>${esc(f.q)}</h3><span class="ic" aria-hidden="true"></span></summary><div class="faq__ans"><p>${f.a}</p></div></details>`;

const headExtra = `<style>
  /* Hero intent rotator — kept at owner's request. Links live in the DOM (SEO); JS only cycles visibility */
  .hero-rotator{font-family:'Fraunces',serif;font-size:clamp(19px,2.6vw,28px);line-height:1.2;margin:16px 0 24px;color:var(--text)}
  .hero-rotator .rot{position:relative;display:inline-block;min-width:14ch}
  .hero-rotator .rot__item{position:absolute;left:0;top:0;white-space:nowrap;opacity:0;pointer-events:none;transform:translateY(.28em);transition:opacity .45s ease,transform .45s ease;color:var(--terra);font-style:italic;text-decoration:none;border-bottom:1.5px solid currentColor;padding-bottom:1px}
  .hero-rotator .rot__item.is-active{position:relative;opacity:1;pointer-events:auto;transform:none}
  /* On narrow screens the longest phrase ("Growth Strategy & Measurement") overflowed the
     viewport because the items are nowrap. Allow wrapping and reserve two lines so the
     swap doesn't shift layout (CLS) as phrases of different length cycle through. */
  @media(max-width:560px){
    .hero-rotator{font-size:clamp(17px,4.4vw,22px)}
    .hero-rotator .rot{min-width:0;max-width:100%;min-height:2.4em;vertical-align:top}
    .hero-rotator .rot__item{white-space:normal;max-width:100%}
  }
  .ghero .actions{display:flex;flex-wrap:wrap;align-items:center;gap:20px 28px}
  .hero-cred{margin-top:26px;font-size:15px;color:var(--text)}
  .cap__n{display:block;font-family:'Fraunces',serif;color:var(--terra);font-size:14px;margin-bottom:6px}

  /* Compact strips (original design): pinned terracotta label left, content right.
     Brands scroll; industries are static links. The two sit flush so they read as one
     band under the hero — adjacent borders collapse to a single rule. */
  .strip{display:flex;align-items:stretch;border-top:1px solid var(--rule)}
  .strip--static{border-bottom:1px solid var(--rule)}
  .strip__label{flex:none;display:flex;align-items:center;font-family:'Fraunces',serif;font-style:italic;font-weight:400;font-size:clamp(15px,1.9vw,20px);line-height:1.2;color:var(--terra);white-space:nowrap;margin:0;padding:14px 22px 14px 6vw;background:var(--bg);border-right:1px solid var(--rule);position:relative;z-index:2}
  .strip__vp{flex:1;min-width:0;overflow:hidden;padding:14px 0;-webkit-mask-image:linear-gradient(90deg,transparent,#000 4%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 4%,#000 92%,transparent)}
  .strip__track{display:flex;width:max-content;animation:tilth-marquee 34s linear infinite}
  .strip:hover .strip__track,.strip:focus-within .strip__track{animation-play-state:paused}
  .strip__set{display:flex;align-items:center;list-style:none;margin:0;padding:0}
  .strip__item{font-family:'Fraunces',serif;font-size:clamp(16px,2vw,20px);color:var(--text);padding:0 26px;white-space:nowrap}
  .strip__item::after{content:"·";margin-left:26px;color:var(--terra)}
  .strip__item img{display:block;height:24px;width:auto;object-fit:contain}
  .strip__item a{color:var(--text);text-decoration:none;transition:color .25s}
  .strip__item a:hover,.strip__item a:focus-visible{color:var(--glow)}
  /* static industries: no trailing separator, and the list may wrap on narrow screens */
  .strip__set--static{flex-wrap:wrap;row-gap:6px}
  .strip__set--static .strip__item:last-child::after{content:"";margin:0}
  .strip--static .strip__vp{-webkit-mask-image:none;mask-image:none}
  @keyframes tilth-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
  /* narrow screens: a long pinned label crowds the strip, so stack it above a full-width row */
  @media(max-width:640px){
    .strip{flex-direction:column;align-items:stretch}
    .strip__label{border-right:0;border-bottom:1px solid var(--rule);padding:11px 6vw;font-size:14px;justify-content:flex-start}
    .strip__vp{padding:12px 0}
    .strip__set--static{padding:0 6vw}
    .strip__item{padding:0 18px}
    .strip__item::after{margin-left:18px}
    .strip__set--static .strip__item:first-child{padding-left:0}
  }

  /* Selected Growth Outcomes — proof cards */
  .ocards{display:grid;gap:18px;margin-top:var(--space-block)}
  @media(min-width:900px){.ocards{grid-template-columns:3fr 2fr;align-items:start}}
  .ocard{border:1px solid var(--rule);border-radius:14px;padding:26px}
  .ocard__h{font-family:'Fraunces',serif;font-weight:500;font-size:20px;color:var(--ink);margin:0 0 16px}
  .ocard__p{font-size:15px;line-height:1.6;color:var(--text);margin:16px 0 0}
  .ocard .statband{margin-top:0}

  /* Why Tilth — four benefit cards */
  .whygrid{display:grid;gap:16px;margin-top:var(--space-block)}
  @media(min-width:720px){.whygrid{grid-template-columns:1fr 1fr}}
  .whycard{border-left:2px solid var(--terra);padding:4px 0 4px 18px}
  .whycard h3{font-family:'Fraunces',serif;font-weight:500;font-size:18px;color:var(--ink);margin:0 0 6px}
  .whycard p{font-size:14.5px;line-height:1.6;color:var(--text);margin:0}
  .gsec--light .whycard h3{color:#15110B}
  .gsec--light .whycard p{color:#4B4239}

  /* FAQ sits in a cream (gsec--light) section on the dark-default page. The shared
     .faq__* styles use light-theme tokens, so force dark-on-cream or the questions
     render invisible (same class of bug as the stat band). */
  /* the question is an <h3> for the outline — strip heading defaults so it keeps
     the summary's typography and flex layout exactly as before */
  .faq__item summary h3{font:inherit;color:inherit;margin:0;font-weight:inherit;letter-spacing:inherit}
  .gsec--light .faq__item{border-color:rgba(26,21,16,.14)}
  .gsec--light .faq__item summary{color:#15110B}
  .gsec--light .faq__item summary:hover,.gsec--light .faq__item[open] summary{color:#5F7F37}
  .gsec--light .faq__item .ic::before,.gsec--light .faq__item .ic::after{background:#5F7F37}
  .gsec--light .faq__ans p{color:#4B4239}
  .gsec--light .faq__ans a{color:#5F7F37;border-bottom-color:#5F7F37}

  /* Outcome card stats sit in a narrower column than the old full-width band —
     scale the numerals down so values like "₹5L → ₹30L" don't wrap mid-value */
  /* cap below the shared band's 34px: the card column stops widening at the wrap
     max-width while the font kept scaling, so "₹5L → ₹30L" broke onto two lines */
  .ocard .stat-v{font-size:clamp(22px,2.2vw,30px);white-space:nowrap}
  .ocard .stat-l{font-size:12.5px}
  .ocard .statband{gap:18px}
  @media(min-width:720px){.ocard .statband{gap:20px}}

  /* Latest Insights — static cards, no auto-slider */
  .igrid{display:grid;gap:16px;margin-top:var(--space-block)}
  @media(min-width:760px){.igrid{grid-template-columns:repeat(3,1fr)}}
  .icard{border:1px solid var(--rule);border-radius:12px;padding:22px;display:flex;flex-direction:column;gap:10px}
  .icard__date{font-size:12px;letter-spacing:1.4px;text-transform:uppercase;color:var(--glow)}
  .icard__title{font-family:'Fraunces',serif;font-weight:500;font-size:18px;line-height:1.3;margin:0}
  .icard__title a{color:var(--ink);text-decoration:none}
  .icard__title a:hover,.icard__title a:focus-visible{color:var(--glow)}
  .icard__ex{font-size:14px;line-height:1.6;color:var(--text);margin:0}
  /* Phase 3 — evidence stat band */
  .statband{display:grid;grid-template-columns:1fr;gap:24px;margin-top:var(--space-block)}
  @media(min-width:720px){.statband{grid-template-columns:repeat(3,1fr);gap:32px}}
  .stat-v{display:block;font-family:'Fraunces',serif;font-weight:500;font-size:clamp(34px,5vw,52px);line-height:1;letter-spacing:-1px;font-variant-numeric:tabular-nums;color:var(--ink)}
  .stat-l{display:block;margin-top:10px;font-size:13.5px;color:var(--text);letter-spacing:.3px}
  .stat--media .stat-v{color:var(--glow)} .stat--rev .stat-v{color:var(--terra)}
  .statnote{margin-top:24px;font-size:13.5px;color:var(--olive);max-width:60ch}
  /* Evidence is a cream (gsec--light) section on the dark page — force dark-on-cream so numbers/labels stay readable in dark theme */
  .gsec--light .stat-v{color:#15110B}
  .gsec--light .stat--media .stat-v{color:#5F7F37}
  .gsec--light .stat--rev .stat-v{color:#C2673B}
  .gsec--light .stat-l{color:#4B4239}
  /* Phase 3 — services bento (homepage only): feature first card wide */
  @media(min-width:1000px){.card-grid .gcard--wide{grid-column:span 2}}
  /* Phase 4 — scroll reveal (JS-gated via html.jsr; reduced-motion never sets it) */
  html.jsr .reveal{opacity:0;transform:translateY(18px);transition:opacity .6s var(--ease),transform .6s var(--ease)}
  html.jsr .reveal.in{opacity:1;transform:none}
  /* Phase 4 — mobile sticky CTA */
  .sticky-cta{display:none}
  @media(max-width:900px){
    .sticky-cta{position:fixed;left:14px;right:14px;bottom:calc(14px + env(safe-area-inset-bottom));z-index:60;display:flex;justify-content:center;align-items:center;gap:8px;background:var(--glow);color:var(--bg);font-weight:600;font-size:15px;padding:15px 20px;border-radius:40px;box-shadow:0 12px 30px rgba(0,0,0,.45);opacity:0;transform:translateY(24px);pointer-events:none;transition:opacity .3s var(--ease),transform .3s var(--ease)}
    .sticky-cta.show{opacity:1;transform:none;pointer-events:auto}
  }
  @media (prefers-reduced-motion: reduce){.sticky-cta{transition:none}}
  /* Reduced motion: the brand strip becomes a static, wrapping, fully readable list */
  @media (prefers-reduced-motion: reduce){
    .strip__track{animation:none;width:auto;flex-wrap:wrap}
    .strip__set{flex-wrap:wrap;row-gap:6px}
    .strip__vp{-webkit-mask-image:none;mask-image:none}
    .strip__track > .strip__set[aria-hidden="true"]{display:none}
  }
</style>`;

const main = `
<section class="ghero" id="hero">
  <div class="wrap">
    <p class="label">Founder-led · Foundation-first</p>
    <h1>A growth marketing agency built for <em>measurable, sustainable growth</em>.</h1>
    <p class="hero-rotator">Looking for <span class="rot">${rotator.map(rotItem).join("")}</span>?</p>
    <p class="lede">We strengthen your strategy, funnel, creative and measurement—then scale what delivers measurable returns.</p>
    <div class="actions">
      <a class="btn" href="/contact/"><span>Discuss Your Growth Strategy</span> <span class="arrow">→</span></a>
      <a class="text-cta" href="/work/">See Our Work →</a>
    </div>
    <p class="hero-cred">10+ years of hands-on growth experience</p>
  </div>
</section>

<section class="strip" id="brand-experience" aria-labelledby="brand-experience-h">
  <h2 class="strip__label" id="brand-experience-h">Selected Brand Experience</h2>
  <div class="strip__vp"><div class="strip__track">${brandSet(false)}${brandSet(true)}</div></div>
</section>

<section class="strip strip--static" id="industries" aria-labelledby="industries-h">
  <h2 class="strip__label" id="industries-h">Industries We Know</h2>
  <div class="strip__vp"><ul class="strip__set strip__set--static">${homeIndustries.map(industryItem).join("")}</ul></div>
</section>

<section class="gsec reveal" id="services" aria-labelledby="services-h">
  <div class="wrap">
    <p class="label">What We Do</p>
    <h2 id="services-h">Growth marketing services built around the full funnel.</h2>
    <p class="intro">One accountable partner connecting strategy, execution and measurement.</p>
    <div class="card-grid">
      ${homeServices.map(svcCard).join("\n      ")}
    </div>
    <div class="actions" style="margin-top:28px"><a class="text-cta" href="/services/">Explore All Services →</a></div>
  </div>
</section>

<section class="gsec gsec--light reveal" id="approach" aria-labelledby="approach-h">
  <div class="wrap">
    <p class="label">How We Work</p>
    <h2 id="approach-h">Fix the bottleneck before you scale the budget.</h2>
    <p class="intro">Most growth problems are not channel problems. They come from weak tracking, unclear positioning, fragmented funnels or low conversion. We diagnose the constraint first, fix the system, then scale the channels that prove their value.</p>
    <div class="cap-grid">
      ${homeApproach.map(stepCard).join("\n      ")}
    </div>
    <div class="actions" style="margin-top:28px"><a class="text-cta" href="/approach/">Explore the Tilth Approach →</a></div>
  </div>
</section>

<section class="gsec reveal" id="outcomes" aria-labelledby="outcomes-h">
  <div class="wrap">
    <p class="label">Selected Outcomes</p>
    <h2 id="outcomes-h">Selected growth outcomes.</h2>
    <p class="intro">Selected outcomes from client work. Some names are withheld under confidentiality agreements.</p>
    <div class="ocards">
      <article class="ocard">
        <h3 class="ocard__h">EdTech acquisition &amp; measurement</h3>
        <div class="statband">
          <div class="stat stat--media"><span class="stat-v">₹5L → ₹30L</span><span class="stat-l">Monthly media investment, scaled</span></div>
          <div class="stat stat--rev"><span class="stat-v" data-count="1.5" data-decimals="1" data-prefix="₹" data-suffix="Cr">₹1.5Cr</span><span class="stat-l">Monthly revenue reached</span></div>
          <div class="stat stat--ret"><span class="stat-v" data-count="5" data-suffix="×">5×</span><span class="stat-l">Return on ad spend</span></div>
        </div>
        <p class="ocard__p">Rebuilt conversion tracking and campaign structure, then scaled monthly media investment against verified return.</p>
      </article>
      <article class="ocard">
        <h3 class="ocard__h">FinTech affiliate growth</h3>
        <p class="ocard__p">Built the channel from the ground up — partner validation, commercial model, tracking and fraud controls — growing affiliate contribution from near zero to ~5–6% of total trading volume within a year.</p>
      </article>
    </div>
    <div class="actions" style="margin-top:28px"><a class="text-cta" href="/work/">View Selected Work →</a></div>
  </div>
</section>

<section class="gsec gsec--light reveal" id="why-tilth" aria-labelledby="why-tilth-h">
  <div class="wrap">
    <p class="label">Why Tilth</p>
    <h2 id="why-tilth-h">Senior thinking, close to the work.</h2>
    <p class="intro">No junior handoff. No channel-first recommendations. Strategy, execution and measurement stay connected from diagnosis through scale.</p>
    <div class="whygrid">
      ${whyTilth.map(whyCard).join("\n      ")}
    </div>
  </div>
</section>

<section class="gsec reveal" id="latest-insights" aria-labelledby="latest-insights-h">
  <div class="wrap">
    <p class="label">Latest Insights</p>
    <h2 id="latest-insights-h">Thinking behind the work.</h2>
    <p class="intro">Practical perspectives on growth systems, measurement, acquisition and conversion.</p>
    <div class="igrid">
      ${latestInsights(3).map(insightCard).join("\n      ")}
    </div>
    <div class="actions" style="margin-top:28px"><a class="text-cta" href="/insights/">Explore All Insights →</a></div>
  </div>
</section>

<section class="gsec gsec--light reveal" id="faq" aria-labelledby="faq-h">
  <div class="wrap wrap-narrow">
    <p class="label">FAQ</p>
    <h2 id="faq-h">Questions before we start.</h2>
    <div class="faq__list">
      ${homeFaqs.map(faqItem).join("\n      ")}
    </div>
  </div>
</section>

${ctaBlock({
  eyebrow: "Next step",
  heading: `Ready to build growth on stronger foundations?`,
  body: "Tell us where growth is slowing, what you have already tried and what success looks like. We’ll identify the right place to start.",
  // one button only: the Foundation Audit CTA is withheld until a dedicated live offer
  // and destination page exist (there is no /foundation-audit/ route today)
  primary: { label: "Discuss Your Growth Strategy", href: "/contact/" }
})}

<a class="sticky-cta" id="stickyCta" href="/contact/" aria-hidden="true" tabindex="-1"><span>Discuss Your Growth Strategy</span> <span aria-hidden="true">→</span></a>

<script>
/* Hero rotator. Moves aria-hidden/tabindex along with the visible state so exactly one
   phrase is ever in the accessible tree or the tab order. No aria-live: the change is
   never announced. Under reduced motion this never runs, leaving the server-rendered
   first phrase as a single static phrase. */
(function(){
  var items = [].slice.call(document.querySelectorAll('.hero-rotator .rot__item'));
  if (items.length < 2) return;
  try { if (matchMedia('(prefers-reduced-motion: reduce)').matches) return; } catch(e){}
  var i = 0;
  setInterval(function(){
    var prev = items[i];
    prev.classList.remove('is-active');
    prev.setAttribute('aria-hidden', 'true');
    prev.setAttribute('tabindex', '-1');
    i = (i + 1) % items.length;
    var next = items[i];
    next.classList.add('is-active');
    next.removeAttribute('aria-hidden');
    next.removeAttribute('tabindex');
  }, 2600);
})();
/* Outcomes stat count-up when scrolled into view */
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
  var mq; try{ mq=matchMedia('(max-width:900px)'); }catch(e){ return; }
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

// FAQPage schema — mirrors the visible accordion (answers are in the DOM either way)
const faqSchema = {
  "@type": "FAQPage",
  mainEntity: homeFaqs.map(f => ({
    "@type": "Question", name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a.replace(/<[^>]+>/g, "") }
  }))
};

export default {
  path,
  // Metadata per workbook SEO & Technical sheet (T-015)
  title: "Growth Marketing Agency for India & US Brands | Tilth",
  description: "Tilth is a founder-led growth marketing agency helping brands across India and the US improve strategy, paid media, SEO, conversion and measurement.",
  ogTitle: "A growth marketing agency built for measurable, sustainable growth",
  ogDescription: "Founder-led, foundation-first growth marketing for brands across India and the US — strategy, paid media, SEO, conversion and measurement.",
  headExtra,
  schema: [orgSchema(), websiteSchema(), faqSchema],
  main
};

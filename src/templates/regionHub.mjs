// Regional hub renderer (/india/, /us/). Section types are data-driven so the same
// renderer serves batches 2–3 (regional service + industry pages) without new markup.
// Everything here reuses the existing design system: .gsec / .gsec--light section shell,
// .card-grid / .gcard cards, .cap-grid steps, .faq__item accordion, ctaBlock, breadcrumbs.
import { site } from "../data.mjs";
import { insightBySlug } from "../insights.mjs";
import { regions, hubHreflang, resolveHref } from "../content-regional.mjs";
import { regionalPages } from "../content-regional-pages.mjs";
import { breadcrumbs, ctaBlock, orgSchema, websiteSchema, esc } from "../render.mjs";

const sectionShell = (s, inner) =>
  `<section class="gsec${s.light ? " gsec--light" : ""} reveal" id="${s.id}" aria-labelledby="${s.id}-h">
  <div class="wrap">
    <p class="label">${esc(s.eyebrow)}</p>
    <h2 id="${s.id}-h">${esc(s.h2)}</h2>
    ${s.standfirst ? `<p class="intro">${esc(s.standfirst)}</p>` : ""}
    ${(s.paragraphs || []).map(p => `<p class="rprose">${esc(p)}</p>`).join("\n    ")}
    ${inner}
  </div>
</section>`;

const ctaLink = c => c ? `<div class="actions" style="margin-top:28px"><a class="text-cta" href="${c.href}">${esc(c.label)} →</a></div>` : "";

// A card is a link when it has an href, and a plain block when it does not (benefit cards).
const card = c => c.href
  ? `<a class="gcard gcard--featured" href="${resolveHref(c)}">
        <h3 class="gcard__name">${esc(c.name)}</h3>
        <p class="gcard__desc">${esc(c.desc)}</p>
        <span class="gcard__more" aria-hidden="true">Explore →</span>
      </a>`
  : `<div class="gcard">
        <h3 class="gcard__name">${esc(c.name)}</h3>
        <p class="gcard__desc">${esc(c.desc)}</p>
      </div>`;

const stepCard = s => `<div class="cap"><span class="cap__n">${esc(s.n)}</span><h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p></div>`;

const niceDate = d => new Date(d + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
const insightCard = a => `<article class="icard">
        <time class="icard__date" datetime="${esc(a.date)}">${esc(niceDate(a.date))}</time>
        <h3 class="icard__title"><a href="${a.href}">${esc(a.title)}</a></h3>
        <p class="icard__ex">${esc(a.excerpt)}</p>
      </article>`;

// FAQ: native <details>/<summary> — keyboard operable, answers stay in the DOM, and the
// question is an <h3> so it appears in the document outline.
const faqItem = ([q, a]) => `<details class="faq__item"><summary><h3>${esc(q)}</h3><span class="ic" aria-hidden="true"></span></summary><div class="faq__ans"><p>${esc(a)}</p></div></details>`;

function renderSection(s) {
  switch (s.type) {
    case "prose":
      return sectionShell(s, "");
    case "cards":
      return sectionShell(s, `<div class="card-grid${s.compact ? " card-grid--compact" : ""}">
      ${s.cards.map(card).join("\n      ")}
    </div>${ctaLink(s.cta)}`);
    case "steps":
      return sectionShell(s, `<div class="cap-grid">
      ${s.steps.map(stepCard).join("\n      ")}
    </div>${ctaLink(s.cta)}`);
    case "insights": {
      const arts = s.slugs.map(insightBySlug).filter(Boolean);
      return sectionShell(s, `<div class="igrid">
      ${arts.map(insightCard).join("\n      ")}
    </div>${ctaLink(s.cta)}`);
    }
    case "list":
      return sectionShell(s, `<ul class="rlist">
      ${s.items.map(i => `<li>${esc(i)}</li>`).join("\n      ")}
    </ul>`);
    case "faq":
      return sectionShell(s, `<div class="faq__list">
      ${s.faqs.map(faqItem).join("\n      ")}
    </div>`);
    default:
      throw new Error("Unknown regional section type: " + s.type);
  }
}

const headExtra = `<style>
  /* Regional pages reuse the global system; these are the only additions. */
  .rlist{list-style:none;margin:var(--space-block) 0 0;padding:0;display:grid;gap:12px;max-width:70ch}
  .rlist li{position:relative;padding-left:20px;font-size:16px;line-height:1.65;color:var(--text)}
  .rlist li::before{content:"";position:absolute;left:0;top:.65em;width:7px;height:1px;background:var(--terra)}
  .gsec--light .rlist li{color:#4B4239}
  .rprose{font-size:16px;line-height:1.7;color:var(--text);max-width:68ch;margin-top:18px}
  .gsec--light .rprose{color:#4B4239}
  .rhero .actions{display:flex;flex-wrap:wrap;align-items:center;gap:20px 28px}
  /* compact industry cards sit 2-up then 4-up rather than the 3-up service grid */
  @media(min-width:640px){.card-grid--compact{grid-template-columns:1fr 1fr}}
  @media(min-width:1000px){.card-grid--compact{grid-template-columns:repeat(4,1fr)}}
  .card-grid--compact .gcard{min-height:0}
  /* benefit + insight cards reuse the homepage patterns */
  .igrid{display:grid;gap:16px;margin-top:var(--space-block)}
  @media(min-width:760px){.igrid{grid-template-columns:repeat(3,1fr)}}
  .icard{border:1px solid var(--rule);border-radius:12px;padding:22px;display:flex;flex-direction:column;gap:10px}
  .icard__date{font-size:12px;letter-spacing:1.4px;text-transform:uppercase;color:var(--glow)}
  .icard__title{font-family:'Fraunces',serif;font-weight:500;font-size:18px;line-height:1.3;margin:0}
  .icard__title a{color:var(--ink);text-decoration:none}
  .icard__title a:hover,.icard__title a:focus-visible{color:var(--glow)}
  .icard__ex{font-size:14px;line-height:1.6;color:var(--text);margin:0}
  .cap__n{display:block;font-family:'Fraunces',serif;color:var(--terra);font-size:14px;margin-bottom:6px}
  /* FAQ inside a cream section inherits light-theme tokens — force dark-on-cream */
  .gsec--light .faq__item{border-color:rgba(26,21,16,.14)}
  .gsec--light .faq__item summary{color:#15110B}
  .gsec--light .faq__item summary:hover,.gsec--light .faq__item[open] summary{color:#5F7F37}
  .gsec--light .faq__item .ic::before,.gsec--light .faq__item .ic::after{background:#5F7F37}
  .gsec--light .faq__ans p{color:#4B4239}
  .faq__item summary h3{font:inherit;color:inherit;margin:0;font-weight:inherit;letter-spacing:inherit}
  html.jsr .reveal{opacity:0;transform:translateY(18px);transition:opacity .6s var(--ease),transform .6s var(--ease)}
  html.jsr .reveal.in{opacity:1;transform:none}
</style>`;

export function regionHub(key) {
  const r = regions[key];
  if (!r) throw new Error("Unknown region: " + key);
  const bc = breadcrumbs([{ name: "Home", path: "/" }, { name: r.breadcrumb, path: r.path }]);

  const main = `
<section class="ghero rhero" id="hero">
  <div class="wrap">
    ${bc.visible}
    <p class="label">${esc(r.hero.eyebrow)}</p>
    <h1>${esc(r.hero.h1)}</h1>
    <p class="lede">${esc(r.hero.lede)}</p>
    <div class="actions">
      <a class="btn" href="${r.hero.primary.href}"><span>${esc(r.hero.primary.label)}</span> <span class="arrow">→</span></a>
      <a class="text-cta" href="${r.hero.secondary.href}">${esc(r.hero.secondary.label)} →</a>
    </div>
  </div>
</section>

${r.sections.map(renderSection).join("\n\n")}

${ctaBlock({
    eyebrow: "Next step",
    heading: esc(r.finalCta.h2),
    body: esc(r.finalCta.body),
    primary: r.finalCta.primary
  })}

<script>
(function(){
  var root=document.documentElement, rm=false;
  try{ rm=matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){}
  var els=[].slice.call(document.querySelectorAll('.reveal'));
  if(!els.length || rm || !('IntersectionObserver' in window)) return;
  root.classList.add('jsr');
  var io=new IntersectionObserver(function(ens){ens.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});},{threshold:.12});
  els.forEach(function(el){ io.observe(el); });
})();
</script>
`;

  // FAQPage mirrors the visible accordion; BreadcrumbList comes from breadcrumbs()
  const faqSection = r.sections.find(s => s.type === "faq");
  const faqSchema = faqSection ? {
    "@type": "FAQPage",
    mainEntity: faqSection.faqs.map(([q, a]) => ({
      "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a }
    }))
  } : null;

  return {
    path: r.path,
    title: r.title,
    description: r.description,
    ogTitle: r.ogTitle,
    ogDescription: r.ogDescription,
    hreflang: hubHreflang(site.base),
    headExtra,
    schema: [orgSchema(), websiteSchema(), bc.schema, faqSchema].filter(Boolean),
    main
  };
}

// Regional child pages (service / industry). Same sections, same components; the only
// differences are a four-level breadcrumb and no hreflang — these are not one-to-one
// regional equivalents of each other, so an hreflang cluster would be a misuse.
export function regionChildPage(pg) {
  const bc = breadcrumbs([
    { name: "Home", path: "/" },
    { name: pg.regionLabel, path: pg.regionPath },
    { name: pg.kindLabel, path: pg.kindPath },
    { name: pg.name, path: pg.path }
  ]);

  const main = `
<section class="ghero rhero" id="hero">
  <div class="wrap">
    ${bc.visible}
    <p class="label">${esc(pg.hero.eyebrow)}</p>
    <h1>${esc(pg.hero.h1)}</h1>
    <p class="lede">${esc(pg.hero.lede)}</p>
    <div class="actions">
      <a class="btn" href="${pg.hero.primary.href}"><span>${esc(pg.hero.primary.label)}</span> <span class="arrow">→</span></a>
      <a class="text-cta" href="${pg.hero.secondary.href}">${esc(pg.hero.secondary.label)} →</a>
    </div>
  </div>
</section>

${pg.sections.map(renderSection).join("\n\n")}

${ctaBlock({
    eyebrow: "Next step",
    heading: esc(pg.finalCta.h2),
    body: esc(pg.finalCta.body),
    primary: pg.finalCta.primary
  })}

<script>
(function(){
  var root=document.documentElement, rm=false;
  try{ rm=matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){}
  var els=[].slice.call(document.querySelectorAll('.reveal'));
  if(!els.length || rm || !('IntersectionObserver' in window)) return;
  root.classList.add('jsr');
  var io=new IntersectionObserver(function(ens){ens.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});},{threshold:.12});
  els.forEach(function(el){ io.observe(el); });
})();
</script>
`;

  const faqSection = pg.sections.find(s => s.type === "faq");
  const faqSchema = faqSection ? {
    "@type": "FAQPage",
    mainEntity: faqSection.faqs.map(([q, a]) => ({
      "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a }
    }))
  } : null;

  return {
    path: pg.path,
    title: pg.title,
    description: pg.description,
    ogTitle: pg.ogTitle,
    ogDescription: pg.ogDescription,
    headExtra,
    schema: [orgSchema(), websiteSchema(), bc.schema, faqSchema].filter(Boolean),
    main
  };
}

export const allRegionHubs = Object.keys(regions).map(regionHub);
export const allRegionChildPages = regionalPages.map(regionChildPage);

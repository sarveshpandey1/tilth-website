import { site, services } from "../data.mjs";
import { serviceContent, serviceRelationship } from "../content.mjs";
import { breadcrumbs, ctaBlock, caseStudySnapshots, esc } from "../render.mjs";

const seoTitle = {
  "growth-strategy-measurement": "Growth Strategy & Marketing Measurement | Tilth",
  "performance-marketing": "Performance Marketing Agency | US & India | Tilth",
  "paid-media": "Paid Media Agency — Google, Meta & LinkedIn Ads | Tilth",
  "seo-ai-search": "SEO & AI Search Agency (AEO / GEO) | Tilth",
  "affiliate-partnerships": "Affiliate & Partnership Marketing Agency | Tilth",
  "brand-creative": "Brand Strategy & Performance Creative | Tilth"
};

export function servicePage(slug) {
  const svc = services.find(s => s.slug === slug);
  const c = serviceContent[slug];
  if (!svc || !c) throw new Error("Missing service content: " + slug);
  const path = `/services/${slug}/`;

  const bc = breadcrumbs([{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: svc.name, path }]);
  const related = services.filter(s => s.slug !== slug && s.prominence === "featured").slice(0, 3);

  const faqSchema = { "@type": "FAQPage", mainEntity: c.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  const serviceSchema = {
    "@type": "Service", name: svc.name, serviceType: svc.keyword, provider: { "@id": `${site.base}/#org` },
    areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "India" }, "Worldwide"],
    description: svc.summary, url: site.base + path
  };

  const main = `
<section class="ghero" id="hero">
  <div class="wrap">
    ${bc.visible}
    <span class="label">${esc(svc.name)}</span>
    <h1>${c.heroTitle}</h1>
    <p class="lede">${esc(c.heroLede)}</p>
    <div class="actions">
      <a class="btn" href="/contact/"><span>Discuss This Challenge</span> <span class="arrow">→</span></a>
      <a class="text-cta" href="/work/">See our work →</a>
    </div>
  </div>
</section>

<section class="gsec" id="problem">
  <div class="wrap">
    <span class="label">The problem</span>
    <h2>${esc(c.problemsHeading)}.</h2>
    <div class="problem-grid">
      ${c.problems.map(p => `<div class="problem">${esc(p)}</div>`).join("\n      ")}
    </div>
  </div>
</section>

${serviceRelationship[slug] ? `<section class="gsec svc-rel" id="related-service">
  <div class="wrap">
    <span class="label">Related service</span>
    <h2>${esc(serviceRelationship[slug].heading)}</h2>
    <p class="intro">${serviceRelationship[slug].body}</p>
  </div>
</section>` : ""}

<section class="gsec gsec--light" id="approach">
  <div class="wrap">
    <span class="label">The approach</span>
    <h2>${esc(c.approachHeading)}.</h2>
    <p class="intro">${esc(c.approachIntro)}</p>
    <div class="cap-grid">
      ${c.capabilities.map(([h, p]) => `<div class="cap"><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="gsec" id="deliverables">
  <div class="wrap">
    <span class="label">What you get</span>
    <h2>Deliverables that make growth measurable.</h2>
    <ul class="deliv">${c.deliverables.map(d => `<li>${esc(d)}</li>`).join("")}</ul>
    <div class="proof-row">
      ${caseStudySnapshots()}
    </div>
  </div>
</section>

<section class="gsec gsec--light faq" id="faq">
  <div class="wrap">
    <span class="label">Questions</span>
    <h2>${esc(svc.name)}, answered.</h2>
    <div class="faq__list">
      ${c.faqs.map(([q, a]) => `<details class="faq__item"><summary><span>${esc(q)}</span><span class="ic" aria-hidden="true"></span></summary><div class="faq__ans"><p>${esc(a)}</p></div></details>`).join("\n      ")}
    </div>
    <p class="faq__foot">Related services: ${related.map(r => `<a href="/services/${r.slug}/">${esc(r.name)}</a>`).join(" · ")}</p>
  </div>
</section>

${ctaBlock({
    eyebrow: "Next step",
    heading: `Ready to work on <em>${esc(svc.name.toLowerCase())}</em>?`,
    body: "Tell us where you are and what you're trying to grow. We'll review the foundations before recommending the work.",
    primary: { label: "Discuss Your Growth Project", href: "/contact/" },
    secondary: { label: "Request a Foundation Audit", href: "/contact/" }
  })}
`;

  return {
    path,
    title: seoTitle[slug] || `${svc.name} | Tilth`,
    description: svc.summary,
    ogTitle: svc.name,
    ogDescription: svc.summary,
    schema: [serviceSchema, bc.schema, faqSchema],
    main
  };
}

// These ship as bespoke Brand v3 pages (src/pages/*.mjs), the same way
// website-design-development already does. Their content stays in
// serviceContent — those pages import it — so only the generated route is
// skipped. Every other service route continues to render from this template
// unchanged.
const BESPOKE = new Set(["performance-marketing", "growth-strategy-measurement", "seo-ai-search"]);

export const allServicePages = Object.keys(serviceContent)
  .filter(slug => !BESPOKE.has(slug))
  .map(servicePage);

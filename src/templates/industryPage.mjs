import { site, services, industries } from "../data.mjs";
import { industryContent } from "../content.mjs";
import { breadcrumbs, ctaBlock, caseStudySnapshots, esc } from "../render.mjs";

const seoTitle = {
  saas: "SaaS Growth Marketing Agency | US & India | Tilth",
  "d2c-ecommerce": "D2C & Ecommerce Marketing Agency | Tilth",
  fintech: "Fintech Marketing Agency | Financial Services Growth | Tilth",
  edtech: "Edtech Growth Marketing Agency | Tilth",
  startups: "Startup Growth Marketing Agency | US & India | Tilth"
};

export function industryPage(slug) {
  const ind = industries.find(i => i.slug === slug);
  const c = industryContent[slug];
  if (!ind || !c) throw new Error("Missing industry content: " + slug);
  const path = `/industries/${slug}/`;
  const bc = breadcrumbs([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries/" }, { name: ind.name, path }]);
  const rel = c.services.map(s => services.find(x => x.slug === s)).filter(Boolean);

  const faqSchema = { "@type": "FAQPage", mainEntity: c.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };

  const main = `
<section class="ghero">
  <div class="wrap">
    ${bc.visible}
    <span class="label">${esc(ind.name)}</span>
    <h1>${c.heroTitle}</h1>
    <p class="lede">${esc(c.heroLede)}</p>
    <div class="actions">
      <a class="btn" href="/contact/"><span>Discuss Your Growth Project</span> <span class="arrow">→</span></a>
      <a class="text-cta" href="/services/">Explore services →</a>
    </div>
  </div>
</section>

<section class="gsec">
  <div class="wrap">
    <span class="label">The context</span>
    <h2>Growth constraints in ${esc(ind.name)}.</h2>
    <p class="intro">${esc(c.intro)}</p>
    <div class="problem-grid">
      ${c.problems.map(p => `<div class="problem">${esc(p)}</div>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="gsec gsec--light">
  <div class="wrap">
    <span class="label">What we focus on</span>
    <h2>The metrics that decide ${esc(ind.name)} growth.</h2>
    <ul class="deliv">${c.metrics.map(m => `<li>${esc(m)}</li>`).join("")}</ul>
    <h3 style="font-family:'Fraunces',serif;font-weight:500;font-size:20px;margin:34px 0 14px;color:#15110B">Relevant services</h3>
    <div class="card-grid">
      ${rel.map(s => `<a class="gcard" href="/services/${s.slug}/"><span class="gcard__n">${esc(s.name)}</span><span class="gcard__desc" style="margin-top:12px">${esc(s.summary)}</span><span class="gcard__more">Explore →</span></a>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="gsec">
  <div class="wrap">
    <span class="label">Evidence</span>
    <h2>Results from comparable engagements.</h2>
    <div class="proof-row">
      ${caseStudySnapshots()}
    </div>
  </div>
</section>

<section class="gsec gsec--light faq">
  <div class="wrap">
    <span class="label">Questions</span>
    <h2>${esc(ind.name)} growth, answered.</h2>
    <div class="faq__list">
      ${c.faqs.map(([q, a]) => `<details class="faq__item"><summary><span>${esc(q)}</span><span class="ic" aria-hidden="true"></span></summary><div class="faq__ans"><p>${esc(a)}</p></div></details>`).join("\n      ")}
    </div>
  </div>
</section>

${ctaBlock({
    eyebrow: "Next step",
    heading: `Growing a ${esc(ind.name)} business?`,
    body: "Tell us where you are and what you're trying to grow. We'll review the foundations before recommending the work.",
    primary: { label: "Discuss Your Growth Project", href: "/contact/" },
    secondary: { label: "Request a Foundation Audit", href: "/contact/" }
  })}
`;

  return {
    path,
    title: seoTitle[slug] || `${ind.name} Growth Marketing | Tilth`,
    description: c.heroLede,
    ogTitle: `${ind.name} growth marketing`,
    ogDescription: c.heroLede,
    schema: [
      { "@type": "Service", name: `${ind.name} growth marketing`, provider: { "@id": `${site.base}/#org` }, areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "India" }, "Worldwide"], description: c.heroLede, url: site.base + path },
      bc.schema, faqSchema
    ],
    main
  };
}

export const allIndustryPages = Object.keys(industryContent).map(industryPage);

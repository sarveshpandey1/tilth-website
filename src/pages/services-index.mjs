import { site, services, engagements } from "../data.mjs";
import { breadcrumbs, ctaBlock, esc } from "../render.mjs";

const path = "/services/";
const bc = breadcrumbs([{ name: "Home", path: "/" }, { name: "Services", path }]);

const featured = services.filter(s => s.prominence === "featured");
const standard = services.filter(s => s.prominence === "standard");

const card = (s, i) => `<a class="gcard ${s.prominence === "featured" ? "gcard--featured" : ""}" href="/services/${s.slug}/">
  <span class="gcard__n">${String(i + 1).padStart(2, "0")}</span>
  <span class="gcard__name">${esc(s.name)}</span>
  <span class="gcard__desc">${esc(s.summary)}</span>
  <span class="gcard__more">Explore →</span>
</a>`;

const engageCard = (e) => `<div class="engage-card">
  <h3>${esc(e.name)}</h3>
  <p>${esc(e.desc)}</p>
  <ul>${e.receives.map(r => `<li>${esc(r)}</li>`).join("")}</ul>
  <a class="text-cta" href="${e.href}">${esc(e.cta)} →</a>
</div>`;

const itemList = { "@type": "ItemList", itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: `${site.base}/services/${s.slug}/` })) };

const main = `
<section class="ghero">
  <div class="wrap">
    ${bc.visible}
    <span class="label">Services</span>
    <h1>Growth marketing services, built on <em>foundations</em>.</h1>
    <p class="lede">We don't start by recommending another channel. We identify what's limiting the growth system, then bring the right service and engagement to fix it — for brands in the US and India.</p>
    <div class="actions">
      <a class="btn" href="/contact/"><span>Discuss a Project</span> <span class="arrow">→</span></a>
      <a class="text-cta" href="/work/">See our work →</a>
    </div>
  </div>
</section>

<section class="gsec gsec--light">
  <div class="wrap">
    <span class="label">Core growth services</span>
    <h2>Where most engagements begin.</h2>
    <div class="card-grid">
      ${featured.map((s, i) => card(s, i)).join("\n      ")}
    </div>
  </div>
</section>

<section class="gsec">
  <div class="wrap">
    <span class="label">Also</span>
    <h2>Distribution, brand and creative.</h2>
    <div class="card-grid">
      ${standard.map((s, i) => card(s, featured.length + i)).join("\n      ")}
    </div>
  </div>
</section>

<section class="gsec gsec--light">
  <div class="wrap">
    <span class="label">Ways to work with Tilth</span>
    <h2>Three ways to engage.</h2>
    <p class="intro">Most relationships start with a diagnosis and grow from there. Pricing is scoped after we understand what actually needs fixing.</p>
    <div class="engage">
      ${engagements.map(engageCard).join("\n      ")}
    </div>
  </div>
</section>

${ctaBlock({
  eyebrow: "Next step",
  heading: `Not sure which service you need?`,
  body: "That's normal — and it's the point. Tell us what you're trying to grow, and we'll recommend the right starting point.",
  primary: { label: "Discuss a Project", href: "/contact/" },
  secondary: { label: "Request a Foundation Audit", href: "/contact/" }
})}
`;

export default {
  path,
  title: "Growth Marketing Services | Performance, SEO, Web, Affiliate | Tilth",
  description: "Tilth's growth marketing services — strategy & measurement, performance marketing, paid media, SEO & AI search, affiliate, website design & development, and brand & creative. Foundation-first, for brands in the US and India.",
  ogTitle: "Growth marketing services, built on foundations",
  ogDescription: "Strategy, performance, paid media, SEO & AI search, affiliate, website and creative — one foundation-first system.",
  schema: [bc.schema, itemList],
  main
};

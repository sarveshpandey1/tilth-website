import { site, industries } from "../data.mjs";
import { industryContent } from "../content.mjs";
import { breadcrumbs, ctaBlock, esc } from "../render.mjs";

const path = "/industries/";
const bc = breadcrumbs([{ name: "Home", path: "/" }, { name: "Industries", path }]);

const card = (ind, i) => `<a class="gcard" href="/industries/${ind.slug}/">
  <span class="gcard__n">${String(i + 1).padStart(2, "0")}</span>
  <span class="gcard__name">${esc(ind.name)}</span>
  <span class="gcard__desc">${esc((industryContent[ind.slug] && industryContent[ind.slug].intro) || "")}</span>
  <span class="gcard__more">Explore →</span>
</a>`;

const itemList = { "@type": "ItemList", itemListElement: industries.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: `${site.base}/industries/${s.slug}/` })) };

const main = `
<section class="ghero" id="hero">
  <div class="wrap">
    ${bc.visible}
    <span class="label">Industries</span>
    <h1>Growth marketing for the sectors we know <em>deeply</em>.</h1>
    <p class="lede">Different sectors break in different places. These are the industries where Tilth has the most direct experience across markets — with the metrics and constraints that actually decide growth.</p>
    <div class="actions">
      <a class="btn" href="/contact/"><span>Discuss a Project</span> <span class="arrow">→</span></a>
      <a class="text-cta" href="/services/">Explore services →</a>
    </div>
  </div>
</section>

<section class="gsec gsec--light" id="industries">
  <div class="wrap">
    <span class="label">Sectors</span>
    <h2>Where we work.</h2>
    <div class="card-grid">
      ${industries.map((ind, i) => card(ind, i)).join("\n      ")}
    </div>
  </div>
</section>

${ctaBlock({
  eyebrow: "Next step",
  heading: `Don't see your sector?`,
  body: "We work with ambitious brands beyond these industries too. Tell us about your business and what you're trying to grow.",
  primary: { label: "Discuss a Project", href: "/contact/" },
  secondary: { label: "Request a Foundation Audit", href: "/contact/" }
})}
`;

export default {
  path,
  title: "Industries We Serve — SaaS, D2C, Fintech, Edtech, Startups | Tilth",
  description: "Growth marketing for SaaS, D2C & ecommerce, fintech, edtech, and startups & scaleups — with the metrics and constraints that decide growth in each sector, across markets.",
  ogTitle: "Industries — growth marketing for the sectors we know",
  ogDescription: "SaaS, D2C & ecommerce, fintech, edtech, and startups & scaleups.",
  schema: [bc.schema, itemList],
  main
};

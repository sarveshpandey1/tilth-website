import { site } from "../data.mjs";
import { breadcrumbs, ctaBlock, caseStudySnapshots, esc } from "../render.mjs";

const path = "/services/website-design-development/";

const problems = [
  "Traffic arrives, but the site doesn't turn it into qualified leads.",
  "The design looks fine, yet key pages underperform and no one knows why.",
  "Positioning, messaging and page structure don't match how buyers actually decide.",
  "Tracking is incomplete, so you can't see where visitors drop off.",
  "The site is slow or awkward on mobile, and it costs conversions.",
  "You're about to increase media spend on a site that can't convert it."
];

const capabilities = [
  ["Strategy & information architecture", "We start from your growth goals and buyers — sitemap, page priorities and the user journeys that lead to a decision, not a template."],
  ["UX & UI design", "Interface design that makes the next step obvious: clear hierarchy, strong messaging, and a premium look that still converts."],
  ["Development", "Fast, accessible, maintainable builds. Clean markup, responsive from the smallest screen up, and structured for search and analytics."],
  ["SEO & analytics foundations", "Technical SEO, metadata, structured data and conversion tracking wired in from day one — so the site is measurable at launch."],
  ["Performance & accessibility", "Core Web Vitals, image and font strategy, and WCAG-aligned accessibility built in, not bolted on."],
  ["CRO & post-launch iteration", "Launch is the starting line. We test hypotheses, read the data and improve conversion month over month."]
];

const websiteTypes = [
  "Corporate marketing websites", "SaaS websites", "D2C & ecommerce websites",
  "Landing pages", "Campaign microsites", "Service-business websites", "Startup launch websites"
];

const faqs = [
  ["What does a Tilth website engagement include?",
   "One coordinated process from strategy through launch and beyond: information architecture, UX and UI design, development, conversion copywriting, analytics and SEO foundations, performance, accessibility, and post-launch conversion-rate optimisation."],
  ["Do you only design, or do you build the website too?",
   "Both. Tilth plans, designs and develops the site as a single accountable process, so strategy, design, code, measurement and conversion stay connected rather than handed between vendors."],
  ["How is this different from a typical web-design agency?",
   "Most web projects optimise for how the site looks. We optimise for what it should do for growth — connecting positioning, user journeys, SEO, analytics and conversion into one system, then improving it with data after launch."],
  ["Will the site be set up to measure conversions?",
   "Yes. Conversion events, analytics and tracking are part of the build, so from launch you can see which pages and journeys produce qualified leads — and what to fix next."],
  ["Can you redesign an existing website or work on specific pages?",
   "Both. We can run a full redesign or a focused engagement — for example, a homepage, key landing pages, or a conversion-rate optimisation program on your current site."]
];

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } }))
};

const serviceSchema = {
  "@type": "Service", name: "Website Design, Development & CRO", serviceType: "Website design and development",
  provider: { "@id": `${site.base}/#org` },
  areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "India" }, "Worldwide"],
  description: "Conversion-focused website design and development — strategy, UX, UI, development, SEO and analytics foundations, performance, accessibility and CRO in one coordinated process.",
  url: site.base + path
};

const bc = breadcrumbs([{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: "Website Design & Development", path }]);

const headExtra = "";

const main = `
<section class="ghero">
  <div class="wrap">
    ${bc.visible}
    <span class="label">Website Design, Development & CRO</span>
    <h1>Conversion-focused <em>website</em> design and development.</h1>
    <p class="lede">Tilth plans, designs and develops marketing websites that connect positioning, user experience, SEO, analytics and conversion into one coordinated growth system — for brands worldwide.</p>
    <div class="actions">
      <a class="btn" href="/contact/"><span>Discuss Your Website Project</span> <span class="arrow">→</span></a>
      <a class="text-cta" href="/work/">See our work →</a>
    </div>
  </div>
</section>

<section class="gsec">
  <div class="wrap">
    <span class="label">The problem</span>
    <h2>A website that looks good but limits growth.</h2>
    <p class="intro">Most sites are built to be launched, not to convert. Before recommending more spend, we look at what the site is actually costing you.</p>
    <div class="problem-grid">
      ${problems.map(p => `<div class="problem">${esc(p)}</div>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="gsec gsec--light">
  <div class="wrap">
    <span class="label">The approach</span>
    <h2>Strategy, design, build and optimisation — one accountable process.</h2>
    <p class="intro">We don't hand your site between a designer, a developer and an analyst. Tilth runs the whole process, so every decision traces back to a growth goal and can be measured after launch.</p>
    <div class="cap-grid">
      ${capabilities.map(([h, p]) => `<div class="cap"><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="gsec">
  <div class="wrap">
    <span class="label">What we build</span>
    <h2>Websites built around your growth strategy.</h2>
    <div class="types">
      ${websiteTypes.map(t => `<span class="type">${esc(t)}</span>`).join("\n      ")}
    </div>
    <div class="proof-row">
      ${caseStudySnapshots()}
    </div>
  </div>
</section>

<section class="gsec gsec--light faq">
  <div class="wrap">
    <span class="label">Questions</span>
    <h2>Website design & development, answered.</h2>
    <div class="faq__list">
      ${faqs.map(([q, a]) => `<details class="faq__item"><summary><span>${esc(q)}</span><span class="ic" aria-hidden="true"></span></summary><div class="faq__ans"><p>${esc(a)}</p></div></details>`).join("\n      ")}
    </div>
  </div>
</section>

${ctaBlock({
  eyebrow: "Next step",
  heading: `Planning a website that has to <em>perform</em>?`,
  body: "Tell us what the site needs to do for growth. We'll review the foundations before recommending a rebuild, a redesign or a focused conversion project.",
  primary: { label: "Discuss Your Website Project", href: "/contact/" },
  secondary: { label: "Request a Foundation Audit", href: "/contact/" }
})}
`;

export default {
  path,
  title: "Website Design & Development Agency | Conversion-Focused | Tilth",
  description: "Tilth designs and develops conversion-focused marketing websites — strategy, UX, UI, development, SEO, analytics and CRO in one coordinated process for brands worldwide.",
  ogTitle: "Conversion-focused website design and development",
  ogDescription: "Websites that connect positioning, UX, SEO, analytics and conversion into one growth system.",
  ogType: "website",
  headExtra,
  schema: [serviceSchema, bc.schema, faqSchema],
  main
};

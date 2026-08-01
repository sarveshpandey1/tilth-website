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

const headExtra = `<style>
  .svcpage-hero{padding:150px 0 70px}
  .svcpage-hero .label{color:var(--glow);margin-bottom:18px;display:block}
  .svcpage-hero h1{font-family:'Fraunces',serif;font-weight:400;font-size:clamp(34px,5.6vw,66px);line-height:1.05;letter-spacing:-1.5px;color:var(--ink);max-width:16ch}
  .svcpage-hero h1 em{color:var(--terra)}
  .svcpage-hero .lede{font-size:18px;color:var(--text);max-width:60ch;margin-top:24px}
  .svcpage-hero .actions{margin-top:34px;display:flex;gap:22px;align-items:center;flex-wrap:wrap}
  .section{padding:90px 0}
  .section--light{background:#F4EFE6;color:#1A1510}
  .section--light .label{color:#5F7F37}
  .section--light h2,.section--light h3{color:#15110B}
  .section--light p,.section--light li{color:#4B4239}
  html[data-theme="light"] .section--light{background:#FFFFFF}
  .section h2{font-family:'Fraunces',serif;font-weight:400;font-size:clamp(26px,4vw,44px);line-height:1.08;letter-spacing:-1px;color:var(--ink);max-width:20ch}
  .section .intro{font-size:17px;color:var(--text);max-width:62ch;margin-top:18px}
  .problem-grid{display:grid;grid-template-columns:1fr;gap:14px;margin-top:40px}
  @media(min-width:720px){.problem-grid{grid-template-columns:1fr 1fr}}
  .problem{border-left:2px solid var(--terra);padding:6px 0 6px 18px;font-size:16px;color:var(--text)}
  .cap-grid{display:grid;grid-template-columns:1fr;gap:2px;margin-top:44px;border-top:1px solid var(--rule)}
  @media(min-width:820px){.cap-grid{grid-template-columns:1fr 1fr}}
  .cap{padding:28px 0;border-bottom:1px solid var(--rule)}
  @media(min-width:820px){.cap:nth-child(odd){padding-right:40px;border-right:1px solid var(--rule)}.cap:nth-child(even){padding-left:40px}}
  .cap h3{font-family:'Fraunces',serif;font-weight:500;font-size:20px;color:var(--ink);margin-bottom:8px}
  .cap p{font-size:15px;color:var(--text);line-height:1.6}
  .types{display:flex;flex-wrap:wrap;gap:10px;margin-top:34px}
  .type{border:1px solid var(--rule);border-radius:40px;padding:9px 18px;font-size:14px;color:var(--ink)}
  .proof-row{display:grid;grid-template-columns:1fr;gap:20px;margin-top:40px}
  @media(min-width:720px){.proof-row{grid-template-columns:1fr 1fr}}
  .proof-card{border:1px solid var(--rule);border-radius:12px;padding:26px}
  .proof-card__label{font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--glow);font-weight:600;margin-bottom:14px}
  .proof-card__metrics{list-style:none;margin:0 0 14px;padding:0}
  .proof-card__metrics li{font-family:'Fraunces',serif;font-size:19px;color:var(--ink);margin-bottom:8px}
  .proof-card__summary{font-size:14.5px;color:var(--text)}
  .crumb{font-size:12px;letter-spacing:.5px;color:var(--olive);padding:26px 0 0}
  .crumb a{color:var(--glow)}
</style>`;

const main = `
<section class="svcpage-hero">
  <div class="wrap">
    ${bc.visible}
    <span class="label">Website Design, Development & CRO</span>
    <h1>Conversion-focused <em>website</em> design and development.</h1>
    <p class="lede">Tilth plans, designs and develops marketing websites that connect positioning, user experience, SEO, analytics and conversion into one coordinated growth system — for brands in the US and India.</p>
    <div class="actions">
      <a class="btn" href="/contact/"><span>Discuss Your Website Project</span> <span class="arrow">→</span></a>
      <a class="text-cta" href="/work/">See our work →</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <span class="label">The problem</span>
    <h2>A website that looks good but limits growth.</h2>
    <p class="intro">Most sites are built to be launched, not to convert. Before recommending more spend, we look at what the site is actually costing you.</p>
    <div class="problem-grid">
      ${problems.map(p => `<div class="problem">${esc(p)}</div>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="section section--light">
  <div class="wrap">
    <span class="label">The approach</span>
    <h2>Strategy, design, build and optimisation — one accountable process.</h2>
    <p class="intro">We don't hand your site between a designer, a developer and an analyst. Tilth runs the whole process, so every decision traces back to a growth goal and can be measured after launch.</p>
    <div class="cap-grid">
      ${capabilities.map(([h, p]) => `<div class="cap"><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="section">
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

<section class="section section--light faq">
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
  description: "Tilth designs and develops conversion-focused marketing websites — strategy, UX, UI, development, SEO, analytics and CRO in one coordinated process for brands in the US and India.",
  ogTitle: "Conversion-focused website design and development",
  ogDescription: "Websites that connect positioning, UX, SEO, analytics and conversion into one growth system.",
  ogType: "website",
  headExtra,
  schema: [serviceSchema, bc.schema, faqSchema],
  main
};

import { site, team } from "../data.mjs";
import { breadcrumbs, ctaBlock, caseStudySnapshots, esc } from "../render.mjs";

const path = "/about/";
const bc = breadcrumbs([{ name: "Home", path: "/" }, { name: "About", path }]);
const founder = team.find(t => t.approved && t.title && /founder/i.test(t.title));

const headExtra = `<style>
  .founder-row{display:grid;grid-template-columns:1fr;gap:40px;align-items:center;margin-top:20px}
  @media(min-width:820px){.founder-row{grid-template-columns:5fr 7fr;gap:60px}}
  .founder-row img{width:100%;max-width:360px;aspect-ratio:4/5;object-fit:cover;border-radius:8px;border:1px solid var(--rule)}
  .founder-row .cap{font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--glow);margin-top:14px}
  .founder-row blockquote{font-family:'Fraunces',serif;font-style:italic;font-size:clamp(22px,3.4vw,34px);line-height:1.3;color:var(--ink);margin-bottom:22px}
  .founder-row .accent{color:var(--terra)}
  .founder-row p{font-size:16px;color:var(--text);margin-bottom:18px;max-width:56ch}
</style>`;

const personSchema = founder ? {
  "@type": "Person", "@id": `${site.base}/#anuja`, name: founder.name, jobTitle: "Founder",
  worksFor: { "@id": `${site.base}/#org` }, url: site.base + path, image: site.base + founder.photo,
  knowsAbout: ["Performance marketing", "Growth strategy", "SEO", "Affiliate marketing", "Marketing measurement"]
} : null;

const main = `
<section class="ghero" style="padding-bottom:24px">
  <div class="wrap">
    ${bc.visible}
    <span class="label">About</span>
    <h1>Built by someone who's <em>done the work</em>.</h1>
    <p class="lede">Tilth is a global growth marketing agency — founder-led and India-rooted, fluent in how demanding markets like the US buy and convert, and built on the belief that growth is a consequence of strong foundations, not more spend.</p>
  </div>
</section>

<section class="gsec">
  <div class="wrap">
    <span class="label">Why Tilth exists</span>
    <h2>The same mistake, repeated across every industry.</h2>
    <p class="intro">Across fitness, edtech, fintech, SaaS and D2C, one pattern kept repeating: teams scaling spend on foundations that couldn't support it — broken tracking, unclear positioning, sites that didn't convert. Tilth exists to fix that first, so growth compounds instead of leaking.</p>
  </div>
</section>

<section class="gsec gsec--light">
  <div class="wrap">
    <span class="label">How we work</span>
    <h2>Senior, accountable, remote-first.</h2>
    <div class="cap-grid">
      <div class="cap"><h3>Founder-led direction</h3><p>Senior strategy on every engagement — you're not handed to a junior team after the pitch.</p></div>
      <div class="cap"><h3>Built for distributed teams</h3><p>Remote-first collaboration with overlap that keeps work moving, wherever your team sits.</p></div>
      <div class="cap"><h3>Foundation-first</h3><p>We diagnose before we prescribe, and only scale once the growth system can carry it.</p></div>
      <div class="cap"><h3>One accountable partner</h3><p>Strategy, execution and measurement coordinated through Tilth — not scattered across vendors.</p></div>
    </div>
  </div>
</section>

${founder ? `<section class="gsec">
  <div class="wrap">
    <span class="label">Founder</span>
    <div class="founder-row">
      <div>
        <img src="${founder.photo}" alt="${esc(founder.name)}, ${esc(founder.title)}" width="720" height="900" loading="lazy" decoding="async">
        <div class="cap">${esc(founder.name)} — ${esc(founder.title)}</div>
      </div>
      <div>
        <blockquote>Ten years, five industries, <span class="accent">one mistake</span> repeated every time.</blockquote>
        <p>${esc(founder.name)} has spent ${esc(founder.bio)} — running paid media, building affiliate programs and rebuilding the measurement underneath growth. Tilth is the result: a foundation-first partner for brands that want growth to last.</p>
        <a class="text-cta" href="/work/">See the work →</a>
      </div>
    </div>
  </div>
</section>` : ""}

<section class="gsec gsec--light">
  <div class="wrap">
    <span class="label">Evidence</span>
    <h2>Outcomes over vanity metrics.</h2>
    <div class="proof-row">${caseStudySnapshots()}</div>
  </div>
</section>

${ctaBlock({
  eyebrow: "Next step",
  heading: `Let's talk about your growth.`,
  body: "Tell us what you're trying to grow. We'll review the foundations before recommending the work.",
  primary: { label: "Discuss a Project", href: "/contact/" },
  secondary: { label: "Request a Foundation Audit", href: "/contact/" }
})}
`;

export default {
  path,
  title: "About Tilth — Founder-Led Global Growth Marketing Agency",
  description: "Tilth is a founder-led, global growth marketing agency — India-rooted, working with brands worldwide. Foundation-first strategy, execution and measurement.",
  ogTitle: "About Tilth — built by someone who's done the work",
  ogDescription: "Founder-led, remote-first, foundation-first growth marketing for ambitious brands worldwide.",
  ogType: "profile",
  headExtra,
  schema: [bc.schema, personSchema].filter(Boolean),
  main
};

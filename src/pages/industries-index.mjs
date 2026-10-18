// /industries/ — Brand v3 hub.
//
// Ported from the frozen Master Design Release design
// "INDUSTRIES/Tilth Industries.dc.html" (5e85dae2…3d83), per
// INDUSTRIES_DESIGN_REPORT.md (f036e6b0…e7f1).
//
// Concept: "sectors stand side by side; the stage runs across them."
// The four sectors are parallel columns of equal standing; Startups & Scaleups
// is a horizontal band on the sector grid's own column positions, which the
// sector rules visibly run down into. The distinction is carried by composition
// alone — the design patch deliberately removed every taxonomy statement
// ("A STAGE, NOT A SECTOR", "ONE OF FOUR SECTORS", "COMPANY STAGE",
// "FOUR SECTORS · ONE COMPANY STAGE"), and none may be reintroduced.
//
// All copy is verbatim from industryContent / industries / services. The only
// new strings are the functional labels the report approves: SECTORS, SECTOR,
// THE METRICS THAT DECIDE GROWTH, RELEVANT SERVICES, EXPLORE <NAME> →.
//
// Prototype-only code is not ported: the .dc runtime and the review controls.
import { site, industries, services } from "../data.mjs";
import { industryContent } from "../content.mjs";
import { breadcrumbs, esc } from "../render.mjs";

const path = "/industries/";
const bc = breadcrumbs([{ name: "Home", path: "/" }, { name: "Industries", path }]);

const MONO = "font-family:'IBM Plex Mono',ui-monospace,monospace";
const num = i => String(i + 1).padStart(2, "0");

// The four sectors are the composition; Startups & Scaleups is the band.
const sectors = industries.filter(i => i.slug !== "startups");
const stage = industries.find(i => i.slug === "startups");

const svcName = slug => (services.find(s => s.slug === slug) || {}).name || "";

// Quiet editorial links to the canonical global service routes — no buttons,
// no cards. They sit above the plate link's stretched area, so the plate stays
// one destination and there are no nested anchors.
const svcRun = c => `<ul data-run style="color:var(--stone)">${c.services
  .map(s => `<li><a data-svc-link href="/services/${s}/">${esc(svcName(s))}</a></li>`)
  .join("")}</ul>`;

const metricRun = c => `<ul data-run>${c.metrics.map(m => `<li>${esc(m)}</li>`).join("")}</ul>`;

const runLabel = t => `<div style="${MONO};font-size:10px;letter-spacing:.14em;line-height:1.5;color:var(--stone);margin-bottom:10px">${t}</div>`;

const sectorPlate = (ind, i) => {
  const c = industryContent[ind.slug];
  return `<div data-sector class="v3-reveal">
        <div style="display:flex;justify-content:space-between;align-items:baseline;gap:12px;${MONO};font-size:10.5px;letter-spacing:.14em;line-height:1;padding-bottom:22px"><span style="color:var(--mosstext)" data-num>${num(i)}</span><span style="color:var(--stone)">SECTOR</span></div>
        <h3 data-sname style="margin:0;padding-bottom:18px;font-family:Syne,sans-serif;font-weight:700;letter-spacing:-.03em;line-height:1.04;text-transform:uppercase"><a data-plate-link href="/industries/${ind.slug}/">${esc(ind.name)}</a></h3>
        <p style="margin:0;padding-bottom:24px;font-size:15px;line-height:1.62;color:var(--stone)">${esc(c.intro)}</p>
        <div style="padding-bottom:22px">${runLabel("THE METRICS THAT DECIDE GROWTH")}
          ${metricRun(c)}</div>
        <div style="padding-bottom:26px">${runLabel("RELEVANT SERVICES")}
          ${svcRun(c)}</div>
        <span style="align-self:end;${MONO};font-size:11px;letter-spacing:.14em;line-height:1" aria-hidden="true">EXPLORE ${esc(ind.name.toUpperCase())} <span data-arrow aria-hidden="true" style="color:var(--mosstext)">&rarr;</span></span>
      </div>`;
};

// The band reuses the sector grid's exact column positions, so the columns
// above run into one continuous surface: name | context | metrics | services.
const stageBand = () => {
  const c = industryContent[stage.slug];
  return `<div data-stage class="v3-reveal">
      <div data-a="name">
        <div style="display:flex;align-items:baseline;gap:14px;${MONO};font-size:10.5px;letter-spacing:.14em;line-height:1;padding-bottom:22px"><span style="color:var(--mosstext)" data-num>05</span></div>
        <h3 data-sname style="margin:0;font-family:Syne,sans-serif;font-weight:700;letter-spacing:-.03em;line-height:1.04;text-transform:uppercase"><a data-plate-link href="/industries/${stage.slug}/">${esc(stage.name)}</a></h3>
      </div>
      <div data-a="intro">
        <p style="margin:0;font-size:15px;line-height:1.62;color:var(--stone);max-width:52ch">${esc(c.intro)}</p>
      </div>
      <div data-a="metrics">${runLabel("THE METRICS THAT DECIDE GROWTH")}
        ${metricRun(c)}</div>
      <div data-a="services">${runLabel("RELEVANT SERVICES")}
        ${svcRun(c)}</div>
      <div data-a="go"><span style="${MONO};font-size:11px;letter-spacing:.14em;line-height:1" aria-hidden="true">EXPLORE ${esc(stage.name.toUpperCase())} <span data-arrow aria-hidden="true" style="color:var(--mosstext)">&rarr;</span></span></div>
    </div>`;
};

// Phone index: the five routes in one glance before the plates. The gap before
// Startups & Scaleups carries the same distinction the band does on wider
// screens, with no label.
const phoneIndex = () => `<nav data-sindex aria-label="Industries index">
      ${sectors.map((ind, i) => `<a href="/industries/${ind.slug}/"><span style="color:var(--mosstext)" data-num>${num(i)}</span>${esc(ind.name)}<span aria-hidden="true" style="color:var(--mosstext)">&rarr;</span></a>`).join("\n      ")}
      <span data-ilab aria-hidden="true"></span>
      <a href="/industries/${stage.slug}/"><span style="color:var(--mosstext)" data-num>05</span>${esc(stage.name)}<span aria-hidden="true" style="color:var(--mosstext)">&rarr;</span></a>
    </nav>`;

const itemList = {
  "@type": "ItemList",
  itemListElement: industries.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: `${site.base}/industries/${s.slug}/` }))
};

const main = `
<section id="hero" data-depth-label="SURFACE" style="padding:112px var(--pad) var(--sy);background-image:linear-gradient(90deg,var(--grid) 1px,transparent 1px);background-size:calc(100%/6) 100%">
  <nav aria-label="Breadcrumb" style="${MONO};font-size:11px;letter-spacing:.14em;line-height:1.6;color:var(--stone);animation:gFade .8s ease both">
    <a href="/" style="color:var(--stone)">HOME</a> <span aria-hidden="true" style="color:var(--mosstext);padding:0 6px">/</span> <span aria-current="page" style="color:var(--fg)">INDUSTRIES</span>
  </nav>
  <div style="${MONO};font-size:11.5px;letter-spacing:.16em;line-height:1;color:var(--mosstext);margin:30px 0 22px;animation:gFade .8s .05s ease both">INDUSTRIES</div>
  <h1 data-h1 style="margin:0;font-family:Syne,sans-serif;font-weight:800;line-height:.94;letter-spacing:-.045em;text-transform:uppercase;animation:gRise 1s cubic-bezier(.16,1,.3,1) both">Growth marketing for the sectors we know <em>deeply</em>.</h1>
  <div data-hero-foot>
    <p style="margin:0;font-size:var(--body);line-height:1.6;max-width:56ch;color:var(--stone);animation:gRise 1s .12s cubic-bezier(.16,1,.3,1) both">Different sectors break in different places. Our founder and core team’s experience spans 10+ industries across India and the US; these are the priority sectors where it runs deepest.</p>
    <div data-hero-cta style="animation:gRise 1s .2s cubic-bezier(.16,1,.3,1) both">
      <a href="/contact/" style="display:inline-flex;align-items:center;justify-content:center;gap:10px;height:54px;background:var(--moss);color:#101310;font-family:Syne,sans-serif;font-weight:700;text-transform:uppercase;border-radius:2px">Discuss your growth project <span aria-hidden="true">&rarr;</span></a>
      <a href="/services/" style="display:inline-flex;align-items:center;height:54px;font-size:14.5px;line-height:1;white-space:nowrap;color:var(--stone)"><span style="border-bottom:1px solid var(--line2);padding-bottom:3px">Explore services &rarr;</span></a>
    </div>
  </div>
</section>

<section id="industries" data-depth-label="MID" aria-labelledby="sectors-h" style="padding:0 var(--pad) var(--sy)">
  <div class="v3-reveal" style="${MONO};font-size:11.5px;letter-spacing:.16em;line-height:1;color:var(--mosstext);margin-bottom:22px">SECTORS</div>
  <div class="v3-reveal" data-sec-head>
    <h2 id="sectors-h" data-h2 style="margin:0;font-family:Syne,sans-serif;font-weight:700;line-height:1.02;letter-spacing:-.035em;text-transform:uppercase">Where we work.</h2>
  </div>
  ${phoneIndex()}
  <div data-sgrid>
      ${sectors.map(sectorPlate).join("\n      ")}
  </div>
  <div data-xover aria-hidden="true"><span></span><span></span><span></span><span></span></div>
  ${stageBand()}
</section>

<section id="cta" data-depth-label="FOUNDATION" style="background:var(--moss);color:#101310;padding:var(--sy) var(--pad)">
  <div style="${MONO};font-size:11.5px;letter-spacing:.16em;line-height:1;color:rgba(16,19,16,.6);margin-bottom:24px">NEXT STEP</div>
  <div data-cta-grid>
    <h2 data-cta-h style="margin:0;font-family:Syne,sans-serif;font-weight:800;line-height:.94;letter-spacing:-.04em;text-transform:uppercase">Don't see your <span style="color:rgba(16,19,16,.62)">sector</span>?</h2>
    <div>
      <p style="margin:0;font-size:var(--body);line-height:1.6;color:rgba(16,19,16,.78);max-width:46ch">Our experience spans 10+ industries — these pages aren't the full list. Tell us about your business and what you're trying to grow.</p>
      <div data-cta-actions style="margin-top:34px">
        <a href="/contact/" style="display:inline-flex;align-items:center;justify-content:center;gap:10px;height:54px;background:#101310;color:#F3F5F1;font-family:Syne,sans-serif;font-weight:700;text-transform:uppercase;border-radius:2px">Discuss your growth project <span aria-hidden="true">&rarr;</span></a>
        <a href="/contact/" style="display:inline-flex;align-items:center;height:54px;font-size:14.5px;line-height:1;white-space:nowrap;color:rgba(16,19,16,.72)"><span style="border-bottom:1px solid rgba(16,19,16,.4);padding-bottom:3px">See the work &rarr;</span></a>
      </div>
    </div>
  </div>
</section>
`;

export default {
  path,
  shell: "v3",
  shellClass: "v3-industries",
  headExtra: `<link rel="stylesheet" href="/assets/industries.css">`,
  title: "Industries We Serve — SaaS, D2C, Fintech, Edtech, Startups | Tilth",
  description: "Growth marketing for SaaS, D2C, fintech, edtech and startups across India and the US — focused on the metrics and constraints that drive growth.",
  ogTitle: "Industries — growth marketing for the sectors we know",
  ogDescription: "SaaS, D2C & ecommerce, fintech, edtech, and startups & scaleups.",
  schema: [bc.schema, itemList],
  main
};

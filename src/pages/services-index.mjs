// /services/ — Brand v3 (approved design: "Tilth Services.dc.html").
// Renders from the existing services/engagements content model plus the depth
// model in data.mjs; SEO, schema and routes are carried over unchanged.
import { site, services, engagements, growthLayers, serviceGraph, serviceSymptoms } from "../data.mjs";
import { breadcrumbs, esc } from "../render.mjs";

const path = "/services/";
const bc = breadcrumbs([{ name: "Home", path: "/" }, { name: "Services", path }]);

const core = services.filter(s => s.prominence === "featured");
const also = services.filter(s => s.prominence !== "featured");
const ordered = core.concat(also);
const num = slug => String(ordered.findIndex(s => s.slug === slug) + 1).padStart(2, "0");
const bySlug = slug => services.find(s => s.slug === slug);

// depth label = the service's layer label + the depth of its deepest layer,
// exactly as the design derives it
const layerIndex = id => growthLayers.findIndex(l => l.id === id);
function depthLabel(slug) {
  const g = serviceGraph[slug];
  if (!g) return "";
  const deepest = Math.max(...g.layers.map(layerIndex));
  return `${g.layerLabel} · ${(growthLayers[deepest] || {}).depth || ""}`;
}

const serviceRow = (s) => {
  const g = serviceGraph[s.slug] || { connects: [] };
  return `<a class="v3-srow v3-srow--full" href="/services/${s.slug}/" data-v3-svc="${s.slug}">
    <span class="v3-srow__n">${num(s.slug)}</span>
    <div>
      <div class="v3-srow__head">
        <h3 class="v3-srow__title v3-srow__title--wrap">${esc(s.name)}</h3>
        <span class="v3-srow__depth">${esc(depthLabel(s.slug))}</span>
      </div>
      <p class="v3-srow__desc">${esc(s.summary)}</p>
      <div class="v3-srow__conn">
        <span class="v3-srow__connk">CONNECTS WITH</span>
        ${g.connects.map(c => `<span class="v3-chip">${esc((bySlug(c) || {}).name || c)}</span>`).join("\n        ")}
      </div>
      <span class="v3-srow__explore" aria-hidden="true">EXPLORE →</span>
    </div>
  </a>`;
};

// state the sticky map + tiles hydrate from — keeps markup free of inline JSON parsing
const svcData = {};
ordered.forEach(s => {
  const g = serviceGraph[s.slug];
  if (!g) return;
  const connectLayers = [];
  g.connects.forEach(c => (serviceGraph[c] || { layers: [] }).layers.forEach(l => { if (!connectLayers.includes(l)) connectLayers.push(l); }));
  svcData[s.slug] = {
    n: num(s.slug), name: s.name, href: `/services/${s.slug}/`,
    layers: g.layers, connects: g.connects, connectLayers,
    connectNames: g.connects.map(c => (bySlug(c) || {}).name).filter(Boolean),
    depthLabel: depthLabel(s.slug)
  };
});

const rxData = {};
serviceSymptoms.forEach(sym => {
  rxData[sym.id] = {
    layer: sym.layer, depth: sym.depth,
    services: sym.services.map(slug => {
      const s = bySlug(slug);
      return s ? { n: num(slug), name: s.name, desc: s.summary, href: `/services/${slug}/` } : null;
    }).filter(Boolean)
  };
});

const first = serviceSymptoms[0];
const firstRx = rxData[first.id];

const engageCard = (e, i) => {
  const clay = i === 2;
  return `<div class="v3-eng${clay ? " v3-eng--clay" : ""} v3-reveal">
      <div class="v3-eng__n${clay ? " is-clay" : ""}">0${i + 1}</div>
      <h3>${esc(e.name)}</h3>
      <p>${esc(e.desc)}</p>
      <ul>${e.receives.map(r => `<li>${esc(r)}</li>`).join("")}</ul>
      <a class="v3-eng__go" href="${e.href}">${esc(e.cta.toUpperCase())} →</a>
    </div>`;
};

const itemList = {
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: `${site.base}/services/${s.slug}/` }))
};

const main = `
<section class="v3-shero v3-sec--grid" id="hero" data-depth-label="SURFACE">
  <nav class="v3-crumb" aria-label="Breadcrumb">
    <a href="/">HOME</a> <span class="sep" aria-hidden="true">/</span> <span class="cur">SERVICES</span>
  </nav>
  <div class="v3-sherogrid">
    <div>
      <h1 class="v3-sh1">Growth marketing services, built on <span class="is-moss">foundations</span>.</h1>
      <p class="v3-shero__p">We don't start by recommending another channel. We identify what's limiting the growth system, then bring the right service and engagement to fix it — for brands worldwide.</p>
      <div class="v3-shero__cta">
        <a class="v3-btn" href="/contact/">Discuss a Project <span aria-hidden="true">→</span></a>
        <a class="v3-btn v3-btn--ghost" href="/work/">See our work →</a>
      </div>
    </div>
    <div class="v3-herodiag" data-v3-herodiag aria-hidden="true">
      <div class="v3-herodiag__k"><span>SYMPTOM APPEARS HERE</span><span>SURFACE</span></div>
      <div class="v3-hdrows">
        ${["DISTRIBUTION", "CREATIVE", "CONVERSION", "ACQUISITION", "MEASUREMENT"]
          .map((l, i) => `<div class="v3-hd" data-v3-hd="${i}"><span class="v3-hd__bar"></span><span class="v3-hd__l">${l}</span></div>`).join("\n        ")}
      </div>
      <div class="v3-herodiag__k is-moss"><span>CAUSE USUALLY SITS HERE</span><span>DEPTH</span></div>
    </div>
  </div>
</section>

<section id="services" data-depth-label="SERVICES" style="padding:var(--sy) var(--pad) 0">
  <div class="v3-mono v3-eyebrow">CORE GROWTH SERVICES</div>
  <div class="v3-svchead v3-svchead--rule">
    <h2 class="v3-h2">Where most engagements begin.</h2>
    <p class="v3-maphint">EACH SERVICE SITS AT A DEPTH IN THE GROWTH SYSTEM AND CONNECTS TO THE ONES AROUND IT</p>
  </div>

  <div class="v3-svclayout">
    <div>
      ${core.map(serviceRow).join("\n      ")}

      <div class="v3-alsohead">
        <div class="v3-mono v3-eyebrow" style="margin-bottom:16px">ALSO</div>
        <h2 class="v3-h2">Distribution, brand and creative.</h2>
      </div>
      ${also.map(serviceRow).join("\n      ")}
    </div>

    <aside class="v3-svcmap" aria-label="Growth system depth map">
      <div class="v3-svcmap__top"><span style="color:var(--mosstext)">THE GROWTH SYSTEM</span><span style="color:var(--stone)">DEPTH MAP</span></div>
      <div class="v3-svcmap__layers">
        ${growthLayers.map(l => `<div class="v3-layer" data-v3-layer="${l.id}">
          <span class="v3-layer__n">${l.label}</span><span class="v3-layer__d">${l.depth}</span>
        </div>`).join("\n        ")}
      </div>
      <div class="v3-svcmap__active">
        <div class="v3-svcmap__k">ACTIVE SERVICE</div>
        <div class="v3-svcmap__name"><span data-v3-active-n>${svcData[ordered[0].slug].n}</span><b data-v3-active-name>${esc(ordered[0].name)}</b></div>
        <div class="v3-svcmap__depth" data-v3-active-depth>${esc(depthLabel(ordered[0].slug))}</div>
        <div class="v3-svcmap__k" style="margin-top:18px">CONNECTS WITH</div>
        <div class="v3-svcmap__conn" data-v3-active-conn>${svcData[ordered[0].slug].connectNames.map(n => `<span>${esc(n)}</span>`).join("")}</div>
        <a class="v3-svcmap__go" data-v3-active-go href="/services/${ordered[0].slug}/">EXPLORE SERVICE →</a>
      </div>
    </aside>
  </div>
</section>

<section class="v3-sec v3-sec--inv" id="not-sure" data-depth-label="DIAGNOSE" style="margin-top:var(--sy)">
  <div class="v3-svchead">
    <div>
      <div class="v3-mono" style="color:var(--imut);margin-bottom:20px">NEXT STEP</div>
      <h2 class="v3-h2" style="max-width:16ch">Not sure which service you need?</h2>
    </div>
    <p style="margin:0;font-size:15.5px;line-height:1.6;color:var(--imut);max-width:36ch">That's normal — and it's the point. Tell us what you're trying to grow, and we'll recommend the right starting point.</p>
  </div>

  <div class="v3-symgrid">
    ${serviceSymptoms.map((s, i) => `<button class="v3-tile" type="button" data-v3-tile="${s.id}" aria-pressed="${i === 0 ? "true" : "false"}">${esc(s.label)}</button>`).join("\n    ")}
  </div>

  <div class="v3-rx">
    <div class="v3-rx__head">
      <div style="display:flex;flex-wrap:wrap;align-items:baseline;gap:8px 20px">
        <div class="v3-rx__k">LIKELY STARTING POINT</div>
        <div class="v3-rx__layer" data-v3-rx-layer>${esc(first.layer)}</div>
      </div>
      <div class="v3-rx__depth" data-v3-rx-depth>${esc(first.depth)}</div>
    </div>
    <div class="v3-rx__lk">WHERE WE'D INVESTIGATE FIRST</div>
    <div class="v3-rxlist" data-v3-rx-list>
      ${firstRx.services.map(r => `<a class="v3-rxrow" href="${r.href}">
        <span class="v3-rxrow__n">${r.n}</span>
        <div><div class="v3-rxrow__t">${esc(r.name)}</div><p>${esc(r.desc)}</p></div>
        <span class="v3-rxrow__a" aria-hidden="true">→</span>
      </a>`).join("\n      ")}
    </div>
    <div class="v3-rx__cta">
      <a class="v3-rx__btn" href="/contact/">Discuss a Project <span aria-hidden="true">→</span></a>
      <a class="v3-rx__alt" href="/contact/"><span>Request a Foundation Audit →</span></a>
    </div>
  </div>
</section>

<section class="v3-sec" id="engagement-models" data-depth-label="ENGAGE">
  <div class="v3-mono v3-eyebrow">WAYS TO WORK WITH TILTH</div>
  <div class="v3-svchead">
    <h2 class="v3-h2">Three ways to engage.</h2>
    <p style="margin:0;font-size:15.5px;line-height:1.6;color:var(--stone);max-width:40ch">Most relationships start with a diagnosis and grow from there. Pricing is scoped after we understand what actually needs fixing.</p>
  </div>
  <div class="v3-engage">
    ${engagements.map(engageCard).join("\n    ")}
  </div>
</section>

<script type="application/json" data-v3-svcdata>${JSON.stringify(svcData)}</script>
<script type="application/json" data-v3-rxdata>${JSON.stringify(rxData)}</script>
`;

export default {
  path,
  shell: "v3",
  shellClass: "v3-services",
  navCta: "Discuss a Project",
  footRule: true,
  title: "Growth Marketing Services | Performance, SEO, Web, Affiliate | Tilth",
  description: "Tilth's growth marketing services — strategy & measurement, performance marketing, paid media, SEO & AI search, affiliate, website design & development, and brand & creative. Foundation-first, for brands worldwide.",
  ogTitle: "Growth marketing services, built on foundations",
  ogDescription: "Strategy, performance, paid media, SEO & AI search, affiliate, website and creative — one foundation-first system.",
  schema: [bc.schema, itemList],
  main
};

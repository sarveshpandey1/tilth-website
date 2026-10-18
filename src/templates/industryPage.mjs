// /industries/<slug>/ — Brand v3 reusable detail system.
//
// Ported from the frozen Master Design Release design
// "INDUSTRIES/Tilth Industry Detail Template - Edtech.dc.html" (502309fa…7368),
// per INDUSTRIES_DESIGN_REPORT.md (f036e6b0…e7f1).
//
// ONE template drives all five routes from industryContent. Every list is
// count-agnostic — problems, metrics, services and FAQs are rows, not fixed
// grids, so 3, 4, 5 or 7 items never produce an orphan or a dead column.
//
// Three things the report requires production to derive rather than hard-code:
//   1. data-len="long" on the H1 when heroTitle joins titles with " and ",
//      which selects the second measured ladder so "and" never stands alone;
//   2. the proof relation from caseStudies[].industry matching the route —
//      SAME SECTOR only on a genuine match, COMPARABLE ENGAGEMENT otherwise;
//   3. each service's layer tag from the approved Services design layer data
//      (serviceGraph.layerLabel), never invented here.
//
// Not ported: the .dc runtime, the reviewIndustry prop / ?industry= refill
// and the preview clone. Each route renders its own state.
//
// Global Rules §L also lists data-qa as a do-not-port hook here. In the frozen
// file it is purely the FAQ row's styling hook — two uses, both carrying
// [data-qa]{border-top} / :last-child{border-bottom} — so dropping it would
// remove the rules. It is renamed to data-faq-item instead: no listed token
// reaches production and the borders are unchanged.
import { site, services, industries, proofFor, serviceGraph } from "../data.mjs";
import { industryContent } from "../content.mjs";
import { breadcrumbs, esc } from "../render.mjs";

const seoTitle = {
  saas: "SaaS Growth Marketing Agency | US & India | Tilth",
  "d2c-ecommerce": "D2C & Ecommerce Marketing Agency | Tilth",
  fintech: "Fintech Marketing Agency | Financial Services Growth | Tilth",
  edtech: "Edtech Growth Marketing Agency | Tilth",
  startups: "Startup Growth Marketing Agency | US & India | Tilth"
};

const MONO = "font-family:'IBM Plex Mono',ui-monospace,monospace";
const num = i => String(i + 1).padStart(2, "0");

// The four sectors and the stage, for the family panel. Composition carries the
// distinction; the panel adds no taxonomy copy of its own.
const sectors = industries.filter(i => i.slug !== "startups");
const stage = industries.find(i => i.slug === "startups");

const famItem = (ind, slug) => {
  const here = ind.slug === slug;
  return `<li><a data-fam-slug="${ind.slug}" href="/industries/${ind.slug}/"${here ? ' aria-current="page"' : ""}>${esc(ind.name)} <span data-go aria-hidden="true" style="color:var(--mosstext)">&rarr;</span><span data-here aria-hidden="true"></span></a></li>`;
};

const proofCard = (cs, ind) => {
  // SAME SECTOR only when the record's own industry equals this route's.
  // Today that is Edtech alone; every other route frames both records as
  // comparable. No homepage D2C/SaaS metrics are imported, and no proof is
  // invented for the routes that have none.
  // SAME SECTOR on a genuine sector match. Demi.ai's record industry is
  // "SaaS / AI", so the route name is matched against the record's leading
  // sector token too, which makes it SAME SECTOR on /industries/saas/ (pack §13).
  const indName = String(ind.name).toLowerCase();
  const recSectors = String(cs.industry).toLowerCase().split("/").map(x => x.trim());
  const same = recSectors.includes(indName);
  const metrics = cs.metrics.map(m => `<li data-num style="font-family:Syne,sans-serif;font-weight:600;font-size:20px;letter-spacing:-.02em;line-height:1.3;padding:16px 0;border-bottom:1px solid var(--line)">${esc(m).replace(/~/g, '<span data-approx>~</span>')}</li>`).join("");
  return `<article class="v3-reveal" data-proof="${esc(cs.slug)}">
        <div style="${MONO};font-size:10.5px;letter-spacing:.14em;line-height:1.5;color:var(--fg);padding-bottom:10px">${esc(cs.anonLabel)}</div>
        <div data-proof-meta><span>${esc(cs.industry.toUpperCase())} &middot; ${esc(cs.market.toUpperCase())}</span><span data-rel="${same ? "same" : "comparable"}">${same ? "SAME SECTOR" : "COMPARABLE ENGAGEMENT"}</span></div>
        <ul style="list-style:none;margin:0;padding:0">${metrics}</ul>
        <p style="margin:20px 0 0;font-size:15.5px;line-height:1.62;color:var(--stone)">${esc(cs.summary)}</p>
      </article>`;
};

export function industryPage(slug) {
  const ind = industries.find(i => i.slug === slug);
  const c = industryContent[slug];
  if (!ind || !c) throw new Error("Missing industry content: " + slug);
  const path = `/industries/${slug}/`;
  const bc = breadcrumbs([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries/" }, { name: ind.name, path }]);
  const rel = c.services.map(s => services.find(x => x.slug === s)).filter(Boolean);
  // §2 placement matrix decides which records this route carries and in what
  // order: SaaS leads with Demi.ai, every other sector shows Edtech + Affiliate.
  const proof = proofFor(path);

  // The long ladder is selected by the copy itself, not per page.
  const longH1 = / and /.test(c.heroTitle);

  const faqSchema = { "@type": "FAQPage", mainEntity: c.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };

  const main = `
<section id="hero" data-depth-label="SURFACE" style="padding:112px var(--pad) 0;background-image:linear-gradient(90deg,var(--grid) 1px,transparent 1px);background-size:calc(100%/6) 100%">
  <nav aria-label="Breadcrumb" style="${MONO};font-size:11px;letter-spacing:.14em;line-height:1.6;color:var(--stone);animation:gFade .8s ease both">
    <a href="/" style="color:var(--stone)">HOME</a> <span aria-hidden="true" style="color:var(--mosstext);padding:0 6px">/</span> <a href="/industries/" style="color:var(--stone)">INDUSTRIES</a> <span aria-hidden="true" style="color:var(--mosstext);padding:0 6px">/</span> <span data-up aria-current="page" style="color:var(--fg)">${esc(ind.name)}</span>
  </nav>
  <div style="display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 14px;margin:30px 0 22px;${MONO};font-size:11.5px;letter-spacing:.16em;line-height:1.3;animation:gFade .8s .05s ease both">
    <span data-up style="color:var(--mosstext)">${esc(ind.name)}</span>
  </div>
  <h1 data-h1 data-len="${longH1 ? "long" : "short"}" style="margin:0;font-family:Syne,sans-serif;font-weight:800;line-height:.94;letter-spacing:-.045em;text-transform:uppercase;animation:gRise 1s cubic-bezier(.16,1,.3,1) both">${c.heroTitle}</h1>
  <p style="margin:32px 0 0;font-size:var(--body);line-height:1.6;max-width:58ch;color:var(--stone);animation:gRise 1s .12s cubic-bezier(.16,1,.3,1) both">${esc(c.heroLede)}</p>
  <div data-hero-cta style="animation:gRise 1s .2s cubic-bezier(.16,1,.3,1) both">
    <a href="/contact/" style="display:inline-flex;align-items:center;justify-content:center;gap:10px;height:54px;background:var(--moss);color:#101310;font-family:Syne,sans-serif;font-weight:700;text-transform:uppercase;border-radius:2px">Discuss your growth project <span aria-hidden="true">&rarr;</span></a>
    <a href="/services/" style="display:inline-flex;align-items:center;height:54px;font-size:14.5px;line-height:1;white-space:nowrap;color:var(--stone)"><span style="border-bottom:1px solid var(--line2);padding-bottom:3px">Explore services &rarr;</span></a>
  </div>
  <nav data-fam aria-label="Industries">
    <div data-fam-top><span style="color:var(--stone)">INDUSTRIES</span><a href="/industries/" style="color:var(--mosstext)">ALL INDUSTRIES &rarr;</a></div>
    <div data-fam-body>
      <div>
        <div data-kind data-up>${esc(ind.name)}</div>
      </div>
      <div>
        <div style="${MONO};font-size:10.5px;letter-spacing:.14em;line-height:1;color:var(--stone)">SECTORS</div>
        <ul data-famlist data-four>
          ${sectors.map(s => famItem(s, slug)).join("\n          ")}
        </ul>
      </div>
      <div>
        <div aria-hidden="true" style="font-size:10.5px;line-height:1">&nbsp;</div>
        <ul data-famlist>
          ${famItem(stage, slug)}
        </ul>
      </div>
    </div>
  </nav>
</section>

<section id="constraints" data-depth-label="SHALLOW" style="padding:var(--sy) var(--pad)">
  <div data-ledger>
    <div data-lhead class="v3-reveal">
      <div data-eyebrow>THE CONTEXT</div>
      <h2 data-h2 style="margin:0;font-family:Syne,sans-serif;font-weight:700;line-height:1.02;letter-spacing:-.035em;text-transform:uppercase">Growth constraints in ${esc(ind.name)}.</h2>
      <p style="margin:26px 0 0;font-size:var(--body);line-height:1.62;color:var(--stone);max-width:52ch">${esc(c.intro)}</p>
    </div>
    <ol data-rows class="v3-reveal">
      ${c.problems.map((p, i) => `<li><span data-n data-num>${num(i)}</span><p data-t style="margin:0;font-size:var(--body);line-height:1.55;color:var(--fg);max-width:52ch">${esc(p)}</p></li>`).join("\n      ")}
    </ol>
  </div>
</section>

<section id="focus" data-inv data-depth-label="MID" style="background:var(--ibg);color:var(--ifg);padding:var(--sy) var(--pad)">
  <div data-ledger>
    <div data-lhead class="v3-reveal">
      <div data-eyebrow>WHAT WE FOCUS ON</div>
      <h2 data-h2 style="margin:0;font-family:Syne,sans-serif;font-weight:700;line-height:1.02;letter-spacing:-.035em;text-transform:uppercase">The metrics that decide ${esc(ind.name)} growth.</h2>
    </div>
    <ol data-rows data-metrics class="v3-reveal">
      ${c.metrics.map((m, i) => `<li><span data-n data-num>${num(i)}</span><span data-t data-mname>${esc(m)}</span></li>`).join("\n      ")}
    </ol>
  </div>
  <div data-ledger data-sub>
    <div data-lhead class="v3-reveal">
      <h3 style="margin:0;font-family:Syne,sans-serif;font-weight:700;font-size:var(--h3);letter-spacing:-.02em;line-height:1.15;text-transform:uppercase">Relevant services</h3>
      <p style="margin:14px 0 0;${MONO};font-size:10.5px;letter-spacing:.14em;line-height:1.7;color:var(--imut);max-width:34ch">LAYER IN THE GROWTH SYSTEM SHOWN BENEATH EACH</p>
    </div>
    <ul data-svc class="v3-reveal">
      ${rel.map((s, i) => `<li><a href="/services/${s.slug}/"><span data-n data-num>${num(i)}</span><span><span data-sv-name>${esc(s.name)}</span><span data-sv-layer>${esc((serviceGraph[s.slug] || {}).layerLabel || "")}</span></span><p data-sv-sum>${esc(s.summary)}</p><span data-sv-go aria-hidden="true">&rarr;</span></a></li>`).join("\n      ")}
    </ul>
  </div>
</section>

<section id="proof" data-depth-label="DEEP" style="padding:var(--sy) var(--pad)">
  <div class="v3-reveal" data-eyebrow>SELECTED GROWTH EVIDENCE</div>
  <div class="v3-reveal" data-ev-head>
    <h2 data-h2 style="margin:0;font-family:Syne,sans-serif;font-weight:700;line-height:1.02;letter-spacing:-.035em;text-transform:uppercase">${proof.some(cs => String(cs.industry).toLowerCase().split("/").map(x => x.trim()).includes(String(ind.name).toLowerCase())) ? `Selected ${ind.name} experience.` : "Results from comparable engagements."}</h2>
    <p data-ev-hint style="margin:0;${MONO};font-size:10.5px;letter-spacing:.14em;line-height:1.7;color:var(--stone);max-width:36ch">SELECTED EXPERIENCE FROM OUR FOUNDER AND CORE TEAM &middot; ANONYMISED</p>
  </div>
  <div data-proof-grid>
      ${proof.map(cs => proofCard(cs, ind)).join("\n      ")}
  </div>
</section>

<section id="faq" data-inv data-depth-label="DEEP" style="background:var(--ibg);color:var(--ifg);padding:var(--sy) var(--pad)">
  <div data-faq-grid>
    <div class="v3-reveal">
      <div data-eyebrow>QUESTIONS</div>
      <h2 data-h2 style="margin:0;font-family:Syne,sans-serif;font-weight:700;line-height:1.02;letter-spacing:-.035em;text-transform:uppercase">${esc(ind.name)} growth, answered.</h2>
    </div>
    <div class="v3-reveal">
      ${c.faqs.map(([q, a]) => `<div data-faq-item>
        <h3 data-q style="margin:0;padding:26px 0 0;font-family:Syne,sans-serif;font-weight:700;font-size:20px;line-height:1.3;letter-spacing:-.02em">${esc(q)}</h3>
        <p data-a style="margin:0;padding:12px 0 28px;font-size:16.5px;line-height:1.7;color:var(--ibody);max-width:62ch">${esc(a)}</p>
      </div>`).join("\n      ")}
    </div>
  </div>
</section>

<section id="cta" data-depth-label="FOUNDATION" style="background:var(--moss);color:#101310;padding:var(--sy) var(--pad)">
  <div style="display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 14px;margin-bottom:24px;${MONO};font-size:11.5px;letter-spacing:.16em;line-height:1.3;color:rgba(16,19,16,.6)">
    <span>NEXT STEP</span><span aria-hidden="true">/</span><span data-up style="color:#101310">${esc(ind.name)}</span>
  </div>
  <div data-cta-grid>
    <h2 data-cta-h style="margin:0;font-family:Syne,sans-serif;font-weight:800;line-height:.94;letter-spacing:-.04em;text-transform:uppercase">Growing a&nbsp;business?</h2>
    <div>
      <p style="margin:0;font-size:var(--body);line-height:1.6;color:rgba(16,19,16,.78);max-width:46ch">Start with a conversation — the first one is free. We'll look at where growth is getting stuck and whether there's a clear next step.</p>
      <div data-cta-actions style="margin-top:34px">
        <a href="/contact/" style="display:inline-flex;align-items:center;justify-content:center;gap:10px;height:54px;background:#101310;color:#F3F5F1;font-family:Syne,sans-serif;font-weight:700;text-transform:uppercase;border-radius:2px">Discuss your growth project <span aria-hidden="true">&rarr;</span></a>
        <a href="/contact/" style="display:inline-flex;align-items:center;height:54px;font-size:14.5px;line-height:1;white-space:nowrap;color:rgba(16,19,16,.72)"><span style="border-bottom:1px solid rgba(16,19,16,.4);padding-bottom:3px">See the work &rarr;</span></a>
      </div>
    </div>
  </div>
</section>
`;

  return {
    path,
    shell: "v3",
    shellClass: "v3-industry",
    headExtra: `<link rel="stylesheet" href="/assets/industries.css">`,
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

// REGIONAL FAMILY — one renderer, 13 routes. Brand v3.
//
// Ported from the frozen Master Design Release designs
//   REGIONAL/Tilth Regional Hub Template - India.dc.html            (hub)
//   REGIONAL/Tilth Regional Detail Template - US Website CRO.dc.html (detail)
// per REGIONAL_DESIGN_REPORT.md. The two frozen prototypes carry a
// byte-identical styleheet, so there is one Regional layer (assets/regional.css)
// and one renderer with two shells.
//
// India 7 · US 6. Every route is unchanged: none renamed, merged, redirected or
// re-canonicalised, and no "missing" mirror route is created. THE ASYMMETRY IS
// INTENTIONAL — India has affiliate-marketing and fintech, US has website-cro,
// and five of the eleven children have no counterpart (report §8). That is why
// there is no country switcher, no flag, no second navigation and no geo or
// locale redirect: a switcher would mislead on five of eleven pages. Regional
// context lives in the breadcrumb, the eyebrow and the H1 text only — never in
// colour (report §2 rule 3: grounds alternate by BLOCK ORDER, and India and US
// share every colour).
//
// TWO SHELLS, SIX SECTION TYPES, THREE COMPOSITION RULES (report §2). All 13
// routes come from the same data in src/content-regional.mjs (hubs) and
// src/content-regional-pages.mjs (11 children); nothing is route-specific here.
//   prose            -> ledger section; the first one is the page's lead
//   cards with href  -> link index (ruled rows, the whole row is the link)
//   cards, no href   -> tiles (channels, why-tilth benefits)
//   steps            -> numbered <ol> phases
//   insights         -> reading list (3 entries, title link >= 44px)
//   list             -> ruled bullet list
//   faq              -> the shared v3 disclosure
// and the three rules that turn 156 source sections into 72 visual bands:
//   1 RUN         consecutive one-paragraph prose sections with no standfirst
//                 become one ruled capability ledger. EACH ROW IS STILL ITS OWN
//                 <section aria-labelledby> WITH ITS OWN H2, so the document
//                 outline and every SEO heading survive untouched.
//   2 CONNECTIONS consecutive linked-cards and steps sections share one band,
//                 each keeping its own section and H2, separated by a hairline.
//   3 GROUNDS     alternate plain / inverted by rendered block, never by market.
// The band structure this produces was verified block-for-block against all 13
// frozen renders: 7 · 7 · 7 · 5 · 6 · 5 · 5 · 5 · 5 · 5 · 5 · 5 · 5, matching
// report §3 exactly.
//
// PROOF — read this before touching the hub proof block.
// Hubs only, and the two approved anonymous records appear under the approved
// generic qualifier "Experience from the founder and core team." (CLAUDE.md
// §11), with their own market labels EDTECH · INDIA and CRYPTO · GLOBAL. They
// are NOT India clients, NOT US clients, NOT US case studies, NOT regional
// client proof and NOT Bengaluru engagements. The US hub deliberately shows an
// India result labelled India and a global result labelled global. Rendered
// from the same caseStudies[] records behind the same publishApproved gate and
// through the same shared component as /work/, /about/ and Bengaluru. The
// children carry no proof, so the same two records are never stacked on
// adjacent pages. The Homepage D2C/SaaS figures and client markers are not
// imported, and no US proof or regional metric is invented (report §13).
//
// NO US PHYSICAL PRESENCE. Nothing here states or implies a US office, US
// employees, a US street address, a US phone number or US premises, and no
// LocalBusiness schema is emitted for any regional route. The US pages carry
// market and service relevance only; the copy says outright that Tilth operates
// from India and structures remote collaboration (report §5).
//
// LINKS resolve through resolveHref() + liveRegionalRoutes, never hard-coded:
// a card upgrades from its global fallback to the regional route the moment
// that route is live, so no link can point at a route that does not exist
// (report §14, §26).
//
// FAQPage is built from the same `faqs` array that renders the visible
// disclosure — one source for both, as the published pages already did; the
// single-source pattern is a production requirement (report §23).
//
// Prototype-only code is not ported: the .dc runtime, reviewRegion,
// reviewRoute, reviewState (proof-absent), the MAIN_HTML / META route stores,
// the review title map and the display-fit safeguard — the frozen ladders are
// authored under their binding units and the safeguard never fired in any of
// the 156 frozen renders, so the 102 [data-fit] hooks are dropped as they were
// in Core Company, Insights and Bengaluru.
import { site, caseStudies } from "../data.mjs";
import { insightBySlug } from "../insights.mjs";
import { regions, hubHreflang, resolveHref } from "../content-regional.mjs";
import { regionalPages } from "../content-regional-pages.mjs";
import { breadcrumbs, orgSchema, websiteSchema, esc } from "../render.mjs";

const HEAD_EXTRA = `<link rel="stylesheet" href="/assets/core-company.css">
<link rel="stylesheet" href="/assets/regional.css">`;

// ---------------------------------------------------------------------------
// THE NO-BREAK HEADING HELPER (report §24 #3).
//
// Regional H1s are 55-69-character sentences, so a 1-3-letter word can be left
// stranded at the end of a line ("WHY" alone at 1180). A typographic no-break
// space ties such a word to the next one. Two guards keep it from doing harm,
// both of which the first version got wrong: the pair is CAPPED (a long pair
// becomes an unbreakable unit wider than its column, which triggered 60+ fit
// passes and ink overruns), and it NEVER CHAINS (a word already used as the
// second member cannot start a new pair). Only the space type changes; no word,
// order or character is altered.
//
// "1-3-letter" is literal: alphabetic only. "D2C" is three characters but not
// three letters, and the frozen design does not tie it.
//
// Caps and scope, read off the frozen markup, not inferred: 12 characters for
// the H1 and the closing CTA heading, 16 for a section H2. Nothing else is
// touched - not the run-row H2s, the H3s, the lede, intros, eyebrows, buttons
// or body copy. Verified by replaying this function over every display heading
// in all 13 frozen renders: 184 headings reproduced, 0 mismatches.
const NB = " ";
function nobreak(text, cap) {
  const words = String(text).split(" ");
  const out = [];
  for (let i = 0; i < words.length; i++) {
    const w = words[i], nxt = words[i + 1];
    const bare = w.replace(/[^0-9A-Za-z]+$/, "");
    if (nxt && /^[A-Za-z]{1,3}$/.test(bare) && w.length + 1 + nxt.length <= cap) {
      out.push(w + NB + nxt);
      i++;
    } else {
      out.push(w);
    }
  }
  return out.join(" ");
}
const h1Text = t => nobreak(esc(t), 12);
const ctaText = t => nobreak(esc(t), 12);
const h2Text = t => nobreak(esc(t), 16);

// ---------------------------------------------------------------------------
// COMPOSITION — turn the source section list into rendered bands.
// ---------------------------------------------------------------------------

const isLinkedCards = s => s.type === "cards" && (s.cards || []).some(c => c.href);
// RUN eligibility: a one-paragraph prose section with no standfirst. Sections
// with a standfirst or more than one paragraph stay full ledger sections, which
// is why the US hub's two opening sections are two bands rather than a run.
const runnable = s => s.type === "prose" && !s.standfirst && (s.paragraphs || []).length === 1;

function buildBlocks(sections, { proofBefore = null } = {}) {
  const blocks = [];
  let i = 0;
  while (i < sections.length) {
    const s = sections[i];
    // RULE 1 — run. Only away from the lead position, which is its own band.
    if (i > 0 && runnable(s)) {
      const rows = [];
      while (i < sections.length && runnable(sections[i])) rows.push(sections[i++]);
      if (rows.length >= 2) { blocks.push({ kind: "run", rows }); continue; }
      blocks.push({ kind: "prose", sections: rows });
      continue;
    }
    // RULE 2 — connections.
    if (isLinkedCards(s) || s.type === "steps") {
      const group = [];
      while (i < sections.length && (isLinkedCards(sections[i]) || sections[i].type === "steps")) {
        group.push(sections[i++]);
      }
      // The frozen attribute distinguishes a true connections group from a
      // lone cards section. It is descriptive only (no CSS reads it), but it
      // is kept exact.
      blocks.push({ kind: group.length >= 2 ? "connect" : "cards", sections: group });
      continue;
    }
    i++;
    blocks.push({ kind: s.type === "faq" ? "faq" : s.type === "insights" ? "insights" : s.type === "list" ? "list" : s.type === "cards" ? "cards" : "prose", sections: [s] });
  }
  // the hub proof block sits immediately before the Insights band
  if (proofBefore) {
    const at = blocks.findIndex(b => b.kind === "insights");
    blocks.splice(at < 0 ? blocks.length : at, 0, { kind: "proof", proof: proofBefore });
  }
  // RULE 3 — grounds alternate by rendered block, and the depth readout runs
  // SHALLOW x2 -> MID x3 -> DEEP for the rest (both frozen templates, at 5, 6
  // and 7 blocks).
  return blocks.map((b, n) => ({
    ...b,
    inv: n % 2 === 1,
    first: n === 0,
    depth: n < 2 ? "SHALLOW" : n < 5 ? "MID" : "DEEP"
  }));
}

// Band kind, named after the frozen attribute. Descriptive only: no CSS rule
// reads data-rg-kind, but it is emitted exactly as the frozen design does.
const BLOCK_KIND = { run: "run", connect: "connect", proof: "proof", insights: "insights", faq: "faq", list: "list", cards: "cards", prose: "prose" };

// ---------------------------------------------------------------------------
// SECTION BODIES
// ---------------------------------------------------------------------------

const textlink = c => c ? `
          <a data-textlink href="${c.href}"><span>${esc(c.label)} &rarr;</span></a>` : "";

const linkRow = c => `
            <li><a href="${resolveHref(c)}"><h3>${esc(c.name)}</h3><p>${esc(c.desc)}</p><span data-rg-go aria-hidden="true">&rarr;</span></a></li>`;

const tile = c => `
            <div data-rg-tile><h3>${esc(c.name)}</h3><p>${esc(c.desc)}</p></div>`;

const step = s => `
            <li><span data-n aria-hidden="true">${esc(s.n)}</span><h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p></li>`;

const niceDate = d => new Date(d + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
const insightRow = a => `
            <li><time datetime="${esc(a.date)}" data-time>${esc(niceDate(a.date))}</time><h3><a href="${a.href}">${esc(a.title)}</a></h3><p>${esc(a.excerpt)}</p></li>`;

const faqItem = ([q, a], i) => `
            <div data-faq-item>
              <h3><button type="button" data-faq-btn id="faq-b${i}" aria-controls="faq-p${i}" aria-expanded="${i === 0 ? "true" : "false"}"><span>${esc(q)}</span><span data-faq-ic aria-hidden="true">+</span></button></h3>
              <div data-faq-ans id="faq-p${i}" role="region" aria-labelledby="faq-b${i}"><div><p>${esc(a)}</p></div></div>
            </div>`;

// The tilde takes the shared [data-approx] treatment so "~0%" reads as an
// approximation set in Chivo rather than as Syne's decorative mid-height mark
// (Phase 0, Register G-5 — the same helper /work/ and Bengaluru use).
const approx = m => esc(m).replace(/~/g, "<span data-approx>~</span>");
const proofRecords = caseStudies.filter(c => c.publishApproved);

// THE ONE IN-PROSE LINK IN THE FAMILY (owner decision 2, report §0 / §16).
// The India hub's `prose:bengaluru` paragraph already contained the word
// "Bengaluru"; it is now a quiet editorial link to /marketing-agency-bengaluru/.
// No new paragraph, no CTA, no nav item, no city directory and NOT ONE WORD of
// copy changes — the link wraps text that was already there, so the escaped
// paragraph is byte-identical apart from the anchor. It is declared as data
// (`inlineLinks` on the section) rather than written into the renderer, so the
// approved link is a reviewable fact next to the copy it belongs to, and the
// Bengaluru page itself is not reopened.
// Only the FIRST occurrence in the NAMED paragraph is linked; the second
// mention later in the section stays plain text, as in the frozen design.
function inline(paragraph, index, links) {
  let html = esc(paragraph);
  for (const l of links || []) {
    if ((l.paragraph || 0) !== index) continue;
    const needle = esc(l.text);
    const at = html.indexOf(needle);
    if (at < 0) throw new Error(`Regional inlineLinks: "${l.text}" not found in paragraph ${index}`);
    html = html.slice(0, at) + `<a href="${l.href}">${needle}</a>` + html.slice(at + needle.length);
  }
  return html;
}

function sectionBody(s) {
  switch (s.type) {
    case "prose":
      return (s.paragraphs || []).map((p, i) => `
          <p data-rg-p>${inline(p, i, s.inlineLinks)}</p>`).join("");
    case "list":
      return `
          <ul data-rg-list>${s.items.map(x => `
            <li>${esc(x)}</li>`).join("")}
          </ul>`;
    case "cards":
      if (isLinkedCards(s)) {
        return `
          <ul data-rg-links${s.compact ? " data-compact" : ""}>${s.cards.map(linkRow).join("")}
          </ul>${textlink(s.cta)}`;
      }
      // tiles: any paragraphs the source gives the section sit above the grid
      return (s.paragraphs || []).map((p, i) => `
          <p data-rg-p>${inline(p, i, s.inlineLinks)}</p>`).join("") + `
          <div data-rg-tiles>${s.cards.map(tile).join("")}
          </div>`;
    case "steps":
      return `
          <ol data-rg-steps>${s.steps.map(step).join("")}
          </ol>${textlink(s.cta)}`;
    case "insights":
      return `
          <ul data-rg-ins>${s.slugs.map(insightBySlug).filter(Boolean).map(insightRow).join("")}
          </ul>${textlink(s.cta)}`;
    case "faq":
      return `
          <div data-rg-faq>${s.faqs.map(faqItem).join("")}
          </div>`;
    default:
      throw new Error("Unknown regional section type: " + s.type);
  }
}

// One ledger section: mono label + Syne H2 (+ intro) beside the content.
const ledgerSection = (s, { lead = false } = {}) => `
    <section id="${s.id}" data-rg-sec data-rg-type="${s.type}"${lead ? " data-rg-lead" : ""} aria-labelledby="${s.id}-h">
      <div data-ledger>
        <div data-lhead>
          <span data-rg-eb>${esc(s.eyebrow)}</span>
          <h2 id="${s.id}-h" data-h2>${h2Text(s.h2)}</h2>${s.standfirst ? `
          <p data-rg-intro>${esc(s.standfirst)}</p>` : ""}
        </div>
        <div>${sectionBody(s)}
        </div>
      </div>
    </section>`;

// A run row keeps its own <section> and H2 so the outline is unchanged; the H2
// runs on the smaller --rgrun step and is deliberately outside the no-break
// helper, which only touches display-scale headings.
const runRow = s => `
      <section id="${s.id}" data-rg-row data-rg-type="prose" aria-labelledby="${s.id}-h">
        <div><span data-rg-eb>${esc(s.eyebrow)}</span><h2 id="${s.id}-h">${esc(s.h2)}</h2></div>
        <p data-rg-p>${esc(s.paragraphs[0])}</p>
      </section>`;

const proofSection = () => `
    <section id="proof" data-rg-sec data-rg-proof aria-labelledby="proof-h">
      <div data-ledger>
        <div data-lhead>
          <h2 id="proof-h" data-h2>${h2Text("Experience from the founder and core team.")}</h2>
        </div>
        <div>
          <div data-proof-grid>${proofRecords.map(c => `
            <article data-proof>
              <h3 data-plabel>${esc(c.anonLabel)}</h3>
              <div data-pmeta>${esc(c.industry.toUpperCase())} &middot; ${esc(c.market.toUpperCase())}</div>
              <ul>${c.metrics.map(m => `
                <li>${approx(m)}</li>`).join("")}
              </ul>
              <p data-psum>${esc(c.summary)}</p>
            </article>`).join("")}
          </div>
          <a data-textlink href="/work/"><span>See the work &rarr;</span></a>
        </div>
      </div>
    </section>`;

function renderBlock(b) {
  const attrs = [
    "data-rg-block",
    `data-rg-kind="${BLOCK_KIND[b.kind]}"`,
    b.first ? "data-rg-first" : null,
    b.inv ? "data-inv" : null,
    b.kind === "proof" ? `id="proof-block"` : null,
    `data-depth-label="${b.depth}"`
  ].filter(Boolean).join(" ");

  if (b.kind === "run") {
    return `
  <div ${attrs}>
    <div data-rg-run>${b.rows.map(runRow).join("")}
    </div>
  </div>`;
  }
  if (b.kind === "proof") {
    return `
  <div ${attrs}>${proofSection()}
  </div>`;
  }
  return `
  <div ${attrs}>${b.sections.map(s => ledgerSection(s, { lead: b.first })).join("")}
  </div>`;
}

// ---------------------------------------------------------------------------
// PAGE SHELLS
// ---------------------------------------------------------------------------

const hero = (bc, h) => `
<section id="hero" data-hero data-rg-hero data-depth-label="SURFACE">
  ${bc}
  <div data-eyebrow>${esc(h.eyebrow)}</div>
  <h1 data-h1>${h1Text(h.h1)}</h1>
  <p data-lede>${esc(h.lede)}</p>
  <div data-actions>
    <a data-btn href="${h.primary.href}">${esc(h.primary.label)} <span aria-hidden="true">&rarr;</span></a>
    <a data-textlink href="${h.secondary.href}"><span>${esc(h.secondary.label)} &rarr;</span></a>
  </div>
</section>`;

// The single-action Moss CTA band, on all 13 (no secondary, as in the source).
const ctaBand = c => `
<section id="cta" data-moss data-rg-cta data-depth-label="FOUNDATION" aria-labelledby="cta-h">
  <div data-eyebrow>Next step</div>
  <div data-cta-grid>
    <h2 id="cta-h" data-cta-h>${ctaText(c.h2)}</h2>
    <div>
      <p data-cta-p>${esc(c.body)}</p>
      <div data-cta-actions>
        <a data-btn href="${c.primary.href}">${esc(c.primary.label)} <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </div>
</section>`;

// The visible breadcrumb, Brand v3. [data-rg-cr] uppercases by CSS, so the
// source case stays in the markup. Hubs are 2-level, children 3-level
// (Home / Market / Page) — logical, not URL-mirroring: the regional hub is the
// discovery page, so no /india/services/ index is invented.
const crumb = items => `<nav data-crumb aria-label="Breadcrumb">${items.map((it, i) =>
  i < items.length - 1
    ? `<a href="${it.path}" data-rg-cr>${esc(it.name)}</a> <span data-sep aria-hidden="true">/</span> `
    : `<span aria-current="page" data-rg-cr>${esc(it.name)}</span>`).join("")}</nav>`;

// FAQPage from the same array the visible disclosure renders — one source, so
// the two cannot drift (report §23).
const faqSchemaOf = sections => {
  const f = sections.find(s => s.type === "faq");
  return f ? {
    "@type": "FAQPage",
    mainEntity: f.faqs.map(([q, a]) => ({
      "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a }
    }))
  } : null;
};

// og:locale per market (Phase 8, register B-2). The seven India routes were
// publishing en_US, which contradicted the hub cluster's own en-IN alternate;
// they now send en_IN. The six US routes keep en_US, which was already right.
// Nothing else about language is touched: <html lang> stays "en" because the
// copy is one English, and no child hreflang is fabricated.
const localeFor = path => (path.startsWith("/india/") ? "en_IN" : "en_US");

const page = (p, { bcItems, sections, hero: h, finalCta, proof = false, hreflang = null }) => {
  const bc = breadcrumbs(bcItems);
  const blocks = buildBlocks(sections, { proofBefore: proof && proofRecords.length ? proofRecords : null });
  return {
    path: p.path,
    shell: "v3",
    shellClass: "v3-core v3-rg",
    headExtra: HEAD_EXTRA,
    title: p.title,
    description: p.description,
    ogTitle: p.ogTitle,
    ogDescription: p.ogDescription,
    ogLocale: localeFor(p.path),
    hreflang: hreflang || undefined,
    schema: [orgSchema(), websiteSchema(), bc.schema, faqSchemaOf(sections)].filter(Boolean),
    bodyScripts: ["/regional.js"],
    main: `${hero(crumb(bcItems), h)}
${blocks.map(renderBlock).join("\n")}
${ctaBand(finalCta)}
`
  };
};

export function regionHub(key) {
  const r = regions[key];
  if (!r) throw new Error("Unknown region: " + key);
  return page(r, {
    bcItems: [{ name: "Home", path: "/" }, { name: r.breadcrumb, path: r.path }],
    sections: r.sections,
    hero: r.hero,
    finalCta: r.finalCta,
    proof: true,
    // The declared cluster is the two hubs plus the global homepage as
    // x-default, exactly as published. Child hreflang is deliberately NOT
    // added: the route inventories differ, five children have no counterpart,
    // and whether the four same-slug pairs are genuine translation equivalents
    // is a production SEO equivalence audit, not a design or build decision
    // (report §10, §26). Nothing reciprocal is fabricated here.
    hreflang: hubHreflang(site.base)
  });
}

export function regionChildPage(pg) {
  return page(pg, {
    bcItems: [
      { name: "Home", path: "/" },
      { name: pg.regionLabel, path: pg.regionPath },
      { name: pg.name, path: pg.path }
    ],
    sections: pg.sections,
    hero: pg.hero,
    finalCta: pg.finalCta,
    proof: false
  });
}

export const allRegionHubs = Object.keys(regions).map(regionHub);
export const allRegionChildPages = regionalPages.map(regionChildPage);

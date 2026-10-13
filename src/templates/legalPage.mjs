// LEGAL FAMILY — one reading template, three documents. Brand v3.
//
// Ported from the frozen Master Design Release design
// "LEGAL_UTILITIES/Tilth Legal Template - Privacy.dc.html", per
// LEGAL_UTILITIES_DESIGN_REPORT.md. The frozen release proves one template is
// enough: all three documents share an identical structure — eyebrow "Legal" →
// H1 → "Last updated: <date>" → intro → H2 + prose sections → one note → back
// link — and differ only in content. So there are no three hand-built pages
// and no route-specific CSS.
//
// A DOCUMENT, NOT A LANDING PAGE. The approved family deliberately has no
// hero, no sales CTA, no signature interaction, no motion, no depth
// visualisation, no table of contents, no sticky legal rail, no cards for
// clauses, no proof, no lead form, no newsletter and no schema. None of that is
// added here.
//
// LEGAL TEXT IS LOCKED. src/legal-content.mjs holds the published wording
// character-for-character and explains the five markup-only changes plus the
// one collision translation. This template only wraps it: it introduces no
// text of its own except the frozen design's own strings (the "Legal" eyebrow
// and the back link, both from the source) and the screen-reader-only
// "(opens in a new tab)" label that already sits in the body markup.
//
// CLAUSE ORDER IS THE SOURCE'S. The body is passed through as one block, so
// section order, heading structure, paragraph order, lists (there are none in
// the source), contact clauses and links cannot be reordered by the renderer.
//
// WHAT THE TEMPLATE TOLERATES. Different titles, different last-updated lines
// and dates, different heading counts (9 / 7 / 6 H2s), inline links, external
// links, email references, <strong> run-ins, <code> spans, notes and long
// paragraphs — all without a per-route branch. Ordered and unordered lists
// pass through untouched too, since the body is authored HTML; note that no
// document contains one today and the frozen design therefore styles none, so
// a future legal revision that introduces a list needs a design decision
// rather than an improvised rule here.
//
// STRUCTURED DATA: none, as in the source and the frozen family. No
// LegalPage, WebPage or BreadcrumbList is invented because the pages are being
// restyled; that is Phase 8's call.
//
// META: title, description, canonical and robots are the published values.
// There is no og: tag in the source and none is added — the shared shell emits
// its own og: block for every page, which is pre-existing shell behaviour and
// not a Legal decision.
//
// NO CONSENT MECHANISM is added: no banner, no platform, no accept/reject
// control, no analytics gating, no opt-out system. The documents reference only
// the mechanisms that actually exist (browser settings and the Google Analytics
// opt-out add-on). Restyling a policy does not make the site compliant, and
// nothing here implies it does.
//
// Prototype-only code is not ported: the .dc runtime, reviewDoc, the
// MAIN_HTML / META document stores and the review title observer. Each legal
// URL renders its own document directly, with no JavaScript of any kind: the
// family ships no page script, because there is no behaviour to add.
import { esc } from "../render.mjs";
import { legalDocs } from "../legal-content.mjs";

const HEAD_EXTRA = `<link rel="stylesheet" href="/assets/legal.css">`;

// One measured column — the title, date, body and back link all share it, so
// every line starts on the same left edge.
const main = d => `
<article id="doc" data-legal aria-labelledby="doc-h1">
  <header data-lhd>
    <span data-leb>${esc(d.eyebrow)}</span>
    <h1 id="doc-h1" data-lh1>${esc(d.h1)}</h1>
    <p data-updated data-meta>${esc(d.datePrefix)} <time datetime="${esc(d.datetime)}">${esc(d.dateText)}</time></p>
  </header>
  <div data-lbody>
${d.body}
  </div>
  <p data-lback><a href="${d.backHref}">${esc(d.backText)}</a></p>
</article>
`;

export function legalPage(d) {
  return {
    path: `/${d.slug}/`,
    shell: "v3",
    shellClass: "v3-lg",
    headExtra: HEAD_EXTRA,
    title: d.title,
    description: d.description,
    robots: d.robots || undefined,
    // No schema node of any kind, matching the source and the frozen family.
    schema: [],
    main: main(d)
  };
}

export const allLegalPages = legalDocs.map(legalPage);

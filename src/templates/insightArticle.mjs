// The reusable INSIGHTS article template — one template, all 18 articles.
//
// Ported from the frozen Master Design Release design
// "INSIGHTS/Tilth Insight Article Template - Marketing Agency Cost India.dc.html",
// per INSIGHTS_DESIGN_REPORT.md §2 and §5.
//
// Reading order, approved and frozen: context/crumb -> post-meta -> title ->
// standfirst -> byline -> body -> FAQ when the article has one -> author bio ->
// restrained next-step CTA.
//
// ORDER CHANGE, approved by the frozen design (report §5): the source places the
// article's own CTA before the FAQ; it moves to the end as the restrained next
// step, and its heading is promoted from h3 to h2 so the outline stays correct
// after the move. No CTA copy changes — the 18 bespoke headings and bodies, the
// "Request a free audit" label and /contact/ are all as published.
//
// THE OPTIONAL FAQ (report §5, brief §10). 14 of the 18 articles have one; the
// other 4 render no heading, no container and no spacing — the whole section is
// simply absent. No question is invented to make the set uniform.
// The disclosure is the approved shared v3 contract: a real <button> with
// aria-expanded and aria-controls, the answer a role="region", every answer
// shipped at natural height so all of them are readable and crawlable with JS
// off, and insights-article.js applying the collapse.
//
// NOT ADDED, because none exists in the source and the frozen design excludes
// them (report §5 / brief §9): table of contents, related-reading engine, share
// buttons, reading-progress, sticky rail, newsletter. No analytics events are
// invented either — the Insights family has no production analytics contract.
//
// Head metadata and the JSON-LD graph are the published values, passed through
// untouched from src/insights-content.mjs: headline, description, dates,
// author, publisher, image, articleSection and inLanguage. Language signals are
// preserved exactly as published and recorded for the later SEO phase, not
// normalised here.
//
// FAQPage IS THE ONE EXCEPTION, and deliberately so (owner decision, Phase 4b).
// The published graph's FAQPage had drifted from the page: across the 14 FAQ
// articles it declared 72 questions against 70 visible ones, 25 of its questions
// appeared nowhere on the page, and not one of its answers matched the visible
// answer verbatim. The approved visible FAQ is authoritative, so the FAQPage
// node is now GENERATED from the same `faq` array that renders the visible
// disclosure — one source for both. The two cannot drift again.
// Nothing else in the graph is touched: BlogPosting, BreadcrumbList and every
// other field still pass through exactly as published.
//
// Prototype-only code is not ported: the .dc runtime, reviewArticle, the
// ART_HTML data block and the review title observer.
import { insightArticles } from "../insights-content.mjs";
import { esc } from "../render.mjs";

const HEAD_EXTRA = `<link rel="stylesheet" href="/assets/core-company.css">
<link rel="stylesheet" href="/assets/insights.css">
<script type="module" src="/insights-article.js"></script>`;

// The visible answer is authored markup — only <p> and <a>, single-paragraph,
// and the only entity in the set is &amp; (audited across all 70 answers).
// acceptedAnswer.text is the text a reader actually sees, so tags come off and
// that entity is decoded. Questions carry no markup at all.
function plain(htmlStr) {
  return String(htmlStr)
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

// FAQPage built from the same data the visible disclosure renders.
function faqSchema(a) {
  if (!a.faq.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: a.faq.map(f => ({
      "@type": "Question",
      name: plain(f.q),
      acceptedAnswer: { "@type": "Answer", text: plain(f.a) }
    }))
  };
}

function faqBlock(a) {
  if (!a.faq.length) return "";
  const items = a.faq.map((f, i) => `
        <div data-faq-item>
          <h3><button type="button" data-faq-btn id="faq-b${i}" aria-controls="faq-p${i}" aria-expanded="${i === 0 ? "true" : "false"}"><span>${f.q}</span><span data-faq-ic aria-hidden="true">+</span></button></h3>
          <div data-faq-ans id="faq-p${i}" role="region" aria-labelledby="faq-b${i}"><div>${f.a}</div></div>
        </div>`).join("");
  return `
      <section data-afaq aria-labelledby="faq-h">
        <h2 id="faq-h">${a.faqHeading}</h2>${items}
      </section>`;
}

function articleMain(a) {
  return `
<article data-article id="article" data-depth-label="SHALLOW">
  <div data-acol>
    <header data-ahead>
      <nav data-crumb aria-label="Breadcrumb"><a href="/">Home</a> <span data-sep aria-hidden="true">/</span> <a href="/insights/">Insights</a> <span data-sep aria-hidden="true">/</span> <span aria-current="page">${esc(a.section)}</span></nav>
      <div data-postmeta data-meta><span data-pm-sec>${esc(a.section)}</span><span data-dot aria-hidden="true">·</span><span>${esc(a.readTime)}</span><span data-dot aria-hidden="true">·</span><span>${esc(a.date)}</span></div>
      <h1 data-ah1>${a.h1}</h1>
      <p data-standfirst>${a.standfirst}</p>
      <div data-byline>
        ${a.bylineImg}
        <div data-who><span>${a.bylineWho}</span></div>
      </div>
    </header>
    <div data-prose>
${a.bodyHtml}
    </div>${faqBlock(a)}
    <div data-bio>
      ${a.bio.img}
      <p>${a.bio.html}</p>
    </div>
    <aside data-acta aria-labelledby="acta-h">
      <div data-eyebrow>Next step</div>
      <h2 id="acta-h">${a.cta.heading}</h2>
      <p>${a.cta.body}</p>
      <a data-btn href="${a.cta.href}"><span>${a.cta.label}</span> <span aria-hidden="true">&rarr;</span></a>
    </aside>
  </div>
</article>
`;
}

function page(a) {
  // The published graph, passed through, minus its stale FAQPage node, which is
  // regenerated from the visible FAQ above. Node order is preserved: the
  // generated FAQPage takes the position the published one held.
  const published = a.schema.flatMap(g => g["@graph"] || [g]);
  const generated = faqSchema(a);
  const schema = published.map(n => (n["@type"] === "FAQPage" ? generated : n)).filter(Boolean);
  if (generated && !published.some(n => n["@type"] === "FAQPage")) schema.push(generated);
  return {
    path: `/insights/${a.slug}/`,
    shell: "v3",
    shellClass: "v3-core v3-ins v3-article",
    headExtra: HEAD_EXTRA,
    title: a.meta.title,
    description: a.meta.description,
    ogTitle: a.meta.ogTitle,
    ogDescription: a.meta.ogDescription,
    ogType: a.meta.ogType || undefined,
    robots: a.meta.robots || undefined,
    schema,
    main: articleMain(a)
  };
}

export const allInsightArticles = insightArticles.map(page);

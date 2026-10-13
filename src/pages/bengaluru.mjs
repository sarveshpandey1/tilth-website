// /marketing-agency-bengaluru/ — Brand v3, BENGALURU local SEO / credibility page.
//
// Ported from the frozen Master Design Release design
// "BENGALURU/Tilth Marketing Agency Bengaluru.dc.html", per
// BENGALURU_DESIGN_REPORT.md.
//
// THE ROUTE IS UNCHANGED. /marketing-agency-bengaluru/ is the only Bengaluru
// route: no /bengaluru/, /bangalore/ or /india/bengaluru/ alternate is created,
// no redirect is added, and the canonical is the shell default for this path.
// The 18 insight-article bios link here and still resolve. The page is not in
// the nav or the footer, exactly as published (report §13).
//
// "Local ledger." One long, keyword-dense editorial page composed entirely from
// the CORE COMPANY grammar — hero, ledger, numbered rows, the shared proof
// component, the v3 FAQ disclosure and the Moss CTA band. No signature
// interaction: the frozen design does not give the page one, because the copy
// is the SEO payload. Nothing reveals; everything is present at first paint.
//
// Band rhythm, from the frozen design: hero and opening statement on Carbon,
// channels on Carbon, "Why" inverted on Mineral, the local pair on Carbon,
// EXPERIENCE on Carbon, FAQ inverted on Mineral, the closing CTA on Moss.
//
// CONTENT IS THE SOURCE'S OWN. Nothing is rewritten, shortened, modernised or
// re-headed for visual fit.
//
// PROOF — read this before touching the EXPERIENCE section.
// The two approved records are FOUNDER / CORE-TEAM EXPERIENCE, which is exactly
// what the section heading says: "Experience from the founder and core team."
// (CLAUDE.md §11.) They are NOT Bengaluru clients, NOT Bengaluru case studies,
// NOT local customer proof and NOT named Tilth Bengaluru engagements. Each
// carries its own market label — EDTECH · INDIA and CRYPTO · GLOBAL — so the
// page cannot read as local client proof. They render from the same
// caseStudies[] records, behind the same publishApproved gate, through the same
// shared component as /work/, /about/ and the Industries detail pages. The
// homepage D2C/SaaS evidence cards and the PayDirect/Ommora client markers are
// deliberately NOT imported here.
//
// THE THREE REMOVED STATISTICS. The published page carried "6 in 10", "42%" and
// "2 in 3". None has a source anywhere in the repo, and the owner decision is
// REMOVED PENDING VERIFIED SOURCE / DATE / PROVENANCE (report §8, §22). They are
// not restored, not substituted, and no new local statistic is invented in their
// place. The "Why" band is composed to close without them: the frozen QA
// confirms no dead space at any of the 12 widths (report §15.1).
//
// SIX CHANNELS, NOT EIGHT SERVICES. The channel names are the source's own and
// do not match the eight services[] records, and the schema OfferCatalog gives
// a third set. None of the three is normalised here and no channel links to a
// service-detail route; only /services/ and /insights/ are linked, as published.
// Recorded as LATER CONTENT / IA (report §7, §22).
//
// STRUCTURED DATA. See the schema block below for the field-by-field audit.
// The FAQPage node is GENERATED from the same `FAQ` array that renders the
// visible disclosure, so the two cannot drift (the Phase 4b principle). The
// published graph's FAQPage kept five longer, separately maintained answers —
// 0 of 5 matched the visible text — and the approved visible wording wins.
//
// og:locale RESOLVED in Phase 8 (register B-4). The published page sent en_IN;
// Phases 5-7 could not restore it without a shared-shell field, so it was
// flagged. Phase 8 added the route-specific ogLocale field to renderPage, and
// this India-market route sends en_IN again. Whether the route should also join
// the /india/ hreflang cluster is a separate question and stays open: the page
// is a local-relevance page, not a regional alternative of /us/, so no
// reciprocal alternate is fabricated for it.
//
// Prototype-only code is not ported: the .dc runtime, the reviewState gates
// (default / founder-absent / proof-absent / experience-absent) and the
// display-fit safeguard — the Bengaluru H1 ladder is authored under its binding
// unit at every width and the frozen QA records the safeguard as never firing,
// so the eight [data-fit] hooks are dropped as they were in Core Company and
// Insights.
import { esc } from "../render.mjs";
import { site, caseStudies } from "../data.mjs";

const path = "/marketing-agency-bengaluru/";
const url = site.base + path;

const HEAD_EXTRA = `<!-- City/region signals the visible copy states outright ("Tilth is based in
     Bengaluru, Karnataka"). The published page also carried geo.position and
     ICBM map coordinates (12.9716, 77.5946 — the city centre, not a Tilth
     address); both are removed, with the GeoCoordinates node, because the
     approved source supports no physical office and no coordinate claim
     (report §11.1). -->
<meta name="geo.region" content="IN-KA">
<meta name="geo.placename" content="Bengaluru">
<link rel="stylesheet" href="/assets/core-company.css">
<link rel="stylesheet" href="/assets/bengaluru.css">`;

// ---------------------------------------------------------------------------
// CONTENT — verbatim from the frozen design.
// ---------------------------------------------------------------------------

// The six channels, in the source's order. The numbers are decorative and
// aria-hidden; the channel name is the h3.
const CHANNELS = [
  { name: "Paid Ads", body: "Meta and Google ads with tracking and conversion events fixed before we scale spend." },
  { name: "Affiliates", body: "Affiliate programs where partners are vetted and paid on real revenue, not reach." },
  { name: "SEO", body: "Search strategy tied to revenue intent and local Bengaluru demand, not traffic volume." },
  { name: "Influencer", body: "Small, fast creator tests on clear fit before committing budget." },
  { name: "PR &amp; Events", body: "Targeted where your buyer actually is — not just where it's loudest." },
  { name: "Branding", body: "Positioning locked before a single piece of creative is produced." }
];

// The five FAQs. This array is the single source for BOTH the visible
// disclosure and the FAQPage node — see `faqSchema` below. Questions carry no
// markup; FAQ 5's answer carries the one in-answer link.
const FAQ = [
  {
    q: "What does a performance marketing agency in Bengaluru do?",
    a: "It plans, runs, and measures paid and organic channels — paid ads, affiliates, SEO, influencer, PR, and branding — with a focus on measurable revenue, not vanity metrics. Tilth works foundation-first: we fix tracking, attribution, and targeting before scaling spend."
  },
  {
    q: "How much does a marketing agency in Bengaluru cost?",
    a: "Most digital marketing agencies in Bengaluru charge a monthly retainer that varies with scope, usually separate from the ad spend paid to Google and Meta. Tilth scopes engagements after a free foundation audit, so you only invest once you know what needs fixing."
  },
  {
    q: "Do you only work with brands in Bengaluru?",
    a: "No. We're based in Bengaluru and work with brands across India and globally. Being local simply means we know the Bengaluru startup and D2C ecosystem well."
  },
  {
    q: "What makes Tilth different from other digital marketing agencies in Bengaluru?",
    a: "Most agencies start spending on day one. We audit and fix the foundation first, so your spend is measurable from the start and you don't pay to scale guesswork."
  },
  {
    q: "How do I get started?",
    a: "Start with a <a href=\"/contact/\">free marketing foundation audit</a>. We'll tell you honestly what's broken and what's worth fixing first — no pitch attached."
  }
];

// The founder paragraph is the approved author bio that ships on all 18 insight
// articles, in the variant the frozen design uses, minus the self-link to this
// very route (the article version links "Tilth, a foundation-first marketing
// agency in Bengaluru" here) and with "Read her story →" lifted out as the
// block's own quiet text link.
const FOUNDER_BIO = "<strong>Anuja</strong> is the founder of Tilth, a foundation-first marketing agency in Bengaluru. She has spent 10+ years across fitness, edtech, fintech, SaaS, and D2C helping brands spend on marketing they can actually measure.";

// ---------------------------------------------------------------------------
// RENDERING
// ---------------------------------------------------------------------------

const num = i => String(i + 1).padStart(2, "0");

// The tilde takes the shared [data-approx] treatment so "~0%" reads as an
// approximation set in Chivo rather than as Syne's decorative mid-height mark
// (Phase 0, Register G-5 — the same helper /work/ uses).
const approx = m => esc(m).replace(/~/g, "<span data-approx>~</span>");

const records = caseStudies.filter(c => c.publishApproved);

const channels = CHANNELS.map((c, i) => `
          <li><span data-n aria-hidden="true">${num(i)}</span><h3>${c.name}</h3><p>${c.body}</p></li>`).join("");

const faqItems = FAQ.map((f, i) => `
        <div data-faq-item>
          <h3><button type="button" data-faq-btn id="faq-b${i}" aria-controls="faq-p${i}" aria-expanded="${i === 0 ? "true" : "false"}"><span>${f.q}</span><span data-faq-ic aria-hidden="true">+</span></button></h3>
          <div data-faq-ans id="faq-p${i}" role="region" aria-labelledby="faq-b${i}"><div><p data-bl-ans>${f.a}</p></div></div>
        </div>`).join("");

const proof = records.map(c => `
        <article data-proof>
          <h3 data-plabel>${esc(c.anonLabel)}</h3>
          <div data-pmeta>${esc(c.industry.toUpperCase())} &middot; ${esc(c.market.toUpperCase())}</div>
          <ul>${c.metrics.map(m => `
            <li>${approx(m)}</li>`).join("")}
          </ul>
          <p data-psum>${esc(c.summary)}</p>
        </article>`).join("");

const main = `
<section id="hero" data-hero data-bl-hero data-depth-label="SURFACE">
  <nav data-crumb aria-label="Breadcrumb"><a href="/">HOME</a> <span data-sep aria-hidden="true">/</span> <span aria-current="page">MARKETING AGENCY IN BENGALURU</span></nav>
  <div data-eyebrow>Marketing agency &middot; Bengaluru</div>
  <h1 data-h1>A&nbsp;performance marketing agency in Bengaluru, built on <span data-acc>foundations</span>.</h1>
  <div data-bl-intro>
    <p data-lede>Tilth is a foundation-first marketing agency in Bengaluru. We fix the tracking, attribution, and targeting under your spend — across paid ads, affiliates, SEO, influencer, PR, and branding — before you scale a single rupee.</p>
    <div data-bl-ctarow>
      <a data-btn href="/contact/">Request a free audit <span aria-hidden="true">&rarr;</span></a>
      <span data-bl-call>or call / WhatsApp <a href="tel:${site.phoneHref}">${esc(site.phone)}</a></span>
    </div>
  </div>
</section>

<section id="problem" data-sec data-bl-open data-depth-label="SURFACE" aria-label="The problem">
  <div data-bl-rule><p data-bl-statement>Most marketing budgets in Bengaluru's startups and D2C brands are wasted before the work even begins — not because the ads are bad, but because the foundation under them is broken. Tracking that doesn't track. Targeting built on guesses. Affiliate partners paid for reach instead of revenue. As a <strong>performance marketing agency in Bengaluru</strong>, our job is to fix that first, so growth actually compounds.</p></div>
</section>

<section id="channels" data-sec data-bl-flush data-depth-label="SHALLOW" aria-labelledby="channels-h">
  <div data-ledger>
    <div data-lhead>
      <h2 id="channels-h" data-h2>What our Bengaluru marketing agency <em>does</em></h2>
      <p data-bl-p>One audit. Six channels. The same question every time — <em>is this where the money goes, and does it come back?</em></p>
    </div>
    <div>
      <ul data-bl-ch>${channels}
      </ul>
      <p data-bl-p data-bl-after>See how each channel works on our <a href="/services/">services page</a>, or read the thinking behind it in our <a href="/insights/">insights</a>.</p>
    </div>
  </div>
</section>

<section id="why" data-sec data-inv data-depth-label="MID" aria-labelledby="why-h">
  <div data-ledger>
    <div data-lhead>
      <h2 id="why-h" data-h2>Why a <em>foundation-first</em> agency in Bengaluru</h2>
    </div>
    <div>
      <p data-bl-p>Most digital marketing agencies in Bengaluru start spending on day one. We don't. Before we run a campaign, we run a <a href="/insights/marketing-foundation-audit/">marketing foundation audit</a> — checking whether your data is even true.</p>
      <p data-bl-p>Fix the foundation and every channel after it becomes measurable. That's the whole idea behind <a href="/approach/">the Tilth Cycle</a> — grow deep, then market smart.</p>
    </div>
  </div>
</section>

<section id="local" data-sec data-depth-label="MID" aria-label="Who we work with and areas we serve">
  <div data-bl-pair>
    <div>
      <h2 id="who-h" data-h2>Who we work with</h2>
      <p data-bl-p>We work with founders and marketing leads who own their numbers — early-stage startups, D2C brands, and growing businesses in Bengaluru and across India who are tired of busy dashboards that don't explain where the money went. If you're spending on marketing but can't say what's working, that's exactly the gap we close.</p>
    </div>
    <div>
      <h2 id="areas-h" data-h2>Areas we serve</h2>
      <p data-bl-p>Tilth is based in <strong>Bengaluru, Karnataka</strong> and works with brands across India and globally. We know the local startup and D2C ecosystem well, and the work is fully remote-friendly — so whether you're in Koramangala, Indiranagar, or another city entirely, the foundation-first approach is the same.</p>
    </div>
  </div>
</section>

<section id="experience" data-sec data-bl-flush data-depth-label="DEEP" aria-labelledby="exp-h">
  <h2 id="exp-h" data-h2>Experience from the founder and core team.</h2>
  <div data-bl-exp>
    <div data-bl-founder id="founder">
      <figure><img src="/anuja.jpg" alt="Anuja, Founder of Tilth" width="560" height="700" loading="lazy" decoding="async"><figcaption>Anuja — Founder, Tilth</figcaption></figure>
      <div>
        <h3>Founder</h3>
        <p data-bl-p>${FOUNDER_BIO}</p>
        <a data-textlink href="/about/"><span>Read her story &rarr;</span></a>
      </div>
    </div>
    <div data-bl-proofwrap id="proof">
      <div data-proof-grid>${proof}
      </div>
      <a data-textlink href="/work/"><span>See the work &rarr;</span></a>
    </div>
  </div>
</section>

<section id="faq" data-sec data-inv data-depth-label="DEEP" aria-labelledby="faq-h">
  <div data-ledger>
    <div data-lhead>
      <h2 id="faq-h" data-h2>Marketing agency in Bengaluru — FAQs</h2>
    </div>
    <div data-bl-faq>${faqItems}
    </div>
  </div>
</section>

<section id="cta" data-moss data-depth-label="FOUNDATION" aria-labelledby="cta-h">
  <div data-cta-grid>
    <h2 id="cta-h" data-cta-h>Get a <span data-acc>free</span> foundation audit.</h2>
    <div>
      <p data-cta-p>We'll review your current setup and tell you, honestly, what's broken — no pitch attached.</p>
      <div data-cta-actions>
        <a data-btn href="/contact/">Request a free audit <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </div>
  <p data-bl-contact>Tilth — Marketing Agency, Bengaluru<span data-sep aria-hidden="true">&middot;</span><a href="mailto:${site.email}">${esc(site.email)}</a><span data-sep aria-hidden="true">&middot;</span><a href="tel:${site.phoneHref}">${esc(site.phone)}</a></p>
</section>
`;

// ---------------------------------------------------------------------------
// STRUCTURED DATA
//
// The published graph is kept, with the unsupported factual claims removed and
// the FAQPage regenerated. Field by field:
//
//   REMOVED  priceRange "$$"      — no price signal is approved for public
//                                   display, and the visible FAQ deliberately
//                                   declines to quote one (report §11.1).
//   REMOVED  geo (GeoCoordinates) — 12.9716 / 77.5946 is the Bengaluru city
//                                   centre, not a Tilth location. No coordinate
//                                   claim is approved (report §11.1). The
//                                   matching geo.position / ICBM head meta go
//                                   with it.
//   CHANGED  email                — anuja@tilth.in -> site.email
//                                   (anuja@wearetilth.com), the canonical
//                                   contact address, read from one place so it
//                                   cannot drift from the visible contact line.
//   REBUILT  FAQPage              — generated from the FAQ array above.
//
//   KEPT, and supported by the visible page:
//     address     PostalAddress with locality/region/country and NO street
//                 address — exactly the "based in Bengaluru, Karnataka" the page
//                 states. No street, no hours, no map.
//     areaServed  City Bengaluru + Country India + "Worldwide" — "based in
//                 Bengaluru and works with brands across India and globally".
//     founder     Person Anuja, jobTitle Founder — the visible EXPERIENCE block.
//     makesOffer  the free foundation audit at price 0 INR — the hero and the
//                 closing CTA both offer it free.
//     telephone, sameAs, knowsAbout, image, logo, url, name, description,
//                 BreadcrumbList (now mirrored by the visible breadcrumb) and
//                 the Service node with its OfferCatalog — all as published.
//
//   NOT INVENTED anywhere: street address, coordinates, opening hours,
//     priceRange, aggregateRating, review, or any local customer count. The
//     published graph carried none of the last four and none is added.
//
//   DEFERRED, deliberately: this page's @id #localbusiness and @type
//     [ProfessionalService, MarketingAgency] still describe a second entity
//     alongside the site-wide #org Organization, and the two disagree on name,
//     description, image, founder and areaServed. Reconciling them into one
//     production entity model is genuinely ambiguous — it is a site-wide
//     decision, not a Bengaluru one — so it stays recorded for the SEO/schema
//     phase (report §11.1, §22) and this fix stays route-specific.
// ---------------------------------------------------------------------------

// The visible answers are authored markup — a single <p>, with <a> in FAQ 5,
// and the only entities in the set are &amp; and '. acceptedAnswer.text
// is the text a reader actually sees, so tags come off and those entities are
// decoded. Questions carry no markup.
function plain(htmlStr) {
  return String(htmlStr)
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: FAQ.map(f => ({
    "@type": "Question",
    name: plain(f.q),
    acceptedAnswer: { "@type": "Answer", text: plain(f.a) }
  }))
};

const localBusiness = {
  "@type": ["ProfessionalService", "MarketingAgency"],
  "@id": url + "#localbusiness",
  name: "Tilth — Marketing Agency in Bengaluru",
  description: "Foundation-first performance marketing agency in Bengaluru fixing tracking, attribution, and targeting across paid ads, affiliates, SEO, influencer, PR, and branding before clients scale spend.",
  url,
  email: site.email,
  telephone: site.phoneHref,
  image: site.base + "/og-image.png",
  logo: site.base + "/favicon.svg",
  founder: { "@type": "Person", name: "Anuja", jobTitle: "Founder" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN"
  },
  areaServed: [
    { "@type": "City", name: "Bengaluru" },
    { "@type": "Country", name: "India" },
    "Worldwide"
  ],
  knowsAbout: [
    "Performance marketing",
    "Paid advertising",
    "Affiliate marketing",
    "Search engine optimisation",
    "Influencer marketing",
    "Public relations",
    "Branding",
    "Marketing attribution",
    "Conversion tracking"
  ],
  makesOffer: {
    "@type": "Offer",
    name: "Free marketing foundation audit",
    price: "0",
    priceCurrency: "INR"
  },
  sameAs: [site.social.linkedin, site.social.instagram, site.social.x, site.social.facebook]
};

// The OfferCatalog names are the published ones. They differ from both the six
// visible channels and the eight services[] records; that mismatch is recorded,
// not resolved here (report §7, §22).
const service = {
  "@type": "Service",
  serviceType: "Performance marketing",
  provider: { "@id": url + "#localbusiness" },
  areaServed: { "@type": "City", name: "Bengaluru" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Marketing services",
    itemListElement: [
      "Paid Ads",
      "Affiliate Marketing",
      "SEO",
      "Influencer Marketing",
      "PR & Events",
      "Branding"
    ].map(n => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } }))
  }
};

const breadcrumb = {
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.base + "/" },
    { "@type": "ListItem", position: 2, name: "Marketing Agency in Bengaluru", item: url }
  ]
};

export default {
  path,
  shell: "v3",
  shellClass: "v3-core v3-bl",
  headExtra: HEAD_EXTRA,
  title: "Performance Marketing Agency in Bengaluru | Tilth",
  description: "Tilth is a foundation-first performance marketing agency in Bengaluru. We fix tracking, attribution, and targeting across paid ads, affiliates, SEO, influencer, PR & branding — before you scale. Get a free audit.",
  ogTitle: "Performance Marketing Agency in Bengaluru | Tilth",
  ogDescription: "A foundation-first marketing agency in Bengaluru. We fix what's broken across every channel before you spend. Free audit, no pitch.",
  ogLocale: "en_IN",
  schema: [breadcrumb, localBusiness, service, faqSchema],
  bodyScripts: ["/bengaluru.js"],
  main
};

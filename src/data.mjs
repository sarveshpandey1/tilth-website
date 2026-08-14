// Central content/data model for the Tilth site generator.
// Approval-gated records render only when their *Approved fields are true (Brief §7, §10, §34, §54).

export const site = {
  brand: "Tilth",
  wordmark: "TILTH",
  base: "https://wearetilth.com",
  ga: "G-1MJEZ4VK26",
  positioning: "India-rooted · Working across markets",
  tagline: "Grow deep. Market smart.",
  email: "anuja@wearetilth.com", // wearetilth.com mailbox confirmed active (workbook T-014)
  phone: "+91 70079 99306",
  phoneHref: "+917007999306",
  responseTime: "within one working day",
  address: { locality: "Bengaluru", region: "Karnataka", country: "IN" }, // legal/registered — do not change on domain move (Brief §61)
  social: {
    linkedin: "https://www.linkedin.com/company/tilth-in/",
    instagram: "https://www.instagram.com/tilth.in/",
    x: "https://x.com/Anuja_tilth",
    facebook: "https://www.facebook.com/profile.php?id=61590502284155"
  }
};

// Primary navigation (Brief §22/§50). Items flip on as their sections are built.
export const nav = {
  primary: [
    { label: "Services", href: "/services/", live: true },
    { label: "Industries", href: "/industries/", live: false },
    { label: "Work", href: "/work/", live: false },
    { label: "Approach", href: "/approach/", live: true },
    { label: "Insights", href: "/insights/", live: true },
    { label: "About", href: "/about/", live: true }
  ],
  // fallback nav used until Work/Industries exist, so generated pages never link to 404s
  fallback: [
    { label: "Services", href: "/services/" },
    { label: "Approach", href: "/approach/" },
    { label: "Insights", href: "/insights/" },
    { label: "Tools", href: "/tools/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" }
  ],
  cta: { label: "Discuss Your Growth", href: "/contact/" }
};

// ---------------------------------------------------------------------------
// Homepage content model (workbook: Copy Deck). Kept as data so desktop/mobile
// render from one source and copy stays editable without touching markup.
// ---------------------------------------------------------------------------

// hero_service_chips — each chip links to its own canonical service page (T-003)
export const heroServiceChips = [
  { label: "Growth Strategy", href: "/services/growth-strategy-measurement/" },
  { label: "Paid Media", href: "/services/performance-marketing/" },
  { label: "SEO & Content", href: "/services/seo-ai-search/" },
  { label: "Affiliate Growth", href: "/services/affiliate-partnerships/" },
  { label: "Websites & CRO", href: "/services/website-design-development/" }
];

// brand_logos — text wordmarks only. Owner directive: do not recreate or imitate
// official logo designs. `logo` stays null until approved image files exist; the
// component swaps text→img without a layout change when populated. (T-004/T-005)
export const brandExperience = [
  { name: "PayDirect", logo: null },
  { name: "Ommora", logo: null },
  { name: "Density Exchange", logo: null },
  { name: "CareerLabs", logo: null },
  { name: "FusionFit", logo: null },
  { name: "Demi.AI", logo: null }
];

// industry_links — only sectors with a substantive live page (T-006).
// Startups omitted: it is a company stage, not an industry.
// Fitness & Wellness pending a complete approved page; add here when it exists.
export const homeIndustries = [
  { label: "SaaS", href: "/industries/saas/" },
  { label: "D2C & Ecommerce", href: "/industries/d2c-ecommerce/" },
  { label: "FinTech", href: "/industries/fintech/" },
  { label: "EdTech", href: "/industries/edtech/" }
];

// services 01–05 — hrefs point at the routes that actually exist (T-007)
export const homeServices = [
  { n: "01", name: "Growth Strategy & Measurement", href: "/services/growth-strategy-measurement/",
    desc: "Growth audits, funnel strategy, GA4, conversion tracking, attribution and decision-ready dashboards." },
  { n: "02", name: "Performance Marketing", href: "/services/performance-marketing/",
    desc: "Google, Meta and LinkedIn campaigns, media planning, experimentation, creative testing and budget optimisation tied to revenue." },
  { n: "03", name: "SEO & Content Marketing", href: "/services/seo-ai-search/",
    desc: "Technical SEO, on-page SEO, commercial keyword strategy, content systems and visibility across Google and AI search." },
  { n: "04", name: "Affiliate & Partnership Marketing", href: "/services/affiliate-partnerships/",
    desc: "Partner strategy, discovery, commercial models, tracking, fraud controls and performance optimisation." },
  { n: "05", name: "Websites & Conversion Optimisation", href: "/services/website-design-development/",
    desc: "Strategy, UX, design, development, analytics, SEO foundations, accessibility and CRO in one coordinated process." }
];

// approach 01–03 (T-008)
export const homeApproach = [
  { n: "01", name: "Diagnose the constraint",
    desc: "We audit acquisition, tracking, funnel, creative and conversion to identify what is limiting growth before recommending more spend." },
  { n: "02", name: "Build the growth system",
    desc: "We fix measurement, define funnel stages, sharpen positioning and establish a repeatable testing process." },
  { n: "03", name: "Scale what works",
    desc: "We increase investment only after performance is measurable, repeatable and connected to agreed business outcomes." }
];

// why_cards (T-010)
export const whyTilth = [
  { name: "Founder-led strategy", desc: "Senior strategy on every engagement — you are not handed to a junior team after the pitch." },
  { name: "Senior execution", desc: "The people who diagnose the problem stay on the work that fixes it." },
  { name: "One accountable partner", desc: "Strategy, execution and measurement coordinated through Tilth, not scattered across vendors." },
  { name: "India–US collaboration", desc: "India-rooted delivery with working overlap for US teams and buying behaviour." }
];

// faq_01..05 (T-012). Workbook supplied questions only ("Answer required").
// Answers below are DRAFTED FROM COPY ALREADY PUBLISHED ON THIS SITE — the services
// list, the approach/foundation-first method, the engagement models above, and the
// existing India-rooted/US-aware positioning. No new commercial claim is introduced:
// no US office/entity/team, no pricing, no client names, no delivery guarantees.
// `a` is trusted authored HTML (same convention as ctaBlock headings). REVIEW BEFORE PUBLISH.
export const homeFaqs = [
  { q: "What does a growth marketing agency do?",
    a: `A growth marketing agency works across the whole funnel rather than a single channel — strategy and measurement, paid media, SEO and content, affiliate and partnerships, and website conversion. At Tilth those sit with <a href="/services/">one accountable partner</a> so strategy, execution and measurement stay connected instead of being split across vendors.` },
  { q: "How is Tilth different from a performance marketing agency?",
    a: `A performance marketing agency usually starts with channels and budget. Tilth is foundation-first: most growth problems are not channel problems — they come from weak tracking, unclear positioning, fragmented funnels or low conversion. We diagnose the constraint, fix the system, then scale the channels that prove their value. <a href="/approach/">See the approach</a>.` },
  { q: "Do you work with companies outside India?",
    a: `Yes. Tilth is based in Bengaluru and works with brands across markets, including the United States. Collaboration is structured around agreed reviews, shared documentation and the client's operating rhythm rather than a single location, and recommendations are grounded in your customer, category and data rather than assumptions about a market. <a href="/contact/">Talk to us about your market</a>.` },
  { q: "What does foundation-first mean?",
    a: `It means fixing the growth system before increasing spend. Most growth problems are not channel problems — they come from weak tracking, unclear positioning, fragmented funnels or low conversion. We diagnose the constraint, build the measurement and funnel underneath it, and only then scale the channels that prove their value. <a href="/approach/">See the approach</a>.` },
  { q: "What engagement models does Tilth offer?",
    a: `Three. A <strong>Foundation Audit</strong> — a diagnostic across the growth system. A <strong>Growth Project</strong> — fixed scope such as a website build, tracking rebuild, paid-media setup, SEO strategy or affiliate program. And an <strong>Ongoing Growth Partnership</strong> — continuing strategy, execution, optimisation, reporting and testing. <a href="/contact/">Discuss which fits</a>.` }
];


// Services (Brief §23). prominence: "featured" gets visual weight; "standard" is secondary.
export const services = [
  { slug: "growth-strategy-measurement", name: "Growth Strategy & Measurement", prominence: "featured",
    keyword: "growth strategy and marketing measurement",
    problem: "Reporting doesn't match revenue, and no one can say which spend actually pays back.",
    summary: "Audits, funnel strategy, analytics, tracking architecture, attribution and the dashboards that make growth measurable." },
  { slug: "performance-marketing", name: "Performance Marketing", prominence: "featured",
    keyword: "performance marketing agency",
    problem: "Paid media has stopped scaling efficiently and acquisition costs keep climbing.",
    summary: "Customer-acquisition strategy, media planning, experimentation, budget allocation and cross-channel optimisation tied to revenue." },
  { slug: "paid-media", name: "Paid Media", prominence: "standard",
    keyword: "paid media / PPC agency",
    problem: "Campaigns run, but structure, tracking and creative aren't set up to compound.",
    summary: "Google, Meta and LinkedIn campaigns — structure, audiences, conversion tracking, creative testing and reporting." },
  { slug: "seo-ai-search", name: "SEO, Content & AI Search", prominence: "featured",
    keyword: "SEO agency / AI search (AEO, GEO)",
    problem: "SEO produces impressions and rankings, but not qualified pipeline.",
    summary: "Technical and on-page SEO, commercial keyword and intent mapping, content strategy, and visibility across AI answer engines." },
  { slug: "affiliate-partnerships", name: "Affiliate & Partnership Marketing", prominence: "featured",
    keyword: "affiliate marketing agency",
    problem: "Partners create activity, but not valuable customers.",
    summary: "Program strategy, partner discovery and validation, commercial models, tracking, fraud controls and performance optimisation." },
  { slug: "website-design-development", name: "Website Design, Development & CRO", prominence: "featured",
    keyword: "website design and development agency",
    problem: "The website looks fine but limits conversion and leaks growth.",
    summary: "Strategy, UX, design, development, analytics, SEO foundations, accessibility and conversion-rate optimisation in one coordinated process." },
  { slug: "brand-creative", name: "Brand Strategy & Performance Creative", prominence: "standard",
    keyword: "performance creative / brand strategy",
    problem: "Creative is declining in performance and positioning isn't sharp.",
    summary: "Positioning, messaging, visual systems and paid-social/static/motion creative built to be tested." },
  { slug: "influencer-pr-events", name: "Influencer, PR & Events", prominence: "standard",
    keyword: "influencer and digital PR",
    problem: "Distribution and authority-building aren't connected to the growth system.",
    summary: "Creator partnerships, digital PR, media outreach and activations as an integrated distribution capability." }
];

export const industries = [
  { slug: "saas", name: "SaaS", live: false },
  { slug: "d2c-ecommerce", name: "D2C & Ecommerce", live: false },
  { slug: "fintech", name: "Fintech & Financial Services", live: false },
  { slug: "edtech", name: "Edtech", live: false },
  { slug: "startups", name: "Startups & Scaleups", live: false }
];

// Engagement models (Brief §25) — no public prices.
export const engagements = [
  { name: "Foundation Audit", cta: "Request a Foundation Audit", href: "/contact/",
    desc: "A diagnostic engagement across strategy, tracking, website, funnel, campaigns, SEO, partnerships and measurement.",
    receives: ["Audit report", "Priority issues", "Measurement review", "Channel review", "Recommended roadmap"] },
  { name: "Growth Project", cta: "Discuss Your Growth Project", href: "/contact/",
    desc: "A fixed-scope engagement — a website build, tracking rebuild, paid-media setup, SEO strategy, affiliate program or landing-page project.",
    receives: ["Defined scope", "Timeline", "Deliverables", "Success measures"] },
  { name: "Ongoing Growth Partnership", cta: "Start a Conversation", href: "/contact/",
    desc: "A continuing engagement across strategy, execution, optimisation, reporting and testing.",
    receives: ["Strategy & roadmap", "Execution", "Experimentation", "Reporting", "Cross-functional support"] }
];

// Clients — TEXT-ONLY markers until approvals land (Brief §7). Render assets/links/case studies only when true.
export const clients = [
  { name: "PayDirect", industry: "Fintech", market: "Global", textDisplayApproved: true, logoApproved: false, logoAsset: null, websiteLinkApproved: false, websiteUrl: null, caseStudyApproved: false, caseStudySlug: null, testimonialApproved: false, displayOrder: 1 },
  { name: "Ommora", industry: "Consumer", market: "Global", textDisplayApproved: true, logoApproved: false, logoAsset: null, websiteLinkApproved: false, websiteUrl: null, caseStudyApproved: false, caseStudySlug: null, testimonialApproved: false, displayOrder: 2 }
];

// Anonymous, verified proof (Brief §8). Do NOT attach client names/logos/screenshots or recompute.
export const caseStudies = [
  { slug: "edtech-paid-media", clientNameApproved: false, anonLabel: "Edtech growth engagement",
    industry: "Edtech", market: "India", metrics: ["Monthly media spend scaled ₹5L → ₹30L", "Monthly revenue reached ₹1.5 crore", "5× return on ad spend"],
    summary: "Rebuilt tracking and conversion events, then scaled paid media against verified return.",
    publishApproved: true },
  { slug: "crypto-affiliate", clientNameApproved: false, anonLabel: "Crypto affiliate growth engagement",
    industry: "Crypto", market: "Global", metrics: ["Affiliate contribution grew from ~0%", "Reached ~5–6% of total trading volume within one year"],
    summary: "Built the affiliate program from scratch — partner validation, commercial model and tracking.",
    publishApproved: true }
];

// Public technology stacks — default hidden until approved (Brief §10).
export const technologyStacks = [
  { name: "WordPress", approvedForPublicDisplay: false, serviceTypes: ["website"], description: "", displayOrder: 1 },
  { name: "Shopify", approvedForPublicDisplay: false, serviceTypes: ["website"], description: "", displayOrder: 2 },
  { name: "Webflow", approvedForPublicDisplay: false, serviceTypes: ["website"], description: "", displayOrder: 3 },
  { name: "Next.js", approvedForPublicDisplay: false, serviceTypes: ["website"], description: "", displayOrder: 4 },
  { name: "React", approvedForPublicDisplay: false, serviceTypes: ["website"], description: "", displayOrder: 5 }
];

// Team — only approved people render (Brief §34). Anuja approved; others require confirmation.
export const team = [
  { name: "Anuja", title: "Founder, Tilth", photo: "/anuja.jpg", bio: "10+ years across fitness, edtech, fintech, SaaS and D2C.", approved: true, linkedin: null },
  { name: "Sarvesh Pandey", title: null, photo: null, bio: null, approved: false, linkedin: null }
];

// ---------------------------------------------------------------------------
// Brand v3 services-index depth model (approved design "Tilth Services.dc.html").
// The design places each service at a depth in the growth system and draws the
// edges between them; both the sticky depth map and the "connects with" chips
// render from this. Additive — no other page reads it.
// ---------------------------------------------------------------------------

// ordered surface -> foundation; the map renders in this order
export const growthLayers = [
  { id: "distribution", label: "DISTRIBUTION", depth: "SURFACE" },
  { id: "creative", label: "CREATIVE", depth: "SURFACE" },
  { id: "conversion", label: "CONVERSION", depth: "SHALLOW" },
  { id: "organic", label: "ORGANIC", depth: "SHALLOW" },
  { id: "partnerships", label: "PARTNERSHIPS", depth: "MID" },
  { id: "acquisition", label: "ACQUISITION", depth: "MID" },
  { id: "measurement", label: "MEASUREMENT", depth: "DEEP" },
  { id: "strategy", label: "STRATEGY", depth: "FOUNDATION" }
];

// keyed by service slug — layers the service operates at, and the services it connects to
export const serviceGraph = {
  "growth-strategy-measurement": { layers: ["strategy", "measurement"], layerLabel: "STRATEGY / MEASUREMENT", connects: ["performance-marketing", "paid-media", "website-design-development"] },
  "performance-marketing": { layers: ["acquisition"], layerLabel: "ACQUISITION", connects: ["growth-strategy-measurement", "paid-media", "brand-creative"] },
  "seo-ai-search": { layers: ["organic"], layerLabel: "ORGANIC", connects: ["website-design-development", "brand-creative"] },
  "affiliate-partnerships": { layers: ["partnerships"], layerLabel: "PARTNERSHIPS", connects: ["growth-strategy-measurement", "performance-marketing"] },
  "website-design-development": { layers: ["conversion"], layerLabel: "CONVERSION", connects: ["seo-ai-search", "performance-marketing", "brand-creative"] },
  "paid-media": { layers: ["distribution"], layerLabel: "DISTRIBUTION", connects: ["performance-marketing", "brand-creative", "growth-strategy-measurement"] },
  "brand-creative": { layers: ["creative"], layerLabel: "CREATIVE", connects: ["paid-media", "performance-marketing", "website-design-development"] },
  "influencer-pr-events": { layers: ["distribution"], layerLabel: "DISTRIBUTION", connects: ["brand-creative", "seo-ai-search"] }
};

// "Not sure which service you need?" — symptom -> likely starting point
export const serviceSymptoms = [
  { id: "expensive", label: "Acquisition is getting expensive", layer: "Measurement", depth: "DEEP — often below where it shows", services: ["growth-strategy-measurement", "performance-marketing"] },
  { id: "measure", label: "Measurement isn't reliable", layer: "Measurement", depth: "DEEP — often below where it shows", services: ["growth-strategy-measurement"] },
  { id: "organic", label: "Weak organic visibility", layer: "Organic", depth: "SHALLOW", services: ["seo-ai-search", "brand-creative"] },
  { id: "convert", label: "Traffic isn't converting", layer: "Conversion", depth: "SHALLOW", services: ["website-design-development", "brand-creative"] },
  { id: "affiliate", label: "Affiliate performance is flat", layer: "Partnerships", depth: "MID", services: ["affiliate-partnerships", "growth-strategy-measurement"] },
  { id: "fatigue", label: "Creative fatigues quickly", layer: "Creative", depth: "SURFACE", services: ["brand-creative", "paid-media"] },
  { id: "position", label: "Positioning is unclear", layer: "Creative", depth: "SURFACE", services: ["brand-creative", "seo-ai-search"] },
  { id: "website", label: "The website converts poorly", layer: "Conversion", depth: "SHALLOW", services: ["website-design-development"] }
];

// ---------------------------------------------------------------------------
// Brand v3 homepage content (approved design "Tilth Brand v3.dc.html").
// Copy is taken verbatim from the design. Kept as data so the page module stays
// markup-only and the copy is editable without touching templates.
// ---------------------------------------------------------------------------

export const homeV3 = {
  kicker: { left: "GROWTH MARKETING AGENCY", right: "FOUNDER-LED / INDIA-ROOTED / GLOBAL" },
  heroLede: "A growth marketing agency built on stronger foundations. We strengthen the systems beneath your growth — measurement, funnel, positioning, creative — then scale performance against verified return.",
  strata: ["DISTRIBUTION", "CREATIVE", "FUNNEL", "POSITIONING", "MEASUREMENT"],
  stats: [
    { v: "10", unit: "yrs", tone: "", label: "EXPERIENCE BEHIND TILTH" },
    { v: "05", unit: "", tone: "", label: "INDUSTRIES WORKED" },
    { v: "5×", unit: "", tone: "moss", label: "VERIFIED RETURN, EDTECH" },
    { v: "₹1.5", unit: "Cr", tone: "clay", label: "MONTHLY REVENUE REACHED" }
  ],
  method: [
    { n: "01", name: "Diagnose", desc: "We map the growth system end to end — tracking, funnel, creative, channels — and find what's actually capping return. No new spend until we know where it leaks." },
    { n: "02", name: "Build the foundation", desc: "Clean measurement, defined funnel stages, positioning that converts, and a creative testing loop — the layer everything compounds on." },
    { n: "03", name: "Scale against proof", desc: "Only once the foundation holds do we push budget — against verified return, with every rupee attributable to a stage." }
  ],
  services: [
    { n: "01", title: "Growth strategy & measurement", href: "/services/growth-strategy-measurement/", body: "Strategy, tracking and reporting that tie spend to revenue, so you know what pays back before you scale it." },
    { n: "02", title: "Performance & paid media", href: "/services/performance-marketing/", body: "Google, Meta and LinkedIn structured around real conversions, so spend compounds against verified return." },
    { n: "03", title: "SEO & AI search", href: "/services/seo-ai-search/", body: "Technical, content and intent foundations that turn search — including AI answer engines — into qualified pipeline." },
    { n: "04", title: "Affiliate & partnerships", href: "/services/affiliate-partnerships/", body: "Programs that reward real customers, turning partners into one of your most efficient channels." },
    { n: "05", title: "Websites that convert", href: "/services/website-design-development/", body: "Fast, conversion-focused sites so the traffic you pay for has somewhere worth landing." }
  ],
  // rail labels from the design; FITNESS has no industry page yet so it renders as plain text
  industries: [
    { label: "SAAS", href: "/industries/saas/" },
    { label: "D2C & ECOMMERCE", href: "/industries/d2c-ecommerce/" },
    { label: "FINTECH", href: "/industries/fintech/" },
    { label: "EDTECH", href: "/industries/edtech/" },
    { label: "FITNESS", href: null }
  ],
  filters: [
    { id: "all", label: "ALL" }, { id: "edtech", label: "EDTECH" }, { id: "fintech", label: "FINTECH" },
    { id: "d2c", label: "D2C" }, { id: "saas", label: "SAAS" }
  ],
  // Evidence cards. The first two mirror the approval-gated records in caseStudies;
  // the D2C and SaaS cards come from the approved design and are new claims — they
  // publish because the design was approved, but they are gated here so they can be
  // pulled without touching markup if client consent is ever in question.
  cases: [
    { cat: "edtech", tag: "EDTECH", dur: "9 MONTHS", m1: "₹5L→30L", l1: "MONTHLY MEDIA, SCALED", m2: "5×", l2: "RETURN ON AD SPEND",
      title: "Six times the media spend, on rebuilt measurement",
      body: "Conversion tracking and campaign structure were rebuilt before any scale. Once spend was attributable to a stage, monthly investment grew six-fold — reaching ₹1.5Cr in monthly revenue at a verified 5×.", publishApproved: true },
    { cat: "fintech", tag: "FINTECH", dur: "12 MONTHS", m1: "0→6%", l1: "SHARE OF TRADING VOLUME", m2: "Zero", l2: "FRAUD WRITE-OFFS",
      title: "An affiliate channel built from nothing",
      body: "Partner validation, commercial model, tracking and fraud controls, built ground up. Within a year it carried 5–6% of total volume as the lowest-CAC channel in the mix.", publishApproved: true },
    { cat: "d2c", tag: "D2C", dur: "6 MONTHS", m1: "+64%", l1: "CONVERSION RATE", m2: "−31%", l2: "BLENDED CAC",
      title: "A site that finally earned its traffic",
      body: "The ads were fine; the landing experience wasn't. Message-to-page mapping and a conversion rebuild lifted every paid channel at once, without adding budget.", publishApproved: true },
    { cat: "saas", tag: "SAAS", dur: "8 MONTHS", m1: "2.4×", l1: "QUALIFIED PIPELINE", m2: "−22%", l2: "COST PER SQL",
      title: "Pipeline that sales agreed was pipeline",
      body: "Lead scoring and stage definitions were rewritten with the sales team, then paid search was restructured around the intent that actually closed.", publishApproved: true }
  ],
  symptoms: [
    { id: "flat", label: "Spend up, returns flat", layer: "Measurement", depth: "12.4m — deepest", pct: 100,
      cause: "Almost always attribution. Platform-reported conversions double-count, and the channels taking credit aren't the channels creating demand — so budget keeps flowing to the loudest report.",
      fix: "A tracking and attribution rebuild: server-side events, deduplicated conversions, one source of truth. Two to three weeks, before a rupee moves." },
    { id: "blind", label: "Can't tell what's working", layer: "Measurement", depth: "12.4m — deepest", pct: 100,
      cause: "The funnel has no defined stages, so there's nothing to attribute to. Every report answers a slightly different question and none of them tie to revenue.",
      fix: "Define the funnel stages first, instrument each one, then build a single decision-ready view. Reporting becomes a diagnosis, not a defence." },
    { id: "conv", label: "Traffic but no conversion", layer: "Positioning & funnel", depth: "08.0m", pct: 70,
      cause: "The ad promises one thing and the landing page argues another. The click is qualified; the page gives it no reason to continue.",
      fix: "Message-to-page mapping, then a conversion rebuild of the pages carrying the spend. Fast to move, and it lifts every channel at once." },
    { id: "creative", label: "Creative fatigues fast", layer: "Creative loop", depth: "04.0m", pct: 45,
      cause: "Creative is produced in batches, not in a loop. Nothing is structured as a test, so each round starts from opinion instead of the last result.",
      fix: "A standing testing cadence with a named hypothesis per asset — concept, hook and format tested separately so you learn which one moved." },
    { id: "ceiling", label: "Hit a scaling ceiling", layer: "Scale", depth: "Surface", pct: 25,
      cause: "The foundation holds but the channel mix is narrow. Efficiency drops the moment you push, because there is one route to the customer.",
      fix: "Widen the base — affiliate and partnerships, search intent, incrementality testing — so the next increment of spend has somewhere efficient to go." }
  ]
};

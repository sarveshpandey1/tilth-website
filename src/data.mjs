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
  { n: "02", name: "Paid Media & Performance Marketing", href: "/services/performance-marketing/",
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
  { q: "Does Tilth work with companies in the US?",
    a: `Yes. Tilth is India-rooted and works with brands internationally, with remote-first collaboration and working overlap that keeps projects moving. The team is based in Bengaluru, India — there is no separate US office or entity — and the measurement and funnel work is built for how demanding markets like the US research, convert and churn. <a href="/contact/">Talk to us about your market</a>.` },
  { q: "What is a growth foundation audit?",
    a: `A diagnostic engagement across strategy, tracking, website, funnel, campaigns, SEO, partnerships and measurement. You receive an audit report, the priority issues, a measurement review, a channel review and a recommended roadmap — so you know where growth is actually leaking before committing more spend. <a href="/contact/">Request a foundation audit</a>.` },
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

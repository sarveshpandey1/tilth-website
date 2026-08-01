// Central content/data model for the Tilth site generator.
// Approval-gated records render only when their *Approved fields are true (Brief §7, §10, §34, §54).

export const site = {
  brand: "Tilth",
  wordmark: "TILTH",
  base: "https://wearetilth.com",
  ga: "G-1MJEZ4VK26",
  positioning: "Global growth marketing agency · India-based, working with brands in the US and India",
  tagline: "Grow deep. Market smart.",
  email: "anuja@tilth.in", // keep until wearetilth.com mailbox is tested (Brief §6)
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
    { label: "Insights", href: "/insights/", live: true },
    { label: "Tools", href: "/tools/", live: true },
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
  cta: { label: "Discuss a project", href: "/contact/" }
};

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

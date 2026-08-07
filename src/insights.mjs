// Insight article index.
//
// This generator has no CMS — the /insights/ pages are hand-authored HTML. This file is
// the single structured source that page templates read, so article cards are never
// hard-coded per page. Titles, dates and excerpts are transcribed verbatim from the
// published article pages (headline / datePublished / meta description). Add a row here
// when a new article publishes.
//
// No `category` field: the site has no article taxonomy and one was not invented.

export const insights = [
  { slug: "first-marketing-hire-startup", date: "2026-07-12",
    title: "Your startup's first marketing hire: who to hire first",
    excerpt: "Your startup's first marketing hire shouldn't be a specialist. Here's who to hire first and how to set them up to succeed." },
  { slug: "startup-marketing-budget-india", date: "2026-06-28",
    title: "Marketing budget for an early-stage startup in India: how to set it",
    excerpt: "Sensible percentages, why CAC matters more than a flat %, how to split it, and how to budget without wasting money." },
  { slug: "marketing-agency-for-d2c-brands", date: "2026-06-27",
    title: "How to choose a marketing agency for your D2C brand in India",
    excerpt: "What to look for, the questions that matter, and the red flags to avoid — a founder's honest buyer's guide." },
  { slug: "questions-before-hiring-marketing-agency", date: "2026-06-23",
    title: "12 questions to ask before hiring a marketing agency (and the red-flag answers)",
    excerpt: "The questions that separate a partner who will move your numbers from one who will just keep you busy." },
  { slug: "marketing-agency-cost-india", date: "2026-06-23",
    title: "How much does a digital marketing agency cost in India? (2026 guide)",
    excerpt: "What shapes agency pricing in India, which models exist, and how to judge whether the scope justifies the cost." },
  { slug: "agency-vs-freelancer-vs-inhouse", date: "2026-06-23",
    title: "Marketing agency vs freelancer vs in-house: which is right for your startup?",
    excerpt: "How the three models differ on cost, speed, ownership and risk — and when each one actually makes sense." },
  { slug: "marketing-foundation-audit", date: "2026-06-22",
    title: "What a marketing foundation audit actually checks (and why it comes first)",
    excerpt: "The tracking, funnel, positioning and conversion checks that should happen before anyone increases spend." },
  { slug: "meta-ads-not-converting", date: "2026-06-17",
    title: "Meta Ads not converting? A 7-point tracking audit",
    excerpt: "Before blaming creative or audiences, check the seven tracking failures that quietly break Meta Ads performance." },
  { slug: "ga4-conversion-tracking", date: "2026-06-17",
    title: "GA4 conversion tracking: the setup checklist before you scale ads",
    excerpt: "The GA4 events, conversions and checks to get right before increasing budget, so the numbers can be trusted." },
  { slug: "audit-your-ad-spend", date: "2026-06-17",
    title: "How to tell if your ad spend is actually profitable (a 5-minute self-audit)",
    excerpt: "A quick, practical way to check whether your advertising is making money or quietly losing it." },
  { slug: "affiliate-program-not-converting", date: "2026-06-17",
    title: "Why your affiliate program isn't driving revenue (and how to fix it)",
    excerpt: "Partner quality, tracking, commercial model and fraud controls — where affiliate programmes usually break." },
  { slug: "shopify-conversion-tracking-ga4-meta-pixel", date: "2026-06-12",
    title: "How to set up conversion tracking on Shopify (GA4 + Meta Pixel)",
    excerpt: "A step-by-step setup for Shopify stores so purchases, checkouts and revenue report accurately." },
  { slug: "google-ads-budget-india-startups", date: "2026-06-07",
    title: "How much should you spend on Google Ads in India to start?",
    excerpt: "How to set a starting Google Ads budget in India, what it buys, and how to know when to scale it." },
  { slug: "google-ads-vs-meta-ads-startup", date: "2026-06-02",
    title: "Google Ads vs Meta Ads: which should a startup start with?",
    excerpt: "Intent versus discovery, budget realities and how to choose the first channel for your business model." },
  { slug: "seo-not-bringing-leads", date: "2026-05-28",
    title: "Why your SEO isn't bringing leads (and how to fix it)",
    excerpt: "Rankings and traffic without pipeline usually means intent, page type or conversion is the missing piece." },
  { slug: "measure-influencer-marketing-roi", date: "2026-05-23",
    title: "How to measure influencer marketing ROI properly",
    excerpt: "Moving past reach and likes to tracking, attribution and the commercial outcome of creator partnerships." },
  { slug: "marketing-attribution-explained-simply", date: "2026-05-18",
    title: "Marketing attribution for small businesses, explained simply",
    excerpt: "What attribution models actually do, where they mislead, and how to make practical decisions with them." },
  { slug: "what-is-performance-marketing", date: "2026-05-13",
    title: "What is performance marketing (and how it differs from digital marketing)?",
    excerpt: "A plain-English explanation of performance marketing, what it covers and how it differs from digital marketing." }
];

const bySlug = new Map(insights.map(a => [a.slug, a]));

export function insightBySlug(slug) {
  const a = bySlug.get(slug);
  if (!a) throw new Error("Unknown insight slug: " + slug);
  return { ...a, href: `/insights/${a.slug}/` };
}

// newest-first helper for "latest" listings
export const latestInsights = n => insights
  .slice()
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, n)
  .map(a => ({ ...a, href: `/insights/${a.slug}/` }));

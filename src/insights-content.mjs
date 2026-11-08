// Insights content — the authoritative article source.
//
// The /insights/ pages were hand-authored HTML with no other source, so this
// file is that content lifted into one structured module: titles, standfirsts,
// body markup, FAQ text, bios, CTAs, post-meta, hub card copy and the JSON-LD
// graphs, exactly as published. src/pages/insights-index.mjs and
// src/templates/insightArticle.mjs render from here.
//
// NOTHING IS REWRITTEN. No paragraph was shortened, no intro reworded, no
// statistic, example or price figure changed, no caveat removed and no heading
// rewritten for visual fit. The only transformation applied to body markup is
// the frozen design's own structural hook: each <table> (plus its caveat note)
// is wrapped in <div data-tbl> and every cell carries data-th taken from that
// table's own <thead>, so rows can stack below 768px without horizontal page
// scroll. Cell text is untouched.
//
// TAXONOMY (brief SS7, report SS9): three signals exist and are kept separate —
// the hub's 6 category buckets with their published counts, each article's own
// articleSection (9 distinct values, used for the post-meta line and the
// crumb), and src/insights.mjs which deliberately has no taxonomy. None is
// normalised and no article category is renamed. DEFERRED - LATER IA.
//
// FAQ/schema divergence is recorded, not resolved: see the report in the
// implementation notes. Both the visible FAQ and the FAQPage graph are
// preserved exactly as published.

export const insightHub = {
  label: `Insights`,
  h1: `Field notes from the soil.`,
  standfirst: `Practical thinking on tracking, attribution, targeting, and the foundations most marketing skips — written for people who own the numbers.`,
  note: `More field notes are being prepared. Want one on a specific channel? Tell us at <a href="/contact/" style="color:var(--glow);border-bottom:1px solid var(--glow)">contact</a>.`,
  emptyText: `No field notes in this category yet.`,
  meta: {
    "title": "Insights — Field notes on foundation-first marketing | Tilth",
    "description": "Practical thinking on tracking, attribution, targeting, and the marketing foundations most agencies skip. Field notes from Tilth, Bengaluru.",
    "ogTitle": "Insights — Field notes on foundation-first marketing",
    "ogDescription": "Practical thinking on tracking, attribution, targeting, and the foundations most marketing skips.",
    "ogType": "website",
    "ogImage": "https://wearetilth.com/og-image.png",
    "ogLocale": "en_IN",
    "robots": "index, follow"
},
  schema: [
    {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://wearetilth.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Insights",
                        "item": "https://wearetilth.com/insights/"
                    }
                ]
            },
            {
                "@type": "Blog",
                "@id": "https://wearetilth.com/insights/#blog",
                "name": "Tilth Insights",
                "description": "Field notes on foundation-first marketing — tracking, attribution, targeting, and the work most marketing skips.",
                "url": "https://wearetilth.com/insights/",
                "publisher": {
                    "@type": "Organization",
                    "name": "Tilth",
                    "url": "https://wearetilth.com/"
                },
                "blogPost": [
                    {
                        "@type": "BlogPosting",
                        "headline": "Your startup's first marketing hire: who to hire first",
                        "url": "https://wearetilth.com/insights/first-marketing-hire-startup/",
                        "datePublished": "2026-07-12",
                        "author": {
                            "@type": "Person",
                            "name": "Anuja"
                        }
                    },
                    {
                        "@type": "BlogPosting",
                        "headline": "Marketing budget for an early-stage startup in India: how to set it",
                        "url": "https://wearetilth.com/insights/startup-marketing-budget-india/",
                        "datePublished": "2026-06-28",
                        "author": {
                            "@type": "Person",
                            "name": "Anuja"
                        }
                    },
                    {
                        "@type": "BlogPosting",
                        "headline": "How to choose a marketing agency for your D2C brand in India",
                        "url": "https://wearetilth.com/insights/marketing-agency-for-d2c-brands/",
                        "datePublished": "2026-06-27",
                        "author": {
                            "@type": "Person",
                            "name": "Anuja"
                        }
                    },
                    {
                        "@type": "BlogPosting",
                        "headline": "12 questions to ask before hiring a marketing agency (and the red-flag answers)",
                        "url": "https://wearetilth.com/insights/questions-before-hiring-marketing-agency/",
                        "datePublished": "2026-06-23",
                        "author": {
                            "@type": "Person",
                            "name": "Anuja"
                        }
                    },
                    {
                        "@type": "BlogPosting",
                        "headline": "Marketing agency vs freelancer vs in-house: which is right for your startup?",
                        "url": "https://wearetilth.com/insights/agency-vs-freelancer-vs-inhouse/",
                        "datePublished": "2026-06-23",
                        "author": {
                            "@type": "Person",
                            "name": "Anuja"
                        }
                    },
                    {
                        "@type": "BlogPosting",
                        "headline": "How much does a digital marketing agency cost in India? (2026 guide)",
                        "url": "https://wearetilth.com/insights/marketing-agency-cost-india/",
                        "datePublished": "2026-06-23",
                        "author": {
                            "@type": "Person",
                            "name": "Anuja"
                        }
                    },
                    {
                        "@type": "BlogPosting",
                        "headline": "What a marketing foundation audit actually checks (and why it comes first)",
                        "url": "https://wearetilth.com/insights/marketing-foundation-audit/",
                        "datePublished": "2026-06-22",
                        "author": {
                            "@type": "Person",
                            "name": "Anuja"
                        }
                    },
                    {
                        "@type": "BlogPosting",
                        "headline": "How to tell if your ad spend is actually profitable (a 5-minute self-audit)",
                        "url": "https://wearetilth.com/insights/audit-your-ad-spend/",
                        "datePublished": "2026-06-17",
                        "author": {
                            "@type": "Person",
                            "name": "Anuja"
                        }
                    },
                    {
                        "@type": "BlogPosting",
                        "headline": "GA4 conversion tracking: the setup checklist before you scale ads",
                        "url": "https://wearetilth.com/insights/ga4-conversion-tracking/",
                        "datePublished": "2026-06-17",
                        "author": {
                            "@type": "Person",
                            "name": "Anuja"
                        }
                    },
                    {
                        "@type": "BlogPosting",
                        "headline": "Meta Ads not converting? A 7-point tracking audit",
                        "url": "https://wearetilth.com/insights/meta-ads-not-converting/",
                        "datePublished": "2026-06-17",
                        "author": {
                            "@type": "Person",
                            "name": "Anuja"
                        }
                    },
                    {
                        "@type": "BlogPosting",
                        "headline": "Why your affiliate program isn't driving revenue (and how to fix it)",
                        "url": "https://wearetilth.com/insights/affiliate-program-not-converting/",
                        "datePublished": "2026-06-17",
                        "author": {
                            "@type": "Person",
                            "name": "Anuja"
                        }
                    },
                    {
                        "@type": "BlogPosting",
                        "headline": "How to set up conversion tracking on Shopify (GA4 + Meta Pixel)",
                        "url": "https://wearetilth.com/insights/shopify-conversion-tracking-ga4-meta-pixel/",
                        "datePublished": "2026-06-12",
                        "author": {
                            "@type": "Person",
                            "name": "Anuja"
                        }
                    },
                    {
                        "@type": "BlogPosting",
                        "headline": "How much should you spend on Google Ads in India to start?",
                        "url": "https://wearetilth.com/insights/google-ads-budget-india-startups/",
                        "datePublished": "2026-06-07",
                        "author": {
                            "@type": "Person",
                            "name": "Anuja"
                        }
                    },
                    {
                        "@type": "BlogPosting",
                        "headline": "Google Ads vs Meta Ads: which should a startup start with?",
                        "url": "https://wearetilth.com/insights/google-ads-vs-meta-ads-startup/",
                        "datePublished": "2026-06-02",
                        "author": {
                            "@type": "Person",
                            "name": "Anuja"
                        }
                    },
                    {
                        "@type": "BlogPosting",
                        "headline": "Why your SEO isn't bringing leads (and how to fix it)",
                        "url": "https://wearetilth.com/insights/seo-not-bringing-leads/",
                        "datePublished": "2026-05-28",
                        "author": {
                            "@type": "Person",
                            "name": "Anuja"
                        }
                    },
                    {
                        "@type": "BlogPosting",
                        "headline": "How to measure influencer marketing ROI properly",
                        "url": "https://wearetilth.com/insights/measure-influencer-marketing-roi/",
                        "datePublished": "2026-05-23",
                        "author": {
                            "@type": "Person",
                            "name": "Anuja"
                        }
                    },
                    {
                        "@type": "BlogPosting",
                        "headline": "Marketing attribution for small businesses, explained simply",
                        "url": "https://wearetilth.com/insights/marketing-attribution-explained-simply/",
                        "datePublished": "2026-05-18",
                        "author": {
                            "@type": "Person",
                            "name": "Anuja"
                        }
                    },
                    {
                        "@type": "BlogPosting",
                        "headline": "What is performance marketing (and how it differs from digital marketing)?",
                        "url": "https://wearetilth.com/insights/what-is-performance-marketing/",
                        "datePublished": "2026-05-13",
                        "author": {
                            "@type": "Person",
                            "name": "Anuja"
                        }
                    }
                ]
            }
        ]
    }
],
  cats: [
    { id: "all", label: `All`, count: "18" },
    { id: "paid-ads", label: `Paid Ads`, count: "4" },
    { id: "tracking", label: `Tracking &amp; Attribution`, count: "4" },
    { id: "seo-growth", label: `SEO &amp; Growth`, count: "4" },
    { id: "hiring", label: `Hiring &amp; Agencies`, count: "4" },
    { id: "strategy", label: `Strategy`, count: "2" },
  ],
  cards: [
    {
      slug: "first-marketing-hire-startup", href: "/insights/first-marketing-hire-startup/", cat: "strategy",
      catLabel: `Strategy`,
      title: `Your startup's first marketing hire: who to hire first`,
      excerpt: `Founders usually ask "SEO or paid ads person?" — the wrong first question. Who your first marketing hire should actually be, what to pay in India in 2026, and how to set them up to succeed.`,
      meta: `8 min read · 12 Jul 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/first-marketing-hire-startup.webp" alt="" loading="lazy" width="1200" height="630">`
    },
    {
      slug: "startup-marketing-budget-india", href: "/insights/startup-marketing-budget-india/", cat: "strategy",
      catLabel: `Strategy`,
      title: `Marketing budget for an early-stage startup in India`,
      excerpt: `"What percentage should we spend?" is the wrong first question. How to set a startup marketing budget tied to your CAC, not a rule of thumb — and why tracking has to come before the spend.`,
      meta: `8 min read · 28 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/startup-marketing-budget-india.webp" alt="" loading="lazy" width="1200" height="630">`
    },
    {
      slug: "marketing-agency-for-d2c-brands", href: "/insights/marketing-agency-for-d2c-brands/", cat: "hiring",
      catLabel: `Hiring &amp; Agencies`,
      title: `How to choose a marketing agency for your D2C brand in India`,
      excerpt: `D2C fails differently — and most agencies pitch the same generic deck. What actually matters when choosing a D2C marketing agency: D2C experience, retention, honest tracking, and the red flags to walk from.`,
      meta: `8 min read · 27 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/marketing-agency-for-d2c-brands.webp" alt="" loading="lazy" width="1200" height="630">`
    },
    {
      slug: "questions-before-hiring-marketing-agency", href: "/insights/questions-before-hiring-marketing-agency/", cat: "hiring",
      catLabel: `Hiring &amp; Agencies`,
      title: `12 questions to ask before hiring a marketing agency`,
      excerpt: `The pitch always sounds good. These twelve questions — on strategy, reporting, team, and terms — and their red-flag answers tell you what's really underneath it before you sign.`,
      meta: `9 min read · 23 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/questions-before-hiring-marketing-agency.webp" alt="" loading="lazy" width="1200" height="630">`
    },
    {
      slug: "agency-vs-freelancer-vs-inhouse", href: "/insights/agency-vs-freelancer-vs-inhouse/", cat: "hiring",
      catLabel: `Hiring &amp; Agencies`,
      title: `Marketing agency vs freelancer vs in-house: which is right for your startup?`,
      excerpt: `Hire an agency, bring on a freelancer, or build in-house? An honest comparison of costs and trade-offs for early-stage startups — plus the one thing that matters more than who you hire.`,
      meta: `8 min read · 23 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/agency-vs-freelancer-vs-inhouse.webp" alt="" loading="lazy" width="1200" height="630">`
    },
    {
      slug: "marketing-agency-cost-india", href: "/insights/marketing-agency-cost-india/", cat: "hiring",
      catLabel: `Hiring &amp; Agencies`,
      title: `How much does a digital marketing agency cost in India?`,
      excerpt: `An honest 2026 breakdown — typical retainers, pricing by service, what's included versus ad spend, and how to budget without overpaying for a thin package.`,
      meta: `8 min read · 23 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/marketing-agency-cost-india.webp" alt="" loading="lazy" width="1200" height="630">`
    },
    {
      slug: "marketing-foundation-audit", href: "/insights/marketing-foundation-audit/", cat: "tracking",
      catLabel: `Tracking &amp; Attribution`,
      title: `What a marketing foundation audit actually checks`,
      excerpt: `Most budgets are scaled on numbers nobody has checked. Here's exactly what a marketing foundation audit reviews — tracking, attribution, targeting, partnerships — and why it comes before you spend more.`,
      meta: `7 min read · 22 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/marketing-foundation-audit.webp" alt="" loading="lazy" width="1200" height="630">`
    },
    {
      slug: "audit-your-ad-spend", href: "/insights/audit-your-ad-spend/", cat: "paid-ads",
      catLabel: `Paid Ads`,
      title: `How to tell if your ad spend is actually profitable (a 5-minute self-audit)`,
      excerpt: `Busy dashboards are not the same as profit. Here are five checks you can run today to find out whether your ad budget is building the business — or quietly leaking out the bottom.`,
      meta: `5 min read · 17 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/audit-your-ad-spend.webp" alt="" loading="lazy" width="1200" height="630">`
    },
    {
      slug: "ga4-conversion-tracking", href: "/insights/ga4-conversion-tracking/", cat: "tracking",
      catLabel: `Tracking &amp; Attribution`,
      title: `GA4 conversion tracking: the setup checklist before you scale ads`,
      excerpt: `If GA4 is reporting the wrong conversions, every ad decision downstream is built on a lie. A practical checklist to get it right before you spend more.`,
      meta: `6 min read · 17 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/ga4-conversion-tracking.webp" alt="" loading="lazy" width="1200" height="630">`
    },
    {
      slug: "meta-ads-not-converting", href: "/insights/meta-ads-not-converting/", cat: "paid-ads",
      catLabel: `Paid Ads`,
      title: `Meta Ads not converting? A 7-point tracking audit`,
      excerpt: `Before you blame the creative or the audience, rule out tracking. Seven checks — pixel, Conversions API, events, attribution — that catch the real culprit.`,
      meta: `6 min read · 17 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/meta-ads-not-converting.webp" alt="" loading="lazy" width="1200" height="630">`
    },
    {
      slug: "affiliate-program-not-converting", href: "/insights/affiliate-program-not-converting/", cat: "seo-growth",
      catLabel: `SEO &amp; Growth`,
      title: `Why your affiliate program isn't driving revenue (and how to fix it)`,
      excerpt: `Plenty of partners, plenty of clicks, almost no revenue. Five reasons your affiliate channel looks busy but contributes nothing — and how to rebuild it.`,
      meta: `6 min read · 17 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/affiliate-program-not-converting.webp" alt="" loading="lazy" width="1200" height="630">`
    },
    {
      slug: "shopify-conversion-tracking-ga4-meta-pixel", href: "/insights/shopify-conversion-tracking-ga4-meta-pixel/", cat: "tracking",
      catLabel: `Tracking &amp; Attribution`,
      title: `How to set up conversion tracking on Shopify (GA4 + Meta Pixel)`,
      excerpt: `Most Shopify stores have "tracking installed" and still can't trust the numbers. A step-by-step guide to setting up GA4 and Meta Pixel — with Conversions API — correctly, including the checkout tracking trap most setups miss.`,
      meta: `8 min read · 12 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/shopify-conversion-tracking-ga4-meta-pixel.webp" alt="" loading="lazy" width="1200" height="630">`
    },
    {
      slug: "google-ads-budget-india-startups", href: "/insights/google-ads-budget-india-startups/", cat: "paid-ads",
      catLabel: `Paid Ads`,
      title: `How much should you spend on Google Ads in India to start?`,
      excerpt: `"What's the minimum budget?" is the wrong first question. How to calculate a starting Google Ads budget from your own numbers, minimum viable budgets by campaign type, and what actually eats spend before it converts.`,
      meta: `7 min read · 7 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/google-ads-budget-india-startups.webp" alt="" loading="lazy" width="1200" height="630">`
    },
    {
      slug: "google-ads-vs-meta-ads-startup", href: "/insights/google-ads-vs-meta-ads-startup/", cat: "paid-ads",
      catLabel: `Paid Ads`,
      title: `Google Ads vs Meta Ads: which should a startup start with?`,
      excerpt: `You can't run both channels well on a limited budget. The real difference between Google Ads and Meta Ads — intent versus discovery — and a straightforward way to decide which one earns your first rupee.`,
      meta: `7 min read · 2 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/google-ads-vs-meta-ads-startup.webp" alt="" loading="lazy" width="1200" height="630">`
    },
    {
      slug: "seo-not-bringing-leads", href: "/insights/seo-not-bringing-leads/", cat: "seo-growth",
      catLabel: `SEO &amp; Growth`,
      title: `Why your SEO isn't bringing leads (and how to fix it)`,
      excerpt: `Traffic is climbing and leads aren't. This is almost never "SEO doesn't work" — it's usually one of five specific, fixable problems. Here's how to find which one you have.`,
      meta: `7 min read · 28 May 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/seo-not-bringing-leads.webp" alt="" loading="lazy" width="1200" height="630">`
    },
    {
      slug: "measure-influencer-marketing-roi", href: "/insights/measure-influencer-marketing-roi/", cat: "seo-growth",
      catLabel: `SEO &amp; Growth`,
      title: `How to measure influencer marketing ROI properly`,
      excerpt: `"It got a lot of engagement" is not an ROI number. The metrics that actually predict revenue, the tracking setup that has to happen before you brief anyone, and a simple formula to calculate real return.`,
      meta: `7 min read · 23 May 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/measure-influencer-marketing-roi.webp" alt="" loading="lazy" width="1200" height="630">`
    },
    {
      slug: "marketing-attribution-explained-simply", href: "/insights/marketing-attribution-explained-simply/", cat: "tracking",
      catLabel: `Tracking &amp; Attribution`,
      title: `Marketing attribution for small businesses, explained simply`,
      excerpt: `"Attribution" sounds built to confuse founders into hiring someone. It's a simple idea: which touchpoint gets credit for a sale? What that means in plain English, and which model actually makes sense for a small business.`,
      meta: `7 min read · 18 May 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/marketing-attribution-explained-simply.webp" alt="" loading="lazy" width="1200" height="630">`
    },
    {
      slug: "what-is-performance-marketing", href: "/insights/what-is-performance-marketing/", cat: "seo-growth",
      catLabel: `SEO &amp; Growth`,
      title: `What is performance marketing (and how it differs from digital marketing)?`,
      excerpt: `The two terms get used interchangeably, and that mix-up leads to real budgeting mistakes. A plain definition of performance marketing, and why the whole approach depends on tracking you can actually trust.`,
      meta: `6 min read · 13 May 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/what-is-performance-marketing.webp" alt="" loading="lazy" width="1200" height="630">`
    },
  ]
};

export const insightArticles = [
  {
    slug: "affiliate-program-not-converting",
    section: "Affiliates",
    readTime: "6 min read",
    date: "17 Jun 2026",
    h1: `Why your affiliate program isn't driving revenue (and how to fix it)`,
    standfirst: `Plenty of partners, plenty of clicks, plenty of dashboard activity — and almost no revenue. If that's your affiliate channel, the problem usually isn't the partners. It's how the program was built.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "Why your affiliate program isn't driving revenue (and how to fix it) | Tilth",
      "description": "Most affiliate programs look busy and contribute almost nothing. Five reasons your affiliate channel isn't driving revenue — and how to rebuild it around results.",
      "canonical": "https://wearetilth.com/insights/affiliate-program-not-converting/",
      "robots": "index, follow",
      "ogTitle": "Why your affiliate program isn't driving revenue (and how to fix it)",
      "ogDescription": "Five reasons your affiliate channel looks busy but contributes almost nothing — and how to rebuild it around results.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/affiliate-program-not-converting.webp",
      "ogLocale": null,
      "twTitle": "Why your affiliate program isn't driving revenue (and how to fix it)",
      "twDescription": "Five reasons your affiliate channel looks busy but contributes almost nothing.",
      "twImage": "https://wearetilth.com/assets/insight-cards/affiliate-program-not-converting.webp"
},
    schema: [
      {
            "@context": "https://schema.org",
            "@graph": [
                  {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                              {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://wearetilth.com/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Insights",
                                    "item": "https://wearetilth.com/insights/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Why your affiliate program isn't driving revenue",
                                    "item": "https://wearetilth.com/insights/affiliate-program-not-converting/"
                              }
                        ]
                  },
                  {
                        "@type": "BlogPosting",
                        "headline": "Why your affiliate program isn't driving revenue (and how to fix it)",
                        "description": "Most affiliate programs look busy and contribute almost nothing. Five reasons your affiliate channel isn't driving revenue, and how to rebuild it around results.",
                        "image": "https://wearetilth.com/assets/insight-cards/affiliate-program-not-converting.webp",
                        "datePublished": "2026-06-17",
                        "dateModified": "2026-11-06",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/affiliate-program-not-converting/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/affiliate-program-not-converting/",
                        "articleSection": "Affiliates",
                        "keywords": [
                              "affiliate program not converting",
                              "affiliate marketing ROI",
                              "affiliate program revenue",
                              "affiliate payouts",
                              "partner marketing"
                        ],
                        "wordCount": 880,
                        "author": {
                              "@type": "Person",
                              "name": "Anuja",
                              "jobTitle": "Founder",
                              "url": "https://wearetilth.com/about/"
                        },
                        "publisher": {
                              "@type": "Organization",
                              "name": "Tilth",
                              "url": "https://wearetilth.com/",
                              "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://wearetilth.com/favicon.svg"
                              }
                        }
                  }
            ]
      }
],
    faqHeading: null,
    faq: [
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of Tilth, a foundation-first marketing agency in Bengaluru. She has 10+ years of hands-on growth experience building affiliate programs across 10+ industries — rebuilding dead channels into real revenue. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Affiliate channel busy but not paying off?`, body: `A Foundation Audit will show you which partners are incremental, which are coupon-stacking, and where your payouts are eating margin. No pitch attached.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>Plenty of partners, plenty of clicks, plenty of dashboard activity — and almost no revenue. If that is your affiliate channel, the problem usually is not the partners. It is how the program was built: who was recruited, what the payout rewards, and whether anyone checks what the channel actually contributes.</p>

    <h2>1. You recruited for reach, not fit</h2>
    <p>The fastest way to fill a program is to accept everyone. It is also the fastest way to make it meaningless. Reach tells you how many people a partner can put in front of your offer; fit tells you whether those people were ever going to buy. A partner with 50,000 followers in an unrelated category will send traffic that bounces. A partner with 3,000 readers who already trust them on your category will send fewer visits and more customers.</p>
    <p>Segment your partner list before you judge it. Content and review partners who explain the product, comparison sites that capture active research, loyalty and cashback partners who sit at the end of a journey, and coupon partners who intercept checkout are four different businesses. They deserve different payouts, different expectations and different limits — not one blanket commission.</p>

    <h2>2. Signups are not activation</h2>
    <p>Most programs report partner count. Almost none report how many partners have ever driven a sale. Those are different numbers and only one of them matters. Split your roster into partners who have never sent a conversion, partners who sent one and stopped, and partners producing repeatably. The third group is your actual program; the first group is a mailing list.</p>
    <p>Activation is a job, not an outcome. A partner who joined and never received creative, a product feed, a working link or a single piece of guidance has not failed — they were never onboarded. Before concluding that affiliate does not work for you, check how many of your partners got as far as a usable link.</p>

    <h2>3. The payout rewards the wrong action</h2>
    <p>If you pay on click, you have bought traffic. If you pay on signup, you have bought form fills. Whatever you attach money to is what you will receive, in volume, regardless of whether it ever becomes revenue. Pay on the event that represents a customer — a completed order, a retained subscription, a qualified opportunity — and accept that the reported numbers will get smaller and more honest.</p>
    <p>Design the payout event deliberately. Decide when it fires, what cancels it, and how long you wait before it is payable. A hold period long enough to cover your refund and cancellation window converts a lot of theoretical commission into commission you would actually have wanted to pay.</p>

    <h2>4. No one back-calculates payout against margin</h2>
    <p>A 20% commission is only generous or ruinous relative to your contribution margin after cost of goods, payment fees, shipping, returns and discounting. Work out what one order actually leaves you before you decide what a partner should earn from it — and do it per segment, because the partner who introduced a new customer and the partner who appeared beside your checkout are not delivering the same thing.</p>
    <p>This is the same arithmetic that decides whether paid media is profitable, and it fails the same way. If you have not done it for your ad channels either, start with <a href="/insights/audit-your-ad-spend/">auditing whether your ad spend is actually profitable</a> and reuse the margin numbers here.</p>

    <blockquote>A program that pays for the last click before checkout is not acquiring customers. It is renting a discount to people who had already decided.</blockquote>

    <h2>5. Last-click attribution is paying for interception</h2>
    <p>Under pure last-click, whoever touches the journey closest to the order gets paid. That systematically rewards coupon, cashback and loyalty partners for customers your other channels already won, and systematically starves the content partners who created the demand. The channel then looks efficient in the affiliate dashboard while adding very little the business would have missed.</p>
    <p>You do not need a perfect model to fix this. You need to know which model you are paying under, see where partners sit in real journeys, and be willing to pay differently for introduction than for interception. If attribution is the part you are least sure of, <a href="/insights/marketing-attribution-explained-simply/">how attribution models actually differ</a> is the shorter read.</p>

    <h2>6. Invalid and duplicate conversions go unchallenged</h2>
    <p>Affiliate is the channel where tracking problems quietly become invoices. Watch for the same order credited twice through different links, conversions recorded against partners whose click arrived after the order, traffic patterns that convert far outside your normal behaviour, and self-referred purchases. None of these require bad intent to appear — a misconfigured tag or a duplicated postback is enough.</p>
    <p>Put a validation step between recorded conversion and payable commission: deduplicate on your own order ID, reconcile partner-reported conversions against your backend, and treat anything you cannot match as unpaid until it is explained. If your conversion data is not trustworthy on your own site yet, that is the prior problem — our <a href="/services/growth-strategy-measurement/">growth strategy and measurement work</a> exists because almost every channel decision downstream depends on it.</p>

    <h2>7. There is no vetting in, and no pruning out</h2>
    <p>Programs decay when joining is easy and leaving never happens. Set entry rules — category relevance, how the partner describes you, what traffic sources they use, whether they bid on your brand terms — and then review against them on a schedule. Monthly is enough. Look at contribution, not activity: revenue after the hold period, new versus returning customers, refund rate, and whether the partner would have been paid under a model you believe in.</p>

    <h2>When affiliate should not be scaled yet</h2>
    <p>Affiliate amplifies whatever system it is attached to, including a broken one. Do not scale it while any of the following is true: you cannot attribute a sale to a partner reliably, you do not know your contribution margin per order, your payout fires on something other than revenue, you have no hold period against refunds, or nobody owns weekly partner review. Fix those first and a modest program will outperform a large one.</p>

    <h2>How to rebuild it</h2>
    <p>Start with the roster: segment partners, identify the ones who have ever produced revenue, and onboard or retire the rest. Then fix the payout — correct event, margin-aware rate per segment, hold period that matches your refund window. Then fix measurement so you can see introduction separately from interception and deduplicate against your own orders. Only then recruit, and recruit for fit.</p>
    <p>That sequence is the whole job, and it is the one we run in <a href="/services/affiliate-partnerships/">affiliate and partnership marketing</a>: rebuild the economics and the tracking first, then grow the partner base against numbers you can defend. If you would rather pressure-test your own program before involving anyone, the sections above are the order to do it in.</p>`
  },
  {
    slug: "agency-vs-freelancer-vs-inhouse",
    section: "Hiring",
    readTime: "8 min read",
    date: "23 Jun 2026",
    h1: `Marketing agency vs freelancer vs in-house: which is right for your startup?`,
    standfirst: `Every founder hits this fork: hire a marketing agency, bring on a freelancer, or build an in-house team. There's no universal answer — but there is a right answer for where you are right now. Here's an honest comparison, the costs and trade-offs of each, and the one thing that matters more than who you hire.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "Marketing Agency vs Freelancer vs In-House: Which Is Right for Your Startup? | Tilth",
      "description": "Marketing agency vs freelancer vs in-house — an honest comparison for early-stage startups in India. Costs, trade-offs, when each makes sense, and what to fix before you hire anyone.",
      "canonical": "https://wearetilth.com/insights/agency-vs-freelancer-vs-inhouse/",
      "robots": "index, follow",
      "ogTitle": "Marketing agency vs freelancer vs in-house: which is right for your startup?",
      "ogDescription": "An honest comparison for early-stage startups — costs, trade-offs, when each makes sense, and what to fix before you hire anyone.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/agency-vs-freelancer-vs-inhouse.webp",
      "ogLocale": null,
      "twTitle": "Marketing agency vs freelancer vs in-house: which is right for your startup?",
      "twDescription": "Costs, trade-offs, and when each makes sense — for early-stage startups.",
      "twImage": "https://wearetilth.com/assets/insight-cards/agency-vs-freelancer-vs-inhouse.webp"
},
    schema: [
      {
            "@context": "https://schema.org",
            "@graph": [
                  {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                              {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://wearetilth.com/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Insights",
                                    "item": "https://wearetilth.com/insights/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Marketing agency vs freelancer vs in-house",
                                    "item": "https://wearetilth.com/insights/agency-vs-freelancer-vs-inhouse/"
                              }
                        ]
                  },
                  {
                        "@type": "BlogPosting",
                        "headline": "Marketing agency vs freelancer vs in-house: which is right for your startup?",
                        "description": "An honest comparison of hiring a marketing agency, a freelancer, or building an in-house team for an early-stage startup in India — costs, trade-offs, and when each makes sense.",
                        "image": "https://wearetilth.com/assets/insight-cards/agency-vs-freelancer-vs-inhouse.webp",
                        "datePublished": "2026-06-23",
                        "dateModified": "2026-06-23",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/agency-vs-freelancer-vs-inhouse/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/agency-vs-freelancer-vs-inhouse/",
                        "articleSection": "Hiring",
                        "keywords": [
                              "marketing agency vs freelancer",
                              "agency vs in-house marketing",
                              "should a startup hire a marketing agency",
                              "in-house vs agency",
                              "marketing for startups India"
                        ],
                        "wordCount": 1600,
                        "author": {
                              "@type": "Person",
                              "name": "Anuja",
                              "jobTitle": "Founder",
                              "url": "https://wearetilth.com/about/"
                        },
                        "publisher": {
                              "@type": "Organization",
                              "name": "Tilth",
                              "url": "https://wearetilth.com/",
                              "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://wearetilth.com/favicon.svg"
                              }
                        }
                  },
                  {
                        "@type": "FAQPage",
                        "mainEntity": [
                              {
                                    "@type": "Question",
                                    "name": "Should an early-stage startup hire a marketing agency or a freelancer?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Early-stage startups often start with a freelancer for a single, well-defined need because it's flexible and low-cost. An agency makes more sense once you need several channels working together and want tested playbooks rather than a single point of failure. The deciding factor is how broad and ongoing the work is."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Is an agency or an in-house team cheaper?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "For most early-stage startups an agency or freelancer is cheaper than a full in-house team, because you avoid salaries, tools, and the cost of hiring. In-house becomes more cost-effective only when the work is steady, full-time, and central enough to justify dedicated headcount."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "When should a startup build an in-house marketing team?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Hire in-house when marketing needs are constant, deeply tied to the product, and large enough to keep a full-time person genuinely busy — usually around or after Series A. Many companies start with a single in-house generalist who owns strategy while agencies or freelancers execute specialist work."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "What is the hybrid marketing model?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "The hybrid model is one in-house marketing lead or generalist who owns strategy and priorities, supported by an agency or freelancers for specialist, multi-channel execution. It's the most common and pragmatic setup for growing startups."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Can a marketing agency work alongside our in-house team or freelancer?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Yes. Many agencies, including Tilth, work alongside in-house teams and freelancers — often starting with a foundation audit that gives everyone a shared, honest picture of what's working before deciding who should own what."
                                    }
                              }
                        ]
                  }
            ]
      }
],
    faqHeading: `Agency vs freelancer vs in-house — FAQs`,
    faq: [
      { q: `Should an early-stage startup hire a marketing agency or a freelancer?`,
        a: `<p>Startups often start with a freelancer for a single, well-defined need because it's flexible and low-cost. An agency makes more sense once you need several channels working together and want tested playbooks rather than a single point of failure.</p>` },
      { q: `Is an agency or in-house team cheaper?`,
        a: `<p>For most early-stage startups an agency or freelancer is cheaper, because you avoid salaries, tools, and hiring costs. In-house only becomes cost-effective when the work is steady, full-time, and central enough to justify dedicated headcount.</p>` },
      { q: `When should a startup build an in-house marketing team?`,
        a: `<p>When marketing needs are constant, tied to the product, and large enough to keep a full-time person busy — usually around or after Series A. Many start with one in-house generalist who owns strategy while agencies execute.</p>` },
      { q: `What is the hybrid marketing model?`,
        a: `<p>One in-house lead owning strategy and priorities, supported by an agency or freelancers for specialist, multi-channel execution. It's the most common setup for growing startups.</p>` },
      { q: `Can an agency work alongside our in-house team?`,
        a: `<p>Yes. Many agencies, including <a href="/marketing-agency-bengaluru/">Tilth</a>, work alongside in-house teams and freelancers — often starting with a foundation audit so everyone shares an honest picture before deciding who owns what.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has 10+ years of hands-on growth experience across 10+ industries, working with startups as a freelancer, an agency partner, and an embedded lead. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Not sure what to hire for yet?`, body: `A Foundation Audit shows you exactly what's working and what's broken — so you hire (agency, freelancer, or in-house) for the real gap, not a guessed one. No pitch attached.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>When marketing starts to matter, the hiring question arrives fast — and the wrong call is expensive in both directions. Hire a full in-house team too early and you're paying salaries before you know what works. Lean on a cheap freelancer too long and growth stalls the moment you need more than one skill. This guide compares a <strong>marketing agency vs a freelancer vs an in-house team</strong> for an early-stage startup, so you can match the choice to your stage.</p>

    <h2>The quick comparison</h2>
    <div class="ctable-wrap">
    <div data-tbl><table data-stack class="ctable">
      <thead>
        <tr><th>Option</th><th>Typical cost</th><th>Best for</th><th>Watch out for</th></tr>
      </thead>
      <tbody>
        <tr><td data-th="Option">Freelancer</td><td data-th="Typical cost">Lowest — pay per project or part-time</td><td data-th="Best for">One specific, well-defined skill or short project</td><td data-th="Watch out for">Single point of failure; limited breadth; availability</td></tr>
        <tr><td data-th="Option">Agency</td><td data-th="Typical cost">Mid — monthly retainer</td><td data-th="Best for">Coordinated, multi-channel execution with tested playbooks</td><td data-th="Watch out for">Less dedicated than in-house; fit and seniority vary</td></tr>
        <tr><td data-th="Option">In-house</td><td data-th="Typical cost">Highest — salary, tools, hiring cost</td><td data-th="Best for">Steady, ongoing work deeply tied to the product</td><td data-th="Watch out for">Slow to hire; one person can't cover every channel</td></tr>
        <tr><td data-th="Option">Hybrid</td><td data-th="Typical cost">Mid–high</td><td data-th="Best for">An in-house lead owning strategy + agency/freelance execution</td><td data-th="Watch out for">Needs clear ownership to avoid overlap</td></tr>
      </tbody>
    </table></div>
    </div>

    <h2>When a freelancer makes sense</h2>
    <p>Freelancers are the right first move when you need <strong>one specific skill for a bounded job</strong> — a landing page, a burst of content, a single ad account set up. They're flexible and the cheapest way to get started, with no long-term commitment. The catch is breadth: the moment your needs span paid ads <em>and</em> SEO <em>and</em> tracking <em>and</em> creative, you're either managing several freelancers yourself or discovering that the one you have is stretched past their depth.</p>

    <h2>When a marketing agency makes sense</h2>
    <p>An agency earns its retainer when you need <strong>several channels working together</strong> and you'd rather buy tested playbooks than build them. A good agency brings breadth and senior judgement from day one, and removes the single-point-of-failure risk of relying on one person. For most early-stage startups that are past "just one thing," an agency is the fastest way to get coordinated execution without a hiring spree. (If you're weighing the spend, see our breakdown of <a href="/insights/marketing-agency-cost-india/">what a marketing agency costs in India</a>.)</p>

    <blockquote>The question isn't "agency or in-house?" It's "what does this stage of the business actually need — and can I measure whether it's working?"</blockquote>

    <h2>When to build an in-house team</h2>
    <p>In-house pays off when marketing is <strong>constant, central to the product, and big enough to keep a full-time person genuinely busy</strong>. A dedicated hire lives and breathes your brand, customers, and roadmap in a way an external partner can't. The trade-offs are real, though: hiring is slow, salaries and tools add up, and one generalist simply cannot be expert in paid, organic, lifecycle, brand, and analytics at once. Most companies that go in-house too early end up paying a senior salary for junior-breadth output.</p>

    <h2>The hybrid model — what most growing startups actually do</h2>
    <p>The most pragmatic structure isn't a single choice at all. It's <strong>one in-house generalist or marketing lead who owns strategy and priorities, supported by an agency or freelancers for specialist execution</strong>. Your in-house person holds the context and the roadmap; the agency brings the channel depth and the hands. Done well, you get ownership and breadth without overpaying for either.</p>

    <h2>A rough guide by funding stage</h2>
    <ul>
      <li><strong>Pre-seed / seed:</strong> freelancers for specific, foundational projects — and an agency for a foundation audit so you don't scale on broken data.</li>
      <li><strong>Series A:</strong> an agency to build and run a repeatable acquisition engine across channels.</li>
      <li><strong>Series B and beyond:</strong> the hybrid model — an in-house marketing leader, with agencies continuing specialist execution.</li>
    </ul>

    <h2>The thing that matters more than who you hire</h2>
    <p>Here's what a decade of watching this play out taught me: <strong>whichever route you pick, it fails the same way if the foundation is broken.</strong> A freelancer scaling ads on bad tracking, an agency optimising toward the wrong conversion event, an in-house hire reporting numbers no one can trust — same problem, different payroll. Before you commit to anyone, get an honest read on whether your <a href="/insights/marketing-foundation-audit/">tracking, attribution, and targeting</a> are sound. That decision shapes whether <em>any</em> of these hires can succeed.</p>`
  },
  {
    slug: "audit-your-ad-spend",
    section: "Paid Ads",
    readTime: "5 min read",
    date: "17 Jun 2026",
    h1: `How to tell if your ad spend is actually profitable (a 5-minute self-audit)`,
    standfirst: `Busy dashboards are not the same as profit. Here are five checks you can run today to find out whether your ad budget is building the business — or quietly leaking out the bottom.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "Is your ad spend actually profitable? A 5-minute self-audit | Tilth",
      "description": "Busy dashboards aren't profit. Five checks to tell whether your ad budget is building the business or quietly leaking — from a foundation-first marketing agency.",
      "canonical": "https://wearetilth.com/insights/audit-your-ad-spend/",
      "robots": "index, follow",
      "ogTitle": "Is your ad spend actually profitable? A 5-minute self-audit",
      "ogDescription": "Five checks to tell whether your ad budget is building the business or quietly leaking out the bottom.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/audit-your-ad-spend.webp",
      "ogLocale": null,
      "twTitle": "Is your ad spend actually profitable? A 5-minute self-audit",
      "twDescription": "Five checks to tell whether your ad budget is building the business or quietly leaking.",
      "twImage": "https://wearetilth.com/assets/insight-cards/audit-your-ad-spend.webp"
},
    schema: [
      {
            "@context": "https://schema.org",
            "@graph": [
                  {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                              {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://wearetilth.com/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Insights",
                                    "item": "https://wearetilth.com/insights/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Is your ad spend actually profitable?",
                                    "item": "https://wearetilth.com/insights/audit-your-ad-spend/"
                              }
                        ]
                  },
                  {
                        "@type": "BlogPosting",
                        "headline": "How to tell if your ad spend is actually profitable (a 5-minute self-audit)",
                        "description": "Busy dashboards aren't profit. Five checks to tell whether your ad budget is building the business or quietly leaking out the bottom.",
                        "image": "https://wearetilth.com/assets/insight-cards/audit-your-ad-spend.webp",
                        "datePublished": "2026-06-17",
                        "dateModified": "2026-11-06",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/audit-your-ad-spend/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/audit-your-ad-spend/",
                        "articleSection": "Paid Ads",
                        "keywords": [
                              "ad spend profitability",
                              "marketing attribution",
                              "ROAS",
                              "paid ads audit",
                              "conversion tracking"
                        ],
                        "wordCount": 880,
                        "author": {
                              "@type": "Person",
                              "name": "Anuja",
                              "jobTitle": "Founder",
                              "url": "https://wearetilth.com/about/"
                        },
                        "publisher": {
                              "@type": "Organization",
                              "name": "Tilth",
                              "url": "https://wearetilth.com/",
                              "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://wearetilth.com/favicon.svg"
                              }
                        }
                  }
            ]
      }
],
    faqHeading: null,
    faq: [
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of Tilth, a foundation-first marketing agency in Bengaluru. She has 10+ years of hands-on growth experience across 10+ industries — running paid ads and building affiliate programs, and fixing the same foundational mistakes every time. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Not sure where your spend is leaking?`, body: `That's exactly what the Foundation Audit is for. We'll review your current setup and tell you, honestly, what's broken — before you spend more.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>Platform dashboards report revenue. Businesses survive on contribution profit. Those two numbers can point in opposite directions for months, and the gap between them is where most ad budgets quietly stop working. This is the audit that closes it — five questions, in order, before anyone argues about creative.</p>

    <h2>1. Is your conversion event actually revenue?</h2>
    <p>Start here, because everything downstream inherits this error. Confirm the event your platforms optimise against is a completed order carrying its real value, not a button click, not a thank-you page that can be refreshed, not a lead you have not qualified. Then reconcile the count against your order system for a closed month. If the platform says 180 and your backend says 143, you do not have a performance problem yet — you have a measurement problem, and <a href="/insights/ga4-conversion-tracking/">getting GA4 conversion tracking right</a> is the prerequisite.</p>

    <h2>2. Do you know what one order actually leaves you?</h2>
    <p>Revenue is not margin and margin is not contribution. Take your average order value and subtract, honestly: cost of goods, payment gateway fees, shipping you absorb, packing and fulfilment, marketplace or platform commission where you sell through one, and the average discount actually redeemed rather than the one you intended. Then adjust for returns and cancellations, because a refunded order costs you the fulfilment and keeps none of the revenue.</p>
    <p>What remains is contribution per order — the only number that can pay for acquisition. Most teams discover it is materially smaller than the gross margin they had been using, which immediately changes what a sale is worth paying for.</p>

    <h2>3. What is your breakeven ROAS and your maximum CAC?</h2>
    <p>Once you have contribution per order, the thresholds follow arithmetically. Breakeven ROAS is the return at which advertising exactly consumes the contribution it generates; maximum CAC is the most you can pay for a customer before the order loses money. Work both out explicitly and write them down, because they convert every future campaign argument from taste into comparison.</p>
    <p>Worked through: if an order sells for 2,000 and contribution after all the costs above is 600, then advertising can spend up to 600 per order before the order breaks even — and the ROAS that corresponds to depends on your own numbers, not on anyone's benchmark. Our <a href="/tools/ad-spend-profitability-calculator/">ad spend profitability calculator</a> does this calculation with the full cost stack, including gateway and marketplace fees, discounting and return rate, so you get a breakeven ROAS and a maximum CAC you can actually hold campaigns to.</p>

    <blockquote>Platform ROAS answers whether the platform did its job. Contribution answers whether you should keep paying it.</blockquote>

    <h2>4. Are you separating new customers from returning ones?</h2>
    <p>Blended performance hides the thing you most need to see. If returning customers are counted in channel results, retargeting and branded search will always look excellent — they are being credited with revenue from people who already knew you. Split new-customer acquisition from repeat revenue and judge acquisition channels on the first only.</p>
    <p>Repeat purchase is where lifetime value arguments enter, and where they most often go wrong. It is reasonable to pay more than first-order contribution for a customer who reliably buys again — but only if you can show the repeat rate from your own cohort data, and only if your cash position can fund the gap until it arrives. An LTV assumption borrowed from a case study is not a reason to overspend.</p>

    <h2>5. Do you have one source of truth, and do you know its limits?</h2>
    <p>Every platform claims credit under its own attribution settings, which is why summing platform-reported revenue routinely exceeds what the business actually took. Pick one source for decisions — usually your order system, segmented by channel as well as you can — and treat platform numbers as directional signals about delivery rather than as accounting.</p>
    <p>Then hold the whole picture with a blended view: total marketing spend against total new-customer contribution, often tracked as MER. Blended cannot tell you which channel to cut, and channel-level cannot tell you whether the overall machine is profitable. You need both, and you need to know which question you are asking.</p>
    <p>Be careful with incrementality. Channel reports measure attributed conversions, not caused ones, and some share of what retargeting and brand search report would have happened anyway. The honest way to find out is a holdout or a deliberate spend change observed over a full purchase cycle — not a dashboard comparison, and not a model you cannot audit.</p>

    <h2>6. Do you know your payback window?</h2>
    <p>Profitable and affordable are different tests. A customer who repays acquisition cost over nine months may be a good investment and still break a business that needs the cash in two. Decide the payback period your cash flow can carry, measure against it, and treat it as a constraint on growth rate rather than a detail.</p>

    <h2>Decision thresholds worth writing down</h2>
    <p>Set these once, in advance, so decisions stop being arguments: the breakeven ROAS and maximum CAC per product or category, the acceptable payback window, the new-customer share you require before counting a channel as acquisition, and the tolerance within which platform numbers may differ from your backend before you investigate. Review monthly against closed-month data rather than reacting to a bad week.</p>

    <h2>What good looks like</h2>
    <p>One revenue event you have reconciled against orders. Contribution per order calculated with the full cost stack, including returns and discounting. Breakeven ROAS and maximum CAC written down per category. New-customer performance reported separately from repeat. A blended view alongside channel detail, with one agreed source of truth and a known tolerance. A payback window your cash flow can actually fund.</p>
    <p>Get there and most spending decisions answer themselves. Building that layer is <a href="/services/growth-strategy-measurement/">growth strategy and measurement</a>, and running budgets against it afterwards is <a href="/services/performance-marketing/">performance marketing</a> — in that order, because scaling spend on numbers you cannot defend is how the gap at the top of this article opens in the first place.</p>`
  },
  {
    slug: "first-marketing-hire-startup",
    section: "Hiring",
    readTime: "8 min read",
    date: "12 Jul 2026",
    h1: `Your startup's first marketing hire: who to hire first`,
    standfirst: `Founders usually ask "SEO or paid ads person?" That's the wrong first question. Here's who your startup's first marketing hire should actually be, what to pay them in India in 2026, and how to set them up so the hire doesn't quietly fail.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "Your Startup's First Marketing Hire: Who to Hire First (2026 Guide) | Tilth",
      "description": "Your startup's first marketing hire shouldn't be a specialist. Here's who to hire first, what to pay in India in 2026, and how to set them up to succeed.",
      "canonical": "https://wearetilth.com/insights/first-marketing-hire-startup/",
      "robots": "index, follow",
      "ogTitle": "Your startup's first marketing hire: who to hire first",
      "ogDescription": "It shouldn't be a specialist. Who to hire first, what to pay in India in 2026, and how to set them up to succeed.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/first-marketing-hire-startup.webp",
      "ogLocale": null,
      "twTitle": "Your startup's first marketing hire: who to hire first",
      "twDescription": "Who to hire first, what to pay in India in 2026, and how to set them up to succeed.",
      "twImage": "https://wearetilth.com/assets/insight-cards/first-marketing-hire-startup.webp"
},
    schema: [
      {
            "@context": "https://schema.org",
            "@graph": [
                  {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                              {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://wearetilth.com/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Insights",
                                    "item": "https://wearetilth.com/insights/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Your startup's first marketing hire: who to hire first",
                                    "item": "https://wearetilth.com/insights/first-marketing-hire-startup/"
                              }
                        ]
                  },
                  {
                        "@type": "BlogPosting",
                        "headline": "Your startup's first marketing hire: who to hire first",
                        "description": "Your startup's first marketing hire shouldn't be a specialist. Who to hire first, what to pay in India in 2026, and how to set them up to succeed.",
                        "image": "https://wearetilth.com/assets/insight-cards/first-marketing-hire-startup.webp",
                        "datePublished": "2026-07-12",
                        "dateModified": "2026-07-12",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/first-marketing-hire-startup/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/first-marketing-hire-startup/",
                        "articleSection": "Hiring",
                        "keywords": [
                              "first marketing hire",
                              "startup first marketing hire India",
                              "who to hire first marketing",
                              "generalist vs specialist marketer",
                              "growth marketer hire India"
                        ],
                        "wordCount": 1550,
                        "author": {
                              "@type": "Person",
                              "name": "Anuja",
                              "jobTitle": "Founder",
                              "url": "https://wearetilth.com/about/"
                        },
                        "publisher": {
                              "@type": "Organization",
                              "name": "Tilth",
                              "url": "https://wearetilth.com/",
                              "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://wearetilth.com/favicon.svg"
                              }
                        }
                  },
                  {
                        "@type": "FAQPage",
                        "mainEntity": [
                              {
                                    "@type": "Question",
                                    "name": "Who should be a startup's first marketing hire?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Almost always a generalist growth marketer, not a channel specialist. Your first hire needs to run paid ads, write copy, fix tracking, and report on what's working, often all in the same week. A narrow specialist — a pure SEO hire or a pure paid-social hire — usually leaves gaps nobody else on the team can fill."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Should a startup's first marketing hire be a generalist or a specialist?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "A generalist, for the first hire specifically. Specialists earn more and go deeper on one channel, but a five-person startup doesn't yet have enough volume in any single channel to justify one. Bring in specialists — paid, SEO, content — once the generalist has proven which channels actually work and you're ready to scale them."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "What should a startup pay its first marketing hire in India?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "In 2026, a competent generalist growth marketer in India with 3-6 years of experience typically costs ₹8-18 lakh per year (CTC), depending on city and equity. Senior growth hires who can operate near-independently run ₹18-35 lakh. Add a small performance bonus tied to pipeline or revenue rather than vanity metrics."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "When should a startup make its first marketing hire?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Once you have product-market fit signal and a repeatable sales motion — typically somewhere between early traction and roughly $500K-$2M ARR for B2B, or once a founder can no longer personally keep up with content, ads, and reporting. Hiring marketing before that point usually means paying someone to market a product that still needs to change."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Should you hire an agency instead of a first marketing employee?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "They solve different problems. An agency brings breadth and specialist skill from day one but needs someone in-house to own strategy and feed them context. A first in-house generalist hire builds institutional knowledge but takes longer to cover every channel well. Many startups do both: a generalist hire who owns the roadmap, supported by an agency or freelancers for execution on specific channels."
                                    }
                              }
                        ]
                  }
            ]
      }
],
    faqHeading: `First marketing hire — FAQs`,
    faq: [
      { q: `Who should be a startup's first marketing hire?`,
        a: `<p>Almost always a generalist growth marketer, not a channel specialist. Your first hire needs to run paid ads, write copy, fix tracking, and report on what's working, often in the same week. A narrow specialist usually leaves gaps nobody else on the team can fill.</p>` },
      { q: `Should a startup's first marketing hire be a generalist or a specialist?`,
        a: `<p>A generalist, for the first hire specifically. Specialists earn more and go deeper on one channel, but a small startup doesn't yet have enough volume in any single channel to justify one. Bring in specialists once the generalist has proven which channels work.</p>` },
      { q: `What should a startup pay its first marketing hire in India?`,
        a: `<p>In 2026, a competent generalist growth marketer with 3-6 years of experience typically costs ₹8-18 lakh per year (CTC), depending on city and equity. Senior, near-independent growth hires run ₹18-35 lakh.</p>` },
      { q: `When should a startup make its first marketing hire?`,
        a: `<p>Once you have product-market fit signal and a repeatable sales motion — often somewhere between early traction and roughly $500K-$2M ARR — or once a founder can no longer keep up with content, ads, and reporting alone.</p>` },
      { q: `Should you hire an agency instead of a first marketing employee?`,
        a: `<p>They solve different problems. An agency brings breadth and specialist skill from day one but needs someone in-house to own strategy. Many startups do both: a generalist hire who owns the roadmap, supported by an agency or freelancers for execution.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has 10+ years of hands-on growth experience across 10+ industries, helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Give your first marketing hire a clean foundation`, body: `A Foundation Audit checks your tracking, attribution, and targeting before you bring someone on — so their first month is spent testing channels, not debugging broken data. No pitch attached.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>Most founders make the same mistake with their first marketing hire: they hire for the channel they're most worried about. Losing on SEO, so they hire an SEO person. Paid ads feel expensive, so they hire a media buyer. Six months later, half the marketing function has no owner and the specialist they hired is stuck waiting on tracking, content, and strategy that nobody else is doing. Your <strong>startup's first marketing hire</strong> needs to be built for a stage where almost nothing exists yet — not for a single channel.</p>

    <h2>The short answer: hire a generalist, not a specialist</h2>
    <p>Your first marketing hire should be a <strong>generalist growth marketer</strong> — someone who can run a small paid ads test, write landing page copy, fix a broken GA4 event, and report honestly on what worked, often in the same week. Not because specialists aren't valuable, but because at the stage of "we have one marketing hire," there isn't yet enough volume in any single channel to justify a narrow specialist. A brilliant SEO hire is wasted if nobody is fixing tracking, writing ad copy, or running the two or three channels you actually need to test first.</p>

    <p>This generalist is sometimes called a "founding marketer" or "growth marketer." Typically 3-8 years of experience, having touched growth, content, and paid channels at a previous startup, comfortable being hands-on rather than just directing an agency. They are a generalist by necessity, not because they failed to specialize.</p>

    <h2>What the role actually needs to cover in year one</h2>
    <p>Before you write the job description, be honest about what this one person will be doing in their first six months:</p>
    <ul>
      <li><strong>Tracking and measurement:</strong> making sure GA4, the ad pixels, and your CRM agree on what a "conversion" actually is — see our <a href="/insights/ga4-conversion-tracking/">GA4 conversion tracking checklist</a> if this is still shaky.</li>
      <li><strong>Channel testing:</strong> running small, cheap tests across 2-3 channels to find out which ones actually work for your product, rather than betting everything on one.</li>
      <li><strong>Content and copy:</strong> landing pages, ad copy, basic SEO content — usually without a dedicated writer or designer to lean on yet.</li>
      <li><strong>Reporting:</strong> telling the founders honestly what's working and what isn't, without spin.</li>
      <li><strong>Vendor management:</strong> briefing and managing any freelancers or agencies you bring in alongside them.</li>
    </ul>
    <p>That's a wide brief. It's also why the <a href="/insights/agency-vs-freelancer-vs-inhouse/">agency vs freelancer vs in-house</a> question and the "who's my first hire" question are really the same decision looked at from two angles — most early-stage teams end up with a generalist owning strategy and an agency or freelancers filling in execution gaps.</p>

    <h2>When to make this hire</h2>
    <p>Timing matters more than most founders think. Hire too early and you're paying someone to market a product that hasn't found its shape yet. Hire too late and growth stalls because a founder is stretched across product, sales, and marketing with no bandwidth left for any of them properly. As a rough guide:</p>
    <ul>
      <li><strong>Too early:</strong> before you have any signal on who buys, why, and what makes them convert. Marketing can't fix an unclear product.</li>
      <li><strong>About right:</strong> you have early traction, a repeatable (if manual) sales or signup motion, and a founder who can no longer keep up with content, ads, and reporting alongside everything else — often somewhere in the $500K-$2M ARR range for B2B, or the equivalent traction signal for D2C and consumer products.</li>
      <li><strong>Too late:</strong> you've been running ads and content ad hoc for a year with nobody accountable for whether any of it is working.</li>
    </ul>

    <h2>What to pay in India, 2026</h2>
    <p>Marketing salaries in India vary widely by seniority and specialization. For a first hire specifically, here's what the market looks like this year:</p>

    <div data-tbl><table class="price-table">
      <thead>
        <tr><th>Profile</th><th>Typical CTC (2026, India)</th></tr>
      </thead>
      <tbody>
        <tr><td data-th="Profile">Junior generalist (1-3 yrs)</td><td data-th="Typical CTC (2026, India)">₹5 – ₹8 lakh / year</td></tr>
        <tr><td data-th="Profile">Mid-level growth generalist (3-6 yrs) — best fit for first hire</td><td data-th="Typical CTC (2026, India)">₹8 – ₹18 lakh / year</td></tr>
        <tr><td data-th="Profile">Senior growth hire (6+ yrs, near-independent)</td><td data-th="Typical CTC (2026, India)">₹18 – ₹35 lakh / year</td></tr>
        <tr><td data-th="Profile">Deep specialist (e.g. performance marketing lead)</td><td data-th="Typical CTC (2026, India)">₹20 – ₹45 lakh / year</td></tr>
      </tbody>
    </table><p class="price-note">Indicative market ranges based on 2026 industry salary data — actual pay depends on city, equity, and company stage.</p></div>

    <p>Notice that a deep specialist often costs more than the generalist you actually need first. That's a second reason to delay specialist hires until you know which channel deserves that investment. If the salary math feels tight against your overall <a href="/insights/startup-marketing-budget-india/">marketing budget</a>, that's worth working out before you post the job, not after an offer is accepted.</p>

    <blockquote>The best first marketing hire isn't the person who knows one channel best. It's the person who can find out which channel is worth knowing best.</blockquote>

    <h2>Generalist vs specialist — the real trade-off</h2>
    <p>This isn't a case against specialists. It's a sequencing question. A generalist first hire is cheaper, more flexible, and de-risks the decision of which channels to invest in further. Once they've proven that, say, paid social and SEO content are working and organic outreach isn't, that's exactly when a specialist earns their higher price — you're now buying depth in a channel you've already validated, not gambling on one you haven't tested.</p>

    <h2>Red flags when hiring your first marketer</h2>
    <ul>
      <li><strong>They can't explain how they'd measure success</strong> before you've told them your goals — a sign they'll report on vanity metrics later.</li>
      <li><strong>Their portfolio is all execution, no strategy</strong> — fine for a fourth hire, risky for a first one who needs to set the direction.</li>
      <li><strong>They've only ever worked inside a large, established marketing team</strong> with dedicated designers, analysts, and ops support — a very different job from doing all of it themselves.</li>
      <li><strong>They're vague about tracking and attribution</strong> — if they can't discuss how they'd know an ad actually worked, they'll scale spend on numbers nobody's checked.</li>
    </ul>

    <h2>How to set them up to succeed</h2>
    <p>The single biggest reason first marketing hires fail isn't the person — it's that they inherit a foundation nobody has checked. Tracking that double-counts conversions, ad accounts with stale pixels, unclear attribution between paid and organic. A strong generalist will eventually notice and fix these things, but every month spent debugging measurement is a month not spent testing channels. Getting an independent read on your tracking and targeting before or right when this person starts is the cheapest way to make sure their first quarter is spent growing the business, not untangling it.</p>`
  },
  {
    slug: "ga4-conversion-tracking",
    section: "Tracking",
    readTime: "6 min read",
    date: "17 Jun 2026",
    h1: `GA4 conversion tracking: the setup checklist before you scale ads`,
    standfirst: `If GA4 is reporting the wrong conversions, every decision downstream — which campaign to scale, which to cut — is built on a lie. Here's the checklist to get it right before you spend more.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "GA4 conversion tracking: the setup checklist before you scale ads | Tilth",
      "description": "Most GA4 conversion setups quietly report the wrong numbers — so every ad decision downstream is wrong. A practical checklist to get conversion tracking right before you scale spend.",
      "canonical": "https://wearetilth.com/insights/ga4-conversion-tracking/",
      "robots": "index, follow",
      "ogTitle": "GA4 conversion tracking: the setup checklist before you scale ads",
      "ogDescription": "Get conversion tracking right before you scale spend — a practical GA4 checklist for founders and marketers.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/ga4-conversion-tracking.webp",
      "ogLocale": null,
      "twTitle": "GA4 conversion tracking: the setup checklist before you scale ads",
      "twDescription": "Get conversion tracking right before you scale spend — a practical GA4 checklist.",
      "twImage": "https://wearetilth.com/assets/insight-cards/ga4-conversion-tracking.webp"
},
    schema: [
      {
            "@context": "https://schema.org",
            "@graph": [
                  {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                              {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://wearetilth.com/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Insights",
                                    "item": "https://wearetilth.com/insights/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "GA4 conversion tracking",
                                    "item": "https://wearetilth.com/insights/ga4-conversion-tracking/"
                              }
                        ]
                  },
                  {
                        "@type": "BlogPosting",
                        "headline": "GA4 conversion tracking: the setup checklist before you scale ads",
                        "description": "Most GA4 conversion setups quietly report the wrong numbers, so every ad decision downstream is wrong. A practical checklist to get conversion tracking right before you scale spend.",
                        "image": "https://wearetilth.com/assets/insight-cards/ga4-conversion-tracking.webp",
                        "datePublished": "2026-06-17",
                        "dateModified": "2026-11-06",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/ga4-conversion-tracking/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/ga4-conversion-tracking/",
                        "articleSection": "Tracking",
                        "keywords": [
                              "GA4 conversion tracking",
                              "GA4 key events",
                              "Google Analytics 4 setup",
                              "purchase event GA4",
                              "conversion tracking"
                        ],
                        "wordCount": 880,
                        "author": {
                              "@type": "Person",
                              "name": "Anuja",
                              "jobTitle": "Founder",
                              "url": "https://wearetilth.com/about/"
                        },
                        "publisher": {
                              "@type": "Organization",
                              "name": "Tilth",
                              "url": "https://wearetilth.com/",
                              "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://wearetilth.com/favicon.svg"
                              }
                        }
                  }
            ]
      }
],
    faqHeading: null,
    faq: [
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of Tilth, a foundation-first marketing agency in Bengaluru. She has 10+ years of hands-on growth experience across 10+ industries — rebuilding tracking and scaling spend against numbers teams can actually trust. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Not sure your tracking is telling the truth?`, body: `A Foundation Audit checks exactly this — your events, your conversions, and whether the number you're scaling on is real. No pitch attached.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>Most GA4 properties are collecting data. Far fewer are collecting data anyone should make a budget decision on. The gap is rarely the install — it is what got marked as important, what fires twice, and what was never verified before paid media started optimising against it. Work through these in order.</p>

    <h2>1. Mark the right events as key events</h2>
    <p>In GA4 the events that matter to the business are called <strong>key events</strong> — an event that measures an action particularly important to your success. You mark them on the Key events page in Admin. Everything else stays an ordinary event, which is fine: ordinary events are still collected and still reportable.</p>
    <p>Two practical cautions. First, be sparing. If twelve things are key events, nothing is, and every report becomes a negotiation about which number to believe. Second, renaming an event that is already marked as a key event removes its key-event status — changing only its parameters does not. That single behaviour explains a lot of conversions that silently vanished after a tagging tidy-up.</p>

    <h2>2. Send the revenue event with value and currency</h2>
    <p>A purchase that reports no value cannot support any decision about return. Send the ecommerce purchase event with <code>value</code>, <code>currency</code> and a stable <code>transaction_id</code>. The transaction ID is what lets you deduplicate later and reconcile against your backend, and it is the field most often left out.</p>
    <p>For lead generation the equivalent discipline is deciding what a lead is worth before you start optimising toward it. A form fill with no value assigned is just a count, and counts cannot be compared across channels with different qualification rates.</p>

    <h2>3. Find the duplicate events before they find you</h2>
    <p>Duplicates usually come from one of three places: the same tag deployed twice, once directly and once through a tag manager; a thank-you page that can be reloaded or revisited; or an event fired both on a button click and on the confirmation that follows. The symptom is a conversion count that exceeds your order count, which nobody notices while it flatters performance.</p>
    <p>Check against the backend, not against another analytics tool. If GA4 says 180 purchases and your order system says 143, the question is which 37 are not real.</p>

    <h2>4. Prefer the confirmation event to the thank-you page</h2>
    <p>Counting a thank-you page view as the conversion is convenient and fragile: the page can be bookmarked, refreshed, shared, or reached without ordering. An event fired at the point the order is actually created is harder to trigger accidentally. Where you have no choice but to rely on the page, at least carry the transaction ID so repeats can be identified and discarded.</p>

    <h2>5. Know what enhanced measurement is doing for you</h2>
    <p>Enhanced measurement collects a set of interactions with no code changes, and the detail matters when you start reporting on them. Page views are collected automatically and that collection cannot be switched off. The scroll event fires the first time 90% vertical depth becomes visible — it is not a general engagement measure. Outbound clicks do not fire for domains you have configured for cross-domain measurement, which is correct behaviour but surprises people. Site search looks for query parameters, defaulting to q, s, search, query and keyword, so a site using something else records nothing until it is added. Form interaction events are collected, but their parameters are only usable in reports once you create custom dimensions for them.</p>
    <p>Google also states plainly that it is your responsibility to ensure no personally identifiable information is collected. Worth re-reading if your URLs carry email addresses or order details in query strings.</p>

    <blockquote>If GA4 and your order system disagree, GA4 is not a second opinion. It is a hypothesis that failed a test.</blockquote>

    <h2>6. Fix cross-domain and referral noise before you trust sources</h2>
    <p>If your journey crosses domains — a separate checkout, a booking engine, a payment page — configure cross-domain measurement, and note the hard requirement: every page must use the same G- measurement ID from the same web data stream. Without it a single visitor becomes two users and two sessions, and the channel that introduced them loses the sale. Analytics carries identity across with a <code>_gl</code> parameter, so verify it survives the hop; redirects that strip it, JavaScript-triggered navigation, and scripts calling <code>Event.stopPropagation()</code> are the usual culprits.</p>
    <p>Separately, list unwanted referrals for domains that should not be credited as a traffic source — third-party payment processors being the standard case, where customers return from the gateway and the gateway appears to have sold your product. GA4 appends an <code>ignore_referrer</code> flag to matching events, and allows up to 50 such entries per data stream. One caveat worth knowing before you expect it to rewrite history: a session already referred by that domain can still be credited to it under last-non-direct-click attribution.</p>

    <h2>7. Verify in DebugView before you believe the reports</h2>
    <p>DebugView shows the events and user properties Analytics is collecting in real time, which is the only honest way to confirm a tag does what you think. Enable debug mode with Tag Assistant for your own session, or set <code>debug_mode: true</code> in your configuration to see it for all users, then open DebugView under Data display in Admin. Note that setting the parameter to false does not switch debug mode off — you remove it.</p>
    <p>One consent-related gotcha: where consent mode is in use and a visitor has not consented to Analytics cookies, their events will not appear in debug mode. An empty DebugView is not automatically a broken tag.</p>

    <h2>8. Understand what consent does to your totals</h2>
    <p>If you ask for analytics consent — and in many markets you must — a share of visitors will decline, and what you can observe about them changes. What happens next depends on how consent mode is implemented and whether the property qualifies for modelling, so this is worth establishing rather than assuming.</p>
    <p>Under a basic implementation, tags are blocked until someone interacts with the banner and no data is sent for a visitor who declines — not even their consent state. Under an advanced implementation, tags load and send cookieless pings while consent is denied, and full measurement data only once consent is granted. Google documents that the advanced route is what enables modelling, and that blocking tags means you will not get modelled data filling the gaps.</p>
    <p>Where a property is eligible, GA4 can include modelled users and modelled key events in supported reports — core reports and explorations with event-scoped dimensions — and the data-quality icon tells you when estimated data is included. Eligibility has real conditions: consent mode implemented across the whole site, meaningful volumes of both denied and granted traffic over a rolling period, and the Blended reporting identity selected before modelled data is shown at all. Meeting the published thresholds still does not guarantee it. Modelling is also not applied everywhere — audiences, retention, user-level explorations, predictive metrics and BigQuery export are outside it.</p>
    <p>So treat consent state and modelling eligibility as part of reconciliation rather than assuming the shortfall equals your opt-out rate. Google publishes no figure for the size of that gap, and the honest position is that it depends on your implementation. Your order system remains the truth for revenue either way, and a period measured under different consent or modelling conditions is not directly comparable with this one.</p>

    <h2>9. Import to Google Ads deliberately</h2>
    <p>You can create a Google Ads conversion from a GA4 key event. Import one — the revenue event — and be aware that Google Ads conversions do not appear in standard GA4 reports, so the two interfaces are not meant to tie out line for line. Importing several overlapping events is how bidding ends up optimising toward the same customer counted three ways.</p>

    <h2>What must be true before you scale paid media</h2>
    <p>One revenue event, marked as a key event, carrying value, currency and a transaction ID. Count reconciled against the backend within a tolerance you have written down. Cross-domain configured and verified if the journey crosses domains. Payment processors excluded from referrals. The event confirmed firing once in DebugView. One conversion imported to Google Ads. If any of those is missing, extra budget buys noise at scale.</p>
    <p>Getting a property to that state is the first half of <a href="/services/growth-strategy-measurement/">growth strategy and measurement</a>, and it is deliberately the work we do before touching <a href="/services/performance-marketing/">performance marketing</a> budgets. If you are chasing this because a channel stopped converting, <a href="/insights/meta-ads-not-converting/">the Meta-side version of the same audit</a> is the companion piece, and <a href="/insights/audit-your-ad-spend/">auditing whether that spend is profitable</a> is the step after both.</p>`
  },
  {
    slug: "google-ads-budget-india-startups",
    section: "Paid Ads",
    readTime: "8 min read",
    date: "7 Jun 2026",
    h1: `How much should you spend on Google Ads in India to start?`,
    standfirst: `"What's the minimum budget?" is the question every founder asks, and it's the wrong first one. Google publishes no minimum. Here's how to work a starting budget out of your own margin, your own cost-per-click and the number of conversions you need before the result means anything.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "How Much Should You Spend on Google Ads in India to Start? | Tilth",
      "description": "How to work out a starting Google Ads budget in India from your own numbers — target CAC, cost-per-click, conversion rate and the data you need before judging a test. No made-up minimums.",
      "canonical": "https://wearetilth.com/insights/google-ads-budget-india-startups/",
      "robots": "index, follow",
      "ogTitle": "How much should you spend on Google Ads in India to start?",
      "ogDescription": "Google publishes no minimum budget. Here's how to calculate a starting figure from your margin, your cost-per-click and the conversions you need to decide anything.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/google-ads-budget-india-startups.webp",
      "ogLocale": null,
      "twTitle": "How much should you spend on Google Ads in India to start?",
      "twDescription": "How to calculate a starting Google Ads budget from your own numbers — not a rule of thumb.",
      "twImage": "https://wearetilth.com/assets/insight-cards/google-ads-budget-india-startups.webp"
},
    schema: [
      {
            "@context": "https://schema.org",
            "@graph": [
                  {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                              {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://wearetilth.com/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Insights",
                                    "item": "https://wearetilth.com/insights/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "How much should you spend on Google Ads in India to start?",
                                    "item": "https://wearetilth.com/insights/google-ads-budget-india-startups/"
                              }
                        ]
                  },
                  {
                        "@type": "BlogPosting",
                        "headline": "How much should you spend on Google Ads in India to start?",
                        "description": "How to work out a starting Google Ads budget in India from your own numbers - target CAC, cost-per-click, conversion rate and the data you need before judging a test.",
                        "image": "https://wearetilth.com/assets/insight-cards/google-ads-budget-india-startups.webp",
                        "datePublished": "2026-06-07",
                        "dateModified": "2026-11-08",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/google-ads-budget-india-startups/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/google-ads-budget-india-startups/",
                        "articleSection": "Paid Ads",
                        "keywords": [
                              "Google Ads budget India",
                              "how much to spend on Google Ads",
                              "Google Ads for startups India",
                              "starting Google Ads budget",
                              "Google Ads minimum budget"
                        ],
                        "wordCount": 1560,
                        "author": {
                              "@type": "Person",
                              "name": "Anuja",
                              "jobTitle": "Founder",
                              "url": "https://wearetilth.com/about/"
                        },
                        "publisher": {
                              "@type": "Organization",
                              "name": "Tilth",
                              "url": "https://wearetilth.com/",
                              "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://wearetilth.com/favicon.svg"
                              }
                        }
                  },
                  {
                        "@type": "FAQPage",
                        "mainEntity": [
                              {
                                    "@type": "Question",
                                    "name": "Is there a minimum budget for Google Ads?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Google does not publish a minimum campaign budget. You set an average daily budget, and Google's own documentation states you will never pay more than twice that figure on any single day, or 30.4 times it in a month, for most campaigns. The practical floor is not a rule from Google but a question about your own numbers: can this budget buy enough conversions to tell you anything?"
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How do I work out my starting Google Ads budget?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Start with the most you can afford to pay for a customer, which comes from your gross margin, not your revenue. Then estimate cost-per-click from Keyword Planner's top-of-page bid ranges and assume a conversion rate you can defend. Multiply the conversions you need for a decision by your expected cost per conversion, and spread that across the number of weeks you can afford to run. The result is your budget, and it is specific to you."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How many conversions do I need before judging a Google Ads test?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Google recommends evaluating Smart Bidding over periods containing at least 30 conversions, or 50 for Target ROAS. That is a platform benchmark for judging a bidding strategy, not a statistical rule, and it is separate from eligibility, which differs by campaign type. Your own threshold depends on what you are testing and what a conversion is worth: a high-value B2B campaign can learn from fewer conversions when lead quality and pipeline data are available, while a high-volume ecommerce test may want considerably more."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Should I start with Search, Shopping or Performance Max?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "For a first test, a tightly scoped Search campaign is usually easiest to diagnose, because you can see which queries spent the money. Shopping suits product catalogues with a clean feed. Performance Max draws on all Google inventory from one campaign, which makes it powerful but harder to attribute when something goes wrong. Note that AI Max is not a campaign type - Google describes it as an optimisation layer you activate inside an existing Search campaign, and it turns on search term matching and asset features you can toggle individually."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How do I know if my Google Ads budget is too small?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Divide your monthly budget by your expected cost per conversion. If the answer is in low single digits, the budget cannot produce a decision within a month at any level of skill, and the honest options are to narrow the targeting until the cost per conversion falls, extend the runway, or wait. A budget too small to generate a decision does not fail slowly - it tells you nothing at all."
                                    }
                              }
                        ]
                  }
            ]
      }
],
    faqHeading: `Google Ads budget for India startups — FAQs`,
    faq: [
      { q: `Is there a minimum budget for Google Ads?`,
        a: `<p>Google doesn't publish one. You set an average daily budget, and Google's documentation states you'll never pay more than twice that on a single day, or 30.4 times it in a month, for most campaigns. The real floor is a question about your numbers: can this budget buy enough conversions to tell you anything?</p>` },
      { q: `How do I work out my starting budget?`,
        a: `<p>Start with the most you can afford to pay for a customer — from gross margin, not revenue. Estimate cost-per-click from Keyword Planner's top-of-page bid ranges, assume a conversion rate you can defend, multiply the conversions you need by your expected cost per conversion, and spread that over the weeks you can afford to run.</p>` },
      { q: `How many conversions before I judge the test?`,
        a: `<p>Google recommends evaluating Smart Bidding over periods containing at least 30 conversions, or 50 for Target ROAS. That's a platform benchmark for judging a bidding strategy, not a statistical rule — and it's separate from eligibility, which differs by campaign type. Your own threshold depends on what you're testing and what a conversion is worth: a high-value B2B campaign can learn from fewer conversions when lead quality and pipeline data are available, while a high-volume ecommerce test may want considerably more.</p>` },
      { q: `Should I start with Search, Shopping or Performance Max?`,
        a: `<p>A tightly scoped Search campaign is usually easiest to diagnose, because you can see which queries spent the money. Shopping suits a clean product feed. Performance Max is powerful but harder to attribute. AI Max isn't a campaign type — Google describes it as an optimisation layer inside a Search campaign.</p>` },
      { q: `How do I know if my budget is too small?`,
        a: `<p>Divide the monthly budget by your expected cost per conversion. If the answer is in low single digits, no amount of skill produces a decision inside a month. Narrow the targeting until cost per conversion falls, extend the runway, or wait.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has 10+ years of hands-on growth experience across 10+ industries, helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Get a Google Ads budget based on your numbers, not a guess`, body: `A Foundation Audit checks your tracking and works a realistic starting budget out of your own margin and category — so your first rupee of ad spend actually tells you something.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>"How much should I spend on Google Ads?" is usually the first question a founder asks before running paid ads in India. The uncomfortable answer is that nobody can give you a number without your numbers — and that what you're really looking for isn't a minimum spend, it's the point at which spend starts producing a decision. This guide walks through how to work a starting <strong>Google Ads budget for a startup in India</strong> out of your own margin and your own cost-per-click.</p>

    <h2>Google doesn't publish a minimum</h2>
    <p>Worth saying plainly, because a lot of advice implies otherwise: Google Ads has no stated minimum campaign budget. What you set is an <strong>average daily budget</strong>, and Google's own documentation is specific about how it's spent. Daily spend varies — Google leans into days where clicks and conversions are likelier — but the variance is capped: for most campaigns you won't pay more than twice your average daily budget on any single day, or more than 30.4 times it in a month. The 30.4 isn't arbitrary; it's 365 divided by 12. So your monthly exposure is knowable before you launch.</p>

    <h2>Work out the ceiling before the floor</h2>
    <p>The first number isn't what you can spend. It's the most you can afford to pay for one customer, and it comes out of <strong>gross margin, not revenue</strong>. A ₹4,000 order at 25% margin leaves ₹1,000 of contribution; pay ₹1,200 to acquire it and you've bought a loss at scale. For a considered purchase, run the arithmetic one step further back — average deal value, times margin, times the rate at which leads become customers. Paying lead-level prices against customer-level expectations is the most common way a budget looks fine for two months and then doesn't.</p>

    <h2>Then the two numbers that set the floor</h2>
    <h3>Expected cost-per-click</h3>
    <p>Keyword Planner is the place to look, though Google requires billing information to be entered before basic features like keyword ideas are available. Don't hunt for a single "CPC" figure; that isn't what it gives you. The relevant columns are <strong>Top of page bid (low range)</strong> and <strong>(high range)</strong> — Google describes them as approximations of the 20th and 80th percentile of bids over the last 30 days — and the forecast view separately estimates Clicks, Cost, Impressions, CTR and Avg. CPC for a given bid. Treat all of it as an order of magnitude: Google says forecasts rest on roughly a week of data, that new advertisers get all-advertiser averages, and that accuracy drops for small geographies, which describes most first campaigns in India rather precisely.</p>
    <h3>Expected conversion rate</h3>
    <p>This is where budget plans quietly fail, because the rate gets assumed rather than estimated. If you have organic or referral traffic to the same page, use that rate and discount it — paid traffic from a broad query is rarely as qualified as someone who came looking. If you have no data, say so in the plan and treat the first weeks as the exercise that produces the number.</p>

    <h2>How much evidence before the result means anything</h2>
    <p>Google publishes a figure here, and it's worth quoting precisely. To evaluate Smart Bidding results accurately, Google Ads recommends measuring performance over longer periods containing <strong>at least 30 conversions</strong> — a month or more — and at least 50 for Target ROAS. (Google also notes that from June 2026 the strategies formerly called "Maximize conversions with a Target CPA" and "Maximize conversion value with a Target ROAS" are simply <strong>Target CPA</strong> and <strong>Target ROAS</strong>.)</p>
    <p>That is a platform benchmark for judging a bidding strategy — not a statistical rule, and not automatically your decision threshold. Google doesn't present it as a significance test, and it notes that data recommendations vary by campaign type. It's also a different question from eligibility: Target CPA can be switched on with no conversion history at all, while Target ROAS carries its own per-campaign-type requirements, which for Search and Shopping are at least 15 conversions in the past 30 days. Being allowed to use a strategy and having enough data to judge it are not the same test.</p>
    <p>Your own threshold depends on what you're testing and what one conversion is worth. If you sell a large contract, a handful of enquiries with qualification and pipeline data attached can be more informative than thirty form fills, because the evidence lives downstream of the ad account. A high-volume ecommerce campaign may pass thirty in a week and still want considerably more before changing anything — especially when the real question is creative or landing page rather than bidding. Decide in advance what would change your mind and what you'd need to see to believe it, then check whether the budget can buy that.</p>

    <blockquote>A budget too small to generate a decision doesn't fail slowly. It just never tells you anything, and you pay for the silence.</blockquote>

    <h2>Illustrative arithmetic — not a benchmark</h2>
    <p>The numbers below are invented to show the shape of the calculation. Don't borrow them; they're arithmetic, not a market rate. The 30-conversion figure is borrowed from Google's Smart Bidding evaluation benchmark purely as an illustrative volume — substitute whatever evidence your own decision actually needs.</p>
    <div data-tbl><table class="price-table">
      <thead>
        <tr><th>Input</th><th>Illustrative figure</th></tr>
      </thead>
      <tbody>
        <tr><td data-th="Input">Most you can pay per customer (from margin)</td><td data-th="Illustrative figure">₹1,000</td></tr>
        <tr><td data-th="Input">Assumed cost-per-click</td><td data-th="Illustrative figure">₹30</td></tr>
        <tr><td data-th="Input">Assumed landing-page conversion rate</td><td data-th="Illustrative figure">2%</td></tr>
        <tr><td data-th="Input">Implied cost per conversion (₹30 ÷ 2%)</td><td data-th="Illustrative figure">₹1,500</td></tr>
        <tr><td data-th="Input">Illustrative evaluation volume</td><td data-th="Illustrative figure">30 conversions</td></tr>
        <tr><td data-th="Input">Implied spend at that volume (30 × ₹1,500)</td><td data-th="Illustrative figure">₹45,000</td></tr>
      </tbody>
    </table><p class="price-note">Illustrative arithmetic only. Substitute your own margin, bid range and conversion rate — the output changes completely, which is the point.</p></div>
    <p>Two things fall out of that immediately. The implied cost per conversion (₹1,500) is above the ceiling the margin allows (₹1,000), so the campaign isn't viable as specified — and you know that before spending, which is the whole value of the exercise. And ₹45,000 isn't the price of certainty; it's simply the spend these illustrative assumptions imply to reach thirty conversions. Spreading it over one month or two changes how fast that evidence arrives, not how much of it you get.</p>

    <h2>What else moves your number</h2>
    <ul>
      <li><strong>Search demand.</strong> Google can only capture demand that exists. Check query volume before you check your bank balance.</li>
      <li><strong>Geographic scope.</strong> One city is cheaper to saturate and faster to read than all of India.</li>
      <li><strong>Sales-cycle length.</strong> If the cycle is 60 days, a 30-day test measures leads, not customers.</li>
      <li><strong>Campaign type.</strong> Search is easiest to diagnose, because you can see which queries spent the money. Shopping needs a clean feed. Performance Max draws on all Google inventory from one campaign — strong once you have a baseline, awkward while you're still working out what's happening.</li>
      <li><strong>AI Max.</strong> Worth knowing what it isn't: Google describes it as an optimisation layer activated inside existing Search campaigns, not a campaign type. Switching it on enables search term matching plus text customisation and Final URL expansion, each toggleable. On a diagnostic first test, know which are on — they change what your spend reaches.</li>
      <li><strong>Runway.</strong> Three months you can sustain beats one month you can't. A campaign switched off mid-learning gives the worst return there is: full cost, no conclusion.</li>
    </ul>

    <h2>How to tell the budget is too small</h2>
    <p>One division settles it: monthly budget ÷ expected cost per conversion. If the answer is in low single digits, the campaign can't produce a decision inside a month and no amount of skill changes that. Three honest options then — narrow the targeting until cost per conversion drops (tighter keywords, one city, one product, your highest-intent queries), extend the runway so conversions accumulate, or don't start yet. Structuring tightly enough to learn on a small budget is a real discipline, and it's most of what good <a href="/services/paid-media/">paid media management</a> does in month one.</p>

    <h2>What eats the budget, and when to increase it</h2>
    <p>Founders usually assume a disappointing result means the budget was too small. In the accounts we audit, the more common cause is that <a href="/insights/ga4-conversion-tracking/">conversion tracking wasn't reporting correctly</a> — so automated bidding was optimising toward an incomplete signal, or none. Adding budget doesn't fix that; it spends the mistake faster. Run a quick <a href="/insights/audit-your-ad-spend/">ad spend self-audit</a> first; getting the signal right before spend scales is the core of <a href="/services/growth-strategy-measurement/">growth strategy and measurement</a>, and it's cheaper than any month of ads.</p>
    <p>Then increase only when you have a cost per acquisition you trust, measured over a window with enough conversions to be real, sitting inside the ceiling your margin allows. Scaling earlier doesn't accelerate learning — it multiplies whatever is or isn't working, at a higher price. Same logic as an overall <a href="/insights/startup-marketing-budget-india/">startup marketing budget</a>: the measurement has to be right before the number gets bigger.</p>`
  },
  {
    slug: "google-ads-vs-meta-ads-startup",
    section: "Paid Ads",
    readTime: "8 min read",
    date: "2 Jun 2026",
    h1: `Google Ads vs Meta Ads: which should a startup start with?`,
    standfirst: `You have a limited budget and can't run both channels well on day one. Here's the real difference between Google Ads and Meta Ads — capturing demand versus creating it — and a conditional way to decide which one earns your first rupee.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "Google Ads vs Meta Ads: Which Should a Startup Start With? | Tilth",
      "description": "Google Ads vs Meta Ads for startups: capturing existing demand versus creating it, the ten factors that actually decide which to start with, and why splitting a small budget usually fails.",
      "canonical": "https://wearetilth.com/insights/google-ads-vs-meta-ads-startup/",
      "robots": "index, follow",
      "ogTitle": "Google Ads vs Meta Ads: which should a startup start with?",
      "ogDescription": "Capturing demand versus creating it, the factors that decide which platform fits, and why splitting a small budget across both usually fails.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/google-ads-vs-meta-ads-startup.webp",
      "ogLocale": null,
      "twTitle": "Google Ads vs Meta Ads: which should a startup start with?",
      "twDescription": "Capturing demand vs creating it, and how to decide which platform earns your first rupee.",
      "twImage": "https://wearetilth.com/assets/insight-cards/google-ads-vs-meta-ads-startup.webp"
},
    schema: [
      {
            "@context": "https://schema.org",
            "@graph": [
                  {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                              {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://wearetilth.com/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Insights",
                                    "item": "https://wearetilth.com/insights/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Google Ads vs Meta Ads: which should a startup start with?",
                                    "item": "https://wearetilth.com/insights/google-ads-vs-meta-ads-startup/"
                              }
                        ]
                  },
                  {
                        "@type": "BlogPosting",
                        "headline": "Google Ads vs Meta Ads: which should a startup start with?",
                        "description": "Google Ads vs Meta Ads for startups: capturing existing demand versus creating it, the factors that actually decide which to start with, and why splitting a small budget usually fails.",
                        "image": "https://wearetilth.com/assets/insight-cards/google-ads-vs-meta-ads-startup.webp",
                        "datePublished": "2026-06-02",
                        "dateModified": "2026-11-08",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/google-ads-vs-meta-ads-startup/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/google-ads-vs-meta-ads-startup/",
                        "articleSection": "Paid Ads",
                        "keywords": [
                              "Google Ads vs Meta Ads",
                              "Google Ads vs Facebook Ads India",
                              "which ad platform for startup",
                              "Meta Ads vs Google Ads startup",
                              "paid ads for startups India"
                        ],
                        "wordCount": 1360,
                        "author": {
                              "@type": "Person",
                              "name": "Anuja",
                              "jobTitle": "Founder",
                              "url": "https://wearetilth.com/about/"
                        },
                        "publisher": {
                              "@type": "Organization",
                              "name": "Tilth",
                              "url": "https://wearetilth.com/",
                              "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://wearetilth.com/favicon.svg"
                              }
                        }
                  },
                  {
                        "@type": "FAQPage",
                        "mainEntity": [
                              {
                                    "@type": "Question",
                                    "name": "Should a startup start with Google Ads or Meta Ads?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Start with Google Ads if people already search for what you sell and you can prove it with query volume. Start with Meta Ads if the product has to be seen or explained before anyone would know to search for it, and you can produce enough creative to keep testing. Neither platform is better in general. The deciding question is whether the demand already exists, followed by whether you have the creative capacity or the landing-page readiness that each one demands."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Which is cheaper in India, Google Ads or Meta Ads?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Cost-per-click is not a fair comparison between the two, because they are not selling the same thing. A Google click typically comes from someone who described their need in a search box; a Meta click typically comes from someone who was interrupted. Published cost figures for either platform in India age quickly and vary enormously by category, audience and creative, so the only numbers worth planning against are the ones your own account produces. Compare cost per qualified lead or cost per order instead."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Is Meta Ads good for B2B startups?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "It can work for awareness and for re-engaging people who already visited, but a B2B buyer with a defined need and a budget usually searches. For direct lead generation with a short path to a conversation, search tends to be the stronger first channel. Meta becomes more useful once you have enough traffic and conversion data for audience building to mean something."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Can I run Google Ads and Meta Ads at the same time as a startup?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "You can, but a small budget split across two platforms often produces two inconclusive tests instead of one clear answer. Google's own Smart Bidding guidance recommends measuring performance over periods containing at least 30 conversions. If your total budget cannot reach that on one platform, it certainly cannot reach it on two. Prove one channel, then add the second with a budget that can support it."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Do I need different tracking for Google Ads and Meta Ads?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Yes. Each platform has its own conversion measurement - Google Ads conversion tracking on one side, the Meta pixel plus the Conversions API on the other - and they are configured separately. GA4 is a useful independent reference point rather than the thing that feeds either platform. Expect the three sets of numbers to disagree, because they count differently; what matters is that each one is set up correctly and that you know which one you are making decisions with."
                                    }
                              }
                        ]
                  }
            ]
      }
],
    faqHeading: `Google Ads vs Meta Ads for startups — FAQs`,
    faq: [
      { q: `Should a startup start with Google Ads or Meta Ads?`,
        a: `<p>Google if people already search for what you sell and query volume proves it. Meta if the product has to be seen or explained before anyone would know to search, and you can produce enough creative to keep testing. The deciding question is whether the demand already exists — then whether you have the creative capacity or landing-page readiness each one demands.</p>` },
      { q: `Which is cheaper in India, Google Ads or Meta Ads?`,
        a: `<p>Cost-per-click isn't a fair comparison — they aren't selling the same thing. Published cost figures for either platform age quickly and swing wildly by category and creative, so the only numbers worth planning against are your own. Compare cost per qualified lead or per order instead.</p>` },
      { q: `Is Meta Ads good for B2B startups?`,
        a: `<p>It works for awareness and for re-engaging past visitors, but a B2B buyer with a defined need and a budget usually searches. For direct lead generation, search tends to be the stronger first channel. Meta gets more useful once you have enough conversion data for audience building to mean something.</p>` },
      { q: `Can I run both at the same time as a startup?`,
        a: `<p>You can, but a small budget split two ways often produces two inconclusive tests instead of one answer. Google's own guidance recommends measuring over periods with at least 30 conversions — if your budget can't reach that on one platform, it won't on two.</p>` },
      { q: `Do I need different tracking for each platform?`,
        a: `<p>Yes. Google Ads conversion tracking and the Meta pixel plus Conversions API are configured separately, and GA4 is an independent reference rather than the feed for either. Expect the three to disagree; what matters is that each is set up correctly and you know which one you're deciding with.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has 10+ years of hands-on growth experience across 10+ industries, helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Not sure which platform fits your business?`, body: `A Foundation Audit looks at your category, buyer behaviour, and current tracking to recommend a starting channel — and confirms your numbers will be trustworthy once you spend.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>"Should we start with Google or Meta?" comes up in nearly every first conversation we have with a founder. It's a fair question, and the honest answer is that it depends mostly on whether people are already searching for what you sell — and after that, on which platform your business is actually ready to feed. This guide sets out <strong>Google Ads vs Meta Ads for startups</strong> as a conditional decision rather than a verdict, because anyone telling you one of them always comes first is selling you their own skill set.</p>

    <h2>The real distinction: capturing demand vs creating it</h2>
    <p>Google Ads captures <strong>demand that already exists</strong>. Someone describes their problem in a search box — "running shoes for flat feet", "GST software for small business" — and you appear at the moment they're looking. The intent came from them, which is why conversion rates tend to be higher and why you pay more for the privilege of standing in front of it.</p>
    <p>Meta Ads has to <strong>create demand</strong>. Nobody scrolling Instagram was looking for you, so the ad has to earn attention and make a stranger reconsider their afternoon. That's a harder job per impression, which is why creative quality matters far more on Meta than on Search, and why more of its clicks come from people who weren't going to buy today. When <a href="/insights/meta-ads-not-converting/">Meta conversion rates look lower</a> than Google's, that's usually a difference in intent rather than a fault — though tracking should always be the first thing you rule out. Neither platform is better; they're different jobs, and they cost differently because of it.</p>

    <blockquote>Google answers a question someone already asked. Meta has to make them ask it. The budget that works for one is rarely the budget that works for the other.</blockquote>

    <h2>Why the cost comparison people want doesn't exist</h2>
    <p>Founders usually want a table of Indian cost-per-click and cost-per-thousand figures for both platforms. We've removed ours, because it did more harm than good: published averages swing enormously by category, audience, season and creative quality, they date within months, and they invite exactly the wrong comparison. A cheaper Meta click that never converts is more expensive than a costlier Google click that does.</p>
    <p>What you can get is your own forecast instead of someone's average. Google's Keyword Planner gives <strong>Top of page bid (low range)</strong> and <strong>(high range)</strong> — approximations of the 20th and 80th percentile of bids over the last 30 days — plus forecast estimates of clicks, cost and average CPC for a given bid. Meta's campaign setup gives its own delivery estimates before you publish. Both are rough, and both beat a blog's national average. Then compare the number that actually settles it: <a href="/insights/google-ads-budget-india-startups/">cost per qualified lead or per order</a>.</p>

    <h2>Ten questions that actually decide it</h2>
    <p>Work through these honestly. The answers usually point one way before you reach the end.</p>
    <div data-tbl><table data-stack class="price-table">
      <thead>
        <tr><th>Question</th><th>Points to Google</th><th>Points to Meta</th></tr>
      </thead>
      <tbody>
        <tr><td data-th="Question">Does search demand for your category already exist?</td><td data-th="Points to Google">Yes — measurable query volume</td><td data-th="Points to Meta">No — the need isn't searchable yet</td></tr>
        <tr><td data-th="Question">Can a buyer describe what they want in words?</td><td data-th="Points to Google">Yes, in a search box</td><td data-th="Points to Meta">Not really — it has to be shown</td></tr>
        <tr><td data-th="Question">Is the product visual or demonstrable?</td><td data-th="Points to Google">Not especially</td><td data-th="Points to Meta">Strongly — it sells on sight</td></tr>
        <tr><td data-th="Question">How long is the buying cycle?</td><td data-th="Points to Google">Short, or urgent need</td><td data-th="Points to Meta">Longer, needs nurturing</td></tr>
        <tr><td data-th="Question">What's the order or contract value?</td><td data-th="Points to Google">Higher — absorbs a dearer click</td><td data-th="Points to Meta">Lower — needs cheap reach and volume</td></tr>
        <tr><td data-th="Question">Is your conversion tracking already verified?</td><td data-th="Points to Google">Either way — fix this first</td><td data-th="Points to Meta">Either way — fix this first</td></tr>
        <tr><td data-th="Question">Is the landing page ready for cold traffic?</td><td data-th="Points to Google">Needs to answer one query well</td><td data-th="Points to Meta">Needs to explain and persuade from scratch</td></tr>
        <tr><td data-th="Question">Can you produce new creative every few weeks?</td><td data-th="Points to Google">Not essential</td><td data-th="Points to Meta">Essential — creative is the lever</td></tr>
        <tr><td data-th="Question">Do you have traffic and conversion history to build audiences from?</td><td data-th="Points to Google">Helpful, not required</td><td data-th="Points to Meta">Makes a real difference</td></tr>
        <tr><td data-th="Question">Can the budget reach a decision on one platform?</td><td data-th="Points to Google">If no, pick one and narrow it</td><td data-th="Points to Meta">If no, pick one and narrow it</td></tr>
      </tbody>
    </table><p class="price-note">A decision aid, not a scorecard. Two or three strong signals in one column usually settle it.</p></div>

    <h2>The creative capacity question nobody asks early enough</h2>
    <p>This factor decides the outcome more often than any other and almost never gets discussed before launch. On Search, your ad is text against a known query and a campaign can run for weeks on the same assets. On Meta, creative fatigue is the normal state of affairs: performance decays, and new creative is how you recover it. If nobody on your team can produce new concepts every few weeks, Meta will look like a platform problem when it's a production problem. Be honest about that capacity before choosing. Matching channel choice to what a team can actually sustain is most of what sensible <a href="/services/performance-marketing/">performance marketing</a> planning involves.</p>

    <h2>Why splitting a small budget usually fails</h2>
    <p>A mature programme runs both: search to capture demand, Meta to build and re-engage the audiences that create it. But the maths of starting with both is unkind. Google's own Smart Bidding guidance recommends evaluating performance over windows containing at least 30 conversions. If your whole budget can't reach 30 on one platform, halving it guarantees two tests that end in a shrug — and you'll have paid for both. Proving one channel cleanly, then funding the second properly, gets you to a two-channel programme faster than starting there.</p>

    <h2>The tracking prerequisite for either platform</h2>
    <p>Whichever you pick, the platform's own reporting is an interested party, not a source of truth. The two are measured separately: Google Ads has its own conversion tracking, Meta has the pixel plus the Conversions API, and each is configured in its own place. GA4 sits alongside as an independent reference, counting differently again. Expect the three to disagree — that's normal, not in itself a fault — but know which number you're deciding with and be able to explain the gap. Getting that architecture right before spend scales is what <a href="/services/growth-strategy-measurement/">measurement work</a> is for; running the channel well afterwards is <a href="/services/paid-media/">paid media</a>. Before committing budget to either, run a quick <a href="/insights/audit-your-ad-spend/">ad spend self-audit</a>.</p>`
  },
  {
    slug: "marketing-agency-cost-india",
    section: "Hiring",
    readTime: "8 min read",
    date: "23 Jun 2026",
    h1: `How much does a digital marketing agency cost in India?`,
    standfirst: `It's the first question every founder asks and the hardest to get a straight answer to. Here's an honest breakdown of what a digital marketing agency costs in India — the ranges you'll actually be quoted, why no authoritative source for them exists, what separates fee from ad spend, and the questions that make two quotes comparable.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "How Much Does a Digital Marketing Agency Cost in India? (2026 Guide) | Tilth",
      "description": "What a digital marketing agency costs in India: the retainer ranges you'll be quoted, why no authoritative pricing source exists, fee versus ad spend, pricing models, and what really drives the number.",
      "canonical": "https://wearetilth.com/insights/marketing-agency-cost-india/",
      "robots": "index, follow",
      "ogTitle": "How much does a digital marketing agency cost in India? (2026 guide)",
      "ogDescription": "The retainer ranges you'll actually be quoted, why no authoritative source exists, fee versus ad spend, and what really drives the number.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/marketing-agency-cost-india.webp",
      "ogLocale": null,
      "twTitle": "How much does a digital marketing agency cost in India? (2026 guide)",
      "twDescription": "Typical retainers, pricing models, ad spend vs fees, and how to compare two quotes honestly.",
      "twImage": "https://wearetilth.com/assets/insight-cards/marketing-agency-cost-india.webp"
},
    schema: [
      {
            "@context": "https://schema.org",
            "@graph": [
                  {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                              {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://wearetilth.com/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Insights",
                                    "item": "https://wearetilth.com/insights/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "How much does a digital marketing agency cost in India?",
                                    "item": "https://wearetilth.com/insights/marketing-agency-cost-india/"
                              }
                        ]
                  },
                  {
                        "@type": "BlogPosting",
                        "headline": "How much does a digital marketing agency cost in India? (2026 guide)",
                        "description": "What a digital marketing agency costs in India: the retainer ranges you will be quoted, why no authoritative pricing source exists, fee versus ad spend, pricing models, and what really drives the number.",
                        "image": "https://wearetilth.com/assets/insight-cards/marketing-agency-cost-india.webp",
                        "datePublished": "2026-06-23",
                        "dateModified": "2026-11-08",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/marketing-agency-cost-india/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/marketing-agency-cost-india/",
                        "articleSection": "Hiring",
                        "keywords": [
                              "digital marketing agency cost in India",
                              "marketing agency pricing India",
                              "how much does a marketing agency cost",
                              "SEO cost India",
                              "PPC management cost India"
                        ],
                        "wordCount": 1670,
                        "author": {
                              "@type": "Person",
                              "name": "Anuja",
                              "jobTitle": "Founder",
                              "url": "https://wearetilth.com/about/"
                        },
                        "publisher": {
                              "@type": "Organization",
                              "name": "Tilth",
                              "url": "https://wearetilth.com/",
                              "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://wearetilth.com/favicon.svg"
                              }
                        }
                  },
                  {
                        "@type": "FAQPage",
                        "mainEntity": [
                              {
                                    "@type": "Question",
                                    "name": "How much does a digital marketing agency cost in India per month?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Published figures cluster around a monthly retainer of roughly Rs 25,000 to Rs 2,50,000, with small businesses and early-stage startups usually quoted at the lower end and multi-channel programmes well above it. Treat that as the range you are likely to be quoted rather than an established fact: there is no independent survey of Indian agency pricing, and almost every public figure is published by an agency with an interest in where the number sits. The fee is normally separate from the ad spend you pay to platforms."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Is ad spend included in the marketing agency fee?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Usually no. Most agencies charge a management fee or retainer for strategy and execution, and you pay the ad budget directly to Google, Meta or other platforms on top. Always confirm whether a quoted price includes media spend, and whether tools, creative production and landing pages are inside or outside the fee. That single question removes most budget surprises."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Why do marketing agency prices vary so much in India?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Because the word agency covers wildly different amounts of work. Price moves with the number of channels, how much creative is produced each month, whether tracking and analytics work is included, whether landing pages and conversion work are in scope, the geographies targeted, reporting depth, how much senior strategy time you actually get, and the size of the media budget being managed. A low-cost package and a six-figure retainer are usually buying different things, not the same thing at different prices."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Is a cheaper marketing agency a good idea?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Sometimes, if the scope genuinely matches what you need. The risk is not the price itself but what gets quietly left out at that price - usually the unglamorous foundation work of tracking, attribution and targeting. You then pay less per month and lose more of your ad spend to decisions made on numbers you cannot trust. Compare what is included, not the headline figure."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How much should a small business or startup budget for marketing in India?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Work from what the business can sustain for several months rather than a published range, split it explicitly into agency fee and media budget, and make sure both can run long enough to evaluate the objective you actually agreed. Where that objective is bidding performance, Google's 30-conversion guidance (50 for Target ROAS) is one useful signal. For low-volume or long-cycle businesses, whether those conversions became qualified pipeline and revenue usually matters more than reaching any particular count."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How much does Tilth charge?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "The first conversation is free, so pricing reflects what actually needs fixing rather than a one-size package. If the problem needs deeper diagnosis, we scope a paid Foundation Audit around it. A typical audit takes one to two weeks, depending on scope."
                                    }
                              }
                        ]
                  }
            ]
      }
],
    faqHeading: `Marketing agency cost in India — FAQs`,
    faq: [
      { q: `How much does a digital marketing agency cost in India per month?`,
        a: `<p>Published figures cluster around ₹25,000–₹2,50,000 a month, with small businesses quoted at the lower end and multi-channel programmes above it. Treat that as the range you're likely to be <em>quoted</em>, not an established fact — there's no independent survey of Indian agency pricing, and nearly every public figure is published by an agency. The fee is normally separate from ad spend.</p>` },
      { q: `Is ad spend included in the agency fee?`,
        a: `<p>Usually no. You pay a management fee or retainer for strategy and execution, and the ad budget goes directly to Google, Meta or other platforms on top. Always confirm whether a quote includes media spend — and whether tools, creative production and landing pages sit inside or outside the fee.</p>` },
      { q: `Why do agency prices vary so much?`,
        a: `<p>Because "agency" covers wildly different amounts of work. Price moves with channel count, monthly creative volume, whether tracking and analytics are included, whether landing pages and CRO are in scope, geography, reporting depth, how much senior time you actually get, and the media budget being managed.</p>` },
      { q: `Is a cheaper agency a good idea?`,
        a: `<p>Sometimes, if the scope genuinely matches what you need. The risk isn't the price but what gets quietly left out at that price — usually the unglamorous foundation work. You pay less monthly and lose more ad spend to decisions made on numbers you can't trust.</p>` },
      { q: `How much should a small business or startup budget?`,
        a: `<p>Work from what you can sustain for several months, split explicitly into fee and media budget, and make sure both can run long enough to evaluate the objective you actually agreed. Where that objective is bidding performance, Google's 30-conversion guidance (50 for Target ROAS) is one useful signal. For low-volume or long-cycle businesses, whether those conversions became qualified pipeline and revenue usually matters more than reaching any particular count.</p>` },
      { q: `How much does Tilth charge?`,
        a: `<p>The first conversation is free, so pricing reflects what actually needs fixing — not a one-size package. If the problem needs deeper diagnosis, we’ll scope a paid <a href="/contact/">Foundation Audit</a> around it. A typical audit takes 1–2 weeks, depending on scope.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has 10+ years of hands-on growth experience across 10+ industries, helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Find out what you actually need to spend`, body: `A Foundation Audit shows you what's working, what's leaking, and what's worth paying to fix first — so you scope an agency around reality, not a guess. No pitch attached.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>Ask five agencies what they charge and you'll get five wildly different numbers — ₹15,000 here, ₹2,00,000 there — for what sounds like the same thing. The confusion is real and it's expensive: brands either overpay for a thin retainer or underpay for a package that quietly does very little. This guide sets out what a <strong>digital marketing agency costs in India</strong>, where those numbers come from, and how to make two quotes actually comparable.</p>

    <h2>First, an honest note about the numbers</h2>
    <p>There is no authoritative source for Indian agency pricing. No industry body publishes a rate survey. Every figure you'll find — including the range below — comes from agencies publishing their own guides, each with a commercial interest in where the number sits. Checking current published sources for this update, they disagreed substantially: retainer floors quoted anywhere from ₹5,000 to ₹25,000, ceilings from ₹2,50,000 to several lakh. So treat any range, ours included, as <strong>what you're likely to be quoted</strong> rather than what things cost. The structural part of this guide — what drives the price, and what to ask — is far more durable than the figures.</p>

    <h2>The range you'll actually be quoted</h2>
    <p>With that caveat in place: across current published Indian sources, monthly retainers cluster roughly between <strong>₹25,000 and ₹2,50,000</strong>, broadly as follows.</p>

    <div data-tbl><table class="price-table">
      <thead>
        <tr><th>Type of engagement</th><th>Commonly quoted monthly fee</th></tr>
      </thead>
      <tbody>
        <tr><td data-th="Type of engagement">Freelancer / solo specialist</td><td data-th="Commonly quoted monthly fee">₹15,000 – ₹50,000</td></tr>
        <tr><td data-th="Type of engagement">Small business / early-stage startup</td><td data-th="Commonly quoted monthly fee">₹25,000 – ₹75,000</td></tr>
        <tr><td data-th="Type of engagement">Growing brand, multi-channel</td><td data-th="Commonly quoted monthly fee">₹75,000 – ₹1,50,000</td></tr>
        <tr><td data-th="Type of engagement">Established brand, full programme</td><td data-th="Commonly quoted monthly fee">₹1,50,000 – ₹2,50,000+</td></tr>
      </tbody>
    </table><p class="price-note">Agency fees only, drawn from current published market sources — market observation, not established fact, and not a Tilth price list. Outliers in both directions are common.</p></div>

    <p>These are <em>agency fees</em> — the cost of strategy and execution. They almost never include the money you spend on ads, which is where most budgets actually blow up.</p>

    <h2>Agency fee vs ad spend — the part everyone confuses</h2>
    <p>Digital marketing pricing in India is really two numbers stacked together:</p>
    <ul>
      <li><strong>The agency fee (or retainer):</strong> what you pay the agency to plan, build and run the work.</li>
      <li><strong>The ad spend (media budget):</strong> what you pay directly to Google, Meta and other platforms to show your ads.</li>
    </ul>
    <p>When an agency quotes "₹40,000 a month," ask the next question immediately: <em>does that include ad spend?</em> Almost always it doesn't — and the media budget is yours to lose if the measurement underneath it is wrong. Ask the same about tools, creative production and landing pages.</p>

    <blockquote>The fee is what you pay to run the engine. The ad spend is the fuel. Confusing the two is how budgets quietly double.</blockquote>

    <h2>The four pricing models</h2>
    <ul>
      <li><strong>Monthly retainer.</strong> A fixed fee for an agreed scope — most common, easiest to budget for. The risk is scope drift, so the scope document matters more than the number.</li>
      <li><strong>Project-based.</strong> A one-off fee for a defined deliverable: a website, a campaign build, an audit. Good for bounded needs, and for testing a relationship before committing to a retainer.</li>
      <li><strong>Percentage of media spend.</strong> Published bands in India commonly fall somewhere between roughly 10% and 20%, usually lower as spend rises and almost always with a minimum fee underneath — though sources disagree enough that you should treat the percentage as negotiable, not standard. The structural caution: it pays more when you spend more, which is a weak incentive at exactly the moment you want someone arguing for restraint.</li>
      <li><strong>Performance-linked or hybrid.</strong> A lower base plus a share of results. Attractive in principle, and only as honest as the tracking that measures the result — so the measurement needs to be independent of whoever gets paid on it. Agree the data source before the percentage.</li>
    </ul>

    <h2>What actually moves the price</h2>
    <p>Two quotes can differ by ten times for entirely legitimate reasons. Roughly in order of impact:</p>
    <ul>
      <li><strong>Number of channels.</strong> One channel done properly costs far less than an integrated programme — and is often the better early buy.</li>
      <li><strong>Creative volume.</strong> The most underestimated line. A few static assets a month and a continuous video testing cadence are different businesses.</li>
      <li><strong>Tracking and analytics work.</strong> Real engineering effort. Missing from the quote usually means missing from the work.</li>
      <li><strong>Landing pages and CRO.</strong> Whether anyone is allowed to change the page the traffic lands on, and whether building and testing it is in scope.</li>
      <li><strong>Geography.</strong> One city, pan-India, or India plus an international market in parallel.</li>
      <li><strong>Reporting complexity.</strong> A monthly summary costs less than dashboards, cohort views and a board pack.</li>
      <li><strong>Seniority and strategy time.</strong> Whether the people who pitched do the work — more often the gap between two identical-looking retainers than anything else.</li>
      <li><strong>Media spend under management.</strong> Bigger budgets mean more governance: often a lower percentage, a higher absolute fee.</li>
      <li><strong>Lifecycle and CRM scope.</strong> Email, WhatsApp and retention are a separate discipline; in or out changes the number materially.</li>
    </ul>
    <p>Most of these are scope questions, not quality questions — which is the useful insight. You can't tell whether a price is fair until you know which of the nine it covers. The full span of what might be in scope is laid out across our <a href="/services/">growth marketing services</a>, and that's a fair checklist to take into any agency conversation, including ones that aren't with us.</p>

    <h2>How to make two quotes comparable</h2>
    <p>Most founders compare the monthly figure and nothing else, which is how a cheap retainer wins and then disappoints. Five questions do most of the work:</p>
    <ol>
      <li><strong>What's inside the fee and what's billed separately?</strong> Media, tools, creative, landing pages, tracking.</li>
      <li><strong>Who does the work, and how much of their month do I get?</strong> Named people and rough hours, not titles.</li>
      <li><strong>What happens in month one?</strong> A credible answer audits and fixes measurement before scaling spend. "We'll launch campaigns in week one" is a warning, not a feature.</li>
      <li><strong>What are we measuring, and in whose system?</strong> If the agency's dashboard is the only scoreboard, you don't have one.</li>
      <li><strong>What's the exit?</strong> Notice period, and who owns the accounts, pixels, tags and creative files afterwards. In writing.</li>
    </ol>
    <p>We've written separately on <a href="/insights/questions-before-hiring-marketing-agency/">the questions worth asking before you hire</a> and on <a href="/insights/agency-vs-freelancer-vs-inhouse/">choosing between an agency, a freelancer and an in-house hire</a> — often the real decision hiding behind a pricing question.</p>

    <h2>Why the cheapest option is often the most expensive</h2>
    <p>A very cheap retainer isn't automatically bad; it's automatically narrow. Something was left out to reach that price, and in our experience it's rarely the visible work — the posts, the campaign launches — and almost always the invisible work: tracking, attribution, targeting discipline. You save on the fee and lose a multiple of it on media spent against numbers nobody verified. When founders tell me their marketing "isn't working", the retainer size is rarely the cause; it's that <a href="/insights/ga4-conversion-tracking/">the numbers underneath were never right</a>. Which is why <a href="/services/performance-marketing/">performance marketing</a> that can't show you its own measurement isn't performance marketing.</p>

    <h2>How to budget if you're just starting</h2>
    <p>Rather than anchoring on a published range, work from two things you control. What can the business sustain for several months without flinching — because a relationship cancelled in month two costs the full fee and produces no conclusion. And can the fee and the media budget both run long enough to evaluate whatever you actually agreed to measure? Where that's bidding performance, Google's 30-conversion guidance is one reference point; if you sell few, large deals, whether those conversions became qualified pipeline will tell you more than the count. Either way, if the plan can't fund a fair evaluation of its own objective, the retainer size is the wrong thing to be negotiating. Then, before committing to anyone, get an independent read on whether your tracking and targeting are sound — which is exactly what a <a href="/insights/marketing-foundation-audit/">foundation audit</a> is for.</p>`
  },
  {
    slug: "marketing-agency-for-d2c-brands",
    section: "Hiring",
    readTime: "8 min read",
    date: "27 Jun 2026",
    h1: `How to choose a marketing agency for your D2C brand in India`,
    standfirst: `D2C marketing fails differently from B2B — and most agencies pitch the same generic deck either way. Here's what actually matters when choosing a marketing agency for a D2C brand in India: what to look for, the questions to ask, and the red flags that should make you walk.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "How to Choose a Marketing Agency for Your D2C Brand in India | Tilth",
      "description": "How to choose a marketing agency for a D2C brand in India — what to look for, the questions that matter, and the red flags to avoid. A founder's honest buyer's guide.",
      "canonical": "https://wearetilth.com/insights/marketing-agency-for-d2c-brands/",
      "robots": "index, follow",
      "ogTitle": "How to choose a marketing agency for your D2C brand in India",
      "ogDescription": "What to look for, the questions that matter, and the red flags to avoid — a founder's honest buyer's guide for D2C brands.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/marketing-agency-for-d2c-brands.webp",
      "ogLocale": null,
      "twTitle": "How to choose a marketing agency for your D2C brand in India",
      "twDescription": "What to look for, the questions that matter, and the red flags to avoid.",
      "twImage": "https://wearetilth.com/assets/insight-cards/marketing-agency-for-d2c-brands.webp"
},
    schema: [
      {
            "@context": "https://schema.org",
            "@graph": [
                  {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                              {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://wearetilth.com/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Insights",
                                    "item": "https://wearetilth.com/insights/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "How to choose a marketing agency for your D2C brand in India",
                                    "item": "https://wearetilth.com/insights/marketing-agency-for-d2c-brands/"
                              }
                        ]
                  },
                  {
                        "@type": "BlogPosting",
                        "headline": "How to choose a marketing agency for your D2C brand in India",
                        "description": "What to look for when choosing a marketing agency for a D2C brand in India — D2C experience, full-funnel and retention focus, honest tracking, transparent reporting, and the red flags to avoid.",
                        "image": "https://wearetilth.com/assets/insight-cards/marketing-agency-for-d2c-brands.webp",
                        "datePublished": "2026-06-27",
                        "dateModified": "2026-06-27",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/marketing-agency-for-d2c-brands/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/marketing-agency-for-d2c-brands/",
                        "articleSection": "Hiring",
                        "keywords": [
                              "marketing agency for D2C brands",
                              "D2C marketing agency India",
                              "how to choose a marketing agency",
                              "ecommerce marketing agency India",
                              "D2C brand marketing"
                        ],
                        "wordCount": 1500,
                        "author": {
                              "@type": "Person",
                              "name": "Anuja",
                              "jobTitle": "Founder",
                              "url": "https://wearetilth.com/about/"
                        },
                        "publisher": {
                              "@type": "Organization",
                              "name": "Tilth",
                              "url": "https://wearetilth.com/",
                              "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://wearetilth.com/favicon.svg"
                              }
                        }
                  },
                  {
                        "@type": "FAQPage",
                        "mainEntity": [
                              {
                                    "@type": "Question",
                                    "name": "How do I choose a marketing agency for my D2C brand?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Look for genuine D2C experience with similar brands, a full-funnel approach that values retention and repeat purchases (not just acquisition), honest tracking and attribution, reporting tied to revenue and contribution margin rather than vanity metrics, and clear answers on who runs your account and how spend maps to results. Start by auditing whether your own measurement is sound, so you can judge any agency's claims against reality."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How much should a D2C marketing agency cost in India?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Most D2C marketing retainers in India fall between roughly ₹25,000 and ₹2,50,000 per month for agency fees, separate from the ad spend paid to platforms. The right number depends on how many channels you run and how competitive your category is. Scope it after an audit so you pay for what actually needs fixing."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Should a D2C brand hire a specialist or a full-service agency?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Early on, a specialist (or a small full-funnel agency) is usually enough — paid acquisition plus retention. As you scale across paid, SEO, email, and influencer, an integrated agency or a hybrid setup with an in-house lead becomes more efficient. The deciding factor is breadth of need, not agency size."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "What's the most important thing to check before hiring a D2C agency?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "That your conversion tracking and attribution are accurate. For a D2C brand, every scaling decision rides on whether the reported ROAS and customer acquisition cost are real. If the measurement is broken, even a great agency is optimising toward the wrong numbers."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Does Tilth work with D2C brands?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Yes. Tilth is a foundation-first marketing agency in Bengaluru that works with D2C brands and startups in India and the US. Every engagement starts with a Foundation Audit of tracking, attribution, targeting, and partnerships before any spend is scaled."
                                    }
                              }
                        ]
                  }
            ]
      }
],
    faqHeading: `Choosing a D2C marketing agency — FAQs`,
    faq: [
      { q: `How do I choose a marketing agency for my D2C brand?`,
        a: `<p>Look for genuine D2C experience with similar brands, a full-funnel approach that values retention (not just acquisition), honest tracking and attribution, reporting tied to revenue and margin, and clear answers on who runs your account. Audit your own measurement first so you can judge their claims against reality.</p>` },
      { q: `How much should a D2C marketing agency cost in India?`,
        a: `<p>Most retainers fall between roughly ₹25,000 and ₹2,50,000 per month in agency fees, separate from ad spend. It depends on channels and category — <a href="/insights/marketing-agency-cost-india/">more on pricing here</a>.</p>` },
      { q: `Should a D2C brand hire a specialist or a full-service agency?`,
        a: `<p>Early on, a specialist or small full-funnel agency is usually enough. As you scale across paid, SEO, email, and influencer, an integrated agency or a hybrid setup becomes more efficient. Breadth of need decides it, not agency size.</p>` },
      { q: `What's the most important thing to check before hiring?`,
        a: `<p>That your conversion tracking and attribution are accurate. Every D2C scaling decision rides on whether your reported ROAS and CAC are real — broken measurement means even a great agency optimises toward the wrong numbers.</p>` },
      { q: `Does Tilth work with D2C brands?`,
        a: `<p>Yes — <a href="/marketing-agency-bengaluru/">Tilth</a> is a foundation-first agency in Bengaluru working with D2C brands and startups in India and the US. Every engagement starts with a free conversation.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has 10+ years of hands-on growth experience across 10+ industries — building and auditing the marketing engines behind consumer brands. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Choosing a D2C agency? Start with the truth.`, body: `A Foundation Audit gives you an honest read on your tracking, attribution, and channel performance — so you can hire (us or anyone) for the real gap, not a guessed one. No pitch attached.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>For a direct-to-consumer brand, marketing isn't a support function — it <em>is</em> the business. You live and die by customer acquisition cost, repeat purchase rate, and contribution margin. So choosing the wrong <strong>marketing agency for your D2C brand</strong> doesn't just waste a retainer; it quietly burns the ad budget that is your growth. After a decade across D2C and other categories, here's the buyer's guide I'd give a founder choosing one in India.</p>

    <h2>1. Real D2C experience — with brands like yours</h2>
    <p>D2C has its own physics: thin margins, returns, repeat-purchase economics, marketplace vs. own-site dynamics, and CAC that has to stay below lifetime value. An agency that's only run lead-gen for B2B or services will apply the wrong playbook. Ask for case studies from <strong>D2C brands in a similar category and stage</strong> — and ask what didn't work, not just the highlight reel.</p>

    <h2>2. Full-funnel, not just acquisition</h2>
    <p>Plenty of agencies are good at spending money to get a first order. Far fewer build the second, third, and tenth. For D2C, retention is where the margin lives — repeat buyers cost far less than new ones. A good agency talks about email/SMS flows, post-purchase journeys, and repeat-rate as fluently as it talks about ad creative. If the entire pitch is "we'll lower your CAC," that's half a strategy.</p>

    <h2>3. Honest tracking and attribution — the part that decides everything</h2>
    <p>This is the one most founders skip and most agencies gloss over. For a D2C brand, every scaling decision rides on whether your reported ROAS and CAC are real. Post-iOS and with ad blockers, browser-only tracking quietly loses a big share of conversions, and platform-reported numbers rarely reconcile with your Shopify backend. Before you hand anyone a budget, make sure your <a href="/insights/ga4-conversion-tracking/">conversion tracking</a> is accurate — a good agency insists on fixing this first.</p>

    <blockquote>For a D2C brand, the agency's media skill matters less than whether the numbers it's optimising toward are true.</blockquote>

    <h2>4. Reporting tied to revenue, not vanity metrics</h2>
    <p>You should get regular, plain reports that connect spend to <strong>revenue and contribution margin</strong> — not impressions, reach, or ROAS in isolation. Ask what they'll report and how often. If the sample dashboard is a wall of engagement metrics, you'll spend your retainer feeling busy and learning nothing about profit.</p>

    <h2>5. A retention and CRO mindset, not just a traffic mindset</h2>
    <p>The best D2C agencies obsess over what happens <em>after</em> the click: conversion-rate optimisation on the product and checkout pages, flagging at-risk customers before they churn, and triggered campaigns based on purchase gaps. Sending more traffic to a leaky store is the most common — and most expensive — way to "scale." Fix the store, then pour in the traffic.</p>

    <h2>6. The right channel mix — chosen for your customer</h2>
    <p>D2C in India spans Meta and Google, but also marketplaces, quick-commerce, influencer, and increasingly regional-language targeting. The agency's channel recommendation should come from <em>your</em> customer and unit economics, not from what they sell most of. One honest "we wouldn't run that channel for you yet" is worth more than a six-channel proposal.</p>

    <h2>Red flags to walk away from</h2>
    <ul>
      <li><strong>Guaranteed ROAS or revenue</strong> — nobody can promise that honestly.</li>
      <li><strong>No interest in your tracking</strong> — they'll scale on broken data.</li>
      <li><strong>Only acquisition, no retention</strong> — half a D2C strategy.</li>
      <li><strong>Vanity-metric reporting</strong> — busy dashboards, no link to profit.</li>
      <li><strong>One generic deck</strong> that could belong to any client.</li>
    </ul>
    <p>For a deeper list, see our guide to the <a href="/insights/questions-before-hiring-marketing-agency/">questions to ask before hiring a marketing agency</a> — and our breakdown of <a href="/insights/marketing-agency-cost-india/">what a marketing agency costs in India</a> so you can judge the price too.</p>

    <h2>The shortcut: know your own numbers first</h2>
    <p>Here's the move that makes choosing an agency easy: <strong>get an independent, honest read on your own setup before you start interviewing.</strong> Once you know whether your tracking is sound, which channels are actually profitable, and where the leaks are, you can judge every agency's pitch against reality instead of taking it on faith. That's exactly what a <a href="/insights/marketing-foundation-audit/">foundation audit</a> gives you.</p>`
  },
  {
    slug: "marketing-attribution-explained-simply",
    section: "Attribution",
    readTime: "7 min read",
    date: "18 May 2026",
    h1: `Marketing attribution for small businesses, explained simply`,
    standfirst: `"Attribution" sounds like a word built to confuse founders into hiring someone. It's actually a simple idea: which marketing touchpoint gets the credit when a customer interacted with several before buying? Here's what that means in plain English, and which model actually makes sense for a small business.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "Marketing Attribution for Small Businesses, Explained Simply | Tilth",
      "description": "What marketing attribution actually means, the common models explained without jargon, a worked example, and which model a small business should actually use.",
      "canonical": "https://wearetilth.com/insights/marketing-attribution-explained-simply/",
      "robots": "index, follow",
      "ogTitle": "Marketing attribution for small businesses, explained simply",
      "ogDescription": "The common attribution models explained without jargon, a worked example, and which model a small business should actually use.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/marketing-attribution-explained-simply.webp",
      "ogLocale": null,
      "twTitle": "Marketing attribution for small businesses, explained simply",
      "twDescription": "What attribution actually means, without the jargon — plus a worked example.",
      "twImage": "https://wearetilth.com/assets/insight-cards/marketing-attribution-explained-simply.webp"
},
    schema: [
      {
            "@context": "https://schema.org",
            "@graph": [
                  {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                              {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://wearetilth.com/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Insights",
                                    "item": "https://wearetilth.com/insights/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Marketing attribution for small businesses, explained simply",
                                    "item": "https://wearetilth.com/insights/marketing-attribution-explained-simply/"
                              }
                        ]
                  },
                  {
                        "@type": "BlogPosting",
                        "headline": "Marketing attribution for small businesses, explained simply",
                        "description": "What marketing attribution actually means, the common models explained without jargon, a worked example, and which model a small business should actually use.",
                        "image": "https://wearetilth.com/assets/insight-cards/marketing-attribution-explained-simply.webp",
                        "datePublished": "2026-05-18",
                        "dateModified": "2026-05-18",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/marketing-attribution-explained-simply/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/marketing-attribution-explained-simply/",
                        "articleSection": "Attribution",
                        "keywords": [
                              "marketing attribution explained",
                              "attribution model small business",
                              "what is marketing attribution",
                              "last-click vs data-driven attribution",
                              "GA4 attribution"
                        ],
                        "wordCount": 1450,
                        "author": {
                              "@type": "Person",
                              "name": "Anuja",
                              "jobTitle": "Founder",
                              "url": "https://wearetilth.com/about/"
                        },
                        "publisher": {
                              "@type": "Organization",
                              "name": "Tilth",
                              "url": "https://wearetilth.com/",
                              "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://wearetilth.com/favicon.svg"
                              }
                        }
                  },
                  {
                        "@type": "FAQPage",
                        "mainEntity": [
                              {
                                    "@type": "Question",
                                    "name": "What is marketing attribution in simple terms?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Marketing attribution is the method used to decide which marketing touchpoint gets credit for a sale, when a customer interacted with several before buying. It matters because the model you use changes which channels look like they're working — the same customer journey can make Google Ads look great under one model and mediocre under another."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "What attribution model does GA4 use by default?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "GA4 uses data-driven attribution by default, which distributes credit across multiple touchpoints based on patterns in your actual conversion data, rather than giving 100% credit to just the first or last interaction. It's a reasonable default for most small businesses, provided the underlying event tracking is accurate."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Is last-click attribution bad for small businesses?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Not inherently, but it systematically undercounts channels that introduce customers earlier in their journey, like content, social, or influencer marketing, and overcredits channels that tend to close the sale, like branded search or retargeting. It's simple to understand but can lead to cutting channels that were actually contributing."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Do I need multi-touch attribution as a small business?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Not necessarily a complex custom model — GA4's built-in data-driven attribution already accounts for multiple touchpoints for most small businesses. The bigger priority is usually getting basic tracking accurate first, since no attribution model fixes data that isn't being captured correctly."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Why does my attribution data look wrong?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "The most common cause isn't the attribution model — it's incomplete or broken conversion tracking feeding it bad data. Verifying GA4 events fire correctly across channels is a necessary first step before questioning which attribution model to use."
                                    }
                              }
                        ]
                  }
            ]
      }
],
    faqHeading: `Marketing attribution — FAQs`,
    faq: [
      { q: `What is marketing attribution in simple terms?`,
        a: `<p>The method used to decide which marketing touchpoint gets credit for a sale when a customer interacted with several before buying. The model you use changes which channels look like they're working.</p>` },
      { q: `What attribution model does GA4 use by default?`,
        a: `<p>Data-driven attribution, which distributes credit across multiple touchpoints based on patterns in your actual conversion data rather than crediting only the first or last interaction.</p>` },
      { q: `Is last-click attribution bad for small businesses?`,
        a: `<p>Not inherently, but it undercounts channels that introduce customers earlier, like content or influencer marketing, and overcredits channels that close the sale, like branded search or retargeting.</p>` },
      { q: `Do I need multi-touch attribution as a small business?`,
        a: `<p>Not a complex custom model — GA4's built-in data-driven attribution already accounts for multiple touchpoints. Getting basic tracking accurate first matters more than the model choice.</p>` },
      { q: `Why does my attribution data look wrong?`,
        a: `<p>Usually it's incomplete or broken conversion tracking feeding it bad data, not the attribution model itself. Verify GA4 events fire correctly across channels first.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has 10+ years of hands-on growth experience across 10+ industries, helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Get an honest read on what's actually driving sales`, body: `A Foundation Audit checks whether your tracking captures every channel correctly, so your attribution data reflects reality — not just whichever channel happens to close the sale.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>Ask ten founders what "marketing attribution" means and most will give a vague answer involving dashboards and jargon. The actual idea is simple: a customer rarely buys from the very first ad they see. They might see an Instagram post, search your brand name a week later, click a Google ad, and finally buy after an email reminder. <strong>Marketing attribution</strong> is just the method for deciding which of those touchpoints gets credit for the sale — and that choice changes which channels look like they're working.</p>

    <h2>What "attribution" actually means, in plain English</h2>
    <p>Attribution answers one question: when a sale happens after several marketing touches, how much credit does each one get? It's not a measurement of reality so much as a rule you apply to messy reality, because there's no perfect way to know exactly how much each touchpoint mattered to the customer's decision. Different rules — different attribution models — will hand credit to different channels for the exact same sequence of events.</p>

    <h2>Why attribution matters for a small business specifically</h2>
    <p>Budget decisions get made based on which channels "look like" they're working. If your attribution model quietly overcredits one channel and undercredits another, you can end up cutting a channel that was actually contributing, and doubling down on one that was just getting lucky with the last click. For a small business with a tight budget, that misallocation costs more relatively than it does for a company that can afford to run every channel regardless.</p>

    <h2>The common attribution models, explained without jargon</h2>
    <h3>Last-click attribution</h3>
    <p>100% of the credit goes to whatever the customer clicked right before buying. Simple to understand, but it systematically favours channels that close a sale — like branded search or retargeting — over channels that introduced the customer earlier, like a blog post or an influencer mention.</p>
    <h3>First-click attribution</h3>
    <p>100% of the credit goes to the very first touchpoint that brought the customer into your world. Useful for understanding what generates awareness, but it ignores everything that happened between discovery and the actual purchase.</p>
    <h3>Linear / multi-touch attribution</h3>
    <p>Credit is split evenly across every touchpoint in the journey. Fairer in principle than picking one winner, but it treats a passing glance at an ad the same as a deliberate return visit, which isn't quite right either.</p>
    <h3>Data-driven attribution</h3>
    <p>This is what GA4 uses by default. Instead of a fixed rule, it looks at patterns across your actual conversion data to estimate how much each touchpoint really contributed, based on what tends to precede a sale versus what doesn't. It's the most realistic of the common models, provided the underlying data feeding it is accurate.</p>

    <blockquote>Attribution doesn't tell you the truth. It tells you a story, consistently, according to a rule. The question is whether that rule is honest about how your customers actually buy.</blockquote>

    <h2>A simple example: one customer, three touchpoints</h2>
    <p>A customer sees an Instagram ad on Monday, searches your brand name and visits your site on Wednesday without buying, then clicks a Google remarketing ad on Friday and purchases. Under last-click, Google remarketing gets 100% of the credit. Under first-click, Instagram gets 100%. Under data-driven attribution, credit is split across all three based on how similar journeys tend to convert — probably giving Instagram meaningful credit for starting things, even though it never got the final click.</p>

    <h2>Which model should a small business actually use?</h2>
    <p>For most small businesses, GA4's default data-driven attribution is a sensible starting point — it's built in, requires no extra setup, and avoids the most obvious distortions of pure last-click or first-click. The bigger lever isn't picking a fancier model; it's making sure every channel's events are <a href="/insights/ga4-conversion-tracking/">tracked correctly</a> in the first place. A sophisticated attribution model applied to incomplete data is still wrong — just wrong in a more convincing way.</p>

    <h2>The prerequisite nobody mentions: tracking has to work first</h2>
    <p>Attribution can only distribute credit among the touchpoints it actually sees. If your Meta Pixel is missing events, or your GA4 purchase tracking undercounts, no attribution model — however sophisticated — can correct for data that was never captured. This is why every attribution conversation eventually leads back to the same starting point as a basic <a href="/insights/audit-your-ad-spend/">ad spend audit</a>: confirm what's actually being measured before debating how credit should be split.</p>`
  },
  {
    slug: "marketing-foundation-audit",
    section: "Foundations",
    readTime: "7 min read",
    date: "22 Jun 2026",
    h1: `What a marketing foundation audit actually checks`,
    standfirst: `Most marketing budgets are scaled on numbers nobody has checked. A marketing foundation audit looks under the spend — at the tracking, attribution, targeting, and partnerships — and tells you honestly what's broken before you put more money behind it. Here's exactly what a marketing audit reviews, and why it comes first.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "What a Marketing Foundation Audit Checks (and Why It's First) | Tilth",
      "description": "A marketing foundation audit checks the tracking, attribution, targeting, and partnerships under your spend — before you scale. Here's exactly what a marketing audit reviews and why it comes first.",
      "canonical": "https://wearetilth.com/insights/marketing-foundation-audit/",
      "robots": "index, follow",
      "ogTitle": "What a marketing foundation audit actually checks",
      "ogDescription": "The tracking, attribution, targeting, and partnerships a real marketing audit reviews — and why it comes before you spend more.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/marketing-foundation-audit.webp",
      "ogLocale": null,
      "twTitle": "What a marketing foundation audit actually checks",
      "twDescription": "What a real marketing audit reviews — tracking, attribution, targeting, partnerships — and why it's first.",
      "twImage": "https://wearetilth.com/assets/insight-cards/marketing-foundation-audit.webp"
},
    schema: [
      {
            "@context": "https://schema.org",
            "@graph": [
                  {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                              {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://wearetilth.com/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Insights",
                                    "item": "https://wearetilth.com/insights/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "What a marketing foundation audit checks",
                                    "item": "https://wearetilth.com/insights/marketing-foundation-audit/"
                              }
                        ]
                  },
                  {
                        "@type": "BlogPosting",
                        "headline": "What a marketing foundation audit actually checks (and why it comes first)",
                        "description": "A marketing foundation audit reviews the tracking, attribution, targeting, channels, and partnerships under your spend before you scale. Here is exactly what a marketing audit checks.",
                        "image": "https://wearetilth.com/assets/insight-cards/marketing-foundation-audit.webp",
                        "datePublished": "2026-06-22",
                        "dateModified": "2026-06-22",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/marketing-foundation-audit/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/marketing-foundation-audit/",
                        "articleSection": "Foundations",
                        "keywords": [
                              "marketing foundation audit",
                              "marketing audit",
                              "marketing audit cost",
                              "marketing audit checklist",
                              "what does a marketing audit check"
                        ],
                        "wordCount": 1500,
                        "author": {
                              "@type": "Person",
                              "name": "Anuja",
                              "jobTitle": "Founder",
                              "url": "https://wearetilth.com/about/"
                        },
                        "publisher": {
                              "@type": "Organization",
                              "name": "Tilth",
                              "url": "https://wearetilth.com/",
                              "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://wearetilth.com/favicon.svg"
                              }
                        }
                  },
                  {
                        "@type": "FAQPage",
                        "mainEntity": [
                              {
                                    "@type": "Question",
                                    "name": "What is a marketing foundation audit?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "A marketing foundation audit is a structured review of the systems underneath your marketing — tracking, attribution, targeting, channel performance, and partnerships — before any money is spent on scaling. Instead of reviewing creative or copy, it checks whether the data you make decisions on is even true, and whether each channel can be measured honestly."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How is a marketing foundation audit different from an SEO audit or a regular marketing audit?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "An SEO audit looks at one channel. A typical marketing audit often reviews tactics and creative across channels. A marketing foundation audit goes one layer deeper: it checks the plumbing — conversion tracking, attribution, targeting logic, and how partners are paid — so that everything measured on top of it can be trusted."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How long does a marketing audit take?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "A focused marketing foundation audit usually takes a few working days once you've shared access to your analytics, ad accounts, and tracking setup. The output is a short, honest read on what's broken and what to fix first — not a 60-page report nobody acts on."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Is the Tilth marketing audit really free?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Yes. Tilth offers a Foundation Audit with no pitch attached. We review your current setup and tell you honestly what's broken and what's worth fixing first. There's no obligation to work with us afterwards."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Do I need to change agencies to get a marketing audit?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "No. A foundation audit is independent of who runs your channels. Many brands use it as a second opinion on an existing agency or in-house team — the goal is to know whether your spend is built on solid ground, not to replace anyone."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "What do I need to provide for the audit?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Read access to your analytics (GA4), your ad accounts (Meta, Google), and a description of your current channels and goals is usually enough to start. The more honest the picture, the more useful the audit."
                                    }
                              }
                        ]
                  }
            ]
      }
],
    faqHeading: `Marketing foundation audit — FAQs`,
    faq: [
      { q: `What is a marketing foundation audit?`,
        a: `<p>A marketing foundation audit is a structured review of the systems underneath your marketing — tracking, attribution, targeting, channel performance, and partnerships — before any money is spent on scaling. Rather than reviewing creative or copy, it checks whether the data you make decisions on is even true.</p>` },
      { q: `How is it different from an SEO audit or a regular marketing audit?`,
        a: `<p>An SEO audit looks at one channel. A typical marketing audit often reviews tactics and creative across channels. A marketing foundation audit goes a layer deeper — it checks the plumbing (conversion tracking, attribution, targeting logic, and how partners are paid) so everything measured on top of it can be trusted.</p>` },
      { q: `How long does a marketing audit take?`,
        a: `<p>A focused foundation audit usually takes a few working days once you've shared access to your analytics, ad accounts, and tracking setup. You get a short, honest read on what's broken and what to fix first — not a report nobody acts on.</p>` },
      { q: `How does the Tilth Foundation Audit work?`,
        a: `<p>The first conversation is free, with no pitch attached and no obligation. If the problem needs deeper diagnosis, we’ll scope a paid Foundation Audit around it. A typical audit takes 1–2 weeks, depending on scope. <a href="/contact/">Start here</a>.</p>` },
      { q: `Do I need to change agencies to get an audit?`,
        a: `<p>No. A foundation audit is independent of who runs your channels — many brands use it as a second opinion on an existing agency or in-house team.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has 10+ years of hands-on growth experience across 10+ industries — auditing and rebuilding the foundations under marketing spend. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Start with a conversation`, body: `We'll review your tracking, attribution, targeting, and partnerships, and tell you honestly what's broken and what's worth fixing first. No pitch attached.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>Ask ten brands what's in their marketing audit and you'll get ten answers — a creative review here, an SEO crawl there, a slide on competitor positioning. Useful, but all of it sits on top of one assumption: that the data underneath is true. A <strong>marketing foundation audit</strong> tests that assumption first. Before anyone debates a headline or a bid, it asks a blunter question — <em>can you actually trust the numbers you're about to spend against?</em></p>
    <p>This is the audit we run at Tilth, and it's deliberately unglamorous. It checks the plumbing. Below is what a real marketing foundation audit reviews, in the order that matters.</p>

    <h2>1. Tracking — is your data even true?</h2>
    <p>Everything downstream depends on this. The audit confirms that your conversion tracking actually fires, on the right pages, for the right actions. That means checking your <a href="/insights/ga4-conversion-tracking/">GA4 conversion tracking</a>, your Meta pixel and Conversions API, deduplication between them, and whether "purchase" events carry real value and currency. If tracking is wrong, every report after it is fiction — and scaling spend just buys you more of the wrong data.</p>

    <h2>2. Attribution — can you tell which channel earns the money?</h2>
    <p>Most brands can't say, with confidence, which channels are actually profitable. A foundation audit reviews how credit is assigned across the customer journey — last-click, first-touch, assisted conversions — and where your reporting is over- or under-crediting a channel. The goal isn't a perfect model; it's making sure you're not cutting a channel that introduces customers or scaling one that only ever closes what others started.</p>

    <h2>3. Targeting — are you reaching buyers, or just people?</h2>
    <p>Cheap reach is easy. Reaching the people who actually buy is the hard part. The audit examines who your campaigns are really being shown to, how audiences are built, and whether your targeting is anchored to revenue intent or just to volume and low cost-per-click. Broad, cheap traffic that never converts is one of the most common — and most expensive — foundation cracks.</p>

    <blockquote>You can't optimise what you can't see. Most "underperforming" marketing isn't a creative problem — it's a measurement problem wearing a creative costume.</blockquote>

    <h2>4. Channels — is each one earning its budget?</h2>
    <p>A foundation audit goes channel by channel — paid ads, <a href="/insights/affiliate-program-not-converting/">affiliates</a>, SEO, influencer, PR, branding — and asks the same question of each: <em>is this where the money goes, and does it come back?</em> The point isn't to add channels. It's to find the ones quietly draining budget while looking busy, and the ones working that deserve more.</p>

    <h2>5. Partnerships — paid for results, or paid for reach?</h2>
    <p>Affiliate and influencer partnerships are where attribution gaps turn into real money lost. The audit checks how partners are vetted and paid: are payouts tied to verified revenue, or to clicks and follower counts? Are affiliates getting credit for sales they didn't cause? A channel that looks active but is paying for reach instead of results is a foundation problem, not a performance one.</p>

    <h2>6. Positioning — is the offer clear before the spend?</h2>
    <p>Finally, the audit looks at whether the message and positioning are locked before media money flows. Even perfect tracking can't save spend behind an offer the market doesn't understand. This is the cheapest thing to fix and the most expensive thing to ignore.</p>

    <h2>What you get at the end of a marketing foundation audit</h2>
    <p>A good audit doesn't end in a 60-page deck. It ends in a short, honest answer to three questions: what's broken, what it's costing you, and what to fix first. That priority order is the whole point — fix the foundation, and every rupee you spend afterward can finally be measured. Skip it, and you're scaling on guesswork.</p>
    <p>That's the order we work in, every time. If you'd like to see it applied to your own setup, the next step is simple.</p>`
  },
  {
    slug: "measure-influencer-marketing-roi",
    section: "Influencer",
    readTime: "7 min read",
    date: "23 May 2026",
    h1: `How to measure influencer marketing ROI properly`,
    standfirst: `"It got a lot of engagement" is not an ROI number. Here's how to measure influencer marketing properly in 2026 — the metrics that actually predict revenue, the tracking setup that has to happen before you brief anyone, and a simple formula to calculate real return.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "How to Measure Influencer Marketing ROI Properly | Tilth",
      "description": "A practical guide to measuring influencer marketing ROI: which metrics predict revenue, how to set up trackable links before you brief anyone, and a simple ROI formula.",
      "canonical": "https://wearetilth.com/insights/measure-influencer-marketing-roi/",
      "robots": "index, follow",
      "ogTitle": "How to measure influencer marketing ROI properly",
      "ogDescription": "Which metrics predict revenue, how to set up trackable links before you brief anyone, and a simple ROI formula for influencer campaigns.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/measure-influencer-marketing-roi.webp",
      "ogLocale": null,
      "twTitle": "How to measure influencer marketing ROI properly",
      "twDescription": "A practical guide to measuring influencer ROI, not just reach and likes.",
      "twImage": "https://wearetilth.com/assets/insight-cards/measure-influencer-marketing-roi.webp"
},
    schema: [
      {
            "@context": "https://schema.org",
            "@graph": [
                  {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                              {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://wearetilth.com/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Insights",
                                    "item": "https://wearetilth.com/insights/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "How to measure influencer marketing ROI properly",
                                    "item": "https://wearetilth.com/insights/measure-influencer-marketing-roi/"
                              }
                        ]
                  },
                  {
                        "@type": "BlogPosting",
                        "headline": "How to measure influencer marketing ROI properly",
                        "description": "A practical guide to measuring influencer marketing ROI: which metrics predict revenue, how to set up trackable links before you brief anyone, and a simple ROI formula.",
                        "image": "https://wearetilth.com/assets/insight-cards/measure-influencer-marketing-roi.webp",
                        "datePublished": "2026-05-23",
                        "dateModified": "2026-05-23",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/measure-influencer-marketing-roi/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/measure-influencer-marketing-roi/",
                        "articleSection": "Influencer",
                        "keywords": [
                              "influencer marketing ROI",
                              "how to measure influencer ROI",
                              "influencer marketing tracking",
                              "influencer campaign attribution",
                              "influencer marketing India"
                        ],
                        "wordCount": 1500,
                        "author": {
                              "@type": "Person",
                              "name": "Anuja",
                              "jobTitle": "Founder",
                              "url": "https://wearetilth.com/about/"
                        },
                        "publisher": {
                              "@type": "Organization",
                              "name": "Tilth",
                              "url": "https://wearetilth.com/",
                              "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://wearetilth.com/favicon.svg"
                              }
                        }
                  },
                  {
                        "@type": "FAQPage",
                        "mainEntity": [
                              {
                                    "@type": "Question",
                                    "name": "How do you calculate influencer marketing ROI?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "A simple formula is: (Revenue attributed to the influencer minus total campaign cost) divided by total campaign cost, expressed as a percentage. The hard part isn't the formula — it's accurately attributing revenue to the right influencer, which requires unique tracking links or codes set up before the campaign runs."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "What's a good ROI for influencer marketing in India?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Benchmarks vary widely by category, but a healthy influencer campaign typically returns 2-5x its cost in attributed revenue once tracking is accurate. Awareness-focused campaigns with smaller creators sometimes accept lower direct ROI in exchange for reach and content assets, which should be judged separately from a pure ROI number."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Should I use reach and engagement to judge influencer ROI?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Reach and engagement are useful diagnostic metrics but don't measure return — a post can get thousands of likes and generate zero attributable revenue. They're worth tracking alongside conversion metrics, not instead of them."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How do I track sales from an influencer if the customer doesn't click a link?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Unique discount codes per influencer capture sales even when someone doesn't click through immediately, since the code is entered at checkout regardless of the path taken. Combining codes with trackable links gives a more complete picture than either alone."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "What attribution model should I use for influencer marketing?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Last-click attribution alone tends to undercount influencer marketing's actual contribution, since influencer content often introduces a customer who later converts through a different channel. Looking at assisted conversions in GA4, alongside direct code and link attribution, gives a fuller picture than last-click alone."
                                    }
                              }
                        ]
                  }
            ]
      }
],
    faqHeading: `Influencer marketing ROI — FAQs`,
    faq: [
      { q: `How do you calculate influencer marketing ROI?`,
        a: `<p>(Revenue attributed to the influencer − total campaign cost) ÷ total campaign cost × 100. The hard part is accurate attribution, which requires unique tracking links or codes set up before the campaign.</p>` },
      { q: `What's a good ROI for influencer marketing in India?`,
        a: `<p>A healthy performance-focused campaign typically returns 2-5x cost once tracking is accurate. Awareness campaigns should be judged separately by reach/CPM, not the same ROI formula.</p>` },
      { q: `Should I use reach and engagement to judge ROI?`,
        a: `<p>They're useful diagnostics, not proof of return — a post can get thousands of likes and generate zero attributable revenue. Track them alongside conversion metrics, not instead.</p>` },
      { q: `How do I track sales without a link click?`,
        a: `<p>Unique discount codes per influencer capture sales regardless of path — the code is entered at checkout even if the customer didn't click through directly.</p>` },
      { q: `What attribution model should I use?`,
        a: `<p>Last-click alone tends to undercount influencer contribution. Combine assisted conversion data in GA4 with direct code and link attribution for a fuller picture.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has 10+ years of hands-on growth experience across 10+ industries, helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Set up influencer tracking that actually holds up`, body: `A Foundation Audit checks whether your GA4 and attribution setup can accurately measure influencer, affiliate, and paid campaigns — before your next brief goes out.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>Influencer marketing has a measurement problem that other channels mostly solved years ago. A brand can run five campaigns, get glowing engagement reports from each influencer, and still have no idea which ones actually drove revenue. That's not because influencer ROI is unmeasurable — it's because most campaigns are briefed without the tracking in place to measure it. This guide covers how to <strong>measure influencer marketing ROI</strong> properly, starting before the campaign, not after.</p>

    <h2>Why influencer ROI is hard to measure (and why that's not an excuse to skip it)</h2>
    <p>Unlike a Google or Meta ad, an influencer's content often lives outside a platform you control — a Reel, a story, a YouTube video — and the audience may see it, remember it, and convert days later through an entirely different path. That's a genuinely harder attribution problem than a paid ad click. But "hard to measure precisely" gets used as an excuse to not measure at all, which is a different and more expensive problem.</p>

    <h2>Vanity metrics vs metrics that predict revenue</h2>
    <p>Reach, likes, comments, and story views tell you whether content resonated — useful diagnostic information, not proof of return. A post can rack up 50,000 views and zero attributable sales. The metrics that actually connect to ROI are: unique link clicks, discount code redemptions, and conversions tied to those clicks or codes. If a campaign report leads with follower count and engagement rate and stops there, ROI hasn't actually been measured yet.</p>

    <h2>Setting up trackable links and codes before you brief anyone</h2>
    <p>This is the step campaigns most often skip, and it can't be added retroactively. Before an influencer posts anything:</p>
    <ul>
      <li><strong>Give each influencer a unique UTM-tagged link</strong> (or a link shortener that supports per-influencer tracking), so clicks and downstream conversions are attributable in GA4.</li>
      <li><strong>Assign each influencer a unique discount code</strong>, so sales get captured even from viewers who don't click through immediately and instead search for you or type the URL directly.</li>
      <li><strong>Confirm GA4 conversion tracking is accurate</strong> before the campaign starts — attributing revenue correctly to an influencer link is worthless if the underlying <a href="/insights/ga4-conversion-tracking/">purchase tracking</a> itself isn't firing right.</li>
    </ul>

    <h2>How to calculate influencer marketing ROI</h2>
    <p>The formula itself is simple:</p>
    <blockquote>ROI = (Revenue attributed to the influencer − total campaign cost) ÷ total campaign cost × 100</blockquote>
    <p>Total campaign cost should include the influencer fee, any product sent, and management time if it's material. The revenue side is where the tracking setup above earns its keep — without unique links and codes, "revenue attributed to the influencer" is a guess, not a number.</p>

    <h2>Attribution models for influencer campaigns</h2>
    <p>Last-click attribution alone tends to <strong>undercount</strong> influencer marketing, because influencer content frequently introduces a customer who researches and converts later through search or a direct visit — a different channel gets the credit in a pure last-click model. Two adjustments help: check GA4's assisted conversion reports to see where influencer-driven traffic contributed even without the final click, and treat discount code redemptions as their own attribution signal independent of link clicks, since they capture conversions the link-based model misses entirely.</p>

    <h2>Benchmarks: what's a good ROI for influencer marketing in India</h2>
    <div data-tbl><table class="price-table">
      <thead>
        <tr><th>Campaign type</th><th>Typical ROI benchmark</th></tr>
      </thead>
      <tbody>
        <tr><td data-th="Campaign type">Performance-focused (mid/micro influencers, codes + links)</td><td data-th="Typical ROI benchmark">2x – 5x campaign cost</td></tr>
        <tr><td data-th="Campaign type">Mixed awareness + performance</td><td data-th="Typical ROI benchmark">1.5x – 3x, plus reusable content value</td></tr>
        <tr><td data-th="Campaign type">Pure awareness (large reach, low direct tracking)</td><td data-th="Typical ROI benchmark">Judge separately by reach/CPM, not ROI</td></tr>
      </tbody>
    </table><p class="price-note">Indicative ranges — actual ROI varies significantly by category, influencer tier, and offer.</p></div>
    <p>Awareness-heavy campaigns with limited direct tracking shouldn't be judged on the same ROI formula as performance-focused ones — that's comparing two different jobs. It's similar to the reason <a href="/insights/affiliate-program-not-converting/">affiliate programmes</a> need channel-appropriate metrics rather than one blanket standard.</p>

    <h2>Common mistakes that skew ROI numbers</h2>
    <ul>
      <li><strong>No pre-campaign tracking setup</strong> — trying to attribute revenue after the fact from platform-reported engagement alone.</li>
      <li><strong>Only counting last-click conversions</strong> — undercounting influencer's real contribution to the funnel.</li>
      <li><strong>Comparing awareness campaigns to performance benchmarks</strong> — apples-to-oranges ROI expectations.</li>
      <li><strong>Ignoring organic lift</strong> — a spike in branded search or direct traffic during a campaign that never gets tied back to it.</li>
      <li><strong>Trusting the influencer's own screenshots</strong> — as the only data source, instead of your own GA4 and code redemption data.</li>
    </ul>`
  },
  {
    slug: "meta-ads-not-converting",
    section: "Paid Ads",
    readTime: "6 min read",
    date: "17 Jun 2026",
    h1: `Meta Ads not converting? A 7-point tracking audit`,
    standfirst: `When Meta Ads stop converting, the instinct is to change the creative or the audience. Half the time the ads are fine — Meta just can't see the conversions. Before you touch anything else, rule out tracking with these seven checks.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "Meta Ads not converting? A 7-point tracking audit | Tilth",
      "description": "Before you blame the creative or the audience, rule out tracking. A 7-point audit of your Meta (Facebook/Instagram) Ads setup — pixel, Conversions API, events, and attribution.",
      "canonical": "https://wearetilth.com/insights/meta-ads-not-converting/",
      "robots": "index, follow",
      "ogTitle": "Meta Ads not converting? A 7-point tracking audit",
      "ogDescription": "Before you blame the creative, rule out tracking. A 7-point audit of your Meta Ads pixel, Conversions API, events, and attribution.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/meta-ads-not-converting.webp",
      "ogLocale": null,
      "twTitle": "Meta Ads not converting? A 7-point tracking audit",
      "twDescription": "Before you blame the creative, rule out tracking. A 7-point Meta Ads audit.",
      "twImage": "https://wearetilth.com/assets/insight-cards/meta-ads-not-converting.webp"
},
    schema: [
      {
            "@context": "https://schema.org",
            "@graph": [
                  {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                              {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://wearetilth.com/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Insights",
                                    "item": "https://wearetilth.com/insights/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Meta Ads not converting? A 7-point tracking audit",
                                    "item": "https://wearetilth.com/insights/meta-ads-not-converting/"
                              }
                        ]
                  },
                  {
                        "@type": "BlogPosting",
                        "headline": "Meta Ads not converting? A 7-point tracking audit",
                        "description": "Before you blame the creative or the audience, rule out tracking. A 7-point audit of your Meta Ads setup: pixel, Conversions API, events, and attribution.",
                        "image": "https://wearetilth.com/assets/insight-cards/meta-ads-not-converting.webp",
                        "datePublished": "2026-06-17",
                        "dateModified": "2026-11-06",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/meta-ads-not-converting/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/meta-ads-not-converting/",
                        "articleSection": "Paid Ads",
                        "keywords": [
                              "facebook ads not converting",
                              "meta ads tracking",
                              "conversions api",
                              "meta pixel",
                              "ad tracking audit"
                        ],
                        "wordCount": 900,
                        "author": {
                              "@type": "Person",
                              "name": "Anuja",
                              "jobTitle": "Founder",
                              "url": "https://wearetilth.com/about/"
                        },
                        "publisher": {
                              "@type": "Organization",
                              "name": "Tilth",
                              "url": "https://wearetilth.com/",
                              "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://wearetilth.com/favicon.svg"
                              }
                        }
                  }
            ]
      }
],
    faqHeading: null,
    faq: [
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of Tilth, a foundation-first marketing agency in Bengaluru. She has 10+ years of hands-on growth experience running paid ads across 10+ industries — and fixing the tracking that quietly breaks them. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Want a second pair of eyes on your Meta setup?`, body: `The Foundation Audit checks your pixel, CAPI, events, and attribution — so you know whether it's the tracking or the ads before you spend another rupee. No pitch attached.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>Meta optimises against the conversions you report back to it. If those reports are incomplete, duplicated or pointed at the wrong action, the system cannot find buyers — so it spends the budget on the wrong people, results decay, and it looks like the ads stopped working. Most of the time that is a measurement problem wearing a creative problem's costume. Run the checks in this order.</p>

    <h2>1. Is the purchase event firing — with a value?</h2>
    <p>Use Events Manager or the Pixel Helper to confirm a Purchase event fires on the real confirmation step, carrying <code>value</code> and <code>currency</code>. Meta documents both as required for Purchase, with currency as a three-letter ISO 4217 code, and requires <code>value</code> for any event used with value optimisation.</p>
    <p>Two failures are common. A Purchase event sent without value and currency still records that a purchase happened — it simply cannot tell Meta, or your own reporting, what the order was worth. That weakens revenue reporting and takes value optimisation off the table, because every order looks identical in worth. Separately, an event wired to a button click rather than a completed order counts abandoned checkouts as sales, which inflates performance and teaches the system to find people who click buttons.</p>

    <h2>2. Is the Conversions API running alongside the pixel?</h2>
    <p>Browser-side collection is fragile for ordinary technical reasons. Meta's documentation points to events the pixel may lose to network connectivity issues or page loading errors, plus events that happen offline or later and that a browser tag was never going to capture at all. The Conversions API sends those server-to-server, and Meta recommends running it <em>alongside</em> the pixel rather than instead of it — a redundant setup — so the goal is both sources, deduplicated, not a choice between them.</p>
    <p>One thing it is not: a way around someone's privacy choice. Server-side collection is still your collection, and it remains subject to whatever consent and data-use obligations apply to you — Meta documents data processing options such as Limited Data Use for exactly that reason, and expects the advertiser to get this right rather than treating the server path as unrestricted. Use the Conversions API to stop losing events you are entitled to measure, not to re-collect events from people who declined.</p>

    <h2>3. Are the two sources actually deduplicated?</h2>
    <p>This is where reported performance most often becomes fiction. Meta's recommended method matches on event identity: the pixel's <code>eventID</code> must equal the Conversions API's <code>event_id</code>, and the pixel's event name must equal the server <code>event_name</code>. Deduplication applies to events received within 48 hours of the first event carrying that ID, and where a server and browser event arrive within about five minutes of each other Meta favours the browser event.</p>
    <p>There is a second method using <code>event_name</code> with <code>fbp</code> and/or <code>external_id</code>, but it is weaker by design: it generally only works browser-first, and a server event is not discarded if no matching browser event arrived in the previous 48 hours. If you are sending the same order through both paths, send a shared event ID. Events Manager reports a deduplication rate and warns when it is too low — check it rather than assuming.</p>

    <h2>4. Is your event match quality good enough to act on?</h2>
    <p>Server events carry customer information parameters that let Meta match an event to an account, and Events Manager scores that as Event Match Quality on a 1 to 10 scale. Meta typically recommends aiming for 6.0 or higher. Sending the client IP address and user agent with every server event is specifically called out as helping matching; include the country even when every customer is in one country, and include a country code on phone numbers or they will not match.</p>
    <p>Mind the hashing rules, because getting them backwards silently destroys matching: contact fields such as email, phone and name must be hashed, while IP address, user agent, <code>fbc</code> and <code>fbp</code> must not be. One more trap worth knowing — an <code>event_time</code> more than seven days old causes Meta to reject the entire request, so a backfill with stale timestamps can fail in full rather than in part.</p>

    <blockquote>An algorithm optimising on bad data does not fail loudly. It quietly spends your money on the wrong people.</blockquote>

    <h2>5. Is your domain verified and your event configuration deliberate?</h2>
    <p>Aggregated Event Measurement is Meta's protocol for measuring web and app events from people on iOS 14 and later, with identifiers removed and data aggregated before it is used. Events sent through the Conversions API may also be processed within its limits, so this is not a browser-only concern. Practically: verify your domain, then open your web event configuration and look at which events are present and how they are prioritised rather than trusting whatever was set up when the pixel was installed. Meta publishes the current slot and priority rules in Events Manager for your own domain — read them there, because the limits have changed before and the number you remember may be out of date.</p>

    <h2>6. Are you optimising for the right event?</h2>
    <p>If a campaign optimises for Add to Cart or Lead because those fire more often and make the dashboard look healthier, Meta will buy carts and leads — not customers. Optimise toward the event that represents revenue, and accept the smaller, truer number. The exception is genuine volume starvation: if the revenue event fires too rarely for the system to learn from, fix the funnel or widen the offer rather than quietly optimising for a cheaper action and calling it growth.</p>

    <h2>7. Are you comparing like with like on attribution?</h2>
    <p>Meta reports on the attribution setting applied to the campaign, which includes a view-through component that a last-click model in GA4 or your backend does not count at all. The numbers should not be expected to match exactly, and chasing the gap usually means rebuilding campaigns that were fine. Check the attribution setting on the campaign you are actually judging rather than assuming a default, pick one source as your decision-making truth, and compare periods on the same basis. If the whole picture is unclear, <a href="/insights/marketing-attribution-explained-simply/">attribution models explained simply</a> covers why the discrepancy is expected rather than broken.</p>

    <h2>8. Is the landing page answering the ad?</h2>
    <p>Measurement integrity tells you whether the data is real. It does not tell you whether the destination deserves the click. Check that the offer, price framing and proof on the page match the promise in the creative, that the page loads quickly on a mid-range phone, and that the next step is visible without scrolling or searching. A mismatch here looks exactly like a creative problem in the dashboard, because conversion rate falls while click-through holds.</p>
    <p>Then look for leakage further down: a checkout that asks for an account, a form that fails validation silently, a shipping cost revealed late. These cost more conversions than most creative tests recover.</p>

    <h2>9. Only now, test creative and audience</h2>
    <p>Once the purchase event is correct and valued, the Conversions API is live and deduplicated, match quality is acceptable, you are optimising on revenue and reading attribution consistently, a drop in conversions is a real signal worth chasing. Test in that order and change one thing at a time — creative against creative, audience against audience — so the result is attributable to the change rather than to the week.</p>
    <p>That order is the point. We run it as a diagnostic before touching campaigns in <a href="/services/paid-media/">paid media</a>, and when the measurement layer itself is the thing that needs rebuilding, as <a href="/services/growth-strategy-measurement/">growth strategy and measurement</a>. If you want to check the other half of the stack while you are here, <a href="/insights/ga4-conversion-tracking/">setting up GA4 conversion tracking properly</a> is the companion piece.</p>`
  },
  {
    slug: "questions-before-hiring-marketing-agency",
    section: "Hiring",
    readTime: "9 min read",
    date: "23 Jun 2026",
    h1: `12 questions to ask before hiring a marketing agency`,
    standfirst: `The pitch always sounds good. The questions below are how you find out what's underneath it — on strategy, reporting, team, and terms. For each one, here's the answer you want to hear, and the red flag that should make you pause.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "12 Questions to Ask Before Hiring a Marketing Agency (+ Red-Flag Answers) | Tilth",
      "description": "The 12 questions to ask before hiring a marketing agency — on strategy, reporting, team, and terms — plus the red-flag answers that tell you to walk away. A founder's checklist.",
      "canonical": "https://wearetilth.com/insights/questions-before-hiring-marketing-agency/",
      "robots": "index, follow",
      "ogTitle": "12 questions to ask before hiring a marketing agency (+ red-flag answers)",
      "ogDescription": "The questions to ask before hiring a marketing agency — and the red-flag answers that tell you to walk away.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/questions-before-hiring-marketing-agency.webp",
      "ogLocale": null,
      "twTitle": "12 questions to ask before hiring a marketing agency",
      "twDescription": "The questions to ask — and the red-flag answers that tell you to walk away.",
      "twImage": "https://wearetilth.com/assets/insight-cards/questions-before-hiring-marketing-agency.webp"
},
    schema: [
      {
            "@context": "https://schema.org",
            "@graph": [
                  {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                              {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://wearetilth.com/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Insights",
                                    "item": "https://wearetilth.com/insights/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Questions to ask before hiring a marketing agency",
                                    "item": "https://wearetilth.com/insights/questions-before-hiring-marketing-agency/"
                              }
                        ]
                  },
                  {
                        "@type": "BlogPosting",
                        "headline": "12 questions to ask before hiring a marketing agency (and the red-flag answers)",
                        "description": "The 12 questions to ask before hiring a marketing agency — strategy, reporting, team, and terms — plus the red-flag answers that tell you to walk away.",
                        "image": "https://wearetilth.com/assets/insight-cards/questions-before-hiring-marketing-agency.webp",
                        "datePublished": "2026-06-23",
                        "dateModified": "2026-06-23",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/questions-before-hiring-marketing-agency/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/questions-before-hiring-marketing-agency/",
                        "articleSection": "Hiring",
                        "keywords": [
                              "questions to ask before hiring a marketing agency",
                              "how to choose a marketing agency",
                              "marketing agency red flags",
                              "hiring a digital marketing agency",
                              "vet a marketing agency"
                        ],
                        "wordCount": 1700,
                        "author": {
                              "@type": "Person",
                              "name": "Anuja",
                              "jobTitle": "Founder",
                              "url": "https://wearetilth.com/about/"
                        },
                        "publisher": {
                              "@type": "Organization",
                              "name": "Tilth",
                              "url": "https://wearetilth.com/",
                              "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://wearetilth.com/favicon.svg"
                              }
                        }
                  },
                  {
                        "@type": "FAQPage",
                        "mainEntity": [
                              {
                                    "@type": "Question",
                                    "name": "What questions should I ask before hiring a marketing agency?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Ask about their process before spending, how they fix tracking and attribution first, what metrics they report and how often, who actually works on your account, whether the pitch team manages the work, contract length and cancellation terms, whether ad spend is separate from their fee, and for results from similar businesses. The answers reveal whether they build on foundations or just spend."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "What are red flags when hiring a marketing agency?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Red flags include jumping straight to tactics with no discovery process, reporting only vanity metrics like impressions and reach, refusing to fix tracking before scaling spend, a senior salesperson who disappears after signing, vague or punitive cancellation terms, guaranteed rankings or results, and bundling ad spend into the fee so you can't see what's media versus management."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Should a marketing agency fix tracking before running ads?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Yes. If conversion tracking and attribution are wrong, every campaign decision is based on bad data, and scaling spend just wastes money faster. A good agency audits and fixes the measurement foundation before scaling any channel."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How long should a marketing agency contract be?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "There's no single right length, but you want clear terms and a reasonable exit — commonly a 30-day notice period — with no hidden off-boarding fees. Be cautious of long lock-ins with punitive cancellation clauses, especially before the agency has proven anything."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How do I check if a marketing agency's results are real?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Ask for results from businesses similar to yours, tied to revenue or qualified pipeline rather than impressions, and ask how those numbers were tracked. If they can't explain the measurement behind a result, treat the result as marketing, not proof."
                                    }
                              }
                        ]
                  }
            ]
      }
],
    faqHeading: `Hiring a marketing agency — FAQs`,
    faq: [
      { q: `What questions should I ask before hiring a marketing agency?`,
        a: `<p>Ask about their process before spending, how they fix tracking and attribution first, what metrics they report and how often, who actually works on your account, contract and cancellation terms, whether ad spend is separate from their fee, and for results from similar businesses.</p>` },
      { q: `What are the biggest red flags?`,
        a: `<p>Jumping straight to tactics with no discovery, reporting only vanity metrics, refusing to fix tracking before scaling, a salesperson who disappears after signing, guaranteed results, and bundling ad spend into the fee so you can't see what's media versus management.</p>` },
      { q: `Should an agency fix tracking before running ads?`,
        a: `<p>Yes. If tracking and attribution are wrong, every decision is based on bad data and scaling spend wastes money faster. A good agency fixes the <a href="/insights/marketing-foundation-audit/">measurement foundation</a> first.</p>` },
      { q: `How long should the contract be?`,
        a: `<p>Look for clear terms and a reasonable exit, commonly 30 days' notice, with no hidden off-boarding fees. Be cautious of long lock-ins with punitive cancellation clauses before anything's been proven.</p>` },
      { q: `How do I check if their results are real?`,
        a: `<p>Ask for results from similar businesses, tied to revenue rather than impressions, and ask how they were tracked. If they can't explain the measurement, treat the result as marketing, not proof.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has 10+ years of hands-on growth experience across 10+ industries — on both sides of the agency pitch. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Want a benchmark before you choose?`, body: `A Foundation Audit gives you an independent, honest read on your current setup — so you can judge any agency's answers against what's actually true. No pitch attached.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>Choosing a marketing agency is mostly an exercise in seeing past a good deck. Almost every agency presents well; far fewer do the unglamorous foundation work that decides whether your spend is measurable. These are the questions I'd ask before hiring a marketing agency — grouped by what they reveal — with the green-flag answer and the red flag for each.</p>

    <h2>Questions about strategy &amp; process</h2>

    <h3><span class="qn">01.</span>What's your process before you start spending?</h3>
    <p class="flag good"><strong>Green flag:</strong> a clear discovery, audit, and planning phase — they look at your tracking, audience, and positioning before touching a budget.</p>
    <p class="flag bad"><strong>Red flag:</strong> they jump straight to "we'll run ads / post content" with no diagnosis. Tactics without discovery is guesswork with an invoice.</p>

    <h3><span class="qn">02.</span>How do you fix tracking and attribution before scaling?</h3>
    <p class="flag good"><strong>Green flag:</strong> they treat <a href="/insights/ga4-conversion-tracking/">tracking and attribution</a> as step one, and can explain how they'll verify your conversions are real.</p>
    <p class="flag bad"><strong>Red flag:</strong> a blank look, or "tracking's already fine" without checking. Scaling spend on broken measurement just wastes money faster.</p>

    <h3><span class="qn">03.</span>How do you decide which channels to use?</h3>
    <p class="flag good"><strong>Green flag:</strong> channel choice flows from your customer and economics — not from what the agency happens to sell most of.</p>
    <p class="flag bad"><strong>Red flag:</strong> every client somehow needs the exact same channel mix.</p>

    <h2>Questions about results &amp; reporting</h2>

    <h3><span class="qn">04.</span>What metrics will you report, and how often?</h3>
    <p class="flag good"><strong>Green flag:</strong> outcomes tied to revenue or qualified pipeline, reported on a regular cadence, with the "so what" explained.</p>
    <p class="flag bad"><strong>Red flag:</strong> reports full of impressions, reach, and follower counts — vanity metrics that move without the business moving.</p>

    <h3><span class="qn">05.</span>How do you connect spend to revenue, not vanity metrics?</h3>
    <p class="flag good"><strong>Green flag:</strong> they can describe the measurement chain from ad to sale, and where its gaps are.</p>
    <p class="flag bad"><strong>Red flag:</strong> "engagement" and "brand awareness" as the headline results, with no line to money.</p>

    <h3><span class="qn">06.</span>What does a realistic outcome look like in 3–6 months?</h3>
    <p class="flag good"><strong>Green flag:</strong> honest ranges, caveats, and a note that SEO and content take longer to pay back.</p>
    <p class="flag bad"><strong>Red flag:</strong> guarantees. "Guaranteed #1 rankings" or "guaranteed 5x ROAS" is a guarantee they can't keep.</p>

    <h2>Questions about the team &amp; ownership</h2>

    <h3><span class="qn">07.</span>Who actually works on my account day to day?</h3>
    <p class="flag good"><strong>Green flag:</strong> you're introduced to the real account manager and can gauge their seniority.</p>
    <p class="flag bad"><strong>Red flag:</strong> the work quietly drops to junior staff the moment you sign.</p>

    <h3><span class="qn">08.</span>Is the person in this pitch the one managing the work?</h3>
    <p class="flag good"><strong>Green flag:</strong> yes, or a clear, named handover to someone you've met.</p>
    <p class="flag bad"><strong>Red flag:</strong> the impressive strategist vanishes after the contract is signed.</p>

    <h3><span class="qn">09.</span>What happens when something underperforms?</h3>
    <p class="flag good"><strong>Green flag:</strong> a calm description of how they diagnose, reallocate, and communicate bad weeks.</p>
    <p class="flag bad"><strong>Red flag:</strong> the implication that nothing ever underperforms.</p>

    <h2>Questions about terms &amp; fit</h2>

    <h3><span class="qn">10.</span>What's the contract length and cancellation policy?</h3>
    <p class="flag good"><strong>Green flag:</strong> reasonable terms with a clear exit — often 30 days' notice — and no hidden off-boarding fees.</p>
    <p class="flag bad"><strong>Red flag:</strong> long lock-ins and vague or punitive cancellation clauses, especially before they've proven anything.</p>

    <h3><span class="qn">11.</span>Is ad spend separate from your fee?</h3>
    <p class="flag good"><strong>Green flag:</strong> a clear split between management fee and media budget. (More on this in our guide to <a href="/insights/marketing-agency-cost-india/">what a marketing agency costs in India</a>.)</p>
    <p class="flag bad"><strong>Red flag:</strong> spend bundled into the fee so you can't see what's media versus management.</p>

    <h3><span class="qn">12.</span>Can you show results from businesses like mine?</h3>
    <p class="flag good"><strong>Green flag:</strong> relevant examples with results tied to revenue, and a straight explanation of how they were measured.</p>
    <p class="flag bad"><strong>Red flag:</strong> big numbers with no context, no similar businesses, and no answer on how anything was tracked.</p>

    <blockquote>The best answers to these questions all point the same way: foundation first, honesty about measurement, and the same senior people after the ink dries.</blockquote>

    <p>You don't need all twelve in every conversation. But the pattern across the answers tells you almost everything — whether you're hiring people who build on solid ground, or people who'll spend your budget and report on the splash.</p>`
  },
  {
    slug: "seo-not-bringing-leads",
    section: "SEO",
    readTime: "7 min read",
    date: "28 May 2026",
    h1: `Why your SEO isn't bringing leads (and how to fix it)`,
    standfirst: `Traffic is climbing in Search Console. Leads aren't. This is one of the most common complaints we hear, and it's almost never "SEO doesn't work" — it's usually one of five specific, fixable problems. Here's how to find which one you have.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "Why Your SEO Isn't Bringing Leads (And How to Fix It) | Tilth",
      "description": "Ranking and getting traffic but no leads? The real reasons SEO traffic doesn't convert — intent mismatch, weak CTAs, broken tracking — and how to diagnose and fix each one.",
      "canonical": "https://wearetilth.com/insights/seo-not-bringing-leads/",
      "robots": "index, follow",
      "ogTitle": "Why your SEO isn't bringing leads (and how to fix it)",
      "ogDescription": "The real reasons SEO traffic doesn't convert — intent mismatch, weak CTAs, broken tracking — and how to diagnose and fix each one.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/seo-not-bringing-leads.webp",
      "ogLocale": null,
      "twTitle": "Why your SEO isn't bringing leads (and how to fix it)",
      "twDescription": "Ranking and getting traffic but no leads? Here's the real diagnosis, and how to fix it.",
      "twImage": "https://wearetilth.com/assets/insight-cards/seo-not-bringing-leads.webp"
},
    schema: [
      {
            "@context": "https://schema.org",
            "@graph": [
                  {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                              {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://wearetilth.com/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Insights",
                                    "item": "https://wearetilth.com/insights/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Why your SEO isn't bringing leads (and how to fix it)",
                                    "item": "https://wearetilth.com/insights/seo-not-bringing-leads/"
                              }
                        ]
                  },
                  {
                        "@type": "BlogPosting",
                        "headline": "Why your SEO isn't bringing leads (and how to fix it)",
                        "description": "Ranking and getting traffic but no leads? The real reasons SEO traffic doesn't convert, and how to diagnose and fix each one.",
                        "image": "https://wearetilth.com/assets/insight-cards/seo-not-bringing-leads.webp",
                        "datePublished": "2026-05-28",
                        "dateModified": "2026-05-28",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/seo-not-bringing-leads/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/seo-not-bringing-leads/",
                        "articleSection": "SEO",
                        "keywords": [
                              "SEO not bringing leads",
                              "SEO traffic not converting",
                              "why is my SEO not working",
                              "SEO leads",
                              "organic traffic not converting"
                        ],
                        "wordCount": 1500,
                        "author": {
                              "@type": "Person",
                              "name": "Anuja",
                              "jobTitle": "Founder",
                              "url": "https://wearetilth.com/about/"
                        },
                        "publisher": {
                              "@type": "Organization",
                              "name": "Tilth",
                              "url": "https://wearetilth.com/",
                              "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://wearetilth.com/favicon.svg"
                              }
                        }
                  },
                  {
                        "@type": "FAQPage",
                        "mainEntity": [
                              {
                                    "@type": "Question",
                                    "name": "Why is my website getting SEO traffic but no leads?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "The most common causes are ranking for informational keywords that don't match buying intent, landing pages that don't answer the searcher's actual question, weak or missing calls to action, and conversion tracking that isn't measuring leads correctly in the first place. Traffic volume and lead quality are separate problems."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How long does SEO take to generate leads?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "For a new or young domain, expect meaningful organic leads to take six to twelve months, even with strong content and correct technical setup. If traffic has existed for that long with no leads, the issue is more likely intent mismatch or conversion friction than simply needing more time."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Does more SEO traffic always mean more leads?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "No. Traffic from keywords with low buying intent — broad informational searches, for example — can grow steadily while leads stay flat, because the visitors were never close to a purchase decision. Keyword intent matters more than raw volume for lead generation."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How do I check if my SEO conversion tracking is accurate?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "In GA4, segment your organic traffic and confirm that form submissions, calls, or other lead actions are firing as distinct conversion events tied to that channel — not just pageviews. Submit a real test lead and verify it appears correctly before trusting the numbers."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Should I stop investing in SEO if it's not generating leads yet?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Usually not immediately — first diagnose whether the issue is intent mismatch, page experience, tracking, or genuinely needing more time, since each has a different fix. Stopping SEO before you've diagnosed the actual problem often means abandoning it right before it would have started working."
                                    }
                              }
                        ]
                  }
            ]
      }
],
    faqHeading: `SEO not bringing leads — FAQs`,
    faq: [
      { q: `Why is my website getting SEO traffic but no leads?`,
        a: `<p>Common causes are ranking for informational keywords that don't match buying intent, landing pages that don't answer the searcher's question, weak or missing CTAs, and conversion tracking that isn't measuring leads correctly.</p>` },
      { q: `How long does SEO take to generate leads?`,
        a: `<p>Typically six to twelve months for a new or young domain, even with strong content. If traffic has existed that long with no leads, the issue is more likely intent mismatch or conversion friction than needing more time.</p>` },
      { q: `Does more SEO traffic always mean more leads?`,
        a: `<p>No. Traffic from low buying-intent keywords can grow while leads stay flat, because those visitors were never close to a purchase decision. Intent matters more than raw volume.</p>` },
      { q: `How do I check if my SEO conversion tracking is accurate?`,
        a: `<p>In GA4, segment organic traffic and confirm lead actions fire as distinct conversion events tied to that channel, not just pageviews. Submit a real test lead to verify.</p>` },
      { q: `Should I stop investing in SEO if it's not generating leads yet?`,
        a: `<p>Usually not immediately. Diagnose whether it's intent mismatch, page experience, tracking, or time first — stopping before diagnosing often means quitting right before it would have worked.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has 10+ years of hands-on growth experience across 10+ industries, helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Find out exactly where your SEO is leaking leads`, body: `A Foundation Audit checks keyword intent, landing page match, tracking accuracy, and technical health — so you know precisely what to fix first, not just that "something's wrong."`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>"Our organic traffic is up 40% and leads haven't moved" is one of the most common things founders tell us. It feels like proof that SEO doesn't work for their business. In almost every case we've looked at, it isn't that — it's one or two specific, diagnosable problems sitting between the traffic and the lead form. This guide covers why <strong>SEO traffic isn't converting into leads</strong>, and how to work out which cause applies to you.</p>

    <h2>Traffic is not the same as leads</h2>
    <p>Search Console and GA4 both make it easy to watch a traffic number go up and assume the business is growing. But a visitor landing on your page from a search result hasn't bought anything — they've just arrived. Whether that visit turns into a lead depends on a completely separate set of factors: what they were actually looking for, whether your page answers it, and whether there's an obvious next step once it does.</p>

    <h2>The most common reasons SEO traffic isn't converting</h2>

    <h3>1. You're ranking for the wrong keywords</h3>
    <p>Ranking for "what is [your category]" brings visitors who are still researching, not ready to buy. Ranking for "[your category] pricing" or "best [your category] for [use case]" brings visitors much closer to a decision. If your top-performing pages by traffic are informational rather than commercial or transactional, growing traffic won't grow leads proportionally — you're winning the wrong keywords.</p>

    <h3>2. Your landing pages don't match search intent</h3>
    <p>A visitor who searched "pricing" and lands on a generic homepage will bounce, even if the homepage technically mentions pricing somewhere. Pages need to directly and quickly answer the specific question the keyword implies. Mismatched intent is one of the fastest ways to lose a visitor who was actually ready to convert.</p>

    <h3>3. No clear next step</h3>
    <p>Plenty of well-ranking pages simply don't ask for anything. No visible form, no clear call to action, no obvious way to take the next step. If a genuinely interested visitor has to hunt for how to contact you, most won't bother.</p>

    <h3>4. Broken or missing conversion tracking</h3>
    <p>Sometimes SEO is generating leads — they're just not being counted. If form submissions, calls, or WhatsApp clicks from organic traffic aren't tagged as conversions in GA4, the "no leads" problem may actually be a <a href="/insights/ga4-conversion-tracking/">measurement problem</a>, not a marketing one. This is worth ruling out before changing anything else.</p>

    <h3>5. Technical issues quietly capping traffic</h3>
    <p>Slow page load, poor mobile experience, or pages that aren't properly indexed can suppress both rankings and conversions simultaneously — visitors who do arrive have a worse experience and convert less, on top of fewer visitors arriving in the first place.</p>

    <blockquote>Traffic answers "are people finding us?" Leads answer "are we useful once they do?" They're different questions, and a rising traffic chart can hide a flat answer to the second one.</blockquote>

    <h2>How to diagnose it: a simple process</h2>
    <ol>
      <li><strong>Segment organic traffic by page and keyword intent</strong> in GA4 or Search Console — separate informational pages from commercial ones.</li>
      <li><strong>Check conversion rate by landing page</strong>, not just overall — a few high-traffic, low-converting pages often skew the whole picture.</li>
      <li><strong>Verify tracking is firing correctly</strong> for organic-sourced leads specifically, with a real test submission.</li>
      <li><strong>Read your top commercial-intent pages as a stranger would</strong> — does it answer the query in the first screen, and is the next step obvious?</li>
      <li><strong>Check Core Web Vitals and mobile experience</strong> in Search Console for pages with high impressions but low clicks or conversions.</li>
    </ol>

    <h2>How to fix it once you know the cause</h2>
    <ul>
      <li><strong>Wrong keywords:</strong> shift content investment toward commercial and transactional intent, not just search volume.</li>
      <li><strong>Intent mismatch:</strong> build or rewrite dedicated landing pages for your highest-intent keywords instead of routing everything to the homepage.</li>
      <li><strong>Weak CTAs:</strong> add a specific, visible next step above the fold and repeated through the page — not just in the footer.</li>
      <li><strong>Tracking gaps:</strong> fix GA4 conversion events for organic-sourced leads before changing anything else, so you can actually measure the impact of the other fixes.</li>
      <li><strong>Technical drag:</strong> prioritise Core Web Vitals fixes on your highest-traffic commercial pages first.</li>
    </ul>
    <p>A broader <a href="/insights/marketing-foundation-audit/">marketing foundation audit</a> covers all five of these at once, which is usually faster than fixing them one at a time through trial and error.</p>

    <h2>When SEO leads take time regardless</h2>
    <p>Even with all five fixed, a young domain or a newly built content strategy typically needs six to twelve months to generate meaningful organic leads — search engines need time to trust new content, and rankings for competitive commercial terms rarely happen overnight. The diagnosis above matters most when traffic has existed for a while with genuinely nothing to show for it, not in the first few months of a new SEO effort.</p>`
  },
  {
    slug: "shopify-conversion-tracking-ga4-meta-pixel",
    section: "Tracking",
    readTime: "8 min read",
    date: "12 Jun 2026",
    h1: `How to set up conversion tracking on Shopify (GA4 + Meta Pixel)`,
    standfirst: `Most Shopify stores have "tracking installed" and still can't trust the numbers. Here's how GA4, the Meta pixel and the Conversions API are actually supposed to be set up on Shopify today — including the theme-code method that stopped working, and how to verify each step.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "How to Set Up Conversion Tracking on Shopify (GA4 + Meta Pixel) | Tilth",
      "description": "A step-by-step guide to GA4, Meta pixel and Conversions API tracking on Shopify using the methods Shopify currently supports — plus how to verify every event before you scale ad spend.",
      "canonical": "https://wearetilth.com/insights/shopify-conversion-tracking-ga4-meta-pixel/",
      "robots": "index, follow",
      "ogTitle": "How to set up conversion tracking on Shopify (GA4 + Meta Pixel)",
      "ogDescription": "GA4, Meta pixel and Conversions API on Shopify using the methods Shopify currently supports — and how to verify every event before scaling spend.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/shopify-conversion-tracking-ga4-meta-pixel.webp",
      "ogLocale": null,
      "twTitle": "How to set up conversion tracking on Shopify (GA4 + Meta Pixel)",
      "twDescription": "GA4, Meta pixel and Conversions API on Shopify — the currently supported methods, and how to verify them.",
      "twImage": "https://wearetilth.com/assets/insight-cards/shopify-conversion-tracking-ga4-meta-pixel.webp"
},
    schema: [
      {
            "@context": "https://schema.org",
            "@graph": [
                  {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                              {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://wearetilth.com/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Insights",
                                    "item": "https://wearetilth.com/insights/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "How to set up conversion tracking on Shopify (GA4 + Meta Pixel)",
                                    "item": "https://wearetilth.com/insights/shopify-conversion-tracking-ga4-meta-pixel/"
                              }
                        ]
                  },
                  {
                        "@type": "BlogPosting",
                        "headline": "How to set up conversion tracking on Shopify (GA4 + Meta Pixel)",
                        "description": "A step-by-step guide to GA4, Meta pixel and Conversions API tracking on Shopify using the methods Shopify currently supports, plus how to verify every event before scaling ad spend.",
                        "image": "https://wearetilth.com/assets/insight-cards/shopify-conversion-tracking-ga4-meta-pixel.webp",
                        "datePublished": "2026-06-12",
                        "dateModified": "2026-11-08",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/shopify-conversion-tracking-ga4-meta-pixel/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/shopify-conversion-tracking-ga4-meta-pixel/",
                        "articleSection": "Tracking",
                        "keywords": [
                              "Shopify conversion tracking",
                              "GA4 Shopify setup",
                              "Meta Pixel Shopify",
                              "Shopify Conversions API",
                              "Shopify e-commerce tracking"
                        ],
                        "wordCount": 1700,
                        "author": {
                              "@type": "Person",
                              "name": "Anuja",
                              "jobTitle": "Founder",
                              "url": "https://wearetilth.com/about/"
                        },
                        "publisher": {
                              "@type": "Organization",
                              "name": "Tilth",
                              "url": "https://wearetilth.com/",
                              "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://wearetilth.com/favicon.svg"
                              }
                        }
                  },
                  {
                        "@type": "FAQPage",
                        "mainEntity": [
                              {
                                    "@type": "Question",
                                    "name": "Does Shopify have GA4 tracking built in?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Not by default, but it is a setting rather than a development job. You install the Google & YouTube sales channel and connect your GA4 property through it. Shopify's documentation says that once GA4 tags are set up, certain ecommerce events are tracked automatically - there is no separate switch labelled enhanced ecommerce to find. One thing that does catch people out: Shopify notes that Google Analytics cannot track events until password protection, its private mode for the online store, is deactivated."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Do I need Meta Conversions API if I already have the Meta pixel on Shopify?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "On Shopify this is not a separate installation. In the Facebook & Instagram channel you choose a customer data-sharing level, and Shopify's documentation states that the Enhanced level uses the Conversions API as well as the Meta pixel, while Maximum adds Meta's latest advertising technology on top. Standard is pixel only. Meta describes the Conversions API as a server-side connection used to improve attribution and delivery optimisation, and recommends running it alongside the pixel rather than instead of it."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Why is my Shopify GA4 purchase value different from my actual revenue?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Some difference is normal, because GA4 and Shopify count differently and GA4 depends on a tag firing in a browser. Large or growing gaps usually have a specific cause: a purchase event firing more than once, tax or shipping being included inconsistently, a currency mismatch between the GA4 property and the store's checkout currency, or duplicate tracking left behind in theme code. Each of those is checkable in GA4's DebugView against a single real order."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Can I set up Shopify conversion tracking myself, or do I need a developer?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "For a standard store, no developer is needed. The Google & YouTube channel and the Facebook & Instagram channel are both admin settings, and the Conversions API is part of choosing a data-sharing level. A developer becomes worthwhile when you need events the standard integrations do not send, which means a custom pixel in the Customer events section of the admin, or a Google Tag Manager container loaded through one."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How do I know if my Shopify tracking is actually working?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Place one real test order and follow it through both platforms. In GA4 DebugView, confirm exactly one purchase event with the correct value, currency and transaction ID. In Meta Events Manager, confirm one Purchase event showing both Browser and Server sources rather than two separate events. Then reload the order confirmation page and confirm the purchase event does not fire again."
                                    }
                              }
                        ]
                  }
            ]
      }
],
    faqHeading: `Shopify conversion tracking — FAQs`,
    faq: [
      { q: `Does Shopify have GA4 tracking built in?`,
        a: `<p>Not by default, but it's a setting rather than a build. Install the Google &amp; YouTube sales channel and connect your GA4 property through it. Shopify says that once GA4 tags are set up, certain ecommerce events are tracked automatically — there's no separate "enhanced ecommerce" switch to hunt for. One catch: Shopify notes Google Analytics can't track events until private mode (password protection) is deactivated.</p>` },
      { q: `Do I need Meta Conversions API if I already have the pixel?`,
        a: `<p>On Shopify it isn't a separate install. In the Facebook &amp; Instagram channel you pick a customer data-sharing level, and Shopify's documentation says <strong>Enhanced</strong> uses the Conversions API as well as the Meta pixel, while <strong>Maximum</strong> adds Meta's latest advertising technology. Standard is pixel only. Meta recommends running the API alongside the pixel, not instead of it.</p>` },
      { q: `Why is my GA4 purchase value different from my actual revenue?`,
        a: `<p>Some difference is normal — GA4 and Shopify count differently, and GA4 depends on a tag firing in a browser. Large or growing gaps usually have a specific cause: a purchase event firing more than once, inconsistent tax/shipping, a currency mismatch, or duplicate tracking left in theme code. Each is checkable in DebugView.</p>` },
      { q: `Do I need a developer to set this up?`,
        a: `<p>Not for a standard store. Both sales channels are admin settings, and the Conversions API comes with the data-sharing level you choose. A developer becomes worthwhile when you need events the standard integrations don't send — a custom pixel in the Customer events section, or GTM loaded through one.</p>` },
      { q: `How do I know if my Shopify tracking is actually working?`,
        a: `<p>Place one real test order. In GA4 DebugView, confirm exactly one purchase event with the right value, currency and transaction ID. In Meta Events Manager, confirm one Purchase event showing both Browser and Server sources rather than two events. Then reload the confirmation page and check it doesn't fire again.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has 10+ years of hands-on growth experience across 10+ industries, helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Get your Shopify tracking checked properly`, body: `A Foundation Audit verifies GA4, the Meta pixel and the Conversions API end to end on your live store — so you know exactly what's measured correctly before you scale spend.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>Almost every Shopify store we audit has GA4 and the Meta pixel "installed." Fewer have them installed the way Shopify currently supports. Apps report a green tick, events appear somewhere in a dashboard, and everyone assumes the numbers are right — until platform revenue and Shopify's own reports stop agreeing and nobody can say which one is wrong. This guide covers <strong>Shopify conversion tracking</strong> as it works today: GA4, the Meta pixel, the Conversions API, and the older method that no longer reaches checkout at all.</p>

    <h2>Four ways tracking gets onto a Shopify store</h2>
    <p>Most confusion here comes from mixing these up, so separate them before touching anything:</p>
    <ul>
      <li><strong>Native sales channels</strong> — the Google &amp; YouTube and Facebook &amp; Instagram channels in your admin. Configuration, not code, and the right default for a standard store.</li>
      <li><strong>App pixels and custom pixels</strong> — Shopify's pixel system, managed in the <strong>Customer events</strong> section. App pixels arrive with an app; custom pixels are added manually by a developer.</li>
      <li><strong>Google Tag Manager</strong> — loaded through a custom pixel, subscribing to Shopify's customer events and pushing them into the data layer. Still runs inside the pixel sandbox.</li>
      <li><strong>Server-side</strong> — Meta's Conversions API, which on Shopify comes with the data-sharing level you choose rather than a separate build.</li>
    </ul>
    <p>Shopify runs app and custom pixels in a sandbox: an isolated environment that can't render UI and can't scrape the DOM for things like email addresses or scroll depth. Worth knowing before someone promises you an event the sandbox can't produce.</p>

    <h2>The theme-code method that stopped working</h2>
    <p>If someone set your tracking up by pasting snippets into <code>theme.liquid</code> or into checkout customisations, there's a good chance it no longer reaches the part of the funnel that matters. Shopify has deprecated <code>checkout.liquid</code>; additional scripts and script tags on the Thank you and Order status pages were sunset for Shopify Plus stores on <strong>28 August 2025</strong>, and script tags on those pages are being sunset for non-Plus stores on <strong>26 August 2026</strong>. The supported replacement is apps, checkout UI extensions and web pixels.</p>
    <p>The current architecture is better than what it replaced. Shopify's documentation states that pixels automatically load on the storefront, checkout, Thank you page and Order status page — exactly the coverage hand-pasted theme code could never reliably achieve. The fix for a legacy setup isn't more script; it's moving to the channels and the pixel manager.</p>

    <blockquote>A pixel that fires on your homepage but not at checkout isn't broken. It's telling you nothing about whether ads convert, confidently.</blockquote>

    <h2>What you need before you start</h2>
    <ul>
      <li>Admin access to your store (Sales channels, and the Customer events section)</li>
      <li>A GA4 property and its tag ID</li>
      <li>A Meta Business account with a pixel created</li>
      <li>One real test order you're willing to place and refund</li>
    </ul>

    <h2>Setting up GA4 on Shopify</h2>
    <h3>1. Connect through the Google &amp; YouTube channel</h3>
    <p>Install the <strong>Google &amp; YouTube</strong> sales channel and connect your GA4 property through it rather than pasting a gtag snippet into theme code. You don't need a Google Merchant Center account to complete GA4 setup — Shopify says so explicitly, which saves a step people often think is mandatory.</p>
    <h3>2. Don't go looking for an "enhanced ecommerce" switch</h3>
    <p>This is where older guides send people in circles. Shopify's current documentation doesn't use that phrase and doesn't describe a toggle: once your GA4 tags are set up, certain ecommerce events are tracked automatically — product views, add-to-cart, purchase. What <em>will</em> silently block everything is private mode: Shopify notes that Google Analytics can't track events until password protection on your online store is deactivated.</p>
    <h3>3. Verify in DebugView, not Realtime</h3>
    <p>Place a test order and watch GA4's DebugView. Confirm exactly one <code>purchase</code> event, with the correct value, currency and transaction ID. This is the step almost everyone skips, and it's where <a href="/insights/ga4-conversion-tracking/">most GA4 tracking problems</a> actually surface.</p>

    <h2>Setting up the Meta pixel and Conversions API</h2>
    <h3>1. Install through the Facebook &amp; Instagram channel</h3>
    <p>Add the <strong>Facebook &amp; Instagram</strong> sales channel (the app is listed as Facebook and Instagram by Meta) and connect your pixel there. If a pixel was previously added to theme code, Shopify is explicit that you must remove it first: leaving both means more than one pixel on the store, "which can result in duplicate or incorrect data in your reports."</p>
    <h3>2. Choose a data-sharing level — this is where CAPI lives</h3>
    <p>There's no separate "enable Conversions API" button. In the channel's data-sharing settings you choose <strong>Standard</strong>, <strong>Enhanced</strong> or <strong>Maximum</strong>. Shopify states that Standard collects browsing behaviour via the pixel; <strong>Enhanced</strong> uses the Conversions API as well as the pixel; <strong>Maximum</strong> uses the API, the pixel, and Meta's latest advertising technology. Enhanced and Maximum also send additional customer information such as name, location and email address — which is why the level you pick is a privacy decision, not just a performance setting.</p>
    <h3>3. Understand what the server-side send does and doesn't do</h3>
    <p>Meta describes the Conversions API as a connection from your server to the systems that optimise targeting and measure outcomes, and recommends implementing it <em>alongside</em> the pixel. That's the accurate framing. It is not a way around consent and it doesn't change what you're allowed to collect — Shopify's own pixel documentation is blunt that merchants remain responsible for consent requirements. In markets configured to require consent, typically the EEA and UK, Shopify states that web pixels run only when visitors have given the required permissions, and that new pixels require Marketing and Analytics permissions by default.</p>

    <h2>Deduplication: the part that's genuinely specific</h2>
    <p>Running the pixel and the Conversions API together means the same purchase can be reported twice, so Meta's deduplication rules matter. Meta documents two methods. The recommended one matches on event ID and name: the pixel's <code>eventID</code> must match the API's <code>event_id</code>, and the pixel's <code>event</code> must match <code>event_name</code>. The alternative uses <code>event_name</code> with <code>fbp</code> and/or <code>external_id</code> consistently across browser and server — and Meta notes that generally only works when the browser event arrives first. There's a window too: Meta discards subsequent duplicates received within <strong>48 hours</strong> of the first event with a given ID, and where events don't differ meaningfully it prefers whichever arrived first. For a Shopify store the practical test is simple — one Purchase event showing both Browser and Server as sources is healthy; two separate Purchase events are not.</p>

    <h2>How to verify everything</h2>
    <ol>
      <li>Place one real test order end to end — a near-zero discount code is fine if you'd rather not refund a full order.</li>
      <li>Confirm a single <code>purchase</code> event in GA4 DebugView with the correct value, currency and transaction ID — not zero, not twice.</li>
      <li>Confirm a single Purchase event in Meta Events Manager with both Browser and Server sources present.</li>
      <li>Compare GA4 revenue against Shopify's own reports for that order. They should be close; don't expect them to match exactly, because the two count differently and GA4 depends on a browser executing a tag.</li>
      <li>Reload the order confirmation page and confirm the purchase event does <em>not</em> fire again.</li>
    </ol>

    <h2>The failures we see most often</h2>
    <ul>
      <li><strong>Two pixels firing</strong> — a leftover theme snippet plus the native channel, doubling events. Shopify warns about this directly.</li>
      <li><strong>Purchase firing on reload</strong> — the confirmation page re-fires on every load, inflating both platforms.</li>
      <li><strong>Currency mismatch</strong> — GA4 property currency set differently from the store's checkout currency, skewing reported revenue quietly.</li>
      <li><strong>Legacy checkout scripts</strong> — tracking that was added through methods Shopify has since sunset, now missing the checkout stage entirely.</li>
      <li><strong>Trusting the dashboard tick</strong> — "connected" confirms a tag loaded, not that the right event fired once with the right value.</li>
    </ul>
    <p>None of this is exotic, but it's the layer most <a href="/industries/d2c-ecommerce/">D2C and ecommerce brands</a> scale spend on top of without ever verifying. Once tracking is confirmed end to end, run the same sanity check on the campaigns themselves with a quick <a href="/insights/audit-your-ad-spend/">ad spend self-audit</a> — and if the store's measurement needs rebuilding rather than patching, that's <a href="/services/growth-strategy-measurement/">tracking and measurement architecture</a> work, not an app install.</p>`
  },
  {
    slug: "startup-marketing-budget-india",
    section: "Strategy",
    readTime: "8 min read",
    date: "28 Jun 2026",
    h1: `Marketing budget for an early-stage startup in India`,
    standfirst: `"What percentage should we spend on marketing?" is the question every founder asks first — and it's the wrong one to start with. Here's how to actually set a marketing budget for an early-stage startup in India: the sensible ranges, the number that matters more than any percentage, and how to budget without setting fire to your runway.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "Marketing Budget for an Early-Stage Startup in India: How to Set It | Tilth",
      "description": "How to set a marketing budget for an early-stage startup in India — sensible percentages, why CAC matters more than a flat %, how to split it, and how to budget without wasting money.",
      "canonical": "https://wearetilth.com/insights/startup-marketing-budget-india/",
      "robots": "index, follow",
      "ogTitle": "Marketing budget for an early-stage startup in India: how to set it",
      "ogDescription": "Sensible percentages, why CAC matters more than a flat %, how to split it, and how to budget without wasting money.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/startup-marketing-budget-india.webp",
      "ogLocale": null,
      "twTitle": "Marketing budget for an early-stage startup in India",
      "twDescription": "How much to spend, why CAC beats a flat %, and how to split it.",
      "twImage": "https://wearetilth.com/assets/insight-cards/startup-marketing-budget-india.webp"
},
    schema: [
      {
            "@context": "https://schema.org",
            "@graph": [
                  {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                              {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://wearetilth.com/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Insights",
                                    "item": "https://wearetilth.com/insights/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Marketing budget for an early-stage startup in India",
                                    "item": "https://wearetilth.com/insights/startup-marketing-budget-india/"
                              }
                        ]
                  },
                  {
                        "@type": "BlogPosting",
                        "headline": "Marketing budget for an early-stage startup in India: how to set it",
                        "description": "How to set a marketing budget for an early-stage startup in India: sensible percentages, why CAC matters more than a flat percentage, how to split the budget, and how to avoid wasting it.",
                        "image": "https://wearetilth.com/assets/insight-cards/startup-marketing-budget-india.webp",
                        "datePublished": "2026-06-28",
                        "dateModified": "2026-06-28",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/startup-marketing-budget-india/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/startup-marketing-budget-india/",
                        "articleSection": "Strategy",
                        "keywords": [
                              "marketing budget for startup India",
                              "startup marketing budget",
                              "how much should a startup spend on marketing",
                              "marketing budget percentage of revenue",
                              "CAC LTV ratio"
                        ],
                        "wordCount": 1550,
                        "author": {
                              "@type": "Person",
                              "name": "Anuja",
                              "jobTitle": "Founder",
                              "url": "https://wearetilth.com/about/"
                        },
                        "publisher": {
                              "@type": "Organization",
                              "name": "Tilth",
                              "url": "https://wearetilth.com/",
                              "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://wearetilth.com/favicon.svg"
                              }
                        }
                  },
                  {
                        "@type": "FAQPage",
                        "mainEntity": [
                              {
                                    "@type": "Question",
                                    "name": "How much should an early-stage startup spend on marketing in India?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "A common starting point is 10–20% of revenue once you have some, and roughly 15–30% of monthly burn if you're pre-revenue. But the percentage is a sanity check, not the real answer — the budget should be driven by how many customers you want and what each one costs to acquire (your CAC), capped at what you can afford to lose while you're still learning which channels work."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "What percentage of revenue should go to marketing for a startup?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Early-stage startups with revenue often allocate 10–20%, rising to 20–40% only once channels are proven and profitable. Aggressive growth stages spend more. Treat these as ranges to validate against your own unit economics rather than rules to follow blindly."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Is ad spend separate from the agency or tools budget?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Yes. Your marketing budget is really several numbers: the media/ad spend paid to Google, Meta and others; any agency or freelancer fees; and tools. When you plan a budget, separate the ad spend from the management fee so you know exactly what's buying reach versus what's buying help."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "What is a good LTV to CAC ratio?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Most investors look for an LTV:CAC ratio of at least 3:1, meaning the lifetime value of a customer should be at least three times what it costs to acquire them. Below that, scaling spend usually loses money. Your marketing budget should be sized so that acquiring customers stays inside this ratio."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How do I set my first marketing budget?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Pick a realistic target number of customers per month, estimate what each costs to acquire (CAC), multiply the two, add any agency or tool costs, and cap the total at an amount you can afford to treat as a learning experiment. Before you spend it, make sure your tracking is accurate — otherwise you can't tell which part of the budget is working."
                                    }
                              }
                        ]
                  }
            ]
      }
],
    faqHeading: `Startup marketing budget — FAQs`,
    faq: [
      { q: `How much should an early-stage startup spend on marketing in India?`,
        a: `<p>A common starting point is 10–20% of revenue once you have some, and roughly 15–30% of monthly burn if you're pre-revenue. But the percentage is a sanity check — the real budget is driven by how many customers you want and what each costs (CAC), capped at what you can afford to lose while learning.</p>` },
      { q: `What percentage of revenue should go to marketing?`,
        a: `<p>Early-stage startups with revenue often allocate 10–20%, rising to 20–40% only once channels are proven and profitable. Treat these as ranges to validate against your unit economics, not rules to follow blindly.</p>` },
      { q: `Is ad spend separate from the agency or tools budget?`,
        a: `<p>Yes — separate the media spend (paid to Google, Meta, etc.) from any agency/freelancer fee and tools, so you know what's buying reach versus help. More on fees in <a href="/insights/marketing-agency-cost-india/">what a marketing agency costs in India</a>.</p>` },
      { q: `What is a good LTV to CAC ratio?`,
        a: `<p>At least 3:1 — a customer should be worth three times what they cost to acquire. Below that, scaling spend usually loses money.</p>` },
      { q: `How do I set my first marketing budget?`,
        a: `<p>Target customers/month × estimated CAC, plus fees and tools, capped at what you can afford to lose while learning — and fix your tracking before you spend it.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has 10+ years of hands-on growth experience across 10+ industries helping startups spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Not sure your numbers can be trusted yet?`, body: `A Foundation Audit checks whether your tracking and attribution are sound — so the budget you set is measured against reality, not a guess. No pitch attached.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>Every early-stage founder wants a clean answer: "spend X% of revenue and you're done." The benchmarks exist, and they're a useful gut-check — but if you set your <strong>marketing budget</strong> off a percentage alone, you'll either starve a channel that was about to work or pour money into one you can't even measure. This is how to set a startup marketing budget that's tied to reality, not a rule of thumb.</p>

    <h2>The quick answer: sensible ranges</h2>
    <p>If you just need a starting band to sanity-check against, here's where most early-stage startups land:</p>

    <div data-tbl><table class="budget-table">
      <thead>
        <tr><th>Stage</th><th>Typical marketing budget</th></tr>
      </thead>
      <tbody>
        <tr><td data-th="Stage">Pre-revenue / very early</td><td data-th="Typical marketing budget">~15–30% of monthly burn</td></tr>
        <tr><td data-th="Stage">Early revenue, validating channels</td><td data-th="Typical marketing budget">~10–20% of revenue</td></tr>
        <tr><td data-th="Stage">Proven channels, scaling growth</td><td data-th="Typical marketing budget">~20–40% of revenue</td></tr>
      </tbody>
    </table><p class="price-note">Indicative ranges to validate against your own numbers — not targets to hit. "Budget" here means total marketing spend, including ad spend, fees, and tools.</p></div>

    <p>Use these to check you're not wildly off. But notice the trap: a percentage of <em>revenue</em> is circular for a company that's trying to <em>create</em> revenue. So the percentage is the sanity check — not the method.</p>

    <h2>Why "% of revenue" is the wrong place to start</h2>
    <p>A budget is an input you control; revenue is an output you're trying to grow. Anchoring spend to a percentage of revenue means you under-invest exactly when you most need to find your first channels, and over-invest the moment a good month tempts you to scale something unproven. The number that should drive your budget isn't a percentage at all — it's how much it costs you to acquire a customer.</p>

    <blockquote>Don't budget a percentage of revenue you don't have yet. Budget the number of customers you want — and what each one actually costs.</blockquote>

    <h2>The number that actually matters: your CAC</h2>
    <p>Your <strong>customer acquisition cost (CAC)</strong> is what it costs, all-in, to win one paying customer. Size your budget around it like this:</p>
    <ul>
      <li>Decide a realistic <strong>target: how many customers per month</strong> you want to add.</li>
      <li>Estimate your <strong>CAC</strong> for the channels you'll use (start rough; it gets sharper with data).</li>
      <li><strong>Budget ≈ target customers × CAC</strong>, plus agency/tool costs — then cap it at what you can afford to lose while learning.</li>
    </ul>
    <p>And keep one ratio in view: most investors want <strong>LTV:CAC of at least 3:1</strong> — a customer should be worth at least three times what they cost to acquire. If your spend pushes CAC past that line, the answer isn't a bigger budget; it's a better foundation.</p>

    <h2>The catch: a budget is only as good as your tracking</h2>
    <p>Here's where most early-stage marketing budgets quietly fail. You can size everything perfectly around CAC — but if your <a href="/insights/ga4-conversion-tracking/">conversion tracking</a> is wrong, your CAC is fiction, and every allocation decision after it is a guess. Before you commit a rupee, make sure you can actually measure which spend produces which customer. That's not a nice-to-have at this stage; it's the difference between a budget and a gamble. It's exactly what a <a href="/insights/marketing-foundation-audit/">foundation audit</a> checks first.</p>

    <h2>How to split an early-stage budget</h2>
    <p>Once you have a number, resist spreading it thin across six channels. A sane early-stage split:</p>
    <ul>
      <li><strong>~60–70% into one or two channels you're proving</strong> — go deep enough to get a real read, not a dabble.</li>
      <li><strong>~20% as a test budget</strong> for new channels, ring-fenced so a failed test doesn't dent the core.</li>
      <li><strong>~10–15% into brand and content</strong> that compounds slowly (SEO, positioning) — small but consistent.</li>
    </ul>
    <p>Also separate the two numbers hiding inside "budget": the <strong>ad spend</strong> you pay platforms, and any <strong>agency or freelancer fee</strong>. (We break the fee side down in <a href="/insights/marketing-agency-cost-india/">what a marketing agency costs in India</a>, and when to hire one at all in <a href="/insights/agency-vs-freelancer-vs-inhouse/">agency vs freelancer vs in-house</a>.)</p>

    <h2>Mistakes that waste an early budget</h2>
    <ul>
      <li><strong>Spending before tracking works</strong> — you scale on numbers you can't trust.</li>
      <li><strong>Copying a percentage</strong> from a blog without checking your own CAC and runway.</li>
      <li><strong>No ring-fenced test budget</strong> — so you never learn, or one bad test scares you off the channel.</li>
      <li><strong>Scaling on an unproven CAC</strong> after one good week.</li>
      <li><strong>Spreading thin</strong> across every channel instead of proving one.</li>
    </ul>

    <h2>A simple way to set your first budget</h2>
    <p>Pick a target number of customers per month. Estimate CAC. Multiply. Add fees and tools. Cap it at a number you can lose while learning. Fix tracking before you spend it. That's a budget grounded in your business — not someone else's percentage.</p>`
  },
  {
    slug: "what-is-performance-marketing",
    section: "Strategy",
    readTime: "6 min read",
    date: "13 May 2026",
    h1: `What is performance marketing (and how it differs from digital marketing)?`,
    standfirst: `The two terms get used interchangeably, and that mix-up leads to real budgeting mistakes. Here's a plain definition of performance marketing, how it fits inside the wider umbrella of digital marketing, and why the entire approach depends on tracking you can actually trust.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "What Is Performance Marketing? (And How It Differs from Digital Marketing) | Tilth",
      "description": "What performance marketing actually means, how it differs from digital marketing generally, what counts and what doesn't, and why it lives or dies on tracking.",
      "canonical": "https://wearetilth.com/insights/what-is-performance-marketing/",
      "robots": "index, follow",
      "ogTitle": "What is performance marketing (and how it differs from digital marketing)?",
      "ogDescription": "What performance marketing actually means, what counts and what doesn't, and why it lives or dies on tracking.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/what-is-performance-marketing.webp",
      "ogLocale": null,
      "twTitle": "What is performance marketing (and how it differs from digital marketing)?",
      "twDescription": "A plain-English definition, and why performance marketing lives or dies on tracking.",
      "twImage": "https://wearetilth.com/assets/insight-cards/what-is-performance-marketing.webp"
},
    schema: [
      {
            "@context": "https://schema.org",
            "@graph": [
                  {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                              {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://wearetilth.com/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Insights",
                                    "item": "https://wearetilth.com/insights/"
                              },
                              {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "What is performance marketing (and how it differs from digital marketing)?",
                                    "item": "https://wearetilth.com/insights/what-is-performance-marketing/"
                              }
                        ]
                  },
                  {
                        "@type": "BlogPosting",
                        "headline": "What is performance marketing (and how it differs from digital marketing)?",
                        "description": "What performance marketing actually means, how it differs from digital marketing generally, what counts and what doesn't, and why it lives or dies on tracking.",
                        "image": "https://wearetilth.com/assets/insight-cards/what-is-performance-marketing.webp",
                        "datePublished": "2026-05-13",
                        "dateModified": "2026-05-13",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/what-is-performance-marketing/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/what-is-performance-marketing/",
                        "articleSection": "Strategy",
                        "keywords": [
                              "what is performance marketing",
                              "performance marketing vs digital marketing",
                              "performance marketing meaning",
                              "performance marketing explained",
                              "digital marketing vs performance marketing"
                        ],
                        "wordCount": 1400,
                        "author": {
                              "@type": "Person",
                              "name": "Anuja",
                              "jobTitle": "Founder",
                              "url": "https://wearetilth.com/about/"
                        },
                        "publisher": {
                              "@type": "Organization",
                              "name": "Tilth",
                              "url": "https://wearetilth.com/",
                              "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://wearetilth.com/favicon.svg"
                              }
                        }
                  },
                  {
                        "@type": "FAQPage",
                        "mainEntity": [
                              {
                                    "@type": "Question",
                                    "name": "What is performance marketing in simple terms?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Performance marketing is any marketing activity where you pay for, and measure success by, a specific measurable action — a click, a lead, a sale — rather than paying for exposure alone. Google Ads, Meta Ads, and affiliate marketing are common examples."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Is performance marketing the same as digital marketing?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "No. Digital marketing is the broader umbrella covering everything done through digital channels — SEO, social media, email, content, and performance marketing itself. Performance marketing is a subset defined specifically by being trackable and paid based on measurable outcomes."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "What channels count as performance marketing?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Google Ads, Meta Ads, other paid social advertising, affiliate marketing, and some influencer arrangements paid on commission all count, because each ties spend to a specific, trackable action. Organic SEO and brand awareness campaigns generally don't, since they aren't priced or measured the same way."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Does SEO count as performance marketing?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Not in the strict sense, because you don't pay per click or per lead for organic search results. SEO can and should still be measured against leads and revenue, but it doesn't fit the classic performance marketing definition of paying directly for a measurable outcome."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Why is tracking so important for performance marketing specifically?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Because performance marketing's entire premise is paying based on results, broken tracking doesn't just distort your reporting — it breaks the mechanism the whole approach depends on. A performance campaign running on inaccurate conversion data is optimising toward numbers that don't reflect reality."
                                    }
                              }
                        ]
                  }
            ]
      }
],
    faqHeading: `What is performance marketing — FAQs`,
    faq: [
      { q: `What is performance marketing in simple terms?`,
        a: `<p>Any marketing activity where you pay for, and measure success by, a specific measurable action — a click, lead, or sale — rather than paying for exposure alone. Google Ads, Meta Ads, and affiliate marketing are common examples.</p>` },
      { q: `Is performance marketing the same as digital marketing?`,
        a: `<p>No. Digital marketing is the broader umbrella covering SEO, social, email, content, and performance marketing itself. Performance marketing is a subset defined by being trackable and paid based on measurable outcomes.</p>` },
      { q: `What channels count as performance marketing?`,
        a: `<p>Google Ads, Meta Ads, other paid social advertising, affiliate marketing, and commission-based influencer arrangements — each ties spend to a specific trackable action.</p>` },
      { q: `Does SEO count as performance marketing?`,
        a: `<p>Not in the strict sense — you don't pay per click or lead for organic results. SEO should still be measured against leads and revenue, but it doesn't fit the classic definition.</p>` },
      { q: `Why is tracking so important for performance marketing?`,
        a: `<p>Because its entire premise is paying based on results, broken tracking breaks the mechanism the whole approach depends on — a campaign optimising on inaccurate data is chasing numbers that don't reflect reality.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has 10+ years of hands-on growth experience across 10+ industries, helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Make sure your performance marketing is measuring the truth`, body: `A Foundation Audit checks whether your tracking is accurate enough to trust the "performance" in performance marketing — before you scale spend on numbers that might be wrong.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>"We want to focus on performance marketing" and "we want to do digital marketing" get said as if they mean the same thing, and they don't quite. The mix-up matters because it shapes what a founder expects an agency or hire to deliver. Here's a clear, plain-English answer to <strong>what performance marketing actually is</strong> and how it's different from digital marketing generally.</p>

    <h2>The short definition</h2>
    <p>Performance marketing is any marketing activity where you <strong>pay for, and measure success by, a specific, trackable action</strong> — a click, a lead, a sale — rather than paying for exposure or reach alone. If you can draw a straight line from a rupee spent to a measurable result, it's performance marketing.</p>

    <h2>Digital marketing vs performance marketing: the actual difference</h2>
    <p><strong>Digital marketing</strong> is the umbrella term for everything done through digital channels: SEO, social media management, email marketing, content, PR, and performance marketing itself. <strong>Performance marketing</strong> is one slice of that umbrella, defined narrowly by two things: it's paid based on a measurable outcome, and that outcome is trackable end to end. Every performance marketing activity is digital marketing. Most digital marketing activities are not performance marketing.</p>

    <h2>What counts as performance marketing</h2>
    <ul>
      <li><strong>Google Ads and Meta Ads</strong> — you pay per click or per result, and can trace spend to outcomes.</li>
      <li><strong>Affiliate marketing</strong> — partners are paid a commission per sale or lead they generate, directly tied to performance.</li>
      <li><strong>Some influencer arrangements</strong> — where payment is commission-based rather than a flat fee for a post.</li>
      <li><strong>Retargeting campaigns</strong> — spend is directly tied to re-engaging users who took a specific prior action.</li>
    </ul>

    <h2>What doesn't count (and why it still matters)</h2>
    <p>Brand marketing, most organic social content, PR, and traditional SEO don't fit the strict definition, because you're not paying per measurable outcome — you're investing in awareness, reputation, or discoverability that compounds over time rather than converting on a 1:1 basis. That doesn't make these activities less valuable; it makes them a <em>different kind</em> of investment, with a different measurement horizon. Treating brand-building work like a performance channel — expecting immediate, attributable ROI from every rupee — sets it up to look like it's failing when it's actually just a slower-return asset.</p>

    <blockquote>Performance marketing answers "did this specific spend produce this specific result?" Brand marketing answers a slower, harder question: "does more of the world trust us than it did last year?" Both matter. Only one fits neatly into a spreadsheet.</blockquote>

    <h2>Why performance marketing lives or dies on tracking</h2>
    <p>Performance marketing's entire premise is paying based on results — which means its entire premise collapses if the results being measured aren't accurate. A Google Ads campaign optimising toward broken conversion tracking isn't underperforming marketing; it's a well-functioning algorithm chasing the wrong number, because <a href="/insights/ga4-conversion-tracking/">the tracking underneath it</a> was never verified. This is the reason "performance marketing" and "foundation work" aren't competing priorities — the second makes the first actually mean what it claims to mean.</p>

    <h2>When a startup should lean into performance marketing</h2>
    <p>Performance marketing tends to make the most sense once you have a validated offer and can afford to spend on discovering what converts — trackable, results-based spend is a genuinely efficient way to learn quickly. It's a natural fit for the early spend decisions covered in a <a href="/insights/startup-marketing-budget-india/">startup marketing budget</a>, precisely because every rupee is meant to be traceable to an outcome.</p>

    <h2>The risk of over-indexing on performance marketing too early</h2>
    <p>Because performance marketing is measurable, it's tempting to treat it as the whole strategy — if you can't measure brand awareness as cleanly, why fund it at all? In practice, a business that only ever does performance marketing tends to hit a ceiling: paid channels get more expensive as you scale, and without any brand or organic presence building underneath, every single sale has to be bought fresh, every time. The measurability of performance marketing is a strength for learning fast, not a complete substitute for a broader marketing foundation.</p>`
  },
];

export const insightArticleBySlug = new Map(insightArticles.map(a => [a.slug, a]));

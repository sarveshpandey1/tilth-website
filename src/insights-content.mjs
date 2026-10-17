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
      img: `<img class="blog-card__media" src="/assets/insight-cards/first-marketing-hire-startup.webp" alt="" loading="lazy" width="1000" height="500">`
    },
    {
      slug: "startup-marketing-budget-india", href: "/insights/startup-marketing-budget-india/", cat: "strategy",
      catLabel: `Strategy`,
      title: `Marketing budget for an early-stage startup in India`,
      excerpt: `"What percentage should we spend?" is the wrong first question. How to set a startup marketing budget tied to your CAC, not a rule of thumb — and why tracking has to come before the spend.`,
      meta: `8 min read · 28 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/startup-marketing-budget-india.webp" alt="" loading="lazy" width="1000" height="500">`
    },
    {
      slug: "marketing-agency-for-d2c-brands", href: "/insights/marketing-agency-for-d2c-brands/", cat: "hiring",
      catLabel: `Hiring &amp; Agencies`,
      title: `How to choose a marketing agency for your D2C brand in India`,
      excerpt: `D2C fails differently — and most agencies pitch the same generic deck. What actually matters when choosing a D2C marketing agency: D2C experience, retention, honest tracking, and the red flags to walk from.`,
      meta: `8 min read · 27 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/marketing-agency-for-d2c-brands.webp" alt="" loading="lazy" width="1000" height="500">`
    },
    {
      slug: "questions-before-hiring-marketing-agency", href: "/insights/questions-before-hiring-marketing-agency/", cat: "hiring",
      catLabel: `Hiring &amp; Agencies`,
      title: `12 questions to ask before hiring a marketing agency`,
      excerpt: `The pitch always sounds good. These twelve questions — on strategy, reporting, team, and terms — and their red-flag answers tell you what's really underneath it before you sign.`,
      meta: `9 min read · 23 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/questions-before-hiring-marketing-agency.webp" alt="" loading="lazy" width="1000" height="500">`
    },
    {
      slug: "agency-vs-freelancer-vs-inhouse", href: "/insights/agency-vs-freelancer-vs-inhouse/", cat: "hiring",
      catLabel: `Hiring &amp; Agencies`,
      title: `Marketing agency vs freelancer vs in-house: which is right for your startup?`,
      excerpt: `Hire an agency, bring on a freelancer, or build in-house? An honest comparison of costs and trade-offs for early-stage startups — plus the one thing that matters more than who you hire.`,
      meta: `8 min read · 23 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/agency-vs-freelancer-vs-inhouse.webp" alt="" loading="lazy" width="1000" height="500">`
    },
    {
      slug: "marketing-agency-cost-india", href: "/insights/marketing-agency-cost-india/", cat: "hiring",
      catLabel: `Hiring &amp; Agencies`,
      title: `How much does a digital marketing agency cost in India?`,
      excerpt: `An honest 2026 breakdown — typical retainers, pricing by service, what's included versus ad spend, and how to budget without overpaying for a thin package.`,
      meta: `8 min read · 23 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/marketing-agency-cost-india.webp" alt="" loading="lazy" width="1000" height="500">`
    },
    {
      slug: "marketing-foundation-audit", href: "/insights/marketing-foundation-audit/", cat: "tracking",
      catLabel: `Tracking &amp; Attribution`,
      title: `What a marketing foundation audit actually checks`,
      excerpt: `Most budgets are scaled on numbers nobody has checked. Here's exactly what a marketing foundation audit reviews — tracking, attribution, targeting, partnerships — and why it comes before you spend more.`,
      meta: `7 min read · 22 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/marketing-foundation-audit.webp" alt="" loading="lazy" width="1000" height="500">`
    },
    {
      slug: "audit-your-ad-spend", href: "/insights/audit-your-ad-spend/", cat: "paid-ads",
      catLabel: `Paid Ads`,
      title: `How to tell if your ad spend is actually profitable (a 5-minute self-audit)`,
      excerpt: `Busy dashboards are not the same as profit. Here are five checks you can run today to find out whether your ad budget is building the business — or quietly leaking out the bottom.`,
      meta: `5 min read · 17 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/audit-your-ad-spend.webp" alt="" loading="lazy" width="1000" height="500">`
    },
    {
      slug: "ga4-conversion-tracking", href: "/insights/ga4-conversion-tracking/", cat: "tracking",
      catLabel: `Tracking &amp; Attribution`,
      title: `GA4 conversion tracking: the setup checklist before you scale ads`,
      excerpt: `If GA4 is reporting the wrong conversions, every ad decision downstream is built on a lie. A practical checklist to get it right before you spend more.`,
      meta: `6 min read · 17 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/ga4-conversion-tracking.webp" alt="" loading="lazy" width="1000" height="500">`
    },
    {
      slug: "meta-ads-not-converting", href: "/insights/meta-ads-not-converting/", cat: "paid-ads",
      catLabel: `Paid Ads`,
      title: `Meta Ads not converting? A 7-point tracking audit`,
      excerpt: `Before you blame the creative or the audience, rule out tracking. Seven checks — pixel, Conversions API, events, attribution — that catch the real culprit.`,
      meta: `6 min read · 17 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/meta-ads-not-converting.webp" alt="" loading="lazy" width="1000" height="500">`
    },
    {
      slug: "affiliate-program-not-converting", href: "/insights/affiliate-program-not-converting/", cat: "seo-growth",
      catLabel: `SEO &amp; Growth`,
      title: `Why your affiliate program isn't driving revenue (and how to fix it)`,
      excerpt: `Plenty of partners, plenty of clicks, almost no revenue. Five reasons your affiliate channel looks busy but contributes nothing — and how to rebuild it.`,
      meta: `6 min read · 17 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/affiliate-program-not-converting.webp" alt="" loading="lazy" width="1000" height="500">`
    },
    {
      slug: "shopify-conversion-tracking-ga4-meta-pixel", href: "/insights/shopify-conversion-tracking-ga4-meta-pixel/", cat: "tracking",
      catLabel: `Tracking &amp; Attribution`,
      title: `How to set up conversion tracking on Shopify (GA4 + Meta Pixel)`,
      excerpt: `Most Shopify stores have "tracking installed" and still can't trust the numbers. A step-by-step guide to setting up GA4 and Meta Pixel — with Conversions API — correctly, including the checkout tracking trap most setups miss.`,
      meta: `8 min read · 12 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/shopify-conversion-tracking-ga4-meta-pixel.webp" alt="" loading="lazy" width="1000" height="500">`
    },
    {
      slug: "google-ads-budget-india-startups", href: "/insights/google-ads-budget-india-startups/", cat: "paid-ads",
      catLabel: `Paid Ads`,
      title: `How much should you spend on Google Ads in India to start?`,
      excerpt: `"What's the minimum budget?" is the wrong first question. How to calculate a starting Google Ads budget from your own numbers, minimum viable budgets by campaign type, and what actually eats spend before it converts.`,
      meta: `7 min read · 7 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/google-ads-budget-india-startups.webp" alt="" loading="lazy" width="1000" height="500">`
    },
    {
      slug: "google-ads-vs-meta-ads-startup", href: "/insights/google-ads-vs-meta-ads-startup/", cat: "paid-ads",
      catLabel: `Paid Ads`,
      title: `Google Ads vs Meta Ads: which should a startup start with?`,
      excerpt: `You can't run both channels well on a limited budget. The real difference between Google Ads and Meta Ads — intent versus discovery — and a straightforward way to decide which one earns your first rupee.`,
      meta: `7 min read · 2 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/google-ads-vs-meta-ads-startup.webp" alt="" loading="lazy" width="1000" height="500">`
    },
    {
      slug: "seo-not-bringing-leads", href: "/insights/seo-not-bringing-leads/", cat: "seo-growth",
      catLabel: `SEO &amp; Growth`,
      title: `Why your SEO isn't bringing leads (and how to fix it)`,
      excerpt: `Traffic is climbing and leads aren't. This is almost never "SEO doesn't work" — it's usually one of five specific, fixable problems. Here's how to find which one you have.`,
      meta: `7 min read · 28 May 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/seo-not-bringing-leads.webp" alt="" loading="lazy" width="1000" height="500">`
    },
    {
      slug: "measure-influencer-marketing-roi", href: "/insights/measure-influencer-marketing-roi/", cat: "seo-growth",
      catLabel: `SEO &amp; Growth`,
      title: `How to measure influencer marketing ROI properly`,
      excerpt: `"It got a lot of engagement" is not an ROI number. The metrics that actually predict revenue, the tracking setup that has to happen before you brief anyone, and a simple formula to calculate real return.`,
      meta: `7 min read · 23 May 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/measure-influencer-marketing-roi.webp" alt="" loading="lazy" width="1000" height="500">`
    },
    {
      slug: "marketing-attribution-explained-simply", href: "/insights/marketing-attribution-explained-simply/", cat: "tracking",
      catLabel: `Tracking &amp; Attribution`,
      title: `Marketing attribution for small businesses, explained simply`,
      excerpt: `"Attribution" sounds built to confuse founders into hiring someone. It's a simple idea: which touchpoint gets credit for a sale? What that means in plain English, and which model actually makes sense for a small business.`,
      meta: `7 min read · 18 May 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/marketing-attribution-explained-simply.webp" alt="" loading="lazy" width="1000" height="500">`
    },
    {
      slug: "what-is-performance-marketing", href: "/insights/what-is-performance-marketing/", cat: "seo-growth",
      catLabel: `SEO &amp; Growth`,
      title: `What is performance marketing (and how it differs from digital marketing)?`,
      excerpt: `The two terms get used interchangeably, and that mix-up leads to real budgeting mistakes. A plain definition of performance marketing, and why the whole approach depends on tracking you can actually trust.`,
      meta: `6 min read · 13 May 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/what-is-performance-marketing.webp" alt="" loading="lazy" width="1000" height="500">`
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
      "ogImage": "https://wearetilth.com/og-image.png",
      "ogLocale": null,
      "twTitle": "Why your affiliate program isn't driving revenue (and how to fix it)",
      "twDescription": "Five reasons your affiliate channel looks busy but contributes almost nothing.",
      "twImage": "https://wearetilth.com/og-image.png"
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
                        "image": "https://wearetilth.com/anuja.jpg",
                        "datePublished": "2026-06-17",
                        "dateModified": "2026-06-17",
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
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of Tilth, a foundation-first marketing agency in Bengaluru. She has spent 10+ years building affiliate programs across fintech, crypto, edtech, and D2C — rebuilding dead channels into real revenue. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Affiliate channel busy but not paying off?`, body: `A free foundation audit will show you which partners are incremental, which are coupon-stacking, and where your payouts are eating margin. No pitch attached.`,
      href: "/contact/", label: `Request a free audit` },
    bodyHtml: `<p>Affiliate marketing is one of the few channels where you only pay for results — which makes it strange how often it produces none. The usual story: a brand signs up dozens of partners, the dashboard fills with clicks and sign-ups, and a year later nobody can point to revenue the channel actually caused. Here's why that happens, and how to turn it around.</p>

    <h2>1. You recruited for reach, not fit</h2>
    <p>Most programs onboard anyone with an audience. But a partner whose audience doesn't match your buyer sends traffic that never converts — it just inflates the click count. <strong>Vet partners on audience fit and unit economics first</strong>, not on follower numbers. Ten partners whose audience is your customer will beat a hundred who merely have a big list.</p>

    <h2>2. Payouts reward the wrong action</h2>
    <p>If you pay on sign-ups, leads, or installs, you'll get sign-ups, leads, and installs — many of them junk. Partners optimise for whatever you pay them for. <strong>Tie payouts to revenue-bearing actions</strong> (a first purchase, a funded account, a paid subscription), and the same partners suddenly send very different traffic.</p>

    <blockquote>An affiliate program pays for exactly what you reward. Reward activity and you'll buy activity.</blockquote>

    <h2>3. No one back-calculates payout against margin</h2>
    <p>A 20% commission on a discounted, free-shipping order can wipe out your margin entirely — so the channel "works" on the dashboard while losing money in reality. Run the numbers: <strong>payout plus discount plus fulfilment against contribution margin</strong>. If a partner only converts when stacked with a coupon, they may be costing you, not earning you.</p>

    <h2>4. Last-click attribution is paying coupon and loyalty sites</h2>
    <p>Coupon, cashback, and loyalty sites often swoop in at the last click — capturing credit (and commission) for a sale the customer was already going to make. You end up paying a finder's fee on demand you generated elsewhere. Look at where partners sit in the journey and <strong>cap or exclude bottom-of-funnel coupon partners</strong> unless they're genuinely incremental.</p>

    <h2>5. There's no vetting in, and no pruning out</h2>
    <p>Healthy programs are gardens, not warehouses. You vet partners before they join, and you offboard the ones who send volume but no value. Without that discipline, the program slowly fills with partners who cost attention and budget while contributing nothing.</p>

    <h2>How to rebuild it</h2>
    <p>Start narrow: a handful of partners whose audience is genuinely your customer, payouts tied to real revenue, and a clear back-calculation of margin per partner. Drop the partners who only convert on coupons. Done right, affiliates become one of the most efficient channels you have — we've taken a brand's effectively dead affiliate channel to <strong>5–6% of total trading volume within a year</strong> using exactly this approach.</p>`
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
      "ogImage": "https://wearetilth.com/og-image.png",
      "ogLocale": null,
      "twTitle": "Marketing agency vs freelancer vs in-house: which is right for your startup?",
      "twDescription": "Costs, trade-offs, and when each makes sense — for early-stage startups.",
      "twImage": "https://wearetilth.com/og-image.png"
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
                        "image": "https://wearetilth.com/og-image.png",
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
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has spent 10+ years across fitness, edtech, fintech, SaaS, and D2C, working with startups as a freelancer, an agency partner, and an embedded lead. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Not sure what to hire for yet?`, body: `A free foundation audit shows you exactly what's working and what's broken — so you hire (agency, freelancer, or in-house) for the real gap, not a guessed one. No pitch attached.`,
      href: "/contact/", label: `Request a free audit` },
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
      "ogImage": "https://wearetilth.com/og-image.png",
      "ogLocale": null,
      "twTitle": "Is your ad spend actually profitable? A 5-minute self-audit",
      "twDescription": "Five checks to tell whether your ad budget is building the business or quietly leaking.",
      "twImage": "https://wearetilth.com/og-image.png"
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
                        "image": "https://wearetilth.com/anuja.jpg",
                        "datePublished": "2026-06-17",
                        "dateModified": "2026-06-17",
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
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of Tilth, a foundation-first marketing agency in Bengaluru. She has spent 10+ years across fitness, edtech, fintech, SaaS, and D2C — running paid ads and building affiliate programs, and fixing the same foundational mistakes every time. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Not sure where your spend is leaking?`, body: `That's exactly what the free foundation audit is for. We'll review your current setup and tell you, honestly, what's broken — before you spend more.`,
      href: "/contact/", label: `Request a free audit` },
    bodyHtml: `<p>Most marketing teams can tell you their cost per click, their click-through rate, and how many conversions the dashboard reported last week. Far fewer can answer the only question that actually matters to the business: <em>for every rupee we put into ads, how many came back?</em></p>
    <p>That gap is where budgets quietly die. The campaign looks active, the charts trend up and to the right, and yet the bank balance doesn't move. Before you scale spend — or blame the channel — run these five checks.</p>

    <h2>1. Is your conversion event actually revenue?</h2>
    <p>Open your ad platform and look at what it's optimising toward. If the conversion event is a page view, an "add to cart," a form fill, or a lead — the algorithm is buying you <em>those things</em>, not revenue. Platforms are ruthlessly good at finding people who do the action you reward. Reward the wrong action and you'll get a beautiful dashboard and an empty till.</p>
    <p><strong>The fix:</strong> make sure a purchase (or a qualified, revenue-bearing event) is firing correctly and is the event you optimise toward. Everything downstream depends on this one thing being right.</p>

    <h2>2. Can you see contribution margin by channel?</h2>
    <p>Revenue is not profit. An order with a heavy discount, expensive shipping, and a returned item can cost you money even at a "good" ROAS. If you can't see <strong>contribution margin</strong> — revenue minus the variable costs of fulfilling it — by channel, you're flying on a number that flatters you.</p>

    <h2>3. Are you separating new customers from returning ones?</h2>
    <p>Paid channels love to take credit for customers who would have bought anyway. If your blended ROAS looks healthy but new-customer acquisition is flat, your ads may be subsidising repeat buyers who'd have returned through email or direct. Look at <strong>new-customer ROAS</strong> separately — it's the number that tells you whether the channel is actually growing the business.</p>

    <blockquote>If you only measure what's easy, you'll scale what's comfortable — not what's profitable.</blockquote>

    <h2>4. Do you have one source of truth for attribution?</h2>
    <p>When the ad platform, your analytics tool, and your backend each report a different number, every meeting becomes an argument about whose number is right — and decisions stall. You don't need perfect attribution. You need <strong>one agreed source of truth</strong> that everyone trusts enough to act on, even if it's imperfect.</p>

    <h2>5. Do you know your payback window?</h2>
    <p>For anything with repeat purchases or subscriptions, a single transaction rarely pays back the acquisition cost. What matters is how long it takes a cohort of new customers to return what you spent acquiring them. If you don't know your <strong>payback window</strong>, you can't tell the difference between a campaign that's "losing money" and one that's investing in customers who'll be profitable in ninety days.</p>

    <h2>What "good" looks like</h2>
    <p>A healthy paid setup isn't the one with the prettiest dashboard. It's the one where you can trace a rupee of spend to a rupee of margin, see new-customer economics clearly, and make a scaling decision without it being a gamble. When the foundation is right, scaling is just maths.</p>
    <p>If two or more of these checks made you uncomfortable, that's normal — and it's fixable. It almost always lives in the foundation: the tracking, the events, the definitions. Fix that first, and the channel you were about to give up on often turns out to work fine.</p>`
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
      "ogImage": "https://wearetilth.com/og-image.png",
      "ogLocale": null,
      "twTitle": "Your startup's first marketing hire: who to hire first",
      "twDescription": "Who to hire first, what to pay in India in 2026, and how to set them up to succeed.",
      "twImage": "https://wearetilth.com/og-image.png"
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
                        "image": "https://wearetilth.com/og-image.png",
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
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has spent 10+ years across fitness, edtech, fintech, SaaS, and D2C helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Give your first marketing hire a clean foundation`, body: `A free foundation audit checks your tracking, attribution, and targeting before you bring someone on — so their first month is spent testing channels, not debugging broken data. No pitch attached.`,
      href: "/contact/", label: `Request a free audit` },
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
      "ogImage": "https://wearetilth.com/og-image.png",
      "ogLocale": null,
      "twTitle": "GA4 conversion tracking: the setup checklist before you scale ads",
      "twDescription": "Get conversion tracking right before you scale spend — a practical GA4 checklist.",
      "twImage": "https://wearetilth.com/og-image.png"
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
                        "image": "https://wearetilth.com/anuja.jpg",
                        "datePublished": "2026-06-17",
                        "dateModified": "2026-06-17",
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
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of Tilth, a foundation-first marketing agency in Bengaluru. She has spent 10+ years across fitness, edtech, fintech, SaaS, and D2C — rebuilding tracking and scaling spend against numbers teams can actually trust. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Not sure your tracking is telling the truth?`, body: `A free foundation audit checks exactly this — your events, your conversions, and whether the number you're scaling on is real. No pitch attached.`,
      href: "/contact/", label: `Request a free audit` },
    bodyHtml: `<p>GA4 confused almost everyone when it replaced Universal Analytics. The model changed from sessions to events, the labels moved, and a lot of accounts were migrated by clicking "accept defaults." The result: dashboards that look complete but count the wrong things. And because your ad platforms often import conversions <em>from</em> GA4, a quiet error here poisons every campaign decision you make.</p>
    <p>Before you scale spend, walk this checklist.</p>

    <h2>1. Mark the right events as key events</h2>
    <p>In GA4, a "conversion" is now a <strong>key event</strong> — an event you've explicitly flagged as important. Many accounts mark too many: page views, scrolls, "engaged sessions." When everything is a conversion, nothing is. Pick the one or two events that represent real business value (a purchase, a qualified lead) and mark only those.</p>

    <h2>2. Send the purchase event with value and currency</h2>
    <p>A purchase event with no <code>value</code> and no <code>currency</code> tells you <em>that</em> someone bought, not <em>how much</em> they spent. Without value, you can't compute ROAS, and the ad platforms can't optimise toward revenue. Confirm your <strong>purchase event fires with the correct order value and currency (INR)</strong> on the real thank-you/confirmation step — not on a button click.</p>

    <h2>3. Stop counting soft actions as conversions</h2>
    <p>"Add to cart," "begin checkout," form views, and newsletter signups are useful events — but they are not conversions, and they should not be the event your ads optimise toward. Reward a soft action and the algorithm will happily buy you cheap soft actions all day while revenue stays flat.</p>

    <blockquote>The platform isn't lying to you. It's giving you exactly what you told it to value.</blockquote>

    <h2>4. Connect GA4 to Google Ads — and import the right conversion</h2>
    <p>Link GA4 and Google Ads, but be deliberate about what you import. A common mistake is importing several GA4 key events into Ads <em>and</em> running Google's own conversion tag, so the same purchase is counted twice. Decide on one source of truth for the purchase conversion and optimise toward that single, de-duplicated event.</p>

    <h2>5. Plan for the cookieless gaps</h2>
    <p>Browser restrictions and consent banners mean client-side tags miss a meaningful share of conversions. For anything that matters, plan for <strong>server-side tracking</strong> (server-side GTM or the Measurement Protocol) so a purchase confirmed by your backend is still recorded even when the browser tag is blocked. You don't need this on day one, but you need a plan for it before you scale.</p>

    <h2>6. Sanity-check GA4 against your backend</h2>
    <p>The fastest way to catch a broken setup: take one day's orders from your actual backend (Shopify, your database, your payment gateway) and compare the count and total revenue to GA4 for the same day. If they're wildly different, your tracking is wrong — and you've just saved yourself from scaling on a fictional number.</p>

    <h2>What good looks like</h2>
    <p>A trustworthy GA4 setup has a small number of meaningful key events, a purchase event with accurate value, one de-duplicated conversion feeding your ads, a plan for the cookieless gap, and numbers that roughly reconcile with your backend. Get those right and your ad spend decisions stop being guesses.</p>`
  },
  {
    slug: "google-ads-budget-india-startups",
    section: "Paid Ads",
    readTime: "7 min read",
    date: "7 Jun 2026",
    h1: `How much should you spend on Google Ads in India to start?`,
    standfirst: `"What's the minimum budget?" is the question every founder asks, and it's the wrong first one. Here's how to work out a starting Google Ads budget from your own numbers — plus minimum viable budgets by campaign type, and the mistake that wastes spend at any budget size.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "How Much Should You Spend on Google Ads in India to Start? | Tilth",
      "description": "A practical 2026 guide to setting your starting Google Ads budget in India — how to calculate it from your numbers, minimum budgets by campaign type, and what eats spend first.",
      "canonical": "https://wearetilth.com/insights/google-ads-budget-india-startups/",
      "robots": "index, follow",
      "ogTitle": "How much should you spend on Google Ads in India to start?",
      "ogDescription": "How to calculate your starting Google Ads budget from your own numbers, minimum budgets by campaign type, and what eats spend before it converts.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/og-image.png",
      "ogLocale": null,
      "twTitle": "How much should you spend on Google Ads in India to start?",
      "twDescription": "How to calculate a starting Google Ads budget from your own numbers — not a rule of thumb.",
      "twImage": "https://wearetilth.com/og-image.png"
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
                        "description": "A practical 2026 guide to setting your starting Google Ads budget in India — how to calculate it from your own numbers, minimum budgets by campaign type, and what eats spend first.",
                        "image": "https://wearetilth.com/og-image.png",
                        "datePublished": "2026-06-07",
                        "dateModified": "2026-06-07",
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
                                    "name": "How much should a startup spend on Google Ads in India to start?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "A common starting point in India is ₹30,000–₹75,000 per month in ad spend for a single, focused campaign, run for at least four to six weeks before judging results. The right number depends more on your cost-per-click and how much data you need to make a decision than on a flat rule of thumb."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Is there a minimum budget for Google Ads to work?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Google Ads has no official minimum, but in practice a budget that buys fewer than roughly 15-20 clicks a day rarely generates enough data to optimise from. For most categories in India that means at least ₹500-₹1,500 a day, depending on cost-per-click."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Should I start with Search, Shopping, or Performance Max?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "For most early-stage startups, a tightly targeted Search campaign is the right place to start because it's the easiest to control and diagnose. Shopping suits product-based e-commerce with a clean product feed. Performance Max can work well but is harder to diagnose when something's wrong, so it's safer once tracking is verified and you have some baseline data."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Why does my Google Ads budget disappear without results?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "The most common cause isn't the budget size — it's broken or incomplete conversion tracking, so Google's algorithm is optimising toward the wrong signal or no signal at all. Verifying GA4 and Google Ads conversion tracking before you spend is usually more valuable than increasing the budget."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "When should I increase my Google Ads budget?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Increase spend once you have a verified cost-per-acquisition from at least a few weeks of clean data and it's within a range your business can sustain. Scaling before that just multiplies whatever is or isn't working, good or bad."
                                    }
                              }
                        ]
                  }
            ]
      }
],
    faqHeading: `Google Ads budget for India startups — FAQs`,
    faq: [
      { q: `How much should a startup spend on Google Ads in India to start?`,
        a: `<p>A common starting point is ₹30,000–₹75,000 per month for a single, focused campaign, run for at least four to six weeks. The right number depends more on your cost-per-click and the data you need than a flat rule.</p>` },
      { q: `Is there a minimum budget for Google Ads to work?`,
        a: `<p>There's no official minimum, but a budget buying fewer than 15-20 clicks a day rarely generates enough data to optimise from — often at least ₹500-₹1,500 a day depending on cost-per-click.</p>` },
      { q: `Should I start with Search, Shopping, or Performance Max?`,
        a: `<p>A tightly targeted Search campaign is usually the right start — easiest to control and diagnose. Shopping suits e-commerce with a clean feed. Performance Max works well but is harder to troubleshoot, so it's safer once tracking is verified.</p>` },
      { q: `Why does my budget disappear without results?`,
        a: `<p>Usually it's broken or incomplete conversion tracking, not the budget size — the algorithm is optimising toward the wrong signal. Verifying tracking first is more valuable than increasing spend.</p>` },
      { q: `When should I increase my Google Ads budget?`,
        a: `<p>Once you have a verified cost-per-acquisition from several weeks of clean data, and it's sustainable for your business. Scaling before that multiplies whatever is or isn't working.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has spent 10+ years across fitness, edtech, fintech, SaaS, and D2C helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Get a Google Ads budget based on your numbers, not a guess`, body: `A free foundation audit checks your tracking and gives you a realistic starting budget for your category — so your first rupee of ad spend actually tells you something.`,
      href: "/contact/", label: `Request a free audit` },
    bodyHtml: `<p>"How much should I spend on Google Ads?" is usually the very first question a founder asks before running paid ads in India — and it's genuinely hard to answer with a single number, because the right budget depends on your average order value, your industry's cost-per-click, and how much data you need before you can trust the results. This guide walks through how to set a real <strong>Google Ads budget for a startup in India</strong>, rather than borrowing someone else's rule of thumb.</p>

    <h2>The short answer: a starting range</h2>
    <p>For most early-stage startups in India, a reasonable starting point is <strong>₹30,000–₹75,000 per month</strong> on a single, tightly focused campaign, run for at least four to six weeks before making any big decisions. That's a range, not a rule — the calculation in the next section gets you closer to your actual number.</p>

    <h2>Why "how much should I spend" is the wrong first question</h2>
    <p>A fixed rupee figure ignores the two things that actually determine whether a budget works: how much a click costs in your category, and how much a converted customer is worth to you. ₹50,000 buys a very different campaign in a low-competition niche than it does in insurance or real estate, where clicks can cost ten times as much. The better first question is: <em>how much data do I need, and what can I afford to spend finding out?</em></p>

    <h2>How to calculate your starting Google Ads budget</h2>
    <h3>Step 1: Know your average order value or deal size</h3>
    <p>You need a rough sense of what a customer is worth — average order value for e-commerce, or average deal size times close rate for a longer sales cycle. This sets the ceiling on what you can reasonably pay to acquire one customer.</p>
    <h3>Step 2: Estimate cost-per-click for your category</h3>
    <p>Google's Keyword Planner (free inside a Google Ads account) gives a rough CPC range for your target keywords. In India, CPCs for most categories in 2026 range from roughly ₹10 for low-competition local terms up to ₹150+ for competitive finance, insurance, or B2B SaaS keywords.</p>
    <h3>Step 3: Set a budget that buys enough data</h3>
    <p>As a rule of thumb, you want enough budget to generate at least 15–20 clicks a day, and ideally 30–50 conversions total before drawing conclusions. Multiply your estimated CPC by 15–20 clicks, then by 30 days, to get a realistic monthly floor for a single campaign.</p>

    <blockquote>A budget too small to generate enough clicks doesn't fail slowly — it just never tells you anything at all.</blockquote>

    <h2>Minimum viable budget by campaign type</h2>
    <div data-tbl><table class="price-table">
      <thead>
        <tr><th>Campaign type</th><th>Typical minimum monthly budget (India, 2026)</th></tr>
      </thead>
      <tbody>
        <tr><td data-th="Campaign type">Search — single tight campaign</td><td data-th="Typical minimum monthly budget (India, 2026)">₹20,000 – ₹40,000</td></tr>
        <tr><td data-th="Campaign type">Search — competitive category</td><td data-th="Typical minimum monthly budget (India, 2026)">₹60,000 – ₹1,50,000+</td></tr>
        <tr><td data-th="Campaign type">Shopping (e-commerce)</td><td data-th="Typical minimum monthly budget (India, 2026)">₹30,000 – ₹75,000</td></tr>
        <tr><td data-th="Campaign type">Performance Max</td><td data-th="Typical minimum monthly budget (India, 2026)">₹50,000+ (best after tracking is verified)</td></tr>
      </tbody>
    </table><p class="price-note">Indicative ranges based on typical India CPCs — actual figures vary by category and competition.</p></div>
    <p>For most early-stage brands, a single, tightly targeted <strong>Search campaign</strong> is the right place to start — it's the easiest format to control and diagnose when something's wrong. Shopping works well once you have a clean product feed. Performance Max can perform strongly, but its automation makes it harder to troubleshoot, so it's a safer second step once your tracking is verified and you have baseline data to compare against.</p>

    <h2>What eats your budget before it converts</h2>
    <p>Founders often assume a disappointing result means the budget was too small. In our audits, the more common cause is that <a href="/insights/ga4-conversion-tracking/">conversion tracking wasn't reporting correctly</a> — so Google's bidding algorithm was optimising against the wrong signal, or no signal at all. Increasing spend on top of broken tracking doesn't fix the problem; it just spends the mistake faster. Before committing a monthly budget, it's worth running a quick <a href="/insights/audit-your-ad-spend/">ad spend self-audit</a> to confirm what you're measuring is real.</p>

    <h2>How to scale once it's working</h2>
    <p>Once you have a verified cost-per-acquisition from several weeks of clean data, and that number sits comfortably within what your business can afford to pay per customer, that's the signal to increase budget — not before. Scaling too early doesn't accelerate learning; it just multiplies whatever is or isn't working, at a higher cost. This is the same logic behind setting an overall <a href="/insights/startup-marketing-budget-india/">startup marketing budget</a>: tracking has to be right before the number gets bigger.</p>`
  },
  {
    slug: "google-ads-vs-meta-ads-startup",
    section: "Paid Ads",
    readTime: "7 min read",
    date: "2 Jun 2026",
    h1: `Google Ads vs Meta Ads: which should a startup start with?`,
    standfirst: `You have a limited budget and can't run both channels well on day one. Here's the real difference between Google Ads and Meta Ads — intent versus discovery — and a straightforward way to decide which one earns your first rupee.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "Google Ads vs Meta Ads: Which Should a Startup Start With? | Tilth",
      "description": "Google Ads vs Meta Ads for startups: how intent-based and discovery-based advertising differ, India cost comparisons, and how to decide which to start with first.",
      "canonical": "https://wearetilth.com/insights/google-ads-vs-meta-ads-startup/",
      "robots": "index, follow",
      "ogTitle": "Google Ads vs Meta Ads: which should a startup start with?",
      "ogDescription": "How intent-based and discovery-based advertising differ, India cost comparisons, and how to decide which platform to start with.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/og-image.png",
      "ogLocale": null,
      "twTitle": "Google Ads vs Meta Ads: which should a startup start with?",
      "twDescription": "Intent vs discovery, India cost comparisons, and how to decide which platform to start with.",
      "twImage": "https://wearetilth.com/og-image.png"
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
                        "description": "Google Ads vs Meta Ads for startups: how intent-based and discovery-based advertising differ, India cost comparisons, and how to decide which to start with first.",
                        "image": "https://wearetilth.com/og-image.png",
                        "datePublished": "2026-06-02",
                        "dateModified": "2026-06-02",
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
                                    "name": "Should a startup start with Google Ads or Meta Ads?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "If people actively search for what you sell, start with Google Ads — it captures existing intent. If your product needs to be discovered or explained visually and few people are searching for it by name yet, start with Meta Ads. Most startups eventually need both, but rarely at the same time."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Which is cheaper in India, Google Ads or Meta Ads?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Meta Ads usually has a lower cost per click but a lower average purchase intent, since it interrupts rather than captures a search. Google Ads clicks cost more on average but tend to convert at a higher rate because the person was already looking. Cost-per-click alone is a misleading comparison — cost per qualified lead is the number that matters."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Is Meta Ads good for B2B startups?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "It can work for top-of-funnel awareness and retargeting, but B2B buyers with a defined need typically search first, which usually makes Google Ads (or LinkedIn Ads for a more senior audience) a stronger primary channel for direct B2B lead generation."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Can I run Google Ads and Meta Ads at the same time as a startup?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "You can, but splitting a small budget across two platforms usually means neither gets enough spend to generate reliable data. It's often better to prove one channel works first, then add the second once you have budget and tracking to support both properly."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Do I need different tracking for Google Ads vs Meta Ads?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Both rely on the same underlying GA4 and server-side event setup, but each platform needs its own conversion tracking configured correctly — Google Ads conversion tags and Meta Pixel plus Conversions API — and neither should be trusted without independent verification in GA4."
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
        a: `<p>If people actively search for what you sell, start with Google Ads. If your product needs discovery or visual explanation and search demand doesn't exist yet, start with Meta Ads. Most startups need both eventually, rarely at the same time.</p>` },
      { q: `Which is cheaper in India, Google Ads or Meta Ads?`,
        a: `<p>Meta usually has a lower cost per click but lower average intent. Google clicks cost more but tend to convert at a higher rate. Cost per qualified lead is the number that matters, not raw CPC.</p>` },
      { q: `Is Meta Ads good for B2B startups?`,
        a: `<p>It works for awareness and retargeting, but B2B buyers with a defined need typically search first — usually making Google Ads (or LinkedIn Ads) a stronger primary channel for direct lead generation.</p>` },
      { q: `Can I run both at the same time as a startup?`,
        a: `<p>You can, but splitting a small budget across two platforms usually means neither gets enough spend to generate reliable data. It's often better to prove one channel first.</p>` },
      { q: `Do I need different tracking for each platform?`,
        a: `<p>Both rely on the same GA4 and server-side event setup, but each needs its own conversion tracking configured correctly, and neither should be trusted without independent verification in GA4.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has spent 10+ years across fitness, edtech, fintech, SaaS, and D2C helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Not sure which platform fits your business?`, body: `A free foundation audit looks at your category, buyer behaviour, and current tracking to recommend a starting channel — and confirms your numbers will be trustworthy once you spend.`,
      href: "/contact/", label: `Request a free audit` },
    bodyHtml: `<p>"Should we start with Google or Meta?" comes up in nearly every first conversation we have with a founder. It's a fair question, and the honest answer is: it depends on whether people are already searching for what you sell. This guide breaks down <strong>Google Ads vs Meta Ads for startups</strong> — how each platform actually works, what it costs in India, and how to pick a starting channel instead of splitting a small budget two ways.</p>

    <h2>The short answer: intent vs discovery</h2>
    <p>Google Ads captures <strong>existing demand</strong> — someone types "best running shoes for flat feet" and you show up right when they're looking. Meta Ads creates <strong>new demand</strong> — someone scrolling Instagram wasn't looking for you, but your ad interrupts them with something interesting enough to stop and consider. Neither is better in general; the right one depends entirely on whether your buyer already knows to search for what you sell.</p>

    <h2>How Google Ads works</h2>
    <p>Google Ads shows up when someone actively searches a relevant term. Because the person already has intent, conversion rates tend to be higher — but so does cost, since you're bidding against everyone else who wants that same searcher's attention. Google Ads works best when your product or service category already has search volume: people know the problem and are actively looking for a solution.</p>

    <h2>How Meta Ads works</h2>
    <p>Meta Ads (Facebook and Instagram) places your ad in front of people based on their interests, behaviour, and lookalike audiences — not because they searched for anything. This makes it powerful for visual products, new categories nobody's searching for yet, and building awareness before demand exists. It also means a larger share of clicks come from people who weren't planning to buy today, which is why <a href="/insights/meta-ads-not-converting/">Meta conversion rates often look lower</a> than Google's at first glance — that's a difference in intent, not necessarily a tracking problem, though tracking should always be the first thing you rule out.</p>

    <h2>When to start with Google Ads</h2>
    <ul>
      <li>Your product category already has meaningful search volume (check with Keyword Planner)</li>
      <li>You sell something people search for by name or close to it — services, replacement products, "X near me"</li>
      <li>You have a defined, higher-intent purchase moment, like signing up for a demo or booking a service</li>
    </ul>

    <h2>When to start with Meta Ads</h2>
    <ul>
      <li>Your product needs to be seen to be understood — visually driven, D2C, lifestyle, or a genuinely new category</li>
      <li>Search volume for your category is low or nonexistent because the need isn't fully formed as "searchable" yet</li>
      <li>You want to build an audience and retarget warm traffic over time, not just capture one-time intent</li>
    </ul>

    <blockquote>Google answers a question someone already asked. Meta has to make them ask it in the first place. Those are different jobs, and they cost differently.</blockquote>

    <h2>Cost comparison: CPC vs CPM in India</h2>
    <div data-tbl><table data-stack class="price-table">
      <thead>
        <tr><th>Metric</th><th>Google Ads (India, typical 2026)</th><th>Meta Ads (India, typical 2026)</th></tr>
      </thead>
      <tbody>
        <tr><td data-th="Metric">Pricing model</td><td data-th="Google Ads (India, typical 2026)">Cost per click (CPC)</td><td data-th="Meta Ads (India, typical 2026)">Cost per 1,000 impressions (CPM), optimised toward clicks/results</td></tr>
        <tr><td data-th="Metric">Typical CPC</td><td data-th="Google Ads (India, typical 2026)">₹10 – ₹150+ depending on category</td><td data-th="Meta Ads (India, typical 2026)">₹3 – ₹25 depending on audience and creative</td></tr>
        <tr><td data-th="Metric">Where the cost comes from</td><td data-th="Google Ads (India, typical 2026)">Competing for existing searchers</td><td data-th="Meta Ads (India, typical 2026)">Competing for attention and scroll-stopping creative</td></tr>
      </tbody>
    </table><p class="price-note">Indicative ranges — actual costs vary widely by category, competition, and creative quality.</p></div>
    <p>Comparing raw cost-per-click between the two is misleading on its own. A cheaper Meta click that doesn't convert is more expensive than a costlier Google click that does. <a href="/insights/google-ads-budget-india-startups/">Cost per qualified lead</a> is the number that actually settles the comparison — and that number only means anything if your tracking is accurate.</p>

    <h2>Why most startups need both eventually — but not on day one</h2>
    <p>A mature marketing programme usually runs Google to capture demand and Meta to build and retarget audiences that feed that demand — they complement each other well over time. But a small starting budget split across two platforms rarely generates enough data on either to learn anything. It's almost always better to prove one channel works cleanly first, then add the second with a budget that can actually support it.</p>

    <h2>The tracking prerequisite for either platform</h2>
    <p>Whichever you pick first, the platform's own reporting isn't the source of truth — it's an interested party. Both Google Ads and Meta rely on your GA4 and server-side event setup to know what actually converted, and both need independently verified tracking before any spend decision means anything. Run a quick <a href="/insights/audit-your-ad-spend/">ad spend self-audit</a> before you commit budget to either channel.</p>`
  },
  {
    slug: "marketing-agency-cost-india",
    section: "Hiring",
    readTime: "8 min read",
    date: "23 Jun 2026",
    h1: `How much does a digital marketing agency cost in India?`,
    standfirst: `It's the first question every founder asks and the hardest to get a straight answer to. Here's an honest 2026 breakdown of what a digital marketing agency costs in India — typical retainers, pricing by service, what's included versus ad spend, and how to budget without overpaying.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "How Much Does a Digital Marketing Agency Cost in India? (2026 Guide) | Tilth",
      "description": "Digital marketing agency cost in India in 2026: typical monthly retainers, pricing by service (SEO, PPC, social), what's included vs ad spend, and how to budget. An honest, founder-written guide.",
      "canonical": "https://wearetilth.com/insights/marketing-agency-cost-india/",
      "robots": "index, follow",
      "ogTitle": "How much does a digital marketing agency cost in India? (2026 guide)",
      "ogDescription": "Typical monthly retainers, pricing by service, what's included vs ad spend, and how to budget — an honest, founder-written guide.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/og-image.png",
      "ogLocale": null,
      "twTitle": "How much does a digital marketing agency cost in India? (2026 guide)",
      "twDescription": "Typical retainers, pricing by service, ad spend vs fees, and how to budget — honestly.",
      "twImage": "https://wearetilth.com/og-image.png"
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
                        "description": "Digital marketing agency cost in India in 2026: typical monthly retainers, pricing by service, what's included versus ad spend, and how to budget.",
                        "image": "https://wearetilth.com/og-image.png",
                        "datePublished": "2026-06-23",
                        "dateModified": "2026-06-23",
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
                                    "name": "How much does a digital marketing agency cost in India per month?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "In 2026, most digital marketing agencies in India charge a monthly retainer between roughly ₹25,000 and ₹2,50,000, depending on scope, channels, and competition. Small businesses and early-stage startups typically sit in the ₹25,000–₹75,000 range, while multi-channel programmes for established brands run higher. This fee is usually separate from the ad spend paid to platforms like Google and Meta."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Is ad spend included in the marketing agency fee?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Usually no. Most agencies charge a management fee or retainer for strategy and execution, and you pay the ad budget directly to Google, Meta, or other platforms on top of that. Always confirm whether a quoted price includes media spend — it's the most common source of budget surprises."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How much should a small business or startup budget for marketing in India?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "A common starting point for a small business or early-stage startup in India is ₹25,000–₹75,000 per month in agency fees, plus a separate ad budget you can afford to test with. The more important question is whether your tracking and targeting are sound first — spending on top of broken measurement wastes money at any budget."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Why do marketing agency prices vary so much in India?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Price varies with the number of channels, the competitiveness of your industry, whether the work is strategy-only or full execution, the seniority of the people on your account, and the engagement model (retainer, project, or performance-based). A ₹15,000 package and a ₹2,00,000 retainer are usually buying very different levels of work."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Is a cheaper marketing agency a good idea?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Not always. A very cheap agency often spreads junior staff thin and skips the foundation work — tracking, attribution, targeting — so you pay less per month but waste more of your ad spend on data you can't trust. The cheapest agency is frequently the most expensive once wasted budget is counted."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How much does Tilth charge?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Tilth scopes engagements after a free foundation audit, so pricing reflects what actually needs fixing rather than a one-size package. The audit itself is free, with no obligation — you only invest once you know where your money is leaking."
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
        a: `<p>In 2026, most agencies charge a monthly retainer between roughly ₹25,000 and ₹2,50,000, depending on scope, channels, and competition. Small businesses and startups typically sit in the ₹25,000–₹75,000 range. This fee is usually separate from ad spend.</p>` },
      { q: `Is ad spend included in the agency fee?`,
        a: `<p>Usually no. You pay a management fee or retainer for strategy and execution, and the ad budget goes directly to Google, Meta, or other platforms on top of that. Always confirm whether a quote includes media spend.</p>` },
      { q: `How much should a small business or startup budget?`,
        a: `<p>A common starting point is ₹25,000–₹75,000 per month in agency fees, plus a separate ad budget you can afford to test with — after confirming your tracking and targeting are sound.</p>` },
      { q: `Is a cheaper agency a good idea?`,
        a: `<p>Not always. A very cheap agency often skips the foundation work, so you pay less per month but waste more ad spend on data you can't trust. The cheapest agency is frequently the most expensive once wasted budget is counted.</p>` },
      { q: `How much does Tilth charge?`,
        a: `<p>We scope engagements after a <a href="/contact/">free foundation audit</a>, so pricing reflects what actually needs fixing — not a one-size package. The audit is free, with no obligation.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has spent 10+ years across fitness, edtech, fintech, SaaS, and D2C helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Find out what you actually need to spend`, body: `A free foundation audit shows you what's working, what's leaking, and what's worth paying to fix first — so you scope an agency around reality, not a guess. No pitch attached.`,
      href: "/contact/", label: `Request a free audit` },
    bodyHtml: `<p>Ask five agencies what they charge and you'll get five wildly different numbers — ₹15,000 here, ₹2,00,000 there — for what sounds like the same thing. The confusion is real, and it's expensive: a lot of brands either overpay for a thin retainer or underpay for a package that quietly does very little. This guide lays out what a <strong>digital marketing agency costs in India</strong> in 2026, and more importantly, what you're actually paying for.</p>

    <h2>The short answer: typical 2026 price ranges</h2>
    <p>Most digital marketing agencies in India charge a <strong>monthly retainer between roughly ₹25,000 and ₹2,50,000</strong>, depending on scope, channels, and how competitive your industry is. Here's how that tends to break down:</p>

    <div data-tbl><table class="price-table">
      <thead>
        <tr><th>Type of engagement</th><th>Typical monthly fee (2026)</th></tr>
      </thead>
      <tbody>
        <tr><td data-th="Type of engagement">Small business / early-stage startup</td><td data-th="Typical monthly fee (2026)">₹25,000 – ₹75,000</td></tr>
        <tr><td data-th="Type of engagement">Growing brand, multi-channel</td><td data-th="Typical monthly fee (2026)">₹75,000 – ₹1,50,000</td></tr>
        <tr><td data-th="Type of engagement">Established brand, full programme</td><td data-th="Typical monthly fee (2026)">₹1,50,000 – ₹2,50,000+</td></tr>
        <tr><td data-th="Type of engagement">Freelancer / solo specialist</td><td data-th="Typical monthly fee (2026)">₹15,000 – ₹50,000</td></tr>
      </tbody>
    </table><p class="price-note">Indicative market ranges for agency fees only — not a Tilth price list. Your actual cost depends on the factors below.</p></div>

    <p>These are <em>agency fees</em> — the cost of strategy and execution. They almost never include the money you spend on ads. More on that next, because it's where most budgets blow up.</p>

    <h2>Agency fee vs ad spend — the part everyone confuses</h2>
    <p>Digital marketing pricing in India is really two numbers stacked together:</p>
    <ul>
      <li><strong>The agency fee (or retainer):</strong> what you pay the agency to plan, build, and run the work.</li>
      <li><strong>The ad spend (media budget):</strong> what you pay directly to Google, Meta, and other platforms to actually show your ads.</li>
    </ul>
    <p>When an agency quotes you "₹40,000 a month," always ask the next question: <em>does that include ad spend?</em> Almost always it doesn't. A brand paying ₹40,000 in fees might be putting ₹2,00,000 or more behind ads — and that media budget is yours to lose if the tracking underneath it is wrong.</p>

    <blockquote>The fee is what you pay to run the engine. The ad spend is the fuel. Confusing the two is how budgets quietly double.</blockquote>

    <h2>Pricing by service</h2>
    <p>If you're buying a single channel rather than a full programme, here are the typical standalone ranges in India:</p>
    <h3>SEO</h3>
    <p>Roughly <strong>₹25,000 – ₹1,50,000 per month</strong>, depending on how competitive your keywords are and how much content and technical work is involved. SEO is a long game — expect six to twelve months before it pays back.</p>
    <h3>PPC / paid ads management</h3>
    <p>Management fees commonly run <strong>₹10,000 – ₹50,000+ per month</strong>, or a percentage of ad spend (often 10–20%). Remember this sits on top of the media budget itself.</p>
    <h3>Social media marketing</h3>
    <p>Around <strong>₹10,000 – ₹1,00,000 per month</strong> depending on content volume, design, and whether paid social is included.</p>
    <p>Buying channel by channel can work, but it has a catch: each one is only as good as the <a href="/insights/marketing-foundation-audit/">measurement foundation</a> underneath it. Scaling paid ads on broken tracking just spends faster.</p>

    <h2>Engagement models — how you're charged</h2>
    <ul>
      <li><strong>Monthly retainer:</strong> the most common model — a fixed fee for an agreed scope. Predictable, good for ongoing work.</li>
      <li><strong>Project-based:</strong> a one-off fee for a defined deliverable (a website, a campaign, an audit). Good for clear, bounded needs.</li>
      <li><strong>Performance-based:</strong> fees tied to results (leads, revenue). Attractive in theory, but only as honest as the tracking that measures those results — which is exactly why measurement has to be fixed first.</li>
    </ul>

    <h2>What makes the price go up or down</h2>
    <p>Two quotes can differ by 10x for good reasons. The biggest factors:</p>
    <ul>
      <li><strong>Number of channels</strong> — one channel costs far less than an integrated programme.</li>
      <li><strong>Industry competition</strong> — competitive categories need more work to move.</li>
      <li><strong>Strategy vs execution</strong> — advice is cheaper than hands-on management.</li>
      <li><strong>Seniority on your account</strong> — who actually does the work matters more than the logo.</li>
      <li><strong>The state of your foundation</strong> — broken tracking and targeting add cost before anything grows.</li>
    </ul>

    <h2>Why the cheapest agency is often the most expensive</h2>
    <p>It's tempting to pick the ₹15,000 package. But a very cheap agency usually spreads junior staff across dozens of accounts and skips the unglamorous foundation work — tracking, attribution, targeting. You save on the fee and lose far more on wasted ad spend, because you're scaling decisions on data you can't trust. When founders tell me their marketing "isn't working," the problem is rarely the retainer size. It's that <a href="/insights/ga4-conversion-tracking/">the numbers underneath were never right</a>.</p>

    <h2>How to budget if you're just starting</h2>
    <p>If you're an early-stage brand, a sensible starting point is <strong>₹25,000–₹75,000 in agency fees</strong> plus an ad budget you can comfortably treat as a test, not a bet. But before you commit to any retainer, get a clear, independent read on whether your tracking and targeting are sound. That's the cheapest insurance there is — and it's exactly what a foundation audit gives you.</p>`
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
      "ogImage": "https://wearetilth.com/og-image.png",
      "ogLocale": null,
      "twTitle": "How to choose a marketing agency for your D2C brand in India",
      "twDescription": "What to look for, the questions that matter, and the red flags to avoid.",
      "twImage": "https://wearetilth.com/og-image.png"
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
                        "image": "https://wearetilth.com/og-image.png",
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
                                          "text": "Yes. Tilth is a foundation-first marketing agency in Bengaluru that works with D2C brands and startups in India and globally. Every engagement starts with a free foundation audit of tracking, attribution, targeting, and partnerships before any spend is scaled."
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
        a: `<p>Yes — <a href="/marketing-agency-bengaluru/">Tilth</a> is a foundation-first agency in Bengaluru working with D2C brands and startups in India and globally. Every engagement starts with a free foundation audit.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has spent 10+ years across fitness, edtech, fintech, SaaS, and D2C — building and auditing the marketing engines behind consumer brands. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Choosing a D2C agency? Start with the truth.`, body: `A free foundation audit gives you an honest read on your tracking, attribution, and channel performance — so you can hire (us or anyone) for the real gap, not a guessed one. No pitch attached.`,
      href: "/contact/", label: `Request a free audit` },
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
      "ogImage": "https://wearetilth.com/og-image.png",
      "ogLocale": null,
      "twTitle": "Marketing attribution for small businesses, explained simply",
      "twDescription": "What attribution actually means, without the jargon — plus a worked example.",
      "twImage": "https://wearetilth.com/og-image.png"
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
                        "image": "https://wearetilth.com/og-image.png",
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
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has spent 10+ years across fitness, edtech, fintech, SaaS, and D2C helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Get an honest read on what's actually driving sales`, body: `A free foundation audit checks whether your tracking captures every channel correctly, so your attribution data reflects reality — not just whichever channel happens to close the sale.`,
      href: "/contact/", label: `Request a free audit` },
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
      "ogImage": "https://wearetilth.com/og-image.png",
      "ogLocale": null,
      "twTitle": "What a marketing foundation audit actually checks",
      "twDescription": "What a real marketing audit reviews — tracking, attribution, targeting, partnerships — and why it's first.",
      "twImage": "https://wearetilth.com/og-image.png"
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
                        "image": "https://wearetilth.com/og-image.png",
                        "datePublished": "2026-06-22",
                        "dateModified": "2026-06-22",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/marketing-foundation-audit/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/marketing-foundation-audit/",
                        "articleSection": "Foundations",
                        "keywords": [
                              "marketing foundation audit",
                              "marketing audit",
                              "free marketing audit",
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
                                          "text": "Yes. Tilth offers a free foundation audit with no pitch attached. We review your current setup and tell you honestly what's broken and what's worth fixing first. There's no obligation to work with us afterwards."
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
      { q: `Is the Tilth marketing audit really free?`,
        a: `<p>Yes. Tilth offers a free foundation audit with no pitch attached and no obligation to work with us afterwards. <a href="/contact/">Request yours here</a>.</p>` },
      { q: `Do I need to change agencies to get an audit?`,
        a: `<p>No. A foundation audit is independent of who runs your channels — many brands use it as a second opinion on an existing agency or in-house team.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has spent 10+ years across fitness, edtech, fintech, SaaS, and D2C — auditing and rebuilding the foundations under marketing spend. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Get a free marketing foundation audit`, body: `We'll review your tracking, attribution, targeting, and partnerships, and tell you honestly what's broken and what's worth fixing first. No pitch attached.`,
      href: "/contact/", label: `Request a free audit` },
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
      "ogImage": "https://wearetilth.com/og-image.png",
      "ogLocale": null,
      "twTitle": "How to measure influencer marketing ROI properly",
      "twDescription": "A practical guide to measuring influencer ROI, not just reach and likes.",
      "twImage": "https://wearetilth.com/og-image.png"
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
                        "image": "https://wearetilth.com/og-image.png",
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
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has spent 10+ years across fitness, edtech, fintech, SaaS, and D2C helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Set up influencer tracking that actually holds up`, body: `A free foundation audit checks whether your GA4 and attribution setup can accurately measure influencer, affiliate, and paid campaigns — before your next brief goes out.`,
      href: "/contact/", label: `Request a free audit` },
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
      "ogImage": "https://wearetilth.com/og-image.png",
      "ogLocale": null,
      "twTitle": "Meta Ads not converting? A 7-point tracking audit",
      "twDescription": "Before you blame the creative, rule out tracking. A 7-point Meta Ads audit.",
      "twImage": "https://wearetilth.com/og-image.png"
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
                        "image": "https://wearetilth.com/anuja.jpg",
                        "datePublished": "2026-06-17",
                        "dateModified": "2026-06-17",
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
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of Tilth, a foundation-first marketing agency in Bengaluru. She has spent 10+ years running paid ads across edtech, fintech, SaaS, and D2C — and fixing the tracking that quietly breaks them. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Want a second pair of eyes on your Meta setup?`, body: `The free foundation audit checks your pixel, CAPI, events, and attribution — so you know whether it's the tracking or the ads before you spend another rupee. No pitch attached.`,
      href: "/contact/", label: `Request a free audit` },
    bodyHtml: `<p>Meta's algorithm is only as good as the data you feed it. If purchases aren't being reported back accurately, the system can't find buyers — so it spends your budget on the wrong people, conversions dry up, and it looks like the ads "stopped working." Most of the time, it's a tracking problem wearing a creative problem's costume. Run this audit first.</p>

    <h2>1. Is the Pixel firing the purchase event — with value?</h2>
    <p>Use the Meta Pixel Helper or Events Manager to confirm a <strong>Purchase event fires on your confirmation page</strong>, with the correct <code>value</code> and <code>currency</code>. A purchase event with no value can't optimise toward revenue, and a pixel that fires on a button instead of the real confirmation will count abandoned checkouts as sales.</p>

    <h2>2. Is the Conversions API (server-side) set up?</h2>
    <p>Browser tracking alone now misses a large share of events to ad blockers, iOS, and consent rejections. <strong>The Conversions API (CAPI)</strong> sends events server-to-server, so Meta still sees the purchase your browser pixel missed. Without it, your reported conversions are systematically undercounted — and the algorithm is half-blind.</p>

    <h2>3. Are pixel and CAPI events deduplicated?</h2>
    <p>Run the pixel and CAPI together without a shared <code>event_id</code> and Meta double-counts every purchase — inflating ROAS until you trust a number that isn't real. Confirm <strong>event deduplication</strong> is working so each conversion is counted exactly once.</p>

    <blockquote>An algorithm optimising on bad data doesn't fail loudly. It just quietly spends your money on the wrong people.</blockquote>

    <h2>4. Have you verified your domain and prioritised events?</h2>
    <p>Since Apple's privacy changes, Meta limits you to a set of prioritised events per <strong>verified domain</strong> (Aggregated Event Measurement). If your domain isn't verified or Purchase isn't ranked as a top event, conversion tracking and optimisation degrade for a big chunk of your audience.</p>

    <h2>5. Are you optimising for the right event?</h2>
    <p>If your campaign is set to optimise for "Add to Cart" or "Leads" because those fire more often and look better, Meta will buy you carts and leads — not customers. <strong>Optimise toward Purchase</strong> (or your true revenue event), even though the volume looks smaller. Smaller and real beats large and hollow.</p>

    <h2>6. Do your attribution windows match reality?</h2>
    <p>Meta's default is a 7-day-click / 1-day-view window. If you compare that to a last-click model in GA4 or your backend, the numbers will never agree — and you'll "fix" campaigns that were fine. Decide on one source of truth, know which window you're reading, and compare like with like.</p>

    <h2>7. Only now, look at creative and audience</h2>
    <p>Once tracking is verified — pixel and CAPI firing, deduplicated, optimising on Purchase, sane attribution — <em>then</em> a drop in conversions is a real signal worth chasing with new creative or audiences. Do it in that order and you'll stop rebuilding campaigns that were never broken.</p>`
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
      "ogImage": "https://wearetilth.com/og-image.png",
      "ogLocale": null,
      "twTitle": "12 questions to ask before hiring a marketing agency",
      "twDescription": "The questions to ask — and the red-flag answers that tell you to walk away.",
      "twImage": "https://wearetilth.com/og-image.png"
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
                        "image": "https://wearetilth.com/og-image.png",
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
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has spent 10+ years across fitness, edtech, fintech, SaaS, and D2C — on both sides of the agency pitch. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Want a benchmark before you choose?`, body: `A free foundation audit gives you an independent, honest read on your current setup — so you can judge any agency's answers against what's actually true. No pitch attached.`,
      href: "/contact/", label: `Request a free audit` },
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
      "ogImage": "https://wearetilth.com/og-image.png",
      "ogLocale": null,
      "twTitle": "Why your SEO isn't bringing leads (and how to fix it)",
      "twDescription": "Ranking and getting traffic but no leads? Here's the real diagnosis, and how to fix it.",
      "twImage": "https://wearetilth.com/og-image.png"
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
                        "image": "https://wearetilth.com/og-image.png",
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
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has spent 10+ years across fitness, edtech, fintech, SaaS, and D2C helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Find out exactly where your SEO is leaking leads`, body: `A free foundation audit checks keyword intent, landing page match, tracking accuracy, and technical health — so you know precisely what to fix first, not just that "something's wrong."`,
      href: "/contact/", label: `Request a free audit` },
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
    standfirst: `Most Shopify stores have "tracking installed" and still can't trust the numbers. Here's a practical, step-by-step walkthrough of setting up GA4 and Meta Pixel — with Conversions API — on Shopify, so your ad spend decisions are built on data that's actually correct.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "How to Set Up Conversion Tracking on Shopify (GA4 + Meta Pixel) | Tilth",
      "description": "A step-by-step guide to setting up GA4 and Meta Pixel conversion tracking on Shopify in 2026, including Conversions API — so every ad rupee is measured correctly.",
      "canonical": "https://wearetilth.com/insights/shopify-conversion-tracking-ga4-meta-pixel/",
      "robots": "index, follow",
      "ogTitle": "How to set up conversion tracking on Shopify (GA4 + Meta Pixel)",
      "ogDescription": "A step-by-step guide to GA4 and Meta Pixel conversion tracking on Shopify, including Conversions API — so every ad rupee is measured correctly.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/og-image.png",
      "ogLocale": null,
      "twTitle": "How to set up conversion tracking on Shopify (GA4 + Meta Pixel)",
      "twDescription": "Step-by-step GA4 and Meta Pixel setup for Shopify, including Conversions API, so every ad rupee is measured correctly.",
      "twImage": "https://wearetilth.com/og-image.png"
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
                        "description": "A step-by-step guide to setting up GA4 and Meta Pixel conversion tracking on Shopify, including Conversions API, so every ad rupee is measured correctly.",
                        "image": "https://wearetilth.com/og-image.png",
                        "datePublished": "2026-06-12",
                        "dateModified": "2026-06-12",
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
                                    "name": "Does Shopify have GA4 tracking built in?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Shopify has a native Google & YouTube channel that can push e-commerce events to GA4 without custom code, but it has to be configured correctly — connected to the right GA4 property, with enhanced e-commerce events turned on — or it silently under-reports purchases."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Do I need Meta Conversions API if I already have the Meta Pixel on Shopify?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Yes. The browser-side Pixel alone misses a meaningful share of events due to ad blockers, iOS privacy settings, and cookie restrictions. Conversions API sends the same events server-side from Shopify, and Meta deduplicates the two — recovering conversions the Pixel alone would lose."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Why is my Shopify GA4 purchase value different from my actual revenue?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "The most common causes are the purchase event firing on every page load of the order-status page (double counting on refresh), tax or shipping being included or excluded inconsistently, and currency mismatches between GA4 settings and the store's checkout currency. Each of these is checkable in GA4's DebugView."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Can I set up Shopify conversion tracking myself, or do I need a developer?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "The native GA4 and Meta Pixel integrations in Shopify's admin don't require code for a standard store. Conversions API can be enabled through Shopify's built-in Meta integration without a developer in most cases; custom event matching for complex checkouts is where developer help typically becomes worthwhile."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How do I know if my Shopify tracking is actually working?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Place a real test order, then check that it appears as a single Purchase event in GA4 DebugView with the correct value, and as a single Purchase event in Meta Events Manager showing both Browser and Server as the source with a high deduplication match rate."
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
        a: `<p>Shopify's native Google &amp; YouTube channel can push e-commerce events to GA4 without custom code, but it needs to be connected to the right GA4 property with enhanced e-commerce events turned on, or it under-reports purchases.</p>` },
      { q: `Do I need Meta Conversions API if I already have the Pixel?`,
        a: `<p>Yes. Browser-side Pixel tracking alone misses events due to ad blockers and privacy settings. Conversions API sends the same events server-side, and Meta deduplicates the two, recovering conversions the Pixel alone would lose.</p>` },
      { q: `Why is my GA4 purchase value different from my actual revenue?`,
        a: `<p>Common causes are the purchase event firing on every reload of the order-status page, inconsistent tax/shipping inclusion, and currency mismatches. Each is checkable in GA4's DebugView.</p>` },
      { q: `Do I need a developer to set this up?`,
        a: `<p>The native GA4 and Meta Pixel integrations don't require code for a standard store, and Conversions API can usually be enabled through Shopify's built-in Meta integration. Developer help becomes worthwhile for custom or complex checkout flows.</p>` },
      { q: `How do I know if my Shopify tracking is actually working?`,
        a: `<p>Place a real test order, then confirm it appears once in GA4 DebugView with the correct value, and once in Meta Events Manager with both Browser and Server sources and a high match rate.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has spent 10+ years across fitness, edtech, fintech, SaaS, and D2C helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Get your Shopify tracking checked properly`, body: `A free foundation audit verifies GA4, Meta Pixel, and Conversions API end to end on your live store — so you know exactly what's measured correctly before you scale spend.`,
      href: "/contact/", label: `Request a free audit` },
    bodyHtml: `<p>Almost every Shopify store we audit has GA4 and the Meta Pixel "installed." Almost none of them have it installed correctly. The apps report a green tick, events show up somewhere in a dashboard, and everyone assumes the numbers are right — until you compare GA4 revenue to Shopify's own reports and find a 20–30% gap. This guide walks through <strong>Shopify conversion tracking</strong> properly: GA4, Meta Pixel, and Conversions API, in the order that actually prevents the common failures.</p>

    <h2>Why Shopify's default tracking isn't enough</h2>
    <p>Shopify ships with basic order tracking out of the box, but two things break the moment you start running paid ads. First, browser-side tracking alone — a GA4 tag or Meta Pixel firing in the customer's browser — misses events from ad blockers, Safari's Intelligent Tracking Prevention, and iOS privacy settings. Estimates for the miss rate vary, but it's rarely small. Second, Shopify's checkout runs on a separate, more locked-down domain than the rest of your store, which is exactly where a lot of DIY tracking setups quietly fail to fire at all.</p>
    <p>Both problems are fixable, but only if you set things up in the right order and verify each step — which is what the rest of this guide covers.</p>

    <h2>What you need before you start</h2>
    <ul>
      <li>Admin access to your Shopify store (Online Store &gt; Preferences, and Settings &gt; Apps and sales channels)</li>
      <li>A GA4 property and Measurement ID (GA4, not the old Universal Analytics)</li>
      <li>A Meta Business Manager account with a Pixel created</li>
      <li>Ten minutes and one real test order you're willing to place (and refund)</li>
    </ul>

    <h2>Setting up GA4 on Shopify</h2>
    <h3>1. Connect via Shopify's native Google channel</h3>
    <p>In Shopify admin, add the "Google & YouTube" sales channel and connect your GA4 property through it, rather than pasting a raw gtag.js snippet into theme code. The native integration is built to correctly fire enhanced e-commerce events (view_item, add_to_cart, begin_checkout, purchase) across the storefront and checkout, including the parts of checkout a manually pasted script often can't reach.</p>
    <h3>2. Turn on enhanced e-commerce events</h3>
    <p>Inside the Google & YouTube channel settings, confirm e-commerce events are enabled — this is what pushes product, cart, and purchase data into GA4 with revenue attached, not just generic pageviews.</p>
    <h3>3. Verify in GA4 DebugView, not just Realtime</h3>
    <p>Place a test order and watch GA4 DebugView (Admin &gt; DebugView, with a debug extension or the Shopify preview mode active). Confirm you see exactly one <code>purchase</code> event with the correct order value, currency, and transaction ID. This is the step almost everyone skips — and it's where <a href="/insights/ga4-conversion-tracking/">most GA4 tracking problems</a> actually show up.</p>

    <h2>Setting up Meta Pixel + Conversions API on Shopify</h2>
    <h3>1. Install via Shopify's Meta &amp; Instagram channel</h3>
    <p>Add the Meta &amp; Instagram sales channel from the Shopify app store and connect your Pixel ID there. This installs the Pixel across the storefront and, critically, gives you the option to enable server-side tracking in the same flow.</p>
    <h3>2. Turn on Conversions API</h3>
    <p>In the same Meta channel settings, enable Conversions API (CAPI). This sends the same purchase, add-to-cart, and checkout events directly from Shopify's servers to Meta, bypassing the browser entirely. It's the single highest-impact step in this whole guide: CAPI recovers a meaningful share of the conversions that browser-only Pixel tracking loses to ad blockers and privacy settings.</p>
    <h3>3. Check the deduplication match rate</h3>
    <p>Once both are live, open Meta Events Manager and look at your Purchase event. You should see contributions from both "Browser" and "Server," with a high event match quality score and minimal duplicate counting. A low match rate usually means customer information (email, phone) isn't being passed consistently — worth revisiting in the channel settings.</p>

    <h2>The checkout tracking trap</h2>
    <p>If you're on Shopify Plus, you have access to checkout.liquid or checkout extensibility, which lets you add custom scripts inside checkout itself. On standard Shopify plans, you cannot edit checkout pages directly — which is exactly why the native Google and Meta sales channel integrations matter so much. They're built to inject tracking into Shopify-hosted checkout in a way that a manually pasted script in your theme simply cannot reach. If an agency or freelancer set up your tracking by editing theme.liquid alone, there's a good chance checkout-stage events are missing entirely.</p>

    <blockquote>A Pixel that fires on your homepage but not at checkout isn't broken — it's telling you exactly nothing about whether ads convert.</blockquote>

    <h2>How to verify everything is actually working</h2>
    <ol>
      <li>Place one real test order end to end, using a discount code for ₹1 if you don't want to refund a full order.</li>
      <li>Confirm a single <code>purchase</code> event fires in GA4 DebugView with the correct value and transaction ID (not zero, not duplicated).</li>
      <li>Confirm a single Purchase event fires in Meta Events Manager with both Browser and Server sources present.</li>
      <li>Compare GA4 revenue to Shopify's own analytics for the same order — they should match to the rupee.</li>
      <li>Refresh the order confirmation page manually and check the purchase event does <em>not</em> fire again (a very common source of inflated numbers).</li>
    </ol>

    <h2>Common mistakes that break Shopify tracking</h2>
    <ul>
      <li><strong>Two Pixels firing at once</strong> — a leftover manual Pixel snippet in theme code plus the native app integration, causing doubled events.</li>
      <li><strong>Purchase firing on refresh</strong> — the order-status page re-fires the event every time it reloads, inflating both platforms' conversion counts.</li>
      <li><strong>Currency mismatch</strong> — GA4 property currency set differently from the store's checkout currency, silently skewing reported revenue.</li>
      <li><strong>CAPI enabled with no customer data passed</strong> — Conversions API with a poor match rate barely outperforms the Pixel alone, because Meta can't match the server event to a real person.</li>
      <li><strong>Trusting the dashboard tick, not the DebugView</strong> — an app showing "connected" only confirms the tag loaded, not that events fire correctly at every step.</li>
    </ul>
    <p>Once tracking is verified end to end, it's worth doing the same sanity check on your live campaigns — a quick <a href="/insights/audit-your-ad-spend/">ad spend self-audit</a> will tell you if the numbers you're now trusting actually line up with profit.</p>`
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
      "ogImage": "https://wearetilth.com/og-image.png",
      "ogLocale": null,
      "twTitle": "Marketing budget for an early-stage startup in India",
      "twDescription": "How much to spend, why CAC beats a flat %, and how to split it.",
      "twImage": "https://wearetilth.com/og-image.png"
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
                        "image": "https://wearetilth.com/og-image.png",
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
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has spent 10+ years across fitness, edtech, fintech, SaaS, and D2C helping startups spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Not sure your numbers can be trusted yet?`, body: `A free foundation audit checks whether your tracking and attribution are sound — so the budget you set is measured against reality, not a guess. No pitch attached.`,
      href: "/contact/", label: `Request a free audit` },
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
      "ogImage": "https://wearetilth.com/og-image.png",
      "ogLocale": null,
      "twTitle": "What is performance marketing (and how it differs from digital marketing)?",
      "twDescription": "A plain-English definition, and why performance marketing lives or dies on tracking.",
      "twImage": "https://wearetilth.com/og-image.png"
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
                        "image": "https://wearetilth.com/og-image.png",
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
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has spent 10+ years across fitness, edtech, fintech, SaaS, and D2C helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Make sure your performance marketing is measuring the truth`, body: `A free foundation audit checks whether your tracking is accurate enough to trust the "performance" in performance marketing — before you scale spend on numbers that might be wrong.`,
      href: "/contact/", label: `Request a free audit` },
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

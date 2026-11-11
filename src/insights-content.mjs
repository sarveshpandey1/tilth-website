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
    { id: "all", label: `All`, count: "20" },
    { id: "paid-ads", label: `Paid Ads`, count: "5" },
    { id: "tracking", label: `Tracking &amp; Attribution`, count: "4" },
    { id: "seo-growth", label: `SEO &amp; Growth`, count: "4" },
    { id: "hiring", label: `Hiring &amp; Agencies`, count: "4" },
    { id: "strategy", label: `Strategy`, count: "3" },
  ],
  cards: [
    {
      slug: "b2b-saas-marketing-india", href: "/insights/b2b-saas-marketing-india/", cat: "strategy",
      catLabel: `Strategy`,
      title: `Marketing for Indian SaaS: why the B2C playbook breaks`,
      excerpt: `The tactics that work in D2C fail in SaaS for structural reasons — the user isn't the buyer, a demo isn't revenue, and the signal arrives months after the click. What to measure instead.`,
      meta: `9 min read · 11 Nov 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/b2b-saas-marketing-india.webp" alt="" loading="lazy" width="1200" height="630">`
    },
    {
      slug: "break-even-roas", href: "/insights/break-even-roas/", cat: "paid-ads",
      catLabel: `Paid Ads`,
      title: `Break-even ROAS: the ROAS your ads actually need`,
      excerpt: `ROAS above break-even isn't the same as a profitable business. How to calculate the figure from contribution margin, why gross margin misleads, and where the number stops being useful.`,
      meta: `8 min read · 11 Nov 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/break-even-roas.webp" alt="" loading="lazy" width="1200" height="630">`
    },
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
      excerpt: `"What's the minimum budget?" is the wrong first question. How to calculate a starting Google Ads budget from your target CAC, expected cost-per-click, conversion rate and the evidence you need before judging the test.`,
      meta: `8 min read · 7 Jun 2026`,
      read: `Read the article →`,
      img: `<img class="blog-card__media" src="/assets/insight-cards/google-ads-budget-india-startups.webp" alt="" loading="lazy" width="1200" height="630">`
    },
    {
      slug: "google-ads-vs-meta-ads-startup", href: "/insights/google-ads-vs-meta-ads-startup/", cat: "paid-ads",
      catLabel: `Paid Ads`,
      title: `Google Ads vs Meta Ads: which should a startup start with?`,
      excerpt: `You can't run both channels well on a limited budget. The real difference between Google Ads and Meta Ads — intent versus discovery — and a straightforward way to decide which one earns your first rupee.`,
      meta: `8 min read · 2 Jun 2026`,
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
    slug: "b2b-saas-marketing-india",
    section: "Strategy",
    readTime: "9 min read",
    date: "11 Nov 2026",
    h1: `Marketing for Indian SaaS: why the B2C playbook breaks`,
    standfirst: `Plenty of good D2C marketers struggle the first time they run acquisition for a SaaS product, and conclude the channels don't work. Usually the channels are fine. What's changed is that the user isn't the buyer, a demo isn't revenue, and the signal that tells you whether any of it worked arrives months after the click.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "Marketing for Indian SaaS: Why the B2C Playbook Breaks | Tilth",
      "description": "Why D2C acquisition tactics fail when applied to B2B SaaS — leads versus pipeline, paid-media versus fully loaded CAC, payback over CAC, attribution that ends in the CRM, and a 90-day plan.",
      "canonical": "https://wearetilth.com/insights/b2b-saas-marketing-india/",
      "robots": "index, follow",
      "ogTitle": "Marketing for Indian SaaS: why the B2C playbook breaks",
      "ogDescription": "Leads versus pipeline, paid-media versus fully loaded CAC, payback over CAC, and attribution that has to end in the CRM.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/b2b-saas-marketing-india.webp",
      "ogLocale": null,
      "twTitle": "Marketing for Indian SaaS: why the B2C playbook breaks",
      "twDescription": "Why D2C acquisition tactics fail in SaaS, and what to measure instead.",
      "twImage": "https://wearetilth.com/assets/insight-cards/b2b-saas-marketing-india.webp"
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
                                    "name": "Marketing for Indian SaaS: why the B2C playbook breaks",
                                    "item": "https://wearetilth.com/insights/b2b-saas-marketing-india/"
                              }
                        ]
                  },
                  {
                        "@type": "BlogPosting",
                        "headline": "Marketing for Indian SaaS: why the B2C playbook breaks",
                        "description": "Why D2C acquisition tactics fail when applied to B2B SaaS - leads versus pipeline, paid-media versus fully loaded CAC, payback over CAC, attribution that ends in the CRM, and a 90-day plan.",
                        "image": "https://wearetilth.com/assets/insight-cards/b2b-saas-marketing-india.webp",
                        "datePublished": "2026-11-11",
                        "dateModified": "2026-11-11",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/b2b-saas-marketing-india/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/b2b-saas-marketing-india/",
                        "articleSection": "Strategy",
                        "keywords": [
                              "B2B SaaS marketing India",
                              "SaaS marketing India",
                              "SaaS customer acquisition",
                              "B2B SaaS CAC",
                              "SaaS growth strategy India",
                              "SaaS lead generation India"
                        ],
                        "wordCount": 2800,
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
                                    "name": "Why is SaaS marketing different from B2C?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Structurally, not stylistically. In B2C the person who clicks is usually the person who pays, and they often pay the same day, which gives you fast, high-volume feedback. In B2B SaaS the user is frequently not the buyer, several people influence the decision, a demo or trial is not revenue, and the money may arrive weeks or months later. That changes what you can optimise toward, how long a test has to run, and which system holds the truth."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "What should a SaaS company optimise paid ads for?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "The event closest to business value that still happens often enough for the system to learn from. That is a trade-off, not a rule: a qualified opportunity is a better signal than a form fill but may occur a handful of times a month, which is too sparse for automated bidding. Start nearer the top where volume allows, qualify hard, and move the optimisation event deeper as volume grows. Anyone who tells you to always optimise for SQLs has not checked your volume."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Which channel is best for B2B SaaS in India?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "There is no single answer, and the honest version is conditional. Search works when buyers already describe your category in a search box. Paid social can work for broad SMB products, founder-led offers and remarketing, where creative has to create the demand. Role and company targeting suits narrow, higher-value audiences but usually produces fewer events, which makes learning slower. What decides it is your contract value, how well defined your ideal customer is, your sales motion, whether demand already exists, and whether you can produce creative at the rate the channel consumes it."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "What is a good CAC for SaaS?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "There is no rupee figure that answers this, and published averages for Indian SaaS are mostly vendor estimates rather than audited data. A CAC is good or bad only relative to what a customer contributes after cost of service, how long they stay, and how long the payback takes against the cash you have. A 60,000 rupee CAC can be excellent at one contract value and ruinous at another. Judge it against contribution and payback, not against someone else's number."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Should SaaS use free trials or book-a-demo?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "It depends on how the product is bought rather than on preference. A product someone can evaluate alone, in minutes, suits self-serve signup or a trial. A product that needs configuration, security review or several stakeholders suits a demo or a conversation with sales, because a trial nobody can run alone just produces abandoned accounts. Many companies need both paths on the same site for different segments, and the mistake is forcing one CTA on everyone."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How should SaaS calculate marketing ROI?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Against pipeline and closed revenue in your CRM, not against platform-reported conversions. Hold two CAC figures: paid-media CAC, which tells you whether a channel is working, and fully loaded CAC including team, agency, sales salaries and commission, tools and onboarding, which tells you whether the business works. They answer different questions and conflating them is how a channel looks profitable while the company is not."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How long should a SaaS paid-media test run?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "It depends on the question being asked. For lead quality, demo quality, pipeline creation, activation, channel fit or landing-page performance, you can often learn before a full sales cycle completes, because those signals arrive early. For closed-won CAC, revenue or payback, you need enough time for deals to mature through the relevant sales cycle and enough outcomes to be meaningful. A short self-serve motion may resolve in weeks; a long enterprise motion may need quarters. Decide the success metric before deciding the test duration, and note that ninety days can establish pipeline quality for enterprise SaaS without proving closed-won CAC."
                                    }
                              }
                        ]
                  }
            ]
      }
],
    faqHeading: `SaaS marketing in India — FAQs`,
    faq: [
      { q: `Why is SaaS marketing different from B2C?`,
        a: `<p>Structurally, not stylistically. In B2C the person who clicks usually pays, often the same day — fast, high-volume feedback. In B2B SaaS the user frequently isn't the buyer, several people influence the decision, a demo or trial isn't revenue, and the money may arrive months later. That changes what you can optimise toward, how long a test must run, and which system holds the truth.</p>` },
      { q: `What should a SaaS company optimise paid ads for?`,
        a: `<p>The event closest to business value that still happens often enough to learn from. That's a trade-off, not a rule: a qualified opportunity beats a form fill as a signal, but may occur a handful of times a month — too sparse for automated bidding. Start nearer the top where volume demands it, qualify hard, and move deeper as volume grows.</p>` },
      { q: `Which channel is best for B2B SaaS in India?`,
        a: `<p>Conditional, not universal. Search works when buyers already describe your category in a search box. Paid social suits broad SMB products, founder-led offers and remarketing, where creative creates the demand. Role and company targeting suits narrow, higher-value audiences but produces fewer events, so learning is slower. Contract value, how sharply you've defined your buyer, sales motion and demand maturity decide it.</p>` },
      { q: `What is a good CAC for SaaS?`,
        a: `<p>No rupee figure answers this, and published Indian SaaS averages are mostly vendor estimates rather than audited data. A CAC is good or bad only relative to what a customer contributes after cost of service, how long they stay, and how long payback takes against the cash you hold. ₹60,000 can be excellent at one contract value and ruinous at another.</p>` },
      { q: `Should SaaS use free trials or book-a-demo?`,
        a: `<p>It depends on how the product is bought. Something a person can evaluate alone in minutes suits self-serve or a trial. Something needing configuration, a security review or several stakeholders suits a demo — a trial nobody can run alone just produces abandoned accounts. Many sites need both paths for different segments; the mistake is forcing one CTA on everyone.</p>` },
      { q: `How should SaaS calculate marketing ROI?`,
        a: `<p>Against pipeline and closed revenue in the CRM, not platform-reported conversions. Hold two CAC figures: <strong>paid-media CAC</strong>, which tells you whether a channel works, and <strong>fully loaded CAC</strong> — team, agency, sales salaries and commission, tools, onboarding — which tells you whether the business works. Conflating them is how a channel looks profitable while the company isn't.</p>` },
      { q: `How long should a SaaS paid-media test run?`,
        a: `<p>It depends on the question. For lead and demo quality, channel fit, activation or landing-page performance, you can often learn <em>before</em> a full sales cycle completes — those signals arrive early. For closed-won CAC, revenue or payback, you need enough time for deals to mature through the cycle <em>and</em> enough outcomes to read. A short self-serve motion may resolve in weeks; a long enterprise motion may need quarters. Decide the success metric before you decide the duration — and note that ninety days can establish pipeline quality for enterprise SaaS without proving closed-won CAC.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has 10+ years of hands-on growth experience across 10+ industries, helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Spending on SaaS acquisition without a pipeline view?`, body: `A Foundation Audit checks whether your tracking reaches the CRM, whether your qualification is real, and what your acquisition actually costs once sales effort is counted. No pitch attached.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>A good D2C marketer takes over SaaS acquisition, runs the playbook that worked before, and three months later reports that the channels don't work for B2B. Usually the channels are fine. What broke is what the playbook quietly assumed — that the person clicking is the person paying, that a conversion is a sale, and that you'll know within days. Strip those out and most tactics still stand; it's the <em>measurement and optimisation system</em> around them that has to be rebuilt.</p>

    <h2>What the B2C playbook assumes</h2>
    <div data-tbl><table data-stack class="price-table">
      <thead>
        <tr><th>B2C/D2C assumption</th><th>What's usually true in B2B SaaS</th></tr>
      </thead>
      <tbody>
        <tr><td data-th="B2C/D2C assumption">One user = one buyer</td><td data-th="What's usually true in B2B SaaS">The user, the champion and the person who signs are often three people</td></tr>
        <tr><td data-th="B2C/D2C assumption">The purchase completes online</td><td data-th="What's usually true in B2B SaaS">A demo or trial starts a process that finishes in a conversation</td></tr>
        <tr><td data-th="B2C/D2C assumption">Conversion signal arrives in hours</td><td data-th="What's usually true in B2B SaaS">Revenue may land weeks or months after the click</td></tr>
        <tr><td data-th="B2C/D2C assumption">Thousands of events to learn from</td><td data-th="What's usually true in B2B SaaS">Often a few dozen meaningful events a month</td></tr>
        <tr><td data-th="B2C/D2C assumption">Creative can generate demand directly</td><td data-th="What's usually true in B2B SaaS">Creative generates attention; sales converts it</td></tr>
        <tr><td data-th="B2C/D2C assumption">Platform reporting is directionally useful</td><td data-th="What's usually true in B2B SaaS">Platform reporting stops at the form; the CRM holds the outcome</td></tr>
        <tr><td data-th="B2C/D2C assumption">First-purchase economics are judgeable quickly</td><td data-th="What's usually true in B2B SaaS">Economics depend on retention you haven't observed yet</td></tr>
      </tbody>
    </table><p class="price-note">Not every row applies to every SaaS business — which is the next point.</p></div>

    <h2>"SaaS" isn't one business model</h2>
    <p>A ₹999-a-month self-serve tool and a ₹30 lakh annual contract are different businesses sharing a delivery mechanism. What matters isn't the software; it's the <strong>sales motion</strong>, which determines how much a customer can cost, how long you wait to find out, and whether a human is involved at all.</p>
    <ul>
      <li><strong>Self-serve / PLG</strong> — closest to D2C. Higher volume, faster signal, product does the selling. The B2C playbook transfers best here, though retention still decides the economics.</li>
      <li><strong>SMB</strong> — short cycles, usually one decision-maker. Fast feedback, but CAC gets tight against small contracts.</li>
      <li><strong>Mid-market</strong> — several stakeholders, a real evaluation, weeks to months. Pipeline reporting becomes mandatory.</li>
      <li><strong>Enterprise / sales-led</strong> — long cycles, procurement, security review. Marketing generates and influences pipeline; it doesn't close, and measuring it as though it does produces nonsense.</li>
    </ul>
    <p>Everything below applies more strongly as you move down that list.</p>

    <h2>Failure 1: optimising for leads instead of pipeline</h2>
    <p>The big one, and seductive because lead cost is the metric that improves most easily. Loosen targeting, soften the offer, drop form fields, and cost per lead falls. The dashboard improves while the business doesn't.</p>
    <p>A cheap lead is worthless if it's the wrong company size, the wrong country, a student or job-seeker, someone with no authority, no live use case or no ability to pay. In SaaS these aren't edge cases — they can be most of the volume, and nothing in the ad platform knows the difference.</p>
    <p>So the useful unit isn't the lead; it's whatever stage first means <em>a real buying conversation</em>. Teams label those stages differently — lead, MQL, SQL, opportunity, closed-won is one common set — but the labels matter less than having them defined and applied consistently, and judging media at a stage where the obviously unqualified have already gone.</p>

    <h2>Failure 2: the CAC you quote isn't the CAC you pay</h2>
    <p>In D2C, media is most of acquisition cost. In SaaS it often isn't: by the time a customer signs, acquisition may have consumed media, the team or agency, SDR time, sales salaries and commission, tooling, onboarding, and sales-engineering effort. Rather than arguing about which belongs in the definition, hold two numbers deliberately:</p>
    <ul>
      <li><strong>Paid-media CAC</strong> — spend ÷ customers acquired from it. Answers: <em>is this channel working?</em> Useful weekly, comparable across campaigns.</li>
      <li><strong>Fully loaded CAC</strong> — everything above ÷ customers. Answers: <em>does this business work?</em> Useful quarterly, and the one that should inform pricing and headcount.</li>
    </ul>
    <p>Both are legitimate; neither is "the" CAC. The failure is quoting the first and believing you've answered the second — a channel can look efficient while every deal consumes three weeks of a salesperson nobody counted.</p>

    <h2>Failure 3: judging CAC without payback</h2>
    <p>CAC in isolation ranks companies wrongly. Consider two:</p>
    <div data-tbl><table data-stack class="price-table">
      <thead>
        <tr><th></th><th>Company A</th><th>Company B</th></tr>
      </thead>
      <tbody>
        <tr><td data-th="">CAC</td><td data-th="Company A">₹60,000</td><td data-th="Company B">₹35,000</td></tr>
        <tr><td data-th="">Contribution per month</td><td data-th="Company A">₹10,000</td><td data-th="Company B">₹3,000</td></tr>
        <tr><td data-th="">Payback period</td><td data-th="Company A">6 months</td><td data-th="Company B">~12 months</td></tr>
      </tbody>
    </table><p class="price-note">Illustrative arithmetic, not benchmarks. Substitute your own contribution figures.</p></div>
    <p>B has the lower CAC and the worse acquisition engine: it waits twice as long to recover its money, so it funds roughly half as much growth from the same cash. Choose between channels or segments on CAC alone and you'll systematically prefer the cheaper, slower one.</p>
    <p>You'll find published payback benchmarks, and they vary widely by company size, contract value, sales motion and whoever compiled them — so don't turn one into your target. What matters operationally is whether <em>your</em> payback fits the cash you actually hold, the retention you've actually observed, and the growth rate you're trying to fund. Our <a href="/tools/ltv-cac-calculator/">LTV:CAC calculator</a> has a SaaS mode taking MRR, churn and expansion and returning payback — faster than a spreadsheet.</p>

    <h2>Failure 4: treating LTV as a fact</h2>
    <p>ARPU divided by churn is arithmetic, not evidence, and it turns to fiction quickly: when the cohort is tiny, when you have months rather than years of retention history, when churn is still moving, when expansion is assumed rather than observed, when gross margin is ignored so revenue gets treated as profit, and when annual plans flatter short-term churn because nobody has had the chance to leave yet. Early customers also behave unlike later ones — your first users were probably hand-held by a founder, which isn't a repeatable acquisition experience.</p>
    <p>What's defensible: <strong>cohort retention you've observed</strong>, expansion you've recorded, and economics adjusted for gross margin so you're reasoning about contribution. If the honest answer is "we don't have enough history yet", that's a real answer — be conservative about acquisition cost rather than inventing a number to justify it. Same logic that makes <a href="/insights/break-even-roas/">break-even ROAS</a> meaningless without an honest margin.</p>

    <h2>Failure 5: attribution that stops at the form</h2>
    <p>A realistic journey: a LinkedIn ad, a blog post two weeks later, a direct visit, a branded Google search, a demo booking, an SDR follow-up, a sales call, and a closed deal 45 days after that first impression.</p>
    <p>Which channel gets credit? Whichever your attribution rule says — and that's the point. <a href="/insights/marketing-attribution-explained-simply/">Attribution is a rule for splitting credit</a>, not a discovery of cause, and in SaaS the gap is wide because the journey is long and mostly invisible to any single platform. Three things make it tractable:</p>
    <ul>
      <li><strong>The CRM is part of the source of truth.</strong> Platform conversions are form fills; the CRM knows which became revenue. An ROI claim that never touches the CRM is a claim about forms.</li>
      <li><strong>Campaign data has to survive the handoff.</strong> UTMs and click IDs captured at the form and written to the CRM record are what connect a closed deal back to a campaign. Retrofitting this is painful and usually partial.</li>
      <li><strong>Feed outcomes back where the platform supports it.</strong> Implementations differ, so check yours rather than assuming. In Google Ads the path is well documented: it has replaced the older "imported leads" goal with <strong>qualified leads</strong> and <strong>converted leads</strong>, which bring outcomes back from a CRM or other data source so campaigns can, in Google's words, "optimize towards deeper lead-to-sale funnel events" instead of maximising lead volume. Google now recommends <strong>enhanced conversions for leads</strong> — which it describes as "an upgraded version of offline conversion import" using hashed first-party data — as the starting point for new setups. Either way it's <a href="/services/growth-strategy-measurement/">measurement architecture</a> rather than campaign work.</li>
    </ul>

    <h2>Choosing channels without a ranking</h2>
    <p>Channel league tables are the laziest genre in SaaS marketing content, so here's the conditional version.</p>
    <p><strong>Search</strong> earns its place when buyers already describe your category in a search box. If people search "GST billing software", search captures demand that exists. If your category has no name yet, search has nothing to capture and you'll spend the budget discovering that.</p>
    <p><strong>Paid social</strong> works when the offer is broad enough to interrupt someone usefully — SMB products, founder-led positioning, education-led creative, remarketing. It demands creative at a cadence, which is a production question before it's a media one.</p>
    <p><strong>Role and company targeting</strong> suits narrow, higher-value audiences where reaching the right 2,000 people beats reaching 200,000. The trade-off is volume: fewer events mean slower, noisier learning.</p>
    <p>What decides it: contract value, how sharply you've defined the buyer, sales motion, whether demand exists, geography, creative capacity, and whether sales can work the pipeline. Deciding that deliberately is what <a href="/services/performance-marketing/">performance marketing</a> planning is; picking from a listicle isn't.</p>

    <h2>What to optimise for</h2>
    <p>Signups, activated users, qualified trials, demos booked, demos attended, opportunities, revenue — not interchangeable, and the optimisation event is one of the highest-stakes settings in a SaaS ad account.</p>
    <p>The principle: <strong>move it as close to business value as volume allows.</strong> The trade-off is that the closer you get, the rarer the event, and automated bidding needs frequency to learn. An opportunity is a far better signal than a form fill and may happen eight times a month — too sparse. So start where there's volume, qualify ruthlessly behind it, and move deeper as the numbers grow. There's no universal "always optimise for SQL" rule; anyone offering one hasn't looked at your event counts.</p>

    <h2>The site has to do its share</h2>
    <p>SaaS paid media often fails for reasons unrelated to the campaign. Before blaming the channel, check the page answers: who it's for, the problem it solves, proof, how the product does it, why it's different, the integration and security questions your buyer will ask, and what happens next.</p>
    <p>That last one is the CTA, and it should match the buying stage rather than company preference. Self-serve signup suits a product someone can evaluate alone in minutes; a trial suits one where value lands inside the trial window; book-a-demo suits anything needing configuration or several stakeholders; contact sales suits negotiated enterprise pricing. Many sites need more than one path for different segments — forcing a single CTA on every visitor is a common and expensive habit.</p>

    <h2>The feedback loop most SaaS teams don't have</h2>
    <p>Marketing can't fix lead quality when the only feedback is "the leads are bad." That sentence contains no information. What's needed is a structured disqualification reason on every rejected lead — wrong role, wrong company size, no budget, competitor research, student or job-seeker, duplicate, no-show, qualified but wrong timing, lost on price, lost on a product gap.</p>
    <p>Those reasons are instructions. Wrong role or company size is a targeting and landing-page problem. Students and job-seekers are a keyword-negative and creative problem. Lost on price is qualification or positioning. Wrong timing isn't a failure at all — it's a nurture list. And where volume allows, feeding qualified-versus-disqualified back as offline conversions turns that judgement into a bidding signal. This loop is usually the difference between an account that improves over six months and one that just gets cheaper leads.</p>

    <h2>India-specific realities</h2>
    <p>Two things change the economics more than anything else, and both are about <em>who you sell to</em> rather than where you sit.</p>
    <p>First, <strong>selling into India and selling into the US or Europe are different businesses</strong> run from the same office. Contract values, bid competition, cycle norms and what a customer can bear in acquisition cost all differ, often by an order of magnitude. An INR-priced SMB product and a USD-priced enterprise product shouldn't share a CAC target, a channel strategy or a payback expectation — blending them into one performance number hides both.</p>
    <p>Second, <strong>domestic search demand can be far thinner than export-market demand</strong> for the same category, which changes whether search is a primary channel or only a capture layer. Check your own query volume rather than assuming either way.</p>
    <p>Beyond that: English-language content produced from India serves global acquisition perfectly well, and founder-led sales is normal early on — effective, but worth recognising as unrepeatable when you model acquisition cost at scale. Those patterns are what our <a href="/industries/saas/">SaaS growth marketing</a> work is built around.</p>

    <h2>A measurement hierarchy</h2>
    <div data-tbl><table data-stack class="price-table">
      <thead>
        <tr><th>Level</th><th>Metrics</th><th>Dangerous when used alone</th></tr>
      </thead>
      <tbody>
        <tr><td data-th="Level">Outcome</td><td data-th="Metrics">Closed-won revenue, pipeline generated, CAC and payback</td><td data-th="Dangerous when used alone">Too slow to steer weekly decisions</td></tr>
        <tr><td data-th="Level">Qualification</td><td data-th="Metrics">Qualified opportunities, qualified demos, activated trials</td><td data-th="Dangerous when used alone">Only as honest as your qualification definition</td></tr>
        <tr><td data-th="Level">Diagnostic</td><td data-th="Metrics">CTR, CPC, cost per lead, signup rate</td><td data-th="Dangerous when used alone">Improve easily while the business gets worse</td></tr>
      </tbody>
    </table><p class="price-note">The bottom row is for debugging, not for deciding. The top row decides.</p></div>

    <h2>A 90-day plan</h2>
    <p><strong>Days 1–30 — define and instrument.</strong> Write down the ideal customer precisely enough to disqualify against. Work out contribution per customer, observed retention and both CAC figures. Fix tracking so campaign data reaches the CRM and survives to the deal record. Agree what each funnel stage means. Fix the landing page. Record a baseline.</p>
    <p><strong>Days 31–60 — test narrowly.</strong> One or two channels, not five. A few written hypotheses rather than constant fiddling. Get sales disqualification reasons flowing from day one and act on them.</p>
    <p><strong>Days 61–90 — connect spend to pipeline.</strong> Report by pipeline rather than lead volume, cut the segments producing unqualified traffic, improve the page against what sales is hearing, and decide what deserves scale.</p>
    <p>One honest caveat: ninety days establishes <em>pipeline quality</em> for most SaaS businesses, but for enterprise motions with two- or three-quarter cycles it won't prove closed-won CAC — and treating it as though it did will have you killing channels before their deals land. Decide at the start which question the ninety days answers.</p>`
  },
  {
    slug: "break-even-roas",
    section: "Paid Ads",
    readTime: "8 min read",
    date: "11 Nov 2026",
    h1: `Break-even ROAS: how to calculate the ROAS your ads actually need`,
    standfirst: `Every founder running paid media eventually asks whether a 3x is good. It isn't a question ROAS can answer on its own. Here's how to work out the ROAS at which your ads stop losing money, why gross margin gives you the wrong number, and the several things break-even ROAS still doesn't tell you.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "Break-Even ROAS: How to Calculate the ROAS Your Ads Need | Tilth",
      "description": "What break-even ROAS is, the formula (1 ÷ contribution margin), a worked example, why gross margin gives the wrong answer, and why beating break-even still doesn't mean the business is profitable.",
      "canonical": "https://wearetilth.com/insights/break-even-roas/",
      "robots": "index, follow",
      "ogTitle": "Break-even ROAS: how to calculate the ROAS your ads actually need",
      "ogDescription": "The formula, a worked example, why gross margin misleads — and why beating break-even still doesn't mean the business makes money.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/break-even-roas.webp",
      "ogLocale": null,
      "twTitle": "Break-even ROAS: the ROAS your ads actually need",
      "twDescription": "The formula, a worked example, and why beating break-even isn't the same as profit.",
      "twImage": "https://wearetilth.com/assets/insight-cards/break-even-roas.webp"
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
                                    "name": "Break-even ROAS: how to calculate the ROAS your ads actually need",
                                    "item": "https://wearetilth.com/insights/break-even-roas/"
                              }
                        ]
                  },
                  {
                        "@type": "BlogPosting",
                        "headline": "Break-even ROAS: how to calculate the ROAS your ads actually need",
                        "description": "What break-even ROAS is, the formula, a worked example, why gross margin gives the wrong answer, and why beating break-even still does not mean the business is profitable.",
                        "image": "https://wearetilth.com/assets/insight-cards/break-even-roas.webp",
                        "datePublished": "2026-11-11",
                        "dateModified": "2026-11-11",
                        "inLanguage": "en-IN",
                        "url": "https://wearetilth.com/insights/break-even-roas/",
                        "mainEntityOfPage": "https://wearetilth.com/insights/break-even-roas/",
                        "articleSection": "Paid Ads",
                        "keywords": [
                              "break-even ROAS",
                              "break even ROAS formula",
                              "how to calculate break-even ROAS",
                              "target ROAS vs break-even ROAS",
                              "contribution margin ROAS",
                              "profitable ROAS"
                        ],
                        "wordCount": 2130,
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
                                    "name": "What is break-even ROAS?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Break-even ROAS is the return on ad spend at which the contribution your sales generate exactly equals what you paid to generate them. Above it, acquisition spend is covered. Below it, every order funded by ads loses money before any fixed cost is counted. It is set entirely by your margin, not by your industry or your platform."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How do I calculate break-even ROAS?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Divide 1 by your contribution margin expressed as a decimal. A 50% contribution margin gives a break-even ROAS of 1 divided by 0.50, or 2.0x. A 25% margin gives 4.0x. The arithmetic is trivial; the work is in calculating the margin honestly, because it has to be the margin left after every variable cost except marketing."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Is a 2x ROAS good?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "There is no answer to that without your margin. At a 50% contribution margin, 2x is exactly break-even: it covers the ad spend and contributes nothing. At a 70% margin it is comfortably profitable at the media level. At a 25% margin it is losing roughly half of every rupee spent. A ROAS figure quoted without the margin beside it carries no information."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Should I use gross margin or contribution margin?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Contribution margin, if the two differ materially. Gross margin usually subtracts only cost of goods, which leaves out shipping and fulfilment, payment gateway fees, marketplace commissions, discounts, refunds and any variable servicing or sales cost. Using gross margin produces a break-even ROAS that is too low, which means a campaign can clear it and still lose money on every order."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "What is the difference between break-even ROAS and target ROAS?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Break-even ROAS is a floor derived from arithmetic. Target ROAS is a decision, and it should normally sit above the floor, because break-even covers acquisition and nothing else. The gap between them has to absorb whatever your business needs it to: measurement error, agency fees and creative production if those sit outside media spend, overhead, and whatever profit the business is supposed to make. There is no universal buffer to add."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Can I run ads below break-even ROAS?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Sometimes, but only against evidence. A first order below break-even can be rational when you have a measured repeat-purchase rate, subscription retention or contracted recurring revenue showing the customer becomes profitable within a payback period you can fund from cash you actually have. What does not qualify is the assumption that lifetime value will rescue the economics. If the repeat behaviour is hoped for rather than measured, you are not investing in acquisition, you are losing money on a schedule."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Why doesn't Meta or Google ROAS match my actual revenue?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Because they are measuring different things. Platform ROAS uses the conversion value your tracking or integration sends, interpreted through that platform's attribution model. Whether that value is gross, post-discount or net of something else depends on how the implementation was built, so check rather than assume. The bigger gap comes afterwards: cancellations and returns do not automatically revise a conversion that was already recorded unless your integration supports adjustments or you send them. Your finance reporting counts settled net revenue. Expect the two to differ, reconcile platform-reported orders against your backend regularly, and make decisions from the system closest to the money."
                                    }
                              }
                        ]
                  }
            ]
      }
],
    faqHeading: `Break-even ROAS — FAQs`,
    faq: [
      { q: `What is break-even ROAS?`,
        a: `<p>The return on ad spend at which the contribution your sales generate exactly equals what you paid to generate them. Above it, acquisition spend is covered; below it, every ad-funded order loses money before a single fixed cost is counted. It's set by your margin — not by your industry, and not by the platform.</p>` },
      { q: `How do I calculate break-even ROAS?`,
        a: `<p>Divide 1 by your contribution margin as a decimal. A 50% margin gives 1 ÷ 0.50 = <strong>2.0x</strong>; a 25% margin gives <strong>4.0x</strong>. The arithmetic is trivial. The work is calculating the margin honestly, because it has to be what's left after every variable cost <em>except</em> marketing.</p>` },
      { q: `Is a 2x ROAS good?`,
        a: `<p>Unanswerable without your margin. At 50% contribution margin, 2x is exactly break-even — it covers the ad spend and contributes nothing. At 70% it's comfortably profitable at the media level. At 25% it's losing roughly half of every rupee. A ROAS quoted without the margin beside it carries no information.</p>` },
      { q: `Should I use gross margin or contribution margin?`,
        a: `<p>Contribution margin, where the two differ materially. Gross margin usually subtracts only cost of goods — leaving out shipping and fulfilment, gateway fees, marketplace commissions, discounts, refunds and variable servicing costs. That produces a break-even ROAS that's too low, so a campaign can clear it and still lose money on every order.</p>` },
      { q: `What's the difference between break-even ROAS and target ROAS?`,
        a: `<p>Break-even is a floor you derive; target is a decision you make, and it should normally sit above the floor — because break-even covers acquisition and nothing else. The gap has to absorb whatever your business needs it to: measurement error, fees outside media spend, overhead, and the profit the business is supposed to make. There's no universal buffer to add.</p>` },
      { q: `Can I run ads below break-even ROAS?`,
        a: `<p>Sometimes — but only against evidence. A loss-making first order can be rational when you have a <em>measured</em> repeat rate, subscription retention or contracted recurring revenue showing the customer turns profitable inside a payback period you can fund from cash you actually hold. "We'll make it back on LTV" is not evidence. If the repeat behaviour is hoped for rather than measured, you're not investing in acquisition — you're losing money on a schedule.</p>` },
      { q: `Why doesn't Meta or Google ROAS match my actual revenue?`,
        a: `<p>They measure different things. Platform ROAS uses the conversion value your tracking or integration sends, interpreted through that platform's attribution model — whether that value is gross, post-discount or net depends on your implementation, so check rather than assume. The bigger gap is afterwards: cancellations and returns don't automatically revise a conversion already recorded unless your integration supports adjustments or you send them. Finance counts settled net revenue. Expect a gap, reconcile against your backend regularly, and decide from the system closest to the money.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has 10+ years of hands-on growth experience across 10+ industries, helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Not sure your margin or your ROAS is real?`, body: `A Foundation Audit checks what your contribution margin actually is and whether the ROAS you're reporting survives contact with your backend — before you scale against either. No pitch attached.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>"Is a 3x ROAS good?" is one of the most common questions founders ask, and it has no answer. Not because it's a bad question, but because ROAS on its own is a ratio with half the information missing. The same 3x is excellent for a software business and quietly fatal for a brand selling discounted electronics. <strong>Break-even ROAS</strong> is the number that supplies the missing half: the point at which your ads stop losing money. This is how to calculate it, and — just as important — what it still won't tell you.</p>

    <h2>The short answer</h2>
    <p>Break-even ROAS is <strong>1 ÷ your contribution margin</strong>. At a 50% contribution margin it's 2.0x. At 25%, it's 4.0x. At 70%, about 1.43x. That's the whole formula, and the arithmetic is the easy part — almost every mistake people make here is in the margin, not the division.</p>

    <h2>Five things people call "ROAS"</h2>
    <p>Most confused conversations about ad profitability are these being used interchangeably.</p>
    <div data-tbl><table data-stack class="price-table">
      <thead>
        <tr><th>Term</th><th>What it is</th><th>What it doesn't tell you</th></tr>
      </thead>
      <tbody>
        <tr><td data-th="Term">Revenue ROAS</td><td data-th="What it is">Revenue ÷ ad spend. The raw ratio.</td><td data-th="What it doesn't tell you">Whether any of that revenue was profit</td></tr>
        <tr><td data-th="Term">Break-even ROAS</td><td data-th="What it is">The ratio at which contribution exactly covers ad spend</td><td data-th="What it doesn't tell you">Anything about fixed costs or company profit</td></tr>
        <tr><td data-th="Term">Target ROAS</td><td data-th="What it is">The ratio you decide to run at, normally above break-even</td><td data-th="What it doesn't tell you">Whether the target was set from evidence or hope</td></tr>
        <tr><td data-th="Term">Platform ROAS</td><td data-th="What it is">The ad platform's attributed revenue ÷ its spend</td><td data-th="What it doesn't tell you">What actually settled in your bank account</td></tr>
        <tr><td data-th="Term">Business profitability</td><td data-th="What it is">What's left after every cost, fixed and variable</td><td data-th="What it doesn't tell you">Which channel caused it</td></tr>
      </tbody>
    </table><p class="price-note">Break-even ROAS is a media-level test. The last row is a company-level outcome. They are not the same question.</p></div>

    <h2>What break-even ROAS actually means</h2>
    <p>At break-even, one rupee of ad spend produces exactly enough contribution to pay for itself. Not profit — <em>payback</em>. You are running to stand still, and you would have the same bank balance if you hadn't advertised at all, minus the time.</p>
    <p>That framing matters because it sets the floor correctly in your head. Break-even is not a target. It's the line below which you are certainly losing money, which is a different and much less ambitious claim.</p>

    <h2>The formula, and the margin that drives it</h2>
    <blockquote>Contribution margin = contribution profit ÷ revenue<br>Break-even ROAS = 1 ÷ contribution margin</blockquote>
    <p><strong>Contribution profit is what's left from a sale after every variable cost except marketing.</strong> That last clause is the one people get wrong. Variable costs usually include cost of goods, shipping and fulfilment, payment gateway charges, marketplace or platform commissions, the discount you actually gave rather than the one on the price list, expected refunds and cancellations, and any sales commission or variable servicing cost. If a cost rises when you sell one more unit, it belongs here.</p>
    <p>A note on language: "contribution margin" is used here as an operating framework for deciding ad spend, not as a formal accounting statement. Your accountant may define some of these lines differently, and this isn't tax or accounting advice. What matters for the decision is that you've subtracted everything that genuinely varies with volume.</p>

    <h2>A worked example</h2>
    <p>A D2C brand selling a ₹2,000 product:</p>
    <div data-tbl><table class="price-table">
      <thead>
        <tr><th>Line</th><th>Amount</th></tr>
      </thead>
      <tbody>
        <tr><td data-th="Line">Selling price</td><td data-th="Amount">₹2,000</td></tr>
        <tr><td data-th="Line">Product cost (COGS)</td><td data-th="Amount">−₹700</td></tr>
        <tr><td data-th="Line">Shipping and fulfilment</td><td data-th="Amount">−₹150</td></tr>
        <tr><td data-th="Line">Payment gateway</td><td data-th="Amount">−₹50</td></tr>
        <tr><td data-th="Line">Expected refunds and discount leakage</td><td data-th="Amount">−₹100</td></tr>
        <tr><td data-th="Line"><strong>Contribution before marketing</strong></td><td data-th="Amount"><strong>₹1,000</strong></td></tr>
        <tr><td data-th="Line">Contribution margin</td><td data-th="Amount">50%</td></tr>
        <tr><td data-th="Line"><strong>Break-even ROAS (1 ÷ 0.50)</strong></td><td data-th="Amount"><strong>2.0x</strong></td></tr>
      </tbody>
    </table><p class="price-note">Illustrative arithmetic. Substitute your own lines — the output moves a long way on small changes.</p></div>
    <p>Read it through once at 2.0x: ₹1 of ad spend produces ₹2 of revenue. At a 50% contribution margin, that ₹2 leaves ₹1 before marketing. That ₹1 exactly covers the ₹1 you spent. Nothing remains. The campaign is not failing and it is not succeeding — it is precisely neutral, and every fixed cost in the business is still unpaid.</p>

    <h2>Why gross margin gives you the wrong number</h2>
    <p>Say the same brand used gross margin instead and subtracted only COGS: ₹2,000 − ₹700 = ₹1,300, a 65% margin, implying a break-even ROAS of about 1.54x. A campaign running at 1.8x would look comfortably profitable. In reality it's below the true 2.0x floor and losing money on every order. The error is quiet, consistent, and scales exactly as fast as you do. Where shipping, gateway fees, commissions, discounts and returns are material — which is most of D2C — gross margin isn't a conservative approximation. It's the wrong input.</p>

    <h2>Break-even is a floor, not a target</h2>
    <p>Your target ROAS should normally sit above break-even, because break-even covers acquisition and nothing else. The gap between the two has to pay for whatever your business needs it to pay for, and that list is specific to you:</p>
    <ul>
      <li><strong>Measurement uncertainty</strong> — if your reported ROAS carries error, the floor needs a margin of safety above it.</li>
      <li><strong>Costs outside media</strong> — agency fees, creative production and tools, where those aren't already inside the ad spend figure.</li>
      <li><strong>Fixed costs</strong> — payroll, rent, software, and everything else that doesn't move with volume.</li>
      <li><strong>Actual profit</strong> — the business presumably exists to make some.</li>
      <li><strong>Cash position</strong> — a company with short runway needs a wider gap than one that can wait.</li>
    </ul>
    <p>Which is why there's no universal buffer. "Always add 20%" is a made-up number that happens to be right for somebody. Work out what the gap has to absorb in your business, in rupees per month, and derive the target from that. Setting it deliberately rather than by habit is a large part of what <a href="/services/performance-marketing/">performance marketing</a> planning involves.</p>

    <h2>Beating break-even doesn't mean the business makes money</h2>
    <p>Worth stating flatly, because it's the most common misreading of this whole concept. Clearing break-even ROAS means your <em>acquisition spend</em> is covered at the contribution level you defined. It says nothing about payroll, rent, software subscriptions, agency fees excluded from media, creative production, debt service or tax. A business can run every campaign above break-even and still lose money for the year.</p>
    <p>So hold two numbers, not one: <strong>media break-even</strong>, which this formula gives you, and <strong>company-level profitability</strong>, which it does not. Confusing them is how a brand ends up scaling confidently into insolvency.</p>

    <h2>Blended ROAS hides weak new-customer economics</h2>
    <p>This one costs D2C brands real money. A campaign can report 4x because existing customers — people who were going to buy anyway — are redeeming offers and converting through paid. The blended number looks healthy while the acquisition engine underneath it is losing money on every genuinely new customer.</p>
    <p>If the point of the spend is acquisition, judge it on acquisition: <strong>new-customer revenue, new-customer CAC and first-order contribution</strong>, with repeat contribution tracked separately rather than folded in. Most ad platforms and ecommerce backends can split new from returning; if yours can't, that's the first thing to fix. The habit matters most for <a href="/industries/d2c-ecommerce/">D2C and ecommerce brands</a>, where repeat purchase is common enough to flatter almost any report.</p>

    <h2>When acquiring below break-even is defensible</h2>
    <p>Sometimes a first order should lose money. Subscription businesses, genuine consumables, contracted recurring revenue and validated cross-sell all produce customers worth more than their first purchase, and refusing to pay for them is its own mistake.</p>
    <p>The test is evidence. It's legitimate when you have a <em>measured</em> repeat rate or retention curve from your own cohorts, a payback period you can state in months, and enough cash to survive that period — ideally with the whole thing stress-tested against a worse retention number than your best cohort produced. It is not legitimate when "we'll make it back on LTV" is doing the work. An LTV assumption with no cohort data behind it isn't a plan; it's the same loss, scheduled. Our <a href="/tools/ltv-cac-calculator/">LTV:CAC calculator</a> is a quick way to pressure-test whether the repeat assumption survives contact with arithmetic.</p>

    <h2>Why your platform ROAS won't match finance</h2>
    <p>Two separate gaps, and it helps to name them apart.</p>
    <p>The first is <strong>what the conversion value actually contains</strong>. A platform reports the value your tracking or integration sent it. Whether that figure is gross, post-discount or net of something else depends entirely on how the implementation was built — so don't assume it's always gross booked revenue, and don't assume it isn't. Check what yours sends before reasoning from it.</p>
    <p>The bigger issue is what happens afterwards. A cancellation or return days later doesn't automatically revise the conversion that was already recorded; the correction has to be supplied. Google, for instance, documents two adjustment types for exactly this — <strong>restate</strong>, which "allows you to change the conversion value, but not the count of conversions", and <strong>retract</strong>, which removes a conversion and sets its value to zero, for cases it names as "canceled reservations or returned purchases". Both are uploaded by the advertiser, and online conversions can only be adjusted if you passed a transaction ID in the first place. Other platforms handle this differently again. So unless somebody built that correction loop, the dashboard keeps counting revenue your accounts never saw — and your real contribution is lower than it looks. There's no universal return rate to assume here; use your own.</p>
    <p>The second is <strong>attribution</strong>. Platform ROAS is that platform's own attributed output, counted inside its own window and model. It is a vendor report from an interested party, not accounting truth, and it will disagree with GA4, your backend and your CRM — each of which counts differently again. That disagreement is <a href="/insights/marketing-attribution-explained-simply/">normal and explainable</a> rather than a fault. Reconcile platform-reported orders against your backend regularly, decide from the system closest to the money, and treat building that reconciliation as <a href="/services/growth-strategy-measurement/">measurement work</a> rather than reporting.</p>

    <h2>A practical checklist</h2>
    <ol>
      <li>List every variable cost per order, including the discount you actually give and your real refund rate.</li>
      <li>Calculate contribution margin from those, not from gross margin.</li>
      <li>Divide 1 by it. That's your floor.</li>
      <li>Decide what the gap above the floor must absorb, in rupees per month, and set a target from that.</li>
      <li>Split new-customer from repeat performance before judging any campaign.</li>
      <li>Reconcile platform revenue against backend net revenue, and know the size of the gap.</li>
      <li>If you're deliberately running below break-even, write down the payback period and the cohort evidence for it.</li>
    </ol>
    <p>If you'd rather not do the arithmetic by hand, our <a href="/tools/ad-spend-profitability-calculator/">ad spend profitability calculator</a> takes the same inputs — price, COGS, shipping, fees, discounts, return rate — and returns your break-even ROAS and the most you can pay to acquire a customer. And if the numbers coming out of it don't look like the numbers in your dashboard, start with the <a href="/insights/audit-your-ad-spend/">five-minute ad spend self-audit</a>.</p>`
  },
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
                        "dateModified": "2026-11-08",
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
                        "wordCount": 1190,
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
                                          "text": "It depends entirely on scope, and the comparison is usually made wrong. A retainer is not comparable to a salary line: in-house costs include total employer cost rather than headline pay, plus tools, recruitment and the management time the role consumes, while an agency fee typically excludes media spend and sometimes creative production. External help is often cheaper for broad or intermittent needs because you are buying a fraction of several people. In-house becomes more efficient when the work is steady, full-time and central enough to keep a person genuinely busy."
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
        a: `<p>It depends on scope, and the comparison is usually made wrong. A retainer isn't comparable to a salary line: in-house means total employer cost, not headline pay, plus tools, recruitment and management time, while an agency fee usually excludes media spend. External help is often cheaper for broad or intermittent needs because you're buying a fraction of several people; in-house gets more efficient when the work is steady enough to keep someone genuinely busy.</p>` },
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
        <tr><th>Option</th><th>What you're really buying</th><th>Strongest when</th><th>Watch out for</th></tr>
      </thead>
      <tbody>
        <tr><td data-th="Option">Freelancer</td><td data-th="What you're really buying">Depth in one skill, bought by the hour or project</td><td data-th="Strongest when">The gap is specific, bounded and doesn't need coordinating</td><td data-th="Watch out for">Single point of failure; no continuity if they move on; you do the managing</td></tr>
        <tr><td data-th="Option">Agency</td><td data-th="What you're really buying">A fraction of several specialists, coordinated for you</td><td data-th="Strongest when">Several channels have to work together and you want tested playbooks</td><td data-th="Watch out for">Seniority varies; knowledge leaves with the contract unless you insist otherwise</td></tr>
        <tr><td data-th="Option">In-house</td><td data-th="What you're really buying">Dedicated attention and accumulated context</td><td data-th="Strongest when">The work is steady, central to the product and enough to fill a role</td><td data-th="Watch out for">Slow to hire and hard to reverse; one person can't be deep in everything</td></tr>
        <tr><td data-th="Option">Hybrid</td><td data-th="What you're really buying">In-house ownership plus external depth</td><td data-th="Strongest when">You need direction held internally and specialist hands externally</td><td data-th="Watch out for">Needs explicit ownership, or both sides assume the other is deciding</td></tr>
      </tbody>
    </table></div>
    </div>

    <h2>The cost comparison most founders get wrong</h2>
    <p>"Agency is expensive, freelancers are cheap, in-house is cheapest long term" is received wisdom and unreliable in all three directions. A retainer isn't comparable to a salary line: in-house means <strong>total employer cost</strong>, not headline pay, plus tools, recruitment and management time — and one salary buys one person's breadth, where the same money at an agency buys a fraction of several. An agency fee, meanwhile, usually excludes media spend and sometimes creative. Compare scope and exclusions, not headline figures. (We break the fee side down in <a href="/insights/marketing-agency-cost-india/">what a marketing agency costs in India</a>.)</p>

    <h2>Choose a freelancer when</h2>
    <ul>
      <li>The gap is one specific, bounded skill — a landing page, a burst of content, an ad account set up properly.</li>
      <li>You have the time and judgement to brief and manage them yourself.</li>
      <li>The work is intermittent, and you'd rather not carry it as a fixed cost.</li>
    </ul>
    <p>The catch is breadth and continuity: once needs span paid <em>and</em> SEO <em>and</em> tracking <em>and</em> creative, you're managing several freelancers or discovering the one you have is past their depth — and when they move on, the knowledge goes too.</p>

    <h2>Choose an agency when</h2>
    <ul>
      <li>Several channels have to work together, and somebody other than you should be coordinating them.</li>
      <li>You want access to specialists you couldn't justify hiring individually — paid, SEO, analytics, creative.</li>
      <li>You'd rather buy tested playbooks than fund the learning curve.</li>
      <li>You need capability quickly, and a hiring cycle is months you don't have.</li>
    </ul>
    <p>The trade-off is dependency. Agree up front who owns the accounts, data and documentation, so what's learned stays with you. The breadth the function eventually needs is laid out across our <a href="/services/">growth marketing services</a> — a fair scoping checklist whoever delivers it.</p>

    <blockquote>The question isn't "agency or in-house?" It's "what does this stage of the business actually need — and can I measure whether it's working?"</blockquote>

    <h2>Choose in-house when</h2>
    <ul>
      <li>The work is constant, central to the product, and genuinely fills a role.</li>
      <li>Accumulated context matters — a complex product, a specialist audience, a long sales cycle.</li>
      <li>You want the knowledge to compound inside the company rather than inside a supplier.</li>
      <li>Speed of iteration with product and sales matters more than channel depth.</li>
    </ul>
    <p>The trade-offs are real: hiring is slow and hard to reverse, and nobody is expert in paid, organic, lifecycle, brand and analytics at once. Too early, and you pay a senior salary for junior-breadth output — which is why <a href="/insights/first-marketing-hire-startup/">what your first marketing hire should be</a> is worth settling before the job is posted.</p>

    <h2>Use a hybrid when</h2>
    <p>The most pragmatic structure usually isn't a single choice. <strong>One in-house lead owns strategy, priorities and the relationship with the business; an agency or freelancers bring specialist depth.</strong> You get accountability and continuity without paying for breadth you can't keep busy. It only works with explicit ownership — write down who decides what, or both sides assume the other is. Where the external half is channel execution tied to revenue, that's <a href="/services/performance-marketing/">performance marketing</a>; where it's diagnosis, it isn't a staffing question yet.</p>

    <h2>Stage is a signal, not a rule</h2>
    <p>Funding stage correlates loosely — earlier companies lean external because needs are intermittent, later ones lean hybrid — but it's a weak proxy for what actually decides it: how steady and how broad the work is. A seed-stage company with one proven channel and daily workload may justify a hire before a Series A company still looking for its first.</p>

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
    standfirst: `Founders usually ask "SEO or paid ads person?" That's the wrong first question. Here's how to work out what's actually missing, what the Indian pay market really looks like once you read the sources properly, and how to set the hire up so it doesn't quietly fail.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "Your Startup's First Marketing Hire: Who to Hire First (2026 Guide) | Tilth",
      "description": "Your startup's first marketing hire shouldn't be a specialist. How to diagnose what's actually missing, what Indian salary sources really say, and how to set the hire up to succeed.",
      "canonical": "https://wearetilth.com/insights/first-marketing-hire-startup/",
      "robots": "index, follow",
      "ogTitle": "Your startup's first marketing hire: who to hire first",
      "ogDescription": "It shouldn't be a specialist. How to diagnose what's missing, what Indian salary sources really say, and how to set the hire up to succeed.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/first-marketing-hire-startup.webp",
      "ogLocale": null,
      "twTitle": "Your startup's first marketing hire: who to hire first",
      "twDescription": "How to diagnose what's missing, what the pay sources really say, and how to set the hire up to succeed.",
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
                        "description": "Your startup's first marketing hire shouldn't be a specialist. How to diagnose what is actually missing, what Indian salary sources really say, and how to set the hire up to succeed.",
                        "image": "https://wearetilth.com/assets/insight-cards/first-marketing-hire-startup.webp",
                        "datePublished": "2026-07-12",
                        "dateModified": "2026-11-08",
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
                        "wordCount": 1620,
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
                                          "text": "Published Indian figures for growth marketing roles disagree widely, and most describe a growth marketing manager at a funded company rather than a startup's first generalist. Salary-platform models put the average base well above 20 lakh a year, crowd-sourced profiles sit in a similar place on tiny samples, and job-posting aggregators run lower. Treat any single number with suspicion, benchmark against live postings for your own city and stage, and budget total employer cost rather than headline CTC: tools, devices, recruitment and the management time the role consumes are all real."
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
        a: `<p>Published figures disagree widely, and most describe a growth marketing <em>manager</em> at a funded company rather than a startup's first generalist. Salary-platform models put the average base above ₹20 lakh; job-posting aggregators run lower. Benchmark against live postings for your city and stage rather than any single average — and budget total employer cost, not headline CTC.</p>` },
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

    <p>This generalist is sometimes called a "founding marketer" or "growth marketer" — typically someone who has touched growth, content and paid channels at a previous startup and is comfortable being hands-on rather than directing an agency. A generalist by necessity, not because they failed to specialise.</p>

    <h2>Diagnose what's missing before you write a job description</h2>
    <p>The useful version of this decision starts with what's actually broken, not with a title. Six questions settle most of it:</p>
    <ul>
      <li><strong>What is the founder bottleneck?</strong> If marketing stalls because nobody has time, you need hands. If it stalls because nobody knows what to do next, hands won't help.</li>
      <li><strong>Is strategy missing, or execution?</strong> These are different hires at different prices, and conflating them is the most common first-hire mistake.</li>
      <li><strong>Does acquisition already work at all?</strong> A hire who inherits one channel that converts has a very different job from one asked to find the first.</li>
      <li><strong>How many channels does the business genuinely need?</strong> Two done properly beats five done badly, and it changes whether one person is enough.</li>
      <li><strong>How mature is your tracking?</strong> If GA4, the ad pixels and your CRM disagree about what a conversion is, the first quarter goes on <a href="/insights/ga4-conversion-tracking/">fixing measurement</a> rather than growth. Worth knowing before you hire, not after.</li>
      <li><strong>Who produces the creative?</strong> Paid social in particular runs on a creative cadence. If nobody can make new assets, the hire inherits a production problem dressed as a channel problem.</li>
    </ul>
    <p>Answer those honestly and you'll often find one person can't realistically cover the required disciplines — which is a useful finding, not a failure. The <a href="/insights/agency-vs-freelancer-vs-inhouse/">agency vs freelancer vs in-house</a> question and the "who's my first hire" question are the same decision from two angles.</p>

    <h2>When an agency or freelancer is the better interim move</h2>
    <p>Hiring is slow and hard to reverse. If the gap is one bounded skill, if you need several disciplines but only a few days a month of each, or if you don't yet know which channel deserves a salary, external help buys the answer before you commit to payroll. Especially when the immediate job is diagnostic rather than operational — working out why acquisition isn't converting is <a href="/services/growth-strategy-measurement/">measurement work</a>, and it doesn't need a permanent hire.</p>

    <h2>When to make the hire</h2>
    <p>Hire too early and you're paying someone to market a product that hasn't found its shape. Hire too late and growth stalls with a founder stretched across product, sales and marketing. As a rough guide:</p>
    <ul>
      <li><strong>Too early:</strong> before you have signal on who buys and why. Marketing can't fix an unclear product.</li>
      <li><strong>About right:</strong> early traction, a repeatable if manual sales or signup motion, and a founder who can no longer keep up with content, ads and reporting alongside everything else.</li>
      <li><strong>Too late:</strong> a year of ad hoc ads and content with nobody accountable for whether any of it worked.</li>
    </ul>

    <h2>What to pay — and why the published numbers disagree</h2>
    <p>We used to print a salary table here. Checking the current sources made it look more confident than the evidence behind it: there's no authoritative salary survey for this role in India, the public figures disagree materially, and most describe a growth marketing <em>manager</em> at a funded company rather than a startup's first generalist. What you're really choosing between is source types:</p>

    <div data-tbl><table class="price-table">
      <thead>
        <tr><th>Source type</th><th>What it actually tells you</th></tr>
      </thead>
      <tbody>
        <tr><td data-th="Source type">Salary-platform model estimates</td><td data-th="What it actually tells you">Modelled from broad datasets. Currently put average base pay above ₹20 lakh — but for a manager at an established employer, not your first hire.</td></tr>
        <tr><td data-th="Source type">Crowd-sourced profile averages</td><td data-th="What it actually tells you">Self-reported, often from tiny samples. Directionally interesting, statistically thin.</td></tr>
        <tr><td data-th="Source type">Job-posting aggregates</td><td data-th="What it actually tells you">Closest to what's actually being offered now, and usually lower than platform models. The most useful of the four for a startup.</td></tr>
        <tr><td data-th="Source type">Content marketing "salary guides"</td><td data-th="What it actually tells you">Published by firms with an interest in the number. Commentary, not data.</td></tr>
      </tbody>
    </table><p class="price-note">Source types, not a rate card. When public sources disagree this much, the honest move is to read live postings rather than average weak data into a false average.</p></div>

    <p>Two things survive the uncertainty. Benchmark against live postings for your own city, stage and funding position — a seed-stage startup in Bengaluru and a Series C firm in Gurgaon aren't bidding in the same market for the same title. And budget <strong>total employer cost, not headline CTC</strong>: tools, devices, recruitment fees and the management time the role consumes are real money.</p>

    <p>One pattern holds across every source: a deep specialist costs more than the generalist you need first — a second reason to sequence specialists later. If the maths feels tight against your overall <a href="/insights/startup-marketing-budget-india/">marketing budget</a>, work it out before you post the job.</p>

    <blockquote>The best first marketing hire isn't the person who knows one channel best. It's the person who can find out which channel is worth knowing best.</blockquote>

    <h2>Red flags when hiring your first marketer</h2>
    <ul>
      <li><strong>They can't explain how they'd measure success</strong> before you've told them your goals.</li>
      <li><strong>Their portfolio is all execution, no strategy</strong> — fine for a fourth hire, risky for a first.</li>
      <li><strong>They've only ever worked inside a large marketing team</strong> with dedicated designers, analysts and ops — a very different job from doing all of it themselves.</li>
      <li><strong>They're vague about tracking and attribution</strong> — they'll scale spend on numbers nobody checked.</li>
    </ul>

    <h2>What the first 90 days should actually produce</h2>
    <p>Agree this before the offer, because a first marketer with no defined output drifts into activity. A reasonable ninety days ends with measurement you both trust, a written view of who buys and why drawn from real customers, two or three channels tested small enough to afford and long enough to read, and an honest recommendation about where the next rupee goes. Note what isn't on that list: a content calendar, a rebrand, a headline growth number. Those are outputs of a working system, not evidence you're building one.</p>

    <h2>How to set them up to succeed</h2>
    <p>The single biggest reason first marketing hires fail isn't the person — it's that they inherit a foundation nobody has checked. Tracking that double-counts conversions, ad accounts with stale pixels, unclear attribution between paid and organic. A strong generalist will eventually notice and fix these things, but every month spent debugging measurement is a month not spent testing channels. An independent read on tracking and targeting before they start is the cheapest way to make sure their first quarter is spent growing the business rather than untangling it — and if the gap turns out to be broader than one person, our <a href="/services/">growth marketing services</a> page is a fair checklist of what the function has to cover eventually, whoever ends up owning it.</p>`
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
                                          "text": "You can, but a constrained budget split across two platforms often leaves neither with enough volume to answer the question you launched it to answer. Google recommends at least 30 conversions when evaluating Smart Bidding performance, which is a platform benchmark for judging a bidding strategy rather than a universal campaign minimum. Work out what evidence your own objective, sales cycle and conversion value require, then check whether half the budget can buy it. Prove one channel, then add the second with a budget that can support it."
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
        a: `<p>You can, but a constrained budget split two ways often leaves neither platform with enough volume to answer the question you launched it to answer. Google recommends at least 30 conversions when evaluating Smart Bidding performance — a platform benchmark for judging a bidding strategy, not a universal campaign minimum. Work out what evidence your own objective, sales cycle and conversion value require, then check whether half the budget can buy it.</p>` },
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
    <p>A mature programme runs both: search to capture demand, Meta to build and re-engage the audiences that create it. But the maths of starting with both is unkind. Splitting a constrained test budget across two platforms often leaves neither with enough volume to answer the question you launched it to answer. Google does recommend at least 30 conversions when evaluating Smart Bidding performance, but that's a platform benchmark for judging a bidding strategy, not a universal campaign minimum — work out the evidence your own objective, sales cycle and conversion value actually require, then check whether half the budget can buy it. Usually it can't, and you've paid for two shrugs instead of one answer. Proving one channel cleanly, then funding the second properly, gets you to a two-channel programme faster than starting there.</p>

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
                        "dateModified": "2026-11-08",
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
                        "wordCount": 1120,
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
                                          "text": "Published figures cluster between roughly ₹25,000 and ₹2,50,000 a month in fees, separate from ad spend, but treat that as the range you are likely to be quoted rather than an established market rate, since no independent survey of Indian agency pricing exists. What actually moves it is the number of channels, creative volume and how much tracking work is in scope."
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
        a: `<p>Published figures cluster between roughly ₹25,000 and ₹2,50,000 a month in fees, separate from ad spend — but treat that as the range you're likely to be <em>quoted</em> rather than an established market rate, since no independent survey exists. <a href="/insights/marketing-agency-cost-india/">More on pricing here</a>.</p>` },
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
    bodyHtml: `<p>For a direct-to-consumer brand, marketing isn't a support function — it <em>is</em> the business. You live and die by acquisition cost, repeat purchase rate and contribution margin, so the wrong <strong>marketing agency for your D2C brand</strong> doesn't just waste a retainer; it burns the ad budget that is your growth. Here's the buyer's guide I'd give a founder choosing one in India.</p>

    <h2>1. Real D2C experience — with brands like yours</h2>
    <p>D2C has its own physics: thin margins, returns, repeat-purchase economics, marketplace versus own-site dynamics. An agency that's only run B2B lead-gen will apply the wrong playbook. Ask for work with <strong>D2C brands at a similar category and stage</strong> — and ask what didn't work, not just the highlight reel.</p>

    <h2>2. They talk in contribution margin, not ROAS</h2>
    <p>ROAS is revenue divided by ad spend and says nothing about whether you made money: a 3x on 25% contribution margin loses cash, a 2x on 60% doesn't. Agencies worth hiring ask for landed cost, shipping, payment fees, returns and discount load in the first conversation, and talk in <strong>break-even ROAS or blended MER</strong>. If nobody asks what a sale is actually worth to you, they're optimising a number that can rise while your bank balance falls.</p>

    <h2>3. New and repeat customers are separated — always</h2>
    <p>The most useful discipline in D2C reporting, and the one most often missing. Blended ROAS flatters you when repeat customers were buying anyway: paid takes credit for revenue it didn't cause and you scale into a wall. Ask to see <strong>new-customer CAC and new-customer contribution</strong> separately from total. An agency that can't split them can't tell you whether acquisition works — and retention is where D2C margin lives, so the second and tenth order need an owner too.</p>

    <h2>4. Tracking they'll fix, and reconcile against your backend</h2>
    <p>Every scaling decision rides on whether reported ROAS and CAC are real. Browser-only tracking misses conversions — how many varies, and anyone quoting a precise loss figure is guessing — and platform totals routinely disagree with Shopify. Some disagreement is normal, since the platforms count differently and claim overlapping credit. What matters is whether somebody <strong>reconciles platform orders against backend orders regularly</strong> and can explain the gap. Fix <a href="/insights/ga4-conversion-tracking/">conversion tracking</a> before handing over a budget; rebuilding it properly is <a href="/services/growth-strategy-measurement/">measurement work</a>, not media work.</p>

    <blockquote>For a D2C brand, the agency's media skill matters less than whether the numbers it's optimising toward are true.</blockquote>

    <h2>5. Creative volume, with a hypothesis behind it</h2>
    <p>On Meta especially, creative is the main lever and fatigue is the normal state. Ask two things: how many new concepts a month, and what happens to the losers. Volume without a hypothesis is churn — you want to hear what was being tested, what it showed, and what came next. Then ask how long brief-to-live takes: a two-week turnaround quietly caps how fast you can learn, whatever the media plan says.</p>

    <h2>6. They can change the page, not just the ad</h2>
    <p>Sending more traffic to a store that doesn't convert is the most expensive way to "scale". Ask who may change the product and checkout pages, and whether CRO is in scope or an excluded extra. Same for merchandising and promotions — bundles, thresholds and discount depth move contribution margin faster than most bid changes, and an agency with no view of them is working one-handed.</p>

    <h2>7. Channel mix chosen for your economics</h2>
    <p>D2C in India spans Meta and Google, but also marketplaces, quick commerce and influencer — and those carry different economics. Marketplace revenue arrives with commission, fulfilment terms and no customer data; owned-store revenue costs more to acquire and gives you the relationship. A serious agency says which mix suits your margin instead of blending both into one ROAS. It should also coordinate Meta and Google rather than running them as rival scoreboards — branded search will happily claim demand that paid social created. Doing that deliberately is the substance of <a href="/services/performance-marketing/">performance marketing</a> for <a href="/industries/d2c-ecommerce/">D2C and ecommerce brands</a>.</p>

    <h2>Red flags worth walking away from</h2>
    <ul>
      <li><strong>Reporting stops at platform ROAS</strong> — no contribution margin, no blended view, no backend reconciliation.</li>
      <li><strong>They can't separate new from repeat customers</strong> — so they can't tell you if acquisition works.</li>
      <li><strong>Accounts and tracking in the agency's name</strong>, or raw data available only through their dashboard.</li>
      <li><strong>Creative with no hypothesis</strong>, or a turnaround too slow for the rate the channel burns assets.</li>
      <li><strong>Guaranteed ROAS</strong>, or one generic deck that could belong to any client.</li>
    </ul>
    <p>For a deeper list, see the <a href="/insights/questions-before-hiring-marketing-agency/">questions to ask before hiring a marketing agency</a> and <a href="/insights/marketing-agency-cost-india/">what a marketing agency costs in India</a>.</p>

    <h2>The shortcut: know your own numbers first</h2>
    <p><strong>Get an independent read on your own setup before you start interviewing.</strong> Once you know whether tracking is sound, what a new customer really costs and which channels clear your margin, you can judge every pitch against reality rather than on faith. That's what a <a href="/insights/marketing-foundation-audit/">foundation audit</a> gives you.</p>`
  },
  {
    slug: "marketing-attribution-explained-simply",
    section: "Attribution",
    readTime: "7 min read",
    date: "18 May 2026",
    h1: `Marketing attribution for small businesses, explained simply`,
    standfirst: `"Attribution" sounds like a word built to confuse founders into hiring someone. It's actually a simple idea: which marketing touchpoint gets the credit when a customer interacted with several before buying? Here's what that means in plain English, why your platforms rarely match exactly, and the one thing attribution can't tell you however good it gets.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "Marketing Attribution for Small Businesses, Explained Simply | Tilth",
      "description": "What marketing attribution actually means, the models GA4 and Meta currently offer, why platform numbers often differ, and why attribution can't prove incrementality.",
      "canonical": "https://wearetilth.com/insights/marketing-attribution-explained-simply/",
      "robots": "index, follow",
      "ogTitle": "Marketing attribution for small businesses, explained simply",
      "ogDescription": "The models GA4 and Meta currently offer, why platform numbers often differ, and why attribution can't prove incrementality.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/marketing-attribution-explained-simply.webp",
      "ogLocale": null,
      "twTitle": "Marketing attribution for small businesses, explained simply",
      "twDescription": "What attribution means without the jargon — and why it can't prove incrementality.",
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
                        "description": "What marketing attribution actually means, the models GA4 and Meta currently offer, why platform numbers often differ, and why attribution cannot prove incrementality.",
                        "image": "https://wearetilth.com/assets/insight-cards/marketing-attribution-explained-simply.webp",
                        "datePublished": "2026-05-18",
                        "dateModified": "2026-11-08",
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
                        "wordCount": 1540,
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
                                          "text": "Data-driven attribution. Google's documentation says that for event-scoped dimensions Analytics uses the model you select, but defaults to data-driven; the other options are paid and organic last click and Google paid channels last click. Note that user-scoped and session-scoped dimensions always use paid and organic last click and are unaffected by that setting. Google removed the first click, linear, time decay and position-based models from GA4 reporting in November 2023, so older guides listing those are out of date. Lookback windows default to 30 days for acquisition key events and 90 days for all other key events, and can be changed."
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
                                          "text": "Not a complex custom model. GA4's built-in data-driven attribution already accounts for multiple touchpoints, which is enough for most small businesses. The bigger priority is getting basic tracking accurate first, since no attribution model fixes data that was never captured. It is also worth knowing what no model can do: attribution distributes credit among touchpoints it can see, which is not the same as proving a sale would not have happened anyway."
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
        a: `<p>Data-driven attribution. Google's documentation says that for event-scoped dimensions Analytics uses the model you select, but defaults to data-driven; the other options are paid and organic last click and Google paid channels last click. Note that user-scoped and session-scoped dimensions always use paid and organic last click and are unaffected by that setting. Google removed the first-click, linear, time-decay and position-based models from GA4 reporting in November 2023, so older guides listing those are out of date.</p>` },
      { q: `Is last-click attribution bad for small businesses?`,
        a: `<p>Not inherently, but it undercounts channels that introduce customers earlier, like content or influencer marketing, and overcredits channels that close the sale, like branded search or retargeting.</p>` },
      { q: `Do I need multi-touch attribution as a small business?`,
        a: `<p>Not a complex custom model — GA4's data-driven attribution already accounts for multiple touchpoints. Getting basic tracking accurate matters more than the model choice. And it's worth knowing what no model can do: distributing credit among touchpoints isn't the same as proving the sale wouldn't have happened anyway.</p>` },
      { q: `Why does my attribution data look wrong?`,
        a: `<p>Usually it's incomplete or broken conversion tracking feeding it bad data, not the attribution model itself. Verify GA4 events fire correctly across channels first.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has 10+ years of hands-on growth experience across 10+ industries, helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Get an honest read on what's actually driving sales`, body: `A Foundation Audit checks whether your tracking captures every channel correctly, so your attribution data reflects reality — not just whichever channel happens to close the sale.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>Ask ten founders what "marketing attribution" means and most will give a vague answer involving dashboards and jargon. The actual idea is simple: a customer rarely buys from the very first ad they see. They might see an Instagram post, search your brand name a week later, click a Google ad, and finally buy after an email reminder. <strong>Marketing attribution</strong> is just the method for deciding which of those touchpoints gets credit for the sale — and that choice changes which channels look like they're working.</p>

    <h2>What "attribution" actually means, in plain English</h2>
    <p>Attribution answers one question: when a sale happens after several marketing touches, how much credit does each one get? It's not a measurement of reality so much as a rule you apply to messy reality, because there's no perfect way to know exactly how much each touchpoint mattered to the customer's decision. Different rules — different attribution models — will hand credit to different channels for the exact same sequence of events.</p>

    <p>It matters because budget decisions get made on which channels "look like" they're working. If the model quietly overcredits one and undercredits another, you cut a channel that was contributing and double down on one that got lucky with the last click.</p>

    <h2>The models, and which ones still exist</h2>
    <h3>Last-click</h3>
    <p>All the credit goes to whatever the customer clicked right before buying. Simple, but it systematically favours channels that close a sale — branded search, retargeting — over the blog post or influencer mention that started things.</p>
    <h3>Data-driven</h3>
    <p>Rather than a fixed rule, it uses patterns in your own conversion data to estimate how much each touchpoint contributed. The most realistic of the common models, provided the data feeding it is accurate.</p>
    <h3>First-click, linear, time-decay, position-based</h3>
    <p>Worth knowing mainly so you don't go hunting for them: Google removed all four from GA4 reporting in November 2023. Plenty of guides still describe them as GA4 options. They aren't.</p>
    <p>So GA4 offers three: <strong>data-driven attribution</strong>, <strong>paid and organic last click</strong>, and <strong>Google paid channels last click</strong>. <strong>Data-driven is the default</strong> — Google's documentation says that for event-scoped dimensions, Analytics uses the model you select but defaults to data-driven, and you can change that property setting. Lookback defaults to 30 days for acquisition key events and 90 days for everything else.</p>
    <p>One wrinkle catches people out: that model only governs <strong>event-scoped</strong> traffic dimensions. User-scoped and session-scoped dimensions — "Session source", "First user medium" — always use paid and organic last click, and Google states they're unaffected by changes to the attribution model. So switching the property setting moves some of your numbers and leaves others exactly where they were. Not a bug, but a common source of "our own reports disagree with each other".</p>
    <p>Meta works differently again: <strong>standard</strong>, <strong>incremental</strong> and <strong>custom</strong> models at ad set level, where standard counts clicks within 1 or 7 days, views within 1 day of an impression, and engagements within 1 day.</p>

    <blockquote>Attribution doesn't tell you the truth. It tells you a story, consistently, according to a rule. The question is whether that rule is honest about how your customers actually buy.</blockquote>

    <h2>A simple example: one customer, three touchpoints</h2>
    <p>A customer sees an Instagram ad on Monday, searches your brand name and visits on Wednesday without buying, then clicks a Google remarketing ad on Friday and purchases. Under last-click, Google remarketing takes all the credit. Under data-driven, it's split across all three based on how similar journeys tend to convert — probably giving Instagram real credit for starting things, even though it never got the final click.</p>

    <h2>Three things people call "attribution" that aren't the same</h2>
    <p>Most confused measurement conversations are these three used interchangeably.</p>
    <ul>
      <li><strong>The attribution model</strong> — a rule for splitting credit among touchpoints a system can see. An accounting convention, not a discovery.</li>
      <li><strong>The source of truth</strong> — the one system you agree to decide from. Usually the one closest to money, your orders or CRM, with platforms as directional inputs rather than rivals.</li>
      <li><strong>Incrementality</strong> — whether the sale would have happened anyway. No attribution model answers this, because all of them start from conversions that already happened.</li>
    </ul>

    <h2>Attribution can't prove incrementality</h2>
    <p>A channel receiving credit has not been shown to have caused anything. Branded search is the classic case: someone who already decided to buy searches your name, clicks the ad, converts, and the ad takes credit for a sale that was arriving anyway. Retargeting has the same problem in a different coat.</p>
    <p>The platforms know this, which is why incrementality is now a separate product rather than a model setting — Meta's incremental attribution, in its own words, "uses machine learning models that predict whether a conversion is caused by an ad."</p>
    <p>Answering it properly means comparing against something. In rough order of how much you can trust the result: a platform's own incrementality or lift experiment, where one is available to you; a randomised holdout, where some comparable audience is deliberately kept unexposed; or a geographic holdout, where you pause a channel in some regions and keep it running in others, so the two move through the same season and the same news.</p>
    <p>Most small businesses can't run any of those, so the fallback is a planned on/off test: turn a channel off for a defined period and watch total orders rather than that channel's reported conversions. Treat it as directional, not proof — a before-and-after comparison can't separate your change from seasonality, a promotion, a competitor's campaign, shifting demand, something else you altered at the same time, or just a different mix of weekdays. Use comparable periods, change one thing at a time, run it long enough to cover a normal cycle, and write down what else was going on. A pause that coincides with a sales dip hasn't shown causation; it's given you a reason to look harder.</p>

    <h2>Why platform numbers often differ</h2>
    <p>Google Ads, Meta and GA4 will usually report different numbers for the same week, and your accounts can diverge materially from all three. Exact parity shouldn't be expected, and a gap is not by itself evidence of a fault. They use different models and windows; each counts conversions it was involved in, so the same sale gets claimed twice; Meta counts view-through and engage-through conversions GA4 wouldn't attribute the same way; and some data is modelled rather than observed — Google states plainly that it "uses modeling to estimate online key events that can't be observed directly," including for unconsented users under consent mode, and notes GA4 attribution data can keep updating for up to twelve days.</p>
    <p>Consent is the gap underneath all of it: where visitors decline tracking the sale still happens but the touchpoints aren't recorded, and the system either models the gap or drops it — Google notes that without enough traffic to model confidently, key events go unreported or land in "Direct". Pick a source of truth, expect the others to disagree, and be able to explain the gap rather than close it.</p>

    <h2>The prerequisite nobody mentions: tracking has to work first</h2>
    <p>Attribution can only distribute credit among touchpoints it sees. If your Meta pixel is missing events or GA4 undercounts purchases, no model corrects for data that was never captured — it just produces a more convincing wrong answer. Confirm what's measured before debating how credit is split: that's <a href="/insights/ga4-conversion-tracking/">GA4 conversion tracking</a> and a basic <a href="/insights/audit-your-ad-spend/">ad spend audit</a>, and it's why <a href="/services/growth-strategy-measurement/">measurement</a> is architecture rather than a dashboard.</p>`
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
                        "dateModified": "2026-11-08",
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
                        "wordCount": 1040,
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
                                          "text": "A focused foundation audit typically takes one to two weeks depending on scope, once you have shared read access to your analytics, ad accounts and tracking setup. The output is a short, honest read on what is broken and what to fix first, not a 60-page report nobody acts on."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "How does the Tilth Foundation Audit work?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "The first conversation is free, with no pitch attached and no obligation. If the problem needs deeper diagnosis, we scope a paid Foundation Audit around it. A typical audit takes one to two weeks, depending on scope."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Do I need to change agencies to get an audit?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "No. A foundation audit is independent of who runs your channels. Many brands use it as a second opinion on an existing agency or in-house team. The goal is to know whether your spend is built on solid ground, not to replace anyone."
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
        a: `<p>Typically one to two weeks depending on scope, once you've shared read access to your analytics, ad accounts and tracking setup. You get a short, honest read on what's broken and what to fix first — not a report nobody acts on.</p>` },
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

    <h2>1. Measurement — is the data even true?</h2>
    <p>Everything downstream depends on this. The audit confirms conversions actually fire, on the right pages, for the right actions: <a href="/insights/ga4-conversion-tracking/">GA4 events</a>, the Meta pixel and Conversions API, server-side where it applies, and deduplication between browser and server. Then the unglamorous checks — is a "conversion" defined as the thing you actually sell, do purchase events carry real value and currency, and does platform-reported revenue reconcile against your backend? If tracking is wrong, every report after it is fiction.</p>

    <h2>2. Economics — can you afford the customers you're buying?</h2>
    <p>Measurement tells you what happened; economics tells you whether it was worth it. The audit works out real CAC, contribution margin after returns and discounts, what LTV assumptions are actually evidenced rather than hoped for, repeat-purchase behaviour, and the break-even ROAS or MER that follows. Plenty of accounts are tracked perfectly and still unprofitable, because nobody calculated what a customer could cost. Our <a href="/tools/ltv-cac-calculator/">LTV:CAC calculator</a> covers the arithmetic if you want to sanity-check it yourself first.</p>

    <h2>3. Acquisition — is each channel earning its budget?</h2>
    <p>Channel by channel — paid ads, <a href="/insights/affiliate-program-not-converting/">affiliates</a>, SEO, influencer — the audit looks at campaign structure, what each campaign is optimising toward (an optimisation event pointed at the wrong action is a common and expensive fault), audience and query quality, creative testing cadence, and whether the landing page answers what the ad promised. The point isn't to add channels. It's to find the ones quietly draining budget while looking busy.</p>

    <blockquote>You can't optimise what you can't see. Most "underperforming" marketing isn't a creative problem — it's a measurement problem wearing a creative costume.</blockquote>

    <h2>4. Attribution — and what it can't tell you</h2>
    <p>The audit establishes which system is your source of truth, how platform numbers compare against the backend, and where modelled or consent-limited data is filling gaps. It also sets the limits honestly: attribution distributes credit among touchpoints it can see, which is <a href="/insights/marketing-attribution-explained-simply/">not the same as proving incrementality</a>. Knowing which of your reported wins are probably incremental and which were arriving anyway changes where the next rupee goes.</p>

    <h2>5. Partnerships — paid for results, or paid for reach?</h2>
    <p>Affiliate and influencer partnerships are where attribution gaps turn into real money lost. The audit checks partner quality, how incentives are designed, whether payouts reward activation or just signups, and whether anything in the traffic looks invalid. Are partners being credited for sales they didn't cause? That's a foundation problem, not a performance one.</p>

    <h2>6. Operating system — who decides, and on what?</h2>
    <p>The most-skipped area, and the one that decides whether anything sticks. Who owns each number, how often is it reviewed, what's on the test backlog, what decision rules exist for scaling or killing something, and is any of it written down? A brand with mediocre tracking and a real operating rhythm usually beats one with perfect tracking and no owner.</p>

    <h2>What the output should look like</h2>
    <p>A good audit doesn't end in a 60-page deck. It ends in a list you can act on: <strong>each issue verified rather than suspected</strong>, with a severity, an honest note on the financial or decision impact, a named owner for the fix, and a sequence — because several of these depend on each other and doing them in the wrong order wastes the work. It should also say plainly <strong>what not to scale yet</strong>, which is usually the most valuable line in the document.</p>
    <p>What it shouldn't contain is a promised outcome. An audit tells you what's true and what to fix first; it can't guarantee what happens next. Fixing the foundation is what makes the spend after it measurable — and keeping that layer honest as you scale is the substance of <a href="/services/growth-strategy-measurement/">growth strategy and measurement</a> work.</p>`
  },
  {
    slug: "measure-influencer-marketing-roi",
    section: "Influencer",
    readTime: "7 min read",
    date: "23 May 2026",
    h1: `How to measure influencer marketing ROI properly`,
    standfirst: `"It got a lot of engagement" is not an ROI number. Here's how to measure influencer marketing properly — the metrics that actually predict revenue, the tracking setup that has to happen before you brief anyone, and why attributed revenue still isn't the same as incremental revenue.`,
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
                        "dateModified": "2026-11-08",
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
                        "wordCount": 1100,
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
                                          "text": "There is no credible published benchmark for this, and the multiples that circulate are not traceable to any survey worth citing. Judge a campaign against your own break-even instead: the contribution profit it returned against what it cost, including creator fees, product, production and any paid amplification. Awareness-focused campaigns should be judged separately again, on reach and cost per thousand rather than the same formula."
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
                                          "text": "Last-click attribution alone tends to undercount influencer marketing, since the content often introduces a customer who converts later through search or a direct visit. Combine GA4 path and attribution reporting with discount code and link data, and add a post-purchase survey asking how the customer heard about you. For this channel a self-reported answer is often more informative than the analytics, because much of the journey happens where no tag can follow it."
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
        a: `<p>There's no credible published benchmark, and the multiples that circulate aren't traceable to any survey worth citing — so we've removed ours. Judge a campaign against your own break-even: the contribution profit it returned versus what it cost. Awareness campaigns should be judged separately again, on reach and cost per thousand, not the same formula.</p>` },
      { q: `Should I use reach and engagement to judge ROI?`,
        a: `<p>They're useful diagnostics, not proof of return — a post can get thousands of likes and generate zero attributable revenue. Track them alongside conversion metrics, not instead.</p>` },
      { q: `How do I track sales without a link click?`,
        a: `<p>Unique discount codes per influencer capture sales regardless of path — the code is entered at checkout even if the customer didn't click through directly.</p>` },
      { q: `What attribution model should I use?`,
        a: `<p>Last-click alone tends to undercount influencer contribution, since the content often introduces someone who converts later through search or direct. Combine GA4's path and attribution reporting with code and link data, and add a post-purchase "how did you hear about us?" question — for this channel it often beats the analytics.</p>` },
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

    <h2>Count the whole cost, then use two numbers</h2>
    <p>Campaign cost is rarely just the fee. Include the creator payment, product sent and not returned, any production or seeding cost, whitelisting or paid amplification behind the creator's handle, and management time if it's material. Amplification in particular gets logged as media spend elsewhere and quietly disappears from the influencer line.</p>
    <p>Then run two calculations, because the first one flatters you:</p>
    <blockquote>Revenue ROAS = attributed revenue ÷ campaign cost<br>Contribution return = attributed contribution profit ÷ campaign cost</blockquote>
    <p>Contribution profit means revenue after cost of goods, shipping, payment fees, the discount the code itself gave away, and refunds or cancellations once the return window has closed. A 3x revenue ROAS on a discounted first order with a 20% return rate can be a loss. Where you can, separate <strong>new-customer revenue</strong> from repeat: a code redeemed by an existing customer who was buying anyway isn't acquisition, it's a discount you volunteered.</p>

    <h2>Attribution for influencer campaigns</h2>
    <p>Last-click alone tends to <strong>undercount</strong> influencer work, because the content often introduces someone who converts days later through search or a direct visit. Use several signals together: GA4's path and attribution reporting, discount code redemptions as an independent signal, the platform's own referral data as a cross-check, and — most underrated for this channel — a <strong>post-purchase "how did you hear about us?" question</strong>. Self-reported answers are messy, but for a channel where much of the journey happens where no tag can follow, they frequently tell you more than the analytics do.</p>

    <h2>Attributed is not the same as incremental</h2>
    <p>The limitation worth stating plainly: revenue attributed to a creator is not proof the creator caused it. A code redeemed by someone who'd already decided, a follower who would have found you anyway, a post that coincided with a sale — all of it lands in the attributed column. Attribution distributes credit among touchpoints it can see; it <a href="/insights/marketing-attribution-explained-simply/">can't establish what wouldn't have happened otherwise</a>. Treat the number as a directional read, be most sceptical of your best-performing creator, and accept that awareness-heavy campaigns can't be judged on the same formula at all — the same reason <a href="/insights/affiliate-program-not-converting/">affiliate programmes</a> need channel-appropriate metrics. Getting this architecture right is <a href="/services/growth-strategy-measurement/">measurement work</a>, and it's what makes <a href="/services/influencer-pr-events/">creator campaigns</a> reportable rather than anecdotal.</p>

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
                        "dateModified": "2026-11-08",
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
                        "wordCount": 1080,
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
                                          "text": "The ones that are hard to answer from a script: who owns the ad accounts and analytics during and after the contract, which system is the source of truth when it disagrees with platform reporting, what is excluded from the fee, what the first 30, 60 and 90 days produce, how they decide what to test and when to stop a test, who actually does the work day to day, and how any result they show you was measured."
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
                                          "text": "There is no standard, and notice periods vary between agencies. What matters more than the number is that the exit is clear, that there are no hidden off-boarding fees, and that the accounts, data and creative files come with you when you leave. Be cautious of long lock-ins with punitive cancellation clauses agreed before anything has been proven."
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
        a: `<p>The ones that are hard to answer from a script: who owns the ad accounts and analytics during and after the contract, which system is the source of truth when it disagrees with the platform, what is excluded from the fee, what the first 30/60/90 days produce, how they decide what to test and when to stop, who actually does the work, and how any result they show you was measured.</p>` },
      { q: `What are the biggest red flags?`,
        a: `<p>Jumping straight to tactics with no discovery, reporting only vanity metrics, refusing to fix tracking before scaling, a salesperson who disappears after signing, guaranteed results, and bundling ad spend into the fee so you can't see what's media versus management.</p>` },
      { q: `Should an agency fix tracking before running ads?`,
        a: `<p>Yes. If tracking and attribution are wrong, every decision is based on bad data and scaling spend wastes money faster. A good agency fixes the <a href="/insights/marketing-foundation-audit/">measurement foundation</a> first.</p>` },
      { q: `How long should the contract be?`,
        a: `<p>There's no standard, and notice periods vary. What matters more than the number is that the exit is clear, there are no hidden off-boarding fees, and the accounts, data and creative files come with you. Be cautious of long lock-ins with punitive cancellation clauses before anything's been proven.</p>` },
      { q: `How do I check if their results are real?`,
        a: `<p>Ask for results from similar businesses, tied to revenue rather than impressions, and ask how they were tracked. If they can't explain the measurement, treat the result as marketing, not proof.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has 10+ years of hands-on growth experience across 10+ industries — on both sides of the agency pitch. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Want a benchmark before you choose?`, body: `A Foundation Audit gives you an independent, honest read on your current setup — so you can judge any agency's answers against what's actually true. No pitch attached.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>Choosing a marketing agency is mostly an exercise in seeing past a good deck. Almost every agency presents well; far fewer do the unglamorous foundation work that decides whether your spend is measurable. These are the questions I'd ask before hiring a marketing agency — grouped by what they reveal — with the green-flag answer and the red flag for each.</p>

    <h2>Questions about process</h2>

    <h3><span class="qn">01.</span>What exactly will exist at day 30, 60 and 90?</h3>
    <p class="flag good"><strong>Green flag:</strong> named deliverables with dates — measurement verified, a tested hypothesis list, a first read on which channel clears your economics.</p>
    <p class="flag bad"><strong>Red flag:</strong> "we'll launch campaigns in week one", or a timeline made of activity rather than outputs you could check.</p>

    <h3><span class="qn">02.</span>How will you verify my tracking before you scale anything?</h3>
    <p class="flag good"><strong>Green flag:</strong> they treat <a href="/insights/ga4-conversion-tracking/">tracking and attribution</a> as step one and describe <em>how</em> — a test transaction, event-by-event checks, reconciliation against your backend.</p>
    <p class="flag bad"><strong>Red flag:</strong> a blank look, or "tracking's already fine" without looking. Scaling on broken measurement just wastes money faster.</p>

    <h3><span class="qn">03.</span>How do you decide what to test, and what would make you stop a test?</h3>
    <p class="flag good"><strong>Green flag:</strong> a hypothesis, a decision rule agreed in advance, and a willingness to call something dead. Ask what they killed last quarter.</p>
    <p class="flag bad"><strong>Red flag:</strong> "we're always testing" with no example of a test that failed and what it changed.</p>

    <h2>Questions about measurement &amp; ownership</h2>

    <h3><span class="qn">04.</span>Whose name is on the ad accounts, analytics, pixels and creative files?</h3>
    <p class="flag good"><strong>Green flag:</strong> yours, with the agency given access. Confirmed in writing, including what happens on exit.</p>
    <p class="flag bad"><strong>Red flag:</strong> accounts in the agency's name, or raw platform data available only through their dashboard. That's leverage, not convenience.</p>

    <h3><span class="qn">05.</span>Which system is the source of truth — and what do you do when it disagrees with the platform?</h3>
    <p class="flag good"><strong>Green flag:</strong> one named system, usually the one closest to money, and a calm explanation that platforms over-claim and some gap is normal.</p>
    <p class="flag bad"><strong>Red flag:</strong> whichever number looks best that month, or surprise that the two don't match.</p>

    <h3><span class="qn">06.</span>What metrics will you report, and how often?</h3>
    <p class="flag good"><strong>Green flag:</strong> outcomes tied to revenue or qualified pipeline, on a regular cadence, with the "so what" explained.</p>
    <p class="flag bad"><strong>Red flag:</strong> impressions, reach and follower counts — metrics that move without the business moving.</p>

    <h2>Questions about the team</h2>

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

    <h3><span class="qn">10.</span>What's the contract length, and what comes with me if I leave?</h3>
    <p class="flag good"><strong>Green flag:</strong> a clear exit, no hidden off-boarding fees, and accounts, data, documentation and creative files that transfer.</p>
    <p class="flag bad"><strong>Red flag:</strong> long lock-ins, punitive cancellation clauses, or a shrug about what you keep. Notice periods vary; what you walk away with matters more than the number of days.</p>

    <h3><span class="qn">11.</span>What's excluded from the fee?</h3>
    <p class="flag good"><strong>Green flag:</strong> a straight list — media spend, creative production, landing pages, tools, tracking work — and who pays for each. (More in <a href="/insights/marketing-agency-cost-india/">what a marketing agency costs in India</a>.)</p>
    <p class="flag bad"><strong>Red flag:</strong> spend bundled into the fee so you can't see media versus management. If the fee is a percentage of spend, ask directly how they handle advising you to spend less — the honest ones have already thought about it.</p>

    <h3><span class="qn">12.</span>Can you show results from businesses like mine, and how were they measured?</h3>
    <p class="flag good"><strong>Green flag:</strong> relevant examples tied to revenue, and a straight explanation of the measurement behind them.</p>
    <p class="flag bad"><strong>Red flag:</strong> big numbers with no context, no similar businesses, and no answer on how anything was tracked. An unexplained result is a claim, not evidence.</p>

    <blockquote>The best answers all point the same way: foundation first, honesty about measurement, and the same senior people after the ink dries.</blockquote>

    <p>You don't need all twelve, and a polished agency will answer several well. The ones that separate firms are 04, 05 and 11 — ownership, source of truth, and what the fee excludes — because they're hard to answer from a script and checkable later. If you're still weighing the model rather than the firm, we've compared <a href="/insights/agency-vs-freelancer-vs-inhouse/">agency, freelancer and in-house</a>; and if nobody yet knows what's broken, that diagnosis is <a href="/services/growth-strategy-measurement/">measurement work</a> before it's a hiring decision.</p>`
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
                        "dateModified": "2026-11-08",
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
                        "wordCount": 1250,
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
                                          "text": "Google does not publish a timeframe for leads. On its own timing it says changes can take anywhere from a few hours to several months to be reflected in Search, suggests waiting a few weeks before assessing whether a change had a beneficial effect, and notes that not all changes produce a noticeable impact. If traffic has existed for months with no leads, the cause is more likely intent mismatch or conversion friction than simply needing more time."
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
        a: `<p>Google doesn't publish a figure for leads. On its own timing, it says changes can take anywhere from a few hours to several months to be reflected, suggests waiting a few weeks before judging whether a change helped, and notes that not every change produces a noticeable effect. If traffic has existed for months with no leads, the cause is more likely intent mismatch or conversion friction than needing more time.</p>` },
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
    bodyHtml: `<p>"Our organic traffic is up and leads haven't moved" is one of the most common things founders tell us. It feels like proof that SEO doesn't work. In almost every case we've looked at, it isn't — it's one or two specific, diagnosable problems between the traffic and the lead form. Search Console makes it easy to watch a number rise and assume the business is growing, but a visitor who arrived hasn't bought anything. This guide covers why <strong>SEO traffic isn't converting into leads</strong>, and how to work out which cause is yours.</p>

    <h2>The most common reasons SEO traffic isn't converting</h2>

    <h3>1. You're ranking for the wrong keywords</h3>
    <p>"What is [category]" brings researchers; "[category] pricing" or "best [category] for [use case]" brings people near a decision. If your top pages by traffic are informational rather than commercial, growing traffic won't grow leads proportionally.</p>

    <h3>2. Your landing pages don't match the query</h3>
    <p>Someone who searched "pricing" and lands on a generic homepage bounces, even if pricing is mentioned somewhere on it. Pages need to answer the specific question the keyword implies, quickly.</p>

    <h3>3. No clear next step</h3>
    <p>Plenty of well-ranking pages don't ask for anything. If an interested visitor has to hunt for how to contact you, most won't.</p>

    <h3>4. Broken or missing conversion tracking</h3>
    <p>Sometimes SEO is generating leads — they're just not being counted. If form submissions, calls or WhatsApp clicks from organic traffic aren't tagged as conversions in GA4, the "no leads" problem may be a <a href="/insights/ga4-conversion-tracking/">measurement problem</a>, not a marketing one. Rule this out before changing anything else.</p>

    <h3>5. Branded traffic is masking everything else</h3>
    <p>If a decent share of your organic clicks are people searching your company name, they were already coming. Branded search is demand you created elsewhere, arriving through organic. Split branded from non-branded in Search Console before concluding anything: total organic can rise handsomely while the non-branded traffic that's supposed to find <em>new</em> customers sits flat.</p>

    <h3>6. The traffic is real but it isn't yours to sell to</h3>
    <p>Rankings that pull visitors from countries you don't serve inflate sessions and convert nothing. And sometimes the right person asks the right question, finds the page, and simply isn't persuaded — a positioning problem no amount of content fixes.</p>

    <h3>7. Your content and your commercial pages never meet</h3>
    <p>A blog that ranks and a service page that sells, with nothing linking them, is two websites sharing a domain. Internal links from articles to the commercial page that answers the next question are the cheapest conversion fix available, and the most commonly skipped.</p>

    <h3>8. Technical drag</h3>
    <p>Slow pages and poor mobile experience suppress rankings and conversions at once. Google's Core Web Vitals are <strong>Largest Contentful Paint</strong> (within 2.5s), <strong>Interaction to Next Paint</strong> (under 200ms) and <strong>Cumulative Layout Shift</strong> (under 0.1). Google doesn't call them a ranking factor — it says it highly recommends good scores for success in Search. Treat them as conversion hygiene with a possible ranking benefit.</p>

    <blockquote>Traffic answers "are people finding us?" Leads answer "are we useful once they do?" They're different questions, and a rising traffic chart can hide a flat answer to the second one.</blockquote>

    <h2>How to diagnose it: a simple process</h2>
    <ol>
      <li><strong>Split branded from non-branded</strong> in Search Console first — it reframes everything else.</li>
      <li><strong>Segment organic by page and keyword intent</strong>, separating informational pages from commercial ones.</li>
      <li><strong>Check conversion rate by landing page</strong>, not overall — a few high-traffic, low-converting pages skew the picture.</li>
      <li><strong>Verify tracking fires</strong> for organic leads specifically, with a real test submission.</li>
      <li><strong>Read your top commercial pages as a stranger</strong> — is the query answered in the first screen, and is the next step obvious?</li>
    </ol>

    <h2>How to fix it once you know the cause</h2>
    <ul>
      <li><strong>Wrong keywords:</strong> shift content investment toward commercial and transactional intent, not raw search volume.</li>
      <li><strong>Intent mismatch:</strong> build dedicated landing pages for your highest-intent keywords instead of routing everything to the homepage.</li>
      <li><strong>Weak CTAs:</strong> a specific, visible next step above the fold and repeated down the page — not just in the footer.</li>
      <li><strong>Branded masking:</strong> report non-branded organic separately and set targets against that, not the total.</li>
      <li><strong>Disconnected content:</strong> add internal links from ranking articles to the commercial page that answers the next question.</li>
      <li><strong>Tracking gaps:</strong> fix GA4 conversion events for organic leads first, so you can measure whether the other fixes worked.</li>
      <li><strong>Technical drag:</strong> prioritise Core Web Vitals on your highest-traffic commercial pages.</li>
    </ul>
    <p>A broader <a href="/insights/marketing-foundation-audit/">marketing foundation audit</a> covers these at once, which is usually faster than fixing them one at a time by trial and error. If the underlying problem is that content and commercial intent were never joined up, that's what <a href="/services/seo-ai-search/">SEO and AI search</a> work is for — and if you can't yet trust the lead numbers at all, start with <a href="/services/growth-strategy-measurement/">measurement</a>.</p>

    <h2>What about AI results?</h2>
    <p>Founders increasingly ask whether AI Overviews and AI Mode have taken the clicks. There's a lot of confident noise, so be precise: Google says its generative AI features are "rooted in our core Search ranking and quality systems", that optimising for them "is optimising for the search experience, and thus still SEO", and that they show clickable links. Google doesn't publish a claim that they reduce clicks. Search Console has a generative AI performance report — measure your own rather than arguing from headlines.</p>

    <h2>On timing</h2>
    <p>Google doesn't publish how long SEO takes to produce leads, and anyone quoting a precise figure is guessing. What it does say is narrower and more useful: some changes take effect within hours, others several months; wait a few weeks before judging whether one helped; and not every change produces a noticeable effect. It also states plainly that nobody can guarantee a number-one ranking. Give real changes weeks rather than days — but months of traffic that converts nothing isn't a patience problem.</p>`
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
    standfirst: `"What percentage should we spend on marketing?" is the question every founder asks first — and it's the wrong one to start with. Here's how to actually set a marketing budget for an early-stage startup in India: what the budget is really made of, the numbers that should size it, and how to budget without setting fire to your runway.`,
    bylineImg: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth, a marketing agency in Bengaluru" loading="lazy" decoding="async">`,
    bylineWho: `Anuja Founder, Tilth · 10+ years in performance marketing`,
    meta: {
      "title": "Marketing Budget for an Early-Stage Startup in India: How to Set It | Tilth",
      "description": "How to set a marketing budget for an early-stage startup in India — what the budget is actually made of, why margin, CAC and payback beat a flat percentage, and how to split test from scale.",
      "canonical": "https://wearetilth.com/insights/startup-marketing-budget-india/",
      "robots": "index, follow",
      "ogTitle": "Marketing budget for an early-stage startup in India: how to set it",
      "ogDescription": "What a marketing budget is actually made of, why margin, CAC and payback beat a flat percentage, and how to split test from scale.",
      "ogType": "article",
      "ogImage": "https://wearetilth.com/assets/insight-cards/startup-marketing-budget-india.webp",
      "ogLocale": null,
      "twTitle": "Marketing budget for an early-stage startup in India",
      "twDescription": "What the budget is really made of, and why margin, CAC and payback beat a flat percentage.",
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
                        "description": "How to set a marketing budget for an early-stage startup in India: what the budget is actually made of, why margin, CAC and payback period beat a flat percentage, and how to split test from scale.",
                        "image": "https://wearetilth.com/assets/insight-cards/startup-marketing-budget-india.webp",
                        "datePublished": "2026-06-28",
                        "dateModified": "2026-11-08",
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
                        "wordCount": 1250,
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
                                          "text": "There is no percentage that answers this honestly. Published rules of thumb circulate widely but none is evidenced for early-stage Indian startups specifically, and a percentage of revenue is circular for a company trying to create revenue. Size the budget from your contribution margin, your target cost per customer and how long you can wait to get that money back, then cap it at what you can afford to lose while you are still learning which channels work."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "What percentage of revenue should go to marketing for a startup?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Percentage-of-revenue rules are a planning convention borrowed from established companies, not a finding about startups, and the figures quoted vary widely between sources. They are most useful late, as a sanity check on a number you reached another way. Early on, revenue is the thing you are trying to create, so anchoring spend to a percentage of it under-invests exactly when you most need to find a channel."
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
                                          "text": "A ratio of about 3:1 is the convention most often quoted, meaning a customer is worth roughly three times what they cost to acquire. Treat it as a widely used rule of thumb rather than an established threshold, and pair it with payback period, which is usually the more useful number for a startup: how many months of margin it takes to earn back the acquisition cost. A healthy ratio with a payback period longer than your runway is still a cash problem."
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
        a: `<p>No percentage answers this honestly. Size it from your contribution margin, your target cost per customer and how long you can wait to get that money back — then cap it at what you can afford to lose while you're still learning which channels work.</p>` },
      { q: `What percentage of revenue should go to marketing?`,
        a: `<p>Percentage-of-revenue rules are a planning convention borrowed from established companies, and the figures quoted vary widely between sources. They're most useful late, as a sanity check on a number you reached another way. Early on, revenue is the thing you're trying to create — anchoring spend to a share of it under-invests exactly when you most need to find a channel.</p>` },
      { q: `Is ad spend separate from the agency or tools budget?`,
        a: `<p>Yes — separate the media spend (paid to Google, Meta, etc.) from any agency/freelancer fee and tools, so you know what's buying reach versus help. More on fees in <a href="/insights/marketing-agency-cost-india/">what a marketing agency costs in India</a>.</p>` },
      { q: `What is a good LTV to CAC ratio?`,
        a: `<p>About 3:1 is the convention most often quoted — a widely used rule of thumb rather than an established threshold. Pair it with <strong>payback period</strong>, usually the more useful number for a startup: how many months of margin it takes to earn the acquisition cost back. A healthy ratio with a payback longer than your runway is still a cash problem.</p>` },
      { q: `How do I set my first marketing budget?`,
        a: `<p>Target customers/month × estimated CAC, plus fees and tools, capped at what you can afford to lose while learning — and fix your tracking before you spend it.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has 10+ years of hands-on growth experience across 10+ industries helping startups spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Not sure your numbers can be trusted yet?`, body: `A Foundation Audit checks whether your tracking and attribution are sound — so the budget you set is measured against reality, not a guess. No pitch attached.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>Every early-stage founder wants a clean answer: "spend X% of revenue and you're done." The benchmarks exist, and they're a useful gut-check — but if you set your <strong>marketing budget</strong> off a percentage alone, you'll either starve a channel that was about to work or pour money into one you can't even measure. This is how to set a startup marketing budget that's tied to reality, not a rule of thumb.</p>

    <h2>First: a marketing budget isn't one number</h2>
    <p>Most budget arguments are really definition arguments, because "we spend ₹2 lakh a month on marketing" can mean five different things:</p>
    <ul>
      <li><strong>Media spend</strong> — paid to Google, Meta and others to buy reach. The only line that scales roughly with growth.</li>
      <li><strong>People and agency cost</strong> — salaries, retainers, freelancers. Mostly fixed, and slowest to change.</li>
      <li><strong>Creative and production</strong> — the assets the media spend needs. Routinely forgotten, then raided when something has to give.</li>
      <li><strong>Tools</strong> — analytics, automation, SEO, design. Small individually, surprising in aggregate.</li>
      <li><strong>Experimentation reserve</strong> — money allocated to finding out rather than performing. If it isn't named, it doesn't exist.</li>
    </ul>
    <p>Media spend isn't the marketing budget; it's one line inside the marketing operating cost. Teams that conflate the two usually discover their real spend is well above what they thought, in the month they try to cut it.</p>

    <h2>Why "% of revenue" is the wrong place to start</h2>
    <p>Percentage-of-revenue rules get quoted constantly and the quoted figures vary widely, because they're a planning convention borrowed from established companies rather than a finding about startups. The deeper problem is structural: a budget is an input you control, revenue is an output you're trying to grow. Anchoring one to the other means under-investing exactly when you most need to find a channel, and over-investing the moment a good month tempts you to scale something unproven. A percentage is a late-stage sanity check on a number you reached another way — not the method.</p>

    <blockquote>Don't budget a percentage of revenue you don't have yet. Budget the number of customers you want — and what each one actually costs.</blockquote>

    <h2>The three numbers that should size it</h2>
    <p><strong>Contribution margin</strong> comes first: what's left from a sale after the costs of delivering it. That's the money available to buy a customer, and it's why two businesses with identical revenue can afford very different budgets.</p>
    <p><strong>Target CAC</strong> follows from it — the most you can pay to win a customer and still be building something. Multiply your realistic monthly customer target by that figure, add people, creative and tools, and you have a budget grounded in your own economics.</p>
    <p><strong>Payback period</strong> is the one founders skip and later regret: how many months of margin it takes to earn that acquisition cost back. The 3:1 LTV:CAC ratio everyone quotes is a useful convention rather than an established threshold, and it says nothing about timing. A healthy ratio with a payback period longer than your runway is still a cash problem. Our <a href="/tools/ltv-cac-calculator/">LTV:CAC calculator</a> works both through quickly if you want to pressure-test the numbers before committing them.</p>

    <h2>The catch: a budget is only as good as your tracking</h2>
    <p>Here's where most early-stage marketing budgets quietly fail. You can size everything perfectly around margin and CAC — but if your <a href="/insights/ga4-conversion-tracking/">conversion tracking</a> is wrong, your CAC is fiction and every allocation decision after it is a guess. Measurement readiness isn't a nice-to-have at this stage; it's the difference between a budget and a gamble, and getting it right is <a href="/services/growth-strategy-measurement/">measurement work</a> before it's a spending decision. It's exactly what a <a href="/insights/marketing-foundation-audit/">foundation audit</a> checks first.</p>

    <h2>Test budget and scale budget are different money</h2>
    <p>A test budget buys information: enough spend, concentrated enough, to find out whether a channel can work. A scale budget buys customers from a channel you've already proven. They have different success criteria and shouldn't be reported together — a test that produces a clear "no" has done its job, and judging it on CAC will teach you to stop testing.</p>
    <p>Practically: go deep on one or two channels rather than thin across six, ring-fence a smaller amount for genuine experiments, and keep a modest consistent line for things that compound slowly. Proportions depend on your stage, whether demand for your category already exists, and your sales cycle — a sixty-day cycle means a thirty-day test measures leads, not customers. Deciding that deliberately rather than by default is the core of <a href="/services/performance-marketing/">performance marketing planning</a>. (Fees are broken down in <a href="/insights/marketing-agency-cost-india/">what a marketing agency costs in India</a>, and whether to hire at all in <a href="/insights/agency-vs-freelancer-vs-inhouse/">agency vs freelancer vs in-house</a>.)</p>

    <h2>Mistakes that waste an early budget</h2>
    <ul>
      <li><strong>Spending before tracking works</strong> — you scale on numbers you can't trust.</li>
      <li><strong>Copying a percentage</strong> from a blog without checking your own margin, CAC and runway.</li>
      <li><strong>No ring-fenced test budget</strong> — so you never learn, or one bad test scares you off the channel.</li>
      <li><strong>Scaling on an unproven CAC</strong> after one good week.</li>
      <li><strong>Spreading thin</strong> across every channel instead of proving one.</li>
    </ul>

    <h2>A simple way to set your first budget</h2>
    <p>Work out your contribution margin. Set a target cost per customer inside it. Pick a realistic monthly customer target and multiply. Add people, creative and tools. Name an experimentation reserve. Check the payback period against your runway, cap the total at what you can afford to lose while learning, and fix tracking before you spend any of it. That's a budget grounded in your business — not someone else's percentage.</p>`
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
                        "dateModified": "2026-11-08",
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
                        "wordCount": 1280,
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
                                          "text": "Performance marketing is marketing managed against measurable business outcomes, where spend and optimisation decisions are tied to tracked performance. It describes how the work is managed rather than how the media is priced: most paid search and paid social is bought per click or per thousand impressions and is still performance marketing. The defining feature is that decisions answer to measured results."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Is performance marketing the same as digital marketing?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "No. Digital marketing is the broader umbrella covering everything done through digital channels: SEO, social media, email, content, and performance marketing itself. Performance marketing is the part of it managed against measurable business outcomes, where spend and optimisation decisions answer to tracked performance. That is a question of how the work is run rather than how the media is priced, so CPC and CPM buys both qualify when they are managed that way."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "What channels count as performance marketing?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Paid search, paid social, affiliates and some creator or partner programmes, plus the work that makes those channels pay back: landing-page and conversion-rate optimisation, and the measurement and analytics underneath them. Those last two are routinely left off the list, which is why so many programmes end up optimising toward a number nobody has verified."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Does SEO count as performance marketing?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "It sits awkwardly. You do not buy organic placement, so SEO is usually treated separately. But SEO managed against leads and revenue, with the same measurement discipline, has more in common with performance marketing than with brand work. The useful question is not which label applies but whether anyone is accountable for the outcome."
                                    }
                              },
                              {
                                    "@type": "Question",
                                    "name": "Why is tracking so important for performance marketing specifically?",
                                    "acceptedAnswer": {
                                          "@type": "Answer",
                                          "text": "Because the whole approach rests on decisions answering to measured outcomes. If the measurement is wrong, broken tracking does not just distort your reporting, it breaks the mechanism the approach depends on. A performance campaign running on inaccurate conversion data is optimising toward numbers that do not reflect reality."
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
        a: `<p>Marketing managed against measurable business outcomes, where spend and optimisation decisions are tied to tracked performance. Note that it's about how the work is <em>managed</em>, not how the media is priced — most paid search and paid social is bought per click or per thousand impressions, and it's still performance marketing.</p>` },
      { q: `Is performance marketing the same as digital marketing?`,
        a: `<p>No. Digital marketing is the broader umbrella covering SEO, social, email, content, and performance marketing itself. Performance marketing is the part of it managed against measurable business outcomes, where spend and optimisation decisions answer to tracked performance. That's a question of how the work is run, not how the media is priced — CPC and CPM buys both qualify when they're managed that way.</p>` },
      { q: `What counts as performance marketing?`,
        a: `<p>Paid search, paid social, affiliates and some creator or partner programmes — plus the work that makes them pay back: landing-page and conversion-rate optimisation, and the measurement and analytics underneath. The last two are often left off the list, which is why so many programmes optimise a number nobody has verified.</p>` },
      { q: `Does SEO count as performance marketing?`,
        a: `<p>It sits awkwardly. You don't buy organic placement, so it's usually treated separately — but SEO managed against leads and revenue, with the same measurement discipline, has more in common with performance marketing than with brand work. The useful question isn't which label applies; it's whether anyone is accountable for the outcome.</p>` },
      { q: `Why is tracking so important for performance marketing?`,
        a: `<p>Because the whole approach rests on decisions answering to measured outcomes. If the measurement is wrong, the mechanism is broken at the root — a campaign optimising on inaccurate data is chasing numbers that don't reflect reality, confidently.</p>` },
    ],
    bio: { img: `<img src="/anuja.jpg" alt="Anuja, Founder of Tilth" loading="lazy" decoding="async">`, html: `<strong>Anuja</strong> is the founder of <a href="/marketing-agency-bengaluru/">Tilth, a foundation-first marketing agency in Bengaluru</a>. She has 10+ years of hands-on growth experience across 10+ industries, helping brands spend on marketing they can actually measure. <a href="/about/">Read her story →</a>` },
    cta: { heading: `Make sure your performance marketing is measuring the truth`, body: `A Foundation Audit checks whether your tracking is accurate enough to trust the "performance" in performance marketing — before you scale spend on numbers that might be wrong.`,
      href: "/contact/", label: `Discuss your growth project` },
    bodyHtml: `<p>"We want to focus on performance marketing" and "we want to do digital marketing" get said as if they mean the same thing, and they don't quite. The mix-up matters because it shapes what a founder expects an agency or hire to deliver. Here's a clear, plain-English answer to <strong>what performance marketing actually is</strong> and how it's different from digital marketing generally.</p>

    <h2>The definition worth using</h2>
    <p>Performance marketing is <strong>marketing managed against measurable business outcomes, where spend and optimisation decisions are tied to tracked performance.</strong></p>
    <p>You'll often see a narrower version — "marketing where you only pay when a result happens". Tidy, and wrong: almost all paid search and paid social is bought per click or per thousand impressions, so you pay whether or not anyone converts. Affiliate deals do pay per outcome, but that's one model inside the discipline, not its definition. <strong>The payment model doesn't make something performance marketing; the management model does.</strong> A CPM campaign with a revenue target, verified tracking and a decision rule qualifies; a cost-per-lead deal nobody reviews doesn't.</p>

    <h2>Digital marketing vs performance marketing</h2>
    <p>Worth saying once: the term is used inconsistently across the industry. The older definition ties payment directly to an action — you pay when a sale or lead happens. The broader modern usage, which is the one we use throughout this guide, includes paid media bought on CPC or CPM when it's managed and optimised against measurable business outcomes. Neither is wrong; they're just different scopes, and most arguments about what "counts" are really two people using different definitions.</p>

    <p><strong>Digital marketing</strong> is the umbrella for everything done through digital channels: SEO, social, email, content, PR, and performance marketing itself. <strong>Performance marketing</strong> is the slice managed against outcomes with measurement attached. Every performance marketing activity is digital marketing; plenty of digital marketing isn't performance marketing.</p>

    <h2>What it covers</h2>
    <ul>
      <li><strong>Paid search</strong> — capturing demand that already exists, with spend answering to a cost per acquisition.</li>
      <li><strong>Paid social</strong> — creating demand, where creative is the main lever and the same accountability applies.</li>
      <li><strong>Affiliates and partner programmes</strong> — commission tied to a verified outcome, which makes verification part of the job.</li>
      <li><strong>Some creator programmes</strong> — where there's a measurement plan rather than a flat fee and a screenshot.</li>
      <li><strong>Landing pages and CRO</strong> — often left out, which is odd given conversion rate is half the equation.</li>
      <li><strong>Measurement and analytics</strong> — the part that makes the other five mean anything.</li>
    </ul>

    <h2>What performance marketing is not</h2>
    <ul>
      <li><strong>Not just paid ads.</strong> Media buying is the visible part; measurement and conversion work decide whether it pays.</li>
      <li><strong>Not defined by CPC or CPA pricing.</strong> That's a billing arrangement, not a discipline.</li>
      <li><strong>Not "anything measurable".</strong> A dashboard of tracked metrics nobody acts on is reporting.</li>
      <li><strong>Not a guarantee of return.</strong> Measurable means you'll find out, not that the answer will be good.</li>
      <li><strong>Not the platform dashboards.</strong> Those are vendor reports from interested parties.</li>
    </ul>

    <h2>Three caveats that separate good from busy</h2>
    <p><strong>Measurable isn't incremental.</strong> A channel can be credited with revenue that was arriving anyway — branded search is the standard example. Attribution shares out credit; it doesn't establish cause.</p>
    <p><strong>Platform ROAS isn't profitability.</strong> It's revenue over spend before cost of goods, returns and discounts, so it can look healthy on a business losing money. Judge against contribution margin and a break-even you calculated.</p>
    <p><strong>Measurement quality sets the ceiling.</strong> Everything here rests on tracked outcomes, so if the tracking is wrong the whole thing is confidently wrong. <a href="/services/growth-strategy-measurement/">Measurement</a> isn't a support function here; it's load-bearing.</p>

    <h2>Brand and performance aren't opponents</h2>
    <p>Brand marketing, organic social and PR don't fit this definition — you're investing in awareness that compounds rather than converting one-to-one. A <em>different kind</em> of investment with a different horizon, not a lesser one, and the two feed each other: stronger brand demand can make performance channels convert more efficiently, which then shows up in the performance metrics. Expecting attributable ROI from every rupee of brand work mostly guarantees it looks like it's failing.</p>

    <blockquote>Performance marketing answers "did this specific spend produce this specific result?" Brand marketing answers a slower, harder question: "does more of the world trust us than it did last year?" Both matter. Only one fits neatly into a spreadsheet.</blockquote>

    <h2>Why it lives or dies on tracking</h2>
    <p>A campaign optimising toward broken conversion tracking isn't underperforming marketing — it's a well-functioning algorithm chasing the wrong number, because <a href="/insights/ga4-conversion-tracking/">the tracking underneath it</a> was never verified. That's why "performance marketing" and "foundation work" aren't competing priorities: the second makes the first mean what it claims. Running the channels well once that's true is what <a href="/services/performance-marketing/">performance marketing</a> and <a href="/services/paid-media/">paid media</a> actually involve.</p>

    <h2>When a startup should lean into performance marketing</h2>
    <p>Performance marketing tends to make the most sense once you have a validated offer and can afford to spend on discovering what converts — trackable, results-based spend is a genuinely efficient way to learn quickly. It's a natural fit for the early spend decisions covered in a <a href="/insights/startup-marketing-budget-india/">startup marketing budget</a>, precisely because every rupee is meant to be traceable to an outcome.</p>

    <h2>The risk of over-indexing on performance marketing too early</h2>
    <p>Because performance marketing is measurable, it's tempting to treat it as the whole strategy — if you can't measure brand awareness as cleanly, why fund it at all? In practice, a business that only ever does performance marketing tends to hit a ceiling: paid channels get more expensive as you scale, and without any brand or organic presence building underneath, every single sale has to be bought fresh, every time. The measurability of performance marketing is a strength for learning fast, not a complete substitute for a broader marketing foundation.</p>`
  },
];

export const insightArticleBySlug = new Map(insightArticles.map(a => [a.slug, a]));

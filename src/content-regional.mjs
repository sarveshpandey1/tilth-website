// Regional (India / US) landing-page content.
//
// SOURCE OF TRUTH: tilth_india_us_seo_content_deck.docx (7 Aug 2026). The copy below is
// transcribed from that deck's "Exact page copy" sections and must not be rewritten,
// shortened or extended with new claims without review. The deck deliberately contains
// no case studies, pricing, guarantees, rankings or unsourced statistics.
//
// Sections are an ordered, typed list so each page controls its own section order
// (India and US differ) and so batches 2–3 can reuse the same renderer.
// Types: prose | cards | steps | insights | faq

export const regions = {
  india: {
    slug: "india",
    label: "India",
    breadcrumb: "India",
    hreflang: "en-IN",
    path: "/india/",
    title: "Growth Marketing Agency in India | Tilth",
    description: "Tilth is a founder-led growth marketing agency helping Indian brands improve strategy, performance marketing, SEO, affiliate growth, conversion and measurement.",
    ogTitle: "A growth marketing agency for ambitious brands in India",
    ogDescription: "Tilth connects strategy, acquisition, conversion and measurement to help Indian brands build stronger growth systems and scale what works.",
    hero: {
      eyebrow: "Growth marketing in India",
      h1: "A growth marketing agency for ambitious brands in India.",
      lede: "Tilth connects strategy, acquisition, conversion and measurement to help Indian brands build stronger growth systems and scale what works.",
      primary: { label: "Discuss Your Growth Strategy", href: "/contact/" },
      secondary: { label: "Explore Our Services", href: "/services/" }
    },
    sections: [
      {
        type: "prose", id: "market", eyebrow: "The India growth challenge",
        h2: "Growth in India needs more than channel execution.",
        standfirst: "The opportunity is large, but the growth system has to be connected.",
        paragraphs: [
          "Indian brands often grow across several channels at once: paid media, organic search, affiliates, partnerships, sales teams, marketplaces and websites. When these channels are managed separately, teams may see more activity without gaining a clear view of what is actually driving qualified demand, revenue or retention.",
          "Tilth helps connect the parts that sit beneath performance. We look at positioning, measurement, funnel stages, creative, channel economics and conversion before recommending where more budget or effort should go. The goal is not to add another campaign. It is to create a clearer system for deciding what to fix, what to test and what to scale."
        ]
      },
      {
        type: "cards", id: "services", eyebrow: "Services for Indian brands",
        h2: "Growth marketing services for Indian brands",
        standfirst: "Strategy, acquisition and conversion connected through one operating view.",
        light: true,
        cards: [
          { name: "Performance Marketing", href: "/services/performance-marketing/", regional: "/india/services/performance-marketing/",
            desc: "Plan and manage paid acquisition around agreed business outcomes, not platform metrics alone. This can include channel strategy, campaign structure, creative testing, conversion tracking, budget allocation and performance reviews across supported platforms." },
          { name: "SEO & Content Marketing", href: "/services/seo-ai-search/", regional: "/india/services/seo-content-marketing/",
            desc: "Build organic visibility through technical SEO, commercial-page optimisation, search-intent mapping, content architecture, internal linking and useful expert-led content." },
          { name: "Affiliate & Partnership Marketing", href: "/services/affiliate-partnerships/", regional: "/india/services/affiliate-marketing/",
            desc: "Design or improve partner programmes through commercial models, partner discovery, onboarding, tracking, quality controls and performance reporting." },
          { name: "Growth Strategy & Measurement", href: "/services/growth-strategy-measurement/",
            desc: "Clarify the growth model, define funnel stages, improve analytics and create reporting that helps teams make better decisions." },
          { name: "Websites & Conversion Optimisation", href: "/services/website-design-development/",
            desc: "Improve the experience between attention and action through information architecture, landing pages, analytics, technical foundations and conversion-focused design." }
        ],
        cta: { label: "Explore all services", href: "/services/" }
      },
      {
        type: "cards", id: "industries", eyebrow: "Industries we understand",
        h2: "Industries we understand",
        standfirst: "Different business models require different growth decisions.",
        compact: true,
        cards: [
          { name: "SaaS", href: "/industries/saas/", regional: "/india/industries/saas/",
            desc: "Demand generation, demos, trials, activation, pipeline visibility and revenue attribution." },
          { name: "D2C & Ecommerce", href: "/industries/d2c-ecommerce/", regional: "/india/industries/d2c-ecommerce/",
            desc: "Acquisition economics, creative testing, product-page conversion, average order value and repeat purchase." },
          { name: "FinTech", href: "/industries/fintech/", regional: "/india/industries/fintech/",
            desc: "Trust, education, compliance-aware communication, onboarding funnels, verification, activation and retention." },
          { name: "EdTech", href: "/industries/edtech/",
            desc: "Lead quality, counselling funnels, enrolment conversion, cohort economics and long consideration cycles." }
        ]
      },
      {
        type: "steps", id: "approach", eyebrow: "How we work",
        h2: "Fix the constraint before increasing the budget.",
        standfirst: "Tilth uses a foundation-first approach to growth.",
        light: true,
        steps: [
          { n: "01", name: "Diagnose the constraint", desc: "We review acquisition, tracking, funnel performance, creative and conversion to identify what is limiting growth." },
          { n: "02", name: "Build the growth system", desc: "We improve measurement, positioning, funnel stages, channel coordination and testing processes." },
          { n: "03", name: "Scale what works", desc: "We increase investment after performance becomes measurable, repeatable and connected to agreed business outcomes." }
        ],
        cta: { label: "Explore the Tilth approach", href: "/approach/" }
      },
      {
        type: "cards", id: "why-tilth", eyebrow: "Why Tilth",
        h2: "India-rooted. Senior-led. Close to the work.",
        paragraphs: [
          "Tilth is built for teams that want strategic thinking and execution to stay connected. The people shaping the recommendation remain close to the work, the reporting and the decisions that follow.",
          "That means fewer handoffs, clearer ownership and a stronger link between what the business needs and what the marketing team is asked to deliver."
        ],
        benefit: true,
        cards: [
          { name: "Founder-led strategy", desc: "Senior involvement in diagnosis, priorities and the direction of the engagement." },
          { name: "Hands-on execution", desc: "Recommendations are designed with implementation realities in mind." },
          { name: "One accountable partner", desc: "Strategy, channels, measurement and conversion are considered together." },
          { name: "Built around business outcomes", desc: "Success is defined through agreed commercial or funnel outcomes, not isolated activity metrics." }
        ]
      },
      {
        type: "prose", id: "bengaluru", eyebrow: "Based in Bengaluru",
        h2: "Based in Bengaluru. Built for collaboration across India.",
        light: true,
        paragraphs: [
          "Tilth operates from Bengaluru and works remotely with teams across India. Collaboration can be structured around regular reviews, shared documentation, clear owners and the client's operating rhythm.",
          "Where useful and operationally possible, in-person discussions can be arranged in Bengaluru. The engagement should remain effective whether the client team is in the same city or distributed across markets."
        ]
      },
      {
        type: "insights", id: "insights", eyebrow: "Insights for Indian growth teams",
        h2: "Practical thinking for Indian growth teams",
        // real published articles, chosen for India relevance
        slugs: ["startup-marketing-budget-india", "marketing-agency-for-d2c-brands", "google-ads-budget-india-startups"],
        cta: { label: "Explore all insights", href: "/insights/" }
      },
      {
        type: "faq", id: "faq", eyebrow: "FAQ",
        h2: "Questions about working with a growth marketing agency in India.",
        light: true,
        faqs: [
          ["What does a growth marketing agency in India do?",
            "A growth marketing agency connects strategy, acquisition, conversion and measurement so that marketing decisions can be made across the full funnel. The work may include paid media, SEO, content, affiliate growth, analytics, websites and conversion optimisation, depending on the constraint that is limiting the business."],
          ["How is Tilth different from a traditional digital marketing agency?",
            "Tilth begins with the growth system rather than a single channel. We first look at the business model, customer journey, tracking, funnel and conversion. Channel execution is then planned around the issues that need to be solved and the outcomes that need to be measured."],
          ["Does Tilth handle both strategy and execution?",
            "Yes. Tilth is designed to connect strategic direction with implementation. The exact scope depends on the engagement, but it can include diagnosis, planning, campaign or content execution, measurement, optimisation and ongoing review."],
          ["Which industries does Tilth work with in India?",
            "Tilth has experience across SaaS, D2C and ecommerce, FinTech, EdTech and other growth-stage businesses. The recommendation is shaped around the economics, customer journey and regulatory or operational realities of the category."],
          ["Can Tilth work with companies outside Bengaluru?",
            "Yes. Tilth can work remotely with teams across India. Reviews, documentation, reporting and communication can be organised around the client's working rhythm, regardless of location."],
          ["How does a new engagement begin?",
            "A new engagement usually begins with a discussion about the growth goal, current channels, existing data and the point at which progress is slowing. Tilth then identifies what needs to be reviewed before recommending the right scope of work."]
        ]
      }
    ],
    finalCta: {
      h2: "Build a stronger growth system for your next stage.",
      body: "Tell us where growth is slowing, what you have already tried and what success looks like. We'll help identify the right place to start.",
      primary: { label: "Discuss Your Growth Strategy", href: "/contact/" }
    }
  },

  us: {
    slug: "us",
    label: "United States",
    breadcrumb: "United States",
    hreflang: "en-US",
    path: "/us/",
    title: "Growth Marketing Agency for US Brands | Tilth",
    description: "Tilth is a founder-led growth marketing agency helping US brands improve strategy, performance marketing, SEO, conversion and measurement.",
    ogTitle: "A growth marketing partner for US brands ready to scale with clarity",
    ogDescription: "Tilth connects strategy, execution and measurement so growth decisions are based on evidence rather than disconnected channel activity.",
    hero: {
      eyebrow: "Growth marketing for US brands",
      h1: "A growth marketing partner for US brands ready to scale with clarity.",
      lede: "Tilth connects strategy, execution and measurement so growth decisions are based on evidence rather than disconnected channel activity.",
      primary: { label: "Discuss Your Growth Strategy", href: "/contact/" },
      secondary: { label: "Explore Our Services", href: "/services/" }
    },
    sections: [
      {
        type: "prose", id: "accountability", eyebrow: "Built for accountable growth",
        h2: "Clear ownership across strategy, execution and measurement.",
        standfirst: "Growing teams do not need more channel activity. They need a clearer operating system.",
        paragraphs: [
          "As companies add channels, agencies and internal specialists, accountability can become fragmented. Paid media may optimise for platform conversions, content may target traffic without commercial intent, and reporting may describe activity without explaining what the business should do next.",
          "Tilth brings the growth system into one view. We connect the customer journey, acquisition economics, conversion, measurement and execution so that recommendations are tied to the outcomes the team is trying to improve."
        ]
      },
      {
        type: "prose", id: "collaboration", eyebrow: "India-rooted · Working across markets",
        h2: "India-rooted. Built to work across markets.",
        standfirst: "Structured collaboration for distributed teams.",
        light: true,
        paragraphs: [
          "Tilth operates from India and can structure collaboration for teams in the United States. Reviews, documentation and decision-making can be planned around agreed time-zone overlap and the client's operating rhythm.",
          "Clear written context reduces dependence on constant real-time meetings. Recommendations are grounded in the client's customer, category, data and commercial model rather than assumptions about a market from a distance."
        ]
      },
      {
        type: "cards", id: "services", eyebrow: "Services for US brands",
        h2: "Senior growth support across acquisition, search and conversion.",
        cards: [
          { name: "Performance Marketing", href: "/services/performance-marketing/", regional: "/us/services/performance-marketing/",
            desc: "Connect paid acquisition, creative testing, tracking, funnel analysis and budget decisions to agreed commercial outcomes." },
          { name: "SEO & Content Marketing", href: "/services/seo-ai-search/", regional: "/us/services/seo-content-marketing/",
            desc: "Build durable search visibility through technical SEO, commercial keyword strategy, content architecture, expert-led content and internal linking." },
          { name: "Websites & Conversion Optimisation", href: "/services/website-design-development/", regional: "/us/services/website-cro/",
            desc: "Improve the path from attention to action through information architecture, UX, development, analytics, landing pages and conversion testing." },
          { name: "Growth Strategy & Measurement", href: "/services/growth-strategy-measurement/",
            desc: "Clarify priorities, define funnel stages and create a measurement system that supports better decisions." },
          { name: "Affiliate & Partnership Marketing", href: "/services/affiliate-partnerships/",
            desc: "Develop accountable partner programmes through strategy, commercial models, tracking and performance management." }
        ],
        cta: { label: "Explore all services", href: "/services/" }
      },
      {
        type: "cards", id: "industries", eyebrow: "Industry focus",
        h2: "Industry focus",
        standfirst: "Growth decisions should reflect the customer journey and business model.",
        compact: true, light: true,
        cards: [
          { name: "SaaS", href: "/industries/saas/", regional: "/us/industries/saas/",
            desc: "Pipeline, demos, trials, activation, sales cycles and revenue attribution." },
          { name: "D2C & Ecommerce", href: "/industries/d2c-ecommerce/", regional: "/us/industries/d2c-ecommerce/",
            desc: "Acquisition economics, product-page conversion, creative testing, average order value and repeat purchase." },
          { name: "FinTech", href: "/industries/fintech/",
            desc: "Trust, education, onboarding, verification, activation and compliance-aware communication." },
          { name: "EdTech", href: "/industries/edtech/",
            desc: "Lead quality, longer decision journeys, enrolment conversion and cohort economics." }
        ]
      },
      {
        type: "steps", id: "approach", eyebrow: "How we work",
        h2: "Diagnose the system before scaling the channel.",
        steps: [
          { n: "01", name: "Diagnose", desc: "Review acquisition, measurement, funnel performance, creative and conversion." },
          { n: "02", name: "Align", desc: "Connect strategy, execution, reporting and decision-making around the same priorities." },
          { n: "03", name: "Scale", desc: "Increase investment after performance becomes measurable, repeatable and commercially relevant." }
        ],
        cta: { label: "Explore the Tilth approach", href: "/approach/" }
      },
      {
        type: "cards", id: "why-tilth", eyebrow: "Why Tilth",
        h2: "Senior thinking without the agency handoff.",
        light: true,
        paragraphs: [
          "Tilth is designed for companies that want the people shaping the strategy to remain close to execution, reporting and optimisation. The goal is to reduce the distance between the recommendation and the work required to make it effective."
        ],
        benefit: true,
        cards: [
          { name: "Founder-led strategic involvement", desc: "Senior participation in diagnosis, priorities and engagement direction." },
          { name: "Hands-on execution", desc: "Recommendations are built with implementation and operational constraints in mind." },
          { name: "One accountable partner", desc: "Strategy, channels, measurement and conversion are viewed as one system." },
          { name: "Structured communication", desc: "Clear reviews, documentation and reporting for distributed teams." }
        ]
      },
      {
        type: "insights", id: "insights", eyebrow: "Insights for growth teams",
        h2: "Practical thinking across strategy, acquisition and conversion.",
        // chosen for topic relevance, deliberately not India-specific articles
        slugs: ["what-is-performance-marketing", "ga4-conversion-tracking", "seo-not-bringing-leads"],
        cta: { label: "Explore all insights", href: "/insights/" }
      },
      {
        type: "faq", id: "faq", eyebrow: "FAQ",
        h2: "Questions from US companies considering Tilth.",
        light: true,
        faqs: [
          ["Does Tilth work with companies based in the United States?",
            "Yes. Tilth is based in India and can work with companies in the United States through structured remote collaboration. The exact working rhythm, reviews and time-zone overlap are agreed during the engagement setup."],
          ["How does Tilth collaborate across India and US time zones?",
            "The engagement can combine agreed overlap hours, scheduled reviews, shared documentation and asynchronous updates. The objective is to keep decisions clear without making the work dependent on constant real-time meetings."],
          ["Is Tilth a strategy partner or an execution agency?",
            "Tilth can support both strategy and execution. We diagnose the growth system, define priorities and then support the work required to improve acquisition, search visibility, conversion or measurement based on the agreed scope."],
          ["Which services can US companies engage Tilth for?",
            "US companies can engage Tilth for growth strategy and measurement, performance marketing, SEO and content, websites and conversion optimisation, and affiliate or partnership marketing where relevant."],
          ["Does Tilth replace an internal marketing team?",
            "Not necessarily. Tilth can work as an extension of an internal team, support a specific capability or take responsibility for a defined growth workstream. The model depends on the team structure and the problem being solved."],
          ["How does a new engagement begin?",
            "The first step is a conversation about the growth goal, current channels, available data and the point at which progress is slowing. Tilth then identifies what needs to be reviewed before recommending a scope and working model."]
        ]
      }
    ],
    finalCta: {
      h2: "Build a clearer growth system before increasing spend.",
      body: "Share the growth challenge, the channels already in use and the outcomes you are working toward. We'll help identify what needs to be fixed, connected or scaled.",
      primary: { label: "Discuss Your Growth Strategy", href: "/contact/" }
    }
  }
};

// hreflang cluster: the two regional hubs plus the global homepage as x-default.
// Deliberately NOT applied to regional service/industry pages — those are not genuine
// one-to-one equivalents of each other (deck: "Use regional hreflang only where the
// India and US pages are genuine equivalents").
export const hubHreflang = base => [
  { lang: "en-IN", href: `${base}/india/` },
  { lang: "en-US", href: `${base}/us/` },
  { lang: "x-default", href: `${base}/` }
];

// Regional child routes that exist today. Batch 2 and 3 add entries here; every card
// carrying a `regional` target automatically upgrades from its global fallback to the
// regional page the moment its route is listed, so no hub markup has to be edited and
// no link is ever published pointing at a route that does not exist yet.
export const liveRegionalRoutes = new Set([
  // "/india/services/performance-marketing/",   // Batch 2
  // "/india/industries/fintech/",               // Batch 2
  // "/us/services/seo-content-marketing/",      // Batch 2
  // "/us/industries/saas/",                     // Batch 2
]);

export const resolveHref = c =>
  c.regional && liveRegionalRoutes.has(c.regional) ? c.regional : c.href;

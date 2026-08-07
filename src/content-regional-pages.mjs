// Regional child pages (batch 2): regional service and industry landing pages.
//
// SOURCE OF TRUTH: tilth_india_us_seo_content_deck.docx (7 Aug 2026), "Exact page copy".
// Copy is transcribed, not rewritten. Section types match the hub renderer
// (prose | list | cards | steps | insights | faq) so no new markup is needed.
//
// Where the deck specifies an internal-link requirement that its prose alone does not
// satisfy (e.g. "link to India FinTech, SaaS and D2C industry pages"), the approved
// paragraph is kept as the section standfirst and a compact linked card row is added
// beneath it. That implements the link requirement without altering approved wording.

export const regionalPages = [
  // ---------------------------------------------------------------- INDIA / SERVICE
  {
    key: "india-performance-marketing",
    region: "india", regionLabel: "India", regionPath: "/india/",
    kindLabel: "Services", kindPath: "/services/",
    name: "Performance Marketing",
    path: "/india/services/performance-marketing/",
    title: "Performance Marketing Agency in India | Tilth",
    description: "Tilth helps Indian brands connect paid media, creative testing, conversion tracking and funnel analysis to measurable business outcomes.",
    ogTitle: "Performance marketing built around measurable business outcomes",
    ogDescription: "Tilth connects media planning, campaign execution, creative testing, tracking and funnel analysis for Indian brands.",
    hero: {
      eyebrow: "Performance marketing in India",
      h1: "Performance marketing built around measurable business outcomes.",
      lede: "Tilth connects media planning, campaign execution, creative testing, tracking and funnel analysis so paid growth decisions are based on evidence, not platform activity alone.",
      primary: { label: "Discuss Your Performance Strategy", href: "/contact/" },
      secondary: { label: "Explore Our Approach", href: "/approach/" }
    },
    sections: [
      { type: "prose", id: "stall", eyebrow: "The problem", h2: "Why performance marketing programmes stall",
        paragraphs: [
          "More spend does not automatically create more growth. Campaigns can appear efficient while lead quality declines, conversion tracking remains incomplete or the website fails to convert the demand being generated.",
          "Tilth looks beyond the ad account. We review the customer journey, funnel stages, tracking, creative, channel economics and conversion experience to identify what is limiting performance before increasing investment."
        ] },
      { type: "list", id: "who-for", eyebrow: "Who it's for", h2: "Who this service is for", light: true,
        items: [
          "Brands that are investing in paid media but cannot clearly connect spend to business outcomes.",
          "Teams that need stronger campaign structure, creative testing or funnel visibility.",
          "Companies that want an external partner to work alongside an internal marketing team.",
          "Growth-stage businesses preparing to scale acquisition with better measurement and control."
        ] },
      { type: "cards", id: "channels", eyebrow: "Channels", h2: "Channels and capabilities", compact: true,
        cards: [
          { name: "Google Ads", desc: "Search, display, video or app campaigns where relevant to the agreed strategy and account setup." },
          { name: "Meta Ads", desc: "Campaign planning, audience strategy, creative testing and conversion-focused optimisation." },
          { name: "LinkedIn Ads", desc: "B2B campaign planning where the audience, offer and economics support paid acquisition." },
          { name: "Measurement", desc: "GA4, conversion events, funnel definitions, attribution inputs and reporting aligned to business outcomes." }
        ] },
      { type: "prose", id: "strategy", eyebrow: "Strategy first", h2: "Campaign strategy before channel activity", light: true,
        paragraphs: ["The engagement begins by clarifying the offer, audience, conversion action, economics and measurement. This creates a stronger basis for deciding which channels to use, how campaigns should be structured and what the team should learn from each test."] },
      { type: "prose", id: "tracking", eyebrow: "Measurement", h2: "Tracking and attribution",
        paragraphs: ["Performance decisions are only as reliable as the measurement beneath them. Tilth reviews event tracking, conversion definitions, landing-page behaviour and funnel stages so that the team can distinguish platform-reported activity from meaningful business progress."] },
      { type: "prose", id: "creative", eyebrow: "Creative", h2: "Creative testing that produces learning", light: true,
        paragraphs: ["Creative testing should do more than produce more assets. We organise tests around clear hypotheses: audience problem, message, proof, format, offer or call to action. The aim is to build a repeatable learning system rather than depend on occasional winning ads."] },
      { type: "prose", id: "funnel", eyebrow: "Conversion", h2: "Funnel and conversion optimisation",
        paragraphs: ["If traffic is arriving but performance is weak, the issue may sit after the click. Tilth reviews the landing experience, form or checkout friction, page clarity, message continuity and conversion events before recommending more spend."] },
      { type: "prose", id: "reporting", eyebrow: "Reporting", h2: "Reporting for better decisions", light: true,
        paragraphs: ["Reporting should explain what changed, why it may have changed and what decision should follow. Reviews can combine channel metrics with funnel and commercial indicators so the team can prioritise the next action."] },
      { type: "cards", id: "industries", eyebrow: "Industries", h2: "Relevant industries", compact: true,
        standfirst: "This service is particularly relevant to SaaS, D2C and ecommerce, FinTech and EdTech companies where acquisition economics, funnel stages and conversion quality materially affect scale.",
        cards: [
          { name: "FinTech", href: "/industries/fintech/", regional: "/india/industries/fintech/", desc: "Trust, onboarding, verification and activation funnels." },
          { name: "SaaS", href: "/industries/saas/", regional: "/india/industries/saas/", desc: "Demand generation, demos, trials and pipeline visibility." },
          { name: "D2C & Ecommerce", href: "/industries/d2c-ecommerce/", regional: "/india/industries/d2c-ecommerce/", desc: "Acquisition economics, creative testing and product-page conversion." },
          { name: "EdTech", href: "/industries/edtech/", desc: "Lead quality, counselling funnels and enrolment conversion." }
        ] },
      { type: "steps", id: "process", eyebrow: "How we work", h2: "The Tilth process", light: true,
        steps: [
          { n: "01", name: "Diagnose", desc: "Review the account, measurement, funnel, creative and conversion." },
          { n: "02", name: "Build", desc: "Create the campaign, tracking and testing system required for clearer learning." },
          { n: "03", name: "Scale", desc: "Increase investment after performance becomes measurable and repeatable." }
        ],
        cta: { label: "Explore the Tilth approach", href: "/approach/" } },
      { type: "cards", id: "related-services", eyebrow: "Works with", h2: "Related Tilth services", compact: true,
        cards: [
          { name: "Growth Strategy & Measurement", href: "/services/growth-strategy-measurement/", desc: "Funnel definitions, analytics and decision-ready reporting." },
          { name: "Websites & Conversion Optimisation", href: "/services/website-design-development/", desc: "Landing experience, friction and conversion tracking." }
        ] },
      { type: "insights", id: "insights", eyebrow: "Related insights", h2: "Practical thinking on paid growth",
        slugs: ["what-is-performance-marketing", "google-ads-budget-india-startups", "meta-ads-not-converting"],
        cta: { label: "Explore all insights", href: "/insights/" } },
      { type: "faq", id: "faq", eyebrow: "FAQ", h2: "Questions about performance marketing", light: true,
        faqs: [
          ["What does a performance marketing agency do?", "A performance marketing agency plans, runs and improves acquisition programmes around measurable outcomes. The work can include media planning, campaign management, creative testing, conversion tracking, funnel analysis, reporting and budget decisions."],
          ["How is performance marketing different from paid media?", "Paid media refers to the advertising channels and campaign execution. Performance marketing is broader: it connects those channels to measurement, creative, funnel performance, conversion and commercial outcomes."],
          ["Which advertising channels does Tilth manage?", "Tilth can support Google Ads, Meta Ads and LinkedIn Ads where they are relevant to the strategy and scope. The final channel mix depends on the audience, offer, economics and available measurement."],
          ["How does Tilth measure campaign performance?", "Measurement is defined around agreed business or funnel outcomes. Depending on the business, this may include qualified leads, signups, demos, purchases, activation, revenue or another meaningful conversion stage."],
          ["Can Tilth work with an existing internal marketing team?", "Yes. Tilth can operate as an extension of an internal team, own a defined workstream or support strategy, measurement and optimisation alongside existing channel owners."],
          ["How does an engagement begin?", "The first step is a review of the business goal, current channels, tracking, funnel and performance data. Tilth then recommends the areas that need to be fixed or tested before additional scale."]
        ] }
    ],
    finalCta: {
      h2: "Make paid growth easier to measure and easier to improve.",
      body: "Share your current channels, the outcome you need to improve and where performance is losing clarity. We'll help identify the right place to start.",
      primary: { label: "Discuss Your Performance Strategy", href: "/contact/" }
    }
  },

  // --------------------------------------------------------------- INDIA / INDUSTRY
  {
    key: "india-fintech",
    region: "india", regionLabel: "India", regionPath: "/india/",
    kindLabel: "Industries", kindPath: "/industries/",
    name: "FinTech",
    path: "/india/industries/fintech/",
    title: "FinTech Growth Marketing Agency in India | Tilth",
    description: "Tilth helps FinTech brands in India improve acquisition, trust, onboarding, activation, SEO, affiliate growth and funnel measurement.",
    ogTitle: "Growth marketing for FinTech brands operating in India",
    ogDescription: "Tilth connects trust, education, acquisition, onboarding and measurement for FinTech growth in India.",
    hero: {
      eyebrow: "FinTech growth in India",
      h1: "Growth marketing for FinTech brands operating in India.",
      lede: "Tilth connects trust, education, acquisition, onboarding and measurement so FinTech growth is built around the stages that create real customer value.",
      primary: { label: "Discuss Your FinTech Growth Strategy", href: "/contact/" },
      secondary: { label: "Explore Relevant Services", href: "/services/" }
    },
    sections: [
      { type: "prose", id: "trust-funnel", eyebrow: "The challenge", h2: "FinTech growth depends on trust and funnel quality.",
        paragraphs: [
          "FinTech acquisition is rarely complete at a click or signup. Users may need to understand the product, trust the brand, complete verification, connect an account, fund a wallet or take another activation step before the relationship creates value.",
          "Tilth plans growth around these stages. We connect communication, acquisition, onboarding, activation and measurement so the team can see where qualified intent is being lost."
        ] },
      { type: "prose", id: "communication", eyebrow: "Communication", h2: "Trust and compliance-aware communication", light: true,
        paragraphs: ["Marketing should explain the product clearly without overstating benefits or creating unsupported claims. Tilth can help structure messaging, proof, educational content and conversion journeys while leaving legal and regulatory approval with the appropriate client stakeholders."] },
      { type: "prose", id: "activation", eyebrow: "Funnel", h2: "Signup, verification and activation",
        paragraphs: ["A high signup volume can hide weak funnel quality. We define the meaningful stages after acquisition and review where users stop progressing, whether because of friction, unclear value, documentation requirements or weak follow-up."] },
      { type: "prose", id: "paid", eyebrow: "Acquisition", h2: "Paid acquisition", light: true,
        paragraphs: ["Paid campaigns should be designed around the customer stage that matters, not only the first event available to the advertising platform. Tilth connects campaign structure, creative, tracking and funnel analysis to improve the quality of acquisition decisions."] },
      { type: "prose", id: "seo", eyebrow: "Organic", h2: "SEO and educational content",
        paragraphs: ["Financial products often require explanation. Useful service pages, comparison content, product education, FAQs and technical SEO can help users understand the category and evaluate the brand before taking action."] },
      { type: "prose", id: "affiliate", eyebrow: "Partnerships", h2: "Affiliate and partnership growth", light: true,
        paragraphs: ["Partners can extend distribution through communities, publishers, creators, institutions or other trusted networks. The programme needs clear commercial rules, attribution, quality controls and compliance review before it scales."] },
      { type: "prose", id: "website", eyebrow: "Conversion", h2: "Website and conversion",
        paragraphs: ["The website should support trust, comprehension and the next action. We review information hierarchy, proof, onboarding clarity, friction, performance and measurement across the journey."] },
      { type: "prose", id: "measurement", eyebrow: "Measurement", h2: "Measurement and funnel reporting", light: true,
        paragraphs: ["The reporting framework should reflect the actual activation journey. Depending on the product, stages may include visit, signup, verification, account connection, funding, transaction, repeat use or another meaningful business event."] },
      { type: "cards", id: "services", eyebrow: "Services", h2: "Relevant Tilth services", compact: true,
        cards: [
          { name: "Performance Marketing", href: "/services/performance-marketing/", regional: "/india/services/performance-marketing/", desc: "Acquisition, creative testing, tracking and funnel optimisation." },
          { name: "Affiliate Marketing", href: "/services/affiliate-partnerships/", regional: "/india/services/affiliate-marketing/", desc: "Partner programmes, attribution and quality controls." },
          { name: "SEO & Content", href: "/services/seo-ai-search/", regional: "/india/services/seo-content-marketing/", desc: "Technical SEO, product education and commercial content." },
          { name: "Growth Strategy & Measurement", href: "/services/growth-strategy-measurement/", desc: "Funnel definitions, analytics and reporting." },
          { name: "Websites & CRO", href: "/services/website-design-development/", desc: "Trust, usability, onboarding clarity and conversion." }
        ],
        cta: { label: "Explore relevant services", href: "/services/" } },
      { type: "insights", id: "insights", eyebrow: "Related insights", h2: "Thinking on funnels and measurement",
        slugs: ["ga4-conversion-tracking", "marketing-attribution-explained-simply", "affiliate-program-not-converting"],
        cta: { label: "Explore all insights", href: "/insights/" } },
      { type: "faq", id: "faq", eyebrow: "FAQ", h2: "Questions about FinTech growth marketing", light: true,
        faqs: [
          ["What does a FinTech marketing agency do?", "It helps FinTech companies improve the journey from awareness and education through signup, verification, activation and continued use. The work may include paid acquisition, SEO, affiliate growth, websites, messaging and measurement."],
          ["Can Tilth support KYC or verification funnels?", "Tilth can help analyse the marketing and conversion journey around signup, verification and activation. Product, legal and compliance decisions remain with the appropriate client teams."],
          ["Does Tilth provide compliance advice?", "No. Tilth can support compliance-aware communication and work with approved claims and review processes, but it does not provide legal or regulatory advice."],
          ["How can SEO support FinTech growth?", "SEO can help users discover the product, understand financial concepts, compare options and evaluate trust. The strategy may include technical SEO, service pages, educational content, FAQs and internal linking."],
          ["Can affiliate marketing work for FinTech?", "It can, when the commercial model, partner types, attribution and quality controls are designed carefully. The programme should reward verified business outcomes rather than raw activity alone."],
          ["How does an engagement begin?", "The first step is to map the customer journey, meaningful funnel stages, existing channels, approved messaging and available data. Tilth then identifies where the growth system needs improvement."]
        ] }
    ],
    finalCta: {
      h2: "Build FinTech growth around trust, activation and measurable progress.",
      body: "Share the customer journey, current channels and the stage where qualified users stop progressing. We'll help identify what needs to be fixed or connected.",
      primary: { label: "Discuss Your FinTech Growth Strategy", href: "/contact/" }
    }
  },

  // ------------------------------------------------------------------- US / SERVICE
  {
    key: "us-seo-content",
    region: "us", regionLabel: "United States", regionPath: "/us/",
    kindLabel: "Services", kindPath: "/services/",
    name: "SEO & Content Marketing",
    path: "/us/services/seo-content-marketing/",
    title: "SEO & Content Marketing Agency for US Brands | Tilth",
    description: "Tilth helps US brands improve technical SEO, commercial search strategy, content architecture, internal linking and visibility across Google and AI search.",
    ogTitle: "SEO and content systems designed to build durable search visibility",
    ogDescription: "Technical SEO, commercial keyword strategy, expert-led content and internal linking for US brands.",
    hero: {
      eyebrow: "SEO & content for US brands",
      h1: "SEO and content systems designed to build durable search visibility.",
      lede: "Tilth connects technical SEO, commercial keyword strategy, expert-led content and internal linking so organic discovery supports evaluation and conversion.",
      primary: { label: "Discuss Your SEO Strategy", href: "/contact/" },
      secondary: { label: "Explore Our Insights", href: "/insights/" }
    },
    sections: [
      { type: "prose", id: "journey", eyebrow: "The principle", h2: "Search visibility should support the buying journey.",
        paragraphs: [
          "Traffic alone does not make an SEO programme valuable. A useful organic system helps the right audience discover the company, understand the problem, compare approaches and move toward a meaningful next action.",
          "Tilth connects technical health, page architecture, commercial intent and expert content so the site can build visibility without relying on thin keyword pages or disconnected publishing."
        ] },
      { type: "prose", id: "keywords", eyebrow: "Strategy", h2: "Commercial keyword strategy", light: true,
        paragraphs: ["We map searches to the page type best suited to answer them: service pages, industry pages, product pages, comparisons, use cases or educational content. This creates clearer ownership and reduces the risk of several pages competing for the same intent."] },
      { type: "prose", id: "technical", eyebrow: "Technical", h2: "Technical SEO",
        paragraphs: ["The technical review can include crawlability, indexation, canonicals, redirects, sitemaps, structured data, template issues, internal linking and performance concerns that affect discovery or user experience."] },
      { type: "prose", id: "architecture", eyebrow: "Architecture", h2: "Topic and content architecture", light: true,
        paragraphs: ["Content should be organised around the questions and decisions that matter to the audience. Tilth plans clusters that connect useful Insights with commercial pages rather than publishing isolated articles for volume."] },
      { type: "prose", id: "expert-content", eyebrow: "Content", h2: "Expert-led content",
        paragraphs: ["Credible content should reflect first-hand knowledge, clear authorship and useful explanations. Tilth can support content briefs, commercial copy and Insight content that draws on the company's real expertise rather than generic summaries."] },
      { type: "prose", id: "commercial-pages", eyebrow: "Pages", h2: "Service and product pages", light: true,
        paragraphs: ["Commercial pages need more than keywords. They should explain the problem, approach, deliverables, proof, fit, FAQs and next action in language the buyer can understand."] },
      { type: "prose", id: "internal-linking", eyebrow: "Structure", h2: "Internal linking",
        paragraphs: ["Internal links guide users from discovery to relevant services, industries and proof. We improve anchor text and page relationships so important pages are easier to find and understand."] },
      { type: "prose", id: "ai-search", eyebrow: "Visibility", h2: "Google and AI-search visibility", light: true,
        paragraphs: ["The same foundations support both: useful original content, clear entities, accessible information, strong page structure and credible expertise. Tilth organises content for clarity without promising rankings or AI citations."] },
      { type: "prose", id: "conversion", eyebrow: "Conversion", h2: "Conversion from organic traffic",
        paragraphs: ["Organic landing pages should make the next action clear. We review calls to action, information hierarchy, proof and page experience so visibility has a stronger path to enquiry, signup or another meaningful conversion."] },
      { type: "prose", id: "reporting", eyebrow: "Collaboration", h2: "Reporting and collaboration", light: true,
        paragraphs: ["Reporting may include indexation, impressions, non-brand clicks, landing-page performance, conversions and the technical or content work completed. Documentation helps distributed teams understand what changed and why."] },
      { type: "cards", id: "industries", eyebrow: "Industries", h2: "Related industries", compact: true,
        standfirst: "This service is particularly relevant to SaaS, D2C and ecommerce, FinTech and EdTech companies with complex search journeys and high-value commercial pages.",
        cards: [
          { name: "SaaS", href: "/industries/saas/", regional: "/us/industries/saas/", desc: "Category, workflow, alternative and integration searches." },
          { name: "D2C & Ecommerce", href: "/industries/d2c-ecommerce/", regional: "/us/industries/d2c-ecommerce/", desc: "Product discovery, comparison and category pages." },
          { name: "FinTech", href: "/industries/fintech/", desc: "Product education, comparison content and trust signals." },
          { name: "EdTech", href: "/industries/edtech/", desc: "Long consideration journeys and programme research." }
        ] },
      { type: "cards", id: "related-services", eyebrow: "Works with", h2: "Related Tilth services", compact: true,
        cards: [
          { name: "Growth Strategy & Measurement", href: "/services/growth-strategy-measurement/", desc: "Funnel definitions, analytics and reporting." },
          { name: "Websites & Conversion Optimisation", href: "/services/website-design-development/", regional: "/us/services/website-cro/", desc: "Page experience, structure and conversion." }
        ],
        cta: { label: "Explore the Tilth approach", href: "/approach/" } },
      { type: "insights", id: "insights", eyebrow: "Related insights", h2: "Thinking on search and measurement",
        slugs: ["seo-not-bringing-leads", "marketing-foundation-audit", "ga4-conversion-tracking"],
        cta: { label: "Explore all insights", href: "/insights/" } },
      { type: "faq", id: "faq", eyebrow: "FAQ", h2: "Questions about SEO and content", light: true,
        faqs: [
          ["What does an SEO and content marketing agency do?", "It improves a company's technical search foundations, commercial pages, keyword architecture, internal linking and useful content so the right audience can discover and evaluate the business."],
          ["Does Tilth guarantee rankings or traffic?", "No. Search performance depends on competition, website authority, technical health, content quality and ongoing execution. Tilth focuses on improving the factors the company can control."],
          ["Can Tilth optimise an existing website?", "Yes. The work can begin with a technical and content review of the current site, followed by prioritised improvements to pages, architecture and content."],
          ["Does Tilth create content for AI search?", "Tilth can structure useful, expert-led content and clear entities that support visibility across Google and emerging AI-led discovery. It does not guarantee AI citations or inclusion."],
          ["How does Tilth collaborate with US teams?", "Reviews and content workflows can combine agreed overlap hours, documentation and asynchronous feedback. The working rhythm is confirmed at the beginning of the engagement."],
          ["How is SEO measured?", "Measurement may include indexation, impressions, non-brand clicks, rankings, landing-page engagement, conversions and assisted journeys depending on the site and business objective."]
        ] }
    ],
    finalCta: {
      h2: "Build an organic system that earns useful discovery over time.",
      body: "Tell us which pages matter, what your audience is searching for and where visibility is failing to convert. We'll help identify the right technical and content priorities.",
      primary: { label: "Discuss Your SEO Strategy", href: "/contact/" }
    }
  },

  // ------------------------------------------------------------------ US / INDUSTRY
  {
    key: "us-saas",
    region: "us", regionLabel: "United States", regionPath: "/us/",
    kindLabel: "Industries", kindPath: "/industries/",
    name: "SaaS",
    path: "/us/industries/saas/",
    title: "SaaS Growth Marketing Agency for US Companies | Tilth",
    description: "Tilth helps US SaaS teams improve positioning, demand generation, demos, trials, activation, SEO, paid acquisition and pipeline measurement.",
    ogTitle: "Growth marketing for US SaaS teams building predictable pipeline",
    ogDescription: "Positioning, demand generation, conversion, activation and measurement connected for SaaS teams.",
    hero: {
      eyebrow: "SaaS growth for US companies",
      h1: "Growth marketing for US SaaS teams building predictable pipeline.",
      lede: "Tilth connects positioning, demand generation, conversion, activation and measurement so SaaS teams can see what is creating qualified pipeline and product progress.",
      primary: { label: "Discuss Your SaaS Growth Strategy", href: "/contact/" },
      secondary: { label: "Explore Relevant Services", href: "/services/" }
    },
    sections: [
      { type: "prose", id: "connected-funnel", eyebrow: "The challenge", h2: "Predictable SaaS growth requires one connected funnel.",
        paragraphs: [
          "Marketing may report leads, sales may report pipeline and product may report activation, but the company still lacks a shared view of what is creating quality growth.",
          "Tilth helps connect these stages so strategy and channel decisions reflect the full journey from discovery to revenue or product value."
        ] },
      { type: "prose", id: "icp", eyebrow: "Positioning", h2: "ICP and positioning", light: true,
        paragraphs: ["A clear ideal customer profile, problem definition and differentiated message give demand-generation activity a stronger foundation. We review how the product is explained across campaigns, website pages and content."] },
      { type: "prose", id: "demand", eyebrow: "Demand", h2: "Demand generation",
        paragraphs: ["Demand may come from paid acquisition, search, expert content, partnerships and focused landing experiences. The mix should reflect the audience, buying journey, deal value and sales motion."] },
      { type: "prose", id: "demo-trial", eyebrow: "Conversion", h2: "Demo and trial conversion", light: true,
        paragraphs: ["The path from interest to demo or trial should communicate value, fit and next steps clearly. Tilth reviews forms, landing pages, qualification, follow-up and message continuity."] },
      { type: "prose", id: "activation", eyebrow: "Activation", h2: "Product activation",
        paragraphs: ["For trial or product-led models, activation should reflect a meaningful product action rather than signup alone. This creates a stronger signal for acquisition and onboarding decisions."] },
      { type: "prose", id: "content-authority", eyebrow: "Organic", h2: "Content authority and SEO", light: true,
        paragraphs: ["SaaS buyers search for problems, categories, workflows, alternatives, integrations and implementation guidance. A useful content system connects these searches to the product and commercial journey."] },
      { type: "prose", id: "paid", eyebrow: "Paid", h2: "Paid acquisition",
        paragraphs: ["Paid channels can support category capture, account or audience targeting, retargeting and offer testing. Measurement should connect spend with qualified pipeline, trial quality or another downstream signal."] },
      { type: "prose", id: "website", eyebrow: "Website", h2: "Website conversion", light: true,
        paragraphs: ["The website should explain the problem, product, use cases, proof and next action without forcing the buyer to interpret the value. Tilth can improve structure, messaging, analytics and landing pages."] },
      { type: "prose", id: "alignment", eyebrow: "Alignment", h2: "Sales and marketing alignment",
        paragraphs: ["Growth improves when marketing and sales agree on qualification, funnel stages, feedback and reporting. Tilth can help define the shared view required for better decisions."] },
      { type: "prose", id: "measurement", eyebrow: "Measurement", h2: "Pipeline and revenue measurement", light: true,
        paragraphs: ["The measurement framework may connect source, lead, qualification, demo, trial, activation, opportunity, pipeline and revenue. The exact model depends on the sales motion and available systems."] },
      { type: "prose", id: "collaboration", eyebrow: "Working together", h2: "Distributed collaboration",
        paragraphs: ["For US teams working with Tilth from India, the engagement can combine scheduled reviews, agreed overlap hours, shared documentation and asynchronous updates."] },
      { type: "cards", id: "services", eyebrow: "Services", h2: "Relevant Tilth services", compact: true, light: true,
        cards: [
          { name: "Growth Strategy & Measurement", href: "/services/growth-strategy-measurement/", desc: "ICP, funnel definitions, analytics and reporting." },
          { name: "SEO & Content", href: "/services/seo-ai-search/", regional: "/us/services/seo-content-marketing/", desc: "Commercial pages, expert content and organic discovery." },
          { name: "Performance Marketing", href: "/services/performance-marketing/", regional: "/us/services/performance-marketing/", desc: "Paid acquisition, experimentation and funnel analysis." },
          { name: "Websites & CRO", href: "/services/website-design-development/", regional: "/us/services/website-cro/", desc: "Messaging, landing pages and conversion." },
          { name: "Affiliate & Partnerships", href: "/services/affiliate-partnerships/", desc: "Distribution through relevant ecosystems or partners." }
        ],
        cta: { label: "Explore relevant services", href: "/services/" } },
      { type: "insights", id: "insights", eyebrow: "Related insights", h2: "Thinking on demand and measurement",
        slugs: ["marketing-attribution-explained-simply", "seo-not-bringing-leads", "questions-before-hiring-marketing-agency"],
        cta: { label: "Explore all insights", href: "/insights/" } },
      { type: "faq", id: "faq", eyebrow: "FAQ", h2: "Questions about SaaS growth marketing", light: true,
        faqs: [
          ["What does a SaaS growth marketing agency do?", "It connects positioning, demand generation, paid acquisition, SEO, website conversion, demos or trials, activation and measurement around the SaaS revenue model."],
          ["Can Tilth support product-led and sales-led SaaS companies?", "Yes. The growth system can be adapted to demo-led, sales-led, trial-led or product-led journeys based on the product and customer model."],
          ["How does Tilth collaborate with US SaaS teams?", "The engagement can use agreed overlap hours, scheduled reviews, shared documentation and asynchronous updates. The operating rhythm is agreed during setup."],
          ["Can Tilth work with an internal sales or product team?", "Yes. Growth measurement often requires collaboration across marketing, sales and product. Tilth can work with internal stakeholders to define stages and feedback loops."],
          ["Which metrics matter for SaaS growth?", "Useful metrics may include qualified leads, demos, trials, activation, opportunity creation, pipeline and revenue. The right framework depends on the sales motion."],
          ["How does an engagement begin?", "Tilth reviews the ICP, positioning, acquisition channels, sales or product journey and current measurement to identify the most important growth constraint."]
        ] }
    ],
    finalCta: {
      h2: "Create a clearer path from demand to pipeline and product value.",
      body: "Tell us where the SaaS funnel is losing quality or visibility. We'll help identify what should be clarified, connected or tested next.",
      primary: { label: "Discuss Your SaaS Growth Strategy", href: "/contact/" }
    }
  },

  // ============================ BATCH 3 ============================
  // ---------------------------------------------------------------- INDIA / SERVICE
  {
    key: "india-seo-content",
    region: "india", regionLabel: "India", regionPath: "/india/",
    kindLabel: "Services", kindPath: "/services/",
    name: "SEO & Content Marketing",
    path: "/india/services/seo-content-marketing/",
    title: "SEO & Content Marketing Agency in India | Tilth",
    description: "Tilth helps Indian brands improve technical SEO, commercial pages, content architecture, internal linking and visibility across Google and AI search.",
    ogTitle: "SEO and content systems built for sustained organic growth",
    ogDescription: "Technical SEO, search intent, commercial pages, useful content and internal linking for Indian brands.",
    hero: {
      eyebrow: "SEO & content marketing in India",
      h1: "SEO and content systems built for sustained organic growth.",
      lede: "Tilth connects technical SEO, search intent, commercial pages, useful content and internal linking so organic visibility supports real business discovery.",
      primary: { label: "Discuss Your SEO Strategy", href: "/contact/" },
      secondary: { label: "Explore Our Insights", href: "/insights/" }
    },
    sections: [
      { type: "prose", id: "system", eyebrow: "The problem", h2: "Organic growth needs a system, not a publishing calendar.",
        paragraphs: [
          "Publishing more articles is not a complete SEO strategy. Brands may have technical issues, weak commercial pages, unclear keyword ownership, thin service content or internal links that do not guide users and search engines toward the most important pages.",
          "Tilth begins with the search journey and the website architecture. We identify which pages should rank, which questions the audience needs answered and what technical or content gaps are preventing the site from building useful visibility."
        ] },
      { type: "prose", id: "technical", eyebrow: "Technical", h2: "Technical SEO", light: true,
        paragraphs: ["We review crawlability, indexation, canonicals, redirects, sitemaps, page templates, structured data, internal linking and page-performance issues that can limit discovery or create conflicting signals."] },
      { type: "prose", id: "commercial-pages", eyebrow: "Pages", h2: "Commercial-page optimisation",
        paragraphs: ["Service, product, industry and market pages should answer commercial questions clearly. Tilth improves page intent, headings, supporting copy, internal links, proof, FAQs and calls to action so these pages are useful to both searchers and buyers."] },
      { type: "prose", id: "intent", eyebrow: "Strategy", h2: "Keyword and search-intent strategy", light: true,
        paragraphs: ["The goal is not to place every variation on one page. We map search themes to the most suitable page type and distinguish commercial, comparison, educational and navigational intent. This helps reduce cannibalisation and creates a more logical content plan."] },
      { type: "prose", id: "architecture", eyebrow: "Architecture", h2: "Content architecture",
        paragraphs: ["A useful content system connects broad themes, service pages, industry pages and practical Insight articles. Tilth plans topic clusters around the questions that influence discovery, evaluation and action rather than publishing disconnected posts."] },
      { type: "prose", id: "linking", eyebrow: "Structure", h2: "Internal linking", light: true,
        paragraphs: ["Internal links help users move from an article to a relevant service, industry or next step. We improve anchor text, page relationships and navigation so important pages are easier to discover and understand."] },
      { type: "prose", id: "ai-search", eyebrow: "Visibility", h2: "Visibility across Google and AI search",
        paragraphs: ["The foundations remain the same: clear entities, useful original content, strong page structure, accessible information and credible expertise. Tilth helps organise content so it can be understood across traditional search and emerging AI-led discovery without relying on artificial keyword repetition."] },
      { type: "prose", id: "measurement", eyebrow: "Measurement", h2: "Measurement and reporting", light: true,
        paragraphs: ["SEO reporting should distinguish visibility from business value. Reviews may include indexation, impressions, non-brand clicks, landing-page performance, conversions, assisted journeys and the content or technical work completed during the period."] },
      { type: "cards", id: "industries", eyebrow: "Industries", h2: "Relevant industries", compact: true,
        standfirst: "The service can support SaaS, D2C and ecommerce, FinTech and EdTech companies where buyers use search to discover, compare, learn and evaluate before taking action.",
        cards: [
          { name: "SaaS", href: "/industries/saas/", regional: "/india/industries/saas/", desc: "Category, workflow and comparison searches." },
          { name: "FinTech", href: "/industries/fintech/", regional: "/india/industries/fintech/", desc: "Product education, trust and comparison content." },
          { name: "D2C & Ecommerce", href: "/industries/d2c-ecommerce/", regional: "/india/industries/d2c-ecommerce/", desc: "Category, product and collection discovery." },
          { name: "EdTech", href: "/industries/edtech/", desc: "Long research journeys and programme evaluation." }
        ] },
      { type: "steps", id: "process", eyebrow: "How we work", h2: "The Tilth process", light: true,
        steps: [
          { n: "01", name: "Diagnose", desc: "Review technical health, page architecture, rankings, search demand and conversion paths." },
          { n: "02", name: "Build", desc: "Prioritise technical fixes, commercial pages, content clusters and internal links." },
          { n: "03", name: "Compound", desc: "Improve and expand the pages that earn useful visibility and business engagement over time." }
        ],
        cta: { label: "Explore the Tilth approach", href: "/approach/" } },
      { type: "cards", id: "related-services", eyebrow: "Works with", h2: "Related Tilth services", compact: true,
        cards: [
          { name: "Websites & Conversion Optimisation", href: "/services/website-design-development/", desc: "Page experience, structure and conversion." },
          { name: "Growth Strategy & Measurement", href: "/services/growth-strategy-measurement/", desc: "Funnel definitions, analytics and reporting." }
        ] },
      { type: "insights", id: "insights", eyebrow: "Related insights", h2: "Thinking on search and discovery",
        slugs: ["seo-not-bringing-leads", "marketing-foundation-audit", "ga4-conversion-tracking"],
        cta: { label: "Explore all insights", href: "/insights/" } },
      { type: "faq", id: "faq", eyebrow: "FAQ", h2: "Questions about SEO and content in India", light: true,
        faqs: [
          ["What does an SEO and content marketing agency do?", "It improves how a website is discovered, understood and used through technical SEO, page optimisation, keyword mapping, content architecture, internal linking and useful content production."],
          ["How long does SEO usually take?", "SEO is not a fixed-timeline channel. Technical fixes may be implemented quickly, but search visibility and traffic depend on competition, website authority, crawl and indexation, content quality and how consistently the work is improved over time."],
          ["Does Tilth handle technical SEO?", "Yes. Tilth can review and prioritise technical issues such as indexation, canonicals, redirects, sitemaps, structured data, page templates, internal linking and page-performance concerns."],
          ["Does Tilth write website and blog content?", "Tilth can support commercial-page copy, content briefs, Insight articles and content architecture depending on the agreed scope. The focus is on useful, accurate content connected to a clear search and business purpose."],
          ["Can Tilth optimise an existing website?", "Yes. The work can begin with an existing website and prioritise the pages, technical issues and content gaps most likely to improve discovery and conversion."],
          ["How is SEO performance measured?", "Measurement may include indexation, impressions, rankings, non-brand clicks, landing-page engagement, conversions and assisted journeys. The final framework depends on the website and business objective."]
        ] }
    ],
    finalCta: {
      h2: "Build search visibility that supports business discovery.",
      body: "Tell us which pages matter, where organic growth is slowing and what your audience is searching for. We'll help identify the technical and content priorities.",
      primary: { label: "Discuss Your SEO Strategy", href: "/contact/" }
    }
  },

  {
    key: "india-affiliate",
    region: "india", regionLabel: "India", regionPath: "/india/",
    kindLabel: "Services", kindPath: "/services/",
    name: "Affiliate Marketing",
    path: "/india/services/affiliate-marketing/",
    title: "Affiliate Marketing Agency in India | Tilth",
    description: "Tilth helps Indian brands design, launch and optimise affiliate and partnership programmes with clear commercial models, tracking and quality controls.",
    ogTitle: "Affiliate and partnership programmes built for accountable growth",
    ogDescription: "Partner strategy, commercial models, onboarding, tracking, quality controls and optimisation.",
    hero: {
      eyebrow: "Affiliate marketing in India",
      h1: "Affiliate and partnership programmes built for accountable growth.",
      lede: "Tilth connects partner strategy, commercial models, onboarding, tracking, quality controls and optimisation so the channel can grow without losing accountability.",
      primary: { label: "Discuss Your Affiliate Programme", href: "/contact/" },
      secondary: { label: "Explore Our Approach", href: "/approach/" }
    },
    sections: [
      { type: "prose", id: "struggle", eyebrow: "The problem", h2: "Why affiliate programmes struggle",
        paragraphs: [
          "Affiliate growth can appear attractive because payment is linked to performance, but weak programme design can create low-quality users, unclear attribution, margin pressure, fraud risk or partner relationships that are difficult to scale.",
          "Tilth treats affiliate marketing as an operating system. The programme needs clear eligibility, commercial logic, tracking, partner communication and quality controls before the partner base expands."
        ] },
      { type: "list", id: "who-for", eyebrow: "Who it's for", h2: "Who this service is for", light: true,
        items: [
          "Brands launching an affiliate or partnership channel for the first time.",
          "Teams with an existing programme that is not producing enough quality or scale.",
          "Companies that need clearer partner terms, attribution or fraud controls.",
          "Businesses where publishers, creators, communities, distributors or referral partners influence acquisition."
        ] },
      { type: "prose", id: "strategy", eyebrow: "Strategy", h2: "Partner strategy",
        paragraphs: ["The programme should begin with the role partners are expected to play. Tilth defines target partner types, acquisition stages, value exchange, quality requirements and the commercial outcome the programme is designed to influence."] },
      { type: "prose", id: "onboarding", eyebrow: "Recruitment", h2: "Partner discovery and onboarding", light: true,
        paragraphs: ["Partner recruitment is more effective when the offer, audience fit and operating requirements are clear. Tilth can support partner research, outreach workflows, qualification, onboarding materials and programme communication."] },
      { type: "prose", id: "commercial", eyebrow: "Commercials", h2: "Commercial and commission models",
        paragraphs: ["The payout model should reflect customer value, margin, conversion quality and the stage being rewarded. Tilth can help structure fixed, percentage, tiered or milestone-based approaches where appropriate, without publishing unapproved commercial terms."] },
      { type: "prose", id: "tracking", eyebrow: "Measurement", h2: "Tracking and attribution", light: true,
        paragraphs: ["Clear partner links, codes, event definitions and reporting are essential. Tilth reviews how users are attributed, which conversion stages are measured and how duplicate or disputed credit should be handled."] },
      { type: "prose", id: "fraud", eyebrow: "Quality", h2: "Fraud and quality controls",
        paragraphs: ["Programme growth should not reward activity that does not create business value. Quality rules can include validation windows, minimum criteria, duplication checks, suspicious-behaviour reviews and payout approval processes based on verified data."] },
      { type: "prose", id: "communication", eyebrow: "Partners", h2: "Partner communication and optimisation", light: true,
        paragraphs: ["Partners need clear offers, assets, updates and feedback. Tilth can establish a rhythm for programme communication, performance review and partner segmentation so the strongest relationships receive the right support."] },
      { type: "cards", id: "industries", eyebrow: "Industries", h2: "Relevant industries", compact: true,
        standfirst: "Affiliate and partnership models can be relevant to FinTech, D2C and ecommerce, SaaS, education and other categories where trusted communities or third-party distribution influence acquisition.",
        cards: [
          { name: "FinTech", href: "/industries/fintech/", regional: "/india/industries/fintech/", desc: "Communities, publishers and verified-outcome models." },
          { name: "D2C & Ecommerce", href: "/industries/d2c-ecommerce/", regional: "/india/industries/d2c-ecommerce/", desc: "Creators, publishers and referral distribution." },
          { name: "SaaS", href: "/industries/saas/", regional: "/india/industries/saas/", desc: "Ecosystem, integration and referral partners." },
          { name: "EdTech", href: "/industries/edtech/", desc: "Counsellors, communities and education networks." }
        ] },
      { type: "steps", id: "process", eyebrow: "How we work", h2: "The Tilth process", light: true,
        steps: [
          { n: "01", name: "Design", desc: "Define the programme role, target partners, commercial model and tracking requirements." },
          { n: "02", name: "Activate", desc: "Recruit, qualify and onboard partners with clear materials and expectations." },
          { n: "03", name: "Optimise", desc: "Review quality, contribution, partner performance and programme economics over time." }
        ],
        cta: { label: "Explore the Tilth approach", href: "/approach/" } },
      { type: "cards", id: "related-services", eyebrow: "Works with", h2: "Related Tilth services", compact: true,
        cards: [
          { name: "Growth Strategy & Measurement", href: "/services/growth-strategy-measurement/", desc: "Programme economics, funnel definitions and reporting." }
        ] },
      { type: "insights", id: "insights", eyebrow: "Related insights", h2: "Thinking on partner-led growth",
        slugs: ["affiliate-program-not-converting", "measure-influencer-marketing-roi", "marketing-attribution-explained-simply"],
        cta: { label: "Explore all insights", href: "/insights/" } },
      { type: "faq", id: "faq", eyebrow: "FAQ", h2: "Questions about affiliate programmes", light: true,
        faqs: [
          ["What does an affiliate marketing agency do?", "It helps a brand design, launch, manage or improve a partner programme. The work can include programme strategy, partner discovery, onboarding, commercial models, tracking, fraud controls, communication and optimisation."],
          ["Does Tilth recruit affiliate partners?", "Tilth can support partner research, outreach workflows, qualification and onboarding depending on the engagement scope and target partner types."],
          ["How are affiliate commissions structured?", "Commission structures depend on the business model, margin, customer value and conversion stage. They may be fixed, percentage-based, tiered or linked to verified milestones. Tilth does not apply one universal model."],
          ["How is affiliate performance tracked?", "Performance can be tracked through links, referral codes, platform or backend events and agreed conversion definitions. The measurement setup should distinguish raw activity from verified business outcomes."],
          ["How does Tilth manage fraud and low-quality traffic?", "Controls may include validation rules, duplicate checks, quality thresholds, suspicious-activity reviews and payout approval based on verified data. The exact controls depend on the category and available systems."],
          ["Can Tilth improve an existing affiliate programme?", "Yes. Tilth can review programme economics, partner quality, attribution, communication, reporting and operational gaps before recommending the changes required to improve performance."]
        ] }
    ],
    finalCta: {
      h2: "Build a partner channel with clearer quality and accountability.",
      body: "Share the current programme, partner model and conversion stages. We'll help identify what needs to be designed, fixed or scaled.",
      primary: { label: "Discuss Your Affiliate Programme", href: "/contact/" }
    }
  },

  // --------------------------------------------------------------- INDIA / INDUSTRY
  {
    key: "india-d2c",
    region: "india", regionLabel: "India", regionPath: "/india/",
    kindLabel: "Industries", kindPath: "/industries/",
    name: "D2C & Ecommerce",
    path: "/india/industries/d2c-ecommerce/",
    title: "D2C & Ecommerce Growth Marketing Agency India | Tilth",
    description: "Tilth helps Indian D2C and ecommerce brands connect acquisition, creative testing, website conversion, SEO and measurement for more accountable growth.",
    ogTitle: "Growth marketing for D2C and ecommerce brands in India",
    ogDescription: "Acquisition economics, creative, website conversion, organic discovery and measurement connected.",
    hero: {
      eyebrow: "D2C & ecommerce growth in India",
      h1: "Growth marketing for D2C and ecommerce brands in India.",
      lede: "Tilth connects acquisition economics, creative, website conversion, organic discovery and measurement so growth decisions reflect the full customer journey.",
      primary: { label: "Discuss Your D2C Growth Strategy", href: "/contact/" },
      secondary: { label: "Explore Relevant Services", href: "/services/" }
    },
    sections: [
      { type: "prose", id: "economics-system", eyebrow: "The challenge", h2: "D2C growth is a system of connected economics.",
        paragraphs: [
          "A campaign can generate purchases and still weaken the business if customer acquisition cost rises faster than contribution, creative fatigue reduces efficiency or the website loses too many high-intent visitors.",
          "Tilth looks at the system around revenue: channel mix, creative learning, landing and product-page experience, average order value, repeat purchase and the measurement required to understand where growth is becoming less efficient."
        ] },
      { type: "prose", id: "acquisition", eyebrow: "Economics", h2: "Acquisition economics", light: true,
        paragraphs: ["Media decisions should reflect more than return reported inside an advertising platform. We connect spend with conversion rate, average order value, contribution margin, new versus returning customers and the time it takes for acquisition to become commercially useful."] },
      { type: "prose", id: "creative", eyebrow: "Creative", h2: "Creative testing",
        paragraphs: ["Creative is often the fastest-moving variable in D2C growth. Tilth structures testing around product problem, audience, proof, offer, format and call to action so the team learns why a message works instead of only producing more variations."] },
      { type: "prose", id: "conversion", eyebrow: "Conversion", h2: "Website and product-page conversion", light: true,
        paragraphs: ["The path from ad to product page should maintain message continuity and make the next action clear. We review page hierarchy, product information, proof, shipping or returns communication, friction and analytics to identify where intent is being lost."] },
      { type: "prose", id: "seo", eyebrow: "Organic", h2: "SEO and organic discovery",
        paragraphs: ["Organic growth can support category discovery, product education, comparison and branded demand. The content system may include collection pages, product pages, commercial guides, technical SEO and internal links that connect research with purchase intent."] },
      { type: "prose", id: "retention", eyebrow: "Retention", h2: "Retention and repeat purchase", light: true,
        paragraphs: ["Repeat purchase can materially affect acquisition economics. Even when Tilth is not owning the complete retention programme, growth decisions should consider customer cohorts, repurchase patterns, lifecycle communication and the difference between first-order performance and longer-term value."] },
      { type: "prose", id: "measurement", eyebrow: "Measurement", h2: "Measurement framework",
        paragraphs: ["A useful D2C view can combine spend, sessions, product-page behaviour, add-to-cart, checkout, purchase, average order value, new-customer contribution and repeat purchase. The exact framework should match the business model and available data."] },
      { type: "cards", id: "services", eyebrow: "Services", h2: "Relevant Tilth services", compact: true, light: true,
        cards: [
          { name: "Performance Marketing", href: "/services/performance-marketing/", regional: "/india/services/performance-marketing/", desc: "Paid acquisition, creative testing, tracking and budget decisions." },
          { name: "Websites & CRO", href: "/services/website-design-development/", desc: "Product-page experience, landing pages, analytics and conversion improvement." },
          { name: "SEO & Content", href: "/services/seo-ai-search/", regional: "/india/services/seo-content-marketing/", desc: "Technical SEO, commercial pages and organic discovery." },
          { name: "Growth Strategy & Measurement", href: "/services/growth-strategy-measurement/", desc: "Economics, funnel definitions and decision-ready reporting." }
        ],
        cta: { label: "Explore relevant services", href: "/services/" } },
      { type: "insights", id: "insights", eyebrow: "Related insights", h2: "Thinking on D2C growth",
        slugs: ["marketing-agency-for-d2c-brands", "shopify-conversion-tracking-ga4-meta-pixel", "meta-ads-not-converting"],
        cta: { label: "Explore all insights", href: "/insights/" } },
      { type: "faq", id: "faq", eyebrow: "FAQ", h2: "Questions about D2C growth marketing", light: true,
        faqs: [
          ["What does a D2C growth marketing agency do?", "It connects customer acquisition, creative, website conversion, organic discovery, measurement and retention considerations around the economics of the ecommerce business."],
          ["Can Tilth manage paid media for D2C brands?", "Tilth can support paid acquisition across relevant supported platforms, including campaign strategy, creative testing, tracking, funnel review and optimisation."],
          ["Does Tilth work on Shopify or other ecommerce websites?", "Tilth can support website strategy, UX, conversion, analytics and technical foundations. The final development or platform scope depends on the existing website and project requirements."],
          ["How does SEO support D2C growth?", "SEO can improve discovery across category, product, comparison and educational searches. It can also strengthen product and collection pages, technical performance and internal links that guide users toward purchase."],
          ["Which D2C metrics matter most?", "The useful metrics depend on the business, but often include customer acquisition cost, conversion rate, average order value, contribution margin, new versus returning customers and repeat purchase."],
          ["How does an engagement begin?", "The first step is to review the customer journey, channel mix, acquisition economics, website performance and available data to identify the most important growth constraint."]
        ] }
    ],
    finalCta: {
      h2: "Build D2C growth around stronger economics and conversion.",
      body: "Tell us where acquisition, creative or conversion is losing efficiency. We'll help identify the system changes that should come before more scale.",
      primary: { label: "Discuss Your D2C Growth Strategy", href: "/contact/" }
    }
  },

  {
    key: "india-saas",
    region: "india", regionLabel: "India", regionPath: "/india/",
    kindLabel: "Industries", kindPath: "/industries/",
    name: "SaaS",
    path: "/india/industries/saas/",
    title: "SaaS Growth Marketing Agency in India | Tilth",
    description: "Tilth helps SaaS companies in India improve positioning, demand generation, demos, trials, activation, SEO, paid acquisition and pipeline measurement.",
    ogTitle: "Growth marketing for SaaS companies building predictable demand",
    ogDescription: "Positioning, demand generation, conversion, activation and measurement connected for SaaS teams in India.",
    hero: {
      eyebrow: "SaaS growth in India",
      h1: "Growth marketing for SaaS companies building predictable demand.",
      lede: "Tilth connects positioning, demand generation, conversion, activation and measurement so SaaS teams can understand what is creating qualified pipeline and product adoption.",
      primary: { label: "Discuss Your SaaS Growth Strategy", href: "/contact/" },
      secondary: { label: "Explore Relevant Services", href: "/services/" }
    },
    sections: [
      { type: "prose", id: "fragments", eyebrow: "The challenge", h2: "SaaS growth breaks when the funnel is measured in fragments.",
        paragraphs: [
          "Traffic, leads, demos, trials, activation and revenue are often managed by different teams or systems. Without a connected view, marketing may optimise lead volume while sales questions quality or product adoption remains weak.",
          "Tilth helps define the full journey and identify the constraint that is limiting predictable growth."
        ] },
      { type: "prose", id: "icp", eyebrow: "Positioning", h2: "ICP and positioning", light: true,
        paragraphs: ["A clear ideal customer profile, problem definition and differentiated message create the foundation for acquisition. Tilth reviews how the product is positioned across the website, campaigns and content so the right audience understands why it should care."] },
      { type: "prose", id: "demand", eyebrow: "Demand", h2: "Demand generation",
        paragraphs: ["Demand can be created through paid acquisition, search, content, partnerships and focused landing experiences. The channel mix should reflect the buying journey, sales cycle, deal value and evidence required to earn consideration."] },
      { type: "prose", id: "demo-trial", eyebrow: "Conversion", h2: "Demo and trial conversion", light: true,
        paragraphs: ["The path from interest to demo or trial should make the value, fit and next step clear. We review landing pages, forms, qualification, follow-up and message continuity across the journey."] },
      { type: "prose", id: "activation", eyebrow: "Activation", h2: "Product activation",
        paragraphs: ["For product-led or trial-led models, signup is only the beginning. Activation events should reflect the moment a user experiences meaningful value, allowing acquisition and onboarding decisions to be measured against product progress."] },
      { type: "prose", id: "seo", eyebrow: "Organic", h2: "SEO and content authority", light: true,
        paragraphs: ["SaaS buyers often search for problems, categories, comparisons, workflows and implementation questions. A useful content system connects these searches to product and service pages rather than publishing broad traffic content without a commercial path."] },
      { type: "prose", id: "paid", eyebrow: "Paid", h2: "Paid acquisition",
        paragraphs: ["Paid media can support category capture, demand creation, retargeting and account or audience-specific campaigns. The strategy should connect spend with qualified pipeline, trial quality or another meaningful downstream signal."] },
      { type: "prose", id: "website", eyebrow: "Website", h2: "Website conversion", light: true,
        paragraphs: ["The website should explain the problem, product, proof, use cases and next action without forcing the buyer to interpret the value. Tilth can improve information architecture, landing pages, analytics and conversion clarity."] },
      { type: "prose", id: "measurement", eyebrow: "Measurement", h2: "Pipeline and revenue measurement",
        paragraphs: ["The measurement framework may connect source, lead, qualification, demo, trial, activation, opportunity and revenue. The exact stages depend on the sales motion and available systems."] },
      { type: "cards", id: "services", eyebrow: "Services", h2: "Relevant Tilth services", compact: true, light: true,
        cards: [
          { name: "Growth Strategy & Measurement", href: "/services/growth-strategy-measurement/", desc: "ICP, funnel stages, analytics and reporting." },
          { name: "SEO & Content", href: "/services/seo-ai-search/", regional: "/india/services/seo-content-marketing/", desc: "Commercial pages, topic authority and organic discovery." },
          { name: "Performance Marketing", href: "/services/performance-marketing/", regional: "/india/services/performance-marketing/", desc: "Paid acquisition, experimentation and funnel analysis." },
          { name: "Websites & CRO", href: "/services/website-design-development/", desc: "Landing pages, product messaging and conversion." },
          { name: "Affiliate & Partnerships", href: "/services/affiliate-partnerships/", regional: "/india/services/affiliate-marketing/", desc: "Distribution through relevant partners or ecosystems." }
        ],
        cta: { label: "Explore relevant services", href: "/services/" } },
      { type: "insights", id: "insights", eyebrow: "Related insights", h2: "Thinking on demand and measurement",
        slugs: ["first-marketing-hire-startup", "startup-marketing-budget-india", "marketing-foundation-audit"],
        cta: { label: "Explore all insights", href: "/insights/" } },
      { type: "faq", id: "faq", eyebrow: "FAQ", h2: "Questions about SaaS growth in India", light: true,
        faqs: [
          ["What does a SaaS growth marketing agency do?", "It helps connect positioning, demand generation, paid acquisition, SEO, website conversion, demos or trials, activation and measurement around the SaaS revenue model."],
          ["Can Tilth support both B2B and product-led SaaS?", "Tilth can adapt the growth system to different SaaS motions, including demo-led, sales-led and trial or product-led journeys. The scope depends on the product, audience and available data."],
          ["How does SEO support SaaS growth?", "SEO can help buyers discover the category, understand the problem, compare approaches and evaluate the product. The work may include technical SEO, service or product pages, use cases, comparisons and expert content."],
          ["Which SaaS metrics should be tracked?", "Useful metrics may include qualified leads, demos, trials, activation, opportunity creation, pipeline and revenue. The right framework depends on the sales motion and customer journey."],
          ["Can Tilth work with an internal sales team?", "Yes. Growth and measurement should reflect the handoff between marketing, sales and product. Tilth can work with internal stakeholders to define stages, feedback loops and reporting."],
          ["How does an engagement begin?", "The first step is to review the ICP, positioning, acquisition channels, sales or product journey and measurement. Tilth then identifies the constraint that needs to be addressed first."]
        ] }
    ],
    finalCta: {
      h2: "Create a clearer path from demand to activation and revenue.",
      body: "Tell us where the SaaS funnel is losing quality or visibility. We'll help identify what should be clarified, connected or tested next.",
      primary: { label: "Discuss Your SaaS Growth Strategy", href: "/contact/" }
    }
  },

  // ------------------------------------------------------------------- US / SERVICE
  {
    key: "us-performance-marketing",
    region: "us", regionLabel: "United States", regionPath: "/us/",
    kindLabel: "Services", kindPath: "/services/",
    name: "Performance Marketing",
    path: "/us/services/performance-marketing/",
    title: "Performance Marketing Agency for US Brands | Tilth",
    description: "Tilth helps US brands connect paid media, creative testing, attribution and funnel performance to clearer business outcomes.",
    ogTitle: "Performance marketing for US brands that need clearer accountability",
    ogDescription: "Paid acquisition, creative experimentation, tracking and funnel analysis connected to business progress.",
    hero: {
      eyebrow: "Performance marketing for US brands",
      h1: "Performance marketing for US brands that need clearer accountability.",
      lede: "Tilth connects paid acquisition, creative experimentation, tracking and funnel analysis so investment decisions are based on measurable business progress.",
      primary: { label: "Discuss Your Performance Strategy", href: "/contact/" },
      secondary: { label: "Explore Our Approach", href: "/approach/" }
    },
    sections: [
      { type: "prose", id: "accountable", eyebrow: "The principle", h2: "Performance should be accountable beyond the ad platform.",
        paragraphs: [
          "Platform metrics can describe clicks, conversions and cost, but they do not always explain lead quality, pipeline, revenue or the effect of the website after the click.",
          "Tilth brings channel activity, creative learning, attribution and funnel performance into one view so teams can make clearer decisions about what to change and what to scale."
        ] },
      { type: "prose", id: "planning", eyebrow: "Strategy", h2: "Strategy and channel planning", light: true,
        paragraphs: ["We begin with the audience, offer, buying journey, economics and measurement. This helps determine which channels are appropriate, how campaigns should be structured and what the team needs to learn before increasing investment."] },
      { type: "prose", id: "execution", eyebrow: "Execution", h2: "Paid media execution",
        paragraphs: ["Tilth can support Google Ads, Meta Ads and LinkedIn Ads where relevant to the strategy and scope. Campaign execution is connected to landing experience, tracking and the downstream outcome being measured."] },
      { type: "prose", id: "cac", eyebrow: "Economics", h2: "CAC and conversion economics", light: true,
        paragraphs: ["Acquisition decisions should reflect the value and quality of the customer created. Depending on the business, the useful view may connect spend with qualified leads, pipeline, purchases, activation, revenue or another meaningful stage."] },
      { type: "prose", id: "creative", eyebrow: "Creative", h2: "Creative experimentation",
        paragraphs: ["Creative tests are organised around hypotheses such as audience problem, message, proof, offer, format or call to action. The goal is to create a learning loop rather than a high volume of disconnected assets."] },
      { type: "prose", id: "tracking", eyebrow: "Measurement", h2: "Tracking and attribution", light: true,
        paragraphs: ["Tilth reviews conversion events, analytics, funnel definitions and reporting so that teams can distinguish platform-reported activity from business outcomes. Attribution is treated as a decision input, not a claim of perfect certainty."] },
      { type: "prose", id: "funnel", eyebrow: "Funnel", h2: "Funnel optimisation",
        paragraphs: ["If demand is not progressing, the issue may sit in the landing page, form, qualification, onboarding or follow-up. We review the journey before assuming that the answer is more media spend."] },
      { type: "prose", id: "reporting", eyebrow: "Collaboration", h2: "Reporting and collaboration", light: true,
        paragraphs: ["Reviews are designed to explain what changed, what the data suggests and what decision should follow. For distributed teams, documentation and agreed review rhythms help keep the work clear across time zones."] },
      { type: "cards", id: "industries", eyebrow: "Industries", h2: "Relevant industries", compact: true,
        standfirst: "This service is particularly relevant to SaaS, D2C and ecommerce, FinTech and EdTech companies where acquisition quality and conversion economics determine scale.",
        cards: [
          { name: "SaaS", href: "/industries/saas/", regional: "/us/industries/saas/", desc: "Pipeline quality, demos, trials and downstream signals." },
          { name: "D2C & Ecommerce", href: "/industries/d2c-ecommerce/", regional: "/us/industries/d2c-ecommerce/", desc: "Acquisition economics, creative learning and conversion." },
          { name: "FinTech", href: "/industries/fintech/", desc: "Onboarding, verification and activation funnels." },
          { name: "EdTech", href: "/industries/edtech/", desc: "Lead quality and enrolment conversion." }
        ] },
      { type: "steps", id: "process", eyebrow: "How we work", h2: "The Tilth approach", light: true,
        steps: [
          { n: "01", name: "Diagnose", desc: "Review acquisition, measurement, creative, funnel and conversion." },
          { n: "02", name: "Align", desc: "Connect the channel plan, tracking and decision framework." },
          { n: "03", name: "Scale", desc: "Increase investment after performance becomes measurable and repeatable." }
        ],
        cta: { label: "Explore the Tilth approach", href: "/approach/" } },
      { type: "cards", id: "related-services", eyebrow: "Works with", h2: "Related Tilth services", compact: true,
        cards: [
          { name: "Growth Strategy & Measurement", href: "/services/growth-strategy-measurement/", desc: "Funnel definitions, analytics and reporting." },
          { name: "Websites & Conversion Optimisation", href: "/services/website-design-development/", regional: "/us/services/website-cro/", desc: "Landing experience, friction and conversion." }
        ] },
      { type: "insights", id: "insights", eyebrow: "Related insights", h2: "Thinking on accountable paid growth",
        slugs: ["what-is-performance-marketing", "audit-your-ad-spend", "google-ads-vs-meta-ads-startup"],
        cta: { label: "Explore all insights", href: "/insights/" } },
      { type: "faq", id: "faq", eyebrow: "FAQ", h2: "Questions from US teams about performance marketing", light: true,
        faqs: [
          ["What does a performance marketing agency do?", "It plans, manages and improves acquisition programmes around measurable outcomes. The work can include channel strategy, media execution, creative testing, tracking, funnel analysis, reporting and optimisation."],
          ["How is Tilth different from a paid media vendor?", "Tilth looks beyond campaign execution. We connect paid channels with measurement, creative, landing experience and the downstream business or funnel outcome."],
          ["Which platforms can Tilth support?", "Tilth can support Google Ads, Meta Ads and LinkedIn Ads where they fit the strategy and approved scope."],
          ["How does Tilth collaborate with US teams?", "The engagement can combine agreed overlap hours, scheduled reviews, written documentation and asynchronous updates. The operating rhythm is confirmed during setup."],
          ["Can Tilth work with an internal marketing team?", "Yes. Tilth can own a defined workstream, support strategy and measurement or work alongside existing channel and creative teams."],
          ["How is performance reported?", "Reporting is aligned to agreed outcomes and may combine channel metrics with qualified leads, pipeline, purchases, activation or revenue depending on the business."]
        ] }
    ],
    finalCta: {
      h2: "Create a clearer link between media investment and business progress.",
      body: "Share the channels in use, the outcome that matters and where accountability is breaking down. We'll help identify the right place to start.",
      primary: { label: "Discuss Your Performance Strategy", href: "/contact/" }
    }
  },

  {
    key: "us-website-cro",
    region: "us", regionLabel: "United States", regionPath: "/us/",
    kindLabel: "Services", kindPath: "/services/",
    name: "Website & CRO",
    path: "/us/services/website-cro/",
    title: "Website & CRO Agency for US Companies | Tilth",
    description: "Tilth helps US companies improve website strategy, UX, development, analytics, landing pages, accessibility and conversion performance.",
    ogTitle: "Websites and conversion systems built to turn attention into action",
    ogDescription: "Website strategy, UX, development, analytics and conversion optimisation as one connected system.",
    hero: {
      eyebrow: "Websites & CRO for US companies",
      h1: "Websites and conversion systems built to turn attention into action.",
      lede: "Tilth connects website strategy, UX, development, analytics and conversion optimisation so the experience supports the business outcome it was built to create.",
      primary: { label: "Discuss Your Website Project", href: "/contact/" },
      secondary: { label: "See Our Work", href: "/work/" }
    },
    sections: [
      { type: "prose", id: "underperform", eyebrow: "The problem", h2: "Why websites underperform",
        paragraphs: [
          "A website can look polished and still fail to explain the offer, guide the visitor or measure the right actions. Performance often breaks across positioning, information architecture, message continuity, speed, trust, analytics or the path to conversion.",
          "Tilth treats the website as part of the growth system, not a separate design asset."
        ] },
      { type: "prose", id: "strategy", eyebrow: "Strategy", h2: "Website strategy", light: true,
        paragraphs: ["We begin with the audience, offer, user journey, business objective and content requirements. This creates a clearer basis for deciding what pages are needed, what each page should accomplish and how visitors should move through the site."] },
      { type: "prose", id: "ia", eyebrow: "Structure", h2: "Information architecture",
        paragraphs: ["Navigation, page hierarchy and internal links should reflect how users discover and evaluate the business. Tilth plans the relationship between homepage, services, industries, proof, Insights and conversion pages before visual design begins."] },
      { type: "prose", id: "ux", eyebrow: "Design", h2: "UX and interface design", light: true,
        paragraphs: ["The interface should make information easier to understand and action. We focus on hierarchy, readability, interaction, trust and responsive behaviour rather than adding motion without a purpose."] },
      { type: "prose", id: "development", eyebrow: "Build", h2: "Development",
        paragraphs: ["Development should preserve accessibility, performance, SEO foundations and maintainability. The exact technology and implementation model depend on the existing stack and project scope."] },
      { type: "prose", id: "technical-seo", eyebrow: "Foundations", h2: "Technical SEO foundations", light: true,
        paragraphs: ["A new or redesigned site should include crawlable content, logical headings, metadata, canonicals, structured data where appropriate, internal links, XML sitemaps and redirect planning."] },
      { type: "prose", id: "analytics", eyebrow: "Measurement", h2: "Analytics and conversion tracking",
        paragraphs: ["We define the actions the website is expected to influence and implement or improve the measurement required to understand them. This may include form submissions, bookings, signups, downloads, product actions or other agreed events."] },
      { type: "prose", id: "landing", eyebrow: "Pages", h2: "Landing-page optimisation", light: true,
        paragraphs: ["Landing pages should maintain message continuity from the source, answer the key objections and make the next step clear. Tilth can review or build pages around a specific campaign, service, audience or offer."] },
      { type: "prose", id: "testing", eyebrow: "Testing", h2: "Conversion testing",
        paragraphs: ["Testing should begin with a clear hypothesis and enough traffic or evidence to justify the effort. Not every change requires an A/B test; some issues are better addressed through usability, analytics or qualitative review."] },
      { type: "prose", id: "accessibility", eyebrow: "Quality", h2: "Accessibility and performance", light: true,
        paragraphs: ["Readable contrast, keyboard navigation, motion preferences, responsive layouts and fast loading improve the experience for users and reduce technical friction. These are treated as part of the build rather than optional polish."] },
      { type: "cards", id: "industries", eyebrow: "Industries", h2: "Relevant industries", compact: true,
        standfirst: "The service is relevant to SaaS, D2C and ecommerce, FinTech and EdTech companies that depend on the website to explain, convert or activate demand.",
        cards: [
          { name: "SaaS", href: "/industries/saas/", regional: "/us/industries/saas/", desc: "Product explanation, use cases and demo or trial paths." },
          { name: "D2C & Ecommerce", href: "/industries/d2c-ecommerce/", regional: "/us/industries/d2c-ecommerce/", desc: "Product-page experience and checkout friction." },
          { name: "FinTech", href: "/industries/fintech/", desc: "Trust, comprehension and onboarding clarity." },
          { name: "EdTech", href: "/industries/edtech/", desc: "Programme information and enquiry conversion." }
        ] },
      { type: "steps", id: "process", eyebrow: "How we work", h2: "The Tilth process", light: true,
        steps: [
          { n: "01", name: "Diagnose", desc: "Review the audience, journey, content, analytics and conversion issues." },
          { n: "02", name: "Design and build", desc: "Create the structure, interface and technical implementation required." },
          { n: "03", name: "Improve", desc: "Use evidence to refine the pages and conversion journey after launch." }
        ],
        cta: { label: "Explore the Tilth approach", href: "/approach/" } },
      { type: "cards", id: "related-services", eyebrow: "Works with", h2: "Related Tilth services", compact: true,
        cards: [
          { name: "SEO & Content", href: "/services/seo-ai-search/", regional: "/us/services/seo-content-marketing/", desc: "Technical foundations and commercial pages." },
          { name: "Growth Strategy & Measurement", href: "/services/growth-strategy-measurement/", desc: "Funnel definitions, analytics and reporting." }
        ] },
      { type: "insights", id: "insights", eyebrow: "Related insights", h2: "Thinking on websites and conversion",
        slugs: ["shopify-conversion-tracking-ga4-meta-pixel", "ga4-conversion-tracking", "marketing-foundation-audit"],
        cta: { label: "Explore all insights", href: "/insights/" } },
      { type: "faq", id: "faq", eyebrow: "FAQ", h2: "Questions about websites and CRO", light: true,
        faqs: [
          ["Does Tilth design and develop websites?", "Tilth can support website strategy, information architecture, UX, interface design, development and conversion optimisation depending on the project scope and existing technology."],
          ["Can Tilth improve an existing website without rebuilding it?", "Yes. The work can focus on specific pages, analytics, information architecture, conversion issues or landing experiences without requiring a complete rebuild."],
          ["Does website design include SEO?", "Tilth includes core SEO foundations such as crawlable content, heading structure, metadata, canonicals, internal linking, structured data where relevant and redirect planning. Ongoing SEO may require a separate scope."],
          ["What is conversion rate optimisation?", "CRO is the process of improving the experience so more qualified visitors complete a meaningful action. It can use analytics, usability review, research, page changes and testing."],
          ["Does Tilth guarantee a conversion lift?", "No. Conversion performance depends on traffic quality, offer, audience, product, data and implementation. Tilth improves the system and tests evidence-based changes without guaranteeing a fixed result."],
          ["How does Tilth work with US teams?", "The project can use scheduled reviews, agreed overlap hours, documented decisions and asynchronous feedback. The working rhythm is confirmed during project setup."]
        ] }
    ],
    finalCta: {
      h2: "Build a website that supports the growth system around it.",
      body: "Tell us what the website needs to help users understand or do. We'll identify whether the priority is strategy, structure, design, development, measurement or conversion.",
      primary: { label: "Discuss Your Website Project", href: "/contact/" }
    }
  },

  // ------------------------------------------------------------------ US / INDUSTRY
  {
    key: "us-d2c",
    region: "us", regionLabel: "United States", regionPath: "/us/",
    kindLabel: "Industries", kindPath: "/industries/",
    name: "D2C & Ecommerce",
    path: "/us/industries/d2c-ecommerce/",
    title: "Ecommerce Growth Marketing Agency for US Brands | Tilth",
    description: "Tilth helps US ecommerce brands connect paid acquisition, creative testing, website conversion, SEO and measurement for more accountable growth.",
    ogTitle: "Growth marketing for US ecommerce brands focused on profitable scale",
    ogDescription: "Acquisition economics, creative, website conversion, organic discovery and measurement connected.",
    hero: {
      eyebrow: "Ecommerce growth for US brands",
      h1: "Growth marketing for US ecommerce brands focused on profitable scale.",
      lede: "Tilth connects acquisition economics, creative, website conversion, organic discovery and measurement so growth decisions reflect more than revenue reported inside an ad platform.",
      primary: { label: "Discuss Your Ecommerce Growth Strategy", href: "/contact/" },
      secondary: { label: "Explore Relevant Services", href: "/services/" }
    },
    sections: [
      { type: "prose", id: "journey", eyebrow: "The challenge", h2: "Profitable ecommerce growth depends on the whole customer journey.",
        paragraphs: [
          "Paid acquisition can drive revenue while customer acquisition cost rises, creative fatigue accelerates or product pages fail to convert high-intent traffic. The answer is not always more media.",
          "Tilth connects channel performance with creative learning, website behaviour, average order value, new-customer economics and repeat purchase considerations."
        ] },
      { type: "prose", id: "economics", eyebrow: "Economics", h2: "Acquisition economics", light: true,
        paragraphs: ["The useful performance view may combine spend, conversion rate, average order value, contribution, new-customer share and the time it takes for acquisition to create business value. The framework should reflect the brand's margin and repeat-purchase model."] },
      { type: "prose", id: "paid", eyebrow: "Paid", h2: "Paid-media strategy",
        paragraphs: ["Paid channels should be selected and structured around the audience, product, offer and economics. Tilth can support Google, Meta and other approved channels where relevant to the scope."] },
      { type: "prose", id: "creative", eyebrow: "Creative", h2: "Creative testing", light: true,
        paragraphs: ["Creative tests are organised around customer problem, product benefit, proof, offer, format and call to action. The goal is to create useful learning that informs both media and website decisions."] },
      { type: "prose", id: "conversion", eyebrow: "Conversion", h2: "Website and product-page conversion",
        paragraphs: ["The path from campaign to product page should maintain message continuity and answer the objections that influence purchase. We review hierarchy, product information, proof, friction, analytics and the next action."] },
      { type: "prose", id: "seo", eyebrow: "Organic", h2: "SEO and organic discovery", light: true,
        paragraphs: ["Search can support category discovery, product research, comparison and branded demand. The system may include technical SEO, collection and product pages, commercial guides and internal linking."] },
      { type: "prose", id: "retention", eyebrow: "Retention", h2: "Retention considerations",
        paragraphs: ["Even when the engagement does not include full lifecycle execution, acquisition decisions should consider new versus returning customers, repeat purchase, cohort behaviour and the difference between first-order return and longer-term value."] },
      { type: "prose", id: "measurement", eyebrow: "Measurement", h2: "Measurement and reporting", light: true,
        paragraphs: ["Reporting should help the team understand what changed across spend, traffic, product-page behaviour, checkout, purchase, average order value and customer mix. The exact model depends on the available data."] },
      { type: "prose", id: "collaboration", eyebrow: "Working together", h2: "Distributed collaboration",
        paragraphs: ["US ecommerce teams can work with Tilth through agreed review rhythms, shared documentation and structured updates across time zones."] },
      { type: "cards", id: "services", eyebrow: "Services", h2: "Relevant Tilth services", compact: true, light: true,
        cards: [
          { name: "Performance Marketing", href: "/services/performance-marketing/", regional: "/us/services/performance-marketing/", desc: "Paid acquisition, creative testing and funnel analysis." },
          { name: "Websites & CRO", href: "/services/website-design-development/", regional: "/us/services/website-cro/", desc: "Landing pages, product-page experience and conversion." },
          { name: "SEO & Content", href: "/services/seo-ai-search/", regional: "/us/services/seo-content-marketing/", desc: "Technical SEO and organic discovery." },
          { name: "Growth Strategy & Measurement", href: "/services/growth-strategy-measurement/", desc: "Economics, funnel definitions and reporting." }
        ],
        cta: { label: "Explore relevant services", href: "/services/" } },
      { type: "insights", id: "insights", eyebrow: "Related insights", h2: "Thinking on ecommerce growth",
        slugs: ["shopify-conversion-tracking-ga4-meta-pixel", "meta-ads-not-converting", "audit-your-ad-spend"],
        cta: { label: "Explore all insights", href: "/insights/" } },
      { type: "faq", id: "faq", eyebrow: "FAQ", h2: "Questions from US ecommerce teams", light: true,
        faqs: [
          ["What does an ecommerce growth marketing agency do?", "It connects acquisition, creative, website conversion, organic discovery, measurement and retention considerations around the economics of the ecommerce business."],
          ["Can Tilth manage paid media for US ecommerce brands?", "Tilth can support relevant approved paid channels, including strategy, campaign execution, creative testing, tracking and funnel review."],
          ["Can Tilth improve an existing ecommerce website?", "Yes. Tilth can support information architecture, UX, analytics, landing pages, product-page conversion and technical foundations without always requiring a full rebuild."],
          ["How does SEO support ecommerce growth?", "SEO can improve discovery across categories, products, comparisons and educational searches while strengthening technical performance and internal links."],
          ["Which ecommerce metrics matter most?", "The useful metrics depend on the business, but may include customer acquisition cost, conversion rate, average order value, contribution, new versus returning customers and repeat purchase."],
          ["How does Tilth collaborate with US teams?", "The engagement can combine scheduled reviews, agreed overlap hours, written documentation and asynchronous updates based on the team's operating rhythm."]
        ] }
    ],
    finalCta: {
      h2: "Build ecommerce growth around stronger economics and conversion.",
      body: "Tell us where acquisition, creative or website performance is losing efficiency. We'll help identify what should be fixed before more scale.",
      primary: { label: "Discuss Your Ecommerce Growth Strategy", href: "/contact/" }
    }
  }
];

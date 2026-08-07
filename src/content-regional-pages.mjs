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
        slugs: ["first-marketing-hire-startup", "marketing-foundation-audit", "marketing-attribution-explained-simply"],
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
  }
];

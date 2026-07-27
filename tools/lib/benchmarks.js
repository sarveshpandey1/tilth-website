/* ------------------------------------------------------------------
 * Tilth tools — benchmark engine + data (ESM).
 *
 * POLICY (see /tools/benchmarks/ for the human version):
 *  - Only RATE / RATIO metrics (%) are benchmarked. Absolute-currency
 *    metrics (₹ CPC/CPL/CAC) are deliberately excluded — a foreign-currency
 *    figure misleads more than it helps. Add those only when India-sourced.
 *  - Every record cites a real source with a date and a confidence rating.
 *    Nothing is invented. Records marked verificationStatus:'heuristic' are
 *    rules of thumb, NOT sourced benchmarks, and are kept separate.
 *  - Most public data is Global/US; India-specific data is thin and flagged.
 *  - Ranges, never false precision.
 * ------------------------------------------------------------------ */

export const SCHEMA_VERSION = 1;

// direction: 'higher' = higher-is-better, 'lower' = lower-is-better
export const BENCHMARKS = [
  { metric: 'ecommerce_conversion_rate', label: 'Ecommerce conversion rate', businessModel: 'ecommerce', industry: 'all', segment: 'All industries', geography: 'Global', unit: '%', direction: 'higher',
    low: 1.6, median: 2.5, high: 2.9, source: 'Contentsquare via Smart Insights', url: 'https://www.smartinsights.com/ecommerce/ecommerce-analytics/ecommerce-conversion-rates/', date: '2025', confidence: 'medium', verificationStatus: 'verified',
    note: 'Site-wide sessions→purchase. Cross-source range: 1.6% (Statista) to 2.9% (Dynamic Yield).' },
  { metric: 'ecommerce_conversion_rate', label: 'Ecommerce conversion rate — Food & beverage', businessModel: 'ecommerce', industry: 'food_beverage', segment: 'Food & beverage', geography: 'Global', unit: '%', direction: 'higher',
    low: 4.9, median: 5.5, high: 6.2, source: 'Smart Insights', url: 'https://www.smartinsights.com/ecommerce/ecommerce-analytics/ecommerce-conversion-rates/', date: '2025', confidence: 'medium', verificationStatus: 'verified',
    note: 'Low price points and habitual buying lift conversion.' },
  { metric: 'ecommerce_conversion_rate', label: 'Ecommerce conversion rate — Luxury', businessModel: 'ecommerce', industry: 'luxury', segment: 'Luxury & jewelry', geography: 'Global', unit: '%', direction: 'higher',
    low: 0.8, median: 1.1, high: 1.5, source: 'Smart Insights', url: 'https://www.smartinsights.com/ecommerce/ecommerce-analytics/ecommerce-conversion-rates/', date: '2025', confidence: 'medium', verificationStatus: 'verified',
    note: 'High-consideration purchases convert lower.' },

  { metric: 'google_ads_conversion_rate', label: 'Google Ads (search) conversion rate', businessModel: 'all', industry: 'all', segment: 'All industries', geography: 'Global (US-weighted)', unit: '%', direction: 'higher',
    low: 2.55, median: 7.52, high: 14.67, source: 'WordStream', url: 'https://www.wordstream.com/blog/2026-google-ads-benchmarks', date: '2025–2026', confidence: 'med-high', verificationStatus: 'verified',
    sampleSize: '~13,000 campaigns, 23 industries',
    note: 'Landing-page conversion on paid search — distinct from site-wide CVR. US-weighted; India CPCs/CVRs differ.' },

  { metric: 'email_open_rate', label: 'Email open rate', businessModel: 'all', industry: 'all', segment: 'All industries', geography: 'Global', unit: '%', direction: 'higher',
    low: 21, median: 28, high: 34, source: 'Mailchimp', url: 'https://mailchimp.com/resources/email-marketing-benchmarks/', date: '2025', confidence: 'low', verificationStatus: 'verified',
    note: 'Apple Mail Privacy Protection inflates opens — treat as directional only, prefer click rate.' },
  { metric: 'email_click_rate', label: 'Email click-through rate', businessModel: 'all', industry: 'all', segment: 'All industries', geography: 'Global', unit: '%', direction: 'higher',
    low: 2, median: 3, high: 5, source: 'Mailchimp / Salesforce', url: 'https://mailchimp.com/resources/email-marketing-benchmarks/', date: '2025', confidence: 'medium', verificationStatus: 'verified',
    note: 'More reliable than open rate post-MPP.' },

  { metric: 'saas_monthly_churn', label: 'SaaS monthly churn — B2B SMB', businessModel: 'saas', industry: 'all', segment: 'B2B SMB', geography: 'Global', unit: '%', direction: 'lower',
    low: 3, median: 4, high: 5, source: 'Vitally / CustomerGauge', url: 'https://www.vitally.io/post/saas-churn-benchmarks', date: '2025', confidence: 'medium', verificationStatus: 'verified' },
  { metric: 'saas_monthly_churn', label: 'SaaS monthly churn — B2B Mid-market', businessModel: 'saas', industry: 'all', segment: 'B2B Mid-market', geography: 'Global', unit: '%', direction: 'lower',
    low: 1.5, median: 2.25, high: 3, source: 'Vitally / CustomerGauge', url: 'https://www.vitally.io/post/saas-churn-benchmarks', date: '2025', confidence: 'medium', verificationStatus: 'verified' },
  { metric: 'saas_monthly_churn', label: 'SaaS monthly churn — B2B Enterprise', businessModel: 'saas', industry: 'all', segment: 'B2B Enterprise', geography: 'Global', unit: '%', direction: 'lower',
    low: 1, median: 1.5, high: 2, source: 'Vitally / CustomerGauge', url: 'https://www.vitally.io/post/saas-churn-benchmarks', date: '2025', confidence: 'medium', verificationStatus: 'verified',
    note: 'Best-in-class enterprise < 1% monthly.' },
  { metric: 'saas_monthly_churn', label: 'SaaS monthly churn — B2C', businessModel: 'saas', industry: 'all', segment: 'B2C', geography: 'Global', unit: '%', direction: 'lower',
    low: 5, median: 6.7, high: 8, source: 'CustomerGauge', url: 'https://customergauge.com/blog/average-churn-rate-by-industry', date: '2025', confidence: 'medium', verificationStatus: 'verified' },

  { metric: 'b2b_visitor_to_lead', label: 'B2B visitor → lead', businessModel: 'lead', industry: 'all', segment: 'B2B', geography: 'Global', unit: '%', direction: 'higher',
    low: 0.8, median: 2.3, high: 5, source: 'SalesHive / GrowthSpree', url: 'https://saleshive.com/blog/b2b-lead-benchmarks-digital-marketing-gen', date: '2025–2026', confidence: 'medium', verificationStatus: 'verified',
    note: 'Top 10% reach 8–15%.' },
  { metric: 'b2b_mql_to_sql', label: 'B2B MQL → SQL', businessModel: 'lead', industry: 'all', segment: 'B2B', geography: 'Global', unit: '%', direction: 'higher',
    low: 12, median: 13, high: 21, source: 'Data-Mania / GrowthSpree', url: 'https://www.data-mania.com/blog/mql-to-sql-conversion-rate-benchmarks-2025/', date: '2025–2026', confidence: 'medium', verificationStatus: 'verified',
    note: 'Top performers with strong scoring reach ~40%.' },
  { metric: 'b2b_opportunity_to_customer', label: 'B2B opportunity → customer', businessModel: 'lead', industry: 'all', segment: 'B2B', geography: 'Global', unit: '%', direction: 'higher',
    low: 22, median: 26, high: 30, source: 'GrowthSpree', url: 'https://www.growthspreeofficial.com/blogs/b2b-saas-conversion-rate-benchmarks-2026-funnel-stage-vertical', date: '2026', confidence: 'low-medium', verificationStatus: 'verified' },

  // ----- Ecommerce funnel -----
  { metric: 'cart_abandonment_rate', label: 'Cart abandonment rate', businessModel: 'ecommerce', industry: 'all', segment: 'All industries', geography: 'Global', unit: '%', direction: 'lower',
    low: 65, median: 70, high: 78, source: 'Baymard Institute', url: 'https://baymard.com/lists/cart-abandonment-rate', date: '2025', confidence: 'medium', verificationStatus: 'verified',
    sampleSize: 'meta-analysis of ~50 studies',
    note: 'Baymard documents a ~70.2% cross-study average (stable near 70% for years). Lower is better; the band is illustrative around that average, not measured quartiles — vertical spread is wide (~45–91%).' },

  // ----- Landing pages -----
  { metric: 'landing_page_conversion_rate', label: 'Landing page conversion rate', businessModel: 'all', industry: 'all', segment: 'All industries', geography: 'Global (US-weighted)', unit: '%', direction: 'higher',
    low: 3.8, median: 6.6, high: 12.3, source: 'Unbounce Conversion Benchmark Report', url: 'https://unbounce.com/landing-pages/whats-a-good-conversion-rate/', date: '2024 (updated 2025)', confidence: 'medium', verificationStatus: 'verified',
    sampleSize: '41,000 landing pages, 57M conversions',
    note: 'Median 6.6% across industries; low end ~3.8% (SaaS), high ~12.3% (events & entertainment). Distinct from site-wide ecommerce CVR.' },

  // ----- Meta (Facebook / Instagram) ads -----
  { metric: 'meta_ads_ctr', label: 'Meta ads CTR — traffic objective', businessModel: 'all', industry: 'all', segment: 'All industries', geography: 'US', unit: '%', direction: 'higher',
    low: 0.8, median: 1.71, high: 4.13, source: 'WordStream (LocaliQ)', url: 'https://www.wordstream.com/blog/facebook-ads-benchmarks-2025', date: '2024–2025', confidence: 'med-high', verificationStatus: 'verified',
    sampleSize: '554 US campaigns (medians)',
    note: 'Traffic-objective click-through rate, US medians (India differs). Range spans lowest (auto repair ~0.8%) to highest (shopping & gifts ~4.1%) industries.' },
  { metric: 'meta_ads_lead_conversion_rate', label: 'Meta ads conversion rate — leads objective', businessModel: 'lead', industry: 'all', segment: 'All industries', geography: 'US', unit: '%', direction: 'higher',
    low: 3.77, median: 7.72, high: 18.25, source: 'WordStream (LocaliQ)', url: 'https://www.wordstream.com/blog/facebook-ads-benchmarks-2025', date: '2024–2025', confidence: 'medium', verificationStatus: 'verified',
    sampleSize: '726 US campaigns (medians)',
    note: 'Lead-form conversion rate on Meta lead campaigns, US medians. Range from furniture (~3.8%) to restaurants & food (~18.3%).' },

  // ----- SaaS acquisition -----
  { metric: 'saas_trial_to_paid', label: 'SaaS trial → paid — opt-in (no card)', businessModel: 'saas', industry: 'all', segment: 'Opt-in trial (no credit card)', geography: 'Global', unit: '%', direction: 'higher',
    low: 15, median: 18, high: 22, source: 'First Page Sage', url: 'https://firstpagesage.com/seo-blog/saas-free-trial-conversion-rate-benchmarks/', date: '2025', confidence: 'medium', verificationStatus: 'verified',
    note: 'No-card trials ~18% (18.2% organic / 17.4% paid); top quartile 35–45%. A "conversion" here counts a single paid month — weigh with retention.' },
  { metric: 'saas_trial_to_paid', label: 'SaaS trial → paid — opt-out (card required)', businessModel: 'saas', industry: 'all', segment: 'Opt-out trial (credit card required)', geography: 'Global', unit: '%', direction: 'higher',
    low: 45, median: 49, high: 55, source: 'First Page Sage', url: 'https://firstpagesage.com/seo-blog/saas-free-trial-conversion-rate-benchmarks/', date: '2025', confidence: 'medium', verificationStatus: 'verified',
    note: 'Card-required trials ~49% (48.8% organic / 51% paid) — about 2.7× opt-in, but far fewer trials start. Trades trial volume for conversion.' },
  { metric: 'saas_freemium_conversion', label: 'SaaS freemium free → paid', businessModel: 'saas', industry: 'all', segment: 'Freemium self-serve', geography: 'Global', unit: '%', direction: 'higher',
    low: 2, median: 3, high: 5, source: 'First Page Sage', url: 'https://firstpagesage.com/seo-blog/saas-free-trial-conversion-rate-benchmarks/', date: '2025', confidence: 'medium', verificationStatus: 'verified',
    note: 'Free→paid ~2.6–2.8%. Freemium drives sign-up volume but converts low; elite products reach 6–8%.' },

  // Heuristic reference — NOT a sourced benchmark, kept separate on purpose.
  { metric: 'ltv_cac_ratio', label: 'LTV : CAC ratio', businessModel: 'all', industry: 'all', segment: 'General rule of thumb', geography: 'Global', unit: ':1', direction: 'higher',
    low: 1, median: 3, high: 3, source: 'Common industry heuristic', url: '', date: '', confidence: 'reference', verificationStatus: 'heuristic',
    note: 'A 3:1 reference is a rule of thumb, not a measured benchmark. The right target depends on margin, cash, retention, stage and model.' }
];

const CONF_RANK = { high: 4, 'med-high': 3.5, medium: 3, 'low-medium': 2, low: 1, reference: 0.5 };

/**
 * Find the best benchmark for a metric given optional context.
 * Fallback: narrow by industry → businessModel → segment → geography where the
 * context is supplied AND a matching record exists; otherwise keep the broader set.
 * Returns the record plus { matchedOn, fallback } so the UI can disclose fallbacks.
 */
function isWild(v) { return v == null || v === '*' || String(v).toLowerCase() === 'all'; }

export function lookupBenchmark(metric, ctx = {}) {
  let cands = BENCHMARKS.filter(b => b.metric === metric);
  if (!cands.length) return null;
  const keys = ['industry', 'businessModel', 'segment', 'geography'];
  const matchedOn = [];
  for (const k of keys) {
    if (ctx[k] == null || ctx[k] === '') continue;
    const want = String(ctx[k]).toLowerCase();
    const exact = cands.filter(b => b[k] != null && String(b[k]).toLowerCase() === want);
    if (exact.length) { cands = exact; matchedOn.push(k); continue; }
    // no exact match: prefer records that are wildcard/unscoped on this dimension (e.g. 'all')
    const wild = cands.filter(b => isWild(b[k]));
    if (wild.length) cands = wild;    // kept, but not counted as a specific match
  }
  cands = cands.slice().sort((a, b) => (CONF_RANK[b.confidence] || 0) - (CONF_RANK[a.confidence] || 0));
  const best = cands[0];
  // A genuine fallback = the user asked for a specific value on a dimension where the
  // chosen record is neither that value nor a wildcard ('all'). 'all' is a proper match.
  const fallback = keys.some(k => {
    if (ctx[k] == null || ctx[k] === '') return false;
    if (isWild(best[k])) return false;
    return String(best[k]).toLowerCase() !== String(ctx[k]).toLowerCase();
  });
  return { ...best, matchedOn, fallback };
}

/**
 * Classify a value against a benchmark record, oriented by direction.
 * Returns { position: 'below'|'within'|'above', performance: 'weak'|'average'|'strong' }.
 */
export function classifyAgainst(value, bench) {
  if (!bench || !isFinite(value)) return { position: 'unknown', performance: 'unknown' };
  const { low, high, direction } = bench;
  const position = value < low ? 'below' : value > high ? 'above' : 'within';
  let performance;
  if (direction === 'lower') {
    performance = value <= low ? 'strong' : value >= high ? 'weak' : 'average';
  } else {
    performance = value >= high ? 'strong' : value <= low ? 'weak' : 'average';
  }
  return { position, performance };
}

// Distinct metric ids available (for building selectors).
export function benchmarkMetrics() {
  return [...new Set(BENCHMARKS.map(b => b.metric))];
}

/**
 * Score a value 0–100 against a benchmark, oriented by direction.
 * Low end of the range → 40, high (good) end → 100, below the range scales
 * toward 0, above caps at 100. Returns null when it can't be scored.
 */
export function scoreMetric(value, bench) {
  if (!bench || !isFinite(value)) return null;
  const span = (bench.high - bench.low) || 1;
  const t = bench.direction === 'lower' ? (bench.high - value) / span : (value - bench.low) / span;
  return Math.max(0, Math.min(100, 40 + t * 60));
}

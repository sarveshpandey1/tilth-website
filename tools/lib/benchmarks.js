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
export function lookupBenchmark(metric, ctx = {}) {
  let cands = BENCHMARKS.filter(b => b.metric === metric);
  if (!cands.length) return null;
  const keys = ['industry', 'businessModel', 'segment', 'geography'];
  const matchedOn = [];
  for (const k of keys) {
    if (ctx[k] == null || ctx[k] === '') continue;
    const narrowed = cands.filter(b => b[k] != null && String(b[k]).toLowerCase() === String(ctx[k]).toLowerCase());
    if (narrowed.length) { cands = narrowed; matchedOn.push(k); }
  }
  cands = cands.slice().sort((a, b) => (CONF_RANK[b.confidence] || 0) - (CONF_RANK[a.confidence] || 0));
  const best = cands[0];
  const requested = keys.filter(k => ctx[k] != null && ctx[k] !== '');
  const fallback = requested.some(k => !matchedOn.includes(k));
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

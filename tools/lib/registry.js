/* ------------------------------------------------------------------
 * Tilth tools — registry (ESM). One record per tool drives the hub:
 * cards, objective/model filters, and search. Add a tool here (plus its
 * page) — no bespoke hub markup needed.
 * ------------------------------------------------------------------ */

// User objectives (the "what are you trying to solve?" axis).
export const OBJECTIVES = [
  { id: 'diagnose', label: 'Diagnose a problem' },
  { id: 'plan', label: 'Plan & budget' },
  { id: 'optimise', label: 'Optimise conversion' },
  { id: 'experiment', label: 'Run an experiment' },
  { id: 'track', label: 'Track & measure' }
];

// Business models (the second filter axis). 'all' tools show for every model.
export const MODELS = [
  { id: 'ecommerce', label: 'Ecommerce / D2C' },
  { id: 'saas', label: 'SaaS / subscription' },
  { id: 'lead', label: 'Lead generation' }
];

export const TOOLS = [
  {
    id: 'marketing-benchmark-analyser', name: 'Marketing Benchmark Analyser', route: '/tools/marketing-benchmark-analyser/',
    outcome: 'A transparent marketing health score, your biggest problem, and prioritised actions.',
    audience: 'Founders & marketing leads', time: '~3 min', inputs: 'Your key metrics (conversion, churn, LTV:CAC…)',
    benchmarks: true, objective: 'diagnose', models: ['all'], category: 'Diagnose', flagship: true, updated: '2026-07-25'
  },
  {
    id: 'ad-spend-calculator', name: 'Ad Spend Profitability Calculator', route: '/ad-spend-calculator/',
    outcome: 'Break-even ROAS, the most you can profitably pay per customer, and profit after ads.',
    audience: 'Performance marketers', time: '~1–3 min', inputs: 'Order value, margin/costs, CAC',
    benchmarks: false, objective: 'plan', models: ['ecommerce', 'all'], category: 'Plan', updated: '2026-07-25'
  },
  {
    id: 'ltv-cac-calculator', name: 'LTV : CAC Calculator', route: '/tools/ltv-cac-calculator/',
    outcome: 'Lifetime value, LTV:CAC ratio and payback — by business model.',
    audience: 'Founders & growth', time: '~2 min', inputs: 'Order value/ARPA, retention, CAC',
    benchmarks: false, objective: 'plan', models: ['ecommerce', 'saas', 'lead'], category: 'Plan', updated: '2026-07-25'
  },
  {
    id: 'conversion-funnel-calculator', name: 'Conversion Funnel Calculator', route: '/tools/conversion-funnel-calculator/',
    outcome: 'Traffic-to-revenue, and a real multi-stage funnel with the biggest leak found.',
    audience: 'Growth & CRO', time: '~2 min', inputs: 'Stage counts or traffic/CR/AOV',
    benchmarks: false, objective: 'optimise', models: ['ecommerce', 'saas', 'lead'], category: 'Optimise', updated: '2026-07-25'
  },
  {
    id: 'ab-test-calculator', name: 'A/B Test Significance Calculator', route: '/tools/ab-test-calculator/',
    outcome: 'Whether your test result is real: p-value, confidence interval, and a plain verdict.',
    audience: 'CRO & product', time: '~1 min', inputs: 'Visitors & conversions per variant',
    benchmarks: false, objective: 'experiment', models: ['all'], category: 'Experiment', updated: '2026-07-25'
  },
  {
    id: 'utm-builder', name: 'UTM Campaign URL Builder', route: '/tools/utm-builder/',
    outcome: 'Clean, consistently-tagged campaign links so every click is attributable.',
    audience: 'Marketers & agencies', time: '~1 min', inputs: 'Destination URL + campaign fields',
    benchmarks: false, objective: 'track', models: ['all'], category: 'Track', updated: '2026-07-25'
  }
];

function matchesModel(tool, modelId) {
  return !modelId || tool.models.includes('all') || tool.models.includes(modelId);
}

export function filterTools({ objective = '', model = '', query = '' } = {}) {
  const q = query.trim().toLowerCase();
  return TOOLS.filter(t => {
    if (objective && t.objective !== objective) return false;
    if (!matchesModel(t, model)) return false;
    if (q) {
      const hay = (t.name + ' ' + t.outcome + ' ' + t.audience + ' ' + t.category + ' ' + t.inputs).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

export function recentlyUpdated(limit = 3) {
  return TOOLS.slice().sort((a, b) => String(b.updated).localeCompare(String(a.updated))).slice(0, limit);
}

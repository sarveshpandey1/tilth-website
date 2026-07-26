/* ------------------------------------------------------------------
 * Tilth tools — shared calculation engine (pure, framework-free ESM).
 * Every function is pure: inputs in, results out, no DOM, no globals.
 * These are the single source of truth for the tool pages and are
 * pinned by lib/calc.test.js. Keep formulas here, not in page scripts.
 * ------------------------------------------------------------------ */

/* ===== Ad spend profitability ===== */

// Basic: gross margin stands in for all variable cost.
export function adSpendBasic({ aov, marginPct, cac }) {
  const mf = marginPct / 100;
  const grossProfit = aov * mf;
  return {
    breakevenROAS: mf > 0 ? 1 / mf : Infinity,
    maxCAC: grossProfit,          // break-even CAC
    grossProfit,
    headroom: grossProfit - cac,  // + profit / − loss per order
    currentROAS: cac > 0 ? aov / cac : 0,
    profitable: grossProfit - cac >= 0
  };
}

// Advanced: full contribution margin with returns & discounts.
export function adSpendAdvanced({ sp, pc, ship, ful, gwPct, platPct, discPct, retPct, cac, dmPct }) {
  const netPrice = sp * (1 - discPct / 100);
  const fees = netPrice * gwPct / 100 + netPrice * platPct / 100;
  const varCost = pc + ship + ful + fees;
  const contribKept = netPrice - varCost;
  const r = retPct / 100;
  const returnCost = ship + ful + fees;               // product recovered on a return
  const effContrib = (1 - r) * contribKept - r * returnCost;
  const realizedRev = (1 - r) * netPrice;
  const beCac = effContrib;
  const tgtCac = effContrib - (dmPct / 100) * realizedRev;

  // isolate the drag of returns and of discounts
  const returnsDrag = contribKept - effContrib;
  const fees0 = sp * gwPct / 100 + sp * platPct / 100;
  const contribKept0 = sp - (pc + ship + ful + fees0);
  const effContrib0 = (1 - r) * contribKept0 - r * (ship + ful + fees0);
  const discountDrag = effContrib0 - effContrib;

  return {
    netPrice, varCost, fees, contribKept, effContrib, realizedRev,
    beCac, tgtCac,
    beRoas: beCac > 0 ? realizedRev / beCac : Infinity,
    tgtRoas: tgtCac > 0 ? realizedRev / tgtCac : Infinity,
    profitAfterAd: effContrib - cac,
    returnsDrag, discountDrag
  };
}

/* ===== LTV : CAC — one function per business model ===== */

export function ltvEcom({ aov, marginPct, freq, years, cac }) {
  const per = aov * (marginPct / 100);
  const ltv = per * freq * years;
  const mGP = per * freq / 12;
  return { ltv, cac, ratio: cac > 0 ? ltv / cac : Infinity, payback: mGP > 0 ? cac / mGP : Infinity, allowableCAC: ltv / 3 };
}

export function ltvSaas({ arpa, marginPct, churnPct, expansionPct = 0, cac }) {
  const net = Math.max(churnPct / 100 - expansionPct / 100, 0.005);
  const mGP = arpa * (marginPct / 100);
  const life = 1 / net;
  const ltv = mGP * life;
  return { ltv, cac, ratio: cac > 0 ? ltv / cac : Infinity, payback: mGP > 0 ? cac / mGP : Infinity, lifetimeMonths: life, allowableCAC: ltv / 3 };
}

export function ltvLead({ cpl, convPct, grossProfit, multiplier }) {
  const conv = convPct / 100;
  const cac = conv > 0 ? cpl / conv : Infinity;
  const ltv = grossProfit * multiplier;
  return { ltv, cac, ratio: (isFinite(cac) && cac > 0) ? ltv / cac : Infinity, allowableCPL: (ltv / 3) * conv, allowableCAC: ltv / 3 };
}

export function ltvMarket({ atv, takePct, txPerYear, years, cac }) {
  const per = atv * (takePct / 100);
  const ltv = per * txPerYear * years;
  const mGP = per * txPerYear / 12;
  return { ltv, cac, ratio: cac > 0 ? ltv / cac : Infinity, payback: mGP > 0 ? cac / mGP : Infinity, allowableCAC: ltv / 3 };
}

/* ===== A/B test significance (two-proportion z-test) ===== */

export function erf(x) {
  const s = x < 0 ? -1 : 1; x = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * x);
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
  return s * y;
}
export function normCdf(z) { return 0.5 * (1 + erf(z / Math.SQRT2)); }

export function abTest({ nA, cA, nB, cB }) {
  nA = Math.max(1, Math.round(nA)); nB = Math.max(1, Math.round(nB));
  cA = Math.min(nA, Math.max(0, Math.round(cA)));
  cB = Math.min(nB, Math.max(0, Math.round(cB)));
  const pA = cA / nA, pB = cB / nB;
  const pooled = (cA + cB) / (nA + nB);
  const seTest = Math.sqrt(pooled * (1 - pooled) * (1 / nA + 1 / nB));
  const z = seTest > 0 ? (pB - pA) / seTest : 0;
  const pValue = seTest > 0 ? Math.max(0, Math.min(1, 2 * (1 - normCdf(Math.abs(z))))) : 1;
  const seDiff = Math.sqrt(pA * (1 - pA) / nA + pB * (1 - pB) / nB);
  const diff = (pB - pA) * 100;
  return {
    rateA: pA, rateB: pB,
    uplift: pA > 0 ? (pB - pA) / pA * 100 : (pB > 0 ? Infinity : 0),
    z, pValue, confidence: (1 - pValue) * 100,
    ciLow: diff - 1.96 * seDiff * 100,
    ciHigh: diff + 1.96 * seDiff * 100,
    significant: pValue < 0.05,
    minConversions: Math.min(cA, cB),
    split: nA / (nA + nB)
  };
}

/* ===== Conversion funnel ===== */

export function funnelSimple({ visitors, crPct, aov, goal }) {
  const cr = crPct / 100;
  const orders = visitors * cr;
  const revenue = orders * aov;
  return {
    orders, revenue, annual: revenue * 12,
    visitorsNeeded: (aov * cr) > 0 ? goal / (aov * cr) : Infinity,
    crNeeded: (visitors * aov) > 0 ? goal / (visitors * aov) * 100 : Infinity
  };
}

// counts: array of stage totals (top → bottom). valuePerConv applies to the last stage.
export function funnelStages(counts, valuePerConv = 0) {
  const n = counts.length;
  const rates = [];
  let worstIdx = -1, worstRate = Infinity;
  for (let i = 1; i < n; i++) {
    const p = counts[i - 1];
    const rate = p > 0 ? counts[i] / p : 0;
    if (p > 0) rates.push(rate);
    if (p > 0 && rate < worstRate) { worstRate = rate; worstIdx = i; }
  }
  const first = counts[0], last = counts[n - 1];
  const overall = first > 0 ? last / first * 100 : 0;
  let medianRate = null, newLast = last, impactGain = 0;
  if (worstIdx > 0 && rates.length >= 2 && worstRate > 0) {
    const sorted = rates.slice().sort((a, b) => a - b);
    medianRate = sorted[Math.floor(sorted.length / 2)];
    if (medianRate > worstRate) { newLast = last * (medianRate / worstRate); impactGain = newLast - last; }
  }
  return { rates, worstIdx, worstRate, overall, revenue: last * valuePerConv, first, last, medianRate, newLast, impactGain };
}

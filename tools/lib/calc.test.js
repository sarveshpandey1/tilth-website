/* ------------------------------------------------------------------
 * Tests for the shared calculation engine.  Run:  npm test  (from tools/)
 * or:  node --test  (from tools/lib/).  Node 18+ built-in test runner.
 * Documented expected-value cases for ecommerce, SaaS, B2B lead-gen and
 * mobile, plus edge cases (zero, division-by-zero, clamping).
 * ------------------------------------------------------------------ */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  adSpendBasic, adSpendAdvanced,
  ltvEcom, ltvSaas, ltvLead, ltvMarket,
  abTest, funnelSimple, funnelStages
} from './calc.js';
import { formatNumber, formatCurrency, inr } from './format.js';

const near = (a, b, eps = 0.01) => assert.ok(Math.abs(a - b) <= eps, `${a} not within ${eps} of ${b}`);

/* ---- Ad spend ---- */
test('adSpendBasic — break-even at exactly CAC', () => {
  const r = adSpendBasic({ aov: 2000, marginPct: 40, cac: 800 });
  near(r.breakevenROAS, 2.5); near(r.maxCAC, 800); near(r.headroom, 0);
  assert.equal(r.profitable, true);
});
test('adSpendBasic — zero margin does not produce NaN', () => {
  const r = adSpendBasic({ aov: 2000, marginPct: 0, cac: 800 });
  assert.equal(r.breakevenROAS, Infinity); near(r.maxCAC, 0);
});
test('adSpendAdvanced — full contribution economics (documented case)', () => {
  const r = adSpendAdvanced({ sp: 2000, pc: 700, ship: 80, ful: 40, gwPct: 2, platPct: 0, discPct: 10, retPct: 8, cac: 400, dmPct: 15 });
  near(r.netPrice, 1800); near(r.varCost, 856); near(r.contribKept, 944);
  near(r.effContrib, 856); near(r.beCac, 856); near(r.tgtCac, 607.6, 0.5);
  near(r.beRoas, 1.9346, 0.001); near(r.tgtRoas, 2.725, 0.01);
  near(r.profitAfterAd, 456); near(r.returnsDrag, 88); near(r.discountDrag, 180);
});
test('adSpendAdvanced — costs exceed revenue → negative contribution, no crash', () => {
  const r = adSpendAdvanced({ sp: 1000, pc: 1200, ship: 50, ful: 20, gwPct: 2, platPct: 0, discPct: 0, retPct: 0, cac: 100, dmPct: 10 });
  assert.ok(r.effContrib < 0); assert.equal(r.beRoas, Infinity);
});

/* ---- LTV : CAC (four business models) ---- */
test('ltvEcom — documented case', () => {
  const r = ltvEcom({ aov: 2000, marginPct: 45, freq: 3, years: 2, cac: 900 });
  near(r.ltv, 5400); near(r.ratio, 6); near(r.payback, 4); near(r.allowableCAC, 1800);
});
test('ltvSaas — churn sets lifetime; documented case', () => {
  const r = ltvSaas({ arpa: 2000, marginPct: 80, churnPct: 4, expansionPct: 0, cac: 9000 });
  near(r.lifetimeMonths, 25); near(r.ltv, 40000); near(r.ratio, 4.444, 0.01); near(r.payback, 5.625, 0.01);
});
test('ltvSaas — expansion above churn is floored (no blow-up)', () => {
  const r = ltvSaas({ arpa: 2000, marginPct: 80, churnPct: 4, expansionPct: 5, cac: 9000 });
  near(r.lifetimeMonths, 200); assert.ok(isFinite(r.ltv));
});
test('ltvLead — CAC derived from CPL and close rate; documented case', () => {
  const r = ltvLead({ cpl: 300, convPct: 20, grossProfit: 4000, multiplier: 1.5 });
  near(r.cac, 1500); near(r.ltv, 6000); near(r.ratio, 4); near(r.allowableCPL, 400);
});
test('ltvMarket — take rate is the margin; documented case', () => {
  const r = ltvMarket({ atv: 1500, takePct: 15, txPerYear: 6, years: 2, cac: 1200 });
  near(r.ltv, 2700); near(r.ratio, 2.25); near(r.payback, 10.667, 0.01);
});

/* ---- A/B test ---- */
test('abTest — significant result (documented case)', () => {
  const r = abTest({ nA: 1500, cA: 75, nB: 1500, cB: 105 });
  near(r.rateA, 0.05, 1e-9); near(r.rateB, 0.07, 1e-9);
  near(r.uplift, 40, 0.001); near(r.pValue, 0.0211, 0.002);
  assert.equal(r.significant, true);
  near(r.ciLow, 0.30, 0.05); near(r.ciHigh, 3.70, 0.05);
});
test('abTest — not significant', () => {
  const r = abTest({ nA: 1000, cA: 50, nB: 1000, cB: 58 });
  assert.equal(r.significant, false); assert.ok(r.ciLow < 0 && r.ciHigh > 0);
});
test('abTest — zero conversions in both, no NaN', () => {
  const r = abTest({ nA: 500, cA: 0, nB: 500, cB: 0 });
  assert.equal(r.pValue, 1); assert.ok(!Number.isNaN(r.pValue));
});
test('abTest — conversions above visitors are clamped', () => {
  const r = abTest({ nA: 500, cA: 400, nB: 500, cB: 99999 });
  near(r.rateB, 1, 1e-9);
});

/* ---- Funnel ---- */
test('funnelSimple — documented case', () => {
  const r = funnelSimple({ visitors: 10000, crPct: 2.5, aov: 1500, goal: 500000 });
  near(r.orders, 250); near(r.revenue, 375000); near(r.visitorsNeeded, 13333.33, 0.5); near(r.crNeeded, 3.3333, 0.001);
});
test('funnelStages — ecommerce funnel + weakest-step impact', () => {
  const r = funnelStages([10000, 4000, 1200, 600, 300, 90], 1500);
  near(r.overall, 0.9); near(r.worstRate, 0.3, 1e-9); assert.equal(r.worstIdx, 2);
  near(r.revenue, 135000); near(r.medianRate, 0.4, 1e-9); near(r.impactGain, 30);
});
test('funnelStages — B2B/SaaS funnel', () => {
  const r = funnelStages([8000, 800, 400, 160, 60, 18], 0);
  near(r.overall, 0.225, 0.001); near(r.worstRate, 0.1, 1e-9); assert.equal(r.worstIdx, 1);
});
test('funnelStages — mobile funnel (worst step = activation→purchase)', () => {
  const r = funnelStages([20000, 6000, 3000, 1500, 300, 180], 0);
  near(r.overall, 0.9); near(r.worstRate, 0.2, 1e-9); assert.equal(r.worstIdx, 4);
});
test('funnelStages — a zero stage does not divide by zero', () => {
  const r = funnelStages([1000, 0, 500], 0);
  assert.ok(!Number.isNaN(r.overall)); assert.equal(r.worstIdx, 1);
});

/* ---- Formatting ---- */
test('formatNumber — Indian numbering', () => {
  assert.equal(formatNumber(100000, 'en-IN'), '1,00,000');
  assert.equal(formatNumber(10000000, 'en-IN'), '1,00,00,000');
});
test('formatCurrency — symbols and grouping', () => {
  assert.equal(formatCurrency(150000, 'INR'), '₹1,50,000');
  assert.equal(formatCurrency(1000, 'USD'), '$1,000');
  assert.equal(inr(200000), '2,00,000');
});
test('formatCurrency — infinite guarded', () => {
  assert.equal(formatCurrency(Infinity, 'INR'), '₹∞');
});

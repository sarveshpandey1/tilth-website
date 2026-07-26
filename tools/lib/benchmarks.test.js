/* Tests for the benchmark engine. Run: npm test (from tools/). */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lookupBenchmark, classifyAgainst, benchmarkMetrics, BENCHMARKS } from './benchmarks.js';

test('every benchmark record has the required provenance fields', () => {
  for (const b of BENCHMARKS) {
    for (const f of ['metric', 'label', 'unit', 'direction', 'low', 'median', 'high', 'source', 'confidence', 'verificationStatus']) {
      assert.ok(b[f] !== undefined, `${b.metric} missing ${f}`);
    }
    assert.ok(b.low <= b.median && b.median <= b.high, `${b.label}: range not ordered`);
    assert.ok(['higher', 'lower'].includes(b.direction));
  }
});

test('lookupBenchmark narrows by segment and reports an exact match', () => {
  const r = lookupBenchmark('saas_monthly_churn', { segment: 'B2B Enterprise' });
  assert.equal(r.segment, 'B2B Enterprise');
  assert.equal(r.fallback, false);
  assert.deepEqual(r.matchedOn, ['segment']);
});

test('lookupBenchmark falls back and flags it when the requested segment is absent', () => {
  const r = lookupBenchmark('saas_monthly_churn', { segment: 'B2B Series Z' });
  assert.ok(r, 'should still return a broader record');
  assert.equal(r.fallback, true);          // requested segment did not match
  assert.ok(!r.matchedOn.includes('segment'));
});

test('lookupBenchmark returns null for an unknown metric', () => {
  assert.equal(lookupBenchmark('made_up_metric', {}), null);
});

test('lookupBenchmark narrows ecommerce CVR by industry', () => {
  const r = lookupBenchmark('ecommerce_conversion_rate', { industry: 'luxury' });
  assert.equal(r.industry, 'luxury'); assert.equal(r.fallback, false);
});

test('classifyAgainst — higher-is-better metric', () => {
  const b = { low: 1.6, high: 2.9, direction: 'higher' };
  assert.deepEqual(classifyAgainst(3.5, b), { position: 'above', performance: 'strong' });
  assert.deepEqual(classifyAgainst(1.0, b), { position: 'below', performance: 'weak' });
  assert.deepEqual(classifyAgainst(2.2, b), { position: 'within', performance: 'average' });
});

test('classifyAgainst — lower-is-better metric (churn) inverts performance', () => {
  const b = { low: 1, high: 2, direction: 'lower' };
  assert.deepEqual(classifyAgainst(0.5, b), { position: 'below', performance: 'strong' }); // low churn = good
  assert.deepEqual(classifyAgainst(3, b), { position: 'above', performance: 'weak' });     // high churn = bad
});

test('the LTV:CAC reference is flagged as a heuristic, not a sourced benchmark', () => {
  const r = lookupBenchmark('ltv_cac_ratio', {});
  assert.equal(r.verificationStatus, 'heuristic');
});

test('benchmarkMetrics returns distinct metric ids', () => {
  const m = benchmarkMetrics();
  assert.equal(new Set(m).size, m.length);
  assert.ok(m.includes('ecommerce_conversion_rate') && m.includes('saas_monthly_churn'));
});

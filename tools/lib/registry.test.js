/* Tests for the tool registry. Run: npm test (from tools/). */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TOOLS, OBJECTIVES, filterTools, recentlyUpdated } from './registry.js';

test('every tool has the card fields the hub needs', () => {
  for (const t of TOOLS) {
    for (const f of ['id', 'name', 'route', 'outcome', 'audience', 'time', 'inputs', 'objective', 'models', 'category', 'updated']) {
      assert.ok(t[f] !== undefined && t[f] !== '', `${t.id} missing ${f}`);
    }
    assert.ok(Array.isArray(t.models) && t.models.length);
    assert.ok(OBJECTIVES.some(o => o.id === t.objective), `${t.id}: unknown objective ${t.objective}`);
  }
});

test('exactly one flagship tool', () => {
  assert.equal(TOOLS.filter(t => t.flagship).length, 1);
});

test('filterTools — by objective', () => {
  const r = filterTools({ objective: 'experiment' });
  assert.ok(r.length && r.every(t => t.objective === 'experiment'));
});

test('filterTools — model filter includes "all" tools', () => {
  const r = filterTools({ model: 'saas' });
  assert.ok(r.some(t => t.id === 'ab-test-calculator'));   // models:['all'] shows for SaaS
  assert.ok(r.some(t => t.id === 'ltv-cac-calculator'));   // explicitly includes saas
});

test('filterTools — model filter excludes model-specific mismatches', () => {
  // conversion-funnel is [ecommerce,saas,lead] — a made-up model should drop it,
  // but 'all' tools remain.
  const r = filterTools({ model: 'nonexistent' });
  assert.ok(r.every(t => t.models.includes('all')));
});

test('filterTools — search matches name/outcome/inputs', () => {
  assert.ok(filterTools({ query: 'churn' }).length === 0 || filterTools({ query: 'ltv' }).some(t => t.id === 'ltv-cac-calculator'));
  assert.ok(filterTools({ query: 'utm' }).some(t => t.id === 'utm-builder'));
  assert.equal(filterTools({ query: 'zzzznotathing' }).length, 0);
});

test('recentlyUpdated returns at most the limit', () => {
  assert.ok(recentlyUpdated(3).length <= 3);
});

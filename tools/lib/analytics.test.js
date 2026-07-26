/* Tests for privacy-safe analytics helpers. Run: npm test (from tools/). */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { track, trackOnce, scoreBand, band } from './analytics.js';

test('track never throws, even with no window/gtag', () => {
  assert.doesNotThrow(() => track('tool_viewed', { tool: 'x' }));
});

test('trackOnce never throws', () => {
  assert.doesNotThrow(() => { trackOnce('k', 'e', {}); trackOnce('k', 'e', {}); });
});

test('scoreBand — thresholds', () => {
  assert.equal(scoreBand(85), 'healthy');
  assert.equal(scoreBand(60), 'mixed');
  assert.equal(scoreBand(30), 'weak');
  assert.equal(scoreBand(NaN), 'na');
});

test('band — buckets a value into a coarse label (no raw value leaks)', () => {
  const edges = [1000, 5000, 20000];
  assert.equal(band(500, edges), '<1000');
  assert.equal(band(3000, edges), '<5000');
  assert.equal(band(99999, edges), '>=20000');
  assert.equal(band(NaN, edges), 'na');
  // the label never contains the raw input value
  assert.ok(!band(3247, edges).includes('3247'));
});

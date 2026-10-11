/* Tilth tools — the shared worksheet runtime.
 *
 * Ported from the frozen Master Design Release designs
 * "TOOLS/Tilth Tool Template - Ad Spend Calculator.dc.html" and
 * "TOOLS/Tilth Tool Template - Benchmark Analyser.dc.html", per
 * TOOLS_DESIGN_REPORT.md §6 and §7.
 *
 * One file carries the UI kit and all six tool scripts, dispatched by the
 * [data-tool-key] on the worksheet root, because every tool shares the same
 * shell: field, mode tabs, currency, readout, verdict, metric row, dock.
 *
 * THE MATHS ARE NOT HERE. Every figure comes from tools/lib/{calc,format,
 * benchmarks,analytics}.js, imported below and pinned by lib/*.test.js (49
 * tests). No formula, threshold, clamp bound, statistical method, rounding
 * rule or benchmark value is reimplemented, moved or changed in this file.
 *
 * Each TOOL_INIT block is the live production page script. Per report §6 the
 * only differences from the previous build are presentational:
 *   1. selectors — .field__val .pre -> [data-pre], .tkm -> [data-tab][data-m],
 *      .mgroup -> [data-mgroup], .calc-cta .btn -> [data-cta-btn];
 *   2. the verdict class becomes data-state (the same four states);
 *   3. KIT.put sets the engine's exact string, then puts currency symbols, oo,
 *      x, - and -> in the mono face and adds <wbr> after digit-group
 *      separators. textContent is unchanged;
 *   4. two accessibility additions — aria-disabled on the remove-stage button
 *      at the 2-stage minimum, and a polite status region echoing "Copied";
 *   5. the analyser prints each scored row's source/date/geography/confidence,
 *      all of which already exist in BENCHMARKS.
 *
 * Analytics are the existing contract, unchanged: tool_viewed, tool_started,
 * business_model_selected, result_viewed, scenario_changed, currency_changed,
 * cta_clicked, with banded parameters only. The A/B calculator deliberately
 * emits nothing, exactly as the live page does. No reset, share or A/B event
 * exists, so none is invented.
 *
 * Prototype-only code is not ported: the .dc runtime, reviewState, reviewTool,
 * reviewCurrency, reviewRange, reviewRoute, reviewFill and the QA probes.
 */
import {
  adSpendBasic, adSpendAdvanced,
  ltvEcom, ltvSaas, ltvLead, ltvMarket,
  abTest, funnelSimple, funnelStages
} from "/tools/lib/calc.js";
import { CURRENCIES, formatCurrency, formatNumber } from "/tools/lib/format.js";
import { lookupBenchmark, classifyAgainst, scoreMetric } from "/tools/lib/benchmarks.js";
import { track, trackOnce, band, scoreBand } from "/tools/lib/analytics.js";

// ================= TOOL UI KIT — presentation only =================
// Nothing here computes, rounds or formats a figure: every number comes from the
// library functions above, as a string, exactly as the live tools produce it.
// The kit only (a) sets glyphs Syne lacks or garbles in the mono face, (b) adds
// line-break opportunities after digit-group commas so extreme values wrap
// instead of overflowing, (c) maps a verdict class to a data-state, (d) drives
// the slider fill and the mobile result dock.
const KIT = {
  GLYPH: /(AED |S\$|A\$|₹|\$|£|€|∞|×|−|→)/,
  put(el, text){
    if (!el) return;
    el.textContent = text;
    KIT.keep(el);
    KIT.glyphs(el);
  },
  // keep a statistic and its value on one line ("p = 0.021" never breaks at "=")
  keep(el){
    const t = el.firstChild;
    if (!t || t.nodeType !== 3) return;
    const m = /p = \S+/.exec(t.nodeValue);
    if (!m) return;
    const after = t.splitText(m.index);
    after.splitText(m[0].length);
    const s = document.createElement('span'); s.setAttribute('data-keep', '');
    after.parentNode.replaceChild(s, after); s.appendChild(after);
  },
  glyphs(el){
    const re = /(AED |S\$|A\$|₹|\$|£|€|∞|×|−|→)/g;
    const nodes = [];
    const walk = n => { if (n.nodeType === 3) nodes.push(n); else if (!(n.hasAttribute && n.hasAttribute('data-g'))) n.childNodes.forEach(walk); };
    walk(el);
    nodes.forEach(n => {
      const t = n.nodeValue;
      if (!re.test(t) && !/\d[,.]\d{3}/.test(t)) return;
      re.lastIndex = 0;
      const frag = document.createDocumentFragment();
      t.split(re).forEach((part, i) => {
        if (!part) return;
        if (i % 2 === 1){ const s = document.createElement('span'); s.setAttribute('data-g', ''); s.textContent = part; frag.appendChild(s); return; }
        // break opportunity after each digit-group separator — comma, or the de-DE
        // dot used for EUR (no characters added)
        part.split(/(?<=\d,)(?=\d)|(?<=\d\.)(?=\d{3}(?:\D|$))/).forEach((chunk, j) => { if (j) frag.appendChild(document.createElement('wbr')); frag.appendChild(document.createTextNode(chunk)); });
      });
      n.parentNode.replaceChild(frag, n);
    });
  },
  // live tools set className 'verdict good' / 'tk-verdict warn'; the v3 readout
  // carries the same four states as data-state (shape + colour + state word)
  state(el, s){ if (el) el.setAttribute('data-state', s); },
  fill(r){
    if (!r) return;
    const min = parseFloat(r.min), max = parseFloat(r.max), v = parseFloat(r.value);
    const p = max > min ? Math.max(0, Math.min(100, (v - min) / (max - min) * 100)) : 0;
    r.style.setProperty('--fill', p.toFixed(2) + '%');
  },
  fillAll(root){ [].slice.call((root || document).querySelectorAll('input[type=range]')).forEach(KIT.fill); },
  // ---- mobile result dock: echoes the primary result while the inputs are in view
  dockSet(state, k, v){
    const d = document.querySelector('[data-dock]');
    if (!d) return;
    d.setAttribute('data-state', state || 'neutral');
    const kk = d.querySelector('[data-dock-k] span:last-child'), vv = d.querySelector('[data-dock-v]');
    if (kk) kk.textContent = k || '';
    if (vv) KIT.put(vv, v || '');
  },
  // on below 1024 only while an input panel is in view and no result panel is;
  // measured per scroll frame (deterministic, no observer bookkeeping)
  dockWatch(){
    const d = document.querySelector('[data-dock]');
    if (!d || KIT._dockBound) return;
    KIT._dockBound = true;
    d.hidden = false;
    const visible = e => e.offsetParent !== null && !e.closest('[hidden]');
    const band = (e, top, bot) => { const r = e.getBoundingClientRect(), vh = innerHeight; return r.top < vh * bot && r.bottom > vh * top; };
    const upd = () => {
      const ins = [].slice.call(document.querySelectorAll('[data-inputs]')).filter(visible);
      const outs = [].slice.call(document.querySelectorAll('[data-readout]')).filter(visible);
      const on = innerWidth < 1024 && ins.some(e => band(e, .2, .7)) && !outs.some(e => band(e, .12, .85));
      if (on) d.setAttribute('data-on', ''); else d.removeAttribute('data-on');
      d.setAttribute('aria-hidden', on ? 'false' : 'true');
      const a = d.querySelector('a');
      if (a){ a.tabIndex = on ? 0 : -1; if (outs[0] && outs[0].id) a.setAttribute('href', '#' + outs[0].id); }
    };
    let raf = 0;
    addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; upd(); }); }, {passive:true});
    addEventListener('resize', upd, {passive:true});
    KIT._dockUpd = upd;
    upd();
  },
  dockTargets(){ if (KIT._dockUpd) KIT._dockUpd(); }
,
  // ---- constrained-value messages. The limits passed in are the page script's
  // OWN clamps (num()/av()/val()/pos()); this only reports what the result is
  // calculated with — the value the visitor typed is never changed.
  fmt(n){ return Number(n).toLocaleString('en-US', {maximumFractionDigits: 2}); },
  clampMsg(raw, min, max){
    const v = parseFloat(raw);
    if (String(raw).trim() === '') return 'Empty — the result uses ' + KIT.fmt(min) + ', the minimum.';
    if (isNaN(v)) return 'Not a number — the result uses ' + KIT.fmt(min) + ', the minimum.';
    if (max != null && v > max) return 'Maximum is ' + KIT.fmt(max) + ' — the result uses ' + KIT.fmt(max) + '.';
    if (v < min) return 'Minimum is ' + KIT.fmt(min) + ' — the result uses ' + KIT.fmt(min) + '.';
    return '';
  },
  note(el, msg){
    if (!el) return;
    const m = document.getElementById(el.id + '-msg') || el.__msg;
    if (m && m.textContent !== msg) m.textContent = msg;
    el.setAttribute('aria-invalid', msg ? 'true' : 'false');
    const f = el.closest('[data-field]'); if (f) { if (msg) f.setAttribute('data-limited', ''); else f.removeAttribute('data-limited'); }
  },
  limits(map){
    Object.keys(map).forEach(id => {
      const el = document.getElementById(id); if (!el) return;
      const lim = map[id];
      const upd = () => KIT.note(el, KIT.clampMsg(el.value, lim[0], lim[1]));
      el.addEventListener('input', upd);
      const r = document.getElementById(id + '_r'); if (r) r.addEventListener('input', upd);
      upd();
    });
  },
  // currency-dependent wording in explanations follows the selected currency
  CUR_WORD: { INR: 'rupee', USD: 'dollar', GBP: 'pound', EUR: 'euro', AED: 'dirham', SGD: 'dollar', AUD: 'dollar' },
  curText(code){
    const c = CURRENCIES[code] || CURRENCIES.INR;
    document.querySelectorAll('[data-cur1]').forEach(e => { e.textContent = c.symbol + '1'; });
    document.querySelectorAll('[data-curword]').forEach(e => { e.textContent = KIT.CUR_WORD[code] || 'unit'; });
  }
};

const TOOL_INIT = {};

TOOL_INIT['ad-spend'] = function () {
  track('tool_viewed', { tool: 'ad-spend' });
  var aov = document.getElementById('aov'), aovR = document.getElementById('aov_r');
  var margin = document.getElementById('margin'), marginR = document.getElementById('margin_r');
  var cac = document.getElementById('cac'), cacR = document.getElementById('cac_r');
  var roasEl = document.getElementById('roas'), maxcacEl = document.getElementById('maxcac');
  var vEl = document.getElementById('verdict'), vK = document.getElementById('verdict_k'),
      vH = document.getElementById('verdict_h'), vD = document.getElementById('verdict_d');

  var curSel = document.getElementById('cur');
  var cur = 'INR';
  try { var _s = localStorage.getItem('tilth-cur'); if (_s && CURRENCIES[_s]) cur = _s; } catch (e) {}
  curSel.value = cur;
  function money(n) { return formatCurrency(n, cur); }
  function updateSymbols() { var sym = CURRENCIES[cur].symbol; document.querySelectorAll('[data-pre]').forEach(function (p) { p.textContent = sym; }); KIT.curText(cur); }

  function num(el, min, max) {
    var v = parseFloat(el.value);
    if (isNaN(v)) v = min;
    return Math.max(min, Math.min(max, v));
  }

  function sync(a, b) { // keep number + range in step (clamped to the range's bounds for the slider)
    b.value = Math.max(parseFloat(b.min), Math.min(parseFloat(b.max), parseFloat(a.value) || 0));
    KIT.fill(b);
  }

  var basicDock = ['neutral', 'Your verdict', ''];
  function render() {
    var A = num(aov, 0, 1e9), M = num(margin, 1, 99), C = num(cac, 0, 1e9);
    var r = adSpendBasic({ aov: A, marginPct: M, cac: C });

    KIT.put(roasEl, r.breakevenROAS.toFixed(r.breakevenROAS >= 10 ? 0 : 1));
    KIT.put(maxcacEl, money(r.maxCAC));

    if (C <= 0) {
      KIT.state(vEl, 'neutral');
      vK.textContent = 'Your verdict';
      KIT.put(vH, 'Enter your cost per customer');
      vD.textContent = 'Add what you currently pay to acquire a customer to see whether you’re above or below breakeven.';
      basicDock = ['neutral', vK.textContent, vH.textContent]; dock();
      return;
    }
    if (r.headroom >= 0) {
      KIT.state(vEl, 'good');
      vK.textContent = 'Profitable';
      KIT.put(vH, money(r.headroom) + ' profit per order');
      vD.textContent = 'At ' + money(C) + ' per customer you clear breakeven. Your current ROAS is about ' +
        r.currentROAS.toFixed(1) + '× vs a ' + r.breakevenROAS.toFixed(1) + '× breakeven — there’s room to scale, if the tracking behind these numbers is sound.';
    } else {
      KIT.state(vEl, 'bad');
      vK.textContent = 'Underwater';
      KIT.put(vH, 'Losing ' + money(-r.headroom) + ' per order');
      vD.textContent = 'At ' + money(C) + ' per customer you’re paying more than the ' + money(r.maxCAC) +
        ' you make in margin. Your ROAS is about ' + r.currentROAS.toFixed(1) + '× but you need ' +
        r.breakevenROAS.toFixed(1) + '× to break even. More spend just loses faster.';
    }
    basicDock = [vEl.getAttribute('data-state'), vK.textContent, vH.textContent]; dock();
  }

  // wire number <-> range pairs
  [[aov, aovR], [margin, marginR], [cac, cacR]].forEach(function (pair) {
    var n = pair[0], rg = pair[1];
    rg.addEventListener('input', function () { n.value = rg.value; KIT.fill(rg); render(); });
    n.addEventListener('input', function () { sync(n, rg); render(); });
  });
  [aov, margin, cac].forEach(function (el) { el.addEventListener('input', function () { trackOnce('adspend-started', 'tool_started', { tool: 'ad-spend' }); }); });

  updateSymbols();
  render();

  // ===== ADVANCED MODE — full contribution-margin economics =====
  var advIds = ['sp','pc','ship','ful','gw','plat','disc','ret','acac','dm'];
  var A2 = {};
  advIds.forEach(function (id) { A2[id] = document.getElementById(id); });
  var a_verdict = document.getElementById('a_verdict'), a_vk = document.getElementById('a_vk'), a_vh = document.getElementById('a_vh'), a_vd = document.getElementById('a_vd');
  var a_contrib = document.getElementById('a_contrib'), a_contribExp = document.getElementById('a_contribExp');
  var a_beCac = document.getElementById('a_beCac'), a_tgtCac = document.getElementById('a_tgtCac'), a_dmEcho = document.getElementById('a_dmEcho');
  var a_beRoas = document.getElementById('a_beRoas'), a_tgtRoas = document.getElementById('a_tgtRoas');
  var a_net = document.getElementById('a_net'), a_breakdown = document.getElementById('a_breakdown');

  function av(id, min, max) { var v = parseFloat(A2[id].value); if (isNaN(v)) v = min; return Math.max(min, Math.min(max, v)); }
  function roasFmt(x) { return isFinite(x) && x > 0 ? x.toFixed(x >= 10 ? 0 : 1) : '—'; }

  var advDock = ['neutral', '', ''];
  function renderAdv() {
    var sp = av('sp',0,1e9), pc = av('pc',0,1e9), ship = av('ship',0,1e9), ful = av('ful',0,1e9),
        gw = av('gw',0,100), plat = av('plat',0,100), disc = av('disc',0,95), ret = av('ret',0,100),
        acac = av('acac',0,1e9), dm = av('dm',0,99);
    var res = adSpendAdvanced({ sp: sp, pc: pc, ship: ship, ful: ful, gwPct: gw, platPct: plat, discPct: disc, retPct: ret, cac: acac, dmPct: dm });

    KIT.put(a_contrib, money(res.contribKept));
    var contribPct = res.netPrice > 0 ? Math.round(res.contribKept / res.netPrice * 100) : 0;
    a_contribExp.textContent = '≈ ' + contribPct + '% of net revenue. After a ' + Math.round(ret) + '% return rate, effective contribution is ' + money(res.effContrib) + ' per acquired order — that’s what your CAC comes out of.';
    KIT.put(a_beCac, money(res.beCac));
    KIT.put(a_tgtCac, money(res.tgtCac));
    a_dmEcho.textContent = Math.round(dm);
    KIT.put(a_beRoas, roasFmt(res.beRoas));
    KIT.put(a_tgtRoas, roasFmt(res.tgtRoas));
    KIT.put(a_net, money(res.netPrice));
    a_breakdown.textContent = 'Net revenue ' + money(res.netPrice) + ' − variable costs ' + money(res.varCost) +
      ' (product ' + money(pc) + ', shipping ' + money(ship) + ', fulfilment ' + money(ful) + ', fees ' + money(res.fees) + ') = ' + money(res.contribKept) +
      ' contribution. Returns cost ' + money(res.returnsDrag) + '/order; discounts cost ' + money(res.discountDrag) + '/order.';

    if (res.effContrib <= 0) {
      KIT.state(a_verdict, 'bad'); a_vk.textContent = 'Underwater before ad spend';
      KIT.put(a_vh, 'No room for CAC');
      a_vd.textContent = 'Your costs, discounts and returns already eat the whole order — effective contribution is ' + money(res.effContrib) + '. There’s nothing left to pay for acquisition. Fix the unit economics before spending on ads.';
    } else if (res.profitAfterAd >= 0) {
      KIT.state(a_verdict, 'good'); a_vk.textContent = 'Profitable after ads';
      KIT.put(a_vh, money(res.profitAfterAd) + ' profit per order');
      a_vd.textContent = 'At ' + money(acac) + ' CAC you clear the ' + money(res.beCac) + ' break-even. To hit a ' + Math.round(dm) + '% margin you’d keep CAC under ' + money(Math.max(0, res.tgtCac)) + '. Break-even ROAS is ' + roasFmt(res.beRoas) + '×.';
    } else {
      KIT.state(a_verdict, 'bad'); a_vk.textContent = 'Losing money after ads';
      KIT.put(a_vh, 'Losing ' + money(-res.profitAfterAd) + ' per order');
      a_vd.textContent = 'Your ' + money(acac) + ' CAC is above the ' + money(res.beCac) + ' break-even. You need CAC under ' + money(res.beCac) + ' just to stop losing money, and under ' + money(Math.max(0, res.tgtCac)) + ' to hit a ' + Math.round(dm) + '% margin.';
    }
    advDock = [a_verdict.getAttribute('data-state'), a_vk.textContent, a_vh.textContent]; dock();
  }
  advIds.forEach(function (id) { A2[id].addEventListener('input', function () { trackOnce('adspend-started', 'tool_started', { tool: 'ad-spend' }); renderAdv(); }); });

  // ===== MODE TOGGLE =====
  var basicMode = document.getElementById('basicMode'), advMode = document.getElementById('advMode');
  var mBasic = document.getElementById('mBasic'), mAdv = document.getElementById('mAdv');
  var isAdv = false;
  function dock() { var d = isAdv ? advDock : basicDock; KIT.dockSet(d[0], d[1], d[2]); }
  function setMode(adv) {
    isAdv = adv;
    advMode.hidden = !adv; basicMode.hidden = adv;
    mAdv.setAttribute('aria-selected', adv ? 'true' : 'false');
    mBasic.setAttribute('aria-selected', adv ? 'false' : 'true');
    if (adv) renderAdv();
    dock(); KIT.dockTargets();
  }
  mBasic.addEventListener('click', function () { setMode(false); });
  mAdv.addEventListener('click', function () { setMode(true); });

  // ===== CURRENCY =====
  curSel.addEventListener('change', function () {
    cur = CURRENCIES[curSel.value] ? curSel.value : 'INR';
    try { localStorage.setItem('tilth-cur', cur); } catch (e) {}
    updateSymbols(); render(); renderAdv();
    track('currency_changed', { tool: 'ad-spend', currency: cur });
  });

  // ===== CTA analytics =====
  var ctaBtn = document.querySelector('[data-cta-btn]');
  if (ctaBtn) ctaBtn.addEventListener('click', function () { track('cta_clicked', { tool: 'ad-spend', cta: 'measurement' }); });

  renderAdv();
  // the live script's own clamps — num(aov,0,1e9) … av('dm',0,99) — reported, never changed
  KIT.limits({ aov: [0, 1e9], margin: [1, 99], cac: [0, 1e9], sp: [0, 1e9], pc: [0, 1e9], ship: [0, 1e9], ful: [0, 1e9], gw: [0, 100], plat: [0, 100], disc: [0, 95], ret: [0, 100], acac: [0, 1e9], dm: [0, 99] });
  KIT.fillAll(); dock();
};

// ---- /tools/ltv-cac-calculator/ — the live page script; logic, strings, the
// page-local sensitivity layer, clamps and analytics unchanged. Selectors and the
// verdict-state hook only. Formulas: ltvEcom / ltvSaas / ltvLead / ltvMarket.
TOOL_INIT['ltv-cac'] = function () {
  var model = 'ecom';
  function el(id) { return document.getElementById(id); }
  function num(id, min, max) { var e = el(id); if (!e) return min; var v = parseFloat(e.value); if (isNaN(v)) v = min; if (max == null) max = 1e12; return Math.max(min, Math.min(max, v)); }

  // ===== currency =====
  var curSel = el('cur');
  var cur = 'INR';
  try { var _s = localStorage.getItem('tilth-cur'); if (_s && CURRENCIES[_s]) cur = _s; } catch (e) {}
  curSel.value = cur;
  function money(n) { return formatCurrency(n, cur); }
  function updateSymbols() { var sym = CURRENCIES[cur].symbol; document.querySelectorAll('[data-pre]').forEach(function (p) { p.textContent = sym; }); }

  var ltvEl = el('ltv'), ratioEl = el('ratio'), allowEl = el('allow'), ltvExp = el('ltvExp'),
      pbK = el('paybackK'), pbEl = el('payback'), pbUnit = el('paybackUnit'), pbExp = el('paybackExp'),
      confBadge = el('confBadge'), sensExp = el('sensExp'), modelSub = el('modelSub'),
      vEl = el('verdict'), vk = el('vk'), vh = el('vh'), vd = el('vd');

  var SUB = {
    ecom: 'Gross-margin economics for a repeat-purchase business.',
    saas: 'Subscription economics — churn sets the customer lifetime.',
    lead: 'Lead-driven economics — CAC is derived from cost per lead and close rate.',
    market: 'Transaction economics — your take rate is the margin.'
  };
  var LTVEXP = {
    ecom: 'Order value × margin × purchases per year × lifespan.',
    saas: 'Monthly gross profit ÷ churn — the value of a subscriber over their expected lifetime.',
    lead: 'Average customer gross profit × your lifetime-value multiplier.',
    market: 'Take rate × transaction value × transactions × lifespan.'
  };

  function compute() {
    if (model === 'saas') {
      var arpa = num('arpa', 0), m = num('smargin', 1, 99), ch = num('churn', 0.1, 100), ex = num('expansion', 0, 100), cac = num('scac', 1);
      var core = ltvSaas({ arpa: arpa, marginPct: m, churnPct: ch, expansionPct: ex, cac: cac });
      var mGP = arpa * (m / 100);
      var ltvWorse = mGP * (1 / Math.max((ch * 1.2 - ex) / 100, 0.005));
      return Object.assign(core, { ltvWorse: ltvWorse, lever: '20% higher churn', horizon: core.lifetimeMonths, hi: 36, hTxt: Math.round(core.lifetimeMonths) + '-month lifetime' });
    }
    if (model === 'lead') {
      var cpl = num('cpl', 0), conv = num('conv', 0.1, 100), gp = num('gp', 0), rep = num('repeat', 0.1, 20);
      var core = ltvLead({ cpl: cpl, convPct: conv, grossProfit: gp, multiplier: rep });
      return Object.assign(core, { ltvWorse: core.ltv * 0.8, lever: '20% less repeat value', horizon: rep, hi: 2, hTxt: rep.toFixed(1) + '× repeat value', lead: true, conv: conv / 100 });
    }
    if (model === 'market') {
      var atv = num('atv', 0), take = num('take', 0.1, 100), tx = num('txyr', 0.1, 1e4), y = num('myears', 0.1, 20), cac = num('mcac', 1);
      var core = ltvMarket({ atv: atv, takePct: take, txPerYear: tx, years: y, cac: cac });
      return Object.assign(core, { ltvWorse: core.ltv * 0.8, lever: 'a 20% shorter lifespan', horizon: y, hi: 2.5, hTxt: y.toFixed(1) + '-year lifespan' });
    }
    var aov = num('aov', 0), m2 = num('margin', 1, 99), f = num('freq', 0.1, 52), y2 = num('years', 0.1, 20), cac2 = num('cac', 1);
    var coreE = ltvEcom({ aov: aov, marginPct: m2, freq: f, years: y2, cac: cac2 });
    return Object.assign(coreE, { ltvWorse: coreE.ltv * 0.8, lever: 'a 20% shorter lifespan', horizon: y2, hi: 2.5, hTxt: y2.toFixed(1) + '-year lifespan' });
  }

  function render() {
    var c = compute();
    var ltv = c.ltv, cac = c.cac;
    var ratio = c.ratio;
    var payback = c.payback;

    KIT.put(ltvEl, money(ltv));
    KIT.put(ratioEl, isFinite(ratio) ? ratio.toFixed(1) : '∞');
    allowEl.textContent = money(c.allowableCAC);
    ltvExp.textContent = LTVEXP[model];
    modelSub.textContent = SUB[model];

    if (c.lead) {
      pbK.textContent = 'Allowable cost per lead (3:1)';
      KIT.put(pbEl, money(c.allowableCPL)); pbUnit.textContent = '';
      pbExp.textContent = 'The most you can pay per lead and still hit a 3:1 LTV:CAC at your ' + Math.round(c.conv * 100) + '% close rate. Derived CAC: ' + money(cac) + '.';
    } else {
      pbK.textContent = 'Payback period';
      KIT.put(pbEl, isFinite(payback) ? payback.toFixed(1) : '∞'); pbUnit.textContent = ' mo';
      pbExp.textContent = 'Months of gross profit to earn back CAC. Shorter means less cash tied up.';
    }

    var ratioWorse = (isFinite(cac) && cac > 0) ? c.ltvWorse / cac : Infinity;
    var ratioCacDown = (isFinite(cac) && cac > 0) ? ltv / (cac * 0.8) : Infinity;
    var lower = c.horizon > c.hi;
    confBadge.textContent = lower ? 'Lower' : 'Reasonable';
    confBadge.setAttribute('data-badge', confBadge.textContent);
    sensExp.textContent = 'With ' + c.lever + ', the ratio falls to ' + (isFinite(ratioWorse) ? ratioWorse.toFixed(1) : '∞') + ':1; if CAC dropped 20% it rises to ' + (isFinite(ratioCacDown) ? ratioCacDown.toFixed(1) : '∞') + ':1. Confidence is ' + (lower ? 'lower — the LTV leans on a ' + c.hTxt + ' you must verify.' : 'reasonable, though LTV is still a projection — measure retention to trust it.');

    if (!isFinite(ratio) || ratio >= 3) {
      KIT.state(vEl, 'good'); vk.textContent = 'Above the 3:1 reference';
      KIT.put(vh, (isFinite(ratio) ? ratio.toFixed(1) : '∞') + ':1');
      vd.textContent = 'You recover well above what you spend to acquire a customer' + (isFinite(payback) ? ', with payback in ~' + payback.toFixed(1) + ' months' : '') + '. Whether that means "spend more" depends on your cash position and how firm the retention behind it is.';
    } else if (ratio >= 1) {
      KIT.state(vEl, 'warn'); vk.textContent = 'Positive, but thin';
      KIT.put(vh, ratio.toFixed(1) + ':1');
      vd.textContent = 'You make money over a customer’s life, but you sit below the common 3:1 reference and the margin for error is small. Lift margin, retention, or cut CAC before scaling spend.';
    } else {
      KIT.state(vEl, 'bad'); vk.textContent = 'Underwater';
      KIT.put(vh, ratio.toFixed(1) + ':1');
      vd.textContent = 'Lifetime value (' + money(ltv) + ') is below your ' + money(cac) + ' acquisition cost — you lose money per customer even counting repeats. The economics have to change before more spend.';
    }
    KIT.dockSet(vEl.getAttribute('data-state'), vk.textContent, vh.textContent);

    trackOnce('ltv-started', 'tool_started', { tool: 'ltv-cac' });
    trackOnce('ltv-result-' + model, 'result_viewed', { tool: 'ltv-cac', model: model, ratio_band: isFinite(ratio) ? band(ratio, [1, 3, 5]) : '>=5' });
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-tab][data-m]'), function (b) {
    b.addEventListener('click', function () {
      model = b.getAttribute('data-m');
      Array.prototype.forEach.call(document.querySelectorAll('[data-tab][data-m]'), function (x) { var on = x === b; x.setAttribute('aria-selected', on ? 'true' : 'false'); });
      Array.prototype.forEach.call(document.querySelectorAll('[data-mgroup]'), function (g) { g.hidden = g.getAttribute('data-model') !== model; });
      updateSymbols();
      render();
      track('business_model_selected', { tool: 'ltv-cac', model: model });
    });
  });
  Array.prototype.forEach.call(document.querySelectorAll('[data-mgroup] input[type="number"]'), function (i) { i.addEventListener('input', render); });
  ['aov', 'margin', 'freq', 'years', 'cac'].forEach(function (id) {
    var n = el(id), r = el(id + '_r');
    if (n && r) {
      r.addEventListener('input', function () { n.value = r.value; KIT.fill(r); render(); });
      n.addEventListener('input', function () { r.value = Math.max(parseFloat(r.min), Math.min(parseFloat(r.max), parseFloat(n.value) || 0)); KIT.fill(r); });
    }
  });

  curSel.addEventListener('change', function () {
    cur = CURRENCIES[curSel.value] ? curSel.value : 'INR';
    try { localStorage.setItem('tilth-cur', cur); } catch (e) {}
    updateSymbols();
    render();
    track('currency_changed', { tool: 'ltv-cac', currency: cur });
  });
  var _cta = document.querySelector('[data-cta-btn]');
  if (_cta) _cta.addEventListener('click', function () { track('cta_clicked', { tool: 'ltv-cac', cta: 'foundation' }); });

  track('tool_viewed', { tool: 'ltv-cac' });
  updateSymbols();
  render();
  // num(id, min, max = 1e12) as the live script calls it
  KIT.limits({ aov: [0, 1e12], margin: [1, 99], freq: [0.1, 52], years: [0.1, 20], cac: [1, 1e12], arpa: [0, 1e12], smargin: [1, 99], churn: [0.1, 100], expansion: [0, 100], scac: [1, 1e12], cpl: [0, 1e12], conv: [0.1, 100], gp: [0, 1e12], repeat: [0.1, 20], atv: [0, 1e12], take: [0.1, 100], txyr: [0.1, 1e4], myears: [0.1, 20], mcac: [1, 1e12] });
  KIT.fillAll();
};

// ---- /tools/conversion-funnel-calculator/ — the live page script; logic, the four
// presets, add/remove rules, the window-level render handles, strings and
// analytics unchanged. Selectors, verdict-state hook and leak tag only.
// Formulas: funnelSimple / funnelStages.
TOOL_INIT['conversion-funnel'] = function () {
  // ===== shared currency state (used by both modes) =====
  var curSel = document.getElementById('cur');
  var cur = 'INR';
  try { var _s = localStorage.getItem('tilth-cur'); if (_s && CURRENCIES[_s]) cur = _s; } catch (e) {}
  curSel.value = cur;
  function money(n) { return formatCurrency(n, cur); }
  function count(n) { return formatNumber(n, CURRENCIES[cur].locale); }
  function updateSymbols() { var sym = CURRENCIES[cur].symbol; document.querySelectorAll('[data-pre]').forEach(function (p) { p.textContent = sym; }); }

  track('tool_viewed', { tool: 'conversion-funnel' });
  var isStages = false, simpleDock = ['neutral', '', ''], stagesDock = ['neutral', '', ''];
  function dock() { var d = isStages ? stagesDock : simpleDock; KIT.dockSet(d[0], d[1], d[2]); }

  (function () {
    var ids = ['visitors', 'cr', 'aov'];
    var el = {};
    ids.forEach(function (id) { el[id] = document.getElementById(id); el[id + '_r'] = document.getElementById(id + '_r'); });
    var goal = document.getElementById('goal');
    var ordersEl = document.getElementById('orders'), revEl = document.getElementById('revenue'), annualEl = document.getElementById('annual');
    var visNeeded = document.getElementById('visNeeded'), visDelta = document.getElementById('visDelta');
    var crNeeded = document.getElementById('crNeeded'), crDelta = document.getElementById('crDelta');

    function val(id, min, max) { var v = parseFloat(el[id].value); if (isNaN(v)) v = min; return Math.max(min, Math.min(max, v)); }

    window._funnelRenderSimple = render;
    function render() {
      var V = val('visitors', 1, 1e9), CR = val('cr', 0.01, 100), A = val('aov', 1, 1e9);
      var G = parseFloat(goal.value); if (isNaN(G) || G < 1) G = 1;
      var r = funnelSimple({ visitors: V, crPct: CR, aov: A, goal: G });
      KIT.put(ordersEl, count(r.orders));
      KIT.put(revEl, money(r.revenue));
      annualEl.textContent = money(r.annual);
      KIT.put(visNeeded, count(r.visitorsNeeded));
      KIT.put(crNeeded, isFinite(r.crNeeded) ? r.crNeeded.toFixed(2) : '∞');

      var vNeed = r.visitorsNeeded, crNeed = r.crNeeded;
      var vMult = V > 0 ? vNeed / V : 0;
      visDelta.textContent = vNeed <= V
        ? 'You already have the traffic — you\'re ' + count(V - vNeed) + ' visitors clear of the goal.'
        : 'That\'s about ' + vMult.toFixed(1) + '× your current traffic (' + count(vNeed - V) + ' more visitors/month).';
      crDelta.textContent = crNeed <= CR
        ? 'Below your current ' + CR.toFixed(2) + '% — the goal is within reach as you are.'
        : 'Up from your current ' + CR.toFixed(2) + '% — a ' + (crNeed - CR).toFixed(2) + '-point lift, usually cheaper than buying the extra traffic.';
      simpleDock = ['neutral', 'Revenue per month', revEl.textContent]; dock();

      trackOnce('funnel-simple-started', 'tool_started', { tool: 'conversion-funnel', mode: 'simple' });
      trackOnce('funnel-simple-result', 'result_viewed', { tool: 'conversion-funnel', mode: 'simple', revenue_band: band(r.revenue, [50000, 500000, 5000000]) });
    }

    ids.forEach(function (id) {
      var n = el[id], r = el[id + '_r'];
      r.addEventListener('input', function () { n.value = r.value; KIT.fill(r); render(); });
      n.addEventListener('input', function () { r.value = Math.max(parseFloat(r.min), Math.min(parseFloat(r.max), parseFloat(n.value) || 0)); KIT.fill(r); render(); });
    });
    goal.addEventListener('input', render);
    render();
  })();

  (function () {
    var TPL = {
      ecom: [['Sessions',10000],['Product views',4000],['Add to cart',1200],['Checkout',600],['Purchase',300],['Repeat purchase',90]],
      b2b:  [['Visitors',8000],['Leads',800],['MQLs',400],['SQLs',160],['Opportunities',60],['Customers',18]],
      app:  [['Ad clicks',20000],['Installs',6000],['Registrations',3000],['Activations',1500],['Purchases',300],['Retained users',180]],
      lead: [['Traffic',5000],['Enquiries',500],['Qualified leads',250],['Appointments',100],['Customers',30]]
    };
    var listEl = document.getElementById('stageList');
    if (!listEl) return;
    var stages = TPL.ecom.map(function (s) { return { name: s[0], count: s[1] }; });

    function renderList() {
      listEl.innerHTML = '';
      stages.forEach(function (s, i) {
        var row = document.createElement('div'); row.className = 'stage-row'; row.setAttribute('data-stage', '');
        var name = document.createElement('input'); name.className = 'sname'; name.type = 'text'; name.value = s.name; name.setAttribute('aria-label', 'Stage ' + (i + 1) + ' name');
        name.addEventListener('input', function () { s.name = name.value; compute(); });
        var count = document.createElement('input'); count.className = 'scount'; count.type = 'number'; count.min = '0'; count.step = '1'; count.value = s.count; count.inputMode = 'numeric'; count.setAttribute('aria-label', s.name + ' count');
        // constrained-value message (presentation): the live rule is max(0, value || 0)
        var msg = document.createElement('p'); msg.setAttribute('data-fmsg', ''); msg.id = 'scount' + i + '-msg'; msg.setAttribute('aria-live', 'polite');
        count.id = 'scount' + i; count.setAttribute('aria-describedby', msg.id); count.__msg = msg;
        count.addEventListener('input', function () { s.count = Math.max(0, parseFloat(count.value) || 0); KIT.note(count, KIT.clampMsg(count.value, 0, null)); compute(); });
        var conv = document.createElement('div'); conv.className = 'sconv'; conv.id = 'conv' + i; conv.setAttribute('data-sconv', '');
        var rm = document.createElement('button'); rm.className = 'srm'; rm.type = 'button'; rm.innerHTML = '×'; rm.title = 'Remove stage'; rm.setAttribute('aria-label', 'Remove ' + s.name);
        // presentation of the existing guard: at 2 stages the button reads as unavailable
        if (stages.length <= 2) rm.setAttribute('aria-disabled', 'true');
        rm.addEventListener('click', function () { if (stages.length > 2) { stages.splice(i, 1); renderList(); compute(); } });
        row.appendChild(name); row.appendChild(count); row.appendChild(conv); row.appendChild(rm); row.appendChild(msg);
        listEl.appendChild(row);
      });
    }

    window._funnelRenderStages = compute;
    function compute() {
      var rows = listEl.querySelectorAll('.stage-row');
      var counts = stages.map(function (s) { return s.count; });
      var val = Math.max(0, parseFloat(document.getElementById('fval').value) || 0);
      var r = funnelStages(counts, val);

      for (var i = 0; i < stages.length; i++) {
        var conv = document.getElementById('conv' + i);
        rows[i].classList.remove('leak');
        if (i === 0) { conv.textContent = 'top of funnel'; continue; }
        var prev = stages[i - 1].count, cur = stages[i].count;
        var rate = prev > 0 ? cur / prev : 0;
        conv.textContent = (rate * 100).toFixed(1) + '% · −' + Math.round(prev > 0 ? (1 - rate) * 100 : 0) + '%';
      }
      if (r.worstIdx > 0) {
        rows[r.worstIdx].classList.add('leak');
        // the leak is also named in text, not only by colour (the readout's own label)
        var tag = document.createElement('span'); tag.setAttribute('data-leaktag', ''); tag.textContent = '· Biggest leak';
        document.getElementById('conv' + r.worstIdx).appendChild(tag);
      }

      KIT.put(document.getElementById('f_overall'), r.overall.toFixed(2));
      KIT.put(document.getElementById('f_rev'), money(r.revenue));

      var lk = document.getElementById('f_leak'), lkd = document.getElementById('f_leakd'), fv = document.getElementById('f_verdict');
      if (r.worstIdx > 0) {
        KIT.put(lk, stages[r.worstIdx - 1].name + ' → ' + stages[r.worstIdx].name + ' (' + (r.worstRate * 100).toFixed(1) + '%)');
        lkd.textContent = 'This step loses the largest share of people relative to the one before it. Fixing the biggest leak usually beats pouring more traffic in at the top.';
        KIT.state(fv, 'bad');
      } else { KIT.put(lk, '—'); lkd.textContent = 'Enter at least two stages with counts.'; KIT.state(fv, 'neutral'); }

      var impact = document.getElementById('f_impact'), impactExp = document.getElementById('f_impactExp');
      if (r.impactGain > 0 && r.medianRate != null) {
        KIT.put(impact, '+' + count(r.impactGain));
        impactExp.textContent = 'If ' + stages[r.worstIdx - 1].name + '→' + stages[r.worstIdx].name + ' improved from ' + (r.worstRate * 100).toFixed(1) + '% to the funnel median ' + (r.medianRate * 100).toFixed(1) + '%, final conversions rise from ' + count(r.last) + ' to ' + count(r.newLast) + ' — about +' + money(r.impactGain * val) + ' from the same traffic.';
      } else if (r.worstIdx > 0 && r.rates.length >= 2) {
        KIT.put(impact, '—');
        impactExp.textContent = 'Your weakest step is already at or above the funnel median — the next gain is likely elsewhere, or needs a step-change rather than a tweak.';
      } else { KIT.put(impact, '—'); impactExp.textContent = 'Add more stages to model an improvement.'; }
      stagesDock = [fv.getAttribute('data-state'), 'Biggest leak', lk.textContent]; dock();

      trackOnce('funnel-stages-started', 'tool_started', { tool: 'conversion-funnel', mode: 'stages' });
      trackOnce('funnel-stages-result', 'result_viewed', { tool: 'conversion-funnel', mode: 'stages', revenue_band: band(r.revenue, [50000, 500000, 5000000]) });
    }

    Array.prototype.forEach.call(document.querySelectorAll('#ftpl [data-tab]'), function (b) {
      b.addEventListener('click', function () {
        Array.prototype.forEach.call(document.querySelectorAll('#ftpl [data-tab]'), function (x) { x.setAttribute('aria-selected', x === b ? 'true' : 'false'); });
        stages = TPL[b.getAttribute('data-t')].map(function (s) { return { name: s[0], count: s[1] }; });
        renderList(); compute();
      });
    });
    document.getElementById('addStage').addEventListener('click', function () { stages.push({ name: 'New stage', count: Math.round((stages[stages.length - 1].count || 100) * 0.5) }); renderList(); compute(); });
    document.getElementById('fval').addEventListener('input', compute);
    renderList(); compute();

    // ===== SIMPLE / FUNNEL TOGGLE =====
    var simpleMode = document.getElementById('simpleMode'), funnelMode = document.getElementById('funnelMode');
    var mSimple = document.getElementById('mSimple'), mFunnel = document.getElementById('mFunnel');
    function setFMode(fn) {
      isStages = fn;
      funnelMode.hidden = !fn; simpleMode.hidden = fn;
      mFunnel.setAttribute('aria-selected', fn ? 'true' : 'false'); mSimple.setAttribute('aria-selected', fn ? 'false' : 'true');
      if (fn) compute();
      dock(); KIT.dockTargets();
    }
    mSimple.addEventListener('click', function () { setFMode(false); track('scenario_changed', { tool: 'conversion-funnel', mode: 'simple' }); });
    mFunnel.addEventListener('click', function () { setFMode(true); track('scenario_changed', { tool: 'conversion-funnel', mode: 'stages' }); });
  })();

  // ===== currency + CTA (module scope in the live page, after both modes are wired) =====
  updateSymbols();
  curSel.addEventListener('change', function () {
    cur = CURRENCIES[curSel.value] ? curSel.value : 'INR';
    try { localStorage.setItem('tilth-cur', cur); } catch (e) {}
    updateSymbols();
    if (window._funnelRenderSimple) window._funnelRenderSimple();
    if (window._funnelRenderStages) window._funnelRenderStages();
    track('currency_changed', { tool: 'conversion-funnel', currency: cur });
  });
  var _cta = document.querySelector('[data-cta-btn]');
  if (_cta) _cta.addEventListener('click', function () { track('cta_clicked', { tool: 'conversion-funnel', cta: 'measurement' }); });
  // val('visitors',1,1e9) · val('cr',0.01,100) · val('aov',1,1e9) · goal (NaN or <1 → 1) · fval max(0, v || 0)
  KIT.limits({ visitors: [1, 1e9], cr: [0.01, 100], aov: [1, 1e9], goal: [1, null], fval: [0, null] });
  KIT.fillAll(); dock();
};

// ---- /tools/ab-test-calculator/ — the live page script. Logic, guard order
// (<30 conversions first), the sample-ratio sentence and formatting unchanged.
// The live page emits NO analytics; neither does this port. Formula: abTest.
TOOL_INIT['ab-test'] = function () {
  var nA = document.getElementById('nA'), cA = document.getElementById('cA'),
      nB = document.getElementById('nB'), cB = document.getElementById('cB');
  var rAEl = document.getElementById('rA'), rBEl = document.getElementById('rB'), upEl = document.getElementById('uplift');
  var pvalEl = document.getElementById('pval'), confLineEl = document.getElementById('confLine'),
      ciLowEl = document.getElementById('ciLow'), ciHighEl = document.getElementById('ciHigh');
  var vEl = document.getElementById('verdict'), vk = document.getElementById('vk'), vh = document.getElementById('vh'), vd = document.getElementById('vd');

  function pos(el, min) { var v = parseFloat(el.value); if (isNaN(v) || v < min) v = min; return v; }
  function fmtP(p) { return p < 0.001 ? '<0.001' : p.toFixed(3); }
  function pp(x) { return (x >= 0 ? '+' : '') + x.toFixed(2); }

  function render() {
    var r = abTest({ nA: pos(nA, 1), cA: pos(cA, 0), nB: pos(nB, 1), cB: pos(cB, 0) });

    KIT.put(rAEl, (r.rateA * 100).toFixed(2));
    KIT.put(rBEl, (r.rateB * 100).toFixed(2));
    KIT.put(upEl, isFinite(r.uplift) ? (r.uplift >= 0 ? '+' : '') + r.uplift.toFixed(1) : '∞');
    KIT.put(pvalEl, fmtP(r.pValue));
    confLineEl.textContent = 'Confidence ≈ ' + r.confidence.toFixed(1) + '% (1 − p).';
    KIT.put(ciLowEl, pp(r.ciLow)); KIT.put(ciHighEl, pp(r.ciHigh));

    var srm = (r.split < 0.35 || r.split > 0.65) ? ' Also: your traffic split is quite uneven (' + Math.round(r.split * 100) + '/' + Math.round((1 - r.split) * 100) + ') — check for a sample-ratio problem.' : '';

    if (r.minConversions < 30) {
      KIT.state(vEl, 'warn'); vk.textContent = 'Too little data';
      KIT.put(vh, 'Keep the test running');
      vd.textContent = 'With fewer than ~30 conversions in a variant, the normal approximation behind these numbers is unreliable (p = ' + fmtP(r.pValue) + '). Gather more data before trusting the result.' + srm;
    } else if (r.significant) {
      var winner = r.rateB > r.rateA ? 'B' : 'A';
      KIT.state(vEl, 'good'); vk.textContent = 'Statistically significant';
      KIT.put(vh, 'Variant ' + winner + ' wins — p = ' + fmtP(r.pValue));
      vd.textContent = 'If the two variants truly performed the same, a gap this large would appear under 5% of the time. The true difference (B − A) is likely between ' + pp(r.ciLow) + ' and ' + pp(r.ciHigh) + ' pp. Confirm it held across full weekly cycles before shipping.' + srm;
    } else {
      KIT.state(vEl, 'neutral'); vk.textContent = 'Not significant yet';
      KIT.put(vh, 'p = ' + fmtP(r.pValue) + ' — above 0.05');
      vd.textContent = 'The data can’t rule out that this gap is chance — the 95% interval (' + pp(r.ciLow) + ' to ' + pp(r.ciHigh) + ' pp) still includes zero. Keep running, or accept there may be no real difference.' + srm;
    }
    KIT.dockSet(vEl.getAttribute('data-state'), vk.textContent, vh.textContent);
  }

  // constrained-value messages (presentation only). They restate what the live
  // pos() + abTest() already do: blank/below-min → min, whole counts (rounded),
  // conversions capped at that variant's visitors. The engine is untouched.
  function notes() {
    var vA = Math.max(1, Math.round(pos(nA, 1))), vB = Math.max(1, Math.round(pos(nB, 1)));
    [[nA, 1, null], [nB, 1, null], [cA, 0, vA], [cB, 0, vB]].forEach(function (x) {
      var el = x[0], min = x[1], cap = x[2], raw = el.value, msg = KIT.clampMsg(raw, min, null);
      if (!msg) {
        var v = parseFloat(raw), used = Math.round(v);
        if (cap != null && used > cap) msg = 'Can’t exceed this variant’s visitors — the result uses ' + KIT.fmt(cap) + '.';
        else if (used !== v) msg = 'Counts are whole numbers — the result uses ' + KIT.fmt(used) + '.';
      }
      KIT.note(el, msg);
    });
  }
  [nA, cA, nB, cB].forEach(function (f) { f.addEventListener('input', function () { render(); notes(); }); });
  render(); notes();
};

// ---- /tools/utm-builder/ — the live page script. Scheme auto-prefix, the five
// parameters, encodeURIComponent, the copy fallback and the 1600 ms "Copied ✓"
// state unchanged. Added for accessibility only: the copy confirmation is also
// written to a polite status region (the live page announces nothing).
TOOL_INIT['utm-builder'] = function () {
  var url = document.getElementById('url'), source = document.getElementById('source'),
      medium = document.getElementById('medium'), campaign = document.getElementById('campaign'),
      term = document.getElementById('term'), content = document.getElementById('content');
  var output = document.getElementById('output'), copyBtn = document.getElementById('copyBtn');
  var status = document.getElementById('copyStatus');
  var fields = [url, source, medium, campaign, term, content];

  function build() {
    var base = url.value.trim();
    if (!base) { output.textContent = 'Enter a destination URL to begin.'; output.setAttribute('data-empty', ''); copyBtn.disabled = true; copyBtn.textContent = 'Copy link'; return; }
    if (!/^https?:\/\//i.test(base)) base = 'https://' + base;
    var map = [['utm_source', source], ['utm_medium', medium], ['utm_campaign', campaign], ['utm_term', term], ['utm_content', content]];
    var parts = [];
    map.forEach(function (p) { var v = p[1].value.trim(); if (v) parts.push(p[0] + '=' + encodeURIComponent(v)); });
    var qs = parts.join('&');
    var full = qs ? base + (base.indexOf('?') >= 0 ? '&' : '?') + qs : base;
    output.textContent = full; output.removeAttribute('data-empty');
    copyBtn.disabled = false;
    trackOnce('utm-started', 'tool_started', { tool: 'utm-builder' });
  }

  fields.forEach(function (f) { f.addEventListener('input', build); });

  copyBtn.addEventListener('click', function () {
    var text = output.textContent;
    function done() {
      copyBtn.textContent = 'Copied ✓';
      if (status) status.textContent = 'Copied ✓';
      setTimeout(function () { copyBtn.textContent = 'Copy link'; if (status) status.textContent = ''; }, 1600);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallback(text); done(); });
    } else { fallback(text); done(); }
    track('cta_clicked', { tool: 'utm-builder', cta: 'copy-link' });
  });
  function fallback(text) {
    var ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) {} document.body.removeChild(ta);
  }

  var _cta = document.querySelector('[data-cta-btn]');
  if (_cta) _cta.addEventListener('click', function () { track('cta_clicked', { tool: 'utm-builder', cta: 'measurement' }); });

  track('tool_viewed', { tool: 'utm-builder' });
  build();
};

/* ---- analyser field model + field builder -------------------------------
 * Module-level in the frozen evidence design, outside its TOOL_INIT block, so
 * they are carried across verbatim: AN_MODELS is the per-business-model metric
 * list the analyser's fields are built from, and anField() is that builder.
 * The metric ids are BENCHMARKS metric ids, so the analyser and
 * /tools/benchmarks/ stay on one authoritative dataset.
 */
const AN_MODELS = {
  ecommerce: [
    { metric: 'ecommerce_conversion_rate', label: 'Website conversion rate', unit: '%', hint: 'Visitors → purchase' },
    { metric: 'cart_abandonment_rate', label: 'Cart abandonment rate', unit: '%', hint: 'Carts started but not bought' },
    { metric: 'landing_page_conversion_rate', label: 'Landing page conversion rate', unit: '%', hint: 'Campaign landing pages' },
    { metric: 'meta_ads_ctr', label: 'Meta ads CTR', unit: '%', hint: 'Facebook/Instagram, traffic' },
    { metric: 'email_click_rate', label: 'Email click-through rate', unit: '%', hint: 'Avg across campaigns' },
    { metric: 'ltv_cac_ratio', label: 'LTV : CAC ratio', unit: ':1', hint: 'From the LTV:CAC tool' }
  ],
  saas: [
    { metric: 'saas_monthly_churn', label: 'Monthly churn', unit: '%', hint: 'Customers lost / month', seg: true },
    { metric: 'saas_trial_to_paid', label: 'Trial / freemium → paid', unit: '%', hint: 'Depends on trial model (select above)', trial: true },
    { metric: 'ltv_cac_ratio', label: 'LTV : CAC ratio', unit: ':1', hint: 'Lifetime value ÷ CAC' },
    { metric: 'landing_page_conversion_rate', label: 'Landing page conversion rate', unit: '%', hint: 'Sign-up / demo pages' },
    { metric: 'meta_ads_ctr', label: 'Meta ads CTR', unit: '%', hint: 'Facebook/Instagram, traffic' },
    { metric: 'email_click_rate', label: 'Email click-through rate', unit: '%', hint: 'Lifecycle emails' }
  ],
  lead: [
    { metric: 'b2b_visitor_to_lead', label: 'Visitor → lead', unit: '%', hint: 'Site visitors that enquire' },
    { metric: 'landing_page_conversion_rate', label: 'Landing page conversion rate', unit: '%', hint: 'Campaign landing pages' },
    { metric: 'meta_ads_lead_conversion_rate', label: 'Meta lead-ad conversion rate', unit: '%', hint: 'Lead-form completion' },
    { metric: 'b2b_mql_to_sql', label: 'MQL → SQL', unit: '%', hint: 'Marketing → sales qualified' },
    { metric: 'b2b_opportunity_to_customer', label: 'Opportunity → customer', unit: '%', hint: 'Win rate' },
    { metric: 'ltv_cac_ratio', label: 'LTV : CAC ratio', unit: ':1', hint: 'Lifetime value ÷ CAC' }
  ]
}
function anEsc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function anField(m) {
  var id = 'in_' + m.metric;
  return '<div data-field><div data-fhead><label data-flabel for="' + id + '">' + anEsc(m.label) + '</label><span data-fhint id="' + id + '-h">' + anEsc(m.hint) + '</span></div>' +
    '<div data-ctl><input type="number" id="' + id + '" data-metric="' + m.metric + '" min="0" step="0.1" inputmode="decimal" placeholder="—" aria-describedby="' + id + '-h"><span data-suf>' + anEsc(m.unit) + '</span></div></div>';
}

TOOL_INIT['analyser'] = function () {
  track('tool_viewed', { tool: 'analyser' });
  var currentCta = 'foundation', _rt;
  function scheduleResultTrack(overall, n) { clearTimeout(_rt); _rt = setTimeout(function () { track('result_viewed', { tool: 'analyser', model: model, band: scoreBand(overall), metrics: n }); }, 1400); }
  var MODELS = AN_MODELS;
  var ACTIONS = {
    ecommerce_conversion_rate: { rec: 'Your site converts below benchmark — the leak is usually in the funnel, not the traffic.', tool: '/tools/conversion-funnel-calculator/', toolLabel: 'Map your funnel', cta: 'funnel' },
    email_click_rate: { rec: 'Email engagement trails benchmark — segment the list and test subject lines and CTAs before sending more.', cta: 'measurement' },
    cart_abandonment_rate: { rec: 'More carts are abandoned than the norm — the leak is usually checkout friction: surprise shipping/fees, forced account creation, or too few payment options.', tool: '/tools/conversion-funnel-calculator/', toolLabel: 'Map your checkout funnel', cta: 'funnel' },
    landing_page_conversion_rate: { rec: 'Landing pages convert below benchmark — tighten message-match to the ad, cut the form, and make one clear offer per page before buying more clicks.', tool: '/tools/conversion-funnel-calculator/', toolLabel: 'Map your funnel', cta: 'funnel' },
    meta_ads_ctr: { rec: 'Meta click-through is below benchmark — the creative or audience isn’t landing. Test new hooks/formats and tighten targeting before raising budget.', cta: 'measurement' },
    meta_ads_lead_conversion_rate: { rec: 'Lead-ad completion trails benchmark — shorten the form, pre-fill where you can, and match the offer to the ad’s promise.', tool: '/tools/conversion-funnel-calculator/', toolLabel: 'Map your funnel', cta: 'funnel' },
    saas_monthly_churn: { rec: 'Churn is above benchmark — for a subscription business, keeping customers beats buying new ones. Fix onboarding and early value first.', tool: '/tools/ltv-cac-calculator/', toolLabel: 'Model churn in LTV:CAC', cta: 'economics' },
    saas_trial_to_paid: { rec: 'Trial → paid is below benchmark — most trials stall before first value. Shorten time-to-value, guide activation, and capture payment at the value moment (card-required trials convert far higher, at the cost of fewer starts).', tool: '/tools/ltv-cac-calculator/', toolLabel: 'Model it in LTV:CAC', cta: 'economics' },
    saas_freemium_conversion: { rec: 'Freemium free → paid is below benchmark — the paywall or upgrade trigger isn’t compelling. Gate the right feature, prompt at the value moment, and check the free tier isn’t so generous no one needs to pay.', cta: 'economics' },
    ltv_cac_ratio: { rec: 'Your unit economics are thin — acquisition cost or payback needs work before you scale spend.', tool: '/tools/ad-spend-profitability-calculator/', toolLabel: 'Check ad-spend economics', cta: 'economics' },
    b2b_visitor_to_lead: { rec: 'Too few visitors become leads — usually a targeting or landing-page/offer problem, not traffic volume.', tool: '/tools/conversion-funnel-calculator/', toolLabel: 'Map your funnel', cta: 'funnel' },
    b2b_mql_to_sql: { rec: 'Leads stall before sales — tighten scoring and ICP so sales gets fewer, better-qualified leads.', cta: 'measurement' },
    b2b_opportunity_to_customer: { rec: 'Opportunities aren’t closing — revisit qualification, pricing and the offer rather than top-of-funnel volume.', cta: 'sales' }
  };
  var CTA = {
    funnel: { h: 'Ask Tilth to review your funnel', t: 'Your weakest link is a conversion step, not traffic. We map where people drop and fix the leak.', b: 'Ask us to review your funnel' },
    measurement: { h: 'Request a measurement audit', t: 'These numbers are only worth acting on if they’re measured right. We check the tracking first.', b: 'Request a measurement audit' },
    economics: { h: 'Review your acquisition economics', t: 'Thin unit economics don’t fix themselves at scale. We pressure-test CAC, payback and margin.', b: 'Review your economics with Tilth' },
    sales: { h: 'Tighten the bottom of your funnel', t: 'Opportunities that don’t close are a qualification and offer problem. We help align marketing and sales.', b: 'Talk to Tilth' },
    foundation: { h: 'The benchmark that matters most is your own baseline', t: 'Public benchmarks are a starting point. A free foundation audit builds a baseline from your own data.', b: 'Request a free audit' }
  };

  var model = 'ecommerce';
  var fieldsEl = document.getElementById('anFields'), segWrap = document.getElementById('segWrap'), segEl = document.getElementById('seg'),
      trialWrap = document.getElementById('trialWrap'), trialSel = document.getElementById('trialSel');
  var scoreEl = document.getElementById('score'), scoreLbl = document.getElementById('scoreLbl'), gaugeEl = document.getElementById('gauge'),
      vEl = document.getElementById('verdict'), vd = document.getElementById('vd'), mrows = document.getElementById('mrows'),
      priorityCard = document.getElementById('priorityCard'), actionsEl = document.getElementById('actions'),
      quality = document.getElementById('quality'), qualityText = document.getElementById('qualityText'),
      ctaH = document.getElementById('ctaH'), ctaP = document.getElementById('ctaP'), ctaBtnT = document.getElementById('ctaBtnT');

  // live page: color(score) → inline background. Here the same 70 / 50 cuts set a band.
  function bandOf(score) { return score >= 70 ? 'good' : score >= 50 ? 'warn' : 'bad'; }
  var esc = anEsc;

  function buildFields() {
    fieldsEl.innerHTML = '';
    segWrap.hidden = !MODELS[model].some(function (m) { return m.seg; });
    trialWrap.hidden = !MODELS[model].some(function (m) { return m.trial; });
    fieldsEl.innerHTML = MODELS[model].map(anField).join('');
    fieldsEl.querySelectorAll('input').forEach(function (i) { i.addEventListener('input', function () { trackOnce('an-started', 'tool_started', { tool: 'analyser' }); render(); }); });
  }

  function resolve(m) {
    var lookupMetric = m.metric, label = m.label, ctx = { businessModel: model };
    if (m.seg) ctx.segment = segEl.value;
    if (m.trial) {
      var tv = trialSel.value;
      if (tv === 'freemium') { lookupMetric = 'saas_freemium_conversion'; label = 'Freemium free → paid'; }
      else if (tv === 'optout') { lookupMetric = 'saas_trial_to_paid'; label = 'Trial → paid (card required)'; ctx.segment = 'Opt-out trial (credit card required)'; }
      else { lookupMetric = 'saas_trial_to_paid'; label = 'Trial → paid (no card)'; ctx.segment = 'Opt-in trial (no credit card)'; }
    }
    return { metric: lookupMetric, label: label, unit: m.unit, ctx: ctx };
  }

  // a scored row: label + performance word (badge), value, the benchmark range,
  // the 0–100 score bar, the inline disclosures, then the record's citation
  function rowHtml(mm, b, raw, sc, perf) {
    var heur = b.verificationStatus === 'heuristic' ? '<span data-mflag="heuristic">(rule of thumb, not a sourced benchmark)</span>' : '';
    var fb = b.fallback ? '<span data-mflag="fallback">(broader benchmark used)</span>' : '';
    var src = b.url ? '<a href="' + esc(b.url) + '" target="_blank" rel="noopener">' + esc(b.source) + '</a>' : esc(b.source);
    return '<div data-mrow data-perf="' + esc(perf) + '"><div data-mrow-top><span data-mlabel>' + esc(mm.label) + '</span><span data-perfword>' + esc(perf) + '</span></div>' +
      '<div data-mrow-mid><span data-mval>' + raw + mm.unit + '</span>' +
      '<span data-mbench>benchmark ' + b.low + b.unit + '–' + b.high + b.unit + ' (median ' + b.median + b.unit + ')</span></div>' +
      '<div data-mbar aria-hidden="true"><span data-band="' + bandOf(sc) + '" style="width:' + sc.toFixed(0) + '%"></span></div>' +
      (heur || fb ? '<div data-mnote>' + heur + fb + '</div>' : '') +
      '<div data-mcite>' + src + (b.date ? ' · ' + esc(b.date) : '') + ' · ' + esc(b.geography) + ' · confidence: ' + esc(b.confidence) + '</div></div>';
  }
  function noBenchHtml(mm, raw) {
    return '<div data-mrow data-perf="none"><div data-mrow-top><span data-mlabel>' + esc(mm.label) + '</span><span data-perfword>no benchmark</span></div>' +
      '<div data-mbench>' + raw + mm.unit + ' — no verified benchmark for your context, so this isn’t scored.</div></div>';
  }
  window.__anRow = { rowHtml: rowHtml, noBenchHtml: noBenchHtml }; // QA hook (design review only)

  function render() {
    var scored = [], rowsHtml = '', anyFallback = false, anyLowConf = false, entered = 0;

    MODELS[model].forEach(function (m) {
      var input = document.getElementById('in_' + m.metric);
      var raw = parseFloat(input.value);
      if (isNaN(raw)) return;
      entered++;
      var r = resolve(m);
      var mm = { metric: r.metric, label: r.label, unit: r.unit };
      var b = lookupBenchmark(r.metric, r.ctx);
      if (!b) { rowsHtml += noBenchHtml(mm, raw); return; }
      var sc = scoreMetric(raw, b);
      var cls = classifyAgainst(raw, b);
      scored.push({ m: mm, b: b, value: raw, score: sc, perf: cls.performance });
      if (b.fallback) anyFallback = true;
      if (b.confidence === 'low') anyLowConf = true;
      rowsHtml += rowHtml(mm, b, raw, sc, cls.performance);
    });

    mrows.innerHTML = rowsHtml || '<p data-mexp>Your metrics will appear here, each compared to its benchmark.</p>';

    if (!scored.length) {
      scoreEl.textContent = '—'; gaugeEl.style.width = '0%'; gaugeEl.setAttribute('data-band', 'none');
      KIT.state(vEl, 'neutral'); scoreLbl.textContent = 'Marketing health score';
      vd.textContent = entered ? 'None of the metrics you entered have a verified benchmark for this context yet — try another, or see the sources page.' : 'Enter at least one metric to see your score.';
      priorityCard.hidden = true; quality.hidden = true;
      currentCta = 'foundation'; ctaH.textContent = CTA.foundation.h; ctaP.textContent = CTA.foundation.t; ctaBtnT.textContent = CTA.foundation.b;
      KIT.dockSet('neutral', 'Marketing health score', '—');
      return;
    }

    var overall = Math.round(scored.reduce(function (s, x) { return s + x.score; }, 0) / scored.length);
    scheduleResultTrack(overall, scored.length);
    scoreEl.textContent = overall;
    gaugeEl.style.width = overall + '%'; gaugeEl.setAttribute('data-band', bandOf(overall));
    KIT.state(vEl, overall >= 70 ? 'good' : overall >= 50 ? 'warn' : 'bad');

    var sortAsc = scored.slice().sort(function (a, b) { return a.score - b.score; });
    var weakest = sortAsc[0], strongest = sortAsc[sortAsc.length - 1];
    scoreLbl.textContent = overall >= 70 ? 'Healthy — above benchmark overall' : overall >= 50 ? 'Mixed — room to improve' : 'Below benchmark — needs work';
    vd.innerHTML = 'Scored on <strong>' + scored.length + '</strong> metric' + (scored.length > 1 ? 's' : '') + '. Strongest: <strong>' + esc(strongest.m.label) + '</strong>. Weakest — and your priority: <strong data-weakest>' + esc(weakest.m.label) + '</strong>.';

    var priorities = sortAsc.filter(function (x) { return x.perf !== 'strong' && ACTIONS[x.m.metric]; }).slice(0, 3);
    if (priorities.length) {
      actionsEl.innerHTML = priorities.map(function (x, i) {
        var a = ACTIONS[x.m.metric];
        var link = a.tool ? ' <a href="' + a.tool + '">' + esc(a.toolLabel) + ' →</a>' : '';
        return '<li class="action"><span class="n">0' + (i + 1) + ' · ' + esc(x.m.label) + '</span><p>' + esc(a.rec) + link + '</p></li>';
      }).join('');
      priorityCard.hidden = false;
    } else {
      actionsEl.innerHTML = '<li class="action"><p>No weak spots among the metrics you entered — every one is at or above benchmark. Keep measuring, and add more metrics for a fuller picture.</p></li>';
      priorityCard.hidden = false;
    }

    var q = [];
    if (scored.length < 3) q.push('This score is based on only ' + scored.length + ' metric' + (scored.length > 1 ? 's' : '') + ' — add more for a fuller, more reliable picture.');
    if (anyFallback) q.push('Some comparisons used a broader benchmark than your exact segment (shown per metric).');
    if (anyLowConf) q.push('One or more benchmarks are low-confidence (e.g. email open rates are inflated by Apple’s privacy changes).');
    q.push('Benchmarks are Global/US-weighted — India-specific data is limited, so read these as directional. ' +
      '<a href="/tools/benchmarks/">See sources →</a>');
    qualityText.innerHTML = '<strong>Confidence &amp; data quality:</strong> ' + q.join(' ');
    quality.hidden = false;

    currentCta = (ACTIONS[weakest.m.metric] && ACTIONS[weakest.m.metric].cta) || 'foundation';
    var cta = CTA[currentCta] || CTA.foundation;
    ctaH.textContent = cta.h; ctaP.textContent = cta.t; ctaBtnT.textContent = cta.b;
    KIT.dockSet(vEl.getAttribute('data-state'), scoreLbl.textContent, overall + '/100');
  }

  document.querySelectorAll('#anModels [data-tab]').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelectorAll('#anModels [data-tab]').forEach(function (x) { x.setAttribute('aria-selected', x === b ? 'true' : 'false'); });
      model = b.getAttribute('data-m');
      buildFields(); render();
      track('business_model_selected', { tool: 'analyser', model: model });
    });
  });
  segEl.addEventListener('change', render);
  trialSel.addEventListener('change', render);
  document.getElementById('ctaBtn').addEventListener('click', function () { track('cta_clicked', { tool: 'analyser', cta: currentCta }); });
  buildFields(); render();
};

/* ---- mount -------------------------------------------------------------
 * The worksheet root carries its registry id as [data-tool-key]; the page is
 * served at its real route and reads its real configuration, so there is no
 * route switch and no query parameter. The dock watch runs after the tool so
 * it can measure the panels the tool has just populated.
 */
(function () {
  var root = document.querySelector("[data-tool-key]");
  if (!root) return;
  var key = root.getAttribute("data-tool-key");
  if (!TOOL_INIT[key]) return;
  window.dataLayer = window.dataLayer || [];
  TOOL_INIT[key]();
  KIT.dockWatch();
  KIT.dockTargets();
})();

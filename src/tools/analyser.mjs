// /tools/marketing-benchmark-analyser/ — worksheet markup.
//
// Ported verbatim from the frozen Master Design Release design
// "TOOLS/Tilth Tool Template - Benchmark Analyser.dc.html" (analyser route template).
// Every label, hint, default, unit, min/max/step, explanation, note, CTA and
// related link is the design's, which in turn carries the live page's own copy
// and input attributes. The shared shell, head metadata and schema come from
// src/templates/toolPage.mjs; the behaviour comes from /tools-worksheet.js.
//
// THREE production adjustments, and no others:
//   1. [data-tool-key] on the worksheet section, so tools-worksheet.js can
//      dispatch this tool at its real route instead of the prototype's
//      ?reviewTool switch;
//   2. the no-JS honesty line the report requires in each readout — the
//      prototype carries it only in its raw template. It is hidden by CSS once
//      brand-v3.js sets html.v3-js, so it is seen only when the engine really
//      cannot run;
//   3. data-fit dropped from the H1 (no production fit safeguard; the report
//      measured it idle at all 12 widths) and the crumb's inline current-page
//      colour dropped in favour of the shared [data-crumb] [aria-current] rule.
export const main = `
  <section id="hero" data-thero data-depth-label="SURFACE">
    <nav data-crumb aria-label="Breadcrumb"><a href="/">Home</a> <span data-sep aria-hidden="true">/</span> <a href="/tools/">Free Tools</a> <span data-sep aria-hidden="true">/</span> <span aria-current="page">Marketing Benchmark Analyser</span></nav>
    <div data-eyebrow>Free tool · Flagship</div>
    <h1 data-h1 data-th1>How healthy is your marketing, <span data-acc>honestly?</span></h1>
    <div data-thero-row>
      <p data-lede>Pick your model, enter the metrics you actually have, and get a transparent health score against sourced benchmarks — plus your single biggest problem and what to do about it. We only score what we can verify; anything we can't, we leave out rather than guess.</p>
      <p data-tmeta><b>Founders &amp; marketing leads</b> · ~3 min<br>Needs: Your key metrics (conversion, churn, LTV:CAC…)</p>
    </div>
  </section>

  <section data-ws data-tool-key="analyser" id="calculator" data-depth-label="SHALLOW" aria-label="Marketing Benchmark Analyser">
    <div data-toolbar>
      <div data-tabs data-count="3" id="anModels" role="tablist" aria-label="Business model">
        <button data-tab data-m="ecommerce" role="tab" aria-selected="true" type="button">Ecommerce / D2C</button>
        <button data-tab data-m="saas" role="tab" aria-selected="false" type="button">SaaS / subscription</button>
        <button data-tab data-m="lead" role="tab" aria-selected="false" type="button">B2B / lead generation</button>
      </div>
    </div>
    <div data-ws-grid data-analyser>
      <div data-inputs>
        <h2 data-ptitle><span data-step aria-hidden="true">01</span>Your metrics</h2>
        <p data-psub>Enter what you know — leave the rest blank. Only filled metrics are scored.</p>
        <div data-ctxsel id="segWrap" hidden>
          <label for="seg">Segment</label>
          <select data-select id="seg">
            <option value="B2B SMB">B2B — SMB</option>
            <option value="B2B Mid-market">B2B — Mid-market</option>
            <option value="B2B Enterprise">B2B — Enterprise</option>
            <option value="B2C">B2C</option>
          </select>
        </div>
        <div data-ctxsel id="trialWrap" hidden>
          <label for="trialSel">Trial model</label>
          <select data-select id="trialSel">
            <option value="optin">Opt-in trial (no card)</option>
            <option value="optout">Opt-out trial (card required)</option>
            <option value="freemium">Freemium (free → paid)</option>
          </select>
        </div>
        <div data-fields id="anFields">
          <div data-field><div data-fhead><label data-flabel for="in_ecommerce_conversion_rate">Website conversion rate</label><span data-fhint id="in_ecommerce_conversion_rate-h">Visitors → purchase</span></div><div data-ctl><input type="number" id="in_ecommerce_conversion_rate" data-metric="ecommerce_conversion_rate" min="0" step="0.1" inputmode="decimal" placeholder="—" aria-describedby="in_ecommerce_conversion_rate-h"><span data-suf>%</span></div></div>
          <div data-field><div data-fhead><label data-flabel for="in_cart_abandonment_rate">Cart abandonment rate</label><span data-fhint id="in_cart_abandonment_rate-h">Carts started but not bought</span></div><div data-ctl><input type="number" id="in_cart_abandonment_rate" data-metric="cart_abandonment_rate" min="0" step="0.1" inputmode="decimal" placeholder="—" aria-describedby="in_cart_abandonment_rate-h"><span data-suf>%</span></div></div>
          <div data-field><div data-fhead><label data-flabel for="in_landing_page_conversion_rate">Landing page conversion rate</label><span data-fhint id="in_landing_page_conversion_rate-h">Campaign landing pages</span></div><div data-ctl><input type="number" id="in_landing_page_conversion_rate" data-metric="landing_page_conversion_rate" min="0" step="0.1" inputmode="decimal" placeholder="—" aria-describedby="in_landing_page_conversion_rate-h"><span data-suf>%</span></div></div>
          <div data-field><div data-fhead><label data-flabel for="in_meta_ads_ctr">Meta ads CTR</label><span data-fhint id="in_meta_ads_ctr-h">Facebook/Instagram, traffic</span></div><div data-ctl><input type="number" id="in_meta_ads_ctr" data-metric="meta_ads_ctr" min="0" step="0.1" inputmode="decimal" placeholder="—" aria-describedby="in_meta_ads_ctr-h"><span data-suf>%</span></div></div>
          <div data-field><div data-fhead><label data-flabel for="in_email_click_rate">Email click-through rate</label><span data-fhint id="in_email_click_rate-h">Avg across campaigns</span></div><div data-ctl><input type="number" id="in_email_click_rate" data-metric="email_click_rate" min="0" step="0.1" inputmode="decimal" placeholder="—" aria-describedby="in_email_click_rate-h"><span data-suf>%</span></div></div>
          <div data-field><div data-fhead><label data-flabel for="in_ltv_cac_ratio">LTV : CAC ratio</label><span data-fhint id="in_ltv_cac_ratio-h">From the LTV:CAC tool</span></div><div data-ctl><input type="number" id="in_ltv_cac_ratio" data-metric="ltv_cac_ratio" min="0" step="0.1" inputmode="decimal" placeholder="—" aria-describedby="in_ltv_cac_ratio-h"><span data-suf>:1</span></div></div>
        </div>
      </div>
      <section data-readout id="result" aria-labelledby="result-h">
        <h2 data-ptitle id="result-h"><span data-step aria-hidden="true">02</span>Result</h2>
        <p data-nojs>This calculator runs in your browser. Turn on JavaScript to see your result.</p>
        
        <div data-verdict data-state="neutral" id="verdict" aria-live="polite">
          <div data-vk><span data-vglyph aria-hidden="true"></span><span id="scoreLbl">Marketing health score</span></div>
          <div data-score><span id="score">—</span><span data-slash>/100</span></div>
          <div data-gauge aria-hidden="true"><span id="gauge" data-band="none" style="width:0%"></span><i style="left:50%"></i><i style="left:70%"></i></div>
          <div data-gauge-scale aria-hidden="true"><span>0</span><span style="left:50%">50</span><span style="left:70%">70</span><span style="left:100%">100</span></div>
          <p data-vd id="vd">Enter at least one metric to see your score.</p>
        </div>
        <div data-metric>
          <div data-mk>Metric-by-metric</div>
          <div id="mrows" data-mrows><p data-mexp>Your metrics will appear here, each compared to its benchmark.</p></div>
        </div>
      </section>
    </div>
  </section>

  <div data-interp data-depth-label="MID">
    <section data-priority id="priorityCard" aria-labelledby="pri-h" hidden>
      <h2 data-ptitle id="pri-h"><span data-step aria-hidden="true">03</span>Do these first — highest impact</h2>
      <ol data-prio id="actions"></ol>
    </section>
    <div data-quality id="quality" hidden>
      <p id="qualityText"></p>
    </div>
  </div>

  <section data-tcta data-depth-label="FOUNDATION" aria-labelledby="ctaH" id="ctaCard">
    <div data-eyebrow><span data-step aria-hidden="true">04</span>Next step</div>
    <div data-tcta-grid>
      <h2 id="ctaH" data-tcta-h>The benchmark that matters most is your own baseline</h2>
      <div>
        <p id="ctaP">Public benchmarks are a starting point. A free foundation audit builds a measurement baseline from your own data and tells you which of these numbers you can actually trust.</p>
        <a data-btn data-cta-btn href="/contact/" id="ctaBtn"><span id="ctaBtnT">Request a free audit</span> <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </section>

  <section data-related aria-labelledby="rel-h">
    <h2 id="rel-h">Related</h2>
    <ul>
      <li><a href="/tools/benchmarks/">How these benchmarks are sourced</a></li>
      <li><a href="/tools/ad-spend-profitability-calculator/">Ad Spend Profitability Calculator</a></li>
      <li><a href="/tools/ltv-cac-calculator/">LTV : CAC Calculator</a></li>
    </ul>
  </section>
  <div data-dock hidden aria-hidden="true"><div data-dock-txt><span data-dock-k><span data-vglyph aria-hidden="true"></span><span></span></span><span data-dock-v></span></div><a href="#result" tabindex="-1">Result <span aria-hidden="true">↓</span></a></div>`;

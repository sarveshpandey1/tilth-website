// /tools/ab-test-calculator/ — worksheet markup.
//
// Ported verbatim from the frozen Master Design Release design
// "TOOLS/Tilth Tool Template - Ad Spend Calculator.dc.html" (ab-test route template).
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
    <nav data-crumb aria-label="Breadcrumb"><a href="/">Home</a> <span data-sep aria-hidden="true">/</span> <a href="/tools/">Free Tools</a> <span data-sep aria-hidden="true">/</span> <span aria-current="page">A/B Test Significance Calculator</span></nav>
    <div data-eyebrow>Free tool</div>
    <h1 data-h1 data-th1>Is your winner actually <span data-acc>winning?</span></h1>
    <div data-thero-row>
      <p data-lede>Most A/B tests get called too early, on too little data — and the "winner" was just noise. Enter the visitors and conversions for each variant to see the real conversion rates, the uplift, and how confident you can actually be.</p>
      <p data-tmeta><b>CRO &amp; product</b> · ~1 min<br>Needs: Visitors &amp; conversions per variant</p>
    </div>
  </section>

  <section data-ws data-tool-key="ab-test" id="calculator" data-depth-label="SHALLOW" aria-label="A/B Test Significance Calculator">
    <div data-toolbar data-empty-bar></div>
    <div data-ws-grid>
      <div data-inputs>
        <h2 data-ptitle><span data-step aria-hidden="true">01</span>Your test results</h2>
        <p data-psub>Enter totals for each variant.</p>
        <div data-fields data-ab>
        <div data-field>
          <div data-fhead><label data-flabel for="nA">Variant A — visitors</label><span data-fhint id="nA-h">The control</span></div>
          <div data-ctl><input type="number" id="nA" min="1" step="1" value="1500" inputmode="numeric" aria-describedby="nA-h nA-msg"></div>
          <p data-fmsg id="nA-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="cA">Variant A — conversions</label><span data-fhint id="cA-h">Sign-ups, sales, etc.</span></div>
          <div data-ctl><input type="number" id="cA" min="0" step="1" value="75" inputmode="numeric" aria-describedby="cA-h cA-msg"></div>
          <p data-fmsg id="cA-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="nB">Variant B — visitors</label><span data-fhint id="nB-h">The challenger</span></div>
          <div data-ctl><input type="number" id="nB" min="1" step="1" value="1500" inputmode="numeric" aria-describedby="nB-h nB-msg"></div>
          <p data-fmsg id="nB-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="cB">Variant B — conversions</label><span data-fhint id="cB-h">Sign-ups, sales, etc.</span></div>
          <div data-ctl><input type="number" id="cB" min="0" step="1" value="105" inputmode="numeric" aria-describedby="cB-h cB-msg"></div>
          <p data-fmsg id="cB-msg" aria-live="polite"></p>
        </div>
        </div>
      </div>
      <section data-readout id="result" aria-labelledby="result-h">
        <h2 data-ptitle id="result-h"><span data-step aria-hidden="true">02</span>Result</h2>
        <p data-nojs>This calculator runs in your browser. Turn on JavaScript to see your result.</p>
        
        <div data-verdict data-state="neutral" id="verdict" aria-live="polite">
          <div data-vk><span data-vglyph aria-hidden="true"></span><span id="vk">Verdict</span></div>
          <div data-vh id="vh">—</div>
          <p data-vd id="vd">—</p>
        </div>
        <div data-metric>
          <div data-mk>Conversion rates</div>
          <div data-mv><span id="rA">—</span><span data-unit>% A</span><span data-sep2 aria-hidden="true">·</span><span id="rB">—</span><span data-unit>% B</span></div>
          <p data-mexp>The share of each variant's visitors that converted.</p>
        </div>
        <div data-metric>
          <div data-mk>Relative uplift (B vs A)</div>
          <div data-mv><span id="uplift">—</span><span data-unit>%</span></div>
          <p data-mexp>How much better (or worse) B converts than A, in relative terms.</p>
        </div>
        <div data-metric>
          <div data-mk>Significance — two-sided p-value</div>
          <div data-mv data-small><span data-unit>p =</span> <span id="pval">—</span></div>
          <p data-mexp><span id="confLine">—</span> A p-value under 0.05 means: <em>if the two variants truly performed the same</em>, a gap this large would appear less than 5% of the time. It is not the probability that B is better.</p>
        </div>
        <div data-metric>
          <div data-mk>95% confidence interval — B minus A</div>
          <div data-mv data-small><span id="ciLow">—</span> <span data-unit>to</span> <span id="ciHigh">—</span><span data-unit> pp</span></div>
          <p data-mexp>The plausible range for the true difference in conversion rate, in percentage points. If this range includes zero, you can't yet rule out "no real difference".</p>
        </div>
      </section>
    </div>
  </section>

  <div data-interp data-depth-label="MID">
    <div data-note><p data-note-k><span data-step aria-hidden="true">03</span>Significance isn't the whole story.</p><p>Even below p = 0.05, run the test for full business cycles (weekdays and weekends behave differently), don't stop the moment it crosses the line, and make sure both variants got enough conversions — a handful can look significant and still be a fluke. A low p-value says the gap is unlikely to be a fluke; it can't tell you it's worth shipping.</p></div>
      <details data-method><summary>Method &amp; formula</summary><p>Two-proportion z-test using the normal approximation. The test statistic uses the <em>pooled</em> conversion rate for its standard error; the confidence interval uses the <em>unpooled</em> (Wald) standard error of the difference. The two-sided p-value is 2 × (1 − Φ(|z|)), where Φ is the standard normal CDF. Below roughly 30 conversions per variant the normal approximation is unreliable and a warning is shown. This tool does not correct for repeated "peeking" or for testing many variants at once — decide your test length in advance, and treat a very uneven traffic split as a possible sample-ratio problem.</p></details>
  </div>

  <section data-tcta data-depth-label="FOUNDATION" aria-labelledby="cta-h" id="ctaCard">
    <div data-eyebrow><span data-step aria-hidden="true">04</span>Next step</div>
    <div data-tcta-grid>
      <h2 id="cta-h" data-tcta-h>A test is only as clean as the tracking under it</h2>
      <div>
        <p>If your conversion events fire inconsistently between variants, the whole test is compromised before the maths begins. A Foundation Audit verifies your tracking is measuring the same thing, the same way, everywhere — so your experiments are trustworthy.</p>
        <a data-btn data-cta-btn href="/contact/"><span>Discuss your growth project</span> <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </section>

  <section data-related aria-labelledby="rel-h">
    <h2 id="rel-h">Related</h2>
    <ul>
      <li><a href="/insights/seo-not-bringing-leads/">Why your SEO isn't bringing leads (and how to fix it)</a></li>
      <li><a href="/insights/meta-ads-not-converting/">Meta Ads not converting? A 7-point tracking audit</a></li>
      <li><a href="/insights/ga4-conversion-tracking/">GA4 conversion tracking: the setup checklist before you scale ads</a></li>
    </ul>
  </section>
  <div data-dock hidden aria-hidden="true"><div data-dock-txt><span data-dock-k><span data-vglyph aria-hidden="true"></span><span></span></span><span data-dock-v></span></div><a href="#result" tabindex="-1">Result <span aria-hidden="true">↓</span></a></div>`;

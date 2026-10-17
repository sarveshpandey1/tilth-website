// /tools/conversion-funnel-calculator/ — worksheet markup.
//
// Ported verbatim from the frozen Master Design Release design
// "TOOLS/Tilth Tool Template - Ad Spend Calculator.dc.html" (conversion-funnel route template).
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
    <nav data-crumb aria-label="Breadcrumb"><a href="/">Home</a> <span data-sep aria-hidden="true">/</span> <a href="/tools/">Free Tools</a> <span data-sep aria-hidden="true">/</span> <span aria-current="page">Conversion Funnel Calculator</span></nav>
    <div data-eyebrow>Free tool</div>
    <h1 data-h1 data-th1>From traffic to <span data-acc>revenue</span> — and back.</h1>
    <div data-thero-row>
      <p data-lede>Three numbers decide what your funnel is worth: traffic, conversion rate, and order value. See the revenue they produce — then flip it, and find the traffic (or conversion rate) a revenue goal actually demands.</p>
      <p data-tmeta><b>Growth &amp; CRO</b> · ~2 min<br>Needs: Stage counts or traffic/CR/AOV</p>
    </div>
  </section>

  <section data-ws data-tool-key="conversion-funnel" id="calculator" data-depth-label="SHALLOW" aria-label="Conversion Funnel Calculator">
    <div data-toolbar>
      <div data-tabs data-count="2" role="tablist" aria-label="Calculator mode">
        <button data-tab id="mSimple" aria-controls="simpleMode" role="tab" aria-selected="true" type="button">Simple</button>
        <button data-tab id="mFunnel" aria-controls="funnelMode" role="tab" aria-selected="false" type="button">Multi-stage funnel</button>
      </div>
      <label data-cur>Currency <select id="cur"><option value="INR">₹ INR</option><option value="USD">$ USD</option><option value="GBP">£ GBP</option><option value="EUR">€ EUR</option><option value="AED">AED</option><option value="SGD">S$ SGD</option><option value="AUD">A$ AUD</option></select></label>
    </div>
    <div id="simpleMode" data-mode-panel role="tabpanel" aria-labelledby="mSimple">
    <div data-ws-grid>
      <div data-inputs>
        <h2 data-ptitle><span data-step aria-hidden="true">01</span>Your funnel</h2>
        <p data-psub>Traffic-to-revenue — monthly figures, drag or type.</p>
        <div data-fields>
        <div data-field>
          <div data-fhead><label data-flabel for="visitors">Monthly visitors</label><span data-fhint id="visitors-h">Sessions to your site</span></div>
          <div data-ctl><input type="number" id="visitors" min="1" step="100" value="10000" inputmode="numeric" aria-describedby="visitors-h visitors-msg"></div>
          <input type="range" id="visitors_r" min="500" max="200000" step="500" value="10000" aria-label="Monthly visitors">
          <p data-fmsg id="visitors-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="cr">Conversion rate</label><span data-fhint id="cr-h">% of visitors who buy</span></div>
          <div data-ctl><input type="number" id="cr" min="0.01" max="100" step="0.1" value="2.5" inputmode="decimal" aria-describedby="cr-h cr-msg"><span data-suf>%</span></div>
          <input type="range" id="cr_r" min="0.1" max="15" step="0.1" value="2.5" aria-label="Conversion rate">
          <p data-fmsg id="cr-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="aov">Average order value</label><span data-fhint id="aov-h">Revenue per order</span></div>
          <div data-ctl><span data-pre>₹</span><input type="number" id="aov" min="1" step="50" value="1500" inputmode="numeric" aria-describedby="aov-h aov-msg"></div>
          <input type="range" id="aov_r" min="100" max="50000" step="100" value="1500" aria-label="Average order value">
          <p data-fmsg id="aov-msg" aria-live="polite"></p>
        </div>
        </div>
      </div>
      <section data-readout id="result" aria-labelledby="result-h">
        <h2 data-ptitle id="result-h"><span data-step aria-hidden="true">02</span>Result</h2>
        <p data-nojs>This calculator runs in your browser. Turn on JavaScript to see your result.</p>
        
        <div data-metric data-lead>
          <div data-mk>Revenue per month</div>
          <div data-mv><span id="revenue">—</span></div>
          <p data-mexp>Orders × average order value. Annualised: <strong><span id="annual">—</span></strong>.</p>
        </div>
        <div data-metric>
          <div data-mk>Orders per month</div>
          <div data-mv><span id="orders">—</span></div>
          <p data-mexp>Monthly visitors × conversion rate.</p>
        </div>
      </section>
    </div>
    <div data-ws-grid data-subpanel>
      <div data-inputs>
        <h2 data-ptitle><span data-step aria-hidden="true">01</span>Work backwards from a goal</h2>
        <p data-psub>Set a monthly revenue target — see what it takes at your current numbers.</p>
        <div data-fields>
        <div data-field>
          <div data-fhead><label data-flabel for="goal">Target monthly revenue</label><span data-fhint id="goal-h">What you want to hit</span></div>
          <div data-ctl><span data-pre>₹</span><input type="number" id="goal" min="1" step="10000" value="500000" inputmode="numeric" aria-describedby="goal-h goal-msg"></div>
          <p data-fmsg id="goal-msg" aria-live="polite"></p>
        </div>
        </div>
      </div>
      <section data-readout id="result-goal" aria-labelledby="result-goal-h">
        <h2 data-ptitle id="result-goal-h"><span data-step aria-hidden="true">02</span>Result</h2>
        <p data-nojs>This calculator runs in your browser. Turn on JavaScript to see your result.</p>
        <div data-metric>
          <div data-mk>Visitors needed <span data-mk-note>(at your current rate &amp; order value)</span></div>
          <div data-mv><span id="visNeeded">—</span></div>
          <p data-mexp id="visDelta"></p>
        </div>
        <div data-metric>
          <div data-mk>…or the conversion rate needed <span data-mk-note>(at your current traffic)</span></div>
          <div data-mv><span id="crNeeded">—</span><span data-unit>%</span></div>
          <p data-mexp id="crDelta"></p>
        </div>
      </section>
    </div>
    </div>
    <div id="funnelMode" data-mode-panel role="tabpanel" aria-labelledby="mFunnel" hidden>
      <span data-tablabel>Funnel template</span>
      <div data-tabs data-count="4" id="ftpl" role="tablist" aria-label="Funnel template">
        <button data-tab data-t="ecom" role="tab" aria-selected="true" type="button">Ecommerce</button>
        <button data-tab data-t="b2b" role="tab" aria-selected="false" type="button">B2B / SaaS</button>
        <button data-tab data-t="app" role="tab" aria-selected="false" type="button">Mobile app</button>
        <button data-tab data-t="lead" role="tab" aria-selected="false" type="button">Lead gen</button>
      </div>
    <div data-ws-grid style="margin-top:22px">
      <div data-inputs>
        <h2 data-ptitle><span data-step aria-hidden="true">01</span>Your funnel stages</h2>
        <p data-psub>Edit names, enter counts, add or remove stages. Conversion and drop-off compute live.</p>
        <div id="stageList" data-stages></div>
        <button data-sadd id="addStage" type="button">+ Add stage</button>
        <div data-fields style="margin-top:20px">
        <div data-field>
          <div data-fhead><label data-flabel for="fval">Value per final conversion</label><span data-fhint id="fval-h">Revenue per last-stage conversion</span></div>
          <div data-ctl><span data-pre>₹</span><input type="number" id="fval" min="0" step="50" value="1500" inputmode="numeric" aria-describedby="fval-h fval-msg"></div>
          <p data-fmsg id="fval-msg" aria-live="polite"></p>
        </div>
        </div>
      </div>
      <section data-readout id="result-stages" aria-labelledby="result-stages-h">
        <h2 data-ptitle id="result-stages-h"><span data-step aria-hidden="true">02</span>Result</h2>
        <p data-nojs>This calculator runs in your browser. Turn on JavaScript to see your result.</p>
        
        <div data-verdict data-state="neutral" id="f_verdict" aria-live="polite">
          <div data-vk><span data-vglyph aria-hidden="true"></span><span id="f_vk">Biggest leak</span></div>
          <div data-vh id="f_leak">—</div>
          <p data-vd id="f_leakd">—</p>
        </div>
        <div data-metric>
          <div data-mk>Overall conversion</div>
          <div data-mv><span id="f_overall">—</span><span data-unit>%</span></div>
          <p data-mexp>Final stage ÷ first stage — the share of the top of the funnel that makes it all the way through.</p>
        </div>
        <div data-metric>
          <div data-mk>Revenue from this funnel</div>
          <div data-mv><span id="f_rev">—</span></div>
          <p data-mexp>Final-stage conversions × value per conversion.</p>
        </div>
        <div data-metric>
          <div data-mk>Fix the weakest step</div>
          <div data-mv data-small><span id="f_impact">—</span></div>
          <p data-mexp id="f_impactExp">—</p>
        </div>
      </section>
    </div>
    </div>
  </section>

  <div data-interp data-depth-label="MID">
    <div data-note><p data-note-k><span data-step aria-hidden="true">03</span>Small rate, big lever.</p><p>Notice how a fraction of a percent of conversion rate moves revenue as much as thousands of extra visitors — usually far cheaper, too. Before buying more traffic, it's almost always worth fixing what happens to the traffic you already have.</p></div>
  </div>

  <section data-tcta data-depth-label="FOUNDATION" aria-labelledby="cta-h" id="ctaCard">
    <div data-eyebrow><span data-step aria-hidden="true">04</span>Next step</div>
    <div data-tcta-grid>
      <h2 id="cta-h" data-tcta-h>A rising conversion rate you can't trust is worse than none</h2>
      <div>
        <p>If your analytics miscounts orders or double-fires conversions, this whole funnel is built on sand. A free foundation audit confirms your conversion tracking is accurate — so the rate you're optimising is the real one.</p>
        <a data-btn data-cta-btn href="/contact/"><span>Request a free audit</span> <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </section>

  <section data-related aria-labelledby="rel-h">
    <h2 id="rel-h">Related</h2>
    <ul>
      <li><a href="/insights/seo-not-bringing-leads/">Why your SEO isn't bringing leads (and how to fix it)</a></li>
      <li><a href="/tools/ad-spend-profitability-calculator/">Ad Spend Profitability Calculator — breakeven ROAS &amp; max CAC</a></li>
      <li><a href="/insights/google-ads-budget-india-startups/">How much should you spend on Google Ads in India to start?</a></li>
    </ul>
  </section>
  <div data-dock hidden aria-hidden="true"><div data-dock-txt><span data-dock-k><span data-vglyph aria-hidden="true"></span><span></span></span><span data-dock-v></span></div><a href="#result" tabindex="-1">Result <span aria-hidden="true">↓</span></a></div>`;

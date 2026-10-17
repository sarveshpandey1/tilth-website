// /tools/ltv-cac-calculator/ — worksheet markup.
//
// Ported verbatim from the frozen Master Design Release design
// "TOOLS/Tilth Tool Template - Ad Spend Calculator.dc.html" (ltv-cac route template).
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
    <nav data-crumb aria-label="Breadcrumb"><a href="/">Home</a> <span data-sep aria-hidden="true">/</span> <a href="/tools/">Free Tools</a> <span data-sep aria-hidden="true">/</span> <span aria-current="page">LTV : CAC Calculator</span></nav>
    <div data-eyebrow>Free tool</div>
    <h1 data-h1 data-th1>Can you afford to pay <span data-acc>more</span> per customer?</h1>
    <div data-thero-row>
      <p data-lede>Your breakeven CAC is the floor. Repeat purchases raise the ceiling. Enter your numbers to see customer lifetime value, your LTV:CAC ratio, and how long it takes to earn back what you spend acquiring a customer.</p>
      <p data-tmeta><b>Founders &amp; growth</b> · ~2 min<br>Needs: Order value/ARPA, retention, CAC</p>
    </div>
  </section>

  <section data-ws data-tool-key="ltv-cac" id="calculator" data-depth-label="SHALLOW" aria-label="LTV : CAC Calculator">
    <div data-toolbar>
      <div data-tabs data-count="4" role="tablist" aria-label="Business model">
        <button data-tab id="tab-ecom" data-m="ecom" aria-controls="mg-ecom" role="tab" aria-selected="true" type="button">Ecommerce / D2C</button>
        <button data-tab id="tab-saas" data-m="saas" aria-controls="mg-saas" role="tab" aria-selected="false" type="button">SaaS / subscription</button>
        <button data-tab id="tab-lead" data-m="lead" aria-controls="mg-lead" role="tab" aria-selected="false" type="button">Lead generation</button>
        <button data-tab id="tab-market" data-m="market" aria-controls="mg-market" role="tab" aria-selected="false" type="button">Marketplace</button>
      </div>
      <label data-cur>Currency <select id="cur"><option value="INR">₹ INR</option><option value="USD">$ USD</option><option value="GBP">£ GBP</option><option value="EUR">€ EUR</option><option value="AED">AED</option><option value="SGD">S$ SGD</option><option value="AUD">A$ AUD</option></select></label>
    </div>
    <div data-ws-grid>
      <div data-inputs>
        <h2 data-ptitle><span data-step aria-hidden="true">01</span>Your numbers</h2>
        <p data-psub id="modelSub">Gross-margin economics for a repeat-purchase business.</p>
        <div data-mgroup data-fields data-model="ecom" id="mg-ecom" role="tabpanel" aria-labelledby="tab-ecom">
        <div data-field>
          <div data-fhead><label data-flabel for="aov">Average order value</label><span data-fhint id="aov-h">Revenue from one purchase</span></div>
          <div data-ctl><span data-pre>₹</span><input type="number" id="aov" min="0" step="50" value="2000" inputmode="numeric" aria-describedby="aov-h aov-msg"></div>
          <input type="range" id="aov_r" min="100" max="50000" step="100" value="2000" aria-label="Average order value">
          <p data-fmsg id="aov-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="margin">Gross margin</label><span data-fhint id="margin-h">% left after product/delivery cost</span></div>
          <div data-ctl><input type="number" id="margin" min="1" max="99" step="1" value="45" inputmode="numeric" aria-describedby="margin-h margin-msg"><span data-suf>%</span></div>
          <input type="range" id="margin_r" min="1" max="95" step="1" value="45" aria-label="Gross margin">
          <p data-fmsg id="margin-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="freq">Purchases per year</label><span data-fhint id="freq-h">How often a customer buys</span></div>
          <div data-ctl><input type="number" id="freq" min="0.1" max="52" step="0.1" value="3" inputmode="decimal" aria-describedby="freq-h freq-msg"></div>
          <input type="range" id="freq_r" min="1" max="24" step="1" value="3" aria-label="Purchases per year">
          <p data-fmsg id="freq-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="years">Customer lifespan</label><span data-fhint id="years-h">Years they keep buying</span></div>
          <div data-ctl><input type="number" id="years" min="0.1" max="20" step="0.1" value="2" inputmode="decimal" aria-describedby="years-h years-msg"></div>
          <input type="range" id="years_r" min="0.5" max="10" step="0.5" value="2" aria-label="Customer lifespan in years">
          <p data-fmsg id="years-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="cac">Cost to acquire a customer</label><span data-fhint id="cac-h">Your current CAC</span></div>
          <div data-ctl><span data-pre>₹</span><input type="number" id="cac" min="1" step="50" value="900" inputmode="numeric" aria-describedby="cac-h cac-msg"></div>
          <input type="range" id="cac_r" min="50" max="20000" step="50" value="900" aria-label="Cost to acquire a customer">
          <p data-fmsg id="cac-msg" aria-live="polite"></p>
        </div>
        </div>
        <div data-mgroup data-fields data-model="saas" id="mg-saas" role="tabpanel" aria-labelledby="tab-saas" hidden>
        <div data-field>
          <div data-fhead><label data-flabel for="arpa">Monthly revenue per account</label><span data-fhint id="arpa-h">ARPA / MRR per customer</span></div>
          <div data-ctl><span data-pre>₹</span><input type="number" id="arpa" min="0" step="50" value="2000" inputmode="numeric" aria-describedby="arpa-h arpa-msg"></div>
          <p data-fmsg id="arpa-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="smargin">Gross margin</label><span data-fhint id="smargin-h">% after hosting &amp; support cost</span></div>
          <div data-ctl><input type="number" id="smargin" min="1" max="99" step="1" value="80" inputmode="numeric" aria-describedby="smargin-h smargin-msg"><span data-suf>%</span></div>
          <p data-fmsg id="smargin-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="churn">Monthly churn</label><span data-fhint id="churn-h">% of customers lost per month</span></div>
          <div data-ctl><input type="number" id="churn" min="0.1" max="100" step="0.1" value="4" inputmode="decimal" aria-describedby="churn-h churn-msg"><span data-suf>%</span></div>
          <p data-fmsg id="churn-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="expansion">Monthly expansion <span data-opt>(optional)</span></label><span data-fhint id="expansion-h">Net upsell revenue %</span></div>
          <div data-ctl><input type="number" id="expansion" min="0" max="100" step="0.1" value="0" inputmode="decimal" aria-describedby="expansion-h expansion-msg"><span data-suf>%</span></div>
          <p data-fmsg id="expansion-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="scac">Cost to acquire a customer</label><span data-fhint id="scac-h">CAC</span></div>
          <div data-ctl><span data-pre>₹</span><input type="number" id="scac" min="1" step="100" value="9000" inputmode="numeric" aria-describedby="scac-h scac-msg"></div>
          <p data-fmsg id="scac-msg" aria-live="polite"></p>
        </div>
        </div>
        <div data-mgroup data-fields data-model="lead" id="mg-lead" role="tabpanel" aria-labelledby="tab-lead" hidden>
        <div data-field>
          <div data-fhead><label data-flabel for="cpl">Cost per lead</label><span data-fhint id="cpl-h">Spend ÷ leads generated</span></div>
          <div data-ctl><span data-pre>₹</span><input type="number" id="cpl" min="0" step="10" value="300" inputmode="numeric" aria-describedby="cpl-h cpl-msg"></div>
          <p data-fmsg id="cpl-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="conv">Lead-to-customer rate</label><span data-fhint id="conv-h">% of leads that become customers</span></div>
          <div data-ctl><input type="number" id="conv" min="0.1" max="100" step="0.1" value="20" inputmode="decimal" aria-describedby="conv-h conv-msg"><span data-suf>%</span></div>
          <p data-fmsg id="conv-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="gp">Avg customer gross profit</label><span data-fhint id="gp-h">Profit from one customer's first deal</span></div>
          <div data-ctl><span data-pre>₹</span><input type="number" id="gp" min="0" step="100" value="4000" inputmode="numeric" aria-describedby="gp-h gp-msg"></div>
          <p data-fmsg id="gp-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="repeat">Lifetime value multiplier</label><span data-fhint id="repeat-h">1 = one-off; 2 = buys twice over</span></div>
          <div data-ctl><input type="number" id="repeat" min="0.1" max="20" step="0.1" value="1.5" inputmode="decimal" aria-describedby="repeat-h repeat-msg"></div>
          <p data-fmsg id="repeat-msg" aria-live="polite"></p>
        </div>
        </div>
        <div data-mgroup data-fields data-model="market" id="mg-market" role="tabpanel" aria-labelledby="tab-market" hidden>
        <div data-field>
          <div data-fhead><label data-flabel for="atv">Average transaction value</label><span data-fhint id="atv-h">GMV per transaction</span></div>
          <div data-ctl><span data-pre>₹</span><input type="number" id="atv" min="0" step="50" value="1500" inputmode="numeric" aria-describedby="atv-h atv-msg"></div>
          <p data-fmsg id="atv-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="take">Take rate / commission</label><span data-fhint id="take-h">% of GMV you keep</span></div>
          <div data-ctl><input type="number" id="take" min="0.1" max="100" step="0.1" value="15" inputmode="decimal" aria-describedby="take-h take-msg"><span data-suf>%</span></div>
          <p data-fmsg id="take-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="txyr">Transactions per user / year</label><span data-fhint id="txyr-h">How often a user transacts</span></div>
          <div data-ctl><input type="number" id="txyr" min="0.1" max="1000" step="0.1" value="6" inputmode="decimal" aria-describedby="txyr-h txyr-msg"></div>
          <p data-fmsg id="txyr-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="myears">User lifespan</label><span data-fhint id="myears-h">Years they keep transacting</span></div>
          <div data-ctl><input type="number" id="myears" min="0.1" max="20" step="0.1" value="2" inputmode="decimal" aria-describedby="myears-h myears-msg"></div>
          <p data-fmsg id="myears-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="mcac">Cost to acquire a user</label><span data-fhint id="mcac-h">CAC</span></div>
          <div data-ctl><span data-pre>₹</span><input type="number" id="mcac" min="1" step="50" value="1200" inputmode="numeric" aria-describedby="mcac-h mcac-msg"></div>
          <p data-fmsg id="mcac-msg" aria-live="polite"></p>
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
          <div data-mk>Customer lifetime value (gross margin)</div>
          <div data-mv><span id="ltv">—</span></div>
          <p data-mexp id="ltvExp">The total gross profit one customer brings over their lifetime.</p>
        </div>
        <div data-metric>
          <div data-mk>LTV : CAC ratio</div>
          <div data-mv><span id="ratio">—</span><span data-unit>: 1</span></div>
          <p data-mexp>A 3:1 ratio is sometimes used as a general reference, but the right target depends on margin, cash position, retention, growth stage and business model. Allowable CAC at that 3:1 reference: <strong id="allow">—</strong>.</p>
        </div>
        <div data-metric>
          <div data-mk><span id="paybackK">Payback period</span></div>
          <div data-mv data-small><span id="payback">—</span><span data-unit id="paybackUnit"> mo</span></div>
          <p data-mexp id="paybackExp">Months of gross profit to earn back CAC. Shorter means less cash tied up.</p>
        </div>
        <div data-metric>
          <div data-mk>Sensitivity &amp; confidence</div>
          <div data-mv data-small><span id="confBadge" data-badge>—</span></div>
          <p data-mexp id="sensExp">—</p>
        </div>
      </section>
    </div>
  </section>

  <div data-interp data-depth-label="MID">
    <div data-note><p data-note-k><span data-step aria-hidden="true">03</span>Honest caveat:</p><p>this is a <em>gross-margin</em> LTV, and it's only as good as your retention inputs — lifespan, churn, or repeat rate — which most businesses estimate rather than measure. Treat the result as a modelled ceiling, not a fact, until you can pull real cohort retention. The 3:1 reference is a rule of thumb, not a law: a cash-tight startup may need faster payback, while a high-margin, low-churn business can justify going lower. Getting that retention measurement right is the foundation work we do first.</p></div>
  </div>

  <section data-tcta data-depth-label="FOUNDATION" aria-labelledby="cta-h" id="ctaCard">
    <div data-eyebrow><span data-step aria-hidden="true">04</span>Next step</div>
    <div data-tcta-grid>
      <h2 id="cta-h" data-tcta-h>Guessing your repeat rate? That's the real problem</h2>
      <div>
        <p>LTV is only as trustworthy as the retention data behind it. A free foundation audit checks whether your analytics can actually measure repeat purchases and cohort retention — before you bet a higher CAC on a number you can't see.</p>
        <a data-btn data-cta-btn href="/contact/"><span>Request a free audit</span> <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </section>

  <section data-related aria-labelledby="rel-h">
    <h2 id="rel-h">Related</h2>
    <ul>
      <li><a href="/tools/ad-spend-profitability-calculator/">Ad Spend Profitability Calculator — breakeven ROAS &amp; max CAC</a></li>
      <li><a href="/insights/startup-marketing-budget-india/">Marketing budget for an early-stage startup in India</a></li>
      <li><a href="/insights/measure-influencer-marketing-roi/">How to measure influencer marketing ROI properly</a></li>
    </ul>
  </section>
  <div data-dock hidden aria-hidden="true"><div data-dock-txt><span data-dock-k><span data-vglyph aria-hidden="true"></span><span></span></span><span data-dock-v></span></div><a href="#result" tabindex="-1">Result <span aria-hidden="true">↓</span></a></div>`;

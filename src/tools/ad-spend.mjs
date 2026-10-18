// /tools/ad-spend-calculator/ — worksheet markup.
//
// Ported verbatim from the frozen Master Design Release design
// "TOOLS/Tilth Tool Template - Ad Spend Calculator.dc.html" (ad-spend route template).
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
    <nav data-crumb aria-label="Breadcrumb"><a href="/">Home</a> <span data-sep aria-hidden="true">/</span> <a href="/tools/">Free Tools</a> <span data-sep aria-hidden="true">/</span> <span aria-current="page">Ad Spend Profitability Calculator</span></nav>
    <div data-eyebrow>Free tool</div>
    <h1 data-h1 data-th1>Is your ad spend actually <span data-acc>profitable?</span></h1>
    <div data-thero-row>
      <p data-lede>Enter three numbers and find your breakeven ROAS, the most you can pay to acquire a customer before you're losing money, and a straight answer on where you stand today. No sign-up; your raw input values stay on your device.</p>
      <p data-tmeta><b>Performance marketers</b> · ~1–3 min<br>Needs: Order value, margin/costs, CAC</p>
    </div>
  </section>

  <section data-ws data-tool-key="ad-spend" id="calculator" data-depth-label="SHALLOW" aria-label="Ad Spend Profitability Calculator">
    <div data-toolbar>
      <div data-tabs data-count="2" role="tablist" aria-label="Calculator mode">
        <button data-tab id="mBasic" data-mode="basic" aria-controls="basicMode" role="tab" aria-selected="true" type="button">Basic</button>
        <button data-tab id="mAdv" data-mode="advanced" aria-controls="advMode" role="tab" aria-selected="false" type="button">Advanced</button>
      </div>
      <label data-cur>Currency <select id="cur"><option value="INR">₹ INR</option><option value="USD">$ USD</option><option value="GBP">£ GBP</option><option value="EUR">€ EUR</option><option value="AED">AED</option><option value="SGD">S$ SGD</option><option value="AUD">A$ AUD</option></select></label>
    </div>
    <div id="basicMode" data-mode-panel role="tabpanel" aria-labelledby="mBasic">
    <div data-ws-grid>
      <div data-inputs>
        <h2 data-ptitle><span data-step aria-hidden="true">01</span>Your numbers</h2>
        <p data-psub>Rough figures are fine — drag the sliders or type. Basic uses gross margin as a stand-in for all variable costs.</p>
        <div data-fields>
        <div data-field>
          <div data-fhead><label data-flabel for="aov">Average order value</label><span data-fhint id="aov-h">Typical revenue from one sale</span></div>
          <div data-ctl><span data-pre>₹</span><input type="number" id="aov" min="0" step="50" value="2000" inputmode="numeric" aria-describedby="aov-h aov-msg"></div>
          <input type="range" id="aov_r" min="100" max="50000" step="100" value="2000" aria-label="Average order value slider">
          <p data-fmsg id="aov-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="margin">Gross margin</label><span data-fhint id="margin-h">% of the sale left after product/delivery cost</span></div>
          <div data-ctl><input type="number" id="margin" min="1" max="99" step="1" value="40" inputmode="numeric" aria-describedby="margin-h margin-msg"><span data-suf>%</span></div>
          <input type="range" id="margin_r" min="1" max="95" step="1" value="40" aria-label="Gross margin slider">
          <p data-fmsg id="margin-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="cac">What you pay to get one customer</label><span data-fhint id="cac-h">Your current cost per acquisition (0 = skip)</span></div>
          <div data-ctl><span data-pre>₹</span><input type="number" id="cac" min="0" step="50" value="800" inputmode="numeric" aria-describedby="cac-h cac-msg"></div>
          <input type="range" id="cac_r" min="0" max="20000" step="50" value="800" aria-label="Cost per acquisition slider">
          <p data-fmsg id="cac-msg" aria-live="polite"></p>
        </div>
        </div>
      </div>
      <section data-readout id="result" aria-labelledby="result-h">
        <h2 data-ptitle id="result-h"><span data-step aria-hidden="true">02</span>Result</h2>
        <p data-nojs>This calculator runs in your browser. Turn on JavaScript to see your result.</p>
        
        <div data-verdict data-state="neutral" id="verdict" aria-live="polite">
          <div data-vk><span data-vglyph aria-hidden="true"></span><span id="verdict_k">Your verdict</span></div>
          <div data-vh id="verdict_h">Enter your cost per customer</div>
          <p data-vd id="verdict_d">Add what you currently pay to acquire a customer to see whether you're above or below breakeven.</p>
        </div>
        <div data-metric>
          <div data-mk>Breakeven ROAS</div>
          <div data-mv><span id="roas">2.5</span><span data-unit>×</span></div>
          <p data-mexp>Every <span data-cur1>₹1</span> of ad spend has to bring back at least this much in sales just to break even — before you've made a single <span data-curword>rupee</span> of profit.</p>
        </div>
        <div data-metric>
          <div data-mk>Max profitable cost per customer</div>
          <div data-mv><span id="maxcac">₹800</span></div>
          <p data-mexp>Pay more than this to acquire a customer and you lose money on the first order. This is your breakeven CAC.</p>
        </div>
      </section>
    </div>
    </div>
    <div id="advMode" data-mode-panel role="tabpanel" aria-labelledby="mAdv" hidden>
    <div data-ws-grid>
      <div data-inputs>
        <h2 data-ptitle><span data-step aria-hidden="true">01</span>Full unit economics</h2>
        <p data-psub>Enter what you know — each field defaults to a sensible value. This models real contribution margin, not just gross margin.</p>
        <div data-fields data-dense>
        <div data-field>
          <div data-fhead><label data-flabel for="sp">Selling price</label></div>
          <div data-ctl><span data-pre>₹</span><input type="number" id="sp" min="0" step="10" value="2000" inputmode="numeric" aria-describedby="sp-msg"></div>
          <p data-fmsg id="sp-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="pc">Product cost (COGS)</label></div>
          <div data-ctl><span data-pre>₹</span><input type="number" id="pc" min="0" step="10" value="700" inputmode="numeric" aria-describedby="pc-msg"></div>
          <p data-fmsg id="pc-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="ship">Shipping you pay</label></div>
          <div data-ctl><span data-pre>₹</span><input type="number" id="ship" min="0" step="5" value="80" inputmode="numeric" aria-describedby="ship-msg"></div>
          <p data-fmsg id="ship-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="ful">Fulfilment / packing</label></div>
          <div data-ctl><span data-pre>₹</span><input type="number" id="ful" min="0" step="5" value="40" inputmode="numeric" aria-describedby="ful-msg"></div>
          <p data-fmsg id="ful-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="gw">Payment gateway fee</label></div>
          <div data-ctl><input type="number" id="gw" min="0" max="20" step="0.1" value="2" inputmode="decimal" aria-describedby="gw-msg"><span data-suf>%</span></div>
          <p data-fmsg id="gw-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="plat">Marketplace / platform fee</label></div>
          <div data-ctl><input type="number" id="plat" min="0" max="50" step="0.5" value="0" inputmode="decimal" aria-describedby="plat-msg"><span data-suf>%</span></div>
          <p data-fmsg id="plat-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="disc">Average discount</label></div>
          <div data-ctl><input type="number" id="disc" min="0" max="95" step="1" value="10" inputmode="numeric" aria-describedby="disc-msg"><span data-suf>%</span></div>
          <p data-fmsg id="disc-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="ret">Return / cancellation rate</label></div>
          <div data-ctl><input type="number" id="ret" min="0" max="100" step="1" value="8" inputmode="numeric" aria-describedby="ret-msg"><span data-suf>%</span></div>
          <p data-fmsg id="ret-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="acac">Current CAC</label></div>
          <div data-ctl><span data-pre>₹</span><input type="number" id="acac" min="0" step="10" value="400" inputmode="numeric" aria-describedby="acac-msg"></div>
          <p data-fmsg id="acac-msg" aria-live="polite"></p>
        </div>
        <div data-field>
          <div data-fhead><label data-flabel for="dm">Desired profit margin</label></div>
          <div data-ctl><input type="number" id="dm" min="0" max="90" step="1" value="15" inputmode="numeric" aria-describedby="dm-msg"><span data-suf>%</span></div>
          <p data-fmsg id="dm-msg" aria-live="polite"></p>
        </div>
        </div>
      </div>
      <section data-readout id="result-adv" aria-labelledby="result-adv-h">
        <h2 data-ptitle id="result-adv-h"><span data-step aria-hidden="true">02</span>Result</h2>
        <p data-nojs>This calculator runs in your browser. Turn on JavaScript to see your result.</p>
        
        <div data-verdict data-state="neutral" id="a_verdict" aria-live="polite">
          <div data-vk><span data-vglyph aria-hidden="true"></span><span id="a_vk">Profit after advertising</span></div>
          <div data-vh id="a_vh">—</div>
          <p data-vd id="a_vd">—</p>
        </div>
        <div data-metric>
          <div data-mk>Contribution margin per order</div>
          <div data-mv><span id="a_contrib">—</span></div>
          <p data-mexp id="a_contribExp">—</p>
        </div>
        <div data-metric>
          <div data-mk>Break-even CAC <span data-sep2 aria-hidden="true">·</span> Target CAC</div>
          <div data-mv data-small><span id="a_beCac">—</span><span data-sep2 aria-hidden="true">·</span><span id="a_tgtCac">—</span></div>
          <p data-mexp>Break-even CAC is the most you can spend per customer without losing money. Target CAC is what leaves your desired <span id="a_dmEcho">15</span>% margin.</p>
        </div>
        <div data-metric>
          <div data-mk>Break-even ROAS <span data-sep2 aria-hidden="true">·</span> Target ROAS</div>
          <div data-mv data-small><span id="a_beRoas">—</span><span data-unit>×</span><span data-sep2 aria-hidden="true">·</span><span id="a_tgtRoas">—</span><span data-unit>×</span></div>
          <p data-mexp>Revenue returned per <span data-cur1>₹1</span> of ad spend needed to break even, and to hit your target margin. Based on revenue net of discounts and returns.</p>
        </div>
        <div data-metric>
          <div data-mk>Where the order value goes</div>
          <div data-mv data-small><span id="a_net">—</span><span data-unit> net rev</span></div>
          <p data-mexp id="a_breakdown">—</p>
        </div>
      </section>
    </div>
      <details data-method><summary>Method &amp; assumptions</summary><p>Net revenue = selling price − discount. Variable cost = product + shipping + fulfilment + gateway &amp; platform fees (fees charged on net revenue). Contribution margin = net revenue − variable cost. Returns are modelled as: the product is recovered (restockable) but shipping, fulfilment and fees on a returned order are lost and no revenue is booked — so effective contribution per acquired order = (1 − return rate) × contribution − return rate × (shipping + fulfilment + fees). Break-even CAC = effective contribution. Target CAC leaves your desired margin on revenue net of returns. ROAS = net revenue ÷ CAC. GST/taxes are treated as pass-through and excluded. These are per-order, first-purchase economics — repeat purchases (LTV) can justify a higher CAC; see the LTV:CAC tool.</p></details>
    </div>
  </section>

  <div data-interp data-depth-label="MID">
    <div data-note><p data-note-k><span data-step aria-hidden="true">03</span>Honest caveat:</p><p>this is first-order economics — it assumes one purchase per customer. If people buy again, their lifetime value can justify a higher cost per customer. But that only counts if you can actually <em>measure</em> repeat rate and attribute it. If you can't yet, breakeven is your floor — spend above it on faith and you're funding losses you can't see.</p></div>
  </div>

  <section data-tcta data-depth-label="FOUNDATION" aria-labelledby="cta-h" id="ctaCard">
    <div data-eyebrow><span data-step aria-hidden="true">04</span>Next step</div>
    <div data-tcta-grid>
      <h2 id="cta-h" data-tcta-h>The numbers only mean something if your tracking is right</h2>
      <div>
        <p>Most "profitable" campaigns look very different once the tracking is fixed. A Foundation Audit checks whether your CAC, ROAS, and conversions are being measured correctly — before you scale a number that might be wrong.</p>
        <a data-btn data-cta-btn href="/contact/"><span>Discuss your growth project</span> <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </section>

  <section data-related aria-labelledby="rel-h">
    <h2 id="rel-h">Related reading</h2>
    <ul>
      <li><a href="/insights/audit-your-ad-spend/">How to tell if your ad spend is actually profitable (a 5-minute self-audit)</a></li>
      <li><a href="/insights/google-ads-budget-india-startups/">How much should you spend on Google Ads in India to start?</a></li>
      <li><a href="/insights/marketing-attribution-explained-simply/">Marketing attribution for small businesses, explained simply</a></li>
    </ul>
  </section>
  <div data-dock hidden aria-hidden="true"><div data-dock-txt><span data-dock-k><span data-vglyph aria-hidden="true"></span><span></span></span><span data-dock-v></span></div><a href="#result" tabindex="-1">Result <span aria-hidden="true">↓</span></a></div>`;

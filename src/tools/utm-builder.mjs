// /tools/utm-builder/ — worksheet markup.
//
// Ported verbatim from the frozen Master Design Release design
// "TOOLS/Tilth Tool Template - Ad Spend Calculator.dc.html" (utm-builder route template).
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
    <nav data-crumb aria-label="Breadcrumb"><a href="/">Home</a> <span data-sep aria-hidden="true">/</span> <a href="/tools/">Free Tools</a> <span data-sep aria-hidden="true">/</span> <span aria-current="page">UTM Campaign URL Builder</span></nav>
    <div data-eyebrow>Free tool</div>
    <h1 data-h1 data-th1>Every click, <span data-acc>attributable</span>.</h1>
    <div data-thero-row>
      <p data-lede>Untagged links are where attribution goes to die — traffic lands in "direct / none" and you never learn what worked. Build clean, consistent UTM links so GA4 can tell you exactly which campaign drove the result.</p>
      <p data-tmeta><b>Marketers &amp; agencies</b> · ~1 min<br>Needs: Destination URL + campaign fields</p>
    </div>
  </section>

  <section data-ws data-tool-key="utm-builder" id="calculator" data-depth-label="SHALLOW" aria-label="UTM Campaign URL Builder">
    <div data-toolbar data-empty-bar></div>
    <div data-ws-grid>
      <div data-inputs>
        <h2 data-ptitle><span data-step aria-hidden="true">01</span>Build your link</h2>
        <p data-psub>Fill the fields — the tagged URL updates live below. Keep values lowercase and consistent (e.g. always <em>facebook</em>, never <em>FB</em>).</p>
        <div data-fields>
        <div data-field data-text>
          <div data-fhead><label data-flabel for="url">Destination URL</label><span data-fhint id="url-h">The page you're linking to</span></div>
          <div data-ctl><input type="text" id="url" placeholder="https://wearetilth.com/contact/" inputmode="url" autocomplete="off" aria-describedby="url-h url-msg"></div>
          <p data-fmsg id="url-msg" aria-live="polite"></p>
        </div>
        <div data-field data-text>
          <div data-fhead><label data-flabel for="source">Campaign source · utm_source</label><span data-fhint id="source-h">Where the traffic comes from</span></div>
          <div data-ctl><input type="text" id="source" list="sourceList" placeholder="e.g. google, facebook, newsletter" autocomplete="off" aria-describedby="source-h source-msg"></div>
          <datalist id="sourceList"><option value="google"><option value="facebook"><option value="instagram"><option value="linkedin"><option value="twitter"><option value="newsletter"><option value="whatsapp"></datalist>
          <p data-fmsg id="source-msg" aria-live="polite"></p>
        </div>
        <div data-field data-text>
          <div data-fhead><label data-flabel for="medium">Campaign medium · utm_medium</label><span data-fhint id="medium-h">The marketing channel type</span></div>
          <div data-ctl><input type="text" id="medium" list="mediumList" placeholder="e.g. cpc, email, social" autocomplete="off" aria-describedby="medium-h medium-msg"></div>
          <datalist id="mediumList"><option value="cpc"><option value="email"><option value="social"><option value="banner"><option value="affiliate"><option value="referral"><option value="organic"></datalist>
          <p data-fmsg id="medium-msg" aria-live="polite"></p>
        </div>
        <div data-field data-text>
          <div data-fhead><label data-flabel for="campaign">Campaign name · utm_campaign</label><span data-fhint id="campaign-h">The specific campaign</span></div>
          <div data-ctl><input type="text" id="campaign" placeholder="e.g. diwali_sale_2026" autocomplete="off" aria-describedby="campaign-h campaign-msg"></div>
          <p data-fmsg id="campaign-msg" aria-live="polite"></p>
        </div>
        <div data-field data-text>
          <div data-fhead><label data-flabel for="term">Campaign term · utm_term <span data-opt>(optional)</span></label><span data-fhint id="term-h">Paid keyword, if any</span></div>
          <div data-ctl><input type="text" id="term" placeholder="e.g. marketing_agency_bengaluru" autocomplete="off" aria-describedby="term-h term-msg"></div>
          <p data-fmsg id="term-msg" aria-live="polite"></p>
        </div>
        <div data-field data-text>
          <div data-fhead><label data-flabel for="content">Campaign content · utm_content <span data-opt>(optional)</span></label><span data-fhint id="content-h">To tell two versions apart (A/B)</span></div>
          <div data-ctl><input type="text" id="content" placeholder="e.g. hero_cta_v2" autocomplete="off" aria-describedby="content-h content-msg"></div>
          <p data-fmsg id="content-msg" aria-live="polite"></p>
        </div>
        </div>
      </div>
      <section data-readout id="result" aria-labelledby="result-h">
        <h2 data-ptitle id="result-h"><span data-step aria-hidden="true">02</span>Result</h2>
        <p data-nojs>This calculator runs in your browser. Turn on JavaScript to see your result.</p>
        
        <div data-metric>
          <div data-mk>Your tagged URL</div>
          <div data-output id="output">Enter a destination URL to begin.</div>
          <button data-copy id="copyBtn" type="button" disabled="disabled">Copy link</button>
          <span data-sr id="copyStatus" role="status" aria-live="polite"></span>
        </div>
      </section>
    </div>
  </section>

  <div data-interp data-depth-label="MID">
    <div data-note><p data-note-k><span data-step aria-hidden="true">03</span>The point isn't the link — it's the convention.</p><p>UTMs only work if everyone tags the same way every time. Pick one spelling and case for each source and medium and never deviate; <em>facebook / cpc</em> and <em>FB / CPC</em> become two different sources in GA4 and quietly split your data. Agree the naming rules once, then use this builder to enforce them.</p></div>
  </div>

  <section data-tcta data-depth-label="FOUNDATION" aria-labelledby="cta-h" id="ctaCard">
    <div data-eyebrow><span data-step aria-hidden="true">04</span>Next step</div>
    <div data-tcta-grid>
      <h2 id="cta-h" data-tcta-h>UTMs are only step one of trustworthy tracking</h2>
      <div>
        <p>Clean links don't help if the conversion events on the other end are broken. A Foundation Audit checks your GA4 setup end to end — tagging, events, and attribution — so the traffic you tag actually gets credited correctly.</p>
        <a data-btn data-cta-btn href="/contact/"><span>Discuss your growth project</span> <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </section>

  <section data-related aria-labelledby="rel-h">
    <h2 id="rel-h">Related</h2>
    <ul>
      <li><a href="/insights/marketing-attribution-explained-simply/">Marketing attribution for small businesses, explained simply</a></li>
      <li><a href="/insights/ga4-conversion-tracking/">GA4 conversion tracking: the setup checklist before you scale ads</a></li>
      <li><a href="/insights/measure-influencer-marketing-roi/">How to measure influencer marketing ROI properly</a></li>
    </ul>
  </section>`;

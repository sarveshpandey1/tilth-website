// / — Brand v3 (approved design: "Tilth Brand v3.dc.html").
// Copy and structure come from the design; brands, services and contact details
// come from the existing content model. SEO, schema and the FormSubmit contact
// integration are carried over unchanged.
import { site, brandExperience, homeV3 } from "../data.mjs";
import { orgSchema, websiteSchema, esc } from "../render.mjs";

const path = "/";
const FORM_ACTION = "https://formsubmit.co/aaaece001c447cdc100c9df5d66fd5ee";

// The rail loops by translating -50%, so the set is emitted twice. The clone is a
// purely visual duplicate and is hidden from assistive tech, so six names are
// announced rather than twelve (same contract as the previous build).
const brandItem = (b, hidden) => `<li class="v3-brand" data-v3-brand${hidden ? ' aria-hidden="true"' : ""}>${esc(b.name)}</li>`;
const brandSet = hidden => brandExperience.map(b => brandItem(b, hidden)).join("");

const stat = s => `<div class="v3-stat">
      <div class="v3-stat__v${s.tone ? ` is-${s.tone}` : ""}">${esc(s.v)}${s.unit ? `<span class="unit">${esc(s.unit)}</span>` : ""}</div>
      <div class="v3-stat__l">${esc(s.label)}</div>
    </div>`;

const methodCell = (m, i) => `<div class="v3-method__cell v3-reveal">
      <div class="v3-method__n${i === 2 ? " is-clay" : ""}">${esc(m.n)}</div>
      <h3>${esc(m.name)}</h3>
      <p>${esc(m.desc)}</p>
    </div>`;

const serviceRow = s => `<a class="v3-srow" href="${s.href}">
    <span class="v3-srow__n">${esc(s.n)}</span>
    <div class="v3-srow__inner">
      <h3 class="v3-srow__title">${esc(s.title)}</h3>
      <p class="v3-srow__body">${esc(s.body)}</p>
      <span class="v3-srow__arrow" aria-hidden="true">→</span>
    </div>
  </a>`;

const indCell = i => `<li class="v3-ind" data-v3-ind>${i.href ? `<a href="${i.href}">${esc(i.label)}</a>` : esc(i.label)}</li>`;

const evCard = c => `<article class="v3-ev" data-v3-case="${c.cat}">
      <div class="v3-ev__top"><span class="v3-ev__tag">${esc(c.tag)}</span><span class="v3-ev__dur">${esc(c.dur)}</span></div>
      <div class="v3-ev__metrics">
        <div><div class="v3-ev__m">${esc(c.m1)}</div><div class="v3-ev__ml">${esc(c.l1)}</div></div>
        <div><div class="v3-ev__m is-moss">${esc(c.m2)}</div><div class="v3-ev__ml">${esc(c.l2)}</div></div>
      </div>
      <h3>${esc(c.title)}</h3>
      <p>${esc(c.body)}</p>
    </article>`;

const cases = homeV3.cases.filter(c => c.publishApproved);
const first = homeV3.symptoms[0];

// state the diagnostic hydrates from
const symData = {};
homeV3.symptoms.forEach(s => { symData[s.id] = { label: s.label, layer: s.layer, depth: s.depth, pct: s.pct, cause: s.cause, fix: s.fix }; });

const main = `
<section class="v3-hero v3-sec--grid" id="top" data-depth-label="00.0m">
  <div class="v3-hero__kicker v3-mono">
    <span class="is-moss">${esc(homeV3.kicker.left)}</span>
    <span>${esc(homeV3.kicker.right)}</span>
  </div>

  <h1 class="v3-h1" data-v3-h1>Depth<br>before<br><span class="is-moss">growth</span></h1>

  <div class="v3-strata" data-v3-strata aria-hidden="true">
    ${homeV3.strata.map((l, i) => `<div class="v3-stratum" data-v3-stratum="${i}">
      <span class="v3-stratum__bar"${i === 4 ? " data-v3-deep-bar" : ""}></span>
      <span class="v3-stratum__label"${i === 4 ? " data-v3-deep-label" : ""}>${esc(l)}</span>
    </div>`).join("\n    ")}
  </div>

  <div class="v3-hero__foot">
    <p class="v3-hero__lede">${esc(homeV3.heroLede)}</p>
    <div class="v3-hero__cta">
      <a class="v3-btn" href="/contact/">Discuss your growth project</a>
      <a class="v3-btn v3-btn--ghost" href="#depth">Find your depth →</a>
    </div>
  </div>

  <div class="v3-stats">
    ${homeV3.stats.map(stat).join("\n    ")}
  </div>
</section>

<section class="v3-brandsec" id="brand-experience" data-depth-label="04.0m">
  <div class="v3-brandsec__head">
    <h2 class="v3-mono" style="color:var(--mosstext);margin:0">SELECTED BRAND EXPERIENCE</h2>
    <div class="v3-brandsec__note">Experience from the founder and core team.</div>
  </div>
  <div class="v3-brandrail" data-v3-brandrail>
    <ul class="v3-brandtrack" data-v3-brandtrack>
      ${brandSet(false)}${brandSet(true)}
    </ul>
  </div>
</section>

<section class="v3-sec" id="problem" data-depth-label="12.4m">
  <div class="v3-split">
    <div>
      <div class="v3-mono v3-eyebrow v3-reveal">01 — THE PATTERN WE KEPT SEEING</div>
      <h2 class="v3-h2 v3-reveal" style="max-width:15ch">Growth doesn't stall on budget. It stalls on the <span style="color:var(--clay)">foundation</span></h2>
      <p class="v3-lede v3-reveal">Teams push more budget through broken tracking, unclear positioning and sites that don't convert. Spend climbs, efficiency drops, and no one can say which part actually worked. More budget just makes the leak more expensive.</p>
    </div>
    <div class="v3-bands" data-v3-bands>
      <div class="v3-band" data-v3-band="0"><span class="v3-band__name">Paid media</span><span class="v3-band__d">SURFACE</span></div>
      <div class="v3-band" data-v3-band="1"><span class="v3-band__name">Creative</span><span class="v3-band__d">04.0m</span></div>
      <div class="v3-band" data-v3-band="2"><span class="v3-band__name">Funnel &amp; positioning</span><span class="v3-band__d">08.0m</span></div>
      <div class="v3-band v3-band--deep" data-v3-band="3">
        <div class="v3-band__row"><span class="v3-band__name">Measurement</span><span class="v3-band__d">12.4m — CONSTRAINT</span></div>
        <p>Nine times out of ten the constraint sits here — and every layer above it inherits the error.</p>
      </div>
    </div>
  </div>
</section>

<section class="v3-sec v3-sec--inv" id="depth" data-depth-label="12.4m">
  <div class="v3-headrow">
    <div>
      <div class="v3-mono" style="color:var(--imut);margin-bottom:20px">02 — THE 30-SECOND DIAGNOSTIC</div>
      <h2 class="v3-h2" style="max-width:16ch">Tell us the symptom. We'll tell you the depth.</h2>
    </div>
    <p class="v3-headrow__note" style="color:var(--imut)">The same answer we'd give on the first call — no form, no wait.</p>
  </div>

  <div class="v3-symrow">
    ${homeV3.symptoms.map((s, i) => `<button class="v3-sym" type="button" data-v3-sym="${s.id}" aria-pressed="${i === 0 ? "true" : "false"}">${esc(s.label)}</button>`).join("\n    ")}
  </div>

  <div class="v3-dxgrid">
    <div class="v3-dx">
      <div class="v3-dx__k">LIKELY DEPTH</div>
      <div class="v3-dx__layer" data-v3-dx-layer>${esc(first.layer)}</div>
      <div class="v3-dx__meter">
        <span class="v3-dx__track"><span class="v3-dx__bar" data-v3-dx-bar style="width:${first.pct}%"></span></span>
        <span class="v3-dx__depth" data-v3-dx-depth>${esc(first.depth)}</span>
      </div>
    </div>
    <div class="v3-dx">
      <div class="v3-dx__k">WHAT'S ACTUALLY HAPPENING</div>
      <p data-v3-dx-cause>${esc(first.cause)}</p>
    </div>
    <div class="v3-dx v3-dx--cta">
      <div class="v3-dx__k">WHERE WE'D START</div>
      <p data-v3-dx-fix>${esc(first.fix)}</p>
      <a class="v3-dx__cta" href="/contact/"><span>Get this audited →</span></a>
    </div>
  </div>
</section>

<section class="v3-sec" id="method" data-depth-label="20.0m">
  <div class="v3-mono v3-eyebrow">03 — HOW WE WORK</div>
  <h2 class="v3-h2" style="max-width:18ch;margin-bottom:48px">Diagnose before you prescribe. Scale only what the system can carry.</h2>
  <div class="v3-method">
    ${homeV3.method.map(methodCell).join("\n    ")}
  </div>
</section>

<section id="services" data-depth-label="24.0m" style="padding:0 var(--pad) var(--sy)">
  <div class="v3-srow-head">
    <h2 class="v3-h2">One partner. Whole system.</h2>
    <a class="v3-srow-head__all" href="/services/">ALL SERVICES →</a>
  </div>
  ${homeV3.services.map(serviceRow).join("\n  ")}
</section>

<div class="v3-indrail">
  <ul class="v3-indgrid">
    ${homeV3.industries.map(indCell).join("\n    ")}
  </ul>
</div>

<section class="v3-sec v3-sec--raise" id="evidence" data-depth-label="30.0m">
  <div class="v3-headrow">
    <div>
      <div class="v3-mono v3-eyebrow">04 — EVIDENCE</div>
      <h2 class="v3-h2" style="max-width:15ch">Outcomes over vanity metrics</h2>
    </div>
    <div class="v3-filters">
      ${homeV3.filters.map((f, i) => `<button class="v3-filt" type="button" data-v3-filt="${f.id}" aria-pressed="${i === 0 ? "true" : "false"}">${esc(f.label)}</button>`).join("\n      ")}
    </div>
  </div>
  <div class="v3-evgrid">
    ${cases.map(evCard).join("\n    ")}
  </div>
  <p class="v3-evnote">ANONYMISED UNDER CLIENT CONFIDENTIALITY / FIGURES AS REPORTED BY THE CLIENT</p>
</section>

<section class="v3-sec" id="tools" data-depth-label="34.0m">
  <div class="v3-split v3-split--mid">
    <div>
      <div class="v3-mono v3-eyebrow">05 — THE TOOLS LAYER</div>
      <h2 class="v3-h2" style="max-width:14ch">The same diagnostics we run, free to use</h2>
      <p class="v3-lede" style="max-width:42ch;margin-top:24px">Seven calculators built out of real engagements — unit economics, funnel maths, ad-spend profitability, benchmarks. No signup, no gated PDF.</p>
      <a class="v3-toolslink" href="/tools/">OPEN THE TOOLS HUB →</a>
    </div>
    <div class="v3-calc" data-v3-calc>
      <div class="v3-calc__top"><span style="color:var(--mosstext)">LIVE / UNIT ECONOMICS</span><span style="color:var(--stone)">01 / 07</span></div>
      <div class="v3-calc__fields">
        <label>
          <span class="v3-calc__row">Monthly ad spend<output data-v3-out="spend">₹5,00,000</output></span>
          <input type="range" min="50000" max="3000000" step="50000" value="500000" data-v3-calc-in="spend" aria-label="Monthly ad spend">
        </label>
        <label>
          <span class="v3-calc__row">New customers / month<output data-v3-out="cust">250</output></span>
          <input type="range" min="10" max="2000" step="10" value="250" data-v3-calc-in="cust" aria-label="New customers per month">
        </label>
        <label>
          <span class="v3-calc__row">Lifetime value per customer<output data-v3-out="ltv">₹8,000</output></span>
          <input type="range" min="500" max="60000" step="500" value="8000" data-v3-calc-in="ltv" aria-label="Lifetime value per customer">
        </label>
      </div>
      <div class="v3-calc__out">
        <div><div class="v3-calc__k">CAC</div><div class="v3-calc__v" data-v3-out="cac">₹2,000</div></div>
        <div><div class="v3-calc__k">LTV : CAC</div><div class="v3-calc__v is-moss" data-v3-out="ratio">4.0×</div></div>
        <div style="min-width:0"><div class="v3-calc__k">VERDICT</div><div class="v3-calc__verdict" data-v3-out="verdict">Healthy. There's room to scale — if tracking can prove it.</div></div>
      </div>
    </div>
  </div>
</section>

<section id="founder" data-depth-label="38.0m" style="padding:0 var(--pad) var(--sy)">
  <div class="v3-split v3-split--mid">
    <div class="v3-portrait v3-reveal"><img src="/anuja.jpg" alt="Anuja, founder of Tilth" width="400" height="500" loading="lazy" decoding="async"></div>
    <div>
      <div class="v3-mono v3-eyebrow v3-reveal">06 — FOUNDER-LED</div>
      <h2 class="v3-h2 v3-reveal" style="max-width:15ch">10 years of experience across 5 industries. <span style="color:var(--clay)">One mistake</span> repeated every time.</h2>
      <p class="v3-lede v3-reveal">Tilth is led by Anuja, who has spent a decade running paid media, building affiliate programs and rebuilding the measurement underneath growth — a foundation-first partner for brands that want growth to last. Senior strategy stays on every engagement; you're not handed to a junior team after the pitch.</p>
      <a class="v3-textlink v3-reveal" href="/about/">MEET THE TEAM →</a>
    </div>
  </div>
</section>

<section class="v3-contact" id="contact" data-depth-label="42.0m">
  <div class="v3-contact__grid">
    <div>
      <div class="v3-mono v3-contact__eyebrow">07 — NEXT STEP</div>
      <h2 class="v3-contact__h">Let's talk about your growth</h2>
      <p class="v3-contact__p">Tell us what you're trying to grow. We'll review the foundations before recommending the work.</p>
      <div class="v3-contact__links">
        <a href="mailto:${esc(site.email)}">${esc(site.email)}</a>
        <a href="tel:${site.phoneHref}">${esc(site.phone)}</a>
      </div>
    </div>
    <form class="v3-form" data-lead-form action="${FORM_ACTION}" method="POST">
      <input type="hidden" name="_subject" value="New growth enquiry — wearetilth.com (homepage)">
      <input type="hidden" name="_template" value="table">
      <input type="hidden" name="_captcha" value="false">
      <input type="hidden" name="_next" value="${site.base}/thank-you/">
      <input type="hidden" name="constraint" data-v3-constraint value="">
      <input type="text" name="_honey" class="v3-hp" tabindex="-1" autocomplete="off" aria-hidden="true">
      <div class="v3-form__inner">
        <label class="v3-field">NAME<input required name="name" type="text" autocomplete="name"></label>
        <label class="v3-field">WORK EMAIL<input required type="email" name="email" autocomplete="email"></label>
        <fieldset class="v3-field" style="border:0;padding:0;margin:0">
          <legend style="padding:0">WHAT'S THE CONSTRAINT?</legend>
          <div class="v3-fsyms">
            ${homeV3.symptoms.map(s => `<button class="v3-fsym" type="button" data-v3-fsym="${s.id}" aria-pressed="false">${esc(s.label)}</button>`).join("\n            ")}
          </div>
        </fieldset>
        <label class="v3-field">ANYTHING ELSE<textarea name="note" rows="3"></textarea></label>
        <button class="v3-submit" type="submit">Send it →</button>
      </div>
    </form>
  </div>
</section>

<script type="application/json" data-v3-symdata>${JSON.stringify(symData)}</script>
`;

export default {
  path,
  shell: "v3",
  shellClass: "v3-home",
  navCta: "Discuss your growth",
  title: "Growth Marketing Agency for India & US Brands | Tilth",
  description: "Tilth is a founder-led growth marketing agency. We strengthen the foundations beneath growth — measurement, funnel, positioning and creative — then scale performance against verified return.",
  ogTitle: "Depth before growth",
  ogDescription: "A growth marketing agency built on stronger foundations. Diagnose before you prescribe; scale only what the system can carry.",
  schema: [websiteSchema(), orgSchema()],
  main
};

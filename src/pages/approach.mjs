// /approach/ — Brand v3, CORE COMPANY family.
//
// Ported from the frozen Master Design Release design
// "CORE_COMPANY/Tilth Approach.dc.html", per CORE_COMPANY_DESIGN_REPORT.md §7.
//
// This route was hand-authored HTML; it joins the generated set here so it
// shares the Phase 0 shell, the family stylesheet and one content source with
// the rest of the family. All 28 design strings were verified verbatim against
// the previous approach/index.html before this port.
//
// Primary component: the PHASE INDEX plus the six-phase sequence. The two
// Foundation phases sit together on their own raised ground with a Moss inset
// rule, so the page's argument — foundation first — is structural rather than
// stated. Deliberately NOT a cycle diagram (that would collide with the
// COMPOUNDING LOOP signature) and NOT a sequential lighting chain (the
// DECISION CHAIN). The source assigns phases no depth labels, timings,
// deliverables or service mappings, so none are shown; the depth readout
// appears on the hero and CTA only.
//
// SCHEMA: the HowTo step names and order are derived from the same PHASES
// array that renders the visible phases, so the two cannot drift. The FAQPage
// answers are derived from the visible answer markup with tags stripped. The
// step summaries and the page metadata are the authoritative production values.
//
// Prototype-only code is not ported: the .dc runtime, the review controls and
// the display-fit safeguard.
import { breadcrumbs, esc } from "../render.mjs";

const path = "/approach/";
const bc = breadcrumbs([{ name: "Home", path: "/" }, { name: "Approach", path }]);

const num = i => String(i + 1).padStart(2, "0");

// The six phases, in order. `found` marks the two foundation phases.
// `body` is the visible copy; `step` is the HowTo step summary.
const PHASES = [
  {
    id: "the-survey", name: "The Survey", found: true,
    body: [
      "Discovery and strategy. Before touching a single channel, we map the ground: what's being spent, what's being tracked, what's actually converting, and where the money is quietly leaking. This is the free foundation audit — and often the first time a brand sees the real picture.",
      "Most engagements reveal more in this phase than the client expected. That's not a sales tactic; it's just what happens when someone finally looks properly."
    ],
    step: "Discovery and strategy — map what's being spent, tracked, and converting, and where money is leaking. This is the free foundation audit."
  },
  {
    id: "the-tilth", name: "The Tilth", found: true,
    body: [
      "The work the agency name is built on. Tracking and analytics set up correctly, conversion events defined around revenue, audiences built on behaviour, messaging and positioning locked. This is the unglamorous work most agencies skip because it doesn't look impressive in a pitch deck — and it's exactly why their campaigns underperform.",
      "Nothing scales until this is solid. That's the whole point."
    ],
    step: "Foundation — tracking and analytics set up correctly, conversion events defined around revenue, audiences built on behaviour, positioning locked."
  },
  {
    id: "the-sowing", name: "The Sowing", found: false,
    body: ["Launch and activation. Now — and only now — campaigns go live. Because the foundation is in place, we're planting into prepared ground: the right channels, the right audiences, the right events being measured from day one."],
    step: "Launch and activation — the right channels and audiences, measured from day one, planted into prepared ground."
  },
  {
    id: "the-tending", name: "The Tending", found: false,
    body: ["Ongoing growth. Daily optimisation against real metrics — reallocating spend toward what works, cutting what doesn't, and compounding the gains. This is where good foundations pay off: every decision is based on data you can actually trust."],
    step: "Ongoing growth — daily optimisation against real metrics, reallocating spend toward what works."
  },
  {
    id: "the-harvest", name: "The Harvest", found: false,
    body: ["Measurement and scale. Reporting that connects spend to business outcomes — not impressions, reach, or follower counts. When the numbers are real, scaling is a decision, not a gamble."],
    step: "Measurement and scale — reporting that connects spend to business outcomes, not vanity metrics."
  },
  {
    id: "the-renewal", name: "The Renewal", found: false,
    body: ["Refresh and evolve. Markets shift, audiences move, creative fatigues. We prepare the ground for the next season — revisiting the foundation, testing new channels, and keeping the system healthy rather than letting it quietly decay."],
    step: "Refresh and evolve — prepare the ground for the next season, revisiting the foundation and testing new channels."
  }
];

// FAQ — `a` is the visible answer markup; the schema text is derived from it.
const FAQS = [
  { q: "What is the Tilth Cycle?",
    a: "It's our six-phase marketing method, never worked out of order: the Survey, the Tilth, the Sowing, the Tending, the Harvest, and the Renewal. The first two phases are foundation work — they decide whether the spend that follows can be measured." },
  { q: "Why start with an audit instead of launching campaigns?",
    a: `Because most budgets are wasted in the phases everyone skips. If tracking, attribution, and positioning aren't right first, every campaign after them is scaled on guesswork. The <a href="/insights/marketing-foundation-audit/">foundation audit</a> is phase one.` },
  { q: "How long does the foundation phase take?",
    a: "The Survey (the free audit) usually takes a few working days. The Tilth phase — setting up tracking, events, audiences, and positioning — depends on the state of your current setup and scope." },
  { q: "Do I have to commit to the full cycle?",
    a: "No. The Survey is a free foundation audit with no commitment to the rest — just an honest look at where you are and what to fix first." },
  { q: "What's the difference between the Survey and the Tilth phases?",
    a: "The Survey is diagnosis — mapping what's spent, tracked, and converting. The Tilth is the build — fixing the tracking, defining revenue-based conversion events, and locking positioning before launch." },
  { q: "Is this approach only for large brands?",
    a: `No. It works for early-stage startups and D2C brands too — in fact, getting the foundation right early is cheaper than rebuilding it after scaling on broken data. We work with brands in <a href="/marketing-agency-bengaluru/">Bengaluru</a> and globally.` }
];

const stripTags = s => s.replace(/<[^>]+>/g, "");

const howTo = {
  "@type": "HowTo",
  name: "The Tilth Cycle — foundation-first marketing",
  description: "Six phases of marketing, never worked out of order: Survey, Tilth, Sowing, Tending, Harvest, Renewal. Foundation work first, growth second.",
  step: PHASES.map((p, i) => ({ "@type": "HowToStep", position: i + 1, name: p.name, text: p.step }))
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: FAQS.map(f => ({
    "@type": "Question", name: f.q,
    acceptedAnswer: { "@type": "Answer", text: stripTags(f.a) }
  }))
};

const main = `
<section id="hero" data-hero data-depth-label="SURFACE">
  <nav data-crumb aria-label="Breadcrumb"><a href="/">HOME</a> <span data-sep aria-hidden="true">/</span> <span aria-current="page">OUR APPROACH</span></nav>
  <div data-eyebrow>Our approach</div>
  <h1 data-h1>The Tilth Cycle.</h1>
  <p data-lede>Six phases, never worked out of order. Most agencies start at phase three — the launch — because that's the part that looks like work. We don't. The first two phases are where budgets are saved or wasted.</p>
  <nav data-pindex aria-label="The six phases">
    <ol>${PHASES.map((p, i) => `
      <li${p.found ? " data-found" : ""}><a href="#${p.id}"><span data-in>${num(i)}</span><span data-iname>${esc(p.name)}</span></a></li>`).join("")}
    </ol>
  </nav>
</section>

<section data-sec data-intro aria-label="Introduction">
  <p class="v3-reveal"><em>Tilth</em> is an old farming word for the health of soil prepared for planting. You can't rush it, and you can't skip it — everything that grows later depends on it. The cycle below is how we apply that to marketing.</p>
</section>

<section data-sec data-phases-sec aria-label="The six phases">
  <ol data-phases>${PHASES.map((p, i) => `
    <li id="${p.id}" data-phase${p.found ? " data-found" : ""} class="v3-reveal">
      <span data-pn aria-hidden="true">${num(i)}</span>
      <div data-phead>${p.found ? `<span data-flag>Foundation phase</span>` : ""}<h2 data-pname>${esc(p.name)}</h2></div>
      <div data-pbody>${p.body.map(t => `<p>${esc(t)}</p>`).join("")}</div>
    </li>`).join("")}
  </ol>
</section>

<section id="faq" data-sec data-inv aria-labelledby="faq-h">
  <div data-ledger>
    <div data-lhead class="v3-reveal">
      <div data-eyebrow>Questions</div>
      <h2 id="faq-h" data-h2>The Tilth Cycle <em>FAQs</em>.</h2>
    </div>
    <div class="v3-reveal">${FAQS.map((f, i) => `
      <div data-faq-item>
        <h3 style="margin:0"><button type="button" data-faq-btn id="faq-b${i}" aria-controls="faq-p${i}" aria-expanded="${i === 0 ? "true" : "false"}"><span>${esc(f.q)}</span><span data-faq-ic aria-hidden="true">+</span></button></h3>
        <div data-faq-ans id="faq-p${i}" role="region" aria-labelledby="faq-b${i}"><p>${f.a}</p></div>
      </div>`).join("")}
      <p data-faqfoot>Want this applied to your setup? <a href="/contact/">Request a free audit &rarr;</a></p>
    </div>
  </div>
</section>

<section id="cta" data-moss data-depth-label="FOUNDATION" aria-labelledby="cta-h">
  <div data-cta-grid>
    <h2 id="cta-h" data-cta-h>It starts with the Survey.</h2>
    <div>
      <p data-cta-p>The free foundation audit is phase one. No commitment to the rest — just an honest look at where you are.</p>
      <div data-cta-actions>
        <a data-btn href="/contact/">Request a free audit <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </div>
</section>
`;

export default {
  path,
  shell: "v3",
  shellClass: "v3-core v3-approach",
  headExtra: `<link rel="stylesheet" href="/assets/core-company.css">`,
  bodyScripts: ["/core-company.js"],
  title: "Our Approach — The Tilth Cycle | Tilth",
  description: "The Tilth Cycle: six phases of marketing done in order — Survey, Tilth, Sowing, Tending, Harvest, Renewal. Foundation work first, growth second.",
  ogTitle: "Our Approach — The Tilth Cycle",
  ogDescription: "Six phases, never worked out of order. The foundation-first method behind Tilth.",
  schema: [bc.schema, howTo, faqSchema],
  main
};

// /contact/ — Brand v3, CORE COMPANY family (page class .v3-enquiry).
//
// Ported from the frozen Master Design Release design
// "CORE_COMPANY/Tilth Contact.dc.html", per CORE_COMPANY_DESIGN_REPORT.md §9.
//
// Primary component: the ENQUIRY form. It is FIRST in the DOM and first on
// screen; the reassurance aside follows and becomes a sticky rail from 1024 so
// its direct contacts stay in reach while the form is filled. Focus order and
// visual order are therefore the same — the previous build put the aside first
// in source, so keyboard users reached the contact details before the form.
//
// Page class: .v3-enquiry, NOT .v3-contact — brand-v3.css:663 already owns
// .v3-contact for the homepage Moss contact band.
//
// THE FUNCTIONAL CONTRACT BELOW IS UNCHANGED from the previous build: the
// FormSubmit endpoint, every hidden control, every field name, every required
// flag, every autocomplete hint, the off-screen honeypot and the same-origin
// _next redirect that lets analytics.js fire generate_lead on /thank-you/.
// Only presentation changed.
//
// Prototype-only code is not ported: the .dc runtime, the review route switch
// and — explicitly — the review submit guard. The prototype intercepts a valid
// submit outside wearetilth.com so a design review never sends a real enquiry;
// production must post as authored, so that guard stays out.
import { site, clients } from "../data.mjs";
import { breadcrumbs, esc, orgSchema } from "../render.mjs";

const path = "/contact/";
const bc = breadcrumbs([{ name: "Home", path: "/" }, { name: "Contact", path }]);

// FormSubmit endpoint. The previous value was the alias token issued for
// anuja@tilth.in — the pre-migration mailbox — so submissions from
// wearetilth.com hit FormSubmit's activation gate and were never delivered.
// Pointed at the current mailbox instead. FormSubmit only issues an alias token
// after an address is confirmed, so the address is used directly until this one
// is activated; swap in the issued token afterwards to keep it out of the markup.
const FORM_ACTION = "https://formsubmit.co/anuja@wearetilth.com";

const needs = [
  "Scaling customer acquisition", "Improving paid-media performance", "Increasing organic visibility",
  "Building or redesigning a website", "Fixing tracking and attribution", "Growing affiliate partnerships",
  "Clarifying brand positioning", "Not sure yet"
];
const budgets = ["Not sure yet", "Under $5k / month", "$5k–$15k / month", "$15k–$50k / month", "$50k+ / month", "One-off project"];

// The aside's text markers come from the same approval gate as /work/, not from
// hardcoded names: the frozen design and the previous build both wrote PayDirect
// and Ommora into the markup, so withdrawing a client's display approval left
// their name on this page. Derived here, and the block is omitted when empty.
const approvedClients = clients
  .filter(c => c.textDisplayApproved)
  .sort((a, b) => a.displayOrder - b.displayOrder);

// ONE ENTITY, ONE SHAPE (register C-6, reconciled in Phase 8).
// This route used to publish a reduced node under the SAME @id as the
// site-wide organisation but with a different @type — `Organization` here
// against ["ProfessionalService", "MarketingAgency"] on the other fifteen
// routes. Two @type sets on one @id is a contradiction for any consumer that
// merges by @id, and it also dropped the entity-level email, telephone,
// address, areaServed, logo, image, description, slogan and sameAs.
//
// It now emits the canonical orgSchema() and adds only what this route
// genuinely contributes: the sales ContactPoint. Nothing is invented — the
// email, telephone and areaServed values are the same approved facts the rest
// of the site already publishes, and the ContactPoint wording is unchanged.
const contactSchema = {
  ...orgSchema(),
  contactPoint: { "@type": "ContactPoint", email: site.email, telephone: `+${site.phoneHref.replace(/^\+?/, "")}`, contactType: "sales", areaServed: ["US", "IN", "Worldwide"], availableLanguage: ["English"] }
};

const main = `
<section id="hero" data-hero data-hero-tight data-depth-label="SURFACE">
  <nav data-crumb aria-label="Breadcrumb"><a href="/">HOME</a> <span data-sep aria-hidden="true">/</span> <span aria-current="page">CONTACT</span></nav>
  <div data-eyebrow>Contact</div>
  <h1 data-h1>Tell us what you're trying to <em>grow</em>.</h1>
  <p data-lede>Share what's working, what isn't, and where you need clarity. We'll review the foundations before recommending another channel, campaign or website change.</p>
</section>

<section id="contact-form" data-sec data-form-sec data-depth-label="FOUNDATION">
  <div data-cgrid>
    <form class="contact-form" action="${FORM_ACTION}" method="POST" data-form>
      <input type="hidden" name="_subject" value="New growth enquiry — wearetilth.com">
      <input type="hidden" name="_template" value="table">
      <input type="hidden" name="_captcha" value="false">
      <!-- return to our own success page so the visitor stays on-brand and generate_lead can fire (T-016) -->
      <input type="hidden" name="_next" value="https://wearetilth.com/thank-you/">
      <input type="text" name="_honey" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">

      <div data-row2>
        <div data-field><label for="f-name">Name<span data-req aria-hidden="true">*</span></label><input id="f-name" name="name" type="text" required autocomplete="name"></div>
        <div data-field><label for="f-email">Work email<span data-req aria-hidden="true">*</span></label><input id="f-email" name="email" type="email" required autocomplete="email"></div>
      </div>
      <div data-row2>
        <div data-field><label for="f-company">Company</label><input id="f-company" name="company" type="text" autocomplete="organization"></div>
        <div data-field><label for="f-website">Website</label><input id="f-website" name="website" type="url" inputmode="url" placeholder="https://" autocomplete="url"></div>
      </div>
      <div data-row2>
        <div data-field><label for="f-country">Country</label><input id="f-country" name="country" type="text" autocomplete="country-name"></div>
        <div data-field><label for="f-tz">Time zone</label><input id="f-tz" name="timezone" type="text" placeholder="e.g. PST, IST"></div>
      </div>
      <div data-field><label for="f-need">What do you need help with?<span data-req aria-hidden="true">*</span></label>
        <div data-select><select id="f-need" name="need" required><option value="" disabled selected>Choose one…</option>${needs.map(n => `<option>${esc(n)}</option>`).join("")}</select></div>
      </div>
      <div data-field><label for="f-goal">Primary business goal</label><input id="f-goal" name="goal" type="text" placeholder="e.g. lower CAC, more qualified pipeline, launch a new site"></div>
      <div data-field><label for="f-challenge">Current challenge</label><textarea id="f-challenge" name="challenge" rows="5" placeholder="What's working, what isn't, and where you need clarity."></textarea></div>
      <div data-field><label for="f-budget">Budget range (optional)</label>
        <div data-select><select id="f-budget" name="budget">${budgets.map(b => `<option>${esc(b)}</option>`).join("")}</select></div>
      </div>

      <label class="consent" data-consent><input type="checkbox" name="consent" required> <span>I'm happy for Tilth to contact me about my enquiry.<span data-req aria-hidden="true">*</span></span></label>
      <p data-privacy><a href="/privacy/">Privacy</a></p>
      <div data-submit-row>
        <button data-btn type="submit"><span>Discuss Your Growth Project</span> <span aria-hidden="true">&rarr;</span></button>
      </div>
    </form>

    <aside data-aside aria-label="About your enquiry">
      <div data-ablock>
        <h2 data-ah>What happens next</h2>
        <p>You'll usually hear back ${esc(site.responseTime)}. We read what you send, and reply with a short, honest view of where to start — not a template pitch.</p>
      </div>
      ${approvedClients.length ? `<div data-ablock>
        <h2 data-ah>Selected experience</h2>
        <ul data-markers>${approvedClients.map(c => `<li>${esc(c.name)}</li>`).join("")}</ul>
      </div>` : ""}
      <div data-ablock>
        <h2 data-ah>Ways to work with us</h2>
        <p><a data-textlink href="/services/"><span>Foundation Audit &middot; Growth Project &middot; Ongoing Partnership &rarr;</span></a></p>
      </div>
      <div data-ablock>
        <h2 data-ah>Direct</h2>
        <p>Email <a data-direct href="mailto:${site.email}">${esc(site.email)}</a><br>Call or WhatsApp <a data-direct href="tel:${site.phoneHref}">${esc(site.phone)}</a><br>Remote-first, collaborating across time zones.</p>
      </div>
    </aside>
  </div>
</section>
`;

export default {
  path,
  shell: "v3",
  shellClass: "v3-core v3-enquiry",
  headExtra: `<link rel="stylesheet" href="/assets/core-company.css">`,
  title: "Contact Tilth — Start a Growth Conversation",
  description: "Tell us what you're trying to grow. Tilth reviews your marketing foundations before recommending another channel, campaign or website change. Remote-first, working with brands worldwide.",
  ogTitle: "Tell us what you're trying to grow",
  ogDescription: "Start a growth conversation with Tilth — a global, foundation-first growth marketing agency.",
  schema: [bc.schema, contactSchema],
  main
};

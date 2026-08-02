import { site } from "../data.mjs";
import { breadcrumbs, esc } from "../render.mjs";

const path = "/contact/";
const bc = breadcrumbs([{ name: "Home", path: "/" }, { name: "Contact", path }]);

const FORM_ACTION = "https://formsubmit.co/aaaece001c447cdc100c9df5d66fd5ee"; // activated FormSubmit endpoint for anuja@tilth.in

const needs = [
  "Scaling customer acquisition", "Improving paid-media performance", "Increasing organic visibility",
  "Building or redesigning a website", "Fixing tracking and attribution", "Growing affiliate partnerships",
  "Clarifying brand positioning", "Not sure yet"
];
const budgets = ["Not sure yet", "Under $5k / month", "$5k–$15k / month", "$15k–$50k / month", "$50k+ / month", "One-off project"];

const headExtra = `<style>.contact-form .hp{position:absolute!important;left:-9999px!important;width:1px;height:1px;overflow:hidden}</style>`;

const contactSchema = {
  "@type": "Organization", "@id": `${site.base}/#org`, name: "Tilth", url: `${site.base}/`,
  contactPoint: { "@type": "ContactPoint", email: site.email, telephone: `+${site.phoneHref.replace(/^\+?/, "")}`, contactType: "sales", areaServed: ["US", "IN", "Worldwide"], availableLanguage: ["English"] }
};

const main = `
<section class="ghero" style="padding-bottom:20px">
  <div class="wrap">
    ${bc.visible}
    <span class="label">Contact</span>
    <h1>Tell us what you're trying to <em>grow</em>.</h1>
    <p class="lede">Share what's working, what isn't, and where you need clarity. We'll review the foundations before recommending another channel, campaign or website change.</p>
  </div>
</section>

<section class="gsec" style="padding-top:20px">
  <div class="wrap">
    <div class="contact-grid">
      <aside class="contact-aside">
        <h3>What happens next</h3>
        <p class="who">You'll usually hear back ${esc(site.responseTime)}. We read what you send, and reply with a short, honest view of where to start — not a template pitch.</p>
        <h3>Selected experience</h3>
        <div class="trust__markers" style="margin-top:8px"><span class="trust__marker" style="font-size:20px">PayDirect</span><span class="trust__dot" aria-hidden="true">·</span><span class="trust__marker" style="font-size:20px">Ommora</span></div>
        <h3>Ways to work with us</h3>
        <p class="who"><a class="text-cta" href="/services/">Foundation Audit · Growth Project · Ongoing Partnership →</a></p>
        <h3>Direct</h3>
        <p class="who">Email <a href="mailto:${site.email}">${esc(site.email)}</a><br>Call or WhatsApp <a href="tel:${site.phoneHref}">${esc(site.phone)}</a><br>Remote-first, collaborating across US and India time zones.</p>
      </aside>

      <form class="contact-form" action="${FORM_ACTION}" method="POST">
        <input type="hidden" name="_subject" value="New growth enquiry — wearetilth.com">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_captcha" value="false">
        <input type="text" name="_honey" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">

        <div class="row2">
          <div><label for="f-name">Name</label><input id="f-name" name="name" type="text" required autocomplete="name"></div>
          <div><label for="f-email">Work email</label><input id="f-email" name="email" type="email" required autocomplete="email"></div>
        </div>
        <div class="row2">
          <div><label for="f-company">Company</label><input id="f-company" name="company" type="text" autocomplete="organization"></div>
          <div><label for="f-website">Website</label><input id="f-website" name="website" type="url" inputmode="url" placeholder="https://" autocomplete="url"></div>
        </div>
        <div class="row2">
          <div><label for="f-country">Country</label><input id="f-country" name="country" type="text" autocomplete="country-name"></div>
          <div><label for="f-tz">Time zone</label><input id="f-tz" name="timezone" type="text" placeholder="e.g. PST, IST"></div>
        </div>
        <label for="f-need">What do you need help with?</label>
        <select id="f-need" name="need" required>
          <option value="" disabled selected>Choose one…</option>
          ${needs.map(n => `<option>${esc(n)}</option>`).join("")}
        </select>
        <label for="f-goal">Primary business goal</label>
        <input id="f-goal" name="goal" type="text" placeholder="e.g. lower CAC, more qualified pipeline, launch a new site">
        <label for="f-challenge">Current challenge</label>
        <textarea id="f-challenge" name="challenge" placeholder="What's working, what isn't, and where you need clarity."></textarea>
        <label for="f-budget">Budget range (optional)</label>
        <select id="f-budget" name="budget">
          ${budgets.map(b => `<option>${esc(b)}</option>`).join("")}
        </select>

        <label class="consent"><input type="checkbox" name="consent" required> I'm happy for Tilth to contact me about my enquiry.</label>
        <button class="btn" type="submit"><span>Discuss Your Growth Project</span> <span class="arrow">→</span></button>
      </form>
    </div>
  </div>
</section>
`;

export default {
  path,
  title: "Contact Tilth — Start a Growth Conversation",
  description: "Tell us what you're trying to grow. Tilth reviews your marketing foundations before recommending another channel, campaign or website change. Remote-first across the US and India.",
  ogTitle: "Tell us what you're trying to grow",
  ogDescription: "Start a growth conversation with Tilth — a global, foundation-first growth marketing agency.",
  schema: [bc.schema, contactSchema],
  headExtra,
  main
};

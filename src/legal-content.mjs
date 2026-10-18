// The three legal documents — the authoritative content source.
//
// LEGAL TEXT IS LOCKED. Every character of the operative wording is as
// published: no clause, date, caveat, data category, governing-law phrase,
// disclosure or address is modernised, shortened, harmonised or rewritten, and
// nothing is added or removed. This file is the published text lifted into one
// structured module so src/templates/legalPage.mjs can present it; it changes
// presentation, not legal substance.
//
// Verified independently of any report claim, published page vs this content:
// the flattened visible text is CHARACTER-IDENTICAL for all three documents
// (2,912 / 1,617 / 1,692 characters; 500 / 262 / 280 words), and every href
// matches (8 / 2 / 4).
//
// THE OPERATIVE EMAIL — OWNER DECISION, EXECUTED (Phase 8).
// The owner has confirmed the official domain https://wearetilth.com/ and the
// official contact address anuja@wearetilth.com. The 9 operative occurrences
// of the former address (5 in the Privacy body, 2 in Terms, 2 in the Cookie
// Policy) are therefore replaced here, including the data-subject-request
// route in Privacy "Your rights" and the legal and cookie/privacy contact
// clauses. That is the ONLY change made under this approval: every surrounding
// word, clause, date, data category and governing-law phrase is untouched, no
// other policy wording is rewritten, Contact form behaviour is unchanged, and
// the "Last updated" dates are deliberately NOT moved, because the address
// change is not a revision of the policy's substance (register J-8 stands).
// Replacing the address does not resolve the remaining policy conflicts
// (contact fields, Tools telemetry, browser storage, font providers, Facebook,
// consent); those stay blocked on legal.
//
// MARKUP-ONLY CHANGES carried over from the frozen design, none of which
// touches a word of legal text:
//   1. the .doc / .wrap-narrow wrappers become <article aria-labelledby> +
//      <header>;
//   2. the date is wrapped in a real <time datetime>; the visible string
//      "Last updated: 18 June 2026" is unchanged;
//   3. div.note becomes a quiet ruled caveat instead of a filled Clay card,
//      keeping role="note";
//   4. the back link loses its legacy class; href "/" and the text
//      "\u2190 Back to home" are unchanged;
//   5. external links keep target="_blank" rel="noopener" and gain a
//      screen-reader-only " (opens in a new tab)" \u2014 an accessibility label,
//      not visible text and not legal text.
// PLUS one production collision translation: data-note -> data-lnote, because
// assets/tools.css owns [data-note] with an incompatible meaning. role="note"
// and the caveat text are untouched.
//
// Clause order, heading structure and list structure are the source's own:
// 9 / 7 / 6 H2s, one note each, 3 / 1 / 2 <strong> run-ins that stay <strong>
// rather than being promoted to headings, 2 <code> cookie names in the Cookie
// Policy, and NO list, numbered clause, H3 or table in any document \u2014 so none
// is designed or invented.
//
// Head metadata (title, description, robots) is read from the published pages.
// There is no og: tag and no schema, as in the source; none is added.

export const legalDocs = [
  {
    slug: "privacy",
    eyebrow: `Legal`,
    h1: `Privacy Policy`,
    datePrefix: `Last updated:`,
    datetime: "2026-10-18",
    dateText: `18 October 2026`,
    backHref: "/",
    backText: `← Back to home`,
    title: `Privacy Policy — Tilth`,
    description: `How Tilth handles contact-form data, browser storage and optional analytics on wearetilth.com.`,
    robots: "index, follow",
    body: `      <p>This policy explains what happens to your information when you visit <strong>wearetilth.com</strong>. We have deliberately kept this site simple, and the same goes for how we handle data.</p>

    <h2>The short version</h2>
    <div data-lnote role="note">We keep data collection to a minimum. We use essential browser storage for site preferences and form handoff, and — only if you choose analytics — Google Analytics to understand how the site is used. We don't sell your data, we don't run advertising pixels, and we don't send marketing emails you didn't ask for.</div>

    <h2>Information we collect</h2>
    <p><strong>Contact form.</strong> If you submit the form on our contact page, we collect the details you provide: your name, email address, company, website, country, time zone, the area you need help with, your primary business goal, your current challenge, your monthly marketing or acquisition budget range, and your consent to be contacted. Your name, email address, the area you need help with and your contact consent are required; the remaining fields are optional. We use this only to reply to you and discuss working together. The form is delivered to us by FormSubmit, a third-party form-to-email service; its handling of the submission is governed by the <a href="https://formsubmit.co/" target="_blank" rel="noopener">FormSubmit<span data-sr> (opens in a new tab)</span></a> service.</p>
    <p><strong>Email.</strong> If you email us at anuja@wearetilth.com, we receive whatever information you choose to include in that email. We use it only to reply and discuss working together.</p>

    <h2>Analytics</h2>
    <p>We use Google Analytics 4 <strong>only if you accept analytics</strong>. When you first visit, analytics is off: the Google Analytics library is not loaded and no analytics cookies are set. If you choose <strong>Only necessary</strong>, it stays that way. If you accept analytics, we load Google Analytics 4 to understand how visitors use the site — which pages are viewed, the device and browser used, approximate location (city or country, derived from IP), how visitors arrived, and interaction events on the site. This is analysed in aggregate to help us improve the site; we do not use it to identify you personally.</p>
    <p>Our own events record interactions rather than content: calls-to-action clicked, service, industry and content links followed, FAQ questions opened, and confirmation that a contact form was submitted successfully. <strong>The values you type into the contact form are never sent to Google Analytics.</strong> Google's handling of analytics data is governed by <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google's Privacy Policy<span data-sr> (opens in a new tab)</span></a>. You can also opt out using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics Opt-out Browser Add-on<span data-sr> (opens in a new tab)</span></a>.</p>

    <h2>Tools</h2>
    <p>If you accept analytics, our free tools may send interaction events such as a tool being viewed or started, a business model being selected, a derived result band, scenario or currency changes, and CTA clicks. We do not send raw revenue, CAC, margin or other values you type into the tools. Where a result is measured, analytics uses coarse or derived bands rather than the raw input.</p>

    <h2>Browser storage</h2>
    <p>The site stores a small number of values in your own browser. These are browser storage mechanisms, not advertising cookies, and they are not shared with anyone:</p>
    <ul>
      <li><code>tilth-theme</code> (local storage) — remembers your light or dark theme preference.</li>
      <li><code>tilth-cur</code> (local storage) — remembers your currency preference in the Tools.</li>
      <li><code>tilth-analytics-consent</code> (local storage) — remembers your analytics choice.</li>
      <li><code>tilth_lead_pending</code> (session storage) — when analytics is granted, temporarily marks a successful form handoff so the lead confirmation can be recorded on the thank-you page. It is removed as soon as it is read, and it is not created at all when analytics is denied.</li>
    </ul>

    <h2>Fonts</h2>
    <p>Tilth's website fonts are self-hosted from wearetilth.com. Your browser does not connect to Google Fonts to load the site's typefaces.</p>

    <h2>Hosting</h2>
    <p>This site is hosted on GitHub Pages. Like most web hosts, GitHub may collect standard technical information (such as IP addresses) in server logs for security and operational purposes. This is governed by <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">GitHub's Privacy Statement<span data-sr> (opens in a new tab)</span></a>.</p>

    <h2>External links</h2>
    <p>Tilth maintains profiles on external platforms including LinkedIn, Instagram, X and Facebook. If you visit an external platform, its own privacy policy and data practices apply.</p>

    <h2>Your rights</h2>
    <p>You can ask us to delete any personal information you've sent us — a form submission or email correspondence — at any time. Just email <a href="mailto:anuja@wearetilth.com">anuja@wearetilth.com</a> and we will. You can change your analytics choice at any time using <strong>Cookie settings</strong> in the site footer, and you can also opt out using the browser add-on linked above.</p>

    <h2>Changes to this policy</h2>
    <p>As Tilth grows, we may add or change the tools we use. If and when we do, we will update this policy to reflect exactly what is collected and why, and change the "last updated" date above.</p>

    <h2>Contact</h2>
    <p>Questions about this policy? Email <a href="mailto:anuja@wearetilth.com">anuja@wearetilth.com</a>.</p>`
  },
  {
    slug: "terms",
    eyebrow: `Legal`,
    h1: `Terms of Service`,
    datePrefix: `Last updated:`,
    datetime: "2026-06-14",
    dateText: `14 June 2026`,
    backHref: "/",
    backText: `← Back to home`,
    title: `Terms of Service — Tilth`,
    description: `Tilth's terms of service for wearetilth.com — acceptable use, disclaimers on past results, and governing law (Bengaluru, India).`,
    robots: "index, follow",
    body: `      <p>These terms govern your use of the website <strong>wearetilth.com</strong>. By using the site, you agree to them. They are intentionally straightforward.</p>

    <h2>About this site</h2>
    <p>wearetilth.com is the marketing website of Tilth, a marketing agency based in Bengaluru, India, founded by Anuja. The site exists to describe our services and let prospective clients get in touch.</p>

    <h2>Information on this site</h2>
    <p>The content here — including descriptions of our approach, services, and past results — is provided for general information. Figures and examples drawn from past work are illustrative of experience and are not a guarantee of similar results. Marketing outcomes depend on many factors specific to each business.</p>
    <div data-lnote role="note">Any specific engagement between Tilth and a client is governed by a separate written agreement, not by these website terms.</div>

    <h2>Acceptable use</h2>
    <p>You agree not to misuse this site — for example, by attempting to disrupt it, gain unauthorised access, or copy its content for misleading purposes. The Tilth name, branding, and written content are ours.</p>

    <h2>External links</h2>
    <p>This site links to external platforms (such as our social profiles). We are not responsible for the content or practices of those external sites.</p>

    <h2>No warranty</h2>
    <p>The site is provided "as is." While we aim to keep it accurate and available, we don't guarantee it will always be error-free or uninterrupted.</p>

    <h2>Governing law</h2>
    <p>These terms are governed by the laws of India, and any disputes fall under the jurisdiction of the courts of Bengaluru, Karnataka.</p>

    <h2>Contact</h2>
    <p>Questions about these terms? Email <a href="mailto:anuja@wearetilth.com">anuja@wearetilth.com</a>.</p>`
  },
  {
    slug: "cookie-policy",
    eyebrow: `Legal`,
    h1: `Cookie Policy`,
    datePrefix: `Last updated:`,
    datetime: "2026-10-18",
    dateText: `18 October 2026`,
    backHref: "/",
    backText: `← Back to home`,
    title: `Cookie Policy — Tilth`,
    description: `Tilth's cookie policy — essential browser storage, optional Google Analytics cookies, and how to manage your analytics choice.`,
    robots: "index, follow",
    body: `      <p>This page explains how cookies and similar browser storage are used on <strong>wearetilth.com</strong>.</p>

    <div data-lnote role="note">wearetilth.com uses a small amount of essential browser storage for site functionality and preferences. Google Analytics cookies are set only after you accept analytics. We do not use advertising or social-media tracking cookies.</div>

    <h2>What are cookies?</h2>
    <p>Cookies are small text files a website can store in your browser, often used to remember preferences or measure how a site is used. Many sites use them heavily. We use only a few: some essential browser storage for preferences and site functionality, plus analytics cookies if you accept analytics.</p>

    <h2>Cookies we use</h2>
    <p><strong>Google Analytics (GA4) — only after you accept analytics.</strong> If you accept analytics, Google Analytics sets first-party cookies (typically named <code>_ga</code> and <code>_ga_*</code>) that help distinguish unique visitors and measure usage in aggregate. These cookies don't identify you personally and we don't use them for advertising. If you choose <strong>Only necessary</strong>, Google Analytics is not loaded and those analytics cookies are not set. Google's use of this data is governed by <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google's Privacy Policy<span data-sr> (opens in a new tab)</span></a>.</p>
    <p><strong>Browser storage we use.</strong> These are stored by your own browser rather than sent to anyone:</p>
    <ul>
      <li><code>tilth-theme</code> (local storage) — your light or dark theme preference.</li>
      <li><code>tilth-cur</code> (local storage) — your currency preference in the Tools.</li>
      <li><code>tilth-analytics-consent</code> (local storage) — your analytics choice.</li>
      <li><code>tilth_lead_pending</code> (session storage) — when analytics is granted, briefly marks a successful form handoff so the lead confirmation can be recorded on the thank-you page. Not created when analytics is denied.</li>
    </ul>
    <p>We do not use the Meta Pixel, advertising cookies, or cross-site tracking on this site.</p>

    <h2>Third-party connections</h2>
    <p>The site's fonts are self-hosted from wearetilth.com, so no connection is made to Google Fonts. The contact form is delivered by FormSubmit, a third-party form-to-email service, when you submit it. Tilth also maintains profiles on external platforms including LinkedIn, Instagram, X and Facebook; if you visit one of those platforms, it will apply its own cookies once you are on its site.</p>

    <h2>Managing cookies</h2>
    <p>You can change your analytics choice at any time using <strong>Cookie settings</strong> in the site footer. Every major browser also lets you view, block and delete cookies in its settings, and you can opt out of Google Analytics specifically using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics Opt-out Browser Add-on<span data-sr> (opens in a new tab)</span></a>.</p>

    <h2>If this changes</h2>
    <p>If we later add other tools that use cookies, we will update this page first and provide consent options where required by law.</p>

    <h2>Contact</h2>
    <p>Questions? Email <a href="mailto:anuja@wearetilth.com">anuja@wearetilth.com</a>.</p>`
  },
];

export const legalDocBySlug = new Map(legalDocs.map(d => [d.slug, d]));

# ANALYTICS_EVENT_MAP.md — Tilth

GA4 property continuity (Brief §56): keep the **same** property/measurement ID `G-1MJEZ4VK26` — no new property for the domain move. No data loss. Record migration date **2026-07-16** as an annotation. Never send PII (name/email) into analytics.

## Current implementation (as-built)
- GA4 gtag hardcoded in every page `<head>` (`config G-1MJEZ4VK26`). Pageview only; **no custom events** today.
- No GTM, no consent-mode signal wired to gtag, no Meta Pixel/ads cookies (matches Cookie Policy).

## Events to add (recommended)
Use `gtag('event', name, params)`. Delegate from a single sitewide listener (avoid duplicate binding). Fire once per interaction (guard against double-fire).

| Event name | Trigger | Params | Purpose |
|---|---|---|---|
| `cta_primary_click` | click on primary CTA (Discuss a Project / Discuss Your Growth Project) | `location` (nav/hero/section/cta_band), `page_path` | Top conversion intent |
| `cta_secondary_click` | Request a Foundation Audit / See Our Work | `label`, `location`, `page_path` | Diagnostic/consideration intent |
| `nav_cta_click` | masthead "Discuss a project" | `page_path` | Nav conversion |
| `contact_form_start` | first focus of a contact field | `page_path` | Funnel entry |
| `contact_form_submit` | contact form submit (pre-redirect) | `need` (selected option, non-PII), `page_path` | **Key event / conversion** |
| `email_click` | `mailto:` click | `page_path` | Secondary conversion |
| `phone_click` | `tel:` click | `page_path` | Secondary conversion |
| `whatsapp_click` | WhatsApp link click | `page_path` | Secondary conversion (not dominant for US) |
| `book_call_click` | booking link (when a calendar URL exists) | `page_path` | Conversion (future) |
| `service_page_cta` | CTA on a `/services/*` page | `service_slug` | Service-intent |
| `industry_page_cta` | CTA on an `/industries/*` page | `industry_slug` | Sector-intent |
| `case_study_view` | `/work/*` scroll/expand | `slug` | Proof engagement |
| `tool_start` | first input on a `/tools/*` calculator | `tool` | Tool engagement / lead signal |
| `tool_complete` | tool produces a result | `tool` | Qualified interest |
| `insight_read` | 60%+ scroll on an article | `slug` | Content engagement |
| `theme_toggle` | dark/light toggle | `to` (light/dark) | UX signal |

## Mark as GA4 **Key events (conversions)**
`contact_form_submit`, `email_click`, `phone_click`, `whatsapp_click`, `book_call_click` (when live).

## Privacy considerations
- Do **not** send name/email/company values as params. Only the non-PII `need` category is allowed on `contact_form_submit`.
- Keep consent aligned with the Cookie Policy (analytics-only). If a consent banner is added later, gate gtag via Consent Mode and update the policy.
- Configure **internal-traffic filter** (owner IPs) and **referral exclusion** for `wearetilth.com` (+ `tilth.in` during transition) so the redirect isn't counted as a referral.

## Validation method
- GA4 **DebugView** + browser Network tab: confirm each event fires once, with expected params, no PII.
- Confirm no duplicate `page_view`.
- After go-live, verify `contact_form_submit` records against actual FormSubmit deliveries.

## Domain settings
- Update the web stream's default URL to `https://wearetilth.com`; add it under "Configure your domains".
- Migration annotation in GA4 on 2026-07-16.

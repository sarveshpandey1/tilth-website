# DOMAIN_MIGRATION_PLAN.md — tilth.in → wearetilth.com

Status date: 2026-07-16. Owner actions flagged **[OWNER]**. Much of this is **already executed** this session.

## 1. Canonical host
- **Primary canonical:** `https://wearetilth.com/`
- **Legacy redirect domain:** `tilth.in` (retain ownership long-term; enable auto-renew — GoDaddy showed a renewal prompt).
- Public brand name stays **Tilth** (the domain is not a rebrand to "We Are Tilth").

## 2. Current status audit (verified)
| Check | Result |
|---|---|
| `wearetilth.com` apex resolves | ✅ → GitHub Pages A records `185.199.108–111.153` |
| `www.wearetilth.com` | ✅ CNAME → `sarveshpandey1.github.io` |
| HTTPS / SSL (apex) | ✅ Valid, `200` |
| GitHub Pages custom domain (`CNAME` file) | ✅ `wearetilth.com`; **[OWNER]** confirm "Enforce HTTPS" ticked in repo → Settings → Pages |
| Content deployed | ✅ Full site (Pages build `built`) |
| `tilth.in` DNS | GoDaddy (`ns61/ns62.domaincontrol.com`); now → GoDaddy **forwarding** servers |
| `tilth.in` → `wearetilth.com` 301 | ✅ Homepage-level (Permanent 301) — **⚠ not path-preserving** |
| GA4 | ✅ `G-1MJEZ4VK26` sitewide (unchanged; no data loss) |
| GSC ownership | ✅ Both `sc-domain:tilth.in` and `sc-domain:wearetilth.com` verified |
| GSC Change of Address | ⏳ Fails until Googlebot DNS TTL clears + GoDaddy forwarding SSL activates — **[OWNER]** retry in a few hours/next day |
| Email `anuja@tilth.in` | ✅ Unaffected (DMARC TXT intact on tilth.in); keep active/forwarded through transition |

## 3. Preferred-host redirects (Brief §14)
All variants must 301 to `https://wearetilth.com/`:
- `http://wearetilth.com/` → ✅ (GitHub Pages Enforce HTTPS)
- `http://www.wearetilth.com/` / `https://www.wearetilth.com/` → GitHub Pages redirects www→apex for the configured domain ✅ (verify after Enforce HTTPS).

## 4. The one real gap — path-preserving 301s (Brief §16)
GoDaddy domain forwarding sends **every** `tilth.in/*` path to the destination **root**, and 404s sub-paths — it cannot do `tilth.in/X → wearetilth.com/X`. Options:

- **Recommended: Cloudflare (free).** Move `tilth.in` NS to Cloudflare, keep DNS, add one **Bulk Redirect / Redirect Rule**: `tilth.in/*` → `https://wearetilth.com/$1` (301, preserve path + query). Result: exact 1:1 redirects, no chains. ~1–2h nameserver propagation. **[OWNER]** decision + Cloudflare signup.
- **Acceptable interim (in place now):** GoDaddy homepage-level 301 — satisfies the GSC Change-of-Address *required* homepage test; deep links lose their path. Fine for a near-unindexed young site; upgrade to Cloudflare when convenient.

Also: change the GoDaddy forwarding **destination** from `http://` to **`https://wearetilth.com`** to drop one hop.

## 5. Redirect hygiene
- No redirect chains/loops (current chain is `http tilth.in → http wearetilth.com → https wearetilth.com`; fix by using https destination).
- No JS/meta-refresh redirects (convert `/ad-spend-calculator/` stub to a proper redirect where possible).
- Keep `tilth.in` registered; **enable auto-renew [OWNER]**.

## 6. Migration sequence (Brief §15) — where we are
1. Audit repo + live ✅ (this session / SITE_AUDIT.md)
2. Build redesign ⏳ (Phases 3–6)
3. Preserve URL paths ⏳ (see REDIRECT_MAP.md — target: no slug changes for existing pages)
4. Test in staging ⏳ (local server; consider a `staging` branch / preview)
5. Configure `wearetilth.com` ✅
6. Verify SSL/DNS ✅
7. Verify GSC ✅ (Change of Address ⏳)
8. Verify analytics ✅ (event map ⏳ — ANALYTICS_EVENT_MAP.md)
9. Verify forms/email ⏳ (FormSubmit still → `anuja@tilth.in`; re-test after any change)
10. Deploy redesign to `wearetilth.com` ⏳
11. 1:1 permanent redirects from `tilth.in` ⚠ (upgrade to Cloudflare path-preserving)
12. Submit sitemap ⏳ ([OWNER] in GSC: `https://wearetilth.com/sitemap.xml`)
13. Complete Change of Address ⏳
14. Monitor indexing/rankings/404s/redirects/canonical selection ⏳

> Note: the *domain* is already switched; the *redesign* is not built yet. Per Brief §15, we deploy
> redesign changes to `wearetilth.com` incrementally (it's already the live host) rather than a big-bang cutover.

## 7. Analytics/GSC continuity
- Keep the **same GA4 property** (no new property just for the domain). **[OWNER]** update the web-stream URL to `https://wearetilth.com` and add it under "Configure your domains". Record migration date **2026-07-16** for reporting.
- **[OWNER]** in GSC: export pre-migration baseline from `tilth.in` (queries, pages, indexed pages, sitemap status, backlinks) before signals fully shift. Keep the `tilth.in` property (don't delete).

## 8. Risks
- Path-preserving redirects not yet in place → deep-link equity/UX loss (low impact now; fix via Cloudflare).
- GSC Change of Address retries needed until TTL/SSL settle.
- Two design systems (inline homepage vs `styles.css`) can drift → reconcile in Phase 3.

## 9. Rollback
- The redesign will land via PRs on `main`; rollback = `git revert <merge>` (Pages redeploys the prior state).
- Domain rollback (unlikely/undesirable): set `CNAME` back to `tilth.in` and restore `tilth.in` A records to GitHub — but this reverses the intended migration; avoid unless a launch-blocking failure occurs.

## 10. [OWNER] action checklist
- [ ] Confirm "Enforce HTTPS" in repo → Settings → Pages
- [ ] Retry GSC **Change of Address** (after TTL/SSL settle)
- [ ] Submit `https://wearetilth.com/sitemap.xml` in the new GSC property
- [ ] Update GA4 web-stream URL → `wearetilth.com`
- [ ] Export GSC baseline from `tilth.in`
- [ ] Change GoDaddy forwarding destination to `https://`
- [ ] Decide on Cloudflare for path-preserving redirects
- [ ] Enable auto-renew on `tilth.in`

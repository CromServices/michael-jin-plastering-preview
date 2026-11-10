# Michael Jin Plastering — spec redesign wireframe v1.2

**Status:** wireframe only. Nothing has been built, published, or sent. No contact with the owner.

Pitch piece for Michael Jin Plastering & Gyprocking, Brisbane QLD. Prepared 10 Nov 2026 (Australia/Perth). v1.2 keeps the v1.1 theme, type, 5-page scope, A$990 + A$49/mo care and the WordPress pick, and adds the issues list, current page mechanics and a Google reviews block. v1 and v1.1 are unchanged in their folders.

Scope (Nate via Director, 10 Nov): intro build A$990 plus A$49/mo care (standard build A$1,490). This is a 5-page site sized to that intro price.

Production digest md5: `c63ff4c8007fdf7f68563e40d74a7000`. Locks read: L-WIREFRAME, L-BUILDMETHOD, L-101, L-NOSQBUB, L-017, L-019, L-032, L-HAND, L-NOIDLE, L-098.

---

## 1. Before and after

| | Current site (10 Nov 2026) | This rebuild |
|---|---|---|
| Desktop Lighthouse | 40 | Target ≥ 90 |
| Mobile Lighthouse | 65 | Target ≥ 80 |
| Desktop LCP | 6.0 s | ≤ 2.5 s |
| Desktop CLS | 0.373 | ≤ 0.1 |
| Meta description | Missing | Unique titles and metas on all five pages |
| Local schema | None | ProfessionalService / LocalBusiness with the live NAP and hours |
| Quote form | `quote.php` exists but the form `action` is `#` (it does not send). Homepage has only a newsletter field | A working quote form on Home and Quote, posted to the published email |
| Content hygiene | Leftover electrician FAQ, a renovations passage about concrete resurfacing, a Beaconsfield electricians page, generic Facebook/Instagram links, conflicting hours | Only plastering and gyprock copy from the live site. Footer hours only. No leftover trades |
| Platform | Custom PHP HTML template on LiteSpeed (Bootstrap, Owl, AOS, TweenMax). Not WordPress | WordPress, light block theme, no page builder |

Current-site proofs remain in the parent folder: `../proofs/current-desktop-1440.png`, `../proofs/current-mobile-390.png`. Rebuilt-site proofs for this revision: `proofs/desktop-1440.png`, `proofs/mobile-390.png`.

---

## 2. Taken from the live site

Fetched 10 Nov 2026, 11:43–11:46 AWST, `https://www.michaeljin.com.au/` and inner pages (`about.php`, `services.php`, `quote.php`, `contact.php`, service pages). Cross-checked against Outbound evidence `michael-jin-plastering-brisbane.json` (08:25 AWST).

| Fact | Source |
|---|---|
| Name | Michael Jin Plastering & Gyprocking Brisbane |
| Area claim | “Providing service Brisbane & Gold Coast Area” |
| Base | Macgregor, Brisbane, QLD 4109, Australia (contact and footer) |
| Phone | 0452 480 704 |
| Email | lxin_2021@outlook.com |
| Hours (footer and contact — use these) | Mon to Fri: 8am to 5pm; Saturday: 9am to 3pm; Sunday by appointment |
| About Michael | 10 years in material engineering, then came to Australia and started plastering, with 10 years’ plastering experience |
| Service list (home and nav) | Dry wall; Partitioning; Solid wall; Repairs; New construction; Water damage repair; Cornice installation; Patch & repairs; Renovations; commercial and domestic plastering; gyprock installation. Quote form also lists garage ceiling repairs |
| Reviews on the homepage | Ankur D, Jason B, Adrian C, Jay — wording as published (see About/Home copy notes) |
| Claim without a number | “Fully Licensed & Insured”, “Registered”, “certified company” — no licence or QBCC number is published |

**Current platform:** custom PHP pages (`index.php`, `about.php`, `quote.php`, …) on LiteSpeed, front-end assets under `/assets/` (Bootstrap, Owl Carousel, AOS, Fancybox, TweenMax, Odometer). Cloudflare email-decode is present. Not WordPress, Wix, Framer, Webflow or Lovable.

**Do not carry over** (leftover or contradictory material on the current site):

- `faq.php` is electrician copy (“What if I feel a shock?”, “emergency electricians 24 hours a day”).
- `renovations.php` includes a passage about “concrete resurfacing companies” and “concrete repair”.
- `electricians-beaconsfield.php` and a nav item “Areas Beaconsfield”.
- Quote-page sidebar hours “Mon-Sun 8:00 AM - 8:00 AM 24 Hrs And 7 Days A Week”, which contradicts the footer hours.
- Footer lorem (“Tablished fact that a reader will be distrated…”).
- Header Facebook and Instagram links that point at the bare facebook.com / instagram.com homepages, not a business profile.
- A hipages link to `jlbrosinteriorsptyltd`. Not used unless the owner confirms the connection.

---

## 3. Gaps (visible placeholders on the proofs)

- No licence, QBCC or insurance number is published. Placeholder: “Licence and insurance numbers — not published on the current site. Add only with the owner’s confirmation.”
- No ABN published.
- No job photographs are being invented. Gallery exists on the current site (`gallery.php`) but was not copied into this wireframe; add only images the owner confirms.
- Social profiles: none confirmed. Do not link generic networks.
- Own-domain email is not in use; the published address stays `lxin_2021@outlook.com` until the owner supplies another.

---

## 4. Platform recommendation

**Pick: WordPress (self-hosted), light block theme, no page builder.**

**Monthly cost: A$12.95 inc GST** for a one-site Australian LiteSpeed plan (My Australian Host “WP Starter”, checked 10 Nov 2026). Similar starter plans: A$14.99 (Webhoster WP Starter) and A$15 (Stack2 Spark; HostingBay WP Business). All stay under the A$20/mo cap, so the A$49/mo care plan still has margin.

**Flag, do not use:** My Australian Host WP Business A$24.95/mo, Webhoster WP Business A$29.99/mo, ModusOp Basic A$24.95/mo — each would break the care margin and is not needed for five pages. Wix Light A$21/mo and Wix Core A$42/mo (standard annual AUD, GST included) are over the cap. WordPress.com paid tiers are also over the cap; this pick is self-hosted WordPress only.

The live site is a purchased-style PHP template with leftover trades and a quote form that does not submit. WordPress gives the owner an editor for services, hours and reviews, a form that actually sends, and a clean 5-page structure without that template baggage. That also matches Nate’s standing view that trade service sites belong on WordPress. Squarespace and Bubble are out (L-NOSQBUB).

---

## 5. Theme carried over

v1 used a warm plaster / clay palette and Instrument Sans, which read as a new brand. This revision follows the live gold-and-teal identity.

Taken from the live CSS at `https://www.michaeljin.com.au/assets/css/style.css` (fetched again 10 Nov 2026) and from the current-site proofs.

**Colours (exact from the CSS, checked against the proofs):**

| Hex | Role on the current site |
|---|---|
| `#E5AB26` | Brand gold. Buttons, logo rectangle and triangle. 120 uses in `style.css`. |
| `#E4AA24` | Gold utility bar, as sampled on the current desktop proof (also appears once in the CSS). |
| `#37BFCB` | Teal header bar and headline accent (the highlighted place name). |
| `#000000` | Body type, dark feature bands and footer. |
| `#FFFFFF` | Page and cards. |
| `#F9F9F9` | Alternate section ground. |

Also present in the CSS, used more sparingly on inner blocks: `#010647`, `#282B58`, `#00A9A4` (dark-theme teal). They are not the main lockup and are not used as the primary accent here.

**Logo treatment:** gold triangle mark beside “MICHAEL JIN” in a gold rectangle, white uppercase letters, sitting on the teal header, with the live tagline “PROFESSIONAL TEAM TO SAVE YOUR TIME” underneath in white. Gold utility bar above, carrying the published area line and contact details.

**Imagery and motifs:** gold CTA buttons with dark type; teal used to emphasise Brisbane and the Gold Coast in the heading; black about band (as on the current “Reason Behind Choose Us” section); job photographs as labelled slots only. The cyan “HIRE!” watermarks on the current photos are not carried over.

**Type:** Manrope 400 and 700, self-hosted latin woff2 (~26 KB the pair), SIL Open Font Licence. Replaces the live site’s Barlow Condensed + Montserrat, and v1’s Instrument Sans. No display pairing.

Desktop-first, then 390px. Motion: none. No scrolltide, no scrollshaders.

---

## 6. Pages, sections and copy notes

Five pages. Copy from the live plastering content only. Do not invent jobs, results, licence numbers or 24/7 cover.

### 1. Home (`/`)

1. **Utility bar** — Brisbane and Gold Coast · 0452 480 704 · Get a quote.
2. **Header** — “Michael Jin Plastering”. Nav: Services, About, Quote, Contact. Call button.
3. **Hero** — Heading: “Plastering and gyprock for Brisbane and the Gold Coast.” Lead, from their copy: based in Macgregor; residential and commercial; dry wall, partitioning, solid wall, repairs, cornice, new work. CTAs: Get a quote / Call 0452 480 704. Photo slot (no invented job shot).
4. **Services board** — eight live services, linking to /services: Dry wall; Partitioning; Solid wall; Patch and repairs; Cornice installation; Water damage repair; New construction; Renovations (plastering).
5. **About teaser** — Michael’s 10 years in material engineering, then 10 years’ plastering in Australia. Link to About. Licence placeholder.
6. **Quote form** — §7.
7. **Hours and NAP** — footer hours only, Macgregor address, phone, email.
8. **Reviews** — the four homepage reviews only, wording close to the live site (obvious typos tidied: “hogh” → “high”, “definately” → “definitely”):
   - Ankur D: May and Michael’s team was very professional and did a great job. They did 7 half walls and 2 full walls, suggested the best materials for high moisture areas, and did a small repair without charging for it. Punctual, cleaned up after the job.
   - Jason B: Great professional job. The guys were in and out very quickly. May kept in contact the whole time.
   - Adrian C: Michael and May and team were great to work with. Good communicators, punctual, great workmanship and value. Would definitely use them again.
   - Jay: Prompt, professional and good workmanship. Would definitely hire May and her crew again.
9. **Area line** — “Brisbane and the Gold Coast”, plus the suburbs named on the current homepage as a compact list, not as doorway pages. Published names include Palm Beach, Elanora, Mount Gravatt East, Wishart, Upper Mount Gravatt, Mount Gravatt, Merrimac, Clear Island Waters, Ashmore, Arundel, Parkwood, Molendinar, Sunnybank, West End, Robertson, Macgregor, Highgate Hill, Benowa. Skip “Kerrydale” and “Altandi” until the owner confirms the spelling/place. Do not add Beaconsfield.
10. **Footer** — NAP and hours.

SEO title: `Plastering & gyprock, Brisbane & Gold Coast | Michael Jin Plastering`. Meta: `Dry wall, cornice, repairs and new-build plastering in Brisbane and the Gold Coast. Call 0452 480 704 for a quote.`

### 2. Services (`/services`)

One page, not a stack of thin service URLs.

1. Header.
2. Intro: plastering for residential and commercial properties, from the live about/services copy. No invented guarantees or timelines beyond “free no-obligation quotation” (already on the site).
3. Short sections for each of the eight services, using only what the live service pages say about plastering:
   - **New construction** — end-to-end new-home plastering. (Drop “guaranteed timeline” unless the owner still wants that claim.)
   - **Water damage repair** — restore plaster in water-damaged houses, as their services blurb states. Do not invent restoration results.
   - **Cornice installation** — install, repair, or remove and replace cornices, from the live services blurb.
   - **Patch and repairs** — plasterboard damaged by damp or a furniture move; cracks, mould and water stains; colour-match. From `patch-repairs.php`.
   - **Renovations** — plastering on renovation work. Use only the plastering lines. Do not use the concrete-resurfacing passage.
   - **Dry wall, partitioning, solid wall** — as listed on the home and about pages. Keep these short if the live site has no extra copy.
   - Note garage ceiling repairs as a quote-form option, not a ninth invented service page.
4. Quote CTA. Footer.

### 3. About (`/about`)

1. Header.
2. The about copy already on `about.php` (engineering background, 10 years’ plastering, end-to-end service, no job too big or small). Do not add staff bios that are not on the site. May is named in reviews; do not invent a role for her beyond what those reviews say.
3. Licence/insurance placeholder.
4. The same four reviews, or a link back to them on Home.
5. Footer.

### 4. Quote (`/quote`)

1. Header.
2. Heading: “Get a quote”. Helper: they already offer a no-obligation quotation and say they will provide the price before work starts (“Honest Pricing” on the current site).
3. The form in §7, plus phone, email and the footer hours.
4. Footer.

### 5. Contact (`/contact`)

1. Header.
2. NAP: Macgregor, Brisbane, QLD 4109, Australia; 0452 480 704; lxin_2021@outlook.com.
3. Hours: Mon–Fri 8am–5pm, Saturday 9am–3pm, Sunday by appointment.
4. Area sentence: Brisbane and the Gold Coast.
5. Licence placeholder.
6. The form, or a link to /quote.
7. Footer.

---

## 7. Quote form

Fields: name, phone, email, suburb, property (home / business), service (gyprock / dry wall / partitioning / solid wall / patch and repairs / cornice / water damage / new construction / renovations / garage ceiling / other), short description, preferred visit window. Submit: “Get a quote”. Post to the published Outlook address until an own-domain inbox exists.

---

## 8. Speed and SEO

Targets: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1. Performance ≥ 90 desktop, ≥ 80 mobile. Home first load ≤ 300 KB, aim ≤ 250 KB.

No jQuery, Bootstrap, Owl, AOS, TweenMax or Odometer. One self-hosted sans (Manrope 400 and 700, woff2, latin, ~26 KB). No Google Fonts request. Images only where the owner confirms them; width/height set; lazy below the fold.

SEO: viewport (already present), unique titles and metas, canonicals, XML sitemap, `LocalBusiness` JSON-LD with the Macgregor NAP, footer hours, telephone, email, areaServed Brisbane and Gold Coast. Add a licence number only once supplied. Two area mentions (Brisbane, Gold Coast) are enough; do not build twenty suburb pages in this intro build.

---

## 9. Build-hours estimate

Sized to the A$990 intro build. **Figure: 13 hours** (inside the 10–14 h band). The extra hour over a clean 5-page build is for stripping leftover electrician and concrete copy so it cannot ship.

| Part | Hours |
|---|---|
| WordPress setup, light theme | 1.5 |
| Home | 2.5 |
| Services page (eight short sections) | 2.5 |
| About and the four existing reviews | 1.5 |
| Quote page and working notification email | 2 |
| Contact, schema, titles | 1.5 |
| Performance, leftover-content check, QA, handover | 1.5 |
| **Total** | **13** |

---

## 10. Proofs

- `../proofs/current-desktop-1440.png` — live site at 1440 (unchanged from v1)
- `../proofs/current-mobile-390.png` — live site at 390 (unchanged from v1)
- `proofs/desktop-1440.png` — proposed Home at 1440
- `proofs/mobile-390.png` — proposed Home at 390

Visuals carry no sample, demo or template wording, and no mention of bots or AI.

---

## 11. Next step

Nate reviews this v1.2 pack. No build starts until he says so (L-WIREFRAME).

---

## 12. Issues found

Scores and listed issues are from Outbound evidence `crom-desk/02-working/outbound/tradie-weak-sites-2026-11-10/evidence/michael-jin-plastering-brisbane.json`, checked 10 Nov 2026 at 08:25 AWST. The file’s performance runs are tagged `lighthouse-local` (mobile) and `lighthouse-local-desktop` (desktop). Accessibility, best practices and SEO category scores are not in that file, so they are not listed.

| | Mobile | Desktop |
|---|---|---|
| Performance | **65** | **40** |
| First Contentful Paint | 4.4 s | 3.6 s |
| Largest Contentful Paint | 7.6 s | 6.0 s |
| Speed Index | 4.6 s | 3.6 s |
| Total Blocking Time | 50 ms | 0 ms |
| Cumulative Layout Shift | 0 | 0.373 |
| Time to Interactive | 7.6 s | 6.0 s |

**Faults from that evidence file:** no meta description; no LocalBusiness or JSON-LD schema and no Maps embed; homepage recorded as `forms=0` / no booking widget (the only homepage form is a newsletter field).

**Also confirmed on the live site (10 Nov 2026), and already noted in v1:** `quote.php` has a form with `action="#"` (it does not send), plus a second message form also set to `action="#"` and a newsletter form set to `action="#"`. `contact.php` posts to `mail.php` (not verified this session). Leftover electrician copy on `faq.php`, a Beaconsfield electricians page in the nav, a concrete-resurfacing passage on `renovations.php`, footer lorem, and Facebook/Instagram links that point at the bare network homepages. The front end loads Bootstrap, Owl Carousel, AOS, Fancybox, TweenMax and Odometer. Conflicting hours appear on the quote page versus the footer.

The rebuild targets performance ≥ 90 desktop and ≥ 80 mobile, LCP ≤ 2.5 s and CLS ≤ 0.1, unique titles and metas, a working quote form, LocalBusiness schema, and plastering-only copy.

---

## 13. Current page mechanics

Fetched again for this revision on 10 Nov 2026 from `https://www.michaeljin.com.au/` and the inner PHP pages below.

The header is the same on the pages checked: a gold utility bar (area, email, Why Choose Us, Client's Review) and a teal bar with the logo, Home, About (About Us, Work Gallery, Faq, Why Choose Us, Client's Review, Our Work), Our Service (New Construction, Water Damage Repair, Cornice Installation, Patch & Repairs, Renovations, Areas, Beaconsfield), Contact us, Get A Quote, and the phone number.

| Page | What it does | Nav | Forms, CTAs, sliders and motion | Rebuild |
|---|---|---|---|---|
| Home (`index.php`) | Hero, feature cards, about teaser, service photos, a quote band, four testimonials and a suburb list. | Header as above. Many “Get A Quote” buttons point at `quote.php`. | Hero is an Owl Carousel with two slides (“Need Plasterers Brisbane?” and a gyprock slide). Testimonials are a second Owl Carousel. Decorative hero shapes use CSS `bounce` and `moveHorizontal`. TweenMax, Odometer, AOS and Fancybox are loaded. The only homepage form is a newsletter field with `action="#"`. | Keep the offer, the eight live services and the four homepage testimonials. Drop the carousels, the template motion and the newsletter field that does not send. Put a working quote form on Home. |
| About (`about.php`) | Michael’s background and the end-to-end service claim. | Same header. | Quote and contact CTAs. | Keep the live about copy on `/about`. No invented staff bios. |
| Services (`services.php`) and the child URLs (`new-construction.php`, `water-damage-repair.php`, `cornice-installation.php`, `patch-repairs.php`, `renovations.php`, plus commercial and domestic plasterer pages) | Short service blurbs. | Same header; each child is in the Services dropdown. | Quote CTAs. No booking widget. | One `/services` page with eight short sections, using only the plastering lines. The concrete-resurfacing passage on renovations is dropped. Thin service URLs are out of the intro build. |
| Quote (`quote.php`) | A long quote form and a second short message form. | Same header. | Main form `action="#"`. Second form `action="#"`. Newsletter `action="#"`. A sidebar hours line claims 24 hours, 7 days, which contradicts the footer hours. | One working form, posted to the published email. Footer hours only. |
| Contact (`contact.php`) | NAP, hours and a form. | Same header. | Form `action="mail.php"` `method="post"` (delivery not verified this session). Newsletter `action="#"`. | NAP, footer hours, licence placeholder, and the same working form or a link to `/quote`. |
| Gallery (`gallery.php`) | Job photographs. | Same header. | Fancybox-style lightbox is in the asset list. | Labelled photo slots only, and only with the owner’s OK. Images are not copied in. |
| Client's Review (`review.php`) | A longer testimonial list than the homepage. | Same header. | Static testimonials; the homepage uses a carousel of four. | Home keeps the four reviews already published on the homepage. Extra `review.php` quotes are not added to the Home proof. |
| Why Choose Us (`why-choose-us.php`) | Selling points, including honest pricing. | Linked from the gold bar and the About dropdown. | Quote CTAs. | Keep only claims already used in the copy notes (free, no-obligation quotation; price before work starts). |
| FAQ (`faq.php`) | Electrician leftover copy. | In the About dropdown. | — | Drop. |
| Areas / Beaconsfield (`electricians-beaconsfield.php`) | Leftover electricians page. | Under Services → Areas. | — | Drop. No Beaconsfield doorway page. |
| Business directory (`business-directory/index.php`) | Directory page linked in the footer. | Footer only. | — | Drop from the intro build. |

---

## 14. Google reviews

Sought this session (10 Nov 2026) from the Google Business Profile. No Maps or GBP page returned a Google rating, a review count and named review text.

Other pages checked were not a substitute: `https://www.surequote.com.au/plasterer/qld/michael-jin-plastering-and-gyprocking` shows 5.0 from 1 review by “TC Tree C”, not identified as a Google review; `https://tradiesnearyou.com.au/trades/plasterer/queensland/eight-mile-plains/90720736474316002/` says “Not yet reviewed.”

**On the new site:** the four testimonials already published on the current homepage stay in “What clients have written” on Home (and may be repeated or linked from About). A separate Google reviews block sits on Home, immediately after that section, before “Where we work.” Because named GBP quotes were not retrieved this session, that block is the placeholder: “Google reviews: not retrieved, add from the GBP with the owner's OK.” Nothing has been invented or paraphrased.


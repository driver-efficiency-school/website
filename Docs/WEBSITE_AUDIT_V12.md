# Website Audit — alignment with iOS v1.2

**Created:** 2026-05-25
**Audited against:** iOS `release/v1.2 @ 20678a5` (build 1.2 (27))
**Site version (per `package.json`):** `1.1.0`
**Footer-rendered version string:** `v1.1.0 (26052227)`

Companion docs:

- `ios-frontend/Docs/V12_PROJECT_ASSESSMENT.md` — strategic context
- `ios-frontend/Docs/V12_ASSESSMENT_DECISIONS.md` — per-negative action plan
- `ios-frontend/Docs/AppStoreConnect_Review/ASO_v1.2_Bundle.md` — App Store metadata

Audit scope: every Vue component in `src/components/`, `index.html` SEO
metadata, `public/sitemap.xml`, `src/lib/config.ts`, plus the public
asset list.

**Bottom line:** The website is materially out of date relative to the
iOS app **AND** internally inconsistent with itself. Multiple
components reference removed features, fabricated plans, and a privacy
policy that _contradicts_ the iOS app's actual privacy model.
**Bigger surprise from the full source read:** the website
contradicts itself on Smart Detection (auto vs manual), user count
(10K+ vs 1,000+), email (`support@` vs `contact@`), and uses a fake
office address. The brand's own trademarked Subline (`Save. Drive.
Live. / Offline. Anytime. Anywhere.`) is **not rendered anywhere on
the public site** — a primary brand-surface gap. Per the V12
assessment #12 (legal exposure), the **Privacy Policy + Terms of Use
rewrite is a hard blocker before any paid acquisition campaign**.

---

## Source of truth — DO NOT VIOLATE

Per user direction 2026-05-25 (correcting an earlier mis-direction in
this very audit): **the website is the source of truth for trademarked
branding**; the iOS app is the source of truth for in-product feature
names.

### Trademarked brand assets (IMMUTABLE — locked per user 2026-05-25)

| Asset                            | Canonical form                                                       | Currently on live site?                                                |
| -------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **App name**                     | `Efficiver`                                                          | Yes, everywhere                                                        |
| **Brand etymology**              | `Efficient + Driver`                                                 | No — only in `ios-frontend/Docs/AppStoreConnect_Review/AppStore.md`    |
| **Trademarked Subline — line 1** | `Save. Drive. Live.`                                                 | **NO — not rendered anywhere on the public site** (gap — see I1 below) |
| **Trademarked Subline — line 2** | `Offline. Anytime. Anywhere.`                                        | **NO — same gap**                                                      |
| **Logo**                         | `public/Logo-v1_Transparent.webp` + `src/icons/EDIcons_*.webp`       | Yes                                                                    |
| **Brand font**                   | Audiowide (logo wordmark only)                                       | Yes, Navbar + mobile sheet headers                                     |
| **Brand color**                  | Orange (`--primary: 24.6 95% 53.1%` light / `20.5 90.2% 48.2%` dark) | Yes                                                                    |

These are **locked**. Do not rename, modify, or propose alternatives
in this audit or any follow-up doc. The App Store metadata, social
copy, and any new marketing copy must use these verbatim.

### Established (non-trademarked) brand positioning copy — also locked for v1.2

| Element                                  | Source                                      | Status                                                                                                                      |
| ---------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `The Offline Eco-Driving Assistant.`     | `Hero.vue` line 65 (hero descriptor)        | Live, established. Not the trademarked Subline — but established brand positioning. **Out of scope for the "Eco" cascade**. |
| `eco-conscious drivers`                  | `Hero.vue` line 72, `Community.vue` line 29 | Established descriptive language. Out of scope.                                                                             |
| `eco-driving coach` / `eco-driving tips` | `FAQ.vue`, `Help.vue`                       | Established descriptive language. Out of scope.                                                                             |

The `feedback_efficiency_score_not_eco_score` rule applies to the
**scoring metric** (`Efficiency Score`, not `Eco Score`) — verified
already-correct in `Help.vue` and Releases.vue. It does **NOT** apply
to general "eco-driving" descriptor language, which is the existing
brand positioning.

### App-is-canonical (when in conflict with website)

| Topic                                                           | Canonical                                                                      |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **In-product feature names** (e.g., the route-planning feature) | iOS app code                                                                   |
| **Scoring metric name**                                         | `Efficiency Score` per the iOS app + `feedback_efficiency_score_not_eco_score` |
| **Data model** (what's collected, where stored)                 | iOS app code (drives Privacy Policy rewrite)                                   |
| **Accessibility claims**                                        | iOS app code (drives website accessibility section)                            |

When the app and website disagree about _features_, the app wins
because the app code is what users actually run. When they disagree
about _branding_, the website wins because the brand is trademarked
and predates the in-product copy decisions.

---

## Severity legend

| Code         | Meaning                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| **CRITICAL** | Pre-launch blocker. Misleading legal copy or false product claims that create real risk.                                         |
| **HIGH**     | Embarrassing inconsistency, materially wrong feature claim, or significant credibility cost. Must fix before any marketing push. |
| **MEDIUM**   | Wrong / stale content that hurts conversion but doesn't break trust outright. Fix in the v1.2 web update.                        |
| **LOW**      | Cosmetic / consistency / minor copy polish.                                                                                      |

---

## Internal inconsistencies within the website (revealed by full source read 2026-05-25)

These are conflicts **between website components themselves**, not just
app-vs-website misalignment. Several are CRITICAL because they
contradict claims the site makes in adjacent components.

### I1 — Trademarked Subline ("Save. Drive. Live. / Offline. Anytime. Anywhere.") is NOT rendered anywhere on the public website

**Files:** none of `Hero.vue`, `Footer.vue`, `Navbar.vue`, `WhatsNew.vue`, `Releases.vue`, `Investors.vue`, `Help.vue`, `Community.vue`. The Subline exists only in `ios-frontend/Docs/AppStoreConnect_Review/AppStore.md`.

**Severity:** HIGH. The brand's canonical Subline is invisible on the
brand's primary landing page. Hero.vue uses "The Offline Eco-Driving
Assistant" as the descriptor instead; that's an established line but
it's not the Subline.

**Fix:** Add `Save. Drive. Live.` (and/or `Offline. Anytime. Anywhere.`)
to Hero.vue prominently — under the logo, near the descriptor. Same
phrasing should appear in the App Store subtitle slot (ASO bundle).

### I2 — Three competing taglines/missions across the site

| Source                                                 | Phrase                                                                         |
| ------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `ios-frontend/Docs/AppStoreConnect_Review/AppStore.md` | `Save. Drive. Live.` + `Offline. Anytime. Anywhere.` (the trademarked Subline) |
| `Hero.vue` line 65                                     | `The Offline Eco-Driving Assistant.` (hero descriptor)                         |
| `Investors.vue` line 17                                | `Save Earth, Wealth, and Health` (mission statement)                           |

**Severity:** MEDIUM. They serve different purposes (Subline vs.
descriptor vs. mission) and can coexist — but the relationship between
the three is undocumented. A reader who lands on Investors.vue and
then on Hero.vue sees two different identity claims.

**Fix:** Decide the hierarchy + document in a brand-guidelines file.
At minimum, surface the Subline on Hero.vue (per I1) so all three
appear on the same site at different layers.

### I3 — User-count claims contradict each other

| Source                        | Claim                                  |
| ----------------------------- | -------------------------------------- |
| `Hero.vue` line 44            | `Join 10K+ Drivers` (badge)            |
| `ExitIntentPopup.vue` line 70 | `Join 10K+ drivers who saved`          |
| `Investors.vue` line 53       | `Efficiver has attracted 1,000+ users` |

**Severity:** HIGH. The investor-facing page says 1,000; the
user-facing page says 10,000. One of these is wrong by an order of
magnitude.

**Fix:** Use the verifiable number across all components. If neither
is real, replace with non-specific phrasing ("Built for everyday
drivers").

### I4 — Three different support emails used

| Email                     | Used in                                                                                      |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| `support@efficiver.com`   | `.env.example`, `Footer.vue` (via config), `FAQ.vue` line 67 + 97, `ShareButtons` indirectly |
| `contact@efficiver.com`   | `Help.vue` line 342                                                                          |
| `investors@efficiver.com` | `Investors.vue` line 78                                                                      |

**Severity:** MEDIUM. Splitting investor inquiries from support is
fine; having two different "support" addresses (`support@` vs
`contact@`) is a leak.

**Fix:** Standardize on `support@efficiver.com` for support. Update
`Help.vue` line 342 to match.

### I5 — Placeholder fictional address used in Privacy Policy AND Investors

| Source                      | Address                                                                          |
| --------------------------- | -------------------------------------------------------------------------------- |
| `PrivacyPolicy.vue` line 39 | `Efficiver Team, 123 Eco Lane, Green City, CA 90210, USA, support@efficiver.com` |
| `Investors.vue` line 13     | `Efficiver, developed by Efficiver Team (based in Green City, CA, USA)`          |

**Severity:** CRITICAL (compounds C1). "Green City, CA" is fictional.
A privacy policy citing a fake address is legally weaker than one
citing the actual entity location. App Store reviewers and any
attentive user will catch it.

**Fix:** Replace with the actual registered business address (or, if
none exists yet, soften to non-claim phrasing like "Efficiver Team,
operated remotely; correspondence via support@efficiver.com").

### I6 — Smart Detection claim contradicts itself across pages

| Source                 | Claim                                                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `WhatsNew.vue` line 22 | `No more rev-range setup — a one-minute calibration on first launch and acceleration and braking are picked up automatically` |
| `Releases.vue` line 39 | Same — "Efficiver now learns your car on its own"                                                                             |
| `Help.vue` line 53     | `Requires a manual calibration while the vehicle is stationary and the engine is warm`                                        |
| `Help.vue` line 184    | `Calibrate the engine idling signature while your vehicle is stationary...`                                                   |

**Severity:** HIGH. The site's WhatsNew page sells Smart Detection as
"no more rev-range setup, fully automatic". The site's Help page tells
the same user to do a "manual calibration while stationary". A user
who reads both leaves confused.

**Fix:** Update Help.vue Section 2 ("How Efficiver Works") to describe
v1.1 Smart Detection auto-calibration accurately. Remove the manual-
calibration language. (This is part of a broader Help.vue rewrite —
see I7.)

### I7 — Help.vue is v1.0-era and lags every other site page

**File:** `src/components/Help.vue` (417 lines).
**Severity:** HIGH. The site's primary self-serve support doc is one
major version behind the rest of the site:

- Smart Detection wrongly described as manual (per I6)
- No mention of v1.1 features: Eco/Efficient Route, Wallet Watch
- No mention of v1.2 features: interactive drive map, per-waypoint markers, iCloud sync, low-power-aware map, full accessibility (VoiceOver, Dynamic Type, etc.)
- "Coming Soon" section (line 405-412) lists features that are now SHIPPED in v1.1/v1.2 (Apple Maps integration, Advanced route planning, Detailed fuel cost savings reports → Wallet Watch)
- Onboarding steps listed (Section 1) are pre-Smart-Detection 7-screen flow; actual app has 8 screens with different ordering
- "Last updated: December 20, 2025" — predates v1.1 and v1.2

**Fix:** Full rewrite required. Lower priority than C1/C2/C3 (legal
blockers) but should land before any post-v1.2 marketing push.

### I8 — Testimonials are placeholder content (template-source)

**File:** `src/components/Testimonials.vue`.
**Severity:** HIGH (credibility).

- All 8 reviewer avatars use `https://github.com/shadcn.png` (the
  shadcn-vue template's default placeholder image)
- Specific savings claims ("Saved ₹2,500", "15% on fuel", "10%
  emissions reduction") cannot be substantiated per V12 assessment
  item #7 (no analytics)
- Reviewer roles include "Fleet Manager" + "Driving School Owner" who
  praise enterprise features that don't ship
- Reviewers include "Eco-Conscious Driver" and "Eco Enthusiast" as
  user names — not real names

**Fix:** Either (a) replace with real App Store review excerpts once
they exist (post-TestFlight), or (b) remove the Testimonials section
until real reviews exist. Synthetic testimonials with placeholder
photos are an FTC compliance risk for any paid acquisition.

### I9 — Sponsors are template content, not real partners

**File:** `src/components/Sponsors.vue`.
**Severity:** MEDIUM (credibility).

The 10 "Sponsors / Eco Partners" listed (Tata Motors, Mahindra
Electric, Ola Electric, Ather Energy, BluSmart, Yulu, Hero Electric,
TVS Motor, Bajaj Auto, Revolt Motors) are Indian auto/EV companies
with no documented partnership in the codebase or memory.

**Fix:** Verify each sponsor's status. Remove any that are not real
partnerships. The section may be entirely removable if there are no
real partners yet.

### I10 — Team URLs use stale `efficientdriver-*` handles

**File:** `src/components/Team.vue`.
**Severity:** LOW (cosmetic).

GitHub/LinkedIn URLs for all 3 team members use the
`efficientdriver-{name}` format — old brand. The rebrand to Efficiver
happened months ago. These URLs may still resolve (handles preserved)
but the public-facing impression is stale.

**Fix:** Verify each handle resolves, or update to `efficiver-{name}`
handles if they exist.

### I11 — Sheet/Pricing/Investors all reference unshipped Enterprise tier

| File                            | Reference                                                                          |
| ------------------------------- | ---------------------------------------------------------------------------------- |
| `Pricing.vue`                   | 3rd tier "Enterprise — Custom Pricing /user/year, 30-day free trial"               |
| `Contact.vue` line 170          | Subject dropdown option "Enterprise Solutions"                                     |
| `FAQ.vue` line 49               | "Our Enterprise plan is coming soon"                                               |
| `Investors.vue` line 41         | "expand enterprise partnerships" (business model section)                          |
| `Testimonials.vue` line 36 + 54 | Reviews from "Driving School Owner" + "Fleet Manager" praising enterprise features |

**Severity:** HIGH. The site repeatedly promises B2B/Enterprise
features that don't ship. Per user direction 2026-05-25, Pricing.vue
stays as-is for now — but the cross-component Enterprise references
create the same trust risk every place they appear.

**Fix:** Per user direction, defer to post-v1.2. Track in a follow-up
file alongside Pricing.vue decision.

---

## CRITICAL findings

### C1 — Privacy Policy contradicts app's actual data model

**File:** `src/components/PrivacyPolicy.vue`
**Problem:** Policy describes Efficiver as a _web service collecting
data on company servers_ (Data Controller at "123 Eco Lane, Green
City, CA 90210", processes data via IT tools, contact form collects
First Name + Last Name + Email + Phone + Geographic position).

But the actual iOS app:

- Stores everything locally (SwiftData)
- Optional iCloud sync uses user's private DB
- No telemetry, no contact form data backend
- No advertising IDs

The hero section says **"No Data Collection"** — and the privacy
policy _contradicts that claim_. App Store reviewers and any
attentive user will catch this.

**Why CRITICAL:** Apple's recent reviewer guidance rejects metadata
updates with inconsistent or misleading privacy policies. ASO bundle
submission requires this URL working and honest.

**Fix:** Full rewrite. Use the iOS app's actual privacy model as the
source of truth:

- App stores driving data locally on user's iPhone via SwiftData
- Optional iCloud sync writes to user's _private_ iCloud database
- No third-party analytics, no advertising IDs, no telemetry
- Location used only during active drive; not retained after session ends
- Weather data via WeatherKit (Apple); no third-party servers
- Smart Detection ML runs entirely on-device using Apple frameworks
- Contact email only used to reply to user inquiries; not stored or shared

Use the structure from `ios-frontend/Docs/V12_ASSESSMENT_DECISIONS.md` §12
as the outline.

### C2 — Terms of Use missing driving-safety liability disclaimer

**File:** `src/components/TermsOfUse.vue`
**Problem:**

- Sections 1 ("Terms") and 3 ("Disclaimer") are word-for-word duplicates (literal copy-paste from a template).
- No mention of **driving safety / liability** specific to a real-time driving-feedback app — the V12 assessment #12 tail risk.
- Governing law: California — verify this matches the actual entity location.

The iOS app shows real-time scoring while driving. If a user crashes
while glancing at the gauge, the lack of an in-doc liability framework
weakens the legal-defensibility position.

**Why CRITICAL:** Per V12 assessment #12: no paid acquisition without
this in place.

**Fix:**

- Deduplicate sections 1 + 3.
- Add a dedicated **Section: Driving Safety & User Responsibility**
  covering: app is informational not navigational; user remains
  responsible for safe vehicle operation; hands-free / passenger-use
  recommended; never operate phone manually while driving.
- Verify governing-law jurisdiction matches actual entity registration.

### C3 — FAQ statement "no cloud sync or internet sharing" contradicts v1.2 iCloud sync

**File:** `src/components/FAQ.vue` (item-5)
**Quote:** _"Your data stays 100% local on your device with no cloud
sync or internet sharing."_

But v1.2 ships **CloudKit sync** for sessions and the Smart Detection
trained model. This is now a featured value-prop in the TestFlight
What's New + ASO bundle.

**Why CRITICAL:** Conflicting product claims read as either dishonesty
or staleness. App Store reviewers cross-check.

**Fix:** Rewrite item-5 to honestly describe the model: data stays on
user's iPhone _and_ optional iCloud sync uses user's _private_ iCloud
database. No third-party servers; nothing shared with Efficiver.

---

## HIGH findings

### H1 — Hero, WhatsNew, Releases, FAQ, Pricing, Features, HowItWorks all still on v1.1 messaging

**Files:** every above-the-fold + content component.

The site is structured around v1.1's "three flagship features" (Smart
Detection / Eco Route / Wallet Watch). v1.2 added five flagship
features that **no component mentions**:

| v1.2 feature                                                          | Mentioned on website?              |
| --------------------------------------------------------------------- | ---------------------------------- |
| Interactive full-screen drive map (Apple Maps live view)              | **NO**                             |
| Per-waypoint event markers (green/orange/red)                         | **NO**                             |
| Low Power Mode-aware map                                              | **NO**                             |
| iCloud sync (CloudKit + MLX model)                                    | **NO** (and FAQ contradicts)       |
| Full accessibility (VoiceOver, Dynamic Type AX5, Reduce Motion, etc.) | **NO** (one line in Features card) |

**Why HIGH:** The biggest moat (accessibility) and biggest
demonstrable feature (interactive map) are invisible to website
visitors.

**Fix:** Full WhatsNew + Releases rewrite for v1.2. Update Features
grid. Add accessibility-moat callout block in Hero or as a dedicated
section. Updated index.html OG/Twitter/JSON-LD.

### H2 — "Eco" terminology that conflicts with shipped iOS feature renames

**Files:** WhatsNew.vue, Releases.vue, index.html (OG/Twitter).

**Scope correction (2026-05-25):** The
`feedback_efficiency_score_not_eco_score` memory is **scoped to the
scoring-metric term**, not to every "eco" occurrence. The website's
established brand-positioning copy ("The Offline Eco-Driving
Assistant", "eco-conscious drivers", "eco-driving coach", "Eco Master"
plan name) is **NOT in scope for this audit** per the IMMUTABLE list
at the top of this doc.

What IS in scope: words that the iOS app explicitly renamed for v1.2.
The route-planning feature was renamed in code from `case eco = "Eco-Friendly"`
to `case efficient = "Efficient"` (RouteManager.swift) + the ECO badge
on the route card became EFF. Website still says "Eco Route" — this is
a stale **feature name**, not stale brand positioning.

**In-scope renames (limited to feature-name-followed-app):**

| File           | Line context                                                                                                                    | Required change                                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `WhatsNew.vue` | line 27: `title: 'Eco Route'` + line 28: `'Plan an eco-friendly route inside Efficiver'`                                        | `'Efficient Route'` + `'Plan an efficient route inside Efficiver'` (matches RouteManager.swift code rename)          |
| `Releases.vue` | line 53: `'Eco Route'` + line 54: `'Plan an eco-friendly route'`                                                                | Same as above                                                                                                        |
| `index.html`   | line 43: og:title `"...Eco Route..."` + line 46: og:description `"...Eco Route planning..."` + line 56-60: same in twitter tags | Update to v1.2 messaging — remove "Eco Route", introduce v1.2 features (interactive map, accessibility, iCloud sync) |

**Explicitly OUT of scope (trademarked or established positioning):**

- `Hero.vue` "The Offline Eco-Driving Assistant" — established brand descriptor; do not rename
- `Hero.vue` "eco-conscious drivers" — established descriptive language; do not rename
- `FAQ.vue` "eco-driving coach" — established descriptive language; do not rename
- `Community.vue` "eco-conscious drivers" — established descriptive language; do not rename
- `HowItWorks.vue` "eco-friendly driving habits" — established descriptive language; do not rename. (Badge claim itself flagged separately in H4 if badges don't ship.)
- `Pricing.vue` "Eco Master" plan name — leave per user direction 2026-05-25 (pricing revisit deferred)
- `index.html` meta keywords `"eco driving app"` — leave; keyword field is search vocabulary, not user-facing copy

The route-feature rename is the ONLY user-visible cascade required by v1.2 ship state.

### H3 — Pricing.vue describes 3 paid tiers that don't ship

**File:** `src/components/Pricing.vue`

- "Smart Driver" (Free Forever, Basic Features)
- "Eco Master" (In-App Purchase, Full Access — currently "Free (Launch Offer)")
- "Enterprise" (Custom Pricing /user/year)

Per `V12_POST_LAUNCH_ROADMAP.md` and the iOS app code, there are no
tiers. The app is fully free. There's no IAP gating "Eco Master"
features. There's no Enterprise contract path, no multi-user backend,
no custom reports.

This is **fictional product surface** that the website is promising.
Users who tap "Get Started" expect to find these tiers in the app and
won't. Worse, the Enterprise pitch suggests B2B sales that don't
exist.

**Why HIGH:** Promising features that don't ship is the fastest way to
lose user trust.

**Fix options:**

- **A (Recommended):** Delete the Pricing section entirely. Replace
  with a single "Free Forever" banner / hero callout. Match Comparison.vue
  which already says "Free Forever".
- **B:** Keep Pricing section but reduce to 1 card ("Free Forever — all
  features included"). No tier names.
- **C:** Keep tiers but mark Enterprise as "Coming Soon" with a
  honest-when-shipping date. Reject — assessment item #11 (cadence
  cap) means Enterprise isn't on the roadmap.

### H4 — Features grid mentions Gamified Experience (badges) and Business Solutions

**File:** `src/components/Features.vue` (rows 5 + 9)

- _"Gamified Experience: Earn badges and achieve eco-driving goals
  with fun challenges."_ — verify whether badges actually ship in v1.2.
- _"Business Solutions: Multi-user support and custom reports for
  driving schools and fleets."_ — explicitly does NOT ship; promises
  B2B features.

**Why HIGH:** Same as H3 — promised features that don't ship.

**Fix:**

- Verify badges feature in actual iOS code (grep `Badge`, `Achievement`).
  If not shipped: delete the row.
- Delete "Business Solutions" outright. Re-add when/if it's a real v1.5+
  feature with backend support.

### H5 — Pricing.vue plan name "Eco Master" violates terminology rule

**File:** `src/components/Pricing.vue` (covered above in H2 + H3).

### H6 — HowItWorks step 1 describes pre-v1.1 manual calibration

**File:** `src/components/HowItWorks.vue`

Step 1: _"Install Efficiver and select your engine type (Petrol,
Diesel and EV) for personalized tracking accuracy."_

But Smart Detection (v1.1+) **learns the engine signature automatically**
via the CNN model. There's still an Engine Type setting, but the
calibration is automatic. The current step 1 description is the
pre-v1.1 manual rev-range flow.

**Fix:** Update step 1 to describe Smart Detection's auto-calibration
("First-launch ~60-second calibration learns your car automatically").

### H7 — Footer hardcodes version `v1.1.0 (26052227)` + Footer says "(formerly Efficient Driver)"

**File:** `src/components/Footer.vue` line 9.

- `const version = 'v1.1.0 (26052227)'` is hardcoded. Should be read
  from `package.json` via the existing `scripts/bump-version.mjs`
  build step.
- "(formerly Efficient Driver)" in the footer copyright was useful
  during transition (~6 months ago). Now it dilutes brand. Consider
  removing.

### H8 — Open Graph, Twitter cards, JSON-LD all on v1.1

**File:** `index.html`

- og:title: _"Efficiver v1.1: Smart Detection, Eco Route & Wallet Watch"_
- og:description: v1.1 specific
- twitter:title + description: same
- JSON-LD `softwareVersion: "1.1"`
- JSON-LD aggregateRating: 4.9 / 150 — verify; likely fabricated
- JSON-LD description: "Save 8-22% on fuel" — verify substantiated claim
- Title tag: _"Free iPhone Driving Coach (formerly Efficient Driver)"_ — keep "Free iPhone Driving Coach" wording

**Fix:** Update all v1.1 references to v1.2; either drop the
aggregateRating block or replace with actual App Store rating once it
exists; substantiate the fuel-saving claim or soften the wording.

### H9 — Navbar forces dark mode on every load

**File:** `src/components/Navbar.vue` line 7: `mode.value = 'dark'`.

This **overrides the user's system preference + their explicit toggle
choice** on every page load / route change. Accessibility-conscious
visitors (the audience we just spent 104 commits courting on the iOS
side) will notice.

**Why HIGH:** Direct accessibility regression. We just shipped Reduce
Motion + Reduce Transparency + system-color-scheme support on iOS;
the website overriding user preference is the opposite signal.

**Fix:** Remove the line. Let `useColorMode` follow the user's
system preference + their toggle. The default-to-dark intent can be
preserved by setting `useColorMode({ initialValue: 'dark' })` (only
applies on first ever visit), not by writing on every mount.

### H10 — Navbar Features dropdown lists obsolete "Engine Calibration"

**File:** `src/components/Navbar.vue` (featureList array)

_"Engine Calibration: Petrol, Diesel & EV support for accuracy."_ —
same H6 issue, replicated in Navbar.

**Fix:** Replace with a current v1.2 feature highlight (e.g.,
"Accessibility-first: Built for everyone") or remove the feature
dropdown if it's not earning its UI surface.

---

## MEDIUM findings

### M1 — Background Ready in Features and Comparison

**Files:** `Features.vue`, `Comparison.vue`, `Navbar.vue` (featureList).

_"Background Ready"_ + _"Track efficiency in the background while
using Maps or Music"_ is true for the audio side (TTS coordinates
with VoiceOver and music apps) but the **active drive tracking
requires the app to be foreground or location-permitted-background**.
The Smart Detection ML CNN runs on ANE (background allowed); MLX
training requires foreground.

The website's "Background Ready" claim is overstated. Refine to
something accurate like _"Continues tracking in the background"_
without implying the app does everything backgrounded.

### M2 — Comparison.vue claims OBD Apps don't support EV

**File:** `src/components/Comparison.vue` row 7

_"EV Support: Efficiver ✓, OBD Apps ✗"_. Actually some OBD-II apps do
support EVs (Tesla / Nissan Leaf via OBD-II PIDs). The bigger
question is whether Efficiver's CNN-trained-on-ICE Smart Detection
_actually_ works on EVs. Per V12 assessment item #5: this is a real
question without usage data.

**Fix:** Soften to "Works on EVs without OBD" — accurate, doesn't
imply OBD apps are EV-incompatible.

### M3 — FAQ "Beta users have reported 8-22% fuel savings"

**File:** `src/components/FAQ.vue` item-4

Where does this number come from? If it's an aspirational range with
no actual beta-user data backing it, soften to _"Typical eco-driving
techniques save 8-22% on fuel; Efficiver helps you adopt them."_

The original phrasing implies measured Efficiver-user outcomes that
the assessment doc explicitly flags as unmeasured (item #7 — no
analytics).

### M4 — FAQ "Android version is coming soon"

**File:** `src/components/FAQ.vue` item-7

Per the V12 post-launch roadmap, Android is **not on the roadmap**.
The realistic posture is "iOS-focused; Android not currently planned".
"Coming soon" implies near-term shipping.

**Fix:** Either remove the line or replace with _"Efficiver is
currently iOS-only. We have no Android timeline."_

### M5 — Apple Watch "coming soon" via Footer + FAQ

**File:** `Footer.vue` "Apple Watch — Soon" badge + FAQ item-7.

Per the V12 post-launch roadmap: Apple Watch is "v1.5 or later". Not
"soon" by any reasonable interpretation. Same fix as M4.

### M6 — Comparison.vue Setup Time "30 seconds"

**File:** `Comparison.vue` row 8.

The actual onboarding (per V12 assessment item #8) is **8 screens**.
Even with Smart Detection auto-calibration, first-drive readiness is
closer to ~5 minutes including permissions, vehicle setup, and the
~60-second calibration sample.

**Fix:** Honest setup time — _"~3-5 minutes (first-launch)"_ or
_"Calibration takes 60 seconds"_ — accurate, still favorable vs OBD's
15+ minutes.

### M7 — index.html JSON-LD aggregateRating 4.9 / 150

**File:** `index.html` (line 82-86).

This is structured data that Google + App Store crawlers consume.
Without an actual App Store rating to back it, it's misleading
structured data — Google may penalize, App Store reviewers may
question.

**Fix:** Remove the aggregateRating block until there's a real rating
to display. Or wire it to the actual App Store rating API once shipped.

### M8 — Sitemap.xml stale + only homepage

**File:** `public/sitemap.xml`
**Issues:**

- `<lastmod>2026-05-14</lastmod>` — stale.
- Only homepage; hash routes (#whats-new, #releases, #privacy, #terms)
  not indexed. The doc itself notes this is intentional per the
  sitemap protocol, BUT if any of these convert to real URLs (e.g.
  static pages for privacy/terms — recommended for App Store), they
  need entries.

**Fix:** Update lastmod on every deploy. Consider extracting `#privacy`
and `#terms` to standalone routes/static pages for App Store metadata
URL hygiene (`https://www.efficiver.com/privacy` is cleaner than
`https://www.efficiver.com/#privacy`).

### M9 — Hero "Join 10K+ Drivers" — unsubstantiated

**File:** `src/components/Hero.vue` line 44.

If there are not 10,000+ users, this is fabricated social proof.
Per assessment item #7 (no analytics), this number can't be
substantiated either way.

**Fix:** Replace with substantiated claim or soften ("Built for
everyday drivers") until there's real download data.

### M10 — Hero "FaceID Secured" checkmark

**File:** `src/components/Hero.vue` line 99.

Verify: does Efficiver actually use FaceID/TouchID app-launch gating?
Or is it a one-time biometric prompt for a specific flow? If the
former, accurate. If the latter, "FaceID Secured" overstates.

**Fix:** Verify in iOS code (grep for `LAContext`, `biometricType`).
Adjust copy to be precise.

### M11 — Exit-intent popup claims "$300,000+ in Fuel Costs saved"

**File:** `src/lib/config.ts` line 38 + `src/components/ExitIntentPopup.vue`.

Same as M9 — unsubstantiated. Where does $300K come from?

**Fix:** Either substantiate (10K users × $30 = $300K assumes both
user count + per-user savings) or replace with a less-specific
benefit ("Save fuel and reduce CO₂").

### M12 — Footer "(formerly Efficient Driver)" in copyright

**File:** `src/components/Footer.vue` line 238.

Rebrand happened ~6 months ago (per memory + Hero copy). Time to drop
the "(formerly)" tag from copyright. Keep in About / Help if useful
as searchable context.

### M13 — Components now audited in the full-source-read pass (2026-05-25)

This row used to flag "components I haven't audited yet". After the
full source read on 2026-05-25, all components have been examined.
Outcomes:

- `Testimonials.vue` → **escalated to I8** (placeholder content)
- `Team.vue` → **escalated to I10** (stale `efficientdriver-*` URLs)
- `Community.vue` → no new findings beyond H2 scope correction
- `NewsletterSignup.vue` → functional + uses `apiService` properly; "We respect your privacy. Unsubscribe at any time." footer is OK; verify API endpoint stores emails consensually per the rewritten Privacy Policy (depends on C1 rewrite)
- `ExitIntentPopup.vue` → **escalated to I3** (10K+ claim) + see M11 ($300K claim)
- `Sponsors.vue` → **escalated to I9** (template content)
- `Investors.vue` → **escalated to I2, I3, I5, I11** (multiple)
- `ComingSoon.vue` → minimal; teases "Dashboard" (no real Dashboard backend exists per config.ts)
- `Help.vue` → **escalated to I6 + I7** (v1.0-era + contradicts WhatsNew)
- `Contact.vue` → functional; subject dropdown includes "Enterprise Solutions" → see I11
- `ShareButtons.vue` → default share text `"I'm saving fuel with Efficiver - the free offline driving coach app! 🚗💚"` is generic; OK for v1.2; update if a v1.2-specific hook is wanted

---

## LOW findings (cosmetic / consistency)

### L1 — Asset filenames mix `_001`-style and `_101`-style

**Files:** `public/screen-dark_001..006.webp` vs `public/screen-light_101..106.webp`.
Inconsistent numbering convention. Cosmetic. New v1.2 screenshots
should be `screen-dark_001..00X` and `screen-light_001..00X` (same
range for symmetry).

### L2 — robots.txt

Not audited. Likely fine but verify it allows crawlers.

### L3 — Logo files

`public/Logo-v1_Transparent.webp` (v1 suffix) might want refresh.
v1.2 isn't a brand bump but a Logo-v1.2 or Logo-current.webp could
future-proof.

### L4 — `.husky` + lint-staged

Not a content issue; verify the pre-commit hooks actually run after
the v1.2 update commits.

---

## Summary table — by component (updated 2026-05-25 after full source read)

| Component              | Severity of issues                                 |
| ---------------------- | -------------------------------------------------- |
| `PrivacyPolicy.vue`    | **CRITICAL** (C1, I5)                              |
| `TermsOfUse.vue`       | **CRITICAL** (C2)                                  |
| `FAQ.vue`              | CRITICAL (C3) + MEDIUM (M3, M4) + HIGH via I11     |
| `Hero.vue`             | HIGH (H1, I1, I3) + MEDIUM (M9, M10)               |
| `WhatsNew.vue`         | HIGH (H1, H2, I6)                                  |
| `Releases.vue`         | HIGH (H1, H2)                                      |
| `Features.vue`         | HIGH (H1, H4)                                      |
| `HowItWorks.vue`       | HIGH (H6)                                          |
| `Pricing.vue`          | HIGH (H3, H5) + I11 — DEFERRED per user 2026-05-25 |
| `Navbar.vue`           | HIGH (H9, H10)                                     |
| `Comparison.vue`       | MEDIUM (M1, M2, M6)                                |
| `Footer.vue`           | HIGH (H7) + MEDIUM (M5, M12) + I4                  |
| `Help.vue`             | **HIGH** (I6, I7) + I4                             |
| `Investors.vue`        | HIGH (I2, I3, I5, I11)                             |
| `Testimonials.vue`     | **HIGH** (I8)                                      |
| `Sponsors.vue`         | MEDIUM (I9)                                        |
| `Team.vue`             | LOW (I10)                                          |
| `ExitIntentPopup.vue`  | HIGH (I3) + MEDIUM (M11)                           |
| `Contact.vue`          | LOW (I11 — Enterprise dropdown option)             |
| `Community.vue`        | (no new findings)                                  |
| `NewsletterSignup.vue` | LOW (privacy-policy dependency only)               |
| `ComingSoon.vue`       | LOW (Dashboard tease)                              |
| `ShareButtons.vue`     | (OK as-is for v1.2)                                |
| `index.html`           | HIGH (H8) + MEDIUM (M7)                            |
| `sitemap.xml`          | MEDIUM (M8)                                        |
| `config.ts`            | MEDIUM (M11)                                       |

---

## Recommended action plan (phased)

### Phase 0 — Pre-launch blockers (BEFORE v1.2 App Store submission)

1. **C1 + I5** — Privacy Policy rewrite to match actual app data model + replace fake "123 Eco Lane, Green City, CA" address.
2. **C2** — Terms of Use rewrite + add Driving Safety section + dedupe Sections 1 + 3.
3. **C3** — FAQ item-5 corrected for iCloud sync truth.
4. **I3** — Reconcile user-count claim (Hero 10K+ vs Investors 1,000+). Pick one truth, replicate everywhere.

Estimate: ~5 hours of focused writing. No code structure changes
needed. Phase 4 (standalone /privacy + /terms routes) is **cancelled**
per user 2026-05-25 — hash routes stay.

### Phase 1 — v1.2 feature alignment + Subline placement

5. **I1** — Add the trademarked Subline (`Save. Drive. Live.` + `Offline. Anytime. Anywhere.`) to Hero.vue. **Highest-priority surface gap** — the brand's own canonical Subline is invisible on its own landing page.
6. **H1** — WhatsNew.vue rewrite for v1.2 (5 flagship features: interactive map, per-waypoint markers, iCloud sync, accessibility, low-power-aware map). Releases.vue add v1.2 entry.
7. **H8** — index.html OG/Twitter/JSON-LD updated for v1.2 messaging + softwareVersion bump.
8. **H2** — narrow scope: only the route-feature rename ("Eco Route" → "Efficient Route") in WhatsNew + Releases + index.html OG/Twitter copy.
9. **I6** — Help.vue Section 2 + 5: update Smart Detection language to "auto-calibration" (not manual).
10. **H7** — Footer version reads from package.json (build-time substitution).

Estimate: ~4 hours.

### Phase 2 — Honesty pass (remove unshipped feature claims)

11. **H4** — Features.vue: delete Business Solutions; verify badges feature in iOS code; delete Gamified Experience row if badges don't ship.
12. **H6** — HowItWorks step 1: update for Smart Detection auto-calibration.
13. **H10** — Navbar feature dropdown updated.
14. **I9** — Sponsors.vue: verify each "Eco Partner". Remove un-verified.
15. **M3, M4, M5** — FAQ honesty pass on fuel-saving claim, Android timeline, Apple Watch timeline.
16. **M9, M10, M11, M12** — Hero unsubstantiated claims + ExitIntent + "formerly Efficient Driver" cleanup.

Estimate: ~3 hours.

### Phase 3 — Accessibility + UX polish

17. **H9** — Remove forced dark mode in Navbar.
18. **I7** — Help.vue full rewrite (v1.2-current, mentioning all shipped features).
19. **I8** — Testimonials.vue: replace placeholder content OR remove section entirely until real App Store reviews exist.
20. **I4** — Standardize on `support@efficiver.com` across Footer + FAQ + Help.vue.
21. **I10** — Team.vue: verify GitHub/LinkedIn handles, update if `efficiver-*` handles exist.
22. **M8** — Sitemap.xml lastmod update on deploy.
23. **M7** — Remove fake aggregateRating block from index.html JSON-LD.

Estimate: ~3 hours.

### Deferred per user direction 2026-05-25

- **H3 + H5 + I11** (Pricing.vue 3-tier + Eco Master plan name + cross-component Enterprise references) — revisit when pricing model is decided post-v1.2.
- **Phase 4** (standalone /privacy + /terms routes) — keep hash routes.

**Total estimate:** ~15 hours of focused work (was ~12; 11 new I
findings added ~3 hours).

Estimate: ~3 hours if introducing vue-router; ~1 hour if just static
HTML.

**Total estimate:** ~12 hours of focused work to bring the website
into line with v1.2.

---

## What's out of scope for this audit

- **New website redesign / restructure.** This is a content + truth
  audit, not a UX overhaul.
- **Performance / lighthouse profiling.** Different exercise.
- **CSS / Tailwind v4 migration polish.** Site already on Tailwind 4;
  unaddressed regressions are out of scope here.
- **Vue 3.5 → 3.6 upgrade.** Out of scope.
- **Vue-router migration from hash routing.** Recommended for
  cleaner legal-page URLs (see Phase 4) but optional.
- **Backend / email API hardening.** `email.efficiency.school/api/v1`
  is a separate service; this audit assumes it exists and works.

---

## User-locked decisions (2026-05-25)

1. **Privacy Policy + Terms hosting** — **stay as `#privacy` + `#terms` hash routes.**
   No vue-router migration. Phase 4 in the action plan above is
   **cancelled**.
2. **Pricing section** — **leave as-is for now.** Revisit when pricing
   model is decided (post-v1.2). H3 + H5 above are flagged but
   **DEFERRED per user direction**; not acted on in the v1.2 web update.
3. **Phase 0 execution** — **deferred to next session.** This audit
   document is committed; the legal-doc rewrites (C1/C2/C3) wait for
   the next planned slot.

Open questions still to decide before later phases:

- **Testimonials** — are the existing testimonials real? If yes,
  keep; if synthetic, delete + replace with App Store review
  excerpts once available.
- **Team / Investors sections** — currently visible? Should they be
  removed for the v1.2 metadata update (less noise) and added back
  when there's an actual round / actual team page?
- **Newsletter** — the API endpoint exists, but with the strict
  privacy positioning, are we comfortable collecting emails on the
  site? If yes, the rewritten Privacy Policy needs to explicitly
  cover this.

---

## What this audit is NOT

- **Not a final fix list.** Some HIGH/MEDIUM items might be ACCEPT
  trades after you weigh them. Particularly H3 (Pricing), H4
  (Business Solutions / Gamified) — your call whether to delete or
  redirect.
- **Not all components.** Per M13, 9 components weren't fully audited
  in this pass. They may have additional findings.
- **Not a marketing plan.** Per V12_POST_LAUNCH_ROADMAP.md, marketing
  pushes (ProductHunt, accessibility-press) are separate workstream.
  This audit just ensures the site doesn't embarrass us when those
  pushes drive traffic.

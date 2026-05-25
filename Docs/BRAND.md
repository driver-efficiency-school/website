# Efficiver — Brand Guidelines

**Last updated:** 2026-05-25
**Scope:** Website (`efficiver.com`) + iOS App Store metadata
**Status:** Source of truth for brand-layer hierarchy. Use these
verbatim in any user-facing copy.

---

## The brand block (trademarked)

```
Efficiver
Efficient + Driver
Save. Drive. Live.
Offline. Anytime. Anywhere.
```

| Element              | Treatment                                                                                                           |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Name**             | `Efficiver` — Audiowide font when rendered as wordmark; system font in body copy.                                   |
| **Etymology**        | `Efficient + Driver` — typically appears under the name when introducing the brand.                                 |
| **Subline (line 1)** | `Save. Drive. Live.` — three-beat trademark, baked into the logo image.                                             |
| **Subline (line 2)** | `Offline. Anytime. Anywhere.` — three-beat trademark, often rendered in tandem with line 1.                         |
| **Logo**             | `public/Logo-v1_Transparent.webp` (and the matching `EDIcons_*.webp` set). The Subline line 1 is part of this mark. |
| **Color**            | Orange — `--primary: 24.6 95% 53.1%` (light) / `20.5 90.2% 48.2%` (dark).                                           |
| **Font**             | Audiowide for the logo wordmark only. System font (Tailwind default) everywhere else.                               |

These are **immutable** for v1.2 and any subsequent metadata
updates. Do not rename, recolor, or alter the kerning of any element.

---

## Brand layers — three audiences, three voices

The website + App Store metadata + Investor materials each have a
different audience. The brand surfaces three layers of voice. They
**do not contradict** — they layer.

### Layer 1 — Trademarked Subline (everywhere)

> Save. Drive. Live. Offline. Anytime. Anywhere.

**Audience:** Everyone. The brand block. Use verbatim in App Store
subtitle / promotional text / description openers and any social
header card. Already baked into the logo image, so the line 1 phrase
appears wherever the logo appears.

### Layer 2 — Hero descriptor (consumer landing page)

> The Offline Eco-Driving Assistant.

**Audience:** App-curious visitor on `efficiver.com`. Lives on
`Hero.vue:65` directly under the logo. Established positioning copy;
intentionally uses "Eco-Driving Assistant" because that's how the
audience self-identifies (high search volume around "eco driving").
Per `feedback_efficiency_score_not_eco_score`, the _scoring metric_
rule is scoped to `Efficiency Score`; this descriptor is brand
positioning copy and is **out of scope** of that rule.

### Layer 3 — Investor mission (Investors page only)

> Save Earth, Wealth, and Health.

**Audience:** Prospective investors on the `/#investors` page.
Expands "Save" semantically into the three pillars Efficiver
optimizes for. Reads as a stakeholder commitment alongside the
Subline rather than a competing tagline.

---

## How the three layers coexist

A visitor flow:

1. **Lands on landing page** → sees the **Logo** (which carries
   `Save. Drive. Live.`) → reads **Hero descriptor** (`The Offline
Eco-Driving Assistant.`).
2. **Reads body, scrolls** → sees feature cards, screenshots,
   release notes. The Subline appears again in `Releases.vue` v1.2
   card and on social-share previews (per `index.html` Open Graph
   metadata).
3. **Visits Investors page** → sees the **mission** statement
   (`Save Earth, Wealth, and Health.`). Investor page may also
   reference the Subline for brand reinforcement.

If you ever feel they conflict, the order of authority is:

1. **Subline** (trademarked, locked)
2. **Descriptor** (established, consumer-facing)
3. **Mission** (investor-facing only; can be tuned without affecting
   layers 1-2)

---

## When you create new marketing copy

Always anchor on the **Subline** first. Use one or both lines verbatim
in:

- App Store metadata (subtitle, promotional text, description opener)
- Social posts (header card, share text)
- Press hooks (the accessibility-first angle pairs well with
  `Offline. Anytime. Anywhere.`)
- New landing-page sections (the Subline can be the section title;
  body uses the descriptor's "Offline Eco-Driving" language)

Avoid:

- Inventing new sublines or alternate taglines without updating this
  document
- Mixing "Efficient" / "Eco" / "Efficiency" carelessly — see the
  next section
- Replacing the trademarked Subline in subtitle slots with invented
  punchier copy (this was attempted on 2026-05-25 and rolled back)

---

## "Efficient" vs "Eco" vs "Efficiency" — terminology

The rules differ by context. From most-strict to least-strict:

| Context                                             | Required term                          | Why                                                                                                                     |
| --------------------------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Scoring metric (in code + UI)**                   | `Efficiency Score` / `efficiencyScore` | iOS app code authority + `feedback_efficiency_score_not_eco_score`. Never `Eco Score`.                                  |
| **In-product feature names** (route planning, etc.) | Follow the iOS app code                | Eco Route was renamed `Efficient Route` in `RouteManager.swift`; website follows.                                       |
| **Established brand-positioning descriptor copy**   | `Eco-Driving` is acceptable            | Established positioning ("The Offline Eco-Driving Assistant", "eco-conscious drivers"). Not in scope of the score rule. |
| **App Store keyword field**                         | `eco`, `eco driving` allowed           | Search-vocabulary match; users don't see the keyword field. High-traffic terms.                                         |
| **Marketing tagline (new)**                         | Prefer `efficient` / `efficiency`      | Future copy should drift away from `eco` to reduce confusion with the scoring metric.                                   |

---

## Visual identity

- **Color:** Orange (warm, energetic, distinct from automotive blues
  - insurance greens). Light and dark variants defined in
    `src/assets/index.css` `@layer base`.
- **Font (wordmark):** Audiowide (Google Fonts). Used **only** for
  the logo wordmark in Navbar + mobile sheet header. Do not use
  Audiowide for body, buttons, headings, or any functional text.
- **Font (everything else):** System default (Tailwind's default
  stack: `ui-sans-serif`, `system-ui`, etc.). Don't import additional
  display fonts without updating this doc.
- **Icons:** `lucide-vue-next` for UI icons; SF Symbols on iOS.

---

## Don't-touch list (audit immutables)

These were locked by user direction 2026-05-25 (see
`Docs/WEBSITE_AUDIT_V12.md` Source-of-truth section):

- The brand block (Name / Etymology / Subline)
- The Logo image (`Logo-v1_Transparent.webp` + `EDIcons_*`)
- Audiowide as the wordmark font
- Orange as the primary color
- Hero descriptor `The Offline Eco-Driving Assistant.`
- Investor mission `Save Earth, Wealth, and Health.`

If you need to change any of these, update this document FIRST and
get sign-off before editing the components.

---

## Related docs

- `Docs/WEBSITE_AUDIT_V12.md` — v1.2 audit findings + per-component fixes
- `ios-frontend/Docs/AppStoreConnect_Review/AppStore.md` — historical record of v1.0/v1.1 App Store metadata (also where the trademarked Subline first appears together)
- `ios-frontend/Docs/AppStoreConnect_Review/ASO_v1.2_Bundle.md` — App Store metadata for v1.2 (anchored on the Subline)

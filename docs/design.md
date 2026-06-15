# Design System — "Editorial Developer" (extracted from parade-development.ru)

> Refreshes the thin May-2026 extraction of the same site. Captures the
> **visual system only** (color/type/spacing/layout/component patterns) and
> re-maps proprietary assets to license-safe equivalents for Studio YONA. Their
> text, images, logo, and the proprietary fonts themselves are **not** copied.
>
> Note: Studio YONA's current foundations (the `--space-1…8` scale, the warm
> sand palette) already derive from the earlier extraction of this site.

---

## 1. Design language

A calm, editorial "luxury developer" tone:

- **Large, quiet serif display.** Headings are an elegant high-contrast serif at
  a *light* weight (400), with tight negative tracking and very tight leading
  (~0.95). Typeset, not shouted.
- **Curly-brace micro-labels.** Small uppercase tracked labels wrapped in
  braces — `{ LABEL }` — act as section eyebrows and tags.
- **Warm sand ↔ deep dark rhythm.** Light sand/cream sections alternate with
  near-black and deep-maroon image sections (layered gradient overlays on
  photography). The contrast is the drama; the type stays restrained.
- **Sharp, minimal chrome.** Small radii (≈3px), hairline borders, circular
  icon/play buttons. No big pills, no heavy shadows.
- **Generous whitespace + fluid scale.** ~1280px column; type scales with the
  viewport (clamp + vw) so display sizing stays dramatic on large screens.

---

## 2. Color system

Roles synthesized from the source palette (hex values are factual tokens).

### Ink / dark
| Token | Hex | Use |
|---|---|---|
| `--ink` | `#1a1a1e` | primary near-black text & dark sections |
| `--ink-true` | `#000000` | hairlines, max contrast |
| `--maroon-deep` | `#350812` | deepest dark-section base |
| `--maroon` | `#582020` | warm dark accent / gradient stop |
| `--olive` | `#41463e` | alt dark section (charcoal-green) |

### Light / sand
| Token | Hex | Use |
|---|---|---|
| `--paper` | `#fffdf8` | warm white, primary light bg |
| `--sand-50` | `#f6f1e4` | section bg |
| `--sand-100` | `#e2decf` | cards / raised surfaces on sand |
| `--sand-200` | `#d9d7ce` | borders, dividers on sand |

### Accents
| Token | Hex | Use |
|---|---|---|
| `--slate` | `#445d72` | primary cool accent (links, lines on dark) |
| `--bronze` | `#996e31` | primary warm accent (CTA, emphasis) |
| `--bronze-soft` | `#c5ad6f` | bronze tint / hover |
| `--gold-muted` | `#b6a57a` | secondary warm tint |
| `--amber` | `#ff9a19` | sparing highlight only |
| `--sky` | `#8ad5f4` | rare cool highlight |

**Rule:** one warm accent (bronze) + one cool accent (slate) carry the brand.
Amber/sky are <2% sprinkles. Dark sections use `--ink`/`--maroon-deep` as base
with bronze/slate as the only chromatic notes.

---

## 3. Typography

Two families: a high-contrast **display serif** and a **geometric sans** for
body/UI.

### Source → license-safe mapping
| Role | Source (proprietary) | Use for Studio YONA (license-safe) |
|---|---|---|
| Display serif | `Opiumnewc` | **Playfair Display** (OFL) for Latin; **Song Myung** / Nanum Myeongjo (OFL) for Korean — or keep Korean in the sans |
| Body / UI sans | `TT-Hoves-Pro-Trial` (trial) | **Pretendard** (OFL, already self-hosted) — a near-perfect geometric match |

> We already removed the unlicensed `TT-Hoves-Pro-Trial` from this repo;
> Pretendard is the licensed stand-in. Do **not** ship Opiumnewc or TT Hoves.

### Type scale (matches the source's `h-*` rhythm)
| Level | Size (fluid) | Family | Weight | Tracking | Leading |
|---|---|---|---|---|---|
| Display (hero) | `clamp(3.6rem, 8vw, 6.25rem)` | serif | 400 | `-0.02em` | `0.95` |
| H1 | `clamp(2.25rem, 3vw, 2.5rem)` | serif | 400 | `-0.01em` | `1.05` |
| H2 (caps) | `clamp(1.75rem, 2vw, 1.9rem)` | serif | 400 | `-0.02em` | `1.1`, `UPPERCASE` |
| H3 | `1.25rem` | serif/sans | 400–600 | `0` | `1.2` |
| Body | `1rem` (UI `0.875rem`) | sans | 400 | `0` | `1.5` (UI `1.15`) |
| Micro-label | `0.6875rem` | sans | 600 | `+0.05em` | `1`, `UPPERCASE` |

Key feel: **display serif at weight 400** (not bold), tight tracking, tight
leading. Resist bolding the big type.

---

## 4. Spacing & layout

- **Container:** `min(100% - 2rem, 1280px)`, centered.
- **Section padding:** large vertical rhythm (≈`clamp(4rem, 9vw, 8rem)`).
- **Spacing scale (already in our CSS):** `--space-1:7px`, `2:12px`,
  `3:12.59px`, `4:13.77px`, `5:16px`, `6:16.52px`, `7:20px`, `8:24px`.
- **Whitespace first:** one idea per band; let headings breathe.
- **Fluid sizing:** display type/hero spacing scale with `vw` above ~1280px.
- **Grid:** simple 1–2 column editorial splits; image-led cards.

---

## 5. Components

### Brace micro-label (signature)
Uppercase tracked label wrapped in curly braces via pseudo-elements:
```css
.brace::before { content: "{ "; }
.brace::after  { content: " }"; }
/* + .t-tags: uppercase; font-size:.6875rem; letter-spacing:.05em; */
```
Use as section eyebrows (`{ APPS }`, `{ ABOUT }`) and card tags.

### Buttons
- Quiet, rectangular, **small radius (≈3px)**, fit-content, generous horizontal
  padding. Primary = solid **bronze** on light / outline on dark. No pill, no
  drop shadow.
- **Circular icon/play button:** 64–80px circle, translucent sand fill
  (`#e2decf` @ ~20%), 1px hairline border, slight `backdrop-filter: blur`.

### Cards
- Image-led; thin border or none; small radius; **brace tag** top-left; serif
  title below.

### Dark image sections
- Photography under a layered gradient: `--ink`/`--maroon-deep` base fading to
  transparent, with subtle `--slate`/`--bronze` overlays. Text reverses to
  `--paper`; accents stay bronze/slate.

---

## 6. Motion

- Quiet, slow ease-outs (~0.3s `ease-out`; longer 0.5–1s for reveals). Fade/scale
  on scroll, subtle parallax. Nothing bouncy. Respect `prefers-reduced-motion`.

---

## 7. Applying to Studio YONA (notes)

- **Body/UI:** keep **Pretendard** everywhere (our licensed TT-Hoves match).
- **Display serif:** introduce **Playfair Display** (self-hosted, OFL) for Latin
  display words (the "Studio YONA" wordmark, Latin app names). For Korean
  headings pick one:
  - **A.** Pair with **Song Myung** (OFL Korean serif) → fully editorial, but
    re-introduces serif Korean (we recently moved away from it).
  - **B.** Keep Korean headings in **Pretendard** (sans); serif only for Latin →
    safer, but mixes serif/sans within bilingual lines.
- **Palette:** shift our warm beige toward this richer system — add `--slate`,
  `--bronze`, and a deep `--ink`/`--maroon` for one dark section (e.g. Contact)
  to get the sand↔dark rhythm.
- **Labels:** convert our `.section-kicker` eyebrows to `{ … }` brace labels.
- **Buttons:** this system is sharp (≈3px) — note this *reverses* the pill
  buttons we just shipped. Pick one direction intentionally.
- **License:** never ship Opiumnewc or TT-Hoves-Pro-Trial; self-host only OFL
  fonts (Pretendard, Playfair Display, Song Myung).

_Source analyzed: parade-development.ru (visual system only; no content/assets copied)._

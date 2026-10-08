# Homepage loading performance deployment — 2026-10-08

## Goal / Scope

Deploy the user-approved loading improvements to the existing Studio YONA GitHub Pages site.

- Owner checkout: `/Users/Captain/Projects/VibeCoding/Homepage`, base `9a47f43c01bed23c4811bc79956930a173274c4c`.
- Deployment checkout: `/Users/Captain/.codex/worktrees/homepage-loading-deploy/Homepage`, based on remote `main` at `50ae377b1461aa39723ed05bef4212df10282891`.
- Preserve the six existing remote commits, including Notch Dice game links and Spark Catcher authentication results.
- Preserve the owner checkout's existing README, deployment/documentation-rule edits, and untracked security workflow.
- Scope: font subsets, six lossless WebP icons, deferred home icon loading, immediate hero visibility, CSS reference versions, regeneration script, and related documentation.

## Target Verification

- GitHub API confirmed Pages branch publishing: `main`, `/`, custom domain `www.studioyona.co.kr`.
- Latest pre-deployment Pages build: `built`, commit `50ae377b1461aa39723ed05bef4212df10282891`.
- Canonical HTTPS endpoint returned HTTP 200 before deployment.

## Local Validation

- Original checkout: desktop 1440×900 and mobile 390×844 rendering, Korean/English switching, menu open/close, app anchor, all six deferred icons, and console health passed.
- Original font/asset validation: identical RGBA icon pixels; preserved glyph outlines/widths and variable weights; full-font fallback for future characters passed.
- Mobile Chromium comparison, cache disabled, 1.6Mbps download / 150ms latency: LCP 2.428s → 1.428s; initial resource bytes 4,926,872 → 804,856; load event 25.034s → 4.372s. This is local evidence, not a production timing guarantee.
- Deployment checkout: fonts regenerated against the latest source, all 103 HTML pages have valid asset references, diff whitespace checks passed.

## Deployment / Live Verification

- Feature commit: `2684c66652ba200b67e37c04afa72ae020ece913`; pushed to `origin/main` and remote SHA read back exactly.
- Pages API confirmed that commit `built` at 2026-10-08 21:53:15 KST with no build error.
- Canonical HTTPS: 12 responses returned HTTP 200. CSS, two generated fonts, and six WebP icons matched deployment bytes/SHA-256 exactly. Home, links hub, and Mandarana source HTML matched after decoding existing Cloudflare email obfuscation and ignoring its email-decoding script.
- The first Python urllib readback was rejected with HTTP 403. Curl and the normal Aside browser completed the authoritative live checks; this did not require a site configuration change.
- Aside live browser: title and meaningful content correct; hero visible immediately; updated CSS and lightweight font selected; no full font downloaded on the first screen; no desktop horizontal overflow. English switching, menu open/close, and app-section navigation passed. Five nearby WebP icons decoded, with the distant sixth remaining deferred as intended; all six icon endpoint bytes were separately verified.
- Detailed readback evidence: `/tmp/homepage-deployment-live-results.json` (temporary local verification artifact).

## Handoff / Next

Deployment and live functional checks are complete. No known deployment blocker remains. Local throttled timings are comparison evidence; actual visitor timings depend on the connection and browser cache.

The owner checkout remains at its original base with all prior edits and the local optimization preview intact. Continue published-source work from this attached deployment checkout, or synchronize the owner checkout while explicitly preserving its dirty files.

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

Pending commit, push, and canonical asset readback.

## Handoff / Next

Confirm the deployment commit and remote SHA, wait for Pages to build that commit, then verify canonical HTML/CSS/fonts/WebP hashes and live language/menu/app navigation.

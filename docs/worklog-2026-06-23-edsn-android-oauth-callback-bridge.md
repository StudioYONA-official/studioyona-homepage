# EDSN Android OAuth Callback Bridge

Date: 2026-06-23

## Goal

Add a website fallback for Android OAuth redirects that land on:

```text
https://www.studioyona.co.kr/apps/edsn-frame/auth/callback/
```

instead of opening EDSN Frame through Android App Links.

## Facts Found

- The current site is a buildless static GitHub Pages site.
- `/.well-known/assetlinks.json` exists, but App Link delegation can still fail
  on user devices due to verification state, signing mismatch, cache, browser,
  or user "open supported links" settings.
- The callback route previously returned the site 404 page.
- OAuth callbacks can contain one-time auth code/state data in the URL, so the
  fallback page must avoid third-party scripts and external asset loads.

## Decision

- Add `/apps/edsn-frame/auth/callback/index.html` as a static bridge page.
- The page copies the current query string and fragment into:
  `edsnframe://oauth/`.
- The page tries automatic custom-scheme navigation shortly after load and
  provides a manual "앱으로 돌아가기" link if the browser blocks automatic open.

## Changes

- Added `apps/edsn-frame/auth/callback/index.html`.
- Updated `docs/CHANGELOG.md`.
- Updated `docs/ARCHITECTURE.md`.

## Verification

- Start a local static server from the Homepage repo.
- Request `/apps/edsn-frame/auth/callback/?oauth_state=test-state&code=test-code`.
- Confirm HTTP 200 and that the generated page contains
  `edsnframe://oauth/`.
- Request `/apps/edsn-frame/auth/callback?oauth_state=test-state&code=test-code`
  to confirm the directory redirect preserves the query string.
- Confirm the page has no third-party script, stylesheet, or image references.

Result: passed. Local `python3 -m http.server 8125` returned HTTP 200 for the
callback route. The slashless callback route returned HTTP 301 to
`/apps/edsn-frame/auth/callback/?oauth_state=test-state&code=test-code`,
preserving OAuth parameters. Static inspection found no external resource
references; only the inline bridge script is present.

## Handoff / Next

- Deploy the Homepage `main` branch to GitHub Pages.
- After GitHub Pages propagation, confirm:
  `https://www.studioyona.co.kr/apps/edsn-frame/auth/callback/?oauth_state=test&code=test`
  returns the bridge page instead of 404.

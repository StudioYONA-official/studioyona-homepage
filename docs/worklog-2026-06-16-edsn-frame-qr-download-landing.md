# Worklog: EDSN Frame QR download landing

Date: 2026-06-16

## Scope

- Add a public static landing page for EDSN Frame event/store QR photo downloads.
- Keep the page unlisted and driven only by URL fragment data from the app server.

## Changes

- Added `/ko/apps/edsn-frame/photo-download/` as the QR download landing page.
- The page reads `downloadURL`, `remainingDownloads`, `expiresText`, and `appStoreURL` from the URL fragment.
- Added `no-referrer` and `noindex,nofollow` so QR download tokens are not sent as referrers and the page is not indexed.

## Verification

- 완료: GitHub Pages build `ba086adc13cebc2bbcb236d9aa101c7ffbb291c8` built successfully.
- 완료: `https://www.studioyona.co.kr/ko/apps/edsn-frame/photo-download/` returned `200` with `content-type: text/html; charset=utf-8`.
- 완료: Playwright opened the page with QR fragment data and confirmed the download button URL, App Store URL, remaining-download text, and expiry text are populated.

## Handoff / Next

- EDSN Frame server should redirect successful QR claims to this page with fragment parameters.

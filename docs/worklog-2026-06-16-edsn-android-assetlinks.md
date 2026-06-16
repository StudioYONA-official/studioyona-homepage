# Worklog: EDSN Android asset links

Date: 2026-06-16
Status: done
Related Files:
- `.well-known/assetlinks.json`
- `docs/CHANGELOG.md`

## Goal
- Add the Studio YONA website-side Digital Asset Links file for EDSN Frame Android App Links.
- Completion condition: `/.well-known/assetlinks.json` exists in the GitHub Pages root and contains the EDSN Frame Android package name plus a signing certificate SHA-256.

## Scope
- Included: static `assetlinks.json`, changelog entry, local static verification.
- Excluded: switching Android `autoVerify` to `true`; that remains blocked until the Play app-signing certificate SHA-256 is confirmed and the live site serves the file.

## Findings
- The Studio YONA homepage is a buildless GitHub Pages site served from the repository root.
- The Android package name is `kr.co.studioyona.edsnframe`.
- Local signing report produced the release/upload certificate SHA-256:
  `69:FE:0B:86:04:BE:6E:85:46:01:EC:21:33:60:2F:A6:78:74:FD:85:46:D7:0B:1B:3D:20:B0:70:14:19:DB:32`.
- Play App Signing may use a different app-signing certificate. If Play Console shows a different SHA-256 under App integrity, add it to `sha256_cert_fingerprints` before enabling Android `autoVerify`.

## Decisions
- Use the canonical Studio YONA host root `https://www.studioyona.co.kr/.well-known/assetlinks.json`.
- Keep the file at the repository root `.well-known/assetlinks.json` so GitHub Pages serves it at the required Digital Asset Links path.

## Changes
- Added `.well-known/assetlinks.json` for `kr.co.studioyona.edsnframe`.
- Updated `docs/CHANGELOG.md`.

## Verification
- Local JSON parse: PASS.
- Local static preview request for `/.well-known/assetlinks.json`: PASS.
- Live verification: pending deployment.

## Handoff / Next
- Deploy the Homepage repository to GitHub Pages.
- Confirm `https://www.studioyona.co.kr/.well-known/assetlinks.json` returns HTTP 200.
- Compare the fingerprint with Play Console > App integrity > App signing key certificate > SHA-256.
- If Play SHA-256 differs, append it to `sha256_cert_fingerprints`.
- After live assetlinks is correct, switch Android `autoVerify` to `true` and verify on device.

# Worklog: Peekaboo Cam Legal Pages

## Goal

Publish App Store submission-ready public legal URLs for 까꿍캠 through the Homepage static site.

## Scope

- Add neutral App Store legal entry pages.
- Add Korean 개인정보처리방침 and 이용약관 pages.
- Update Homepage changelog and deployment URL list.
- Deploy through GitHub Pages by committing and pushing Homepage changes.

## Reasoning Step

- Plan: Reuse the existing Homepage legal shell and Studio YONA operator/contact facts, then draft app-specific Korean legal text for paid app sale and In-App Purchase policy coverage. Confidence: 0.90.
- Implement: Add `peekaboo-cam` legal routes under neutral and Korean paths. Confidence: 0.88.
- Verify: Run HTML parser validation, stale route checks, local HTTP checks, and live URL checks after deployment. Confidence: 0.86.

## Facts

- Service name: 까꿍캠.
- Operator: 스튜디오 요나.
- Representative and privacy officer: 이나영.
- Support email: studioyona.official@gmail.com.
- App scope: iOS camera app with photo/video capture, parent voice presets, front-camera visual cues, clean saved media, paid App Store sale, and In-App Purchase policy coverage.
- Current build does not include account, ads, analytics SDK, company server upload, cloud sync, or implemented StoreKit products.

## Changes

- Added `apps/peekaboo-cam/legal/privacy/index.html`.
- Added `apps/peekaboo-cam/legal/terms/index.html`.
- Added `ko/apps/peekaboo-cam/legal/privacy/index.html`.
- Added `ko/apps/peekaboo-cam/legal/terms/index.html`.
- Updated `docs/CHANGELOG.md`.
- Updated `docs/DEPLOYMENT.md`.

## Verification

- `python3 -m html.parser apps/peekaboo-cam/legal/privacy/index.html apps/peekaboo-cam/legal/terms/index.html ko/apps/peekaboo-cam/legal/privacy/index.html ko/apps/peekaboo-cam/legal/terms/index.html` passed.
- `rg` confirmed the new `peekaboo-cam` routes, Studio YONA support email, paid app, In-App Purchase, privacy officer, and refund terms appear in the expected files.
- Local HTTP checks returned `200 OK` for:
  - `http://127.0.0.1:8123/apps/peekaboo-cam/legal/privacy/`
  - `http://127.0.0.1:8123/apps/peekaboo-cam/legal/terms/`
  - `http://127.0.0.1:8123/ko/apps/peekaboo-cam/legal/privacy/`
  - `http://127.0.0.1:8123/ko/apps/peekaboo-cam/legal/terms/`
- Public legal copy reviewed for launch tone: speculative wording and drafting-reference notes were removed from the public-facing pages.
- Stop-hook scan: no exception swallowing, fake success, placeholder legal URL, or silent-fail path introduced.
- Commit `1624b14` was pushed to `origin/main`.
- Live no-cache header checks returned `200 OK` for:
  - `https://www.studioyona.co.kr/apps/peekaboo-cam/legal/privacy/?v=20260604b`
  - `https://www.studioyona.co.kr/ko/apps/peekaboo-cam/legal/privacy/?v=20260604b`
  - `https://www.studioyona.co.kr/apps/peekaboo-cam/legal/terms/?v=20260604c`
- Live body keyword checks were attempted after deployment, but the shell environment intermittently failed DNS resolution for `www.studioyona.co.kr`; local body checks and live 200 headers passed.

## Handoff / Next

- Use the neutral URLs for App Store Connect:
  - `https://www.studioyona.co.kr/apps/peekaboo-cam/legal/privacy/`
  - `https://www.studioyona.co.kr/apps/peekaboo-cam/legal/terms/`
- If In-App Purchase products are added, update these pages with the actual product, StoreKit, server validation, restore, and subscription details before submission.

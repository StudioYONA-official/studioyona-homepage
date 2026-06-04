# Worklog: Peekaboo Cam Legal Language Toggle

## Goal

Align Peekaboo Cam legal pages with the same Korean/English link pattern used by other app legal pages, and clarify the privacy policy distinction between Company-collected data and on-device processing.

## Scope

- Add English legal pages for Peekaboo Cam.
- Add KR/EN top-right language toggles on Korean and English legal pages.
- Update neutral legal entry pages to offer both Korean and English choices.
- Revise Korean and English privacy policy text so Company-collected personal information is separated from on-device processing and permission transparency.
- Update Homepage changelog and deployment URL list.

## Reasoning Step

- Plan: Match the existing Stampho-style legal page structure, then reduce overbroad privacy wording by separating Company collection from device-local app processing. Confidence: 0.91.
- Implement: Regenerate Peekaboo Cam legal pages and add English equivalents. Confidence: 0.88.
- Verify: Run HTML parser validation, route/link text checks, local HTTP checks, commit, push, and live URL checks. Confidence: 0.86.

## Facts

- The app has no account, analytics SDK, ad tracking, Company server upload, or current StoreKit products.
- Captured media and parent voice presets are handled locally unless the user explicitly shares or sends support materials.
- Public privacy policy can still disclose local permissions for transparency, but it should not imply that the Company collects camera frames, photos, videos, or voice presets.

## Changes

- Updated neutral legal entries under `apps/peekaboo-cam/legal/...`.
- Updated Korean legal pages under `ko/apps/peekaboo-cam/legal/...`.
- Added English legal pages under `en/apps/peekaboo-cam/legal/...`.
- Updated `docs/CHANGELOG.md`.
- Updated `docs/DEPLOYMENT.md`.

## Verification

- `python3 -m html.parser` passed for neutral, Korean, and English Peekaboo Cam legal pages.
- `rg` confirmed neutral language entry links, top-right KR/EN language toggles, and the separated privacy headings: `회사가 수집하는 개인정보`, `기기 내 처리 및 권한`, `Information Collected by the Company`, and `On-Device Processing`.
- Local HTTP checks returned `200 OK` for:
  - `/apps/peekaboo-cam/legal/privacy/`
  - `/apps/peekaboo-cam/legal/terms/`
  - `/ko/apps/peekaboo-cam/legal/privacy/`
  - `/ko/apps/peekaboo-cam/legal/terms/`
  - `/en/apps/peekaboo-cam/legal/privacy/`
  - `/en/apps/peekaboo-cam/legal/terms/`
- `git diff --check` passed.
- Stop-hook scan: no exception swallowing, fake success, placeholder legal URL, or silent-fail path introduced.

## Handoff / Next

- Use neutral App Store URLs when a single URL is required.
- Use Korean or English localized URLs directly when a locale-specific URL is preferred.

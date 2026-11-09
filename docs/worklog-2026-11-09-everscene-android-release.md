# Worklog: EverScene Android release on the homepage

Date: 2026-11-09
Status: done
Related Files:
- index.html
- apps/index.html
- ko/apps/everscene/index.html
- en/apps/everscene/index.html
- ko/apps/everscene/support/index.html
- en/apps/everscene/support/index.html
- docs/site-copy.md

## Goal
- Reflect the Google Play release of 영리하다 / EverScene (2026-11-07) on the home card, the app list and the ko/en app pages, following the Mac release change `9303eea`.
- Done when ko/en pages show a Google Play button and Android in the platform text, with no restyling.

## Scope
- In: store buttons, platform/OS pills, home card points line, app-list tags, the support purchase-restore line, the site-copy record.
- Out: legal pages (`*/apps/everscene/legal/*`, already cover Android and Google Play), pricing text (it does not name a store), the iOS-specific photo access / iCloud / Recently Deleted support tips, push and deploy.

## Findings
- Branch `claude/everscene-android-release-20261109` cut from `origin/main` = `3142654`.
- Play listing: `https://play.google.com/store/apps/details?id=kr.co.studioyona.everscene` (HTTP 200 signed out on 2026-11-09).
- Android minimum: `minSdk = 30` in `EverScene/android/app/build.gradle.kts` (read-only) = Android 11.
- The Android Pro screen also has a 구매 복원 (restore) action (`EverScene/android/.../ui/ProScreen.kt`), so the support restore line applies to Android with a Google account.
- `docs/site-copy.md` still recorded the pre-release pills (출시 준비 중 / iPhone 전용 / iOS 26 이상); they were synced to the current page text.

## Decisions
- 결정: Google Play goes after Mac App Store as `button primary` in the hero and `button secondary` on the home card.
  이유: same position and class as the App Store buttons in each place (the Mac change used primary in the hero, secondary on the card); EDSN Frame uses the same Google Play label.
- 결정: Links carry `hl=ko` / `hl=en`, written as `&amp;` in HTML, with `rel="noopener noreferrer"`.
  이유: matches the locale of each page.

## Changes
- `ko/apps/everscene/index.html`, `en/apps/everscene/index.html`: Google Play button; pills `iPhone · Mac · Android` / `iPhone, Mac, and Android` and `iOS 26 · macOS 26 · Android 11 이상` / `iOS 26 · macOS 26 · Android 11 or later`.
- `index.html`: Google Play button on both 영리하다 / EverScene cards; points `iPhone · Mac · Android 출시 · 한국어 · English` / `Available on iPhone, Mac, and Android · Korean · English`.
- `apps/index.html`: tags `iPhone · Mac · Android 출시` / `Available on iPhone, Mac, and Android`.
- Support pages: restore line adds `(Android는 같은 Google 계정)` / `(on Android, the same Google account)`.
- `docs/site-copy.md`: release-state update note, pills and restore line.

## Verification
- 실행한 검증:
  - `git diff --check`
  - Python `html.parser` tag balance on the six edited HTML files, plus extraction of the new Google Play hrefs and their `rel`
  - Local preview (`scripts/no_cache_server.py`, port 8791) in the in-app browser: ko/en EverScene hero screenshots; home and `/apps/` card text read from the served DOM
- 결과:
  - PASS. No unclosed or mismatched tags; four new hrefs well formed; buttons and pills render on one row with the existing styles.
- 미실행 항목:
  - No screenshot of the home cards (the page scrolls in a snap container); their text and buttons were checked from the DOM, and the card layout matches the EDSN Frame card, which already has three store buttons.

## Handoff / Next
- Committed locally, not pushed; the orchestrating session reviews and pushes to main.
- The support page's photo-access, iCloud and Recently Deleted tips are still iOS-only; adding Android steps would be a separate copy decision for the owner.

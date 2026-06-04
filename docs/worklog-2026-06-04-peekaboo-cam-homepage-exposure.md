# Worklog: Peekaboo Cam Homepage Exposure

## Goal

Expose Peekaboo Cam on the Studio YONA homepage like the other apps, with launch-preparation status.

## Scope

- Add Peekaboo Cam to the homepage app panels.
- Add Peekaboo Cam to the apps listing page.
- Add Korean and English Peekaboo Cam app detail pages.
- Keep legal links connected to the already-published privacy policy and terms pages.
- Update site copy, changelog, and deployment verification notes.

## Reasoning Step

- Plan: Use existing app-card/detail-page components and avoid new styling so the new app matches the site system. Confidence: 0.91.
- Implement: Insert Peekaboo Cam after Stampho and before Detective's Recorder, because the requested status is launch preparation. Confidence: 0.89.
- Verify: Validate HTML, run local HTTP checks for homepage/list/detail/legal links, then commit and push for GitHub Pages deployment. Confidence: 0.86.

## Changes

- Updated `index.html`.
- Updated `apps/index.html`.
- Added `ko/apps/peekaboo-cam/index.html`.
- Added `en/apps/peekaboo-cam/index.html`.
- Updated `docs/site-copy.md`.
- Updated `docs/CHANGELOG.md`.

## Verification

- `python3 -m html.parser index.html apps/index.html ko/apps/peekaboo-cam/index.html en/apps/peekaboo-cam/index.html` passed.
- Local HEAD checks returned `200 OK` for `/`, `/apps/`, `/ko/apps/peekaboo-cam/`, and `/en/apps/peekaboo-cam/`.
- File body checks confirmed Peekaboo Cam appears on `index.html`, `apps/index.html`, and both localized detail pages with the expected launch-preparation copy and legal links.
- `git diff --check` passed.
- Stop-hook scan: no exception swallowing, fake success, placeholder link, or silent-fail path introduced.

## Handoff / Next

- Public detail URLs:
  - `https://www.studioyona.co.kr/ko/apps/peekaboo-cam/`
  - `https://www.studioyona.co.kr/en/apps/peekaboo-cam/`
- Status copy is intentionally launch-preparation, not App Store released.

# Claude Handoff: Studio YONA Homepage / EDSN Frame FAQ

Date: 2026-07-26
Repo: `/Users/Captain/Projects/VibeCoding/Homepage`
Branch: `main`
Status: not deployed

## Current Goal

Continue from the current local homepage state. The latest user-facing change is the EDSN Frame guide section: it was converted from a long step-by-step usage guide into a left-question / right-answer FAQ format.

The user wants to inspect and possibly continue editing before deployment.

## Current Working Tree State

Staged changes currently include:

- `.github/workflows/security.yml`
- `assets/site.css`
- `docs/CHANGELOG.md`
- `docs/site-copy-ko-edit.md`
- `docs/worklog-2026-07-03-edsn-frame-usage-guide.md`
- `en/apps/edsn-frame/index.html`
- `index.html`
- `ko/apps/edsn-frame/index.html`

Unstaged change currently present:

- `docs/DOCS_RULES.md`

Important: `docs/DOCS_RULES.md` was already modified outside the current FAQ handoff work. Do not revert, stage, or rewrite it unless the user explicitly asks.

## What Changed

### EDSN Frame Detail Pages

Files:

- `ko/apps/edsn-frame/index.html`
- `en/apps/edsn-frame/index.html`

The `#guide` section now uses:

- Eyebrow: `FAQ`
- Left navigation list of 15 questions
- Right content cards with matching answers
- Stable anchor links for each question

Key anchors:

- `#guide`
- `#guide-about`
- `#guide-capture-frames`
- `#guide-frame-designs`
- `#guide-filters`
- `#guide-events`
- `#guide-event-settings`
- `#guide-send-photos`
- `#guide-qr-entitlement`
- `#guide-print`
- `#guide-custom-frame`
- `#guide-subscriptions`
- `#guide-film`
- `#guide-points`
- `#guide-earn-points`
- `#guide-secret-achievement`

The FAQ covers:

1. What EDSN Frame is
2. Available capture frame types
3. Frame design types
4. Filters and correction tools
5. Group/event use
6. Event mode settings
7. Guest photo delivery
8. QR delivery entitlement
9. Printing
10. Custom event-frame inquiry by email
11. Subscription differences
12. Photobooth film
13. Achievements and points
14. How to earn more points
15. Secret achievements

### Home Page

File:

- `index.html`

The EDSN Frame app card links to the guide:

- Korean: `/ko/apps/edsn-frame/#guide`
- English: `/en/apps/edsn-frame/#guide`

### CSS

File:

- `assets/site.css`

Guide-related styles are around:

- `.app-page .guide-panel`
- `.app-page .guide-layout`
- `.app-page .guide-chapters`
- `.app-page .guide-step-card`
- responsive rules near the bottom of the file

The layout is intentionally plain anchor navigation, not JavaScript tabs, so direct linking, keyboard navigation, and no-JS behavior remain stable.

### Docs

Files:

- `docs/site-copy-ko-edit.md`
- `docs/CHANGELOG.md`
- `docs/worklog-2026-07-03-edsn-frame-usage-guide.md`

`docs/site-copy-ko-edit.md` contains the Korean FAQ source copy. If the user edits Korean wording, use that as the source and update both Korean HTML and corresponding English translation.

## Verification Already Run

Passed:

```sh
python3 -m html.parser index.html ko/apps/edsn-frame/index.html en/apps/edsn-frame/index.html
git diff --check
```

Earlier local HTTP check also passed for the FAQ page, but the server is not currently listening on port `8123` at handoff time.

## Local Preview

To start local preview:

```sh
zsh scripts/local-preview.command
```

If that fails because a stale process or sandbox blocks the port, use the no-cache server directly:

```sh
/usr/bin/python3 scripts/no_cache_server.py --port 8123 --directory /Users/Captain/Projects/VibeCoding/Homepage
```

Primary page to inspect:

```text
http://127.0.0.1:8123/ko/apps/edsn-frame/?preview=claude-handoff-20260726#guide
```

English page:

```text
http://127.0.0.1:8123/en/apps/edsn-frame/?preview=claude-handoff-20260726#guide
```

## Suggested Next Steps

1. Confirm the local server is running.
2. Open the Korean FAQ guide and review the 15-question order.
3. Check whether the left question list feels too dense on desktop and mobile.
4. If the user edits copy, update `docs/site-copy-ko-edit.md` first, then sync Korean HTML and English HTML.
5. Re-run:

```sh
python3 -m html.parser index.html ko/apps/edsn-frame/index.html en/apps/edsn-frame/index.html
git diff --check
```

6. Deploy only after the user explicitly asks.

## Deployment Note

Do not deploy automatically. The user has not requested deployment after the FAQ conversion in the current handoff state.

When deployment is requested, first confirm staged scope because `.github/workflows/security.yml` is staged and may be unrelated to the visual/content work.

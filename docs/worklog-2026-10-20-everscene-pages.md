# EverScene homepage and bilingual introduction

## Goal / Scope

Prepare the owner-requested homepage, app lists, introduction and support pages in `Homepage-wt-everscene-20261014`, branch `claude/everscene-pages-20261014`. No push, deployment, or changes to the owner's main checkout or EverScene source repo.

## Sources / Decisions

- Starting HEAD and local origin/main: `e9b83a6bd2dfa6b60e0a436ec64ed5f4f9ff9e37`; clean worktree. No live remote comparison performed.
- Copy: read-only `EverScene/docs/store/store_copy_ko.md`, dated 2026-10-20, supplied as owner-approved. Keep first 30 free decisions, then 5 daily, with one-time Pro.
- Existing root home and apps list own bilingual content. Preserve ko/en redirect wrappers. Add home cards after Mandarana and update the existing EverScene list cards in place.
- Retain existing classes, navigation and script/style references. Pair introduction and support with ko/en switches and hreflang.
- App is unreleased: follow existing coming-soon pattern, omit the supplied App Store URL/download button.
- Legal: all six ko/en/neutral terms/privacy pages exist and their local targets resolve. Leave unchanged. English legal footer links explicitly lead to the Korean introduction/support; these remain valid.
- Icon copied from AppIcon-1024.png, retained as PNG and encoded losslessly to WebP. Three screenshots per language (01-review, 03-overview, 05-trim), resized proportionally from 1320×2868 to 644×1400, JPEG quality 85. Originals remain in the source repo. Reproduction uses installed Pillow, LANCZOS resize, RGB JPEG with optimize=True; icon uses lossless=True, method=6, exact=True.

## Validation

- Local Python HTML parser: 16 HTML files checked for balanced nesting, duplicate attributes and IDs; 319 internal href/src/language links and fragments resolve to repo files/IDs.
- Six JPEG screenshots decode at 644×1400; WebP icon decodes at 1024×1024.
- `git diff --check` passed.
- Browser render not verified: Aside daemon unavailable; sandbox denied binding the local preview HTTP server (`Operation not permitted`). No dependencies installed or permissions changed.
- No claim of current production status: legal existence/link checks are local; no push/deploy performed.

## Handoff / Next

- Commit is blocked: `git add` and `git commit` could not create `/Users/Captain/Projects/VibeCoding/Homepage/.git/worktrees/Homepage-wt-everscene-20261014/index.lock` (Operation not permitted). Linked-worktree Git metadata is outside this session’s writable roots; permission escalation is unavailable. No commit hash exists for this change. Files remain unstaged.
- Caller must stage and commit the scoped files on this branch, then review and push. Verify desktop/mobile rendering and live routes after deployment.
- Owner copy review: shortened pricing summary, Overview / Save Clip / Speech feature labels, screenshot captions, and English translation of the existing Korean support guidance. Product feature prose follows the supplied bilingual store copy; Korean prose uses polite forms.
- Full edited page copy is recorded in `docs/site-copy.md`.

# CheerUpBuddies invitation links — 2026-10-18

## Scope and authority

CheerUpBuddies fix orders D5, CONS8/10/14 and owner D7 authorize only AASA/invite guidance publication through existing GitHub-managed legacy Pages. Homepage owner main has dirty work; this separate origin/main worktree (baseline b8608d7) preserves it. No Pages/source/CNAME/workflow settings, existing Notch Dice association, credentials or other apps change. Main publication uses ordinary [skip ci] FF only; GitHub-managed Pages runs are approved, unrelated workflows remain suppressed.

## Implementation

The canonical host www.studioyona.co.kr responded HTTPS200 without redirect. The apex .co.kr redirected to www; both .kr hosts had DNS lookup failures. Existing AASA details are preserved and the exact CheerUpBuddies appID with /i/ query-code components is appended. The guidance page reuses existing compact app card/style and validates one eight-character ASCII alphanumeric code, normalizing outer whitespace/case before textContent assignment. No innerHTML, clipboard access, new assets/CSS, store link or automatic redeem. No new accessibility feature is added; the existing page shell is reused.

## Verification and publication

Pending local checks, ordinary FF push, matching Pages build SHA/built, live AASA headers/JSON, actual code display and Apple CDN readback. App signed-entitlement/capability/device acceptance is a separate CheerUpBuddies concern and is never inferred from this page.

Local verification passed seven code-query cases (valid/lowercase/outer whitespace, invalid injection/long/duplicate/Unicode/missing) plus exact preservation of the existing AASA details. Aside local rendered validation confirms TEST1234 and polite guidance, existing styles loaded, invalid code renders no injected content and no store/redeem action exists. Existing 18 browser tabs including pending Apple login were preserved. Browser viewport resizing is unsupported; narrow mobile rendering was not executed, OS settings unchanged. Screenshot: Aside session rDOIceuEs1T66kYg, invite-invalid.png. Root visually read this artifact. No external dependency installed.

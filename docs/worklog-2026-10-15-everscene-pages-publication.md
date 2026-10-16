# EverScene (영리하다) pages publication — 2026-10-15

## Scope and authority

The user asked to publish the EverScene homepage pages ("홈페이지는 배포해줘", 2026-10-15). Website publication only; no App Review submission or app release. The owner's main Homepage checkout has unrelated uncommitted work and is not touched.

## Source and deployment path

- Pages: `/ko/apps/everscene/` (intro), `/ko/apps/everscene/support/`, `/ko/apps/everscene/legal/{privacy,terms}/`, language-neutral routes under `/apps/everscene/`, and the 앱 목록 card.
- Legal text source: `EverScene/docs/legal/{privacy-policy,terms}.ko.md` on EverScene main `f808e71`; page SHA-256 comments match the source files. Korean name 영리하다; the English name stays EverScene.
- Isolated worktree branch `claude/everscene-pages-20261014`, rebased on remote main `8a2ea0a`; the remote tree has no `.github/workflows/` paths (branch publishing to main/root, www.studioyona.co.kr).
- `scripts/optimize_assets.py` regenerated only the two site font subsets.

## Validation

- Internal links and asset references of the 9 touched pages resolve to files in the tree.
- CSS cache version matches the rest of the site (`site.css?v=20261008a`); footer matches the other app pages.

## Handoff / Next

- After the push: confirm the native Pages build and the live canonical URLs.
- The legal texts keep 시행일 2026-10-14 (drafted date; the app is not released). Change only on the owner's decision.

## Free allowance update (2026-10-15)

- The app's free allowance went from 30 to 50 decided videos (user decision). Intro and support pages and terms §5 regenerated from EverScene main `e1544a4`; terms SHA-256 matches the source. The owner moved the terms effective date to 2026-10-15 (privacy policy stays 2026-10-14) and approved this second publication.

## Sharing and favorite in the privacy policy (2026-10-16)

- The app's review screen gained share and a heart (Photos favorite). The privacy policy now covers both and the share file's retention; its effective date moved to 2026-10-15 (owner decision). Terms and policy name the settings screen instead of "앱 정보". Regenerated from EverScene main `0a42dac`; both SHA-256 values match the sources. Published with the owner's approval.

## Legal texts on the Notch Dice template (2026-10-16)

- Owner request: take the Notch Dice terms and privacy policy and change only what differs for this app. Regenerated from EverScene main (legal texts after removing overly favourable, guideline-like and hedging wording); the generator now renders Markdown tables as `legal-table`, wraps articles in sections and shows the effective date in the hero, like the Notch Dice pages. Checked locally in a browser (tables, hero date). Effective date stays 2026-10-15. Reviewed against EDSN Frame: liability, free-scope changes and EU consumer / GDPR sections added.

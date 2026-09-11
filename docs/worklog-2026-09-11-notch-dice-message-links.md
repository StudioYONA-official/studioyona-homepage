# Notch Dice game-link publication — 2026-09-11

## Scope and authorization

The user approved publishing the prepared Notch Dice installation page/AASA and configuring Apple Associated Domains. The homepage source is based on verified remote `main` at `9a47f43c01bed23c4811bc79956930a173274c4c` in an isolated clone; unrelated dirty Homepage files are preserved in their original checkout.

## Changes and validation

- Add only `/apps/notch-dice/play/index.html`, its `install.mjs`, and the `.well-known/apple-app-site-association` entry, plus these scoped documentation updates.
- The page/module and AASA match the Notch Dice repository's tested `web/message-links/` source. Existing `.nojekyll`, CNAME and Android `assetlinks.json` remain unchanged.
- The Notch Dice source has 35 passing selected Swift tests, a successful strict-concurrency build, 4 passing Node web tests and an internal source review with no remaining actionable findings. Local Aside review verified English/Korean pre-release states and language switching; those are not live platform checks.
- A decoded existing release provisioning profile confirms `MQ566TS9GT.kr.co.studioyona.notchdice`; current release profiles lack Associated Domains. The debug identifier derives from canonical app configuration and needs its own Apple registration/profile validation.
- GitHub Pages readback confirms legacy branch publishing from `main` `/`, canonical custom domain `www.studioyona.co.kr`. No DNS or hosting migration is needed.

## Handoff / Next

After this commit deploys, verify public HTTP 200, page/module byte parity, AASA JSON/Content-Type/no redirect, and Apple association retrieval. Record exact live verification in the Notch Dice deployment artifact. The existing App Store Connect key receives a team-access 403 on Bundle IDs. The authenticated Apple Developer account confirms that individual-to-organization membership migration is in progress and membership benefits are temporarily disabled. Apple capability/profile changes are blocked until that migration completes; no capability was changed. Do not claim native link routing until a correctly provisioned installed build passes warm/cold opening. The app is unreleased, so no real App Store redirect can be activated yet.

For rollback, revert only this scoped publication commit and deploy the resulting main branch; do not overwrite unrelated website work.

## Live verification and privacy correction

- Publication commit `6692053a8bea2de8b9c9db9e964ef734989cd430` reached Pages `built`; all three public endpoints returned HTTP 200 without URL redirection. The module and AASA bytes match source. Apple CDN also returned the exact AASA as HTTP 200 `application/json`. Origin currently serves AASA as `application/octet-stream`; the scoped JSON response-header adjustment awaits Cloudflare login.
- Live HTML exposed Cloudflare-injected Web Analytics despite the canonical page having no third-party script. The page now sets an early CSP allowing scripts only from its own origin and denying outbound connections. This confines the correction to the game-link page and does not alter other website analytics settings. The web suite now has 5 passing tests. Browser verification after the correction remains a separate step.

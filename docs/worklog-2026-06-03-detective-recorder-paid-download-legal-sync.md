# Detective Recorder Paid Download Legal Sync - 2026-06-03

## Scope

- Updated public Korean and English Detective Recorder privacy policies and terms from the latest RecorderFix legal source.
- Reflected the launch sale model as a paid App Store download.
- Preserved future in-app purchase, subscription, premium feature, additional content, and Paid Feature scope.
- Preserved iPhone, iPad, Mac scope and on-device transcription disclosures.

## Key Decisions

- Current App Store purchase/payment/refund handling is described as Apple-processed paid app download handling.
- Future paid features remain allowed, with payment verification information scoped to entitlement checks, purchase restoration, and payment-error support.
- Recording files and transcription results remain described as on-device by default, with no automatic upload to Company servers or external transcription servers.

## Verification

- Searched public pages for paid app purchase, future in-app purchase/subscription/Paid Feature, iPhone/iPad/Mac, SpeechAnalyzer, Whisper, and on-device transcription language.
- Searched public pages for stale direct-collection and disabled/not-user-facing wording.
- Ran HTML parser checks on the four locale legal pages.
- Ran local HTTP 200 checks for the four locale legal paths.

## Handoff / Next

- Deploy by committing and pushing the Homepage repo to `main` for GitHub Pages branch publishing.
- After GitHub Pages updates, verify the four live legal URLs with headers and body text fetches.

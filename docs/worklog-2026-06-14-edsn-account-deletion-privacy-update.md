# Worklog - 2026-06-14 - EDSN Account Deletion Privacy Update

## Goal

- Update the public EDSN Frame privacy policy so the same page can support
  Apple and Google account/data deletion disclosure requirements.

## Changes

- Added Korean and English account/data deletion request instructions to the
  EDSN Frame public privacy policy pages.
- Stated that Apple or Google linked-account users can request deletion in the
  app through Settings and Account/Withdrawal screens.
- Listed the account-related data deleted or de-identified after completion.
- Clarified that legally required payment, dispute, security, and anti-abuse
  records may be retained separately, and that App Store / Google Play payment
  records may be retained by Apple or Google under platform policy.

## Public URLs

- Korean: `https://www.studioyona.co.kr/ko/apps/edsn-frame/legal/privacy/`
- English: `https://www.studioyona.co.kr/en/apps/edsn-frame/legal/privacy/`

## Verification

- `rg -n "계정 및 관련 데이터 삭제 요청 방법|Apple App Store와 Google Play|삭제 요청이 완료|How to request deletion|Apple App Store and Google Play|When the deletion request" ko/apps/edsn-frame/legal/privacy/index.html en/apps/edsn-frame/legal/privacy/index.html`: confirmed both language pages contain the deletion instructions, platform scope, and deletion-data summary.

## Next

- Use the Korean privacy policy URL as the Google Play account deletion URL for
  the Korean listing.
- If Google Play requires a locale-specific English deletion URL, use the
  English privacy policy URL.

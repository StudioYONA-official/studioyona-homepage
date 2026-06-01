# Worklog: Detective Recorder public legal URL sync

Date: 2026-05-31
Status: done
Related Files:
- `ko/apps/detective-recorder/legal/privacy/index.html`
- `ko/apps/detective-recorder/legal/terms/index.html`
- `en/apps/detective-recorder/legal/privacy/index.html`
- `en/apps/detective-recorder/legal/terms/index.html`
- `docs/CHANGELOG.md`
- Source instruction: `/Users/Captain/Projects/VibeCoding/RecorderFix-codex-2026-04-23-dev-prep/docs/PUBLIC_LEGAL_URL_SYNC_INSTRUCTIONS_2026-05-31.md`
- Source legal docs:
  - `/Users/Captain/Projects/VibeCoding/RecorderFix-codex-2026-04-23-dev-prep/docs/legal/PRIVACY_POLICY_KO.md`
  - `/Users/Captain/Projects/VibeCoding/RecorderFix-codex-2026-04-23-dev-prep/docs/legal/TERMS_OF_SERVICE_KO.md`
  - `/Users/Captain/Projects/VibeCoding/RecorderFix-codex-2026-04-23-dev-prep/docs/legal/PRIVACY_POLICY_EN.md`
  - `/Users/Captain/Projects/VibeCoding/RecorderFix-codex-2026-04-23-dev-prep/docs/legal/TERMS_OF_SERVICE_EN.md`

## Goal
- App Store Connect에 입력할 탐정의 녹음기 공개 법률 URL 4개가 현재 iOS + Mac Catalyst release candidate 법률 원문과 일치하도록 동기화한다.

## Scope
- 포함 범위: 한글·영문 개인정보처리방침/이용약관 visible legal body 교체, iCloud/CloudKit 공개 문구 제거, HTML/로컬 URL 검증.
- 제외 범위: 비로케일 fallback 법률 페이지, App Store Connect 실제 입력, 배포.

## Changes
- RecorderFix 원문 4개를 Homepage 한글·영문 법률 페이지 본문으로 변환해 반영했다.
- 첫 출시 후보에서 사용자-facing이 아닌 iCloud/CloudKit 동기화 관련 문구를 제거했다.
- 개인정보처리방침의 앱 설정 목록에서 `language`/`언어` 항목이 노출되지 않도록 원문 기준으로 맞췄다.

## Verification
- 실행한 검증:
  - `python3 -m html.parser ko/apps/detective-recorder/legal/privacy/index.html`
  - `python3 -m html.parser ko/apps/detective-recorder/legal/terms/index.html`
  - `python3 -m html.parser en/apps/detective-recorder/legal/privacy/index.html`
  - `python3 -m html.parser en/apps/detective-recorder/legal/terms/index.html`
  - `rg -n "iCloud|CloudKit|동기화|sync|language" ko/apps/detective-recorder/legal en/apps/detective-recorder/legal`
  - `curl -I http://127.0.0.1:8123/ko/apps/detective-recorder/legal/privacy/`
  - `curl -I http://127.0.0.1:8123/ko/apps/detective-recorder/legal/terms/`
  - `curl -I http://127.0.0.1:8123/en/apps/detective-recorder/legal/privacy/`
  - `curl -I http://127.0.0.1:8123/en/apps/detective-recorder/legal/terms/`
- 결과:
  - PASS: 네 법률 페이지 모두 HTML parser 통과
  - PASS: 공개 법률 본문에 iCloud/CloudKit/sync/동기화/language stale term 없음
  - PASS: 네 로컬 URL 모두 200 OK

## Handoff / Next
- 배포 후 라이브 URL에서 Korean privacy, Korean terms, English privacy, English terms의 필수 문구를 body fetch로 확인해야 한다.
- App Store Connect 저장은 확정된 `+82` 형식의 리뷰 연락처 전화번호가 있어야 완료할 수 있다.

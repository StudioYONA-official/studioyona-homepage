# Worklog: Detective Recorder legal pages sync

Date: 2026-05-24
Status: done
Related Files:
- `ko/apps/detective-recorder/legal/privacy/index.html`
- `ko/apps/detective-recorder/legal/terms/index.html`
- `en/apps/detective-recorder/legal/privacy/index.html`
- `en/apps/detective-recorder/legal/terms/index.html`
- `docs/CHANGELOG.md`
- Source: `/Users/Captain/Projects/VibeCoding/RecorderFix-codex-2026-04-23-dev-prep/docs/legal/PRIVACY_POLICY_KO.md`
- Source: `/Users/Captain/Projects/VibeCoding/RecorderFix-codex-2026-04-23-dev-prep/docs/legal/TERMS_OF_SERVICE_KO.md`

## Goal
- 사용자가 제공한 2026년 5월 24일 Detective Recorder 한국어 개인정보처리방침과 이용약관을 홈페이지 법률 페이지에 반영한다.
- 한글 페이지는 제공 원문 기준으로 교체하고, 영문 페이지는 같은 구조의 번역본으로 맞춘다.

## Scope
- 포함 범위: 탐정의 녹음기 한글·영문 개인정보처리방침/이용약관 본문 교체, Apple 인앱결제·구독·iCloud 동기화·국외이전 문구 반영.
- 제외 범위: 원본 RecorderFix 문서 수정, 법률 자문 확정, 실제 앱 기능 검증.

## Filled Facts
- 운영자 및 사업자명: 스튜디오 요나 / Studio YONA
- 대표자 및 개인정보 보호책임자: 이나영 / Nayoung Lee
- 사업자등록번호: `392-20-02356`
- 연락처 및 권리행사 창구: `studioyona.official@gmail.com`
- 사업장 주소: 서울특별시 영등포구 대방천로12길 1, 4층 419호 / `#419, 4F, 1, Daebangcheon-ro 12-gil, Yeongdeungpo-gu, Seoul, Republic of Korea`
- 시행일: 2026년 5월 24일 / May 24, 2026

## Verification
- 실행한 검증:
  - `python3 -m html.parser ko/apps/detective-recorder/legal/privacy/index.html`
  - `python3 -m html.parser ko/apps/detective-recorder/legal/terms/index.html`
  - `python3 -m html.parser en/apps/detective-recorder/legal/privacy/index.html`
  - `python3 -m html.parser en/apps/detective-recorder/legal/terms/index.html`
  - `rg -n "TODO|TBD|PLACEHOLDER|확정 후 반영|출시 전 확정|2026년 5월 22일|May 22, 2026" ko/apps/detective-recorder/legal en/apps/detective-recorder/legal`
  - `curl -I http://127.0.0.1:8123/ko/apps/detective-recorder/legal/privacy/`
  - `curl -I http://127.0.0.1:8123/ko/apps/detective-recorder/legal/terms/`
- 결과:
  - PASS: 네 법률 페이지 모두 HTML parser 통과
  - PASS: TODO/TBD/PLACEHOLDER 및 이전 시행일 문구가 남아 있지 않음
  - PASS: 로컬 한국어 개인정보처리방침/이용약관 URL 200 OK

## Handoff / Next
- 이 문서는 법률 검토를 대체하지 않는다. 실제 공개/스토어 제출 전에는 앱 기능, 결제 구성, iCloud 동기화, 위치 저장 기능, 진단 파일 처리 방식과 법률 검토를 다시 맞춰야 한다.

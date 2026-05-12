# Worklog: EDSN Frame Privacy Update Notice

Date: 2026-05-12
Status: done
Related Files:
- `index.html`
- `assets/site.css`
- `assets/site.js`
- `ko/apps/edsn-frame/legal/privacy/index.html`
- `en/apps/edsn-frame/legal/privacy/index.html`
- `ko/apps/edsn-frame/legal/privacy/update-2026-05-12/index.html`
- `en/apps/edsn-frame/legal/privacy/update-2026-05-12/index.html`
- `docs/CHANGELOG.md`

## Goal
- EDSN Frame 개인정보처리방침 2026.05.12. 변경 내용을 고객이 쉽게 확인할 수 있도록 공지 배너, 개정 안내 페이지, 방침 내 링크를 추가한다.
- 완료 조건: 홈에서 30일 공지 배너가 보이고, 한글/영문 개정 안내 페이지와 방침 내 링크가 정상 연결된다.

## Scope
- 포함: 홈 공지 배너, 배너 닫기/30일 노출 로직, 한글/영문 개정 안내 페이지, 한글/영문 방침 내 개정 안내 링크, 문서 기록.
- 제외: 개인정보처리방침 본문 고지 내용 자체 재수정, 이용약관 변경.

## Plan
1. 홈 배너 추가 -> verify: 홈에서 한글/영문 문구와 링크 확인
2. 개정 안내 페이지 추가 -> verify: 한글/영문 URL 200 및 핵심 문구 확인
3. 방침 내 개정 안내 링크 추가 -> verify: 한글/영문 방침에서 링크 확인
4. 문서 기록 갱신 -> verify: CHANGELOG/worklog 확인
5. HTML/로컬 미리보기 검증 -> verify: parser/curl/browser 확인

## Findings
- 기존 사이트는 정적 HTML/CSS/JS 구조이며, 홈은 `?lang=en` 토글을 사용한다.
- 앱 법률 페이지는 한글/영문 개별 경로를 사용한다.
- 홈 배너는 2026.05.12. 변경 시행일 기준 30일 동안 노출되도록 2026.06.11.까지 표시한다.

## Decisions
- 결정: 팝업 모달 대신 닫을 수 있는 하단 공지 배너를 사용한다.
  이유: 개인정보 변경 고지 접근성을 확보하면서도 홈 진입을 과하게 막지 않기 위해서다.
- 결정: 개정 안내 페이지는 한글/영문 각각 별도 경로로 둔다.
  이유: 앱 법률 페이지의 기존 언어별 URL 구조와 맞추기 위해서다.

## Changes
- `index.html`
  - EDSN Frame 개인정보처리방침 개정 안내 홈 배너를 추가했다.
  - 배너는 `data-notice-end="2026-06-11"` 기준으로 2026.05.12.부터 30일 동안 노출되도록 설정했다.
  - 한글/영문 문구와 각 언어별 개정 안내 링크를 연결했다.
- `assets/site.js`
  - 공지 배너 만료일 처리, 닫기 버튼, 닫힘 상태 localStorage 저장 로직을 추가했다.
  - localStorage 접근 실패 시에도 페이지가 깨지지 않도록 예외 처리를 추가했다.
- `assets/site.css`
  - 하단 고정 공지 배너, 링크, 닫기 버튼, 모바일 레이아웃 스타일을 추가했다.
- `ko/apps/edsn-frame/legal/privacy/update-2026-05-12/index.html`
  - 한글 개정 안내 페이지를 추가했다.
- `en/apps/edsn-frame/legal/privacy/update-2026-05-12/index.html`
  - 영문 개정 안내 페이지를 추가했다.
- `ko/apps/edsn-frame/legal/privacy/index.html`
  - 14항에 2026.05.12. 개정 안내 페이지 이동 버튼을 추가했다.
- `en/apps/edsn-frame/legal/privacy/index.html`
  - 14항에 May 12, 2026 개정 안내 페이지 이동 버튼을 추가했다.
- `ko/apps/edsn-frame/legal/privacy/update-2026-05-12/index.html`
  - 주요 변경 내용 목록의 반복 표현을 줄였다.
- `en/apps/edsn-frame/legal/privacy/update-2026-05-12/index.html`
  - 주요 변경 내용 목록의 반복 표현을 줄였다.
- `docs/CHANGELOG.md`
  - Unreleased에 이번 변경을 기록했다.

## Verification
- 실행한 검증:
  - `python3 -m html.parser index.html`
  - `python3 -m html.parser ko/apps/edsn-frame/legal/privacy/index.html`
  - `python3 -m html.parser en/apps/edsn-frame/legal/privacy/index.html`
  - `python3 -m html.parser ko/apps/edsn-frame/legal/privacy/update-2026-05-12/index.html`
  - `python3 -m html.parser en/apps/edsn-frame/legal/privacy/update-2026-05-12/index.html`
  - `rg -n "policy-notice|2026\\.05\\.12|2026-06-11|update-2026-05-12|백업 및 복구|backup and recovery" ...`
  - `git diff --check`
  - `curl -I http://127.0.0.1:8124/`
  - `curl -I http://127.0.0.1:8124/ko/apps/edsn-frame/legal/privacy/update-2026-05-12/`
  - `curl -I http://127.0.0.1:8124/en/apps/edsn-frame/legal/privacy/update-2026-05-12/`
  - Safari 로컬 미리보기에서 홈 배너 한글/영문 표시 및 한글 개정 안내 페이지 렌더링 확인
- 결과:
  - PASS

## Handoff / Next
- 현재 변경은 로컬 worktree에만 반영되어 있다.
- 배포 전 원하면 홈 배너 문구의 톤만 더 짧게 다듬을 수 있다.

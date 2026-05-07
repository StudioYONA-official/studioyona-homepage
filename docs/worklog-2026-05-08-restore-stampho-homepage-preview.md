# Worklog: Restore Stampho Homepage Preview

Date: 2026-05-08
Status: done
Related Files:
- `index.html`
- `apps/index.html`
- `docs/CHANGELOG.md`

## Goal
- 이전에 출시 전 숨김 처리했던 `Stampho` 소개 내용을 홈과 앱 목록에 다시 반영한다.
- 운영 반영 전 로컬 미리보기에서 먼저 확인할 수 있게 한다.

## Scope
- 포함 범위:
  - 홈 앱 섹션의 한국어/영어 `Stampho` 패널 복원.
  - `/apps/` 앱 목록의 한국어/영어 `Stampho` 히어로 문구와 카드 복원.
  - `탐정의 녹음기`를 Stampho 이후 준비 앱으로 표시.
- 제외 범위:
  - Stampho 상세/법률 페이지의 `noindex, nofollow` 출시 전 보호 메타 태그 변경.

## Plan
1. 예전 Stampho 노출 커밋의 홈/앱 목록 내용을 확인한다 -> verify: `git show 19e48a0`
2. 현재 EDSN 출시 상태 문구를 유지한 채 Stampho 블록을 복원한다 -> verify: diff 확인
3. 로컬 서버에서 홈과 앱 목록을 확인한다 -> verify: 브라우저 스냅샷에서 `Stampho` 표시 확인

## Findings
- 현재 HEAD에서는 Stampho 상세/법률 페이지는 남아 있고, 홈/앱 목록 노출만 제거된 상태였다.
- EDSN Frame은 이후 `출시 중/Now on iOS` 문구로 변경되어 있어, 예전 커밋을 그대로 되돌리면 현재 문구가 퇴행할 수 있었다.

## Decisions
- 결정: 예전 커밋을 통째로 되돌리지 않고 홈/앱 목록의 Stampho 노출 부분만 수동 복원한다.
  이유: EDSN 출시 상태 문구와 기존 출시 전 보호 메타 태그를 유지하기 위해서다.

## Changes
- `index.html` 홈 앱 섹션에 Stampho 한국어/영어 패널을 다시 추가했다.
- `apps/index.html` 앱 목록 히어로와 카드 목록에 Stampho 한국어/영어 내용을 다시 추가했다.
- `docs/CHANGELOG.md`에 변경 이력을 추가했다.

## Verification
- 실행한 검증:
  - `curl -I http://127.0.0.1:8123/`
  - `rg -n "Stampho|stampho|Second release|Planned after Stampho|STAMP" index.html apps/index.html`
  - Playwright: `http://127.0.0.1:8123/#apps` 홈 앱 섹션 스냅샷에서 `Stampho` 패널 확인
  - Playwright: `http://127.0.0.1:8123/apps/` 앱 목록 스냅샷에서 `Stampho` 히어로/카드 확인
- 결과:
  - PASS: 로컬 미리보기 서버 응답 정상.
  - PASS: 홈 앱 섹션에서 Stampho가 EDSN Frame 다음에 표시됨.
  - PASS: `/apps/` 목록에서 Stampho 히어로 버튼과 카드가 표시됨.
  - PASS: `탐정의 녹음기`는 Stampho 이후 준비 앱으로 표시됨.
- 미실행 항목:
  - 없음.

## Handoff / Next
- 로컬에서 홈과 `/apps/`를 확인했고, 사용자 요청에 따라 커밋 및 원격 push까지 진행한다.

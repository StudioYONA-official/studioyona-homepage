# Worklog: Home App Card Format Unification

Date: 2026-06-24
Status: done
Related Files:
- `index.html`
- `docs/CHANGELOG.md`

## Goal

- 홈 화면 앱 소개 카드를 EDSN Frame 카드와 같은 포맷으로 통일한다.

## Scope

- 포함 범위: 홈 앱 카드의 제목, 본문, bullet, action, icon 마크업 구조.
- 제외 범위: 앱 상세 페이지 본문, 앱별 법률 문서.

## Plan

1. 현재 앱 카드 구조 차이 확인 -> verify: `app-badge`, 압축 마크업, title 구조 검색
2. EDSN Frame 기준으로 카드 구조 통일 -> verify: HTML parser 및 브라우저 DOM 검사
3. 문서 기록 갱신 -> verify: staged diff check

## Findings

- EDSN Frame 카드는 `section-kicker`, `app-title`, `app-text`, `app-points`, `app-actions`, `app-visual` 순서로 정리되어 있었다.
- 까꿍캠과 Veruma 카드에는 별도 `app-badge`가 있었고, Veruma 카드 일부는 한 줄 압축 마크업으로 작성되어 있었다.
- 사용자가 제공한 Veruma App Store URL은 `https://apps.apple.com/kr/app/veruma/id6781758851`이다.

## Decisions

- 결정: 모든 홈 앱 카드는 EDSN Frame과 같은 구조 순서를 사용한다.
  이유: 카드별 정보 밀도와 시각 리듬을 맞추기 위해서다.
- 결정: Veruma 홈 카드에 사용자가 제공한 App Store 링크를 추가한다.
  이유: 카드별 action 구조를 EDSN Frame과 같은 포맷으로 맞추기 위해서다.

## Changes

- `index.html`: 탐정의 녹음기, 까꿍캠, Veruma 카드의 제목 구조, 버튼 구조, bullet 수, 마크업 줄바꿈을 EDSN Frame 기준에 맞췄다.
- `index.html`: 까꿍캠과 Veruma의 별도 `app-badge`를 제거했다.
- `index.html`: Veruma 한국어·영어 홈 카드에 App Store 링크를 추가했다.
- `docs/CHANGELOG.md`: 변경 이력을 추가했다.

## Verification

- 실행한 검증:
  - `python3 -m html.parser index.html`
  - `git diff --check`
  - `curl -I http://127.0.0.1:8123/`
  - In-app browser DOM card format check
- 결과:
  - PASS
- 미실행 항목:
  - 배포는 별도 요청 시 수행한다.

## Handoff / Next

- 홈 앱 카드는 모두 `app-title-main`, badge 없음, bullet 2개, icon 포함 구조로 통일되어 있다.
- Veruma 홈 카드도 EDSN Frame과 같은 action 개수와 순서를 사용한다.

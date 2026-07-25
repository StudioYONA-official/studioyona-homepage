# Worklog: EDSN Frame Usage Guide

Date: 2026-07-03
Status: done
Related Files:
- `index.html`
- `ko/apps/edsn-frame/index.html`
- `en/apps/edsn-frame/index.html`
- `assets/site.css`
- `docs/site-copy-ko-edit.md`
- `docs/CHANGELOG.md`

## Goal

- 홈페이지의 EDSN Frame 흐름에서 사용자가 왼쪽 질문 목록으로 원하는 답변에 바로 이동할 수 있는 FAQ형 이용 가이드를 제공하고, 앱 개요, 프레임, 행사 모드, QR 전달, 출력, 구독, 포인트까지 초보자도 이해할 수 있게 정리한다.

## Scope

- 포함 범위: EDSN Frame 한글·영문 상세 페이지의 왼쪽 질문형 가이드, 홈 EDSN Frame 카드의 가이드 링크, 앱 개요/프레임/필터/행사 모드/QR 전달/출력/구독/필름/포인트 FAQ 안내, 관련 CSS와 문서 기록.
- 제외 범위: 법무 문서 본문, 앱 기능 설명의 사실 범위를 벗어나는 신규 기능 고지, 배포.

## Plan

1. 현재 EDSN Frame 상세 페이지와 홈 카드 구조를 확인한다. -> verify: 대상 HTML 위치 확인
2. 왼쪽 질문 목록과 오른쪽 답변 본문으로 구성된 FAQ 섹션을 15개 질문으로 재구성한다. -> verify: HTML parser와 앵커 링크 검색
3. 한국어 원본 문서, 영어 대응 문구, 변경 기록을 갱신한다. -> verify: `git diff --check`

## Decisions

- 결정: JS 탭 대신 같은 페이지 앵커 링크가 있는 왼쪽 챕터 내비게이션을 사용한다.
  이유: 키보드, 터치, 직접 링크 공유, JS 비활성 상태에서 모두 안정적으로 동작하기 때문이다.
- 결정: 홈 카드에는 가이드 전체를 넣지 않고 상세 페이지 `#guide`로 연결한다.
  이유: 홈 카드의 정보 밀도를 유지하면서도 원하는 사용자는 바로 가이드로 이동할 수 있게 하기 위해서다.
- 결정: 가이드 본문은 사용자가 실제로 물어볼 질문을 기준으로 재배열한다.
  이유: 단계형 설명보다 프레임, 행사 모드, QR 권한, 구독, 포인트처럼 궁금한 주제에 바로 접근하기 쉽기 때문이다.

## Changes

- `ko/apps/edsn-frame/index.html`: 기존 단계형 가이드를 15개 질문과 답변으로 재구성하고, 앱 개요/프레임/필터/행사 모드/QR 전달/출력/구독권/필름/포인트/비밀 업적/제작 문의를 답변 순서에 맞게 배치했다.
- `en/apps/edsn-frame/index.html`: 한국어 FAQ와 같은 정보 구조로 영어 답변을 대응 번역했다.
- `ko/apps/edsn-frame/index.html`: 행사 모드 답변에 촬영용 기기, 충전기, 보조 배터리, 거치대, 네트워크, 프린터, 사전 테스트 준비물을 유지했다.
- `index.html`: EDSN Frame 홈 카드에 이용 가이드 링크를 추가했다.
- `assets/site.css`: 가이드 챕터 내비게이션, 단계 본문 카드, 순서형 목록, `:target` 하이라이트, 모바일 가로 스크롤 스타일을 추가했다.
- `docs/site-copy-ko-edit.md`: EDSN Frame FAQ 한국어 문구를 편집 원본에 추가했다.
- `docs/CHANGELOG.md`: 변경 이력을 기록했다.

## Verification

- 실행한 검증:
  - `python3 -m html.parser` for changed HTML files
  - `git diff --check`
  - local HTTP check
- 결과:
  - PASS

## Handoff / Next

- EDSN Frame FAQ는 `#guide`, `#guide-about`, `#guide-capture-frames`, `#guide-frame-designs`, `#guide-filters`, `#guide-events`, `#guide-event-settings`, `#guide-send-photos`, `#guide-qr-entitlement`, `#guide-print`, `#guide-custom-frame`, `#guide-subscriptions`, `#guide-film`, `#guide-points`, `#guide-earn-points`, `#guide-secret-achievement` 앵커로 바로 이동할 수 있다.
- 배포는 별도 요청 시 `main` 푸시로 GitHub Pages에 반영한다.

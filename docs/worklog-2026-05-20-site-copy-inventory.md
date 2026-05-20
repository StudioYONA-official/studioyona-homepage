# Worklog: Site copy inventory

Date: 2026-05-20
Status: done
Related Files:
- `docs/site-copy.md`
- `docs/DOCS_RULES.md`
- `docs/CHANGELOG.md`

## Goal
- 홈페이지와 주요 소개 페이지에 들어가는 텍스트를 사용자가 직접 수정할 수 있는 문서로 정리한다.
- 완료 조건: 홈/공통 레이아웃/일반 페이지/앱 상세 페이지의 한국어·영어 주요 화면 문구가 한 문서에 정리되고, 이후 HTML 반영 기준으로 사용할 수 있다.

## Scope
- 포함 범위: 홈, 공통 내비게이션/푸터, 회사 소개, 앱 소개, 고객지원, 문의하기, EDSN Frame/Stampho/탐정의 녹음기 상세 페이지의 주요 표시 문구.
- 제외 범위: 법률 페이지 전문 본문 전체 정리와 HTML 문구 반영.

## Plan
1. 주요 HTML 페이지의 화면 문구를 확인한다. -> verify: 홈/일반/앱 상세 HTML에서 노출 문구 확인
2. 수정용 카피 문서를 만든다. -> verify: `docs/site-copy.md` 생성 및 섹션 구성 확인
3. 문서 운영 규칙과 변경 기록을 갱신한다. -> verify: `DOCS_RULES`, `CHANGELOG` 확인
4. 변경 파일을 검증하고 스테이징한다. -> verify: `git diff --check`, `git status`

## Findings
- 홈은 한국어/영어가 한 파일의 `data-lang-block`으로 함께 관리된다.
- 일반 페이지도 한국어 우선 루트 페이지에서 `?lang=en` 토글로 영문 문구를 같이 보유한다.
- 앱 상세 페이지는 한국어/영어가 별도 경로로 분리되어 있다.
- 법률 페이지 전문까지 같은 문서에 넣으면 수정용 문서가 과도하게 커지므로 별도 법률 카피 문서로 분리하는 편이 낫다.

## Decisions
- 결정: `docs/site-copy.md`를 주요 화면 문구의 편집 원본으로 추가한다.
  이유: 사용자가 문구를 직접 수정한 뒤 같은 문서 기준으로 HTML에 재반영하기 쉽기 때문이다.
- 결정: 법률 전문 본문은 이번 문서에 포함하지 않는다.
  이유: 법률 문구는 길고 변경 리스크가 높아 별도 문서와 검증 흐름으로 다루는 편이 안전하기 때문이다.

## Changes
- `docs/site-copy.md`를 추가해 홈/공통 레이아웃/일반 페이지/앱 상세 페이지의 한국어·영어 문구를 정리했다.
- `docs/DOCS_RULES.md`에 Site Copy 문서 역할과 선독 기준을 추가했다.
- `docs/CHANGELOG.md`에 카피 인벤토리 추가 이력을 기록했다.
- 사용자가 `docs/site-copy.md`에서 수정한 홈 한국어 문구를 `index.html`에 반영하고, 대응되는 영어 홈 문구를 같은 의미로 조정했다.

## Verification
- 실행한 검증:
  - `rg --files -g '*.html'`
  - `sed -n`으로 홈/일반 페이지/앱 상세 HTML 문구 확인
  - `git diff --check`
  - `git status --short --branch`
  - Browser-computed text checks for updated home copy
- 결과:
  - PASS: `docs/site-copy.md` 생성 확인
  - PASS: 주요 표시 문구가 페이지별/언어별로 정리됨
  - PASS: 문서 운영 규칙과 changelog 갱신 확인
  - PASS: 홈 한국어/영어 주요 문구 반영 확인

## Handoff / Next
- 사용자가 `docs/site-copy.md`를 수정한 뒤 "이걸로 다시 넣어줘"라고 요청하면, 해당 문서를 기준으로 HTML에 문구를 반영한다.
- 법률 전문 문구까지 편집하고 싶다면 `docs/legal-copy.md`를 별도로 생성하는 것이 적합하다.

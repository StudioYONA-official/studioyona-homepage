# Worklog: Design baseline docs

Date: 2026-05-20
Status: done
Related Files:
- `docs/design.md`
- `docs/skill.md`
- `docs/DOCS_RULES.md`
- `docs/CHANGELOG.md`

## Goal
- 사용자가 제공한 홈페이지 디자인 기준과 관련 skill 내용을 실제 문서 파일로 저장한다.
- 완료 조건: 향후 홈페이지 디자인 수정 시 기준 문서로 참조할 수 있게 문서 운영 규칙에 반영한다.

## Scope
- 포함 범위: `docs/design.md`, `docs/skill.md` 생성, 문서 운영 기준과 변경 기록 갱신.
- 제외 범위: 현재 홈페이지 UI/CSS/HTML 변경, 외부 레퍼런스 사이트 검증.

## Plan
1. 기존 디자인 기준 문서 존재 여부를 확인한다. -> verify: `docs/design.md`와 `docs/skill.md` 중복 여부 확인
2. 사용자가 제공한 원문을 문서 파일로 추가한다. -> verify: 파일 생성 및 주요 제목 검색
3. 향후 디자인 작업 기준으로 문서 운영 규칙에 반영한다. -> verify: `DOCS_RULES`에 Design Baseline 섹션 확인

## Findings
- 기존 `docs/design.md` 또는 `docs/skill.md`는 없었다.
- 제공된 design 문서에는 "Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context." 메모가 포함되어 있다.
- 이번 요청은 문서화와 향후 기준 지정이므로 실제 외부 URL 또는 현재 UI 변경은 수행하지 않았다.

## Decisions
- 결정: 파일명은 사용자가 지정한 의미를 그대로 따라 `docs/design.md`와 `docs/skill.md`로 둔다.
  이유: 향후 디자인 수정 전 기준 문서로 찾기 쉽고, 기존 문서 체계의 `docs/` 하위 운영 방식과 맞는다.
- 결정: `docs/DOCS_RULES.md`에 Design Baseline 역할을 추가한다.
  이유: 다음 세션에서도 디자인 수정 전 기준 문서를 먼저 읽도록 문서 운영 규칙에 고정하기 위해서다.

## Changes
- `docs/design.md`: 사용자가 제공한 design.md 내용을 추가했다.
- `docs/skill.md`: 사용자가 제공한 skill.md 내용을 추가했다.
- `docs/DOCS_RULES.md`: 디자인 수정 전 두 문서를 기준으로 확인하는 Design Baseline 섹션을 추가했다.
- `docs/CHANGELOG.md`: 변경 이력을 Unreleased에 추가했다.

## Verification
- 실행한 검증:
  - `rg --files docs | rg '/(design|skill)\\.md$'`
  - `rg -n "Design Baseline|docs/design.md|docs/skill.md" docs/DOCS_RULES.md`
  - `rg -n "PARADE Development|TYPEUI_SH_MANAGED_START" docs/design.md docs/skill.md`
- 결과:
  - PASS: `docs/design.md`, `docs/skill.md` 생성 확인
  - PASS: `DOCS_RULES`의 Design Baseline 섹션과 디자인 수정 전 선독 규칙 확인
  - PASS: 제공 원문의 핵심 제목과 managed marker 확인
- 미실행 항목:
  - 없음

## Handoff / Next
- 다음 홈페이지 디자인 수정 작업부터 `docs/design.md`와 `docs/skill.md`를 먼저 기준으로 삼는다.
- 브랜드 컨텍스트가 `PARADE Development`로 되어 있으므로, Studio YONA 브랜드와의 관계를 확정해야 할 경우 별도 확인 후 문서를 보정한다.

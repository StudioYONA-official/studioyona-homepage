# Worklog: Site Copy Korean Editing Source

Date: 2026-06-24
Status: done
Related Files:
- `docs/site-copy-ko-edit.md`
- `index.html`
- `about/index.html`
- `apps/index.html`
- `support/index.html`
- `contact/index.html`
- `ko/apps/*/index.html`
- `en/apps/*/index.html`
- `ko/apps/*/support/index.html`
- `en/apps/*/support/index.html`
- `docs/CHANGELOG.md`

## Goal

- 법무 문서를 제외한 홈페이지 공개 텍스트를 사용자가 직접 수정할 수 있는 한국어 기준 문서로 정리한다.

## Scope

- 포함 범위: 홈, 회사 소개, 앱 소개, 고객지원, 문의하기, 앱 상세, 앱별 지원, 리다이렉트, 404 페이지의 공개 한국어 문구.
- 제외 범위: 개인정보처리방침과 이용약관 본문.

## Plan

1. 공개 HTML 파일과 기존 site copy 문서를 확인한다. -> verify: 법률 경로 제외 대상 목록 확인
2. 현재 HTML 기준으로 한국어 문구를 편집용 문서로 정리한다. -> verify: 주요 페이지/앱 상세/지원/404 포함 여부 확인
3. 변경 이력을 기록하고 문서 검증을 수행한다. -> verify: markdown lint 성격의 diff check

## Changes

- `docs/site-copy-ko-edit.md`: 법무 문서를 제외한 공개 홈페이지 문구를 한국어 기준으로 정리했다.
- 사용자가 수정한 한국어 문구를 홈, 회사 소개, 앱 소개, 고객지원, 문의 페이지에 반영했다.
- 한국어 수정 의도에 맞춰 영어 문구도 대응 번역해 반영했다.
- 법무 문서 본문은 수정하지 않았다.
- `docs/CHANGELOG.md`: 편집용 문서 추가 이력을 기록했다.

## Verification

- 실행한 검증:
  - 공개 HTML 파일 목록 확인
  - HTML visible text 추출 대조
  - `git diff --check`
- 결과:
  - PASS

## Handoff / Next

- 사용자가 `docs/site-copy-ko-edit.md`를 수정해 전달하면, 해당 한국어 문구를 HTML에 반영하고 영어 문구도 대응 번역해 반영한다.

# Worklog - 2026-05-12 - EDSN Frame Privacy Backup Update

## Goal

- EDSN Frame에도 NARANGYO-4-CUTS와 동일한 GitHub Actions 기반 Supabase 백업 운영이 적용된다는 사용자 확인을 반영해 개인정보처리방침을 갱신한다.

## Scope

- 한글/영문 EDSN Frame 개인정보처리방침
- CHANGELOG 기록

## Plan

1. 한글 방침에 백업 처리 목적/항목, 보유기간, 위탁, 국외 이전, 파기, 안전조치 반영 -> verify: 조항 구조 유지
2. 영문 방침에 동일 의미 반영 -> verify: 한글/영문 항목 대응
3. 기존 시행일 2026.05.02. 유지 -> verify: 마지막 섹션 확인
4. CHANGELOG 갱신 -> verify: Unreleased에 변경 이력 추가

## Facts Checked

- 참고 파일: `/Users/Captain/Downloads/narangyo4-backup-legal-update-brief.md`
- 백업 운영 사실:
  - GitHub Actions가 Supabase Postgres DB schema/data dump를 생성한다.
  - 백업 artifact는 GitHub Actions artifact에 저장된다.
  - artifact 보존 기간은 14일이다.
  - GitHub production Environment secret을 사용한다.
- 사용자가 EDSN Frame에도 동일 운영이라고 확인했다.

## Changes

- `ko/apps/edsn-frame/legal/privacy/index.html`
  - 처리 항목/목적 표에 서비스 안정성, 장애 대응, 데이터 백업/복구 목적의 Supabase DB 백업본 항목을 추가했다.
  - 보유기간 표에 백업 artifact 최대 14일 보관 후 만료/삭제 항목을 추가했다.
  - 파기 조항에 백업 artifact 보존기간 만료 처리 문구를 추가했다.
  - 처리위탁 표에 GitHub, Inc.를 추가했다.
  - 국외 이전 표에 GitHub, Inc. 백업 artifact 관련 항목을 추가했다.
  - 안전성 확보 조치에 GitHub production Environment secret, artifact 접근권한/보존기간 제한을 추가했다.
  - 기존 시행일 `2026.05.02.`를 유지했다.
- `en/apps/edsn-frame/legal/privacy/index.html`
  - 한글 문서와 같은 의미의 영문 조항을 반영했다.
  - 기존 Effective date `2026.05.02.`를 유지했다.
- `docs/CHANGELOG.md`
  - Unreleased 항목에 이번 변경을 기록했다.

## Verification

- `rg -n "GitHub, Inc\.|백업 artifact|backup artifact|2026\.05\.02|production Environment" ko/apps/edsn-frame/legal/privacy/index.html en/apps/edsn-frame/legal/privacy/index.html docs/CHANGELOG.md docs/worklog-2026-05-12-edsn-frame-privacy-backup-update.md`
- `python3 -m html.parser ko/apps/edsn-frame/legal/privacy/index.html`
- `python3 -m html.parser en/apps/edsn-frame/legal/privacy/index.html`

## Handoff / Next

- 공개 반영 전 법률 검토가 필요하면 GitHub 위탁/국외이전 국가·거부권 문구를 최종 확인한다.

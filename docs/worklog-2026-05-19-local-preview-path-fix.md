# Worklog: Local preview path fix

Date: 2026-05-19
Status: done
Related Files:
- `scripts/local-preview.command`
- `scripts/local-preview-safari-fresh.command`
- `docs/CHANGELOG.md`

## Goal
- 현재 체크아웃 경로에서 로컬 미리보기 서버를 정상 실행한다.
- 완료 조건: 미리보기 스크립트가 이전 폴더명에 의존하지 않고 현재 저장소 루트를 서빙한다.

## Scope
- 포함 범위: 로컬 미리보기 런처의 프로젝트 경로 계산 수정, 변경 기록.
- 제외 범위: 사이트 화면/콘텐츠 수정, 배포 설정 변경.

## Plan
1. 기존 실행 방식 확인 -> verify: README와 scripts 확인
2. 고정 프로젝트 경로 제거 -> verify: 스크립트 diff 확인
3. 로컬 서버 실행 및 첫 화면 확인 -> verify: HTTP 응답과 브라우저 로드 확인

## Findings
- README의 로컬 미리보기 명령은 `zsh scripts/local-preview.command`다.
- 두 미리보기 런처가 이전 경로인 `/Users/Captain/Projects/VibeCoding/Studio YONA HomePage`를 고정값으로 사용하고 있었다.

## Decisions
- 결정: 스크립트 위치 기준으로 저장소 루트를 계산한다.
  이유: 현재 `Homepage` 체크아웃뿐 아니라 폴더명이 달라진 복제본에서도 같은 스크립트를 재사용할 수 있다.

## Changes
- `scripts/local-preview.command`: `PROJECT_DIR`를 스크립트 위치 기준 경로로 변경했다.
- `scripts/local-preview-safari-fresh.command`: 같은 방식으로 `PROJECT_DIR`를 변경했다.
- `docs/CHANGELOG.md`: 로컬 미리보기 경로 수정 내역을 추가했다.

## Verification
- 실행한 검증:
  - `zsh -n scripts/local-preview.command`
  - `zsh -n scripts/local-preview-safari-fresh.command`
  - `/usr/bin/python3 scripts/no_cache_server.py --port 8123 --directory /Users/Captain/Projects/VibeCoding/Homepage`
  - `curl -I http://127.0.0.1:8123/`
  - Codex Browser에서 `http://127.0.0.1:8123/?preview=20260519` 로드 확인
- 결과:
  - PASS: HTTP 200, no-cache header, title `Studio YONA | 홈`, H1 `Studio YONA` 확인
- 미실행 항목:
  - 없음

## Handoff / Next
- 로컬 미리보기 런처는 현재 체크아웃 경로 기준으로 동작해야 한다.
- 로컬 서버는 현재 `http://127.0.0.1:8123/`에서 실행 중이다.
- 다음 작업은 열린 로컬 미리보기 화면을 보면서 요청된 UI/문구 수정으로 이어가면 된다.

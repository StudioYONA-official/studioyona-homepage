# Worklog: GitHub Security Workflow

Date: 2026-07-13
Status: done
Related Files:
- `.github/workflows/security.yml`
- `.gitleaksignore`
- `docs/CHANGELOG.md`

## Goal
- 기본 브랜치에서 비밀정보 유출과 pull request 의존성 위험을 자동 점검한다.
- 완료 조건은 workflow 구문과 변경 범위 검증 통과, 관련 파일만 스테이징하는 것이다.

## Scope
- GitHub Actions 보안 workflow와 작업 기록만 포함한다.
- 사이트 코드, 배포 설정, 기존 콘텐츠는 변경하지 않는다.

## Plan
1. 저장소 성격에 맞는 최소 보안 job을 추가한다. -> verify: workflow에 secret scan과 PR dependency review가 존재한다.
2. workflow 구문과 실패 전파 경로를 확인한다. -> verify: YAML 파싱과 정적 self-check가 통과한다.
3. 변경 문서를 갱신하고 관련 파일만 스테이징한다. -> verify: staged scope가 네 파일로 제한된다.

## Reliability Notes
- Plan reasoning_step: 패키지 lockfile이 없는 정적 사이트이므로 설치형 스캐너를 추가하지 않고 비밀정보 탐지와 PR dependency review만 적용한다.
- Plan confidence: 0.94
- Implement reasoning_step: Gitleaks 8.30.1 Linux 바이너리와 공개 SHA-256을 고정하고, checkout 자격증명 저장을 끈 뒤 전체 Git 이력을 검사한다.
- Implement confidence: 0.97
- Verify reasoning_step: 원격 실행 전에는 YAML 파싱, 필수 키 확인, diff 검증으로 구성 오류를 줄인다.
- Verify confidence: 0.88

## Findings
- 원격 기본 브랜치에는 보안 workflow가 없었다.
- 이 저장소에는 직접 스캔할 패키지 lockfile이 없다.
- 로컬 전체 이력 스캔에서 공개 DOM 저장 키 2건과 디자인 토큰 문서 2건이 generic key로 오탐됐다. 값의 용도와 경로를 확인하고 네 개 fingerprint만 좁게 제외했다.

## Decisions
- 결정: push, pull request, 주간 schedule, 수동 실행에서 secret scan을 수행한다.
  이유: 코드 변경과 정기 감사를 함께 덮는 최소 범위다.
- 결정: dependency review는 pull request에서만 수행한다.
  이유: lockfile이 없는 현재 저장소에서도 향후 dependency 변경 유입을 검토할 수 있다.

## Changes
- SHA-256으로 검증한 Gitleaks 8.30.1 바이너리로 전체 Git 이력을 검사하고 redacted 보고서 artifact를 업로드한다.
- scanner 실패는 숨기지 않고 원래 step 실패를 유지하며 보고서 업로드만 `always()`로 실행한다.
- 확인된 공개 UI/디자인 문서 오탐 fingerprint 네 개만 `.gitleaksignore`에 기록했다.
- pull request dependency review를 추가했다.

## Verification
- 실행한 검증:
  - `ruby -e 'require "yaml"; YAML.parse_file(ARGV.fetch(0))' .github/workflows/security.yml`
  - 필수 trigger와 `secret-scan`, `dependency-review` job 정적 확인
  - Gitleaks 8.30.1 Linux archive SHA-256 확인
  - Gitleaks 8.30.1 macOS 바이너리로 61개 commit 전체 이력 스캔
  - `git diff --check`
- 결과:
  - PASS

## Stop Hook
- 예외 삼킴 없음
- 실패 숨김 없음
- 가짜 성공 신호 없음
- silent fail 경로 없음

## Handoff / Next
- 원격 보호는 이 브랜치가 커밋·push·merge된 뒤 활성화된다.
- merge 후 `Security checks` workflow의 최초 수동 실행 결과를 확인한다.

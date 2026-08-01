# DOCS_RULES

이 문서는 이 워크스페이스의 문서 운영 기준이다.

## Document Roles

### Worklog

파일 형식:

```text
docs/worklog-YYYY-MM-DD-<slug>.md
```

용도:

- 목표
- 범위
- 계획
- 사실 확인
- 결정
- 변경 사항
- 검증
- handoff

### Changelog

파일:

```text
docs/CHANGELOG.md
```

용도:

- 실제 변경 이력 누적

### Architecture

파일:

```text
docs/ARCHITECTURE.md
```

용도:

- 구조적 결정
- 장기 운영 원칙

### README

파일:

```text
README.md
```

용도:

- 프로젝트 개요
- 시작 방법
- 자주 쓰는 명령

### Design Baseline

파일:

```text
docs/design.md
docs/skill.md
```

용도:

- 홈페이지 디자인 수정 기준
- 디자인 토큰, 컴포넌트 상태, 접근성 요구사항
- UI 규칙/컴포넌트 명세/디자인 시스템 문서 작성 기준

디자인 수정 작업 전에는 `docs/design.md`와 `docs/skill.md`를 먼저 확인한다.

### Site Copy

파일:

```text
docs/site-copy.md
```

용도:

- 홈페이지와 주요 소개 페이지의 화면 문구 편집 원본
- 홈/일반 페이지/앱 상세 페이지의 한국어·영어 카피 정리
- 사용자가 문구를 수정한 뒤 HTML에 다시 반영하기 위한 기준

화면 문구를 대량 수정할 때는 `docs/site-copy.md`를 먼저 확인한다.

## Worklog Trigger

다음처럼 이후 복원 가치가 있는 작업에만 worklog를 만든다.

- 여러 세션 또는 담당자 사이의 handoff가 필요한 작업
- 제품 계약·구조·운영 정책에 비자명한 결정을 남기는 작업
- 배포·production 작업처럼 검증 근거와 블로커 추적이 중요한 작업
- 사용자가 명시적으로 기록을 요청한 작업

단순 진단, 작은 수정, 일회성 검증, 문구·문서 정리는 기본 worklog 대상이 아니다.

## Update Rules

- 실제 사이트 동작, 배포·운영 계약, 공개 상태가 바뀌면 `docs/CHANGELOG.md`를 갱신한다.
- 구조적 결정이 있으면 `docs/ARCHITECTURE.md`를 갱신한다.
- worklog가 있는 작업의 handoff는 `Handoff / Next` 섹션에 남긴다.

## Subagent Rules

- subagent는 사용자가 요청했거나 적용 가능한 프로젝트 규칙·Skill이 요구하고 독립 작업이 명확할 때만 사용한다.
- 역할이 존재한다는 이유만으로 subagent를 만들지 않으며, 병렬화 이득이 명확한 범위만 분리한다.
- 최종 사용자-facing 결과 정리는 메인 agent만 한국어로 출력한다.

## Optional Docs

아래 문서는 필요할 때만 추가한다.

- `docs/SETUP.md`
  - 설치 절차, 환경 준비, 로컬 실행이 복잡할 때
- `docs/TESTING.md`
  - 테스트 실행법, 검증 기준, 테스트 전략을 분리할 필요가 있을 때
- `docs/DEPLOYMENT.md`
  - 배포 절차, 환경별 차이, 운영 반영 절차가 있을 때

빈 문서를 기본으로 만들지는 않는다.

## Context Routing

- 범위가 작은 작업은 관련 HTML·스크립트·스타일과 필요한 카피·디자인 문서에서 바로 시작한다.
- 기존 작업을 이어받거나 현재 상태가 중요할 때만 최신 관련 `docs/worklog-*.md`를 읽는다.
- 변경 이력이나 구조적 근거가 필요할 때만 `docs/CHANGELOG.md` 또는 `docs/ARCHITECTURE.md`의 관련 부분을 읽는다.

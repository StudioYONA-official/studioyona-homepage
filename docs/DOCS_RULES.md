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

아래 중 하나라도 해당하면 worklog를 만든다.

- 5분 이상 예상 작업
- 코드 읽기/수정 포함
- 파일 2개 이상 수정 가능성
- 조사/비교/설계 판단 포함
- 검증 필요
- 다음 세션으로 이어질 가능성

## Update Rules

- 실제 변경이 있으면 `docs/CHANGELOG.md`를 갱신한다.
- 구조적 결정이 있으면 `docs/ARCHITECTURE.md`를 갱신한다.
- handoff는 worklog의 `Handoff / Next` 섹션에 남긴다.
- 사용자가 명시적으로 제외하지 않는 한, 작업 단위가 끝나면 이번 작업과 직접 관련된 변경만 자동으로 스테이징한다.
- 자동 스테이징 전에는 관련 파일 범위를 다시 확인하고, 관련 없는 변경은 스테이징하지 않는다.

## Subagent Rules

- subagent 선택은 자동 추측에만 맡기지 말고 작업 종류에 맞는 라우팅 기준을 먼저 따른다.
- 기본 라우팅:
  - 코드 리뷰/회귀 위험 점검: `reviewer`
  - 구조 판단/설계 리뷰: `architect-reviewer`
  - 영향 범위 탐색/코드 위치 찾기: `code-mapper`
  - 문서 조사/레퍼런스 확인: `docs-researcher`
  - React UI 구현: `frontend-developer`
  - React 패턴/상태 구조 판단: `react-specialist`
  - 작은 UI 버그 수정: `ui-fixer`
  - Swift/iOS 구현: `swift-expert`
  - 모바일 앱 전반 흐름: `mobile-developer`
  - 서버/API 구현: `backend-developer`
  - API 계약 설계: `api-designer`
  - DB/쿼리/스키마 점검: `database-administrator`
- subagent 동시 운용 개수는 먼저 이 프로젝트의 병렬 운영 기준을 확인한다.
- 별도 기준이 없으면 기본은 `동시 2개`, 조건이 좋은 경우에만 `최대 3개`까지 허용한다.
- `3개`를 넘는 subagent 동시 운용은 금지한다.
- subagent는 다시 subagent를 생성하지 않는다.
- subagent는 내부 작업을 영어로 수행한다.
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

## Reading Order

1. `README.md`
2. `docs/DOCS_RULES.md`
3. latest `docs/worklog-*.md`
4. `docs/CHANGELOG.md`
5. `docs/ARCHITECTURE.md`

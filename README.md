# Studio YONA HomePage

## Overview

- `Studio YONA`의 회사 및 앱 홍보용 홈페이지 프로젝트다.
- 1차 목표는 `앱스토어 심사 대응`에 필요한 필수 웹 페이지를 비용 최소화 방식으로 빠르게 공개하는 것이다.
- 현재는 `EDSN Frame`을 우선 공개하고, `탐정의 녹음기`를 포함한 다앱 구조로 확장하는 것을 전제로 한다.

## Current Status

- 이 저장소는 `초기 세팅`, `MVP 기획`, `원페이지 홈 리디자인`, `정적 사이트 MVP 구현`, `GitHub Pages 배포`까지 완료된 상태다.
- 현재는 한국어 우선 원페이지 홈, 같은 경로 내 영어 토글, `EDSN Frame`과 `탐정의 녹음기` 앱 상세, 앱별 개인정보처리방침/이용약관, 배포 문서가 들어 있다.
- 실제 공개 사이트는 `https://www.studioyona.co.kr` 에서 열리며, 커스텀 도메인과 HTTPS 적용까지 확인되었다.
- 다만 장기 운영 관점에서는 `GitHub Pages public 운영 유지 여부`가 아직 열린 이슈다.

## Project Goals

- GitHub Pages 기반의 저비용 정적 홈페이지 운영
- 한국어/영어 이중 언어 지원
- 회사 소개, 앱 소개, 개인정보처리방침, 이용약관, 고객지원, 문의하기 제공
- 보안 리스크를 최소화하는 단순한 운영 방식 유지

## Planned Delivery

- 한국어 우선 원페이지 홈 + 보조 일반 페이지 구조
- 일반 페이지는 한국어 우선 루트 경로(`/`, `/about/`, `/apps/`, `/support/`, `/contact/`)에서 `?lang=en` 토글로 영어 전환
- 앱 상세/법률 문서는 언어별 경로 유지: `/ko/apps/...`, `/en/apps/...`
- 기존 `/ko/...`, `/en/...` 일반 페이지 경로는 호환용 래퍼로 유지
- App Store 제출을 위한 neutral 법률 URL과 언어별 정책 경로
- 문의 방식: `mailto:` 기반 이메일 연결
- 커스텀 도메인: `www.studioyona.co.kr`

## Useful Commands

```bash
# local preview launcher
zsh scripts/local-preview.command

# manual static preview
python3 -m http.server 8123

# file listing
rg --files
```

## Current Operations

- 배포 기준 URL: `https://www.studioyona.co.kr`
- 로컬 미리보기: Safari 확인은 `zsh scripts/local-preview-safari-fresh.command`, 일반 확인은 `zsh scripts/local-preview.command`
- 배포 방식: 현재는 GitHub 웹 업로드 + GitHub Pages branch publishing으로 운영 중
- 주의:
  - 저장소는 Pages 운영을 위해 현재 `public` 상태다
  - 관리자 기능, 인증, 업로드, 비밀키가 필요한 기능이 추가되기 전에는 배포 방식을 다시 검토해야 한다
  - GitHub Desktop / CLI Git 흐름은 저장소명 오타(`studioyona-hompage`)를 바로잡고 SSH remote를 교정한 뒤 정상화되었다

## Admin Feature Direction

- 현재 추천 기본값은 `GitHub Pages`를 유지하고, 필요 시 `관리자/API만 별도 서버리스`로 분리하는 것이다.
- 이유:
  - 정적 공개 홈페이지는 지금 구조에 잘 맞고 비용이 낮다.
  - 관리자 기능이 생기면 비밀값, 인증, 업로드, 데이터 처리를 브라우저 바깥으로 옮길 수 있다.
- 사이트 전체를 다른 플랫폼으로 옮기는 것은 관리자 기능이 사이트 핵심이 되는 시점에 다시 판단한다.

## Documentation

- [docs/DOCS_RULES.md](docs/DOCS_RULES.md)
- latest `docs/worklog-*.md`
- [docs/CHANGELOG.md](docs/CHANGELOG.md)
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- [docs/STUDIO_YONA_HOMEPAGE_MVP_PLAN_2026-04-05.md](docs/STUDIO_YONA_HOMEPAGE_MVP_PLAN_2026-04-05.md)
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)

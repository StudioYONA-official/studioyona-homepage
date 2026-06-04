# Worklog: Home Release Icons Palette

Date: 2026-06-04
Status: done
Related Files:
- index.html
- assets/site.css
- assets/app-icons/
- ko/apps/detective-recorder/index.html
- en/apps/detective-recorder/index.html
- docs/CHANGELOG.md

## Goal
- 탐정의 녹음기를 홈페이지에서 두 번째 출시 앱으로 전환하고 순서를 위로 올린다.
- 홈 화면 앱 카드의 오른쪽 비주얼을 각 앱 프로젝트의 실제 앱 아이콘으로 작게 배치한다.
- 홈 화면 색상 토큰을 이용약관 페이지 계열의 크림/브라운 팔레트로 다시 맞춘다.

## Scope
- 포함 범위: 홈 앱 카드, 탐정의 녹음기 상세 페이지 출시 상태 문구, 홈 색상 토큰, 실제 앱 아이콘 자산 반영.
- 제외 범위: 각 앱 법률 본문 변경, 배포, 앱 프로젝트 원본 자산 수정.

## Plan
1. 앱별 실제 아이콘 자산 위치 확인 -> verify: 각 프로젝트에서 1024px PNG AppIcon 확인
2. 홈 카드 이미지와 출시 상태 문구 수정 -> verify: HTML parser 및 stale wording search
3. 홈 색상 토큰 조정 및 문서화 -> verify: git diff check와 로컬 HTTP 응답 확인

## Findings
- EDSN Frame 아이콘은 EDSN Android 프로젝트의 iOS reference AppIcon에서 확인했다.
- Stampho, Peekaboo Cam, Detective Recorder는 각 앱 프로젝트의 AppIcon 1024px PNG를 사용했다.
- 탐정의 녹음기는 홈과 한글/영문 상세 페이지에서 출시 상태로 맞춰야 했다.

## Decisions
- 결정: 홈 카드 비주얼은 새 SVG가 아니라 실제 앱 프로젝트에서 가져온 PNG 아이콘을 사용한다.
  이유: 사용자가 앱 프로젝트 자산 사용을 명시했고, 홈 카드의 앱 식별성이 더 정확해진다.
- 결정: 홈 배경/카드/버튼 색상은 법률 페이지 계열의 크림/브라운 토큰으로 맞춘다.
  이유: 이용약관 페이지와 홈 사이의 시각적 단절을 줄이기 위해서다.

## Changes
- `index.html`: 홈 한글/영문 앱 카드 오른쪽 비주얼을 실제 앱 아이콘 PNG로 교체하고, 탐정의 녹음기를 두 번째 출시 앱 순서로 올렸다.
- `index.html`: About 섹션의 오른쪽 아트 영역을 제거하고, 홈 CSS 캐시 버전을 갱신했다.
- `index.html`: 탐정의 녹음기 아이콘 참조를 웹 표시용 512px PNG로 교체하고, 홈 CSS 캐시 버전을 갱신했다.
- `assets/site.css`: 홈 색상 토큰과 앱 아이콘 카드 표시 스타일을 이용약관 페이지 계열의 작은 아이콘 레이아웃으로 조정하고, About 섹션을 1열 레이아웃으로 고정했다. 버튼과 앱 아이콘 레이아웃 배경은 진한 갈색에서 진한 베이지 계열로 조정했다.
- `assets/app-icons/`: 앱별 1024px 아이콘 PNG를 추가했다.
- `ko/apps/detective-recorder/index.html`, `en/apps/detective-recorder/index.html`: 탐정의 녹음기 상세 페이지 출시 상태 문구를 맞췄다.

## Verification
- 실행한 검증:
  - `python3 -m html.parser index.html`
  - `python3 -m html.parser ko/apps/detective-recorder/index.html`
  - `python3 -m html.parser en/apps/detective-recorder/index.html`
  - `file assets/app-icons/*.png`
  - `git diff --check`
- 결과:
  - PASS
- 미실행 항목:
  - 브라우저 시각 검수는 로컬 서버 재확인 후 별도 수행 가능하다.

## Handoff / Next
- 홈 화면은 실제 앱 아이콘 기반의 작은 오른쪽 아이콘 레이아웃으로 변경되어 있다.
- 탐정의 녹음기는 두 번째 출시 앱 문구와 순서로 반영되어 있다.
- About 섹션의 오른쪽 이미지 영역은 제거되어 있으며, 탐정의 녹음기 아이콘은 로컬 브라우저에서 정상 로드가 확인되었다.
- 탐정의 녹음기 웹용 512px 아이콘은 로컬 브라우저에서 `naturalWidth=512`와 표시 폭 89px로 정상 로드가 확인되었다.
- 다음 세션에서는 실제 브라우저에서 카드 이미지 비율과 모바일 줄바꿈을 확인하면 된다.

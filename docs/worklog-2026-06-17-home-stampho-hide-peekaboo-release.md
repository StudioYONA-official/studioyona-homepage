# Worklog: Home Stampho Hide Peekaboo Release

Date: 2026-06-17
Status: done
Related Files:
- index.html
- assets/app-icons/peekaboo-cam.png
- ko/apps/peekaboo-cam/index.html
- en/apps/peekaboo-cam/index.html
- docs/CHANGELOG.md

## Goal
- 홈 화면에서 Stampho 앱 카드를 숨긴다.
- 까꿍캠을 홈과 앱 상세 페이지에서 출시 상태로 전환한다.
- Peekaboo Cam 앱 프로젝트의 최신 AppIcon을 홈 아이콘 자산으로 다시 반영한다.
- 홈 앱 카드에서 각 앱의 App Store 상품 페이지로 이동할 수 있게 한다.

## Scope
- 포함 범위: 홈 앱 목록, 까꿍캠 한글/영문 상세 페이지 상태 문구, 홈 아이콘 자산.
- 제외 범위: Stampho 상세/법률 페이지 삭제, 까꿍캠 법률 문서 본문 변경, 배포.

## Plan
1. 현재 홈 앱 카드 구조와 Peekaboo Cam AppIcon 위치 확인 -> verify: 홈 HTML과 앱 프로젝트 AppIcon 경로 확인
2. Stampho 홈 카드 제거 및 까꿍캠 출시 상태 반영 -> verify: stale wording search와 HTML parser
3. 최신 아이콘 반영 및 로컬 브라우저 확인 -> verify: 로컬 HTTP 200과 브라우저 DOM/image load 확인

## Findings
- 홈에는 한글/영문 Stampho 카드가 각각 노출되어 있었다.
- 까꿍캠은 홈과 상세 페이지 모두 런칭 준비 상태 문구가 남아 있었다.
- 최신 아이콘 소스는 `Peekaboo_cam/apps/ios/PeekabooCam/App/Assets.xcassets/AppIcon.appiconset/Icon-1024.png`에서 확인했다.

## Decisions
- 결정: Stampho는 홈 앱 목록에서만 제거하고 기존 상세/법률 페이지는 유지한다.
  이유: 사용자는 홈페이지 노출 숨김을 요청했으며 기존 공개 URL 삭제는 범위를 넘는다.
- 결정: 까꿍캠 출시 상태는 홈과 한글/영문 상세 페이지에 함께 반영한다.
  이유: 홈에서 출시 상태로 보이는 앱의 상세 페이지가 런칭 준비 상태이면 사용자에게 모순된다.

## Changes
- `index.html`: 한글/영문 Stampho 앱 카드를 제거하고 까꿍캠 상태를 `Now available`/`출시 중`으로 바꿨다.
- `index.html`: EDSN Frame, 탐정의 녹음기, 까꿍캠 홈 카드에 App Store 외부 링크를 추가했다.
- `assets/app-icons/peekaboo-cam.png`: Peekaboo Cam 프로젝트의 최신 1024px AppIcon으로 덮어썼다.
- `ko/apps/peekaboo-cam/index.html`, `en/apps/peekaboo-cam/index.html`: 까꿍캠 출시 상태 문구와 CSS cache version을 갱신했다.
- `docs/CHANGELOG.md`: 변경 이력을 추가했다.

## Verification
- 실행한 검증:
  - `python3 -m html.parser index.html`
  - `python3 -m html.parser ko/apps/peekaboo-cam/index.html`
  - `python3 -m html.parser en/apps/peekaboo-cam/index.html`
  - `git diff --check`
  - `curl -I http://127.0.0.1:8123/`
  - `curl -I http://127.0.0.1:8123/assets/app-icons/peekaboo-cam.png`
  - `curl -I https://apps.apple.com/app/id6762376094`
  - `curl -I https://apps.apple.com/app/id6771743543`
  - `curl -I https://apps.apple.com/app/id6771409573`
  - In-app browser DOM/image load check
- 결과:
  - PASS
- 미실행 항목:
  - 공개 배포 확인은 사용자가 배포를 요청하면 수행한다.

## Handoff / Next
- 홈 앱 목록은 EDSN Frame, 탐정의 녹음기, 까꿍캠 3개 카드로 정리되어 있다.
- 까꿍캠 홈 아이콘은 최신 AppIcon으로 갱신되어 있다.
- 까꿍캠 상세 페이지는 한글/영문 모두 출시 상태 문구로 바뀌어 있다.
- 홈 앱 카드에는 각 앱의 App Store 상품 페이지 링크가 포함되어 있다.

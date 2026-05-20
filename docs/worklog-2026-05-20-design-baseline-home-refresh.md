# Worklog: Design baseline home refresh

Date: 2026-05-20
Status: done
Related Files:
- `assets/site.css`
- `index.html`
- `ko/apps/edsn-frame/legal/privacy/index.html`
- `en/apps/edsn-frame/legal/privacy/index.html`
- `ko/apps/edsn-frame/legal/privacy/update-2026-05-12/index.html`
- `en/apps/edsn-frame/legal/privacy/update-2026-05-12/index.html`
- `docs/design.md`
- `docs/skill.md`
- `docs/CHANGELOG.md`
- External reference: `https://css-cheatsheet-554265770326.asia-northeast3.run.app/`

## Goal
- 새 디자인 기준 문서와 CSS 치트시트 원칙에 맞춰 홈페이지 홈 화면을 토큰 기반 다크 UI로 조정한다.
- 완료 조건: 홈 화면이 기준 문서의 색/타이포/상태/접근성 방향을 따르고, 과한 그림자/그라데이션/hover 이동/스크롤 애니메이션을 줄이며, 데스크톱/모바일에서 가로 오버플로 없이 렌더링된다.

## Scope
- 포함 범위: 홈 전용 CSS 토큰, 홈 헤더/언어 전환/메뉴/버튼/앱 패널/공지 배너/모바일 밀도 조정, CSS 치트시트 원칙 반영, CSS 캐시 버전 갱신.
- 제외 범위: 앱 상세/법률 페이지의 전체 리디자인, 문구 변경, 외부 레퍼런스 사이트 재검증.

## Plan
1. 기준 문서를 확인한다. -> verify: `docs/design.md`, `docs/skill.md` 내용 확인
2. 홈 전용 토큰과 주요 컴포넌트 스타일을 조정한다. -> verify: CSS에서 홈 토큰과 상태 규칙 확인
3. CSS 치트시트 원칙을 확인하고 과한 시각 효과를 줄인다. -> verify: 홈 범위의 shadow/gradient/hover transform/reveal animation 점검
4. 로컬 브라우저에서 데스크톱/모바일을 확인한다. -> verify: 렌더링, 가로 오버플로, 주요 텍스트 확인
5. 변경 기록을 남긴다. -> verify: changelog/worklog 확인

## Findings
- 기준 문서는 검은 surface, `#e2decf` 보조 텍스트, `#c5ad6f` 금색 계열 accent, 작은 타이포 스케일, token-driven component guidance를 요구한다.
- 기존 홈은 크림 배경과 큰 감성 타이포 중심이라 기준 문서와 시각 방향이 달랐다.
- 기준 문서에는 브랜드 컨텍스트 추론 신뢰도가 낮다는 진단이 있으나, 사용자가 홈페이지 디자인 기준으로 확정했다.
- CSS 치트시트는 그림자/그라데이션을 피하고, hover는 색상 변화 중심으로 처리하며, 과한 radius와 애니메이션을 줄이는 방향을 제시한다.

## Decisions
- 결정: 홈 화면부터 다크 토큰 기반으로 전환한다.
  이유: 첫 화면이 전체 브랜드 인상을 가장 크게 결정하고, 앱 상세/법률 페이지까지 한 번에 전면 리디자인하면 검증 범위가 과도하게 커지기 때문이다.
- 결정: 기존 콘텐츠와 정보 구조는 유지한다.
  이유: 이번 요청은 두 디자인 기준에 맞춘 디자인 수정이며 문구/IA 변경 요청은 아니기 때문이다.
- 결정: CSS 캐시 버전을 `20260520a`로 갱신한다.
  이유: GitHub Pages/Safari 캐시 환경에서 최신 홈 스타일을 안정적으로 읽게 하기 위해서다.
- 결정: 홈의 버튼/카드 radius는 내부 문서의 `radius.xs=50px`보다 CSS 치트시트의 restraint를 우선해 4px/8px 계열로 낮춘다.
  이유: 사용자가 두 내부 문서 적용 여부를 확인한 뒤 외부 CSS 원칙까지 반영하라고 요청했기 때문이다.

## Changes
- `body.home-page`에 디자인 기준 기반의 다크 surface, text, accent, spacing, radius 토큰을 추가했다.
- 홈 헤더, 언어 전환, 햄버거 메뉴, 오버레이 메뉴를 token 기반 다크 UI로 정리했다.
- 버튼, 공지 배너, 텍스트 링크에 hover/focus-visible/active/disabled 상태 규칙을 보강했다.
- 히어로/섹션/앱 패널/비주얼 카드의 배경을 카드형 다크 surface로 정리하고 과한 orb 배경은 제거했다.
- CSS 치트시트 기준에 맞춰 홈 범위의 box shadow, decorative gradient, hover transform, scroll reveal transition을 제거하거나 낮췄다.
- 모바일에서 섹션 제목과 공지 배너 밀도를 줄여 overflow와 가림을 완화했다.
- 사용자 요청에 따라 홈 배경을 밝은 회색 `#eeeeee`로 바꾸고, 텍스트/카드/헤더/공지 배너 토큰을 light-gray UI에 맞춰 조정했다.
- 사용자 지정 4색 팔레트를 홈 토큰에 반영했다: 배경 `#FBF5DD`, 레이아웃 `#E7E1B1`, 소제목 `#306D29`, 버튼 `#0D530E`.
- 이미지로 제공한 Spot Palette를 홈 토큰에 반영했다: 배경 `#FFF5E0`, 레이아웃 `#C6BDA9`, 보조 면 `#FFEFCA`, 소제목/버튼 `#005B45`.
- 이미지로 제공한 새 Spot Palette를 홈 토큰에 반영했다: 배경 `#F5F2ED`, 레이아웃 `#BDBAB5`, 보조 면 `#FFEFCA`, 소제목/버튼 `#005B4D`.
- 사용자 지정 뉴트럴 골드 팔레트를 홈 토큰에 반영했다: 배경 `#e1ddd6`, 레이아웃 `#e2decf`, 소제목 `#c5ad6f`, 버튼 `#c5ac6d`, 본문 `#1e1e1d`.
- 제공 이미지의 PARADE 화면에서 추출한 팔레트를 홈 토큰에 반영했다: 배경 `#e3ded6`, 레이아웃 `#d8d5cc`, 강조/버튼 `#bbaa78`, 본문 `#232322`, 보조 패널 `#a9a5a0`.
- 사용자 요청에 따라 홈 배경과 고정 헤더 배경을 밝은 크림색 `#f7f1e6`으로 조정했다.
- 이미지로 제공한 Natural Palette를 홈 토큰에 반영했다: 배경 `#FFF9EE`, 레이아웃 `#F7F1E6`, 보조 패널 `#E2D4B7`, 소제목/버튼 `#AE8D18`.
- 직전 홈 디자인 규칙 변경(`border-radius: 12px`, serif 계열 폰트, `line-height: 1.8`, `padding: 32px`, `gap: 24px` 등)은 사용자 요청에 따라 취소하고 Natural Palette 상태로 복원했다.
- 홈 앱 목록의 `EDSN Frame` featured 카드 배경을 일반 앱 카드와 같은 `--home-card`로 바꿔 앱 레이아웃 색을 통일했다.
- 홈 Contact 섹션 설명 문구가 데스크톱에서 줄바꿈되지 않도록 Contact copy 영역을 전체 grid 폭으로 확장하고 tablet 이상에서 `white-space: nowrap`을 적용했다.
- `site.css` 쿼리 버전을 `20260520a`로 갱신했다.

## Verification
- 실행한 검증:
  - `curl -I http://127.0.0.1:8123/`
  - Codex Browser desktop viewport 1280x720 render check
  - Codex Browser mobile viewport 390x844 render check
  - Browser-computed checks: body background `rgb(0, 0, 0)`, text color `rgb(226, 222, 207)`, no horizontal overflow
  - `rg -n -- "--home-bg|home-accent|focus-visible|button:active|button\\[aria-disabled|hero-backdrop|app-panel-featured" assets/site.css`
  - Browser-computed checks after CSS principle pass: button radius `4px`, hero radius `8px`, hero shadow `none`, reveal transform `none`, reveal transition `0s`
  - Browser-computed checks after light-gray request: body background `rgb(238, 238, 238)`, body text `rgb(30, 30, 29)`, notice background `rgba(255, 255, 255, 0.88)`, no horizontal overflow
  - Browser-computed checks after palette request: body background `rgb(251, 245, 221)`, layout background `rgb(231, 225, 177)`, subtitle color `rgb(48, 109, 41)`, button background `rgb(13, 83, 14)`, no horizontal overflow
  - Browser-computed checks after Spot Palette request: body background `rgb(255, 245, 224)`, layout background `rgb(198, 189, 169)`, notice background `rgb(255, 239, 202)`, subtitle/button `rgb(0, 91, 69)`, no horizontal overflow
  - Browser-computed checks after updated Spot Palette request: body background `rgb(245, 242, 237)`, layout background `rgb(189, 186, 181)`, notice background `rgb(255, 239, 202)`, subtitle/button `rgb(0, 91, 77)`, no horizontal overflow
  - Browser-computed checks after neutral gold palette request: body background `rgb(225, 221, 214)`, body text `rgb(30, 30, 29)`, layout background `rgb(226, 222, 207)`, subtitle `rgb(197, 173, 111)`, button `rgb(197, 172, 109)`, no horizontal overflow
  - Browser-computed checks after image extraction request: body background `rgb(227, 222, 214)`, layout background `rgb(216, 213, 204)`, notice background `rgb(169, 165, 160)`, subtitle/button `rgb(187, 170, 120)`, no horizontal overflow
  - Browser-computed checks after cream background request: body background `rgb(247, 241, 230)`, header background `rgba(247, 241, 230, 0.94)`, no horizontal overflow
  - Browser-computed checks after Natural Palette request: body background `rgb(255, 249, 238)`, layout background `rgb(247, 241, 230)`, notice background `rgb(226, 212, 183)`, subtitle/button `rgb(174, 141, 24)`, no horizontal overflow
  - Browser-computed checks after reverting last style-rule request: body background `rgb(255, 249, 238)`, sans-serif home font restored, hero radius `8px`, button radius `4px`, hero padding `48px`, no horizontal overflow
  - Browser-computed checks after EDSN Frame layout color unification: EDSN app panel background matches the following app panel background `rgb(247, 241, 230)`
  - Browser-computed checks after Contact copy nowrap: Contact description `white-space=nowrap`, height `26.3984375px`, line-height `26.4px`, no horizontal overflow
- 결과:
  - PASS: 로컬 서버 HTTP 200 확인
  - PASS: 데스크톱/모바일에서 홈 렌더링 및 주요 텍스트 확인
  - PASS: 모바일 `overflowX=false`, 데스크톱 `overflowX=false`
  - PASS: 외부 CSS 원칙 반영 후 버튼 radius, 카드 radius, shadow, reveal animation 계산값 확인
  - PASS: 밝은 회색 배경과 공지 배너 톤 조정 확인
  - PASS: 사용자 지정 4색 팔레트 계산값 확인
  - PASS: Spot Palette 계산값 확인
  - PASS: 새 Spot Palette 계산값 확인
  - PASS: 뉴트럴 골드 팔레트 계산값 확인
  - PASS: 이미지 추출 팔레트 계산값 확인
  - PASS: 밝은 크림색 배경 계산값 확인
  - PASS: Natural Palette 계산값 확인
  - PASS: 직전 홈 디자인 규칙 변경 취소 후 Natural Palette 상태 계산값 확인
  - PASS: `EDSN Frame` 카드와 일반 앱 카드의 계산된 배경색 일치 확인
  - PASS: Contact 설명 문구 데스크톱 한 줄 유지 확인
- 미실행 항목:
  - 실제 배포 사이트 확인은 아직 수행하지 않았다.

## Handoff / Next
- 다음 디자인 수정은 앱 상세/법률 페이지까지 같은 토큰 체계로 확장하는 순서가 적합하다.
- 공지 배너는 여전히 fixed bottom UI라 좁은 화면에서 콘텐츠를 일부 덮는다. 필요하면 sticky inline notice로 바꾸는 별도 UX 결정을 할 수 있다.

# Worklog: EDSN Frame Usage Guide

Date: 2026-07-03
Status: done
Related Files:
- `index.html`
- `ko/apps/edsn-frame/index.html`
- `en/apps/edsn-frame/index.html`
- `assets/site.css`
- `docs/site-copy-ko-edit.md`
- `docs/CHANGELOG.md`

## Goal

- 홈페이지의 EDSN Frame 흐름에서 사용자가 왼쪽 질문 목록으로 원하는 답변에 바로 이동할 수 있는 FAQ형 이용 가이드를 제공하고, 앱 개요, 프레임, 행사 모드, QR 전달, 출력, 구독, 포인트까지 초보자도 이해할 수 있게 정리한다.

## Scope

- 포함 범위: EDSN Frame 한글·영문 상세 페이지의 왼쪽 질문형 가이드, 홈 EDSN Frame 카드의 가이드 링크, 앱 개요/프레임/필터/행사 모드/QR 전달/출력/구독/필름/포인트 FAQ 안내, 관련 CSS와 문서 기록.
- 제외 범위: 법무 문서 본문, 앱 기능 설명의 사실 범위를 벗어나는 신규 기능 고지, 배포.

## Plan

1. 현재 EDSN Frame 상세 페이지와 홈 카드 구조를 확인한다. -> verify: 대상 HTML 위치 확인
2. 왼쪽 질문 목록과 오른쪽 답변 본문으로 구성된 FAQ 섹션을 15개 질문으로 재구성한다. -> verify: HTML parser와 앵커 링크 검색
3. 한국어 원본 문서, 영어 대응 문구, 변경 기록을 갱신한다. -> verify: `git diff --check`

## Decisions

- 결정: JS 탭 대신 같은 페이지 앵커 링크가 있는 왼쪽 챕터 내비게이션을 사용한다.
  이유: 키보드, 터치, 직접 링크 공유, JS 비활성 상태에서 모두 안정적으로 동작하기 때문이다.
- 결정: 홈 카드에는 가이드 전체를 넣지 않고 상세 페이지 `#guide`로 연결한다.
  이유: 홈 카드의 정보 밀도를 유지하면서도 원하는 사용자는 바로 가이드로 이동할 수 있게 하기 위해서다.
- 결정: 가이드 본문은 사용자가 실제로 물어볼 질문을 기준으로 재배열한다.
  이유: 단계형 설명보다 프레임, 행사 모드, QR 권한, 구독, 포인트처럼 궁금한 주제에 바로 접근하기 쉽기 때문이다.

## Changes

- `ko/apps/edsn-frame/index.html`: 기존 단계형 가이드를 15개 질문과 답변으로 재구성하고, 앱 개요/프레임/필터/행사 모드/QR 전달/출력/구독권/필름/포인트/비밀 업적/제작 문의를 답변 순서에 맞게 배치했다.
- `en/apps/edsn-frame/index.html`: 한국어 FAQ와 같은 정보 구조로 영어 답변을 대응 번역했다.
- `ko/apps/edsn-frame/index.html`: 행사 모드 답변에 촬영용 기기, 충전기, 보조 배터리, 거치대, 네트워크, 프린터, 사전 테스트 준비물을 유지했다.
- `index.html`: EDSN Frame 홈 카드에 이용 가이드 링크를 추가했다.
- `assets/site.css`: 가이드 챕터 내비게이션, 단계 본문 카드, 순서형 목록, `:target` 하이라이트, 모바일 가로 스크롤 스타일을 추가했다.
- `docs/site-copy-ko-edit.md`: EDSN Frame FAQ 한국어 문구를 편집 원본에 추가했다.
- `docs/CHANGELOG.md`: 변경 이력을 기록했다.

## Verification

- 실행한 검증:
  - `python3 -m html.parser` for changed HTML files
  - `git diff --check`
  - local HTTP check
- 결과:
  - PASS

## Handoff / Next

- EDSN Frame FAQ는 `#guide`, `#guide-about`, `#guide-capture-frames`, `#guide-frame-designs`, `#guide-filters`, `#guide-events`, `#guide-event-settings`, `#guide-send-photos`, `#guide-qr-entitlement`, `#guide-print`, `#guide-custom-frame`, `#guide-subscriptions`, `#guide-film`, `#guide-points`, `#guide-earn-points`, `#guide-secret-achievement` 앵커로 바로 이동할 수 있다.
- 2026-07-29: FAQ 15문항 본문을 앱 소스(`narangyo4 for swift`의 `Localizable.strings`, `MonetizationModels.swift`, `AppDomain.swift`) 기준으로 재작성했다. 추측형 서술을 제거하고 실제 수치와 제약을 명시했다. 한국어·영어·`docs/site-copy-ko-edit.md`를 함께 동기화했다.
- 2026-07-29(후속): 행사/매장 모드 답변을 앱 2.5 `develop` 기준으로 다시 확인해 교정했다. 이전 작성분에 있던 `행사/매장 모드 월 구독으로 사용` 서술은 사실과 달랐다. 현재 QR 시작 조건에는 구독 게이트가 없고(`StorefrontModeSettings.swift`의 `isQREntitlementActive`는 디코딩 호환용 레거시 필드), `qrImageTransferMonthly`는 신규 판매 목록에서 제외되어 있다(`StorefrontDisplayCatalogTests.swift`).
- 행사 모드 사실 확인 경로: 사양 요약은 `docs/CURRENT_APP_STATE_2026-05-01.md`의 `Storefront / Event Mode`, 시작 조건은 `AdminHomeView.swift`의 `canStartStorefrontSession`과 `startBlockedReasonText`, 설정 범위는 `StorefrontModeSettings.swift`(자동 복귀 30~120초 기본 45초, 결과 편집 5~60초, 전달 방식 `qr`/`printer`/`qrAndPrinter`).
- 2026-07-29(3차): FAQ 외 페이지 항목까지 최신 상태와 대조해 추가 오류를 교정했다.
  - Android는 Google Play 프로덕션에 이미 배포된 상태다(`docs/worklog-2026-07-25-android-2-5-v119-production-release.md`의 초기 readback에서 production `2.4.1-v118` `completed`). `Android 준비 중` 표기는 사실과 달랐다.
  - QR은 행사 모드 전용이 아니다. `CURRENT_APP_STATE`의 Monetization 절과 `StartView.swift` 안내 문구 기준으로 개인 촬영에서도 생성되며, 계정 하나의 잔여 횟수를 공유하고 Apple/Google 연결 계정에 최초 5회가 지급되며 게스트에게는 지급되지 않는다. 유효기간은 없다.
  - 행사/매장 모드와 인쇄는 무료 기능이다. 사진 보정(`photo-adjustments-feature`)과 특수 효과 필터 팩 2종은 포인트 또는 현금으로 여는 별도 소유 항목이며 무제한 컬러 프레임에 포함되지 않는다.
- 미반영 보류 항목: Customer Frame(커스텀 프레임) IAP 3종은 iOS/Mac `2.5`에서 `WAITING_FOR_REVIEW` 상태이고 Google Play 상품도 `DRAFT`라 공개 페이지에 넣지 않았다. 승인·판매 개시가 확인되면 FAQ에 추가할지 결정한다.
- 2026-07-29(4차): 실제 스토어 페이지를 조회해 출시·호환 정보를 검증하고 교정했다.
  - EDSN Frame App Store는 `Mac, iPhone, iPad` 지원이며 Mac은 macOS 13.0 이상이 필요하다. 기존 `iOS` 단독 표기는 Mac 지원을 누락하고 있었다.
  - Google Play 페이지(`kr.co.studioyona.edsnframe`)는 `어디서나 프레임 EDSN Frame`으로 공개 중이다. 홈과 상세 페이지에 App Store·Google Play 링크를 추가했다.
  - 까꿍캠은 App Store에서 유료로 판매 중인데 상세 페이지에 `유료 앱 예정`이 남아 `출시 중` 표기와 모순이었다. 판매 중 기준으로 정정했다.
  - Veruma와 까꿍캠의 `iPhone 전용` 표기는 두 프로젝트 모두 `TARGETED_DEVICE_FAMILY = 1`이라 정확하다. App Store의 `iPhone, iPad 및 iPod touch와 호환` 표시만으로 iPad 지원이라고 판단하지 않는다.
  - 탐정의 녹음기 `iPhone, iPad, Mac` 표기는 스토어 조회 결과와 일치해 변경하지 않았다.
- 2026-07-29(5차): 앱 상세 외 공개 페이지까지 전수 점검했다.
  - `/apps/`에 Stampho 카드와 히어로 CTA가 남아 있었다. 홈에서는 2026-06-17에 의도적으로 숨긴 앱이라 노출 기준이 어긋나 있었고, 같은 기준으로 제거했다. Stampho 상세/법률 페이지는 `noindex, nofollow`가 걸린 비공개 상태라 그대로 유지했다.
  - `404.html`의 `두 개의 앱` 안내는 공개 앱이 네 개인 현재 상태와 맞지 않아 갱신하고, 푸터 링크에 까꿍캠을 추가했다.
  - `/contact/`의 앱 질문 안내가 두 개 앱만 언급하고 있어 네 개 기준으로 고쳤고, `/support/`의 기기 정보 안내는 Android 출시 이후에도 `iOS 버전`만 요구하고 있어 `iOS 또는 Android 버전`으로 고쳤다.
  - EDSN Frame App Store 판매 버전은 `2.4.1`이고 `2.5`는 여전히 심사 단계다. 커스텀 프레임 IAP는 이번에도 공개 페이지에 반영하지 않았다.
- 2026-07-29(6차): 스크린샷 섹션이 자리표시자로 남아 있던 문제를 해결했다.
  - EDSN Frame은 `narangyo4 for swift/fastlane/screenshots/{ko-KR,en-US}`의 `iPhone 17e` 세트에서 Start·Capture·Result 3장을 사용했다.
  - 탐정의 녹음기는 `RecorderFix/docs/screenshots/2026-06-05-1-2-refresh/{ko,en}/iphone`에서 카테고리 홈·녹음 중·전사 3장을 사용했다. 영어 세트에는 카테고리 홈이 없어 `en-iphone-home.png`으로 대체했다.
  - 원본은 1.2~2.1MB PNG라 그대로 쓰면 페이지가 무거워진다. `sips -Z 1200`으로 긴 변을 1200px로 줄이고 JPEG 품질 72로 변환해 장당 35~123KB로 맞췄다. 산출물은 `assets/screenshots/<app>/`에 둔다.
  - `.app-page .shot`은 자리표시자 전용 스타일이었다. `:not(:has(img))`로 분기해 이미지가 없는 카드(Stampho)는 기존 모양을 유지하고, 이미지 카드에는 캡션 레이아웃을 적용했다. 스타일이 바뀌었으므로 해당 4개 페이지의 `site.css` 캐시 버전을 `20260729a`로 올렸다.
  - 검증: Playwright로 한국어 두 페이지의 `.screens` 영역을 캡처해 3열 배치와 캡션, 이미지 로드를 확인했다.
- 2026-07-29(7차): 앱 상세 페이지 사이의 구조 격차를 맞췄다.
  - Veruma 페이지만 42줄로 다른 앱(155~386줄)의 일부였다. 히어로 우측 `details` 카드에 요약 정보 없이 앱 아이콘만 있었고, 다른 앱에는 모두 있는 `관련 문서` 섹션도 없었다. 요약 카드 3항목과 관련 문서 섹션을 같은 구조로 추가했다.
  - Veruma `앱 정보`의 `월간·연간 자동 갱신 및 평생 이용 상품 준비`는 낡은 표현이었다. `Previewcam` 프로젝트의 `EntitlementSnapshotTests.swift`에 `pro.monthly.v2`, `pro.yearly.v2`, `pro.lifetime`이 모두 정의되어 있고 App Store도 `무료 · 앱 내 구입`으로 판매 중이라 현재 제공 기준으로 고쳤다. 호환성(iOS 18.0 이상)과 언어, 가격 항목도 채웠다.
  - 탐정의 녹음기·까꿍캠·Veruma 상세 페이지에는 App Store 링크가 없어, 홈에서 상세로 들어오면 다운로드 경로가 끊겼다. 세 페이지 히어로에 App Store 버튼을 추가했다.
  - 요약 카드 안에 큰 앱 아이콘을 함께 두면 다른 앱 페이지와 균형이 어긋난다. Playwright로 까꿍캠과 비교해 확인한 뒤 아이콘 블록을 제거했다.
- 문구 수정 시 사실 근거는 앱 내부 FAQ 문자열(`ko.lproj/Localizable.strings` 662행 부근)과 `PurchaseTarget` 정의를 우선 확인한다.
- 배포는 별도 요청 시 `main` 푸시로 GitHub Pages에 반영한다.

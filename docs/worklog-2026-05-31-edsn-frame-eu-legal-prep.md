# Worklog: EDSN Frame EU legal prep

Date: 2026-05-31
Status: done
Related Files:
- `ko/apps/edsn-frame/legal/privacy/index.html`
- `ko/apps/edsn-frame/legal/terms/index.html`
- `en/apps/edsn-frame/legal/privacy/index.html`
- `en/apps/edsn-frame/legal/terms/index.html`
- `docs/CHANGELOG.md`

## Goal

- EDSN Frame의 EU 1차 출시 준비를 위해 공개 법무 페이지에 EEA/EU 이용자 추가 안내와 EU 소비자/디지털 서비스 안내를 반영한다.

## Scope

- 포함 범위:
  - 한글/영문 개인정보처리방침에 EEA/EU privacy notice 추가
  - 한글/영문 이용약관에 EU consumer / digital services notice 추가
  - GDPR 처리 근거, 권리 행사, 국외 이전 safeguard, 자동화된 결정/아동 안내 보강
  - App Store 결제/환불이 Apple 경로를 따른다는 점과 강행 소비자권리 비배제 문구 보강
- 제외 범위:
  - EU representative 실제 지정
  - App Store Connect DSA trader 입력
  - AdMob Privacy & Messaging 설정
  - EU 국가 availability / IAP availability 실제 변경

## Decisions

- 별도 regional URL을 만들지 않고 기존 앱별 privacy/terms URL에 직접 섹션을 추가했다.
  - 이유: App Store와 앱 내 법무 링크가 이미 이 URL을 사용하므로, 새 페이지 링크 누락 리스크가 낮다.
- App Store Connect에 제공되는 EU trader 전화 연락처를 기준으로 두고, 홈페이지에는 App Store product page에 표시될 수 있음을 안내했다.
- EU representative는 현재 소규모 운영과 비민감·비고위험 처리 범위를 기준으로 현 시점 미지정 운영 결정을 문구화했다.
  - EU 운영 범위, 처리 규모 또는 위험도가 중요하게 변경되는 경우 재검토한다.

## Verification

- 실행한 검증:
  - HTML parser 검증
  - EU/EEA/GDPR 문구 검색
  - placeholder/TODO/확정 필요 검색
- 결과:
  - PASS: 네 EDSN Frame 법무 페이지 모두 `python3 -m html.parser` 통과
  - PASS: EEA/EU/GDPR/처리 근거/강행 소비자권리 문구가 네 페이지에 의도대로 반영됨
  - PASS: 공개 본문에 `TODO`, `[확정 필요]` placeholder 없음
  - PASS: 로컬 미리보기 `http://127.0.0.1:8124/` 기준 네 법무 URL 모두 `200 OK`
  - PASS: 로컬 body fetch에서 영문/한글 EU notice 핵심 문구 확인
  - PASS: `git diff --check` 통과

## Handoff / Next

- EU 출시 전 남은 외부 blocker:
  - App Store Connect DSA trader 정보 readback
  - EU representative 미지정 판단의 주기적 재검토
  - AdMob European regulations consent message 설정 및 EEA geography 테스트
  - App Store Connect DSA trader 정보 입력
  - App Store / IAP / RevenueCat storefront readback

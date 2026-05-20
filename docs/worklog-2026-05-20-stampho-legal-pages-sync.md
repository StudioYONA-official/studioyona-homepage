# Worklog: Stampho legal pages sync

Date: 2026-05-20
Status: done
Related Files:
- `ko/apps/stampho/legal/privacy/index.html`
- `ko/apps/stampho/legal/terms/index.html`
- `en/apps/stampho/legal/privacy/index.html`
- `en/apps/stampho/legal/terms/index.html`
- `docs/CHANGELOG.md`
- Source: `/Users/Captain/Projects/VibeCoding/Stampho/docs/legal/privacy-policy.ko.md`
- Source: `/Users/Captain/Projects/VibeCoding/Stampho/docs/legal/terms-of-service.ko.md`

## Goal
- 사용자가 제공한 Stampho 한국어 개인정보처리방침과 이용약관을 홈페이지 한국어 법률 페이지에 반영하고, 같은 구조의 영어 번역 페이지도 갱신한다.
- 완료 조건: 한글/영문 Stampho 법률 페이지가 최신 원문 조항과 시행일을 포함하고, 로컬 URL에서 정상 응답한다.

## Scope
- 포함 범위: Stampho 개인정보처리방침/이용약관의 한글·영문 본문 교체, RevenueCat/구독/국외이전/자동화된 결정/시행일 조항 반영.
- 제외 범위: EDSN Frame 법률 페이지, Detective's Recorder 법률 페이지, 법률 자문 확정.

## Plan
1. 제공 원문과 기존 홈페이지 법률 페이지를 확인한다. -> verify: 원문 markdown과 기존 HTML 확인
2. 한국어 페이지 본문을 원문 기준으로 교체한다. -> verify: 시행일, RevenueCat, 구독 조항 검색
3. 영어 페이지를 같은 구조로 번역해 교체한다. -> verify: h2 개수, 시행일, RevenueCat 검색
4. HTML과 로컬 URL을 검증한다. -> verify: `html.parser`, `curl -I`, 브라우저 계산값 확인
5. 변경 기록을 남긴다. -> verify: changelog/worklog 확인

## Findings
- 제공 원문은 `2026년 5월 16일` 시행일과 향후 App Store 자동 갱신형 구독, RevenueCat 처리위탁/국외이전, 자동화된 결정 부존재 조항을 포함한다.
- 기존 홈페이지 Stampho 법률 페이지는 축약본이며 시행일이 `예정`으로 남아 있었다.
- 영어 이용약관 기존 HTML에는 일부 조항 본문이 누락된 구간이 있어 전체 본문 교체가 필요했다.
- EDSN Frame 영문 법률 페이지는 사업장 주소를 `#419, 4F, 1, Daebangcheon-ro 12-gil, Yeongdeungpo-gu, Seoul, Republic of Korea` 형식으로 공개하고 있었다.

## Decisions
- 결정: 페이지 헤더/푸터/내비게이션은 유지하고 `article.card.content` 본문만 교체한다.
  이유: 이번 작업의 범위는 법률 문구 반영이며, 페이지 구조나 디자인 변경은 필요하지 않기 때문이다.
- 결정: 영어 페이지는 한국어 원문의 조항 수와 순서를 맞춘 번역본으로 구성한다.
  이유: 한글/영문 법률 페이지 간 내용 차이를 줄여 운영 검토가 쉽도록 하기 위해서다.

## Changes
- Stampho 한국어 개인정보처리방침을 제공 원문 기준으로 교체했다.
- Stampho 한국어 이용약관을 제공 원문 기준으로 교체했다.
- Stampho 영어 개인정보처리방침을 같은 조항 구조로 번역해 반영했다.
- Stampho 영어 이용약관을 같은 조항 구조로 번역해 반영했다.
- Stampho 영문 법률 페이지의 사업장 주소 표기를 EDSN Frame 영문 법률 페이지의 확정 운영자 정보 표기와 통일했다.
- `docs/CHANGELOG.md`에 변경 이력을 기록했다.

## Verification
- 실행한 검증:
  - `python3 -m html.parser ko/apps/stampho/legal/privacy/index.html`
  - `python3 -m html.parser ko/apps/stampho/legal/terms/index.html`
  - `python3 -m html.parser en/apps/stampho/legal/privacy/index.html`
  - `python3 -m html.parser en/apps/stampho/legal/terms/index.html`
  - `curl -I http://127.0.0.1:8123/ko/apps/stampho/legal/privacy/`
  - `curl -I http://127.0.0.1:8123/ko/apps/stampho/legal/terms/`
  - `curl -I http://127.0.0.1:8123/en/apps/stampho/legal/privacy/`
  - `curl -I http://127.0.0.1:8123/en/apps/stampho/legal/terms/`
  - Browser checks for h1, h2 count, effective date, RevenueCat, horizontal overflow
  - `rg -n "RevenueCat|2026년 5월 16일|May 16, 2026|Future Subscription|향후 구독" ko/apps/stampho/legal en/apps/stampho/legal`
  - `rg -n "4F #419|#419, 4F|예정|Planned|TBD|PLACEHOLDER" ko/apps/stampho/legal en/apps/stampho/legal`
- 결과:
  - PASS: 네 법률 페이지 모두 HTML parser 통과
  - PASS: 네 법률 URL 모두 로컬 서버 200 OK
  - PASS: 개인정보처리방침 한글/영문 h2 14개, 이용약관 한글/영문 h2 17개 확인
  - PASS: 시행일과 RevenueCat/구독 관련 조항 한글·영문 모두 확인
  - PASS: Stampho 법률 페이지에 `예정`, `Planned`, `TBD`, `PLACEHOLDER` 자리표시 문구가 남아 있지 않음
  - PASS: Stampho 영문 법률 페이지의 주소 표기가 EDSN Frame 영문 법률 페이지와 같은 `#419, 4F, ...` 형식임
  - PASS: 브라우저 기준 가로 오버플로 없음

## Handoff / Next
- 이 문서는 법률 검토를 대체하지 않는다. 실제 운영/스토어 제출 전에는 서비스 사실과 법률 검토를 한 번 더 맞추는 것이 좋다.
- Stampho가 공개 출시 단계로 전환되면 `noindex, nofollow` 유지 여부를 별도로 결정해야 한다.

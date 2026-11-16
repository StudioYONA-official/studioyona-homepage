# Worklog: Studio YONA 홈페이지 전체 이용약관·개인정보처리방침 및 사업자 고지 정비

Date: 2026-11-16
Status: done
Related Files:
- `index.html`
- `about/index.html`
- `apps/index.html`
- `contact/index.html`
- `support/index.html`
- `apps/edsn-frame/legal/privacy/index.html`
- `apps/edsn-frame/legal/terms/index.html`
- `ko/apps/edsn-frame/index.html`
- `ko/apps/edsn-frame/legal/privacy/index.html`
- `ko/apps/edsn-frame/legal/privacy/update-2026-05-12/index.html`
- `ko/apps/edsn-frame/legal/privacy/update-2026-06-14/index.html`
- `ko/apps/edsn-frame/legal/terms/index.html`
- `en/apps/edsn-frame/legal/privacy/index.html`
- `en/apps/edsn-frame/legal/terms/index.html`
- `apps/detective-recorder/legal/privacy/index.html`
- `apps/detective-recorder/legal/terms/index.html`
- `ko/apps/detective-recorder/index.html`
- `ko/apps/detective-recorder/legal/privacy/index.html`
- `ko/apps/detective-recorder/legal/terms/index.html`
- `en/apps/detective-recorder/index.html`
- `en/apps/detective-recorder/legal/privacy/index.html`
- `en/apps/detective-recorder/legal/terms/index.html`
- `apps/veruma/legal/privacy/index.html`
- `apps/veruma/legal/terms/index.html`
- `ko/apps/veruma/index.html`
- `ko/apps/veruma/support/index.html`
- `ko/apps/veruma/legal/privacy/index.html`
- `ko/apps/veruma/legal/terms/index.html`
- `en/apps/veruma/legal/privacy/index.html`
- `en/apps/veruma/legal/terms/index.html`
- `apps/notch-dice/support/index.html`
- `apps/notch-dice/legal/privacy/index.html`
- `apps/notch-dice/legal/terms/index.html`
- `ko/apps/notch-dice/support/index.html`
- `ko/apps/notch-dice/legal/privacy/index.html`
- `ko/apps/notch-dice/legal/terms/index.html`
- `en/apps/notch-dice/support/index.html`
- `en/apps/notch-dice/legal/privacy/index.html`
- `en/apps/notch-dice/legal/terms/index.html`
- `ko/apps/peekaboo-cam/index.html`
- `ko/apps/peekaboo-cam/support/index.html`
- `en/apps/peekaboo-cam/support/index.html`
- `apps/peekaboo-cam/legal/privacy/index.html`
- `apps/peekaboo-cam/legal/terms/index.html`
- `ko/apps/peekaboo-cam/legal/privacy/index.html`
- `ko/apps/peekaboo-cam/legal/terms/index.html`
- `en/apps/peekaboo-cam/legal/privacy/index.html`
- `en/apps/peekaboo-cam/legal/terms/index.html`
- `ko/apps/spark-catcher/index.html`
- `ko/apps/spark-catcher/support/index.html`
- `en/apps/spark-catcher/support/index.html`
- `apps/spark-catcher/legal/privacy/index.html`
- `apps/spark-catcher/legal/terms/index.html`
- `ko/apps/spark-catcher/legal/privacy/index.html`
- `ko/apps/spark-catcher/legal/terms/index.html`
- `en/apps/spark-catcher/legal/privacy/index.html`
- `en/apps/spark-catcher/legal/terms/index.html`
- `apps/mandarana/index.html`
- `apps/mandarana/support/index.html`
- `apps/mandarana/legal/privacy/index.html`
- `apps/mandarana/legal/terms/index.html`
- `ko/apps/mandarana/index.html`
- `ko/apps/mandarana/support/index.html`
- `ko/apps/mandarana/legal/privacy/index.html`
- `ko/apps/mandarana/legal/terms/index.html`
- `ko/apps/stampho/index.html`
- `apps/stampho/legal/privacy/index.html`
- `apps/stampho/legal/terms/index.html`
- `ko/apps/stampho/legal/privacy/index.html`
- `ko/apps/stampho/legal/terms/index.html`
- `en/apps/stampho/legal/privacy/index.html`
- `en/apps/stampho/legal/terms/index.html`
- `docs/CHANGELOG.md`

## Goal
- Studio YONA 홈페이지 내 모든 앱의 이용약관(`terms`)과 개인정보처리방침(`privacy`), 일반 문의/고객지원 개인정보 안내, 전체 푸터의 법정 사업자·책임자 표기를 리뷰 결과 및 사용자 확정 사실에 맞춰 일괄 반영한다.
- 숨김 처리된 페이지(`stampho`, `photo-download`, `auth/callback`)의 `noindex, nofollow` 정책과 기존 URL 체계를 보존한다.

## Scope
- 포함 범위:
  - 8개 앱(`edsn-frame`, `detective-recorder`, `veruma`, `notch-dice`, `peekaboo-cam`, `spark-catcher`, `mandarana`, `stampho`)의 한·영 및 언어 중립 법률 페이지 전체 정비
  - `notch-dice`는 원격 `2026-11-04` 시행 Apple Game Center(GameKit) 멀티플레이·비공개 진행 자료(난수·함대) 구조와 유료+인앱결제 기준을 통합해 한·영 전문 및 중립 진입 페이지를 게시하고, 기존 `2026-11-04` 문서는 `archive/2026-11-04/`에 보존
  - `Homepage-wt-everscene-20261014` 워크트리 최신본 및 `codex/spark-catcher-ai-privacy-20261010`(Spark Catcher AI 에이전트 연결 안내) 통합, `EverScene(영리하다)`를 포함한 전체 HTML 푸터의 `개인정보 보호책임자`·`4층 419호` / `#419, 4F`·`2026-Seoul-Yeongdeungpo-0975` 일괄 통일
  - `detective-recorder` 선택적 iCloud(CloudKit) 동기화 지원 사실을 한·영 앱 소개 페이지 및 법률 문서에 일치
  - `/contact/`, `/support/` 이메일 문의 개인정보 처리 안내 추가
  - 저장소 내 모든 한국어/영문 HTML 푸터의 `개인정보 보호책임자` 및 `Mail-order business report: 2026-Seoul-Yeongdeungpo-0975` 일괄 통일
  - 홈 하단 사전 공지 배너(`index.html`, `2027-01-16`까지 표시) 교체 및 출시 6개 앱 통합 개정 안내 페이지(`ko/legal/update-2026-12-17/index.html`, `en/legal/update-2026-12-17/index.html`, `legal/update-2026-12-17/index.html`) 추가
  - `docs/CHANGELOG.md` 및 본 worklog 작성
- 제외 범위:
  - 각 iOS/macOS/Android 앱 저장소 내부에 오프라인 번들된 별도 마크다운/법률 텍스트 수정
  - Git 스테이징·커밋·푸시 및 외부 배포

## Plan
1. 사용자 확정 사항(`detective-recorder` iCloud 동기화 적용 완료, `notch-dice` Supabase 리전 = `ap-northeast-2` 서울) 반영 기준 수립 -> verify: 앱별 데이터 흐름 대조
2. 8개 앱 법률 페이지(한·영·중립 진입) 및 `notch-dice` 신규 이용약관 반영 -> verify: 조문 누락·시행일·개정 이력·내부 링크 확인
3. 공용 문의/지원 페이지 안내 추가 및 전 사이트 HTML 푸터 전수 점검 -> verify: 86개 전체 HTML 파일 직접 확인
4. 경량 폰트 재생성 가능 여부 확인 및 문서 이력 갱신 -> verify: `CHANGELOG.md` 및 worklog 기록

## Findings
- 사용자 확인 사실:
  - 탐정의 녹음기(`detective-recorder`)는 선택적 iCloud(Apple 비공개 CloudKit) 기기 간 동기화가 실제 적용되어 있음(기존 앱 소개 페이지 04번 단계의 "클라우드에 자동으로 올라가지 않습니다" 서술과 법률 페이지의 미지원 문구가 최신 앱 상태와 어긋나 있었음).
  - 노치 다이스(`notch-dice`)가 사용하는 온라인 방·피드백용 Supabase 리전은 어디서나 프레임과 동일한 대한민국 서울(`ap-northeast-2`)임.
- 기존 법률·고지 주요 보완점:
  - 이메일 고객지원에 Google LLC(Gmail) 글로벌 인프라를 사용하면서도 다수 앱 개인정보처리방침에 수탁자·국외 이전 안내가 빠져 있었음.
  - 파기 절차·방법(전자적 파일 복구 불가능 삭제, 출력물 분쇄·소각), 권익침해 구제기관 연락처, 개인정보 보호책임자 직책·연락처가 일부 문서에서 축약되거나 누락되어 있었음.
  - 이용약관에서 일방적 면책, 7일 공지만으로 불리한 약관 변경 적용, 서울중앙지방법원 전속관할 등 약관규제법·전자상거래법상 리스크가 있는 조항이 존재했음.
  - 한국어 푸터 전반에 구 법령 용어인 `개인정보관리책임자`가 쓰이고 있었고, 일부 영문 지원·중립 진입 페이지 푸터에 `Mail-order business report: 2026-Seoul-Yeongdeungpo-0975`가 빠져 있었음.
- 자산 스크립트 제약:
  - 기본 시스템 `python3` 환경에는 `fontTools` 모듈이 설치되어 있지 않아 `scripts/optimize_assets.py`가 즉시 실행되지 않음(`ModuleNotFoundError: No module named 'fontTools'`). 단, `assets/site.css`는 `"Pretendard Site"` 다음에 전체 가변 폰트 `"Pretendard"`(`PretendardVariable.woff2`)를 fallback으로 선언하고 있어 글자 깨짐은 발생하지 않음.

## Decisions
- 결정: 출시 6개 앱(`edsn-frame`, `detective-recorder`, `veruma`, `notch-dice`, `peekaboo-cam`, `spark-catcher`)의 개정 법률 문서는 공고일 `2026년 11월 16일`, 시행일 `2026년 12월 17일`(30일 사전 공지)로 분리하고, 미출시 `mandarana`는 단일 제정·시행일(`2026년 11월 16일`) 및 전 경로 `noindex, nofollow`를 적용하며, 미출시 `stampho`는 `noindex, nofollow`를 유지한 채 보류함.
  이유: 기존 이용자에 대한 30일 사전 공지 요건(약관규제법·표준약관)을 준수하고 미출시 앱의 검색 노출 및 미확정 BM 혼선을 방지하기 위함.
- 결정: 고객지원 이메일(Gmail) 보유기간을 `/contact/`, `/support/` 및 전 앱 개인정보처리방침에서 전자상거래법상 소비자 불만·분쟁처리 보존 기준인 `문의 처리 완료 후 3년`으로 일원화하고, 글로벌 영문 지원 앱 전체에 EEA/EU 처리 근거·권리 고지를 추가함.
  이유: 1년 주기 수동 삭제 미이행에 따른 보유기간 도과 리스크를 줄이고 글로벌 스토어 배포 기준을 일관되게 맞추기 위함.
- 결정: 이용약관의 준거법·관할 조항은 대한민국 법을 준거법으로 하되 분쟁 관할은 `민사소송법`에 따른 관할법원으로 통일하고, 유료 서비스 손해배상은 `고의 또는 과실`(경과실은 통상손해·결제액 한도), 무료 기능은 `고의 또는 중대한 과실`로 분리함.
  이유: 전속관할(약관규제법 제14조) 및 유료 경과실 면책(약관규제법 제7조) 무효 소지를 제거하기 위함.

## Changes
- 8개 앱 법률 페이지 전면 개정 및 중립 진입 페이지 정비 (총 46개 기존 법률 파일 수정 + 노치 다이스 이용약관 3개 신규 생성):
  - 개인정보처리방침: 처리 항목(직접 수집 vs 기기·플랫폼 처리 구분), 보유·이용기간(고객지원 이메일 전자상거래법 기준 처리 완료 후 3년 일원화, 계약·결제 기록 등 법정 보존기간 병기), 파기 절차·방법, 처리위탁 및 국외 이전 표(Google LLC Gmail, Supabase Inc., Apple/Google 스토어·인증·광고 인프라 등 앱별 실제 연동 기준), 정보주체 및 법정대리인 권리·행사 방법, 안전성 확보조치, 개인정보 보호책임자(이나영 대표), 권익침해 구제기관(개인정보분쟁조정위원회 `1833-6972`, 개인정보침해신고센터 `118`, 대검찰청 `1301`, 경찰청 `182`), 개정 이력 반영
  - 이용약관(2차 상용 표준약관 고도화 포함): 공정위 디지털콘텐츠·모바일게임 표준약관 체계(제1조~제16/18조 번호식 항 구조)로 전면 개편하여 계약 성립, 약관 외 준칙, 7일/30일 사전 공지 및 부동의 미표시 시 동의 간주, 미성년자 결제 취소권 및 사술·처분허락 재산 예외 방어, 권리 양도 금지, 핵심 이용 흐름 요약(과도한 UI 명세·가상 향후 상품 서술 제거), 서비스 영구 종료 시 30일 전 공지, 비소모성 1회 구매 상품의 상용 운영 기간 범위 명확화(`평생 이용` 표현 대체), 유료 상품 유형별 청약철회(미사용 7일 vs 즉시 개시 제한)·환불·과오납금 처리 및 환불 악용 시 권한 회수, 불량이용자 단계적 제재 및 15일 이내 이의신청 절차, 이용자 귀책 손해배상·면책 및 8개 앱별 특수 위험 방어 조항 반영
  - 독립 리뷰 후속 확정 보정(3차):
    - 약관규제법 제7조(유료 경과실 배상·결제액 상한 및 무료 중과실 분리), 전자상거래법 제17조 제2·3·6항 및 제18조(3영업일 직접 환급·지연배상금·과오납금 원칙), 제한적 사용권 부여, 조항 독립성, 무서버 아키텍처 맞춤형 제재 수단 반영
    - 앱별 BM·운영 확정: 노치 다이스 유료+인앱결제 확정 및 서버 저장형 피드백 문구 제거, 탐정의 녹음기·까꿍캠 유료 앱 단독 모델 기준 미출시 인앱결제 가정 문구 전면 삭제, Spark Catcher `privacy` 내 StoreKit 결제 안내 보강, EDSN 유료 포토부스 영업 서면 라이선스 제한 및 자발적 탈퇴 전 환불 안내, 만다라나 개인 SNS/유튜브/블로그 게시 허용 및 `허용 앱` 전환 시 집중 이탈 판정 명시, Veruma·탐정의 녹음기 산출물 상업 활용 허용
    - 개인정보·노출 정책 일원화: 만 14세 이상 계정 연결·온라인 룸 이용 제한, 고객지원 이메일 보유기간 `문의 처리 완료 후 3년` 일원화(`/contact/`, `/support/` 포함), 영문 배포 앱 전체 EEA/EU 섹션 추가, `GitHub Actions`·`MetricKit`·`전송요구권` 등 내부 명세·과잉 약정 정리, 만다라나 8개 페이지 `noindex, nofollow` 추가, 법적 문서 한국어 푸터 `4층 419호` 통일
  - 최종 게시 전 독립 점검 및 영문 번역 대조 보정(4차):
    - 까꿍캠·탐정의 녹음기 언어 중립 진입 페이지(`/apps/peekaboo-cam/legal/...`, `/apps/detective-recorder/legal/...`)의 잔존 인앱결제·앱명 오타 제거 및 Veruma·만다라나·EDSN 개정 안내·`/support/`·`/contact/` 푸터 층수(`4층`/`4F`) 통일
    - EDSN Frame 한·영 개인정보처리방침 세부 표현 정합성(`게스트/로컬`, `이용권한`, 행사/매장 모드 `in principle`, 영문 날짜 표기, 국문 `aria-label`), 탐정의 녹음기·Veruma·노치 다이스 영문 조항 뉘앙스 및 만다라나 개인정보처리방침 내 Apple StoreKit 외부 플랫폼 고지 보완
- 앱 소개·지원 페이지 정합성 반영:
  - `ko/apps/detective-recorder/index.html`, `en/apps/detective-recorder/index.html`: 04번 단계에 기본 기기 내 저장 원칙과 사용자가 켠 경우의 iCloud 동기화 동작을 함께 서술하도록 수정
  - `apps/notch-dice/support/index.html`, `ko/apps/notch-dice/support/index.html`, `en/apps/notch-dice/support/index.html`: 신규 이용약관 링크 연결 및 푸터 보완
- 일반 페이지 및 사이트 전체 푸터 정비 (총 20개 비법률 HTML 파일 수정):
  - `contact/index.html`, `support/index.html`: 한·영 이메일 문의 개인정보 처리 기준 섹션 추가
  - 저장소 내 모든 한국어 푸터의 `개인정보관리책임자` -> `개인정보 보호책임자` 일괄 변경
  - 누락되어 있던 모든 영문/중립 페이지 푸터에 `Mail-order business report: 2026-Seoul-Yeongdeungpo-0975` 추가 및 주소·사업자번호 표기 통일
- 문서 갱신:
  - `docs/CHANGELOG.md` 변경 이력 추가 및 본 worklog 생성

## Verification
- 실행한 검증:
  - 저장소 내 전체 HTML 파일(기존 83개 + 신규 3개 = 총 86개) 전수 조회 및 수정 내용 직접 대조:
    - 한국어 페이지 내 `개인정보관리책임자` 잔존 여부: 0건 확인
    - 영문 사업자 정보 푸터 내 `2026-Seoul-Yeongdeungpo-0975` 누락 여부: 0건 확인
    - 신규 경로(`/apps/notch-dice/legal/terms/`, `/ko/apps/notch-dice/legal/terms/`, `/en/apps/notch-dice/legal/terms/`) 및 언어 전환·지원 페이지 상호 링크 일치 확인
    - `stampho`, `photo-download`, `auth/callback` 페이지의 `noindex, nofollow` 유지 확인
- 결과:
  - PARTIAL (HTML·문구·링크·법정 고지 전수 검증 PASS, 경량 서브셋 폰트 재생성만 모듈 미설치로 미실행)
- 미실행 항목:
  - `python3 scripts/optimize_assets.py`: 기본 시스템 `python3`에 `fontTools`가 없어 미실행(`ModuleNotFoundError`). `assets/site.css`에 전체 가변 폰트(`PretendardVariable.woff2`) fallback이 연결되어 있어 렌더링에는 영향이 없으며, 배포 전 `fontTools`, `brotli`, `Pillow`가 설치된 로컬 Python 환경에서 실행하면 경량 폰트(`PretendardSite.woff2`, `SongMyungSite.woff2`)까지 최신 글자 기준으로 갱신할 수 있음.

## Handoff / Next
- 현재 상태 요약:
  - 홈페이지 저장소 내 모든 이용약관·개인정보처리방침·문의 안내·푸터 표기 수정이 완료되었으며, Git 커밋·푸시는 수행하지 않은 로컬 작업 트리 상태임.
- 남은 이슈 / 리스크:
  - 각 앱(iOS/macOS/Android) 내부에 오프라인 사본으로 번들된 이용약관·개인정보처리방침 텍스트가 있는 경우(예: 만다라나, 탐정의 녹음기 등), 차기 앱 업데이트 시 이번 웹 기준본(출시 6개 앱 `2026-11-16` 공고 / `2026-12-17` 시행, 만다라나 `2026-11-16` 제정)과 문구를 동기화하는 것이 좋음.
  - 본 작업은 법령·지침 기준 문구 정비이며 변호사의 법률 자문을 대체하지 않으므로, 필요 시 최종 법률 검토를 권장함.
- 다음 세션 시작 TODO:
  1. (`선택`) `fontTools`, `brotli`, `Pillow`가 있는 Python 환경에서 `python3 scripts/optimize_assets.py` 실행
  2. 로컬 프리뷰로 주요 법률 페이지 및 `/contact/`, `/support/` 화면 확인 후 Git 커밋·배포

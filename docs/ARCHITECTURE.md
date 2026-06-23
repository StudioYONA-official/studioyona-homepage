# Architecture

## Current Structure

- 작업 기록은 작업별 `worklog` 파일로 남긴다.
- 실제 변경 이력은 `CHANGELOG.md`에 누적한다.
- 구조적 결정과 장기 규칙은 `ARCHITECTURE.md`에 유지한다.
- handoff는 별도 파일이 아니라 worklog의 `Handoff / Next` 섹션에 통합한다.

## Decisions

### 2026-04-05 - Documentation System Bootstrapped For Homepage Project

- Context:
  - `Studio YONA HomePage` 워크스페이스는 실질적인 문서 체계 없이 빈 디렉터리 상태로 시작했다.
  - 이후 Codex 기반 작업을 지속하려면 문서 읽기 순서와 기록 방식이 먼저 필요했다.
- Decision:
  - `project-initial-setup` 기준으로 최소 문서 세트를 먼저 만든다.
  - 기본 읽기 순서는 `README -> DOCS_RULES -> latest worklog -> CHANGELOG -> ARCHITECTURE`로 둔다.
- Consequences:
  - 장점:
    - 다음 세션에서도 같은 기준으로 빠르게 재진입할 수 있다.
    - 초기 구현 전에 기획/결정/변경 이력이 분산되지 않는다.
  - 단점:
    - 초기 문서 작업이 구현보다 먼저 생기므로 첫 커밋이 문서 중심이 된다.

### 2026-04-05 - Homepage MVP Will Start As A Buildless Static Site

- Context:
  - 사용자는 비용 최소화, 쉬운 유지보수, GitHub 업로드 기반 배포, 보안 이슈 최소화를 원한다.
  - 현재 운영 인력은 비개발자 2명이고, 고객 문의는 이메일 링크만으로 충분하다.
- Decision:
  - MVP는 GitHub Pages에 배포하는 `buildless static site`로 시작한다.
  - 구조는 한국어/영어 분리, 다앱 확장, 앱별 법률 페이지 연결을 전제로 설계한다.
  - 동적 폼, 관리자 페이지, DB, 외부 분석 스크립트는 초기 범위에서 제외한다.
- Consequences:
  - 장점:
    - 비용이 거의 없고 보안 표면이 작다.
    - HTML/CSS/JS만으로 배포할 수 있어 운영이 단순하다.
    - App Store 심사 대응에 필요한 URL 세트를 빠르게 확보할 수 있다.
  - 단점:
    - 콘텐츠 업데이트 자동화나 비개발자용 CMS는 제공되지 않는다.
    - 페이지 수가 늘어나면 정적 구조 관리 규칙이 더 중요해진다.

### 2026-04-05 - Legal URLs Are App-Scoped And Canonical Domain Is WWW

- Context:
  - MVP 기획안 리뷰에서 다앱 구조인데도 법률 문서 URL이 공용 경로만 있는 점, `www`/apex/언어 진입 규칙이 불명확한 점, Gmail 기반 문의 처리의 제3자 경로 고지가 빠진 점이 확인됐다.
- Decision:
  - 앱스토어 제출용 개인정보처리방침/이용약관은 앱별 경로(`/apps/<slug>/legal/...`)를 사용한다.
  - canonical 도메인은 `https://www.studioyona.co.kr`로 고정하고, apex는 `www` 기준으로 정리한다.
  - 지원 이메일을 통한 문의 데이터는 제3자 메일 인프라를 통과할 수 있음을 정책 문서에 명시한다.
- Consequences:
  - 장점:
    - 앱이 늘어나도 각 앱의 법률 문서와 App Store 메타데이터 연결이 명확해진다.
    - 배포와 내부 링크, canonical 설정이 한 기준으로 정리된다.
    - 실제 처리 경로를 숨기지 않아 개인정보처리방침의 정확도가 올라간다.
  - 단점:
    - 초기 MVP에서도 공용 페이지와 앱별 문서를 함께 관리해야 하므로 파일 구조가 약간 더 깊어진다.

### 2026-04-05 - App Store Legal Entry Uses Neutral App Routes

- Context:
  - 리뷰에서 App Store 제출용 법률 URL이 `/ko/`와 `/en/`에만 있으면 제출 기준 URL이 흔들릴 수 있다는 점이 확인됐다.
- Decision:
  - App Store 제출용 기본 정책 URL은 `/apps/<slug>/legal/privacy/`, `/apps/<slug>/legal/terms/` 같은 neutral 앱 경로를 사용한다.
  - 언어별 전문 문서는 계속 `/ko/...`, `/en/...`에 두고 neutral 경로는 언어 선택/진입용으로 사용한다.
- Consequences:
  - 장점:
    - App Store 메타데이터에 넣을 단일 안정 URL을 확보할 수 있다.
    - 앱이 늘어나도 정책 URL 규칙을 일관되게 유지할 수 있다.
  - 단점:
    - neutral entry와 locale 문서를 함께 관리해야 한다.

### 2026-04-05 - General Pages Use Korean-First Root Routes With In-Page English Toggle

- Context:
  - 일반 페이지까지 `/ko/...`, `/en/...`를 완전히 분리하면 작은 정적 사이트에서 중복 관리가 커진다.
  - 리뷰에서는 `/`가 한국어 우선 홈인지, neutral landing인지 실제 구현과 문서가 어긋나 있다는 점이 드러났다.
- Decision:
  - 홈, 회사 소개, 앱 목록, 고객지원, 문의하기 같은 일반 페이지는 루트 경로(`/`, `/about/`, `/apps/`, `/support/`, `/contact/`)에 한국어 우선으로 둔다.
  - 영어는 같은 경로에서 `?lang=en` query parameter와 공통 스크립트로 전환한다.
  - 기존 `/ko/...`, `/en/...` 일반 페이지 경로는 외부 링크 호환을 위한 래퍼로 유지한다.
  - 앱 상세와 법률 페이지는 계속 `/ko/...`, `/en/...` 직접 경로를 사용한다.
- Consequences:
  - 장점:
    - 일반 페이지 유지보수 포인트를 줄일 수 있다.
    - `/`의 언어 의미가 한국어 우선 홈으로 명확해진다.
    - 일반 페이지와 앱/법률 페이지의 URL 전략을 목적에 맞게 나눌 수 있다.
  - 단점:
    - 영어 일반 페이지는 query parameter에 의존하므로 URL 체계가 완전한 locale path 분리보다 덜 직관적일 수 있다.
    - canonical과 language toggle 동작은 배포 후 브라우저 기준 재확인이 필요하다.

### 2026-04-06 - Home Is A One-Page Landing While Detail And Legal Pages Stay Separate

- Context:
  - 사용자는 레퍼런스 사이트처럼 상단 메뉴 노출이 거의 없는 미니멀한 첫인상, 햄버거 오버레이 메뉴, 긴 스크롤 안에서 이어지는 정보 배치를 원했다.
  - 동시에 기존 앱 상세 페이지와 앱별 법률 URL은 App Store 대응과 직접 링크를 위해 계속 유지해야 했다.
- Decision:
  - 루트 홈(`/`)은 원페이지 랜딩으로 재구성하고, `#home`, `#about`, `#apps`, `#support`, `#contact` 섹션 앵커로 탐색한다.
  - 상단에는 작은 언어 전환과 햄버거 버튼만 둔다.
  - 홈 안에서는 브랜드 소개, 앱 요약, 고객지원, 문의하기를 감성적인 카피 중심으로 압축해 보여 주고, 상세 정보는 기존 앱/법률 페이지 링크로 이어 준다.
- Consequences:
  - 장점:
    - 첫 인상이 더 정제되고 레퍼런스 무드에 가까워진다.
    - 앱 정보와 회사 소개를 하나의 서사 흐름으로 배치할 수 있다.
    - 기존 상세/법률 URL을 깨지 않고도 홈만 강하게 리디자인할 수 있다.
  - 단점:
    - 홈과 나머지 일반 페이지의 밀도 차이가 생길 수 있어 후속 정리가 필요할 수 있다.
    - 오버레이 메뉴와 반응형 줄바꿈은 실제 브라우저에서 시각 검수가 중요하다.

### 2026-04-06 - Visual Refinement Backlog Is Part Of The Main MVP Plan

- Context:
  - 홈 원페이지 방향은 구현되었지만, 수동 QA에서 오버레이 메뉴 타이포 크기, 헤더 겹침, Safari 가로 스크롤, 핵심 카피 줄바꿈, 상세 페이지의 구식 상단 카테고리 노출 같은 세부 문제가 확인됐다.
  - 이 이슈들은 단순 버그 목록이 아니라, 홈과 일반/상세 페이지의 브랜드 경험을 얼마나 일관되게 가져갈지에 관한 구조적 판단을 포함한다.
- Decision:
  - 이 시각 refinement 항목들은 별도 임시 메모가 아니라 메인 MVP 기획안의 backlog와 완료 조건에 포함한다.
  - 홈만 미니멀한 경험으로 두고 나머지 페이지를 예전식 상단 카테고리 내비게이션으로 방치하지 않으며, 일반/상세 페이지도 축약형 헤더 계열로 수렴시키는 방향을 기본값으로 둔다.
  - 홈 우측의 추상 비주얼은 실제 제품 기능 설명이 아니라 브랜드 무드 전달용 장식이라는 해석 원칙을 문서에 남기고, 혼란을 주면 강도를 낮출 수 있게 한다.
- Consequences:
  - 장점:
    - 구현자가 다음 턴에서 무엇을 “남은 핵심 수정”으로 봐야 하는지 문서만 읽고도 바로 이해할 수 있다.
    - 홈과 상세 페이지의 톤 차이가 커지는 것을 줄일 수 있다.
  - 단점:
    - MVP가 완전히 끝난 것처럼 보이더라도, 시각 refinement 완료 전까지는 추가 작업이 남았다는 사실을 계속 관리해야 한다.

### 2026-04-06 - General And App Detail Pages Converge On The Compact Header Pattern

- Context:
  - 홈은 이미 작은 언어 전환과 햄버거 메뉴를 가진 미니멀 헤더로 바뀌었지만, 일반 페이지와 앱 상세 페이지는 예전식 상단 카테고리 내비게이션을 그대로 사용하고 있었다.
  - 사용자는 홈에서 앱 상세나 고객지원으로 들어갔을 때도 같은 브랜드 경험이 이어지길 원했다.
- Decision:
  - `about`, `apps`, `support`, `contact`와 앱 상세 페이지는 모두 `작은 브랜드 + 언어 전환 + 햄버거` 기반의 축약형 헤더 패턴으로 수렴시킨다.
  - 상단의 전체 카테고리 나열은 없애고, 이동은 오버레이 메뉴 안에서 처리한다.
  - 법률 페이지는 필요 시 별도 후속 정리 대상으로 남긴다.
- Consequences:
  - 장점:
    - 홈과 서브 페이지 사이의 분위기 단절이 줄어든다.
    - 좁은 화면에서도 상단이 훨씬 단정해진다.
  - 단점:
    - 기존 상단 내비게이션에 바로 노출되던 법률 링크는 상세 본문/푸터 링크에 더 의존하게 된다.

### 2026-06-23 - Android OAuth Callback Uses Static Web Bridge As Fallback

- Context:
  - EDSN Frame Android browser OAuth can return to the website callback URL
    when Android App Link delegation fails on a user device.
  - The callback URL may include one-time OAuth `code`, `oauth_state`, or
    fragment parameters, so it must not load analytics or third-party scripts
    that could receive referrer or URL data.
- Decision:
  - `/apps/edsn-frame/auth/callback/` is the canonical buildless static bridge
    page.
  - `/auth/callback/`, `/ko/apps/edsn-frame/auth/callback/`, and
    `/en/apps/edsn-frame/auth/callback/` mirror the same bridge so Supabase
    Site URL or locale-scoped fallback redirects do not expose the public 404
    page.
  - It reads only the current page query/fragment in the browser and forwards
    it to `edsnframe://oauth/`.
  - The page keeps a manual "앱으로 돌아가기" link for cases where automatic
    custom-scheme opening is blocked.
- Consequences:
  - 장점:
    - 기존 HTTPS App Link OAuth redirects can still recover even when Android
      does not delegate the URL to the app.
    - The bridge remains compatible with GitHub Pages and does not introduce a
      backend or secret handling.
  - 단점:
    - Browser custom-scheme opening can still require user interaction on some
      devices, so the Android app should continue using the custom scheme as
      the primary OAuth redirect target.

## Open Decisions / Pending Issues

### 2026-04-14 - Deployment Model Must Be Revisited Before Adding Admin Features

- Current state:
  - 홈페이지는 `GitHub Pages + public repository + static files` 조합으로 무료 배포 중이다.
  - 현재 구조는 정적 콘텐츠, 이메일 문의, 앱 소개/법률 링크 중심이라 보안 표면이 작다.
- Open issue:
  - 향후 관리자 기능, 인증, 업로드, API 연동, 비밀키 사용이 필요한 기능이 들어오면 현재 public static deployment는 더 이상 적합하지 않을 수 있다.
- Decision pending:
  - 계속 무료 정적 배포를 유지할지
  - 관리 기능 도입 시 별도 백엔드/호스팅으로 분리할지
  - GitHub Pages 이외의 배포 방식 또는 유료 플랜으로 전환할지
- Follow-up trigger:
  - 관리자 페이지, 로그인, 파일 업로드, 데이터 저장, 외부 API 비밀값이 필요한 기능이 요구되는 시점

### 2026-04-15 - Future Admin Features Should Prefer Serverless Separation Before Full Platform Migration

- Context:
  - 사용자는 향후 관리자 기능이 생길 때도 가능한 한 무료 운영을 유지할 수 있는지, 그리고 GitHub Pages처럼 코드 노출을 피할 수 있는지 미리 판단하고 싶어 한다.
  - 현재 공개 홈페이지는 정적 HTML/CSS/JS 중심이라 GitHub Pages에 잘 맞지만, 관리자 기능은 인증, 비밀키, 데이터 저장, 업로드, API 보호가 필요한 성격일 수 있다.
- Decision:
  - 단기 기본값은 `GitHub Pages + 정적 공개 사이트`를 유지한다.
  - 관리자 기능이 필요해지면 1차 선택지는 `정적 공개 사이트는 그대로 두고 관리자/API만 별도 서버리스로 분리`한다.
  - 관리자 기능의 복잡도가 커지거나, 사이트 전체가 인증/데이터/동적 렌더링에 의존하게 되면 그 시점에 `Vercel` 또는 `Cloudflare` 같은 함수 포함 플랫폼으로 전체 이전을 검토한다.
  - 어떤 플랫폼이든 브라우저에 내려가는 프론트엔드 코드는 사용자에게 노출된다는 점을 기본 전제로 두고, 보안이 필요한 로직은 브라우저가 아닌 서버/서버리스로 보낸다.
- Consequences:
  - 장점:
    - 현재 비용 0원 운영을 유지하면서도, 미래 관리자 기능을 위한 확장 경로가 생긴다.
    - 관리자 로직과 비밀값을 브라우저 코드에서 분리할 수 있다.
    - 사이트 전체를 즉시 이전하지 않고도 관리자/API만 단계적으로 붙일 수 있다.
  - 단점:
    - 배포 지점이 `GitHub Pages + 별도 서버리스`의 2계층 구조가 되므로 운영 문서와 환경변수 관리가 필요해진다.
    - 무료 한도는 플랫폼별 요청 수/실행 시간/대역폭 제한을 받으므로, 기능이 커지면 유료 전환 가능성을 열어둬야 한다.

### 2026-04-14 - GitHub Desktop Push Failure Resolved By Repository Name Fix

- Current state:
  - 로컬 Git 저장소 커밋은 정상 동작한다.
  - GitHub 웹 업로드를 통해 `studioyona/studioyona-homepage` 저장소와 GitHub Pages 배포는 성공했다.
  - 그러나 GitHub Desktop에서는 `Publish branch` / `Push origin` 시 `The repository does not seem to exist anymore` 오류가 계속 발생했다.
- Latest finding:
  - GitHub Support 티켓 `#4284249` 답변으로 원인이 확인됐다.
  - 실제 저장소명은 `studioyona-hompage`였고, 기존 local/desktop remote는 `studioyona-homepage`를 가리키는 오타 상태였다.
  - SSH remote를 `git@github-studioyona:studioyona/studioyona-hompage.git`로 수정한 뒤 `git fetch origin`이 정상 동작했다.
- Resolution:
  - 이번 이슈의 근본 원인은 GitHub Desktop 자체 버그보다 저장소 이름 오타였다.
  - HTTPS/OAuth/SSH 문제로 보였던 증상은 모두 잘못된 저장소 경로를 바라보면서 발생한 2차 증상이었고, SSH 전용 계정 분리와 remote 교정으로 원인을 재현/확인했다.
- Completion:
  - GitHub 웹에서 저장소명을 `studioyona-homepage`로 rename했다.
  - local `origin`도 `git@github-studioyona:studioyona/studioyona-homepage.git`로 재설정했다.
  - 이후 `git fetch origin`, `git push origin main`, GitHub Desktop `Fetch origin`이 모두 정상 동작했다.

# Deployment

## Goal

- `Studio YONA HomePage`를 `GitHub Pages`로 배포한다.
- canonical 도메인은 `https://www.studioyona.co.kr`를 사용한다.
- MVP 기준으로 빌드 없는 정적 사이트를 그대로 배포한다.

## Current Live State

- 공개 URL: `https://www.studioyona.co.kr`
- GitHub Pages source: `main` branch `/ (root)`
- Custom domain: `www.studioyona.co.kr`
- DNS:
  - `CNAME | www | studioyona.github.io`
  - `A | @ | 185.199.108.153`
  - `A | @ | 185.199.109.153`
  - `A | @ | 185.199.110.153`
  - `A | @ | 185.199.111.153`
- HTTPS: 활성화 및 적용 확인
- 브라우저 확인: Safari에서 실접속 확인 완료

## Deployment Target

- Hosting: `GitHub Pages`
- Domain:
  - canonical: `www.studioyona.co.kr`
  - apex: `studioyona.co.kr`
- Source type: branch publishing

## Repository Assumptions

- 저장소 이름 추천: `studioyona-homepage`
- 정적 파일은 저장소 루트에 위치한다.
- GitHub Pages source는 `main` branch `/ (root)`를 기준으로 설정한다.
- 개인 계정 저장소 기준 `www` CNAME 대상은 `<github-username>.github.io` 형식이다.

## Required Files

- `index.html`
- `about/`
- `apps/`
- `support/`
- `contact/`
- `404.html`
- `.nojekyll`
- `CNAME`
- `assets/`
- `ko/`
- `en/`

## Recommended GitHub Pages Setup

완료 조건:

- GitHub 저장소에 현재 정적 파일 세트가 업로드되어 있다.
- `Settings > Pages`에서 `Deploy from a branch`와 `main` / `/ (root)`가 저장되어 있다.
- Custom domain에 `www.studioyona.co.kr`가 설정되어 있다.
- 배포 후 `https://www.studioyona.co.kr/`가 열리고 HTTPS가 활성화된다.

1. GitHub에서 저장소를 생성한다.
2. 현재 워크스페이스 파일을 저장소 루트에 업로드한다.
3. 저장소 `Settings > Pages`에서 source를 `Deploy from a branch`로 선택한다.
4. branch는 `main`, folder는 `/ (root)`로 설정한다.
5. Custom domain에 `www.studioyona.co.kr`를 입력한다.
6. HTTPS 강제 옵션이 가능해지면 활성화한다.

참고:

- GitHub는 빌드 제어가 필요 없으면 branch publishing을 권장한다.
- branch publishing을 사용할 때 custom domain을 설정하면 GitHub가 source branch 루트에 `CNAME` 파일을 반영할 수 있다.
- 현재 저장소는 Pages 사용을 위해 `public` 상태로 운영 중이다.

## DNS Checklist

### `www`

- `www`는 `CNAME`으로 GitHub Pages 기본 도메인에 직접 연결한다.
- 개인 계정 저장소라면 일반적으로 `<github-username>.github.io`를 사용한다.
- repository name은 넣지 않는다.

예시:

```text
Type: CNAME
Name: www
Value: <github-username>.github.io
```

`summerjelly` 기준 예시:

```text
Type: CNAME
Name: www
Value: summerjelly.github.io
```

### apex

- `studioyona.co.kr`는 `www` canonical 기준으로 함께 연결하거나 리디렉션한다.
- 최종 연결 방식은 도메인 등록기관에서 지원하는 redirect/ALIAS/ANAME/CNAME flattening 여부에 따라 선택한다.
- 이 단계는 GitHub 저장소 업로드만으로 끝나지 않으며, DNS 제공자 설정이 완료되어야 최종 완료다.

권장안:

- DNS 제공자가 `ALIAS` 또는 `ANAME`을 지원하면 `@ -> <github-username>.github.io`
- 그런 기능이 없으면 GitHub Pages A 레코드 사용

GitHub Pages A 레코드:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

GitHub는 apex와 함께 `www`를 같이 설정하는 것을 권장한다. 두 도메인 타입의 레코드가 올바르게 구성되면 GitHub Pages가 도메인 간 리디렉션을 자동 정리할 수 있다.

### Optional: verified domain

- 보안상 가능하면 GitHub Pages의 `Verified domains`도 설정한다.
- GitHub 안내에 따라 DNS TXT 레코드를 추가하고, 검증 후에도 TXT 레코드는 유지한다.

## URL Rules

- canonical 기준 URL은 `https://www.studioyona.co.kr`
- App Store 제출 URL도 canonical 기준으로 사용
- App Store 제출용 기본 법률 URL은 locale-neutral 경로를 사용
  - `https://www.studioyona.co.kr/apps/edsn-frame/legal/privacy/`
  - `https://www.studioyona.co.kr/apps/edsn-frame/legal/terms/`
  - `https://www.studioyona.co.kr/apps/detective-recorder/legal/privacy/`
  - `https://www.studioyona.co.kr/apps/detective-recorder/legal/terms/`
  - `https://www.studioyona.co.kr/apps/peekaboo-cam/legal/privacy/`
  - `https://www.studioyona.co.kr/apps/peekaboo-cam/legal/terms/`
- 언어별 정책 문서는 다음 패턴 사용
  - `https://www.studioyona.co.kr/ko/apps/edsn-frame/legal/privacy/`
  - `https://www.studioyona.co.kr/ko/apps/edsn-frame/legal/terms/`
  - `https://www.studioyona.co.kr/en/apps/edsn-frame/legal/privacy/`
  - `https://www.studioyona.co.kr/en/apps/edsn-frame/legal/terms/`
  - `https://www.studioyona.co.kr/ko/apps/detective-recorder/legal/privacy/`
  - `https://www.studioyona.co.kr/ko/apps/detective-recorder/legal/terms/`
  - `https://www.studioyona.co.kr/en/apps/detective-recorder/legal/privacy/`
  - `https://www.studioyona.co.kr/en/apps/detective-recorder/legal/terms/`

## Local Verification Before Upload

```bash
zsh scripts/local-preview.command
```

확인 항목:

- `/`
- `/about/`
- `/apps/`
- `/support/`
- `/contact/`
- `/?lang=en`
- `/about/?lang=en`
- `/ko/apps/edsn-frame/`
- `/en/apps/edsn-frame/`
- `/ko/apps/detective-recorder/`
- `/en/apps/detective-recorder/`
- 앱별 개인정보처리방침 / 이용약관
- 지원 / 문의 링크

권장 확인 명령:

```bash
curl -I http://127.0.0.1:8123/
curl -I 'http://127.0.0.1:8123/?lang=en'
curl -I http://127.0.0.1:8123/ko/apps/edsn-frame/
curl -I http://127.0.0.1:8123/en/apps/edsn-frame/legal/privacy/
curl -I http://127.0.0.1:8123/ko/apps/detective-recorder/
curl -I http://127.0.0.1:8123/en/apps/detective-recorder/legal/privacy/
```

## Post-Deploy Verification

- 브라우저에서 `www` 도메인 접속 확인
- `studioyona.co.kr` 접속 시 canonical 정리 여부 확인
- 홈/회사 소개/앱 소개/지원/문의 일반 페이지에서 영어 토글 확인
- neutral 법률 URL에서 한국어/영어 정책 진입 확인
- 한국어/영어 페이지 전환 확인
- 앱 상세와 정책 문서 링크 확인
- 메일 링크 동작 확인
- GitHub Pages HTTPS 활성화 확인

권장 확인 순서:

1. `https://www.studioyona.co.kr/`
2. `https://www.studioyona.co.kr/?lang=en`
3. `https://www.studioyona.co.kr/apps/edsn-frame/legal/privacy/`
4. `https://www.studioyona.co.kr/apps/edsn-frame/legal/terms/`
5. `https://studioyona.co.kr/`가 `www` 기준으로 정리되는지 확인

현재 확인 완료 항목:

- `https://www.studioyona.co.kr/`
- `https://www.studioyona.co.kr/?lang=en`
- `https://www.studioyona.co.kr/apps/edsn-frame/legal/privacy/`
- `https://www.studioyona.co.kr/apps/edsn-frame/legal/terms/`
- `https://www.studioyona.co.kr/apps/detective-recorder/legal/privacy/`
- `https://www.studioyona.co.kr/apps/detective-recorder/legal/terms/`
- `Enforce HTTPS` 활성화

## Ongoing Operating Procedure

현재 기준 권장 운영 흐름:

1. 로컬에서 수정
2. Safari 로컬 미리보기로 확인
3. 문서(`CHANGELOG`, 필요 시 `ARCHITECTURE`, worklog) 업데이트
4. 로컬 Git 커밋
5. 기본 수정 반영은 GitHub Desktop 또는 CLI push로 진행하고, 긴급 상황에서만 GitHub 웹 업로드를 보조 수단으로 사용
6. 공개 사이트에서 최종 링크/도메인 확인

주의:

- Pages 운영을 유지하려면 저장소를 다시 `private`로 바꾸지 않는다.
- 관리자 기능, 인증, 업로드, 비밀키가 필요한 기능이 생기면 현재 GitHub Pages public 구조를 다시 평가한다.

## Quick Start Checklist

1. GitHub 저장소 생성
2. 현재 파일 전체 업로드
3. `Settings > Pages`에서 `Deploy from a branch` + `main` + `/ (root)` 저장
4. `Custom domain`에 `www.studioyona.co.kr` 입력
5. DNS에서 `www CNAME -> <github-username>.github.io` 설정
6. DNS에서 apex를 `ALIAS/ANAME` 또는 GitHub Pages A 레코드로 설정
7. 가능하면 `Verified domains`용 TXT 레코드 추가
8. 배포 후 HTTPS 활성화
9. `www`, apex, 영어 토글, App Store 법률 URL 최종 확인

## Hosting.kr Click Guide

전제:

- 이 가이드는 `호스팅케이알`에서 DNS를 직접 관리하는 경우 기준이다.
- 만약 다른 네임서버를 쓰고 있다면 해당 네임서버 업체에서 같은 레코드를 설정해야 한다.

### GitHub에서 먼저 할 일

1. GitHub에 `studioyona-homepage` 저장소를 만든다.
2. 현재 파일 전체를 업로드한다.
3. `Settings > Pages`로 이동한다.
4. `Deploy from a branch`를 선택한다.
5. `main` + `/ (root)`를 선택하고 저장한다.
6. `Custom domain`에 `www.studioyona.co.kr`를 입력한다.
7. 대상 도메인은 `summerjelly.github.io`를 기준으로 본다.

### Hosting.kr에서 `www` CNAME 넣는 순서

1. 호스팅케이알 로그인
2. `나의 서비스` 또는 `도메인 관리`로 이동
3. `studioyona.co.kr` 클릭
4. `네임서버 / DNS` 탭 클릭
5. `DNS 레코드 관리`에서 `새 DNS 레코드 추가` 클릭
6. 아래 값으로 입력 후 저장

```text
유형: CNAME
호스트 이름: www
값: summerjelly.github.io
```

주의:

- 호스트 이름에는 전체 도메인이 아니라 `www`만 입력한다.
- 호스팅케이알 가이드상 일반 CNAME에는 `@`나 공란을 넣을 수 없다.

### Hosting.kr에서 apex(`studioyona.co.kr`) 넣는 순서

권장 1안:

- `네임서버 / DNS` 탭에서 네임서버가 `호스팅케이알 Cloud`인지 확인한다.
- Cloud 네임서버라면 `새 DNS 레코드 추가`에서 `CNAME(Alias)`를 선택한다.
- 값에 `summerjelly.github.io`를 넣고 저장한다.

```text
유형: CNAME(Alias)
호스트 이름: @ 또는 공란(화면 정책 기준)
값: summerjelly.github.io
```

권장 2안:

- CNAME(Alias)를 쓸 수 없으면 A 레코드 4개를 각각 추가한다.

```text
유형: A
호스트 이름: @ 또는 공란(화면 정책 기준)
값: 185.199.108.153

유형: A
호스트 이름: @ 또는 공란(화면 정책 기준)
값: 185.199.109.153

유형: A
호스트 이름: @ 또는 공란(화면 정책 기준)
값: 185.199.110.153

유형: A
호스트 이름: @ 또는 공란(화면 정책 기준)
값: 185.199.111.153
```

### Hosting.kr에서 확인할 것

- `www` CNAME이 `summerjelly.github.io`로 저장되었는지
- apex가 `CNAME(Alias)` 또는 A 레코드 4개로 들어갔는지
- 적용에는 최대 24~48시간 정도 걸릴 수 있는지

### 배포 직후 최종 점검

1. `https://www.studioyona.co.kr/`
2. `https://www.studioyona.co.kr/?lang=en`
3. `https://www.studioyona.co.kr/apps/edsn-frame/legal/privacy/`
4. `https://www.studioyona.co.kr/apps/edsn-frame/legal/terms/`
5. `https://studioyona.co.kr/` 접속 시 `www` 기준으로 정리되는지
6. GitHub Pages에서 `Enforce HTTPS`가 활성화되는지

## Notes

- MVP는 정적 파일만 사용하므로 별도 서버 운영은 필요 없다.
- DNS 설정 화면 이름은 등록기관마다 다를 수 있다.
- `www` CNAME은 `<github-username>.github.io`를 직접 가리켜야 하며 repository 경로를 붙이면 안 된다.

# Veruma Privacy Policy Deployment

Date: 2026-08-07

## Goal

차기 Veruma 앱의 Photos 읽기 전용 열람과 사용자 선택형 진단 동작에 맞춘 한·영 개인정보처리방침을
기존 GitHub Pages production 경로에 게시한다.

## Scope

- `ko/apps/veruma/legal/privacy/index.html`
- `en/apps/veruma/legal/privacy/index.html`
- 관련 `docs/CHANGELOG.md`
- 기존 `main` branch `/ (root)` GitHub Pages 배포 계약 유지

관련 없는 로컬 `.github/` 변경은 배포 커밋에서 제외한다.

## Changes

- 시행일과 개정 이력을 2026-08-07로 갱신했다.
- 촬영본 저장용 Photos 추가 권한과 기기 사진 드로워의 읽기 권한을 분리해 고지했다.
- 전체 또는 제한 접근으로 허용된 사진만 기기에서 읽기 전용으로 표시하고 서버로 전송하지 않는다고 명시했다.
- 개수 제한과 민감정보 마스킹이 적용된 로컬 진단, 사용자가 직접 선택한 피드백 첨부와 내보내기를 반영했다.
- 마이크 오디오와 Photos/iCloud 처리 경계를 실제 앱 동작에 맞췄다.

## Verification

- 배포 전 `git diff --check` 통과.
- 로컬 no-cache HTTP 미리보기에서 한·영 URL 모두 `200 OK`와 `Cache-Control: no-store` 확인.
- 한·영 페이지에서 2026-08-07 시행일, Photos 읽기 전용 열람, 로컬 진단 필수 문구 확인.
- 배포 커밋 `faa92ad`를 `origin/main`에 push했다.
- GitHub Pages `pages-build-deployment` run `31129250750`이 `success`로 완료됐다.
- 공개 한·영 URL 모두 `HTTP/2 200`을 반환하고, 2026-08-07 시행일과 Photos 읽기 전용 열람·로컬 진단
  필수 문구가 실제 응답 본문에 포함된 것을 cache-busting 요청으로 재확인했다.

## Handoff / Next

- production 배포와 공개 재조회가 완료됐다. 이후 앱 동작이나 진단 내보내기 항목이 바뀌면 앱 내 방침,
  Homepage 한·영 원문, ASC 개인정보 답변을 같은 릴리즈 경계에서 다시 맞춘다.

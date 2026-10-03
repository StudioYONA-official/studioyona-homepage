// Set this only to the verified Notch Dice listing after its App Store release.
export const appStoreURL = null;

export function validatedAppStoreURL(value) {
  if (value === null) return null;
  const url = new URL(value);
  if (url.protocol !== "https:" || url.hostname !== "apps.apple.com"
      || url.username || url.password || url.port || url.search || url.hash
      || !/^\/(?:[a-z]{2}\/)?app\/(?:[^/]+\/)?id[1-9][0-9]*\/?$/.test(url.pathname)) {
    throw new Error("A direct, verified App Store listing URL is required.");
  }
  return url.href;
}

// Checks only the canonical envelope, without decoding the game. The native app
// remains responsible for packet size, signature, participant and history checks.
export function hasGameFragment(hash) {
  const prefixLength = "https://www.studioyona.co.kr/apps/notch-dice/play/".length;
  if (typeof hash !== "string" || hash.length + prefixLength > 4096 || !hash.startsWith("#v1=")) return false;
  const payload = hash.slice(4);
  if (!payload || /[^A-Za-z0-9_-]/.test(payload)) return false;
  const remainder = payload.length % 4;
  const last = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".indexOf(payload.at(-1));
  return remainder !== 1
    && (remainder !== 2 || last % 16 === 0)
    && (remainder !== 3 || last % 4 === 0);
}

export function appURLForFragment(hash) {
  return hasGameFragment(hash) ? "notchdice://play/" + hash : null;
}

// Presentation only; this does not detect whether the app is installed.
// iPadOS can report MacIntel when requesting desktop websites.
export function isMacPlatform(platform, maxTouchPoints = 0) {
  return /^Mac/.test(platform) && maxTouchPoints <= 1;
}

const copy = {
  ko: {
    platform: "Mac용 메시지 대전",
    title: "메시지에서 게임을 이어가세요",
    ready: "받은 초대와 턴, 경기 결과를 Notch Dice에서 확인하세요.",
    openGame: "Notch Dice에서 열기",
    openRequested: "브라우저에서 앱 열기를 허용해 주세요. 앱이 열리지 않으면 Notch Dice를 한 번 실행한 뒤 다시 눌러 주세요.",
    missingLink: "메시지에서 받은 경기 링크를 열어 주세요.",
    invalidLink: "경기 링크를 확인할 수 없습니다. 메시지에서 링크를 다시 열어 주세요. 계속 열리지 않으면 상대에게 다시 보내 달라고 요청해 주세요.",
    unsupported: "Notch Dice는 현재 Mac에서 플레이할 수 있습니다. Mac의 메시지에서 이 링크를 열어 주세요.",
    installationTitle: "Notch Dice가 없으신가요?",
    unreleased: "Notch Dice는 App Store 출시를 준비하고 있습니다.",
    available: "아래에서 Mac용 앱을 설치하실 수 있습니다.",
    unavailable: "현재 설치 링크를 열 수 없습니다. 잠시 후 다시 시도해 주세요.",
    download: "App Store에서 설치",
    afterInstall: "설치 후에는 메시지로 돌아가 처음 받은 초대 링크를 다시 열어 주세요."
  },
  en: {
    platform: "Messages games for Mac",
    title: "Continue your game from Messages",
    ready: "Open your invitation, turn or result in Notch Dice.",
    openGame: "Open in Notch Dice",
    openRequested: "Allow your browser to open the app. If it does not open, launch Notch Dice once, then try this button again.",
    missingLink: "Open the game link you received in Messages.",
    invalidLink: "This game link could not be read. Open it again from Messages. If it still does not work, ask your opponent to send it again.",
    unsupported: "Notch Dice is currently available for Mac. Open this link in Messages on your Mac.",
    installationTitle: "Need Notch Dice?",
    unreleased: "Notch Dice is preparing for its App Store release.",
    available: "Install the Mac app using the link below.",
    unavailable: "The installation link is currently unavailable. Please try again later.",
    download: "Install from the App Store",
    afterInstall: "After installation, return to Messages and open the original invitation to join."
  }
};

if (typeof document !== "undefined") {
  let language = navigator.language.startsWith("ko") ? "ko" : "en";
  const supported = isMacPlatform(navigator.platform, navigator.maxTouchPoints);
  let openRequested = false;
  let destination = null;
  let installationState = "unreleased";
  try {
    destination = validatedAppStoreURL(appStoreURL);
    if (destination) installationState = "available";
  } catch {
    installationState = "unavailable";
  }

  const languageButton = document.getElementById("language");
  const openGame = document.getElementById("open-game");
  const download = document.getElementById("download");
  document.getElementById("installation").hidden = !supported;
  if (supported && destination) {
    download.href = destination;
    download.hidden = false;
  }
  function render() {
    const appURL = appURLForFragment(location.hash);
    const state = !supported ? "unsupported"
      : !location.hash ? "missingLink"
      : !appURL ? "invalidLink"
      : openRequested ? "openRequested" : "ready";
    openGame.hidden = !supported || !appURL;
    if (!openGame.hidden) openGame.href = appURL;
    else openGame.removeAttribute("href");
    document.documentElement.lang = language;
    for (const element of document.querySelectorAll("[data-copy]")) {
      element.textContent = copy[language][element.dataset.copy];
    }
    document.getElementById("game-status").textContent = copy[language][state];
    document.getElementById("availability").textContent = copy[language][installationState];
    openGame.textContent = copy[language].openGame;
    download.textContent = copy[language].download;
    languageButton.textContent = language === "ko" ? "English" : "한국어";
    languageButton.setAttribute("aria-label", language === "ko" ? "Switch to English" : "한국어로 변경");
  }
  languageButton.addEventListener("click", () => {
    language = language === "ko" ? "en" : "ko";
    render();
  });
  openGame.addEventListener("click", event => {
    // Re-read the fragment at the user gesture; a same-page link or Back/Forward
    // navigation must not launch a previously rendered game's URL.
    if (!supported || !appURLForFragment(location.hash)) {
      event.preventDefault();
      render();
      return;
    }
    openRequested = true;
    render();
  });
  window.addEventListener("hashchange", () => {
    openRequested = false;
    render();
  });
  render();
}

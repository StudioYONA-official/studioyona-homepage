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

// Recognizes the envelope only. The app verifies the signature and game history.
export function hasGameFragment(hash) {
  const prefixLength = "https://www.studioyona.co.kr/apps/notch-dice/play/".length;
  return hash.length + prefixLength <= 4096 && /^#v1=[A-Za-z0-9_-]+$/.test(hash);
}

const copy = {
  ko: {
    platform: "Mac용 Connect Four",
    title: "메시지로 함께 플레이하세요",
    unreleased: "Notch Dice는 App Store 출시를 준비하고 있습니다.",
    available: "Mac에 Notch Dice를 설치하면 메시지의 경기 링크를 바로 열 수 있습니다.",
    opening: "App Store로 연결하고 있습니다. 열리지 않으면 아래 버튼을 눌러 주세요.",
    unavailable: "현재 설치 링크를 열 수 없습니다. 잠시 후 다시 시도해 주세요.",
    download: "App Store에서 설치",
    installed: "이미 설치하셨다면 메시지로 돌아가 경기 링크를 다시 눌러 주세요.",
    afterInstall: "처음 설치한 뒤에는 메시지에서 처음 받은 초대 링크를 다시 눌러 참여해 주세요."
  },
  en: {
    platform: "Connect Four for Mac",
    title: "Play together through Messages",
    unreleased: "Notch Dice is preparing for its App Store release.",
    available: "Install Notch Dice on your Mac to open game links from Messages.",
    opening: "Opening the App Store. If it doesn't open, use the button below.",
    unavailable: "The installation link is currently unavailable. Please try again later.",
    download: "Install from the App Store",
    installed: "Already installed? Return to Messages and open the game link again.",
    afterInstall: "After your first installation, open the original invitation link in Messages to join."
  }
};

if (typeof document !== "undefined") {
  let language = navigator.language.startsWith("ko") ? "ko" : "en";
  let destination = null;
  let state = "unreleased";
  try {
    destination = validatedAppStoreURL(appStoreURL);
    if (destination) state = hasGameFragment(location.hash) ? "opening" : "available";
  } catch {
    state = "unavailable";
  }

  const languageButton = document.getElementById("language");
  const download = document.getElementById("download");
  if (destination) {
    download.href = destination;
    download.hidden = false;
  }
  function render() {
    document.documentElement.lang = language;
    for (const element of document.querySelectorAll("[data-copy]")) {
      element.textContent = copy[language][element.dataset.copy];
    }
    document.getElementById("availability").textContent = copy[language][state];
    download.textContent = copy[language].download;
    languageButton.textContent = language === "ko" ? "English" : "한국어";
    languageButton.setAttribute("aria-label", language === "ko" ? "Switch to English" : "한국어로 변경");
  }
  languageButton.addEventListener("click", () => {
    language = language === "ko" ? "en" : "ko";
    render();
  });
  render();
  if (state === "opening") location.replace(destination);
}

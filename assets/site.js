(() => {
  document.documentElement.classList.add("has-js");
  const currentYear = new Date().getFullYear();

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(currentYear);
  });

  const getLanguage = () => {
    const search = new URLSearchParams(window.location.search);
    return search.get("lang") === "en" ? "en" : "ko";
  };

  const setLanguageUrl = (lang) => {
    const url = new URL(window.location.href);
    if (lang === "en") {
      url.searchParams.set("lang", "en");
    } else {
      url.searchParams.delete("lang");
    }
    return `${url.pathname}${url.search}${url.hash}`;
  };

  const applyLanguage = (lang) => {
    document.documentElement.lang = lang;
    document.body.dataset.activeLang = lang;

    const { dataset } = document.body;
    const title = lang === "en" ? dataset.titleEn : dataset.titleKo;
    const description = lang === "en" ? dataset.descriptionEn : dataset.descriptionKo;

    if (title) {
      document.title = title;
    }

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta && description) {
      descriptionMeta.setAttribute("content", description);
    }

    document.querySelectorAll("[data-lang-block]").forEach((node) => {
      node.hidden = node.dataset.langBlock !== lang;
    });

    document.querySelectorAll("[data-lang-inline]").forEach((node) => {
      node.hidden = node.dataset.langInline !== lang;
    });

    document.querySelectorAll("[data-href-ko][data-href-en]").forEach((node) => {
      const href = lang === "en" ? node.dataset.hrefEn : node.dataset.hrefKo;
      if (href) {
        node.setAttribute("href", href);
      }
    });

    document.querySelectorAll("[data-set-lang]").forEach((node) => {
      const target = node.dataset.setLang;
      const isCurrent = target === lang;
      node.setAttribute("href", setLanguageUrl(target));
      if (isCurrent) {
        node.setAttribute("aria-current", "page");
      } else {
        node.removeAttribute("aria-current");
      }
    });
  };

  const path = window.location.pathname.replace(/\/+$/, "/");

  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    try {
      const linkPath = new URL(href, window.location.origin).pathname.replace(/\/+$/, "/");
      if (linkPath === path || (linkPath !== "/" && path.startsWith(linkPath))) {
        link.setAttribute("aria-current", "page");
      }
    } catch {
      return;
    }
  });

  document.querySelectorAll("[data-set-lang]").forEach((node) => {
    node.addEventListener("click", (event) => {
      event.preventDefault();
      const target = node.dataset.setLang === "en" ? "en" : "ko";
      window.history.replaceState(null, "", setLanguageUrl(target));
      applyLanguage(target);
    });
  });

  applyLanguage(getLanguage());

  const notice = document.querySelector("[data-policy-notice]");
  if (notice) {
    const storageKey = `studio-yona-notice-dismissed:${notice.dataset.noticeKey || "default"}`;
    const endDate = notice.dataset.noticeEnd;
    const today = new Date();
    const end = endDate ? new Date(`${endDate}T23:59:59+09:00`) : null;
    const isExpired = end && today.getTime() > end.getTime();
    const getDismissed = () => {
      try {
        return window.localStorage.getItem(storageKey) === "true";
      } catch {
        return false;
      }
    };
    const setDismissed = () => {
      try {
        window.localStorage.setItem(storageKey, "true");
      } catch {
        return;
      }
    };
    const isDismissed = getDismissed();

    if (isExpired || isDismissed) {
      notice.hidden = true;
    } else {
      notice.hidden = false;
      document.body.classList.add("policy-notice-open");
    }

    const closeNotice = notice.querySelector("[data-policy-notice-close]");
    if (closeNotice) {
      closeNotice.addEventListener("click", () => {
        setDismissed();
        notice.hidden = true;
        document.body.classList.remove("policy-notice-open");
      });
    }
  }

  const menu = document.querySelector("[data-menu]");
  const menuToggles = document.querySelectorAll("[data-menu-toggle]");
  const menuClosers = document.querySelectorAll("[data-menu-close]");

  const syncMenuState = (expanded) => {
    menuToggles.forEach((button) => {
      button.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  };

  const closeMenu = () => {
    if (!menu) return;
    menu.hidden = true;
    document.body.classList.remove("menu-open");
    syncMenuState(false);
  };

  const openMenu = () => {
    if (!menu) return;
    menu.hidden = false;
    document.body.classList.add("menu-open");
    syncMenuState(true);
  };

  if (menu) {
    menuToggles.forEach((button) => {
      button.addEventListener("click", () => {
        if (menu.hidden) {
          openMenu();
        } else {
          closeMenu();
        }
      });
    });

    menuClosers.forEach((button) => {
      button.addEventListener("click", () => {
        closeMenu();
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !menu.hidden) {
        closeMenu();
      }
    });
  }

  const revealTargets = document.querySelectorAll("[data-reveal]");
  if (revealTargets.length > 0) {
    const pending = new Set(revealTargets);

    const reveal = (element) => {
      element.classList.add("is-visible");
      pending.delete(element);
    };

    // Reveal each target as it scrolls into view, so the motion actually plays.
    const revealInView = () => {
      pending.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.88 && rect.bottom > -1) {
          reveal(element);
        }
      });
      if (pending.size === 0) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };

    window.addEventListener("scroll", revealInView, { passive: true });
    window.addEventListener("resize", revealInView);

    // Let the hidden state paint once, then reveal what's already in view (the
    // hero) so its entrance animates instead of snapping in. setTimeout (unlike
    // requestAnimationFrame) keeps running in background tabs, so the content is
    // never left hidden.
    window.setTimeout(revealInView, 40);
  }
})();

(function () {
  "use strict";

  const STORAGE_KEY = "profile_links_clean_v2";
  const FALLBACK_AVATAR = "kucing.jpg";
  const DEFAULT_DATA = {
    name: "ppnna33_",
    avatar: "kucing.jpg",
    bio: "Selamat datang di halaman tautan resmi saya. Hubungi saya lewat WhatsApp atau Telegram, dan ikuti akun Instagram, TikTok, serta GitHub saya.",
    theme: "dark",
    instagram: "https://www.instagram.com/ppnna33_?gwpx=MjliczZsdmozM3V3",
    tiktok: "yaa24250",
    telegram: "wangpei2",
    whatsapp: "0895617094970",
    github: "Belajarcloud12-creator"
  };

  const ICONS = {
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>',
    telegram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.75.453 3.469 1.328 4.984L2 22l5.203-1.359c1.469.797 3.125 1.219 4.828 1.219 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.813 14.094c-.25.703-1.438 1.344-1.984 1.422-.516.078-1.172.109-1.891-.125-.438-.141-1-.328-1.719-.641-3.016-1.313-4.984-4.344-5.141-4.547-.156-.203-1.219-1.625-1.219-3.094s.766-2.188 1.047-2.484c.281-.297.609-.375.813-.375.203 0 .406 0 .578.016.188 0 .438-.078.688.516.25.609.859 2.094.938 2.25.078.156.125.344.031.547-.094.203-.141.328-.281.5-.141.172-.297.391-.422.516-.141.141-.297.297-.125.578.172.281.766 1.266 1.641 2.047 1.125 1 2.078 1.313 2.375 1.453.297.141.469.125.641-.078.172-.203.734-.859.938-1.156.203-.297.406-.25.688-.141.281.109 1.781.844 2.094 1 .313.156.516.234.594.375.078.141.078.813-.172 1.516z"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>'
  };

  let toastTimer = null;
  let draftTheme = "dark";

  function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    if (toastTimer) {
      window.clearTimeout(toastTimer);
    }
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("show");
    }, 2400);
  }

  function buildUrl(raw, platform) {
    const val = String(raw || "").trim();
    if (!val) return "";
    if (/^https?:\/\//i.test(val)) return val;

    const clean = val.replace(/^@+/, "");
    if (platform === "instagram") return "https://instagram.com/" + encodeURIComponent(clean);
    if (platform === "tiktok") return "https://www.tiktok.com/@" + encodeURIComponent(clean);
    if (platform === "telegram") return "https://t.me/" + encodeURIComponent(clean);
    if (platform === "github") return "https://github.com/" + encodeURIComponent(clean);
    return val;
  }

  function buildWhatsAppUrl(rawPhone) {
    let digits = String(rawPhone || "").replace(/\D+/g, "");
    if (!digits) return "";
    if (digits.startsWith("0")) {
      digits = "62" + digits.slice(1);
    }
    return "https://wa.me/" + digits;
  }

  function loadData() {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          name: typeof parsed.name === "string" && parsed.name.trim() ? parsed.name : DEFAULT_DATA.name,
          avatar: typeof parsed.avatar === "string" && parsed.avatar.trim() ? parsed.avatar : DEFAULT_DATA.avatar,
          bio: typeof parsed.bio === "string" ? parsed.bio : DEFAULT_DATA.bio,
          theme: typeof parsed.theme === "string" ? parsed.theme : DEFAULT_DATA.theme,
          instagram: typeof parsed.instagram === "string" ? parsed.instagram : DEFAULT_DATA.instagram,
          tiktok: typeof parsed.tiktok === "string" ? parsed.tiktok : DEFAULT_DATA.tiktok,
          telegram: typeof parsed.telegram === "string" ? parsed.telegram : DEFAULT_DATA.telegram,
          whatsapp: typeof parsed.whatsapp === "string" ? parsed.whatsapp : DEFAULT_DATA.whatsapp,
          github: typeof parsed.github === "string" ? parsed.github : DEFAULT_DATA.github
        };
      }
    } catch (_err) {
    }
    return { ...DEFAULT_DATA };
  }

  function saveData(data) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (_err) {
    }
  }

  function copyText(text, successMessage) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard.writeText(text).then(function () {
        showToast(successMessage);
      }).catch(function () {
        openFallbackCopy(text);
      });
      return;
    }
    openFallbackCopy(text);
  }

  function openFallbackCopy(text) {
    const modal = document.getElementById("fallbackCopyModal");
    const textarea = document.getElementById("fallbackCopyTextarea");
    if (textarea instanceof HTMLTextAreaElement) {
      textarea.value = text;
    }
    if (modal) {
      modal.classList.add("open");
    }
  }

  function closeFallbackCopy() {
    const modal = document.getElementById("fallbackCopyModal");
    if (modal) {
      modal.classList.remove("open");
    }
  }

  function applyTheme(theme) {
    const valid = ["dark", "aurora", "light"].indexOf(theme) !== -1 ? theme : "dark";
    document.documentElement.setAttribute("data-theme", valid);
    const label = document.getElementById("themeLabel");
    if (label) {
      label.textContent = valid.charAt(0).toUpperCase() + valid.slice(1);
    }
  }

  function render(data) {
    applyTheme(data.theme);

    const displayNameEl = document.getElementById("displayName");
    if (displayNameEl) {
      displayNameEl.textContent = data.name || "Profil Saya";
    }

    document.title = "Profil & Tautan — " + (data.name || "Profil Saya");

    const avatarEl = document.getElementById("avatarImg");
    if (avatarEl instanceof HTMLImageElement) {
      avatarEl.src = data.avatar || FALLBACK_AVATAR;
      avatarEl.alt = "Foto profil " + (data.name || "");
    }

    const bioEl = document.getElementById("bioText");
    if (bioEl) {
      bioEl.textContent = data.bio || "";
    }

    const items = [
      {
        key: "instagram",
        title: "Instagram",
        url: buildUrl(data.instagram, "instagram"),
        bgClass: "bg-ig",
        icon: ICONS.instagram
      },
      {
        key: "tiktok",
        title: "TikTok",
        url: buildUrl(data.tiktok, "tiktok"),
        bgClass: "bg-tt",
        icon: ICONS.tiktok
      },
      {
        key: "telegram",
        title: "Telegram",
        url: buildUrl(data.telegram, "telegram"),
        bgClass: "bg-tg",
        icon: ICONS.telegram
      },
      {
        key: "whatsapp",
        title: "WhatsApp",
        url: buildWhatsAppUrl(data.whatsapp),
        bgClass: "bg-wa",
        icon: ICONS.whatsapp
      },
      {
        key: "github",
        title: "GitHub",
        url: buildUrl(data.github, "github"),
        bgClass: "bg-gh",
        icon: ICONS.github
      }
    ];

    const quickIconsEl = document.getElementById("quickIcons");
    if (quickIconsEl) {
      quickIconsEl.innerHTML = "";
      items.forEach(function (item) {
        if (!item.url) return;
        const a = document.createElement("a");
        a.className = "quick-icon-link " + item.bgClass;
        a.href = item.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.title = item.title;
        a.setAttribute("aria-label", item.title);
        a.innerHTML = item.icon;
        quickIconsEl.appendChild(a);
      });
    }

    const linksListEl = document.getElementById("linksList");
    if (linksListEl) {
      linksListEl.innerHTML = "";
      items.forEach(function (item) {
        const card = document.createElement("a");
        card.className = "link-card";
        if (item.url) {
          card.href = item.url;
          card.target = "_blank";
          card.rel = "noopener noreferrer";
        } else {
          card.href = "#edit";
          card.addEventListener("click", function (e) {
            e.preventDefault();
            openEditModal();
            showToast("Isi tautan " + item.title + " terlebih dahulu");
          });
        }

        const left = document.createElement("div");
        left.className = "link-left";

        const badge = document.createElement("div");
        badge.className = "link-badge " + item.bgClass;
        badge.innerHTML = item.icon;

        const title = document.createElement("div");
        title.className = "link-title";
        title.textContent = item.title;

        left.appendChild(badge);
        left.appendChild(title);

        const arrow = document.createElement("span");
        arrow.className = "arrow-icon";
        arrow.textContent = "›";

        card.appendChild(left);
        card.appendChild(arrow);
        linksListEl.appendChild(card);
      });
    }
  }

  function syncThemePills(theme) {
    draftTheme = theme;
    const pills = document.querySelectorAll("[data-theme-choice]");
    pills.forEach(function (btn) {
      const choice = btn.getAttribute("data-theme-choice");
      if (choice === theme) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  function openEditModal() {
    const data = loadData();
    const nameInput = document.getElementById("inputName");
    const avatarInput = document.getElementById("inputAvatar");
    const bioInput = document.getElementById("inputBio");
    const igInput = document.getElementById("inputInstagram");
    const ttInput = document.getElementById("inputTiktok");
    const tgInput = document.getElementById("inputTelegram");
    const waInput = document.getElementById("inputWhatsapp");
    const ghInput = document.getElementById("inputGithub");

    if (nameInput instanceof HTMLInputElement) nameInput.value = data.name;
    if (avatarInput instanceof HTMLInputElement) avatarInput.value = data.avatar;
    if (bioInput instanceof HTMLTextAreaElement) bioInput.value = data.bio;
    if (igInput instanceof HTMLInputElement) igInput.value = data.instagram;
    if (ttInput instanceof HTMLInputElement) ttInput.value = data.tiktok;
    if (tgInput instanceof HTMLInputElement) tgInput.value = data.telegram;
    if (waInput instanceof HTMLInputElement) waInput.value = data.whatsapp;
    if (ghInput instanceof HTMLInputElement) ghInput.value = data.github;

    syncThemePills(data.theme);

    const modal = document.getElementById("editModal");
    if (modal) {
      modal.classList.add("open");
    }
  }

  function closeEditModal() {
    const modal = document.getElementById("editModal");
    if (modal) {
      modal.classList.remove("open");
    }
  }

  function bindEvents() {
    const linksList = document.getElementById("linksList");
    if (linksList) {
      linksList.addEventListener("pointermove", function (e) {
        const target = e.target;
        const card = target instanceof Element ? target.closest(".link-card") : null;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", e.clientX - rect.left + "px");
        card.style.setProperty("--my", e.clientY - rect.top + "px");
      });
    }

    const openEditBtn = document.getElementById("openEditBtn");
    if (openEditBtn) {
      openEditBtn.addEventListener("click", openEditModal);
    }

    const closeEditBtn = document.getElementById("closeEditBtn");
    if (closeEditBtn) {
      closeEditBtn.addEventListener("click", closeEditModal);
    }

    const cancelEditBtn = document.getElementById("cancelEditBtn");
    if (cancelEditBtn) {
      cancelEditBtn.addEventListener("click", closeEditModal);
    }

    const editModal = document.getElementById("editModal");
    if (editModal) {
      editModal.addEventListener("click", function (e) {
        if (e.target === editModal) {
          closeEditModal();
        }
      });
    }

    const themePills = document.querySelectorAll("[data-theme-choice]");
    themePills.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const choice = btn.getAttribute("data-theme-choice") || "dark";
        syncThemePills(choice);
      });
    });

    const themeCycleBtn = document.getElementById("themeCycleBtn");
    if (themeCycleBtn) {
      themeCycleBtn.addEventListener("click", function () {
        const order = ["dark", "aurora", "light"];
        const current = loadData();
        const nextIndex = (order.indexOf(current.theme) + 1) % order.length;
        const updated = { ...current, theme: order[nextIndex] };
        saveData(updated);
        render(updated);
        showToast("Tema: " + updated.theme.toUpperCase());
      });
    }

    const shareBtn = document.getElementById("shareBtn");
    if (shareBtn) {
      shareBtn.addEventListener("click", function () {
        const shareUrl = window.location.href;
        if (navigator.share) {
          navigator.share({
            title: document.title,
            url: shareUrl
          }).catch(function () {
            copyText(shareUrl, "Tautan halaman disalin!");
          });
        } else {
          copyText(shareUrl, "Tautan halaman disalin!");
        }
      });
    }

    const resetDefaultBtn = document.getElementById("resetDefaultBtn");
    if (resetDefaultBtn) {
      resetDefaultBtn.addEventListener("click", function () {
        const fresh = { ...DEFAULT_DATA };
        saveData(fresh);
        render(fresh);
        closeEditModal();
        showToast("Pengaturan dikembalikan ke default");
      });
    }

    const profileForm = document.getElementById("profileForm");
    if (profileForm) {
      profileForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const nameInput = document.getElementById("inputName");
        const avatarInput = document.getElementById("inputAvatar");
        const bioInput = document.getElementById("inputBio");
        const igInput = document.getElementById("inputInstagram");
        const ttInput = document.getElementById("inputTiktok");
        const tgInput = document.getElementById("inputTelegram");
        const waInput = document.getElementById("inputWhatsapp");
        const ghInput = document.getElementById("inputGithub");

        const updated = {
          name: nameInput instanceof HTMLInputElement && nameInput.value.trim() ? nameInput.value.trim() : DEFAULT_DATA.name,
          avatar: avatarInput instanceof HTMLInputElement && avatarInput.value.trim() ? avatarInput.value.trim() : FALLBACK_AVATAR,
          bio: bioInput instanceof HTMLTextAreaElement ? bioInput.value.trim() : "",
          theme: draftTheme,
          instagram: igInput instanceof HTMLInputElement ? igInput.value.trim() : "",
          tiktok: ttInput instanceof HTMLInputElement ? ttInput.value.trim() : "",
          telegram: tgInput instanceof HTMLInputElement ? tgInput.value.trim() : "",
          whatsapp: waInput instanceof HTMLInputElement ? waInput.value.trim() : "",
          github: ghInput instanceof HTMLInputElement ? ghInput.value.trim() : ""
        };

        saveData(updated);
        render(updated);
        closeEditModal();
        showToast("Profil & tautan berhasil disimpan!");
      });
    }

    const closeCopyBtn = document.getElementById("closeCopyBtn");
    if (closeCopyBtn) {
      closeCopyBtn.addEventListener("click", closeFallbackCopy);
    }

    const doneCopyBtn = document.getElementById("doneCopyBtn");
    if (doneCopyBtn) {
      doneCopyBtn.addEventListener("click", closeFallbackCopy);
    }

    const fallbackCopyModal = document.getElementById("fallbackCopyModal");
    if (fallbackCopyModal) {
      fallbackCopyModal.addEventListener("click", function (e) {
        if (e.target === fallbackCopyModal) {
          closeFallbackCopy();
        }
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("intro");
    window.setTimeout(function () {
      document.body.classList.remove("intro");
    }, 1600);

    bindEvents();
    render(loadData());
  });
})();
/* ==========================================================================
   MULTI-PAGE GRAPHIC DESIGNER WEBSITE ENGINE (script.js)
   Shared across index.html, portfolio.html, services.html, about.html, contact.html
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Persistent Dark / Light Theme Across All Pages
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("designer_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  if (themeToggle) {
    themeToggle.textContent = savedTheme === "light" ? "◐ DARK MODE" : "☀ LIGHT MODE";
  }

  themeToggle?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("designer_theme", next);
    themeToggle.textContent = next === "light" ? "◐ DARK MODE" : "☀ LIGHT MODE";
    showToast(`Theme switched to ${next === "light" ? "Light" : "Dark"} mode`);
  });

  // 2. Mobile Navigation Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const navMenu = document.getElementById("nav-menu");
  mobileMenuBtn?.addEventListener("click", () => {
    navMenu?.classList.toggle("open");
    const isOpen = navMenu?.classList.contains("open");
    mobileMenuBtn.textContent = isOpen ? "✕ CLOSE" : "☰ MENU";
  });

  // 3. Complete LIVE BRAND COLOR PREVIEW Engine (Swatches + Custom Picker + Scene Remix)
  const heroDynamicBg = document.getElementById("hero-dynamic-bg");
  const liveColorReadout = document.getElementById("live-color-readout");
  const svgHexLabel = document.getElementById("svg-hex-label");
  const customBrandPicker = document.getElementById("custom-brand-picker");
  const accentSwatches = document.querySelectorAll("[data-accent]");

  function applyBrandColor(color, colorName = "Custom Brand") {
    if (!color) return;
    const upperHex = color.toUpperCase();
    document.documentElement.style.setProperty("--accent", color);
    document.documentElement.style.setProperty("--accent-hover", color);
    document.documentElement.style.setProperty("--accent-soft", `${color}22`);
    localStorage.setItem("designer_accent", color);

    if (heroDynamicBg) heroDynamicBg.style.fill = color;
    if (liveColorReadout) {
      liveColorReadout.textContent = `LIVE BRAND COLOR STUDIO // ${upperHex}`;
    }
    if (svgHexLabel) {
      svgHexLabel.textContent = `PRIMARY SWATCH: ${upperHex}`;
    }
    if (customBrandPicker) {
      customBrandPicker.value = color;
    }

    accentSwatches.forEach((btn) => {
      if (btn.getAttribute("data-accent")?.toLowerCase() === color.toLowerCase()) {
        btn.style.outline = "3px solid var(--text-main)";
        btn.style.outlineOffset = "2px";
      } else {
        btn.style.outline = "none";
      }
    });
  }

  const savedAccent = localStorage.getItem("designer_accent");
  if (savedAccent) {
    applyBrandColor(savedAccent);
  }

  accentSwatches.forEach((btn) => {
    btn.addEventListener("click", () => {
      const color = btn.getAttribute("data-accent");
      const name = btn.getAttribute("data-name") || color;
      applyBrandColor(color, name);
      showToast(`Live Brand Color: ${name} (${color.toUpperCase()})`);
    });
  });

  customBrandPicker?.addEventListener("input", (e) => {
    const color = e.target.value;
    applyBrandColor(color, "Custom Brand Palette");
  });

  // Switch Mockup Scene button in Hero Live Brand Preview
  const remixSceneBtn = document.getElementById("remix-scene-btn");
  const card1 = document.getElementById("hero-card-1");
  const card2 = document.getElementById("hero-card-2");
  const card3 = document.getElementById("hero-card-3");
  let sceneIndex = 0;

  remixSceneBtn?.addEventListener("click", () => {
    sceneIndex = (sceneIndex + 1) % 3;
    const layouts = [
      { c1: "translate(0px, 0px)", c2: "translate(0px, 0px)", c3: "translate(0px, 0px)", name: "Default Flatlay" },
      { c1: "translate(15px, 12px) rotate(-2deg)", c2: "translate(-12px, -8px) rotate(2deg)", c3: "translate(-10px, 6px)", name: "Floating Perspective" },
      { c1: "translate(320px, 0px)", c2: "translate(-276px, 0px)", c3: "translate(-276px, 0px)", name: "Split Showcase" }
    ];
    const current = layouts[sceneIndex];
    if (card1) {
      card1.style.transition = "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)";
      card1.style.transform = current.c1;
    }
    if (card2) {
      card2.style.transition = "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)";
      card2.style.transform = current.c2;
    }
    if (card3) {
      card3.style.transition = "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)";
      card3.style.transform = current.c3;
    }
    showToast(`Switched Mockup Scene: ${current.name}`);
  });

  // 4. Multi-Image Shot Switcher inside Each Portfolio Card (Shot 1 / Shot 2 / Shot 3)
  document.querySelectorAll(".portfolio-item").forEach((card) => {
    const shotBtns = card.querySelectorAll(".shot-btn");
    const slides = card.querySelectorAll(".thumb-slide");

    shotBtns.forEach((btn, index) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        shotBtns.forEach((b) => b.classList.remove("active"));
        slides.forEach((s) => s.classList.remove("active-slide"));
        btn.classList.add("active");
        if (slides[index]) {
          slides[index].classList.add("active-slide");
        }
      });
    });
  });

  // 5. Portfolio Category Filter Tabs (on portfolio.html)
  const filterPills = document.querySelectorAll(".filter-pill");
  const portfolioCards = document.querySelectorAll(".portfolio-item");

  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      filterPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      const filter = pill.getAttribute("data-filter") || "all";

      portfolioCards.forEach((card) => {
        const cat = card.getAttribute("data-filter-cat") || "";
        if (filter === "all" || cat.includes(filter)) {
          card.classList.remove("hidden-card");
        } else {
          card.classList.add("hidden-card");
        }
      });
    });
  });

  // 6. Project Case Study Modal Inspector with Multi-Image Gallery & 8K Studio Prompts
  const modal = document.getElementById("project-modal");
  const closeModal = document.getElementById("close-modal");

  portfolioCards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.getAttribute("data-title") || "Project Details";
      const category = card.getAttribute("data-category") || "Featured Project";
      const desc = card.getAttribute("data-desc") || "";
      const projectId = card.getAttribute("data-project-id") || "";
      const spec = window.STUDIO_PROJECTS_SPEC?.[projectId];

      const titleEl = document.getElementById("modal-title");
      const catEl = document.getElementById("modal-category");
      const descEl = document.getElementById("modal-desc");
      const galleryEl = document.getElementById("modal-gallery");

      if (titleEl) titleEl.textContent = title;
      if (catEl) catEl.textContent = category;
      if (descEl) descEl.textContent = desc;

      if (galleryEl) {
        galleryEl.innerHTML = "";
        const slides = card.querySelectorAll(".thumb-slide");
        slides.forEach((slide, idx) => {
          const wrapper = document.createElement("div");
          wrapper.className = "modal-shot-card";

          const clone = slide.cloneNode(true);
          clone.classList.add("active-slide");
          wrapper.appendChild(clone);

          const shotSpec = spec?.shots?.[idx];
          if (shotSpec) {
            const promptBox = document.createElement("div");
            promptBox.className = "modal-prompt-box";
            promptBox.innerHTML = `
              <p title="${shotSpec.prompt}"><strong>${shotSpec.label}:</strong> ${shotSpec.prompt}</p>
              <button type="button" class="copy-prompt-btn">📋 COPY 8K STUDIO PROMPT</button>
            `;
            const copyBtn = promptBox.querySelector(".copy-prompt-btn");
            copyBtn?.addEventListener("click", (ev) => {
              ev.stopPropagation();
              navigator.clipboard?.writeText(shotSpec.prompt);
              copyBtn.textContent = "✓ COPIED TO CLIPBOARD!";
              showToast(`Copied 8K Studio Prompt for ${shotSpec.label}`);
              setTimeout(() => {
                copyBtn.textContent = "📋 COPY 8K STUDIO PROMPT";
              }, 2200);
            });
            wrapper.appendChild(promptBox);
          }

          galleryEl.appendChild(wrapper);
        });
      }

      modal?.showModal();
    });
  });

  closeModal?.addEventListener("click", () => modal?.close());
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });

  // 7. Contact Form Submission Handler
  const contactForm = document.getElementById("contact-form");
  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name")?.value || "Friend";
    const service = document.getElementById("service")?.value || "Design Project";
    showToast(`Thank you ${name}! Your ${service} inquiry has been received.`);
    contactForm.reset();
  });
});

function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("visible");
  clearTimeout(window.__toastTimeout);
  window.__toastTimeout = setTimeout(() => {
    toast.classList.remove("visible");
  }, 3000);
}

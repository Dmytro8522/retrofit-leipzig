/* retrofit.leipzig — main.js
   Renders bilingual content from SITE_CONTENT (content.js) and wires up interactivity.
   No build step, no external deps — plain DOM rendering so it also works over file:// */

(function () {
  "use strict";

  var CONTACT = {
    phoneRaw: "+491624514836",
    phoneDisplay: "+49 162 4514836",
    telegramUser: "Dmitryi0678",
    instagramUser: "retrofit.leipzig"
  };
  CONTACT.telegramUrl = "https://t.me/" + CONTACT.telegramUser;
  CONTACT.instagramUrl = "https://instagram.com/" + CONTACT.instagramUser;
  CONTACT.telUrl = "tel:" + CONTACT.phoneRaw;

  var ICONS = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z"/></svg>',
    telegram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M21 4 3 11.3l6 2.1M21 4l-3.2 16-6-4.4M21 4 9.4 14.6m0 0-.6 5 3-3.3"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };

  function miniBars() {
    return '<span class="mini-bars" aria-hidden="true"><i></i><i></i><i></i><i class="accent"></i></span>';
  }

  function pad2(n) { return n < 10 ? "0" + n : "" + n; }

  var currentLang = localStorage.getItem("rl_lang") ||
    ((navigator.language || "").toLowerCase().indexOf("de") === 0 ? "de" : "ru");

  function t() { return window.SITE_CONTENT[currentLang]; }
  function el(id) { return document.getElementById(id); }

  /* ---------- render: meta ---------- */
  function renderMeta() {
    var m = t().meta;
    document.title = m.title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", m.description);
    document.documentElement.lang = currentLang;
    document.documentElement.dataset.lang = currentLang;
  }

  /* ---------- render: nav ---------- */
  function renderNav() {
    var nav = t().nav;
    ["services", "sound", "electronics", "selector", "expertise", "faq", "contacts"].forEach(function (key) {
      var nodes = document.querySelectorAll('[data-nav="' + key + '"]');
      nodes.forEach(function (n) { n.textContent = nav[key]; });
    });
    var headerCta = el("headerCta");
    headerCta.textContent = nav.cta;
    headerCta.href = CONTACT.telegramUrl;
  }

  /* ---------- render: hero ---------- */
  function renderHero() {
    var h = t().hero;
    el("heroEyebrow").textContent = h.eyebrow;
    el("heroTitle").innerHTML = h.title.split("\n").map(function (line) {
      return escapeHtml(line);
    }).join("<br>");
    el("heroSubtitle").textContent = h.subtitle;

    var p = el("heroCtaPrimary");
    p.textContent = h.ctaPrimary;
    p.href = CONTACT.telegramUrl;

    var s = el("heroCtaSecondary");
    s.textContent = h.ctaSecondary;
    s.href = CONTACT.telUrl;

    el("heroCtaThird").textContent = h.ctaThird;

    el("heroBadges").innerHTML = h.badges.map(function (b) {
      return '<span class="badge">' + escapeHtml(b) + "</span>";
    }).join("");

    el("pillarsStrip").innerHTML = h.pillars.map(function (pl, i) {
      return '<div class="pillar-card p' + (i + 1) + '">' +
        '<span class="pillar-bar"></span>' +
        '<div><strong>' + escapeHtml(pl.title) + "</strong><small>" + escapeHtml(pl.note) + "</small></div>" +
        "</div>";
    }).join("");
  }

  /* ---------- render: stats ---------- */
  function renderStats() {
    el("statsGrid").innerHTML = t().stats.map(function (s) {
      return '<div class="stat"><span class="stat-n">' + escapeHtml(s.n) + '</span><span class="stat-l">' + escapeHtml(s.l) + "</span></div>";
    }).join("");
  }

  /* ---------- render: services ---------- */
  function renderServices() {
    var d = t();
    el("servicesEyebrow").textContent = d.sectionEyebrows.services;
    el("servicesTitle").textContent = d.sectionEyebrows.servicesTitle;
    el("servicesLead").textContent = d.sectionEyebrows.servicesLead;

    el("servicesToc").innerHTML = d.services.map(function (s, i) {
      var tags = s.groups.map(function (g) { return '<span class="tag">' + escapeHtml(g.title) + "</span>"; }).join("");
      return '<a class="service-card" href="#' + s.id + '">' +
        '<span class="service-num">' + pad2(i + 1) + "</span>" +
        miniBars() +
        "<h3>" + escapeHtml(s.title) + "</h3>" +
        '<p class="service-tagline">' + escapeHtml(s.tagline) + "</p>" +
        '<div class="service-tags">' + tags + "</div>" +
        '<span class="service-link">' + ICONS.arrow + "</span>" +
        "</a>";
    }).join("");

    el("servicesDetail").innerHTML = d.services.map(function (s, i) {
      var groups = s.groups.map(function (g) {
        var items = g.items.map(function (item) { return "<li>" + escapeHtml(item) + "</li>"; }).join("");
        return '<div class="service-group"><h4>' + escapeHtml(g.title) + "</h4><ul>" + items + "</ul></div>";
      }).join("");
      return '<div class="service-block" id="' + s.id + '">' +
        '<div class="service-block-head">' +
        '<span class="service-num lg">' + pad2(i + 1) + "</span>" +
        '<div><h3>' + escapeHtml(s.title) + "</h3><p>" + escapeHtml(s.tagline) + "</p></div>" +
        "</div>" +
        '<div class="service-groups">' + groups + "</div>" +
        "</div>";
    }).join("");
  }

  /* ---------- render: packages ---------- */
  function renderPackages() {
    var d = t();
    el("packagesEyebrow").textContent = d.sectionEyebrows.packages;
    el("packagesTitle").textContent = d.sectionEyebrows.packagesTitle;
    el("packagesLead").textContent = d.sectionEyebrows.packagesLead;

    el("packagesGrid").innerHTML = d.packages.map(function (p) {
      var items = p.items.map(function (it) { return "<li>" + escapeHtml(it) + "</li>"; }).join("");
      var msg = encodeURIComponent((currentLang === "ru" ? "Здравствуйте! Интересует пакет: " : "Hallo! Ich interessiere mich für das Paket: ") + p.title);
      return '<div class="package-card">' +
        miniBars() +
        "<h3>" + escapeHtml(p.title) + "</h3>" +
        '<p class="package-note">' + escapeHtml(p.note) + "</p>" +
        "<ul>" + items + "</ul>" +
        '<a class="btn btn-ghost btn-sm" href="' + CONTACT.telegramUrl + "?text=" + msg + '" target="_blank" rel="noopener">' + t().nav.cta + "</a>" +
        "</div>";
    }).join("");
  }

  /* ---------- render: car selector ---------- */
  var selectorState = { brandIdx: null, modelIdx: null };

  function currentYear() { return new Date().getFullYear(); }

  function parseYears(str) {
    var parts = str.split(/[–-]/).map(function (s) { return s.trim(); });
    var start = parseInt(parts[0], 10);
    var endRaw = parts[1] || "";
    var end = /\d/.test(endRaw) ? parseInt(endRaw, 10) : currentYear();
    var years = [];
    for (var y = end; y >= start; y--) years.push(y);
    return years;
  }

  function renderCarSelector() {
    var d = t();
    var cs = d.carSelector;
    el("selectorEyebrow").textContent = d.sectionEyebrows.selector;
    el("selectorTitle").textContent = d.sectionEyebrows.selectorTitle;
    el("selectorLead").textContent = d.sectionEyebrows.selectorLead;

    el("brandLabel").textContent = cs.brandLabel;
    el("modelLabel").textContent = cs.modelLabel;
    el("yearLabel").textContent = cs.yearLabel;

    var brandSelect = el("brandSelect");
    var modelSelect = el("modelSelect");
    var yearSelect = el("yearSelect");

    brandSelect.innerHTML = '<option value="">' + cs.brandPlaceholder + "</option>" +
      d.carDB.map(function (b, i) { return '<option value="' + i + '">' + escapeHtml(b.brand) + "</option>"; }).join("");

    modelSelect.innerHTML = '<option value="">' + cs.modelPlaceholder + "</option>";
    modelSelect.disabled = true;
    yearSelect.innerHTML = '<option value="">' + cs.yearPlaceholder + "</option>";
    yearSelect.disabled = true;

    selectorState = { brandIdx: null, modelIdx: null };
    renderCarResult();

    el("vinNote").textContent = cs.vinNote;
    var vinCta = el("vinCta");
    vinCta.textContent = cs.vinCta;
    vinCta.href = CONTACT.telegramUrl;

    brandSelect.onchange = function () {
      var d2 = t();
      var idx = brandSelect.value;
      selectorState.brandIdx = idx === "" ? null : parseInt(idx, 10);
      selectorState.modelIdx = null;
      if (selectorState.brandIdx === null) {
        modelSelect.innerHTML = '<option value="">' + d2.carSelector.modelPlaceholder + "</option>";
        modelSelect.disabled = true;
      } else {
        var brand = d2.carDB[selectorState.brandIdx];
        modelSelect.innerHTML = '<option value="">' + d2.carSelector.modelLabel + "</option>" +
          brand.models.map(function (mo, i) { return '<option value="' + i + '">' + escapeHtml(mo.name) + " · " + escapeHtml(mo.years) + "</option>"; }).join("");
        modelSelect.disabled = false;
      }
      yearSelect.innerHTML = '<option value="">' + d2.carSelector.yearPlaceholder + "</option>";
      yearSelect.disabled = true;
      renderCarResult();
    };

    modelSelect.onchange = function () {
      var d2 = t();
      var idx = modelSelect.value;
      selectorState.modelIdx = idx === "" ? null : parseInt(idx, 10);
      if (selectorState.modelIdx === null || selectorState.brandIdx === null) {
        yearSelect.innerHTML = '<option value="">' + d2.carSelector.yearPlaceholder + "</option>";
        yearSelect.disabled = true;
      } else {
        var model = d2.carDB[selectorState.brandIdx].models[selectorState.modelIdx];
        var years = parseYears(model.years);
        yearSelect.innerHTML = years.map(function (y) { return "<option value=\"" + y + "\">" + y + "</option>"; }).join("");
        yearSelect.disabled = false;
      }
      renderCarResult();
    };

    yearSelect.onchange = function () { renderCarResult(); };
  }

  function renderCarResult() {
    var d = t();
    var cs = d.carSelector;
    var box = el("carSelectorResult");

    if (selectorState.brandIdx === null || selectorState.modelIdx === null) {
      box.innerHTML = '<p class="selector-empty">' + escapeHtml(cs.emptyState) + "</p>";
      return;
    }

    var brand = d.carDB[selectorState.brandIdx];
    var model = brand.models[selectorState.modelIdx];
    var year = el("yearSelect").value;
    var label = brand.brand + " " + model.name + (year ? " · " + year : "");

    var msg = encodeURIComponent(
      (currentLang === "ru" ? "Здравствуйте! Хочу уточнить дооснащение для " : "Hallo! Ich möchte die Nachrüstung für ") +
      label + (currentLang === "ru" ? " по VIN." : " per VIN klären.")
    );

    box.innerHTML =
      '<div class="car-result-card">' +
      '<h4>' + escapeHtml(cs.resultTitle) + " " + escapeHtml(label) + "</h4>" +
      "<ul>" + model.recs.map(function (r) { return "<li>" + escapeHtml(r) + "</li>"; }).join("") + "</ul>" +
      '<p class="car-result-note">' + escapeHtml(cs.resultNote) + "</p>" +
      '<a class="btn btn-primary btn-sm" href="' + CONTACT.telegramUrl + "?text=" + msg + '" target="_blank" rel="noopener">' + escapeHtml(cs.resultCta) + "</a>" +
      "</div>";
  }

  /* ---------- render: articles ---------- */
  function renderArticles() {
    var d = t();
    el("expertiseEyebrow").textContent = d.sectionEyebrows.expertise;
    el("expertiseTitle").textContent = d.sectionEyebrows.expertiseTitle;
    el("expertiseLead").textContent = d.sectionEyebrows.expertiseLead;

    el("articlesGrid").innerHTML = d.articles.map(function (a) {
      return '<article class="article-card">' + miniBars() + "<h3>" + escapeHtml(a.title) + "</h3><p>" + escapeHtml(a.body) + "</p></article>";
    }).join("");
  }

  /* ---------- render: materials ---------- */
  function renderMaterials() {
    var d = t();
    var m = d.materials;
    el("materialsEyebrow").textContent = d.sectionEyebrows.materials;
    el("materialsTitle").textContent = m.title;
    el("materialsLead").textContent = m.lead;
    el("materialsLayers").innerHTML = m.layers.map(function (l, i) {
      return '<div class="material-layer"><span class="layer-num">' + pad2(i + 1) + "</span><h4>" + escapeHtml(l.title) + "</h4><p>" + escapeHtml(l.desc) + "</p></div>";
    }).join("");
    el("materialsNote").textContent = m.note;
  }

  /* ---------- render: faq ---------- */
  function renderFaq() {
    var d = t();
    el("faqEyebrow").textContent = d.sectionEyebrows.faq;
    el("faqTitle").textContent = d.sectionEyebrows.faqTitle;

    el("faqList").innerHTML = d.faq.map(function (item, i) {
      return '<div class="faq-item">' +
        '<button class="faq-q" type="button" data-faq="' + i + '"><span>' + escapeHtml(item.q) + "</span>" + ICONS.chevron + "</button>" +
        '<div class="faq-a"><p>' + escapeHtml(item.a) + "</p></div>" +
        "</div>";
    }).join("");

    el("faqList").querySelectorAll(".faq-q").forEach(function (btn) {
      btn.addEventListener("click", function () {
        btn.closest(".faq-item").classList.toggle("open");
      });
    });
  }

  /* ---------- render: contacts ---------- */
  function renderContacts() {
    var d = t();
    var c = d.contacts;
    el("contactsEyebrow").textContent = d.sectionEyebrows.contacts;
    el("contactsTitle").textContent = d.sectionEyebrows.contactsTitle;
    el("contactsLead").textContent = d.sectionEyebrows.contactsLead;

    el("contactsGrid").innerHTML =
      '<a class="contact-card" href="' + CONTACT.telUrl + '">' +
      '<span class="contact-icon">' + ICONS.phone + "</span>" +
      '<span class="contact-label">' + escapeHtml(c.phoneLabel) + "</span>" +
      '<span class="contact-value">' + escapeHtml(CONTACT.phoneDisplay) + "</span>" +
      "</a>" +
      '<a class="contact-card" href="' + CONTACT.telegramUrl + '" target="_blank" rel="noopener">' +
      '<span class="contact-icon">' + ICONS.telegram + "</span>" +
      '<span class="contact-label">' + escapeHtml(c.telegramLabel) + "</span>" +
      '<span class="contact-value">@' + escapeHtml(CONTACT.telegramUser) + "</span>" +
      "</a>" +
      '<a class="contact-card" href="' + CONTACT.instagramUrl + '" target="_blank" rel="noopener">' +
      '<span class="contact-icon">' + ICONS.instagram + "</span>" +
      '<span class="contact-label">' + escapeHtml(c.instagramLabel) + "</span>" +
      '<span class="contact-value">@' + escapeHtml(CONTACT.instagramUser) + "</span>" +
      "</a>" +
      '<div class="contact-card contact-city">' +
      '<span class="contact-icon">' + miniBars() + "</span>" +
      '<span class="contact-label">' + escapeHtml(c.cityLabel) + "</span>" +
      '<span class="contact-value">' + escapeHtml(c.city) + "</span>" +
      "</div>" +
      '<a class="btn btn-primary contact-main-cta" href="' + CONTACT.telegramUrl + '" target="_blank" rel="noopener">' + escapeHtml(c.ctaTelegram) + "</a>" +
      '<p class="contacts-note">' + escapeHtml(c.note) + "</p>";
  }

  /* ---------- render: footer ---------- */
  function renderFooter() {
    var d = t();
    el("footerTagline").textContent = d.footer.tagline;
    el("footerMadeWith").textContent = d.footer.madeWith;
    el("footerRights").textContent = d.footer.rights;
    el("footerYear").textContent = new Date().getFullYear();

    document.querySelectorAll("#footerNav [data-nav]").forEach(function (n) {
      n.textContent = d.nav[n.getAttribute("data-nav")];
    });

    el("footerSocial").innerHTML =
      '<a href="' + CONTACT.telegramUrl + '" target="_blank" rel="noopener" aria-label="Telegram">' + ICONS.telegram + "</a>" +
      '<a href="' + CONTACT.instagramUrl + '" target="_blank" rel="noopener" aria-label="Instagram">' + ICONS.instagram + "</a>" +
      '<a href="' + CONTACT.telUrl + '" aria-label="Phone">' + ICONS.phone + "</a>";
  }

  /* ---------- render: mobile bar ---------- */
  function renderMobileBar() {
    var d = t();
    var call = el("mobileCtaCall");
    call.href = CONTACT.telUrl;
    call.innerHTML = ICONS.phone + "<span>" + escapeHtml(d.mobileBar.call) + "</span>";
    var tg = el("mobileCtaTelegram");
    tg.href = CONTACT.telegramUrl;
    tg.innerHTML = ICONS.telegram + "<span>" + escapeHtml(d.mobileBar.telegram) + "</span>";
  }

  /* ---------- lang switch ---------- */
  function updateLangButtons() {
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === currentLang);
    });
  }

  function switchLang(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem("rl_lang", lang);
    renderAll();
    window.scrollTo({ top: window.scrollY }); // keep position, just re-render
  }

  /* ---------- helpers ---------- */
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- master render ---------- */
  function renderAll() {
    renderMeta();
    renderNav();
    renderHero();
    renderStats();
    renderServices();
    renderPackages();
    renderCarSelector();
    renderArticles();
    renderMaterials();
    renderFaq();
    renderContacts();
    renderFooter();
    renderMobileBar();
    updateLangButtons();
  }

  /* ---------- interactivity: header, burger, scroll-top ---------- */
  function initChrome() {
    var header = el("siteHeader");
    var scrollTopBtn = el("scrollTopBtn");

    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      header.classList.toggle("scrolled", y > 10);
      scrollTopBtn.classList.toggle("visible", y > 600);
    }, { passive: true });

    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    var burger = el("burgerBtn");
    var nav = el("mainNav");
    burger.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      burger.classList.toggle("open", isOpen);
      document.body.classList.toggle("nav-open", isOpen);
    });

    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        burger.classList.remove("open");
        document.body.classList.remove("nav-open");
      }
    });

    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        switchLang(btn.getAttribute("data-lang-btn"));
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderAll();
    initChrome();
  });
})();

let cmdOpen = false;

const DEVICON_MAP = {
  "html":"devicon-html5-plain colored","css":"devicon-css3-plain colored",
  "javascript":"devicon-javascript-plain colored","js":"devicon-javascript-plain colored",
  "react":"devicon-react-original colored","nextjs":"devicon-nextjs-plain",
  "tailwindcss":"devicon-tailwindcss-plain colored","jquery":"devicon-jquery-plain colored",
  "laravel":"devicon-laravel-plain colored","php":"devicon-php-plain colored",
  "python":"devicon-python-plain colored","mysql":"devicon-mysql-plain colored",
  "figma":"devicon-figma-plain colored","vscode":"devicon-vscode-plain colored"
};

function renderTechIcons(techArr) {
  return techArr.map((tech) => {
    const key = tech.toLowerCase().trim();
    const iconClass = DEVICON_MAP[key];
    if (iconClass) return `<span class="tech-icon" data-label="${escapeHtml(tech)}"><i class="${iconClass}"></i></span>`;
    return `<span class="tech-text">${escapeHtml(tech)}</span>`;
  }).join("");
}

const state = {
  page: "beranda", skillTab: "all",
  projectType: "Semua", projectCategory: "Semua", projectSlug: null,
  achSearch: "", achType: "all", achCategory: "all",
  theme: localStorage.getItem("portfolio-theme") || "dark",
  layout: localStorage.getItem("portfolio-layout") || "sidebar",
  lang: localStorage.getItem("portfolio-lang") || "id"
};

// Alias URL: pageId (DATA.nav) -> hash yang tampil di browser
const HASH_DISPLAY = { links: "spotify" };
// Kebalikan: hash URL -> pageId internal
const HASH_RESOLVE = { spotify: "links" };

const I18N = {
  id: {
    appTitle: "Fadel Muhammad | Frontend Developer - Portfolio Pribadi",
    profile: { status: "Ayo Berkolaborasi", statusAlt: "Membangun Hal Keren" },
    nav: { beranda:"Beranda",tentang:"Tentang",pencapaian:"Pencapaian",proyek:"Proyek",kegunaan:"Kegunaan",kontak:"Kontak",links:"Playlist" },
    hero: {
      title: "Hi, saya Fadel Muhammad",
      subtitle: "Web Developer & UI/UX Design yang fokus pada antarmuka modern dan pengalaman pengguna yang nyaman.",
      metaLocation: "Kota Bekasi, Jawa Barat", metaWork: "Ayo Berkolaborasi",
      p1: "Seorang Web Developer & UI/UX Design yang berdedikasi untuk membangun solusi digital yang berdampak. Saya spesialis dalam pengembangan platform web yang skalabel dan design tampilan yang user friendly menggunakan tech stack seperti React.js, dan Google Stitch.",
      p2: "Fokus saya adalah merancang arsitektur website yang terstruktur dengan baik, dan mudah dipelihara. Saya memadukan keahlian teknis dengan komunikasi proaktif dan kepemimpinan untuk memastikan setiap proyek memberikan kejelasan logis dan dampak nyata di dunia nyata."
    },
    pages: {
      beranda: { title:"Hi, saya Fadel Muhammad", sub:"Web Developer & UI/UX Design yang fokus pada antarmuka modern dan pengalaman pengguna yang nyaman." },
      tentang: { title:"Tentang", sub:"Pengenalan singkat mengenai siapa saya." },
      pencapaian: { title:"Pencapaian", sub:"Koleksi sertifikat dan lencana yang telah saya raih sepanjang perjalanan profesional dan akademik saya." },
      proyek: { title:"Proyek", sub:"Etalase proyek pribadi maupun sumber terbuka (open-source) yang telah saya bangun atau kontribusikan." },
      kegunaan: { title:"Kegunaan", sub:"Alat dan setup yang saya gunakan untuk produktivitas harian." },
      kontak: { title:"Kontak", sub:"Temukan saya di media sosial." },
      links: { title:"Links", sub:"Daftar tautan penting saya." }
    },
    sections: {
      skillTitle:"Keahlian", skillSub:"Keahlian profesional saya.",
      aboutCareerTitle:"Pengalaman Magang", aboutCareerSub:"Pengalaman dan pembelajaran saya selama magang.",
      aboutEduTitle:"Pendidikan", aboutEduSub:"Perjalanan pendidikan saya.",
      contactPrompt:"Punya pertanyaan, feedback, atau mau kolaborasi?",
      contactLocation:"Kota Bekasi, Jawa Barat",
      salutation:"Salam hangat,", showDetail:"Tampilkan detail", hideDetail:"Sembunyikan detail",
      projectFilterType:"TIPE", projectFilterCategory:"KATEGORI",
      projectViewDetail:"Lihat Detail", projectBack:"Kembali", issuedOn:"Terbit"
    },
    skillTabs: { all:"Semua", utama:"Utama", frontend:"Front End", backend:"Backend", database:"Database", tools:"Alat" },
    project: { featured:"Featured" },
    achievement: { searchPlaceholder:"Cari...", filterType:"Filter berdasarkan Tipe", filterCategory:"Filter berdasarkan Kategori", total:"Total", viewDetail:"Lihat detail", issuedOn:"Terbit" },
    command: {
      button:"Palet Perintah", placeholder:"Cari perintah...", noResult:"Tidak ada hasil.",
      groups: { pages:"Halaman", layout:"Tata Letak", language:"Bahasa" },
      layoutSidebar:"Ganti ke Tata Letak Sidebar", layoutTopbar:"Ganti ke Tata Letak Topbar",
      langEn:"Ganti ke Bahasa Inggris", langId:"Ganti ke Bahasa Indonesia"
    },
    layout: { toggleTitle:"Ganti Layout", switchedSidebar:"Tata letak sidebar aktif.", switchedTopbar:"Tata letak topbar aktif." },
    language: { switched:"Bahasa berhasil diubah." }
  },
  en: {
    appTitle: "Fadel Muhammad | Frontend Developer - Personal Website",
    profile: { status:"Let's Collaborate", statusAlt:"Building Cool Things" },
    nav: { beranda:"Home",tentang:"About",pencapaian:"Achievements",proyek:"Projects",kegunaan:"Uses",kontak:"Contact",links:"Playlist" },
    hero: {
      title:"Hi, I am Fadel Muhammad",
      subtitle:"Web Developer & UI/UX Designer focused on modern interfaces and comfortable user experience.",
      metaLocation:"Bekasi City, West Java", metaWork:"Let's Collaborate",
      p1:"A Web Developer & UI/UX Designer dedicated to building impactful digital solutions. I specialize in scalable web platforms and user-friendly interface design using a tech stack including PHP, TypeScript, Next.js, and Figma.",
      p2:"My focus is on designing well-structured website architecture that is easy to maintain. I combine technical expertise with proactive communication and leadership to ensure every project delivers logical clarity and real-world impact."
    },
    pages: {
      beranda:{ title:"Hi, I am Fadel Muhammad", sub:"Web Developer & UI/UX Designer focused on modern interfaces and comfortable user experience." },
      tentang:{ title:"About", sub:"A short introduction about who I am." },
      pencapaian:{ title:"Achievements", sub:"A collection of certificates and badges I have earned throughout my professional and academic journey." },
      proyek:{ title:"Projects", sub:"Showcase of personal and open-source projects I have built or contributed to." },
      kegunaan:{ title:"Uses", sub:"Tools and setup I use for daily productivity." },
      kontak:{ title:"Contact", sub:"Find me on social media." },
      links:{ title:"Links", sub:"My important links list." }
    },
    sections: {
      skillTitle:"Skills", skillSub:"My professional skills.",
      aboutCareerTitle:"Career", aboutCareerSub:"My professional journey.",
      aboutEduTitle:"Education", aboutEduSub:"My education journey.",
      contactPrompt:"Have a question, feedback, or want to collaborate?",
      contactLocation:"Bekasi City, West Java",
      salutation:"Warm regards,", showDetail:"Show details", hideDetail:"Hide details",
      projectFilterType:"TYPE", projectFilterCategory:"CATEGORY",
      projectViewDetail:"View Detail", projectBack:"Back", issuedOn:"Issued"
    },
    skillTabs: { all:"All", utama:"Core", frontend:"Front End", backend:"Backend", database:"Database", tools:"Tools" },
    project: { featured:"Featured" },
    achievement: { searchPlaceholder:"Search...", filterType:"Filter by Type", filterCategory:"Filter by Category", total:"Total", viewDetail:"View detail", issuedOn:"Issued" },
    command: {
      button:"Command Palette", placeholder:"Search command...", noResult:"No results found.",
      groups:{ pages:"Pages", layout:"Layout", language:"Language" },
      layoutSidebar:"Switch to Sidebar Layout", layoutTopbar:"Switch to Topbar Layout",
      langEn:"Switch to English", langId:"Switch to Indonesian"
    },
    layout:{ toggleTitle:"Switch Layout", switchedSidebar:"Sidebar layout enabled.", switchedTopbar:"Topbar layout enabled." },
    language:{ switched:"Language updated." }
  }
};

function byId(id) { return document.getElementById(id); }

function t(path) {
  const pick = (obj) => path.split(".").reduce((acc, key) => (acc && Object.prototype.hasOwnProperty.call(acc, key) ? acc[key] : undefined), obj);
  return pick(I18N[state.lang]) ?? pick(I18N.id);
}

function tx(value) {
  if (value && typeof value === "object" && !Array.isArray(value) && ("id" in value || "en" in value)) {
    return value[state.lang] ?? value.id ?? value.en ?? "";
  }
  return value ?? "";
}

function escapeHtml(text) {
  return String(text).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;");
}

function hexToRgba(hex, alpha = 0.22) {
  const sanitized = hex.replace("#","");
  const full = sanitized.length === 3 ? sanitized.split("").map(x=>x+x).join("") : sanitized;
  const int = Number.parseInt(full, 16);
  return `rgba(${(int>>16)&255}, ${(int>>8)&255}, ${int&255}, ${alpha})`;
}

function toast(message) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  Object.assign(el.style, { position:"fixed", left:"50%", bottom:"26px", transform:"translateX(-50%)", background:"#111825", border:"1px solid rgba(255,255,255,0.16)", color:"#e5e7eb", padding:"10px 14px", borderRadius:"10px", zIndex:"1000", fontSize:"14px" });
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2200);
}

function applyTheme(themeId) {
  const map = { dark:"dark", dim:"dim", light:"light", contrast:"contrast", focus:"focus" };
  state.theme = themeId;
  document.documentElement.setAttribute("data-theme", map[themeId] || "dark");
  localStorage.setItem("portfolio-theme", themeId);
  document.querySelectorAll(".theme-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.theme === themeId));
}

function navLabel(item) { return t(`nav.${item.id}`) || item.label; }

function localizedHero() {
  return {
    title: t("hero.title"), subtitle: t("hero.subtitle"), p1: t("hero.p1"), p2: t("hero.p2"),
    meta: [{ icon:"location", text:t("hero.metaLocation") }, { icon:"briefcase", text:t("hero.metaWork") }]
  };
}

function updateStaticCopy() {
  document.title = t("appTitle");
  document.documentElement.setAttribute("lang", state.lang === "en" ? "en" : "id");
  if (byId("profile-status")) {
    const _s1 = t("profile.status"), _s2 = t("profile.statusAlt");
    byId("profile-status").innerHTML = `<span class="status-pill-text"><span>${_s1}</span><span>${_s2}</span></span>`;
    requestAnimationFrame(() => {
      const _pt = byId("profile-status").querySelector(".status-pill-text");
      if (_pt) {
        const _spans = _pt.querySelectorAll("span");
        const _cv = document.createElement("canvas");
        const _ctx = _cv.getContext("2d");
        const _st = getComputedStyle(_pt);
        _ctx.font = _st.fontSize + " " + _st.fontFamily;
        const _w = Math.max(...[..._spans].map(s => _ctx.measureText(s.textContent).width));
        _pt.style.width = Math.ceil(_w) + 4 + "px";
      }
    });
  }
  if (byId("cmd-input")) byId("cmd-input").placeholder = t("command.placeholder");
  if (byId("ach-search")) byId("ach-search").placeholder = t("achievement.searchPlaceholder");
  if (byId("layout-toggle")) byId("layout-toggle").title = t("layout.toggleTitle");
  if (byId("skills-title-text")) byId("skills-title-text").textContent = t("sections.skillTitle");
  if (byId("skills-sub-text")) byId("skills-sub-text").textContent = t("sections.skillSub");
  if (byId("career-title-text")) byId("career-title-text").textContent = t("sections.aboutCareerTitle");
  if (byId("education-title-text")) byId("education-title-text").textContent = t("sections.aboutEduTitle");
  if (byId("salutation-text")) byId("salutation-text").textContent = t("sections.salutation");

  const pages = t("pages") || {};
  Object.entries(pages).forEach(([id, copy]) => {
    if (id === "links") return; // halaman Spotify — skip auto-update title
    const page = byId(`page-${id}`);
    if (!page) return;
    const title = page.querySelector(".page-title");
    const sub = page.querySelector(".page-sub");
    if (title) title.textContent = copy.title;
    if (sub) sub.textContent = copy.sub;
  });

  const aboutPage = byId("page-tentang");
  const aboutSubs = aboutPage?.querySelectorAll(".section-sub") || [];
  if (aboutSubs[0]) aboutSubs[0].textContent = t("sections.aboutCareerSub");
  if (aboutSubs[1]) aboutSubs[1].textContent = t("sections.aboutEduSub");
  if (byId("project-filter-type-label")) byId("project-filter-type-label").textContent = t("sections.projectFilterType");
  if (byId("project-filter-category-label")) byId("project-filter-category-label").textContent = t("sections.projectFilterCategory");
  if (byId("proj-back-label")) byId("proj-back-label").textContent = t("sections.projectBack");
}

const ACH_CATEGORY_TRANSLATIONS = { "Bisnis": { id:"Bisnis", en:"Business" } };
function localizeAchLabel(label) { const map = ACH_CATEGORY_TRANSLATIONS[label]; return map ? tx(map) : label; }

function rerenderLocalizedContent() {
  renderNav(); renderHome(); renderAbout(); renderProjects();
  renderAchievementFilters(); renderAchievements(); renderUses(); renderContacts(); renderLinks();
  navigate(state.page, false);
  if (state.projectSlug && !byId("project-detail-view").classList.contains("hidden")) {
    const project = DATA.projects.items.find(p => p.slug === state.projectSlug);
    if (project) {
      if (byId("proj-detail-desc")) byId("proj-detail-desc").textContent = tx(project.desc);
      const fallback = byId("proj-readme-fallback");
      if (fallback && !fallback.classList.contains("hidden") && project.detail) {
        fallback.innerHTML = tx(project.detail);
        highlightCodeBlocks(fallback);
      }
    }
  }
  if (cmdOpen) renderCommandPalette(byId("cmd-input").value);
}

function applyLayout(layout, { showToast = false } = {}) {
  state.layout = layout === "topbar" ? "topbar" : "sidebar";
  localStorage.setItem("portfolio-layout", state.layout);
  document.body.classList.toggle("layout-topbar", state.layout === "topbar");
  document.body.classList.toggle("layout-sidebar", state.layout === "sidebar");
  if (showToast) toast(state.layout === "topbar" ? t("layout.switchedTopbar") : t("layout.switchedSidebar"));
  if (cmdOpen) renderCommandPalette(byId("cmd-input").value);
}

function applyLanguage(lang, { showToast = false, rerender = true } = {}) {
  state.lang = lang === "en" ? "en" : "id";
  localStorage.setItem("portfolio-lang", state.lang);
  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === state.lang));
  updateStaticCopy();
  if (rerender) rerenderLocalizedContent();
  if (showToast) toast(t("language.switched"));
}

function navigate(pageId, syncHash = true) {
  if (pageId !== "proyek" && state.projectSlug) {
    state.projectSlug = null;
    const dv = byId("project-detail-view"), lv = byId("project-list-view");
    if (dv) dv.classList.add("hidden");
    if (lv) lv.classList.remove("hidden");
  }
  state.page = pageId;
  document.querySelectorAll(".page").forEach(page => page.classList.toggle("active", page.id === `page-${pageId}`));
  document.querySelectorAll(".nav-item").forEach(nav => nav.classList.toggle("active", nav.dataset.page === pageId));
  const drawer = byId("mobile-drawer");
  if (drawer) { drawer.classList.remove("open"); const h = byId("mobile-menu-btn"); if (h) h.classList.remove("is-open"); }
  if (syncHash) {
    // Tampilkan alias URL (mis. links -> #spotify)
    history.replaceState(null, "", `#${HASH_DISPLAY[pageId] || pageId}`);
  }
  window.scrollTo({ top: 0, behavior: "auto" });
}

function renderNav() {
  const desktop = byId("sb-nav"), mobileNav = byId("mob-nav");
  let navMarkup = DATA.nav.map(item => `
    <a href="#${HASH_DISPLAY[item.id] || item.id}" class="nav-item" data-page="${item.id}">
      <span class="nav-item-left">${ICONS[item.icon] || ""}<span>${escapeHtml(navLabel(item))}</span></span>
      <span class="nav-arrow">${ICONS.chevronRight}</span>
    </a>
  `).join("");
  const paletteMarkup = `
    <button class="nav-item nav-palette-btn" type="button">
      <span class="nav-item-left">${ICONS.search || ""}<span>${t("command.button")}</span></span>
      <span class="nav-kbd">Ctrl+K</span>
    </button>`;
  navMarkup += paletteMarkup;
  if (desktop) desktop.innerHTML = navMarkup;
  if (mobileNav) mobileNav.innerHTML = navMarkup;
  document.querySelectorAll(".nav-item[data-page]").forEach(node => {
    node.addEventListener("click", (e) => { e.preventDefault(); navigate(node.dataset.page); closeDrawer(); });
  });
  document.querySelectorAll(".nav-palette-btn").forEach(btn => btn.addEventListener("click", () => toggleCommandPalette(true)));
}

function renderThemes() {
  const themeHTML = DATA.themes.map(theme => `<button class="theme-btn" type="button" data-theme="${theme.id}" title="${theme.title||theme.id}">${ICONS[theme.icon]||""}</button>`).join("");
  const wrap = byId("theme-switch");
  wrap.innerHTML = themeHTML;
  wrap.querySelectorAll(".theme-btn").forEach(btn => btn.addEventListener("click", () => applyTheme(btn.dataset.theme)));
  const mobWrap = byId("mob-theme-switch");
  if (mobWrap) { mobWrap.innerHTML = themeHTML; mobWrap.querySelectorAll(".theme-btn").forEach(btn => btn.addEventListener("click", () => applyTheme(btn.dataset.theme))); }
}

function renderHome() {
  const hero = localizedHero();
  if (byId("hero-title")) byId("hero-title").textContent = hero.title;
  if (byId("hero-sub")) byId("hero-sub").textContent = hero.subtitle;
  if (byId("hero-meta")) byId("hero-meta").innerHTML = hero.meta.map(item => `<li>${ICONS[item.icon]||""}${escapeHtml(item.text)}</li>`).join("");
  if (byId("hero-p1")) byId("hero-p1").textContent = hero.p1;
  if (byId("hero-p2")) byId("hero-p2").textContent = hero.p2;
  const counts = { all: DATA.skills.length };
  DATA.skills.forEach(skill => {
    const cats = Array.isArray(skill.category) ? skill.category : [skill.category];
    cats.forEach(c => { counts[c] = (counts[c] || 0) + 1; });
  });
  const skillTabs = byId("skill-tabs");
  if (skillTabs) {
    skillTabs.innerHTML = DATA.skillTabs.map(tab => `
      <button class="skill-tab ${state.skillTab === tab.id ? "active" : ""}" type="button" data-skill-tab="${tab.id}">
        <span>${escapeHtml(t(`skillTabs.${tab.id}`) || tab.label)}</span>
        <span class="skill-tab-count">${counts[tab.id] || 0}</span>
      </button>`).join("");
    skillTabs.querySelectorAll("[data-skill-tab]").forEach(btn => btn.addEventListener("click", () => { state.skillTab = btn.dataset.skillTab; renderHome(); }));
  }
  const list = state.skillTab === "all" ? DATA.skills : DATA.skills.filter(item => Array.isArray(item.category) ? item.category.includes(state.skillTab) : item.category === state.skillTab);
  const skillGrid = byId("skill-grid");
  if (skillGrid) skillGrid.innerHTML = list.map((skill, i) => `<span class="skill-pill ${skill.colorClass || ""}" style="animation-delay:${i * 30}ms"><i class="${skill.icon}"></i><span>${skill.name}</span></span>`).join("");
}

function renderAbout() {
  byId("about-paragraphs").innerHTML = DATA.about.paragraphs.map(p => `<p>${escapeHtml(tx(p))}</p>`).join("");
  byId("about-signature").textContent = DATA.about.signature;
  byId("career-list").innerHTML = DATA.about.careers.map((career, index) => `
    <article class="career-card">
      <div class="career-logo"><img src="${career.logo}" alt="${escapeHtml(tx(career.role))}" /></div>
      <div>
        <h3 class="career-title">${escapeHtml(tx(career.role))}</h3>
        <p class="career-company">${escapeHtml(tx(career.company))}</p>
        <p class="career-extra">${escapeHtml(tx(career.period))}</p>
        <button class="career-toggle" type="button" data-career-index="${index}">${ICONS.chevronRight} ${escapeHtml(t("sections.showDetail"))}</button>
        <p class="career-detail" id="career-detail-${index}">${escapeHtml(tx(career.detail))}</p>
      </div>
    </article>`).join("");
  byId("career-list").querySelectorAll("[data-career-index]").forEach(btn => {
    btn.addEventListener("click", () => {
      const detail = byId(`career-detail-${btn.dataset.careerIndex}`);
      const isOpen = detail.classList.contains("open");
      detail.classList.toggle("open", !isOpen);
      btn.classList.toggle("open", !isOpen);
      btn.innerHTML = !isOpen ? `${ICONS.chevronRight} ${escapeHtml(t("sections.hideDetail"))}` : `${ICONS.chevronRight} ${escapeHtml(t("sections.showDetail"))}`;
    });
  });
  byId("edu-list").innerHTML = DATA.about.education.map(edu => `
    <article class="edu-card">
      <div class="edu-logo"><img src="${edu.logo}" alt="${escapeHtml(tx(edu.name))}" /></div>
      <div class="edu-info"><h3 class="edu-name">${escapeHtml(tx(edu.name))}</h3><p class="edu-meta">${escapeHtml(tx(edu.meta))}</p></div>
    </article>`).join("");
}

function projectTabKey(tab) { if (tab && typeof tab === "object") return tab.key ?? tab.id ?? tab.en ?? ""; return tab; }
function projectTabLabel(tab) { if (tab && typeof tab === "object" && ("id" in tab || "en" in tab)) return tx(tab); return tab; }

function renderProjects() {
  byId("project-type-tabs").innerHTML = DATA.projects.typeTabs.map(tab => {
    const key = projectTabKey(tab);
    return `<button class="filter-tab ${state.projectType===key?"active":""}" type="button" data-project-type="${escapeHtml(key)}">${escapeHtml(projectTabLabel(tab))}</button>`;
  }).join("");
  byId("project-category-tabs").innerHTML = DATA.projects.categoryTabs.map(tab => {
    const key = projectTabKey(tab);
    return `<button class="filter-tab ${state.projectCategory===key?"active":""}" type="button" data-project-category="${escapeHtml(key)}">${escapeHtml(projectTabLabel(tab))}</button>`;
  }).join("");
  byId("project-type-tabs").querySelectorAll("[data-project-type]").forEach(btn => btn.addEventListener("click", () => { state.projectType = btn.dataset.projectType; renderProjects(); }));
  byId("project-category-tabs").querySelectorAll("[data-project-category]").forEach(btn => btn.addEventListener("click", () => { state.projectCategory = btn.dataset.projectCategory; renderProjects(); }));
  const list = DATA.projects.items.filter(item => {
    const typeOk = state.projectType === "Semua" || item.type === state.projectType;
    const catOk = state.projectCategory === "Semua" || item.category === state.projectCategory;
    return typeOk && catOk;
  });
  byId("project-grid").innerHTML = list.map(project => `
    <article class="project-card" data-slug="${project.slug}" tabindex="0" aria-label="Lihat detail proyek ${escapeHtml(project.title)}">
      <div class="project-thumb">
        <img src="${project.image}" alt="${escapeHtml(project.title)}" width="740" height="350" ${project.featured ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} />
        ${project.featured ? `<span class="featured-badge">${ICONS.pin} ${escapeHtml(t("project.featured"))}</span>` : ""}
        <div class="project-thumb-overlay">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          <span>${escapeHtml(t("sections.projectViewDetail"))}</span>
        </div>
      </div>
      <div class="project-body">
        <h3 class="project-title">${escapeHtml(project.title)}</h3>
        <p class="project-desc">${escapeHtml(tx(project.desc))}</p>
        <div class="project-tech">${renderTechIcons(project.tech)}</div>
        <div class="project-links">
          ${project.links.filter(l=>l.url&&l.url!=="#").map(link=>`<a href="${link.url}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>${escapeHtml(link.label)}</a>`).join("")}
        </div>
      </div>
    </article>`).join("");
  byId("project-grid").querySelectorAll(".project-card[data-slug]").forEach(card => {
    card.addEventListener("click", () => openProjectDetail(card.dataset.slug));
    card.addEventListener("keydown", e => { if (e.key==="Enter"||e.key===" ") openProjectDetail(card.dataset.slug); });
  });
}

async function fetchReadme(githubRaw) {
  for (const branch of ["main","master"]) {
    try {
      const res = await fetch(`https://raw.githubusercontent.com/${githubRaw}/${branch}/README.md`);
      if (res.ok) return await res.text();
    } catch (_) {}
  }
  return null;
}

async function openProjectDetail(slug) {
  const project = DATA.projects.items.find(p => p.slug === slug);
  if (!project) return;
  state.projectSlug = slug;
  history.replaceState(null, "", `#proyek/${slug}`);
  window.scrollTo({ top: 0, behavior: "auto" });
  byId("project-list-view").classList.add("hidden");
  byId("project-detail-view").classList.remove("hidden");
  byId("proj-detail-title").textContent = project.title;
  byId("proj-detail-desc").textContent = tx(project.desc);
  byId("proj-detail-tech").innerHTML = renderTechIcons(project.tech).replace(/class="tech-icon"/g, 'class="tech-icon proj-detail-tech-icon"');

  const ICON_GITHUB = `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-3 .7-3.6-1.3-3.6-1.3-.4-1-.9-1.3-.9-1.3-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.2 1 2.8.8.1-.6.3-1 .6-1.2-2.4-.3-4.9-1.2-4.9-5.3 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 4.1-2.5 5-4.9 5.3.4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>`;
  const ICON_LIVE = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
  byId("proj-detail-links").innerHTML = project.links.filter(l=>l.url&&l.url!=="#").map(l => {
    const isGithub = l.label.toLowerCase().includes("github") || l.label.toLowerCase().includes("kode");
    return `<a class="proj-detail-link ${isGithub?"proj-link-github":"proj-link-live"}" href="${l.url}" target="_blank" rel="noreferrer">${isGithub?ICON_GITHUB:ICON_LIVE}${escapeHtml(l.label)}</a>`;
  }).join("");

  // README area — skeleton menggantikan spinner
  const skeleton = byId("proj-readme-skeleton");
  const content  = byId("proj-readme-content");
  const fallback = byId("proj-readme-fallback");
  skeleton.classList.add("hidden");
  content.classList.add("hidden");
  fallback.classList.add("hidden");

  if (project.github_raw) {
    // Tampilkan skeleton saat fetch README dari GitHub
    skeleton.classList.remove("hidden");
    const readme = await fetchReadme(project.github_raw);
    skeleton.classList.add("hidden");
    if (readme && typeof marked !== "undefined") {
      content.innerHTML = marked.parse(readme);
      highlightCodeBlocks(content);
      content.classList.remove("hidden");
    } else if (project.detail) {
      // Fetch gagal → fallback konten lokal dengan skeleton singkat
      skeleton.classList.remove("hidden");
      await new Promise(r => setTimeout(r, 280));
      skeleton.classList.add("hidden");
      fallback.innerHTML = tx(project.detail);
      highlightCodeBlocks(fallback);
      fallback.classList.remove("hidden");
    }
  } else if (project.detail) {
    // Konten lokal: skeleton 280ms agar transisi terasa halus
    skeleton.classList.remove("hidden");
    await new Promise(r => setTimeout(r, 280));
    skeleton.classList.add("hidden");
    fallback.innerHTML = tx(project.detail);
    highlightCodeBlocks(fallback);
    fallback.classList.remove("hidden");
  }
}

function highlightCodeBlocks(root) {
  if (typeof hljs === "undefined" || !root) return;
  root.querySelectorAll("pre code").forEach(el => { try { el.removeAttribute("data-highlighted"); hljs.highlightElement(el); } catch(_){} });
}

function closeProjectDetail() {
  state.projectSlug = null;
  history.replaceState(null, "", "#proyek");
  window.scrollTo({ top: 0, behavior: "auto" });
  byId("project-detail-view").classList.add("hidden");
  byId("project-list-view").classList.remove("hidden");
}

function filteredAchievements() {
  return DATA.achievements.filter(item => {
    const q = state.achSearch.trim().toLowerCase();
    const searchOk = !q || [item.title,item.org,item.code,item.category].some(f => f.toLowerCase().includes(q));
    return searchOk && (state.achType==="all"||item.type===state.achType) && (state.achCategory==="all"||item.category===state.achCategory);
  });
}

function renderAchievementFilters() {
  const typeSelect = byId("ach-type-filter"), categorySelect = byId("ach-category-filter");
  const types = [...new Set(DATA.achievements.map(i=>i.type))];
  const categories = [...new Set(DATA.achievements.map(i=>i.category))];
  typeSelect.innerHTML = `<option value="all">${escapeHtml(t("achievement.filterType"))}</option>${types.map(type=>`<option value="${type}">${escapeHtml(localizeAchLabel(type))}</option>`).join("")}`;
  categorySelect.innerHTML = `<option value="all">${escapeHtml(t("achievement.filterCategory"))}</option>${categories.map(cat=>`<option value="${cat}">${escapeHtml(localizeAchLabel(cat))}</option>`).join("")}`;
  typeSelect.value = state.achType;
  categorySelect.value = state.achCategory;
}

function renderAchievements() {
  const items = filteredAchievements();
  byId("ach-total").textContent = `${t("achievement.total")}: ${items.length}`;
  byId("ach-grid").innerHTML = items.map(item => `
    <article class="ach-card" data-ach-id="${item.id}">
      <div class="ach-preview" data-ach-id="${item.id}">
        <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" />
        <div class="ach-overlay"><button class="ach-view-btn" type="button" data-ach-id="${item.id}">${escapeHtml(t("achievement.viewDetail"))}</button></div>
      </div>
      <div class="ach-body">
        <div class="ach-code">${escapeHtml(item.code)}</div>
        <h3 class="ach-title">${escapeHtml(item.title)}</h3>
        <p class="ach-org">${escapeHtml(item.org)}</p>
        <div class="ach-chips"><span class="ach-chip">${escapeHtml(localizeAchLabel(item.type))}</span><span class="ach-chip">${escapeHtml(localizeAchLabel(item.category))}</span></div>
        <div class="ach-bottom"><span>${escapeHtml(t("achievement.issuedOn"))} ${escapeHtml(tx(item.date))}</span><span>${ICONS.link}</span></div>
      </div>
      <div class="ach-actions"><button class="ach-open-btn" type="button" data-ach-id="${item.id}">${ICONS.plus}</button></div>
    </article>`).join("");
}

function openAchievementModal(itemId) {
  const item = DATA.achievements.find(e => e.id === itemId);
  if (!item) return;
  byId("ach-modal-image").src = item.image; byId("ach-modal-image").alt = item.title;
  byId("ach-modal-title").textContent = item.title; byId("ach-modal-org").textContent = item.org;
  byId("ach-modal-code").textContent = item.code; byId("ach-modal-type").textContent = localizeAchLabel(item.type);
  byId("ach-modal-category").textContent = localizeAchLabel(item.category); byId("ach-modal-date").textContent = tx(item.date);
  byId("ach-modal-link").href = item.credentialUrl;
  const modal = byId("achievement-modal");
  modal.classList.remove("hidden"); modal.setAttribute("aria-hidden","false"); document.body.style.overflow = "hidden";
}

function closeAchievementModal() {
  const modal = byId("achievement-modal");
  modal.classList.add("hidden"); modal.setAttribute("aria-hidden","true"); document.body.style.overflow = "";
}

function renderUses() {
  const groupIcons = {
    "Perangkat Keras":`<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    "Editor":`<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    "Terminal":`<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
    "Aplikasi":`<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    "Tech Stack":`<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  };
  byId("uses-list").innerHTML = DATA.uses.map(group => {
    const iconKey = (group.group && typeof group.group === "object") ? (group.group.id ?? group.group.en) : group.group;
    return `<section class="uses-group"><h3 class="uses-group-title">${groupIcons[iconKey]||""} ${escapeHtml(tx(group.group))}</h3><div class="uses-items">${group.items.map(item=>`<article class="use-item"><strong class="use-name">${escapeHtml(tx(item.name))}</strong><p class="use-desc">${escapeHtml(tx(item.desc))}</p></article>`).join("")}</div></section>`;
  }).join("");
}

function renderContacts() {
  byId("contact-grid").innerHTML = DATA.contacts.map(item => `
    <a class="contact-badge" href="${item.url}" ${item.url.startsWith("mailto:") ? "" : 'target="_blank" rel="noreferrer"'}>
      <span class="contact-badge-label">${ICONS[item.icon] || ""}${escapeHtml(item.label)}</span>
      <span class="contact-badge-value">${escapeHtml(item.value)}</span>
    </a>`).join("");
  byId("contact-prompt").textContent = t("sections.contactPrompt");
  byId("contact-location").textContent = `${t("sections.contactLocation")} · ${new Date().getFullYear()}`;
}

function renderLinks() {
  const el = byId("links-list");
  if (!el) return;
  el.innerHTML = DATA.links.map(item=>`<a class="link-item" href="${item.url}" target="_blank" rel="noreferrer"><h3>${escapeHtml(tx(item.title))}</h3><p>${escapeHtml(tx(item.desc))}</p></a>`).join("");
}

function getCommandItems() {
  const pageItems = DATA.nav.map(item => ({ type:"page", group:t("command.groups.pages"), id:item.id, icon:item.icon, label:navLabel(item) }));
  const layoutItems = [
    { type:"action", group:t("command.groups.layout"), action:"set-layout-sidebar", icon:"layout", label:t("command.layoutSidebar"), hint:"SB", disabled:state.layout==="sidebar" },
    { type:"action", group:t("command.groups.layout"), action:"set-layout-topbar",  icon:"monitor", label:t("command.layoutTopbar"),  hint:"TB", disabled:state.layout==="topbar" }
  ];
  const languageItems = [
    { type:"action", group:t("command.groups.language"), action:"set-lang-en", icon:"location", label:t("command.langEn"), hint:"US", disabled:state.lang==="en" },
    { type:"action", group:t("command.groups.language"), action:"set-lang-id", icon:"location", label:t("command.langId"), hint:"ID", disabled:state.lang==="id" }
  ];
  return [...pageItems, ...layoutItems, ...languageItems];
}

function runCommandAction(action) {
  if (action==="set-layout-sidebar") { applyLayout("sidebar",{showToast:true}); return true; }
  if (action==="set-layout-topbar")  { applyLayout("topbar",{showToast:true}); return true; }
  if (action==="set-lang-en") { applyLanguage("en",{showToast:true,rerender:true}); return true; }
  if (action==="set-lang-id") { applyLanguage("id",{showToast:true,rerender:true}); return true; }
  return false;
}

function renderCommandPalette(query = "") {
  const q = query.trim().toLowerCase();
  const rows = getCommandItems().filter(item => item.label.toLowerCase().includes(q));
  if (!rows.length) { byId("cmd-results").innerHTML = `<div class="cmd-row"><span>${escapeHtml(t("command.noResult"))}</span></div>`; return; }
  let groupName = "", html = "";
  rows.forEach(item => {
    if (item.group !== groupName) { groupName = item.group; html += `<div class="cmd-group">${escapeHtml(groupName)}</div>`; }
    if (item.type === "page") { html += `<div class="cmd-row" data-page="${item.id}"><span class="cmd-row-left">${ICONS[item.icon]||""}<span>${escapeHtml(item.label)}</span></span><span>${ICONS.chevronRight}</span></div>`; return; }
    html += `<div class="cmd-row ${item.disabled?"disabled":""}" data-action="${item.action}"><span class="cmd-row-left">${ICONS[item.icon]||""}<span>${escapeHtml(item.label)}</span></span><span class="cmd-hint">${escapeHtml(item.hint)}</span></div>`;
  });
  byId("cmd-results").innerHTML = html;
  byId("cmd-results").querySelectorAll("[data-page]").forEach(row => row.addEventListener("click", () => { navigate(row.dataset.page); toggleCommandPalette(false); }));
  byId("cmd-results").querySelectorAll("[data-action]").forEach(row => row.addEventListener("click", () => { if (row.classList.contains("disabled")) return; if (runCommandAction(row.dataset.action)) toggleCommandPalette(false); }));
}

function toggleCommandPalette(next) {
  cmdOpen = next;
  const overlay = byId("cmd-overlay");
  overlay.classList.toggle("hidden", !next);
  overlay.setAttribute("aria-hidden", String(!next));
  if (next) { byId("cmd-input").value = ""; renderCommandPalette(""); byId("cmd-input").focus(); }
}

function bindEvents() {
  byId("ach-search").addEventListener("input", e => { state.achSearch = e.target.value; renderAchievements(); });
  byId("ach-type-filter").addEventListener("change", e => { state.achType = e.target.value; renderAchievements(); });
  byId("ach-category-filter").addEventListener("change", e => { state.achCategory = e.target.value; renderAchievements(); });
  byId("ach-grid").addEventListener("click", e => { const t = e.target.closest("[data-ach-id]"); if (t) openAchievementModal(t.dataset.achId); });
  byId("achievement-modal").addEventListener("click", e => { if (e.target === byId("achievement-modal")) closeAchievementModal(); });
  byId("ach-modal-close").addEventListener("click", closeAchievementModal);
  document.addEventListener("keydown", e => {
    if ((e.ctrlKey||e.metaKey) && e.key.toLowerCase()==="k") { e.preventDefault(); toggleCommandPalette(!cmdOpen); }
    if (e.key==="Escape") { if (cmdOpen) toggleCommandPalette(false); if (!byId("achievement-modal").classList.contains("hidden")) closeAchievementModal(); }
  });
  byId("cmd-overlay").addEventListener("click", e => { if (e.target===byId("cmd-overlay")) toggleCommandPalette(false); });
  byId("cmd-input").addEventListener("input", e => renderCommandPalette(e.target.value));
  byId("layout-toggle").addEventListener("click", () => applyLayout(state.layout==="sidebar"?"topbar":"sidebar", {showToast:true}));
  byId("mobile-menu-btn").addEventListener("click", () => { const isOpen = byId("mobile-drawer").classList.toggle("open"); byId("mobile-menu-btn").classList.toggle("is-open", isOpen); });
  if (byId("mob-close-btn")) byId("mob-close-btn").addEventListener("click", () => closeDrawer());
  if (byId("mob-right-panel")) byId("mob-right-panel").addEventListener("click", () => closeDrawer());
  byId("back-top").addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));
  byId("proj-back-btn").addEventListener("click", () => closeProjectDetail());
  window.addEventListener("scroll", () => { byId("back-top").style.opacity = window.scrollY > 260 ? "1" : "0.6"; });
}

function setStaticIcons() {
  const iconElements = { "verified-icon":ICONS.verified,"layout-icon":ICONS.layout,"palette-icon":ICONS.palette,"code-icon":ICONS.code,"briefcase-icon":ICONS.briefcase,"education-icon":ICONS.education,"ach-search-icon":ICONS.search,"up-icon":ICONS.up,"wa-icon":ICONS.whatsapp,"close-icon":ICONS.close,"mob-verified-icon":ICONS.verified,"external-icon":ICONS.external,"cmd-icon":ICONS.search };
  Object.entries(iconElements).forEach(([id, icon]) => { const el = byId(id); if (el) el.innerHTML = icon; });
}

function initProfile() {
  if (byId("profile-avatar")) byId("profile-avatar").src = DATA.profile.avatar;
  if (byId("profile-name")) byId("profile-name").textContent = DATA.profile.name;
  if (byId("profile-status")) {
    const _s1 = t("profile.status"), _s2 = t("profile.statusAlt");
    byId("profile-status").innerHTML = `<span class="status-pill-text"><span>${_s1}</span><span>${_s2}</span></span>`;
    requestAnimationFrame(() => {
      const _pt = byId("profile-status").querySelector(".status-pill-text");
      if (_pt) {
        const _spans = _pt.querySelectorAll("span");
        const _cv = document.createElement("canvas");
        const _ctx = _cv.getContext("2d");
        const _st = getComputedStyle(_pt);
        _ctx.font = _st.fontSize + " " + _st.fontFamily;
        const _w = Math.max(...[..._spans].map(s => _ctx.measureText(s.textContent).width));
        _pt.style.width = Math.ceil(_w) + 4 + "px";
      }
    });
  }
  if (byId("mobile-avatar")) byId("mobile-avatar").src = DATA.profile.avatar;
  if (byId("mobile-name")) byId("mobile-name").textContent = DATA.profile.name;
  if (byId("mob-profile-name")) byId("mob-profile-name").textContent = DATA.profile.name;
  if (byId("wa-button")) byId("wa-button").href = DATA.profile.whatsapp;
}

function closeDrawer() {
  byId("mobile-drawer").classList.remove("open");
  const hambtn = byId("mobile-menu-btn");
  if (hambtn) hambtn.classList.remove("is-open");
}

function updateMobLangBtn() { const btn = byId("mob-lang-toggle"); if (btn) btn.textContent = state.lang === "id" ? "ID" : "US"; }

function updateMobThemeBtn() {
  const btn = byId("mob-theme-cycle");
  if (!btn) return;
  const THEME_ICONS = {
    dark:     DATA.themes.find(t=>t.id==="dark")     ? ICONS[DATA.themes.find(t=>t.id==="dark").icon]     : "🌙",
    light:    DATA.themes.find(t=>t.id==="light")    ? ICONS[DATA.themes.find(t=>t.id==="light").icon]    : "☀️",
    dim:      DATA.themes.find(t=>t.id==="dim")      ? ICONS[DATA.themes.find(t=>t.id==="dim").icon]      : "⚡",
    contrast: DATA.themes.find(t=>t.id==="contrast") ? ICONS[DATA.themes.find(t=>t.id==="contrast").icon] : "🌙",
    focus:    DATA.themes.find(t=>t.id==="focus")    ? ICONS[DATA.themes.find(t=>t.id==="focus").icon]    : "❤️",
  };
  btn.innerHTML = THEME_ICONS[state.theme] || "🌙";
}

function initMobControls() {
  const THEME_ORDER = ["dark","light","dim","contrast","focus"];
  const langBtn = byId("mob-lang-toggle");
  if (langBtn) { updateMobLangBtn(); langBtn.addEventListener("click", () => { applyLanguage(state.lang==="id"?"en":"id",{showToast:true,rerender:true}); updateMobLangBtn(); }); }
  const themeBtn = byId("mob-theme-cycle");
  if (themeBtn) { updateMobThemeBtn(); themeBtn.addEventListener("click", () => { applyTheme(THEME_ORDER[(THEME_ORDER.indexOf(state.theme)+1)%THEME_ORDER.length]); updateMobThemeBtn(); }); }
}

function initLangButtons() {
  document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", () => { applyLanguage(button.dataset.lang,{showToast:true,rerender:true}); updateMobLangBtn(); });
  });
}

function hidePageLoader() {
  const loader = byId("page-loader");
  if (!loader) return;
  // Dua rAF: pastikan browser selesai paint konten sebelum fade-out dimulai
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      loader.classList.add("hide");
      loader.addEventListener("transitionend", () => loader.remove(), { once: true });
    });
  });
}

function init() {
  setStaticIcons();
  initProfile();
  renderThemes();
  applyTheme(state.theme);
  applyLayout(state.layout, { showToast: false });
  applyLanguage(state.lang, { showToast: false, rerender: false });
  renderNav();
  initLangButtons();
  initMobControls();
  renderHome();
  renderAbout();
  renderProjects();
  renderAchievementFilters();
  renderAchievements();
  renderUses();
  renderContacts();
  renderLinks();
  updateStaticCopy();
  bindEvents();

  const rawHash = window.location.hash.replace("#", "");
  if (rawHash.startsWith("proyek/")) {
    const slug = rawHash.replace("proyek/", "");
    navigate("proyek", false);
    openProjectDetail(slug);
  } else {
    // Resolve alias hash -> pageId internal
    const resolvedHash = HASH_RESOLVE[rawHash] || rawHash;
    const validRoute = DATA.nav.some(item => item.id === resolvedHash);
    navigate(validRoute ? resolvedHash : "beranda", false);
  }
  // Sembunyikan page loader setelah semua konten selesai dirender
  hidePageLoader();
}
document.addEventListener("DOMContentLoaded", init);
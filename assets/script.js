/* =========================================================
   ЛАЗИМ — логика лендинга
   ВЕСЬ КОНТЕНТ И ПЕРЕВОДЫ ЛЕЖАТ ЗДЕСЬ, В НАЧАЛЕ ФАЙЛА.
   Чтобы поправить текст — меняй объекты ниже, верстку трогать не нужно.
   ========================================================= */

/* ---------------------------------------------------------
   1) ПЕРЕВОДЫ ИНТЕРФЕЙСА (статичные строки через data-i18n)
   --------------------------------------------------------- */
const I18N = {
  ru: {
    "logo": "ЛАЗИМ",
    "nav.about": "обо мне",
    "nav.services": "услуги",
    "nav.process": "как работаю",
    "nav.cases": "кейсы",
    "nav.contact": "контакт",

    "hero.status": "беру заказы",
    "hero.name": "ЛАЗИМ",
    "hero.lead": "Лендинги, портфолио и визитки под ключ. Быстро, адаптивно, с анимациями, которые продают.",
    "hero.seeCases": "Смотреть кейсы",
    "hero.scroll": "scroll",

    "cta.write": "Написать в Telegram",

    "about.title": "Обо мне",
    "about.text": "Делаю лендинги, портфолио и сайты-визитки под ключ — от структуры и текстов до вёрстки и анимаций. Фокус на конверсии: сайт должен не просто выглядеть, а приносить заявки.",
    "about.locKey": "локация",
    "about.locVal": "удалённо · по всему миру",
    "about.statusKey": "статус",
    "about.statusVal": "беру заказы",
    "about.stackKey": "стек",
    "about.termKey": "сроки",
    "about.termVal": "5–7 дней под ключ",

    "services.title": "Чем занимаюсь",
    "process.title": "Как работаю",
    "cases.title": "Кейсы",

    "contact.title": "Давай сделаем<br>сайт, который продаёт",
    "contact.lead": "Опиши задачу в Telegram — отвечу, прикину сроки и предложу решение.",
    "contact.copy": "@luriumcc",

    "footer.note": "сделано на чистом HTML · CSS · JS",

    "modal.more": "подробнее",
    "modal.openSite": "Открыть сайт",
    "case.soon": "слот свободен · скоро",
    "copy.done": "скопировано ✓",
  },

  en: {
    "logo": "LAZIM",
    "nav.about": "about",
    "nav.services": "services",
    "nav.process": "process",
    "nav.cases": "work",
    "nav.contact": "contact",

    "hero.status": "available for work",
    "hero.name": "LAZIM",
    "hero.lead": "Landing pages, portfolios and business-card sites, done end-to-end. Fast, responsive, with animations that sell.",
    "hero.seeCases": "See work",
    "hero.scroll": "scroll",

    "cta.write": "Message on Telegram",

    "about.title": "About",
    "about.text": "I build landing pages, portfolios and business-card sites end-to-end — from structure and copy to markup and animation. Conversion-focused: a site should not just look good, it should bring leads.",
    "about.locKey": "location",
    "about.locVal": "remote · worldwide",
    "about.statusKey": "status",
    "about.statusVal": "available for work",
    "about.stackKey": "stack",
    "about.termKey": "timeline",
    "about.termVal": "5–7 days, turnkey",

    "services.title": "What I do",
    "process.title": "How I work",
    "cases.title": "Selected work",

    "contact.title": "Let’s build a site<br>that actually sells",
    "contact.lead": "Describe your task on Telegram — I’ll reply, scope the timeline and propose a solution.",
    "contact.copy": "@luriumcc",

    "footer.note": "built with plain HTML · CSS · JS",

    "modal.more": "details",
    "modal.openSite": "Open site",
    "case.soon": "slot open · soon",
    "copy.done": "copied ✓",
  },
};

/* ---------------------------------------------------------
   2) ТИПИЗИРУЕМЫЙ ТЕКСТ В HERO (печатается по буквам)
   --------------------------------------------------------- */
const TYPED = {
  ru: ["Делаю сайты, которые продают"],
  en: ["I build sites that sell"],
};

/* ---------------------------------------------------------
   3) УСЛУГИ (карточки + содержимое модалок)
   bullets — пункты списка внутри модалки
   --------------------------------------------------------- */
const SERVICES = [
  {
    num: "01",
    ru: {
      title: "Лендинг, который продаёт",
      desc: "Структура под конверсию: смысловые блоки, сильные офферы, продуманные CTA и тексты.",
      body: "Собираю страницу не «по красоте», а под задачу — превратить посетителя в заявку.",
      bullets: ["Прототип структуры под вашу воронку", "Офферы, заголовки и тексты", "CTA и формы, ведущие к заявке", "Логика блоков под целевое действие"],
    },
    en: {
      title: "A landing that sells",
      desc: "Conversion-first structure: meaningful sections, strong offers, deliberate CTAs and copy.",
      body: "I build the page around the goal — turning a visitor into a lead, not just looking nice.",
      bullets: ["Structure prototype for your funnel", "Offers, headlines and copy", "CTAs and forms that drive leads", "Section logic aimed at the target action"],
    },
  },
  {
    num: "02",
    ru: {
      title: "Быстрый и адаптивный",
      desc: "Загрузка < 2с, mobile-first, чистая семантика, SEO-база и Lighthouse 90+.",
      body: "Скорость и адаптив — это деньги: медленный сайт теряет заявки на каждом экране.",
      bullets: ["Mobile-first вёрстка под любой экран", "Загрузка меньше 2 секунд", "Семантика + базовое SEO и мета-теги", "Lighthouse 90+ по основным метрикам"],
    },
    en: {
      title: "Fast & responsive",
      desc: "Sub-2s loads, mobile-first, clean semantics, SEO basics and Lighthouse 90+.",
      body: "Speed and responsiveness are money: a slow site loses leads on every screen.",
      bullets: ["Mobile-first layout for any screen", "Loads in under 2 seconds", "Semantics + SEO basics and meta tags", "Lighthouse 90+ on core metrics"],
    },
  },
  {
    num: "03",
    ru: {
      title: "Живые анимации",
      desc: "Плавные эффекты и движение: сайт «дышит», а не стоит картинкой. Это моё преимущество.",
      body: "Аккуратная анимация держит внимание и делает бренд дороже — без перегруза и тормозов.",
      bullets: ["Появление блоков на скролле", "Микро-интеракции на кнопках и карточках", "Parallax и печатающийся текст", "Поддержка Lottie для сложных сцен"],
    },
    en: {
      title: "Living animations",
      desc: "Smooth motion and effects: the site breathes instead of standing still. This is my edge.",
      body: "Tasteful motion holds attention and makes a brand feel premium — no clutter, no lag.",
      bullets: ["Scroll-reveal for sections", "Micro-interactions on buttons & cards", "Parallax and typed text", "Lottie support for complex scenes"],
    },
  },
  {
    num: "04",
    ru: {
      title: "Под ключ за 5–7 дней",
      desc: "Бриф, ежедневный апдейт, прозрачные сроки. Получаешь готовый сайт, а не процесс.",
      body: "Работаю короткими понятными итерациями: ты всегда видишь прогресс и сроки.",
      bullets: ["Короткий бриф на старте", "Ежедневный апдейт по прогрессу", "Прозрачные фиксированные сроки", "Готовый сайт + помощь с публикацией"],
    },
    en: {
      title: "Turnkey in 5–7 days",
      desc: "Brief, daily updates, transparent timeline. You get a finished site, not a process.",
      body: "I work in short, clear iterations: you always see the progress and the deadline.",
      bullets: ["Short brief at the start", "Daily progress updates", "Transparent, fixed timeline", "Finished site + help with publishing"],
    },
  },
];

/* ---------------------------------------------------------
   4) ШАГИ ПРОЦЕССА
   --------------------------------------------------------- */
const STEPS = [
  {
    num: "01",
    ru: { title: "Бриф", desc: "Короткий разговор о задаче, аудитории и цели сайта. Собираю вводные и референсы." },
    en: { title: "Brief", desc: "A short talk about the task, audience and goal. I gather inputs and references." },
  },
  {
    num: "02",
    ru: { title: "Прототип", desc: "Структура и смысловые блоки: что, в каком порядке и ради какого действия." },
    en: { title: "Prototype", desc: "Structure and key sections: what comes in what order, and toward which action." },
  },
  {
    num: "03",
    ru: { title: "Разработка", desc: "Вёрстка, дизайн, тексты и анимации. Ежедневно показываю прогресс." },
    en: { title: "Development", desc: "Markup, design, copy and animation. I show progress every day." },
  },
  {
    num: "04",
    ru: { title: "Запуск", desc: "Финальные правки, оптимизация, публикация и передача. Сайт готов к работе." },
    en: { title: "Launch", desc: "Final tweaks, optimization, publishing and handover. The site is ready to work." },
  },
];

/* ---------------------------------------------------------
   5) КЕЙСЫ
   Заполненный слот:  { filled:true,  name, tag, url, poster }
   Пустой слот:       { filled:false }
   poster — путь к превью (1280x800 ~). Пока пусто → рисуется сетка-плейсхолдер.
   --------------------------------------------------------- */
const CASES = [
  {
    filled: true,
    name: "Aurora — лендинг продукта",          // TODO: название кейса
    tag: "landing",
    url: "https://example.com",                  // TODO: ссылка на сайт
    poster: "",                                  // TODO: assets/cases/aurora.jpg
  },
  {
    filled: true,
    name: "Nomad — портфолио",                   // TODO
    tag: "portfolio",
    url: "https://example.com",                  // TODO
    poster: "",                                  // TODO
  },
  {
    filled: true,
    name: "Studio K — визитка",                  // TODO
    tag: "business card",
    url: "https://example.com",                  // TODO
    poster: "",                                  // TODO
  },
  { filled: false },                             // пустой слот «скоро»
  { filled: false },                             // пустой слот «скоро»
];

/* =========================================================
   НИЖЕ — ЛОГИКА. Обычно править не нужно.
   ========================================================= */

const TELEGRAM = "https://t.me/luriumcc";
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let currentLang = "ru";

/* ---------- применение языка ---------- */
function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) ?? I18N.ru[key] ?? key;
}

function applyI18n() {
  // статичные строки
  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = t(key);
    if (val.includes("<br>")) el.innerHTML = val;
    else el.textContent = val;
  });

  document.documentElement.lang = currentLang;
  document.documentElement.setAttribute("data-lang", currentLang);

  // активная кнопка переключателя
  $$(".lang-btn").forEach((b) =>
    b.classList.toggle("is-active", b.dataset.setLang === currentLang)
  );

  // перерисовываем динамические блоки
  renderServices();
  renderSteps();
  renderCases();
}

function setLang(lang) {
  if (!I18N[lang] || lang === currentLang) {
    if (lang === currentLang) return;
  }
  currentLang = I18N[lang] ? lang : "ru";
  localStorage.setItem("lazim_lang", currentLang);
  applyI18n();
  startTyping();
}

/* ---------- рендер услуг ---------- */
function renderServices() {
  const grid = $("#services-grid");
  if (!grid) return;
  grid.classList.add("stagger");
  grid.innerHTML = SERVICES.map((s, i) => {
    const c = s[currentLang] || s.ru;
    return `
      <button class="card" type="button" data-service="${i}">
        <span class="card-num">${s.num}</span>
        <span class="card-title">${c.title}</span>
        <span class="card-desc">${c.desc}</span>
        <span class="card-more">${t("modal.more")} <span aria-hidden="true">→</span></span>
      </button>`;
  }).join("");

  $$("[data-service]", grid).forEach((btn) =>
    btn.addEventListener("click", () => openModal(+btn.dataset.service))
  );
}

/* ---------- рендер шагов ---------- */
function renderSteps() {
  const list = $("#steps-list");
  if (!list) return;
  list.classList.add("stagger");
  list.innerHTML = STEPS.map((s) => {
    const c = s[currentLang] || s.ru;
    return `
      <li class="step">
        <span class="step-num">${s.num}</span>
        <div>
          <h3 class="step-title">${c.title}</h3>
          <p class="step-desc">${c.desc}</p>
        </div>
      </li>`;
  }).join("");
}

/* ---------- рендер кейсов ---------- */
function renderCases() {
  const grid = $("#cases-grid");
  if (!grid) return;
  grid.classList.add("stagger");
  grid.innerHTML = CASES.map((cs) => {
    if (!cs.filled) {
      return `
        <a class="case is-empty" href="${TELEGRAM}" target="_blank" rel="noopener">
          <div class="case-thumb is-empty">
            <span class="case-soon">${t("case.soon")}</span>
          </div>
          <div class="case-body">
            <div class="case-info">
              <div class="case-name">—</div>
              <div class="case-tag">vacant</div>
            </div>
            <span class="case-link">${t("cta.write")} <span aria-hidden="true">↗</span></span>
          </div>
        </a>`;
    }
    const thumb = cs.poster
      ? `<div class="case-thumb"><img loading="lazy" decoding="async" src="${cs.poster}" alt="${cs.name}"></div>`
      : `<div class="case-thumb is-empty"></div>`; // плейсхолдер-сетка пока нет постера
    return `
      <a class="case" href="${cs.url}" target="_blank" rel="noopener">
        ${thumb}
        <div class="case-body">
          <div class="case-info">
            <div class="case-name">${cs.name}</div>
            <div class="case-tag">${cs.tag}</div>
          </div>
          <span class="case-link">${t("modal.openSite")} <span aria-hidden="true">↗</span></span>
        </div>
      </a>`;
  }).join("");
}

/* ---------- модалка услуги ---------- */
const modal = $("#modal");
let lastFocused = null;

function openModal(i) {
  const s = SERVICES[i];
  if (!s) return;
  const c = s[currentLang] || s.ru;

  $("#modal-num").textContent = s.num;
  $("#modal-title").textContent = c.title;
  $("#modal-body").textContent = c.body;
  $("#modal-list").innerHTML = c.bullets.map((b) => `<li>${b}</li>`).join("");
  $("#modal-cta").textContent = t("cta.write");

  lastFocused = document.activeElement;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $(".modal-close", modal).focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

modal.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-close")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

/* ---------- печатающийся текст ---------- */
let typingTimer = null;
function startTyping() {
  const el = $("#typed");
  if (!el) return;
  clearTimeout(typingTimer);

  const phrases = TYPED[currentLang] || TYPED.ru;
  const text = phrases[0];

  if (reduceMotion) { el.textContent = text; return; }

  el.textContent = "";
  let i = 0;
  (function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      typingTimer = setTimeout(type, 45 + Math.random() * 45);
    }
  })();
}

/* ---------- scroll reveal ---------- */
function initReveal() {
  const targets = $$(".reveal, .stagger");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
  targets.forEach((el) => io.observe(el));
}

/* ---------- лёгкий parallax в hero ---------- */
function initParallax() {
  if (reduceMotion) return;
  const title = $(".hero-title");
  if (!title) return;
  let raf = null;
  window.addEventListener("scroll", () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        title.style.transform = `translateY(${y * 0.12}px)`;
        title.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.9)));
      }
      raf = null;
    });
  }, { passive: true });
}

/* ---------- копирование ника ---------- */
function initCopy() {
  $$(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const text = btn.dataset.copy || "";
      try { await navigator.clipboard.writeText(text); } catch (_) {}
      const span = btn.querySelector("span") || btn;
      const original = span.textContent;
      span.textContent = t("copy.done");
      btn.classList.add("copied");
      setTimeout(() => { span.textContent = original; btn.classList.remove("copied"); }, 1600);
    });
  });
}

/* ---------- Lottie (грузится лениво только при наличии data-lottie) ---------- */
function initLottie() {
  const holders = $$("[data-lottie]").filter((el) => el.getAttribute("data-lottie"));
  if (!holders.length) return;

  const load = () => new Promise((resolve, reject) => {
    if (window.lottie) return resolve();
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js";
    s.onload = resolve; s.onerror = reject;
    document.head.appendChild(s);
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      io.unobserve(el);
      load().then(() => {
        window.lottie.loadAnimation({
          container: el,
          renderer: "svg",
          loop: true,
          autoplay: !reduceMotion,
          path: el.getAttribute("data-lottie"),
        });
      }).catch(() => {});
    });
  }, { rootMargin: "200px" });

  holders.forEach((el) => io.observe(el));
}

/* ---------- сглаженная якорная навигация (учёт sticky-хедера уже в CSS) ---------- */

/* ---------- init ---------- */
function init() {
  // язык: сохранённый → системный → ru
  const saved = localStorage.getItem("lazim_lang");
  const sysEn = (navigator.language || "").toLowerCase().startsWith("en");
  currentLang = saved || (sysEn ? "en" : "ru");
  if (!I18N[currentLang]) currentLang = "ru";

  $$(".lang-btn").forEach((b) =>
    b.addEventListener("click", () => setLang(b.dataset.setLang))
  );

  $("#year").textContent = new Date().getFullYear();

  applyI18n();
  startTyping();
  initReveal();
  initParallax();
  initCopy();
  initLottie();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

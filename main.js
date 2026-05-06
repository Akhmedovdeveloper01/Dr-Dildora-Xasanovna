const portfolioData = [
  {
    id: 1,
    category: "article",
    year: "2024",
    title: "2-tur diabetda insulinoresistentlik va qalqonsimon bez funktsiyasi o'rtasidagi bog'liqlik",
    journal: "O'zbekiston tibbiyot jurnali · Vol. 12, №3",
    description: "Tadqiqot 340 bemorda insulin qarshiligi va TSH darajasi o'rtasidagi korrelyatsiyani o'rgandi.",
    tags: ["Diabet", "Insulin", "Qalqonsimon bez"],
    iconType: "article"
  },
  {
    id: 2,
    category: "conference",
    year: "2023",
    title: "Evropa endokrinologiya kongressi — Stockholm",
    journal: "ESE Congress 2023 · Stockholm, Shvetsiya",
    description: "O'zbekistondagi diabet epidemiologiyasi va milliy profilaktika dasturi natijalariga bag'ishlangan ma'ruza.",
    tags: ["Xalqaro", "Ma'ruza", "Epidemiologiya"],
    iconType: "conference"
  },
  {
    id: 3,
    category: "award",
    year: "2023",
    title: "'Yilning eng yaxshi endokrinologi' — Respublika mukofoti",
    journal: "O'zbekiston Sog'liqni saqlash vazirligi",
    description: "Diabet boshqaruvi sohasidagi klinik yutuqlar va ilmiy hissasi uchun berilgan respublika darajasidagi mukofot.",
    tags: ["Mukofot", "Respublika"],
    iconType: "award"
  },
  {
    id: 4,
    category: "article",
    year: "2022",
    title: "PCOS bilan og'rigan ayollarda metformin va inositol kombinatsiyasining samaradorligi",
    journal: "Central Asian Medical Journal · Vol. 8, №2",
    description: "120 nafar PCOS bilan og'rigan bemorni o'z ichiga olgan randomizatsiyalangan klinik tadqiqot natijalari.",
    tags: ["PCOS", "Klinik tadqiqot"],
    iconType: "article"
  },
  {
    id: 5,
    category: "conference",
    year: "2022",
    title: "Markaziy Osiyo endokrinologlar anjumani — Toshkent",
    journal: "Milliy anjuman · Toshkent, O'zbekiston",
    description: "Anjuman ilmiy qo'mitasi a'zosi sifatida 12 ta ma'ruzani boshqardi va o'z tadqiqotini taqdim etdi.",
    tags: ["Tashkilotchi", "Milliy"],
    iconType: "conference"
  },
  {
    id: 6,
    category: "award",
    year: "2021",
    title: "ESE Young Investigator Award — Xalqaro mukofot",
    journal: "European Society of Endocrinology",
    description: "Yosh tadqiqotchilar orasida diabet va metabolik kasalliklar bo'yicha innovatsion tadqiqotlari uchun berilgan xalqaro tan olish.",
    tags: ["Xalqaro", "Mukofot", "ESE"],
    iconType: "award"
  },
  {
    id: 7,
    category: "article",
    year: "2021",
    title: "Osteoporoz profilaktikasida D vitamini va kaltsiy qo'shimchalarining roli",
    journal: "O'zbekiston tibbiyot akademiyasi axborotnomasi · №4",
    description: "Postmenopauzal ayollarda D vitamini tanqisligi va suyak mineral zichligi o'rtasidagi bog'liqlikni tahlil qilish.",
    tags: ["Osteoporoz", "D vitamini"],
    iconType: "article"
  },
  {
    id: 8,
    category: "conference",
    year: "2021",
    title: "Xalqaro diabet federatsiyasi kongressi — virtual",
    journal: "IDF Congress 2021 · Online",
    description: "Past va o'rta daromadli mamlakatlarda diabet profilaktikasi strategiyalari mavzusida poster taqdimoti.",
    tags: ["IDF", "Virtual", "Poster"],
    iconType: "conference"
  },
  {
    id: 9,
    category: "award",
    year: "2020",
    title: "Eng yaxshi ilmiy maqola — TTA mukofoti",
    journal: "Toshkent tibbiyot akademiyasi",
    description: "Akademiya doirasidagi eng yaxshi klinik tadqiqot maqolasi uchun yillik mukofot.",
    tags: ["Akademiya", "Ilmiy"],
    iconType: "award"
  }
];

const icons = {
  article: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  conference: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`
};

let currentFilter = 'all';

function renderPortfolio(filter) {
  if (filter !== undefined) currentFilter = filter;
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  const filtered = currentFilter === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === currentFilter);

  grid.innerHTML = filtered.map((item, index) => `
    <div class="portfolio-card reveal ${index > 0 ? 'reveal-delay-' + Math.min(index % 3 + 1, 5) : ''}"
         data-category="${item.category}" role="listitem">
      <div class="pc-top">
        <div class="pc-icon ${item.iconType}" aria-hidden="true">
          ${icons[item.iconType]}
        </div>
        <span class="pc-year">${item.year}</span>
      </div>
      <h3>${item.title}</h3>
      <p class="pc-journal">${item.journal}</p>
      <p class="pc-desc">${item.description}</p>
      <div class="pc-tags">
        ${item.tags.map(tag => `<span class="pc-tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');

  // Re-observe new cards for scroll animation
  if (typeof observer !== 'undefined') {
    grid.querySelectorAll('.reveal').forEach(el => {
      el.classList.remove('visible');
      observer.observe(el);
    });
  }
}

// Portfolio filter buttons
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.pf-btn');
  renderPortfolio('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderPortfolio(btn.dataset.filter);
    });
  });
}

// ─── TRANSLATIONS ───
const translations = {
  uz: {
    'nav.about':'Haqida','nav.spec':'Mutaxassislik','nav.exp':'Tajriba',
    'nav.services':'Xizmatlar','nav.cta':'Qabulga yozilish',
    'hero.badge':'Endokrinolog · Toshkent',
    'hero.title':'Sog\'ligingiz —<br><em>mening ustunligim</em>',
    'hero.subtitle':'Dr. Dildora Xasanovna — 10 yillik tajribaga ega endokrinolog. Diabet, qalqonsimon bez va gormonal buzilishlar bo\'yicha mutaxassis.',
    'hero.more':'Batafsil',
    'stats.years':'Yillik tajriba','stats.patients':'Bemorlar',
    'stats.satisfaction':'Bemorlar mamnuniyati','stats.pubs':'Ilmiy maqolalar',
    'about.tag':'Shifokor haqida',
    'about.title':'Siz bilan — har bir <em>qadam</em>',
    'about.quote':'"Har bir bemor — bu alohida dunyo. Mening vazifam — shu dunyoni tushunib, to\'g\'ri yo\'l ko\'rsatish."',
    'about.p1':'Dr. Dildora Xasanovna — Toshkent tibbiyot akademiyasini tamomlagan va endokrinologiya bo\'yicha 10 yildan ortiq klinik tajribaga ega mutaxassis. U diabet, qalqonsimon bez kasalliklari va gormonal buzilishlarni davolashda keng tajribaga ega.',
    'about.p2':'Doimiy ravishda xalqaro konferensiyalarda ishtirok etib, zamonaviy davolash usullarini amaliyotga tatbiq etib keladi. 50 dan ortiq ilmiy maqolalari nashr etilgan.',
    'spec.tag':'Mutaxassislik',
    'spec.title':'Davolash <em>sohalari</em>',
    'spec.lead':'Zamonaviy tibbiyot usullaridan foydalangan holda keng qamrovli endokrinologik yordam ko\'rsataman.',
    'exp.tag':'Ta\'lim va tajriba','exp.title':'Mening <em>yo\'lim</em>',
    'svc.title':'Nima <em>taklif etaman</em>',
    'svc.lead':'Har bir bemor individual yondashuv va to\'liq tibbiy xizmat oladi.',
    'contact.tag':'Bog\'lanish','contact.title':'Qabulga <em>yoziling</em>',
    'contact.lead':'Birinchi qadamni bosing — sog\'lig\'ingiz uchun to\'g\'ri qaror.',
    'form.title':'Qabul uchun ariza','form.name':'Ism familiya',
    'form.phone':'Telefon','form.service':'Xizmat turi',
    'form.date':'Qulay sana','form.message':'Qo\'shimcha ma\'lumot',
    'form.messagePh':'Shikoyat yoki savollaringizni yozing...','form.submit':'Arizani yuborish',
    'form.services':['Tanlang...','Dastlabki qabul (60 daqiqa)','Takroriy qabul (30 daqiqa)','Gormonal tahlil izohi','Diabet boshqaruvi kursi','UZI natijasi izohi','Oziq-ovqat dasturi'],
    'pf.all':'Barchasi','pf.article':'Maqolalar','pf.conference':'Konferensiyalar','pf.award':'Mukofotlar',
    'pf.cta':"Hamkorlik uchun bog'laning →",
  },
  ru: {
    'nav.about':'О враче','nav.spec':'Специализация','nav.exp':'Опыт',
    'nav.services':'Услуги','nav.cta':'Записаться',
    'hero.badge':'Эндокринолог · Ташкент',
    'hero.title':'Ваше здоровье —<br><em>мой приоритет</em>',
    'hero.subtitle':'Д-р Дилдора Хасановна — эндокринолог с 10-летним опытом. Специалист по диабету, щитовидной железе и гормональным нарушениям.',
    'hero.more':'Подробнее',
    'stats.years':'Лет опыта','stats.patients':'Пациентов',
    'stats.satisfaction':'Удовлетворённость','stats.pubs':'Публикаций',
    'about.tag':'О враче',
    'about.title':'Рядом с вами — каждый <em>шаг</em>',
    'about.quote':'"Каждый пациент — отдельный мир. Моя задача — понять этот мир и указать верный путь."',
    'about.p1':'Д-р Дилдора Хасановна окончила Ташкентскую медицинскую академию и имеет более 10 лет клинического опыта в эндокринологии. Широкая практика в лечении диабета, заболеваний щитовидной железы и гормональных нарушений.',
    'about.p2':'Регулярно участвует в международных конференциях и внедряет современные методы лечения. Опубликовано более 50 научных статей.',
    'spec.tag':'Специализация',
    'spec.title':'Области <em>лечения</em>',
    'spec.lead':'Оказываю комплексную эндокринологическую помощь с использованием современных методов медицины.',
    'exp.tag':'Образование и опыт','exp.title':'Мой <em>путь</em>',
    'svc.title':'Что я <em>предлагаю</em>',
    'svc.lead':'Каждый пациент получает индивидуальный подход и полноценную медицинскую помощь.',
    'contact.tag':'Контакты','contact.title':'Запишитесь <em>на приём</em>',
    'contact.lead':'Сделайте первый шаг — правильное решение для вашего здоровья.',
    'form.title':'Заявка на приём','form.name':'Имя и фамилия',
    'form.phone':'Телефон','form.service':'Вид услуги',
    'form.date':'Удобная дата','form.message':'Дополнительная информация',
    'form.messagePh':'Опишите жалобы или задайте вопрос...','form.submit':'Отправить заявку',
    'form.services':['Выберите...','Первичный приём (60 мин)','Повторный приём (30 мин)','Расшифровка гормонов','Курс ведения диабета','Расшифровка УЗИ','Диетическая программа'],
    'pf.all':'Все','pf.article':'Статьи','pf.conference':'Конференции','pf.award':'Награды',
    'pf.cta':'Связаться для сотрудничества →',
  },
  en: {
    'nav.about':'About','nav.spec':'Specializations','nav.exp':'Experience',
    'nav.services':'Services','nav.cta':'Book Appointment',
    'hero.badge':'Endocrinologist · Tashkent',
    'hero.title':'Your Health —<br><em>My Priority</em>',
    'hero.subtitle':'Dr. Dildora Khasanova — Endocrinologist with 10+ years of experience. Specialist in diabetes, thyroid disorders & hormonal imbalances.',
    'hero.more':'Learn More',
    'stats.years':'Years Experience','stats.patients':'Patients Treated',
    'stats.satisfaction':'Patient Satisfaction','stats.pubs':'Publications',
    'about.tag':'About the Doctor',
    'about.title':'With you — every <em>step</em>',
    'about.quote':'"Every patient is a unique world. My mission is to understand that world and guide them on the right path."',
    'about.p1':'Dr. Dildora Khasanova graduated from Tashkent Medical Academy and has over 10 years of clinical experience in endocrinology. She has extensive expertise treating diabetes, thyroid diseases, and hormonal disorders.',
    'about.p2':'She regularly participates in international conferences and implements modern treatment methods. Over 50 scientific articles published.',
    'spec.tag':'Specializations',
    'spec.title':'Areas of <em>Treatment</em>',
    'spec.lead':'I provide comprehensive endocrinological care using modern medical methods.',
    'exp.tag':'Education & Experience','exp.title':'My <em>Journey</em>',
    'svc.title':'What I <em>Offer</em>',
    'svc.lead':'Each patient receives an individual approach and complete medical care.',
    'contact.tag':'Contact','contact.title':'Book an <em>Appointment</em>',
    'contact.lead':'Take the first step — the right decision for your health.',
    'form.title':'Appointment Request','form.name':'Full Name',
    'form.phone':'Phone','form.service':'Service Type',
    'form.date':'Preferred Date','form.message':'Additional Information',
    'form.messagePh':'Describe your complaints or ask a question...','form.submit':'Send Request',
    'form.services':['Select...','Initial Consultation (60 min)','Follow-up (30 min)','Hormone Panel Review','Diabetes Management Program','Thyroid Ultrasound Review','Diet & Lifestyle Planning'],
    'pf.all':'All','pf.article':'Articles','pf.conference':'Conferences','pf.award':'Awards',
    'pf.cta':'Contact for Collaboration →',
  }
};

let currentLang = localStorage.getItem('lang') || 'uz';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const t = translations[lang];

  // Plain text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  // innerHTML (with <em> tags)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  // Select options
  document.querySelectorAll('[data-i18n-select]').forEach(sel => {
    const key = sel.dataset.i18nSelect;
    const opts = t[key];
    if (!opts) return;
    sel.innerHTML = opts.map((o, i) => `<option value="${i === 0 ? '' : o}">${o}</option>`).join('');
  });

  // HTML lang attribute
  document.documentElement.lang = lang;

  // Active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Re-render portfolio with new lang data
  renderPortfolio();
}

// Lang buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ─── THEME ───
const themeToggle       = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');
const themeIcon         = document.getElementById('themeIcon');
const themeIconMobile   = document.getElementById('themeIconMobile');
const MOON_SVG = `<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>`;
const SUN_SVG  = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const svg = theme === 'dark' ? MOON_SVG : SUN_SVG;
  themeIcon.innerHTML = svg;
  themeIconMobile.innerHTML = svg;
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Light mode' : 'Dark mode');
  themeToggleMobile.setAttribute('aria-label', theme === 'dark' ? 'Light mode' : 'Dark mode');
}

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  applyTheme(isDark ? 'light' : 'dark');
});
themeToggleMobile.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  applyTheme(isDark ? 'light' : 'dark');
});

// Init theme (no observer needed)
applyTheme(localStorage.getItem('theme') || 'light');

  // Custom cursor
  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');
  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();
  document.querySelectorAll('a, button, .spec-card, .service-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '20px'; cursor.style.height = '20px';
      cursorRing.style.width = '60px'; cursorRing.style.height = '60px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '12px'; cursor.style.height = '12px';
      cursorRing.style.width = '40px'; cursorRing.style.height = '40px';
    });
  });

  // Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Hamburger
  const hamburger   = document.getElementById('hamburger');
  const navLinks    = document.getElementById('navLinks');
  const menuOverlay = document.getElementById('menuOverlay');
  const MOBILE      = 700;

  function closeMenu() {
    menuOverlay.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
  }

  // Move nav-links to the right parent depending on screen width
  function handleResize() {
    if (window.innerWidth <= MOBILE) {
      if (!menuOverlay.contains(navLinks)) menuOverlay.appendChild(navLinks);
    } else {
      if (menuOverlay.contains(navLinks)) navbar.insertBefore(navLinks, hamburger);
      closeMenu();
    }
  }
  window.addEventListener('resize', handleResize);
  handleResize();

  hamburger.addEventListener('click', () => {
    const open = menuOverlay.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  initPortfolioFilter();
  applyLang(currentLang); // observer tayyor bo'lgandan keyin chaqiriladi

  // Counter animation
  function animateCounter(el) {
    const target = +el.dataset.target;
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current).toLocaleString();
    }, 16);
  }
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-num').forEach(animateCounter);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  const statsSection = document.getElementById('stats');
  if (statsSection) statsObserver.observe(statsSection);

  // Form submit → Telegram
  const TG_TOKEN = '8693042958:AAEjJU60pa5iVX2GeKnqkZsjxeyHjG9BVn8';
  const TG_CHAT  = '@drdildoraxasanovnaqabul';

  function handleSubmit() {
    const btn     = document.getElementById('submitBtn');
    const name    = document.getElementById('name').value.trim();
    const phone   = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const date    = document.getElementById('date').value;
    const message = document.getElementById('message').value.trim();

    if (!name || !phone) {
      alert("Ism va telefon raqamini kiriting.");
      return;
    }

    const text = [
      '🏥 <b>Yangi qabul arizasi</b>',
      '',
      `👤 <b>Ism:</b> ${name}`,
      `📞 <b>Telefon:</b> ${phone}`,
      service ? `💊 <b>Xizmat:</b> ${service}` : '',
      date    ? `📅 <b>Sana:</b> ${date}`    : '',
      message ? `💬 <b>Izoh:</b> ${message}` : '',
    ].filter(Boolean).join('\n');

    btn.textContent = 'Yuborilmoqda...';
    btn.disabled = true;

    fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TG_CHAT, text, parse_mode: 'HTML' })
    })
    .then(res => res.json())
    .then(data => {
      if (data.ok) {
        btn.textContent = '✓ Ariza qabul qilindi!';
        btn.style.background = '#2a7a4a';
        document.getElementById('name').value    = '';
        document.getElementById('phone').value   = '';
        document.getElementById('service').value = '';
        document.getElementById('date').value    = '';
        document.getElementById('message').value = '';
      } else {
        btn.textContent = '✗ Xatolik yuz berdi';
        btn.style.background = '#c0392b';
      }
      btn.disabled = false;
      setTimeout(() => {
        btn.textContent = 'Arizani yuborish';
        btn.style.background = '';
      }, 3500);
    })
    .catch(() => {
      btn.textContent = '✗ Internet xatoligi';
      btn.style.background = '#c0392b';
      btn.disabled = false;
      setTimeout(() => {
        btn.textContent = 'Arizani yuborish';
        btn.style.background = '';
      }, 3500);
    });
  }

  // ─── ABOUT CAROUSEL ───
  (function() {
    const imgs  = document.querySelectorAll('.carousel-img');
    const dots  = document.querySelectorAll('.carousel-dot');
    const prev  = document.querySelector('.carousel-prev');
    const next  = document.querySelector('.carousel-next');
    if (!imgs.length) return;

    let current = 0;
    let timer;

    function goTo(idx) {
      imgs[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (idx + imgs.length) % imgs.length;
      imgs[current].classList.add('active');
      dots[current].classList.add('active');
    }

    function startAuto() { timer = setInterval(() => goTo(current + 1), 4000); }
    function resetAuto()  { clearInterval(timer); startAuto(); }

    prev.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
    next.addEventListener('click', () => { goTo(current + 1); resetAuto(); });
    dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); resetAuto(); }));
    startAuto();
  })();

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

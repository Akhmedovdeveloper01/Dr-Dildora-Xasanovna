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

function renderPortfolio(filter = 'all') {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === filter);

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
  grid.querySelectorAll('.reveal').forEach(el => {
    el.classList.remove('visible');
    observer.observe(el);
  });
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

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

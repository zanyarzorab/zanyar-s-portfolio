/**
 * ZANYAR Z AHMED | PERSONAL PORTFOLIO SCRIPT ENGINE
 * Database Technology & Software Developer
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. SKILLS DATABASE (FROM ZANYAR'S CV)
  // =========================================================================
  const skillsData = [
    // Mobile Development
    { name: 'Flutter & Dart', category: 'mobile', level: 'Expert', percent: 95, icon: 'fa-solid fa-mobile-screen-button', desc: 'Cross-platform iOS & Android mobile application architecture, custom widgets, state management' },
    { name: 'Firebase & Firestore', category: 'database', level: 'Expert', percent: 94, icon: 'fa-solid fa-fire', desc: 'NoSQL Cloud Firestore, Firebase Authentication, real-time sync listeners, Cloud Storage' },
    { name: 'Laravel & PHP', category: 'backend', level: 'Expert', percent: 92, icon: 'fa-brands fa-laravel', desc: 'MVC web architecture, Eloquent ORM, secure authentication, Blade templates, RESTful API controllers' },
    { name: 'MySQL Database', category: 'database', level: 'Expert', percent: 96, icon: 'fa-solid fa-database', desc: 'Relational database schema modeling, indexing, foreign keys, normalization, query optimization' },
    
    // Web & Frontend
    { name: 'HTML5, CSS3, JavaScript', category: 'backend', level: 'Expert', percent: 92, icon: 'fa-brands fa-js', desc: 'Responsive web layouts, modern ES6+ JavaScript, DOM manipulation, asynchronous fetch APIs' },
    { name: 'Tailwind CSS', category: 'backend', level: 'Expert', percent: 90, icon: 'fa-brands fa-css3-alt', desc: 'Modern utility-first responsive styling, UI components, dashboard interfaces' },
    { name: 'UI / UX Design', category: 'tools', level: 'Advanced', percent: 88, icon: 'fa-solid fa-pen-ruler', desc: 'Clean, user-centric mobile and web interface design, prototyping, usability workflows' },
    { name: 'RESTful API Integration', category: 'backend', level: 'Expert', percent: 93, icon: 'fa-solid fa-network-wired', desc: 'Third-party API consumption, JSON endpoints, token authentication, error handling' },

    // Core CS & Tools
    { name: 'GitHub', category: 'tools', level: 'Expert', percent: 94, icon: 'fa-brands fa-github', desc: 'Version control workflows, branching strategies, pull requests, and collaborative software development' },
    { name: 'OOP & Data Structures', category: 'tools', level: 'Expert', percent: 92, icon: 'fa-solid fa-cubes', desc: 'Object-Oriented Design principles, inheritance, encapsulation, trees, graphs, algorithms' },
    { name: 'Problem Solving', category: 'tools', level: 'Expert', percent: 94, icon: 'fa-solid fa-brain', desc: 'Analytical algorithm debugging, logical system design, real-world bug troubleshooting' },
    { name: 'Role-Based Access Control', category: 'backend', level: 'Advanced', percent: 90, icon: 'fa-solid fa-user-shield', desc: 'Granular permissions, admin & doctor dashboards, session security' },
    { name: 'Multilingual Systems (i18n)', category: 'mobile', level: 'Advanced', percent: 89, icon: 'fa-solid fa-language', desc: 'AI-assisted translations, RTL/LTR layout handling, localized web & mobile applications' },
    { name: 'Database Normalization', category: 'database', level: 'Expert', percent: 95, icon: 'fa-solid fa-table-cells', desc: '1NF to BCNF normal forms, eliminating redundancy, enforcing transaction ACID rules' },
    { name: 'Operating Systems & Networks', category: 'tools', level: 'Advanced', percent: 87, icon: 'fa-solid fa-server', desc: 'Process scheduling, memory management, TCP/IP networking, client-server models' },
    { name: 'Clean Code & Optimization', category: 'tools', level: 'Expert', percent: 93, icon: 'fa-solid fa-code', desc: 'Readable, maintainable code architectures, DRY principles, performance tuning' }
  ];

  const skillsGrid = document.getElementById('skillsGrid');
  const skillSearchInput = document.getElementById('skillSearchInput');
  const clearSkillSearch = document.getElementById('clearSkillSearch');
  const skillCategoryTabs = document.getElementById('skillCategoryTabs');

  let activeCategoryFilter = 'all';
  let currentSearchQuery = '';

  function renderSkills() {
    if (!skillsGrid) return;
    skillsGrid.innerHTML = '';

    const filtered = skillsData.filter(skill => {
      const matchesCategory = activeCategoryFilter === 'all' || skill.category === activeCategoryFilter;
      const matchesSearch = !currentSearchQuery || 
        skill.name.toLowerCase().includes(currentSearchQuery) || 
        skill.desc.toLowerCase().includes(currentSearchQuery) ||
        skill.level.toLowerCase().includes(currentSearchQuery);
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      skillsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <i class="fa-solid fa-filter-circle-xmark" style="font-size: 2.2rem; color: var(--accent-cyan); margin-bottom: 0.8rem;"></i>
          <p style="font-size: 1.1rem; color: var(--text-white); font-weight: 600;">No skills matching "${currentSearchQuery}"</p>
          <p style="font-size: 0.9rem; margin-top: 0.3rem;">Try searching for "Flutter", "Firebase", "Laravel", or "MySQL".</p>
        </div>
      `;
      return;
    }

    filtered.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card';
      card.innerHTML = `
        <div>
          <div class="skill-card-top">
            <div class="skill-icon-name">
              <div class="skill-icon">
                <i class="${skill.icon}"></i>
              </div>
              <span class="skill-title">${skill.name}</span>
            </div>
            <span class="skill-level-badge ${skill.level.toLowerCase()}">${skill.level}</span>
          </div>
          <p class="skill-desc">${skill.desc}</p>
        </div>
        <div class="skill-meter-wrapper">
          <div class="skill-meter-header">
            <span>Proficiency Level</span>
            <span>${skill.percent}%</span>
          </div>
          <div class="skill-progress-track">
            <div class="skill-progress-bar" style="width: ${skill.percent}%;"></div>
          </div>
        </div>
      `;
      skillsGrid.appendChild(card);
    });
  }

  // Initial render
  renderSkills();

  // Search input events
  if (skillSearchInput) {
    skillSearchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      if (clearSkillSearch) {
        clearSkillSearch.classList.toggle('visible', currentSearchQuery.length > 0);
      }
      renderSkills();
    });
  }

  if (clearSkillSearch) {
    clearSkillSearch.addEventListener('click', () => {
      skillSearchInput.value = '';
      currentSearchQuery = '';
      clearSkillSearch.classList.remove('visible');
      skillSearchInput.focus();
      renderSkills();
    });
  }

  // Category filter tabs
  if (skillCategoryTabs) {
    skillCategoryTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.cat-pill');
      if (!btn) return;

      skillCategoryTabs.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategoryFilter = btn.dataset.filter;
      renderSkills();
    });
  }


  // =========================================================================
  // 2. PROJECT FILTERING & DEEP DIVE MODAL (ZANYAR'S PROJECTS)
  // =========================================================================
  const projectFilterGroup = document.getElementById('projectFilterGroup');
  const projectCards = document.querySelectorAll('.project-card');

  if (projectFilterGroup) {
    projectFilterGroup.addEventListener('click', (e) => {
      const pill = e.target.closest('.proj-pill');
      if (!pill) return;

      projectFilterGroup.querySelectorAll('.proj-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.dataset.filter;
      projectCards.forEach(card => {
        const cat = card.dataset.category || '';
        if (filter === 'all' || cat.split(' ').includes(filter) || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // Project Details Modal Data from CV
  const projectsData = {
    iter: {
      title: 'Iter — AI-Powered Multilingual Student Platform',
      category: 'Mobile Application (Flutter & Firebase)',
      image: 'assets/images/project-iter.jpg',
      summary: 'A cross-cultural student engagement mobile application developed with Flutter and Firebase, featuring AI-assisted multilingual translation, real-time chat, and academic community systems.',
      kpis: [
        { num: 'Real-time', label: 'Multi-User Chat' },
        { num: 'Instant AI', label: 'Multilingual Translation' },
        { num: 'NoSQL Cloud', label: 'Firestore Sync' }
      ],
      challenge: 'International and regional students often experience communication barriers due to language differences and lack of unified campus community hubs for sharing events and study discussions.',
      solution: 'Engineered a unified Flutter mobile application integrating Firebase Authentication, Cloud Firestore for real-time peer messaging, and automated AI multilingual translation pipelines so students can connect across languages seamlessly.',
      stack: ['Flutter', 'Dart', 'Firebase Authentication', 'Cloud Firestore', 'AI Translation API', 'Cloud Storage', 'Git']
    },
    nada: {
      title: 'Nada App — Zikr & Quran Companion',
      category: 'Mobile Application (Flutter & Firebase)',
      image: 'assets/images/project-nada.jpg',
      summary: 'A beautifully crafted Islamic spiritual companion app built with Flutter, offering a digital Zikr (dhikr) counter, full Quran reader with Arabic text and translations, prayer time schedules, and a peaceful UI optimized for daily spiritual practice.',
      kpis: [
        { num: 'Full Quran', label: 'Arabic Text & Translations' },
        { num: 'Digital Tasbih', label: 'Zikr Counter with Goals' },
        { num: 'Accurate', label: 'Prayer Time Schedules' }
      ],
      challenge: 'Muslims seeking a unified spiritual tool often rely on multiple separate apps for Quran reading, dhikr counting, and prayer times — creating a fragmented and distracting experience.',
      solution: 'Developed a comprehensive Flutter application combining a full Quran reader (with ayah-by-ayah navigation), a customizable digital tasbih counter with daily goals, and location-aware prayer time alerts — all within a calming, distraction-free dark-mode interface.',
      stack: ['Flutter', 'Dart', 'Firebase', 'Prayer Times API', 'Quran API', 'State Management', 'UI/UX Design']
    },
    inventory: {
      title: 'Inventory Mobile Shop System (POS & Stock Management)',
      category: 'Web & Enterprise POS System (Laravel & MySQL)',
      image: 'assets/images/project-inventory.jpg',
      summary: 'A dedicated retail inventory and POS management system engineered for mobile phone shops, featuring device IMEI tracking, barcode scanning, supplier management, and financial reporting.',
      kpis: [
        { num: 'IMEI-Level', label: 'Hardware Serial Tracking' },
        { num: 'Real-Time', label: 'Profit & Stock Telemetry' },
        { num: 'Automated', label: 'Supplier & Invoice Alerts' }
      ],
      challenge: 'Mobile phone retail shops manage high-value devices requiring individual IMEI serial registration, complex supplier invoicing, warranty records, and rapid checkout.',
      solution: 'Developed a robust Laravel and MySQL system with customized tables for device serials, barcode scanner integration, automated low-stock warnings, and comprehensive financial profit/loss analytics.',
      stack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Barcode / IMEI Scanning', 'RESTful APIs', 'Database Indexing']
    },
    nawa: {
      title: 'Nawa Hospital Management Website',
      category: 'Web Application & Database (Laravel & MySQL)',
      image: 'assets/images/project-nawa.jpg',
      summary: 'A modern medical center management platform with an administrator control dashboard, doctor appointment scheduling, department directory, and role-based access control.',
      kpis: [
        { num: 'Multi-Doctor', label: 'Department Scheduling' },
        { num: 'RBAC', label: 'Role-Based Access Control' },
        { num: 'Multilingual', label: 'Patient Interface' }
      ],
      challenge: 'Medical clinics need a secure, fast, and structured platform to manage patient appointments, doctor availability schedules, and multilingual patient communications without data conflicts.',
      solution: 'Developed a full-stack Laravel application backed by an optimized MySQL relational database schema. Built an intuitive administrator panel with Tailwind CSS, appointment management logic, and strict access controls for medical staff.',
      stack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript (ES6)', 'HTML5 & CSS3', 'REST API Architecture']
    },
    dbarch: {
      title: 'Enterprise Database Schemas & REST APIs',
      category: 'Database Technology & API Architecture',
      image: 'assets/images/project-cloud.jpg',
      summary: 'High-performance relational database modeling in MySQL and scalable RESTful API controllers engineered for high data integrity.',
      kpis: [
        { num: '<5ms', label: 'Indexed Query Speed' },
        { num: '3NF / BCNF', label: 'Schema Normalization' },
        { num: 'RESTful', label: 'Clean API Layer' }
      ],
      challenge: 'Unoptimized queries, lack of indexing, and poor normalization cause data anomalies, race conditions, and sluggish application response times under load.',
      solution: 'Designed robust relational schemas with foreign key integrity, composite indices, and clean RESTful API contracts that validate payloads and enforce security policies.',
      stack: ['MySQL', 'Database Design', 'Indexing & Constraints', 'REST APIs', 'Git', 'Sulaimani Polytechnic University Standards']
    }
  };

  const projectModal = document.getElementById('projectModal');
  const closeProjectModalBtn = document.getElementById('closeProjectModalBtn');
  const modalProjectContent = document.getElementById('modalProjectContent');

  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data || !projectModal || !modalProjectContent) return;

    modalProjectContent.innerHTML = `
      <img src="${data.image}" alt="${data.title}" class="modal-project-img">
      <div style="margin-bottom: 0.5rem;">
        <span class="tech-badge-primary">${data.category}</span>
      </div>
      <h2 id="modalProjectTitle" style="font-size: 1.8rem; font-weight: 800; color: var(--text-white); margin-bottom: 0.75rem;">${data.title}</h2>
      <p style="color: var(--text-muted); font-size: 1.05rem; margin-bottom: 1.5rem;">${data.summary}</p>

      <div class="modal-kpi-grid">
        ${data.kpis.map(kpi => `
          <div class="modal-kpi-tile">
            <div class="modal-kpi-num">${kpi.num}</div>
            <div class="modal-kpi-label">${kpi.label}</div>
          </div>
        `).join('')}
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="color: var(--accent-cyan); font-size: 1rem; margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid fa-triangle-exclamation"></i> Project Goal & Challenge
        </h4>
        <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6;">${data.challenge}</p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="color: var(--accent-emerald); font-size: 1rem; margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid fa-circle-check"></i> Implementation & Solution
        </h4>
        <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6;">${data.solution}</p>
      </div>

      <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid rgba(255,255,255,0.08);">
        <h5 style="color: var(--text-white); font-size: 0.85rem; margin-bottom: 0.6rem; text-transform: uppercase; letter-spacing: 0.05em;">Technology Stack</h5>
        <div class="project-tags">
          ${data.stack.map(tech => `<span class="tag" style="background: rgba(0,242,254,0.08); border-color: rgba(0,242,254,0.25); color: var(--accent-cyan);">${tech}</span>`).join('')}
        </div>
      </div>
    `;

    projectModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.project-modal-trigger');
    if (trigger) {
      const proj = trigger.dataset.project;
      openProjectModal(proj);
    }
  });

  if (closeProjectModalBtn) {
    closeProjectModalBtn.addEventListener('click', closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
      closeProjectModal();
    }
  });


  // =========================================================================
  // 3. INTERACTIVE DEVELOPER TERMINAL CONSOLE
  // =========================================================================
  const terminalInput = document.getElementById('terminalInput');
  const terminalHistory = document.getElementById('terminalHistory');
  const terminalScreen = document.getElementById('terminalScreen');
  const terminalChips = document.querySelectorAll('.term-chip');

  const commandHistoryList = [];
  let historyIndex = -1;

  const terminalCommands = {
    help: () => `
<span class="highlight">Available Shell Commands:</span>
  <span class="highlight">whoami</span>            - Introduction to Zanyar Z Ahmed
  <span class="highlight">skills</span>            - View full technical stack
  <span class="highlight">projects</span>          - List all featured software projects
  <span class="highlight">education</span>         - Sulaimani Polytechnic University degree & coursework
  <span class="highlight">cat contact.json</span>  - Print direct contact phone, email & telegram
  <span class="highlight">download-cv</span>       - Download official CV PDF
  <span class="highlight">clear</span>             - Wipe terminal screen buffer
`,
    whoami: () => `
<span class="success">NAME:</span> Zanyar Z Ahmed
<span class="success">TITLE:</span> Database Technology & Software Developer
<span class="success">SPECIALTY:</span> Mobile Apps (Flutter) & Web Applications (Laravel, MySQL, Firebase)
<span class="success">LOCATION:</span> Sulaimani, Kurdistan Region, Iraq
<span class="success">LANGUAGES:</span> Kurdish (Native), English (Good)
`,
    skills: () => `
[MOBILE]    Flutter, Dart, Firebase Auth, Firestore
[BACKEND]   Laravel, PHP, RESTful APIs, Tailwind CSS, JavaScript, HTML5/CSS3
[DATABASE]  MySQL (Schema Design, Indexing, Transactions), Firebase NoSQL
[CS CORE]   OOP, Data Structures & Algorithms, Problem Solving, Git
`,
    projects: () => `
1. <span class="highlight">Iter</span> [Flutter | Firebase | Cloud Firestore]
   - AI-Powered multilingual student platform with real-time chat & academic events.
2. <span class="highlight">Nada App</span> [Flutter | Firebase | Quran API]
   - Islamic spiritual companion with full Quran reader, digital Zikr counter & prayer times.
3. <span class="highlight">Inventory Mobile Shop System</span> [Laravel | MySQL | POS]
   - Retail stock management with device IMEI tracking, barcode scanner & financial reports.
4. <span class="highlight">Nawa Hospital Website</span> [Laravel | MySQL | Tailwind CSS]
   - Healthcare portal with doctor scheduling, admin dashboard, RBAC & multilingual support.
5. <span class="highlight">Enterprise Database Schemas & REST APIs</span> [MySQL | REST APIs]
   - Optimized relational architectures with sub-5ms query performance and automated validation.
`,
    education: () => `
<span class="highlight">Sulaimani Polytechnic University (SPU)</span>
Degree: B.Sc. in Computer Science (2026 - Present)
Location: Sulaimani, Kurdistan Region, Iraq
Coursework: Database Technology, Data Structures & Algorithms, Operating Systems, Software Engineering, Web Development, Computer Networks.
`,
    'cat contact.json': () => `
{
  <span class="highlight">"name"</span>: "Zanyar Z Ahmed",
  <span class="highlight">"phone"</span>: "0751 798 8985 (+964)",
  <span class="highlight">"email"</span>: "zanyarzorab9@gmail.com",
  <span class="highlight">"telegram"</span>: "https://t.me/zanaway1",
  <span class="highlight">"location"</span>: "Saidsadiq - Baxtyari, Sulaimani, Kurdistan Region, Iraq"
}
`,
    'download-cv': () => {
      const link = document.createElement('a');
      link.href = 'assets/Zanyar_Z_Ahmed_CV.pdf';
      link.download = 'Zanyar_Z_Ahmed_CV.pdf';
      link.click();
      return `<span class="success">✓ Downloading Zanyar_Z_Ahmed_CV.pdf...</span>`;
    },
    clear: () => ''
  };

  function executeTerminalCommand(rawCmd) {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    commandHistoryList.push(cmd);
    historyIndex = commandHistoryList.length;

    // Append user command line
    const userLine = document.createElement('div');
    userLine.className = 'term-line cmd';
    userLine.innerHTML = `<span class="term-prompt"><span class="user">zanyar</span><span class="at">@</span><span class="host">spu</span>:<span class="path">~</span>$</span> <span>${escapeHTML(cmd)}</span>`;
    terminalHistory.appendChild(userLine);

    if (cmd.toLowerCase() === 'clear') {
      terminalHistory.innerHTML = '';
      if (terminalInput) terminalInput.value = '';
      return;
    }

    const outputLine = document.createElement('div');
    outputLine.className = 'term-line output';

    const cleanKey = cmd.toLowerCase();
    if (terminalCommands[cleanKey]) {
      outputLine.innerHTML = typeof terminalCommands[cleanKey] === 'function' ? terminalCommands[cleanKey]() : terminalCommands[cleanKey];
    } else {
      outputLine.innerHTML = `<span class="error">Command not found: "${escapeHTML(cmd)}".</span> Type <span class="highlight">help</span> to list commands.`;
    }

    terminalHistory.appendChild(outputLine);
    if (terminalScreen) {
      terminalScreen.scrollTop = terminalScreen.scrollHeight;
    }

    if (terminalInput) terminalInput.value = '';
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeTerminalCommand(terminalInput.value);
      } else if (e.key === 'ArrowUp') {
        if (historyIndex > 0) {
          historyIndex--;
          terminalInput.value = commandHistoryList[historyIndex] || '';
        }
      } else if (e.key === 'ArrowDown') {
        if (historyIndex < commandHistoryList.length - 1) {
          historyIndex++;
          terminalInput.value = commandHistoryList[historyIndex] || '';
        } else {
          historyIndex = commandHistoryList.length;
          terminalInput.value = '';
        }
      }
    });
  }

  terminalChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.dataset.cmd;
      if (cmd) {
        executeTerminalCommand(cmd);
        if (terminalInput) terminalInput.focus();
      }
    });
  });


  // =========================================================================
  // 4. LIVE TELEMETRY SPARKLINE CANVAS & METRICS
  // =========================================================================
  const canvas = document.getElementById('telemetryCanvas');
  const metricLatency = document.getElementById('metricLatency');
  const metricCache = document.getElementById('metricCache');
  const chartTimestamp = document.getElementById('chartTimestamp');
  const simulateSpikeBtn = document.getElementById('simulateSpikeBtn');

  let sparklinePoints = Array.from({ length: 40 }, () => 20 + Math.random() * 20);
  let isSpikeActive = false;

  function drawTelemetry() {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let y = 20; y < height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Gradient fill under curve
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(0, 242, 254, 0.35)');
    gradient.addColorStop(0.7, 'rgba(168, 85, 247, 0.15)');
    gradient.addColorStop(1, 'rgba(0, 242, 254, 0)');

    const step = width / (sparklinePoints.length - 1);

    ctx.beginPath();
    ctx.moveTo(0, height - (sparklinePoints[0] / 100) * height);

    for (let i = 1; i < sparklinePoints.length; i++) {
      const x = i * step;
      const y = height - (sparklinePoints[i] / 100) * height;
      ctx.lineTo(x, y);
    }

    // Stroke line
    ctx.strokeStyle = isSpikeActive ? '#f43f5e' : '#00f2fe';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Fill region
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Current head point dot
    const lastX = width;
    const lastY = height - (sparklinePoints[sparklinePoints.length - 1] / 100) * height;
    ctx.beginPath();
    ctx.arc(lastX - 2, lastY, 4, 0, Math.PI * 2);
    ctx.fillStyle = isSpikeActive ? '#f43f5e' : '#00f2fe';
    ctx.fill();
    ctx.shadowBlur = 10;
    ctx.shadowColor = isSpikeActive ? '#f43f5e' : '#00f2fe';
  }

  function updateTelemetryData() {
    let nextVal;
    if (isSpikeActive) {
      nextVal = 85 + Math.random() * 10;
    } else {
      nextVal = 25 + Math.sin(Date.now() / 2500) * 10 + (Math.random() * 8);
    }

    sparklinePoints.shift();
    sparklinePoints.push(Math.max(10, Math.min(95, nextVal)));
    drawTelemetry();

    // Update digital stats
    if (metricLatency) {
      const lat = isSpikeActive ? (18.5 + Math.random() * 4).toFixed(1) : (4.2 + Math.random() * 0.8).toFixed(1);
      metricLatency.innerText = `${lat} ms`;
    }
    if (metricCache) {
      const cache = (99.0 + Math.random() * 0.4).toFixed(1);
      metricCache.innerText = `${cache}%`;
    }
    if (chartTimestamp) {
      const now = new Date();
      chartTimestamp.innerText = now.toTimeString().split(' ')[0] + ' (Sulaimani)';
    }
  }

  function triggerTelemetrySpike() {
    if (isSpikeActive) return;
    isSpikeActive = true;
    showToast('⚠️ Simulating 10,000 concurrent database queries...', 'warning');

    setTimeout(() => {
      isSpikeActive = false;
      showToast('✓ Queries indexed successfully. MySQL latency restored to 4.8ms.', 'success');
    }, 4500);
  }

  if (simulateSpikeBtn) {
    simulateSpikeBtn.addEventListener('click', triggerTelemetrySpike);
  }

  setInterval(updateTelemetryData, 800);
  drawTelemetry();


  // =========================================================================
  // 5. 3D TILT EFFECT FOR PROFILE CARD
  // =========================================================================
  const tiltCard = document.getElementById('tiltProfileCard');
  if (tiltCard && window.matchMedia('(pointer: fine)').matches) {
    tiltCard.addEventListener('mousemove', (e) => {
      const rect = tiltCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -9;
      const rotateY = ((x - centerX) / centerX) * 9;

      tiltCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      tiltCard.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
      tiltCard.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
    });

    tiltCard.addEventListener('mouseleave', () => {
      tiltCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  }


  // =========================================================================
  // 6. CUSTOM GLOWING CURSOR FOLLOWER
  // =========================================================================
  const cursorDot = document.getElementById('cursorDot');
  const cursorGlow = document.getElementById('cursorGlow');

  if (cursorDot && cursorGlow && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = -100;
    let mouseY = -100;
    let glowX = -100;
    let glowY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    function animateCursor() {
      glowX += (mouseX - glowX) * 0.18;
      glowY += (mouseY - glowY) * 0.18;
      cursorGlow.style.transform = `translate(${glowX}px, ${glowY}px)`;
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .project-card, .skill-card, .term-chip');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }


  // =========================================================================
  // 7. TOAST NOTIFICATIONS & CLIPBOARD COPY
  // =========================================================================
  const toastContainer = document.getElementById('toastContainer');

  function showToast(message, type = 'info') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    
    let icon = 'fa-solid fa-circle-check';
    if (type === 'warning') icon = 'fa-solid fa-triangle-exclamation';
    if (type === 'error') icon = 'fa-solid fa-circle-xmark';

    toast.innerHTML = `<i class="${icon}"></i> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('hiding');
      setTimeout(() => toast.remove(), 350);
    }, 3800);
  }

  // Copy email triggers
  const copyEmailBtns = [
    document.getElementById('copyEmailQuickBtn'),
    document.getElementById('copyEmailContactBtn')
  ];

  copyEmailBtns.forEach(btn => {
    if (!btn) return;
    btn.addEventListener('click', () => {
      const email = 'zanyarzorab9@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard! (zanyarzorab9@gmail.com)');
      }).catch(() => {
        showToast('Email: zanyarzorab9@gmail.com');
      });
    });
  });

  // Copy phone trigger
  const copyPhoneContactBtn = document.getElementById('copyPhoneContactBtn');
  if (copyPhoneContactBtn) {
    copyPhoneContactBtn.addEventListener('click', () => {
      const phone = '07517988985';
      navigator.clipboard.writeText(phone).then(() => {
        showToast('Phone number copied to clipboard! (0751 798 8985)');
      }).catch(() => {
        showToast('Phone: 0751 798 8985');
      });
    });
  }

  // Open contact trigger
  const openContactModalBtn = document.getElementById('openContactModalBtn');
  if (openContactModalBtn) {
    openContactModalBtn.addEventListener('click', () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const nameField = document.getElementById('senderName');
        if (nameField) nameField.focus();
      }
    });
  }


  // =========================================================================
  // 8. CONTACT FORM VALIDATION & DISPATCH
  // =========================================================================
  const contactForm = document.getElementById('contactForm');
  const formSuccessBanner = document.getElementById('formSuccessBanner');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const nameInput = document.getElementById('senderName');
      const emailInput = document.getElementById('senderEmail');
      const messageInput = document.getElementById('senderMessage');

      if (!nameInput.value.trim()) {
        nameInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        nameInput.closest('.form-group').classList.remove('has-error');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        emailInput.closest('.form-group').classList.remove('has-error');
      }

      if (messageInput.value.trim().length < 10) {
        messageInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        messageInput.closest('.form-group').classList.remove('has-error');
      }

      if (isValid) {
        const submitBtn = document.getElementById('sendMessageBtn');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending to Zanyar...</span>';
        }

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> <span>Send Message to Zanyar</span>';
          }
          if (formSuccessBanner) {
            formSuccessBanner.classList.add('visible');
          }
          showToast('Message sent! Zanyar will get back to you soon.', 'success');
          contactForm.reset();

          setTimeout(() => {
            if (formSuccessBanner) formSuccessBanner.classList.remove('visible');
          }, 6000);
        }, 1000);
      }
    });
  }


  // =========================================================================
  // 9. NAVBAR SCROLLSPY, MOBILE MENU & TIME CLOCK
  // =========================================================================
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinksContainer = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (mobileMenuBtn && navLinksContainer) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinksContainer.classList.toggle('open');
    });

    navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
      });
    });
  }

  // Local Time Clock (Sulaimani, Iraq UTC+3)
  const currentLocalTime = document.getElementById('currentLocalTime');
  function updateClock() {
    if (!currentLocalTime) return;
    const now = new Date();
    currentLocalTime.innerText = `(${now.toLocaleTimeString()})`;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Back to top button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});

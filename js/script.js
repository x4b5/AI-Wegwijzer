function openLumoPopup() {
  const screenWidth = window.screen.availWidth || window.screen.width;
  const screenHeight = window.screen.availHeight || window.screen.height;
  const popupWidth = Math.min(1200, Math.round(screenWidth * 0.5));
  const popupHeight = Math.min(900, Math.round(screenHeight * 0.9));
  const left = Math.max(0, screenWidth - popupWidth - 20);
  const top = 20;

  // Open direct de doel-URL met positionering (betere compatibiliteit)
  const features = `width=${popupWidth},height=${popupHeight},left=${left},top=${top},scrollbars=yes,resizable=yes,status=yes,toolbar=no,menubar=no,location=yes,noopener`;
  const win = window.open('https://lumo.proton.me', 'lumoChatbot', features);
  if (win) {
    try { win.focus(); } catch (e) {}
  } else {
    alert('Popup werd geblokkeerd. Sta popups toe voor deze website en probeer opnieuw.');
  }
}

// Bookmark functionality
function bookmarkPage() {
  const url = window.location.href;
  const title = document.title;

  // Check if the browser supports the bookmark API
  if (window.sidebar && window.sidebar.addPanel) {
    // Firefox
    window.sidebar.addPanel(title, url, '');
  } else if (window.external && 'AddFavorite' in window.external) {
    // Internet Explorer
    window.external.AddFavorite(url, title);
  } else if (window.opera && window.print) {
    // Opera
    const elem = document.createElement('a');
    elem.setAttribute('href', url);
    elem.setAttribute('title', title);
    elem.setAttribute('rel', 'sidebar');
    elem.click();
  } else {
    // Modern browsers (Chrome, Safari, Edge)
    // Show instructions for manual bookmarking
    const message = `Om deze pagina te bookmarken:\n\nChrome/Edge: Druk op Ctrl+D (Windows) of Cmd+D (Mac)\nSafari: Druk op Cmd+D (Mac)\n\nOf gebruik de bookmark knop in je browser.`;
    alert(message);

    // Also try to copy URL to clipboard
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          console.log('URL gekopieerd naar clipboard');
        })
        .catch((err) => {
          console.log('Kon URL niet kopiëren:', err);
        });
    }
  }
}

// Quiz functionality
function toggleAnswer(option, buttonEl) {
  const feedback = document.getElementById(`answer-${option}`);
  if (!feedback) return;

  // Bepaal de quizgroep (container) zodat we binnen het juiste blok toggelen
  const groupContainer =
    feedback.closest('.quiz-options') ||
    (buttonEl ? buttonEl.closest('.quiz-options') : document);

  // Verberg alle feedbacks binnen deze groep en reset aria-states
  const allFeedbacks = groupContainer.querySelectorAll('.answer-feedback');
  const allButtons = groupContainer.querySelectorAll('.quiz-option');

  allFeedbacks.forEach((fb) => {
    fb.classList.remove('show');
    fb.hidden = true;
    fb.setAttribute('aria-hidden', 'true');
  });
  allButtons.forEach((btn) => {
    btn.setAttribute('aria-expanded', 'false');
    btn.classList.remove('correct', 'incorrect');
  });

  // Toon geselecteerde feedback (toegankelijk)
  feedback.classList.add('show');
  feedback.hidden = false;
  feedback.setAttribute('aria-hidden', 'false');
  feedback.setAttribute('role', 'status');
  feedback.setAttribute('aria-live', 'polite');
  if (buttonEl) {
    buttonEl.setAttribute('aria-expanded', 'true');
  }

  // Verplaats focus kort naar feedback voor screenreaders
  if (!feedback.hasAttribute('tabindex')) {
    feedback.setAttribute('tabindex', '-1');
  }
  feedback.focus({ preventScroll: false });

  // Bepaal correctheid op basis van icoon (✅ is correct)
  const iconEl = feedback.querySelector('.feedback-icon');
  const isCorrect = iconEl && /✅/.test(iconEl.textContent || '');
  if (buttonEl) {
    buttonEl.classList.add(isCorrect ? 'correct' : 'incorrect');
  }

  // Sla voortgang op
  try {
    if (typeof LearningProgress !== 'undefined') {
      LearningProgress.recordQuizResult(option, !!isCorrect);
    }
  } catch (e) {}
}

// Maak quizopties toegankelijk (keyboard/ARIA), ook voor niet-button elementen
function enhanceQuizAccessibility() {
  try {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((el) => {
      // Bepaal feedback-id: eerst via child .answer-feedback, anders via aria-controls, anders via inline onclick
      let feedbackId = '';
      const childFeedback = el.querySelector('.answer-feedback');
      if (childFeedback && childFeedback.id) {
        feedbackId = childFeedback.id;
      } else if (el.getAttribute('aria-controls')) {
        feedbackId = el.getAttribute('aria-controls');
      } else {
        const onclick = el.getAttribute('onclick') || '';
        const m = onclick.match(/toggleAnswer\('([^']+)'/);
        if (m && m[1]) feedbackId = `answer-${m[1]}`;
      }

      if (feedbackId) {
        el.setAttribute('aria-controls', feedbackId);
      }
      el.setAttribute('aria-expanded', 'false');

      // Als het geen <button> is, zet rol en tabindex, en voeg keyboard support toe
      if (el.tagName.toLowerCase() !== 'button') {
        el.setAttribute('role', 'button');
        if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
        el.addEventListener('keydown', (ev) => {
          const key = ev.key;
          if (key === 'Enter' || key === ' ') {
            ev.preventDefault();
            const id = (el.getAttribute('aria-controls') || '').replace(/^answer-/, '');
            if (id) toggleAnswer(id, el);
          }
        });
      }
    });
  } catch (e) {}
}

// Eenvoudige sidebar functionaliteit
let lastSidebarToggleButton = null;

function toggleSimpleSidebar() {
  const sidebar = document.getElementById('simpleSidebar');
  if (!sidebar) return;

  const isOpen = sidebar.classList.toggle('open');
  // Update ARIA states
  try {
    const content = sidebar.querySelector('.sidebar-content');
    const toggleBtns = document.querySelectorAll('.sidebar-toggle-btn');
    toggleBtns.forEach((btn) => btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false'));
    if (content) content.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  } catch (e) {}

  // Manage focus
  try {
    if (isOpen) {
      const closeBtn = sidebar.querySelector('.close-sidebar-btn');
      if (closeBtn) closeBtn.focus({ preventScroll: false });
    } else if (lastSidebarToggleButton) {
      lastSidebarToggleButton.focus({ preventScroll: false });
    }
  } catch (e) {}
}

// Naar boven knop functionaliteit
function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// Naar home knop functionaliteit
function goToHome() {
  try {
    const segments = window.location.pathname.split('/').filter(Boolean);
    const rootIndex = segments.indexOf('AI-Wegwijzer');
    if (rootIndex !== -1) {
      const base =
        '/' + segments.slice(0, rootIndex + 1).join('/') + '/index.html';
      window.location.href = base;
    } else {
      window.location.href = '/index.html';
    }
  } catch (e) {
    window.location.href = '/index.html';
  }
}

// Navigatie tussen content-blokken
function getContentBlocks() {
  return Array.from(document.querySelectorAll('.content-block'));
}

function getCurrentScrollTop() {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

function scrollToNextBlock() {
  const blocks = getContentBlocks();
  const currentTop = getCurrentScrollTop();
  const viewportOffset = 10;

  const next = blocks.find((el) => {
    const elTop = el.getBoundingClientRect().top + currentTop;
    return elTop > currentTop + viewportOffset;
  });

  if (next) {
    next.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}

function scrollToPreviousBlock() {
  const blocks = getContentBlocks();
  const currentTop = getCurrentScrollTop();
  const viewportOffset = 10;

  const prev = [...blocks].reverse().find((el) => {
    const elTop = el.getBoundingClientRect().top + currentTop;
    return elTop < currentTop - viewportOffset;
  });

  if (prev) {
    prev.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    goToTop();
  }
}

// (verplaatst) animateSidebars: gebruik de uitgebreidere variant verderop in dit bestand

// Automatische datum update
function updateLastModifiedDate() {
  const lastUpdatedElement = document.getElementById('last-updated');
  if (lastUpdatedElement) {
    const now = new Date();
    lastUpdatedElement.textContent = now.toLocaleDateString('nl-NL');
    if (lastUpdatedElement.tagName && lastUpdatedElement.tagName.toLowerCase() === 'time') {
      lastUpdatedElement.setAttribute('datetime', now.toISOString());
    }
  }
}

// Voer de animatie uit wanneer de pagina geladen is
document.addEventListener('DOMContentLoaded', function () {
  // Bestaande initialisatie
  initializeTheme();
  animateSidebars();
  updateLastModifiedDate();

  // Dock visibility toggle (persist in localStorage)
  (function initDockVisibilityToggle() {
    try {
      const STORAGE_KEY = 'aiwegwijzer.dock.hidden.v1';
      const savedHidden = localStorage.getItem(STORAGE_KEY) === '1';
      document.documentElement.classList.toggle('dock-hidden', !!savedHidden);

      let btn = document.querySelector('.dock-visibility-toggle-btn');
      if (!btn) {
        btn = document.createElement('button');
        btn.className = 'dock-visibility-toggle-btn';
        btn.type = 'button';
        btn.setAttribute('aria-label', savedHidden ? 'Dock tonen' : 'Dock verbergen');
        btn.setAttribute('title', savedHidden ? 'Dock tonen' : 'Dock verbergen');
        btn.textContent = savedHidden ? '›' : '‹';
        document.body.appendChild(btn);
      }

      btn.addEventListener('click', function () {
        const hidden = document.documentElement.classList.toggle('dock-hidden');
        localStorage.setItem(STORAGE_KEY, hidden ? '1' : '0');
        btn.setAttribute('aria-label', hidden ? 'Dock tonen' : 'Dock verbergen');
        btn.setAttribute('title', hidden ? 'Dock tonen' : 'Dock verbergen');
        btn.textContent = hidden ? '›' : '‹';
      });
    } catch (e) {}
  })();

  // Sidebar legenda toggle (meerdere knoppen ondersteunen)
  const legendToggleBtns = document.querySelectorAll('.sidebar-toggle-btn');
  legendToggleBtns.forEach((btn) => {
    // Tooltip vanuit aria-label
    const label = btn.getAttribute('aria-label');
    if (label && !btn.getAttribute('title')) btn.setAttribute('title', label);
    btn.addEventListener('click', function () {
      lastSidebarToggleButton = btn;
      toggleSimpleSidebar();
    });
    // Init ARIA
    btn.setAttribute('aria-expanded', 'false');
  });

  const legendCloseBtn = document.querySelector('.close-sidebar-btn');
  if (legendCloseBtn) {
    legendCloseBtn.addEventListener('click', toggleSimpleSidebar);
  }

  // Sluit sidebar bij klik buiten de sidebar (maar niet bij klikken op elementen binnen de sidebar)
  document.addEventListener('click', function (ev) {
    try {
      const sidebar = document.getElementById('simpleSidebar');
      if (!sidebar) return;
      const isOpen = sidebar.classList.contains('open');
      if (!isOpen) return;

      const clickedInsideSidebar = sidebar.contains(ev.target);
      const toggles = Array.from(document.querySelectorAll('.sidebar-toggle-btn'));
      const clickedAnyToggle = toggles.some((t) => t.contains(ev.target));

      if (!clickedInsideSidebar && !clickedAnyToggle) {
        sidebar.classList.remove('open');
        try {
          const content = sidebar.querySelector('.sidebar-content');
          if (content) content.setAttribute('aria-hidden', 'true');
          toggles.forEach((btn) => btn.setAttribute('aria-expanded', 'false'));
        } catch (e) {}
      }
    } catch (e) {}
  }, true);

  // Sluit sidebar met Escape
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') {
      const sidebar = document.getElementById('simpleSidebar');
      if (sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        try {
          const content = sidebar.querySelector('.sidebar-content');
          if (content) content.setAttribute('aria-hidden', 'true');
          const toggles = document.querySelectorAll('.sidebar-toggle-btn');
          toggles.forEach((btn) => btn.setAttribute('aria-expanded', 'false'));
        } catch (e) {}
        if (lastSidebarToggleButton) {
          lastSidebarToggleButton.focus({ preventScroll: false });
        }
      }
    }
  });

  // Top: naar boven
  const topToggleBtn = document.querySelector('.top-toggle-btn');
  if (topToggleBtn) {
    if (!topToggleBtn.getAttribute('title')) {
      const label = topToggleBtn.getAttribute('aria-label') || 'Naar boven';
      topToggleBtn.setAttribute('title', label);
    }
    topToggleBtn.addEventListener('click', goToTop);
  }

  // Home: naar home
  const homeToggleBtn = document.querySelector('.home-toggle-btn');
  if (homeToggleBtn) {
    if (!homeToggleBtn.getAttribute('title')) {
      const label = homeToggleBtn.getAttribute('aria-label') || 'Naar home';
      homeToggleBtn.setAttribute('title', label);
    }
    homeToggleBtn.addEventListener('click', goToHome);
  }

  // Reset voortgang knop
  const resetBtn = document.getElementById('reset-progress');
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      try {
        localStorage.removeItem('aiwegwijzer.progress.v1');
      } catch (e) {}
      // Herlaad om UI en badges te verversen
      window.location.reload();
    });
  }

  // Theme toggle
  const themeToggleBtn = document.querySelector('.theme-toggle-btn');
  if (themeToggleBtn) {
    if (!themeToggleBtn.getAttribute('title')) {
      const label = themeToggleBtn.getAttribute('aria-label') || 'Wissel thema';
      themeToggleBtn.setAttribute('title', label);
    }
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Navigatie omhoog/omlaag
  const navUpBtn = document.querySelector('.nav-up-toggle-btn');
  if (navUpBtn) {
    if (!navUpBtn.getAttribute('title')) {
      const label = navUpBtn.getAttribute('aria-label') || 'Vorige blok';
      navUpBtn.setAttribute('title', label);
    }
    navUpBtn.addEventListener('click', scrollToPreviousBlock);
  }
  const navDownBtn = document.querySelector('.nav-down-toggle-btn');
  if (navDownBtn) {
    if (!navDownBtn.getAttribute('title')) {
      const label = navDownBtn.getAttribute('aria-label') || 'Volgende blok';
      navDownBtn.setAttribute('title', label);
    }
    navDownBtn.addEventListener('click', scrollToNextBlock);
  }

  // Opdrachtknoppen
  const btnMoveLeft = document.getElementById('btn-move-left');
  if (btnMoveLeft) {
    btnMoveLeft.addEventListener('click', function() {
      moveWindowLeft();
      if (typeof LearningProgress !== 'undefined') LearningProgress.recordTask('moveLeft');
    });
  }
  const btnOpenLumo = document.getElementById('btn-open-lumo');
  if (btnOpenLumo) {
    btnOpenLumo.addEventListener('click', function() {
      openLumoPopup();
      if (typeof LearningProgress !== 'undefined') LearningProgress.recordTask('openedLumo');
    });
  }
  const btnOpenPerplexity = document.getElementById('btn-open-perplexity');
  if (btnOpenPerplexity) {
    btnOpenPerplexity.addEventListener('click', function() {
      openPerplexityPopup();
      if (typeof LearningProgress !== 'undefined') LearningProgress.recordTask('openedPerplexity');
    });
  }

  // Start voortgangsbadge
  if (typeof LearningProgress !== 'undefined') LearningProgress.init();

  // Toegankelijkheid voor quizopties initialiseren
  enhanceQuizAccessibility();
});

// Verplaats bestaande DOMContentLoaded listeners niet; ze staan hierboven samengevoegd

// Kopieer prompt functionaliteit
function copyPrompt(button) {
  const promptBox = button.closest('.prompt-box');
  const promptContent = promptBox.querySelector('.prompt-content');
  const textToCopy = promptContent.textContent || promptContent.innerText;

  // Kopieer naar klembord
  navigator.clipboard
    .writeText(textToCopy)
    .then(function () {
      // Toon feedback
      const originalText = button.innerHTML;
      button.innerHTML = '✅';
      button.style.background = 'var(--primary-green)';

      // Reset na 2 seconden naar originele donkergrijze kleur
      setTimeout(function () {
        button.innerHTML = originalText;
        button.style.background = '#6b7280';
      }, 2000);
    })
    .catch(function (err) {
      // Fallback voor oudere browsers
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      // Toon feedback
      const originalText = button.innerHTML;
      button.innerHTML = '✅';
      button.style.background = 'var(--primary-green)';

      setTimeout(function () {
        button.innerHTML = originalText;
        button.style.background = '#6b7280';
      }, 2000);
    });
}

// Function to move window to left side of screen
function moveWindowLeft() {
  try {
    // Method 1: Try to use window.moveTo and window.resizeTo
    if (window.moveTo && window.resizeTo) {
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      const currentWidth = window.outerWidth;
      const currentHeight = window.outerHeight;

      // Move to left side and resize to half screen width
      window.moveTo(0, 0);
      window.resizeTo(screenWidth / 2, currentHeight);
      return;
    }

    // Method 2: Try using window.open with specific position
    const currentUrl = window.location.href;
    const newWindow = window.open(
      currentUrl,
      '_self',
      `left=0,top=0,width=${window.screen.width / 2},height=${
        window.outerHeight
      },scrollbars=yes,resizable=yes`
    );

    if (newWindow) {
      return;
    }

    throw new Error('Window move not supported');
  } catch (error) {
    // Silent fallback - no alerts
    console.log('Window move functionality not available');
  }
}

// Theme toggle functionaliteit
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  // Update toggle button icon en aria-state
  updateThemeIcon(newTheme);
  const toggleBtn = document.querySelector('.theme-toggle-btn');
  if (toggleBtn) {
    toggleBtn.setAttribute(
      'aria-pressed',
      newTheme === 'dark' ? 'true' : 'false'
    );
  }
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById('theme-icon');

  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

function initializeTheme() {
  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem('theme') || 'light';
  const html = document.documentElement;

  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
  const toggleBtn = document.querySelector('.theme-toggle-btn');
  if (toggleBtn) {
    toggleBtn.setAttribute(
      'aria-pressed',
      savedTheme === 'dark' ? 'true' : 'false'
    );
  }
}

// Initialize theme when page loads
document.addEventListener('DOMContentLoaded', function () {
  initializeTheme();
  animateSidebars();
});

// Animate sidebars on page load
function animateSidebars() {
  const sidebars = document.querySelectorAll(
    '.simple-sidebar, .top-sidebar, .home-sidebar, .theme-sidebar, .nav-up-sidebar, .nav-down-sidebar'
  );

  // Add a small delay for a nicer animation
  setTimeout(() => {
    sidebars.forEach((sidebar, index) => {
      // Stagger the animations for a better effect
      setTimeout(() => {
        sidebar.classList.add('loaded');
      }, index * 200); // 200ms delay between each sidebar
    });
  }, 100);
}

function openPerplexityPopup() {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const popupWidth = Math.min(1200, screenWidth * 0.5);
  const popupHeight = Math.min(900, screenHeight * 0.9);
  const left = screenWidth - popupWidth - 20;
  const top = 20;

  const features = `width=${popupWidth},height=${popupHeight},left=${left},top=${top},scrollbars=yes,resizable=yes,status=yes,toolbar=no,menubar=no,location=yes,noopener`;
  const win = window.open(
    'https://www.perplexity.ai/',
    'perplexityChatbot',
    features
  );
  if (win) {
    try {
      win.focus();
    } catch (e) {}
  }
}

// Klein leer-progress systeem
const LearningProgress = (function () {
  const STORAGE_KEY = 'aiwegwijzer.progress.v1';
  let state = {
    quizzes: {}, // id -> { correct:boolean }
    tasks: { moveLeft: false, openedLumo: false, openedPerplexity: false },
    ui: { collapsed: false },
  };

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          state = {
            quizzes: Object.assign({}, state.quizzes, parsed.quizzes || {}),
            tasks: Object.assign({}, state.tasks, parsed.tasks || {}),
            ui: Object.assign({}, state.ui, parsed.ui || {}),
          };
        }
      }
    } catch (e) {}
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  // Stel standaard in dat de balk ingeklapt is op kleine schermen,
  // behalve als de gebruiker al een voorkeur heeft opgeslagen
  function maybeSetDefaultCollapsedForMobile() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      let hasPreference = false;
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          if (
            parsed &&
            parsed.ui &&
            Object.prototype.hasOwnProperty.call(parsed.ui, 'collapsed') &&
            typeof parsed.ui.collapsed === 'boolean'
          ) {
            hasPreference = true;
          }
        } catch (e) {}
      }
      if (!hasPreference) {
        const isMobile = window.matchMedia
          ? window.matchMedia('(max-width: 768px)').matches
          : window.innerWidth <= 768;
        state.ui.collapsed = !!isMobile;
        save();
      }
    } catch (e) {}
  }

  function ensureBadge() {
    let el = document.getElementById('learning-progress-badge');
    if (!el) {
      el = document.createElement('div');
      el.id = 'learning-progress-badge';
      el.setAttribute('role', 'status');
      el.style.position = 'fixed';
      el.style.left = '0';
      el.style.right = '0';
      el.style.bottom = '0';
      el.style.zIndex = '1100';
      el.style.padding = '10px 16px';
      el.style.borderRadius = '0';
      el.style.background = 'rgba(255,255,255,0.95)';
      el.style.borderTop = '1px solid #c4c9d1';
      el.style.boxShadow = '0 -2px 10px rgba(0,0,0,0.06)';
      el.style.fontSize = '13px';
      el.style.color = '#111827';
      el.style.userSelect = 'none';
      el.style.textAlign = 'center';

      const inner = document.createElement('div');
      inner.style.maxWidth = '1200px';
      inner.style.margin = '0 auto';
      inner.style.display = 'flex';
      inner.style.alignItems = 'center';
      inner.style.justifyContent = 'center';
      inner.style.position = 'relative';
      inner.style.flexDirection = 'column';
      inner.style.gap = '6px';

      const text = document.createElement('span');
      text.id = 'learning-progress-text';
      text.textContent = '';

      // Horizontale voortgangsbalk
      const bar = document.createElement('div');
      bar.id = 'learning-progress-bar';
      bar.setAttribute('role', 'progressbar');
      bar.setAttribute('aria-valuemin', '0');
      bar.setAttribute('aria-valuemax', '100');
      bar.setAttribute('aria-valuenow', '0');
      bar.style.width = '100%';
      bar.style.maxWidth = '720px';
      bar.style.height = '8px';
      bar.style.margin = '2px auto 0';
      bar.style.borderRadius = '9999px';
      bar.style.overflow = 'hidden';

      const barFill = document.createElement('div');
      barFill.id = 'learning-progress-bar-fill';
      barFill.style.width = '0%';
      barFill.style.height = '100%';
      barFill.style.transition = 'width 300ms ease';

      bar.appendChild(barFill);

      const reset = document.createElement('button');
      reset.id = 'learning-progress-reset';
      reset.type = 'button';
      reset.setAttribute('aria-label', 'Reset voortgang');
      reset.style.position = 'absolute';
      reset.style.right = '48px';
      reset.style.top = '50%';
      reset.style.transform = 'translateY(-50%)';
      reset.style.background = 'transparent';
      reset.style.border = '1px solid #c4c9d1';
      reset.style.borderRadius = '6px';
      reset.style.padding = '2px 8px';
      reset.style.cursor = 'pointer';
      reset.style.fontSize = '12px';
      reset.textContent = 'Reset';
      reset.addEventListener('click', function () {
        const ok = window.confirm('Weet je zeker dat je alle quiz- en taakvoortgang wilt wissen?');
        if (!ok) return;
        try {
          localStorage.removeItem(STORAGE_KEY);
        } catch (e) {}
        window.location.reload();
      });

      const toggle = document.createElement('button');
      toggle.id = 'learning-progress-toggle';
      toggle.type = 'button';
      toggle.setAttribute('aria-label', 'Minimaliseer');
      toggle.style.position = 'absolute';
      toggle.style.right = '12px';
      toggle.style.top = '50%';
      toggle.style.transform = 'translateY(-50%)';
      toggle.style.background = 'transparent';
      toggle.style.border = '1px solid #c4c9d1';
      toggle.style.borderRadius = '6px';
      toggle.style.padding = '2px 8px';
      toggle.style.cursor = 'pointer';
      toggle.style.fontSize = '12px';
      toggle.textContent = state.ui.collapsed ? '▲' : '▼';
      toggle.addEventListener('click', function () {
        state.ui.collapsed = !state.ui.collapsed;
        save();
        applyCollapsed(el);
      });

      inner.appendChild(text);
      inner.appendChild(bar);
      inner.appendChild(reset);
      inner.appendChild(toggle);
      el.appendChild(inner);

      document.body.appendChild(el);
      // Zorg dat de balk geen content overlapt
      try {
        const currentPadding = parseInt(
          window.getComputedStyle(document.body).paddingBottom || '0',
          10
        );
        if (currentPadding < 56) {
          document.body.style.paddingBottom = '56px';
        }
      } catch (e) {}
    }
    // Pas themestijlen toe
    applyThemeStyles(el);
    applyCollapsed(el);
    return el;
  }

  function applyCollapsed(el) {
    try {
      const text = el.querySelector('#learning-progress-text');
      const toggle = el.querySelector('#learning-progress-toggle');
      if (!text || !toggle) return;
      if (state.ui.collapsed) {
        text.style.display = 'none';
        el.style.padding = '6px 16px';
        toggle.textContent = '▲';
        toggle.setAttribute('aria-label', 'Maximaliseer');
      } else {
        text.style.display = 'inline';
        el.style.padding = '10px 16px';
        toggle.textContent = '▼';
        toggle.setAttribute('aria-label', 'Minimaliseer');
      }
    } catch (e) {}
  }

  function applyThemeStyles(el) {
    try {
      const html = document.documentElement;
      const isDark = (html.getAttribute('data-theme') || '').toLowerCase() === 'dark';
      const text = el.querySelector('#learning-progress-text');
      const toggle = el.querySelector('#learning-progress-toggle');
      const reset = el.querySelector('#learning-progress-reset');
      const bar = el.querySelector('#learning-progress-bar');
      const barFill = el.querySelector('#learning-progress-bar-fill');

      // Gebruik CSS-variabelen zodat kleuren consistent blijven met het thema
      el.style.background = 'var(--bg-secondary)';
      el.style.color = 'var(--text-primary)';
      el.style.borderTop = isDark ? '1px solid var(--gray-600)' : '1px solid var(--border-light)';
      el.style.boxShadow = isDark ? '0 -2px 10px rgba(0,0,0,0.3)' : '0 -2px 10px rgba(0,0,0,0.06)';
      if (text) text.style.color = 'var(--text-primary)';
      if (toggle) {
        toggle.style.border = isDark ? '1px solid var(--gray-600)' : '1px solid var(--border-light)';
        toggle.style.color = 'var(--text-primary)';
        toggle.style.background = 'transparent';
      }
      if (reset) {
        reset.style.border = isDark ? '1px solid var(--gray-600)' : '1px solid var(--border-light)';
        reset.style.color = 'var(--text-primary)';
        reset.style.background = 'transparent';
      }
      if (bar) {
        bar.style.background = isDark ? 'var(--gray-700)' : 'var(--border-light)';
      }
      if (barFill) {
        barFill.style.background = 'var(--primary-green)';
      }
    } catch (e) {}
  }

  // Vind alle correcte antwoordtargets op de pagina (aan de hand van ✅ icoon)
  function getQuizTargetIds() {
    try {
      const nodes = Array.from(
        document.querySelectorAll('.answer-feedback .feedback-icon')
      );
      const targets = nodes
        .filter((n) => /✅/.test((n.textContent || '').trim()))
        .map((n) => n.closest('.answer-feedback'))
        .filter(Boolean)
        .map((fb) => {
          const id = fb.id || '';
          return id.startsWith('answer-') ? id.substring('answer-'.length) : id;
        })
        .filter((id) => !!id);
      // Dedup voor het geval van meerdere elementen
      return Array.from(new Set(targets));
    } catch (e) {
      return [];
    }
  }

  function calcProgress() {
    const targets = getQuizTargetIds();
    const total = targets.length;
    const done = targets.filter((id) => state.quizzes[id] && state.quizzes[id].correct).length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    return { done, total, pct };
  }

  function renderBadge() {
    const badge = ensureBadge();
    const { pct, done, total } = calcProgress();
    const text = badge.querySelector('#learning-progress-text');
    if (text) {
      text.textContent = `Quiz-voortgang: ${pct}% (${done}/${total})`;
    } else {
      badge.textContent = `Quiz-voortgang: ${pct}% (${done}/${total})`;
    }
    // Update voortgangsbalk
    const bar = badge.querySelector('#learning-progress-bar');
    const barFill = badge.querySelector('#learning-progress-bar-fill');
    if (bar) bar.setAttribute('aria-valuenow', String(pct));
    if (barFill) barFill.style.width = pct + '%';
    applyThemeStyles(badge);
    applyCollapsed(badge);
  }

  function recordQuizResult(id, correct) {
    if (!state.quizzes[id]) state.quizzes[id] = { correct: false };
    state.quizzes[id].correct = state.quizzes[id].correct || !!correct;
    save();
    renderBadge();
  }

  function recordTask(name) {
    if (Object.prototype.hasOwnProperty.call(state.tasks, name)) {
      state.tasks[name] = true;
      save();
      renderBadge();
    }
  }

  // confidence UI verwijderd

  function init() {
    load();
    // Eerste keer of oude opslag zonder voorkeur: op mobiel standaard ingeklapt
    maybeSetDefaultCollapsedForMobile();
    renderBadge();
    // Observeer thema-wijzigingen
    try {
      const obs = new MutationObserver(function (mutations) {
        for (const m of mutations) {
          if (m.attributeName === 'data-theme') {
            const el = document.getElementById('learning-progress-badge');
            if (el) applyThemeStyles(el);
          }
        }
      });
      obs.observe(document.documentElement, { attributes: true });
    } catch (e) {}
  }

  return { init, recordQuizResult, recordTask };
})();

function openChatGPT() {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const popupWidth = Math.min(1200, screenWidth * 0.5);
  const popupHeight = Math.min(900, screenHeight * 0.9);
  const left = screenWidth - popupWidth - 20;
  const top = 20;
  const features = `width=${popupWidth},height=${popupHeight},left=${left},top=${top},scrollbars=yes,resizable=yes,status=yes,toolbar=no,menubar=no,location=yes,noopener`;
  const win = window.open('https://chat.openai.com', 'chatgpt', features);
  if (win) {
    try {
      win.focus();
    } catch (e) {}
  }
}

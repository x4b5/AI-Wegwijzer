function openLumoPopup() {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const popupWidth = Math.min(1200, screenWidth * 0.5);
  const popupHeight = Math.min(900, screenHeight * 0.9);
  const left = screenWidth - popupWidth - 20;
  const top = 20;

  // Probeer eerst met specifieke positie
  let popup = window.open(
    'https://lumo.proton.me',
    'lumoChatbot',
    `width=${popupWidth},height=${popupHeight},left=${left},top=${top},scrollbars=yes,resizable=yes,status=yes,toolbar=no,menubar=no,location=yes`
  );

  // Als popup niet correct wordt geopend, probeer opnieuw zonder positie
  if (!popup || popup.closed || typeof popup.closed == 'undefined') {
    popup = window.open(
      'https://lumo.proton.me',
      'lumoChatbot',
      `width=${popupWidth},height=${popupHeight},scrollbars=yes,resizable=yes,status=yes,toolbar=no,menubar=no,location=yes`
    );
  }

  if (popup) {
    popup.focus();
    // Probeer de positie te verplaatsen na het openen
    try {
      popup.moveTo(left, top);
    } catch (e) {
      // Als moveTo niet werkt, probeer dan de gebruiker te informeren
      console.log('Popup geopend, maar positie kon niet worden ingesteld');
    }
  } else {
    alert(
      'Popup werd geblokkeerd. Sta popups toe voor deze website en probeer opnieuw.'
    );
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
  });

  // Toon geselecteerde feedback
  feedback.classList.add('show');
  feedback.hidden = false;
  feedback.setAttribute('aria-hidden', 'false');
  if (buttonEl) {
    buttonEl.setAttribute('aria-expanded', 'true');
  }
}

// Eenvoudige sidebar functionaliteit
function toggleSimpleSidebar() {
  const sidebar = document.getElementById('simpleSidebar');
  if (sidebar) {
    sidebar.classList.toggle('open');
  }
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
  window.location.href = '../../index.html';
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

// Sidebar animatie bij pagina laden
function animateSidebars() {
  const sidebars = document.querySelectorAll(
    '.simple-sidebar, .top-sidebar, .home-sidebar'
  );

  // Voeg een kleine vertraging toe voor een mooiere animatie
  setTimeout(() => {
    sidebars.forEach((sidebar, index) => {
      // Stagger de animaties voor een mooier effect
      setTimeout(() => {
        sidebar.classList.add('loaded');
      }, index * 200); // 200ms vertraging tussen elke sidebar
    });
  }, 300); // 300ms vertraging na pagina laden
}

// Automatische datum update
function updateLastModifiedDate() {
  const lastUpdatedElement = document.getElementById('last-updated');
  if (lastUpdatedElement) {
    lastUpdatedElement.textContent = new Date().toLocaleDateString('nl-NL');
  }
}

// Voer de animatie uit wanneer de pagina geladen is
document.addEventListener('DOMContentLoaded', function () {
  animateSidebars();
  updateLastModifiedDate();
});

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

  // Update toggle button icon
  updateThemeIcon(newTheme);
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

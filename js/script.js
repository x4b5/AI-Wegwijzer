function openLumoPopup() {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const popupWidth = Math.min(1200, screenWidth * 0.5);
    const popupHeight = Math.min(900, screenHeight * 0.9);
    const left = screenWidth - popupWidth - 20;
    const top = 20;

    const popup = window.open(
        'https://lumo.proton.me',
        'lumoChatbot',
        `width=${popupWidth},height=${popupHeight},left=${left},top=${top},scrollbars=yes,resizable=yes,status=yes,toolbar=no,menubar=no,location=yes`
    );

    if (popup) {
        popup.focus();
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
    } else if (window.external && ('AddFavorite' in window.external)) {
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
            navigator.clipboard.writeText(url).then(() => {
                console.log('URL gekopieerd naar clipboard');
            }).catch(err => {
                console.log('Kon URL niet kopiëren:', err);
            });
        }
    }
}

// Quiz functionality
function toggleAnswer(option) {
    const feedback = document.getElementById(`answer-${option}`);
    const allOptions = document.querySelectorAll('.quiz-option');
    
    // Remove all previous states
    allOptions.forEach(opt => {
        opt.classList.remove('correct', 'incorrect');
    });
    
    // Show feedback for clicked option
    if (feedback.classList.contains('show')) {
        feedback.classList.remove('show');
    } else {
        // Hide all other feedbacks first
        document.querySelectorAll('.answer-feedback').forEach(fb => {
            fb.classList.remove('show');
        });
        
        // Show clicked feedback
        feedback.classList.add('show');
        
        // Add visual feedback based on correctness
        const optionElement = feedback.parentElement;
        if (option === 'B') { // Correct answer
            optionElement.classList.add('correct');
        } else {
            optionElement.classList.add('incorrect');
        }
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
        behavior: 'smooth'
    });
}

// Naar home knop functionaliteit
function goToHome() {
    window.location.href = '../../index.html';
}

// Sidebar animatie bij pagina laden
function animateSidebars() {
    const sidebars = document.querySelectorAll('.simple-sidebar, .top-sidebar, .home-sidebar');
    
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
    const lastUpdatedElement = document.getElementById("last-updated");
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = new Date().toLocaleDateString("nl-NL");
    }
}

// Voer de animatie uit wanneer de pagina geladen is
document.addEventListener("DOMContentLoaded", function() {
    animateSidebars();
    updateLastModifiedDate();
});

// Kopieer prompt functionaliteit
function copyPrompt(button) {
    const promptBox = button.closest('.prompt-box');
    const promptContent = promptBox.querySelector('.prompt-content');
    const textToCopy = promptContent.textContent || promptContent.innerText;
    
    // Kopieer naar klembord
    navigator.clipboard.writeText(textToCopy).then(function() {
        // Toon feedback
        const originalText = button.innerHTML;
        button.innerHTML = '✅';
        button.style.background = 'var(--primary-green)';
        
        // Reset na 2 seconden naar originele donkergrijze kleur
        setTimeout(function() {
            button.innerHTML = originalText;
            button.style.background = '#6b7280';
        }, 2000);
        
    }).catch(function(err) {
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
        
        setTimeout(function() {
            button.innerHTML = originalText;
            button.style.background = '#6b7280';
        }, 2000);
    });
}


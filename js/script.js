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


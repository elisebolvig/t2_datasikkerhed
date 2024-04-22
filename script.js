
// Smooth scroll med a-link pil

document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('.smooth-scroll');

    scrollLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Start position
                const startPosition = window.pageYOffset;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1000; // Tid i millisekunder

                let start = null;
                function step(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
                    if (progress < duration) {
                        window.requestAnimationFrame(step);
                    }
                }

                window.requestAnimationFrame(step);
            }
        });
    });

    // Easing function - Cubic easing in/out
    function easeInOutCubic(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    }
});

// Branching Scenarios: Scenarie 1

const yesButton = document.getElementById('yesButton'); // Vælg knapperne fra HTML
const noButton = document.getElementById('noButton'); // Vælg knapperne fra HTML
const yesContent = document.getElementById('yesContent'); // Vælg sektionerne med indhold fra HTML
const noContent = document.getElementById('noContent'); // Vælg sektionerne med indhold fra HTML

// Handling, når man tykker "yesButton":
yesButton.addEventListener('click', function() {
    // Vis kun 'Ja'-sektionen og skjul 'Nej'-sektionen
    yesContent.classList.add('visible');
    noContent.classList.remove('visible');
});

// Handling, når man tykker "noButton":
noButton.addEventListener('click', function() {
    // Vis kun 'Nej'-sektionen og skjul 'Ja'-sektionen
    noContent.classList.add('visible');
    yesContent.classList.remove('visible');

});






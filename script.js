
// Smooth scroll

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


// Branching Scenarios 

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

const yesButtonTwo = document.getElementById('yesButtonTwo'); // Vælg knapperne fra HTML
const noButtonTwo = document.getElementById('noButtonTwo'); // Vælg knapperne fra HTML
const yesContentTwo = document.getElementById('yesContentTwo'); // Vælg sektionerne med indhold fra HTML
const noContentTwo = document.getElementById('noContentTwo'); // Vælg sektionerne med indhold fra HTML

// Handling, når man tykker "yesButtonTwo":
yesButtonTwo.addEventListener('click', function() {
    // Vis kun 'Ja'-sektionen og skjul 'Nej'-sektionen
    yesContentTwo.classList.add('visible');
    noContentTwo.classList.remove('visible');
});

// Handling, når man tykker "noButtonTwo":
noButtonTwo.addEventListener('click', function() {
    // Vis kun 'Nej'-sektionen og skjul 'Ja'-sektionen
    noContentTwo.classList.add('visible');
    yesContentTwo.classList.remove('visible');

});

const yesButtonThree = document.getElementById('yesButtonThree'); // Vælg knapperne fra HTML
const noButtonThree = document.getElementById('noButtonThree'); // Vælg knapperne fra HTML
const yesContentThree = document.getElementById('yesContentTwo'); // Vælg sektionerne med indhold fra HTML
const noContentThree = document.getElementById('noContentTwo'); // Vælg sektionerne med indhold fra HTML

// Handling, når man tykker "yesButtonThree":
yesButtonThree.addEventListener('click', function() {
    // Vis kun 'Ja'-sektionen og skjul 'Nej'-sektionen
    yesContentThree.classList.add('visible');
    noContentThree.classList.remove('visible');
});

// Handling, når man tykker "noButtonThree":
noButtonThree.addEventListener('click', function() {
    // Vis kun 'Nej'-sektionen og skjul 'Ja'-sektionen
    noContentThree.classList.add('visible');
    yesContentThree.classList.remove('visible');

});


const yesButtonFour = document.getElementById('yesButtonFour'); // Vælg knapperne fra HTML
const noButtonFour = document.getElementById('noButtonFour'); // Vælg knapperne fra HTML
const yesContentFour = document.getElementById('yesContentThree'); // Vælg sektionerne med indhold fra HTML
const noContentFour = document.getElementById('noContentThree'); // Vælg sektionerne med indhold fra HTML

// Handling, når man tykker "yesButtonFour":
yesButtonFour.addEventListener('click', function() {
    // Vis kun 'Ja'-sektionen og skjul 'Nej'-sektionen
    yesContentFour.classList.add('visible');
    noContentFour.classList.remove('visible');
});

// Handling, når man trykker på "noButtonFour":
noButtonFour.addEventListener('click', function() {
    // Vis kun 'Nej'-sektionen og skjul 'Ja'-sektionen
    noContentFour.classList.add('visible');
    yesContentFour.classList.remove('visible');
});

const yesButtonFive = document.getElementById('yesButtonFive'); // Vælg knapperne fra HTML
const noButtonFive = document.getElementById('noButtonFive'); // Vælg knapperne fra HTML
const yesContentFive = document.getElementById('yesContentThree'); // Vælg sektionerne med indhold fra HTML
const noContentFive = document.getElementById('noContentThree'); // Vælg sektionerne med indhold fra HTML

// Handling, når man tykker "yesButtonFive":
yesButtonFive.addEventListener('click', function() {
    // Vis kun 'Ja'-sektionen og skjul 'Nej'-sektionen
    yesContentFive.classList.add('visible');
    noContentFive.classList.remove('visible');
});

// Handling, når man trykker på "noButtonFive":
noButtonFive.addEventListener('click', function() {
    // Vis kun 'Nej'-sektionen og skjul 'Ja'-sektionen
    noContentFive.classList.add('visible');
    yesContentFive.classList.remove('visible');
});

const yesButtonSix = document.getElementById('yesButtonSix'); // Vælg knapperne fra HTML
const noButtonSix = document.getElementById('noButtonSix'); // Vælg knapperne fra HTML
const yesContentSix = document.getElementById('yesContentFive'); // Vælg sektionerne med indhold fra HTML
const noContentSix = document.getElementById('noContentFive'); // Vælg sektionerne med indhold fra HTML

// Handling, når man tykker "yesButtonSix":
yesButtonSix.addEventListener('click', function() {
    // Vis kun 'Ja'-sektionen og skjul 'Nej'-sektionen
    yesContentSix.classList.add('visible');
    noContentSix.classList.remove('visible');
});

// Handling, når man trykker på "noButtonSix":
noButtonFive.addEventListener('click', function() {
    // Vis kun 'Nej'-sektionen og skjul 'Ja'-sektionen
    noContentSix.classList.add('visible');
    yesContentSix.classList.remove('visible');
});

const yesButtonSeven = document.getElementById('yesButtonSeven'); // Vælg knapperne fra HTML
const noButtonSeven = document.getElementById('noButtonSeven'); // Vælg knapperne fra HTML
const yesContentSeven = document.getElementById('yesContentFive'); // Vælg sektionerne med indhold fra HTML
const noContentSeven = document.getElementById('noContentFive'); // Vælg sektionerne med indhold fra HTML

// Handling, når man tykker "yesButtonSeven":
yesButtonSeven.addEventListener('click', function() {
    // Vis kun 'Ja'-sektionen og skjul 'Nej'-sektionen
    yesContentSeven.classList.add('visible');
    noContentSeven.classList.remove('visible');
});

// Handling, når man trykker på "noButtonSeven":
noButtonSeven.addEventListener('click', function() {
    // Vis kun 'Nej'-sektionen og skjul 'Ja'-sektionen
    noContentSeven.classList.add('visible');
    yesContentSeven.classList.remove('visible');
});

const yesLastButtonOne = document.getElementById('yesLastButtonOne'); // Vælg knapperne fra HTML
const noLastButtonOne = document.getElementById('noLastButtonOne'); // Vælg knapperne fra HTML
const yesLastContentOne = document.getElementById('yesSectionEnd'); // Vælg sektionerne med indhold fra HTML
const noLastContentOne = document.getElementById('noSectionEnd'); // Vælg sektionerne med indhold fra HTML

// Handling, når man tykker "yesLastButtonOne":
yesLastButtonOne.addEventListener('click', function() {
    // Vis kun 'Ja'-sektionen og skjul 'Nej'-sektionen
    yesLastContentOne.classList.add('visible');
    noLastContentOne.classList.remove('visible');
});

// Handling, når man trykker på "noLastButtonOne":
noLastButtonOne.addEventListener('click', function() {
    // Vis kun 'Nej'-sektionen og skjul 'Ja'-sektionen
    noLastContentOne.classList.add('visible');
    yesLastContentOne.classList.remove('visible');
});

const yesLastButtonTwo = document.getElementById('yesLastButtonTwo'); // Vælg knapperne fra HTML
const noLastButtonTwo = document.getElementById('noLastButtonTwo'); // Vælg knapperne fra HTML
const yesLastContentTwo = document.getElementById('yesSectionEnd'); // Vælg sektionerne med indhold fra HTML
const noLastContentTwo = document.getElementById('noSectionEnd'); // Vælg sektionerne med indhold fra HTML

// Handling, når man tykker "yesLastButtonOne":
yesLastButtonTwo.addEventListener('click', function() {
    // Vis kun 'Ja'-sektionen og skjul 'Nej'-sektionen
    yesLastContentTwo.classList.add('visible');
    noLastContentTwo.classList.remove('visible');
});

// Handling, når man trykker på "noLastButtonOne":
noLastButtonTwo.addEventListener('click', function() {
    // Vis kun 'Nej'-sektionen og skjul 'Ja'-sektionen
    noLastContentTwo.classList.add('visible');
    yesLastContentTwo.classList.remove('visible');
});


// Pop up 
document.addEventListener('DOMContentLoaded', function() {
    const iconElement = document.getElementById('icon');
    const popupContainer = document.getElementById('popupContainer');
    const closePopupButton = document.getElementById('closePopup');

    // Viser pop-up vindue, når der klikkes på ikonet
    iconElement.addEventListener('click', function() {
        popupContainer.classList.remove('hidden');
    });

    // Lukker pop-up vindue, når der klikkes på luk-knappen
    closePopupButton.addEventListener('click', function() {
        popupContainer.classList.add('hidden');
    });

    // Eksempel på at bruge pop-up funktionen
    const welcomeMessage = "Velkommen til vores hjemmeside!";
    showPopup(welcomeMessage);

    // Viser pop-up vindue
    function showPopup(message) {
        const popupHeading = document.getElementById('popupHeading');
        popupHeading.textContent = message;
    }
});

// Pop up 1
document.addEventListener('DOMContentLoaded', function() {
    const iconElement1 = document.getElementById('icon1');
    const popupContainer1 = document.getElementById('popupContainer1');
    const closePopupButton1 = document.getElementById('closePopup1');

    // Viser pop-up vindue, når der klikkes på ikonet
    iconElement1.addEventListener('click', function() {
        popupContainer1.classList.remove('hidden');
    });

    // Lukker pop-up vindue, når der klikkes på luk-knappen
    closePopupButton1.addEventListener('click', function() {
        popupContainer1.classList.add('hidden');
    });

    // Eksempel på at bruge pop-up funktionen
    const welcomeMessage = "Velkommen til vores hjemmeside!";
    showPopup(welcomeMessage);

    // Viser pop-up vindue
    function showPopup(message) {
        const popupHeading = document.getElementById('popupHeading');
        popupHeading1.textContent = message;
    }
});


  

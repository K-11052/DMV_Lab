// ======================================
// PlaceMentor AI Splash Screen
// ======================================

// Auto Redirect After 3 Seconds

setTimeout(() => {
    window.location.href = "login.html";
}, 3000);

// Logo Click Animation

const logo = document.querySelector(".logo-circle");

logo.addEventListener("click", () => {

    logo.style.transform = "scale(1.12) rotate(15deg)";

    setTimeout(() => {

        logo.style.transform = "";

    }, 300);

});

// Feature Card Hover Effect

const features = document.querySelectorAll(".feature");

features.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// Floating Icons Animation

const icons = document.querySelectorAll(".floating");

icons.forEach((icon, index) => {

    icon.animate(
        [
            { transform: "translateY(0px)" },
            { transform: "translateY(-15px)" },
            { transform: "translateY(0px)" }
        ],
        {
            duration: 3500 + (index * 300),
            iterations: Infinity
        }
    );

});

// Loading Text Animation

const loadingText = document.querySelector(".loader p");

const messages = [
    "Preparing your AI Mentor...",
    "Analyzing Career Paths...",
    "Loading Smart Features...",
    "Almost Ready..."
];

let i = 0;

const changeText = setInterval(() => {

    i++;

    if (i < messages.length) {

        loadingText.textContent = messages[i];

    } else {

        clearInterval(changeText);

    }

}, 700);
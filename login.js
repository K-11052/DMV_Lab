// ===========================================
// PlaceMentor AI - Login Page
// ===========================================

// Password Show / Hide

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");

    }

});

// ===========================================
// Login Form
// ===========================================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const loginBtn = loginForm.querySelector("button");

    loginBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Logging In...';

    loginBtn.disabled = true;

    setTimeout(() => {

        loginBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Success';

        loginBtn.style.background = "#059669";

        setTimeout(() => {

            window.location.href = "dashboard.html";

        }, 800);

    }, 1500);

});

// ===========================================
// Google Button
// ===========================================

const googleBtn = document.querySelector(".google-btn");

googleBtn.addEventListener("click", () => {

    googleBtn.innerHTML =
    '<i class="fa-solid fa-spinner fa-spin"></i> Connecting...';

    setTimeout(() => {

        window.location.href = "dashboard.html";

    }, 1500);

});

// ===========================================
// Input Animation
// ===========================================

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.parentElement.style.transform = "scale(1.02)";

    });

    input.addEventListener("blur", () => {

        input.parentElement.style.transform = "scale(1)";

    });

});

// ===========================================
// Feature Card Hover Animation
// ===========================================

const featureCards = document.querySelectorAll(".item");

featureCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-6px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

// ===========================================
// Logo Animation
// ===========================================

const logo = document.querySelector(".logo-circle");

setInterval(() => {

    logo.animate(

        [

            { transform: "translateY(0px)" },

            { transform: "translateY(-8px)" },

            { transform: "translateY(0px)" }

        ],

        {

            duration: 2000,

            iterations: 1

        }

    );

}, 2500);

// ===========================================
// Welcome Text Animation
// ===========================================

const heading = document.querySelector(".login-card h2");

const messages = [

    "Welcome Back 👋",

    "Ready to Get Placed? 🚀",

    "Let's Build Your Career 💼"

];

let index = 0;

setInterval(() => {

    index++;

    if(index >= messages.length){

        index = 0;

    }

    heading.style.opacity = "0";

    setTimeout(() => {

        heading.textContent = messages[index];

        heading.style.opacity = "1";

    }, 300);

}, 3500);
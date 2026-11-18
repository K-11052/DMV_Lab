// ===========================================
// PlaceMentor AI - Career Report
// ===========================================

const statCards = document.querySelectorAll(".stat-card h2");
const progressBars = document.querySelectorAll(".fill");
const chartBars = document.querySelectorAll(".chart-bar");
const prediction = document.querySelector(".prediction");
const downloadBtn = document.getElementById("downloadReport");

// ===========================================
// Counter Animation
// ===========================================

const targets = [87, 92, 84, 86];

statCards.forEach((card, index) => {

    let count = 0;

    const timer = setInterval(() => {

        count++;

        card.innerHTML = count + "%";

        if (count >= targets[index]) {

            clearInterval(timer);

        }

    }, 20);

});

// ===========================================
// Progress Bar Animation
// ===========================================

progressBars.forEach(bar => {

    const finalWidth = getComputedStyle(bar).width;

    bar.style.width = "0";

    setTimeout(() => {

        bar.style.transition = "width 2s ease";

        bar.style.width = finalWidth;

    }, 400);

});

// ===========================================
// Weekly Chart Animation
// ===========================================

chartBars.forEach(bar => {

    const finalHeight = getComputedStyle(bar).height;

    bar.style.height = "0";

    setTimeout(() => {

        bar.style.transition = "height 1.5s ease";

        bar.style.height = finalHeight;

    }, 500);

});

// ===========================================
// Prediction Animation
// ===========================================

let predictionScore = 0;

const predictionTarget = 91;

const predictionTimer = setInterval(() => {

    predictionScore++;

    prediction.innerHTML = predictionScore + "%";

    if (predictionScore >= predictionTarget) {

        clearInterval(predictionTimer);

    }

}, 20);

// ===========================================
// Hero Floating Animation
// ===========================================

const heroIcon = document.querySelector(".hero-icon");

setInterval(() => {

    heroIcon.animate([

        { transform: "translateY(0px)" },

        { transform: "translateY(-10px)" },

        { transform: "translateY(0px)" }

    ], {

        duration: 2500

    });

}, 3000);

// ===========================================
// Insight Card Hover
// ===========================================

const insightCards = document.querySelectorAll(".insight-card");

insightCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ===========================================
// Download Report
// ===========================================

downloadBtn.addEventListener("click", () => {

    showToast("Career Report Downloaded Successfully.");

});

// ===========================================
// Toast Notification
// ===========================================

function showToast(message) {

    const toast = document.createElement("div");

    toast.innerHTML = message;

    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.right = "30px";
    toast.style.background = "#10B981";
    toast.style.color = "#fff";
    toast.style.padding = "15px 25px";
    toast.style.borderRadius = "12px";
    toast.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";
    toast.style.opacity = "0";
    toast.style.transition = ".4s";
    toast.style.zIndex = "9999";

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.style.opacity = "1";

    }, 100);

    setTimeout(() => {

        toast.style.opacity = "0";

        setTimeout(() => {

            toast.remove();

        }, 400);

    }, 2500);

}

// ===========================================
// Page Fade Animation
// ===========================================

document.body.style.opacity = "0";

window.onload = () => {

    document.body.style.transition = ".5s";

    document.body.style.opacity = "1";

};
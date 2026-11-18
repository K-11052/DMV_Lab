// ==========================================
// PlaceMentor AI Dashboard
// ==========================================

// Sidebar Active Menu

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});

// ==========================================
// Search Bar
// ==========================================

const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("focus", () => {

    document.querySelector(".search-box").style.boxShadow =
    "0 0 0 5px rgba(16,185,129,.15)";

});

searchInput.addEventListener("blur", () => {

    document.querySelector(".search-box").style.boxShadow =
    "0 10px 25px rgba(0,0,0,.05)";

});

// ==========================================
// Welcome Button
// ==========================================

const mentorBtn = document.querySelector(".welcome button");

mentorBtn.addEventListener("click", () => {

    window.location.href = "mentor.html";

});

// ==========================================
// Mentor Card Button
// ==========================================

const aiBtn = document.querySelector(".mentor-card button");

aiBtn.addEventListener("click", () => {

    window.location.href = "mentor.html";

});

// ==========================================
// Quick Action Cards
// ==========================================

const cards = document.querySelectorAll(".action-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ==========================================
// Placement Readiness Animation
// ==========================================

const circle = document.querySelector(".circle");

let progress = 0;

const target = 82;

const counter = setInterval(() => {

    progress++;

    circle.innerHTML = progress + "%";

    if(progress >= target){

        clearInterval(counter);

    }

},25);

// ==========================================
// Notification Bell Animation
// ==========================================

const bell = document.querySelector(".profile i");

setInterval(()=>{

    bell.animate(

        [

            {transform:"rotate(0deg)"},

            {transform:"rotate(18deg)"},

            {transform:"rotate(-18deg)"},

            {transform:"rotate(0deg)"}

        ],

        {

            duration:600

        }

    );

},5000);

// ==========================================
// Roadmap Animation
// ==========================================

const steps = document.querySelectorAll(".step");

let currentStep = 0;

setInterval(()=>{

    steps.forEach(step=>{

        if(!step.classList.contains("done")){

            step.style.boxShadow="none";

        }

    });

    if(currentStep >= steps.length){

        currentStep = 0;

    }

    if(!steps[currentStep].classList.contains("done")){

        steps[currentStep].style.boxShadow =
        "0 0 25px rgba(16,185,129,.45)";

    }

    currentStep++;

},1800);

// ==========================================
// Today's Mission Animation
// ==========================================

const missions = document.querySelectorAll(".card ul li");

missions.forEach((task,index)=>{

    task.style.opacity="0";

    task.style.transform="translateX(-20px)";

    setTimeout(()=>{

        task.style.transition=".5s";

        task.style.opacity="1";

        task.style.transform="translateX(0)";

    },index*250);

});

// ==========================================
// AI Recommendation Typing Effect
// ==========================================

const mentorText = document.querySelector(".mentor-card p");

const message =
"Your resume is strong. Focus on improving communication skills and solving medium-level DSA questions for better placement opportunities.";

mentorText.textContent="";

let index=0;

function typeEffect(){

    if(index < message.length){

        mentorText.textContent += message.charAt(index);

        index++;

        setTimeout(typeEffect,18);

    }

}

window.onload = typeEffect;

// ==========================================
// Profile Image Hover
// ==========================================

const profile = document.querySelector(".profile img");

profile.addEventListener("mouseenter",()=>{

    profile.style.transform="scale(1.08)";

    profile.style.transition=".3s";

});

profile.addEventListener("mouseleave",()=>{

    profile.style.transform="scale(1)";

});

// ==========================================
// Prepare Button
// ==========================================

const prepareBtn = document.querySelector(".card button");

prepareBtn.addEventListener("click",()=>{

    prepareBtn.innerHTML="Opening...";

    setTimeout(()=>{

        window.location.href="company.html";

    },800);

});

// ==========================================
// Smooth Page Fade
// ==========================================

document.body.style.opacity="0";

window.addEventListener("load",()=>{

    document.body.style.transition="opacity .6s";

    document.body.style.opacity="1";

});
// ===========================================
// PlaceMentor AI - Resume Studio
// ===========================================

// Upload Resume

const uploadBtn = document.getElementById("uploadBtn");
const resumeInput = document.getElementById("resumeUpload");

uploadBtn.addEventListener("click", () => {

    resumeInput.click();

});

// ===========================================
// Resume Upload
// ===========================================

resumeInput.addEventListener("change", function () {

    if (this.files.length > 0) {

        const file = this.files[0];

        uploadBtn.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Uploading...';

        setTimeout(() => {

            uploadBtn.innerHTML =
                '<i class="fa-solid fa-circle-check"></i> Resume Uploaded';

            document.querySelector(".upload-box h2").innerHTML =
                "✅ " + file.name;

            document.querySelector(".upload-box p").innerHTML =
                "AI is analyzing your resume...";

            animateScores();

            typeFeedback();

        }, 2000);

    }

});

// ===========================================
// Build Resume Button
// ===========================================

const buttons = document.querySelectorAll(".option-card button");

buttons[0].addEventListener("click", () => {

    alert("Resume Builder will open in the next module.");

});

buttons[1].addEventListener("click", () => {

    resumeInput.click();

});

// ===========================================
// Animated Scores
// ===========================================

function animateCircle(circle, target, suffix = "%") {

    let value = 0;

    const timer = setInterval(() => {

        value++;

        circle.innerHTML = value + suffix;

        if (value >= target) {

            clearInterval(timer);

        }

    }, 20);

}

function animateScores() {

    const scores = document.querySelectorAll(".score");

    animateCircle(scores[0],92,"%");

}

// ===========================================
// AI Typing Effect
// ===========================================

const feedbackText =

`Hi 👋

I carefully reviewed your resume.

Your projects are your biggest strength and show practical experience.

However, I recommend improving your professional summary and adding measurable achievements to make recruiters notice your impact instantly.

Your resume is already good, but with a few improvements it can become placement-ready.`;

function typeFeedback() {

    const paragraph = document.querySelector(".bot p");

    paragraph.innerHTML = "";

    let i = 0;

    function typing() {

        if (i < feedbackText.length) {

            paragraph.innerHTML += feedbackText.charAt(i);

            i++;

            setTimeout(typing,15);

        }

    }

    typing();

}

// ===========================================
// Improvement Cards
// ===========================================

const improveCards = document.querySelectorAll(".improve-card");

improveCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px)";

        card.style.boxShadow="0 18px 35px rgba(16,185,129,.18)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

        card.style.boxShadow="0 10px 25px rgba(0,0,0,.06)";

    });

});

// ===========================================
// Analysis Cards
// ===========================================

const analysisCards=document.querySelectorAll(".analysis-card");

analysisCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});

// ===========================================
// Ask AI
// ===========================================

const askInput=document.querySelector(".chat-input input");
const askBtn=document.querySelector(".chat-input button");

askBtn.addEventListener("click",reply);

askInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        reply();

    }

});

function reply(){

    const question=askInput.value.trim();

    if(question==="") return;

    const bot=document.querySelector(".bot p");

    bot.innerHTML=

    "<strong>You:</strong> "+question+

    "<br><br><strong>AI Mentor:</strong> Great question! Based on your resume, I recommend focusing on measurable achievements, improving your summary, and highlighting your technical skills more clearly. These changes will make your profile stronger for placements.";

    askInput.value="";

}

// ===========================================
// Drag & Drop
// ===========================================

const uploadBox=document.querySelector(".upload-box");

uploadBox.addEventListener("dragover",(e)=>{

    e.preventDefault();

    uploadBox.style.background="#ECFDF5";

});

uploadBox.addEventListener("dragleave",()=>{

    uploadBox.style.background="#fff";

});

uploadBox.addEventListener("drop",(e)=>{

    e.preventDefault();

    uploadBox.style.background="#fff";

    uploadBtn.innerHTML=
    '<i class="fa-solid fa-circle-check"></i> Resume Uploaded';

});

// ===========================================
// Smooth Fade
// ===========================================

document.body.style.opacity="0";

window.onload=()=>{

    document.body.style.transition=".5s";

    document.body.style.opacity="1";

};
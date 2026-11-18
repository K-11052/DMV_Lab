// ===========================================
// PlaceMentor AI - Mock Interview
// ===========================================

const startBtn = document.getElementById("startInterview");
const nextBtn = document.getElementById("nextBtn");
const endBtn = document.getElementById("endBtn");
const micBtn = document.getElementById("micBtn");

const questionBox = document.getElementById("question");
const timer = document.getElementById("timer");
const downloadBtn = document.getElementById("downloadBtn");

// ===========================================
// Interview Questions
// ===========================================

const questions = [

"Tell me about yourself.",

"Explain one of your projects in detail.",

"What are your strengths and weaknesses?",

"Why should we hire you?",

"Describe a challenging situation you faced.",

"What is your favorite programming language and why?",

"What are REST APIs?",

"Where do you see yourself in five years?",

"What happens when you type google.com in your browser?",

"Do you have any questions for us?"

];

let currentQuestion = 0;

// ===========================================
// Start Interview
// ===========================================

let seconds = 0;
let interviewTimer;

startBtn.addEventListener("click", () => {

    currentQuestion = 0;

    questionBox.innerHTML = "";

    typeQuestion(questions[currentQuestion]);

    startBtn.innerHTML = "Interview Started";

    startBtn.disabled = true;

    showToast("Interview Started Successfully");

    clearInterval(interviewTimer);

    interviewTimer = setInterval(() => {

        seconds++;

        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;

        timer.innerHTML =
            `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;

    },1000);

});

// ===========================================
// Next Question
// ===========================================

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if(currentQuestion >= questions.length){

        currentQuestion = 0;

    }

    questionBox.innerHTML = "";

    typeQuestion(questions[currentQuestion]);

});

// ===========================================
// Typing Effect
// ===========================================

function typeQuestion(text){

    let i = 0;

    function typing(){

        if(i < text.length){

            questionBox.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing,25);

        }

    }

    typing();

}

// ===========================================
// Mic Toggle
// ===========================================

let micOn = true;

micBtn.addEventListener("click", () => {

    micOn = !micOn;

    if(micOn){

        micBtn.innerHTML =
        '<i class="fa-solid fa-microphone"></i> Mic';

        micBtn.style.background = "#10B981";

        showToast("Microphone Enabled");

    }else{

        micBtn.innerHTML =
        '<i class="fa-solid fa-microphone-slash"></i> Mic Off';

        micBtn.style.background = "#EF4444";

        showToast("Microphone Muted");

    }

});

// ===========================================
// End Interview
// ===========================================

endBtn.addEventListener("click", () => {

    clearInterval(interviewTimer);

    startBtn.disabled = false;

    startBtn.innerHTML = "Start Interview";

    showToast("Interview Completed");

    questionBox.innerHTML =
    "🎉 Great job! Your interview has ended. Check the feedback report below.";

});

// ===========================================
// Progress Bar Animation
// ===========================================

const bars = document.querySelectorAll(".progress-fill");

bars.forEach(bar=>{

    const width = getComputedStyle(bar).width;

    bar.style.width = "0";

    setTimeout(()=>{

        bar.style.transition = "width 2s ease";

        bar.style.width = width;

    },400);

});

// ===========================================
// Hero Animation
// ===========================================

const hero = document.querySelector(".hero-icon");

setInterval(()=>{

    hero.animate([

        {transform:"translateY(0px)"},

        {transform:"translateY(-10px)"},

        {transform:"translateY(0px)"}

    ],{

        duration:2200

    });

},2500);

// ===========================================
// Download Report
// ===========================================

downloadBtn.addEventListener("click",()=>{

    showToast("Interview Report Downloaded");

});

// ===========================================
// Toast Notification
// ===========================================

function showToast(message){

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
    toast.style.zIndex = "9999";
    toast.style.opacity = "0";
    toast.style.transition = ".4s";

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.style.opacity = "1";

    },100);

    setTimeout(()=>{

        toast.style.opacity = "0";

        setTimeout(()=>{

            toast.remove();

        },400);

    },2500);

}

// ===========================================
// Fade Effect
// ===========================================

document.body.style.opacity = "0";

window.onload = () => {

    document.body.style.transition = ".5s";

    document.body.style.opacity = "1";

};
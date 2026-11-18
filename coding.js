// ===========================================
// PlaceMentor AI - Coding Coach
// ===========================================

// Daily Mission Button

const missionBtn = document.getElementById("startMission");

missionBtn.addEventListener("click", () => {

    missionBtn.innerHTML =
    '<i class="fa-solid fa-spinner fa-spin"></i> Starting...';

    setTimeout(() => {

        missionBtn.innerHTML = "✅ Mission Started";

        showToast("Today's coding mission has started!");

    },1200);

});

// ===========================================
// Practice Button
// ===========================================

const practiceBtn = document.getElementById("practiceBtn");

practiceBtn.addEventListener("click",()=>{

    showToast("Loading AI Practice Session...");

});

// ===========================================
// Solve Buttons
// ===========================================

const solveBtns=document.querySelectorAll(".problem-card button");

solveBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{

        const title=btn.parentElement.querySelector("h3").innerText;

        btn.innerHTML="Solved ✔";

        btn.style.background="#059669";

        updateSolved();

        showToast(title+" added to your solved list.");

    });

});

// ===========================================
// Update Solved Counter
// ===========================================

const solvedCard=document.querySelector(".stat-card h2");

let solved=124;

function updateSolved(){

    solved++;

    solvedCard.innerHTML=solved;

}

// ===========================================
// Progress Bar Animation
// ===========================================

const fills=document.querySelectorAll(".fill");

fills.forEach(fill=>{

    const finalWidth=fill.style.width || getComputedStyle(fill).width;

    fill.style.width="0";

    setTimeout(()=>{

        fill.style.transition="width 2s ease";

        fill.style.width=finalWidth;

    },300);

});

// ===========================================
// Hero Animation
// ===========================================

const heroIcon=document.querySelector(".hero-icon");

setInterval(()=>{

    heroIcon.animate([

        {transform:"translateY(0px)"},

        {transform:"translateY(-10px)"},

        {transform:"translateY(0px)"}

    ],{

        duration:2500

    });

},2800);

// ===========================================
// Card Hover Animation
// ===========================================

const cards=document.querySelectorAll(".problem-card,.stat-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

// ===========================================
// Toast Notification
// ===========================================

function showToast(message){

    let toast=document.createElement("div");

    toast.className="toast";

    toast.innerHTML=message;

    document.body.appendChild(toast);

    toast.style.position="fixed";
    toast.style.bottom="30px";
    toast.style.right="30px";
    toast.style.background="#10B981";
    toast.style.color="#fff";
    toast.style.padding="15px 25px";
    toast.style.borderRadius="12px";
    toast.style.boxShadow="0 10px 30px rgba(0,0,0,.2)";
    toast.style.zIndex="9999";
    toast.style.opacity="0";
    toast.style.transition=".4s";

    setTimeout(()=>{

        toast.style.opacity="1";

    },100);

    setTimeout(()=>{

        toast.style.opacity="0";

        setTimeout(()=>{

            toast.remove();

        },400);

    },2500);

}

// ===========================================
// Page Fade
// ===========================================

document.body.style.opacity="0";

window.onload=()=>{

    document.body.style.transition="opacity .5s";

    document.body.style.opacity="1";

};
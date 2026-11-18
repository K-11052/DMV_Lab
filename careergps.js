// ===========================================
// PlaceMentor AI - Career GPS
// ===========================================

const roleSelect = document.querySelectorAll("select")[0];
const companySelect = document.querySelectorAll("select")[1];
const levelSelect = document.querySelectorAll("select")[2];

const generateBtn = document.getElementById("generateRoadmap");

const aiText = document.querySelector(".ai-card p");
const weeklyGoals = document.querySelector(".progress-card ul");
const skillContainer = document.querySelector(".skills");

// ===========================================
// Career Data
// ===========================================

const roadmapData = {

    "Frontend Developer":{

        skills:["HTML","CSS","JavaScript","React","Git","REST API","Redux","Firebase"],

        goals:[
            "✔ Complete HTML & CSS",
            "✔ Build 3 Responsive Projects",
            "✔ Learn React",
            "✔ Deploy Projects",
            "✔ Practice JavaScript Daily"
        ],

        advice:"Focus on React, JavaScript, API integration and portfolio projects. Build responsive websites and deploy them online."

    },

    "Full Stack Developer":{

        skills:["HTML","CSS","JavaScript","React","Node.js","Express","MongoDB","Git"],

        goals:[
            "✔ Learn MERN Stack",
            "✔ Build Full Stack Project",
            "✔ Authentication",
            "✔ REST APIs",
            "✔ Database Design"
        ],

        advice:"Master both frontend and backend. Companies love candidates who can build complete applications."

    },

    "Software Engineer":{

        skills:["Java","DSA","DBMS","OS","Networking","Git","SQL","OOP"],

        goals:[
            "✔ Solve 150 DSA Questions",
            "✔ Revise Core CS",
            "✔ Mock Interviews",
            "✔ Build Projects",
            "✔ Resume Improvement"
        ],

        advice:"Your main focus should be DSA, Core Subjects and Interview Practice."

    },

    "AI Engineer":{

        skills:["Python","Machine Learning","TensorFlow","OpenCV","Deep Learning","SQL","Git","Numpy"],

        goals:[
            "✔ Python Revision",
            "✔ ML Algorithms",
            "✔ Build AI Projects",
            "✔ Deep Learning",
            "✔ Kaggle Practice"
        ],

        advice:"Strong Python fundamentals and practical AI projects will make your profile stand out."

    },

    "Backend Developer":{

        skills:["Node.js","Express","MongoDB","SQL","Docker","REST API","Git","JWT"],

        goals:[
            "✔ Learn APIs",
            "✔ Authentication",
            "✔ Database",
            "✔ Docker Basics",
            "✔ Backend Projects"
        ],

        advice:"Backend interviews focus heavily on APIs, databases and system design basics."

    }

};

// ===========================================
// Generate Roadmap
// ===========================================

generateBtn.addEventListener("click",()=>{

    const role = roleSelect.value;

    const company = companySelect.value;

    const level = levelSelect.value;

    const data = roadmapData[role];

    // Skills

    skillContainer.innerHTML="";

    data.skills.forEach(skill=>{

        const span=document.createElement("span");

        span.innerText=skill;

        skillContainer.appendChild(span);

    });

    // Weekly Goals

    weeklyGoals.innerHTML="";

    data.goals.forEach(goal=>{

        const li=document.createElement("li");

        li.innerText=goal;

        weeklyGoals.appendChild(li);

    });

    // AI Recommendation

    aiText.innerHTML=

    `🎯 <b>${role}</b><br><br>

    Dream Company : <b>${company}</b><br>

    Current Level : <b>${level}</b><br><br>

    ${data.advice}

    <br><br>

    Stay consistent for the next few weeks and you'll significantly improve your chances of getting shortlisted.`;

    // Button Animation

    generateBtn.innerHTML="✔ Roadmap Generated";

    generateBtn.style.background="#059669";

    setTimeout(()=>{

        generateBtn.innerHTML="Generate";

        generateBtn.style.background="#10B981";

    },2000);

});

// ===========================================
// Hero Icon Animation
// ===========================================

const heroIcon=document.querySelector(".hero-icon");

setInterval(()=>{

    heroIcon.animate(

        [

            {transform:"translateY(0px)"},

            {transform:"translateY(-10px)"},

            {transform:"translateY(0px)"}

        ],

        {

            duration:2200

        }

    );

},2500);

// ===========================================
// Timeline Animation
// ===========================================

const steps=document.querySelectorAll(".step");

let active=1;

setInterval(()=>{

    steps.forEach(step=>{

        if(!step.classList.contains("completed")){

            step.classList.remove("active");

        }

    });

    if(active>=steps.length){

        active=1;

    }

    steps[active].classList.add("active");

    active++;

},2500);

// ===========================================
// Skills Hover
// ===========================================

document.addEventListener("mouseover",(e)=>{

    if(e.target.matches(".skills span")){

        e.target.style.transform="scale(1.08)";

    }

});

document.addEventListener("mouseout",(e)=>{

    if(e.target.matches(".skills span")){

        e.target.style.transform="scale(1)";

    }

});

// ===========================================
// AI Mission Button
// ===========================================

const missionBtn=document.querySelector(".ai-card button");

missionBtn.addEventListener("click",()=>{

    missionBtn.innerHTML="🚀 Mission Started";

    setTimeout(()=>{

        missionBtn.innerHTML="Start Today's Mission";

    },2000);

});

// ===========================================
// Fade In
// ===========================================

document.body.style.opacity="0";

window.onload=()=>{

    document.body.style.transition=".5s";

    document.body.style.opacity="1";

};
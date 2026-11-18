// ===========================================
// PlaceMentor AI - Company Preparation
// ===========================================

const companySelect = document.getElementById("companySelect");
const roleSelect = document.getElementById("roleSelect");
const generateBtn = document.getElementById("generateBtn");

const companyName = document.getElementById("companyName");
const companyDesc = document.getElementById("companyDesc");

const planList = document.getElementById("planList");
const questionList = document.getElementById("questionList");

const recommendation = document.getElementById("recommendation");
const startPrep = document.getElementById("startPrep");

const scoreCircle = document.querySelector(".score-circle");

// ===========================================
// Company Data
// ===========================================

const companyData = {

Google:{

description:"Google focuses on Data Structures & Algorithms, System Design, Problem Solving and strong communication. Build impactful projects and master DSA.",

plan:[
"✔ Arrays & Strings",
"✔ Trees & Graphs",
"✔ Dynamic Programming",
"✔ System Design Basics",
"✔ Mock Interviews"
],

questions:[
"Tell me about yourself.",
"Explain your best project.",
"What are Closures?",
"Reverse a Linked List.",
"Difference between BFS & DFS.",
"What is Virtual DOM?"
],

recommendation:"Practice medium and hard DSA questions daily. Focus on scalable projects and clear communication."

},

Microsoft:{

description:"Microsoft values problem solving, clean coding practices, OOP concepts and collaborative thinking.",

plan:[
"✔ OOP Concepts",
"✔ DSA Revision",
"✔ SQL Practice",
"✔ Azure Basics",
"✔ Mock Interview"
],

questions:[
"Explain OOP.",
"Difference between Stack and Queue.",
"What is SQL JOIN?",
"Explain your internship.",
"Binary Search Algorithm."
],

recommendation:"Revise Core CS subjects and practice coding on LeetCode consistently."

},

Amazon:{

description:"Amazon emphasizes Leadership Principles, DSA, scalable systems and customer-centric thinking.",

plan:[
"✔ Leadership Principles",
"✔ Arrays & HashMaps",
"✔ Trees",
"✔ REST APIs",
"✔ Behavioural Interview"
],

questions:[
"Tell me about a challenge.",
"What are Amazon Leadership Principles?",
"Explain HashMap.",
"Longest Substring Problem.",
"Design an API."
],

recommendation:"Prepare STAR answers along with coding practice."

},

TCS:{

description:"TCS recruitment focuses on Aptitude, Coding, Communication and Core CS Fundamentals.",

plan:[
"✔ Aptitude Practice",
"✔ Java Basics",
"✔ DBMS",
"✔ OS & Networking",
"✔ HR Interview"
],

questions:[
"Tell me about yourself.",
"Difference between TCP & UDP.",
"What is DBMS?",
"Explain Java OOP.",
"Why TCS?"
],

recommendation:"Improve communication, aptitude speed and revise Java fundamentals."

},

Infosys:{

description:"Infosys tests aptitude, problem solving, SQL, Java and communication skills.",

plan:[
"✔ Aptitude",
"✔ Java",
"✔ SQL",
"✔ HTML CSS JS",
"✔ Mock HR"
],

questions:[
"Explain Normalization.",
"What is Java?",
"Difference between GET and POST.",
"Tell me about your project."
],

recommendation:"Balance aptitude practice with technical interview preparation."

},

Wipro:{

description:"Wipro focuses on coding, aptitude and HR communication.",

plan:[
"✔ Aptitude",
"✔ JavaScript",
"✔ DSA Basics",
"✔ Resume",
"✔ HR Round"
],

questions:[
"Introduce yourself.",
"What are Promises?",
"What is JavaScript Hoisting?",
"Difference between let and var?"
],

recommendation:"Focus on JavaScript fundamentals and communication."

},

Accenture:{

description:"Accenture evaluates coding, communication, logical reasoning and project knowledge.",

plan:[
"✔ Logical Reasoning",
"✔ SQL",
"✔ JavaScript",
"✔ Projects",
"✔ Communication"
],

questions:[
"Explain your project.",
"What is API?",
"Difference between HTTP & HTTPS?",
"What is DOM?"
],

recommendation:"Revise web development concepts thoroughly."

},

Deloitte:{

description:"Deloitte values problem solving, consulting mindset and strong communication.",

plan:[
"✔ SQL",
"✔ Excel Basics",
"✔ Case Studies",
"✔ Communication",
"✔ Mock Interview"
],

questions:[
"Why Deloitte?",
"Explain your strengths.",
"What is SQL?",
"Tell us about teamwork."
],

recommendation:"Focus on communication and business understanding."

}

};

// ===========================================
// Generate Plan
// ===========================================

generateBtn.addEventListener("click",()=>{

const company = companySelect.value;

const data = companyData[company];

companyName.innerHTML = company;

companyDesc.innerHTML = data.description;

// Plan

planList.innerHTML="";

data.plan.forEach(item=>{

const li=document.createElement("li");

li.innerHTML=item;

planList.appendChild(li);

});

// Questions

questionList.innerHTML="";

data.questions.forEach(item=>{

const li=document.createElement("li");

li.innerHTML=item;

questionList.appendChild(li);

});

// Recommendation

recommendation.innerHTML=

`For the role of <b>${roleSelect.value}</b> at <b>${company}</b>, ${data.recommendation}`;

// Button Animation

generateBtn.innerHTML="✔ Generated";

generateBtn.style.background="#059669";

showToast(company+" AI Preparation Plan Generated");

setTimeout(()=>{

generateBtn.innerHTML="Generate AI Plan";

generateBtn.style.background="#10B981";

},2000);

animateScore();

});

// ===========================================
// Score Animation
// ===========================================

function animateScore(){

let score=0;

const target=84;

const timer=setInterval(()=>{

score++;

scoreCircle.innerHTML=score+"%";

if(score>=target){

clearInterval(timer);

}

},20);

}

// ===========================================
// Start Preparation
// ===========================================

startPrep.addEventListener("click",()=>{

showToast("Your preparation plan has started.");

startPrep.innerHTML="🚀 Preparation Started";

setTimeout(()=>{

startPrep.innerHTML="Start Preparation";

},2500);

});

// ===========================================
// Hero Animation
// ===========================================

const hero=document.querySelector(".hero-icon");

setInterval(()=>{

hero.animate([

{transform:"translateY(0px)"},

{transform:"translateY(-10px)"},

{transform:"translateY(0px)"}

],{

duration:2500

});

},3000);

// ===========================================
// Toast
// ===========================================

function showToast(message){

const toast=document.createElement("div");

toast.innerHTML=message;

toast.style.position="fixed";
toast.style.bottom="30px";
toast.style.right="30px";
toast.style.background="#10B981";
toast.style.color="#fff";
toast.style.padding="15px 25px";
toast.style.borderRadius="12px";
toast.style.boxShadow="0 10px 30px rgba(0,0,0,.2)";
toast.style.opacity="0";
toast.style.transition=".4s";
toast.style.zIndex="9999";

document.body.appendChild(toast);

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
// Fade Animation
// ===========================================

document.body.style.opacity="0";

window.onload=()=>{

document.body.style.transition=".5s";

document.body.style.opacity="1";

animateScore();

};
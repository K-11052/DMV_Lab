// =======================================
// PlaceMentor AI Mentor
// =======================================

const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const chatBox = document.getElementById("chatBox");

// =======================================
// AI Replies
// =======================================

function getAIResponse(message){

    message = message.toLowerCase();

    if(message.includes("resume")){

        return "Your resume should focus on achievements instead of responsibilities. Add action verbs, measurable impact, strong projects, and keep it to one page if you're a fresher.";

    }

    else if(message.includes("tcs")){

        return "For TCS, focus on Aptitude, Basic Coding, OOPs, DBMS, OS, Networking, and HR Interview preparation. Practice communication along with coding.";

    }

    else if(message.includes("interview")){

        return "Practice introducing yourself confidently, explain every project clearly, prepare STAR-based answers, and maintain eye contact while speaking.";

    }

    else if(message.includes("dsa")){

        return "Start with Arrays, Strings, Linked Lists, Stack, Queue, Trees, Graphs and Dynamic Programming. Solve 2-3 problems daily.";

    }

    else if(message.includes("project")){

        return "Build real-world projects with authentication, APIs, databases and deployment. Quality matters more than quantity.";

    }

    else if(message.includes("skills")){

        return "Frontend, React, JavaScript, Git, REST APIs, SQL, Node.js, Communication Skills and Problem Solving are highly recommended.";

    }

    else if(message.includes("hello") || message.includes("hi")){

        return "Hello 👋 I'm PlaceMentor AI. Ask me anything related to placements, resumes, coding, interviews or career guidance.";

    }

    else{

        return "That's a great question. Based on your current placement preparation, I'd recommend focusing on strong projects, communication skills, DSA practice, resume improvements and mock interviews. Consistency is the key to getting placed.";

    }

}

// =======================================
// User Message
// =======================================

function addUserMessage(message){

    const userMessage = document.createElement("div");

    userMessage.className = "message";

    userMessage.style.justifyContent = "flex-end";

    userMessage.innerHTML = `

        <div class="text" style="
        background:#10B981;
        color:white;
        border-radius:18px;
        padding:18px;
        max-width:70%;
        ">
            ${message}
        </div>

    `;

    chatBox.appendChild(userMessage);

    chatBox.scrollTop = chatBox.scrollHeight;

}

// =======================================
// AI Message
// =======================================

function addAIMessage(message){

    const aiMessage = document.createElement("div");

    aiMessage.className = "message ai";

    aiMessage.innerHTML = `

        <div class="icon">

            <i class="fa-solid fa-robot"></i>

        </div>

        <div class="text typing"></div>

    `;

    chatBox.appendChild(aiMessage);

    const text = aiMessage.querySelector(".typing");

    let index = 0;

    function type(){

        if(index < message.length){

            text.innerHTML += message.charAt(index);

            index++;

            chatBox.scrollTop = chatBox.scrollHeight;

            setTimeout(type,18);

        }

    }

    type();

}

// =======================================
// Send Message
// =======================================

function sendMessage(){

    const message = input.value.trim();

    if(message==="") return;

    addUserMessage(message);

    input.value="";

    setTimeout(()=>{

        const reply = getAIResponse(message);

        addAIMessage(reply);

    },700);

}

// =======================================
// Events
// =======================================

sendBtn.addEventListener("click",sendMessage);

input.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});

// =======================================
// Quick Question Cards
// =======================================

const quickCards = document.querySelectorAll(".quick-card");

quickCards.forEach(card=>{

    card.addEventListener("click",()=>{

        input.value = card.innerText;

        sendMessage();

    });

});

// =======================================
// Suggestion Buttons
// =======================================

const suggestionButtons = document.querySelectorAll(".suggestions button");

suggestionButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        input.value = button.innerText;

        sendMessage();

    });

});

// =======================================
// Insight Cards Hover
// =======================================

const insightCards = document.querySelectorAll(".insight-card");

insightCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

// =======================================
// Robot Animation
// =======================================

const robot = document.querySelector(".robot");

setInterval(()=>{

    robot.animate([

        {transform:"translateY(0px)"},

        {transform:"translateY(-10px)"},

        {transform:"translateY(0px)"}

    ],{

        duration:2200

    });

},2500);

// =======================================
// Career Score Counter
// =======================================

const score = document.querySelector(".insight-card h2");

let value = 0;

const counter = setInterval(()=>{

    value++;

    score.innerHTML = value + "%";

    if(value>=82){

        clearInterval(counter);

    }

},25);

// =======================================
// Fade Effect
// =======================================

document.body.style.opacity="0";

window.onload=()=>{

    document.body.style.transition=".5s";

    document.body.style.opacity="1";

};
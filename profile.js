// ===========================================
// PlaceMentor AI - Profile
// ===========================================

const statCards = document.querySelectorAll(".stat-card h2");
const editBtn = document.getElementById("editProfile");
const badges = document.querySelectorAll(".badges span");
const skills = document.querySelectorAll(".skills span");

// ===========================================
// Counter Animation
// ===========================================

const targets = [87, 8, 14, 124];

statCards.forEach((card, index) => {

    let count = 0;

    const target = targets[index];

    const speed = target > 100 ? 10 : 30;

    const timer = setInterval(() => {

        count++;

        if(index === 0){

            card.innerHTML = count + "%";

        }else{

            card.innerHTML = count;

        }

        if(count >= target){

            clearInterval(timer);

        }

    },speed);

});

// ===========================================
// Edit Profile Button
// ===========================================

editBtn.addEventListener("click",()=>{

    showToast("Profile editing feature coming soon.");

});

// ===========================================
// Badge Animation
// ===========================================

badges.forEach((badge,index)=>{

    badge.style.opacity="0";
    badge.style.transform="translateX(-20px)";

    setTimeout(()=>{

        badge.style.transition=".5s";

        badge.style.opacity="1";

        badge.style.transform="translateX(0px)";

    },index*250);

});

// ===========================================
// Skill Hover
// ===========================================

skills.forEach(skill=>{

    skill.addEventListener("mouseenter",()=>{

        skill.style.transform="scale(1.08)";

    });

    skill.addEventListener("mouseleave",()=>{

        skill.style.transform="scale(1)";

    });

});

// ===========================================
// Floating Profile Image
// ===========================================

const profileImage=document.querySelector(".profile-left img");

setInterval(()=>{

    profileImage.animate([

        {transform:"translateY(0px)"},

        {transform:"translateY(-8px)"},

        {transform:"translateY(0px)"}

    ],{

        duration:2500

    });

},2800);

// ===========================================
// Card Hover Effect
// ===========================================

const cards=document.querySelectorAll(".stat-card,.skill-card");

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

};
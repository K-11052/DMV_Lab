// ===========================================
// PlaceMentor AI - Settings
// ===========================================

const darkMode = document.getElementById("darkMode");
const saveBtn = document.getElementById("saveBtn");
const logoutBtn = document.getElementById("logoutBtn");

const emailNotify = document.getElementById("emailNotify");
const placementNotify = document.getElementById("placementNotify");
const interviewNotify = document.getElementById("interviewNotify");

// ===========================================
// Dark Mode
// ===========================================

darkMode.addEventListener("change",()=>{

    document.body.classList.toggle("dark");

    if(darkMode.checked){

        showToast("Dark Mode Enabled");

    }

    else{

        showToast("Light Mode Enabled");

    }

});

// ===========================================
// Save Settings
// ===========================================

saveBtn.addEventListener("click",()=>{

    saveBtn.innerHTML=

    '<i class="fa-solid fa-spinner fa-spin"></i> Saving';

    setTimeout(()=>{

        saveBtn.innerHTML=

        '<i class="fa-solid fa-check"></i> Saved';

        showToast("Settings Saved Successfully");

    },1500);

    setTimeout(()=>{

        saveBtn.innerHTML=

        '<i class="fa-solid fa-floppy-disk"></i> Save Changes';

    },3000);

});

// ===========================================
// Logout
// ===========================================

logoutBtn.addEventListener("click",()=>{

    showToast("Logging Out...");

    setTimeout(()=>{

        window.location.href="login.html";

    },1500);

});

// ===========================================
// Notification Toggles
// ===========================================

emailNotify.addEventListener("change",()=>{

    if(emailNotify.checked){

        showToast("Email Notifications Enabled");

    }

    else{

        showToast("Email Notifications Disabled");

    }

});

placementNotify.addEventListener("change",()=>{

    if(placementNotify.checked){

        showToast("Placement Alerts Enabled");

    }

    else{

        showToast("Placement Alerts Disabled");

    }

});

interviewNotify.addEventListener("change",()=>{

    if(interviewNotify.checked){

        showToast("Interview Reminders Enabled");

    }

    else{

        showToast("Interview Reminders Disabled");

    }

});

// ===========================================
// Card Hover Animation
// ===========================================

const cards=document.querySelectorAll(".setting-card");

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
// Page Fade Animation
// ===========================================

document.body.style.opacity="0";

window.onload=()=>{

    document.body.style.transition=".5s";

    document.body.style.opacity="1";

};
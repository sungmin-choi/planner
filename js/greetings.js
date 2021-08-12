const loginForm = document.getElementById("loginForm");
const loginName=document.getElementById("inputName");
const greeting=document.getElementById("greeting");

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY="usename";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginName.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function paintGreetings(username){
    let date = new Date();
    let hours = date.getHours();
    if(hours>=18 && hours<22){
        greeting.innerText = `good evening,${username}!`;
    }else if((hours>=22 && hours<24)||(hours>0 && hours<6)){
        greeting.innerText = `good night,${username}!`;
    }else if(hours>=6 && hours<12){
        greeting.innerText = `good morning,${username}!`;
    }else{
        greeting.innerText = `good afternoon,${username}!`;
    }
    
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
} else {
    loginForm.addEventListener("submit",onLoginSubmit);
}



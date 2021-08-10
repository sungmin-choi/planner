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
    greeting.innerText = `안녕,${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
} else {
    loginForm.addEventListener("submit",onLoginSubmit);
}



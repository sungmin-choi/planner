const clock = document.getElementById("clock");

function showNowTime(){
    let date = new Date();
    let hours = String(date.getHours()).padStart(2,"0");
    let minutes = String(date.getMinutes()).padStart(2,"0");
    
    clock.innerText=`${hours}:${minutes}`;
}
setInterval(showNowTime,1000);
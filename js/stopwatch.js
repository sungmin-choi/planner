const stopWatch=document.getElementsByClassName("stopwatch");
const startBtn=document.getElementById("stopwatch_start");
const watchTime=document.getElementById("stopwatch_time");

function handleNowTime(){
    let date=new Date();
    let nowTime = date.getHours();
    console.log(nowTime);
}


startBtn.addEventListener("click",handleNowTime)
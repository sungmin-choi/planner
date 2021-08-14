const stopWatch=document.getElementsByClassName("stopwatch");
const startBtn=document.getElementById("stopwatch_start");
const stopBtn=document.getElementById("stopwatch_stop");
const watchTime=document.getElementById("stopwatch_hours_min");
const secondsTime=document.getElementById("stopwatch_seconds");
let startTime=0;
let timerStart;
let stopTime=[0,0,0];
function handleNowTime(){
    startTime=new Date().getTime();
    timerStart=setInterval(()=>{
        let nowTime=new Date().getTime();
        let newTime=new Date(nowTime-startTime);
        let hours = newTime.getHours();
        let min = newTime.getMinutes()+stopTime[1];
        let seconds=newTime.getSeconds()+stopTime[2];
        if(seconds>=60){
            seconds=seconds-60;
            stopTime[1]++;
        }
        if(hours>=9 && hours<=23){
            hours-=9;
        }else if(hours<9){
            hours+=15;
        }
        hours = String(hours).padStart(2,"0");
        min = String(min).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
       
        secondsTime.innerText=`:${seconds}`;
        watchTime.innerText=`${hours}:${min}`;

    }
        ,1000)
    startBtn.classList.add("hidden");
    stopBtn.classList.remove("hidden");
}

function handleStopBtn(){
    if(timerStart){
        clearInterval(timerStart);
    }
    let stopHaM=watchTime.innerText.split(":");
    let stopS=secondsTime.innerText.replace(":","");
    stopTime=[0,+stopHaM[1],+stopS];
    console.log(stopTime);
    startBtn.classList.remove("hidden");
    stopBtn.classList.add("hidden");
}

startBtn.addEventListener("click",handleNowTime);
stopBtn.addEventListener("click",handleStopBtn);


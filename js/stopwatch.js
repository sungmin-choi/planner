const stopWatch=document.getElementById("stopwatch");
const dragBox=document.getElementById("stopwatch_dragbox");
const startBtn=document.getElementById("stopwatch_start");
const stopBtn=document.getElementById("stopwatch_stop");
const initialBtn=document.getElementById("stopwatch_initial");
const watchTime=document.getElementById("stopwatch_hours_min");
const secondsTime=document.getElementById("stopwatch_seconds");
let timeStart;
let tempTime;
function handleNowTime(){
    let startTime=new Date().getTime();
    initialBtn.classList.add("hidden");
    startBtn.classList.add("hidden");
    stopBtn.classList.remove("hidden");
    let nowStopTime_hm = watchTime.innerText.split(":");
    let nowHours=+nowStopTime_hm[0];
    let nowMin=+nowStopTime_hm[1];
    let nowSeconds=+secondsTime.innerText.replace(":","");
    nowHours=nowHours*3600;
    nowMin=nowMin*60;
    tempTime=nowHours+nowMin+nowSeconds;
    timeStart=setInterval(()=>{
        let nowTime=new Date().getTime();
        let time=parseInt((nowTime-startTime)/1000);
        time=time+tempTime;
        let hours=parseInt(time/3600);
        let min=parseInt((time-hours*3600)/60);
        let seconds = parseInt(time-min*60);
        hours=String(hours).padStart(2,"0");
        min=String(min).padStart(2,"0");
        seconds=String(seconds).padStart(2,"0");
        watchTime.innerText=`${hours}:${min}`;
        secondsTime.innerText=`:${seconds}`;
    },1000);

    

}

function handleStopBtn(){
    startBtn.classList.remove("hidden");
    startBtn.innerText="계속";
    stopBtn.classList.add("hidden");
    initialBtn.classList.remove("hidden");

    clearInterval(timeStart);

}

function handleInitial(){
    watchTime.innerText=`00:00`;
    secondsTime.innerText=`:00`;
    startBtn.innerText="시작";
    initialBtn.classList.add("hidden");


}
function dragElement(element){
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if(dragBox){
        dragBox.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e){
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmousemove=elementDrag
        document.onmouseup = closeDragElement;
        

    }
    function elementDrag(e){
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px"; 
    }
    function closeDragElement(){
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

dragElement(stopWatch);
startBtn.addEventListener("click",handleNowTime);
stopBtn.addEventListener("click",handleStopBtn);
initialBtn.addEventListener("click",handleInitial);

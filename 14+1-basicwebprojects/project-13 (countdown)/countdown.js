const dayCountdown=document.querySelector("#day-countdown")
const hourCountdown=document.querySelector("#hour-countdown")
const minuteCountdown=document.querySelector("#minute-countdown")
const secCountdown=document.querySelector("#sec-countdown")
const dayTimer=document.querySelector("#day-timer")
const HourTimer=document.querySelector("#hour-timer")
const minuteTimer=document.querySelector("#minute-timer")
const secTimer=document.querySelector("#sec-timer")

const timeChecker=setInterval(function(){
    var dest=new Date("July 28, 2023 23:30:00")
    var now=new Date().getTime();
    var diff= dest-now;
    dayTimer.innerText=parseInt(`${diff/(1000*60*60*24)}`);
    HourTimer.innerText=parseInt(`${(diff/(1000*60*60))%24}`);
    minuteTimer.innerText=parseInt(`${(diff/(1000*60))%60}`);
    secTimer.innerText=parseInt(`${((diff/1000)%60)}`);
}, 1000)

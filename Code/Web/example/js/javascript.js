"use strict";

const colck = document.querySelector(".clock");
const mainClock = document.querySelector(".main_clock");

function realTime(num) {
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    colck.innerHTML = `${hour}:${minutes}`;
}
function init() {
    setInterval(realTime, 1000);
}
init();


    
    
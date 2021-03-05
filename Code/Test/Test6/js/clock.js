"use strict";

class Clock {
    constructor() {
        this.clock1 = document.querySelector(".");
        this.clock2 = document.querySelector(".");
        this.clock3 = document.querySelector(".");
        
        setInterval(() => {
            const date = new Date();
            const hh = date.getHours();
            const mm = date.getMinutes();
            // const ss = date.getSeconds();
            const today = date.getDate();
            const month = date.getMonth() + 1;
            const day = date.getDay() - 1;
 
            const days = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];
            
            this..innerHTML = `${hh > 12 ? hh - 12 : hh}:${mm < 10 ? "0" + mm : mm}`;
            this..innerHTML = `${hh > 12 ? hh - 12 : (hh < 10 ? "0" + hh : hh)}<br>${mm < 10 ? "0" + mm : mm}`;
            this..innerHTML = `${month}월 ${today}일 ${days[day]}`;

        }, 1000);
    }
}

const clock = new Clock(); 
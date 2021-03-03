"use strict";

class Clock {
    constructor() {
        this.clock1 = document.querySelector(".clock1");
        this.clock2 = document.querySelector(".clock2");
        this.clock3 = document.querySelector(".clock3");
        
        setInterval(() => {
            const date = new Date();
            const hh = date.getHours();
            const mm = date.getMinutes();
            const ss = date.getSeconds();
            const month = date.getMonth() + 1;
            const today = date.getDate();
            const day = date.getDay() - 1;
 
            const days = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];

            this.clock1.innerHTML = `${hh < 10 ? "0" + hh : hh > 12 ? hh - 12 : hh}:${mm < 10 ? "0" + mm : mm}`;
            this.clock2.innerHTML = `${hh < 10 ? "0" + hh : hh > 12 ? hh - 12 : hh}<br>${mm < 10 ? "0" + mm : mm}`;
            this.clock3.innerHTML = `${month}월 ${today}일 ${days[day]}`;

        }, 1000);
    }
}

const clock = new Clock(); 
"use strict";

class Clock {
    constructor() {
        this.date = new Date();
        const month = this.date.getMonth();
        const days = this.date.getDate();
        const day = this.date.getDay();
        const hours = this.date.getHours();
        const minutes = this.date.getMinutes();
        this.clock1 = document.querySelector(".clock1");
        this.clock2 = document.querySelector(".clock2");

        this.clock1.innerHTML = `${hours < 10 ? "0" + hours : hours }:${minutes < 10 ? "0" + minutes : minutes }`;
        this.clock2.innerHTML = `${hours < 10 ? "0" + hours : hours }<br>${minutes < 10 ? "0" + minutes : minutes }`;

        if(hours > 12) {
            hours = "12" - hours;
            this.clock1.innerHTML = `${hours < 10 ? "0" + hours : hours }:${minutes < 10 ? "0" + minutes : minutes }`;
        }
    }
}

const clock = new Clock();
 
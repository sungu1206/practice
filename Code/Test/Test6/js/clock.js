"use strict";

class Clock {
    constructor() {
        this.date = new Date();
        this.clock1 = document.querySelector(".clock1");
        this.clock2 = document.querySelector(".clock2");
        this.clock3 = document.querySelector(".clock3");

        const hh = this.date.getHours();
        const mm = this.date.getMinutes();
    }
}

const clock = new Clock();
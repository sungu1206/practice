'use strict';

//Buttons(input)
const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");
const minusBtn = document.querySelector(".minus_btn");
const plusBtn = document.querySelector(".plus_btn");

//Slider(div)
const slider = document.querySelector(".slider");

//Gallery(ul)
const gallery = document.querySelector(".gallery");

//Item(li)
const item = document.querySelector(".item");

//Class
class Counter {
    constructor() {
        this.counter = 0;
    }

    increase(result) {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 3 === 0) {
            result();
        }
    }
    eventer(a, b) {
        a.addEventListener("click", () => {
            b();
        });
    }
}

const counter = new Counter();
counter.eventer(nextBtn, counter.increase)



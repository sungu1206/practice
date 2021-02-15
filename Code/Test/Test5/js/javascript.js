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

//Bubble
const bubble = document.querySelector(".bubble");
//Cerate(li, radio)
const cerateItem = document.createElement("li");
cerateItem.setAttribute("class", "item");
const cerateRadio = document.createElement("input");
cerateRadio.type = "radio";
cerateRadio.setAttribute("class", "radio");
cerateRadio.setAttribute("name", "radio");

//
class Counter {
    constructor() {
        this.counter = 0;
    };

    increase() {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 3 === 0) {
            console.log("yes!");
            bubble.appendChild(cerateRadio.cloneNode(false));
        }
    };
};
const counter = new Counter();

function eventer() {
    plusBtn.addEventListener("click", () => {
        counter.increase();
        gallery.appendChild(cerateItem.cloneNode(false));
    });
};

const realEventer = eventer();


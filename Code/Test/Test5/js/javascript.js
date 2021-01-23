'use strict';

// // Buttons (input)
 

// // Gallery
// const gallery = document.querySelector(".gallery");

// // Slider (ul, li)
// const slider = document.querySelector(".slider");
// const item = document.querySelector('.item');

// // Create Btn
// const createItem = document.createElement("input");
// createItem.type = "radio";
// createItem.name = "radioBtn"
// createItem.setAttribute("class", "radio_btn")
// //
// const bubble = document.querySelector(".bubble");
// //
// const nextBtn = document.querySelector(".next_btn");
// //
// const size = gallery.clientWidth;
// // Class
// class Slider {
//     constructor(counter) {
//         this.counter = counter;
//     }

//     get counter() {
//         return this._counter;
//     }

//     set counter(value) {
//         this._counter = (value < 0) ? 0 : value;
//     }
// }

// const imgSlider = new Slider(0);

// let realCounter = 0;


// // Event(recyclable)
// function clickEvent(a, b, c) {
//     a.addEventListener("click", () => {
//         b.appendChild(c.cloneNode(false));
//     })
// }

// function clickEventLauncher(operator1) {
//     const result1 = operator1(plusBtn, slider, item);
// }
// clickEventLauncher(clickEvent);

// //
// function divide(d, e, f, g) {
//        d.addEventListener("click", () => {
//     if(e % 3 === 0) {
//         f.appendChild(g.cloneNode(false)); 
//     }
//        });
// }

// function divideLauncher(operator2) {
//     const result2 = operator2(plusBtn, realCounter, bubble, createItem);
// }
// divideLauncher(divide); 

// function nextButton(i, j, k, l) {
//     i.addEventListener("click", () => {
//         j.style.transform = "translateX("+(`${-k * l}`)+"px)";
//     });
// }
// nextButton(nextBtn, slider, size, realCounter)
// console.log()

function counter(a) {
    nextBtn.addEventListener("click", () => {
        console.log(++a);
    })
}

const result = counter(0);

function realCounter(b) {
    
}
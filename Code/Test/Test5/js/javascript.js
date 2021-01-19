'use strict';

// Buttons (input)
const minusBtn = document.querySelector(".minus_btn");
const plusBtn = document.querySelector(".plus_btn");

// Slider (ul, li)
const slider = document.querySelector(".slider");
const item = document.querySelector('.item');

// Create Btn
const createItem = document.createElement("input");
createItem.type = "radio";
createItem.name = "radioBtn"
createItem.setAttribute("class", "radio_btn")
//
const bubble = document.querySelector(".bubble");

// Class
class Slider {
    constructor(counter) {
        this.counter = counter;
    }

    get counter() {
        return this._counter;
    }

    set counter(value) {
        this._counter = (value < 0) ? 0 : value;
    }
}

const imgSlider = new Slider(0);




// Event(recyclable)
function clickEvent(a, b, c) {
    a.addEventListener("click", () => { 
         b.appendChild(c.cloneNode(false))
    });
}
clickEvent(plusBtn, bubble, createItem);

function removeClickEvent(e, f, g) {
    e.addEventListener("click", () => {
        f.removeChild(last)
    })
}
removeClickEvent(minusBtn, bubble, item)

// function greeting(name) {
//     alert('Hello ' + name);
//   }           
  
//   function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
//   }
  
//   processUserInput(greeting);
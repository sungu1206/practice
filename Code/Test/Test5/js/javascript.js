'use strict';

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const newList = document.createElement('.list');

console.log(newList);

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

const slider = new Slider(0);
console.log(slider.counter);

const crateList = `<li class="new_slider"></li>`

function clickEvent(event, addCounter, newProperty) {
    event.addEventListener('click', () => {
        
    })
}
clickEvent(prevBtn, slider.counter, newList);

console.log(slider.length);
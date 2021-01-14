'use strict';

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const imgSlider = document.querySelector('.slider');
const list = document.createElement('li');

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


function clickEvent(a, b, c) {
    a.addEventListener('click', () => {
        b.appendChild(list.cloneNode(true))
    })
}
clickEvent(prevBtn, imgSlider, list);

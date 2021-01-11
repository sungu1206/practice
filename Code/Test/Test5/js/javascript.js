'use strict';

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

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

const imgSlider = new Slider(1);
console.log(imgSlider.counter);

function clickEvent(event) {
    event.addEventListener('click', () => {
        
    })
}
clickEvent(prevBtn);
'use strict';

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const imgSlider = document.querySelector('.slider');
const radio = document.querySelector('.bubble');

const list = document.createElement('li');
list.setAttribute('class', 'list');

const createRadio = document.createElement('input');
radio.setAttribute('type', 'radio')

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

function clickEvent() {
    prevBtn.addEventListener('click', () => {
        imgSlider.appendChild(list.cloneNode(true))
        console.log(++slider.counter);
        if(slider.counter % 3 === 0) {
            radio.appendChild(createRadio);
        }
    })
}
clickEvent();
 
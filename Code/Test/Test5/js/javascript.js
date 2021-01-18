'use strict';

const plusBtn = document.querySelector('#plusBtn');
const minusBtn = document.querySelector('#minusBtn');
const imgSlider = document.querySelector('.slider');
const radio = document.querySelector('.radioBtn');
const bubble = document.querySelector('.bubble');

const list = document.createElement('li');
list.setAttribute('class', 'list');

const createRadio = document.createElement('input');
createRadio.type = 'radio';
createRadio.name = 'radio';
createRadio.setAttribute('class', 'radioBtn');

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
    plusBtn.addEventListener('click', () => {
        imgSlider.appendChild(list.cloneNode(true))
        console.log(++slider.counter); 
        if(slider.counter % 3 === 0) {
            bubble.appendChild(createRadio.cloneNode(false))
        }
    })
}
clickEvent();
 
const prevBtn = 
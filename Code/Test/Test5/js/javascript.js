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
const itemAll = document.querySelectorAll(".item");

function plusEventer(a, b) {
    a.addEventListener("click", () => {
        const result1 = b(gallery, item);
    });
}
plusEventer(plusBtn, cloneElemenet);

function cloneElemenet(a, b) {
   a.appendChild(b.cloneNode(false));
}

function minusEventer(a, b) {
    a.addEventListener("click", () => {
        const result3 = b(gallery, item);
    });
}
minusEventer(minusBtn, removeElement);

function removeElement(a, b) {
   a.removeChild(b);
}

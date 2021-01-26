'use strict';

//Counter
let counter = 0;

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
const item = document.getElementsByClassName("item");

//cerate
const createItem = document.createElement("li");

function plusEventer(a, b) {
    a.addEventListener("click", () => {
        console.log(++counter);
        createItem.setAttribute("class", `item${counter}`);
        const result1 = b(gallery, createItem);
        console.log(result1);
    });
}
plusEventer(plusBtn, cloneElemenet);

function cloneElemenet(a, b) {
    return a.appendChild(b.cloneNode(false));
}

function minusEventer(a, b) {
    a.addEventListener("click", () => {
        const result3 = b(gallery, item);
    });
}
minusEventer(minusBtn, removeElement);

function removeElement(a, b) {
  return a.removeChild(b);
}


'use strict';
// buttons(input)
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

// gallery(ul)
const gallery = document.querySelector(".gallery");

// item(li)
const item = document.querySelector(".item");
//cerate(li)
const list = document.createElement("li");

//counter
let counter = 0;
const items = document.querySelectorAll(".item")[counter];

//
function plusEventer(a, b) {
    a.addEventListener("click", () => {
        const result = b(gallery, item);
        console.log(result);
    });
    return a, b;
};

const realPlusEventer = plusEventer(next, setItem);
console.log(realPlusEventer);

function setItem(a, b) {
    a.appendChild(b.cloneNode(false));
    return a, b;
}
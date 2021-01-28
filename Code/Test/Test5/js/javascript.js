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


function plusEventer(a, b, c) {
    a.addEventListener("click", () => {
        console.log(counter++);
        const result1 = b(list, gallery);
        console.log(result1);
    });
};
const realPlusEventer = plusEventer(plus, setting);

function setting(a, b) {
    a.setAttribute("class", "item");
    b.appendChild(a.cloneNode(false));
    return a, b;
}
 
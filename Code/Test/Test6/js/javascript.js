"use strict";

const nav = document.querySelector("nav");

function overlap() {
    nav.addEventListener("click", () => {
        nav.classList.toggle("barstyle");
    })
}
overlap();


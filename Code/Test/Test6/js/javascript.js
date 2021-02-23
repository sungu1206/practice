"use strict";

const clock1 = document.querySelector(".clock1");
const clock2 = document.querySelector(".clock2");

function time() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDay();
}

function innerTime() {
    clock1.innerHTML = `${hours}:${minutes}`;
    clock2.innerHTML = `${hours}:${minutes}.${day}`;
}

function operator(a, b) {
    a + b;
    return a, b;
}
const result = operator(time, innerTime);
console.log(result)
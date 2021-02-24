"use strict";

const clock1 = document.querySelector(".clock1");
const clock2 = document.querySelector(".clock2");
const clock3 = document.querySelector(".day");

function time() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDay();
    const month = date.getMonth();
    const days = date.getDate();
    clock1.innerHTML = `${hours}:${minutes}`;
    clock2.innerHTML = `${hours}:${minutes}`;
    clock3.innerHTML = `${month}:${days}`;
}

function init(sum) {
    setInterval(sum(), 1000);
}
init(time);

const months = {
    monday : '월요일',
    tuseday : "화요일",
    wednesday :"수요일",
    thursday : "목요일",
    friday : "금요일",
    saturday : "토요일",
    sunday : "일요일"
};

const {monday, tusday, wednesday, thursday, friday, saturday, sunday} = day;

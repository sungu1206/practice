'use strict';

// 6. logical operators: ||(or) , &&(and) , !(not)
const value1 = false;
const value2 = 4<2; //false


function check() {
    for(let i = 0; i < 10; i++) {
        console.log('loop!');
    }
    return true;
}
// ||(or) 첫번째 true인 값을 출력한다. true인 값을 찾으면 뒤는 확인 하지 않는다. 
console.log(`or: ${value1 || value2 || check()}`);
// &&(and) 값이 모두 true 일때만 출력이 된다. 
console.log(`or: ${value1 && value2 && check()}`);
// !(not)
const stringnum = '1';
const number = 1;

console.log(stringnum == number);
console.log(stringnum === number);
console.log(stringnum != number);
console.log(stringnum !== number);
console.log(undefined == null);
console.log(undefined === null);

// conditional operators: if
const name = 'SeonGu';
if(name === 'SeonGu'){
    console.log('Welcom, SeonGu!');
}else if (name ==='Coder') {
    console.log('Welcom, Coder!');
}else{
    console.log('unkwnon');
}


const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;

    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
    
    default:
        console.log('some all..');
}


let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

do {
    console.log(`do while: ${i}`)
} while (i>0);

for (i = 3; i > 0; i--) {
    console.log(`i: ${i}`);
}
for(let i = 3; i > 0; i--) {
    console.log(`inline variavle for: ${i}`);
}

for(let i = 0; i < 11; i++) {
    if(i % 2 !== 0){
        console.log(`q1. ${i}`)
    }
}
// 홀수만
for(let i = 0; i < 11; i++) {
    if(i > 8){
        break;
    }
    console.log(`q2. ${i}`);
}
// 8일때 멈춤



//함수

//함수 선언
function doSomething() {
    console.log('hello');
}

// 함수 호출
doSomething();

let counter = 0;

// const add = (a , b) => a + b;
// const minus = (a , b) => a - b;
// const times = (a , b) => a * b;
// const divided = (a , b) => a / b;
// console.log();

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


function addEvent(clickEvent, consoleEvent) {
    clickEvent.addEventListener('click', () => {
        console.log(consoleEvent)
    })
}
addEvent(prev, counter)



//덧셈을 하는 함수!
function add(a, b) {
    const result = a + b;
    return result;
}


//뺄셈을 하는 함수!
function minus(a, b) {
    const result = a - b;
    return result;
}
console.log(add(1, 2));

const sum = add(2, 2);
console.log(sum);

const addFun = add;

console.log(addFun(3, 4))

// 함수를 실행하는 함수! callback!
function surprise(operator) {
    const result = operator(2, 1);
    console.log(result);
}
surprise(minus);

// class
class Counter {
    constructor(runEvery5times) {
        this.counter = 0;
        this.callback = runEvery5times;
    }
    increase() {
        this.counter++;
        console.log(this.counter);  
        if(this.counter % 5 === 0) {
            this.callback(this.counter);
        }
    }
}

function printHelloNum(num) {
    console.log(`Hello ${num}`);
}

function alertHelloNum(num) {
    alert(`Hello ${num}`)
}

const createCounter = new Counter(printHelloNum);

createCounter.increase();
createCounter.increase();
createCounter.increase();
createCounter.increase();
createCounter.increase();
createCounter.increase();
createCounter.increase();
createCounter.increase();
createCounter.increase();
createCounter.increase();


// Getter and setters
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 값을 리턴
    get age() {
        return this._age;
    }

    // 값을 설정
    set age(value) {
        this._age = (value < 0) ? 0 : value; // 삼항 연산자. 조건? 값1 : 값2 , 조건이 참이면 값1 을 갖고 , 거짓이면 조건 2를 갖는다. 
    }
}

const seongu = new Person('Seon Gu Kang', -1);

console.log(seongu.name);
console.log(seongu.age);

class User {
    constructor(fristName, lastName, age){
        this.firstName = fristName;
        this.lastName = lastName;
        this.age = age;
    }
    
    get age() {
        return this._age;
    }

    set age(value) {
        this._age = (value < 0) ? 0 : value;
    }
}

const User1 = new User('Seon Gu', 'Kang', 25);

console.log(User1.firstName);
console.log(User1.lastName);
console.log(User1.age);

class vendingMachine {
    constructor(sprite, coke, number) {
        this.sprite = sprite;
        this.coke = coke;
        this.number = number
    }
    
    get number() {
        return this._number;
    }

    set number(value) {
        this._number = (value < 0) ? 0 : value;
    }
}

const takeOut = new vendingMachine('사이다', '콜라', 5);

console.log(takeOut.sprite);

console.log(takeOut.coke);

console.log(takeOut.number);
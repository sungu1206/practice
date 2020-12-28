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



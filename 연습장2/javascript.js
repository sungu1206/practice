// 함수
function plus(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 / num2;
}

function surprise(operator){
    const result = operator(2, 3);
    document.write(result);
}
surprise(minus);


 
//
let counter = 0;
const btn1 = document.querySelector('.btn1');
const sum = document.querySelector('.sum');
btn1.addEventListener('click', () => {
    console.log(counter++);
    sum.style.width = `${counter}px`;
    sum.style.height = `${counter}px`;
});
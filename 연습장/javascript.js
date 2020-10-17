let counter = -1;
let i = 0;

const plusBtn = document.querySelector('.plus_btn');
const minusBtn = document.querySelector('.minus_btn');

plusBtn.addEventListener('click' , () => {
    counter++;
    console.log(counter);
    i++;
    if(counter >= coworkers.length){
        alert('end');
        console.log('end');
        document.getElementsByClassName('text')[0].innerHTML = 'end';
    }
    else{
        console.log(coworkers[counter]);
        document.getElementsByClassName('text')[0].innerHTML = `${i}.${coworkers[counter]}`;
    };
});

minusBtn.addEventListener('click' , () => {
    counter--;
    console.log(counter);
    i--;
    if(counter <= -1){
        alert('end');
        console.log('end');
        document.getElementsByClassName('text')[0].innerHTML = 'end';
    }
    else{
        console.log(coworkers[counter]);
        document.getElementsByClassName('text')[0].innerHTML = `${i}.${coworkers[counter]}`;
    };
});



let coworkers = ['강비호','한점숙','강선구','강민주'];



//Template literals(템플릿 리터널) 
console.log('안녕하세요. '+'저는 ' + 6*coworkers.length +'살 입니다.'); //기본
console.log(`안녕하세요. 저는 ${6*coworkers.length}살 입니다.`); //템플릿 리터널 적용!

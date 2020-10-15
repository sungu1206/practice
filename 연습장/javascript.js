let counter = -1;

const plusBtn = document.querySelector('.plus_btn');
const minusBtn = document.querySelector('.minus_btn');

plusBtn.addEventListener('click' , () => {
    counter++;
    console.log(counter);

    if(counter >= coworkers.length){
        alert('end');
        console.log('end');
    }
    else{
        console.log(coworkers[counter]);
    };
});

minusBtn.addEventListener('click' , () => {
    counter--;
    console.log(counter);

    if(counter <= -1){
        alert('end');
        console.log('end');
    }
    else{
        console.log(coworkers[counter]);
    };
});

let coworkers = ['강비호','한점숙','강선구','강민주'];

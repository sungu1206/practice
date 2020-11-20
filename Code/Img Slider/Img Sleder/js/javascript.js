// const items = document.querySelectorAll('.item');
// const firstItem = document.querySelector('.item:first-child');

const backBtn = document.querySelector('.back_btn');
const prevBtn = document.querySelector('.prev_btn');

let counter = 0;

// firstItem.classList.add('active');


prevBtn.addEventListener('click' , () => {

    console.log(++counter , items[counter]);

    if(items[counter]){
        items[counter].classList.add('active');
        items[counter-1].classList.remove('active');

    }if(counter === items.length){
        firstItem.classList.add('active');
        items[counter-1].classList.remove('active'); 
        counter = 0;
    }

});

backBtn.addEventListener('click' , () => {
    console.log(--counter , items[counter]);
    if(items[counter]){
        items[counter].classList.add('active');
        items[counter+1].classList.remove('active');

    }if(counter <= -1){
        firstItem.classList.remove('active');
        counter = items.length-1;
        items[counter].classList.add('active');
    }
});




const sliderDiv = document.querySelector('.slider');
const items = document.querySelectorAll('.item');

const radioDiv = document.querySelector('.radio');
const input = document.querySelectorAll('input');

const createRadio = document.createElement('input');
createRadio.type = 'radio';
createRadio.name = 'radio';
const firstItem = document.querySelector('.item:first-child');

function looploop(){
    firstItem.classList.add('active');
    for(let i = 0; i < items.length; i++){
        radioDiv.appendChild(createRadio.cloneNode(true));
        
    }
}
console.log(looploop());
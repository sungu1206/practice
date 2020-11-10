const items = document.querySelectorAll('.item');
const firstItem = document.querySelector('.item:first-child');

const backBtn = document.querySelector('.back_btn');
const prevBtn = document.querySelector('.prev_btn');

let counter = 0;

firstItem.classList.add('active');



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


const radio = document.querySelector('.radio input');
const radioFirst = document.querySelector('.radio:first-child');
const radioClass = document.getElementsByClassName('radio')[0];
const radicoTag = '<input type="radio" name="radio" class="radio_btn"></input>';


     function loop(){
         for(let i = 0; i < items.length; i++){
            radioClass.innerHTML += `${radicoTag}`;
         }
     }
     loop();
     console.log(radio.parentNode)
  
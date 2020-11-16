// const items = document.querySelectorAll('.item');
// const firstItem = document.querySelector('.item:first-child');

// const backBtn = document.querySelector('.back_btn');
// const prevBtn = document.querySelector('.prev_btn');

// let counter = 0;

// firstItem.classList.add('active');


// prevBtn.addEventListener('click' , () => {

//     console.log(++counter , items[counter]);

//     if(items[counter]){
//         items[counter].classList.add('active');
//         items[counter-1].classList.remove('active');

//     }if(counter === items.length){
//         firstItem.classList.add('active');
//         items[counter-1].classList.remove('active'); 
//         counter = 0;
//     }

// });

// backBtn.addEventListener('click' , () => {
//     console.log(--counter , items[counter]);
//     if(items[counter]){
//         items[counter].classList.add('active');
//         items[counter+1].classList.remove('active');

//     }if(counter <= -1){
//         firstItem.classList.remove('active');
//         counter = items.length-1;
//         items[counter].classList.add('active');
//     }
// });



// const radio = document.getElementsByClassName('radio')[0];
// const createTag = document.createElement('input');

// for(let i = 0; i < items.length; i++){
//     createTag.type = 'radio';
//     createTag.name = 'radio_btn';
//     createTag.value =  '';
//     radio.appendChild(createTag.cloneNode(true));
// }





// const radioSelector = document.querySelectorAll('input');
// let j = 0;

// function looploop(){
//     for(j = 0; j < items.length; j++){       
//         radioSelector[j].addEventListener('click', () => {
            
//         });
//     }

// }
// console.log(looploop());

 
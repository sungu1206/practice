const carouselSlider = document.querySelector('.slide');
const carouselSliderImg = document.querySelectorAll('.slide img');

const overBtn = document.querySelector('.over');
const backBtn = document.querySelector('.back');

let counter = 1;
const size = carouselSliderImg[0].clientWidth;

// carouselSlider.style.transform = 'translateX('+(`${-size * counter}`)+'px)';
// carouselSlider.style.transform = 'translateX('+(`${-size * counter}`)+'px)';
// overBtn.addEventListener('click' , () => {
//     if(counter >= carouselSliderImg.length - 1){
//         return;
//     }else{
//         carouselSlider.style.transition = 'transform 0.5s ease-in-out'
//         counter++;
//         carouselSlider.style.transform = 'translateX('+(`${-size * counter}`)+'px)';
//     }
// });
// backBtn.addEventListener('click' , () => {
//     if(counter <= 0){
//       return;
//     }else{
//         carouselSlider.style.transition = 'transform 0.5s ease-in-out'
//         counter--;
//         carouselSlider.style.transform = 'translateX('+(`${-size * counter}`)+'px)'; 
//     }
// });


function subtract(x , y) {
    return x - y;
}

function multiply(x , y) {
    return x * y;
}

overBtn.addEventListener('click' , function surprise(operator){
    let result = operator(carouselSliderImg.length-1,counter);
    return;
});
console.log(surprise(subtract));
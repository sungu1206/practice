const innerSlide = document.querySelector('.slider');
const innerImages = document.querySelectorAll('.slide img');

const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

let counter = 1;
const size = innerImages[0].clientWidth;

innerSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click' , function(){
  innerSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  innerSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click' , function(){
  innerSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  innerSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

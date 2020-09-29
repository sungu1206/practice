const carouselSlide = document.querySelector('.slide');
const carouselImages = document.querySelectorAll('.slide img');

//Button
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners
nextBtn.addEventListener('click', function(){
  if (counter >= carouselImages.length -1) return;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', function(){
  if (counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', function(){
  if (carouselImages[counter].className === 'last') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - 2 ;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carouselImages[counter].className === 'first') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter ;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});

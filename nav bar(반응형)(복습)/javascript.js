const navToggle = document.querySelector('.nav_toggle');
const navLists = document.querySelector('.nav_lists');
const navIcons = document.querySelector('.nav_icons');

navToggle.addEventListener('click', function() {
    navLists.classList.toggle('active');
    navIcons.classList.toggle('active');
});
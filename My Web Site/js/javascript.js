const sideBtn = document.querySelector('.btn');
const sideBtnIcon = document.querySelector('.btn i');
const sideMenu = document.querySelector('menu');
const sideWrap = document.querySelector('.main_wraper');
sideBtn.addEventListener('click', () => {
    if(sideMenu.style.width === '0px'){
        sideMenu.style.width = '250px';
        sideBtn.style.left = '250px';
        sideBtn.style.transition = '0.3s';
        sideMenu.style.transition = '0.3s';
        sideBtnIcon.style.transform = 'rotate(1turn)';
        sideBtnIcon.style.transition = '0.3s';
        sideWrap.style.marginLeft = '115px';
        sideWrap.style.transition = '0.3s';
    }else{
        sideMenu.style.width = '0px';
        sideBtn.style.left = '0px';
        sideBtn.style.transition = '0.3s';
        sideMenu.style.transition = '0.3s';
        sideBtnIcon.style.transform = 'rotate(0.5turn)';
        sideBtnIcon.style.transition = '0.3s';
        sideWrap.style.marginLeft = '0px';
        sideWrap.style.transition = '0.3s';
    }
});

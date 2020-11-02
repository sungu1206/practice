const sideBtn = document.querySelector('.sideBtn');
const sideBtnIcon = document.querySelector('.sideBtn i');
const sideMenu = document.querySelector('.sideMenu');
const sideWrap = document.querySelector('.wrap');
sideBtn.addEventListener('click', () => {
    if(sideMenu.style.width === '0px'){
        sideMenu.style.width = '250px';
        sideBtn.style.left = '250px';
        sideBtn.style.transition = '0.2s';
        sideMenu.style.transition = '0.2s';
        sideBtnIcon.style.transform = 'rotate(1turn)';
        sideBtnIcon.style.transition = '0.2s';
        sideWrap.style.marginLeft = '0px';
        sideWrap.style.transition = '0.2s';
    }else{
        sideMenu.style.width = '0px';
        sideBtn.style.left = '0px';
        sideBtn.style.transition = '0.2s';
        sideMenu.style.transition = '0.2s';
        sideBtnIcon.style.transform = 'rotate(0.5turn)';
        sideBtnIcon.style.transition = '0.2s';
        sideWrap.style.marginLeft = '-250px';
        sideWrap.style.transition = '0.2s';
    }
});

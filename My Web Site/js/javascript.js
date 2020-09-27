window.onload = function(){
  let i = document.getElementsByClassName('loading');
  if(i[0].style.width === '1000px'){
    i[0].style.width = '0px';
  }else {
    i[0].style.width = '1000px';
  }
};

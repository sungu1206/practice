
document.getElementsByClassName('nav-bar')[0].addEventListener('click', function navbarClick(){
  document.getElementsByClassName('nav-bar')[0].classList.toggle('trans');
  var a = document.getElementsByClassName('nav');
  var b = document.getElementsByClassName('nav-bar');
    if(a[0].style.width === ''){
      a[0].style.width = '304px';
    }else {
      a[0].style.width = '';
    }
  });
document.getElementsByClassName('dropdown-1')[0].addEventListener('click',function dropdownClick(){
  var c = document.getElementsByClassName('dropdown-list-1');
      c[0].classList.toggle('drop');
      c[0].style.backgroundColor = '#f0f0f0';
});
document.getElementsByClassName('dropdown-2')[0].addEventListener('click',function dropdownClick(){
  var d = document.getElementsByClassName('dropdown-list-2');
      d[0].classList.toggle('drop');
      d[0].style.backgroundColor = '#f0f0f0';
});

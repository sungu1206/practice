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



  document.getElementsByClassName('dropdown-1,dropdown-2')[0].addEventListener('click', function dropdownClick(){
    var i =   document.getElementsByClassName('dropdown-1');
    var j =   document.getElementsByClassName('dropdown-2');
    if()
  });

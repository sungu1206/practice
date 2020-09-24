document.getElementsByClassName('dropdown')[0].addEventListener('click' , function clickDrop(){
  var a = document.getElementsByClassName('dropdown');
  var b = document.getElementsByClassName('dropdown_list');
  if(b[0].style.display == ''){
    a[0].style.backgroundColor = 'gray';
    b[0].style.display = 'block';
  }else{
    a[0].style.backgroundColor = '';
    b[0].style.display = '';
  }
});

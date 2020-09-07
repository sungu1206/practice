function test(){
  var i = document.getElementsByClassName('nav')
  var j = i[0].style.display;
  if(j == 'block') {
    i[0].style.display = 'none';
  }else {
    i[0].style.display = 'block';
  }
}

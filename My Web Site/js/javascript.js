document.getElementsByClassName('dropdown')[0].addEventListener('click',function dropClick(){
  var a = document.getElementsByClassName('dropdown');
  var b = document.getElementsByClassName('drop');
 if(b[0].style.width === ''){
   a[0].style.backgrondColor = 'lightgray';
   b[0].style.width = 'block';
 }else{
   a[0].style.backgrondColor = 'rgba(230, 230, 230, 0.5)';
   b[0].style.width = '';
 }
});
 

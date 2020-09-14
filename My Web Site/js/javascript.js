var i = document.getElementsByClassName("nav_bar");
var j = document.getElementsByClassName("nav");

i.addEventListnenr("click", open);
j.addEventListnenr("click", close);

function open (){
  document.getElementsByClassName("nav")[0].style.width = "300px";
}
function close (){
  document.getElementsByClassName("nav")[0].style.width = "0px";
}

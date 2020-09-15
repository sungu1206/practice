document.getElementsByClassName("nav_bar")[0].addEventListener("click", function open(){
  document.getElementsByClassName("nav")[0].style.width = "299.1px";
});
document.getElementsByClassName("exit")[0].addEventListener("click", function close(){
  document.getElementsByClassName("nav")[0].style.width = "0px";
});

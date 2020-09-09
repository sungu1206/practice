// function switchSideMenu() {
// 	var temp = document.getElementById("sidemenu").style.left;
// 	temp = eval(temp.replace(/[^0-9-]/g, ""));
// 	if(temp > 0) {
// 		document.getElementById("sidemenu").style.left = "-90px";
// 		document.getElementById("sidemenu").getElementsByTagName("span")[0].innerHTML = "▶ click me!";
// 	} else {
// 		document.getElementById("sidemenu").style.left = "50px";
// 		document.getElementById("sidemenu").getElementsByTagName("span")[0].innerHTML = "◀";
// 	}
// }
function sliderMenu(){
  var i = document.getElementsByClassName('slider');
  if(i[0].style.visibility == 'visible'){
    i[0].style.visibility = 'hidden'; 
  }else{
    i[0].style.visibility = 'visible';
  }
}

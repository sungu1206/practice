$(document).ready(function() {
   //slider1
    $(".slide1 > a:gt(0)").hide();
    
    setInterval(function() {
        $(".slide1 > a:first-child").fadeOut()
        .next("a").fadeIn()
        .end().eq(0).appendTo(".slide1");
    }, 3000);
    
    let counter1 = 0;
    const size1 = $(".slide2").width();
    const imgLength1 = $(".slide2 > a > img").length;
    
    setInterval(function() {
        counter1++;
        if(counter1 === imgLength1) {
            counter1 = 0;
            $(".slide2").css("transition", "none");
            $(".slide2").css("transform", "translateX("+(-size1 * counter1)+"px)");
        }else{
            $(".slide2").css("transition", "0.4s");
            $(".slide2").css("transform", "translateX("+(-size1 * counter1)+"px)");
        }
    }, 3000);
    
    let counter2 = 0;
    const size2 = $(".slide3").height();
    const imgLength2 = $(".slide3 > a > img").length;
    
    setInterval(function() {
        counter2++;
        if(counter2 === imgLength2) {
            counter2 = 0;
            $(".slide3").css("transition", "none");
            $(".slide3").css("transform", "translateY("+(-size2 * counter2)+"px)");
        }else{
            $(".slide3").css("transition", "0.4s");
            $(".slide3").css("transform", "translateY("+(-size2 * counter2)+"px)");
        }
    }, 3000);
    
});
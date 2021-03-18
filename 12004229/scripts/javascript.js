$(document).ready(function() { 
    $(".main-menu > li").mouseenter(function() {
        $(".sub-menu").stop().slideDown(200); 
    });
    $(".main-menu > li").mouseleave(function() {
        $(".sub-menu").stop().slideUp(200);
    });
    
    let counter = 0;
    
    setInterval(function() {
        counter++;
        console.log(counter);
        if(counter === 3) {
            counter = 0;
            $(".slide").css("transition", "none");
            $(".slide").css("transform", "translateY("+(-300 * counter)+"px)");
        }else{
            $(".slide").css("transition", "0.4s");
            $(".slide").css("transform", "translateY("+(-300 * counter)+"px)");
        }
    }, 3000);
});

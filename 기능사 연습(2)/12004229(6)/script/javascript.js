$(document).ready(function() {
    //nav
    $(".sub-menu-wrap").hide();
    
    $(".main-menu > li").mouseover(function() {
        $(".sub-menu-wrap").stop().slideDown(300);
    });
    
//    $(".sub-menu-wrap > .sub-menu-group").mouseleave(function() {
//        $(".sub-menu-wrap").stop().slideUp(300);
//    });
    
    $("nav").mouseleave(function() {
        $(".sub-menu-wrap").stop().slideUp(300);
    });
    
    //slide
    let counter = 0;
    
    const size = $(".slide").height();
    const imgLength = $(".slide > a > img").length;
    
    setInterval(function() {
        counter++;
        
        if(counter === imgLength) {
            counter = 0;
            $(".slide").css("transition", "none");
            $(".slide").css("transform", "translateY("+(-size * counter)+"px)");
        }else{
            $(".slide").css("transition", "0.4s");
            $(".slide").css("transform", "translateY("+(-size * counter)+"px)");
        }
    }, 3000);
    
    //modal
    $(".modal-wrap").hide();
    $(".modal").hide();
    
    $(".sub-notice > li:first-child").click(function() {
        $(".modal-wrap").show();
        $(".modal").show();
    });
    
    $(".btn > button").click(function() {
        $(".modal-wrap").hide();
        $(".modal").hide();
    });
});
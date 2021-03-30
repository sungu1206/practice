$(document).ready(function() {
    // nav 
    $(".sub-menu-wrap").hide();
    
    $(".main-menu > ul > li").mouseenter(function() {
        $(".sub-menu-wrap").stop().slideDown(200);
    });
    
    $(".sub-menu-wrap").mouseleave(function() {
        $(".sub-menu-wrap").stop().slideUp(200);
    });
    
    //slider
    
    let counter = 0;
    
    const size = $(".slider > .slide > a > img").width();
    const imgLength = $(".slider > .slide > a > img").length;
    
    setInterval(function() {
            counter++;
        
        if(counter === imgLength) {
           counter = 0;
            $(".slide > a").css("transition", "none");
            $(".slide > a").css("transform", "translateX("+(-size * counter)+"px)");
           }else{
            $(".slide > a").css("transition", "0.4s");
            $(".slide > a").css("transform", "translateX("+(-size * counter)+"px)");
           }
    }, 3000);
    
    //modal
    $(".modal").hide();
    
    $(".sub-notice > li:first").click(function() {
       $(".modal").show(); 
    });
    
    $(".btn > button").click(function() {
       $(".modal").hide(); 
    });
});
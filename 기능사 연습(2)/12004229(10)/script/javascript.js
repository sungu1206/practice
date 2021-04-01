$(document).ready(function() {
    //nav
    $(".sub-menu").hide();
    
    $(".main-menu > li").mouseenter(function() {
       $(this).find(".sub-menu").stop().slideDown(400); 
    });
    
    $(".main-menu > li").mouseleave(function() {
       $(this).find(".sub-menu").stop().slideUp(400); 
    });
    
    //slide    
    $(".slide > a:gt(0)").hide();
    
    setInterval(function() {
        $(".slide > a:first-child").fadeOut()
        .next("a").fadeIn()
        .end().eq(0).appendTo(".slide");
    }, 3000)
    
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
$(document).ready(function() {
    // nav
    $(".sub-menu").hide();
    
    $(".main-menu > li").mouseenter(function() {
        $(this).find(".sub-menu").stop().slideDown(300);
    });
    
    $(".main-menu > li").mouseleave(function() {
        $(this).find(".sub-menu").stop().slideUp(300);
    });
    
    // slider
    setInterval(function() {
        $(".slide a:gt(0)").hide();
        
        $(".slide a:first-child").fadeOut()
        .next("a").fadeIn()
        .end().appendTo(".slide");
    }, 3000);
    
    //tab 
    
    $(".modal-wrap").hide();
    $(".modal").hide();
    
    $(".sub-notice li:first-child").click(function() {
        $(".modal-wrap").show();
        $(".modal").show();
    });
    
    $(".btn button").click(function() {
        $(".modal-wrap").hide();
        $(".modal").hide();
    });
})
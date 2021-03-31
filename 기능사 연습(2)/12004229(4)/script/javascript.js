$(document).ready(function() {
    //nav
    $(".sub-menu-wrap").hide(); 
    
    $(".main-menu > li").mouseenter(function() {
       $(".sub-menu-wrap").stop().slideDown(300); 
    });
    
    $(".sub-menu-wrap").mouseleave(function() {
       $(".sub-menu-wrap").stop().slideUp(300); 
    });
    
    //slide
    $(".slide > a:gt(0)").hide();
    
    setInterval(function() {
        $(".slide > a:first-child").fadeOut()
        .next("a").fadeIn()
        .end().eq(0).appendTo(".slide");
    }, 3000);
    
    //modal 
    $(".modal").hide();
    
    $(".sub-notice > li:first-child").click(function() {
        $(".modal").show();
    })
    $(".btn > button").click(function() {
        $(".modal").hide();
    })
});
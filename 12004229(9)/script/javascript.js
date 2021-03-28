$(document).ready(function() {
    //nav
    $(".sub-menu").hide();
    
    $(".main-menu > li").mouseenter(function() {
       $(this).find(".sub-menu").stop().slideDown(200); 
    });
    
    $(".main-menu > li").mouseleave(function() {
       $(this).find(".sub-menu").stop().slideUp(200); 
    });
    
    //slider
    setInterval(function() {
        $(".slide a:gt(0)").hide();
        
        $(".slide a:first-child").fadeOut()
        .next("a").fadeIn()
        .end().appendTo(".slide");
    }, 3000);
    
    //tab 
    
    $(".gallery").hide();
    
    const tabBtn = $(".notice-menu > a");
    const tabCont = $(".main-notice > ul");
    
    tabBtn.click(function() {
        const target = $(this);
        const index = target.index();
        
        tabBtn.removeClass("active");
        target.addClass("active");
        
        tabCont.css("display", "none");
        tabCont.eq(index).css("display", "flex");
    });
    
    //modal 
    
    $(".modal").hide();
    
    $(".sub-notice > li:first").click(function() {
        $(".modal").show();
    });
    
    $(".btn > button").click(function() {
        $(".modal").hide();
    });
});

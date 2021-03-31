$(document).ready(function() {
    //nav
    $(".sub-menu").hide(); 
    
    $(".main-menu > li").mouseenter(function () {
       $(this).find(".sub-menu").stop().slideDown(300); 
    });
    
    $(".main-menu > li").mouseleave(function () {
       $(this).find(".sub-menu").stop().slideUp(300); 
    });
    
    //slide
    $(".slide a:gt(0)").hide();
    
    setInterval(function() {
        $(".slide a:first-child").fadeOut()
        .next("a").fadeIn()
        .end().eq(0).appendTo(".slide");
    }, 3000);
    
    //tab
    $(".gallery").hide();
    
    const tabBtn = $(".notice-menu > a");
    const tabCont = $(".notice-group > ul");
    
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
    
    $(".sub-notice > li:first-child").click(function() {
        $(".modal").show();
    })
    
    $(".btn > button").click(function() {
        $(".modal").hide();
    })
});
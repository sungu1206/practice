$(document).ready(function() {
    //nav
    $("nav > .main-menu > li").mouseenter(function() {
       $(this).find(".sub-menu").stop().slideDown(300); 
    });
    
    $("nav > .main-menu > li").mouseleave(function() {
       $(this).find(".sub-menu").stop().slideUp(300); 
    });
    
    //slide
     $('.slide a:gt(0)').hide();

  setInterval(function(){
    $('.slide a:first-child').fadeOut()
    .next('a').fadeIn()
    .end().appendTo('.slide');
  }, 3000); 
    
    //tab
    
    $(".gallery").hide();
    
    const tabBtn = $(".notice > .notice-menu > a");
    const tabCont = $(".container > ul");
    $(tabBtn).click(function() {
        const target = $(this);
        const index = target.index();
        
        tabBtn.removeClass("ac tive");
        target.addClass("active");
        
        tabCont.css("display", "none");
        tabCont.eq(index).css("display", "flex");        
    });
        
        $(".modal").hide();
    $(".sub-notice > li:first").click(function() {
        $(".modal").show();
    });
    $(".btn > button").click(function() {
        $(".modal").hide();
    })
});
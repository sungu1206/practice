$(document).ready(function() {
   //nav
    $(".sub-menu").hide();
    
    $(".main-menu > li").mouseenter(function() {
       $(".sub-menu").stop().slideDown(300); 
    });
    
    $(".main-menu > li").mouseleave(function() {
       $(".sub-menu").stop().slideUp(300); 
    });
    
    //slide
    let counter = 0;
    
    const size = $(".slide").width();
    const imgLength = $(".slide > a > img ").length;
    
    setInterval(function() {
        counter++;
        
        if(counter === imgLength) {
            counter = 0;
            $(".slide").css("transition", "none");
            $(".slide").css("transform", "translateX("+(-size * counter)+"px)");
        }else {
             $(".slide").css("transition", "0.4s");
            $(".slide").css("transform", "translateX("+(-size * counter)+"px)");   
        }
    }, 3000);
    
    //tab
    $(".gallery").hide();
    
    const tabBtn = $(".notice-menu > a");
    const tabCont = $(".notice > ul");
    
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
    });
    
    $(".btn > button").click(function() {
       $(".modal").hide(); 
    });
});
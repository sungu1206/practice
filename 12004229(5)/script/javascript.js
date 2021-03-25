$(document).ready(function() {
    //nav
    $(".sub-menu").hide();
    $(".main-menu > li > a").mouseenter(function() {
        $(".sub-menu").stop().slideDown(200); 
    });
    $(".main-menu").mouseleave(function() {
        $(".sub-menu").stop().slideUp(200); 
    });
    
    //slide
    let counter = 0;
    const size = $(".slider > .slide").width();
    const imgLenth = $(".slider > .slide > a > img").length;
    
    setInterval(function(){
        counter++;     
        if(counter === imgLenth) {
            counter = 0;
            $(".slide").css("transition", "none");
            $(".slide").css("transform", "translateX("+(-size * counter)+"px)");
        }else{
            $(".slide").css("transform", "translateX("+(-size * counter)+"px)");
            $(".slide").css("transition", "0.4s");
        }
    }, 3000)
    
    //tab
    $(".gallery").hide();
    
    const tabBtn = $(".notice-menu > a");
    const tabCont = $(".container > ul");
    $(tabBtn).click(function() {
        const target = $(this);
        const index = target.index();
        
        tabBtn.removeClass("active");
        target.addClass("active");
        
        tabCont.css("display", "none");
        tabCont.eq(index).css("display", "flex");        
    });
    
    //modal
    $(".modal").hide(); 
    $(".main-notice > li:first-child").click(function() {
       $(".modal").show(); 
    });
    
    $(".btn > button").click(function() {
        $(".modal").hide(); 
    })
});
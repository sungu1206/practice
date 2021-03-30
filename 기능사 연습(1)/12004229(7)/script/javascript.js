$(document).ready(function() {
    // nav
    $(".sub-menu").hide();
    $(".main-menu > ul > li").mouseenter(function() {
        $(this).find(".sub-menu").stop().slideDown(200);
    });
    $(".main-menu > ul > li").mouseleave(function() {
        $(this).find(".sub-menu").stop().slideUp(200);
    });
    
    // slider
    
    let counter = 0;
    
    const size = $(".slider > .slide > a > img").height();
    const imgLength = $(".slider > .slide > a > img").length;
    
    setInterval(function(){
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
    $(".modal").hide();
    
    $(".sub-notice > li:first").click(function() {
        $(".modal").show();
    })
    
    $(".btn > button").click(function() {
        $(".modal").hide();
    })
});
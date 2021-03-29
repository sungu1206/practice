$(document).ready(function() {
   //nav 
    $(".sub-menu").hide();
    
    $(".main-menu > li").mouseenter(function() {
       $(this).find(".sub-menu").stop().slideDown(450); 
    });
    
    $(".main-menu > li").mouseleave(function() {
       $(this).find(".sub-menu").stop().slideUp(200); 
    });
    
    //slider
    let counter = 0;
    
    const size = $(".slide").width();
    const imgLength = $(".slide > a > img").length;
    
    setInterval(function() {
       counter++;
        
        if(counter === imgLength) {
            counter = 0;
            $(".slide").css("transition", "none");
            $(".slide").css("transform", "translateX("+(-size * counter)+"px)");
        }else{
            $(".slide").css("transition", "0.4s");
            $(".slide").css("transform", "translateX("+(-size * counter)+"px)");
        }
    }, 3000);
    
    //modal
    $(".modal-wrap").hide();
    $(".modal").hide();
    
    $(".sub-notice > li:first-child").click(function() {
        $(".modal-wrap").show();
        $(".modal").show();
    })
    
    $(".btn > button").click(function() {
        $(".modal-wrap").hide();
        $(".modal").hide();
    })
});
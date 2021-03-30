$(document).ready(function() {
    //nav
    $(".sub-menu-wrap").hide();
    
    $(".main-menu > li").mouseenter(function() {
        $(".sub-menu-wrap").stop().slideDown(300);
    });
    
    $(".sub-menu-wrap").mouseleave(function() {
       $(".sub-menu-wrap").stop().slideUp(300);
    });
    
    $(".sub-menu").mouseenter(function() {
        let target = $(".main-menu > li > a");
        const index = $(this).index();
        target.eq(index).css("background", "#333333");
        target.eq(index).css("color", "#f0f0f0");
    });
    
    $(".sub-menu").mouseleave(function() {
        let target = $(".main-menu > li > a");
        const index = $(this).index();
        target.eq(index).css("background", "none");
        target.eq(index).css("color", "#333333");
    });
    
    //slide
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
        $(".modal").show();
        $(".modal-wrap").show();
    })
    
     $(".btn > button").click(function() {
        $(".modal").hide();
         $(".modal-wrap").hide();
    })
});
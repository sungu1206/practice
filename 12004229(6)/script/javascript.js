$(document).ready(function() {
   //nav
    $(".sub-menu-wrap").hide();
    
    $(".main-menu li").mouseenter(function() {
       $(".sub-menu-wrap").stop().slideDown(200);
    });
    
    $(".sub-menu-wrap").mouseleave(function() {
       $(".sub-menu-wrap").stop().slideUp(200);
    });
    
    //slider
    
    let counter = 0;
    const size = $(".slider > .slide > a > img").height();
    const imgLength = $(".slider > .slide > a > img").length;
    
    setInterval(function() {
        counter++;
        console.log(size);
        
        if(counter === imgLength) {
            counter = 0;
            $(".slider > .slide").css("transition", "none");
            $(".slider > .slide").css("transform", "translateY("+(-size * counter)+"px)");
        }else {
            $(".slider > .slide").css("transition", "0.4s");
            $(".slider > .slide").css("transform", "translateY("+(-size * counter)+"px)");
        }
    }, 3000);
    
    //modal 
    $(".modal-wrap").hide();
    
    $(".sub-notice > li:first").click(function() {
        $(".modal-wrap").show();
    })
    $(".btn > button").click(function() {
        $(".modal-wrap").hide();
    })
});
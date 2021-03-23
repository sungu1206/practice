$(document).ready(function() {
    //nav
    
    $(".sub-menu").hide();
    $(".main-menu > li > a").mouseenter(function() {
        $(".sub-menu").stop().slideDown(300);    
    })
    $(".sub-menu > nav").mouseleave(function() {
        $(".sub-menu").stop().slideUp(300);
    })
    
    //slide
    
    let counter = 0;
    const imgs = $(".slider > .slide > a > img").length;
    const size = $(".slider > .slide > a > img").width();
    
    setInterval(function() {
        const operator = counter === imgs ? (counter = 0) : counter++;
        
        if(counter === imgs) {
            counter = 0;
            $(".slider > .slide").css("transition", "none");
            $(".slider > .slide").css("transform", "translateX("+(-size * counter)+"px)");
        }else{
            $(".slider > .slide").css("transition", "0.4s");
            $(".slider > .slide").css("transform", "translateX("+(-size * counter)+"px)");
        }
    }, 3000)
    
    $(".modal").hide();
    $(".sub-notice > li > ul > li:first").click(function() {
        $(".modal").show();
    });
    $(".btn > button").click(function() {
       $(".modal").hide(); 
    });
});
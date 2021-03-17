$(document).ready(function() {
    $("nav > .main-menu > li").mouseenter(function() {
        $(".sub-menu").stop().slideDown(200);
    });
    
    $("nav > .main-menu > li").mouseleave(function() {
        $(".sub-menu").stop().slideUp(200);
    });
    
    let counter = 0;
    let size = $(".slide img").height();
    let img = $(".slide > .images > img");
    
    setInterval(function() {
        counter++;
        console.log(counter);
        console.log($(img).length)
        if(counter === $(img).length) {
            counter = 0;
            $(".images").css("transition", "none");
            $(".images").css("transform", "translateY("+(-size * counter)+"px)");
        }else{
            $(".images").css("transition", "0.4s");
            $(".images").css("transform", "translateY("+(-size * counter)+"px)");
        }
    }, 3000);
});


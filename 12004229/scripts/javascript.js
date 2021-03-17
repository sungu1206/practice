$(document).ready(function() {
    $("nav > .main-menu > li").mouseenter(function() {
        $(".sub-menu").stop().slideDown(200);
    });
    
    $("nav > .main-menu > li").mouseleave(function() {
        $(".sub-menu").stop().slideUp(200);
    });
    
    let counter = 0;
    
    setInterval(function() {
        counter++;
        console.log(counter);
        
        if(counter === $(".slide").children().length) {
            counter = 0;
        }else {
            
        }
    }, 3000);
    console.log($(".item").width())
});


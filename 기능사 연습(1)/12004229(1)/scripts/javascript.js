$(document).ready(function() {
    //nav
        $("nav > ul > li").mouseenter(function() {
           $(".sub-menu").stop().slideDown(200);
        });
        $("nav > ul > li").mouseleave(function() {
           $(".sub-menu").stop().slideUp(200);
        });
    
    //slide
        let counter = 0;
    setInterval(function() {
        const slide = $(".slider > .slide > .item");
        const slideImg = $(".slider > .slide > .item > img").height();
        const sliderImgs = $(".slider > .slide > .item > img").length;
        
        counter++;
        
        if(counter === sliderImgs) {
            counter = 0;
            $(slide).css("transition", "none");
            $(slide).css("transform", "translateY("+(-slideImg * counter)+"px)");
        }else{
            $(slide).css("transition", "0.4s");
            $(slide).css("transform", "translateY("+(-slideImg * counter)+"px)");
        }
    }, 3000);
    
    //tab
        const tabBtn = $(".notice > span > a");
        const tabCont = $(".notice > ul");
        
        tabCont.hide().eq(0).show();
    
        $(tabBtn).click(function() {
            const target = $(this);
            const index = target.index();
            tabBtn.removeClass("active");
            target.addClass("active");
            tabCont.css("display", "none");
            tabCont.eq(index).css("display", "flex");
        });
    //modal
        $(".notice > .sub-notice > li:first").click(function() {
            $(".modal").css("display", "block");
        })
        $(".modal > .btn > button").click(function() {
            $(".modal").css("display", "none");
        })
});
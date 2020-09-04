$(function () { 
    $(".backtop").on("click",function(){
        $('html ,body').animate({scrollTop : 0},1000);
    });


    window.addEventListener("scroll",function () {
        if(document.documentElement.scrollTop > 400 ){
            $(".backtop").addClass("show");
            $("#menuTop").addClass("sticky");
        }
        else{
            $(".backtop").removeClass("show");
            $("#menuTop").removeClass("sticky");
        }
    });


    $(".toggleMXH").on("click",function(){
        $(".goMXH").toggleClass("active");
    });
});

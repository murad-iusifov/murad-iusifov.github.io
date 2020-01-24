$(".menu_button").on("click", function(){
    $(".menu").toggleClass("menu_active");
});

$(".menu_button").on("click", function(){
    $(this).toggleClass("menu_button-active");
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 1,
        margin : 3,
        loop : true,
        nav : true,
        autoplay : true,
        autoplayTimeout : 3000,
        /*autoplayHoverPause : true*/
    });
});

$(function($){
	$('[name="phone"]').mask("+7(999) 999-99-99");
});
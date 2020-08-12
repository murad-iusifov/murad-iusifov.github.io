$('.slider_dots').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    asNavFor: '.slider',
});

$(function(){
    $('.slider').slick({
        slidesToShow: 3,
        prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
        centerMode: true,
        centerPadding: '60px',
        infinite: true,
        asNavFor: '.slider_dots',
    });
});
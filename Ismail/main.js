$(function(){

    $('.book .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        dots: false
    });

    $('.slider').slideUp();

    $('.book .info').on('click', function(){

        $(this).siblings('.slider').slideToggle();

    });

});
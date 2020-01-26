$(function(){

    $('.map-icon').on('click', function(){
        $(this).toggleClass('active');
    });

    $('.popup-map').hide();

    $('.map-descr').on('click', function(){
        $('html').css('overflow', 'hidden');
        $('.form__wrapper').css('display', 'none');
        $('footer').css('display', 'none');
        $('.popup-map').show();
    });

    $('.exit').on('click', function(){
        $('html').css('overflow', 'visible');
        $('.form__wrapper').css('display', 'block');
        $('.form__wrapper').css('display', 'flex');
        $('.popup-map').hide();
    });

});
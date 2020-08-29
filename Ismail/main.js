$(function(){

    document.querySelectorAll('.book').forEach((book) => {

        book.querySelectorAll('.item').forEach((el, i) => {

            el.prepend(document.createElement('h3').innerText = ++i)

        })
    })

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
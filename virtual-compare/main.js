$('.virtual_compare .slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
    nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
    infinite: false,
    responsive: [
        {
        breakpoint: 1100,
        settings: {
            slidesToShow: 3
            }
        },
        {
        breakpoint: 830,
        settings: {
            slidesToShow: 2
            }
        },
        {
        breakpoint: 570,
        settings: {
            slidesToShow: 1
            }
        }
    ]

});

$('.options_item > .cont').slideUp();

$('.options_item h3').on('click', function() {
        
    $(this).siblings('.cont').slideToggle();

});

let categoriesWidth = $(".virtual_compare .top_part .categories").width();

function showCategoryArrows () {
    if ($('.virtual_compare .top_part .categories ul').width() > categoriesWidth) {

        $(".virtual_compare .top_part .categories_wrap .arrow").addClass('visible');
    
    }
    else {
    
        $(".virtual_compare .top_part .categories_wrap .arrow").removeClass('visible');
    
    }
}

showCategoryArrows();

$(".virtual_compare .top_part .categories_wrap .arrow.right").on("click", function () {

    $(".virtual_compare .top_part .categories").scrollLeft(categoriesWidth);

});

$(".virtual_compare .top_part .categories_wrap .arrow.left").on("click", function () {

    $(".virtual_compare .top_part .categories").scrollLeft(0);

});
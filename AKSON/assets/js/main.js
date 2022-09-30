$(function () {

    $('.index_slider .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.our_catalog .slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.our_actions .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.certificates .slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.our_works .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.clients_reviews .slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.video_reviews .slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.catalog .by_type .slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.contacts_banner .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        dots: false,
        fade: true,
        cssEase: 'linear',
        speed: 600,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.why_we .card').each(function (index) {
        $(this).find('.count').text(index + 1);
    });

    // гамбургер меню
    $('.hamburger').on('click', function () {
        $(this).toggleClass('active');
        $('header .menu').toggleClass('active');
    });

    // меню при ресайзе
    let mobile = false;
    let headerBottom = $('.header_bottom');

    if ($(window).width() < 1301) {

        mobile = true;
        $('header .menu').append(headerBottom);
        $('.menu>ul>li .drop_sign').addClass('clickMe');
        $('.menu .drop').slideUp();
        $('.menu>ul>li .drop_sign.clickMe').on('click', function () {
            $(this).toggleClass('clicked');
            $(this).closest('li').find('.drop').slideToggle();
        });
        
    } else {
        $('header').after(headerBottom);
    }

    $(window).on('resize', function () {
        if ($(window).width() < 1301 && !mobile) {
            mobile = true;
            $('header .menu').append(headerBottom);
        }

        if ($(window).width() >= 1300 && mobile) {
            mobile = false;
            $('header').after(headerBottom);
            $(this, 'header .menu').removeClass('active');
            $('.menu .drop').removeAttr('style');
            $('.menu>ul>li .drop_sign').removeClass('clickMe');
            $('.menu>ul>li .drop_sign').removeClass('clicked');
        }
    });

    // popup template
    function popup(name) {
        $('.popup-' + name).fadeIn();
        $('.overlay').fadeIn();
    }

    $(document).on("click", '.overlay, .popupClose, .popup-applicationSent button', function () {
        $('.popup').fadeOut();
        $('.overlay').fadeOut();
    });

    $(document).on("click", '.ceiling_cost._withPopup .aksBtn2', function (e) {
        e.preventDefault();
        popup('ceilingCost');
    });

    $(document).on("click", '.clients_reviews .card', function (e) {
        e.preventDefault();
        var identificator = $(this).attr('data-reviewdId');
        $('.overlay').fadeIn();
        $(`.popup.${identificator}`).fadeIn();
    });

    $('.certificates .img a[download]').on('click', function(e) {
        var thisHref = $(this).attr('download')
        $(this).attr({
            target: '_blank',
            href: thisHref
        });
    });

    // Кнопка скролла вверх

    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.goToTop_btn').fadeIn();
        } else {
            $('.goToTop_btn').fadeOut();
        }
    });

    $('.goToTop_btn').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    // contacts page
    $('.contacts .requisites').on('click', function() {
        $('.contacts_title i').toggleClass('open');
        $('.requisites ul').slideToggle();
    });

    // select
    $('.select .visual_part').on('click', function () {
        $(this).siblings('.list').slideToggle();
        $(this).toggleClass('opened');
    });
    
    $('.select .list a').on('click', function (e) {
        e.preventDefault();
        a = $(this).text();
        $(this).closest('.select').find('.visual_part span').text(a)
        $(this).parents('.list').slideToggle();
    });


});
$(function () {

    /*$('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
            breakpoint: 1281,
            settings: {
                slidesToShow: 3
                }
            },
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
                }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
                }
            },
            {
            breakpoint: 510,
            settings: {
                slidesToShow: 1
                }
            }
        ]
    });*/

    $('.banner .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
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

    $('.clients_reviews:not(.only_slider) .slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.clients_reviews.only_slider .slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
                breakpoint: 991,
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

    $('.works_slider .slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
                breakpoint: 991,
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

    $('.works_inner .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.other_works .slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
                breakpoint: 991,
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

    $('.comparison  .slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

    $('.doors_page .main_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
        dots: true,
        infinite: true,
        autoplay: true,
        asNavFor: '.doors_page .vertical_slider',
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 510,
            settings: {
                arrows: false
            }
        }]
    });

    $('.doors_page .vertical_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerPadding: "30px",
        infinite: true,
        vertical: true,
        swipe: false,
        touchMove: false,
        asNavFor: '.doors_page .main_slider',
        autoplaySpeed: 5000
    });

    // гамбургер меню
    $('.hamburger').on('click', function () {
        $(this).toggleClass('active');
        $('header .menu').toggleClass('active');
    });

    //menu drop
    $('.menu .drop').closest('li').append('<div class="dropArrow"><i></i></div>');
    $('.dropArrow').on('click', function () {
        $(this).closest('li').toggleClass('active');
        $(this).siblings('.drop').slideToggle();
    });

    // меню при ресайзе
    let mobile = false;
    let headerBtns = $('header .btns');
    let callWrap = $('.callWrap');

    if ($(window).width() < 1241) {

        mobile = true;
        $('header .menu .container').append(headerBtns);
        $('header .menu .container').append(callWrap);
        $('.menu .drop').slideUp();
    } else {
        $('header .top').append(headerBtns);
        $('header .top').append(callWrap);
        $('.menu .drop').removeAttr('style');
        $('.menu li.active').removeClass('active');
    }

    $(window).on('resize', function () {
        if ($(window).width() < 1241 && !mobile) {
            mobile = true;
            $('header .menu .container').append(headerBtns);
            $('header .menu .container').append(callWrap);
            $('.menu .drop').slideUp();
        }

        if ($(window).width() >= 1240 && mobile) {
            mobile = false;
            $('header .top').append(headerBtns);
            $('header .top').append(callWrap);
            $(this, 'header .menu').removeClass('active');
            $('.menu .drop').removeAttr('style');
            $('.menu li.active').removeClass('active');
        }
    });

    //menu on scroll
    let siteTop = document.querySelector('.site-top').offsetHeight;

    window.addEventListener('scroll', function (e) {

        if (siteTop && window.pageYOffset > siteTop) {
            document.querySelector('header').classList.add('scrolling')
        } else {
            document.querySelector('header').classList.remove('scrolling')
        }

    });

    //banner dots
    let bannerDots = document.querySelector('.banner .slider .slick-dots');

    if (bannerDots) {
        document.querySelector('.banner .container').append(bannerDots)
    }

    //header calc button
    $('header .calc').on('click', function () {
        $('header .calc ul').slideToggle();
    });

    //faq card
    $('.faq_card .icon').on('click', function () {
        if ($(this).closest('.faq_card').hasClass('open')) {
            $(this).closest('.faq_card').removeClass('open');
        } else {
            $('.faq_card').removeClass('open');
            $(this).closest('.faq_card').toggleClass('open');
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

    $(document).on("click", '.free-measurement', function () {
        popup('measurement');
    });

    $(document).on("click", '.getBonus', function () {
        popup('getBonus');
    });

    $(document).on("click", '.free-call', function () {
        popup('callOrder');
    });

    $(document).on("click", '.favorable_prices .card .orderBtn', function () {
        popup('sales');
    });

    $(document).on("click", '.saleInfo', function () {
        popup('saleInfo');
    });

    $(document).on("click", '.free_consultation form button, .popup-callOrder button', function (e) {
        e.preventDefault();
        $('.popup').fadeOut();
        popup('applicationSent');
    });

    $(document).on("click", '.give_feedback .btn', function (e) {
        e.preventDefault();
        popup('feedbackBtn');
    });

    $(document).on("click", '.sendingInfo.btn', function (e) {
        e.preventDefault();
        popup('sendingInfo');
    });

    $(document).on("click", '.windows_price .card .btn, .comparison .btn, .plastic_doors .card .btn, .doors_card .btn, .loggia_balconies .card .btnWhite', function (e) {
        e.preventDefault();
        popup('exactlyСalc');
    });














    $(document).on("click", '.text-register span', function () {
        popup('register');
        $('.popup-auth').fadeOut();
    });


    $(document).on("click", '.login-text span', function () {
        $('.popup').fadeOut();
        $('.overlay').fadeOut();
        $.fancybox.close();

        popup('auth');

        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
    });


    // Switches
    document.querySelectorAll('[data-switch]').forEach(switchBtn => {

        switchBtn.addEventListener('click', function () {

            document.querySelectorAll('[data-switch]').forEach(item => item.classList.remove("active"));

            document.querySelectorAll('[data-switched]').forEach(item => item.classList.remove("active"));

            let s = this.getAttribute("data-switch");

            this.classList.add("active");

            document.querySelector('[data-switched=' + s + ']').classList.add("active");

        });

    });

    // input phone mask
    [].forEach.call(document.querySelectorAll('.mi_PhoneMask'), function (input) {
        let keyCode;

        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = "+7 (___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                newValue = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                });
            i = newValue.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                newValue = newValue.slice(0, i);
            }
            let reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}";
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = newValue;
            if (event.type == "blur" && this.value.length < 5) this.value = "";
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);
    });

    $('.card').on('click', function () {
        $(this).find('.card_popup').fadeIn();
    });

    $('.card .card_popup .popupClose').on('click', function (e) {
        e.stopPropagation();
        $(this).closest('.card_popup').fadeOut();
    });

    $('.select .visual_part').on('click', function () {
        $(this).siblings('.list').slideToggle();
    });

    $('.select .list a').on('click', function (e) {
        e.preventDefault();
        a = $(this).text();
        $(this).closest('.select').find('.visual_part span').text(a)
        $(this).parents('.list').slideToggle();
    });


});
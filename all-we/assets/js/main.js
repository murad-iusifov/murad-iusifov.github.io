$(function(){

    $('.s lider').slick({
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
    });

    $('.product_img .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><i></i><i></i></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><i></i><i></i></div>',
        infinite: true
    });

    $('.user_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span></span><span></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span></span><span></span></div>',
        infinite: false,
        responsive: [
            {
            breakpoint: 1800,
            settings: {
                slidesToShow: 4
                }
            },
            {
            breakpoint: 1630,
            settings: {
                slidesToShow: 3
                }
            },
            {
            breakpoint: 1330,
            settings: {
                slidesToShow: 2
                }
            },
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
                }
            },
            {
            breakpoint: 1050,
            settings: {
                slidesToShow: 2
                }
            },
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 4
                }
            },
            {
            breakpoint: 830,
            settings: {
                slidesToShow: 3
                }
            },
            {
            breakpoint: 650,
            settings: {
                slidesToShow: 2
                }
            }
        ]
    });

    // Switch blocks
    document.querySelectorAll('[data-switch]').forEach(switchBtn => {

        switchBtn.addEventListener('click', function(){
            
            document.querySelectorAll('[data-switch]').forEach(item => item.classList.remove("active"));
    
            document.querySelectorAll('[data-switched]').forEach(item => item.classList.remove("active"));
    
            let s = this.getAttribute("data-switch");
    
            this.classList.add("active");
    
            document.querySelector('[data-switched='+ s +']').classList.add("active");
    
        });
    
    });

    //user subscribe button
    $('.subscribe').on('click', function(){
        $(this).toggleClass('subscribed');
    });

    // добавление публикации
    $('.add_publication input').on('input', function () {
        $(this).closest('form').find('.write_message').addClass('writing');
    })

    $('.add_publication [type="reset"]').on('click', function(){
        $(this).closest('.write_message ').removeClass('writing');
    });

    // настройки публикации
    $('.publication_redact .options_btn').on('click', function(){
        $(this).closest('.publication_redact').find('.options').toggle();
    });

    // иконки под публикацей
    $('.publication_infoPanel .element').on('click', function(){
        $(this).toggleClass('choosed');
    });

    // menu2 - located in header.
    $('.menu2 .catalog_btn').on('click', function(){
        $('.menu2 ul').slideToggle();
    });

    // гамбургер меню
    $('header .hamburger').on('click', function(){
        $(this).toggleClass('active');
        $('header .menu').toggleClass('active');
    });

    // меню при ресайзе
    let mobile = false;
    let nouteDesc = false;
    let auth = $('.header_auth');

    if ($(window).width() < 1301) {

        nouteDesc = true;

    }

    if ($(window).width() < 992) {

        mobile = true;
        $('header .menu').append(auth);

    }



    $(window).on('resize', function () {

        if ($(window).width() < 1301 && !nouteDesc) {

            nouteDesc = true;

        }
        
        if ($(window).width() >= 1300 && nouteDesc) {
            nouteDesc = false;
            $('header .menu').removeClass('active');
            $('.menu2 ul').removeAttr('style');
        }

        if ($(window).width() < 992 && !mobile) {

            mobile = true;

            $('header .menu').append(auth);

        }

        if ($(window).width() >= 991 && mobile) {
            
            mobile = false;

            $('.header_bottom').append(auth);
        }    

    });





    $('.filter .show_all').on('click', function(){

        $(this).siblings('.inner').addClass('open');
        $(this).siblings('.filter_search').addClass('open');
        $(this).siblings('.hide').css('display', 'block');
        $(this).css('display', 'none');

    });

    $('.filter .hide').on('click', function(){

        $(this).siblings('.inner').removeClass('open');
        $(this).siblings('.filter_search').removeClass('open');
        $(this).siblings('.show_all').css('display', 'block');
        $(this).css('display', 'none');

    });

    /*function checkListHeight () {

        document.querySelectorAll('.collection_list .inner').forEach((list) => {

            if(list.offsetHeight < 60) {

                list.siblings('.all').style.display = 'none';
        
            }

        });
    
    }

    checkListHeight();*/


    $('.collection_list .all').on('click', function(){

        $(this).siblings('.inner').addClass('_show_all');

    });

    $('.filters_button').on('click', function(){

        $('aside._filter').toggleClass('open');

    });

    // SELECT
    $('.select .visual_part').on('click', function () {
        $(this).siblings('.list').slideToggle();
    });
      
    $('.select .list a').on('click', function (e) {
        e.preventDefault();
        a = $(this).text();
        $(this).closest('.select').find('.visual_part span').text(a)
        $(this).parents('.list').slideToggle();
    });

    // Модалка
    document.querySelectorAll("[data-btn]").forEach(item => {

        item.addEventListener('click', function(){

            document.body.style.overflow = "hidden";

            let dataValue = this.getAttribute("data-btn");

            let modal = document.querySelector('.' + dataValue)

            modal.style.display = 'flex';

        });

    });

    document.querySelectorAll('.modal').forEach(function(item){
        
        item.addEventListener('click', function(e){

            if(e.target === this || e.target.classList.contains('close')){

                document.body.style.overflow = "visible";
                this.style.display = "none";

            }

        });
        
    });

    // wrappers_page hamburger

    $('.wrappers_page .blocks_wrapper:not(.open)').slideUp();

    $('.series_wrapper .hamburger').on('click', function() {

        $(this).toggleClass('active');

        $(this).closest('.series_wrapper').find('.blocks_wrapper').slideToggle();

    });

    // wrappers-block toggle

    $('.wrappers_block:not(.open) .cards').slideUp();

    $('.wrappers_block .collapse').on('click', function() {

        $(this).closest('.wrappers_block').toggleClass('open');

        $(this).closest('.wrappers_block').find('.cards').slideToggle();

    });

    // video
    document.querySelectorAll('.video_card .video_wrapper .player_btn').forEach(startVideo => {

        startVideo.addEventListener('click', function (e) {
            e.stopPropagation()
            startVideo.closest('.video_wrapper').classList.add("playing");
            play(startVideo.previousElementSibling)
        });

    })

    document.querySelectorAll('.video_card .video_wrapper').forEach(videoPlayer => {

        let video = videoPlayer.querySelector('video')

        videoPlayer.addEventListener('click', function () {

            if(videoPlayer.classList.contains('playing')){
                
                videoPlayer.classList.remove("playing");

                pause(video)

            }
            
        });

    })

    function play(video) {
        video.play();
    }

    function pause(video) {
        video.pause();
    }

    // cookie
    let firstStyle = document.querySelector('style')

    console.log(firstStyle.innerHTML)

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : null;
    }

    function setCookie(name, value, options = {}) {

        options = {
            path: '/',
            // при необходимости добавьте другие значения по умолчанию
            ...options
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
        
    }

    

    function deleteCookie(name) {
        setCookie(name, "", {
            'max-age': -1
        })
    }

    let themeBtn = document.querySelector('.theme')

    if(themeBtn){

        themeBtn.addEventListener('click', () => {

            if(getCookie('themeSwitcher')){
                deleteCookie('themeSwitcher')
            }else{
                setCookie('themeSwitcher', {'max-age': 3600 * 24 * 365})
            }

            location.reload();

        })

        if(getCookie('themeSwitcher')){

            let styles = document.querySelectorAll('head style')

            if(typeof styles[styles.length - 2] !== 'undefined' && typeof styles[styles.length - 1] !== 'undefined'){

                styles[styles.length - 2].innerHTML = '/*' + styles[styles.length - 2].innerHTML + '*/';

                styles[styles.length - 1].innerHTML = styles[styles.length - 1].innerHTML.replace(/\/\*/g, '')

            }

            $(themeBtn).find('svg').eq(0).css('display', 'none');

            $(themeBtn).find('svg').eq(1).css('display', 'block');

        }else{

            $(themeBtn).find('svg').eq(0).css('display', 'block');

            $(themeBtn).find('svg').eq(1).css('display', 'none');

        }

    }


});
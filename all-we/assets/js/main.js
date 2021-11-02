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

    $('.menu2 .catalog_btn').on('click', function(){
        $('.menu2 ul').slideToggle();
    });

    // гамбургер меню
    $('.hamburger').on('click', function(){
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

        $('.catalog_page aside').toggleClass('open');

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
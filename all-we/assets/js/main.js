$(function(){

    $('.slider').slick({
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


});
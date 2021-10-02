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

    // гамбургер меню
    $('.hamburger').on('click', function(){
        $(this).toggleClass('active');
        $('header .menu').toggleClass('active');
    });

    // меню при ресайзе
    let mobile = false;
    let auth = $('.auth');

    if ($(window).width() < 993) {

        mobile = true;
        $('header .menu').append(auth);
    } else {
    
        $('.header .container').append(auth);
    }

    $(window).on('resize', function () {
        if ($(window).width() < 993 && !mobile) {
            mobile = true;
            $('header .menu').append(auth);
        }
        
        if ($(window).width() >= 992 && mobile) {
            mobile = false;
            $('header .container').append(auth);
            $(this, 'header .menu').removeClass('active');
        }
    });

    // video
    let startVideo = document.querySelector('.video_card .video_wrapper .player_btn');
    let videoPlayer = document.querySelector('#video-player');
    let video;

    if (startVideo) {
        startVideo.addEventListener('click', function () {
            document.querySelector('.video_card .video_wrapper').classList.add("playing");
        });
        startVideo.onclick = play;
    }

    if (videoPlayer) {
        videoPlayer.addEventListener('click', function () {
            document.querySelector('.video_card .video_wrapper').classList.remove("playing");
        });
        videoPlayer.onclick = pause;
        video = videoPlayer;
    }

    function play() {
        video.play();
    }

    function pause() {
        video.pause();
    }


});
$(function () {

    $('.news_slider .slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // with-project.html
    $('.with_project_card .top button').on('click', function(){
            $(this).closest('.top').toggleClass('active');
            $(this).closest('.with_project_card').find('.content').slideToggle();
    });

    // select
    $('.select .visual_part').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('.select').find('.list').slideToggle();
    });

    $('.select .list a').on('click', function (e) {
        e.preventDefault();
        a = $(this).text();
        $(this).closest('.select').find('.visual_part span').text(a)
        $(this).parents('.list').slideToggle();
        $(this).closest('.select').find('.visual_part').toggleClass('active');
    });

    //attention close

    $('.attention .close').on('click', function() {
        $(this).closest('.attention').css('display', 'none');
    })

    // гамбургер меню
    $('.hamburger').on('click', function () {
        $(this).toggleClass('active');
        $('header .menu').toggleClass('active');
    });

    // Модалка
    document.querySelectorAll("[data-btn]").forEach(item => {

        item.addEventListener('click', function(e){

            e.preventDefault();

            document.body.style.overflow = "hidden";

            let dataValue = this.getAttribute("data-btn");

            let modal = document.querySelector('.' + dataValue)

            document.querySelectorAll('.modal').forEach(function(oldModal){
        
                oldModal.style.display = "none";
                
            });

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

    document.querySelectorAll('.attention_modal .btn').forEach(function(item){

        item.addEventListener('click', function(){

            document.body.style.overflow = "visible";
            this.closest('.attention_modal').style.display = "none";

        });

    });

    // accordion
    document.querySelectorAll('.accordion_top').forEach(function(accordionTop){

        accordionTop.addEventListener('click', function(){

            this.closest('.accordion').classList.toggle('open');

        });

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


});
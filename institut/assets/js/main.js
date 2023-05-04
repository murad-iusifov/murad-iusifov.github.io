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

    // SWITCH
    document.querySelectorAll('[data-switch]').forEach(switchBtn => {

        switchBtn.addEventListener('click', function(){
            
            document.querySelectorAll('[data-switch]').forEach(item => item.classList.remove("active"));

            document.querySelectorAll('[data-switched]').forEach(item => item.classList.remove("active"));

            let s = this.getAttribute("data-switch");

            this.classList.add("active");

            document.querySelector('[data-switched='+ s +']').classList.add("active");

        });

    });
    document.querySelectorAll('[data-switch2]').forEach(switchBtn => {

        switchBtn.addEventListener('click', function(){
            
            document.querySelectorAll('[data-switch2]').forEach(item => item.classList.remove("active"));

            document.querySelectorAll('[data-switched2]').forEach(item => item.classList.remove("active"));

            let s = this.getAttribute("data-switch2");

            this.classList.add("active");

            document.querySelector('[data-switched2='+ s +']').classList.add("active");

        });

    });

    // SWITCH for "div.cost_wrapper"
    $('.cost_choose .switch_btn').on('click', function() {

        $('.cost_choose .switch_btn').removeClass('active');
        $('.cost_wrapper').removeClass('active');

        if($(this).hasClass('not_free')) {
            $('.cost_wrapper.not_free').addClass('active');
            $('.cost_wrapper.not_free .not_free').addClass('active');
        }
        else {
            $('.cost_wrapper.free').addClass('active');
            $('.cost_wrapper.free .free').addClass('active');
        }

    });

    //Карточка товара
    $('.course_card .panel_btn').on('click', function(){

        $(this).toggleClass('active');
        $(this).closest('.course_card').find('.card_panel').slideToggle();

    });
    
    $('.course_card .card_panel .open_form').on('click', function(){

        $(this).toggleClass('active');
        $(this).closest('.card_panel').find('.form_wrapper').slideToggle();

    });

    //input mask for phone
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

    // Модалка
    document.querySelectorAll("[data-btn]").forEach(item => {

        item.addEventListener('click', function (e) {

            e.preventDefault();

            document.body.style.overflow = "hidden";

            let dataValue = this.getAttribute("data-btn");

            let modal = document.querySelector('.' + dataValue)

            document.querySelectorAll('.modal').forEach(function (oldModal) {

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

    // меню при ресайзе
    if ($(window).width() < 993) {

        mobile = true;
        $('header .menu').append(auth);
    } else {
    
        $('.header .container').append(auth);
    }

    let mob_menu = document.querySelector('.header_bottom .container')
    let mob_ht = document.querySelector('.header_top')
    let m_mail = document.querySelector('header .mail');
    let m_tels = document.querySelector('header .phone');
    let m_btn = document.querySelector('header .button');
    let m_address = document.querySelector('header .logo_info');
    
    let mobile = false;
    
    
    if(this.innerWidth <= 992 && !mobile) {
    
         mobile = true;
    
         mob_menu.append(m_tels);
         mob_menu.append(m_mail);
         mob_menu.append(m_btn);
         mob_menu.append(m_address);
    
    }
    
    window.addEventListener('resize', function(){
    
         if(this.innerWidth <= 992 && !mobile) {
    
            mobile = true;
        
            mob_menu.append(m_tels);
            mob_menu.append(m_mail);
            mob_menu.append(m_btn);
            mob_menu.append(m_address);
         
         }
    
         if(this.innerWidth > 992 && mobile) {
    
              mobile = false;
    
              mob_ht.append(m_address);
              mob_ht.append(m_mail);
              mob_ht.append(m_tels);
              mob_ht.append(m_btn);
    
         }
    
    });





});
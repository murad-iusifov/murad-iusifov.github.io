$(function(){

    $('.services .slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span><i></i></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span><i></i></span></div>',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
            breakpoint: 1340,
            settings: {
                slidesToShow: 4
                }
            },
            {
            breakpoint: 1060,
            settings: {
                slidesToShow: 3
                }
            },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
                }
            },
            {
            breakpoint: 530,
            settings: {
                slidesToShow: 1
                }
            }
        ]
    });

    $('.reviews_сontent .slider').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span><i></i></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span><i></i></span></div>',
        infinite: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 3000,

    });

    $('.post_photos .slider').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span><i></i></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span><i></i></span></div>',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,

    });

    $('.video_report .slider').slick({

        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span><i></i></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span><i></i></span></div>',
        infinite: true,
        responsive: [
            {
            breakpoint: 610,
            settings: {
                slidesToShow: 2
                }
            },
            {
            breakpoint: 410,
            settings: {
                slidesToShow: 1
                }
            }
        ]

    });

    $('.certificates .slider').slick({

        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span><i></i></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span><i></i></span></div>',
        infinite: true,
        responsive: [
            {
            breakpoint: 1290,
            settings: {
                slidesToShow: 4
                }
            },
            {
            breakpoint: 1023,
            settings: {
                slidesToShow: 3
                }
            },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
                }
            },
            {
            breakpoint: 539,
            settings: {
                slidesToShow: 1
                }
            }
        ]

    });

    $('.service_descr .slider').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span><i></i></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span><i></i></span></div>'

    });

    $('.service_questions .slider').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slider_arrow arrow_left"><span><i></i></span></div>',
        nextArrow: '<div class="slider_arrow arrow_right"><span><i></i></span></div>'

    });

    // гамбургер меню
    let hamburger = document.querySelectorAll('.hamburger');

    hamburger.forEach(item =>{
        
        item.addEventListener('click', () => {
    
            item.classList.toggle('active');

            document.querySelector('header .menu').classList.toggle('active');
    
        });

    });

    // Фильтры услуг
    document.querySelectorAll('.filter h4 span').forEach(item => {

        item.addEventListener('click', () => {

            let parent = item.closest('.filter');

            let ul = parent.querySelector('ul')

            if(ul) {

                parent.classList.toggle('active');

                ul.slideToggle();

            }

        });

    });

    let filterBtn = document.querySelector('.filters_btn');

    let menuAccordeon = document.querySelector('.filters');

    if(filterBtn && menuAccordeon) {

        filterBtn.addEventListener('click', () => menuAccordeon.slideToggle());

    }

    // Переключатель блоков
    document.querySelectorAll('[data-switch]').forEach(switchBtn => {

        switchBtn.addEventListener('click', function(){
            
            document.querySelectorAll('[data-switch]').forEach(item => item.classList.remove("active"));

            document.querySelectorAll('[data-switched]').forEach(item => item.classList.remove("active"));

            let s = this.getAttribute("data-switch");

            this.classList.add("active");

            document.querySelector('[data-switched='+ s +']').classList.add("active");

        });

    });

    // Аккодеон "Цены" шаблон services
    document.querySelectorAll('.price_list .arrow_down').forEach(item => {

        item.addEventListener('click', () => {

            let thisParent = item.closest('[data-analyse]');

            if (thisParent) {

                thisParent.querySelector('.descr').slideToggle();

            }



        });

    });

    // Модалка
    document.querySelectorAll("[data-btn]").forEach(item => {

        item.addEventListener('click', function(){

            document.body.style.overflow = "hidden";

            let dataValue = this.getAttribute("data-btn");

            let modal = document.querySelector('.' + dataValue)

            if(dataValue === "appointment_form") {

                let name = item.closest("[data-analyse]") ? item.closest("[data-analyse]").querySelector("[data-servicename]") : document.querySelector("[data-servicename]");

                if(name) {

                    let input = modal.querySelector('input[name="service_name"]')
                    if(!input) {

                        input = document.createElement('input');
                        input.type = "hidden";
                        input.name = "service_name";
                        modal.querySelector("form").append(input);

                    }

                    input.value = name.innerHTML.toLowerCase();
                    modal.querySelector(".title").innerHTML = `Записаться на "${input.value}"`

                }

            }

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


});

// меню при ресайзе
let remove = {

    auth: {
        
        container: document.querySelector('header .menu'),
        element: document.querySelector('.auth'),
        base: document.querySelector('.header .container'),
        width: 992

    },



}

window.addEventListener('resize', appendTo);

function appendTo() {
    for (var el in remove) {
      if (typeof remove[el].width != "undefined" && remove[el].width && remove[el].element && remove[el].container && remove[el].base) {
        remove[el].mobileFlag = typeof remove[el].mobileFlag === "undefined" ? false : remove[el].mobileFlag;
  
        if (window.innerWidth <= remove[el].width && !remove[el].mobileFlag) {
          remove[el].mobileFlag = true;
  
          if (typeof remove[el].toContainerPrepend !== "undefined" && remove[el].toContainerPrepend) {
            remove[el].container.prepend(remove[el].element);
          } else {
            remove[el].container.append(remove[el].element);
          }
        } else if (window.innerWidth > remove[el].width && remove[el].mobileFlag) {

          remove[el].mobileFlag = false;
  
          if (typeof remove[el].toBasePrepend !== "undefined" && remove[el].toBasePrepend) {
            remove[el].base.prepend(remove[el].element);
          } else {
            remove[el].base.append(remove[el].element);
          }
        }
      }
    }
  }
  
appendTo()

Element.prototype.slideToggle = function(time, callback){

    let _time = typeof time === 'number' ? time : 400

    callback = typeof time === 'function' ? time : callback

    if(getComputedStyle(this)['display'] === 'none'){

        this.style.transition = null

        this.style.overflow = 'hidden';

        this.style.maxHeight = 0;

        this.style.display = 'block'

        this.style.transition = _time + 'ms'

        this.style.maxHeight = this.scrollHeight + 'px'

        setTimeout(() => {

            callback && callback()

        }, _time)

    }else{

        this.style.transition = _time + 'ms'

        this.style.maxHeight = 0;

        setTimeout(() => {

            this.style.transition = null

            this.style.display = 'none'

            callback && callback()

        }, _time)

    }

}
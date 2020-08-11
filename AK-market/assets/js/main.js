$(function () {

  $('.main_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
    nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  $('.popular_goods .slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
    nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
    infinite: true,
    dots: true,
    responsive: [{
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

  $('.reviews .slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
    nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
    infinite: true,
    dots: true,
    responsive: [{
        breakpoint: 1281,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.video .slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
    nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
    infinite: true,
    dots: true,
    responsive: [{
        breakpoint: 1281,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.news .slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
    nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
    infinite: true,
    dots: true,
    responsive: [{
        breakpoint: 1281,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.our_team .slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
    nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
    infinite: true,
    dots: true,
    responsive: [{
        breakpoint: 1299,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1150,
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
        breakpoint: 954,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.same_products .slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
    nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
    infinite: true,
    dots: true,
    responsive: [{
        breakpoint: 1264,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 684,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.compare_column .slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
    nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
    infinite: true,
    dots: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 980,
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

  if ($(window).width() < 769) {

    $('.drop_menu').slideUp();

    $('.menu_item').on('click', function () {

      $(this).children('.drop_menu').slideToggle();

    });

  }

  // search_by block on index page
  $('.search_by .titles a').on('click', function (e) {
    e.preventDefault();
    $(".search_by .titles a").removeClass("active");
    $(this).addClass("active");

    $(".search_by .search_parameter").removeClass("active");
    $("#" + $(this).attr("data-category")).addClass("active");
  });

  // sorting block on index page
  $('.search_parameter .sorting .top a').on('click', function (e) {
    e.preventDefault();
    $(".search_parameter .sorting .top a").removeClass("active");
    $(this).addClass("active");

    $(".search_parameter .sorting_content").removeClass("active");
    $("#" + $(this).attr("data-sorting")).addClass("active");
  });

  // brand select

  $('.select .visual_part').on('click', function () {
    $('.select .list').slideToggle();
  });

  $('.select .list div').on('click', function (e) {
    e.preventDefault();
    $('select .visual_part span').text($(this).find('a').text());
    $(this).parents('.list').slideToggle();
  });

  $('.show_all').on('click', function () {
    $(this).siblings('.slider').slick('unslick');
  });

  // отображение карточек товара в каталоге

  $('.view_variant > div').on('click', function () {

    $('.view_variant > div').removeClass('active');
    $(this).addClass('active');

    if ($('.view_variant .line').hasClass('active')) {

      $('.products .card').addClass('line');

    } else {
      $('.products .card').removeClass('line');
    }

  });

  // JQUERY IU SLIDER

  $('#range').slider({
    range: true,
    min: 0,
    max: 30000,
    values: [0, 30000],
    slide: function (event, ui) {
      $("#range_val1").val(ui.values[0]);
      $("#range_val2").val(ui.values[1]);
    }
  });
  $("#range_val1").val("$" + $("#slider-range").slider("values", 0));
  $("#range_val1").val($("#slider-range").slider("values", 1));

  // Фильтр "Каталог товаров"

  $('.header_catalog, .parameters .close').on('click', function () {
    $('aside').toggleClass('is_open');
  });

  // Фильтры в каталоге(catalog.html)

  $('.filter h3.title').on('click', function(){

    $(this).toggleClass('open')
    $(this).siblings('.inner').slideToggle();

  });

  $('.filters .close').on('click', function () {
    $('.catalog_page .filters').toggleClass('open');
  });

  $('.filters_btn button').on('click', function(){
    $('.catalog_page .filters').toggleClass('open');
  });

  // + -, Выбор количества товара

  $('.count .plus').on('click', function(){

    let plusVal = +($(this).parent('.count').children('input').val()) + 1;
    $(this).parent('.count').children('input').val(plusVal);
    
    if( plusVal > 1 ) {
      $(this).siblings('.minus').removeClass('min');
    }

  });

  $('.count .minus').on('click', function(){

    let minusVal = +($(this).parent('.count').children('input').val()) - 1;
    if( minusVal > 0 ) {
      $(this).parent('.count').children('input').val(minusVal);
    }
    
    if( minusVal == 1 ) {
      $(this).addClass('min');
    }

  });

  // product_page

  $('.product_page .mini_images .img').on('click', function(){

    $('.product_page .mini_images .img').removeClass('active');
    $(this).addClass('active');

    $('.product_page .main_img img').attr('src', $(this).children('img').attr('src'));

  });

  // Маска ввода номера телефона (плагин maskedinput)
  
  $(function($){
    $('[name="phone"]').mask("+7(999) 999-99-99");
  });

  //Comparison, sortable

  $(function(){
    $( "#goods_comparison .main_column .slick-track" ).sortable();
    $( "#goods_comparison .main_column .slick-track" ).disableSelection();
  });

  //Comparison, on hover to products

  $('#goods_comparison .for_compare').hover(function(){
    $(this).addClass('hovered')
    $(this).on('mousedown', function(){
        $(this).removeClass('hovered');
        $(this).addClass('grabbed');
    });
    $(this).on('mouseup', function(){
        $(this).removeClass('grabbed');
        $(this).addClass('hovered');
    });
  });

  //Comparison, переключение блоков

  $('.switching_block .element').on('click', function () {
    $(".switching_block .element").removeClass("active");
    $(this).addClass("active");

    $('.cabinet_wrapper > .content > span').removeClass("active");
    $("#" + $(this).attr("data-id")).addClass("active");
  });

  // mobile menu

  $('.hamburger').on('click', function () {
    $(this).toggleClass('active');
    $('.mobile_menu').toggleClass('active');
  });

  let mobileView = false
  let filtersMobile = false

  let scrolls = document.querySelectorAll('aside, .parameters .drop')

  if ($(window).width() < 1300) {

    filtersMobile = true;

    $('.catalog_page').prepend($('aside .filters'));

    scrolls.forEach((item) => {
      item.fakeScroll();
    })

    $('.parameters').addClass('mobile');
    $('.drop').slideUp();
    if ($('.parameters').hasClass('mobile')) {

      $('.parameters .parameter_title').on('click', function () {

        $(this).siblings('.drop').slideToggle();
        $(this).children('i').toggleClass('active');
        $(this).toggleClass('active');


      });

    }

  }

  if ($(window).width() < 993) {

    mobileView = true;
    $('.mobile_menu .container').append($('.header_panel'));
    $('.header .container').append($('.header_catalog'));
  } else {

    $('.header .container').append($('.header_panel'));
    $('.header_panel .bottom').prepend($('.header_catalog'));
  }

  $(window).on('resize', function (e) {

    if ($(window).width() < 1300 && !filtersMobile) {

      filtersMobile = true;
      console.log(filtersMobile);

      window.location.reload()

      $('.catalog_page').prepend($('aside .filters'));

      scrolls.forEach((item) => {
        item.fakeScroll();
      })

    } else if ($(window).width() >= 1300 && filtersMobile) {

      window.location.reload()

    }

    if ($(window).width() < 993 && !mobileView) {

      mobileView = true;
      $('.mobile_menu .container').append($('.header_panel'));
      $('.header .container').append($('.header_catalog'));
    } else if ($(window).width() >= 993 && mobileView) {

      mobileView = false
      $('.header .container').append($('.header_panel'));
      $('.header_panel .bottom').prepend($('.header_catalog'));
    }

  });

});

$(function(){

      // Модальное окно

      $('[name=user_status]').on('change', function(){
        
        $('.form_inputs > div').css('display', 'none')
        $(`.${this.value}`).css('display', 'flex')

      })

      let toOrdering = document.querySelectorAll('.to_ordering, ._reg');

      if(toOrdering.length){

        toOrdering.forEach(item => {
          item.onclick = (e) => {
            e.preventDefault();
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '17px';
            document.querySelector('.modal').style.display = 'flex';
          }
        })

      }
    
      let modalClose = document.querySelectorAll('.modal, .close')

      if(modalClose.length){

        modalClose.forEach(item => {

          item.onclick = function (e) {

            if(e.target.classList.contains('modal') || e.target.classList.contains('close') || e.target.closest('.close')){

              document.body.style.overflow = 'visible';
              document.body.style.paddingRight = '0';
              document.querySelector('.modal').style.display = 'none'

            }

          }
  

        })

      }

});
$(function(){

    $(".header_slider").slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider-dotshead',
    });

    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header_slider',
        responsive: [
          {
            breakpoint: 961,
              settings: "unslick"
          }
        ]
    });

    $(".surf-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider-map',
        responsive: [
          {
            breakpoint: 1210,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              centerMode: false,
            }
          }
        ]
    });

    $(".slider-map").slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              centerMode: true,
            }
          }
        ]
    });

    $(".holder_slider, .shop_slider").slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/arrows-right.svg" alt=""></img>',
    });


    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
    

    $(".holder_slide_info_item input").on("change", function(){
        summ = function(){
            return +($(".nights").val() * $(".summ").attr("data-night") * $(".guests").val())
        }
        $(".summ").html(summ().toFixed(0));
    });

    $(".surfboard_box_circle").on('click', function(){
      $(this).toggleClass("active");
    });

    $(".menu-btn").on("click", function(){
      $(".menu").toggleClass('active');
    });

    new WOW().init();
});
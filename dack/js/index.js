$(function(){

  $('.slider-dots').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      pagination: true,
      asNavFor: '.slider-main',
  });

  $('.slider-main').slick({
      infinite: true,
      dots: true,
      asNavFor: '.slider-dots',
      prevArrow: '<img src="img/prev.svg" class="slider-main_arrow-prev">',
      nextArrow: '<img src="img/next.svg" class="slider-main_arrow-next">'
  });

  $('.product-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      pagination: true,
      prevArrow: '<img src="img/prev.svg" class="product-slider_arrow-prev">',
      nextArrow: '<img src="img/next.svg" class="product-slider_arrow-next">',
      responsive: [
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 940,
            settings: {
              slidesToShow: 3,
            }
          },
          {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
                centerMode: true,
              }
            },
            {
              breakpoint: 585,
              settings: {
                slidesToShow: 2,
                centerMode: false,
              }
            },
            {
              breakpoint: 484,
              settings: {
                slidesToShow: 1,
                centerMode: true,
              }
            },
            {
              breakpoint: 352,
              settings: {
                slidesToShow: 1,
                centerMode: false,
              }
            }
        ]
  });

  $('.weekly-product__show-all').on('click', function(){
      $('.weekly-product__slider').slick('unslick');
  });

  $('.new-products__show-all').on('click', function(){
      $('.new-products__slider').slick('unslick');
  });

  document.querySelector('.our-partners__wrapper').fakeScroll();

  const picker = datepicker('.first-row_date-1', { 
    disableYearOverlay: true,
    startDay: 1,
    customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    format: 'dd-mm-yy'
  });

  const picker2 = datepicker('.first-row_date-2', { 
    disableYearOverlay: true,
    startDay: 1,
    customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    
  });

  const picker3 = datepicker('.first-row_date-3', { 
    disableYearOverlay: true,
    startDay: 1,
    customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    
  });


  const picker4 = datepicker('.second-row_date-1', { 
    disableYearOverlay: true,
    startDay: 1,
    customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    
  });

  const picker5 = datepicker('.second-row_date-2', { 
    disableYearOverlay: true,
    startDay: 1,
    customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    
  });

  const picker6 = datepicker('.second-row_date-3', { 
    disableYearOverlay: true,
    startDay: 1,
    customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    
  });


  const picker7 = datepicker('.third-row_date-1', { 
    disableYearOverlay: true,
    startDay: 1,
    customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    
  });

  const picker8 = datepicker('.third-row_date-2', { 
    disableYearOverlay: true,
    startDay: 1,
    customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    
  });

  const picker9 = datepicker('.third-row_date-3', { 
    disableYearOverlay: true,
    startDay: 1,
    customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    
  });
    

});
$('.profession').on('click', function(){
  $(this).addClass('active');
  $('.profession').not(this).removeClass('active');
  $('.vacancy-descr-main').css('z-index', '-1');

  if($('.vacancy_1').hasClass('active')){
    $('.vacancy-descr_1').css('z-index', '2');
    $('.vacancy-descr').not('.vacancy-descr_1').css('z-index', '0');
  }else if($('.vacancy_2').hasClass('active')){
    $('.vacancy-descr_2').css('z-index', '2');
    $('.vacancy-descr').not('.vacancy-descr_2').css('z-index', '0');
  }else if($('.vacancy_3').hasClass('active')){
    $('.vacancy-descr_3').css('z-index', '2');
    $('.vacancy-descr').not('.vacancy-descr_3').css('z-index', '0');
  }else if($('.vacancy_4').hasClass('active')){
    $('.vacancy-descr_4').css('z-index', '2');
    $('.vacancy-descr').not('.vacancy-descr_4').css('z-index', '0');
  }else if($('.vacancy_5').hasClass('active')){
    $('.vacancy-descr_5').css('z-index', '2');
    $('.vacancy-descr').not('.vacancy-descr_5').css('z-index', '0');
  }
});

const picker = datepicker('.date', { 
  disableYearOverlay: true,
  startDay: 1,
  customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  format: 'dd-mm-yy'
});
$(function(){
    $(".hamburger").click(function () {
        let menu_btn = $(this);
        window.setTimeout(function() {
            menu_btn.toggleClass('is-active');
        }, 100);
    });
    $(".hamburger").click(function () {
        window.setTimeout(function() {
            $('.mobile_menu').toggleClass('is-active');
            $('html').toggleClass('_disableScroll')
            $('.body').toggleClass('_disableScroll')
        }, 300);
    });
});

/*
      <button class="hamburger hamburger--emphatic" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button> 
*/
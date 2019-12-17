$(function(){

    $('.menu__item').on('click', function(){
        $(this).addClass('active');
        $('.menu__item').not(this).removeClass('active');
    });

    $('.my-info').on('click', function(){
        $('.menu__item').removeClass('active');
    });

    // ( function() {

    //     document.querySelector('.container__cube').onmousemove = function(event){

    //         let rotateY = event.offsetX,
    //             rotateX = event.offsetY;

    //         document.querySelector("#offx").innerHTML = rotateY;
    //         document.querySelector("#offy").innerHTML = rotateX ;

    //         document.querySelector('.cube').style.transform = 
    //         'rotateY(' + -rotateY / 30 + 'deg)'+
    //         'rotateX(' + rotateX / 30 + 'deg)';

    //     }

    // })();

    $('.cube').addClass('rotation');

});



// document.querySelector('.cube').onmousemove = function(event){
//     event = event || window.event;
//     document.querySelector("#offx").innerHTML = event.offsetX;
//     document.querySelector("#offy").innerHTML = event.offsetY;
// }



// $('.cube').addClass('otation');


        // document.onkeydown = function (e) {
    //            if (e.keyCode === 37) rotateY -= 4
    //     else if (e.keyCode === 38) rotateX += 4
    //     else if (e.keyCode === 39) rotateY += 4
    //     else if (e.keyCode === 40) rotateX -= 4

    //     document.querySelector('.cube').style.transform = 
    //   'rotateY(' + rotateY + 'deg)'+
    //   'rotateX(' + rotateX + 'deg)';
    // } код Камиляы
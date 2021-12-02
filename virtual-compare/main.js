$('.virtual_compare .slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="slider_arrow arrow_left"><span></span></div>',
    nextArrow: '<div class="slider_arrow arrow_right"><span></span></div>',
    infinite: false,
    responsive: [
        {
        breakpoint: 1100,
        settings: {
            slidesToShow: 3
            }
        },
        {
        breakpoint: 830,
        settings: {
            slidesToShow: 2
            }
        },
        {
        breakpoint: 570,
        settings: {
            slidesToShow: 1
            }
        }
    ]

});










  $('.virtual_compare .slider').on('afterChange', function (e, slick, current, next) {
	
	let columns = document.querySelectorAll('.options_item')
	
	let setVisible = false
	
	columns.forEach(item => item.querySelectorAll('.column').forEach(el => {
		
		el.style.display = 'none'
		
		el.classList.remove('visible')
		
	}))
	
    document.querySelectorAll('.slick-slide').forEach((item, i) => {
		
		if(item.classList.contains('slick-active')){
			
			columns.forEach(item => {

				let columns = item.querySelectorAll('.column')
				
				columns[i].style.display = 'block'
				
				if(!setVisible){
					
					setVisible = true
					
					columns[i].classList.add('visible')
					
				}
			
			})
			
		}
		
	})
	
  })


















//new code from Murad

let headerHeight = $('header').height();

if ($(document).scrollTop() > headerHeight) {

	$('.virtual_compare .slider .slider_arrow').addClass('sticked');

} else {

	$('.virtual_compare .slider .slider_arrow').removeClass('sticked');

}

    
$(window).scroll(function() {

	if ($(document).scrollTop() > headerHeight) {

		$('.virtual_compare .slider .slider_arrow').addClass('sticked');

	} else {

		$('.virtual_compare .slider .slider_arrow').removeClass('sticked');

	}
});

//new code from Murad

//$('.options_item > .cont').slideUp();

$('.options_item h3').on('click', function() {
        
    $(this).siblings('.cont').slideToggle();

});

let categoriesWidth = $(".virtual_compare .top_part .categories").width();

let liArr = document.querySelectorAll('.virtual_compare .top_part .categories li');

let  catWidth = function (liAllWidth) {

    liAllWidth = 0;

    liArr.forEach((li, index) => {

        let i = index ++

        liAllWidth += liArr[i].offsetWidth

    })

    return liAllWidth;

}


function showCategoryArrows () {

    if (catWidth() > categoriesWidth) {

        $(".virtual_compare .top_part .categories_wrap .arrow").addClass('visible');
    
    }
    else {
    
        $(".virtual_compare .top_part .categories_wrap .arrow").removeClass('visible');
    
    }
    
}

showCategoryArrows();

$(".virtual_compare .top_part .categories_wrap .arrow.right").on("click", function () {

    $(".virtual_compare .top_part .categories").scrollLeft(catWidth());

});

$(".virtual_compare .top_part .categories_wrap .arrow.left").on("click", function () {

    $(".virtual_compare .top_part .categories").scrollLeft(0);

});

/*Comparison difference*/

let comparisonShow = document.querySelectorAll('[data-comparisonShow]')

comparisonShow.forEach(item => {

    item.addEventListener('click', e => {

        //e.preventDefault()

        if(!item.hasAttribute('data-comparisonDifference')){

            item.setAttribute('data-comparisonDifference', true)

        }else{

            item.removeAttribute('data-comparisonDifference')

        }

        document.querySelectorAll('[data-comparisonContainer]').forEach(container => {

            let titles = container.querySelectorAll('[data-comparisonName]');

            let values = container.querySelectorAll('[data-comparisonValue]');

            let blocks = container.querySelectorAll('[data-comparisonBlock]')

            let countTitles = titles.length

            let equalNamesValues = false

            if(titles.length === values.length){

                countTitles = titles.length / blocks.length

                equalNamesValues = true;

            }

            //container.querySelectorAll('[data-comparisonShow]').forEach(el => el.classList.remove('active'))

            //item.classList.add('active')

            if(item.hasAttribute('data-comparisonDifference')){

                for(let i = 0; i < countTitles; i++){

                    let diff = false

                    let liText = ''

                    blocks.forEach(block => {

                        let values = block.querySelectorAll('[data-comparisonValue]')

                        let text = values[i].innerText.toLowerCase().trim();

                        if(!liText){

                            liText = text;

                        }else if(liText !== text){

                            diff = true;

                        }


                    })

                    if(!diff){

                        blocks.forEach((block, index) => {

                            let values = block.querySelectorAll('[data-comparisonValue]')

                            values[i].style.display = 'none';

                            if(equalNamesValues){

                                let titles = block.querySelectorAll('[data-comparisonName]')

                                titles[i].style.display = 'none';

                            }

                        })

                        titles[i].style.display = 'none';

                    }

                }

            }else{

                container.querySelectorAll('[data-comparisonValue]').forEach(el => el.style.display = 'block');

                titles.forEach(el => el.style.display = 'block');

            }

        })

    })

})

setTimeout(() => {

    return false;

    let comparisonContainers = document.querySelectorAll('[data-comparisonContainer]')

    comparisonContainers.forEach(container => {

        let titles = container.querySelectorAll('[data-comparisonName]');

        let blocks = container.querySelectorAll('[data-comparisonBlock]')

        titles.forEach((item, i) => {

            let valuesArr = []

            let height = item.clientHeight;

            blocks.forEach(block => {

                let values = block.querySelectorAll('[data-comparisonValue]')

                if(values[i].clientHeight > height){

                    height = values[i].clientHeight

                }

                valuesArr.push(values[i])

            })

            valuesArr.forEach(el => el.style.height = height + 'px')

            item.style.height = height + 'px'

        })

    })

}, 400)

/*Comparison difference*/
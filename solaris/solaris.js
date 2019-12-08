$(document).ready(function(){

    let equipmentHolder,
        price,
        priceHolder,
        priceUsdHolder;

    equipmentHolder = $(".car_equipment");
    priceHolder = $(".car_price");
    priceUsdHolder = $(".car_priceUSD");


    equipment = '';
    price = 0;

    function calculatePrice(){
        price = parseInt($("input[name=engine]:checked").val());
        price += parseInt($("input[name=transmission]:checked").val());
        price += parseInt($("input[name=option]:checked").val());

        priceHolder.text(price + " руб.");
    }


    /*function calculatePrice(){
        price = +($("input[name=engine]:checked").val());
        price += +($("input[name=transmission]:checked").val());
        price += +($("input[name=option]:checked").val());
    }*/


    $(".car_equipment_form input").on("change", function(){
        calculatePrice();
        compileEquipment();
        calculateUsd()
    });


    function compileEquipment(){
        equipment = $("input[name=engine]:checked").parent().text();
        equipment += $("input[name=transmission]:checked").parent().text();
        equipment += $("input[name=option]:checked").parent().text();

        equipmentHolder.text(equipment);
    }


    calculatePrice();
    compileEquipment();


    let rurUsdRate = 63.04;

    calculateUsd();

    function calculateUsd(){
        let priceUsd = price / rurUsdRate;

        priceUsdHolder.text("$ " + priceUsd.toFixed(0));
    }
    
    
    /*function addSpace(nStr){
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)){
            x1 = x1.replace(rgx, '$1' + '' + $2);
        }
        return x1 + x2;
    } */


    $(".color-dot").on("click", function(){
        let imgLoc = $(this).attr("img-loc");
        $(".car_img").fadeOut(200, function(){
            $(".car_img").attr("src", imgLoc).fadeIn(200);
        });
    });


});
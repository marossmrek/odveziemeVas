(function($) {

    // variables for elements on click events
    var nextImage    = $('.next');
    var prevImage    = $('.prev');
    var carsFromList = $('.cars_list li');
    var headingCars  = $('.cars_desc_container h1');
    console.log(headingCars);

    // fadeIn after load flotila page
    $('.cars').first().hide().fadeIn(1250);

    // image slide after click on next symbol
    nextImage.on('click', function(){
        var carFirst = $('.cars').first();
        var carNext  = carFirst.next();
        var carLast  = $('.cars').last();
        carLast.after(carFirst);
        carNext.hide().fadeIn(750);
        carNext.siblings('.cars').hide();
    })

    //image slide after click on before symbol
    prevImage.on('click', function(){
        var carFirst = $('.cars').first();
        var carLast  = $('.cars').last();
        carFirst.before(carLast);
        carLast.hide().fadeIn(750);
        carLast.siblings('.cars').hide();
    })

    //remove old images set of cars a call functions to find new image set
    carsFromList.on('click', function(){

        $('.image_container').find('img').remove();
        nextImage.hide();
        prevImage.hide();

        var cartext = $(this).text();
        ajaxImage(cartext);

        for(var i =0; headingCars.length > i; i++){

            var carClickHeading = headingCars[i].innerText;

            if(carClickHeading == cartext){
                var headingShow      = headingCars[i];
                var descriptionsShow = headingShow.nextSibling;
                headingShow.style.display = 'block';
            }
        }

    })

    // function for ajax request to WP REST API, find images by model of coosen car
    function ajaxImage ( carType ) {

        $.ajax({
            method: "GET",
            url: "http://localhost/odvezieme/wp-json/wp/v2/media?per_page=50",
            dataType: "json"
        }).done(function(json){

            for(var i=0; json.length > i; i++){

                if(json[i].alt_text==carType){

                     var img = '<img class="cars show_car" src="'+json[i].source_url+'">';
                     $( ".image_container" ).prepend( img );
                }
            }
            var carFirst = $('.cars').first();
            carFirst.hide().fadeIn(750);
            nextImage.fadeIn(1000);
            prevImage.fadeIn(1000);
        });
    }


    var hamburger = $('.nav-icon1');

    hamburger.on('click', function(){

        hamburger.toggleClass('open');
        $('.nav-icon1 span').toggleClass('hamburger_open');
        $('.nav-icon1').toggleClass('hamburger_animation');
        $('.main_menu').toggleClass('main_menu_animation');

    })

    var firstHeader = $('.wells h1').first();
    var othersHeader = firstHeader.siblings();
    othersHeader.hide();
    setInterval(function(){
        var descriptionsHeader = $('.wells h1');
        descriptionsHeader.hide();
        var lastHeader  = descriptionsHeader.last();
        lastHeader.prependTo($('.wells'));
        lastHeader.fadeIn(750);
    }, 5000);

    window.addEventListener("load", function (event) {

        // first car fadeIn after load flotila page
        var carFirst = $('.cars').first();
        carFirst.fadeIn(750);

        setTimeout(function () {
           $('html').fadeIn(1000);
        }, 2000);
        $('#amount').val('Zvolte si mesto');
    })


    //slider
    var cesko     = $('path#cz');
    var madarsko  = $('path#hu');
    var slovensko = $('path#sk');
    var nemecko   = $('path#de');
    var taliansko = $('path#it');
    var rakusko   = $('path#at');

    var loadMalo    = $('.city_price').find('.load_show_price').find('.load_less');
    var loadViac    = $('.city_price').find('.load_show_price').find('.load_more');
    var loadnajviac =  $('.city_price').find('.load_show_price').find('.load_most');

    function maps ( stat, mestoBod ){
        stat.addClass('select_city');
        stat.siblings().removeClass('select_city');
        $('.point').hide();
        mestoBod.fadeIn(2000);
        $('#svg_1').fadeIn(500);
    }

/*
    function ajaxReq (){
        var parse="";
            $.ajax({
                method: "GET",
                url: "cennik",
                dataType: "html"
            }).done(function(html){
                parse = $($.parseHTML(html));
            });
        return parse;
    }

    function setPrice ( parseD, cityPrice ) {
            console.log(parseD);
            var tablesPrice = parseD.find('.city_price').find('.cityPrice');
            var maloOsob = tablesPrice.find('.less').text();
            var viacOsob = tablesPrice.find('.more').text();
            var velaOsob = tablesPrice.find('.most').text();

            loadMalo.text(maloOsob);
            loadViac.text(viacOsob);
            loadnajviac.text(velaOsob);
    }
*/
    function ajaxreq ( cityPrice ){

            $.ajax({
                method: "GET",
                url: "cennik",
                dataType: "html"
            }).done(function(html){
                var parse = $($.parseHTML(html));
                var tablesPrice = parse.find('.city_price').find(cityPrice);
                var maloOsob = tablesPrice.find('.less').text();
                var viacOsob = tablesPrice.find('.more').text();
                var velaOsob = tablesPrice.find('.most').text();

                loadMalo.text(maloOsob);
                loadViac.text(viacOsob);
                loadnajviac.text(velaOsob);
            });
    }


    $( "#slider-vertical" ).slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 8,

        slide: function( event, ui ) {

           /* var parseHTM = ajaxReq();*/

   /*         $.ajax({
                method: "GET",
                url: "cennik",
                dataType: "html"
            }).done(function(html){
                var parse = $($.parseHTML(html));
                var tablesPrice = parse.find('.city_price').find('.HU');
                var maloOsob = tablesPrice.find('.less').text();
                var viacOsob = tablesPrice.find('.more').text();
                var velaOsob = tablesPrice.find('.most').text();

                loadMalo.text(maloOsob);
                loadViac.text(viacOsob);
                loadnajviac.text(velaOsob);
            });*/

                $('.point').hide();

                   switch(ui.value){
                       case 1:
                           ui.value = 'Budapest';
                           maps(madarsko, $('path#svg_18') );
                           ajaxreq('.Budapest');
                           break;
                       case 2:
                           ui.value = 'Praha';
                           maps( cesko, $('path#svg_15') );
                           ajaxreq('.Praha');
                           break;
                       case 3:
                           ui.value = 'Mnichov';
                           maps(nemecko, $('path#svg_21') );
                           ajaxreq('.Mnichov');
                           break;
                       case 4:
                           ui.value = 'Brno';
                           maps(cesko, $('path#svg_11') );
                           ajaxreq('.Brno');
                           break;
                       case 5:
                           ui.value = 'Kosice';
                           maps(slovensko, $('path#svg_7') );
                           ajaxreq('.Kosice');
                           break;
                       case 6:
                           ui.value = 'Vieden';
                           maps(rakusko, $('path#svg_2') );
                           ajaxreq('.Vieden');
                           break;
                       case 7:
                           ui.value = 'Schwechat';
                           maps(rakusko, $('path#svg_8') );
                           ajaxreq('.Schwechat');
                           break;
                       case 8:
                           ui.value = 'Milano';
                           maps(taliansko, $('path#svg_24') );
                           ajaxreq('.Milano');
                           break;
                       default:
                           ui.value = 'Zvolte si mesto';
                           $('path').removeClass('select_city');
                   }

                    $( "#amount" ).val( ui.value );
        }
    });

    $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );



}(jQuery));
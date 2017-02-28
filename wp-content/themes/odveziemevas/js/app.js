(function($) {

    //more page
    var moreInfo   = $('.more_overlay');
    var moreButton = $('.btn-more');

    moreButton.on('click', function (event) {

        event.preventDefault();
        moreInfo.toggleClass('more_overlay_come');
        if( moreInfo.hasClass('more_overlay_away') ){
            moreInfo.removeClass('more_overlay_away');
            return true;
        }else{
            ajaxInfo();

        }
    })

    //counter of clients, kilometers and cars on more info page
    function counter() {
        $('div.counter').each(function() {
            var $this = $(this).find('.counter_number'),
                countTo = $(this).attr('data-count');

            $({ countNum: $this.text()}).animate({
                    countNum: countTo
                },

                {   duration: 2500,
                    easing:'linear',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
        });
    }

    function ajaxInfo (){
        $.ajax({
            method: "GET",
            url: "http://localhost/odvezieme/wp-json/wp/v2/pages?slug='viac'",
            dataType: "json"
        }).done(function(json){
            var info = json[0].content.rendered;
            moreInfo.prepend(info);
            counter();
            $('.btn-back').on('click', function(event){
                event.preventDefault();
                moreInfo.removeClass('more_overlay_come');
                moreInfo.toggleClass('more_overlay_away');
            })
        });
    }


    //just addclass form generate from contact form 7 plugin , later must change, not working normali
    $('#wpcf7-f110-p11-o1').addClass('col-md-7');

    // fadeOut alert window after showing
   /* $('.screen-reader-response').fadeOut(3000);*/

    // variables for elements on click events
    var nextImage    = $('.next');
    var prevImage    = $('.prev');
    var changeImage  = $('.arrow');
    var carsFromList = $('.cars_list li');
    var headingCars  = $('.cars_desc_container h1');

    // fadeIn after load flotila page
    $('.cars').first().hide().fadeIn(1250);

    //change image after click on next or previous symbol
    changeImage.on('click', function(){

        var carFirst = $('.cars').first();
        var carNext  = carFirst.next();
        var carLast  = $('.cars').last();

        if( $(this).hasClass('next') ) {
            carLast.after(carFirst);
            carNext.hide().fadeIn(750);
            carNext.siblings('.cars').hide();
        }
        else {
            carFirst.before(carLast);
            carLast.hide().fadeIn(750);
            carLast.siblings('.cars').hide();
        }
    })

    //remove old images set of cars a call functions to find new image set
    carsFromList.on('click', function(){

        // show select cars in list of cars
        $(this).addClass('select_car');
        $(this).siblings('li').removeClass('select_car');

        //remove old showing images
        $('.image_container').find('img').remove();
        nextImage.hide();
        prevImage.hide();

        //save text of selected car
        var cartext = $(this).text();

        // call function to show image of chossen car
        ajaxImage(cartext);

        // show heading and description of selected car
        headingCars.each(function() {
            if($(this).text() == cartext){
                var headingShow      = $(this);
                var descriptionsShow = headingShow.next();
                var allSiblingsHide  = headingShow.siblings();
                allSiblingsHide.hide();
                headingShow.fadeIn(1000);
                descriptionsShow.fadeIn(1000);
            }
        });
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

        // first car fadeIn after load flotila page and show select car in list of all cars
        var carFirst     = $('.cars').first();
        var carListFirst = $('.cars_list > li:nth-child(2)');
        carFirst.fadeIn(750);
        carListFirst.addClass('select_car');

        // change color of selected page in main navigation
        var url = window.location.href;
        $('.overlay_nav a').each(function() {
            if (url == (this.href)) {
                    $(this).addClass("active_page");
                }
            });

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

    function arrowshow(line, arrow){
        $('.to_city_arrow').hide();
        line.fadeIn(1000);
        arrow.fadeIn(2000);
    }

    function priceFinder(priceElement){
            var str = priceElement;
            var rest = str.split(" ");
            var tableMust = $('.'+rest);

            var maloOsob = tableMust.find('.less').text();
            var viacOsob = tableMust.find('.more').text();
            var velaOsob = tableMust.find('.most').text();

            loadMalo.text(maloOsob);
            loadViac.text(viacOsob);
            loadnajviac.text(velaOsob);
    }


    $( "#slider-vertical" ).slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 8,

        slide: function( event, ui ) {

                   $('.point').hide();
                   var cityArray = jQuery('.city_list li');
                   switch(ui.value){
                       case 1:
                           ui.value = cityArray[7].innerText;
                           maps(madarsko, $('path#svg_18') );
                           arrowshow($('#e8342_shape'),$('#e39_circleArc'));
                           priceFinder(cityArray[7].innerText);
                           break;
                       case 2:
                           ui.value = cityArray[6].innerText;;
                           maps( cesko, $('path#svg_15') );
                           arrowshow($('#e9980_shape'),$('#e2780_circleArc'));
                           priceFinder(cityArray[6].innerText);
                           break;
                       case 3:
                           ui.value = cityArray[5].innerText;;
                           maps(nemecko, $('path#svg_21') );
                           arrowshow($('#e14708_shape'),$('#e3092_circleArc'));
                           priceFinder(cityArray[5].innerText);
                           break;
                       case 4:
                           ui.value = cityArray[4].innerText;;
                           maps(cesko, $('path#svg_11') );
                           arrowshow($('#e15882_shape'),$('#e21_circleArc'));
                           priceFinder(cityArray[4].innerText);
                           break;
                       case 5:
                           ui.value = cityArray[3].innerText;;
                           maps(slovensko, $('path#svg_7') );
                           arrowshow($('#e5348_shape'),$('#e3_circleArc'));
                           priceFinder(cityArray[3].innerText);
                           break;
                       case 6:
                           ui.value = cityArray[2].innerText;;
                           maps(rakusko, $('path#svg_2') );
                           arrowshow($('#e24443_shape'),$('#e1098_circleArc'));
                           priceFinder(cityArray[2].innerText);
                           break;
                       case 7:
                           ui.value = cityArray[1].innerText;;
                           maps(rakusko, $('path#svg_8') );
                           arrowshow($('#e22344_shape'),$('#e1080_circleArc'));
                           priceFinder(cityArray[1].innerText);
                           break;
                       case 8:
                           ui.value = cityArray[0].innerText;;
                           maps(taliansko, $('path#svg_24') );
                           arrowshow($('#e13534_shape'),$('#e3110_circleArc'));
                           priceFinder(cityArray[0].innerText);
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
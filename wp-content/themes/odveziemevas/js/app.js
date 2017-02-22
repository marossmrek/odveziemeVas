(function($) {

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
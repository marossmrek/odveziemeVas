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
    var nemecko = $('path#de');

    function maps ( stat, mestoBod ){
        stat.addClass('select_city');
        stat.siblings().removeClass('select_city');
        mestoBod.fadeIn(2000);
        $('#svg_1').fadeIn(500);
    }

    $( "#slider-vertical" ).slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 8,

        slide: function( event, ui ) {

                $('.point').hide();

                   switch(ui.value){
                       case 1:
                           ui.value = 'Budapest';
                           maps(madarsko, $('path#svg_18') );
                           break;
                       case 2:
                           ui.value = 'Praha';
                           maps( cesko, $('path#svg_15') );
                           break;
                       case 3:
                           ui.value = 'Mnichov';
                           maps(nemecko, $('path#svg_21') );
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
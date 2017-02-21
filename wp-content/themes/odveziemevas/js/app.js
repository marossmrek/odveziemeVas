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

    $( "#slider-vertical" ).slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,

        slide: function( event, ui ) {

                $('.point').hide();
                $('#svg_1').show();

                if ( ui.value <= 50 && ui.value > 1 ){
                    ui.value = 'Budapest';
                    madarsko.addClass('select_city');
                    madarsko.siblings().removeClass('select_city');
                    $('path#svg_18').show();
                }
                else if ( ui.value >= 50 ){
                    ui.value = 'Praha';
                    cesko.addClass('select_city');
                    cesko.siblings().removeClass('select_city');
                    $('path#svg_15').show();
                }
                else {
                    ui.value = 'Zvolte si mesto';
                    $('path').removeClass('select_city');
                }

                $( "#amount" ).val( ui.value );
        }
    });
    $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );



}(jQuery));
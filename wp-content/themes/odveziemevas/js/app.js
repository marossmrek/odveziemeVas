(function($) {

    var hamburger = $('.nav-icon1');

    hamburger.on('click', function(){

        hamburger.toggleClass('open');
        $('.nav-icon1 span').toggleClass('hamburger_open');
        $('.nav-icon1').toggleClass('hamburger_animation');
        $('.main_menu').toggleClass('main_menu_animation');

    })

   /* $('a.site').on('click', function(e){
        var active = $(this);
       /!* $(this).toggleClass('active');*!/
    })*/

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



}(jQuery));
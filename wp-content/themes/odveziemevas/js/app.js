(function($) {

    var hamburger =  $('.nav-icon1');

    hamburger.on('click', function(){

        hamburger.toggleClass('open');
        $('.nav-icon1 span').toggleClass('hamburger_open');

        $('.main_menu').fadeToggle(750);


    })


}(jQuery));
<?php

// register sidebars
add_action( 'widgets_init', 'odveziem_widgets_init' );
function odveziem_widgets_init()
{
    register_sidebar( array(
        'name'          => 'Logo sidebar',
        'id'            => 'sidebar-logo',
        'description'   => 'for loading main page logo'
    ));

    register_sidebar( array(
        'name'          => 'Developer advertismant',
        'id'            => 'developer',
        'description'   => 'small widget for developer advetismant and href to his website'
    ));
}
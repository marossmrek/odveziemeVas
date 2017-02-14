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
        'name'          => 'Menu footer',
        'id'            => 'menu-footer',
        'description'   => 'for submenu in footer'
    ));
}
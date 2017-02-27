<?php

/**
 * Add scripts & styles
 */
add_filter( 'wpcf7_load_js', '__return_false' );
add_filter( 'wpcf7_load_css', '__return_false' );

wp_register_script("recaptcha_api", "https://www.google.com/recaptcha/api.js");

add_action('wp_enqueue_scripts', 'odvezieme_theme_scripts');
function odvezieme_theme_scripts()
{

    wp_enqueue_script( 'jquery-ui-slider');

    wp_enqueue_script(
        'odvezieme-app', get_template_directory_uri() . '/js/app.js',
        array( 'jquery' ), '', true
    );

    wp_enqueue_script("recaptcha_api");

    wp_enqueue_style(
        'smrek-fonts', 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&amp;subset=latin-ext'
    );

    wp_enqueue_style(
        'bootstrap-css', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
    );

    wp_enqueue_style(
        'odvezieme-style', get_stylesheet_uri()
    );
}




<?php

/**
 * Setup Theme
 */
add_action( 'after_setup_theme', 'odvezieme_setup' );
function odvezieme_setup()
{
    /**
     * Theme Support
     */
    add_theme_support( 'menus' );
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'category' );
    add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ) );
}

// Add specific CSS class by filter
add_filter( 'body_class', 'odveziem_class_names' );
function odveziem_class_names( $classes )
{
    $slug = get_post_field( 'post_name', get_post() );

    $classes = array( $slug );

    return $classes;
}


<?php

/**
 * Disable Garbage Scripts
 */
add_action('init', 'muzli_disable_garbage', 9999);
function muzli_disable_garbage()
{
    /**
     * disable emojis
     */
    remove_action( 'admin_print_styles', 'print_emoji_styles' );
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
    remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
    remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );

    // filter to remove TinyMCE emojis
    add_filter( 'tiny_mce_plugins', 'muzli_disable_emojicons_tinymce' );


    /**
     * disabled o embed
     */
    // Remove the REST API endpoint.
    remove_action('rest_api_init', 'wp_oembed_register_route');

    // Turn off oEmbed auto discovery.
    // Don't filter oEmbed results.
    remove_filter('oembed_dataparse', 'wp_filter_oembed_result', 10);

    // Remove oEmbed discovery links.
    remove_action('wp_head', 'wp_oembed_add_discovery_links');

    // Remove oEmbed-specific JavaScript from the front-end and back-end.
    remove_action('wp_head', 'wp_oembed_add_host_js');

    // Remove the REST API lines from the HTML Header
    remove_action( 'wp_head', 'rest_output_link_wp_head', 10 );


    /**
     * wp_head cleanup
     */
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'index_rel_link');
    remove_action('wp_head', 'wp_generator');
    remove_action('do_feed_rdf', 'do_feed_rdf', 10, 1);
    remove_action('do_feed_rss', 'do_feed_rss', 10, 1);
    //remove_action('do_feed_rss2', 'do_feed_rss2', 10, 1);
    //remove_action('do_feed_atom', 'do_feed_atom', 10, 1);
    remove_action('wp_head', 'feed_links_extra', 3 );
    remove_action('wp_head', 'feed_links', 2 );
    remove_action('wp_head', 'parent_post_rel_link', 10, 0);
    remove_action('wp_head', 'start_post_rel_link', 10, 0);
    remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
    remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
    remove_action('wp_head', 'noindex', 1);
    remove_action('wp_head', 'rel_canonical');

    // remove WordPress version from RSS feeds
    add_filter('the_generator', '__return_false');

    // disable admin toolbar
    //add_filter( 'show_admin_bar', '__return_false' );

    // remove type and id attributes
    add_filter('style_loader_tag', 'html5_script_style_tags');
    add_filter('script_loader_tag', 'html5_script_style_tags');
    function html5_script_style_tags($tag) {
        $tag = preg_replace('~\s+type=["\'][^"\']++["\']~', '', $tag);
        $tag = preg_replace('~\s+id=["\'][^"\']++["\']~', '', $tag);
        return $tag;
    }
}

// disable emojis in text editor
function muzli_disable_emojicons_tinymce( $plugins )
{
    if ( is_array( $plugins ) ) {
        return array_diff( $plugins, array( 'wpemoji' ) );
    }

    return array();
}


/**
 * Edit Admin Dashboard
 */
add_action( 'admin_menu', 'muzli_edit_admin_menus', 999 );
function muzli_edit_admin_menus()
{
    remove_menu_page('edit-comments.php');
    remove_submenu_page('themes.php', 'theme-editor.php');
    remove_submenu_page('plugins.php', 'plugin-editor.php');
}
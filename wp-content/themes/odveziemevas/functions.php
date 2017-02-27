<?php

/*directory to my theme folder*/
define( 'THEME_DIRECTORY', get_template_directory() );


require_once THEME_DIRECTORY .'/inc/site-settings.php';

require_once THEME_DIRECTORY.'/inc/cleanup.php';

require_once THEME_DIRECTORY.'/inc/loading_style_script.php';

require_once THEME_DIRECTORY.'/inc/shortcodes.php';

require_once THEME_DIRECTORY.'/inc/widget.php';


// contact page contact data
add_shortcode('contact-data', 'odveziem_contact_data_shortcode');
function odveziem_contact_data_shortcode($atts)
{
    $html = '<div class="col-md-5">
 
                <ul class="contact_list">
                    <li>'.$atts['meno'].'</li>
                    <li>'.$atts['telefon'].'</li>
                    <li>'.$atts['mail'].'</li>
                    <li>'.$atts['mail2'].'</li>
                </ul>
 
            </div>';

    return $html;
}

// shortcode for more info about company
add_shortcode('more-info', 'odveziem_more_info_shortcode');
function odveziem_more_info_shortcode($atts)
{
    $html = '<div class="col-md-8 col-md-offset-2 get_info">
                <p>'.$atts['info'].'</p>
            </div>';

    return $html;
}

// button shortcodes on home page
add_shortcode('button', 'makak_button_shortcode');
function makak_button_shortcode($atts){

    extract ( shortcode_atts ( array ('class' => 'more',
        'link' => '',
        'text'=> 'enter text'), $atts ) );

    $html  = '<div class="col-md-8 col-md-offset-2 my_button"><a href="'.esc_attr($link).'" class= "btn btn-'.$class.'">';
    $html .= esc_attr($text);
    $html .= '</a></div>';

    return $html;
}

// counter on more info page
add_shortcode('counter', 'makak_counter_shortcode');
function makak_counter_shortcode($atts){

    extract ( shortcode_atts ( array ('klientov' => 42,
        'aut' => 4,
        'km'=> 59800), $atts ) );

    $html  = '<div class="col-md-8 col-md-offset-2 counter_container">';
    $html .= '<div class="counter" data-count="'.$atts['klientov'].'">0</div>
              <div class="counter" data-count="'.$atts['aut'].'">0</div>
              <div class="counter" data-count="'.$atts['km'].'">0</div>';
    $html .= '</div>';

    return $html;
}
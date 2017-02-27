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
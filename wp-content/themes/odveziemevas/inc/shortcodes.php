<?php


// home page descriprtions
add_shortcode('home', 'odveziem_home_shortcode');
function odveziem_home_shortcode($atts)
{


    echo '<div class="col-md-8 col-md-offset-2">
                      <div class="wells">';
                        foreach ($atts as $description) { ?> <h1><?php print_r($description) ?></h1><?php }
    echo '</div>
                </div>
                      </div>';
}
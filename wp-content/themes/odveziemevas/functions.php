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
        'text'=> '&#8592;'), $atts ) );

    $html  = '<div class="col-md-8 col-md-offset-2 my_button"><a href="'.esc_attr($link).'" class= "btn btn-'.$class.'">';
    $html .= esc_attr($text);
    $html .= '</a></div>';

    return $html;
}

// counter on more info page
add_shortcode('counter', 'odveziem_counter_shortcode');
function odveziem_counter_shortcode($atts){

    extract ( shortcode_atts ( array ('klientov' => 42,
        'aut' => 4,
        'km'=> 59800), $atts ) );

    $html  = '<div class="col-md-8 col-md-offset-2 counter_container">';
    $html .= '<div class="counter" data-count="'.$atts['klientov'].'"><i class="fa fa-users counter_icon" aria-hidden="true"></i><span class="counter_text">'.$atts['popis_klient'].'</span><span class="counter_number">0</span></div>
              <div class="counter" data-count="'.$atts['aut'].'"><i class="fa fa-car counter_icon" aria-hidden="true"></i><span class="counter_text">'.$atts['popis_auto'].'</span><span class="counter_number">0</span></div>
              <div class="counter" data-count="'.$atts['km'].'"><i class="fa fa-tachometer counter_icon" aria-hidden="true"></i><span class="counter_text">'.$atts['popis_km'].'</span><span class="counter_number">0</span></div>';
    $html .= '</div>';

    return $html;
}

// table on price page, about price and services
add_shortcode('table', 'odveziem_table_shortcode');
function odveziem_table_shortcode($atts){

  /*  extract ( shortcode_atts ( array ('klientov' => 42,
        'aut' => 4,
        'km'=> 59800), $atts ) );*/

    $html  = '<div class="row"><div class="col-sm-10 col-sm-5">
                  <table class="city_price" style="width:100%">
                  
                    <thead>
                        <tr>
                          <th class="city_place">
                              <p>
                                <label for="amount">Odjazd z <span class="BA">Bratislavy</span>, príchod do mesta:</label>
                                <input type="text" id="amount"  value="zvol">
                              </p>
                          </th>
                        </tr>
                    </thead>
          
                  <tr>
                    <th>'.$atts['pocet_osob_1'].'<i class="fa fa-user-o" aria-hidden="true"></i></th>
                    <th>'.$atts['pocet_osob_2'].'<i class="fa fa-user-o" aria-hidden="true"></i></th> 
                    <th>'.$atts['pocet_osob_3'].'<i class="fa fa-user-o" aria-hidden="true"></i></th>
                  </tr>
                  <tbody class="load_show_price"><tr><td class="load_less"><i class="fa fa-eur" aria-hidden="true"></i></td>
                    <td class="load_more"><i class="fa fa-eur" aria-hidden="true"></i></td> 
                    <td class="load_most"><i class="fa fa-eur" aria-hidden="true"></i></td>
                  </tr></tbody>
                  <tbody class="hide_price  '.$atts['miesto8'].'"><tr><td class="less">'.$atts['budapest_malo'].'<i class="fa fa-eur" aria-hidden="true"></i></td>
                    <td class="more">'.$atts['budapest_viac'].'<i class="fa fa-eur" aria-hidden="true"></i></td> 
                    <td class="most">'.$atts['budapest_vela'].'<i class="fa fa-eur" aria-hidden="true"></i></td>
                  </tr></tbody>
                    <tbody class="hide_price  '.$atts['miesto7'].'"><tr><td class="less">'.$atts['praha_malo'].'</td>
                    <td class="more">'.$atts['praha_viac'].'</td> 
                    <td class="most">'.$atts['praha_vela'].'</td>
                  </tr></tbody>
                   <tbody class="hide_price  '.$atts['miesto6'].'"><tr><td class="less">'.$atts['mnichov_malo'].'</td>
                    <td class="more">'.$atts['mnichov_viac'].'</td> 
                    <td class="most">'.$atts['mnichov_vela'].'</td>
                  </tr></tbody>
                    <tbody class="hide_price  '.$atts['miesto5'].'"><tr><td class="less">'.$atts['brno_malo'].'</td>
                    <td class="more">'.$atts['brno_viac'].'</td> 
                    <td class="most">'.$atts['brno_vela'].'</td>
                  </tr></tbody>
                   <tbody class="hide_price  '.$atts['miesto4'].'"><tr><td class="less">'.$atts['kosice_malo'].'</td>
                    <td class="more">'.$atts['kosice_viac'].'</td> 
                    <td class="most">'.$atts['kosice_vela'].'</td>
                  </tr></tbody>
                    <tbody class="hide_price  '.$atts['miesto3'].'"><tr><td class="less">'.$atts['vieden_malo'].'</td>
                    <td class="more">'.$atts['vieden_viac'].'</td> 
                    <td class="most">'.$atts['vieden_vela'].'</td>
                  </tr></tbody>
                   <tbody class="hide_price  '.$atts['miesto2'].'"><tr><td class="less">'.$atts['schwechat_malo'].'</td>
                    <td class="more">'.$atts['schwechat_viac'].'</td> 
                    <td class="most">'.$atts['schwechat_vela'].'</td>
                  </tr></tbody>
                    <tbody class="hide_price '.$atts['miesto1'].'"><tr><td class="less">'.$atts['milano_malo'].'</td>
                    <td class="more">'.$atts['milano_viac'].'</td> 
                    <td class="most">'.$atts['milano_vela'].'</td>
                  </tr></tbody>
                   
                </table> 

                <table class="extra_price" style="width:100%">
                  <tr>
                    <th>'.$atts['sluzby_hlavicka'].'</th>
                    <th>'.$atts['cena_hlavicka'].'</th> 
                          
                  </tr>
                  <tr>
                    <td>'.$atts['sluzba1'].'</td>
                    <td>'.$atts['cena1'].'</td> 
                    
                  </tr>
                  <tr>
                    <td>'.$atts['sluzba2'].'</td>
                    <td>'.$atts['cena2'].'</td> 
                   
                  </tr>
                   <tr>
                    <td>'.$atts['sluzba3'].'</td>
                    <td>'.$atts['cena3'].'</td> 
                    
                  </tr>
                   <tr>
                    <td>'.$atts['sluzba4'].'</td>
                    <td>'.$atts['cena4'].'</td> 
                  
                  </tr>
                   <tr>
                    <td>'.$atts['sluzba5'].'</td>
                    <td>'.$atts['cena5'].'</td> 
                   
                  </tr>
                </table>
                
                </div>
                
                <div class="col-sm-2 col-sm-2">
               
                   <ul class="city_list">
                         <li><a href="#">'.$atts['miesto1'].'</a></li>
                         <li><a href="#">'.$atts['miesto2'].'</a></li>
                         <li><a href="#">'.$atts['miesto3'].'</a></li>
                         <li><a href="#">'.$atts['miesto4'].'</a></li>
                         <li><a href="#">'.$atts['miesto5'].'</a></li>
                         <li><a href="#">'.$atts['miesto6'].'</a></li>
                         <li><a href="#">'.$atts['miesto7'].'</a></li>
                         <li><a href="#">'.$atts['miesto8'].'</a></li>
                   </ul>

                   <div id="slider-vertical"></div>
             </div>';

    return $html;

}





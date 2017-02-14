<!DOCTYPE html>
<html <?php language_attributes() ?>>
<head>
    <meta charset="<?php bloginfo('charset') ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head() ?>
</head>
<body <?php body_class()?>>
<header>
    <nav class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-xs-6 col-sm-6 ms">
                        <?php dynamic_sidebar( 'sidebar-logo' ); ?>
                        <!--<a href="#"><img class="logo"  src="http://localhost/odvezieme/wp-content/uploads/2017/02/logo.png" alt="logo"></a>-->
                    </div>
                    <div class="col-xs-6 col-sm-6 ham">
                        <div class="nav-icon1">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row main_menu">
            <div class="col-md-6 col-md-offset-3 navigacia">
                <ul class="overlay_nav">
                    <?php
                    $menu = wp_get_nav_menu_items('Main menu');
                    foreach ($menu as $menu_item){?>
                    <li><a class="site" href="<?php print_r($menu_item->url);?>"><?php print_r($menu_item->title);?></a></li>
                    <?php }
                    ?>
                </ul>
            </div>
        </div>
    </nav>
</header>




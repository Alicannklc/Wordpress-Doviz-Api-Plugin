<?php

/*
Plugin Name: Napi
Plugin URI: https://github.com/Alicannklc/Wordpress-Doviz-Api-Plugin
Description: Wordpress Doviz Kuru
Version: 1.0
Author: Alicannklc
Author URI: https://alicannklc.com/
License: A "Slug" license name e.g. GPL2
 */

class DVZ_Widget extends WP_Widget {
  public function __construct() {
    $widget_ops = array(
      'classname' => 'DVZ_Widget',
      'description' => 'Doviz Api.',
    );

    parent::__construct('DVZ_Widget', 'Doviz', $widget_ops);
  }



  public function widget($args, $instance) {
    echo $args['before_widget'];



    wp_enqueue_script('Dvz_api');
    wp_enqueue_style('Dvz_style');
    wp_enqueue_style('Fonts');

    include 'public/init.php';

    echo $args['after_widget'];
  }


}


add_action('wp_enqueue_scripts', function() {

  wp_register_script('Dvz_api', plugins_url('napi/public/build/js/app.js'));

});


/*
Regşster wp_enqueue_scripts

*/

add_action('wp_enqueue_scripts', function() {
  wp_register_style('Dvz_style', plugins_url('napi/public/css/style.css'));
  wp_register_style('Fonts', 'https://use.fontawesome.com/releases/v5.2.0/css/all.css');
});

/*
Regşster Widget

*/
add_action('widgets_init', function() {
  register_widget('DVZ_Widget');
});

<?php

// includes
include_once('inc/post-types/single-page-demos.php');
include_once('inc/post-types/screenshots.php');
include_once('inc/post-types/faqs.php');
include_once('inc/post-types/cards.php');

// disable admin bar
add_filter('show_admin_bar', '__return_false');

function ippm_enqueue() {
  // enqueue font end bundles
  if (!is_admin()) {
    wp_enqueue_style('bundle-css', get_theme_file_uri('/bundles/frontend.css'));
    wp_enqueue_script('bundle-js', get_theme_file_uri('/bundles/frontend.js'), array(), false, true);
  }

  // enqueue admin bundles
  if (is_admin()) {
    wp_enqueue_style('admin-css', get_theme_file_uri('/bundles/admin.css'));
    wp_enqueue_script('admin-js', get_theme_file_uri('/bundles/admin.js'), array('wp-blocks', 'wp-block-editor', 'wp-components', 'wp-element'), false, true);
  }
}
add_action( 'wp_enqueue_scripts', 'ippm_enqueue' );

// enqueue fonts
function ippm_add_fonts() {
  wp_enqueue_style( 'ubuntu', 'https://fonts.googleapis.com/css2?family=Poiret+One&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap', false );
}
add_action( 'wp_enqueue_scripts', 'ippm_add_fonts' );

// meta info
function ippm_add_meta_tags() {
  echo '<meta name="author" content="Hasani Rogers">';
  echo '<meta name="viewport" content="width=device-width, initial-scale=1">';
  echo '<base href="/">';
  echo '<link rel="icon" href="'. get_theme_file_uri('/favicon.ico') .'">';
}
add_action('wp_head', 'ippm_add_meta_tags', '1');

// body class
function ippm_body_classes($classes) {
  global $post;

  $slug = $post->post_name;
  $classes[] = 'ippm';
  $classes[] = 'ippm--' . $slug;

  return $classes;
}
add_filter('body_class', 'ippm_body_classes');


// menus
// register_nav_menu('footer-menu', 'Social media links that appear in the footer.');

// feature images
function ippm_post_thumbnails() {
  add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'ippm_post_thumbnails' );

// title
add_theme_support( 'title-tag' );

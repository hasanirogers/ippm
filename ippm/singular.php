<?php
  wp_head();
  get_header();
?>
<main>
  <h1><?php the_title(); ?></h1>
  <section><?php the_content(); ?></section>
</main>
<?php
  get_footer();
  wp_footer();

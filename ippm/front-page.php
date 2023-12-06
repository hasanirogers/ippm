<?php
  wp_head();
  get_header();
?>
<main>
  <section data-anchor="intro">
    <div>
      <?php
        $homepage = get_posts([
          'name'      => 'home',
          'post_type' => 'page'
        ]);

        if ($homepage) {
          echo $homepage[0]->post_content;
        }
      ?>
    </div>
  </section>
  <section data-anchor="demo">
    <div>
      <h2>Demo</h2>
      <ippm-gallery-container>
        <label>
          Show:&nbsp;&nbsp;
          <select>
            <option value="all">All</option>
            <option value="nature">Nature</option>
            <option value="business">Business</option>
            <option value="animal">Animal</option>
            <option value="food">Food</option>
            <option value="beauty">Beauty</option>
          </select>
        </label>
        <ippm-gallery>
          <?php
            $cardArgs = [
              'post_type' => 'cards',
              'post_status' => 'publish',
              'posts_per_page' => 99,
              'order' => 'ASC'
            ];

            $cardLoop = new WP_Query($cardArgs);

            while ($cardLoop->have_posts()) : $cardLoop->the_post();
              $cardMeta = [
                'size'  => get_post_meta(get_the_ID(), 'size'),
                'image' => get_post_meta(get_the_ID(), 'image'),
                'group' => get_post_meta(get_the_ID(), 'group'),
              ];

              echo '<ippm-card heading="'. get_the_title() .'" image="'. $cardMeta['image'][0] .'" size="'. $cardMeta['size'][0] .'" group=\'["'. $cardMeta['group'][0] .'"]\'></ippm-card>';
            endwhile;

            wp_reset_postdata();
          ?>
        </ippm-gallery>
      </ippm-gallery-container>
    </div>
  </section>
  <section data-anchor="spd">
    <div>
      <h2>Single Page Demos</h2>
      <ippm-demo-cards>
        <?php
          $spdArgs = [
            'post_type' => 'single-page-demo',
            'post_status' => 'publish',
            'posts_per_page' => 99,
          ];

          $spdLoop = new WP_Query($spdArgs);

          while ($spdLoop->have_posts()) : $spdLoop->the_post();
            $spdURL = get_post_meta(get_the_ID(), 'url');
            echo '<ippm-demo-card heading="'. get_the_title() .'" excerpt="'. get_the_excerpt() .'" image="'. get_the_post_thumbnail_url() .'" url="'. $spdURL[0] .'"></ippm-demo-card>';
          endwhile;

          wp_reset_postdata();
        ?>
      </ippm-demo-cards>
    </div>
  </section>
  <section data-anchor="screenshots">
    <div>
      <h2>Screenshots</h2>
      <ippm-screenshots class="glide">
        <ippm-screenshots-track class="glide__track" data-glide-el="track">
          <ippm-screenshots-slides class="glide__slides">
            <?php
              $screenshotsArgs = [
                'post_type' => 'screenshots',
                'post_status' => 'publish',
                'order' => 'ASC',
                'posts_per_page' => 99
              ];

              $screenshotsLoop = new WP_Query($screenshotsArgs);

              while ($screenshotsLoop->have_posts()) : $screenshotsLoop->the_post();
                echo '<ippm-screenshot class="glide__slide" heading="'. get_the_title() .'" image="'. get_the_post_thumbnail_url() .'">'. get_the_content() .'</ippm-screenshot>';
              endwhile;
            ?>
          </ippm-screenshots-slides>
        </ippm-screenshots-track>
        <ippm-screenshots-bullets data-glide-el="controls[nav]">
          <?php
            $bulletsArgs = [
              'post_type' => 'screenshots',
              'post_status' => 'publish',
              'order' => 'ASC',
              'posts_per_page' => 99
            ];

            $index = 0;
            $bulletsLoop = new WP_Query($bulletsArgs);

            while ($bulletsLoop->have_posts()) : $bulletsLoop->the_post();
              echo '<ippm-screenshots-bullet data-glide-dir="='. $index .'">■</ippm-screenshots-bullet>';
              $index += 1;
            endwhile;
          ?>
          <ippm-screenshots-directional data-glide-dir="<">◂</ippm-screenshots-directional>
          <ippm-screenshots-directional data-glide-dir=">">▸</ippm-screenshots-directional>
        </ippm-screenshots-bullets>
      </ippm-screenshots>
    </div>
  </section>
  <section data-anchor="faqs">
    <div>
      <h2>FAQs</h2>
      <ippm-faqs>
        <?php
          $faqsArgs = [
            'post_type' => 'faqs',
            'post_status' => 'publish',
            'posts_per_page' => 99
          ];

          $faqsLoop = new WP_Query($faqsArgs);

          while ($faqsLoop->have_posts()) : $faqsLoop->the_post();
            echo '
              <details>
                <summary>'. get_the_title() .'</summary>
                '. get_the_content() .'
              </details>
            ';
          endwhile;
        ?>
      </ippm-faqs>
    </div>
  </section>
</main>
<?php
  get_footer();
  wp_footer();

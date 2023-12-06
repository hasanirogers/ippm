<body <?php echo body_class(); if (is_front_page()) echo 'data-current-anchor="intro"' ?>>
  <header>
    <section>
      <ippm-banner>
        <a href="<?php get_home_url(); ?>">
          <svg id="ippm-logo" style="enable-background:new 0 0 1024 1024; fill:#ffffff;" version="1.1" viewBox="0 0 1024 1024" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M880.3,107H143.7c-28.8,0-52.2,23.4-52.2,52.2v705.5c0,28.8,23.4,52.2,52.2,52.2h736.5  c28.8,0,52.2-23.4,52.2-52.2V159.2C932.5,130.4,909.1,107,880.3,107z M496.5,733.8H258.7v-40h237.8V733.8z M625.5,404.5l-113-63.9  l-113,63.9V157h226V404.5z" />
          </svg>
          <div>
            <h1>Interactive Posts</h1>
            <h2>IPPM: A WordPress Package Manager</h2>
          </div>
        </a>
        <ippm-nav <?php if (!is_front_page()) echo 'hidden' ?>></ippm-nav>
      </ippm-banner>
    </section>
  </header>

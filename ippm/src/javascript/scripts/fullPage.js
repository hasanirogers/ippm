import fullpage from 'fullpage.js';

const homepage = document.querySelector('body.ippm--home');
const mediaQuery = window.matchMedia('(min-width: 960px)');

if (homepage && mediaQuery.matches) {
  const fullPageInstance = new fullpage('main', {
    sectionSelector: 'main > section',
    navigation: false,
    licenseKey: 'gplv3-license',
    sectionsColor:['transparent', 'rgba(7, 152, 236, 0.2)', 'rgba(252, 108, 124, 0.2)', 'rgba(255, 0, 0, 0.2)', 'rgba(28, 255, 0, 0.2)'],
    afterLoad: (origin, destination, direction, trigger) => {
      const anchor = destination.item.getAttribute('data-anchor');
      const body = document.querySelector('body');
      const headerNav = document.querySelector('header ippm-nav');

      body.setAttribute('data-current-anchor', anchor);
      headerNav.active = anchor;
    }
  });
}

import Glide from '@glidejs/glide';

const homepage = document.querySelector('body.ippm--home');

if (homepage) {
  const glideOptions = {
    type: 'carousel',
    startAt: 0,
    focusAt: 'center',
    perView: 2,
    gap: 24,
    breakpoints: {
      769: {
        perView: 1
      },
    },
  };
  const glide = new Glide('.glide', glideOptions);

  glide.mount();
}

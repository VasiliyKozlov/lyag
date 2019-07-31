import Flickity from 'flickity';

const seviceSlider = document.querySelector('.services__slider');
const promoSlider = document.querySelector('.promo__slider');
const reviewsSlider = document.querySelector('.reviews__slider');

const flkty = new Flickity(seviceSlider, {
  // options
  cellAlign: 'left',
  contain: true
});

const flktyPromo = new Flickity(promoSlider, {
  // options
  //cellAlign: 'center',
  wrapAround: true
  //contain: true
});

const flktyReview = new Flickity(reviewsSlider, {
  cellAlign: 'left',
  contain: true
});

import Flickity from 'flickity';

var seviceSlider = document.querySelector('.services__slider');
var promoSlider = document.querySelector('.promo__slider');
var reviewsSlider = document.querySelector('.reviews__slider');

var flkty = new Flickity(seviceSlider, {
  // options
  cellAlign: 'left',
  contain: true
});

var flktyPromo = new Flickity(promoSlider, {
  // options
  //cellAlign: 'center',
  wrapAround: true
  //contain: true
});

var flktyPromo = new Flickity(reviewsSlider, {
  cellAlign: 'left',
  contain: true
});

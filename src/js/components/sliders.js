import Flickity from 'flickity';

const advantages = document.querySelector('.advantages__list');
const advantagesSlider = document.querySelector('.advantages__slider');
const seviceSlider = document.querySelector('.services__slider');
const promoSlider = document.querySelector('.promo__slider');
const reviewsSlider = document.querySelector('.reviews__slider');
const howFindSlider = document.querySelector('.salons__modal-how-find-slider');
const salonSlider = document.querySelector('.salons__videos-slider');

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

const flktySolon = new Flickity(salonSlider, {
  cellAlign: 'left',
  contain: true
});

const flktyHowFind = new Flickity(howFindSlider, {
  cellAlign: 'left',
  contain: true
});


window.onload = async function() {
  if (window.innerWidth < 740) {
    await advantages.classList.add('advantages__slider');
    return true;
  } else if (window.innerWidth < 740 && advantagesSlider.classList.contains('advantages__slider')) {
    advantagesSlider.classList.remove('advantages__slider');
  }
}.then(() => {
  new Flickity(advantagesSlider, {
    cellAlign: 'left',
    contain: true
  });
});

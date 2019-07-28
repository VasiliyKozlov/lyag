import '../styles/styles.scss';
//import '../../node_modules/flickity/dist/flickity.min.css';
import activateComponent from './handlers/activateComponent';
import activateOverflow from './handlers/activateOverflow';
import Flickity from 'flickity';

const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('.header__menu-btn');
const menuClose = document.querySelector('.menu__header-close');
var seviceSlider = document.querySelector('.services__slider');
var promoSlider = document.querySelector('.promo__slider');
//const menuClose = document.querySelector('.menu__header-close');

menuOpen.addEventListener('click', e => {
  activateComponent(menu);
  activateOverflow();
});

menuClose.addEventListener('click', e => {
  activateComponent(menu);
  activateOverflow();
});

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

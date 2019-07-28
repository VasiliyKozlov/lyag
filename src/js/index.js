import '../styles/styles.scss';
//import '../../node_modules/flickity/dist/flickity.min.css';
import './components/sliders';

import activateComponent from './handlers/activateComponent';
import activateOverflow from './handlers/activateOverflow';

const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('.header__menu-btn');
const menuClose = document.querySelector('.menu__header-close');

//const menuClose = document.querySelector('.menu__header-close');

menuOpen.addEventListener('click', e => {
  activateComponent(menu);
  activateOverflow();
});

menuClose.addEventListener('click', e => {
  activateComponent(menu);
  activateOverflow();
});

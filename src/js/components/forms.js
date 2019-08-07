import activateComponent from './../handlers/activateComponent';
const radio = document.querySelector('.radio-input');

radio.addEventListener('click', e => {
  activateComponent(e.currentTarget);
});

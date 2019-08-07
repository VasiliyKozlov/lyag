import activateComponent from './../handlers/activateComponent';
const point = document.querySelector('.order-sert__total-info-head');

point.addEventListener('click', e => {
  activateComponent(e.currentTarget.closest('.order-sert__total-info'));

  // if (e.target.classList.contains('select-sity__item')) {
  //   item.querySelector('.select-sity__label').innerHTML = e.target.innerHTML;
  // }
});

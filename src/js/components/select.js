import activateComponent from './../handlers/activateComponent';

const selectList = document.querySelectorAll('.select-sity');

selectList.forEach(item => {
  item.addEventListener('click', e => {
    activateComponent(e.currentTarget);

    if (e.target.classList.contains('select-sity__item')) {
      item.querySelector('.select-sity__label').innerHTML = e.target.innerHTML;
    }
  });
});

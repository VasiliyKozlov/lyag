import activateComponent from './../handlers/activateComponent';
const radios = document.querySelectorAll('input[type="radio"]');
const panels = document.querySelectorAll('.order-sert__tab-panel[data-tab]');

document.body.addEventListener('click', e => {
  if (!e.target.closest('.radio-input')) return;

  if (e.target.name) {
    let form = e.target.closest('form');

    form.elements[e.target.name].forEach(element => {
      if (element.checked) {
        element.closest('.radio-input').classList.add('active');
      } else {
        element.closest('.radio-input').classList.remove('active');
      }
    });

    if (e.target.name === 'typeof-sert') {
      panels.forEach(elem => {
        if (elem.dataset.tab === e.target.value) {
          elem.classList.add('active');
        } else {
          elem.classList.remove('active');
        }
      });
      console.log();
    }
  }
});

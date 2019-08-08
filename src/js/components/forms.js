import activateComponent from './../handlers/activateComponent';
const radios = document.querySelectorAll('input[type="radio"]');
const panels = document.querySelectorAll('.order-sert__tab-panel[data-tab]');
const inputNum = document.querySelector('.number-input__value');

const radioInputHandler = function(e) {
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
    }
  }
}

const numberInputHandler = (e) => {
  const action = e.target.dataset.action;  
  //if(!action) return;
  console.log(inputNum.value);
  
  switch(action) {
    case 'plus': 
      inputNum.value++;
      break;
    case 'minus': 
      if(+inputNum.value === 0) return;
      inputNum.value--;
      break;
    default: 
      return;
  }
  
  
}

document.body.addEventListener('click', e => {
  if (e.target.closest('.radio-input')) {
    radioInputHandler(e)
  }

  if (e.target.closest('.number-input')) {
    numberInputHandler(e)
  }
});



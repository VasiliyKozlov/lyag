const activateComponent = elem => {
  if (elem.classList.contains('active')) {
    elem.classList.remove('active');
  } else {
    elem.classList.add('active');
  }
};

export default activateComponent;

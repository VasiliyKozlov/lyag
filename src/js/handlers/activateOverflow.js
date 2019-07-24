const activateOverflow = () => {
  if (document.body.classList.contains('no-overflow')) {
    body.classList.remove('no-overflow');
  } else {
    body.classList.add('no-overflow');
  }
};

export default activateOverflow;

const validInput = (e, fn) => {
  if (e.target.validity.valid && fn()) e.target.classList.remove('invalid-custom-input');
  else e.target.classList.add('invalid-custom-input');
};

export default validInput;

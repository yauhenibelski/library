const saveValidResOfInput = (e, ) => {
  if (e.target.validity.valid && e.target.value) {
    this.result.firstName = e.target.value;
  }
};

export default saveValidResOfInput;

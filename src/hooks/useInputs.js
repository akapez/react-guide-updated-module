import { useState } from 'react';

const useInputs = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [IsTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const error = !valueIsValid && IsTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const valueBlurHandler = (e) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    inputValid: valueIsValid,
    hasError: error,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInputs;

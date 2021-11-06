import useInputs from '../hooks/useInputs';

const SimpleInput = () => {

  const {
    value: nameInputValue,
    inputValid: nameInputValid,
    hasError: nameError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInputs((value) => value.trim() !== '');

  const {
    value: emailInputValue,
    inputValid: emailInputValid,
    hasError: emailError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInputs((value) => value.includes('@'));

  //form valid check
  let formIsValid = false;

  if (nameInputValid && emailInputValid) {
    formIsValid = true;
  }

  const formInputHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('submitted');
    console.log(nameInputValue, emailInputValue);
    nameReset();
    emailReset();
  };

  const nameInputClass = nameError ? 'form-control invalid' : 'form-control';

  const emailInputClass = emailError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formInputHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={nameInputValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameError && <p className='error-text'>Name Required</p>}
      </div>
      <div className={emailInputClass}>
        <label htmlFor='name'>Your E-mail</label>
        <input
          type='text'
          id='email'
          value={emailInputValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailError && <p className='error-text'>E-mail must be valid!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

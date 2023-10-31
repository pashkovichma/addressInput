import { useReducer } from 'react';

const initialInputState = {
  value: '',
};

const inputStateReducer = (state, action) => {
  initialInputState = {
    value: state.value,
  }
  if (action.type === 'INPUT') {
    return { value: action.value};
  }
  if (action.type === 'BLUR') {
    return { value: state.value };
  }
  if (action.type === 'RESET') {
    return { value: '' };
  }
  return state;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
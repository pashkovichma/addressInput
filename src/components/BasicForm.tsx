import useInput from '../hooks/use-input';
import { AddressSuggestions, DaDataAddressSuggestion } from "react-dadata";
import { useState } from "react";

const isNotEmpty = (value: string) => value.trim() !== '';

const BasicForm = (props: any) => {
  const {
    value: flatOfficeValue,
    isValid: flatOfficeIsValid,
    hasError: flatOfficeHasError,
    valueChangeHandler: flatOfficeChangeHandler,
    inputBlurHandler: flatOfficeBlurHandler,
    reset: resetFlatOffice,
  } = useInput(isNotEmpty);
  const {
    value: indexValue,
    isValid: indexIsValid,
    hasError: indexHasError,
    valueChangeHandler: indexChangeHandler,
    inputBlurHandler: indexBlurHandler,
    reset: resetIndex,
  } = useInput(isNotEmpty);
  const {
    value: entranceValue,
    isValid: entranceIsValid,
    hasError: entranceHasError,
    valueChangeHandler: entranceChangeHandler,
    inputBlurHandler: entranceBlurHandler,
    reset: resetEntrance,
  } = useInput(isNotEmpty);
  const {
    value: floorValue,
    isValid: floorIsValid,
    hasError: floorHasError,
    valueChangeHandler: floorChangeHandler,
    inputBlurHandler: floorBlurHandler,
    reset: resetFloor,
  } = useInput(isNotEmpty);
  const {
    value: intercomValue,
    isValid: intercomIsValid,
    hasError: intercomHasError,
    valueChangeHandler: intercomChangeHandler,
    inputBlurHandler: intercomBlurHandler,
    reset: resetIntercom,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (flatOfficeIsValid && indexIsValid && entranceIsValid && floorIsValid && intercomIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Submitted!');
    console.log(flatOfficeValue, indexValue, entranceValue, floorValue, intercomValue);

    resetFlatOffice();
    resetIndex();
    resetEntrance();
    resetFloor();
    resetIntercom();
  };

  const flatOfficeClasses = flatOfficeHasError ? 'form-control invalid' : 'form-control';
  const indexClasses = indexHasError ? 'form-control invalid' : 'form-control';
  const entranceClasses = entranceHasError ? 'form-control invalid' : 'form-control';
  const floorClasses = floorHasError ? 'form-control invalid' : 'form-control';
  const intercomClasses = intercomHasError ? 'form-control invalid' : 'form-control';
  
  const [value, setValue] = useState<DaDataAddressSuggestion>();

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <AddressSuggestions
          token='b945591e4801a017c5d7b499b33de1902684de8b'
          inputProps={{ placeholder: "Адрес" }}
          value={value}
          onChange={setValue}
        />
        <div className={flatOfficeClasses}>
          <input
            placeholder="Квартира/ Офис"
            type='text'
            id='name'
            value={flatOfficeValue}
            onChange={flatOfficeChangeHandler}
            onBlur={flatOfficeBlurHandler}
          />
          {flatOfficeHasError && <p className="error-text">Пожалуйста, введите квартиру/ офис.</p>}
        </div>
        <div className={indexClasses}>
          <input
            placeholder="Индеск"
            type='text'
            id='name'
            value={indexValue}
            onChange={indexChangeHandler}
            onBlur={indexBlurHandler}
          />
          {indexHasError && <p className="error-text">Пожалуйста, введите индекс.</p>}
        </div>
        <div className={entranceClasses}>
          <input
            placeholder="Подъезд"
            type='text'
            id='name'
            value={entranceValue}
            onChange={entranceChangeHandler}
            onBlur={entranceBlurHandler}
          />
          {entranceHasError && <p className="error-text">Пожалуйста, введите подъезд.</p>}
        </div>
        <div className={floorClasses}>
          <input
            placeholder="Этаж"
            type='text'
            id='name'
            value={floorValue}
            onChange={floorChangeHandler}
            onBlur={floorBlurHandler}
          />
          {floorHasError && <p className="error-text">Пожалуйста, введите этаж.</p>}
        </div>
        <div className={intercomClasses}>
          <input
            placeholder="Домофон"
            type='text'
            id='name'
            value={intercomValue}
            onChange={intercomChangeHandler}
            onBlur={intercomBlurHandler}
          />
          {intercomHasError && <p className="error-text">Пожалуйста, введите домофон.</p>}
        </div>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

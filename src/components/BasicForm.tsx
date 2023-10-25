import useInput from '../hooks/use-input';
import { AddressSuggestions, DaDataAddressSuggestion } from "react-dadata";
import { useState } from "react";

const isNotEmpty = (value: string) => value.trim() !== '';

const BasicForm = (props: any) => {
  const {
    value: countryValue,
    isValid: countryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    reset: resetCountry,
  } = useInput(isNotEmpty);
  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCity,
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
    value: streetValue,
    isValid: streetIsValid,
    hasError: streetHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreet,
  } = useInput(isNotEmpty);
  const {
    value: houseValue,
    isValid: houseIsValid,
    hasError: houseHasError,
    valueChangeHandler: houseChangeHandler,
    inputBlurHandler: houseBlurHandler,
    reset: resetHouse,
  } = useInput(isNotEmpty);
  const {
    value: unitValue,
    isValid: unitIsValid,
    hasError: unitHasError,
    valueChangeHandler: unitChangeHandler,
    inputBlurHandler: unitBlurHandler,
    reset: resetUnit,
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
    value: flatValue,
    isValid: flatIsValid,
    hasError: flatHasError,
    valueChangeHandler: flatChangeHandler,
    inputBlurHandler: flatBlurHandler,
    reset: resetFlat,
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

  if (cityIsValid && countryIsValid && indexIsValid && streetIsValid && houseIsValid && unitIsValid && entranceIsValid && floorIsValid && flatIsValid && intercomIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Submitted!');
    console.log(countryValue, cityValue, indexValue, streetValue, houseValue, unitValue, entranceValue, floorValue, flatValue, intercomValue);

    resetCountry();
    resetCity();
    resetIndex();
    resetStreet();
    resetHouse();
    resetUnit();
    resetEntrance();
    resetFloor();
    resetFlat();
    resetIntercom();
  };

  const countryClasses = countryHasError ? 'form-control invalid' : 'form-control';
  const cityClasses = cityHasError ? 'form-control invalid' : 'form-control';
  const indexClasses = indexHasError ? 'form-control invalid' : 'form-control';
  const streetClasses = indexHasError ? 'form-control invalid' : 'form-control';
  const houseClasses = indexHasError ? 'form-control invalid' : 'form-control';
  const unitClasses = indexHasError ? 'form-control invalid' : 'form-control';
  const entranceClasses = entranceHasError ? 'form-control invalid' : 'form-control';
  const floorClasses = floorHasError ? 'form-control invalid' : 'form-control';
  const flatClasses = flatHasError ? 'form-control invalid' : 'form-control';
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
        <div className={countryClasses}>
          <input
            placeholder="Страна"
            type='text'
            id='name'
            value={countryValue}
            onChange={countryChangeHandler}
            onBlur={countryBlurHandler}
          />
          {countryHasError && <p className="error-text">Пожалуйста, укажите страну.</p>}
        </div>
        <div className={cityClasses}>
          <input
            placeholder="Город"
            type='text'
            id='name'
            value={countryValue}
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
          />
          {cityHasError && <p className="error-text">Пожалуйста, укажите город.</p>}
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
          {indexHasError && <p className="error-text">Пожалуйста, укажите индекс.</p>}
        </div>
        <div className={streetClasses}>
          <input
            placeholder="Улица"
            type='text'
            id='name'
            value={indexValue}
            onChange={streetChangeHandler}
            onBlur={streetBlurHandler}
          />
          {streetHasError && <p className="error-text">Пожалуйста, укажите индекс.</p>}
        </div>
        <div className={houseClasses}>
          <input
            placeholder="Дом"
            type='text'
            id='name'
            value={houseValue}
            onChange={houseChangeHandler}
            onBlur={houseBlurHandler}
          />
          {houseHasError && <p className="error-text">Пожалуйста, укажите дом.</p>}
        </div>
        <div className={unitClasses}>
          <input
            placeholder="Корпус"
            type='text'
            id='name'
            value={unitValue}
            onChange={unitChangeHandler}
            onBlur={unitBlurHandler}
          />
          {unitHasError && <p className="error-text">Пожалуйста, укажите корпус.</p>}
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
          {entranceHasError && <p className="error-text">Пожалуйста, укажите подъезд.</p>}
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
          {floorHasError && <p className="error-text">Пожалуйста, укажите этаж.</p>}
        </div>
        <div className={flatClasses}>
          <input
            placeholder="Квартира"
            type='text'
            id='name'
            value={flatValue}
            onChange={flatChangeHandler}
            onBlur={flatBlurHandler}
          />
          {flatHasError && <p className="error-text">Пожалуйста, укажите квартиру.</p>}
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
          {intercomHasError && <p className="error-text">Пожалуйста, укажите домофон.</p>}
        </div>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

import useInput from '../hooks/use-input';

function AddressForm({value}){

  const isNotEmpty = (value) => value.trim() !== '';

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
    value: postalCodeValue,
    isValid: postalCodeIsValid,
    hasError: postalCodeHasError,
    valueChangeHandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
    reset: resetPostalCode,
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
    value: blockValue,
    hasError: blockHasError,
    valueChangeHandler: blockChangeHandler,
    inputBlurHandler: blockBlurHandler,
    reset: resetBlock,
  } = useInput(isNotEmpty);
  const {
    value: entranceValue,
    hasError: entranceHasError,
    valueChangeHandler: entranceChangeHandler,
    inputBlurHandler: entranceBlurHandler,
    reset: resetEntrance,
  } = useInput(isNotEmpty);
  const {
    value: floorValue,
    hasError: floorHasError,
    valueChangeHandler: floorChangeHandler,
    inputBlurHandler: floorBlurHandler,
    reset: resetFloor,
  } = useInput(isNotEmpty);
  const {
    value: flatValue,
    hasError: flatHasError,
    valueChangeHandler: flatChangeHandler,
    inputBlurHandler: flatBlurHandler,
    reset: resetFlat,
  } = useInput(isNotEmpty);
  const {
    value: intercomValue,
    hasError: intercomHasError,
    valueChangeHandler: intercomChangeHandler,
    inputBlurHandler: intercomBlurHandler,
    reset: resetIntercom,
  } = useInput(isNotEmpty);
  let formIsValid = false;

  if (countryIsValid && cityIsValid && postalCodeIsValid && streetIsValid && houseIsValid) {
    formIsValid = true;
  }

  const countryClasses = countryHasError ? 'form-control invalid' : 'form-control';
  const cityClasses = cityHasError ? 'form-control invalid' : 'form-control';
  const postalCodeClasses = postalCodeHasError ? 'form-control invalid' : 'form-control';
  const streetClasses = streetHasError ? 'form-control invalid' : 'form-control';
  const houseClasses = houseHasError ? 'form-control invalid' : 'form-control';
  const blockClasses = blockHasError ? 'form-control invalid' : 'form-control';
  const entranceClasses = entranceHasError ? 'form-control invalid' : 'form-control';
  const floorClasses = floorHasError ? 'form-control invalid' : 'form-control';
  const flatClasses = flatHasError ? 'form-control invalid' : 'form-control';
  const intercomClasses = intercomHasError ? 'form-control invalid' : 'form-control';

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }


    resetCountry();
    resetCity();
    resetPostalCode();
    resetStreet();
    resetHouse();
    resetBlock();
    resetEntrance();
    resetFloor();
    resetFlat();
    resetIntercom();
  };
  return (
    <form 
      onSubmit={submitHandler} 
    >
      <div className='control-group'>
        <div className={countryClasses}>
          <input
            placeholder="Страна"
            type='text'
            id='name'
            defaultValue={value?.data.country || countryValue}
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
            defaultValue={value?.data.city || cityValue}
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
          />
          {cityHasError && <p className="error-text">Пожалуйста, укажите город.</p>}
        </div>
        <div className={postalCodeClasses}>
          <input
            placeholder="Индеск"
            type='text'
            id='name'
            defaultValue={value?.data.postal_code || postalCodeValue}
            onChange={postalCodeChangeHandler}
            onBlur={postalCodeBlurHandler}
          />
          {postalCodeHasError && <p className="error-text">Пожалуйста, укажите индекс.</p>}
        </div>
        <div className={streetClasses}>
          <input
            placeholder="Улица"
            type='text'
            id='name'
            defaultValue={value?.data.street || streetValue}
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
            defaultValue={value?.data.house || houseValue}
            onChange={houseChangeHandler}
            onBlur={houseBlurHandler}
          />
          {houseHasError && <p className="error-text">Пожалуйста, укажите дом.</p>}
        </div>
        <div className={blockClasses}>
          <input
            placeholder="Корпус/ строение"
            type='text'
            id='name'
            defaultValue={value?.data.block || blockValue}
            onChange={blockChangeHandler}
            onBlur={blockBlurHandler}
          />
        </div>
        <div className={entranceClasses}>
          <input
            placeholder="Подъезд"
            type='text'
            id='name'
            defaultValue={entranceValue}
            onChange={entranceChangeHandler}
            onBlur={entranceBlurHandler}
          />
        </div>
        <div className={floorClasses}>
          <input
            placeholder="Этаж"
            type='text'
            id='name'
            defaultValue={floorValue}
            onChange={floorChangeHandler}
            onBlur={floorBlurHandler}
          />
        </div>
        <div className={flatClasses}>
          <input
            placeholder="Квартира"
            type='text'
            id='name'
            defaultValue={value?.data.flat || flatValue}
            onChange={flatChangeHandler}
            onBlur={flatBlurHandler}
          />
        </div>
        <div className={intercomClasses}>
          <input
            placeholder="Домофон"
            type='text'
            id='name'
            defaultValue={intercomValue}
            onChange={intercomChangeHandler}
            onBlur={intercomBlurHandler}
          />
        </div>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
} 

export default AddressForm;
import useInput from '../hooks/use-input';

import styles from './AddressForm.module.css';

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
      <div>
        <div className={`${styles.formControl} ${countryHasError ? styles.invalid : ''}`}>
          <input
            placeholder="Страна"
            type='text'
            id='name'
            defaultValue={value?.data.country || countryValue}
            onChange={countryChangeHandler}
            onBlur={countryBlurHandler}
            //onFocus={countryFocusHandler}
            className={styles.formInput}
          />
        </div>
        <div className={`${styles.formControl} ${cityHasError ? styles.invalid : ''}`}>
          <input
            placeholder="Город"
            type='text'
            id='name'
            defaultValue={value?.data.city || cityValue}
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
            className={styles.formInput}
          />
        </div>
        <div className={`${styles.formControl} ${postalCodeHasError ? styles.invalid : ''}`}>
          <input
            placeholder="Индеск"
            type='text'
            id='name'
            defaultValue={value?.data.postal_code || postalCodeValue}
            onChange={postalCodeChangeHandler}
            onBlur={postalCodeBlurHandler}
            className={styles.formInput}
          />
        </div>
        <div className={`${styles.formControl} ${streetHasError ? styles.invalid : ''}`}>
          <input
            placeholder="Улица"
            type='text'
            id='name'
            defaultValue={value?.data.street || streetValue}
            onChange={streetChangeHandler}
            onBlur={streetBlurHandler}
            className={styles.formInput}
          />
        </div>
        <div className={`${styles.formControl} ${houseHasError ? styles.invalid : ''}`}>
          <input
            placeholder="Дом"
            type='text'
            id='name'
            defaultValue={value?.data.house || houseValue}
            onChange={houseChangeHandler}
            onBlur={houseBlurHandler}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formControl}>
          <input
            placeholder="Корпус/ строение"
            type='text'
            id='name'
            defaultValue={value?.data.block || blockValue}
            onChange={blockChangeHandler}
            onBlur={blockBlurHandler}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formControl}>
          <input
            placeholder="Подъезд"
            type='text'
            id='name'
            defaultValue={entranceValue}
            onChange={entranceChangeHandler}
            onBlur={entranceBlurHandler}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formControl}>
          <input
            placeholder="Этаж"
            type='text'
            id='name'
            defaultValue={floorValue}
            onChange={floorChangeHandler}
            onBlur={floorBlurHandler}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formControl}>
          <input
            placeholder="Квартира"
            type='text'
            id='name'
            defaultValue={value?.data.flat || flatValue}
            onChange={flatChangeHandler}
            onBlur={flatBlurHandler}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formControl}>
          <input
            placeholder="Домофон"
            type='text'
            id='name'
            defaultValue={intercomValue}
            onChange={intercomChangeHandler}
            onBlur={intercomBlurHandler}
            className={styles.formInput}
          />
        </div>
      </div>
      <div>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
} 

export default AddressForm;
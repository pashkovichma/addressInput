import styles from './AddressForm.module.css';
import {useState} from 'react';

function AddressForm({ 
  value, 
  onChange,
  onShow 
}) {

  const [countryValue, setCountryValue] = useState((Object.entries(value)[2][1]).country);
  const [cityValue, setCityValue] = useState((Object.entries(value)[2][1]).city);
  const [postalCodeValue, setPostalCodeValue] = useState((Object.entries(value)[2][1]).postal_code);
  const [streetValue, setStreetValue] = useState((Object.entries(value)[2][1]).street);
  const [houseValue, setHouseValue] = useState((Object.entries(value)[2][1]).house);
  const [blockValue, setBlockValue] = useState((Object.entries(value)[2][1]).block);
  const [entranceValue, setEntranceValue] = useState((Object.entries(value)[2][1]).entrance);
  const [floorValue, setFloorValue] = useState((Object.entries(value)[2][1]).floor);
  const [flatValue, setFlatValue] = useState((Object.entries(value)[2][1]).flat);
  const [intercomValue, setIntercomValue] = useState((Object.entries(value)[2][1]).intercom);

  const [showForm, setShowForm] = useState(true);

  const countryIsValid = countryValue ? countryValue.trim() !== '' : false;
  const cityIsValid = cityValue ? cityValue.trim() !== '' : false;
  const postalCodeIsValid = postalCodeValue ? postalCodeValue.trim() !== '' : false;
  const streetIsValid = streetValue ? streetValue.trim() !== '' : false;
  const houseIsValid = houseValue ? houseValue.trim() !== '' : false;

  const countryInputChangeHandler = (event) => {
    setCountryValue(event.target.value);
    (Object.entries(value)[2][1]).country = event.target.value;
  };

  const cityInputChangeHandler = (event) => {
    setCityValue(event.target.value);
    (Object.entries(value)[2][1]).city = event.target.value;
  };

  const postalCodeInputChangeHandler = (event) => {
    setPostalCodeValue(event.target.value);
    (Object.entries(value)[2][1]).postal_code = event.target.value;
  };

  const streetInputChangeHandler = (event) => {
    setStreetValue(event.target.value);
    (Object.entries(value)[2][1]).street = event.target.value;
  };

  const houseInputChangeHandler = (event) => {
    setHouseValue(event.target.value);
    (Object.entries(value)[2][1]).house = event.target.value;
  };

  const blockInputChangeHandler = (event) => {
    setBlockValue(event.target.value);
    (Object.entries(value)[2][1]).block = event.target.value;
  };

  const entranceInputChangeHandler = (event) => {
    setEntranceValue(event.target.value);
    (Object.entries(value)[2][1]).entrance = event.target.value;
  };

  const floorInputChangeHandler = (event) => {
    setFloorValue(event.target.value);
    (Object.entries(value)[2][1]).floor = event.target.value;
  };

  const flatInputChangeHandler = (event) => {
    setFlatValue(event.target.value);
    (Object.entries(value)[2][1]).flat = event.target.value;
  };

  const intercomInputChangeHandler = (event) => {
    setIntercomValue(event.target.value);
    if ( !value.data.hasOwnProperty('intercom')) value.data.intercom = '';
    (Object.entries(value)[2][1]).intercom = event.target.value;
  };

  let formIsValid = false;

  if (countryIsValid && cityIsValid && postalCodeIsValid && streetIsValid && houseIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    onShow();
  }

  const countryInputClasses = `${styles.formControl} ${countryIsValid ? '' : styles.invalid}`;
  const cityInputClasses = `${styles.formControl} ${cityIsValid ? '' : styles.invalid}`;
  const postalCodeInputClasses = `${styles.formControl} ${postalCodeIsValid ? '' : styles.invalid}`;
  const streetInputClasses = `${styles.formControl} ${streetIsValid ? '' : styles.invalid}`;
  const houseInputClasses = `${styles.formControl} ${houseIsValid ? '' : styles.invalid}`;

  return (
    <form
      onSubmit={submitHandler}
    >
      <div>
        <div className={countryInputClasses}>
          <input
            className={styles.formInput}
            placeholder="Страна"
            type='text'
            id='country'
            onChange={countryInputChangeHandler}
            value={countryValue}
          />
        </div>
        <div className={cityInputClasses}>
          <input
            className={styles.formInput}
            placeholder="Город"
            type='text'
            id='city'
            onChange={cityInputChangeHandler}
            value={cityValue ? cityValue : ''}
          />
        </div>
        <div className={postalCodeInputClasses}>
          <input
            className={styles.formInput}
            placeholder="Индекс"
            type='text'
            id='postalcode'
            onChange={postalCodeInputChangeHandler}
            value={postalCodeValue ? postalCodeValue : ''}
          />
        </div>
        <div className={streetInputClasses}>
          <input
            className={styles.formInput}
            placeholder="Улица"
            type='text'
            id='street'
            onChange={streetInputChangeHandler}
            value={streetValue ? streetValue : ''}
          />
        </div>
        <div className={houseInputClasses}>
          <input
            className={styles.formInput}
            placeholder="Дом"
            type='text'
            id='house'
            onChange={houseInputChangeHandler}
            value={houseValue ? houseValue : ''}
          />
        </div>
        <div className={styles.formControl}>
          <input
            className={styles.formInput}
            placeholder="Корпус"
            type='text'
            id='block'
            onChange={blockInputChangeHandler}
            value={blockValue ? blockValue : ''}
          />
        </div>
        <div className={styles.formControl}>
          <input
            className={styles.formInput}
            placeholder="Подъезд"
            type='text'
            id='entrance'
            onChange={entranceInputChangeHandler}
            value={entranceValue ? entranceValue : ''}
          />
        </div>
        <div className={styles.formControl}>
          <input
            className={styles.formInput}
            placeholder="Этаж"
            type='text'
            id='floor'
            onChange={floorInputChangeHandler}
            value={floorValue ? floorValue : ''}
          />
        </div>
        <div className={styles.formControl}>
          <input
            className={styles.formInput}
            placeholder="Квартира"
            type='text'
            id='flat'
            onChange={flatInputChangeHandler}
            value={flatValue ? flatValue : ''}
          />
        </div>
        <div className={styles.formControl}>
            <input
              className={styles.formInput}
              placeholder="Домофон"
              type='text'
              id='intercom'
              onChange={intercomInputChangeHandler}
              value={intercomValue ? intercomValue : ''}
            />
        </div>
      </div>
      <button
        className={styles.button}
        disabled={!formIsValid}
      >
        Tекущий стейт
      </button>
    </form>
  );
}

export default AddressForm;

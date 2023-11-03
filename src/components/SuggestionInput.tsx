import { useState } from 'react';
import { AddressSuggestions, DaDataSuggestion, DaDataAddress } from 'react-dadata';

import AddressForm from './AddressForm';
import styles from './SuggestionInput.module.css';

const DADATA_TOKEN = 'b945591e4801a017c5d7b499b33de1902684de8b';

function SuggestionInput() {
  const [value, setValue] = useState<DaDataSuggestion<DaDataAddress> | undefined>();
  
  if (!DADATA_TOKEN) {
    return <div className="App">Пожалуйста, установите ваш API токен для DaData в `/src/components/SuggestionInput.tsx:6`</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.address}>
          <span>
            Адрес
          </span>
        </div>
        <AddressSuggestions
          token={DADATA_TOKEN!}
          inputProps={{ placeholder: "..."}}
          value={value}
          onChange={setValue}
          containerClassName={styles.suggestionClassName}
        />
      </div>
      {value && <AddressForm value={value} />}
    </div>
  );
}

export default SuggestionInput;
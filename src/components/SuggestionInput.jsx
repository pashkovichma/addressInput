import { useState } from 'react';
import { AddressSuggestions} from 'react-dadata';

import AddressForm from './AddressForm';
import FinalForm from './FinalForm';
import styles from './SuggestionInput.module.css';

const DADATA_TOKEN = 'b945591e4801a017c5d7b499b33de1902684de8b';

function SuggestionInput() {
  const [value, setValue] = useState();
  const [showJson, setShowJson] = useState(false);

  if (!DADATA_TOKEN) {
    return <div className="App">Пожалуйста, установите ваш API токен для DaData в `/src/components/SuggestionInput.tsx:6`</div>;
  }

  const refreshPage = ()=>{
    window.location.reload();
 }

  return (
    <div className={styles.container}>
      {!value && 
      <div className={styles.wrapper}>
        <div className={styles.address}>
          <span>
            Адрес
          </span>
        </div>
        <AddressSuggestions
          token={DADATA_TOKEN}
          inputProps={{ placeholder: "..."}}
          value={value}
          onChange={setValue}
          containerClassName={styles.suggestionClassName}
        />
      </div>
      }
      {value && !showJson &&
        <AddressForm 
          value={value}
          onShow={() => setShowJson(true)}
        />
      }
      {showJson &&
        <FinalForm
        value={value}
        reset={refreshPage}
        />
      }
    </div>
  );
}

export default SuggestionInput;
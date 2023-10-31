import { useState } from 'react';
import { AddressSuggestions, DaDataSuggestion, DaDataAddress } from 'react-dadata';

import AddressForm from './AddressForm';

const DADATA_TOKEN = 'b945591e4801a017c5d7b499b33de1902684de8b';

function SuggestionInput() {
  const [value, setValue] = useState<DaDataSuggestion<DaDataAddress> | undefined>();
  
  if (!DADATA_TOKEN) {
    return <div className="App">Пожалуйста, установите ваш API токен для DaData в `/src/components/SuggestionInput.tsx:6`</div>;
  }

  return (
    <div>
      <AddressSuggestions
        token={DADATA_TOKEN!}
        inputProps={{ placeholder: "Адрес" }}
        value={value}
        onChange={setValue}
      />
      {value && <AddressForm value={value} />}
    </div>
  );
}

export default SuggestionInput;
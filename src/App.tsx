import './App.css';
import './react-dadata.css';
import { AddressSuggestions } from './AddressSuggestions';

const DADATA_TOKEN = 'b945591e4801a017c5d7b499b33de1902684de8b';

function App() {
  if (!DADATA_TOKEN) {
    return <div className="App">Пожалуйста, установите ваш API токен для DaData в `src/App.tsx:6`</div>;
  }
  return (
    <div>
      <AddressSuggestions token={DADATA_TOKEN!} selectOnBlur />
    </div>
  );
}

export default App;

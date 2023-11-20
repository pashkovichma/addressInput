import styles from './FinalForm.module.css';
import ReactJson from 'react-json-view';

function FinalForm({
  value,
  reset
}) {
  const state = Object.entries(value.data);

  return (
    <>
      <h1 className={styles.title}>
        Текущий стейт:
      </h1>
      <ReactJson src={value} />
      <div className={styles.container}>
        <div>
          <button
          onClick={reset}
          className={styles.button}
          >
            Начать сначала
          </button>
        </div>
      </div>
      
    </>
  )
}

export default FinalForm;
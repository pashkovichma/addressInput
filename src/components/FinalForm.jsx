import styles from './FinalForm.module.css';
import ReactJson from 'react-json-view';

function FinalForm({
  value,
  reset
}) {
  return (
    <>
      <h1 className={styles.title}>
        Текущий стейт:
      </h1>
      <ReactJson src={value} />
      <div>
        <button
        onClick={reset}
        className={styles.button}
        >
          Начать сначала
        </button>
      </div>
    </>
  )
}

export default FinalForm;
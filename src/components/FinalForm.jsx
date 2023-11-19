import styles from './SuggestionInput.module.css';

function FinalForm({
  value,
  reset
}){
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.address}>
          <span>
            country
          </span>
        </div>
        <input
          className={styles.suggestionClassName}
          defaultValue={value.data.country}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.address}>
          <span>
            country
          </span>
        </div>
        <input
          className={styles.suggestionClassName}
          defaultValue={value.data.country}
        />
      </div>
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
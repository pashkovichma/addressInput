import styles from './SuggestionInput.module.css';

function FinalForm({
  value,
  reset
}) {
  const state = (Object.entries(value.data));

  return (
    <>
      {state.map(field =>
        <div
          className={styles.wrapper}
          key={field[0]}
        >
          <div className={styles.address}>
            <span>
              {field[0]}
            </span>
          </div>
          <span className={styles.suggestionClassName}>
            {field[1]===null ? 'null' : field[1]}
          </span>
        </div>
      )}
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
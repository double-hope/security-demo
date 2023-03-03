import * as styles from './styles';

const ResetButton = ({text, onClick}) => {
  return (
    <button css={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}

export { ResetButton };

import * as styles from './styles';

const Button = ({text, onClick}) => {
  return (
    <button css={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}

export { Button };
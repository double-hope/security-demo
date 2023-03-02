import * as styles from './styles';

const Button = ({text, onClick, ...props}) => {
  return (
    <button css={styles.button} onClick={onClick} {...props}>
      {text}
    </button>
  )
}

export { Button };
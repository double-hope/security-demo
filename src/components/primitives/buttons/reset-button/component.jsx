import { ResetButtonTypeEnum } from 'common/enums';
import * as styles from './styles';

const ResetButton = ({text, onClick, type, ...props}) => {
  return (
    <button css={styles.button} onClick={onClick} button-type={type} {...props}>
      {text}
    </button>
  )
}

ResetButton.defaultProps = {
  type: ResetButtonTypeEnum.LINE,
}

export { ResetButton };

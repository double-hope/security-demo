import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as styles from './styles';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { ButtonColorEnum, ButtonShapeEnum, ButtonSizeEnum, SizeToRadius, ValueToColor } from 'common/enums';

const Button = ({text, onClick, color, size, shape, ...props}) => {
  return (
    <button css={styles.button(ValueToColor[color], SizeToRadius[size])} onClick={onClick} button-color={color} button-size={size} button-shape={shape} {...props}>
      <FontAwesomeIcon icon={faCircleDot} />
      {text}
      <FontAwesomeIcon icon={faCircleDot} />
    </button>
  )
}

Button.defaultProps = {
  size: ButtonSizeEnum.DEFAULT,
  color: ButtonColorEnum.PRIMARY,
  shape: ButtonShapeEnum.ROUNDED,
}

export { Button };

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as styles from './styles';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { ButtonColorEnum, ButtonShapeEnum, ButtonSizeEnum, SizeToRadius, ValueToColor } from 'common/enums';

const Button = ({text, onClick, color, size, shape, circles, stretched, ...props}) => {
  return (
    <button css={styles.button(ValueToColor[color], SizeToRadius[size])} onClick={onClick} button-stretched={`${stretched}`} button-color={color} button-size={size} button-shape={shape} {...props}>
      {circles && <FontAwesomeIcon icon={faCircleDot} />}
      {text}
      {circles && <FontAwesomeIcon icon={faCircleDot} />}
    </button>
  )
}

Button.defaultProps = {
  size: ButtonSizeEnum.DEFAULT,
  color: ButtonColorEnum.PRIMARY,
  shape: ButtonShapeEnum.ROUNDED,
  circles: false
}

export { Button };

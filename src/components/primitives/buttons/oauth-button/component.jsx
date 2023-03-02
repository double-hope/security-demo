import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as styles from './styles';

const OAuthButton = ({icon, text, additionStyles, onClick}) => {
  return (
    <button css={[styles.oauthButton, additionStyles]} onClick={onClick}>
      <FontAwesomeIcon icon={icon}/>
      <span css={styles.oauthButtonText}>{text}</span>
    </button>
  )
}

export { OAuthButton };
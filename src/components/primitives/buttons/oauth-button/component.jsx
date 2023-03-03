import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as styles from './styles';
import { motion } from 'framer-motion';

const OAuthButton = ({icon, text, additionStyles, onClick}) => {
  return (
    <motion.button css={[styles.oauthButton, additionStyles]} onClick={onClick} whileHover={{scale: 1.1}}>
      <FontAwesomeIcon icon={icon}/>
      <span css={styles.oauthButtonText}>{text}</span>
    </motion.button>
  )
}

export { OAuthButton };
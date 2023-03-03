import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as styles from './styles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OAuthLink = ({icon, text, additionStyles, to}) => {
  return (
    <Link css={styles.link} to={to} target='_blank'>
      <motion.div whileHover={{scale: 1.1}} css={[styles.oauthLink, additionStyles]}>
        <FontAwesomeIcon icon={icon}/>
        <span css={styles.oauthLinkText}>{text}</span>
      </motion.div>
    </Link>
  )
}

export { OAuthLink };
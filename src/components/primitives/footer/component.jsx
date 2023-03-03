import React from 'react';
import * as styles from './styles';

const Footer = ({children}) => {
  return (
    <footer css={styles.footer}>{children}</footer>
  )
}

export { Footer };
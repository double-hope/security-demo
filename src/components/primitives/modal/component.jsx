import React, { useCallback } from 'react';
import * as styles from './styles';
import { createPortal } from 'react-dom';
import { useOutsideClick } from 'hooks/useOutsideClick';

const Modal = ({ visible, setVisible, children }) => {
    const handleClickOutside = useCallback(() => {
        setVisible(false);
      }, [setVisible]);
    
    const bodyRef = useOutsideClick(handleClickOutside);
  
    const renderPortalBody = () => (
      <div css={styles.modalWrapper}>
        <div ref={bodyRef} css={styles.modalContent}>{children}</div>
      </div>
    );
  
    const renderPortal = () =>
      createPortal(renderPortalBody(), document.getElementById('modal'));
  
    return (
    <React.Fragment>
      {visible && renderPortal()}
    </React.Fragment>
    )
}

export { Modal };
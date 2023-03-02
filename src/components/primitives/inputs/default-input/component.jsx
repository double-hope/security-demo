import React from 'react';
import * as styles from './styles';

const Input = ({type, id, inputRef, onChange, value, label, children, ...props}) => {
  return (
    <div css={styles.inputWrapper}>
        <label htmlFor={id}>
            {label}
            {children}
        </label>
        <input 
            type={type}
            id={id}
            ref={inputRef}
            onChange={onChange}
            value={value}
            css={styles.input}
            {...props}
        />  
    </div>
    
  )
}

export { Input };
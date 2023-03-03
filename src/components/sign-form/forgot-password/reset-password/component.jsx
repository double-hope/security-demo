import React, { useRef, useState } from 'react';
import * as styles from './styles';
import { Button, Input, ResetButton } from 'components/primitives';

const ResetPassword = ({toggleModals, modals}) => {

    const emailRef = useRef();

    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmail('');
    }
    return (
        <section css={styles.wrapper}>
            <h1>Help with your password</h1>
            <p>write you e-mail and we will send instruction of changing your password</p>
            <form onSubmit={handleSubmit} css={styles.signForm}>
                <div css={styles.inputContainer}>
                     <Input 
                        type='text' 
                        id='email' 
                        inputRef={emailRef}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        autoComplete='off'
                        required

                        label='Email:'
                    />
                </div>                
                
                <Button text='Reset password' />
            </form>
            <p css={styles.link}>
                or<br />
                <span css={styles.line}>
                    <ResetButton text='Sign Up' onClick={toggleModals} id={modals.SIGN_UP.id} />
                </span>
            </p>

        </section>
        
    )
}

export { ResetPassword };
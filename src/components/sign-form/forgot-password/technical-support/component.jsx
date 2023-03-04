import React from 'react';
import * as styles from './styles';
import { Button, ResetButton } from 'components/primitives';

const TechnicalSupport = ({toggleForms, forms}) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <section css={styles.wrapper}>
            <h1>Help with your password</h1>
            <form onSubmit={handleSubmit} css={styles.signForm}>
                <p>Check your email
                    You entered __________________________. 
                    If this email address is associated with your account,  
                    we'll send instructions on how to reset your password. 
                    If you do not receive this message within 1 minute, please make sure 
                    you have entered the correct email address or check your spam folder. 

                    If you need further assistance, please contact Technical Support.</p>
                <Button text='Technical Support' />
            </form>
            <p css={styles.link}>
                or<br />
                <span css={styles.line}>
                    <ResetButton text='Sign Up' onClick={toggleForms} id={forms.SIGN_UP.id} />
                </span>
            </p>

        </section>
        
    )
}

export { TechnicalSupport };
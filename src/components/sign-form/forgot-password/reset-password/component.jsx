import React, { useRef, useState } from 'react';
import * as styles from './styles';
import { Button, Input } from 'components/primitives';
import { ButtonShapeEnum } from 'common/enums';

const ResetPassword = ({toggleForms, forms}) => {

    const emailRef = useRef();

    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmail('');
    }
    return (
        <section css={styles.wrapper}>
            <h1>Help with your password</h1>
            <p css={styles.smallInfo}>write you e-mail and we will send instruction of changing your password</p>
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
                
                <Button text='Reset password' stretched={true} shape={ButtonShapeEnum.RECTANGLE} />
            </form>
            <p css={styles.link}>
                Don't have an account yet? <br />
                <Button text='Sign Up' circles={true} onClick={toggleForms} id={forms.SIGN_UP.id} shape={ButtonShapeEnum.RECTANGLE} />
            </p>

        </section>
        
    )
}

export { ResetPassword };
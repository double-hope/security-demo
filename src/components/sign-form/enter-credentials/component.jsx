import React, { useRef, useState, useEffect } from 'react';
import * as styles from './styles';
import { Button, Input } from 'components/primitives';

const EnterCredentials = ({toggleModals, modals}) => {

    const firstNameRef = useRef();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        firstNameRef.current.focus();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFirstName('');
        setLastName('');
    }

    return (
        <section css={styles.wrapper}>
            <h1>Enter Your info</h1>
            <form onSubmit={handleSubmit} css={styles.signForm}>
                <div css={styles.inputContainer}>
                     <Input 
                        type='text' 
                        id='first-name' 
                        inputRef={firstNameRef}
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        autoComplete='off'
                        required

                        label='Fist name:'
                    />
                </div>
               
                <div css={styles.inputContainer}>
                    <Input 
                        type='password' 
                        id='last-name' 
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        required

                        label='Last name:'
                    />
                </div>
                
                <Button text='Confirm info' />
            </form>
        </section>
        
    )
}

export { EnterCredentials };
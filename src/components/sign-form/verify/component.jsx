import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as styles from './styles';
import { ResetButton } from 'components/primitives';

const notify = () => toast.success('Confirm your e-mail and sign in!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

const Verify = ({toggleForms, forms}) => {

    const [shownNotify, setShownNotify] = useState(false);

    useEffect(() => {
        if(!shownNotify){
            notify();
            setShownNotify(true);
        }
    }, [shownNotify]);

    return (
        <section css={styles.wrapper}>
            <h1>Help with your password</h1>
            <form css={styles.signForm}>
                <ToastContainer />
                Verify your  email!
                Don't get a letter?
                Resend 
            </form>
            <p css={styles.link}>
                <span css={styles.line}>
                    <ResetButton text='Sign In' onClick={toggleForms} id={forms.CREDENTIALS.id} />
                </span>
            </p>

        </section>
        
    )
}

export { Verify };
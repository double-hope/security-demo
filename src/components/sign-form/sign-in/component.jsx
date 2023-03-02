import React, { useRef, useState, useEffect } from 'react';
import * as styles from './styles';
import { Link, useNavigate } from 'react-router-dom';

const SignInForm = () => {

    const navigate = useNavigate();

    const userRef = useRef();
    const errorRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMessage, setErrMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMessage('');
    }, [user, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUser('');
        setPassword('');
        setSuccess(true);
    }

    return (
        <>
            {success ? (
                <section>
                <h1>You are logged in!</h1>
                <br />
                <p>
                    <Link to={navigate('/')}>Go to home</Link>
                </p>
            </section>
            ) : (
            <section>
                <p ref={errorRef} css={errMessage ? styles.errmsg : styles.offscreen} aria-live='assertive'>{errMessage}</p>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>
                        Username:
                    </label>
                    <input 
                        type='text'
                        id='username'
                        ref={userRef}
                        autoComplete='off'
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />

                    <label htmlFor='password'>
                        Password:
                    </label>
                    <input 
                        type='password'
                        id='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />

                    <button>Sign In</button>
                </form>
                <p>
                    Don't have an account?<br />
                    <span css={styles.line}>
                        <Link to={navigate('/sign-up')}>Sign Up</Link>
                    </span>
                </p>
            </section>
            )
            }
        </>
        
    )
}

export { SignInForm };
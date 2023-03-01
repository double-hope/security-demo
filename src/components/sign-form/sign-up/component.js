import React, { useEffect, useRef, useState } from 'react';
import * as styles from './styles';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUpForm = () => {
    const userRef = useRef();
    const errorRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);


    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMessage, setErrMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        setValidName(result);
    }, [user]);

    useEffect(() => {
        const result = PASSWORD_REGEX.test(password);
        setValidPassword(result);
        const match = password === matchPassword;
        setValidMatch(match);
    }, [password, matchPassword]);

    useEffect(() => {
        setErrMessage('');
    }, [user, password, matchPassword]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const v1 = USER_REGEX.test(user);
        const v2 = PASSWORD_REGEX.test(password);
        if(!v1 || !v2) {
            setErrMessage('Invalid Entry');
            return;
        }
        setSuccess(true);
    }

    return (
        <>
        {success ? (
            <section>
                <h1>Success</h1>
                <p>
                    <a href='/'>Sign In</a>
                </p>
            </section>
        ) : (
            <section>
                <p ref={errorRef} css={errMessage ? styles.errmsg : styles.offscreen} aria-live='assertive'>{errMessage}</p>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>
                        Username:
                        <span css={validName ? styles.valid : styles.hide}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span css={validName || !user ? styles.hide : styles.invalid}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input 
                        type='text'
                        id='username'
                        ref={userRef}
                        autoComplete='off'
                        onChange={(e) => setUser(e.target.value)}
                        required
                        aria-invalid={validName ? 'false' : 'true'}
                        aria-describedby='uidnote'
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                    />
                    <p id='uidnote' css={userFocus && user && !validName ? styles.instructions : styles.offscreen}>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        4 to 24 characters.<br />
                        Must begin with the letter.<br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p>

                    <label htmlFor='password'>
                        Password:
                        <span css={validPassword ? styles.valid : styles.hide}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span css={validPassword || !password ? styles.hide : styles.invalid}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input 
                        type='password'
                        id='password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        aria-invalid={validPassword ? 'false' : 'true'}
                        aria-describedby='pwdnote'
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}
                    />
                    <p id='pwdnote' css={passwordFocus && !validPassword ? styles.instructions : styles.offscreen}>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        8 to 24 characters.<br />
                        Must include uppercase and lowercase letters, a number and a special character.<br />
                        Allowed special characters: <span aria-label='exclamation mark'>!</span>
                        <span aria-label='at symbol'>@</span> <span aria-label='hashtag'>#</span>
                        <span aria-label='dollar sign'>$</span> <span aria-label='percent'>%</span>
                    </p>


                    <label htmlFor='confirm_password'>
                        Confirm Password:
                        <span css={validMatch && matchPassword ? styles.valid : styles.hide}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span css={validMatch || !matchPassword ? styles.hide : styles.invalid}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input 
                        type='password'
                        id='confirm_password'
                        onChange={(e) => setMatchPassword(e.target.value)}
                        required
                        aria-invalid={validMatch ? 'false' : 'true'}
                        aria-describedby='confirmnote'
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    />
                    <p id='confirmnote' css={matchFocus && !validMatch ? styles.instructions : styles.offscreen}>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        Must match the first password input field.
                    </p>

                    <button disabled={!validName || !validPassword || !validMatch ? true : false}> Sign Up</button>
                </form>

                <p>
                    Already registered?<br />
                    <span css={styles.line}>
                        <a href='/'>Sign In</a>
                    </span>
                </p>
            </section>
        )}
        </>
        
    )
}

export { SignUpForm };
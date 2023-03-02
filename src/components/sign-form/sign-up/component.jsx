import React, { useEffect, useRef, useState } from 'react';
import * as styles from './styles';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'components/primitives';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from 'store/auth';

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUpForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, message } = useSelector(state => state.auth);

    const emailRef = useRef();
    const errorRef = useRef();
    
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMessage, setErrMessage] = useState(message);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        const result = PASSWORD_REGEX.test(password);
        setValidPassword(result);
        const match = password === matchPassword;
        setValidMatch(match);
    }, [password, matchPassword]);

    useEffect(() => {
        setErrMessage('');
    }, [email, password, matchPassword]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const v1 = EMAIL_REGEX.test(email);
        const v2 = PASSWORD_REGEX.test(password);
        if(!v1 || !v2) {
            setErrMessage('Invalid Entry');
            return;
        }
        
        dispatch(signUp({ email, password }))
    }

    return (
        <>
        {success ? (
            <section>
                <h1>Success</h1>
                <p>
                    <Link to={navigate('/')}>Go to home</Link>
                </p>
            </section>
        ) : (
            <section>
                <p ref={errorRef} css={errMessage ? styles.errmsg : styles.offscreen} aria-live='assertive'>{errMessage}</p>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>

                    <label htmlFor='email'>
                        Email:
                        <span css={validEmail ? styles.valid : styles.hide}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span css={validEmail || !email ? styles.hide : styles.invalid}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input 
                        type='text'
                        id='email'
                        ref={emailRef}
                        autoComplete='off'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        aria-invalid={validEmail ? 'false' : 'true'}
                        aria-describedby='emailnote'
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                    />
                    <p id='emailnote' css={emailFocus && email && !validEmail ? styles.instructions : styles.offscreen}>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        Email is required and must be in the format user@example.com.<br />
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

                    <Button text='Sign Up' disabled={!validEmail || !validPassword || !validMatch} />
                </form>

                <p>
                    Already registered?<br />
                    <span css={styles.line}>
                        <Link to={'/sign-in'}>Sign In</Link>
                    </span>
                </p>
            </section>
        )}
        </>
        
    )
}

export { SignUpForm };
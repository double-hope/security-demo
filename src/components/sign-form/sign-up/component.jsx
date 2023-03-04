import React, { useEffect, useRef, useState } from 'react';
import * as styles from './styles';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input, OAuthButton, OAuthLink, ResetButton } from 'components/primitives';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from 'store/auth';
import { ButtonShapeEnum, DataStatusEnum } from 'common/enums';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { authorize } from 'store/oauth';

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUpForm = ({toggleForms, forms}) => {

    const dispatch = useDispatch();
    const { message, status } = useSelector(state => state.auth);

    const firstNameRef = useRef();
    const errorRef = useRef();
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [errMessage, setErrMessage] = useState(message);

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        firstNameRef.current.focus();
    }, []);

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        const result = PASSWORD_REGEX.test(password);
        setValidPassword(result);;
    }, [password]);

    useEffect(() => {
        setErrMessage('');
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const v1 = EMAIL_REGEX.test(email);
        const v2 = PASSWORD_REGEX.test(password);
        if(!v1 || !v2) {
            setErrMessage('Invalid Entry');
            return;
        }
        
        dispatch(signUp({ email, password }));
        setDisabled(false);
    }
    
    useEffect(() => {
        if(!!message)
            setErrMessage(message);
    }, [message]);

    useEffect(() => {
        const verify = {
            preventDefault: () => {},
            target: {
                id: forms.VERIFY.id,
            }
        }
        
        if(status === DataStatusEnum.SUCCESS) toggleForms(verify);
        if(status !== DataStatusEnum.PENDING) setDisabled(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    const facebook = (e) => {
        e.preventDefault();
        dispatch(authorize({service: '/facebook', params: { redirect_uri: 'http://localhost:8080/regsiter-step2' }}))
    }

    const github = (e) => {
        e.preventDefault();
        dispatch(authorize({service: '/github', params: { redirect_uri: 'http://localhost:8080/regsiter-step2' }}))
    }

    return (
        <section css={styles.wrapper}>
            <h1>Sign up</h1>
            <p css={styles.smallInfo}>Already have an account? <ResetButton text='Sign In' onClick={toggleForms} id={forms.SIGN_IN.id} /></p>
            <OAuthLink icon={faGoogle} text='Login with Google' to={'http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:8080/regsiter-step2'} />
            <OAuthButton icon={faFacebook} text='Login with Facebook' onClick={facebook} />
            <OAuthButton icon={faGithub} text='Login with Github' onClick={github} />
            <h5>OR</h5>
            <h1>Create an account</h1>
            <p ref={errorRef} css={errMessage ? styles.errmsg : styles.offscreen} aria-live='assertive'>{errMessage}</p>
            <form onSubmit={handleSubmit} css={styles.signForm}>
                <div css={styles.credentials}>
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
                </div>

                <div css={styles.inputContainer}>
                    <Input 
                        type='text' 
                        id='email' 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        autoComplete='off'
                        required
                        aria-invalid={validEmail ? 'false' : 'true'}
                        aria-describedby='emailnote'
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}

                        label='Email:'
                    >
                        
                        <span css={validEmail ? styles.valid : styles.hide}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span css={validEmail || !email ? styles.hide : styles.invalid}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span> 

                    </Input>

                    
                    <p id='emailnote' css={emailFocus && email && !validEmail ? styles.instructions : styles.offscreen}>
                        <FontAwesomeIcon icon={faInfoCircle} css={styles.warning}/>
                        Email is required and must be in the format user@example.com.
                    </p>
                </div>
                
                <div css={styles.inputContainer}>
                    <Input 
                        type='password' 
                        id='password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        aria-invalid={validPassword ? 'false' : 'true'}
                        aria-describedby='pwdnote'
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}

                        label='Password:'
                    >
                        
                        <span css={validPassword ? styles.valid : styles.hide}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span css={validPassword || !password ? styles.hide : styles.invalid}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                        
                    </Input>

                    <p id='pwdnote' css={passwordFocus && !validPassword ? styles.instructions : styles.offscreen}>
                        <FontAwesomeIcon icon={faInfoCircle} css={styles.warning} />
                        Need upper/lowercase letters, number, & special character.<br />
                    </p>
                </div>
                <p css={styles.smallInfo}>By signing up, you agree to the Terms or Service anf Privacy Policy, including Cookie Use.</p>
                <Button text='Sign Up' disabled={!validEmail || !validPassword || !disabled} circles={true} shape={ButtonShapeEnum.RECTANGLE} />
            </form>
        </section>
    )
}

export { SignUpForm };
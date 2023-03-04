import React, { useRef, useState, useEffect } from 'react';
import * as styles from './styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from 'store/auth';
import { Button, Input, OAuthButton, OAuthLink, ResetButton } from 'components/primitives';
import { useAuth } from 'hooks/useAuth';
import { ButtonShapeEnum, DataStatusEnum, ResetButtonTypeEnum } from 'common/enums';
import jwtDecode from 'jwt-decode';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { authorize } from 'store/oauth';

const SignInForm = ({toggleForms, forms}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { setAuth } = useAuth();
    const { tokens, message, status } = useSelector(state => state.auth);

    const emailRef = useRef();
    const errorRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMessage, setErrMessage] = useState('');

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMessage('');
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        dispatch(signIn({email, password}));
    }

    useEffect(() => {
        if(status === DataStatusEnum.SUCCESS && tokens.length) { 
            const jwt = jwtDecode(tokens?.accessToken);
            setAuth({user: email, password, accessToken: tokens?.accessToken, roles: jwt?.roles});
            localStorage.setItem('session', JSON.stringify({user: {email, login: btoa(password), expired: false}}));
            navigate('/');
        }
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

    useEffect(() => {
        if(!!message)
            setErrMessage(message);
    }, [message]);

    return (
        <section css={styles.wrapper}>
            <h1>Welcome to dbxrhth</h1>
            <p ref={errorRef} css={errMessage ? styles.errmsg : styles.offscreen} aria-live='assertive'>{errMessage}</p>
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
               
                <div css={styles.inputContainer}>
                    <Input 
                        type='password' 
                        id='password' 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required

                        label='Password:'
                    />
                </div>
                <ResetButton text='Forgot your password?' onClick={toggleForms} type={ResetButtonTypeEnum.BOLD} id={forms.RESET.id} />
                
                <Button text='Sign In' stretched={true} shape={ButtonShapeEnum.RECTANGLE} />

                <h5>OR</h5>
                <OAuthLink icon={faGoogle} text='Login with Google' to={'http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:8080/regsiter-step2'} />
                <OAuthButton icon={faFacebook} text='Login with Facebook' onClick={facebook} />
                <OAuthButton icon={faGithub} text='Login with Github' onClick={github} />
                <p css={styles.smallInfo}>By signing up, you agree to the Terms or Service anf Privacy Policy, including Cookie Use.</p>
            </form>
            <p css={styles.link}>
                Don't have an account?<br />
                <Button text='Sign up' circles={true} onClick={toggleForms} id={forms.SIGN_UP.id} shape={ButtonShapeEnum.RECTANGLE} />
            </p>

        </section>
        
    )
}

export { SignInForm };
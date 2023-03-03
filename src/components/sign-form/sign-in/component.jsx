import React, { useRef, useState, useEffect } from 'react';
import * as styles from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from 'store/auth';
import { Button, Input } from 'components/primitives';
import { useAuth } from 'hooks/useAuth';
import { DataStatusEnum } from 'common/enums';
import jwtDecode from 'jwt-decode';

const SignInForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { setAuth } = useAuth();
    const { tokens, status } = useSelector(state => state.auth);

    const emailRef = useRef();
    const errorRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMessage, setErrMessage] = useState('');

    useEffect(() => {
        emailRef.current.focus();
        dispatch(signIn({email: 'test@example.com', password: '123qwQW!!!!!'}));
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
        if(status === DataStatusEnum.SUCCESS) { 
            const jwt = jwtDecode(tokens?.accessToken);
            setAuth({user: email, password, accessToken: tokens?.accessToken, roles: jwt?.roles});
            localStorage.setItem('session', JSON.stringify({user: {email: 'test@example.com', login: btoa('123qwQW!!!!!'), expired: false}}));
            // localStorage.setItem('session', JSON.stringify({user: {email, login: btoa(password), expired: false}}));
            navigate('/');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    return (
        <section css={styles.wrapper}>
            <p ref={errorRef} css={errMessage ? styles.errmsg : styles.offscreen} aria-live='assertive'>{errMessage}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit} css={styles.signForm}>

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

                <Input 
                    type='password' 
                    id='password' 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required

                    label='Password:'
                />
                
                <Button text='Sign In' />
            </form>
            <p css={styles.link}>
                Don't have an account?<br />
                <span css={styles.line}>
                    <Link to={'/sign-up'}>Sign Up</Link>
                </span>
            </p>
        </section>
        
    )
}

export { SignInForm };
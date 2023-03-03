import { faGithub, faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import * as styles from './styles';
import { Button, OAuthButton, Modal, ResetButton, Footer } from 'components/primitives';
import { useDispatch } from 'react-redux';
import { authorize } from 'store/oauth';
import { useState } from 'react';
import { SignInForm } from '../sign-in';
import { SignUpForm } from '../sign-up';
import { ButtonSizeEnum } from 'common/enums';

const Sign = () => {
  const dispatch = useDispatch();

  const [signInVisible, setSignInVisible] = useState(false);
  const [signUpVisible, setSignUpVisible] = useState(false);

  const toggleModals = (e) => {
    e.preventDefault();
    setSignInVisible(!signInVisible);
    setSignUpVisible(!signUpVisible);
  }

  const google = (e) => {
    e.preventDefault();
    dispatch(authorize({service: '/google', params: { redirect_uri: 'http://localhost:8080/regsiter-step2' }}))
  }
  
  const github = (e) => {
    e.preventDefault();
    dispatch(authorize({service: '/github', params: { redirect_uri: 'http://localhost:8080/regsiter-step2' }}))
  }

  const facebook = (e) => {
    e.preventDefault();
    dispatch(authorize({service: '/facebook', params: { redirect_uri: 'http://localhost:8080/regsiter-step2' }}))
  }
  
  return (
    <div css={styles.wrapper}>
      <div css={styles.layout}>
        <div css={styles.aside} />
        <div css={styles.signForm}>
            <OAuthButton icon={faGoogle} text='Login with Google' additionStyles={styles.google} onClick={google} />
            <OAuthButton icon={faGithub} text='Login with Github' onClick={github} />
            <OAuthButton icon={faFacebook} text='Login with Facebook' additionStyles={styles.facebook} onClick={facebook} />
            <p>or</p>
            <Button text='Register' onClick={() => setSignUpVisible(!signUpVisible)} size={ButtonSizeEnum.LARGE} />
            <p css={styles.small}>By signing up, ypu agree to the Terms or Service anf Privacy Policy, including Cookie Use.</p>
            <p>Already have an account?</p>
            <ResetButton text={'Login'} onClick={() => setSignInVisible(!signInVisible)} />
            <Footer>terms...</Footer>
        </div>
      </div>
        

        <Modal visible={signInVisible} setVisible={setSignInVisible}>
          <SignInForm toggleModals={toggleModals} />
        </Modal>

        <Modal visible={signUpVisible} setVisible={setSignUpVisible}>
          <SignUpForm toggleModals={toggleModals} />
        </Modal>

    </div>
  )
}

export default Sign;
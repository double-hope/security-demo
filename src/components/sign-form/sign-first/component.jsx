import { faGithub, faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import * as styles from './styles';
import { Button, OAuthButton } from 'components/primitives';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Sign = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const google = (e) => {
    e.preventDefault();
  }
  
  const github = (e) => {
    e.preventDefault();
  }

  
  const facebook = (e) => {
    e.preventDefault();
  }

  const register = (e) => {
    e.preventDefault();
    navigate('/sign-up');
  }
  
  return (
    <div css={styles.wrapper}>
        <div css={styles.signForm}>
            <OAuthButton icon={faGoogle} text='Login with Google' additionStyles={styles.google} onClick={google} />
            <OAuthButton icon={faGithub} text='Login with Github' onClick={github} />
            <OAuthButton icon={faFacebook} text='Login with Facebook' additionStyles={styles.facebook} onClick={facebook} />
            <p>or</p>
            <Button text='Register' onClick={register} />
            <p>Already have an account?</p>
            <Link to={'/sign-in'}>Sign in</Link>
        </div>
    </div>
  )
}

export default Sign;
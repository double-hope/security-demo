import { faGithub, faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import * as styles from './styles';
import { Button, OAuthButton } from 'components/primitives';

const Sign = () => {
  return (
    <div css={styles.wrapper}>
        <div css={styles.signForm}>
            <OAuthButton icon={faGoogle} text='Login with Google' additionStyles={styles.google} />
            <OAuthButton icon={faGithub} text='Login with Github' />
            <OAuthButton icon={faFacebook} text='Login with Facebook' additionStyles={styles.facebook} />
            <p>or</p>
            <Button text='Register' />
            <p>Already have an account?</p>
            <a href='#'>Sign in</a>
        </div>
    </div>
  )
}

export default Sign;
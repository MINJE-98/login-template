import LinkTo from '@Components/common/atoms/LinkTo';
import FacebookIcon from '@Components/common/molecules/Button/FacebookLoginButton/FacebookIcon';

import styles from './FacebookLoginButton.module.css';

const FacebookLoginButton = () => {
  return (
    <LinkTo className={styles['facebook-login']} href="/api/oauth/facebook">
      <FacebookIcon /> <span>Login With facebook</span>
    </LinkTo>
  );
};

export default FacebookLoginButton;

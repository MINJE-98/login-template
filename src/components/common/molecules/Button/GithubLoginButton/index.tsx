import LinkTo from '@Components/common/atoms/LinkTo';
import GithubIcon from '@Components/common/molecules/Button/GithubLoginButton/GithubIcon';

import styles from './GithubLoginButton.module.css';

const GithubLoginButton = () => {
  return (
    <LinkTo className={styles['github-login']} href="/api/oauth/github">
      <GithubIcon /> <span>Login With Github</span>
    </LinkTo>
  );
};

export default GithubLoginButton;

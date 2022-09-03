import LinkTo from '@Components/common/atoms/LinkTo';
import KakaoIcon from '@Components/common/molecules/Button/KakaoLoginButton/KakaoIcon';

import styles from './KakaoLoginButton.module.css';

const KakaoLoginButton = () => {
  return (
    <LinkTo className={styles['kakao-login']} href="/api/oauth/kakao">
      <KakaoIcon /> <span>Login With Kakao</span>
    </LinkTo>
  );
};

export default KakaoLoginButton;

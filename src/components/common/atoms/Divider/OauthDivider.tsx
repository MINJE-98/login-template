import styles from './OauthDivider.module.css';

const OauthDivider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.divider} />
      <span className={styles.dividerText}>다른 서비스로 로그인</span>
      <div className={styles.divider} />
    </div>
  );
};

export default OauthDivider;

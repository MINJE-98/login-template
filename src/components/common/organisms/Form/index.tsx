import LinkTo from '@Components/common/atoms/LinkTo';
import StyledInputLabel from '@Components/common/molecules/Form/StyledInputLabel';

import styles from './Form.module.css';

const Form = ({ isLogin, errorMessage, handleSubmit }: any) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {isLogin ? <h2>로그인</h2> : <h2>회원가입</h2>}
      <StyledInputLabel labelText="이름" type="text" name="username" required />
      <StyledInputLabel
        labelText="비밀번호"
        type="password"
        name="password"
        required
      />
      {!isLogin && (
        <StyledInputLabel
          labelText="비밀번호 확인"
          type="password"
          name="rpassword"
          required
        />
      )}
      <p className={styles['error-message']}>{errorMessage}</p>
      <div className={styles['button-link']}>
        {isLogin ? (
          <>
            <button type="submit">로그인</button>
            <LinkTo href="/signup">계정이 없으신가요?</LinkTo>
          </>
        ) : (
          <>
            <button type="submit">가입</button>
            <LinkTo href="/signin">이미 계정이 있어요!</LinkTo>
          </>
        )}
      </div>
    </form>
  );
};

export default Form;

import { GetServerSideProps } from 'next';

import axios from 'axios';
import { useAuth } from 'src/hooks/auth/context/AuthContext';

import Form from '@Components/form';
import Layout from '@Components/layout';
import SNSLoginButton from '@Components/SNSLoginButton';
import { SERVER_URL } from '@Environment';

const SignIn = () => {
  const {
    localSignIn: { errorMsg, handleSignIn },
  } = useAuth();
  return (
    <Layout>
      <div className="login">
        <Form isLogin errorMessage={errorMsg} handleSubmit={handleSignIn} />
      </div>
      <SNSLoginButton strategy="github">깃허브로 로그인하기!</SNSLoginButton>
      <SNSLoginButton strategy="kakao">카카오로 로그인하기!</SNSLoginButton>
      <SNSLoginButton strategy="facebook">
        페이스북으로 로그인하기!
      </SNSLoginButton>
      <style jsx>{`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </Layout>
  );
};

export default SignIn;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { headers } = ctx.req;
    const cookie = !headers.cookie ? '' : headers.cookie;
    await axios.get(`${SERVER_URL}/api/user`, {
      withCredentials: true,
      headers: {
        cookie,
      },
    });
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

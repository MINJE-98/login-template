import { GetServerSideProps } from 'next';
import Head from 'next/head';

import axios from 'axios';
import { useAuth } from 'src/hooks/auth/context/AuthContext';

import Form from '@Components/common/organisms/Form';
import { SERVER_URL } from '@Environment';

const SignIn = () => {
  const {
    localSignIn: { errorMsg, handleSignIn },
  } = useAuth();
  return (
    <main>
      <Head>
        <title>로그인</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="login">
        <Form isLogin errorMessage={errorMsg} handleSubmit={handleSignIn} />
      </div>
    </main>
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

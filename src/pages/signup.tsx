import Head from 'next/head';

import { useAuth } from 'src/hooks/auth/context/AuthContext';

import Form from '@Components/common/organisms/Form';

const Signup = () => {
  const {
    LocalSignUp: { errorMsg, handleSignUp },
  } = useAuth();

  return (
    <main>
      <Head>
        <title>회원가입</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="login">
        <Form
          isLogin={false}
          errorMessage={errorMsg}
          handleSubmit={handleSignUp}
        />
      </div>
    </main>
  );
};

export default Signup;

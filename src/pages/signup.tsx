import { useAuth } from 'src/hooks/auth/context/AuthContext';

import Form from '@Components/form';
import Layout from '@Components/layout';

const Signup = () => {
  const {
    LocalSignUp: { errorMsg, handleSignUp },
  } = useAuth();

  return (
    <Layout>
      <div className="login">
        <Form
          isLogin={false}
          errorMessage={errorMsg}
          handleSubmit={handleSignUp}
        />
      </div>
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

export default Signup;

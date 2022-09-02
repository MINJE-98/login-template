import { useAuth } from 'src/hooks/auth/context/AuthContext';

import Form from '@Components/form';
import Layout from '@Components/layout';

const Login = () => {
  const {
    localSignIn: { errorMsg, handleSignIn },
  } = useAuth();
  return (
    <Layout>
      <div className="login">
        <Form isLogin errorMessage={errorMsg} handleSubmit={handleSignIn} />
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

export default Login;

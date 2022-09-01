import { useAuth } from 'src/hooks/auth/AuthContext';

import Form from '@Components/form';
import Layout from '@Components/layout';

const Login = () => {
  const {
    localLogin: { errorMsg, handleLogin },
  } = useAuth();
  return (
    <Layout>
      <div className="login">
        <Form isLogin errorMessage={errorMsg} handleSubmit={handleLogin} />
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

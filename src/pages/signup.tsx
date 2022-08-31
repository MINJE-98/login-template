/* eslint-disable react/jsx-no-bind */
import Router from 'next/router';
import { useState } from 'react';

import axios from 'axios';

import Form from '@Components/form';
import Layout from '@Components/layout';

const Signup = () => {
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (errorMsg) setErrorMsg('');

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    if (body.password !== e.currentTarget.password.value) {
      setErrorMsg(`The passwords don't match`);
      return;
    }

    try {
      const { data } = await axios.post('/api/signup', body);
      if (data.status === 200) {
        Router.push('/');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) setErrorMsg(error.message);
    }
  }

  return (
    <Layout>
      <div className="login">
        <Form isLogin={false} errorMessage={errorMsg} onSubmit={handleSubmit} />
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

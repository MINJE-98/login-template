import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

import axios from 'axios';

const useLocalSignUp = () => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (errorMsg) setErrorMsg('');

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
      rpassword: e.currentTarget.rpassword.value,
    };

    try {
      const result = await axios.post('/api/signup', body);
      if (result.status === 200) {
        router.push('/');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const { data } = error.response as any;
          setErrorMsg(data);
        }
      }
    }
  };
  return {
    handleSignUp,
    errorMsg,
  };
};
export default useLocalSignUp;

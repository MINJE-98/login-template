import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

import axios from 'axios';
import toast from 'react-hot-toast';

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
        toast.success('회원가입 성공!');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const { data } = error.response;
          if (typeof data === 'string') setErrorMsg(data);
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

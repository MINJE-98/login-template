import { useRouter } from 'next/router';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';

import axios from 'axios';

import UserInterface from '@Lib/db/interface/UserInterface';

const useLocalSignIn = (
  setUserInfo: Dispatch<SetStateAction<UserInterface | null>>
) => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (errorMsg) setErrorMsg('');

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    try {
      const res = await axios.post('/api/signin', body);

      if (res.status === 200) {
        setUserInfo(res.data.user);
        router.push('/');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 401) {
            setErrorMsg('사용자가 존재하지않습니다.');
            return;
          }
          const { data } = error.response;
          if (typeof data === 'string') setErrorMsg(data);
        }
      }
    }
  };
  return { handleSignIn, errorMsg };
};

export default useLocalSignIn;

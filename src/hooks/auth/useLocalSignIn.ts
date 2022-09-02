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
      setErrorMsg('유저 이름 또는 비밀번호가 잘못됐습니다.');
    }
  };
  return { handleSignIn, errorMsg };
};

export default useLocalSignIn;

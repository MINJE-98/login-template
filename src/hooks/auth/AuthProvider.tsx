/* eslint-disable react/jsx-no-constructed-context-values */
import { useRouter } from 'next/router';
import { ReactNode, useState } from 'react';

import axios from 'axios';
import { AuthContext } from 'src/hooks/auth/AuthContext';
import useLocalLogin from 'src/hooks/auth/useLocalLogin';

import UserInterface from '@Lib/db/interface/UserInterface';

interface AuthProviderProps {
  children: ReactNode;
  initUserInfo: UserInterface;
}
const AuthProvider = ({ children, initUserInfo }: AuthProviderProps) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<UserInterface | null>(initUserInfo);

  const localLogin = useLocalLogin(setUserInfo);
  const handleLogout = async () => {
    await axios.get('/api/signout');
    router.push('/signin');
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        localLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

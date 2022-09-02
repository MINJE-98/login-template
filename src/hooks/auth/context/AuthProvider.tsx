/* eslint-disable react/jsx-no-constructed-context-values */
import { useRouter } from 'next/router';
import { ReactNode, useState } from 'react';

import axios from 'axios';
import { AuthContext } from 'src/hooks/auth/context/AuthContext';
import useLocalSignIn from 'src/hooks/auth/useLocalSignIn';
import useLocalSignUp from 'src/hooks/auth/useLocalSignUp';

import UserInterface from '@Lib/db/interface/UserInterface';

interface AuthProviderProps {
  children: ReactNode;
  initUserInfo: UserInterface;
}
const AuthProvider = ({ children, initUserInfo }: AuthProviderProps) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<UserInterface | null>(initUserInfo);

  const localSignIn = useLocalSignIn(setUserInfo);
  const LocalSignUp = useLocalSignUp();
  const handleLogout = async () => {
    await axios.get('/api/signout');
    router.push('/signin');
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        localSignIn,
        LocalSignUp,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

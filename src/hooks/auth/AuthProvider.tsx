/* eslint-disable react/jsx-no-constructed-context-values */
import { ReactNode, useState } from 'react';

import axios from 'axios';
import { AuthContext } from 'src/hooks/auth/AuthContext';
import useLocalLogin from 'src/hooks/auth/useLocalLogin';

import UserInterface from '@Lib/db/interface/UserInterface';
import AuthContextInterface from 'src/hooks/auth/interface/authContextInterface';

interface AuthProviderProps {
  children: ReactNode;
  initUserInfo: UserInterface;
}
const AuthProvider = ({ children, initUserInfo }: AuthProviderProps) => {
  const [userInfo, setUserInfo] = useState(initUserInfo);
  const localLogin = useLocalLogin(setUserInfo);
  const handleLogout = () => {
    axios.get('/api/signout');
  };
  const value: AuthContextInterface = {
    userInfo,
    localLogin,
    handleLogout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

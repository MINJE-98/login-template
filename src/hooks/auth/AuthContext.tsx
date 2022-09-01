import { createContext, useContext } from 'react';

import AuthContextInterface from 'src/hooks/auth/interface/authContextInterface';

const AuthContext = createContext<AuthContextInterface>({
  userInfo: null,
  localLogin: {
    handleLogin: () => null,
    errorMsg: '',
  },
  handleLogout: () => null,
});
const useAuth = () => useContext(AuthContext);
export { AuthContext, useAuth };

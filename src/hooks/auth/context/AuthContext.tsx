import { createContext, useContext } from 'react';

import AuthContextInterface from 'src/hooks/auth/context/interface/authContextInterface';

const AuthContext = createContext<AuthContextInterface>({
  userInfo: null,
  localSignIn: {
    handleSignIn: () => null,
    errorMsg: '',
  },
  LocalSignUp: {
    handleSignUp: () => null,
    errorMsg: '',
  },
  handleLogout: () => null,
});
const useAuth = () => useContext(AuthContext);
export { AuthContext, useAuth };

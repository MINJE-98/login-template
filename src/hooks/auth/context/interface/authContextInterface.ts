// import { FormEvent } from 'react';

import UserInterface from '@Lib/db/interface/UserInterface';

export default interface AuthContextInterface {
  userInfo: UserInterface | null;
  localSignIn: {
    handleSignIn: any;
    errorMsg: string;
  };
  LocalSignUp: {
    handleSignUp: any;
    errorMsg: string;
  };
  handleLogout: any;
}

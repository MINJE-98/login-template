// import { FormEvent } from 'react';

import UserInterface from '@Lib/db/interface/UserInterface';

export default interface AuthContextInterface {
  userInfo: UserInterface | null;
  localLogin: {
    handleLogin: any;
    errorMsg: string;
  };
  handleLogout: any;
}

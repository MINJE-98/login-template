import UserInterface from '@Lib/db/interface/UserInterface';

export default interface CreateLocalUserInterface {
  username: UserInterface['username'];
  password: string;
  provider: UserInterface['provider'];
}

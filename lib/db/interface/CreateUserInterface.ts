import UserInterface from '@Lib/db/interface/UserInterface';

export default interface CreateUserInterface {
  username: UserInterface['username'];
  provider: UserInterface['provider'];
}

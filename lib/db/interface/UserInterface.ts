import { ObjectId } from 'mongodb';

export default interface UserInterface {
  _id?: ObjectId;
  provider?: string;
  createdAt: string;
  username: string;
  hash?: string;
  salt?: string;
}

import crypto from 'crypto';
import { Db, ObjectId } from 'mongodb';

import CreateLocalUserInterface from '@Lib/db/interface/CreateLocalUserInterface';
import CreateUserInterface from '@Lib/db/interface/CreateUserInterface';
import UserInterface from '@Lib/db/interface/UserInterface';

async function createLocalUser(db: Db, user: CreateLocalUserInterface) {
  const { provider, password, username } = user;
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');
  const userInfo: UserInterface = {
    _id: new ObjectId(),
    provider,
    createdAt: Date.now().toString(),
    username,
    hash,
    salt,
  };
  const collection = db.collection('users');
  collection.insertOne(userInfo);

  return userInfo;
}

async function createUser(db: Db, user: CreateUserInterface) {
  const { provider, username } = user;
  const userInfo: UserInterface = {
    _id: new ObjectId(),
    provider,
    createdAt: Date.now().toString(),
    username,
  };
  const collection = db.collection('users');
  collection.insertOne(userInfo);
  return userInfo;
}

export { createLocalUser, createUser };

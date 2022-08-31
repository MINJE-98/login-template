import { Db, ObjectId } from 'mongodb';

import UserInterface from '@Lib/db/interface/UserInterface';

async function findUser(db: Db, username: UserInterface['username']) {
  const collection = db.collection('users');
  const userInfo = await collection.findOne<UserInterface>({ username });

  return userInfo;
}

async function findUserWithUserId(db: Db, userId: UserInterface['_id']) {
  const collection = db.collection('users');
  const userInfo = await collection.findOne<UserInterface>({
    _id: new ObjectId(userId),
  });
  return userInfo;
}

export { findUser, findUserWithUserId };

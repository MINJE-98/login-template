import crypto from 'crypto';
import Local from 'passport-local';

import { findUser } from '@Lib/db/findUser';
import { getMongoDb } from '@Lib/db/mongoClient';

import UserInterface from '@Lib/db/interface/UserInterface';

function validatePassword(user: UserInterface, inputPassword: string) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex');
  const isPasswordsMatch = user.hash === inputHash;

  return isPasswordsMatch;
}

const localStrategy = new Local.Strategy(async (username, password, done) => {
  const db = await getMongoDb();

  const user = await findUser(db, username);
  if (!user) return done(null, false);
  if (validatePassword(user, password)) {
    return done(null, user);
  }
  return done(null, false);
});

export default localStrategy;

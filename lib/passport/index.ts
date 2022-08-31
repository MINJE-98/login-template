/* eslint-disable no-underscore-dangle */

import passport from 'passport';

import { findUserWithUserId } from '@Lib/db/findUser';
import { getMongoDb } from '@Lib/db/mongoClient';
import localStrategy from '@Lib/passport/strategy/localStrategy';

import UserInterface from '@Lib/db/interface/UserInterface';

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (user: UserInterface, done) => {
  const db = await getMongoDb();
  const userInfo = await findUserWithUserId(db, user._id);
  done(null, userInfo);
});

passport.use(localStrategy);

export default passport;

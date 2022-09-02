/* eslint-disable no-underscore-dangle */

import passport from 'passport';

import { findUserWithUserId } from '@Lib/db/findUser';
import { getMongoDb } from '@Lib/db/mongoClient';
import githubStrategy from '@Lib/passport/strategy/githubStrategy';
import googleStrategy from '@Lib/passport/strategy/googleStrategy';
import kakaoStrategy from '@Lib/passport/strategy/kakaoStrategy';
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
passport.use(githubStrategy);
passport.use(kakaoStrategy);
passport.use(googleStrategy);

export default passport;

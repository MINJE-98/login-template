import { Strategy } from 'passport-facebook';

import {
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  SERVER_URL,
} from '@Environment';
import { createUser } from '@Lib/db/createUser';
import { findUser } from '@Lib/db/findUser';
import { getMongoDb } from '@Lib/db/mongoClient';

import CreateUserInterface from '@Lib/db/interface/CreateUserInterface';

const facebookStrategy = new Strategy(
  {
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: `${SERVER_URL}/api/oauth/facebook/callback`,
  },
  async (_accessToken, _refreshToken, profile, done) => {
    const db = await getMongoDb();
    const { displayName: username, provider } = profile;

    if (!username) {
      done(null, false);
      return;
    }
    const strategyUserName = `${provider} ${username}`;
    const finnedUser = await findUser(db, strategyUserName);
    if (finnedUser) {
      done(null, finnedUser);
      return;
    }
    const newUserInfo: CreateUserInterface = {
      provider,
      username: strategyUserName,
    };
    const createdUser = await createUser(db, newUserInfo);
    done(null, createdUser);
  }
);

export default facebookStrategy;

import { Strategy } from 'passport-kakao';

import { KAKAO_CLIENT_ID, KAKAO_CLIENT_SECRET, SERVER_URL } from '@Environment';
import { createUser } from '@Lib/db/createUser';
import { findUser } from '@Lib/db/findUser';
import { getMongoDb } from '@Lib/db/mongoClient';

import CreateUserInterface from '@Lib/db/interface/CreateUserInterface';

const kakaoStrategy = new Strategy(
  {
    clientID: KAKAO_CLIENT_ID,
    clientSecret: KAKAO_CLIENT_SECRET,
    callbackURL: `${SERVER_URL}/api/oauth/kakao/callback`,
  },
  async (_accessToken, _refreshToken, profile, done) => {
    const db = await getMongoDb();
    const { username, provider } = profile;
    if (!username) {
      done(null, false);
      return;
    }

    const finnedUser = await findUser(db, username);
    if (finnedUser) {
      done(null, finnedUser);
      return;
    }
    const newUserInfo: CreateUserInterface = {
      provider,
      username,
    };
    const createdUser = await createUser(db, newUserInfo);
    done(null, createdUser);
  }
);

export default kakaoStrategy;

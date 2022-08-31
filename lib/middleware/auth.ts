import nextConnect from 'next-connect';

import passport from '@Lib/passport';
import session from '@Lib/session';

const auth = nextConnect()
  .use(session)
  .use(passport.initialize())
  .use(passport.session());

export default auth;

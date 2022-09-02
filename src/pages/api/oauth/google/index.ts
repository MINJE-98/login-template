import nextConnect from 'next-connect';

import auth from '@Lib/middleware/auth';
import passport from '@Lib/passport';

const handler = nextConnect();

handler.use(auth).get(passport.authenticate('google', { scope: ['profile'] }));

export default handler;

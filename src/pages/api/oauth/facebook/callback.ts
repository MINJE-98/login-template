import { NextApiRequest, NextApiResponse } from 'next';

import nextConnect from 'next-connect';

import auth from '@Lib/middleware/auth';
import passport from '@Lib/passport';

const handler = nextConnect();

handler
  .use(auth)
  .get(
    passport.authenticate('facebook', { failureRedirect: '/signin' }),
    async (req: NextApiRequest, res: NextApiResponse) => {
      res.redirect('/');
    }
  );

export default handler;

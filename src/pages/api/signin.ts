import { NextApiRequest, NextApiResponse } from 'next';

import nextConnect from 'next-connect';

import auth from '@Lib/middleware/auth';
import passport from '@Lib/passport';

import UserInterface from '@Lib/db/interface/UserInterface';

const handler = nextConnect();

handler.use(auth).post(
  passport.authenticate('local'),
  (
    req: NextApiRequest & {
      user: UserInterface;
    },
    res: NextApiResponse
  ) => {
    const { user } = req;
    return res.json({ user });
  }
);

export default handler;

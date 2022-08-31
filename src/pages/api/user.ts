import { NextApiRequest, NextApiResponse } from 'next';

import nextConnect from 'next-connect';

import auth from '@Lib/middleware/auth';

import UserInterface from '@Lib/db/interface/UserInterface';

const handler = nextConnect();

handler.use(auth).get(
  async (
    req: NextApiRequest & {
      user: UserInterface;
    },
    res: NextApiResponse
  ) => {
    const { user } = req;
    if (!user) return res.json({ user: null });
    return res.json({ user });
  }
);

export default handler;

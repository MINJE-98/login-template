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
    if (!user) return res.status(404).json({});
    return res.json({ user });
  }
);

export default handler;

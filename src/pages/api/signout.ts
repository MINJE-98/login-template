import { NextApiRequest, NextApiResponse } from 'next';

// import { Session } from 'express-session';
import nextConnect from 'next-connect';

import auth from '@Lib/middleware/auth';

const handler = nextConnect();
handler.use(auth).get(
  async (
    req: NextApiRequest & {
      session: any;
    },
    res: NextApiResponse
  ) => {
    await req.session.destroy();
    res.status(204).end();
  }
);

export default handler;

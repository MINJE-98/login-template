import { NextApiRequest, NextApiResponse } from 'next';

import nextConnect from 'next-connect';

import createUser from '@Lib/db/createUser';
import { getMongoDb } from '@Lib/db/mongoClient';
import auth from '@Lib/middleware/auth';

const handler = nextConnect();

handler.use(auth).post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body;

  if (!password) {
    return res.status(400).send('비밀번호를 입력해주세요.');
  }
  if (!username) {
    return res.status(400).send('사용자이름을 입력해주세요.');
  }
  const user = { username, password, provider: 'local' };
  const db = await getMongoDb();
  createUser(db, user);
  return res.json({ user });
});

export default handler;

import { NextApiRequest, NextApiResponse } from 'next';

import nextConnect from 'next-connect';

import { createLocalUser } from '@Lib/db/createUser';
import { findUser } from '@Lib/db/findUser';
import { getMongoDb } from '@Lib/db/mongoClient';
import auth from '@Lib/middleware/auth';

const handler = nextConnect();

handler.use(auth).post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password, rpassword } = req.body;

  if (!password) {
    return res.status(409).send('비밀번호를 입력해주세요.');
  }
  if (!rpassword) {
    return res.status(409).send('확인 비밀번호를 입력해주세요.');
  }
  if (!username) {
    return res.status(409).send('사용자이름을 입력해주세요.');
  }

  const user = { username, password, provider: 'local' };
  const db = await getMongoDb();
  const result = await findUser(db, username);
  if (result) return res.status(409).send('중복된 아이디입니다.');
  if (password !== rpassword) {
    return res.status(409).send('비밀번호가 일치하지 않습니다.');
  }
  createLocalUser(db, user);
  return res.json({ user });
});

export default handler;

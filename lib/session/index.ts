import MongoStore from 'connect-mongo';
import { IncomingMessage, ServerResponse } from 'http';
import nextSession from 'next-session';
import { promisifyStore } from 'next-session/lib/compat';
import { Session, SessionRecord } from 'next-session/lib/types';

import { getMongoClient } from '@Lib/db/mongoClient';

const mongoStore = MongoStore.create({
  clientPromise: getMongoClient(),
  stringify: false,
});

const getSession = nextSession({
  store: promisifyStore(mongoStore),
  name: '_login_template_session_',
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 2 * 7 * 24 * 60 * 60, // 2 weeks,
    path: '/',
    sameSite: 'strict',
  },
  touchAfter: 1 * 7 * 24 * 60 * 60, // 1 week
});

export default async function session(
  req: IncomingMessage & {
    session?: Session<SessionRecord> | undefined;
  },
  res: ServerResponse,
  next: any
) {
  await getSession(req, res);
  next();
}

import { MongoClient } from 'mongodb';

import { MONGODB_URI } from '@Environment';
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentiatlly
 * api 라우트에서 mongodb를 사용할때 연결이 끊기는 문제가 발생합니다.
 * 전역 변수에 mongodb를 선언, 유무 확인 후 Promise로 반환
 * https://github.com/vercel/next.js/pull/17666
 */
interface CustomNodeJSGlobal extends Global {
  mongoClientPromise: Promise<MongoClient>;
}
declare const global: CustomNodeJSGlobal;

export async function getMongoClient() {
  let { mongoClientPromise } = global;

  if (!mongoClientPromise) {
    const client = new MongoClient(MONGODB_URI);
    mongoClientPromise = client.connect();
  }
  return mongoClientPromise;
}

export async function getMongoDb() {
  const mongoClient = await getMongoClient();
  return mongoClient.db();
}

export const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID as string;
export const KAKAO_CLIENT_SECRET = !process.env.KAKAO_CLIENT_SECRET
  ? ''
  : process.env.KAKAO_CLIENT_SECRET;

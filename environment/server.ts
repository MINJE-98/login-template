export const SERVER_URL = !process.env.SERVER_URL
  ? 'http://localhost:3000/'
  : process.env.SERVER_URL;

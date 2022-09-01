/** @type {import('next').NextConfig} */
console.log('load env =>', process.env);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  },
};

module.exports = nextConfig;

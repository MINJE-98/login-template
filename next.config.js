/** @type {import('next').NextConfig} */
const Joi = require('joi');
const schema = Joi.object({
  GITHUB_ID: Joi.string().required(),
  GITHUB_SECRET: Joi.string().required(),
  MONGODB_URL: Joi.string().required(),
  TOKEN_SECRET: Joi.string().required(),
});

(async function () {
  try {
    await schema.validateAsync({
      GITHUB_ID: process.env.GITHUB_ID,
      GITHUB_SECRET: process.env.GITHUB_SECRET,
      MONGODB_URL: process.env.MONGODB_URL,
      TOKEN_SECRET: process.env.TOKEN_SECRET,
    });
  } catch (e) {
    throw Error(e);
  }
})();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

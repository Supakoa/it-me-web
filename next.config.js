/** @type {import('next').NextConfig} */
const DB_DOMAIN = 'cluster0.a0z3cim.mongodb.net';
const DB_USERNAME = 'vercel-admin-user';
const DB_PASSWORD = 'ZGLh4V57hbWrGqpU';

const env = {
  DB_URL: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_DOMAIN}/?retryWrites=true&w=majority`,
  DB_DATABASE: 'it_me',
};

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env,
};

module.exports = nextConfig;

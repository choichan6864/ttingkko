/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/discord-login',
        destination: process.env.API_ENDPOINT
      }
    ]
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

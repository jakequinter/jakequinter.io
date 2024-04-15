/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    domains: ['oku.ams3.cdn.digitaloceanspaces.com'],
  },
};

module.exports = nextConfig;

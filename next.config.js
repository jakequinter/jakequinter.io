/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true, serverComponentsExternalPackages: ['prisma'] },
  images: {
    domains: ['oku.ams3.cdn.digitaloceanspaces.com'],
  },
};

module.exports = nextConfig;

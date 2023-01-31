/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['avatars.mds.yandex.net'],
  },
}

module.exports = nextConfig

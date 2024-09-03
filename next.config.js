// @ts-check

/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  compiler: {
    styledComponents: true
  },
  images: {
    minimumCacheTTL: 31536000,
    formats: ['image/avif', 'image/webp']
  },

  webpack(config) {
    return config;
  }
};

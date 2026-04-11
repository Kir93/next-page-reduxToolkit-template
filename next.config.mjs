// @ts-check

/** @type {import('next').NextConfig} */

export default {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 31536000,
    formats: ['image/avif', 'image/webp']
  }
};

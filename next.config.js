/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [128, 176, 256, 384],
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;

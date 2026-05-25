/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [128, 176, 256, 384],
  },
  async redirects() {
    return [
      // Fix: non-www to www (permanent 301)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'vijayawadacallgirls.online' }],
        destination: 'https://www.vijayawadacallgirls.online/:path*',
        permanent: true,
      },
      // Fix: trailing slash redirects (permanent 301 to avoid "Page with redirect" in GSC)
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Robots-Tag', value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

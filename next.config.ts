import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'ckuwdnuyzovhythiqemf.supabase.co',
      },
    ],
  },
};

module.exports = {
  experimental: {
    appDir: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  compress: true,
  experimental: {
    optimizePackageImports: ['@iconify/react'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/gh/homarr-labs/**',
      },
      {
        protocol: 'https',
        hostname: 'hermes-agent.nousresearch.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

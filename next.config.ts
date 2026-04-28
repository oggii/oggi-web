import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  compress: true,
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
      {
        // Baseline security headers for every response. Covers Lighthouse's
        // HSTS, COOP, frame-ancestors and nosniff "Best Practices" audits.
        // frame-ancestors replaces X-Frame-Options because XFO on top-level
        // navigations breaks LinkedIn's iOS in-app WKWebView. COOP uses
        // allow-popups for the same reason — strict same-origin breaks
        // window.opener handoff in embedded webviews.
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self'",
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Bare root -> default locale. Defined here (not in middleware) so Vercel
      // resolves it at the edge before middleware runs, saving a hop.
      {
        source: '/',
        destination: '/de',
        permanent: true,
      },
    ];
  },
};

export default withPayload(nextConfig);

import type { NextConfig } from "next";
const domains = process.env.NEXT_PUBLIC_STRAPI_MEDIA_DOMAIN
  ? process.env.NEXT_PUBLIC_STRAPI_MEDIA_DOMAIN.split(",")
  : [];

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: domains,
    qualities: [25, 50, 70, 75, 85, 90, 100],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // {
          //   key: "Content-Security-Policy",
          //   value: "default-src 'self'; script-src 'self' https://apis.google.com; style-src 'self' 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self';",
          // },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(self), microphone=()",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:3000",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

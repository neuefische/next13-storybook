/// @ts-check

/**
 *
 * @type {import('next').NextConfig} config
 */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: true,
    formats: ["image/webp"],
  },
};

module.exports = config;

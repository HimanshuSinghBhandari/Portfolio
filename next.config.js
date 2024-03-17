/** @type {import('next').NextConfig} */
require('dotenv').config()
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
    openAnalyzer: false,
  });
const nextConfig = {
    reactStrictMode: false,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = withBundleAnalyzer(nextConfig);

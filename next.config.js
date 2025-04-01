/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Add the experimental flag for Server Actions
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;

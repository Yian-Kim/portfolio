/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: isProd ? 'export' : 'standalone',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

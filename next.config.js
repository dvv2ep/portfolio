/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for production deployments
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization settings
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },

  // Environment variables that should be exposed to the browser
  env: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  },

  // Customize webpack config if needed
  webpack: (config, { dev, isServer }) => {
    // Add custom webpack config here if needed
    return config
  },
}

module.exports = nextConfig

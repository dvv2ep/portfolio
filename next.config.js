/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports
  output: 'standalone',
  
  // Disable image optimization as it's not needed for static exports
  images: {
    unoptimized: true,
  },

  // Add any other necessary configuration options here
}

module.exports = nextConfig

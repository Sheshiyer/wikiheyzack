/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // If client-side (browser), provide empty modules for Node.js modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
  // This ensures all pages are statically generated at build time
  output: 'export',
  // Disable image optimization since we're using static export
  images: {
    unoptimized: true,
  },
  // Trailing slash for better compatibility with static hosting
  trailingSlash: true,
}

module.exports = nextConfig

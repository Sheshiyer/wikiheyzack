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
  // Server-side rendering enabled (removed static export)
  // Disable image optimization if needed
  images: {
    unoptimized: true,
  },
  // Remove trailing slash as it can cause routing issues
  trailingSlash: false,
}

module.exports = nextConfig

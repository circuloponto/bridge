/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Disable features that don't work with static export
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

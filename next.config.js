/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    typedRoutes: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}

export default nextConfig

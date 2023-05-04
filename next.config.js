/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    runtime: 'edge',
    typedRoutes: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}

export default nextConfig

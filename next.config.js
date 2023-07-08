/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["b.zmtcdn.com", "i2.wp.com", "*"]
  }
}

module.exports = nextConfig

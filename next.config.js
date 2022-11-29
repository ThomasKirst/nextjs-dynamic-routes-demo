/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["m.media-amazon.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

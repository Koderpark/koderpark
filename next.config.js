/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "koderpark.github.io",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

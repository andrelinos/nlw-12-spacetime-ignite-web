/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      `${process.env.NEXT_PUBLIC_IP_ADDRESS}`,
    ],
  },
};

module.exports = nextConfig;

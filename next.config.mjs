/** @type {import('next').NextConfig} */
const nextConfig = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn1.leapcell.io',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;

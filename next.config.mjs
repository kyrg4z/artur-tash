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
        pathname: '/**', // Corrected: Allow all image paths
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**', // Corrected: Allow all image paths
      }
    ],
  },
};

export default nextConfig;

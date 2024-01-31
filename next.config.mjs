/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/portfolio",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'example.com',
              port: '',
              pathname: '/account123/**',
            },
          ],
    },
};

export default nextConfig;

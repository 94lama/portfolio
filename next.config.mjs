/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/portfolio",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '94lama.github.io',
              port: '',
              pathname: '/portfolio/**',
              pathname: '/portfolio/**',
            },
          ],
        unoptimized: true
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/*",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
              protocol: 'http',
              hostname: 'http://94lama.github.io/portfolio',
              port: '',
              //pathname: '/portfolio/**',
            },
          ],
        unoptimized: true
    },
};

export default nextConfig;

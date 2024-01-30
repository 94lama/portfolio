/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/portfolio",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
        domains : ['localhost:3000']
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/portfolio",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
        domains : ['https://94lama.github.io/portfolio']
    },
};

export default nextConfig;

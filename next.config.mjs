/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["via.placeholder.com", "tailwindui.com"],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/ja',
                permanent: false,
            },
        ];
    },
};

export default nextConfig;

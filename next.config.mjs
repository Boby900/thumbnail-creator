/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns:[
            {
                hostname: "affable-avocet-293.convex.cloud"
            }
        ]
    }
};

export default nextConfig;

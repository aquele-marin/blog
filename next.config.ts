import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [new URL("https://img.daisyui.com/images/**")],
    },
};

export default nextConfig;

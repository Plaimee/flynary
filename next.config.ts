import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // basePath: "/flynary",
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "funcslash.com",
        port: "",
        pathname: "/flynary/**",
      },
    ],
  },
};

export default nextConfig;

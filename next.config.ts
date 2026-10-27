import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Nếu deploy lên repo <username>.github.io thì basePath không cần set.
  // Nếu deploy lên repo con ví dụ <username>.github.io/portfolio thì đổi basePath thành '/portfolio'
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  trailingSlash: true,
};

export default nextConfig;

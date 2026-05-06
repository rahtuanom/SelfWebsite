import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Aktifkan export statis (wajib untuk GitHub Pages)
  output: "export",
  
  // Base path menyesuaikan dengan nama repository kamu di GitHub
  basePath: "/SelfWebsite",
  
  // Menonaktifkan optimasi image default karena export statis tidak mendukungnya
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Aktifkan export statis (wajib untuk GitHub Pages)
  output: "export",
  
  // Memastikan folder statis dibentuk dengan index.html (misal: /about/index.html)
  trailingSlash: true,
  
  // Menonaktifkan optimasi image default karena export statis tidak mendukungnya
  images: {
    unoptimized: true,
  },
  
  // Mengizinkan host Cloud IDE untuk HMR (Hot Module Replacement)
  allowedDevOrigins: ['10.170.157.20'],
};

export default nextConfig;

// next.config.mjs (ES Module)
const nextConfig = {
  output: "export",
  distDir: "dist", // Keep this for static export
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },
};

export default nextConfig;

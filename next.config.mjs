// next.config.mjs (ES Module)
const nextConfig = {
    output: "export",
    distDir: "dist", // Keep this for static export
    images: {
      unoptimized: true, // Disable Next.js image optimization
    },
  };
  
  export default nextConfig;
  
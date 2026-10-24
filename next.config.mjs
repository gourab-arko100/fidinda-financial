/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },

  async redirects() {
    return [
      // Uncomment to redirect old fidindasolutions.com URLs to the new routes.
      // permanent: true sends a 308 (good for SEO).
      //
      // { source: "/accounting", destination: "/services/accounting", permanent: true },
      // { source: "/taxation", destination: "/services/taxation", permanent: true },
      // { source: "/auditing", destination: "/services/auditing", permanent: true },
      // { source: "/our-packages", destination: "/packages", permanent: true },
      // { source: "/request-for-quotation", destination: "/request-quotation", permanent: true },
    ];
  },
};

export default nextConfig;

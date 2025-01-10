import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 images:{
 remotePatterns:[ {
    protocol:'https',
    hostname:'cdn.policybazaar.ae',
  },
  {
    protocol: 'https',
    hostname: 'upload.wikimedia.org',
  },
  {
    protocol:'https',
    hostname:'flagcdn.com',
  },
  {
   hostname:'example.com',
  }
],

 },
 webpack(config , { isServer }) {
  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });
  return config;
},

  reactStrictMode: true,

};

export default nextConfig;

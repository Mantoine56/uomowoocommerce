/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      process.env.WORDPRESS_IMAGE_DOMAIN || "antoinee4.sg-host.com",
      "react-ecommerce.local",
      "react-ecommerce-v2.lougiequisel.com"
    ]
  }
};

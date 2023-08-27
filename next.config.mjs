/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  experimental: { appDir: true },
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;

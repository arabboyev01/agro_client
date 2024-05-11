/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["uz", "en", "ru"],
    defaultLocale: "uz",
    localeDetection: false,
  },
};

export default nextConfig;

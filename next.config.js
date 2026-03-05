/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Next.js 15 требует явного включения экспериментальных фич
  experimental: {
    // Пустой объект, если нужны будут фичи
  },
}

module.exports = nextConfig

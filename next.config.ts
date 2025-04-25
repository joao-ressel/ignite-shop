/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.stripe.com', // Domínio da sua imagem
        pathname: '/**', // Caminho para permitir todas as imagens
      },
    ],
  },
};

module.exports = nextConfig;

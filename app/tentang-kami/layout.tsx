import { Metadata } from 'next';

// Pastikan domain sesuai dengan deployment Anda
const BASE_URL = 'https://dewatacomm.com';

export const metadata: Metadata = {
  title: 'Tentang Kami | Dewatacomm Pusat Gadget & Service Bali',
  description: 'Kenali Dewatacomm, salah satu pusat penjualan gadget resmi, laptop, aksesoris premium, serta tempat perbaikan device hardware dan software terpercaya bagi masyarakat Bali.',
  keywords: ['Profil Dewatacomm', 'Toko HP Resmi Bali', 'Service HP Terpercaya Gianyar', 'Gadget Store Bali', 'Dewatacomm Gianyar'],
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/about`,
    title: 'Tentang Kami | Dewatacomm Pusat Gadget & Service Bali',
    description: 'Didirikan dengan komitmen menghadirkan solusi teknologi terbaik. Unit original bergaransi resmi didukung tim layanan purna jual yang responsif.',
    siteName: 'Dewatacomm',
    images: [
      {
        url: `${BASE_URL}/dewatacomm-location.webp`, // Menggunakan URL absolut
        width: 1200,
        height: 630,
        alt: 'Tentang Dewatacomm - Pusat Gadget & Service Bali',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Tentang Kami | Dewatacomm Pusat Gadget & Service Bali',
    description: 'Didirikan dengan komitmen menghadirkan solusi teknologi terbaik. Unit original bergaransi resmi didukung tim layanan purna jual yang responsif.',
    images: [`${BASE_URL}/dewatacomm-location.webp`], // Menggunakan URL absolut
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
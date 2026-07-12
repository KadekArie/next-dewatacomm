import { Metadata } from 'next';

// Menggunakan domain utama untuk konsistensi SEO
const BASE_URL = 'https://dewatacomm.com';

export const metadata: Metadata = {
  title: 'Layanan Service HP & Tukar Tambah | Dewatacomm Gianyar',
  description: 'Layanan profesional Dewatacomm Gianyar: service HP Android & iOS, ganti LCD/baterai, perbaikan IC motherboard mati total, serta jual beli tukar tambah gadget bergaransi.',
  keywords: ['Service HP Gianyar', 'Tukar Tambah HP Bali', 'Ganti LCD HP Ubud', 'Perbaikan IC Motherboard', 'Service iPhone Gianyar'],
  
  alternates: {
    canonical: `${BASE_URL}/layanan`,
  },
  
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/layanan`,
    title: 'Layanan Service HP & Tukar Tambah | Dewatacomm Gianyar',
    description: 'Dewatacomm menghadirkan layanan menyeluruh untuk kebutuhan digital Anda. Ditangani secara profesional, transparan, dan bergaransi toko.',
    siteName: 'Dewatacomm',
    images: [
      {
        url: `${BASE_URL}/dewatacomm-location.webp`, // URL Absolut domain utama
        width: 1200,
        height: 630,
        alt: 'Lokasi Toko Dewatacomm Bali',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Layanan Service HP & Tukar Tambah | Dewatacomm Gianyar',
    description: 'Dewatacomm menghadirkan layanan menyeluruh untuk kebutuhan digital Anda. Ditangani secara profesional, transparan, dan bergaransi toko.',
    images: [`${BASE_URL}/dewatacomm-location.webp`],
  }
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
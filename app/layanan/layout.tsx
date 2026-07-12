import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Layanan Service HP & Tukar Tambah | Dewatacomm Gianyar',
  description: 'Layanan profesional Dewatacomm Gianyar: service HP Android & iOS, ganti LCD/baterai, perbaikan IC motherboard mati total, serta jual beli tukar tambah gadget bergaransi.',
  keywords: ['Service HP Gianyar', 'Tukar Tambah HP Bali', 'Ganti LCD HP Ubud', 'Perbaikan IC Motherboard', 'Service iPhone Gianyar'],
  alternates: {
    canonical: 'https://dewatacomm.com/layanan',
  },
  openGraph: {
    type: 'website',
    url: 'https://dewatacomm.com/layanan',
    title: 'Layanan Service HP & Tukar Tambah | Dewatacomm Gianyar',
    description: 'Dewatacomm menghadirkan layanan menyeluruh untuk kebutuhan digital Anda. Ditangani secara profesional, transparan, dan bergaransi toko.',
    images: [
      {
        url: 'https://dewatacomm.vercel.app/dewatacomm-location.webp',
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
    images: ['https://dewatacomm.vercel.app/dewatacomm-location.webp'],
  }
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
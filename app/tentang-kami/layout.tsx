import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami | Dewatacomm Pusat Gadget & Service Bali',
  description: 'Kenali Dewatacomm, salah satu pusat penjualan gadget resmi, laptop, aksesoris premium, serta tempat perbaikan device hardware dan software terpercaya bagi masyarakat Bali.',
  keywords: ['Profil Dewatacomm', 'Toko HP Resmi Bali', 'Service HP Terpercaya Gianyar', 'Gadget Store Bali', 'Dewatacomm Gianyar'],
  alternates: {
    canonical: 'https://dewatacomm.com/about',
  },
  openGraph: {
    type: 'website',
    url: 'https://dewatacomm.com/about',
    title: 'Tentang Kami | Dewatacomm Pusat Gadget & Service Bali',
    description: 'Didirikan dengan komitmen menghadirkan solusi teknologi terbaik. Unit original bergaransi resmi didukung tim layanan purna jual yang responsif.',
    images: [
      {
        url: 'https://dewatacomm.com/assets/dewatacomm-location.webp',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tentang Kami | Dewatacomm Pusat Gadget & Service Bali',
    description: 'Didirikan dengan komitmen menghadirkan solusi teknologi terbaik. Unit original bergaransi resmi didukung tim layanan purna jual yang responsif.',
    images: ['https://dewatacomm.com/assets/dewatacomm-location.webp'],
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
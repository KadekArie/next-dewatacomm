import { Metadata } from 'next';

// Pastikan domain sesuai dengan deployment produksi Anda
const BASE_URL = 'https://dewatacomm.com';

export const metadata: Metadata = {
  title: 'Syarat dan Ketentuan | Dewatacomm Pusat Gadget & Service Bali',
  description: 'Syarat dan Ketentuan Dewatacomm mengatur regulasi transaksi jual beli gadget, aksesoris, ketentuan garansi, serta alur layanan perbaikan service HP di Bali.',
  keywords: ['Syarat Ketentuan Dewatacomm', 'Garansi Service Dewatacomm', 'Aturan Transaksi HP Bali'],
  
  alternates: {
    canonical: `${BASE_URL}/syarat-ketentuan`,
  },
  
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/syarat-ketentuan`,
    title: 'Syarat dan Ketentuan | Dewatacomm Pusat Gadget & Service Bali',
    description: 'Syarat dan ketentuan ini mengatur penggunaan website Dewatacomm dan layanan transaksi jual beli serta perbaikan gadget yang kami sediakan.',
    siteName: 'Dewatacomm',
    images: [
      {
        url: `${BASE_URL}/dewatacomm-location.webp`, // URL Absolut
        width: 1200,
        height: 630,
        alt: 'Lokasi Toko Dewatacomm Bali',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Syarat dan Ketentuan | Dewatacomm Pusat Gadget & Service Bali',
    description: 'Syarat dan ketentuan ini mengatur penggunaan website Dewatacomm dan layanan transaksi jual beli serta perbaikan gadget yang kami sediakan.',
    images: [`${BASE_URL}/dewatacomm-location.webp`], // URL Absolut
  }
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
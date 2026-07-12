import { Metadata } from 'next';

// Menggunakan domain utama untuk konsistensi SEO
const BASE_URL = 'https://dewatacomm.com';

export const metadata: Metadata = {
  title: 'Hubungi Kami | Dewatacomm Gianyar Bali',
  description: 'Hubungi Dewatacomm Gianyar untuk konsultasi perbaikan service HP, cek ketersediaan stok smartphone terbaru, aksesoris, atau penaksiran harga tukar tambah.',
  keywords: ['Kontak Dewatacomm', 'Alamat Dewatacomm Gianyar', 'Nomor Telepon Dewatacomm', 'WhatsApp Dewatacomm Bali'],
  
  alternates: {
    canonical: `${BASE_URL}/hubungi-kami`,
  },
  
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/hubungi-kami`,
    title: 'Hubungi Kami | Dewatacomm Gianyar Bali',
    description: 'Punya pertanyaan mengenai stok gadget terbaru atau ingin melakukan konsultasi kerusakan service? Tim Dewatacomm siap membantu Anda.',
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
    title: 'Hubungi Kami | Dewatacomm Gianyar Bali',
    description: 'Punya pertanyaan mengenai stok gadget terbaru atau ingin melakukan konsultasi kerusakan service? Tim Dewatacomm siap membantu Anda.',
    images: [`${BASE_URL}/dewatacomm-location.webp`],
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
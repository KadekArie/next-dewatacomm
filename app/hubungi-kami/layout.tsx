import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hubungi Kami | Dewatacomm Gianyar Bali',
  description: 'Hubungi Dewatacomm Gianyar untuk konsultasi perbaikan service HP, cek ketersediaan stok smartphone terbaru, aksesoris, atau penaksiran harga tukar tambah.',
  keywords: ['Kontak Dewatacomm', 'Alamat Dewatacomm Gianyar', 'Nomor Telepon Dewatacomm', 'WhatsApp Dewatacomm Bali'],
  alternates: {
    canonical: 'https://dewatacomm.com/hubungi-kami',
  },
  openGraph: {
    type: 'website',
    url: 'https://dewatacomm.com/hubungi-kami',
    title: 'Hubungi Kami | Dewatacomm Gianyar Bali',
    description: 'Punya pertanyaan mengenai stok gadget terbaru atau ingin melakukan konsultasi kerusakan service? Tim Dewatacomm siap membantu Anda.',
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
    title: 'Hubungi Kami | Dewatacomm Gianyar Bali',
    description: 'Punya pertanyaan mengenai stok gadget terbaru atau ingin melakukan konsultasi kerusakan service? Tim Dewatacomm siap membantu Anda.',
    images: ['https://dewatacomm.vercel.app/dewatacomm-location.webp'],
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi | Dewatacomm Pusat Gadget & Service Bali',
  description: 'Kebijakan Privasi Dewatacomm. Kami berkomitmen untuk melindungi informasi pribadi dan data log pengunjung website kami dengan transparan dan aman.',
  keywords: ['Kebijakan Privasi Dewatacomm', 'Privacy Policy Dewatacomm', 'Keamanan Data Dewatacomm'],
  alternates: {
    canonical: 'https://dewatacomm.com/kebijakan-privasi',
  },
  openGraph: {
    type: 'website',
    url: 'https://dewatacomm.com/kebijakan-privasi',
    title: 'Kebijakan Privasi | Dewatacomm Pusat Gadget & Service Bali',
    description: 'Dokumen Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan dan dicatat oleh Dewatacomm dan bagaimana kami menggunakannya.',
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
    title: 'Kebijakan Privasi | Dewatacomm Pusat Gadget & Service Bali',
    description: 'Dokumen Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan dan dicatat oleh Dewatacomm dan bagaimana kami menggunakannya.',
    images: ['https://dewatacomm.vercel.app/dewatacomm-location.webp'],
  }
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
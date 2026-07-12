import { Metadata } from 'next';

// Menggunakan domain utama untuk konsistensi SEO
const BASE_URL = 'https://dewatacomm.com';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi | Dewatacomm Pusat Gadget & Service Bali',
  description: 'Kebijakan Privasi Dewatacomm. Kami berkomitmen untuk melindungi informasi pribadi dan data log pengunjung website kami dengan transparan dan aman.',
  keywords: ['Kebijakan Privasi Dewatacomm', 'Privacy Policy Dewatacomm', 'Keamanan Data Dewatacomm'],
  
  alternates: {
    canonical: `${BASE_URL}/kebijakan-privasi`,
  },
  
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/kebijakan-privasi`,
    title: 'Kebijakan Privasi | Dewatacomm Pusat Gadget & Service Bali',
    description: 'Dokumen Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan dan dicatat oleh Dewatacomm dan bagaimana kami menggunakannya.',
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
    title: 'Kebijakan Privasi | Dewatacomm Pusat Gadget & Service Bali',
    description: 'Dokumen Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan dan dicatat oleh Dewatacomm dan bagaimana kami menggunakannya.',
    images: [`${BASE_URL}/dewatacomm-location.webp`],
  }
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
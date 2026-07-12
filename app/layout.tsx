import type { Metadata } from "next";
import "./globals.css";
// Impor Header dan Footer dari folder components yang sejajar dengan folder app
import Header from "../components/Header";
import Footer from "../components/Footer";

// 1. DATA METADATA TEROPTIMASI (UNTUK SOSIAL MEDIA & SEO)
export const metadata: Metadata = {
  title: "Dewatacomm | Pusat Gadget Bali & Service HP Terpercaya",
  description: "Dewatacomm Pusat Gadget Bali menyediakan smartphone, laptop original bergaransi resmi, dan aksesoris terlengkap. Layanan service HP hardware & software transparan di Gianyar, Bali.",
  keywords: ["Dewatacomm", "Pusat Gadget Bali", "Service HP Bali", "Jual Beli HP Gianyar"],
  
  // TAMBAHKAN LOGO FAVICON DI SINI
  icons: {
    icon: "/dewatacomm-logo.ico",
    shortcut: "/dewatacomm-logo.ico",
    apple: "/dewatacomm-logo.ico",
  },

  openGraph: {
    type: "website",
    url: "https://dewatacomm.com/",
    title: "Dewatacomm | Pusat Gadget Bali & Service HP Terpercaya",
    description: "Pusat penjualan smartphone, laptop original, and tempat perbaikan device terbaik, jujur, dan bergaransi toko di Bali.",
    images: [
      {
        url: "https://dewatacomm.vercel.app/dewatacomm-location.webp",
        width: 1200,
        height: 630,
        alt: "Lokasi Toko Dewatacomm Bali",
      },
    ],
  },
};

// 2. KOMPONEN UTAMA ROOT LAYOUT
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Header />       {/* Header otomatis terpasang di paling atas semua halaman */}
        {children}       {/* Konten utama dari page.tsx akan otomatis disuntikkan di sini */}
        <Footer />       {/* Footer otomatis terpasang di paling bawah semua halaman */}
      </body>
    </html>
  );
}
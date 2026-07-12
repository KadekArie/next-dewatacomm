import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// 1. DATA METADATA TEROPTIMASI DENGAN OG TAGS LENGKAP
export const metadata: Metadata = {
  title: "Dewatacomm | Pusat Gadget Bali & Service HP Terpercaya",
  description: "Dewatacomm Pusat Gadget Bali menyediakan smartphone, laptop original bergaransi resmi, dan aksesoris terlengkap. Layanan service HP hardware & software transparan di Gianyar, Bali.",
  keywords: ["Dewatacomm", "Pusat Gadget Bali", "Service HP Bali", "Jual Beli HP Gianyar"],
  
  icons: {
    icon: "/dewatacomm-logo.ico",
    shortcut: "/dewatacomm-logo.ico",
    apple: "/dewatacomm-logo.ico",
  },

  // ─── PERBAIKAN UTAMA: OG TAGS UNTUK WHATSAPP / FACEBOOK ───
  openGraph: {
    type: "website",
    url: "https://dewatacomm.com/",
    title: "Dewatacomm | Pusat Gadget Bali & Service HP Terpercaya",
    description: "Pusat penjualan smartphone, laptop original, dan tempat perbaikan device terbaik, jujur, dan bergaransi toko di Bali.",
    siteName: "Dewatacomm",
    images: [
      {
        // Tips: Menggunakan root path absolut agar langsung terbaca dari folder public baik saat staging maupun production
        url: "/dewatacomm-location.webp", 
        width: 1200,
        height: 630,
        alt: "Lokasi Toko Dewatacomm Bali",
      },
    ],
  },

  // ─── OG TAGS TAMBAHAN UNTUK TWITTER / X CARD ───
  twitter: {
    card: "summary_large_image",
    title: "Dewatacomm | Pusat Gadget Bali & Service HP Terpercaya",
    description: "Pusat penjualan smartphone, laptop original, dan tempat perbaikan device terbaik, jujur, dan bergaransi toko di Bali.",
    images: ["/dewatacomm-location.webp"],
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
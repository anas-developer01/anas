import type { Metadata, Viewport } from "next";
import { Amiri, Cormorant_Garamond, Great_Vibes, Jost } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-serif" });
const script = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-script" });
const arabic = Amiri({ subsets: ["arabic"], weight: ["400", "700"], variable: "--font-arabic" });
const sans = Jost({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Anas & Iram — Wedding Invitation",
  description: "You are cordially invited to the wedding of Anas Rasool & Iram Nasir — Mehndi 12 Nov, Barat 14 Nov, Walima 15 Nov 2026.",
  openGraph: {
    title: "Anas & Iram — Wedding Invitation",
    description: "Mehndi 12 Nov · Barat 14 Nov · Walima 15 Nov 2026 · Hasilpur",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e3d2b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${script.variable} ${arabic.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

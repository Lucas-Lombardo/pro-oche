import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/app/components/CartProvider";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://my-oche.vercel.app"),
  title: {
    default: "My Oche — Custom Folding Darts Oches",
    template: "%s · My Oche",
  },
  description:
    "Premium, fully customisable folding darts oches, handmade in Stockton-on-Tees. Your colours, your club, your game — from £149.",
  keywords: [
    "darts oche",
    "folding oche",
    "custom darts mat",
    "darts throw line",
    "My Oche",
  ],
  openGraph: {
    title: "My Oche — Custom Folding Darts Oches",
    description:
      "Premium, fully customisable folding darts oches, handmade in Stockton-on-Tees. From £149.",
    type: "website",
    locale: "en_GB",
  },
};

export const viewport = {
  themeColor: "#0e0e0e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

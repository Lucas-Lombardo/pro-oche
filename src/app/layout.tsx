import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pro Oche — Your Home. Your Stage.",
  description:
    "The premium all-in-one dart oche setup. LED backlighting, foldable design, full-length throwing mat. Transform any room into a pro darts stage in seconds.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Pro Oche — Your Home. Your Stage.",
    description:
      "The premium all-in-one dart oche setup. Transform any room into a pro darts stage.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

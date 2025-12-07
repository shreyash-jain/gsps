import type { Metadata, Viewport } from "next";
import { Baloo_2, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const playfulSans = Baloo_2({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gyan Sagar Play School",
  description:
    "Playgroup, Nursery, LKG, UKG | Montessori-inspired preschool and day care in Sagar.",
};

export const viewport: Viewport = {
  themeColor: "#cbd5e1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfulSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />
        <main className="min-h-[calc(100vh-64px-80px)]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

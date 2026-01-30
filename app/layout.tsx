import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ppMori } from "./font";
import "./globals.css";
import Nav from "@/src/components/sections/Nav";
import Footer from "@/src/components/sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Federated Engineers",
  description:
    "A collaborative pool of Data Engineers, building data & AI systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ppMori.variable} antialiased`}
        suppressHydrationWarning
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

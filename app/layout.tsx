import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ppMori } from "./font";
import "./globals.css";
import Nav from "@/src/components/sections/Nav";
import Footer from "@/src/components/sections/Footer";
import { Provider } from "react-redux";
import { store } from "@/src/lib/redux/store";
import { ReduxProvider } from "@/src/lib/providers/ReduxProviders";
import { ModalController } from "@/src/components/modals/ModalController";

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
        className={`${geistSans.variable} ${geistMono.variable} ${ppMori.variable} antialiased font-mori`}
        suppressHydrationWarning
      >
        <ReduxProvider>
          <ModalController />
          <Nav />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}

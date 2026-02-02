import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import GooeyNav from "@/components/ui/GooeyNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "akdil practice",
  description: "Created to practice NextJS 16 features",
};

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
  { label: "Random Anime", href: "/RandomAnime" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="text-white py-8 px-4 w-full flex justify-center items-center sm:gap-8 border-b  flex-col sm:flex-row gap-8 ">
          <span className="sm:text-4xl text-2xl font-extrabold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">/AscendoByArchon</span>

          <GooeyNav
            
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]} />
        </header>
        {children}

      </body>
    </html>
  );
}

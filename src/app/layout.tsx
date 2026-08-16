import type { Metadata } from "next";
import { Public_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "SOLE CULTURE",
  description: "Create your first customizable sneakers. Designed for the bold.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} ${spaceMono.variable} font-sans text-brand-black bg-brand-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}

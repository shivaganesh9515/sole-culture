import type { Metadata } from "next";
import { Public_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "SOLE CULTURE",
  description:
    "Create your first customizable sneakers. From concept to market dominance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${publicSans.variable} ${spaceMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-brand-black bg-brand-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

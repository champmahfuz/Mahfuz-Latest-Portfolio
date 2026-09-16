import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Mahfuz Rahman  | Full Stack Web Developer Portfolio",
  description:
    "Professional portfolio of Md Mahfuz Rahman - Full Stack Web Developer specializing in React.js, Next.js, Node.js, Express, TypeScript, and MongoDB with 4+ years of experience.",
  keywords: [
    "Md Mahfuz Rahman",
    "Full Stack Web Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer Dhaka",
    "Portfolio",
  ],
  authors: [{ name: "Md Mahfuz Rahman" }],
  openGraph: {
    title: "Md Mahfuz Rahman | Full Stack Web Developer Portfolio",
    description:
      "Full Stack Web Developer with ~4 years experience crafting pixel-perfect, scalable web apps with React JS, Next.js, and Node.js.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#080c14] text-slate-100 antialiased"
      >
        {children}
      </body>
    </html>
  );
}

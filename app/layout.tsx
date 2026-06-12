import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NexuslineAI — AI Automation Agency | Ipswich, Suffolk",
    template: "%s | NexuslineAI",
  },
  description:
    "NexuslineAI builds AI-powered automation systems for UK SMEs. Eliminate manual tasks, run your back-office 24/7. Based in Ipswich, Suffolk.",
  keywords: [
    "AI automation",
    "workflow automation",
    "voice agents",
    "lead capture automation",
    "back-office automation",
    "n8n automation",
    "Claude AI",
    "Ipswich",
    "Suffolk",
    "UK SME automation",
  ],
  authors: [{ name: "NexuslineAI Ltd" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "NexuslineAI",
    title: "NexuslineAI — AI Automation Agency | Ipswich, Suffolk",
    description:
      "AI-powered automation systems for UK SMEs. Eliminate manual tasks and run your back-office 24/7.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#0a0f1e] text-slate-200">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

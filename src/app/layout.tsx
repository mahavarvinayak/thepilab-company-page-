import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Π Lab - Intelligence Engineered",
  description: "An independent automation and AI collective merging human creativity and artificial intelligence into powerful, intelligent systems.",
  keywords: ["Π Lab", "AI", "Automation", "Intelligence", "SaaS", "Web Development", "AI Integration"],
  authors: [{ name: "The Π Lab Team" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "The Π Lab - Intelligence Engineered",
    description: "An independent automation and AI collective merging human creativity and artificial intelligence.",
    url: "https://thepilab.io",
    siteName: "The Π Lab",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/KzNVDmD8/Gemini-Generated-Image-pnntc2pnntc2pnnt.png",
        width: 1200,
        height: 630,
        alt: "The Π Lab Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Π Lab - Intelligence Engineered",
    description: "An independent automation and AI collective merging human creativity and artificial intelligence.",
    images: ["https://i.postimg.cc/KzNVDmD8/Gemini-Generated-Image-pnntc2pnntc2pnnt.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

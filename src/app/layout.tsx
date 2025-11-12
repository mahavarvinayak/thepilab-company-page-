import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Π Lab - Intelligence Engineered",
    template: "%s | The Π Lab",
  },
  description:
    "An independent automation and AI collective merging human creativity and artificial intelligence into powerful, intelligent systems.",
  keywords: [
    "Π Lab",
    "AI",
    "Automation",
    "Intelligence",
    "SaaS",
    "Web Development",
    "AI Integration",
  ],
  authors: [{ name: "The Π Lab Team" }],
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://thepilab.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Π Lab - Intelligence Engineered",
    description:
      "An independent automation and AI collective merging human creativity and artificial intelligence.",
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
    description:
      "An independent automation and AI collective merging human creativity and artificial intelligence.",
    images: [
      "https://i.postimg.cc/KzNVDmD8/Gemini-Generated-Image-pnntc2pnntc2pnnt.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Add additional site-wide JSON-LD WebSite schema
export const siteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The Π Lab",
  url: "https://thepilab.io",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://thepilab.io/?s={search_term_string}",
    "query-input": "required name=search_term_string",
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
        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Π Lab",
              url: "https://thepilab.io",
              logo: "https://thepilab.io/favicon.svg",
              sameAs: [
                "https://github.com/the-pi-lab",
                "https://www.linkedin.com/company/the-%CF%80-lab/",
                "mailto:thepilab77@gmail.com"
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "",
                  contactType: "customer support",
                  email: "thepilab77@gmail.com"
                }
              ]
            })
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}

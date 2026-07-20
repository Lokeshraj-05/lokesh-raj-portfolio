import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Loader from "@/components/Loader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://lokeshraj.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lokesh Raj J | AI & Data Science Engineer",
    template: "%s | Lokesh Raj J",
  },
  description:
    "Portfolio of Lokesh Raj J, an AI & Data Science Engineer building intelligent systems through Machine Learning, Computer Vision, and Data Science.",
  keywords: [
    "Lokesh Raj J",
    "AI Engineer",
    "Data Science",
    "Machine Learning",
    "Computer Vision",
    "YOLOv8",
    "Portfolio",
    "Rajalakshmi Institute of Technology",
  ],
  authors: [{ name: "Lokesh Raj J" }],
  creator: "Lokesh Raj J",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Lokesh Raj J | AI & Data Science Engineer",
    description:
      "Building Intelligent Systems Through AI, Computer Vision & Data Science.",
    siteName: "Lokesh Raj J Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lokesh Raj J - AI & Data Science Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokesh Raj J | AI & Data Science Engineer",
    description:
      "Building Intelligent Systems Through AI, Computer Vision & Data Science.",
    images: ["/og-image.jpg"],
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
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body bg-background text-white antialiased`}
      >
        <Loader />
        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}

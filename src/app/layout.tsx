import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohamed Hytham | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React, Next.js, Node.js, and TypeScript.",
  keywords: [
    "developer",
    "react",
    "nextjs",
    "nodejs",
    "typescript",
    "freelancer",
    "egypt",
  ],
  authors: [{ name: "Mohamed Hytham" }],
  openGraph: {
    title: "Mohamed Hytham | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, Node.js, and TypeScript.",
    url: "https://mohamed-hytham.xyz",
    siteName: "Mohamed Hytham",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Hytham | Full-Stack Developer",
    description: "Full-Stack Developer — React, Next.js, Node.js, TypeScript",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dweep Chande | Software Developer",
    template: "%s | Dweep Chande",
  },
  description: "Software Developer specializing in frontend development with React, Angular, and TypeScript. View my projects and experience.",
  keywords: [
    "Dweep Chande",
    "Software Developer",
    "Frontend Developer",
    "React Developer",
    "Angular Developer",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Dweep Manish Chande" }],
  creator: "Dweep Manish Chande",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dweep Chande | Software Developer",
    description: "Software Developer specializing in frontend development with React, Angular, and TypeScript",
    siteName: "Dweep Chande Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dweep Chande | Software Developer",
    description: "Software Developer specializing in frontend development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={geist.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

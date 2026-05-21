import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundOrnaments from "@/components/BackgroundOrnaments";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClickSpark from "@/components/ClickSpark";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "I Gusti Ngurah Anom Hariyadi | Data Scientist & Developer Portfolio",
  description: "Portfolio of I Gusti Ngurah Anom Hariyadi (Anom) - Data Scientist, Web Developer, and Graphic Designer. Graduate of Universitas Udayana, passionate about AI, operating systems, and photography.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-500 relative">
        <ThemeProvider attribute="class" defaultTheme="light">
          <BackgroundOrnaments />
          <ClickSpark />
          <Navbar />
          <div className="flex-grow flex flex-col pt-24 z-10 relative">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

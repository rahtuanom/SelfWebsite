import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundOrnaments from "@/components/BackgroundOrnaments";
import { ThemeProvider } from "@/components/ThemeProvider";

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
  title: "Rahtu Anom | Portfolio",
  description: "Senior Fullstack Developer Portfolio of Rahtu Anom",
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
      <body className="min-h-full flex flex-col bg-transparent text-foreground transition-colors duration-500 relative">
        <ThemeProvider attribute="class" defaultTheme="light">
          <BackgroundOrnaments />
          <Navbar />
          <div className="flex-grow flex flex-col pt-24 z-0">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

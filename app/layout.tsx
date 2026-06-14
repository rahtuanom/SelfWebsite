import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundOrnaments from "@/components/BackgroundOrnaments";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClickSpark from "@/components/ClickSpark";
import Script from "next/script";

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
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "I Gusti Ngurah Anom Hariyadi | Data Scientist & Developer Portfolio",
    template: "%s | Anom Hariyadi Portfolio",
  },
  description: "Portfolio of I Gusti Ngurah Anom Hariyadi (Anom) — Data Scientist, NLP Engineer, Web Developer, and Graphic Designer. IT Graduate of Universitas Udayana with expertise in Machine Learning, Python, Next.js, and creative design. Available for hire.",
  keywords: ["Data Scientist", "NLP Engineer", "Web Developer", "Graphic Designer", "Portfolio", "I Gusti Ngurah Anom Hariyadi", "Anom Hariyadi", "RahtuAnom", "Universitas Udayana", "Machine Learning", "Python", "Next.js", "Full Stack Developer"],
  authors: [{ name: "I Gusti Ngurah Anom Hariyadi", url: "https://rahtuanom.my.id" }],
  creator: "I Gusti Ngurah Anom Hariyadi",
  metadataBase: new URL("https://rahtuanom.my.id"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://rahtuanom.my.id",
    siteName: "Anom Hariyadi Portfolio",
    title: "I Gusti Ngurah Anom Hariyadi — Data Scientist & Developer",
    description: "Data Scientist, NLP Engineer, Web Developer & Graphic Designer. IT Graduate of Universitas Udayana. Explore my projects, skills, and professional journey.",
    images: [
      {
        url: "/baner-linkedin.png",
        width: 1200,
        height: 630,
        alt: "I Gusti Ngurah Anom Hariyadi — Portfolio Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "I Gusti Ngurah Anom Hariyadi — Data Scientist & Developer",
    description: "Data Scientist, NLP Engineer, Web Developer & Graphic Designer. IT Graduate of Universitas Udayana.",
    images: ["/baner-linkedin.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Structured Data for rich search results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "I Gusti Ngurah Anom Hariyadi",
  alternateName: "Anom Hariyadi",
  url: "https://rahtuanom.my.id",
  image: "https://rahtuanom.my.id/SelfPotrait.png",
  jobTitle: "Data Scientist & Web Developer",
  description: "Data Scientist, NLP Engineer, Web Developer, and Graphic Designer. IT Graduate of Universitas Udayana specializing in Machine Learning and Natural Language Processing.",
  email: "rahtuanom@gmail.com",
  sameAs: [
    "https://id.linkedin.com/in/rahtuanomhariyadi",
    "https://github.com/rahtuanom",
    "https://instagram.com/rah2anom",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universitas Udayana",
    department: "Teknologi Informasi",
  },
  knowsAbout: [
    "Data Science",
    "Natural Language Processing",
    "Machine Learning",
    "Web Development",
    "Next.js",
    "Python",
    "Graphic Design",
    "UI/UX Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} h-full antialiased font-sans`}
    >
      <head>
        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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

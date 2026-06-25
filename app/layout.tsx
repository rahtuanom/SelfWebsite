import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundOrnaments from "@/components/BackgroundOrnaments";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClickSpark from "@/components/ClickSpark";
import Script from "next/script";
import PreloaderController from "@/components/PreloaderController";

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (sessionStorage.getItem("hasLoaded") === "true") {
                document.write('<style>#preloader-root { display: none !important; }</style>');
              }
            `,
          }}
        />

        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-500 relative">
        {/* Preloader Statis (Pure HTML/CSS) untuk rendering instan tanpa jeda blank putih */}
        <div
          id="preloader-root"
          style={{
            position: "fixed",
            inset: 0,
            background: "#ffffff",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            color: "#09090b",
            fontFamily: "sans-serif",
            transition: "transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)",
            opacity: 1,
            pointerEvents: "auto",
          }}
        >
          {/* Konten Terpusat Rapat */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", maxWidth: "24rem" }}>
            {/* Nama Atas */}
            <div style={{ fontSize: "11px", letterSpacing: "0.25em", color: "#71717a", fontFamily: "monospace", textTransform: "uppercase", fontWeight: 500 }}>
              Anom Hariyadi
            </div>

            {/* Sapaan Multibahasa Terpusat dengan Animasi CSS Keyframes */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", minHeight: "6rem", width: "100%", margin: "1.25rem 0" }}>
              <div
                className="preloader-greeting-1"
                style={{
                  fontSize: "clamp(2rem, 8vw, 3.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#09090b",
                  fontFamily: "sans-serif",
                  whiteSpace: "nowrap",
                  position: "absolute",
                  opacity: 0,
                  transform: "translateY(15px)",
                }}
              >
                Hello 👋
              </div>
              <div
                className="preloader-greeting-2"
                style={{
                  fontSize: "clamp(2rem, 8vw, 3.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#09090b",
                  fontFamily: "sans-serif",
                  whiteSpace: "nowrap",
                  position: "absolute",
                  opacity: 0,
                  transform: "translateY(15px)",
                }}
              >
                Om Swastyastu 🙏
              </div>
              <div
                className="preloader-greeting-3"
                style={{
                  fontSize: "clamp(2rem, 8vw, 3.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#09090b",
                  fontFamily: "sans-serif",
                  whiteSpace: "nowrap",
                  position: "absolute",
                  opacity: 0,
                  transform: "translateY(15px)",
                }}
              >
                Welcome 🚀
              </div>
            </div>

            {/* Progress Bar & Persentase Berdampingan Rapat */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", maxWidth: "16rem", color: "#71717a", fontFamily: "monospace", fontSize: "11px" }}>
              <div style={{ flexGrow: 1, height: "2px", background: "#f4f4f5", overflow: "hidden", position: "relative", borderRadius: "9999px" }}>
                <div
                  id="preloader-bar"
                  style={{
                    height: "100%",
                    width: "0%",
                    background: "#6366f1",
                    transition: "width 30ms linear",
                  }}
                />
              </div>
              <div id="preloader-percent" style={{ fontWeight: 600, minWidth: "2.5rem", textAlign: "right" }}>000%</div>
            </div>
          </div>
        </div>

        <ThemeProvider attribute="class" defaultTheme="light">
          <PreloaderController />
          <BackgroundOrnaments />
          <ClickSpark />
          <Navbar />
          <div className="flex-grow flex flex-col pt-24 pb-24 md:pb-0 z-10 relative">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

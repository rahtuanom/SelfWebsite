import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import PortfolioPreview from "@/components/PortfolioPreview";
import Contact from "@/components/Contact";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main className="w-full">
        {/* 1. Hero Section */}
        <Hero />
        
        {/* 2. Experience Logs */}
        <Experience />
        
        {/* 3. Portfolio Showcase Preview */}
        <PortfolioPreview />
        
        {/* 4. Contact Section */}
        <Contact />
      </main>
    </PageTransition>
  );
}

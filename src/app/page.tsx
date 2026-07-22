import TopMarquee from "@/components/TopMarquee";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import TrendingSection from "@/components/TrendingSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopMarquee />
      <Nav />
      <main className="flex-grow">
        <HeroSection />
        <TrendingSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

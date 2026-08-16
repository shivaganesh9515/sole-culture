import TopMarquee from '@/components/TopMarquee';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrendingHeat from '@/components/TrendingHeat';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <TopMarquee />
      <Header />
      <main>
        <Hero />
        <TrendingHeat />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Specs from "@/components/Specs";
import BuySection from "@/components/BuySection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <Features />
      <Gallery />
      <Specs />
      <BuySection />
      <FAQ />
      <Footer />
    </>
  );
}

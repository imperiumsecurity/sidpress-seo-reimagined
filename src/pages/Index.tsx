import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Testimonial } from "@/components/Testimonial";
import { Features } from "@/components/Features";
import { Comparison } from "@/components/Comparison";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoTicker />
      <Testimonial />
      <Features />
      <Comparison />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
